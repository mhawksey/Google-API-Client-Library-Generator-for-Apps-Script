
/**
 * Google Apps Script client library for the Cloud Testing API
 * Documentation URL: https://firebase.google.com/docs/test-lab/
 * @class
 */
class Testing {
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
    this._rootUrl = 'https://testing.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.testMatrices = {};

    /**
     * Creates and runs a matrix of tests according to the given specifications. Unsupported environments will be returned in the state UNSUPPORTED. A test matrix is limited to use at most 2000 devices in parallel. The returned matrix will not yet contain the executions that will be created for this matrix. Execution creation happens later on and will require a call to GetTestMatrix. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed or if the matrix tries to use too many simultaneous devices.
     * @param {string} params.projectId - (Required) The GCE project under which this job will run.
     * @param {string} params.requestId - A string id used to detect duplicated requests. Ids are automatically scoped to a project, so users should ensure the ID is unique per-project. A UUID is recommended. Optional, but strongly recommended.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.testMatrices.create = (params) => this._makeRequest('v1/projects/{projectId}/testMatrices', 'POST', params);

    /**
     * Checks the status of a test matrix and the executions once they are created. The test matrix will contain the list of test executions to run if and only if the resultStorage.toolResultsExecution fields have been populated. Note: Flaky test executions may be added to the matrix at a later stage. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Test Matrix does not exist
     * @param {string} params.projectId - (Required) Cloud project that owns the test matrix.
     * @param {string} params.testMatrixId - (Required) Unique test matrix id which was assigned by the service.
     * @return {object} The API response object.
     */
    this.projects.testMatrices.get = (params) => this._makeRequest('v1/projects/{projectId}/testMatrices/{testMatrixId}', 'GET', params);

    /**
     * Cancels unfinished test executions in a test matrix. This call returns immediately and cancellation proceeds asynchronously. If the matrix is already final, this operation will have no effect. May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Test Matrix does not exist
     * @param {string} params.projectId - (Required) Cloud project that owns the test.
     * @param {string} params.testMatrixId - (Required) Test matrix that will be canceled.
     * @return {object} The API response object.
     */
    this.projects.testMatrices.cancel = (params) => this._makeRequest('v1/projects/{projectId}/testMatrices/{testMatrixId}:cancel', 'POST', params);

    this.projects.deviceSessions = {};

    /**
     * POST /v1/projects/{project_id}/deviceSessions
     * @param {string} params.parent - (Required) Required. The Compute Engine project under which this device will be allocated. "projects/{project_id}"
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.deviceSessions.create = (params) => this._makeRequest('v1/{+parent}/deviceSessions', 'POST', params);

    /**
     * GET /v1/projects/{project_id}/deviceSessions Lists device Sessions owned by the project user.
     * @param {string} params.filter - Optional. If specified, responses will be filtered by the given filter. Allowed fields are: session_state.
     * @param {integer} params.pageSize - Optional. The maximum number of DeviceSessions to return.
     * @param {string} params.pageToken - Optional. A continuation token for paging.
     * @param {string} params.parent - (Required) Required. The name of the parent to request, e.g. "projects/{project_id}"
     * @return {object} The API response object.
     */
    this.projects.deviceSessions.list = (params) => this._makeRequest('v1/{+parent}/deviceSessions', 'GET', params);

    /**
     * GET /v1/projects/{project_id}/deviceSessions/{device_session_id} Return a DeviceSession, which documents the allocation status and whether the device is allocated. Clients making requests from this API must poll GetDeviceSession.
     * @param {string} params.name - (Required) Required. Name of the DeviceSession, e.g. "projects/{project_id}/deviceSessions/{session_id}"
     * @return {object} The API response object.
     */
    this.projects.deviceSessions.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * POST /v1/projects/{project_id}/deviceSessions/{device_session_id}:cancel Changes the DeviceSession to state FINISHED and terminates all connections. Canceled sessions are not deleted and can be retrieved or listed by the user until they expire based on the 28 day deletion policy.
     * @param {string} params.name - (Required) Required. Name of the DeviceSession, e.g. "projects/{project_id}/deviceSessions/{session_id}"
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.deviceSessions.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);

    /**
     * PATCH /v1/projects/{projectId}/deviceSessions/deviceSessionId}:updateDeviceSession Updates the current device session to the fields described by the update_mask.
     * @param {string} params.name - (Required) Optional. Name of the DeviceSession, e.g. "projects/{project_id}/deviceSessions/{session_id}"
     * @param {string} params.updateMask - Required. The list of fields to update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.deviceSessions.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.applicationDetailService = {};

    /**
     * Gets the details of an Android application APK.
     * @param {string} params.bundleLocation.gcsPath - A path to a file in Google Cloud Storage. Example: gs://build-app-1414623860166/app%40debug-unaligned.apk These paths are expected to be url encoded (percent encoding)
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.applicationDetailService.getApkDetails = (params) => this._makeRequest('v1/applicationDetailService/getApkDetails', 'POST', params);

    this.testEnvironmentCatalog = {};

    /**
     * Gets the catalog of supported test environments. May return any of the following canonical error codes: - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the environment type does not exist - INTERNAL - if an internal error occurred
     * @param {string} params.environmentType - (Required) Required. The type of environment that should be listed.
     * @param {boolean} params.includeViewableModels - Optional. Whether to include viewable only models in the response. This is only applicable for Android models.
     * @param {string} params.projectId - For authorization, the cloud project requesting the TestEnvironmentCatalog.
     * @return {object} The API response object.
     */
    this.testEnvironmentCatalog.get = (params) => this._makeRequest('v1/testEnvironmentCatalog/{environmentType}', 'GET', params);
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
