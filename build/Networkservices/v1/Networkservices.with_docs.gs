
/**
 * Google Apps Script client library for the Network Services API
 * Documentation URL: https://cloud.google.com/networking
 * @class
 */
class Networkservices {
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
    this._rootUrl = 'https://networkservices.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.locations = {};

    /**
     * Lists information about the supported locations for this service.
     * @param {string} params.extraLocationTypes - Optional. A list of extra location types that should be used as conditions for controlling the visibility of the locations.
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

    this.projects.locations.lbTrafficExtensions = {};

    /**
     * Lists `LbTrafficExtension` resources in a given project and location.
     * @param {string} params.filter - Optional. Filtering results.
     * @param {string} params.orderBy - Optional. Hint about how to order the results.
     * @param {integer} params.pageSize - Optional. Requested page size. The server might return fewer items than requested. If unspecified, the server picks an appropriate default.
     * @param {string} params.pageToken - Optional. A token identifying a page of results that the server returns.
     * @param {string} params.parent - (Required) Required. The project and location from which the `LbTrafficExtension` resources are listed. These values are specified in the following format: `projects/{project}/locations/{location}`.
     * @return {object} The API response object.
     */
    this.projects.locations.lbTrafficExtensions.list = (params) => this._makeRequest('v1/{+parent}/lbTrafficExtensions', 'GET', params);

    /**
     * Gets details of the specified `LbTrafficExtension` resource.
     * @param {string} params.name - (Required) Required. A name of the `LbTrafficExtension` resource to get. Must be in the format `projects/{project}/locations/{location}/lbTrafficExtensions/{lb_traffic_extension}`.
     * @return {object} The API response object.
     */
    this.projects.locations.lbTrafficExtensions.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new `LbTrafficExtension` resource in a given project and location.
     * @param {string} params.lbTrafficExtensionId - Required. User-provided ID of the `LbTrafficExtension` resource to be created.
     * @param {string} params.parent - (Required) Required. The parent resource of the `LbTrafficExtension` resource. Must be in the format `projects/{project}/locations/{location}`.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server can ignore the request if it has already been completed. The server guarantees that for 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server ignores the second request This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.lbTrafficExtensions.create = (params) => this._makeRequest('v1/{+parent}/lbTrafficExtensions', 'POST', params);

    /**
     * Updates the parameters of the specified `LbTrafficExtension` resource.
     * @param {string} params.name - (Required) Required. Identifier. Name of the `LbTrafficExtension` resource in the following format: `projects/{project}/locations/{location}/lbTrafficExtensions/{lb_traffic_extension}`.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server can ignore the request if it has already been completed. The server guarantees that for 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server ignores the second request This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.updateMask - Optional. Used to specify the fields to be overwritten in the `LbTrafficExtension` resource by the update. The fields specified in the `update_mask` are relative to the resource, not the full request. A field is overwritten if it is in the mask. If the user does not specify a mask, then all fields are overwritten.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.lbTrafficExtensions.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes the specified `LbTrafficExtension` resource.
     * @param {string} params.name - (Required) Required. The name of the `LbTrafficExtension` resource to delete. Must be in the format `projects/{project}/locations/{location}/lbTrafficExtensions/{lb_traffic_extension}`.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server can ignore the request if it has already been completed. The server guarantees that for 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server ignores the second request This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @return {object} The API response object.
     */
    this.projects.locations.lbTrafficExtensions.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.lbRouteExtensions = {};

    /**
     * Lists `LbRouteExtension` resources in a given project and location.
     * @param {string} params.filter - Optional. Filtering results.
     * @param {string} params.orderBy - Optional. Hint about how to order the results.
     * @param {integer} params.pageSize - Optional. Requested page size. The server might return fewer items than requested. If unspecified, the server picks an appropriate default.
     * @param {string} params.pageToken - Optional. A token identifying a page of results that the server returns.
     * @param {string} params.parent - (Required) Required. The project and location from which the `LbRouteExtension` resources are listed. These values are specified in the following format: `projects/{project}/locations/{location}`.
     * @return {object} The API response object.
     */
    this.projects.locations.lbRouteExtensions.list = (params) => this._makeRequest('v1/{+parent}/lbRouteExtensions', 'GET', params);

