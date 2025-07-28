
/**
 * Google Apps Script client library for the Cloud Data Fusion API
 * Documentation URL: https://cloud.google.com/data-fusion/docs
 * @class
 */
class Datafusion {
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
    this._rootUrl = 'https://datafusion.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.locations = {};

    /**
     * Remove IAM policy that is currently set on the given resource.
     * @param {string} params.resource - (Required) Required. The resource on which IAM policy to be removed is attached to.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.removeIamPolicy = (params) => this._makeRequest('v1beta1/{+resource}:removeIamPolicy', 'POST', params);

    /**
     * Lists information about the supported locations for this service.
     * @param {string} params.extraLocationTypes - Optional. A list of extra location types that should be used as conditions for controlling the visibility of the locations.
     * @param {string} params.filter - A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
     * @param {string} params.name - (Required) The resource that owns the locations collection, if applicable.
     * @param {integer} params.pageSize - The maximum number of results to return. If not set, the service selects a default.
     * @param {string} params.pageToken - A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
     * @return {object} The API response object.
     */
    this.projects.locations.list = (params) => this._makeRequest('v1beta1/{+name}/locations', 'GET', params);

    /**
     * Gets information about a location.
     * @param {string} params.name - (Required) Resource name for the location.
     * @return {object} The API response object.
     */
    this.projects.locations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    this.projects.locations.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.list = (params) => this._makeRequest('v1beta1/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.cancel = (params) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', params);

    this.projects.locations.versions = {};

    /**
     * Lists possible versions for Data Fusion instances in the specified project and location.
     * @param {boolean} params.latestPatchOnly - Whether or not to return the latest patch of every available minor version. If true, only the latest patch will be returned. Ex. if allowed versions is [6.1.1, 6.1.2, 6.2.0] then response will be [6.1.2, 6.2.0]
     * @param {integer} params.pageSize - The maximum number of items to return.
     * @param {string} params.pageToken - The next_page_token value to use if there are additional results to retrieve for this list request.
     * @param {string} params.parent - (Required) Required. The project and location for which to retrieve instance information in the format projects/{project}/locations/{location}.
     * @return {object} The API response object.
     */
    this.projects.locations.versions.list = (params) => this._makeRequest('v1beta1/{+parent}/versions', 'GET', params);

    this.projects.locations.instances = {};

    /**
     * Lists Data Fusion instances in the specified project and location.
     * @param {string} params.filter - List filter.
     * @param {string} params.orderBy - Sort results. Supported values are "name", "name desc", or "" (unsorted).
     * @param {integer} params.pageSize - The maximum number of items to return.
     * @param {string} params.pageToken - The next_page_token value to use if there are additional results to retrieve for this list request.
     * @param {string} params.parent - (Required) Required. The project and location for which to retrieve instance information in the format projects/{project}/locations/{location}. If the location is specified as '-' (wildcard), then all regions available to the project are queried, and the results are aggregated.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.list = (params) => this._makeRequest('v1beta1/{+parent}/instances', 'GET', params);

    /**
     * Gets details of a single Data Fusion instance.
     * @param {string} params.name - (Required) Required. The instance resource name in the format projects/{project}/locations/{location}/instances/{instance}.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Creates a new Data Fusion instance in the specified project and location.
     * @param {string} params.instanceId - Required. The name of the instance to create. Instance name can only contain lowercase alphanumeric characters and hyphens. It must start with a letter and must not end with a hyphen. It can have a maximum of 30 characters.
     * @param {string} params.parent - (Required) Required. The instance's project and location in the format projects/{project}/locations/{location}.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.create = (params) => this._makeRequest('v1beta1/{+parent}/instances', 'POST', params);

    /**
     * Deletes a single Data Fusion instance.
     * @param {boolean} params.force - Optional. If set to true, any nested resources from this instance will also be deleted.
     * @param {string} params.name - (Required) Required. The instance resource name in the format projects/{project}/locations/{location}/instances/{instance}
     * @return {object} The API response object.
     */
    this.projects.locations.instances.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Updates a single Data Fusion instance.
     * @param {string} params.name - (Required) Output only. The name of this instance is in the form of projects/{project}/locations/{location}/instances/{instance}.
     * @param {string} params.updateMask - Field mask is used to specify the fields that the update will overwrite in an instance resource. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask, all the supported fields (labels and options currently) will be overwritten.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    /**
     * Restart a single Data Fusion instance. At the end of an operation instance is fully restarted.
     * @param {string} params.name - (Required) Required. Name of the Data Fusion instance which need to be restarted in the form of projects/{project}/locations/{location}/instances/{instance}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.restart = (params) => this._makeRequest('v1beta1/{+name}:restart', 'POST', params);

    /**
     * Upgrade a single Data Fusion instance. At the end of an operation instance is fully upgraded.
     * @param {string} params.name - (Required) Required. Name of the Data Fusion instance which need to be upgraded in the form of projects/{project}/locations/{location}/instances/{instance} Instance will be upgraded with the latest stable version of the Data Fusion.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.upgrade = (params) => this._makeRequest('v1beta1/{+name}:upgrade', 'POST', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.setIamPolicy = (params) => this._makeRequest('v1beta1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.getIamPolicy = (params) => this._makeRequest('v1beta1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.testIamPermissions = (params) => this._makeRequest('v1beta1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.instances.namespaces = {};

    /**
     * List namespaces in a given instance
     * @param {integer} params.pageSize - The maximum number of items to return.
     * @param {string} params.pageToken - The next_page_token value to use if there are additional results to retrieve for this list request.
     * @param {string} params.parent - (Required) Required. The instance to list its namespaces.
     * @param {string} params.view - By default, only basic information about a namespace is returned (e.g. name). When `NAMESPACE_VIEW_FULL` is specified, additional information associated with a namespace gets returned (e.g. IAM policy set on the namespace)
     * @return {object} The API response object.
     */
    this.projects.locations.instances.namespaces.list = (params) => this._makeRequest('v1beta1/{+parent}/namespaces', 'GET', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.namespaces.setIamPolicy = (params) => this._makeRequest('v1beta1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.namespaces.getIamPolicy = (params) => this._makeRequest('v1beta1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.namespaces.testIamPermissions = (params) => this._makeRequest('v1beta1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.instances.dnsPeerings = {};

    /**
     * Creates DNS peering on the given resource.
     * @param {string} params.dnsPeeringId - Required. The name of the peering to create.
     * @param {string} params.parent - (Required) Required. The resource on which DNS peering will be created.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.dnsPeerings.create = (params) => this._makeRequest('v1beta1/{+parent}/dnsPeerings', 'POST', params);

    /**
     * Deletes DNS peering on the given resource.
     * @param {string} params.name - (Required) Required. The name of the DNS peering zone to delete. Format: projects/{project}/locations/{location}/instances/{instance}/dnsPeerings/{dns_peering}
     * @return {object} The API response object.
     */
    this.projects.locations.instances.dnsPeerings.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Lists DNS peerings for a given resource.
     * @param {integer} params.pageSize - The maximum number of dns peerings to return. The service may return fewer than this value. If unspecified, at most 50 dns peerings will be returned. The maximum value is 200; values above 200 will be coerced to 200.
     * @param {string} params.pageToken - A page token, received from a previous `ListDnsPeerings` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListDnsPeerings` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent, which owns this collection of dns peerings. Format: projects/{project}/locations/{location}/instances/{instance}
     * @return {object} The API response object.
     */
    this.projects.locations.instances.dnsPeerings.list = (params) => this._makeRequest('v1beta1/{+parent}/dnsPeerings', 'GET', params);
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
