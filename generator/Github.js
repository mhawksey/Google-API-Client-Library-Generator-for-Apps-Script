// =========================================================================
// GITHUB BATCH CONFIGURATION
// =========================================================================

/**
 * [USER ACTION REQUIRED]
 * Sets up the necessary credentials for writing to a GitHub repository.
 * 1. Create a GitHub Personal Access Token (PAT) with the "repo" scope.
 * 2. Fill in the details below.
 * 3. Run this function ONCE to securely store the credentials.
 */
function setupGithubCredentials() {
  const GITHUB_USERNAME = process.env.GITHUB_USERNAME;
  const REPO_NAME = process.env.GITHUB_REPO;
  const GITHUB_TOKEN = process.env.GITHUB_PAT;
  
  // *** NEW: CONFIGURE THE OUTPUT FOLDER FOR LIBRARIES ***
  const GITHUB_LIBRARIES_PATH = 'build'; // You can change this to "dist", "build", etc.

  if (GITHUB_USERNAME.startsWith('YOUR_') || GITHUB_TOKEN.startsWith('YOUR_')) {
    throw new Error('Please fill in your GitHub username, repo name, and token in the setupGithubCredentials function.');
  }
  
  const scriptProperties = PropertiesService.getScriptProperties();
  scriptProperties.setProperties({
    'github_username': GITHUB_USERNAME,
    'github_repo': REPO_NAME,
    'github_token': GITHUB_TOKEN,
    'github_libraries_path': GITHUB_LIBRARIES_PATH // Store the new path
  });
  
  Logger.log('✅ GitHub credentials stored successfully in script properties.');
}


// =========================================================================
// CORE BATCH PROCESSING LOGIC
// =========================================================================

function generateAllLibrariesToGithub_() {
  const startTime = new Date().getTime();
  const TIME_LIMIT_MINUTES = 5;
  const scriptProperties = PropertiesService.getScriptProperties();
  const props = scriptProperties.getProperties();

  if (!props.github_username || !props.github_repo || !props.github_token) {
    Logger.log('❌ Error: GitHub credentials not found. Please run setupGithubCredentials() first.');
    return;
  }
  
  const librariesPath = props.github_libraries_path || 'build'; // Use 'build' from your setup
  const allApis = getApiList_();
  if (!allApis) return;
  
  let lastProcessedIndex = parseInt(scriptProperties.getProperty('lastProcessedIndex') || '-1');
  
  for (let i = lastProcessedIndex + 1; i < allApis.length; i++) {
    let api = allApis[i];
    
    if (api.version.startsWith('v')) api.version = api.version.replace(/^v+/, 'v');
    
    // Check for timeout at the beginning of each loop
    const elapsedTime = (new Date().getTime() - startTime) / 1000 / 60;
    if (elapsedTime > TIME_LIMIT_MINUTES) {
      Logger.log(`🕒 Time limit reached. Pausing.`);
      scriptProperties.setProperty('lastProcessedIndex', i - 1);
      ScriptApp.newTrigger('generateAllLibrariesToGithub_').timeBased().after(5 * 60 * 1000).create();
      Logger.log(`➡️ Set trigger to continue from API #${i} in 5 minutes.`);
      return;
    }
    
    Logger.log(`🔄 Processing API ${i + 1} of ${allApis.length}: ${api.name} ${api.version}...`);
    
    // --- Step 1: Fetch discovery doc ONCE ---
    const response = UrlFetchApp.fetch(api.discoveryRestUrl, { muteHttpExceptions: true });
    if (response.getResponseCode() !== 200) {
      Logger.log(`   ⚠️ Skipping due to discovery doc fetch error. Status: ${response.getResponseCode()}`);
      continue;
    }
    const discoveryDoc = JSON.parse(response.getContentText());

    // --- Step 2: Generate TWO versions of the library code ---
    const compactCode = generateCodeFromDiscovery_(discoveryDoc, api.discoveryRestUrl, false);
    const fullCodeWithDocs = generateCodeFromDiscovery_(discoveryDoc, api.discoveryRestUrl, true);
    
    // --- Step 3: Define paths and filenames ---
    const className = generateClassName_(discoveryDoc);
    const folderPath = `${librariesPath}/${className}/${api.version}`;
    
    // Filenames for both versions
    const codeFileName = `${className}.gs`;
    const codeFileNameWithDoc = `${className}.with_docs.gs`;
    
    const codeFilePath = `${folderPath}/${codeFileName}`;
    const codeFilePathWithDoc = `${folderPath}/${codeFileNameWithDoc}`;
    const manifestFilePath = `${folderPath}/appsscript.json`;
    const docFilePath = `${folderPath}/README.md`;

    // --- Step 4: Check and write the COMPACT version ---
    const existingCompactCode = readFromGithub_(codeFilePath);
    let codeHasChanged = false;
    if (!existingCompactCode || existingCompactCode.content !== compactCode) {
      writeToGithub_(codeFilePath, compactCode, `feat: Update ${className} library`, existingCompactCode ? existingCompactCode.sha : null);
      codeHasChanged = true;
    } else {
      Logger.log(`   - ↔️ No changes to ${codeFileName}. Skipping.`);
    }
    
    // --- Step 5: Check and write the FULL version (with JSDoc) ---
    const existingFullCode = readFromGithub_(codeFilePathWithDoc);
    if (!existingFullCode || existingFullCode.content !== fullCodeWithDocs) {
      writeToGithub_(codeFilePathWithDoc, fullCodeWithDocs, `feat: Update ${className} library with JSDoc`, existingFullCode ? existingFullCode.sha : null);
    } else {
      Logger.log(`   - ↔️ No changes to ${codeFileNameWithDoc}. Skipping.`);
    }

    // --- Step 6: Handle Manifest and README (as before) ---
    const allScopes = discoveryDoc.auth?.oauth2?.scopes ? Object.keys(discoveryDoc.auth.oauth2.scopes) : [];
    if (allScopes.length > 0 && !allScopes.includes('https://www.googleapis.com/auth/script.external_request')) {
      allScopes.push('https://www.googleapis.com/auth/script.external_request');
    }
    const manifest = JSON.stringify({ "timeZone": "Etc/GMT", "exceptionLogging": "STACKDRIVER", "runtimeVersion": "V8", "oauthScopes": allScopes }, null, 2);

    const existingManifest = readFromGithub_(manifestFilePath);
    if (!existingManifest || existingManifest.content !== manifest) {
      writeToGithub_(manifestFilePath, manifest, `chore: Update manifest for ${className}`, existingManifest ? existingManifest.sha : null);
    }
    
    const existingDoc = readFromGithub_(docFilePath);
    const docContent = buildMarkdownDoc_(discoveryDoc, existingDoc, codeHasChanged);
    writeToGithub_(docFilePath, docContent, `docs: Update documentation for ${className}`, existingDoc ? existingDoc.sha : null);
  }
  
  Logger.log('✅🎉 All APIs have been processed successfully!');
  stopBatchGeneration_();
}
// =========================================================================
// GITHUB BATCH CONFIGURATION
// =========================================================================


