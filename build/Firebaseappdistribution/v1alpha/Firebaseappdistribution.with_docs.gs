
/**
 * Google Apps Script client library for the Firebase App Distribution API
 * Documentation URL: https://firebase.google.com/products/app-distribution
 * @class
 */
class Firebaseappdistribution {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    // "Private" properties using the underscore convention
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://firebaseappdistribution.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.apps = {};

    /**
     * Get a JWT token
     * @param {string} params.mobilesdkAppId - (Required) Required. Unique id for a Firebase app of the format: {version}:{project_number}:{platform}:{hash(bundle_id)} Example: 1:581234567376:android:aa0a3c7b135e90289
     * @return {object} The API response object.
     */
    this.apps.getJwt = (params) => this._makeRequest('v1alpha/apps/{mobilesdkAppId}/jwt', 'GET', params);

    /**
     * Get the app, if it exists
     * @param {string} params.appView - App view. When unset or set to BASIC, returns an App with everything set except for aab_state. When set to FULL, returns an App with aab_state set.
     * @param {string} params.mobilesdkAppId - (Required) Unique id for a Firebase app of the format: {version}:{project_number}:{platform}:{hash(bundle_id)} Example: 1:581234567376:android:aa0a3c7b135e90289
     * @return {object} The API response object.
     */
    this.apps.get = (params) => this._makeRequest('v1alpha/apps/{mobilesdkAppId}', 'GET', params);

    this.apps.releases = {};

    /**
     * Enable access on a release for testers.
     * @param {string} params.mobilesdkAppId - (Required) Required. Unique id for a Firebase app of the format: {version}:{project_number}:{platform}:{hash(bundle_id)} Example: 1:581234567376:android:aa0a3c7b135e90289
     * @param {string} params.releaseId - (Required) Required. Release identifier
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.apps.releases.enable_access = (params) => this._makeRequest('v1alpha/apps/{mobilesdkAppId}/releases/{releaseId}/enable_access', 'POST', params);

    this.apps.releases.notes = {};

    /**
     * Create release notes on a release.
     * @param {string} params.mobilesdkAppId - (Required) Required. Unique id for a Firebase app of the format: {version}:{project_number}:{platform}:{hash(bundle_id)} Example: 1:581234567376:android:aa0a3c7b135e90289
     * @param {string} params.releaseId - (Required) Required. Release identifier
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.apps.releases.notes.create = (params) => this._makeRequest('v1alpha/apps/{mobilesdkAppId}/releases/{releaseId}/notes', 'POST', params);

    this.apps.release_by_hash = {};

    /**
     * GET Release by binary upload hash
     * @param {string} params.mobilesdkAppId - (Required) Required. Unique id for a Firebase app of the format: {version}:{project_number}:{platform}:{hash(bundle_id)} Example: 1:581234567376:android:aa0a3c7b135e90289
     * @param {string} params.uploadHash - (Required) Required. The hash for the upload
     * @return {object} The API response object.
     */
    this.apps.release_by_hash.get = (params) => this._makeRequest('v1alpha/apps/{mobilesdkAppId}/release_by_hash/{uploadHash}', 'GET', params);

    this.apps.upload_status = {};

    /**
     * GET Binary upload status by token
     * @param {string} params.mobilesdkAppId - (Required) Required. Unique id for a Firebase app of the format: {version}:{project_number}:{platform}:{hash(bundle_id)} Example: 1:581234567376:android:aa0a3c7b135e90289
     * @param {string} params.uploadToken - (Required) Required. The token for the upload
     * @return {object} The API response object.
     */
    this.apps.upload_status.get = (params) => this._makeRequest('v1alpha/apps/{mobilesdkAppId}/upload_status/{uploadToken}', 'GET', params);

    this.apps.testers = {};

    /**
     * Get UDIDs of tester iOS devices in a project
     * @param {string} params.mobilesdkAppId - (Required) Unique id for a Firebase app of the format: {version}:{project_number}:{platform}:{hash(bundle_id)} Example: 1:581234567376:android:aa0a3c7b135e90289
     * @param {string} params.project - The name of the project, which is the parent of testers Format: `projects/{project_number}`
     * @return {object} The API response object.
     */
    this.apps.testers.getTesterUdids = (params) => this._makeRequest('v1alpha/apps/{mobilesdkAppId}/testers:getTesterUdids', 'GET', params);

