
/**
 * Google Apps Script client library for the Apps Script API
 * Documentation URL: https://developers.google.com/apps-script/api/
 * @class
 */
class Script {
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
    this._rootUrl = 'https://script.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    /**
     * Get metrics data for scripts, such as number of executions and active users.
     * @param {string} params.metricsFilter.deploymentId - Optional field indicating a specific deployment to retrieve metrics from.
     * @param {string} params.metricsGranularity - Required field indicating what granularity of metrics are returned.
     * @param {string} params.scriptId - (Required) Required field indicating the script to get metrics for.
     * @return {object} The API response object.
     */
    this.projects.getMetrics = (params) => this._makeRequest('v1/projects/{scriptId}/metrics', 'GET', params);

    /**
     * Creates a new, empty script project with no script files and a base manifest file.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.create = (params) => this._makeRequest('v1/projects', 'POST', params);

    /**
     * Gets a script project's metadata.
     * @param {string} params.scriptId - (Required) The script project's Drive ID.
     * @return {object} The API response object.
     */
    this.projects.get = (params) => this._makeRequest('v1/projects/{scriptId}', 'GET', params);

    /**
     * Gets the content of the script project, including the code source and metadata for each script file.
     * @param {string} params.scriptId - (Required) The script project's Drive ID.
     * @param {integer} params.versionNumber - The version number of the project to retrieve. If not provided, the project's HEAD version is returned.
     * @return {object} The API response object.
     */
    this.projects.getContent = (params) => this._makeRequest('v1/projects/{scriptId}/content', 'GET', params);

    /**
     * Updates the content of the specified script project. This content is stored as the HEAD version, and is used when the script is executed as a trigger, in the script editor, in add-on preview mode, or as a web app or Apps Script API in development mode. This clears all the existing files in the project.
     * @param {string} params.scriptId - (Required) The script project's Drive ID.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.updateContent = (params) => this._makeRequest('v1/projects/{scriptId}/content', 'PUT', params);

    this.projects.deployments = {};

    /**
     * Creates a deployment of an Apps Script project.
     * @param {string} params.scriptId - (Required) The script project's Drive ID.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.deployments.create = (params) => this._makeRequest('v1/projects/{scriptId}/deployments', 'POST', params);

    /**
     * Updates a deployment of an Apps Script project.
     * @param {string} params.deploymentId - (Required) The deployment ID for this deployment.
     * @param {string} params.scriptId - (Required) The script project's Drive ID.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.deployments.update = (params) => this._makeRequest('v1/projects/{scriptId}/deployments/{deploymentId}', 'PUT', params);

    /**
     * Deletes a deployment of an Apps Script project.
     * @param {string} params.deploymentId - (Required) The deployment ID to be undeployed.
     * @param {string} params.scriptId - (Required) The script project's Drive ID.
     * @return {object} The API response object.
     */
    this.projects.deployments.delete = (params) => this._makeRequest('v1/projects/{scriptId}/deployments/{deploymentId}', 'DELETE', params);

    /**
     * Gets a deployment of an Apps Script project.
     * @param {string} params.deploymentId - (Required) The deployment ID.
     * @param {string} params.scriptId - (Required) The script project's Drive ID.
     * @return {object} The API response object.
     */
    this.projects.deployments.get = (params) => this._makeRequest('v1/projects/{scriptId}/deployments/{deploymentId}', 'GET', params);

    /**
     * Lists the deployments of an Apps Script project.
     * @param {integer} params.pageSize - The maximum number of deployments on each returned page. Defaults to 50.
     * @param {string} params.pageToken - The token for continuing a previous list request on the next page. This should be set to the value of `nextPageToken` from a previous response.
     * @param {string} params.scriptId - (Required) The script project's Drive ID.
     * @return {object} The API response object.
     */
    this.projects.deployments.list = (params) => this._makeRequest('v1/projects/{scriptId}/deployments', 'GET', params);

    this.projects.versions = {};

