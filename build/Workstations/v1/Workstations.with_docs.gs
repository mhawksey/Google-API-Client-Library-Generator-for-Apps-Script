
/**
 * Google Apps Script client library for the Cloud Workstations API
 * Documentation URL: https://cloud.google.com/workstations
 * @class
 */
class Workstations {
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
    this._rootUrl = 'https://workstations.googleapis.com/';
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
    this.projects.locations.list = (params) => this._makeRequest('v1/{+name}/locations', 'GET', params);

    /**
     * Gets information about a location.
     * @param {string} params.name - (Required) Resource name for the location.
     * @return {object} The API response object.
     */
    this.projects.locations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.list = (params) => this._makeRequest('v1/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);

    this.projects.locations.workstationClusters = {};

    /**
     * Returns the requested workstation cluster.
     * @param {string} params.name - (Required) Required. Name of the requested resource.
     * @return {object} The API response object.
     */
    this.projects.locations.workstationClusters.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Returns all workstation clusters in the specified location.
     * @param {string} params.filter - Optional. Filter the WorkstationClusters to be listed. Possible filters are described in https://google.aip.dev/160.
     * @param {integer} params.pageSize - Optional. Maximum number of items to return.
     * @param {string} params.pageToken - Optional. next_page_token value returned from a previous List request, if any.
     * @param {string} params.parent - (Required) Required. Parent resource name.
     * @return {object} The API response object.
     */
    this.projects.locations.workstationClusters.list = (params) => this._makeRequest('v1/{+parent}/workstationClusters', 'GET', params);

    /**
     * Creates a new workstation cluster.
     * @param {string} params.parent - (Required) Required. Parent resource name.
     * @param {boolean} params.validateOnly - Optional. If set, validate the request and preview the review, but do not actually apply it.
     * @param {string} params.workstationClusterId - Required. ID to use for the workstation cluster.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.workstationClusters.create = (params) => this._makeRequest('v1/{+parent}/workstationClusters', 'POST', params);

    /**
     * Updates an existing workstation cluster.
     * @param {boolean} params.allowMissing - Optional. If set, and the workstation cluster is not found, a new workstation cluster will be created. In this situation, update_mask is ignored.
     * @param {string} params.name - (Required) Identifier. Full name of this workstation cluster.
     * @param {string} params.updateMask - Required. Mask that specifies which fields in the workstation cluster should be updated.
     * @param {boolean} params.validateOnly - Optional. If set, validate the request and preview the review, but do not actually apply it.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.workstationClusters.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes the specified workstation cluster.
     * @param {string} params.etag - Optional. If set, the request will be rejected if the latest version of the workstation cluster on the server does not have this ETag.
     * @param {boolean} params.force - Optional. If set, any workstation configurations and workstations in the workstation cluster are also deleted. Otherwise, the request only works if the workstation cluster has no configurations or workstations.
     * @param {string} params.name - (Required) Required. Name of the workstation cluster to delete.
     * @param {boolean} params.validateOnly - Optional. If set, validate the request and preview the review, but do not apply it.
     * @return {object} The API response object.
     */
    this.projects.locations.workstationClusters.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.workstationClusters.workstationConfigs = {};

    /**
     * Returns the requested workstation configuration.
     * @param {string} params.name - (Required) Required. Name of the requested resource.
     * @return {object} The API response object.
     */
    this.projects.locations.workstationClusters.workstationConfigs.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Returns all workstation configurations in the specified cluster.
     * @param {string} params.filter - Optional. Filter the WorkstationConfigs to be listed. Possible filters are described in https://google.aip.dev/160.
     * @param {integer} params.pageSize - Optional. Maximum number of items to return.
     * @param {string} params.pageToken - Optional. next_page_token value returned from a previous List request, if any.
     * @param {string} params.parent - (Required) Required. Parent resource name.
     * @return {object} The API response object.
     */
    this.projects.locations.workstationClusters.workstationConfigs.list = (params) => this._makeRequest('v1/{+parent}/workstationConfigs', 'GET', params);

    /**
     * Returns all workstation configurations in the specified cluster on which the caller has the "workstations.workstation.create" permission.
     * @param {integer} params.pageSize - Optional. Maximum number of items to return.
     * @param {string} params.pageToken - Optional. next_page_token value returned from a previous List request, if any.
     * @param {string} params.parent - (Required) Required. Parent resource name.
     * @return {object} The API response object.
     */
    this.projects.locations.workstationClusters.workstationConfigs.listUsable = (params) => this._makeRequest('v1/{+parent}/workstationConfigs:listUsable', 'GET', params);

    /**
     * Creates a new workstation configuration.
     * @param {string} params.parent - (Required) Required. Parent resource name.
     * @param {boolean} params.validateOnly - Optional. If set, validate the request and preview the review, but do not actually apply it.
     * @param {string} params.workstationConfigId - Required. ID to use for the workstation configuration.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.workstationClusters.workstationConfigs.create = (params) => this._makeRequest('v1/{+parent}/workstationConfigs', 'POST', params);

    /**
     * Updates an existing workstation configuration.
     * @param {boolean} params.allowMissing - Optional. If set and the workstation configuration is not found, a new workstation configuration will be created. In this situation, update_mask is ignored.
     * @param {string} params.name - (Required) Identifier. Full name of this workstation configuration.
     * @param {string} params.updateMask - Required. Mask specifying which fields in the workstation configuration should be updated.
     * @param {boolean} params.validateOnly - Optional. If set, validate the request and preview the review, but do not actually apply it.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.workstationClusters.workstationConfigs.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes the specified workstation configuration.
     * @param {string} params.etag - Optional. If set, the request is rejected if the latest version of the workstation configuration on the server does not have this ETag.
     * @param {boolean} params.force - Optional. If set, any workstations in the workstation configuration are also deleted. Otherwise, the request works only if the workstation configuration has no workstations.
     * @param {string} params.name - (Required) Required. Name of the workstation configuration to delete.
     * @param {boolean} params.validateOnly - Optional. If set, validate the request and preview the review, but do not actually apply it.
     * @return {object} The API response object.
     */
    this.projects.locations.workstationClusters.workstationConfigs.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.workstationClusters.workstationConfigs.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.workstationClusters.workstationConfigs.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.workstationClusters.workstationConfigs.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.workstationClusters.workstationConfigs.workstations = {};

    /**
     * Returns the requested workstation.
     * @param {string} params.name - (Required) Required. Name of the requested resource.
     * @return {object} The API response object.
     */
    this.projects.locations.workstationClusters.workstationConfigs.workstations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Returns all Workstations using the specified workstation configuration.
     * @param {string} params.filter - Optional. Filter the Workstations to be listed. Possible filters are described in https://google.aip.dev/160.
     * @param {integer} params.pageSize - Optional. Maximum number of items to return.
     * @param {string} params.pageToken - Optional. next_page_token value returned from a previous List request, if any.
     * @param {string} params.parent - (Required) Required. Parent resource name.
     * @return {object} The API response object.
     */
    this.projects.locations.workstationClusters.workstationConfigs.workstations.list = (params) => this._makeRequest('v1/{+parent}/workstations', 'GET', params);

    /**
     * Returns all workstations using the specified workstation configuration on which the caller has the "workstations.workstations.use" permission.
     * @param {integer} params.pageSize - Optional. Maximum number of items to return.
     * @param {string} params.pageToken - Optional. next_page_token value returned from a previous List request, if any.
     * @param {string} params.parent - (Required) Required. Parent resource name.
     * @return {object} The API response object.
     */
    this.projects.locations.workstationClusters.workstationConfigs.workstations.listUsable = (params) => this._makeRequest('v1/{+parent}/workstations:listUsable', 'GET', params);

    /**
     * Creates a new workstation.
     * @param {string} params.parent - (Required) Required. Parent resource name.
     * @param {boolean} params.validateOnly - Optional. If set, validate the request and preview the review, but do not actually apply it.
     * @param {string} params.workstationId - Required. ID to use for the workstation.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.workstationClusters.workstationConfigs.workstations.create = (params) => this._makeRequest('v1/{+parent}/workstations', 'POST', params);

    /**
     * Updates an existing workstation.
     * @param {boolean} params.allowMissing - Optional. If set and the workstation configuration is not found, a new workstation configuration is created. In this situation, update_mask is ignored.
     * @param {string} params.name - (Required) Identifier. Full name of this workstation.
     * @param {string} params.updateMask - Required. Mask specifying which fields in the workstation configuration should be updated.
     * @param {boolean} params.validateOnly - Optional. If set, validate the request and preview the review, but do not actually apply it.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.workstationClusters.workstationConfigs.workstations.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes the specified workstation.
     * @param {string} params.etag - Optional. If set, the request will be rejected if the latest version of the workstation on the server does not have this ETag.
     * @param {string} params.name - (Required) Required. Name of the workstation to delete.
     * @param {boolean} params.validateOnly - Optional. If set, validate the request and preview the review, but do not actually apply it.
     * @return {object} The API response object.
     */
    this.projects.locations.workstationClusters.workstationConfigs.workstations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Starts running a workstation so that users can connect to it.
     * @param {string} params.name - (Required) Required. Name of the workstation to start.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.workstationClusters.workstationConfigs.workstations.start = (params) => this._makeRequest('v1/{+name}:start', 'POST', params);

    /**
     * Stops running a workstation, reducing costs.
     * @param {string} params.name - (Required) Required. Name of the workstation to stop.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.workstationClusters.workstationConfigs.workstations.stop = (params) => this._makeRequest('v1/{+name}:stop', 'POST', params);

    /**
     * Returns a short-lived credential that can be used to send authenticated and authorized traffic to a workstation. Once generated this token cannot be revoked and is good for the lifetime of the token.
     * @param {string} params.workstation - (Required) Required. Name of the workstation for which the access token should be generated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.workstationClusters.workstationConfigs.workstations.generateAccessToken = (params) => this._makeRequest('v1/{+workstation}:generateAccessToken', 'POST', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.workstationClusters.workstationConfigs.workstations.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.workstationClusters.workstationConfigs.workstations.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.workstationClusters.workstationConfigs.workstations.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);
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