    /**
     * Gets details of the specified `LbRouteExtension` resource.
     * @param {string} params.name - (Required) Required. A name of the `LbRouteExtension` resource to get. Must be in the format `projects/{project}/locations/{location}/lbRouteExtensions/{lb_route_extension}`.
     * @return {object} The API response object.
     */
    this.projects.locations.lbRouteExtensions.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new `LbRouteExtension` resource in a given project and location.
     * @param {string} params.lbRouteExtensionId - Required. User-provided ID of the `LbRouteExtension` resource to be created.
     * @param {string} params.parent - (Required) Required. The parent resource of the `LbRouteExtension` resource. Must be in the format `projects/{project}/locations/{location}`.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server can ignore the request if it has already been completed. The server guarantees that for 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server ignores the second request This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.lbRouteExtensions.create = (params) => this._makeRequest('v1/{+parent}/lbRouteExtensions', 'POST', params);

    /**
     * Updates the parameters of the specified `LbRouteExtension` resource.
     * @param {string} params.name - (Required) Required. Identifier. Name of the `LbRouteExtension` resource in the following format: `projects/{project}/locations/{location}/lbRouteExtensions/{lb_route_extension}`.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server can ignore the request if it has already been completed. The server guarantees that for 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server ignores the second request This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.updateMask - Optional. Used to specify the fields to be overwritten in the `LbRouteExtension` resource by the update. The fields specified in the `update_mask` are relative to the resource, not the full request. A field is overwritten if it is in the mask. If the user does not specify a mask, then all fields are overwritten.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.lbRouteExtensions.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes the specified `LbRouteExtension` resource.
     * @param {string} params.name - (Required) Required. The name of the `LbRouteExtension` resource to delete. Must be in the format `projects/{project}/locations/{location}/lbRouteExtensions/{lb_route_extension}`.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server can ignore the request if it has already been completed. The server guarantees that for 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server ignores the second request This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @return {object} The API response object.
     */
    this.projects.locations.lbRouteExtensions.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.authzExtensions = {};

    /**
     * Lists `AuthzExtension` resources in a given project and location.
     * @param {string} params.filter - Optional. Filtering results.
     * @param {string} params.orderBy - Optional. Hint about how to order the results.
     * @param {integer} params.pageSize - Optional. Requested page size. The server might return fewer items than requested. If unspecified, the server picks an appropriate default.
     * @param {string} params.pageToken - Optional. A token identifying a page of results that the server returns.
     * @param {string} params.parent - (Required) Required. The project and location from which the `AuthzExtension` resources are listed. These values are specified in the following format: `projects/{project}/locations/{location}`.
     * @return {object} The API response object.
     */
    this.projects.locations.authzExtensions.list = (params) => this._makeRequest('v1/{+parent}/authzExtensions', 'GET', params);

    /**
     * Gets details of the specified `AuthzExtension` resource.
     * @param {string} params.name - (Required) Required. A name of the `AuthzExtension` resource to get. Must be in the format `projects/{project}/locations/{location}/authzExtensions/{authz_extension}`.
     * @return {object} The API response object.
     */
    this.projects.locations.authzExtensions.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new `AuthzExtension` resource in a given project and location.
     * @param {string} params.authzExtensionId - Required. User-provided ID of the `AuthzExtension` resource to be created.
     * @param {string} params.parent - (Required) Required. The parent resource of the `AuthzExtension` resource. Must be in the format `projects/{project}/locations/{location}`.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server can ignore the request if it has already been completed. The server guarantees that for 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server ignores the second request This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.authzExtensions.create = (params) => this._makeRequest('v1/{+parent}/authzExtensions', 'POST', params);

    /**
     * Updates the parameters of the specified `AuthzExtension` resource.
     * @param {string} params.name - (Required) Required. Identifier. Name of the `AuthzExtension` resource in the following format: `projects/{project}/locations/{location}/authzExtensions/{authz_extension}`.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server can ignore the request if it has already been completed. The server guarantees that for 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server ignores the second request This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.updateMask - Required. Used to specify the fields to be overwritten in the `AuthzExtension` resource by the update. The fields specified in the `update_mask` are relative to the resource, not the full request. A field is overwritten if it is in the mask. If the user does not specify a mask, then all fields are overwritten.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.authzExtensions.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes the specified `AuthzExtension` resource.
     * @param {string} params.name - (Required) Required. The name of the `AuthzExtension` resource to delete. Must be in the format `projects/{project}/locations/{location}/authzExtensions/{authz_extension}`.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server can ignore the request if it has already been completed. The server guarantees that for 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server ignores the second request This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @return {object} The API response object.
     */
    this.projects.locations.authzExtensions.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.endpointPolicies = {};

