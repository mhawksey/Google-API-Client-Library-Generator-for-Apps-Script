
/**
 * Google Apps Script client library for the Service Directory API
 * Documentation URL: https://cloud.google.com/service-directory
 * @class
 */
class Servicedirectory {
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
    this._rootUrl = 'https://servicedirectory.googleapis.com/';
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
    this.projects.locations.list = (params) => this._makeRequest('v1beta1/{+name}/locations', 'GET', params);

    /**
     * Gets information about a location.
     * @param {string} params.name - (Required) Resource name for the location.
     * @return {object} The API response object.
     */
    this.projects.locations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    this.projects.locations.namespaces = {};

    /**
     * Creates a namespace, and returns the new namespace.
     * @param {string} params.namespaceId - Required. The Resource ID must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z](?:[-a-z0-9]{0,61}[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
     * @param {string} params.parent - (Required) Required. The resource name of the project and location the namespace will be created in.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.namespaces.create = (params) => this._makeRequest('v1beta1/{+parent}/namespaces', 'POST', params);

    /**
     * Lists all namespaces.
     * @param {string} params.filter - Optional. The filter to list results by. General `filter` string syntax: ` ()` * `` can be `name`, `labels.` for map field, or `attributes.` for attributes field * `` can be `<`, `>`, `<=`, `>=`, `!=`, `=`, `:`. Of which `:` means `HAS`, and is roughly the same as `=` * `` must be the same data type as field * `` can be `AND`, `OR`, `NOT` Examples of valid filters: * `labels.owner` returns namespaces that have a label with the key `owner`, this is the same as `labels:owner` * `labels.owner=sd` returns namespaces that have key/value `owner=sd` * `name>projects/my-project/locations/us-east1/namespaces/namespace-c` returns namespaces that have name that is alphabetically later than the string, so "namespace-e" is returned but "namespace-a" is not * `labels.owner!=sd AND labels.foo=bar` returns namespaces that have `owner` in label key but value is not `sd` AND have key/value `foo=bar` * `doesnotexist.foo=bar` returns an empty list. Note that namespace doesn't have a field called "doesnotexist". Since the filter does not match any namespaces, it returns no results * `attributes.managed_registration=true` returns namespaces that are managed by a GCP product or service For more information about filtering, see [API Filtering](https://aip.dev/160).
     * @param {string} params.orderBy - Optional. The order to list results by. General `order_by` string syntax: ` () (,)` * `` allows value: `name` * `` ascending or descending order by ``. If this is left blank, `asc` is used Note that an empty `order_by` string results in default order, which is order by `name` in ascending order.
     * @param {integer} params.pageSize - Optional. The maximum number of items to return. The default value is 100.
     * @param {string} params.pageToken - Optional. The next_page_token value returned from a previous List request, if any.
     * @param {string} params.parent - (Required) Required. The resource name of the project and location whose namespaces you'd like to list.
     * @return {object} The API response object.
     */
    this.projects.locations.namespaces.list = (params) => this._makeRequest('v1beta1/{+parent}/namespaces', 'GET', params);

    /**
     * Gets a namespace.
     * @param {string} params.name - (Required) Required. The name of the namespace to retrieve.
     * @return {object} The API response object.
     */
    this.projects.locations.namespaces.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Updates a namespace.
     * @param {string} params.name - (Required) Immutable. The resource name for the namespace in the format `projects/*\/locations/*\/namespaces/*`.
     * @param {string} params.updateMask - Required. List of fields to be updated in this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.namespaces.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    /**
     * Deletes a namespace. This also deletes all services and endpoints in the namespace.
     * @param {string} params.name - (Required) Required. The name of the namespace to delete.
     * @return {object} The API response object.
     */
    this.projects.locations.namespaces.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Gets the IAM Policy for a resource
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.namespaces.getIamPolicy = (params) => this._makeRequest('v1beta1/{+resource}:getIamPolicy', 'POST', params);

