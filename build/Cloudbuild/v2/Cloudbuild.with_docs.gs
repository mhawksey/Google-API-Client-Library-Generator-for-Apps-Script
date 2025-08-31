
/**
 * Google Apps Script client library for the Cloud Build API
 * Documentation URL: https://cloud.google.com/cloud-build/docs/
 * @class
 */
class Cloudbuild {
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
    this._rootUrl = 'https://cloudbuild.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

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
    this.projects.locations.list = (params) => this._makeRequest('v2/{+name}/locations', 'GET', params);

    /**
     * Gets information about a location.
     * @param {string} params.name - (Required) Resource name for the location.
     * @return {object} The API response object.
     */
    this.projects.locations.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    this.projects.locations.operations = {};

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.cancel = (params) => this._makeRequest('v2/{+name}:cancel', 'POST', params);

    this.projects.locations.connections = {};

    /**
     * Creates a Connection.
     * @param {string} params.connectionId - Required. The ID to use for the Connection, which will become the final component of the Connection's resource name. Names must be unique per-project per-location. Allows alphanumeric characters and any of -._~%!$&'()*+,;=@.
     * @param {string} params.parent - (Required) Required. Project and location where the connection will be created. Format: `projects/*\/locations/*`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.connections.create = (params) => this._makeRequest('v2/{+parent}/connections', 'POST', params);

    /**
     * Gets details of a single connection.
     * @param {string} params.name - (Required) Required. The name of the Connection to retrieve. Format: `projects/*\/locations/*\/connections/*`.
     * @return {object} The API response object.
     */
    this.projects.locations.connections.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Lists Connections in a given project and location.
     * @param {integer} params.pageSize - Number of results to return in the list.
     * @param {string} params.pageToken - Page start.
     * @param {string} params.parent - (Required) Required. The parent, which owns this collection of Connections. Format: `projects/*\/locations/*`.
     * @param {boolean} params.returnPartialSuccess - Optional. If set to true, the response will return partial results when some regions are unreachable. If set to false, the response will fail if any region is unreachable.
     * @return {object} The API response object.
     */
    this.projects.locations.connections.list = (params) => this._makeRequest('v2/{+parent}/connections', 'GET', params);