    /**
     * Lists EndpointPolicies in a given project and location.
     * @param {integer} params.pageSize - Maximum number of EndpointPolicies to return per call.
     * @param {string} params.pageToken - The value returned by the last `ListEndpointPoliciesResponse` Indicates that this is a continuation of a prior `ListEndpointPolicies` call, and that the system should return the next page of data.
     * @param {string} params.parent - (Required) Required. The project and location from which the EndpointPolicies should be listed, specified in the format `projects/*\/locations/global`.
     * @param {boolean} params.returnPartialSuccess - Optional. If true, allow partial responses for multi-regional Aggregated List requests. Otherwise if one of the locations is down or unreachable, the Aggregated List request will fail.
     * @return {object} The API response object.
     */
    this.projects.locations.endpointPolicies.list = (params) => this._makeRequest('v1/{+parent}/endpointPolicies', 'GET', params);

    /**
     * Gets details of a single EndpointPolicy.
     * @param {string} params.name - (Required) Required. A name of the EndpointPolicy to get. Must be in the format `projects/*\/locations/global/endpointPolicies/*`.
     * @return {object} The API response object.
     */
    this.projects.locations.endpointPolicies.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new EndpointPolicy in a given project and location.
     * @param {string} params.endpointPolicyId - Required. Short name of the EndpointPolicy resource to be created. E.g. "CustomECS".
     * @param {string} params.parent - (Required) Required. The parent resource of the EndpointPolicy. Must be in the format `projects/*\/locations/global`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.endpointPolicies.create = (params) => this._makeRequest('v1/{+parent}/endpointPolicies', 'POST', params);

    /**
     * Updates the parameters of a single EndpointPolicy.
     * @param {string} params.name - (Required) Identifier. Name of the EndpointPolicy resource. It matches pattern `projects/{project}/locations/global/endpointPolicies/{endpoint_policy}`.
     * @param {string} params.updateMask - Optional. Field mask is used to specify the fields to be overwritten in the EndpointPolicy resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.endpointPolicies.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a single EndpointPolicy.
     * @param {string} params.name - (Required) Required. A name of the EndpointPolicy to delete. Must be in the format `projects/*\/locations/global/endpointPolicies/*`.
     * @return {object} The API response object.
     */
    this.projects.locations.endpointPolicies.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.wasmPlugins = {};

    /**
     * Lists `WasmPlugin` resources in a given project and location.
     * @param {integer} params.pageSize - Maximum number of `WasmPlugin` resources to return per call. If not specified, at most 50 `WasmPlugin` resources are returned. The maximum value is 1000; values above 1000 are coerced to 1000.
     * @param {string} params.pageToken - The value returned by the last `ListWasmPluginsResponse` call. Indicates that this is a continuation of a prior `ListWasmPlugins` call, and that the next page of data is to be returned.
     * @param {string} params.parent - (Required) Required. The project and location from which the `WasmPlugin` resources are listed, specified in the following format: `projects/{project}/locations/global`.
     * @return {object} The API response object.
     */
    this.projects.locations.wasmPlugins.list = (params) => this._makeRequest('v1/{+parent}/wasmPlugins', 'GET', params);

    /**
     * Gets details of the specified `WasmPlugin` resource.
     * @param {string} params.name - (Required) Required. A name of the `WasmPlugin` resource to get. Must be in the format `projects/{project}/locations/global/wasmPlugins/{wasm_plugin}`.
     * @param {string} params.view - Determines how much data must be returned in the response. See [AIP-157](https://google.aip.dev/157).
     * @return {object} The API response object.
     */
    this.projects.locations.wasmPlugins.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new `WasmPlugin` resource in a given project and location.
     * @param {string} params.parent - (Required) Required. The parent resource of the `WasmPlugin` resource. Must be in the format `projects/{project}/locations/global`.
     * @param {string} params.wasmPluginId - Required. User-provided ID of the `WasmPlugin` resource to be created.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.wasmPlugins.create = (params) => this._makeRequest('v1/{+parent}/wasmPlugins', 'POST', params);

