/**
 * Creates and configures the OAuth2 service for YouTube Analytics.
 * @return {OAuth2.Service} The configured OAuth2 service.
 */
function getYouTubeAnalyticsService() {
  const scriptProperties = PropertiesService.getScriptProperties();
  const clientId = scriptProperties.getProperty('OAUTH_CLIENT_ID');
  const clientSecret = scriptProperties.getProperty('OAUTH_CLIENT_SECRET');

  if (!clientId || !clientSecret) {
    throw new Error('Credentials not found. Please run storeCredentials() first.');
  }

  return OAuth2.createService('youtubeAnalytics')
      .setAuthorizationBaseUrl('https://accounts.google.com/o/oauth2/auth')
      .setTokenUrl('https://accounts.google.com/o/oauth2/token')
      .setClientId(clientId)
      .setClientSecret(clientSecret)
      .setCallbackFunction('authCallback') // Must match the function name below
      .setPropertyStore(PropertiesService.getUserProperties()) // Store tokens per-user
      .setScope([
        'https://www.googleapis.com/auth/yt-analytics.readonly',
        'https://www.googleapis.com/auth/youtube.readonly'
      ]);
}

/**
 * The callback function that the OAuth2 library calls after authorization.
 */
function authCallback(request) {
  const service = getYouTubeAnalyticsService();
  const authorized = service.handleCallback(request);
  if (authorized) {
    return HtmlService.createHtmlOutput('Success! You can close this tab.');
  } else {
    return HtmlService.createHtmlOutput('Denied. You can close this tab.');
  }
}

/**
 * [USER ACTION REQUIRED] Run this to start the one-time authorization flow.
 */
function runAuthorization() {
  const service = getYouTubeAnalyticsService();
  if (service.hasAccess()) {
    Logger.log('Authorization is already complete.');
  } else {
    const authorizationUrl = service.getAuthorizationUrl();
    Logger.log('Open the following URL to authorize the script:');
    Logger.log(authorizationUrl);
  }
}


/**
 * Main test runner that uses a token from the OAuth2 library.
 * This function is now async to allow for awaiting test results.
 */
async function runTestsWithOAuth2Library() {
  // !!! PASTE YOUR YOUTUBE CHANNEL ID HERE !!!
  const MY_CHANNEL_ID = 'UCxxxxxx'; // <--- REPLACE WITH YOUR REAL CHANNEL ID
  
  if (MY_CHANNEL_ID.includes('xxxxxx')) {
      throw new Error('Please set your Channel ID in runTestsWithOAuth2Library.');
  }
  
  const service = getYouTubeAnalyticsService();
  
  if (!service.hasAccess()) {
    Logger.log('[FAIL] Script does not have authorization. Please run the "runAuthorization" function first and follow the URL in the logs.');
    return;
  }
  
  Logger.log('[START] Running tests with OAuth2 library token...');
  
  // Get the token from the OAuth2 service
  const oauthToken = service.getAccessToken();
  
  // Instantiate your library, passing the token in the config object
  const ytAnalytics = new YoutubeAnalytics({ token: oauthToken });
  try {
    await test_listGroups(ytAnalytics);
    await test_queryReport(ytAnalytics, MY_CHANNEL_ID);
    Logger.log('[SUCCESS] All tests passed using the OAuth2 library token!');
  } catch (e) {
    Logger.log(`[FAIL] A test failed: ${e.message}\\nStack: ${e.stack}`);
  } finally {
    Logger.log('[END] Test run finished.');
  }
}

/**
 * [TEST 1] Tests the ability to list analytics groups for the user.
 * This is a simple test to ensure the endpoint can be reached. It's okay if no groups are returned.
 * @param {YoutubeAnalytics} ytAnalytics The API client instance.
 */
async function test_listGroups(ytAnalytics) {
  Logger.log('  [RUN] test_listGroups');
  
  // Await the response from the async method
  const response = await ytAnalytics.groups.list({ mine: true });

  // The actual API result is now in the 'data' property of the response
  if (response && response.data) {
    const itemCount = response.data.items ? response.data.items.length : 0;
    Logger.log(`    [PASS] Successfully called groups.list. Found ${itemCount} groups.`);
  } else {
    throw new Error(`Failed to call groups.list. Response: ${JSON.stringify(response)}`);
  }
}

/**
 * [TEST 2] Tests the core reports.query method by fetching daily views.
 * @param {YoutubeAnalytics} ytAnalytics The API client instance.
 * @param {string} channelId The YouTube Channel ID to query against.
 */
async function test_queryReport(ytAnalytics, channelId) {
  Logger.log('  [RUN] test_queryReport');

  // Prepare date range for the last 28 days
  const today = new Date();
  const startDate = new Date();
  startDate.setDate(today.getDate() - 28);

  const formatDate = (date) => date.toISOString().slice(0, 10);

  const params = {
    ids: `channel==${channelId}`,
    startDate: formatDate(startDate),
    endDate: formatDate(today),
    metrics: 'views,estimatedMinutesWatched',
    dimensions: 'day',
    sort: '-day' // Sort by most recent day first
  };

  // Await the response from the async method
  const response = await ytAnalytics.reports.query(params);
  const reportData = response.data; // Access the data property

  // A successful response will have 'columnHeaders' and 'rows' properties in the data object.
  if (reportData && reportData.columnHeaders && reportData.rows) {
    Logger.log(`    [PASS] Successfully retrieved a report with ${reportData.rows.length} rows.`);
    if (reportData.rows.length > 0) {
      Logger.log(`      -> Example Row: ${reportData.rows[0].join(', ')}`);
    }
  } else {
    throw new Error(`Failed to retrieve a valid report. Response: ${JSON.stringify(response)}`);
  }
}