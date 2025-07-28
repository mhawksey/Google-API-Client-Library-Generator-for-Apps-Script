
/**
 * Google Apps Script client library for the Policy Simulator API
 * Documentation URL: https://cloud.google.com/iam/docs/simulating-access
 * @class
 */
class Policysimulator {
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
    this._rootUrl = 'https://policysimulator.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.operations.list = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects = {};

    this.projects.locations = {};

    this.projects.locations.orgPolicyViolationsPreviews = {};

    this.projects.locations.orgPolicyViolationsPreviews.operations = {};

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.orgPolicyViolationsPreviews.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.accessPolicySimulations = {};

    this.projects.locations.accessPolicySimulations.operations = {};

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.accessPolicySimulations.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.replays = {};

    /**
     * Gets the specified Replay. Each `Replay` is available for at least 7 days.
     * @param {string} params.name - (Required) Required. The name of the Replay to retrieve, in the following format: `{projects|folders|organizations}/{resource-id}/locations/global/replays/{replay-id}`, where `{resource-id}` is the ID of the project, folder, or organization that owns the `Replay`. Example: `projects/my-example-project/locations/global/replays/506a5f7f-38ce-4d7d-8e03-479ce1833c36`
     * @return {object} The API response object.
     */
    this.projects.locations.replays.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates and starts a Replay using the given ReplayConfig.
     * @param {string} params.parent - (Required) Required. The parent resource where this Replay will be created. This resource must be a project, folder, or organization with a location. Example: `projects/my-example-project/locations/global`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.replays.create = (params) => this._makeRequest('v1/{+parent}/replays', 'POST', params);

    this.projects.locations.replays.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.replays.operations.list = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.replays.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.replays.results = {};

    /**
     * Lists the results of running a Replay.
     * @param {integer} params.pageSize - The maximum number of ReplayResult objects to return. Defaults to 5000. The maximum value is 5000; values above 5000 are rounded down to 5000.
     * @param {string} params.pageToken - A page token, received from a previous Simulator.ListReplayResults call. Provide this token to retrieve the next page of results. When paginating, all other parameters provided to [Simulator.ListReplayResults[] must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The Replay whose results are listed, in the following format: `{projects|folders|organizations}/{resource-id}/locations/global/replays/{replay-id}` Example: `projects/my-project/locations/global/replays/506a5f7f-38ce-4d7d-8e03-479ce1833c36`
     * @return {object} The API response object.
     */
    this.projects.locations.replays.results.list = (params) => this._makeRequest('v1/{+parent}/results', 'GET', params);

    this.folders = {};

    this.folders.locations = {};

    this.folders.locations.orgPolicyViolationsPreviews = {};

    this.folders.locations.orgPolicyViolationsPreviews.operations = {};

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.folders.locations.orgPolicyViolationsPreviews.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.folders.locations.accessPolicySimulations = {};

    this.folders.locations.accessPolicySimulations.operations = {};

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.folders.locations.accessPolicySimulations.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.folders.locations.replays = {};

    /**
     * Gets the specified Replay. Each `Replay` is available for at least 7 days.
     * @param {string} params.name - (Required) Required. The name of the Replay to retrieve, in the following format: `{projects|folders|organizations}/{resource-id}/locations/global/replays/{replay-id}`, where `{resource-id}` is the ID of the project, folder, or organization that owns the `Replay`. Example: `projects/my-example-project/locations/global/replays/506a5f7f-38ce-4d7d-8e03-479ce1833c36`
     * @return {object} The API response object.
     */
    this.folders.locations.replays.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates and starts a Replay using the given ReplayConfig.
     * @param {string} params.parent - (Required) Required. The parent resource where this Replay will be created. This resource must be a project, folder, or organization with a location. Example: `projects/my-example-project/locations/global`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.folders.locations.replays.create = (params) => this._makeRequest('v1/{+parent}/replays', 'POST', params);

    this.folders.locations.replays.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.folders.locations.replays.operations.list = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.folders.locations.replays.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.folders.locations.replays.results = {};

    /**
     * Lists the results of running a Replay.
     * @param {integer} params.pageSize - The maximum number of ReplayResult objects to return. Defaults to 5000. The maximum value is 5000; values above 5000 are rounded down to 5000.
     * @param {string} params.pageToken - A page token, received from a previous Simulator.ListReplayResults call. Provide this token to retrieve the next page of results. When paginating, all other parameters provided to [Simulator.ListReplayResults[] must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The Replay whose results are listed, in the following format: `{projects|folders|organizations}/{resource-id}/locations/global/replays/{replay-id}` Example: `projects/my-project/locations/global/replays/506a5f7f-38ce-4d7d-8e03-479ce1833c36`
     * @return {object} The API response object.
     */
    this.folders.locations.replays.results.list = (params) => this._makeRequest('v1/{+parent}/results', 'GET', params);

    this.organizations = {};

    this.organizations.locations = {};

    this.organizations.locations.accessPolicySimulations = {};

    this.organizations.locations.accessPolicySimulations.operations = {};

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.organizations.locations.accessPolicySimulations.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.organizations.locations.replays = {};