    /**
     * Updates the parameters of the specified `WasmPlugin` resource.
     * @param {string} params.name - (Required) Identifier. Name of the `WasmPlugin` resource in the following format: `projects/{project}/locations/{location}/wasmPlugins/{wasm_plugin}`.
     * @param {string} params.updateMask - Optional. Used to specify the fields to be overwritten in the `WasmPlugin` resource by the update. The fields specified in the `update_mask` field are relative to the resource, not the full request. An omitted `update_mask` field is treated as an implied `update_mask` field equivalent to all fields that are populated (that have a non-empty value). The `update_mask` field supports a special value `*`, which means that each field in the given `WasmPlugin` resource (including the empty ones) replaces the current value.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.wasmPlugins.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes the specified `WasmPlugin` resource.
     * @param {string} params.name - (Required) Required. A name of the `WasmPlugin` resource to delete. Must be in the format `projects/{project}/locations/global/wasmPlugins/{wasm_plugin}`.
     * @return {object} The API response object.
     */
    this.projects.locations.wasmPlugins.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.wasmPlugins.versions = {};

    /**
     * Lists `WasmPluginVersion` resources in a given project and location.
     * @param {integer} params.pageSize - Maximum number of `WasmPluginVersion` resources to return per call. If not specified, at most 50 `WasmPluginVersion` resources are returned. The maximum value is 1000; values above 1000 are coerced to 1000.
     * @param {string} params.pageToken - The value returned by the last `ListWasmPluginVersionsResponse` call. Indicates that this is a continuation of a prior `ListWasmPluginVersions` call, and that the next page of data is to be returned.
     * @param {string} params.parent - (Required) Required. The `WasmPlugin` resource whose `WasmPluginVersion`s are listed, specified in the following format: `projects/{project}/locations/global/wasmPlugins/{wasm_plugin}`.
     * @return {object} The API response object.
     */
    this.projects.locations.wasmPlugins.versions.list = (params) => this._makeRequest('v1/{+parent}/versions', 'GET', params);

    /**
     * Gets details of the specified `WasmPluginVersion` resource.
     * @param {string} params.name - (Required) Required. A name of the `WasmPluginVersion` resource to get. Must be in the format `projects/{project}/locations/global/wasmPlugins/{wasm_plugin}/versions/{wasm_plugin_version}`.
     * @return {object} The API response object.
     */
    this.projects.locations.wasmPlugins.versions.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new `WasmPluginVersion` resource in a given project and location.
     * @param {string} params.parent - (Required) Required. The parent resource of the `WasmPluginVersion` resource. Must be in the format `projects/{project}/locations/global/wasmPlugins/{wasm_plugin}`.
     * @param {string} params.wasmPluginVersionId - Required. User-provided ID of the `WasmPluginVersion` resource to be created.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.wasmPlugins.versions.create = (params) => this._makeRequest('v1/{+parent}/versions', 'POST', params);

    /**
     * Deletes the specified `WasmPluginVersion` resource.
     * @param {string} params.name - (Required) Required. A name of the `WasmPluginVersion` resource to delete. Must be in the format `projects/{project}/locations/global/wasmPlugins/{wasm_plugin}/versions/{wasm_plugin_version}`.
     * @return {object} The API response object.
     */
    this.projects.locations.wasmPlugins.versions.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.gateways = {};

    /**
     * Lists Gateways in a given project and location.
     * @param {integer} params.pageSize - Maximum number of Gateways to return per call.
     * @param {string} params.pageToken - The value returned by the last `ListGatewaysResponse` Indicates that this is a continuation of a prior `ListGateways` call, and that the system should return the next page of data.
     * @param {string} params.parent - (Required) Required. The project and location from which the Gateways should be listed, specified in the format `projects/*\/locations/*`.
     * @return {object} The API response object.
     */
    this.projects.locations.gateways.list = (params) => this._makeRequest('v1/{+parent}/gateways', 'GET', params);

    /**
     * Gets details of a single Gateway.
     * @param {string} params.name - (Required) Required. A name of the Gateway to get. Must be in the format `projects/*\/locations/*\/gateways/*`.
     * @return {object} The API response object.
     */
    this.projects.locations.gateways.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new Gateway in a given project and location.
     * @param {string} params.gatewayId - Required. Short name of the Gateway resource to be created.
     * @param {string} params.parent - (Required) Required. The parent resource of the Gateway. Must be in the format `projects/*\/locations/*`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.gateways.create = (params) => this._makeRequest('v1/{+parent}/gateways', 'POST', params);

    /**
     * Updates the parameters of a single Gateway.
     * @param {string} params.name - (Required) Identifier. Name of the Gateway resource. It matches pattern `projects/*\/locations/*\/gateways/`.
     * @param {string} params.updateMask - Optional. Field mask is used to specify the fields to be overwritten in the Gateway resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.gateways.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a single Gateway.
     * @param {string} params.name - (Required) Required. A name of the Gateway to delete. Must be in the format `projects/*\/locations/*\/gateways/*`.
     * @return {object} The API response object.
     */
    this.projects.locations.gateways.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.gateways.routeViews = {};

