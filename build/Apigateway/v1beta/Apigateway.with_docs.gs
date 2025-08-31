
/**
 * Google Apps Script client library for the API Gateway API
 * Documentation URL: https://cloud.google.com/api-gateway/docs
 * @class
 */
class Apigateway {
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
    this._rootUrl = 'https://apigateway.googleapis.com/';
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
    this.projects.locations.list = (params) => this._makeRequest('v1beta/{+name}/locations', 'GET', params);

    /**
     * Gets information about a location.
     * @param {string} params.name - (Required) Resource name for the location.
     * @return {object} The API response object.
     */
    this.projects.locations.get = (params) => this._makeRequest('v1beta/{+name}', 'GET', params);

    this.projects.locations.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.list = (params) => this._makeRequest('v1beta/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.get = (params) => this._makeRequest('v1beta/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.delete = (params) => this._makeRequest('v1beta/{+name}', 'DELETE', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.cancel = (params) => this._makeRequest('v1beta/{+name}:cancel', 'POST', params);

    this.projects.locations.gateways = {};

    /**
     * Lists Gateways in a given project and location.
     * @param {string} params.filter - Filter.
     * @param {string} params.orderBy - Order by parameters.
     * @param {integer} params.pageSize - Page size.
     * @param {string} params.pageToken - Page token.
     * @param {string} params.parent - (Required) Required. Parent resource of the Gateway, of the form: `projects/*\/locations/*`
     * @return {object} The API response object.
     */
    this.projects.locations.gateways.list = (params) => this._makeRequest('v1beta/{+parent}/gateways', 'GET', params);

    /**
     * Gets details of a single Gateway.
     * @param {string} params.name - (Required) Required. Resource name of the form: `projects/*\/locations/*\/gateways/*`
     * @return {object} The API response object.
     */
    this.projects.locations.gateways.get = (params) => this._makeRequest('v1beta/{+name}', 'GET', params);

    /**
     * Creates a new Gateway in a given project and location.
     * @param {string} params.gatewayId - Required. Identifier to assign to the Gateway. Must be unique within scope of the parent resource.
     * @param {string} params.parent - (Required) Required. Parent resource of the Gateway, of the form: `projects/*\/locations/*`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.gateways.create = (params) => this._makeRequest('v1beta/{+parent}/gateways', 'POST', params);

    /**
     * Updates the parameters of a single Gateway.
     * @param {string} params.name - (Required) Output only. Resource name of the Gateway. Format: projects/{project}/locations/{location}/gateways/{gateway}
     * @param {string} params.updateMask - Field mask is used to specify the fields to be overwritten in the Gateway resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.gateways.patch = (params) => this._makeRequest('v1beta/{+name}', 'PATCH', params);

    /**
     * Deletes a single Gateway.
     * @param {string} params.name - (Required) Required. Resource name of the form: `projects/*\/locations/*\/gateways/*`
     * @return {object} The API response object.
     */
    this.projects.locations.gateways.delete = (params) => this._makeRequest('v1beta/{+name}', 'DELETE', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.gateways.setIamPolicy = (params) => this._makeRequest('v1beta/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.gateways.getIamPolicy = (params) => this._makeRequest('v1beta/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.gateways.testIamPermissions = (params) => this._makeRequest('v1beta/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.apis = {};

    /**
     * Lists Apis in a given project and location.
     * @param {string} params.filter - Filter.
     * @param {string} params.orderBy - Order by parameters.
     * @param {integer} params.pageSize - Page size.
     * @param {string} params.pageToken - Page token.
     * @param {string} params.parent - (Required) Required. Parent resource of the API, of the form: `projects/*\/locations/global`
     * @return {object} The API response object.
     */
    this.projects.locations.apis.list = (params) => this._makeRequest('v1beta/{+parent}/apis', 'GET', params);

    /**
     * Gets details of a single Api.
     * @param {string} params.name - (Required) Required. Resource name of the form: `projects/*\/locations/global/apis/*`
     * @return {object} The API response object.
     */
    this.projects.locations.apis.get = (params) => this._makeRequest('v1beta/{+name}', 'GET', params);

    /**
     * Creates a new Api in a given project and location.
     * @param {string} params.apiId - Required. Identifier to assign to the API. Must be unique within scope of the parent resource.
     * @param {string} params.parent - (Required) Required. Parent resource of the API, of the form: `projects/*\/locations/global`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.apis.create = (params) => this._makeRequest('v1beta/{+parent}/apis', 'POST', params);

    /**
     * Updates the parameters of a single Api.
     * @param {string} params.name - (Required) Output only. Resource name of the API. Format: projects/{project}/locations/global/apis/{api}
     * @param {string} params.updateMask - Field mask is used to specify the fields to be overwritten in the Api resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.apis.patch = (params) => this._makeRequest('v1beta/{+name}', 'PATCH', params);

    /**
     * Deletes a single Api.
     * @param {string} params.name - (Required) Required. Resource name of the form: `projects/*\/locations/global/apis/*`
     * @return {object} The API response object.
     */
    this.projects.locations.apis.delete = (params) => this._makeRequest('v1beta/{+name}', 'DELETE', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.apis.setIamPolicy = (params) => this._makeRequest('v1beta/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.apis.getIamPolicy = (params) => this._makeRequest('v1beta/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.apis.testIamPermissions = (params) => this._makeRequest('v1beta/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.apis.configs = {};

    /**
     * Lists ApiConfigs in a given project and location.
     * @param {string} params.filter - Filter.
     * @param {string} params.orderBy - Order by parameters.
     * @param {integer} params.pageSize - Page size.
     * @param {string} params.pageToken - Page token.
     * @param {string} params.parent - (Required) Required. Parent resource of the API Config, of the form: `projects/*\/locations/global/apis/*`
     * @return {object} The API response object.
     */
    this.projects.locations.apis.configs.list = (params) => this._makeRequest('v1beta/{+parent}/configs', 'GET', params);

    /**
     * Gets details of a single ApiConfig.
     * @param {string} params.name - (Required) Required. Resource name of the form: `projects/*\/locations/global/apis/*\/configs/*`
     * @param {string} params.view - Specifies which fields of the API Config are returned in the response. Defaults to `BASIC` view.
     * @return {object} The API response object.
     */
    this.projects.locations.apis.configs.get = (params) => this._makeRequest('v1beta/{+name}', 'GET', params);

    /**
     * Creates a new ApiConfig in a given project and location.
     * @param {string} params.apiConfigId - Required. Identifier to assign to the API Config. Must be unique within scope of the parent resource.
     * @param {string} params.parent - (Required) Required. Parent resource of the API Config, of the form: `projects/*\/locations/global/apis/*`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.apis.configs.create = (params) => this._makeRequest('v1beta/{+parent}/configs', 'POST', params);

    /**
     * Updates the parameters of a single ApiConfig.
     * @param {string} params.name - (Required) Output only. Resource name of the API Config. Format: projects/{project}/locations/global/apis/{api}/configs/{api_config}
     * @param {string} params.updateMask - Field mask is used to specify the fields to be overwritten in the ApiConfig resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.apis.configs.patch = (params) => this._makeRequest('v1beta/{+name}', 'PATCH', params);

    /**
     * Deletes a single ApiConfig.
     * @param {string} params.name - (Required) Required. Resource name of the form: `projects/*\/locations/global/apis/*\/configs/*`
     * @return {object} The API response object.
     */
    this.projects.locations.apis.configs.delete = (params) => this._makeRequest('v1beta/{+name}', 'DELETE', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.apis.configs.setIamPolicy = (params) => this._makeRequest('v1beta/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.apis.configs.getIamPolicy = (params) => this._makeRequest('v1beta/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.apis.configs.testIamPermissions = (params) => this._makeRequest('v1beta/{+resource}:testIamPermissions', 'POST', params);
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
