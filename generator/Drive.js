// =========================================================================
// MAIN LIBRARY GENERATOR
// =========================================================================

/**
 * Creates a complete Google Apps Script library project for a specified Google API.
 *
 * @param {string} apiName The name of the API (e.g., 'drive', 'chat').
 * @param {string} apiVersion The version of the API (e.g., 'v3', 'v1').
 * @param {object} [options] - Optional configuration object.
 * @param {boolean} [options.includeJsDoc=false] - Whether to include JSDoc comments for autocomplete.
 */
function createCompleteApiLibrary_(apiName, apiVersion, options) {
  const allApis = getApiList_();
  if (!allApis) return;

  const api = allApis.find(a => a.name === apiName && a.version === apiVersion);
  if (!api) {
    Logger.log(`❌ Could not find API matching name '${apiName}' and version '${apiVersion}'.`);
    return;
  }
  
  const libraryContent = generateLibraryContent_(api.discoveryRestUrl, options);
  if (!libraryContent) return;

  try {
    // *** NEW: Use the smart class name for the project title ***
    const projectTitle = generateClassName_(libraryContent.discoveryDoc) + 'Lib';
    
    const projectContent = {
      files: [
        { name: projectTitle.replace('Lib',''), type: 'SERVER_JS', source: libraryContent.libraryCode },
        { name: 'appsscript', type: 'JSON', source: libraryContent.manifest }
      ]
    };

    const resource = { name: projectTitle, mimeType: 'application/vnd.google-apps.script+json' };
    const blob = Utilities.newBlob(JSON.stringify(projectContent), 'application/vnd.google-apps.script+json');
    const newFile = Drive.Files.create(resource, blob);

    Logger.log(`Successfully created file: ${newFile.name} (ID: ${newFile.id})`);
  } catch (e) {
    Logger.log(`Failed to create file: ${e.toString()}`);
  }
}