    /**
     * Get a single RouteView of a Gateway.
     * @param {string} params.name - (Required) Required. Name of the GatewayRouteView resource. Formats: projects/{project_number}/locations/{location}/gateways/{gateway}/routeViews/{route_view}
     * @return {object} The API response object.
     */
    this.projects.locations.gateways.routeViews.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists RouteViews
     * @param {integer} params.pageSize - Maximum number of GatewayRouteViews to return per call.
     * @param {string} params.pageToken - The value returned by the last `ListGatewayRouteViewsResponse` Indicates that this is a continuation of a prior `ListGatewayRouteViews` call, and that the system should return the next page of data.
     * @param {string} params.parent - (Required) Required. The Gateway to which a Route is associated. Formats: projects/{project_number}/locations/{location}/gateways/{gateway}
     * @return {object} The API response object.
     */
    this.projects.locations.gateways.routeViews.list = (params) => this._makeRequest('v1/{+parent}/routeViews', 'GET', params);

    this.projects.locations.grpcRoutes = {};

    /**
     * Lists GrpcRoutes in a given project and location.
     * @param {integer} params.pageSize - Maximum number of GrpcRoutes to return per call.
     * @param {string} params.pageToken - The value returned by the last `ListGrpcRoutesResponse` Indicates that this is a continuation of a prior `ListGrpcRoutes` call, and that the system should return the next page of data.
     * @param {string} params.parent - (Required) Required. The project and location from which the GrpcRoutes should be listed, specified in the format `projects/*\/locations/global`.
     * @param {boolean} params.returnPartialSuccess - Optional. If true, allow partial responses for multi-regional Aggregated List requests. Otherwise if one of the locations is down or unreachable, the Aggregated List request will fail.
     * @return {object} The API response object.
     */
    this.projects.locations.grpcRoutes.list = (params) => this._makeRequest('v1/{+parent}/grpcRoutes', 'GET', params);

    /**
     * Gets details of a single GrpcRoute.
     * @param {string} params.name - (Required) Required. A name of the GrpcRoute to get. Must be in the format `projects/*\/locations/global/grpcRoutes/*`.
     * @return {object} The API response object.
     */
    this.projects.locations.grpcRoutes.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new GrpcRoute in a given project and location.
     * @param {string} params.grpcRouteId - Required. Short name of the GrpcRoute resource to be created.
     * @param {string} params.parent - (Required) Required. The parent resource of the GrpcRoute. Must be in the format `projects/*\/locations/global`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.grpcRoutes.create = (params) => this._makeRequest('v1/{+parent}/grpcRoutes', 'POST', params);

    /**
     * Updates the parameters of a single GrpcRoute.
     * @param {string} params.name - (Required) Identifier. Name of the GrpcRoute resource. It matches pattern `projects/*\/locations/global/grpcRoutes/`
     * @param {string} params.updateMask - Optional. Field mask is used to specify the fields to be overwritten in the GrpcRoute resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.grpcRoutes.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a single GrpcRoute.
     * @param {string} params.name - (Required) Required. A name of the GrpcRoute to delete. Must be in the format `projects/*\/locations/global/grpcRoutes/*`.
     * @return {object} The API response object.
     */
    this.projects.locations.grpcRoutes.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.httpRoutes = {};

    /**
     * Lists HttpRoute in a given project and location.
     * @param {integer} params.pageSize - Maximum number of HttpRoutes to return per call.
     * @param {string} params.pageToken - The value returned by the last `ListHttpRoutesResponse` Indicates that this is a continuation of a prior `ListHttpRoutes` call, and that the system should return the next page of data.
     * @param {string} params.parent - (Required) Required. The project and location from which the HttpRoutes should be listed, specified in the format `projects/*\/locations/global`.
     * @param {boolean} params.returnPartialSuccess - Optional. If true, allow partial responses for multi-regional Aggregated List requests. Otherwise if one of the locations is down or unreachable, the Aggregated List request will fail.
     * @return {object} The API response object.
     */
    this.projects.locations.httpRoutes.list = (params) => this._makeRequest('v1/{+parent}/httpRoutes', 'GET', params);