/**
 * Starts the batch process of generating all API libraries and pushing them to GitHub.
 * It will run for ~5 minutes, then create a trigger to continue where it left off.
 */
function startBatchGeneration() {
  stopBatchGeneration_(); // Clear any previous state or triggers before starting
  Logger.log('🚀 Starting new batch generation process...');
  generateAllLibrariesToGithub_();
}

/**
 * Stops the batch generation process by deleting the continuation trigger
 * and clearing the saved state.
 */
function stopBatchGeneration_() {
  const triggers = ScriptApp.getProjectTriggers();
  for (const trigger of triggers) {
    if (trigger.getHandlerFunction() === 'generateAllLibrariesToGithub_') {
      ScriptApp.deleteTrigger(trigger);
    }
  }
  PropertiesService.getScriptProperties().deleteProperty('lastProcessedIndex');
  Logger.log('🛑 Batch generation process stopped and state cleared.');
}


// =========================================================================
// GITHUB & API HELPER FUNCTIONS
// =========================================================================

function readFromGithub_(path) {
  const props = PropertiesService.getScriptProperties().getProperties();
  const apiUrl = `https://api.github.com/repos/${props.github_username}/${props.github_repo}/contents/${path}`;
  const headers = { 'Authorization': `token ${props.github_token}`, 'Accept': 'application/vnd.github.v3+json' };
  
  const response = UrlFetchApp.fetch(apiUrl, { headers: headers, muteHttpExceptions: true });
  if (response.getResponseCode() === 200) {
    const file = JSON.parse(response.getContentText());
    return {
      content: Utilities.newBlob(Utilities.base64Decode(file.content)).getDataAsString(),
      sha: file.sha
    };
  }
  return null; // File doesn't exist
}

function writeToGithub_(path, content, commitMessage, sha) {
  const props = PropertiesService.getScriptProperties().getProperties();
  const apiUrl = `https://api.github.com/repos/${props.github_username}/${props.github_repo}/contents/${path}`;
  
  const payload = {
    message: commitMessage,
    content: Utilities.base64Encode(content, Utilities.Charset.UTF_8),
    sha: sha // If sha is null/undefined, it's a create. If it has a value, it's an update.
  };

  const options = {
    method: 'put',
    headers: { 'Authorization': `token ${props.github_token}`, 'Accept': 'application/vnd.github.v3+json' },
    payload: JSON.stringify(payload),
    muteHttpExceptions: true
  };

  const response = UrlFetchApp.fetch(apiUrl, options);
  const responseCode = response.getResponseCode();
  
  if (responseCode === 201) Logger.log(`   - ✅ Created: ${path}`);
  else if (responseCode === 200) Logger.log(`   - ✅ Updated: ${path}`);
  else Logger.log(`   - ❌ Failed to write ${path}. Code: ${responseCode}. Body: ${response.getContentText()}`);
}