    /**
     * Updates a single connection.
     * @param {boolean} params.allowMissing - If set to true, and the connection is not found a new connection will be created. In this situation `update_mask` is ignored. The creation will succeed only if the input connection has all the necessary information (e.g a github_config with both user_oauth_token and installation_id properties).
     * @param {string} params.etag - The current etag of the connection. If an etag is provided and does not match the current etag of the connection, update will be blocked and an ABORTED error will be returned.
     * @param {string} params.name - (Required) Immutable. The resource name of the connection, in the format `projects/{project}/locations/{location}/connections/{connection_id}`.
     * @param {string} params.updateMask - The list of fields to be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.connections.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    /**
     * Deletes a single connection.
     * @param {string} params.etag - The current etag of the connection. If an etag is provided and does not match the current etag of the connection, deletion will be blocked and an ABORTED error will be returned.
     * @param {string} params.name - (Required) Required. The name of the Connection to delete. Format: `projects/*\/locations/*\/connections/*`.
     * @param {boolean} params.validateOnly - If set, validate the request, but do not actually post it.
     * @return {object} The API response object.
     */
    this.projects.locations.connections.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    /**
     * ProcessWebhook is called by the external SCM for notifying of events.
     * @param {string} params.parent - (Required) Required. Project and location where the webhook will be received. Format: `projects/*\/locations/*`.
     * @param {string} params.webhookKey - Arbitrary additional key to find the matching repository for a webhook event if needed.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.connections.processWebhook = (params) => this._makeRequest('v2/{+parent}/connections:processWebhook', 'POST', params);

    /**
     * FetchLinkableRepositories get repositories from SCM that are accessible and could be added to the connection.
     * @param {string} params.connection - (Required) Required. The name of the Connection. Format: `projects/*\/locations/*\/connections/*`.
     * @param {integer} params.pageSize - Number of results to return in the list. Default to 20.
     * @param {string} params.pageToken - Page start.
     * @return {object} The API response object.
     */
    this.projects.locations.connections.fetchLinkableRepositories = (params) => this._makeRequest('v2/{+connection}:fetchLinkableRepositories', 'GET', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.connections.setIamPolicy = (params) => this._makeRequest('v2/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.connections.getIamPolicy = (params) => this._makeRequest('v2/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.connections.testIamPermissions = (params) => this._makeRequest('v2/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.connections.repositories = {};

    /**
     * Creates a Repository.
     * @param {string} params.parent - (Required) Required. The connection to contain the repository. If the request is part of a BatchCreateRepositoriesRequest, this field should be empty or match the parent specified there.
     * @param {string} params.repositoryId - Required. The ID to use for the repository, which will become the final component of the repository's resource name. This ID should be unique in the connection. Allows alphanumeric characters and any of -._~%!$&'()*+,;=@.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.connections.repositories.create = (params) => this._makeRequest('v2/{+parent}/repositories', 'POST', params);

    /**
     * Creates multiple repositories inside a connection.
     * @param {string} params.parent - (Required) Required. The connection to contain all the repositories being created. Format: projects/*\/locations/*\/connections/* The parent field in the CreateRepositoryRequest messages must either be empty or match this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.connections.repositories.batchCreate = (params) => this._makeRequest('v2/{+parent}/repositories:batchCreate', 'POST', params);

    /**
     * Gets details of a single repository.
     * @param {string} params.name - (Required) Required. The name of the Repository to retrieve. Format: `projects/*\/locations/*\/connections/*\/repositories/*`.
     * @return {object} The API response object.
     */
    this.projects.locations.connections.repositories.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Lists Repositories in a given connection.
     * @param {string} params.filter - A filter expression that filters resources listed in the response. Expressions must follow API improvement proposal [AIP-160](https://google.aip.dev/160). e.g. `remote_uri:"https://github.com*"`.
     * @param {integer} params.pageSize - Number of results to return in the list.
     * @param {string} params.pageToken - Page start.
     * @param {string} params.parent - (Required) Required. The parent, which owns this collection of Repositories. Format: `projects/*\/locations/*\/connections/*`.
     * @param {boolean} params.returnPartialSuccess - Optional. If set to true, the response will return partial results when some regions are unreachable. If set to false, the response will fail if any region is unreachable.
     * @return {object} The API response object.
     */
    this.projects.locations.connections.repositories.list = (params) => this._makeRequest('v2/{+parent}/repositories', 'GET', params);

    /**
     * Deletes a single repository.
     * @param {string} params.etag - The current etag of the repository. If an etag is provided and does not match the current etag of the repository, deletion will be blocked and an ABORTED error will be returned.
     * @param {string} params.name - (Required) Required. The name of the Repository to delete. Format: `projects/*\/locations/*\/connections/*\/repositories/*`.
     * @param {boolean} params.validateOnly - If set, validate the request, but do not actually post it.
     * @return {object} The API response object.
     */
    this.projects.locations.connections.repositories.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    /**
     * Fetches read/write token of a given repository.
     * @param {string} params.repository - (Required) Required. The resource name of the repository in the format `projects/*\/locations/*\/connections/*\/repositories/*`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.connections.repositories.accessReadWriteToken = (params) => this._makeRequest('v2/{+repository}:accessReadWriteToken', 'POST', params);

    /**
     * Fetches read token of a given repository.
     * @param {string} params.repository - (Required) Required. The resource name of the repository in the format `projects/*\/locations/*\/connections/*\/repositories/*`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.connections.repositories.accessReadToken = (params) => this._makeRequest('v2/{+repository}:accessReadToken', 'POST', params);

    /**
     * Fetch the list of branches or tags for a given repository.
     * @param {integer} params.pageSize - Optional. Number of results to return in the list. Default to 20.
     * @param {string} params.pageToken - Optional. Page start.
     * @param {string} params.refType - Type of refs to fetch
     * @param {string} params.repository - (Required) Required. The resource name of the repository in the format `projects/*\/locations/*\/connections/*\/repositories/*`.
     * @return {object} The API response object.
     */
    this.projects.locations.connections.repositories.fetchGitRefs = (params) => this._makeRequest('v2/{+repository}:fetchGitRefs', 'GET', params);
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