    /**
     * Gets the specified Replay. Each `Replay` is available for at least 7 days.
     * @param {string} params.name - (Required) Required. The name of the Replay to retrieve, in the following format: `{projects|folders|organizations}/{resource-id}/locations/global/replays/{replay-id}`, where `{resource-id}` is the ID of the project, folder, or organization that owns the `Replay`. Example: `projects/my-example-project/locations/global/replays/506a5f7f-38ce-4d7d-8e03-479ce1833c36`
     * @return {object} The API response object.
     */
    this.organizations.locations.replays.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates and starts a Replay using the given ReplayConfig.
     * @param {string} params.parent - (Required) Required. The parent resource where this Replay will be created. This resource must be a project, folder, or organization with a location. Example: `projects/my-example-project/locations/global`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.locations.replays.create = (params) => this._makeRequest('v1/{+parent}/replays', 'POST', params);

    this.organizations.locations.replays.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.organizations.locations.replays.operations.list = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.organizations.locations.replays.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.organizations.locations.replays.results = {};

    /**
     * Lists the results of running a Replay.
     * @param {integer} params.pageSize - The maximum number of ReplayResult objects to return. Defaults to 5000. The maximum value is 5000; values above 5000 are rounded down to 5000.
     * @param {string} params.pageToken - A page token, received from a previous Simulator.ListReplayResults call. Provide this token to retrieve the next page of results. When paginating, all other parameters provided to [Simulator.ListReplayResults[] must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The Replay whose results are listed, in the following format: `{projects|folders|organizations}/{resource-id}/locations/global/replays/{replay-id}` Example: `projects/my-project/locations/global/replays/506a5f7f-38ce-4d7d-8e03-479ce1833c36`
     * @return {object} The API response object.
     */
    this.organizations.locations.replays.results.list = (params) => this._makeRequest('v1/{+parent}/results', 'GET', params);

    this.organizations.locations.orgPolicyViolationsPreviews = {};

    /**
     * ListOrgPolicyViolationsPreviews lists each OrgPolicyViolationsPreview in an organization. Each OrgPolicyViolationsPreview is available for at least 7 days.
     * @param {integer} params.pageSize - Optional. The maximum number of items to return. The service may return fewer than this value. If unspecified, at most 5 items will be returned. The maximum value is 10; values above 10 will be coerced to 10.
     * @param {string} params.pageToken - Optional. A page token, received from a previous call. Provide this to retrieve the subsequent page. When paginating, all other parameters must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent the violations are scoped to. Format: `organizations/{organization}/locations/{location}` Example: `organizations/my-example-org/locations/global`
     * @return {object} The API response object.
     */
    this.organizations.locations.orgPolicyViolationsPreviews.list = (params) => this._makeRequest('v1/{+parent}/orgPolicyViolationsPreviews', 'GET', params);

    /**
     * GetOrgPolicyViolationsPreview gets the specified OrgPolicyViolationsPreview. Each OrgPolicyViolationsPreview is available for at least 7 days.
     * @param {string} params.name - (Required) Required. The name of the OrgPolicyViolationsPreview to get.
     * @return {object} The API response object.
     */
    this.organizations.locations.orgPolicyViolationsPreviews.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * CreateOrgPolicyViolationsPreview creates an OrgPolicyViolationsPreview for the proposed changes in the provided OrgPolicyViolationsPreview.OrgPolicyOverlay. The changes to OrgPolicy are specified by this `OrgPolicyOverlay`. The resources to scan are inferred from these specified changes.
     * @param {string} params.orgPolicyViolationsPreviewId - Optional. An optional user-specified ID for the OrgPolicyViolationsPreview. If not provided, a random ID will be generated.
     * @param {string} params.parent - (Required) Required. The organization under which this OrgPolicyViolationsPreview will be created. Example: `organizations/my-example-org/locations/global`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.locations.orgPolicyViolationsPreviews.create = (params) => this._makeRequest('v1/{+parent}/orgPolicyViolationsPreviews', 'POST', params);

    this.organizations.locations.orgPolicyViolationsPreviews.operations = {};

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.organizations.locations.orgPolicyViolationsPreviews.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.organizations.locations.orgPolicyViolationsPreviews.orgPolicyViolations = {};

    /**
     * ListOrgPolicyViolations lists the OrgPolicyViolations that are present in an OrgPolicyViolationsPreview.
     * @param {integer} params.pageSize - Optional. The maximum number of items to return. The service may return fewer than this value. If unspecified, at most 1000 items will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - Optional. A page token, received from a previous call. Provide this to retrieve the subsequent page. When paginating, all other parameters must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The OrgPolicyViolationsPreview to get OrgPolicyViolations from. Format: organizations/{organization}/locations/{location}/orgPolicyViolationsPreviews/{orgPolicyViolationsPreview}
     * @return {object} The API response object.
     */
    this.organizations.locations.orgPolicyViolationsPreviews.orgPolicyViolations.list = (params) => this._makeRequest('v1/{+parent}/orgPolicyViolations', 'GET', params);
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
        // Fix: URI-encode path parameters for safety.
        url = url.replace(placeholder, encodeURIComponent(remainingParams[paramName]));
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
