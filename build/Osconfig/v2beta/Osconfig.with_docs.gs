
/**
 * Google Apps Script client library for the OS Config API
 * Documentation URL: https://cloud.google.com/compute/docs/osconfig/rest
 * @class
 */
class Osconfig {
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
    this._rootUrl = 'https://osconfig.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.locations = {};

    this.projects.locations.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.list = (params) => this._makeRequest('v2beta/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.get = (params) => this._makeRequest('v2beta/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.delete = (params) => this._makeRequest('v2beta/{+name}', 'DELETE', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.cancel = (params) => this._makeRequest('v2beta/{+name}:cancel', 'POST', params);

    this.projects.locations.global = {};

    this.projects.locations.global.policyOrchestrators = {};

    /**
     * Creates a new policy orchestrator under the given project resource. `name` field of the given orchestrator are ignored and instead replaced by a product of `parent` and `policy_orchestrator_id`. Orchestrator state field might be only set to `ACTIVE`, `STOPPED` or omitted (in which case, the created resource will be in `ACTIVE` state anyway).
     * @param {string} params.parent - (Required) Required. The parent resource name in the form of: * `organizations/{organization_id}/locations/global` * `folders/{folder_id}/locations/global` * `projects/{project_id_or_number}/locations/global`
     * @param {string} params.policyOrchestratorId - Required. The logical identifier of the policy orchestrator, with the following restrictions: * Must contain only lowercase letters, numbers, and hyphens. * Must start with a letter. * Must be between 1-63 characters. * Must end with a number or a letter. * Must be unique within the parent.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.global.policyOrchestrators.create = (params) => this._makeRequest('v2beta/{+parent}/policyOrchestrators', 'POST', params);

    /**
     * Lists the policy orchestrators under the given parent project resource.
     * @param {string} params.filter - Optional. Filtering results
     * @param {string} params.orderBy - Optional. Hint for how to order the results
     * @param {integer} params.pageSize - Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     * @param {string} params.pageToken - Optional. A token identifying a page of results the server should return.
     * @param {string} params.parent - (Required) Required. The parent resource name.
     * @return {object} The API response object.
     */
    this.projects.locations.global.policyOrchestrators.list = (params) => this._makeRequest('v2beta/{+parent}/policyOrchestrators', 'GET', params);

    /**
     * Retrieves an existing policy orchestrator, parented by a project.
     * @param {string} params.name - (Required) Required. The resource name.
     * @return {object} The API response object.
     */
    this.projects.locations.global.policyOrchestrators.get = (params) => this._makeRequest('v2beta/{+name}', 'GET', params);

    /**
     * Updates an existing policy orchestrator, parented by a project.
     * @param {string} params.name - (Required) Immutable. Identifier. In form of * `organizations/{organization_id}/locations/global/policyOrchestrators/{orchestrator_id}` * `folders/{folder_id}/locations/global/policyOrchestrators/{orchestrator_id}` * `projects/{project_id_or_number}/locations/global/policyOrchestrators/{orchestrator_id}`
     * @param {string} params.updateMask - Optional. The list of fields to merge into the existing policy orchestrator. A special ["*"] field mask can be used to simply replace the entire resource. Otherwise, for all paths referenced in the mask, following merge rules are used: * output only fields are ignored, * primitive fields are replaced, * repeated fields are replaced, * map fields are merged key by key, * message fields are cleared if not set in the request, otherwise they are merged recursively (in particular - message fields set to an empty message has no side effects) If field mask (or its paths) is not specified, it is automatically inferred from the request using following rules: * primitive fields are listed, if set to a non-default value (as there is no way to distinguish between default and unset value), * map and repeated fields are listed, * `google.protobuf.Any` fields are listed, * other message fields are traversed recursively. Note: implicit mask does not allow clearing fields.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.global.policyOrchestrators.patch = (params) => this._makeRequest('v2beta/{+name}', 'PATCH', params);

    /**
     * Deletes an existing policy orchestrator resource, parented by a project.
     * @param {string} params.etag - Optional. The current etag of the policy orchestrator. If an etag is provided and does not match the current etag of the policy orchestrator, deletion will be blocked and an ABORTED error will be returned.
     * @param {string} params.name - (Required) Required. Name of the resource to be deleted.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @return {object} The API response object.
     */
    this.projects.locations.global.policyOrchestrators.delete = (params) => this._makeRequest('v2beta/{+name}', 'DELETE', params);

    this.folders = {};

    this.folders.locations = {};

    this.folders.locations.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.folders.locations.operations.list = (params) => this._makeRequest('v2beta/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.folders.locations.operations.get = (params) => this._makeRequest('v2beta/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.folders.locations.operations.delete = (params) => this._makeRequest('v2beta/{+name}', 'DELETE', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.folders.locations.operations.cancel = (params) => this._makeRequest('v2beta/{+name}:cancel', 'POST', params);

    this.folders.locations.global = {};

    this.folders.locations.global.policyOrchestrators = {};

    /**
     * Creates a new policy orchestrator under the given folder resource. `name` field of the given orchestrator are ignored and instead replaced by a product of `parent` and `policy_orchestrator_id`. Orchestrator state field might be only set to `ACTIVE`, `STOPPED` or omitted (in which case, the created resource will be in `ACTIVE` state anyway).
     * @param {string} params.parent - (Required) Required. The parent resource name in the form of: * `organizations/{organization_id}/locations/global` * `folders/{folder_id}/locations/global` * `projects/{project_id_or_number}/locations/global`
     * @param {string} params.policyOrchestratorId - Required. The logical identifier of the policy orchestrator, with the following restrictions: * Must contain only lowercase letters, numbers, and hyphens. * Must start with a letter. * Must be between 1-63 characters. * Must end with a number or a letter. * Must be unique within the parent.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.folders.locations.global.policyOrchestrators.create = (params) => this._makeRequest('v2beta/{+parent}/policyOrchestrators', 'POST', params);

    /**
     * Lists the policy orchestrators under the given parent folder resource.
     * @param {string} params.filter - Optional. Filtering results
     * @param {string} params.orderBy - Optional. Hint for how to order the results
     * @param {integer} params.pageSize - Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     * @param {string} params.pageToken - Optional. A token identifying a page of results the server should return.
     * @param {string} params.parent - (Required) Required. The parent resource name.
     * @return {object} The API response object.
     */
    this.folders.locations.global.policyOrchestrators.list = (params) => this._makeRequest('v2beta/{+parent}/policyOrchestrators', 'GET', params);

    /**
     * Retrieves an existing policy orchestrator, parented by a folder.
     * @param {string} params.name - (Required) Required. The resource name.
     * @return {object} The API response object.
     */
    this.folders.locations.global.policyOrchestrators.get = (params) => this._makeRequest('v2beta/{+name}', 'GET', params);

    /**
     * Updates an existing policy orchestrator, parented by a folder.
     * @param {string} params.name - (Required) Immutable. Identifier. In form of * `organizations/{organization_id}/locations/global/policyOrchestrators/{orchestrator_id}` * `folders/{folder_id}/locations/global/policyOrchestrators/{orchestrator_id}` * `projects/{project_id_or_number}/locations/global/policyOrchestrators/{orchestrator_id}`
     * @param {string} params.updateMask - Optional. The list of fields to merge into the existing policy orchestrator. A special ["*"] field mask can be used to simply replace the entire resource. Otherwise, for all paths referenced in the mask, following merge rules are used: * output only fields are ignored, * primitive fields are replaced, * repeated fields are replaced, * map fields are merged key by key, * message fields are cleared if not set in the request, otherwise they are merged recursively (in particular - message fields set to an empty message has no side effects) If field mask (or its paths) is not specified, it is automatically inferred from the request using following rules: * primitive fields are listed, if set to a non-default value (as there is no way to distinguish between default and unset value), * map and repeated fields are listed, * `google.protobuf.Any` fields are listed, * other message fields are traversed recursively. Note: implicit mask does not allow clearing fields.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.folders.locations.global.policyOrchestrators.patch = (params) => this._makeRequest('v2beta/{+name}', 'PATCH', params);

    /**
     * Deletes an existing policy orchestrator resource, parented by a folder.
     * @param {string} params.etag - Optional. The current etag of the policy orchestrator. If an etag is provided and does not match the current etag of the policy orchestrator, deletion will be blocked and an ABORTED error will be returned.
     * @param {string} params.name - (Required) Required. Name of the resource to be deleted.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @return {object} The API response object.
     */
    this.folders.locations.global.policyOrchestrators.delete = (params) => this._makeRequest('v2beta/{+name}', 'DELETE', params);

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
    this.organizations.locations.operations.list = (params) => this._makeRequest('v2beta/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.organizations.locations.operations.get = (params) => this._makeRequest('v2beta/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.organizations.locations.operations.delete = (params) => this._makeRequest('v2beta/{+name}', 'DELETE', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.locations.operations.cancel = (params) => this._makeRequest('v2beta/{+name}:cancel', 'POST', params);

    this.organizations.locations.global = {};

    this.organizations.locations.global.policyOrchestrators = {};

    /**
     * Creates a new policy orchestrator under the given organizations resource. `name` field of the given orchestrator are ignored and instead replaced by a product of `parent` and `policy_orchestrator_id`. Orchestrator state field might be only set to `ACTIVE`, `STOPPED` or omitted (in which case, the created resource will be in `ACTIVE` state anyway).
     * @param {string} params.parent - (Required) Required. The parent resource name in the form of: * `organizations/{organization_id}/locations/global` * `folders/{folder_id}/locations/global` * `projects/{project_id_or_number}/locations/global`
     * @param {string} params.policyOrchestratorId - Required. The logical identifier of the policy orchestrator, with the following restrictions: * Must contain only lowercase letters, numbers, and hyphens. * Must start with a letter. * Must be between 1-63 characters. * Must end with a number or a letter. * Must be unique within the parent.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.locations.global.policyOrchestrators.create = (params) => this._makeRequest('v2beta/{+parent}/policyOrchestrators', 'POST', params);

    /**
     * Lists the policy orchestrators under the given parent organization resource.
     * @param {string} params.filter - Optional. Filtering results
     * @param {string} params.orderBy - Optional. Hint for how to order the results
     * @param {integer} params.pageSize - Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     * @param {string} params.pageToken - Optional. A token identifying a page of results the server should return.
     * @param {string} params.parent - (Required) Required. The parent resource name.
     * @return {object} The API response object.
     */
    this.organizations.locations.global.policyOrchestrators.list = (params) => this._makeRequest('v2beta/{+parent}/policyOrchestrators', 'GET', params);

    /**
     * Retrieves an existing policy orchestrator, parented by an organization.
     * @param {string} params.name - (Required) Required. The resource name.
     * @return {object} The API response object.
     */
    this.organizations.locations.global.policyOrchestrators.get = (params) => this._makeRequest('v2beta/{+name}', 'GET', params);

    /**
     * Updates an existing policy orchestrator, parented by an organization.
     * @param {string} params.name - (Required) Immutable. Identifier. In form of * `organizations/{organization_id}/locations/global/policyOrchestrators/{orchestrator_id}` * `folders/{folder_id}/locations/global/policyOrchestrators/{orchestrator_id}` * `projects/{project_id_or_number}/locations/global/policyOrchestrators/{orchestrator_id}`
     * @param {string} params.updateMask - Optional. The list of fields to merge into the existing policy orchestrator. A special ["*"] field mask can be used to simply replace the entire resource. Otherwise, for all paths referenced in the mask, following merge rules are used: * output only fields are ignored, * primitive fields are replaced, * repeated fields are replaced, * map fields are merged key by key, * message fields are cleared if not set in the request, otherwise they are merged recursively (in particular - message fields set to an empty message has no side effects) If field mask (or its paths) is not specified, it is automatically inferred from the request using following rules: * primitive fields are listed, if set to a non-default value (as there is no way to distinguish between default and unset value), * map and repeated fields are listed, * `google.protobuf.Any` fields are listed, * other message fields are traversed recursively. Note: implicit mask does not allow clearing fields.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.locations.global.policyOrchestrators.patch = (params) => this._makeRequest('v2beta/{+name}', 'PATCH', params);

    /**
     * Deletes an existing policy orchestrator resource, parented by an organization.
     * @param {string} params.etag - Optional. The current etag of the policy orchestrator. If an etag is provided and does not match the current etag of the policy orchestrator, deletion will be blocked and an ABORTED error will be returned.
     * @param {string} params.name - (Required) Required. Name of the resource to be deleted.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @return {object} The API response object.
     */
    this.organizations.locations.global.policyOrchestrators.delete = (params) => this._makeRequest('v2beta/{+name}', 'DELETE', params);
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