    /**
     * Sets the IAM Policy for a resource
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.namespaces.setIamPolicy = (params) => this._makeRequest('v1beta1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Tests IAM permissions for a resource (namespace, service or service workload only).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.namespaces.testIamPermissions = (params) => this._makeRequest('v1beta1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.namespaces.services = {};

    /**
     * Returns a service and its associated endpoints. Resolving a service is not considered an active developer method.
     * @param {string} params.name - (Required) Required. The name of the service to resolve.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.namespaces.services.resolve = (params) => this._makeRequest('v1beta1/{+name}:resolve', 'POST', params);

    /**
     * Creates a service, and returns the new service.
     * @param {string} params.parent - (Required) Required. The resource name of the namespace this service will belong to.
     * @param {string} params.serviceId - Required. The Resource ID must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z](?:[-a-z0-9]{0,61}[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.namespaces.services.create = (params) => this._makeRequest('v1beta1/{+parent}/services', 'POST', params);

    /**
     * Lists all services belonging to a namespace.
     * @param {string} params.filter - Optional. The filter to list results by. General `filter` string syntax: ` ()` * `` can be `name` or `metadata.` for map field * `` can be `<`, `>`, `<=`, `>=`, `!=`, `=`, `:`. Of which `:` means `HAS`, and is roughly the same as `=` * `` must be the same data type as field * `` can be `AND`, `OR`, `NOT` Examples of valid filters: * `metadata.owner` returns services that have a metadata with the key `owner`, this is the same as `metadata:owner` * `metadata.protocol=gRPC` returns services that have key/value `protocol=gRPC` * `name>projects/my-project/locations/us-east1/namespaces/my-namespace/services/service-c` returns services that have name that is alphabetically later than the string, so "service-e" is returned but "service-a" is not * `metadata.owner!=sd AND metadata.foo=bar` returns services that have `owner` in metadata key but value is not `sd` AND have key/value `foo=bar` * `doesnotexist.foo=bar` returns an empty list. Note that service doesn't have a field called "doesnotexist". Since the filter does not match any services, it returns no results * `attributes.managed_registration=true` returns services that are managed by a GCP product or service For more information about filtering, see [API Filtering](https://aip.dev/160).
     * @param {string} params.orderBy - Optional. The order to list results by. General `order_by` string syntax: ` () (,)` * `` allows value: `name` * `` ascending or descending order by ``. If this is left blank, `asc` is used Note that an empty `order_by` string results in default order, which is order by `name` in ascending order.
     * @param {integer} params.pageSize - Optional. The maximum number of items to return. The default value is 100.
     * @param {string} params.pageToken - Optional. The next_page_token value returned from a previous List request, if any.
     * @param {string} params.parent - (Required) Required. The resource name of the namespace whose services you'd like to list.
     * @return {object} The API response object.
     */
    this.projects.locations.namespaces.services.list = (params) => this._makeRequest('v1beta1/{+parent}/services', 'GET', params);

    /**
     * Gets a service.
     * @param {string} params.name - (Required) Required. The name of the service to get.
     * @return {object} The API response object.
     */
    this.projects.locations.namespaces.services.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Updates a service.
     * @param {string} params.name - (Required) Immutable. The resource name for the service in the format `projects/*\/locations/*\/namespaces/*\/services/*`.
     * @param {string} params.updateMask - Required. List of fields to be updated in this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.namespaces.services.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    /**
     * Deletes a service. This also deletes all endpoints associated with the service.
     * @param {string} params.name - (Required) Required. The name of the service to delete.
     * @return {object} The API response object.
     */
    this.projects.locations.namespaces.services.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Gets the IAM Policy for a resource
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.namespaces.services.getIamPolicy = (params) => this._makeRequest('v1beta1/{+resource}:getIamPolicy', 'POST', params);

