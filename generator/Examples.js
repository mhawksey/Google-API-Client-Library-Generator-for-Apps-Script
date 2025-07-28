// =========================================================================
// EXAMPLES FOR LISTING APIS
// =========================================================================

function example_listAllApis() {
  listAvailableApis_();
}
function example_searchForDriveApis() {
  listAvailableApis_('drive');
}
function example_searchForChatApis() {
  listAvailableApis_('chat');
}

// =========================================================================
// EXAMPLE USAGE
// =========================================================================

/**
 * Runs the generator to create the Drive library WITHOUT JSDoc.
 */
function example_createDriveLibrary() {
  createCompleteApiLibrary_('drive', 'v3', { includeJsDoc: true });
}

/**
 * Runs the generator to create the Chat library WITHOUT JSDoc (default).
 */
function example_createChatLibrary() {
  createCompleteApiLibrary_('chat', 'v1');
}

function example_firebase(){
    createCompleteApiLibrary_('safebrowsing', 'v5')
}

/**
 * Runs the generator to create the Chat library WITH JSDoc for autocomplete.
 */
function example_createChatLibraryWithDocs() {
  createCompleteApiLibrary_('chat', 'v1', { includeJsDoc: true });
}

/**
 * Runs the generator to create a library for the Google BigQuery API v2.
 */
function example_createBigQueryLibrary() {
  createCompleteApiLibrary_('bigquery', 'v2', { includeJsDoc: false });
}

function example_createYoutubeAnalyticsLibraryWithDocs(){
    createCompleteApiLibrary_('youtubeAnalytics', 'v2', { includeJsDoc: true });
}