
/**
 * Google Apps Script client library for the Security Posture API
 * Documentation URL: https://cloud.google.com/security-command-center
 * @class
 */
class Securityposture {
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
    this._rootUrl = 'https://securityposture.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.organizations = {};

    this.organizations.locations = {};

    this.organizations.locations.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.organizations.locations.operations.list = (params) => this._makeRequest('v1/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.organizations.locations.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.organizations.locations.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.locations.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);

    this.organizations.locations.postures = {};

    /**
     * Lists the most recent revisions of all Posture resources in a specified organization and location.
     * @param {string} params.filter - Optional. A filter to apply to the list of postures, in the format defined in [AIP-160: Filtering](https://google.aip.dev/160).
     * @param {integer} params.pageSize - The maximum number of postures to return. The default value is `500`. If you exceed the maximum value of `1000`, then the service uses the maximum value.
     * @param {string} params.pageToken - A pagination token returned from a previous request to list postures. Provide this token to retrieve the next page of results.
     * @param {string} params.parent - (Required) Required. The parent resource name, in the format `organizations/{organization}/locations/global`.
     * @return {object} The API response object.
     */
    this.organizations.locations.postures.list = (params) => this._makeRequest('v1/{+parent}/postures', 'GET', params);

    /**
     * Lists all revisions of a single Posture.
     * @param {string} params.name - (Required) Required. The name of the Posture, in the format `organizations/{organization}/locations/global/postures/{posture_id}`.
     * @param {integer} params.pageSize - Optional. The maximum number of posture revisions to return. The default value is `500`. If you exceed the maximum value of `1000`, then the service uses the maximum value.
     * @param {string} params.pageToken - Optional. A pagination token from a previous request to list posture revisions. Provide this token to retrieve the next page of results.
     * @return {object} The API response object.
     */
    this.organizations.locations.postures.listRevisions = (params) => this._makeRequest('v1/{+name}:listRevisions', 'GET', params);

    /**
     * Gets a single revision of a Posture.
     * @param {string} params.name - (Required) Required. The name of the Posture, in the format `organizations/{organization}/locations/global/postures/{posture_id}`.
     * @param {string} params.revisionId - Optional. The posture revision to retrieve. If not specified, the most recently updated revision is retrieved.
     * @return {object} The API response object.
     */
    this.organizations.locations.postures.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new Posture.
     * @param {string} params.parent - (Required) Required. The parent resource name, in the format `organizations/{organization}/locations/global`.
     * @param {string} params.postureId - Required. An identifier for the posture.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.locations.postures.create = (params) => this._makeRequest('v1/{+parent}/postures', 'POST', params);

    /**
     * Updates a revision of an existing Posture. If the posture revision that you update is currently deployed, then a new revision of the posture is created. To prevent concurrent updates from overwriting each other, always follow the read-modify-write pattern when you update a posture: 1. Call GetPosture to get the current version of the posture. 2. Update the fields in the posture as needed. 3. Call UpdatePosture to update the posture. Ensure that your request includes the `etag` value from the GetPosture response. **Important:** If you omit the `etag` when you call UpdatePosture, then the updated posture unconditionally overwrites the existing posture.
     * @param {string} params.name - (Required) Required. Identifier. The name of the posture, in the format `organizations/{organization}/locations/global/postures/{posture_id}`.
     * @param {string} params.revisionId - Required. The revision ID of the posture to update. If the posture revision that you update is currently deployed, then a new revision of the posture is created.
     * @param {string} params.updateMask - Required. The fields in the Posture to update. You can update only the following fields: * Posture.description * Posture.policy_sets * Posture.state
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.locations.postures.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes all revisions of a Posture. You can only delete a posture if none of its revisions are deployed.
     * @param {string} params.etag - Optional. An opaque identifier for the current version of the posture. If you provide this value, then it must match the existing value. If the values don't match, then the request fails with an ABORTED error. If you omit this value, then the posture is deleted regardless of its current `etag` value.
     * @param {string} params.name - (Required) Required. The name of the Posture, in the format `organizations/{organization}/locations/global/postures/{posture_id}`.
     * @return {object} The API response object.
     */
    this.organizations.locations.postures.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Extracts existing policies from an organization, folder, or project, and applies them to another organization, folder, or project as a Posture. If the other organization, folder, or project already has a posture, then the result of the long-running operation is an ALREADY_EXISTS error.
     * @param {string} params.parent - (Required) Required. The parent resource name, in the format `organizations/{organization}/locations/global`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.locations.postures.extract = (params) => this._makeRequest('v1/{+parent}/postures:extract', 'POST', params);

    this.organizations.locations.postureDeployments = {};

    /**
     * Lists every PostureDeployment in a project and location.
     * @param {string} params.filter - Optional. A filter to apply to the list of postures, in the format defined in [AIP-160: Filtering](https://google.aip.dev/160).
     * @param {integer} params.pageSize - Optional. The maximum number of posture deployments to return. The default value is `500`. If you exceed the maximum value of `1000`, then the service uses the maximum value.
     * @param {string} params.pageToken - Optional. A pagination token returned from a previous request to list posture deployments. Provide this token to retrieve the next page of results.
     * @param {string} params.parent - (Required) Required. The parent resource name, in the format `organizations/{organization}/locations/global`.
     * @return {object} The API response object.
     */
    this.organizations.locations.postureDeployments.list = (params) => this._makeRequest('v1/{+parent}/postureDeployments', 'GET', params);

    /**
     * Gets details for a PostureDeployment.
     * @param {string} params.name - (Required) Required. The name of the PostureDeployment, in the format `organizations/{organization}/locations/global/postureDeployments/{posture_deployment_id}`.
     * @return {object} The API response object.
     */
    this.organizations.locations.postureDeployments.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new PostureDeployment in a given project and location.
     * @param {string} params.parent - (Required) Required. The parent resource name, in the format `organizations/{organization}/locations/global`.
     * @param {string} params.postureDeploymentId - Required. An identifier for the posture deployment.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.locations.postureDeployments.create = (params) => this._makeRequest('v1/{+parent}/postureDeployments', 'POST', params);

    /**
     * Updates an existing PostureDeployment. To prevent concurrent updates from overwriting each other, always follow the read-modify-write pattern when you update a posture deployment: 1. Call GetPostureDeployment to get the current version of the deployment. 2. Update the fields in the deployment as needed. 3. Call UpdatePostureDeployment to update the deployment. Ensure that your request includes the `etag` value from the GetPostureDeployment response. **Important:** If you omit the `etag` when you call UpdatePostureDeployment, then the updated deployment unconditionally overwrites the existing deployment.
     * @param {string} params.name - (Required) Required. Identifier. The name of the posture deployment, in the format `organizations/{organization}/locations/global/postureDeployments/{deployment_id}`.
     * @param {string} params.updateMask - Required. The fields in the PostureDeployment to update. You can update only the following fields: * PostureDeployment.posture_id * PostureDeployment.posture_revision_id
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.locations.postureDeployments.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a PostureDeployment.
     * @param {string} params.etag - Optional. An opaque identifier for the current version of the posture deployment. If you provide this value, then it must match the existing value. If the values don't match, then the request fails with an ABORTED error. If you omit this value, then the posture deployment is deleted regardless of its current `etag` value.
     * @param {string} params.name - (Required) Required. The name of the posture deployment, in the format `organizations/{organization}/locations/global/postureDeployments/{posture_id}`.
     * @return {object} The API response object.
     */
    this.organizations.locations.postureDeployments.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.organizations.locations.postureTemplates = {};

    /**
     * Lists every PostureTemplate in a given organization and location.
     * @param {string} params.filter - Optional. A filter to apply to the list of postures, in the format defined in [AIP-160: Filtering](https://google.aip.dev/160).
     * @param {integer} params.pageSize - Optional. The maximum number of posture templates to return. The default value is `500`. If you exceed the maximum value of `1000`, then the service uses the maximum value.
     * @param {string} params.pageToken - Optional. A pagination token returned from a previous request to list posture templates. Provide this token to retrieve the next page of results.
     * @param {string} params.parent - (Required) Required. The parent resource name, in the format `organizations/{organization}/locations/global`.
     * @return {object} The API response object.
     */
    this.organizations.locations.postureTemplates.list = (params) => this._makeRequest('v1/{+parent}/postureTemplates', 'GET', params);

    /**
     * Gets a single revision of a PostureTemplate.
     * @param {string} params.name - (Required) Required. The name of the PostureTemplate, in the format `organizations/{organization}/locations/global/postureTemplates/{posture_template}`.
     * @param {string} params.revisionId - Optional. The posture template revision to retrieve. If not specified, the most recently updated revision is retrieved.
     * @return {object} The API response object.
     */
    this.organizations.locations.postureTemplates.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.organizations.locations.reports = {};

    /**
     * Lists every Report in a given organization and location.
     * @param {string} params.filter - Optional. A filter to apply to the list of reports, in the format defined in [AIP-160: Filtering](https://google.aip.dev/160).
     * @param {integer} params.pageSize - Optional. The maximum number of reports to return. The default value is `500`. If you exceed the maximum value of `1000`, then the service uses the maximum value.
     * @param {string} params.pageToken - Optional. A pagination token returned from a previous request to list reports. Provide this token to retrieve the next page of results.
     * @param {string} params.parent - (Required) Required. The parent resource name, in the format `organizations/{organization}/locations/global`.
     * @return {object} The API response object.
     */
    this.organizations.locations.reports.list = (params) => this._makeRequest('v1/{+parent}/reports', 'GET', params);

    /**
     * Gets details for a Report.
     * @param {string} params.name - (Required) Required. The name of the report, in the format `organizations/{organization}/locations/global/reports/{report_id}`.
     * @return {object} The API response object.
     */
    this.organizations.locations.reports.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Validates a specified infrastructure-as-code (IaC) configuration, and creates a Report with the validation results. Only Terraform configurations are supported. Only modified assets are validated.
     * @param {string} params.parent - (Required) Required. The parent resource name, in the format `organizations/{organization}/locations/global`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.locations.reports.createIaCValidationReport = (params) => this._makeRequest('v1/{+parent}/reports:createIaCValidationReport', 'POST', params);

    this.projects = {};

    this.projects.locations = {};

    /**
     * Lists information about the supported locations for this service.
     * @param {string} params.extraLocationTypes - Optional. Do not use this field. It is unsupported and is ignored unless explicitly documented otherwise. This is primarily for internal usage.
     * @param {string} params.filter - A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
     * @param {string} params.name - (Required) The resource that owns the locations collection, if applicable.
     * @param {integer} params.pageSize - The maximum number of results to return. If not set, the service selects a default.
     * @param {string} params.pageToken - A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
     * @return {object} The API response object.
     */
    this.projects.locations.list = (params) => this._makeRequest('v1/{+name}/locations', 'GET', params);

    /**
     * Gets information about a location.
     * @param {string} params.name - (Required) Resource name for the location.
     * @return {object} The API response object.
     */
    this.projects.locations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
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