    /**
     * Creates a new immutable version using the current code, with a unique version number.
     * @param {string} params.scriptId - (Required) The script project's Drive ID.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.versions.create = (params) => this._makeRequest('v1/projects/{scriptId}/versions', 'POST', params);

    /**
     * Gets a version of a script project.
     * @param {string} params.scriptId - (Required) The script project's Drive ID.
     * @param {integer} params.versionNumber - (Required) The version number.
     * @return {object} The API response object.
     */
    this.projects.versions.get = (params) => this._makeRequest('v1/projects/{scriptId}/versions/{versionNumber}', 'GET', params);

    /**
     * List the versions of a script project.
     * @param {integer} params.pageSize - The maximum number of versions on each returned page. Defaults to 50.
     * @param {string} params.pageToken - The token for continuing a previous list request on the next page. This should be set to the value of `nextPageToken` from a previous response.
     * @param {string} params.scriptId - (Required) The script project's Drive ID.
     * @return {object} The API response object.
     */
    this.projects.versions.list = (params) => this._makeRequest('v1/projects/{scriptId}/versions', 'GET', params);

    this.processes = {};

    /**
     * List information about a script's executed processes, such as process type and current status.
     * @param {integer} params.pageSize - The maximum number of returned processes per page of results. Defaults to 50.
     * @param {string} params.pageToken - The token for continuing a previous list request on the next page. This should be set to the value of `nextPageToken` from a previous response.
     * @param {string} params.scriptId - The script ID of the project whose processes are listed.
     * @param {string} params.scriptProcessFilter.deploymentId - Optional field used to limit returned processes to those originating from projects with a specific deployment ID.
     * @param {string} params.scriptProcessFilter.endTime - Optional field used to limit returned processes to those that completed on or before the given timestamp.
     * @param {string} params.scriptProcessFilter.functionName - Optional field used to limit returned processes to those originating from a script function with the given function name.
     * @param {string} params.scriptProcessFilter.startTime - Optional field used to limit returned processes to those that were started on or after the given timestamp.
     * @param {string} params.scriptProcessFilter.statuses - Optional field used to limit returned processes to those having one of the specified process statuses.
     * @param {string} params.scriptProcessFilter.types - Optional field used to limit returned processes to those having one of the specified process types.
     * @param {string} params.scriptProcessFilter.userAccessLevels - Optional field used to limit returned processes to those having one of the specified user access levels.
     * @return {object} The API response object.
     */
    this.processes.listScriptProcesses = (params) => this._makeRequest('v1/processes:listScriptProcesses', 'GET', params);

    /**
     * List information about processes made by or on behalf of a user, such as process type and current status.
     * @param {integer} params.pageSize - The maximum number of returned processes per page of results. Defaults to 50.
     * @param {string} params.pageToken - The token for continuing a previous list request on the next page. This should be set to the value of `nextPageToken` from a previous response.
     * @param {string} params.userProcessFilter.deploymentId - Optional field used to limit returned processes to those originating from projects with a specific deployment ID.
     * @param {string} params.userProcessFilter.endTime - Optional field used to limit returned processes to those that completed on or before the given timestamp.
     * @param {string} params.userProcessFilter.functionName - Optional field used to limit returned processes to those originating from a script function with the given function name.
     * @param {string} params.userProcessFilter.projectName - Optional field used to limit returned processes to those originating from projects with project names containing a specific string.
     * @param {string} params.userProcessFilter.scriptId - Optional field used to limit returned processes to those originating from projects with a specific script ID.
     * @param {string} params.userProcessFilter.startTime - Optional field used to limit returned processes to those that were started on or after the given timestamp.
     * @param {string} params.userProcessFilter.statuses - Optional field used to limit returned processes to those having one of the specified process statuses.
     * @param {string} params.userProcessFilter.types - Optional field used to limit returned processes to those having one of the specified process types.
     * @param {string} params.userProcessFilter.userAccessLevels - Optional field used to limit returned processes to those having one of the specified user access levels.
     * @return {object} The API response object.
     */
    this.processes.list = (params) => this._makeRequest('v1/processes', 'GET', params);

    this.scripts = {};

    /**
     * @param {string} params.scriptId - (Required) The script ID of the script to be executed. Find the script ID on the **Project settings** page under "IDs." As multiple executable APIs can be deployed in new IDE for same script, this field should be populated with DeploymentID generated while deploying in new IDE instead of script ID.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.scripts.run = (params) => this._makeRequest('v1/scripts/{scriptId}:run', 'POST', params);
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