    /**
     * Gets details of a single HttpRoute.
     * @param {string} params.name - (Required) Required. A name of the HttpRoute to get. Must be in the format `projects/*\/locations/global/httpRoutes/*`.
     * @return {object} The API response object.
     */
    this.projects.locations.httpRoutes.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new HttpRoute in a given project and location.
     * @param {string} params.httpRouteId - Required. Short name of the HttpRoute resource to be created.
     * @param {string} params.parent - (Required) Required. The parent resource of the HttpRoute. Must be in the format `projects/*\/locations/global`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.httpRoutes.create = (params) => this._makeRequest('v1/{+parent}/httpRoutes', 'POST', params);

    /**
     * Updates the parameters of a single HttpRoute.
     * @param {string} params.name - (Required) Identifier. Name of the HttpRoute resource. It matches pattern `projects/*\/locations/global/httpRoutes/http_route_name>`.
     * @param {string} params.updateMask - Optional. Field mask is used to specify the fields to be overwritten in the HttpRoute resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.httpRoutes.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a single HttpRoute.
     * @param {string} params.name - (Required) Required. A name of the HttpRoute to delete. Must be in the format `projects/*\/locations/global/httpRoutes/*`.
     * @return {object} The API response object.
     */
    this.projects.locations.httpRoutes.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.tcpRoutes = {};

    /**
     * Lists TcpRoute in a given project and location.
     * @param {integer} params.pageSize - Maximum number of TcpRoutes to return per call.
     * @param {string} params.pageToken - The value returned by the last `ListTcpRoutesResponse` Indicates that this is a continuation of a prior `ListTcpRoutes` call, and that the system should return the next page of data.
     * @param {string} params.parent - (Required) Required. The project and location from which the TcpRoutes should be listed, specified in the format `projects/*\/locations/global`.
     * @param {boolean} params.returnPartialSuccess - Optional. If true, allow partial responses for multi-regional Aggregated List requests. Otherwise if one of the locations is down or unreachable, the Aggregated List request will fail.
     * @return {object} The API response object.
     */
    this.projects.locations.tcpRoutes.list = (params) => this._makeRequest('v1/{+parent}/tcpRoutes', 'GET', params);

    /**
     * Gets details of a single TcpRoute.
     * @param {string} params.name - (Required) Required. A name of the TcpRoute to get. Must be in the format `projects/*\/locations/global/tcpRoutes/*`.
     * @return {object} The API response object.
     */
    this.projects.locations.tcpRoutes.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new TcpRoute in a given project and location.
     * @param {string} params.parent - (Required) Required. The parent resource of the TcpRoute. Must be in the format `projects/*\/locations/global`.
     * @param {string} params.tcpRouteId - Required. Short name of the TcpRoute resource to be created.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.tcpRoutes.create = (params) => this._makeRequest('v1/{+parent}/tcpRoutes', 'POST', params);

    /**
     * Updates the parameters of a single TcpRoute.
     * @param {string} params.name - (Required) Identifier. Name of the TcpRoute resource. It matches pattern `projects/*\/locations/global/tcpRoutes/tcp_route_name>`.
     * @param {string} params.updateMask - Optional. Field mask is used to specify the fields to be overwritten in the TcpRoute resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.tcpRoutes.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a single TcpRoute.
     * @param {string} params.name - (Required) Required. A name of the TcpRoute to delete. Must be in the format `projects/*\/locations/global/tcpRoutes/*`.
     * @return {object} The API response object.
     */
    this.projects.locations.tcpRoutes.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.tlsRoutes = {};

    /**
     * Lists TlsRoute in a given project and location.
     * @param {integer} params.pageSize - Maximum number of TlsRoutes to return per call.
     * @param {string} params.pageToken - The value returned by the last `ListTlsRoutesResponse` Indicates that this is a continuation of a prior `ListTlsRoutes` call, and that the system should return the next page of data.
     * @param {string} params.parent - (Required) Required. The project and location from which the TlsRoutes should be listed, specified in the format `projects/*\/locations/global`.
     * @param {boolean} params.returnPartialSuccess - Optional. If true, allow partial responses for multi-regional Aggregated List requests. Otherwise if one of the locations is down or unreachable, the Aggregated List request will fail.
     * @return {object} The API response object.
     */
    this.projects.locations.tlsRoutes.list = (params) => this._makeRequest('v1/{+parent}/tlsRoutes', 'GET', params);