    /**
     * Sets the IAM Policy for a resource
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.namespaces.services.setIamPolicy = (params) => this._makeRequest('v1beta1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Tests IAM permissions for a resource (namespace, service or service workload only).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.namespaces.services.testIamPermissions = (params) => this._makeRequest('v1beta1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.namespaces.services.endpoints = {};

    /**
     * Creates an endpoint, and returns the new endpoint.
     * @param {string} params.endpointId - Required. The Resource ID must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression `[a-z](?:[-a-z0-9]{0,61}[a-z0-9])?` which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.
     * @param {string} params.parent - (Required) Required. The resource name of the service that this endpoint provides.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.namespaces.services.endpoints.create = (params) => this._makeRequest('v1beta1/{+parent}/endpoints', 'POST', params);

    /**
     * Lists all endpoints.
     * @param {string} params.filter - Optional. The filter to list results by. General `filter` string syntax: ` ()` * `` can be `name`, `address`, `port`, `metadata.` for map field, or `attributes.` for attributes field * `` can be `<`, `>`, `<=`, `>=`, `!=`, `=`, `:`. Of which `:` means `HAS`, and is roughly the same as `=` * `` must be the same data type as field * `` can be `AND`, `OR`, `NOT` Examples of valid filters: * `metadata.owner` returns endpoints that have a metadata with the key `owner`, this is the same as `metadata:owner` * `metadata.protocol=gRPC` returns endpoints that have key/value `protocol=gRPC` * `address=192.108.1.105` returns endpoints that have this address * `port>8080` returns endpoints that have port number larger than 8080 * `name>projects/my-project/locations/us-east1/namespaces/my-namespace/services/my-service/endpoints/endpoint-c` returns endpoints that have name that is alphabetically later than the string, so "endpoint-e" is returned but "endpoint-a" is not * `metadata.owner!=sd AND metadata.foo=bar` returns endpoints that have `owner` in metadata key but value is not `sd` AND have key/value `foo=bar` * `doesnotexist.foo=bar` returns an empty list. Note that endpoint doesn't have a field called "doesnotexist". Since the filter does not match any endpoints, it returns no results * `attributes.kubernetes_resource_type=KUBERNETES_RESOURCE_TYPE_CLUSTER_ IP` returns endpoints with the corresponding kubernetes_resource_type For more information about filtering, see [API Filtering](https://aip.dev/160).
     * @param {string} params.orderBy - Optional. The order to list results by. General `order_by` string syntax: ` () (,)` * `` allows values: `name`, `address`, `port` * `` ascending or descending order by ``. If this is left blank, `asc` is used Note that an empty `order_by` string results in default order, which is order by `name` in ascending order.
     * @param {integer} params.pageSize - Optional. The maximum number of items to return. The default value is 100.
     * @param {string} params.pageToken - Optional. The next_page_token value returned from a previous List request, if any.
     * @param {string} params.parent - (Required) Required. The resource name of the service whose endpoints you'd like to list.
     * @return {object} The API response object.
     */
    this.projects.locations.namespaces.services.endpoints.list = (params) => this._makeRequest('v1beta1/{+parent}/endpoints', 'GET', params);

    /**
     * Gets an endpoint.
     * @param {string} params.name - (Required) Required. The name of the endpoint to get.
     * @return {object} The API response object.
     */
    this.projects.locations.namespaces.services.endpoints.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Updates an endpoint.
     * @param {string} params.name - (Required) Immutable. The resource name for the endpoint in the format `projects/*\/locations/*\/namespaces/*\/services/*\/endpoints/*`.
     * @param {string} params.updateMask - Required. List of fields to be updated in this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.namespaces.services.endpoints.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    /**
     * Deletes an endpoint.
     * @param {string} params.name - (Required) Required. The name of the endpoint to delete.
     * @return {object} The API response object.
     */
    this.projects.locations.namespaces.services.endpoints.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    this.projects.locations.namespaces.workloads = {};

    /**
     * Gets the IAM Policy for a resource
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.namespaces.workloads.getIamPolicy = (params) => this._makeRequest('v1beta1/{+resource}:getIamPolicy', 'POST', params);

    /**
     * Sets the IAM Policy for a resource
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.namespaces.workloads.setIamPolicy = (params) => this._makeRequest('v1beta1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Tests IAM permissions for a resource (namespace, service or service workload only).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.namespaces.workloads.testIamPermissions = (params) => this._makeRequest('v1beta1/{+resource}:testIamPermissions', 'POST', params);
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
