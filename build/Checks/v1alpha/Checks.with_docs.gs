
/**
 * Google Apps Script client library for the Checks API
 * Documentation URL: https://developers.google.com/checks
 * @class
 */
class Checks {
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
    this._rootUrl = 'https://checks.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.accounts = {};

    this.accounts.apps = {};

    /**
     * Gets an app.
     * @param {string} params.name - (Required) Required. Resource name of the app. Example: `accounts/123/apps/456`
     * @return {object} The API response object.
     */
    this.accounts.apps.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * Lists the apps under the given account.
     * @param {integer} params.pageSize - Optional. The maximum number of results to return. The server may further constrain the maximum number of results returned in a single page. If unspecified, the server will decide the number of results to be returned.
     * @param {string} params.pageToken - Optional. A page token received from a previous `ListApps` call. Provide this to retrieve the subsequent page.
     * @param {string} params.parent - (Required) Required. The parent account. Example: `accounts/123`
     * @return {object} The API response object.
     */
    this.accounts.apps.list = (params) => this._makeRequest('v1alpha/{+parent}/apps', 'GET', params);

    this.accounts.apps.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.accounts.apps.operations.list = (params) => this._makeRequest('v1alpha/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.accounts.apps.operations.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.accounts.apps.operations.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.apps.operations.cancel = (params) => this._makeRequest('v1alpha/{+name}:cancel', 'POST', params);

    /**
     * Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
     * @param {string} params.name - (Required) The name of the operation resource to wait on.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.apps.operations.wait = (params) => this._makeRequest('v1alpha/{+name}:wait', 'POST', params);

    this.accounts.apps.reports = {};

    /**
     * Gets a report. By default, only the name and results_uri fields are returned. You can include other fields by listing them in the `fields` URL query parameter. For example, `?fields=name,checks` will return the name and checks fields.
     * @param {string} params.checksFilter - Optional. An [AIP-160](https://google.aip.dev/160) filter string to filter checks within the report. Only checks that match the filter string are included in the response. Example: `state = FAILED`
     * @param {string} params.name - (Required) Required. Resource name of the report. Example: `accounts/123/apps/456/reports/789`
     * @return {object} The API response object.
     */
    this.accounts.apps.reports.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * Lists reports for the specified app. By default, only the name and results_uri fields are returned. You can include other fields by listing them in the `fields` URL query parameter. For example, `?fields=reports(name,checks)` will return the name and checks fields.
     * @param {string} params.checksFilter - Optional. An [AIP-160](https://google.aip.dev/160) filter string to filter checks within reports. Only checks that match the filter string are included in the response. Example: `state = FAILED`
     * @param {string} params.filter - Optional. An [AIP-160](https://google.aip.dev/160) filter string to filter reports. Example: `appBundle.releaseType = PRE_RELEASE`
     * @param {integer} params.pageSize - Optional. The maximum number of reports to return. If unspecified, at most 10 reports will be returned. The maximum value is 50; values above 50 will be coerced to 50.
     * @param {string} params.pageToken - Optional. A page token received from a previous `ListReports` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListReports` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. Resource name of the app. Example: `accounts/123/apps/456`
     * @return {object} The API response object.
     */
    this.accounts.apps.reports.list = (params) => this._makeRequest('v1alpha/{+parent}/reports', 'GET', params);

    this.accounts.repos = {};

    this.accounts.repos.operations = {};

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.accounts.repos.operations.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    this.accounts.repos.scans = {};

    /**
     * Uploads the results of local Code Compliance analysis and generates a scan of privacy issues. Returns a google.longrunning.Operation containing analysis and findings.
     * @param {string} params.parent - (Required) Required. Resource name of the repo. Example: `accounts/123/repos/456`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.repos.scans.generate = (params) => this._makeRequest('v1alpha/{+parent}/scans:generate', 'POST', params);

    /**
     * Gets a repo scan. By default, only the name and results_uri fields are returned. You can include other fields by listing them in the `fields` URL query parameter. For example, `?fields=name,sources` will return the name and sources fields.
     * @param {string} params.name - (Required) Required. Resource name of the repo scan. Example: `accounts/123/repos/456/scans/789`
     * @return {object} The API response object.
     */
    this.accounts.repos.scans.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * Lists repo scans for the specified repo.
     * @param {string} params.filter - Optional. An [AIP-160](https://google.aip.dev/160) filter string to filter repo scans. Example: `scmMetadata.branch = main`
     * @param {integer} params.pageSize - Optional. The maximum number of repo scans to return. If unspecified, at most 10 repo scans will be returned. The maximum value is 50; values above 50 will be coerced to 50.
     * @param {string} params.pageToken - Optional. A page token received from a previous `ListRepoScans` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListRepoScans` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. Resource name of the repo. Example: `accounts/123/repos/456`
     * @return {object} The API response object.
     */
    this.accounts.repos.scans.list = (params) => this._makeRequest('v1alpha/{+parent}/scans', 'GET', params);

    this.aisafety = {};

    /**
     * Analyze a piece of content with the provided set of policies.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.aisafety.classifyContent = (params) => this._makeRequest('v1alpha/aisafety:classifyContent', 'POST', params);

    this.media = {};

    /**
     * Analyzes the uploaded app bundle and returns a google.longrunning.Operation containing the generated Report. ## Example (upload only) Send a regular POST request with the header `X-Goog-Upload-Protocol: raw`. ``` POST https://checks.googleapis.com/upload/v1alpha/{parent=accounts/*\/apps/*}/reports:analyzeUpload HTTP/1.1 X-Goog-Upload-Protocol: raw Content-Length: Content-Type: application/octet-stream ``` ## Example (upload with metadata) Send a multipart POST request where the first body part contains the metadata JSON and the second body part contains the binary upload. Include the header `X-Goog-Upload-Protocol: multipart`. ``` POST https://checks.googleapis.com/upload/v1alpha/{parent=accounts/*\/apps/*}/reports:analyzeUpload HTTP/1.1 X-Goog-Upload-Protocol: multipart Content-Length: ? Content-Type: multipart/related; boundary=BOUNDARY --BOUNDARY Content-Type: application/json {"code_reference_id":"db5bcc20f94055fb5bc08cbb9b0e7a5530308786"} --BOUNDARY --BOUNDARY-- ``` *Note:* Metadata-only requests are not supported.
     * @param {string} params.parent - (Required) Required. Resource name of the app. Example: `accounts/123/apps/456`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.media.upload = (params) => this._makeRequest('v1alpha/{+parent}/reports:analyzeUpload', 'POST', params);
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
