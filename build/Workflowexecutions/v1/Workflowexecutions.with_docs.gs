
/**
 * Google Apps Script client library for the Workflow Executions API
 * Documentation URL: https://cloud.google.com/workflows
 * @class
 */
class Workflowexecutions {
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
    this._rootUrl = 'https://workflowexecutions.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.locations = {};

    this.projects.locations.workflows = {};

    /**
     * Triggers a new execution using the latest revision of the given workflow by a Pub/Sub push notification.
     * @param {string} params.workflow - (Required) Required. Name of the workflow for which an execution should be created. Format: projects/{project}/locations/{location}/workflows/{workflow}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.workflows.triggerPubsubExecution = (params) => this._makeRequest('v1/{+workflow}:triggerPubsubExecution', 'POST', params);

    this.projects.locations.workflows.executions = {};

    /**
     * Returns a list of executions which belong to the workflow with the given name. The method returns executions of all workflow revisions. Returned executions are ordered by their start time (newest first).
     * @param {string} params.filter - Optional. Filters applied to the `[Executions.ListExecutions]` results. The following fields are supported for filtering: `executionId`, `state`, `createTime`, `startTime`, `endTime`, `duration`, `workflowRevisionId`, `stepName`, `label`, and `disableConcurrencyQuotaOverflowBuffering`. For details, see AIP-160. For more information, see Filter executions. For example, if you are using the Google APIs Explorer: `state="SUCCEEDED"` or `startTime>"2023-08-01" AND state="FAILED"`
     * @param {string} params.orderBy - Optional. Comma-separated list of fields that specify the ordering applied to the `[Executions.ListExecutions]` results. By default the ordering is based on descending `createTime`. The following fields are supported for ordering: `executionId`, `state`, `createTime`, `startTime`, `endTime`, `duration`, and `workflowRevisionId`. For details, see AIP-132.
     * @param {integer} params.pageSize - Maximum number of executions to return per call. Max supported value depends on the selected Execution view: it's 1000 for BASIC and 100 for FULL. The default value used if the field is not specified is 100, regardless of the selected view. Values greater than the max value will be coerced down to it.
     * @param {string} params.pageToken - A page token, received from a previous `ListExecutions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListExecutions` must match the call that provided the page token. Note that pagination is applied to dynamic data. The list of executions returned can change between page requests.
     * @param {string} params.parent - (Required) Required. Name of the workflow for which the executions should be listed. Format: projects/{project}/locations/{location}/workflows/{workflow}
     * @param {string} params.view - Optional. A view defining which fields should be filled in the returned executions. The API will default to the BASIC view.
     * @return {object} The API response object.
     */
    this.projects.locations.workflows.executions.list = (params) => this._makeRequest('v1/{+parent}/executions', 'GET', params);

    /**
     * Creates a new execution using the latest revision of the given workflow. For more information, see Execute a workflow.
     * @param {string} params.parent - (Required) Required. Name of the workflow for which an execution should be created. Format: projects/{project}/locations/{location}/workflows/{workflow} The latest revision of the workflow will be used.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.workflows.executions.create = (params) => this._makeRequest('v1/{+parent}/executions', 'POST', params);

    /**
     * Returns an execution of the given name.
     * @param {string} params.name - (Required) Required. Name of the execution to be retrieved. Format: projects/{project}/locations/{location}/workflows/{workflow}/executions/{execution}
     * @param {string} params.view - Optional. A view defining which fields should be filled in the returned execution. The API will default to the FULL view.
     * @return {object} The API response object.
     */
    this.projects.locations.workflows.executions.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Cancels an execution of the given name.
     * @param {string} params.name - (Required) Required. Name of the execution to be cancelled. Format: projects/{project}/locations/{location}/workflows/{workflow}/executions/{execution}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.workflows.executions.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);

    /**
     * Returns all metadata stored about an execution, excluding most data that is already accessible using other API methods.
     * @param {string} params.name - (Required) Required. Name of the execution for which data is to be exported. Format: projects/{project}/locations/{location}/workflows/{workflow}/executions/{execution}
     * @return {object} The API response object.
     */
    this.projects.locations.workflows.executions.exportData = (params) => this._makeRequest('v1/{+name}:exportData', 'GET', params);

    /**
     * Deletes all step entries for an execution.
     * @param {string} params.name - (Required) Required. Name of the execution for which step entries should be deleted. Format: projects/{project}/locations/{location}/workflows/{workflow}/executions/{execution}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.workflows.executions.deleteExecutionHistory = (params) => this._makeRequest('v1/{+name}:deleteExecutionHistory', 'POST', params);

    this.projects.locations.workflows.executions.callbacks = {};

    /**
     * Returns a list of active callbacks that belong to the execution with the given name. The returned callbacks are ordered by callback ID.
     * @param {integer} params.pageSize - Maximum number of callbacks to return per call. The default value is 100 and is also the maximum value.
     * @param {string} params.pageToken - A page token, received from a previous `ListCallbacks` call. Provide this to retrieve the subsequent page. Note that pagination is applied to dynamic data. The list of callbacks returned can change between page requests if callbacks are created or deleted.
     * @param {string} params.parent - (Required) Required. Name of the execution for which the callbacks should be listed. Format: projects/{project}/locations/{location}/workflows/{workflow}/executions/{execution}
     * @return {object} The API response object.
     */
    this.projects.locations.workflows.executions.callbacks.list = (params) => this._makeRequest('v1/{+parent}/callbacks', 'GET', params);

    this.projects.locations.workflows.executions.stepEntries = {};

    /**
     * Lists step entries for the corresponding workflow execution. Returned entries are ordered by their create_time.
     * @param {string} params.filter - Optional. Filters applied to the `[StepEntries.ListStepEntries]` results. The following fields are supported for filtering: `entryId`, `createTime`, `updateTime`, `routine`, `step`, `stepType`, `parent`, `state`. For details, see AIP-160. For example, if you are using the Google APIs Explorer: `state="SUCCEEDED"` or `createTime>"2023-08-01" AND state="FAILED"`
     * @param {string} params.orderBy - Optional. Comma-separated list of fields that specify the ordering applied to the `[StepEntries.ListStepEntries]` results. By default the ordering is based on ascending `entryId`. The following fields are supported for ordering: `entryId`, `createTime`, `updateTime`, `routine`, `step`, `stepType`, `state`. For details, see AIP-132.
     * @param {integer} params.pageSize - Optional. Number of step entries to return per call. The default max is 1000.
     * @param {string} params.pageToken - Optional. A page token, received from a previous `ListStepEntries` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListStepEntries` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. Name of the workflow execution to list entries for. Format: projects/{project}/locations/{location}/workflows/{workflow}/executions/{execution}
     * @param {integer} params.skip - Optional. The number of step entries to skip. It can be used with or without a pageToken. If used with a pageToken, then it indicates the number of step entries to skip starting from the requested page.
     * @param {string} params.view - Deprecated field.
     * @return {object} The API response object.
     */
    this.projects.locations.workflows.executions.stepEntries.list = (params) => this._makeRequest('v1/{+parent}/stepEntries', 'GET', params);

    /**
     * Gets a step entry.
     * @param {string} params.name - (Required) Required. The name of the step entry to retrieve. Format: projects/{project}/locations/{location}/workflows/{workflow}/executions/{execution}/stepEntries/{step_entry}
     * @param {string} params.view - Deprecated field.
     * @return {object} The API response object.
     */
    this.projects.locations.workflows.executions.stepEntries.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
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