    /**
     * Gets details of a single TlsRoute.
     * @param {string} params.name - (Required) Required. A name of the TlsRoute to get. Must be in the format `projects/*\/locations/global/tlsRoutes/*`.
     * @return {object} The API response object.
     */
    this.projects.locations.tlsRoutes.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new TlsRoute in a given project and location.
     * @param {string} params.parent - (Required) Required. The parent resource of the TlsRoute. Must be in the format `projects/*\/locations/global`.
     * @param {string} params.tlsRouteId - Required. Short name of the TlsRoute resource to be created.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.tlsRoutes.create = (params) => this._makeRequest('v1/{+parent}/tlsRoutes', 'POST', params);

    /**
     * Updates the parameters of a single TlsRoute.
     * @param {string} params.name - (Required) Identifier. Name of the TlsRoute resource. It matches pattern `projects/*\/locations/global/tlsRoutes/tls_route_name>`.
     * @param {string} params.updateMask - Optional. Field mask is used to specify the fields to be overwritten in the TlsRoute resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.tlsRoutes.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a single TlsRoute.
     * @param {string} params.name - (Required) Required. A name of the TlsRoute to delete. Must be in the format `projects/*\/locations/global/tlsRoutes/*`.
     * @return {object} The API response object.
     */
    this.projects.locations.tlsRoutes.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.serviceBindings = {};

    /**
     * Lists ServiceBinding in a given project and location.
     * @param {integer} params.pageSize - Maximum number of ServiceBindings to return per call.
     * @param {string} params.pageToken - The value returned by the last `ListServiceBindingsResponse` Indicates that this is a continuation of a prior `ListRouters` call, and that the system should return the next page of data.
     * @param {string} params.parent - (Required) Required. The project and location from which the ServiceBindings should be listed, specified in the format `projects/*\/locations/*`.
     * @return {object} The API response object.
     */
    this.projects.locations.serviceBindings.list = (params) => this._makeRequest('v1/{+parent}/serviceBindings', 'GET', params);

    /**
     * Gets details of a single ServiceBinding.
     * @param {string} params.name - (Required) Required. A name of the ServiceBinding to get. Must be in the format `projects/*\/locations/*\/serviceBindings/*`.
     * @return {object} The API response object.
     */
    this.projects.locations.serviceBindings.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new ServiceBinding in a given project and location.
     * @param {string} params.parent - (Required) Required. The parent resource of the ServiceBinding. Must be in the format `projects/*\/locations/*`.
     * @param {string} params.serviceBindingId - Required. Short name of the ServiceBinding resource to be created.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.serviceBindings.create = (params) => this._makeRequest('v1/{+parent}/serviceBindings', 'POST', params);

    /**
     * Updates the parameters of a single ServiceBinding.
     * @param {string} params.name - (Required) Identifier. Name of the ServiceBinding resource. It matches pattern `projects/*\/locations/*\/serviceBindings/`.
     * @param {string} params.updateMask - Optional. Field mask is used to specify the fields to be overwritten in the ServiceBinding resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.serviceBindings.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a single ServiceBinding.
     * @param {string} params.name - (Required) Required. A name of the ServiceBinding to delete. Must be in the format `projects/*\/locations/*\/serviceBindings/*`.
     * @return {object} The API response object.
     */
    this.projects.locations.serviceBindings.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.meshes = {};

    /**
     * Lists Meshes in a given project and location.
     * @param {integer} params.pageSize - Maximum number of Meshes to return per call.
     * @param {string} params.pageToken - The value returned by the last `ListMeshesResponse` Indicates that this is a continuation of a prior `ListMeshes` call, and that the system should return the next page of data.
     * @param {string} params.parent - (Required) Required. The project and location from which the Meshes should be listed, specified in the format `projects/*\/locations/global`.
     * @param {boolean} params.returnPartialSuccess - Optional. If true, allow partial responses for multi-regional Aggregated List requests. Otherwise if one of the locations is down or unreachable, the Aggregated List request will fail.
     * @return {object} The API response object.
     */
    this.projects.locations.meshes.list = (params) => this._makeRequest('v1/{+parent}/meshes', 'GET', params);

    /**
     * Gets details of a single Mesh.
     * @param {string} params.name - (Required) Required. A name of the Mesh to get. Must be in the format `projects/*\/locations/global/meshes/*`.
     * @return {object} The API response object.
     */
    this.projects.locations.meshes.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new Mesh in a given project and location.
     * @param {string} params.meshId - Required. Short name of the Mesh resource to be created.
     * @param {string} params.parent - (Required) Required. The parent resource of the Mesh. Must be in the format `projects/*\/locations/global`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.meshes.create = (params) => this._makeRequest('v1/{+parent}/meshes', 'POST', params);