    this.projects = {};

    /**
     * Get information about the quota for `ReleaseTests`.
     * @param {string} params.name - (Required) Required. The name of the `TestQuota` resource to retrieve. Format: `projects/{project_number}/testQuota`
     * @return {object} The API response object.
     */
    this.projects.getTestQuota = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    this.projects.testers = {};

    /**
     * Get UDIDs of tester iOS devices in a project
     * @param {string} params.mobilesdkAppId - Unique id for a Firebase app of the format: {version}:{project_number}:{platform}:{hash(bundle_id)} Example: 1:581234567376:android:aa0a3c7b135e90289
     * @param {string} params.project - (Required) The name of the project, which is the parent of testers Format: `projects/{project_number}`
     * @return {object} The API response object.
     */
    this.projects.testers.getUdids = (params) => this._makeRequest('v1alpha/{+project}/testers:udids', 'GET', params);

    this.projects.apps = {};

    /**
     * Gets configuration for automated tests.
     * @param {string} params.name - (Required) Required. The name of the `TestConfig` resource to retrieve. Format: `projects/{project_number}/apps/{app_id}/testConfig`
     * @return {object} The API response object.
     */
    this.projects.apps.getTestConfig = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * Updates automated test configuration.
     * @param {string} params.name - (Required) Identifier. The name of the test configuration resource. Format: `projects/{project_number}/apps/{app_id}/testConfig`
     * @param {string} params.updateMask - Optional. The list of fields to update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.apps.updateTestConfig = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);

    this.projects.apps.releases = {};

    this.projects.apps.releases.tests = {};

    /**
     * Run automated test(s) on release.
     * @param {string} params.parent - (Required) Required. The name of the release resource, which is the parent of the test Format: `projects/{project_number}/apps/{app_id}/releases/{release_id}`
     * @param {string} params.releaseTestId - Optional. The ID to use for the test, which will become the final component of the test's resource name. This value should be 4-63 characters, and valid characters are /a-z-/. If it is not provided one will be automatically generated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.apps.releases.tests.create = (params) => this._makeRequest('v1alpha/{+parent}/tests', 'POST', params);

    /**
     * List results for automated tests run on release.
     * @param {integer} params.pageSize - Optional. The maximum number of tests to return. The service may return fewer than this value.
     * @param {string} params.pageToken - Optional. A page token, received from a previous `ListReleaseTests` call. Provide this to retrieve the subsequent page.
     * @param {string} params.parent - (Required) Required. The name of the release resource, which is the parent of the tests Format: `projects/{project_number}/apps/{app_id}/releases/{release_id}`
     * @param {string} params.view - Optional. The requested view on the returned ReleaseTests. Defaults to the basic view.
     * @return {object} The API response object.
     */
    this.projects.apps.releases.tests.list = (params) => this._makeRequest('v1alpha/{+parent}/tests', 'GET', params);

    /**
     * Get results for automated test run on release.
     * @param {string} params.name - (Required) Required. The name of the release test resource. Format: `projects/{project_number}/apps/{app_id}/releases/{release_id}/tests/{test_id}`
     * @return {object} The API response object.
     */
    this.projects.apps.releases.tests.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * Abort automated test run on release.
     * @param {string} params.name - (Required) Required. The name of the release test resource. Format: `projects/{project_number}/apps/{app_id}/releases/{release_id}/tests/{test_id}`
     * @return {object} The API response object.
     */
    this.projects.apps.releases.tests.cancel = (params) => this._makeRequest('v1alpha/{+name}:cancel', 'GET', params);

    this.projects.apps.testCases = {};

    /**
     * Create a new test case.
     * @param {string} params.parent - (Required) Required. The parent resource where this test case will be created. Format: `projects/{project_number}/apps/{app_id}`
     * @param {string} params.testCaseId - Optional. The ID to use for the test case, which will become the final component of the test case's resource name. This value should be 4-63 characters, and valid characters are /a-z-/.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.apps.testCases.create = (params) => this._makeRequest('v1alpha/{+parent}/testCases', 'POST', params);

    /**
     * List test cases.
     * @param {integer} params.pageSize - Optional. The maximum number of test cases to return. The service may return fewer than this value. If unspecified, at most 50 test cases will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - Optional. A page token, received from a previous `ListTestCases` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListTestCases` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent resource from which to list test cases. Format: `projects/{project_number}/apps/{app_id}`
     * @return {object} The API response object.
     */
    this.projects.apps.testCases.list = (params) => this._makeRequest('v1alpha/{+parent}/testCases', 'GET', params);

    /**
     * Get a test case.
     * @param {string} params.name - (Required) Required. The name of the test case resource to retrieve. Format: `projects/{project_number}/apps/{app_id}/testCases/{test_case_id}`
     * @return {object} The API response object.
     */
    this.projects.apps.testCases.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * Update a test case.
     * @param {string} params.name - (Required) Identifier. The name of the test case resource. Format: `projects/{project_number}/apps/{app_id}/testCases/{test_case_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.apps.testCases.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);

    /**
     * Delete a test case.
     * @param {string} params.name - (Required) Required. The name of the test case resource to delete. Format: `projects/{project_number}/apps/{app_id}/testCases/{test_case_id}`
     * @return {object} The API response object.
     */
    this.projects.apps.testCases.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);

    /**
     * Delete test cases.
     * @param {string} params.parent - (Required) Required. The parent resource where these test cases will be deleted. Format: `projects/{project_number}/apps/{app_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.apps.testCases.batchDelete = (params) => this._makeRequest('v1alpha/{+parent}/testCases:batchDelete', 'POST', params);
  }

  /**
   * @private Builds the full request URL and options object.
   */
  _buildRequestDetails(path, httpMethod, params) {
    let url = this._rootUrl + this._servicePath + path;
    const remainingParams = { ...params };
    // Fix: Correctly handle {+param} style parameters and other potential special chars.
    const pathParams = url.match(/{[^{}]+}/g) || [];

    pathParams.forEach(placeholder => {
      const isPlus = placeholder.startsWith('{+');
      const paramName = placeholder.slice(isPlus ? 2 : 1, -1);
      if (Object.prototype.hasOwnProperty.call(remainingParams, paramName)) {
        url = url.replace(placeholder, remainingParams[paramName]);
        delete remainingParams[paramName];
      }
    });

    const queryParts = [];
    for (const key in remainingParams) {
      if (key !== 'resource') {
        queryParts.push(`${encodeURIComponent(key)}=${encodeURIComponent(remainingParams[key])}`);
      }
    }
    if (queryParts.length > 0) {
      url += '?' + queryParts.join('&');
    }

    const options = {
      method: httpMethod,
      headers: { 'Authorization': 'Bearer ' + this._token },
      contentType: 'application/json',
      muteHttpExceptions: true,
    };
    if (params && params.resource) {
      options.payload = JSON.stringify(params.resource);
    }
    
    return { url, options };
  }

  /**
   * @private Makes the HTTP request with exponential backoff for retries.
   */
  _makeRequest(path, httpMethod, params) {
    const { url, options } = this._buildRequestDetails(path, httpMethod, params);

    for (let i = 0; i <= this._backoffConfig.retries; i++) {
      const response = UrlFetchApp.fetch(url, options);
      const responseCode = response.getResponseCode();
      const responseText = response.getContentText(); // Simplified call

      if (responseCode >= 200 && responseCode < 300) {
        return responseText ? JSON.parse(responseText) : {};
      }

      const retryableErrors = [429, 500, 503];
      if (retryableErrors.includes(responseCode) && i < this._backoffConfig.retries) {
        const delay = this._backoffConfig.baseDelay * Math.pow(2, i) + Math.random() * 1000;
        Utilities.sleep(delay);
        continue;
      }

      try {
        // Return parsed error if possible, otherwise a generic error object
        return JSON.parse(responseText);
      } catch (e) {
        return { error: { code: responseCode, message: responseText } };
      }
    }
    
    // This line is technically unreachable if retries >= 0, but good for safety.
    throw new Error('Request failed after multiple retries.');
  }
}