    /**
     * Updates the parameters of a single Mesh.
     * @param {string} params.name - (Required) Identifier. Name of the Mesh resource. It matches pattern `projects/*\/locations/global/meshes/`.
     * @param {string} params.updateMask - Optional. Field mask is used to specify the fields to be overwritten in the Mesh resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.meshes.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a single Mesh.
     * @param {string} params.name - (Required) Required. A name of the Mesh to delete. Must be in the format `projects/*\/locations/global/meshes/*`.
     * @return {object} The API response object.
     */
    this.projects.locations.meshes.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.meshes.routeViews = {};

    /**
     * Get a single RouteView of a Mesh.
     * @param {string} params.name - (Required) Required. Name of the MeshRouteView resource. Format: projects/{project_number}/locations/{location}/meshes/{mesh}/routeViews/{route_view}
     * @return {object} The API response object.
     */
    this.projects.locations.meshes.routeViews.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists RouteViews
     * @param {integer} params.pageSize - Maximum number of MeshRouteViews to return per call.
     * @param {string} params.pageToken - The value returned by the last `ListMeshRouteViewsResponse` Indicates that this is a continuation of a prior `ListMeshRouteViews` call, and that the system should return the next page of data.
     * @param {string} params.parent - (Required) Required. The Mesh to which a Route is associated. Format: projects/{project_number}/locations/{location}/meshes/{mesh}
     * @return {object} The API response object.
     */
    this.projects.locations.meshes.routeViews.list = (params) => this._makeRequest('v1/{+parent}/routeViews', 'GET', params);

    this.projects.locations.serviceLbPolicies = {};

    /**
     * Lists ServiceLbPolicies in a given project and location.
     * @param {integer} params.pageSize - Maximum number of ServiceLbPolicies to return per call.
     * @param {string} params.pageToken - The value returned by the last `ListServiceLbPoliciesResponse` Indicates that this is a continuation of a prior `ListRouters` call, and that the system should return the next page of data.
     * @param {string} params.parent - (Required) Required. The project and location from which the ServiceLbPolicies should be listed, specified in the format `projects/{project}/locations/{location}`.
     * @return {object} The API response object.
     */
    this.projects.locations.serviceLbPolicies.list = (params) => this._makeRequest('v1/{+parent}/serviceLbPolicies', 'GET', params);

    /**
     * Gets details of a single ServiceLbPolicy.
     * @param {string} params.name - (Required) Required. A name of the ServiceLbPolicy to get. Must be in the format `projects/{project}/locations/{location}/serviceLbPolicies/*`.
     * @return {object} The API response object.
     */
    this.projects.locations.serviceLbPolicies.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new ServiceLbPolicy in a given project and location.
     * @param {string} params.parent - (Required) Required. The parent resource of the ServiceLbPolicy. Must be in the format `projects/{project}/locations/{location}`.
     * @param {string} params.serviceLbPolicyId - Required. Short name of the ServiceLbPolicy resource to be created. E.g. for resource name `projects/{project}/locations/{location}/serviceLbPolicies/{service_lb_policy_name}`. the id is value of {service_lb_policy_name}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.serviceLbPolicies.create = (params) => this._makeRequest('v1/{+parent}/serviceLbPolicies', 'POST', params);

    /**
     * Updates the parameters of a single ServiceLbPolicy.
     * @param {string} params.name - (Required) Identifier. Name of the ServiceLbPolicy resource. It matches pattern `projects/{project}/locations/{location}/serviceLbPolicies/{service_lb_policy_name}`.
     * @param {string} params.updateMask - Optional. Field mask is used to specify the fields to be overwritten in the ServiceLbPolicy resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.serviceLbPolicies.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a single ServiceLbPolicy.
     * @param {string} params.name - (Required) Required. A name of the ServiceLbPolicy to delete. Must be in the format `projects/{project}/locations/{location}/serviceLbPolicies/*`.
     * @return {object} The API response object.
     */
    this.projects.locations.serviceLbPolicies.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.edgeCacheKeysets = {};

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.edgeCacheKeysets.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.edgeCacheKeysets.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.edgeCacheKeysets.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.edgeCacheOrigins = {};

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.edgeCacheOrigins.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.edgeCacheOrigins.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.edgeCacheOrigins.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.edgeCacheServices = {};

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.edgeCacheServices.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.edgeCacheServices.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.edgeCacheServices.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);
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
