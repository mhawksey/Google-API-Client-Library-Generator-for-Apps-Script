
/**
 * Google Apps Script client library for the API hub API
 * Documentation URL: https://cloud.google.com/apigee/docs/api-hub/what-is-api-hub
 * @class
 */
class Apihub {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://apihub.googleapis.com/';
    this._servicePath = '';


    this.projects = {};

    this.projects.locations = {};

    /**
     * Search across API-Hub resources.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.location - (Required) Required. The resource name of the location which will be of the type `projects/{project_id}/locations/{location_id}`. This field is used to identify the instance of API-Hub in which resources should be searched.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.searchResources = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+location}:searchResources', 'POST', apiParams, clientConfig);

    /**
     * Collect API data from a source and push it to Hub's collect layer.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.location - (Required) Required. The regional location of the API hub instance and its resources. Format: `projects/{project}/locations/{location}`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.collectApiData = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+location}:collectApiData', 'POST', apiParams, clientConfig);

    /**
     * Look up a runtime project attachment. This API can be called in the context of any project.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Runtime project ID to look up runtime project attachment for. Lookup happens across all regions. Expected format: `projects/{project}/locations/{location}`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.lookupRuntimeProjectAttachment = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:lookupRuntimeProjectAttachment', 'GET', apiParams, clientConfig);

    /**
     * Lists information about the supported locations for this service.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.extraLocationTypes - Optional. Unless explicitly documented otherwise, don't use this unsupported field which is primarily intended for internal usage.
     * @param {string} apiParams.filter - A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
     * @param {string} apiParams.name - (Required) The resource that owns the locations collection, if applicable.
     * @param {integer} apiParams.pageSize - The maximum number of results to return. If not set, the service selects a default.
     * @param {string} apiParams.pageToken - A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}/locations', 'GET', apiParams, clientConfig);

    /**
     * Gets information about a location.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Resource name for the location.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - The standard list filter.
     * @param {string} apiParams.name - (Required) The name of the operation's parent resource.
     * @param {integer} apiParams.pageSize - The standard list page size.
     * @param {string} apiParams.pageToken - The standard list page token.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}/operations', 'GET', apiParams, clientConfig);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the operation resource.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the operation resource to be deleted.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the operation resource to be cancelled.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:cancel', 'POST', apiParams, clientConfig);

    this.projects.locations.plugins = {};

    /**
     * Get an API Hub plugin.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the plugin to retrieve. Format: `projects/{project}/locations/{location}/plugins/{plugin}`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.plugins.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Enables a plugin. The `state` of the plugin after enabling is `ENABLED`
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the plugin to enable. Format: `projects/{project}/locations/{location}/plugins/{plugin}`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.plugins.enable = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:enable', 'POST', apiParams, clientConfig);

    /**
     * Disables a plugin. The `state` of the plugin after disabling is `DISABLED`
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the plugin to disable. Format: `projects/{project}/locations/{location}/plugins/{plugin}`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.plugins.disable = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:disable', 'POST', apiParams, clientConfig);

    /**
     * Create an API Hub plugin resource in the API hub. Once a plugin is created, it can be used to create plugin instances.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent resource where this plugin will be created. Format: `projects/{project}/locations/{location}`.
     * @param {string} apiParams.pluginId - Optional. The ID to use for the Plugin resource, which will become the final component of the Plugin's resource name. This field is optional. * If provided, the same will be used. The service will throw an error if the specified id is already used by another Plugin resource in the API hub instance. * If not provided, a system generated id will be used. This value should be 4-63 characters, overall resource name which will be of format `projects/{project}/locations/{location}/plugins/{plugin}`, its length is limited to 1000 characters and valid characters are /a-z[0-9]-_/.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.plugins.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/plugins', 'POST', apiParams, clientConfig);

    /**
     * List all the plugins in a given project and location.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. An expression that filters the list of plugins. A filter expression consists of a field name, a comparison operator, and a value for filtering. The value must be a string. The comparison operator must be one of: `<`, `>` or `=`. Filters are not case sensitive. The following fields in the `Plugins` are eligible for filtering: * `plugin_category` - The category of the Plugin. Allowed comparison operators: `=`. Expressions are combined with either `AND` logic operator or `OR` logical operator but not both of them together i.e. only one of the `AND` or `OR` operator can be used throughout the filter string and both the operators cannot be used together. No other logical operators are supported. At most three filter fields are allowed in the filter string and if provided more than that then `INVALID_ARGUMENT` error is returned by the API. Here are a few examples: * `plugin_category = ON_RAMP` - The plugin is of category on ramp.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of hub plugins to return. The service may return fewer than this value. If unspecified, at most 50 hub plugins will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} apiParams.pageToken - Optional. A page token, received from a previous `ListPlugins` call. Provide this to retrieve the subsequent page. When paginating, all other parameters (except page_size) provided to `ListPlugins` must match the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. The parent resource where this plugin will be created. Format: `projects/{project}/locations/{location}`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.plugins.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/plugins', 'GET', apiParams, clientConfig);

    /**
     * Delete a Plugin in API hub. Note, only user owned plugins can be deleted via this method.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the Plugin resource to delete. Format: `projects/{project}/locations/{location}/plugins/{plugin}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.plugins.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Get the style guide being used for linting.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the spec to retrieve. Format: `projects/{project}/locations/{location}/plugins/{plugin}/styleGuide`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.plugins.getStyleGuide = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Update the styleGuide to be used for liniting in by API hub.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Identifier. The name of the style guide. Format: `projects/{project}/locations/{location}/plugins/{plugin}/styleGuide`
     * @param {string} apiParams.updateMask - Optional. The list of fields to update.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.plugins.updateStyleGuide = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects.locations.plugins.instances = {};

    /**
     * Creates a Plugin instance in the API hub.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent of the plugin instance resource. Format: `projects/{project}/locations/{location}/plugins/{plugin}`
     * @param {string} apiParams.pluginInstanceId - Optional. The ID to use for the plugin instance, which will become the final component of the plugin instance's resource name. This field is optional. * If provided, the same will be used. The service will throw an error if the specified id is already used by another plugin instance in the plugin resource. * If not provided, a system generated id will be used. This value should be 4-63 characters, and valid characters are /a-z[0-9]-_/.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.plugins.instances.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/instances', 'POST', apiParams, clientConfig);

    /**
     * Executes a plugin instance in the API hub.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the plugin instance to execute. Format: `projects/{project}/locations/{location}/plugins/{plugin}/instances/{instance}`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.plugins.instances.executeAction = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:executeAction', 'POST', apiParams, clientConfig);

    /**
     * Get an API Hub plugin instance.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the plugin instance to retrieve. Format: `projects/{project}/locations/{location}/plugins/{plugin}/instances/{instance}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.plugins.instances.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * List all the plugins in a given project and location. `-` can be used as wildcard value for {plugin_id}
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. An expression that filters the list of plugin instances. A filter expression consists of a field name, a comparison operator, and a value for filtering. The value must be a string. The comparison operator must be one of: `<`, `>` or `=`. Filters are not case sensitive. The following fields in the `PluginInstances` are eligible for filtering: * `state` - The state of the Plugin Instance. Allowed comparison operators: `=`. A filter function is also supported in the filter string. The filter function is `id(name)`. The `id(name)` function returns the id of the resource name. For example, `id(name) = \"plugin-instance-1\"` is equivalent to `name = \"projects/test-project-id/locations/test-location-id/plugins/plugin-1/instances/plugin-instance-1\"` provided the parent is `projects/test-project-id/locations/test-location-id/plugins/plugin-1`. Expressions are combined with either `AND` logic operator or `OR` logical operator but not both of them together i.e. only one of the `AND` or `OR` operator can be used throughout the filter string and both the operators cannot be used together. No other logical operators are supported. At most three filter fields are allowed in the filter string and if provided more than that then `INVALID_ARGUMENT` error is returned by the API. Here are a few examples: * `state = ENABLED` - The plugin instance is in enabled state.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of hub plugins to return. The service may return fewer than this value. If unspecified, at most 50 hub plugins will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} apiParams.pageToken - Optional. A page token, received from a previous `ListPluginInstances` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPluginInstances` must match the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. The parent resource where this plugin will be created. Format: `projects/{project}/locations/{location}/plugins/{plugin}`. To list plugin instances for multiple plugins, use the - character instead of the plugin ID.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.plugins.instances.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/instances', 'GET', apiParams, clientConfig);

    /**
     * Enables a plugin instance in the API hub.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the plugin instance to enable. Format: `projects/{project}/locations/{location}/plugins/{plugin}/instances/{instance}`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.plugins.instances.enableAction = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:enableAction', 'POST', apiParams, clientConfig);

    /**
     * Disables a plugin instance in the API hub.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the plugin instance to disable. Format: `projects/{project}/locations/{location}/plugins/{plugin}/instances/{instance}`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.plugins.instances.disableAction = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:disableAction', 'POST', apiParams, clientConfig);

    /**
     * Updates a plugin instance in the API hub. The following fields in the plugin_instance can be updated currently: * display_name * schedule_cron_expression The update_mask should be used to specify the fields being updated. To update the auth_config and additional_config of the plugin instance, use the ApplyPluginInstanceConfig method.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Identifier. The unique name of the plugin instance resource. Format: `projects/{project}/locations/{location}/plugins/{plugin}/instances/{instance}`
     * @param {string} apiParams.updateMask - Optional. The list of fields to update.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.plugins.instances.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes a plugin instance in the API hub.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the plugin instance to delete. Format: `projects/{project}/locations/{location}/plugins/{plugin}/instances/{instance}`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.plugins.instances.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Manages data for a given plugin instance.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the plugin instance for which data needs to be managed. Format: `projects/{project}/locations/{location}/plugins/{plugin}/instances/{instance}`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.plugins.instances.manageSourceData = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:manageSourceData', 'POST', apiParams, clientConfig);

    this.projects.locations.plugins.styleGuide = {};

    /**
     * Get the contents of the style guide.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the StyleGuide whose contents need to be retrieved. There is exactly one style guide resource per project per location. The expected format is `projects/{project}/locations/{location}/plugins/{plugin}/styleGuide`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.plugins.styleGuide.getContents = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:contents', 'GET', apiParams, clientConfig);

    this.projects.locations.apis = {};

    /**
     * Create an API resource in the API hub. Once an API resource is created, versions can be added to it.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.apiId - Optional. The ID to use for the API resource, which will become the final component of the API's resource name. This field is optional. * If provided, the same will be used. The service will throw an error if the specified id is already used by another API resource in the API hub. * If not provided, a system generated id will be used. This value should be 4-500 characters, and valid characters are /a-z[0-9]-_/.
     * @param {string} apiParams.parent - (Required) Required. The parent resource for the API resource. Format: `projects/{project}/locations/{location}`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.apis.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/apis', 'POST', apiParams, clientConfig);

    /**
     * Get API resource details including the API versions contained in it.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the API resource to retrieve. Format: `projects/{project}/locations/{location}/apis/{api}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.apis.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * List API resources in the API hub.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. An expression that filters the list of ApiResources. A filter expression consists of a field name, a comparison operator, and a value for filtering. The value must be a string. The comparison operator must be one of: `<`, `>`, `:` or `=`. Filters are not case sensitive. The following fields in the `ApiResource` are eligible for filtering: * `owner.email` - The email of the team which owns the ApiResource. Allowed comparison operators: `=`. * `create_time` - The time at which the ApiResource was created. The value should be in the (RFC3339)[https://tools.ietf.org/html/rfc3339] format. Allowed comparison operators: `>` and `<`. * `display_name` - The display name of the ApiResource. Allowed comparison operators: `=`. * `target_user.enum_values.values.id` - The allowed value id of the target users attribute associated with the ApiResource. Allowed comparison operator is `:`. * `target_user.enum_values.values.display_name` - The allowed value display name of the target users attribute associated with the ApiResource. Allowed comparison operator is `:`. * `team.enum_values.values.id` - The allowed value id of the team attribute associated with the ApiResource. Allowed comparison operator is `:`. * `team.enum_values.values.display_name` - The allowed value display name of the team attribute associated with the ApiResource. Allowed comparison operator is `:`. * `business_unit.enum_values.values.id` - The allowed value id of the business unit attribute associated with the ApiResource. Allowed comparison operator is `:`. * `business_unit.enum_values.values.display_name` - The allowed value display name of the business unit attribute associated with the ApiResource. Allowed comparison operator is `:`. * `maturity_level.enum_values.values.id` - The allowed value id of the maturity level attribute associated with the ApiResource. Allowed comparison operator is `:`. * `maturity_level.enum_values.values.display_name` - The allowed value display name of the maturity level attribute associated with the ApiResource. Allowed comparison operator is `:`. * `api_style.enum_values.values.id` - The allowed value id of the api style attribute associated with the ApiResource. Allowed comparison operator is `:`. * `api_style.enum_values.values.display_name` - The allowed value display name of the api style attribute associated with the ApiResource. Allowed comparison operator is `:`. * `attributes.projects/test-project-id/locations/test-location-id/ attributes/user-defined-attribute-id.enum_values.values.id` - The allowed value id of the user defined enum attribute associated with the Resource. Allowed comparison operator is `:`. Here user-defined-attribute-enum-id is a placeholder that can be replaced with any user defined enum attribute name. * `attributes.projects/test-project-id/locations/test-location-id/ attributes/user-defined-attribute-id.enum_values.values.display_name` - The allowed value display name of the user defined enum attribute associated with the Resource. Allowed comparison operator is `:`. Here user-defined-attribute-enum-display-name is a placeholder that can be replaced with any user defined enum attribute enum name. * `attributes.projects/test-project-id/locations/test-location-id/ attributes/user-defined-attribute-id.string_values.values` - The allowed value of the user defined string attribute associated with the Resource. Allowed comparison operator is `:`. Here user-defined-attribute-string is a placeholder that can be replaced with any user defined string attribute name. * `attributes.projects/test-project-id/locations/test-location-id/ attributes/user-defined-attribute-id.json_values.values` - The allowed value of the user defined JSON attribute associated with the Resource. Allowed comparison operator is `:`. Here user-defined-attribute-json is a placeholder that can be replaced with any user defined JSON attribute name. A filter function is also supported in the filter string. The filter function is `id(name)`. The `id(name)` function returns the id of the resource name. For example, `id(name) = \"api-1\"` is equivalent to `name = \"projects/test-project-id/locations/test-location-id/apis/api-1\"` provided the parent is `projects/test-project-id/locations/test-location-id`. Expressions are combined with either `AND` logic operator or `OR` logical operator but not both of them together i.e. only one of the `AND` or `OR` operator can be used throughout the filter string and both the operators cannot be used together. No other logical operators are supported. At most three filter fields are allowed in the filter string and if provided more than that then `INVALID_ARGUMENT` error is returned by the API. Here are a few examples: * `owner.email = \"apihub@google.com\"` - - The owner team email is _apihub@google.com_. * `owner.email = \"apihub@google.com\" AND create_time < \"2021-08-15T14:50:00Z\" AND create_time > \"2021-08-10T12:00:00Z\"` - The owner team email is _apihub@google.com_ and the api was created before _2021-08-15 14:50:00 UTC_ and after _2021-08-10 12:00:00 UTC_. * `owner.email = \"apihub@google.com\" OR team.enum_values.values.id: apihub-team-id` - The filter string specifies the APIs where the owner team email is _apihub@google.com_ or the id of the allowed value associated with the team attribute is _apihub-team-id_. * `owner.email = \"apihub@google.com\" OR team.enum_values.values.display_name: ApiHub Team` - The filter string specifies the APIs where the owner team email is _apihub@google.com_ or the display name of the allowed value associated with the team attribute is `ApiHub Team`. * `owner.email = \"apihub@google.com\" AND attributes.projects/test-project-id/locations/test-location-id/ attributes/17650f90-4a29-4971-b3c0-d5532da3764b.enum_values.values.id: test_enum_id AND attributes.projects/test-project-id/locations/test-location-id/ attributes/1765\0f90-4a29-5431-b3d0-d5532da3764c.string_values.values: test_string_value` - The filter string specifies the APIs where the owner team email is _apihub@google.com_ and the id of the allowed value associated with the user defined attribute of type enum is _test_enum_id_ and the value of the user defined attribute of type string is _test_..
     * @param {integer} apiParams.pageSize - Optional. The maximum number of API resources to return. The service may return fewer than this value. If unspecified, at most 50 Apis will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} apiParams.pageToken - Optional. A page token, received from a previous `ListApis` call. Provide this to retrieve the subsequent page. When paginating, all other parameters (except page_size) provided to `ListApis` must match the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. The parent, which owns this collection of API resources. Format: `projects/{project}/locations/{location}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.apis.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/apis', 'GET', apiParams, clientConfig);

    /**
     * Update an API resource in the API hub. The following fields in the API can be updated: * display_name * description * owner * documentation * target_user * team * business_unit * maturity_level * api_style * attributes The update_mask should be used to specify the fields being updated. Updating the owner field requires complete owner message and updates both owner and email fields.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Identifier. The name of the API resource in the API Hub. Format: `projects/{project}/locations/{location}/apis/{api}`
     * @param {string} apiParams.updateMask - Required. The list of fields to update.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.apis.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Delete an API resource in the API hub. API can only be deleted if all underlying versions are deleted.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.force - Optional. If set to true, any versions from this API will also be deleted. Otherwise, the request will only work if the API has no versions.
     * @param {string} apiParams.name - (Required) Required. The name of the API resource to delete. Format: `projects/{project}/locations/{location}/apis/{api}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.apis.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.apis.versions = {};

    /**
     * Create an API version for an API resource in the API hub.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent resource for API version. Format: `projects/{project}/locations/{location}/apis/{api}`
     * @param {string} apiParams.versionId - Optional. The ID to use for the API version, which will become the final component of the version's resource name. This field is optional. * If provided, the same will be used. The service will throw an error if the specified id is already used by another version in the API resource. * If not provided, a system generated id will be used. This value should be 4-500 characters, overall resource name which will be of format `projects/{project}/locations/{location}/apis/{api}/versions/{version}`, its length is limited to 700 characters and valid characters are /a-z[0-9]-_/.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.apis.versions.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/versions', 'POST', apiParams, clientConfig);

    /**
     * Get details about the API version of an API resource. This will include information about the specs and operations present in the API version as well as the deployments linked to it.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the API version to retrieve. Format: `projects/{project}/locations/{location}/apis/{api}/versions/{version}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.apis.versions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * List API versions of an API resource in the API hub.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. An expression that filters the list of Versions. A filter expression consists of a field name, a comparison operator, and a value for filtering. The value must be a string, a number, or a boolean. The comparison operator must be one of: `<`, `>` or `=`. Filters are not case sensitive. The following fields in the `Version` are eligible for filtering: * `display_name` - The display name of the Version. Allowed comparison operators: `=`. * `create_time` - The time at which the Version was created. The value should be in the (RFC3339)[https://tools.ietf.org/html/rfc3339] format. Allowed comparison operators: `>` and `<`. * `lifecycle.enum_values.values.id` - The allowed value id of the lifecycle attribute associated with the Version. Allowed comparison operators: `:`. * `lifecycle.enum_values.values.display_name` - The allowed value display name of the lifecycle attribute associated with the Version. Allowed comparison operators: `:`. * `compliance.enum_values.values.id` - The allowed value id of the compliances attribute associated with the Version. Allowed comparison operators: `:`. * `compliance.enum_values.values.display_name` - The allowed value display name of the compliances attribute associated with the Version. Allowed comparison operators: `:`. * `accreditation.enum_values.values.id` - The allowed value id of the accreditations attribute associated with the Version. Allowed comparison operators: `:`. * `accreditation.enum_values.values.display_name` - The allowed value display name of the accreditations attribute associated with the Version. Allowed comparison operators: `:`. * `attributes.projects/test-project-id/locations/test-location-id/ attributes/user-defined-attribute-id.enum_values.values.id` - The allowed value id of the user defined enum attribute associated with the Resource. Allowed comparison operator is `:`. Here user-defined-attribute-enum-id is a placeholder that can be replaced with any user defined enum attribute name. * `attributes.projects/test-project-id/locations/test-location-id/ attributes/user-defined-attribute-id.enum_values.values.display_name` - The allowed value display name of the user defined enum attribute associated with the Resource. Allowed comparison operator is `:`. Here user-defined-attribute-enum-display-name is a placeholder that can be replaced with any user defined enum attribute enum name. * `attributes.projects/test-project-id/locations/test-location-id/ attributes/user-defined-attribute-id.string_values.values` - The allowed value of the user defined string attribute associated with the Resource. Allowed comparison operator is `:`. Here user-defined-attribute-string is a placeholder that can be replaced with any user defined string attribute name. * `attributes.projects/test-project-id/locations/test-location-id/ attributes/user-defined-attribute-id.json_values.values` - The allowed value of the user defined JSON attribute associated with the Resource. Allowed comparison operator is `:`. Here user-defined-attribute-json is a placeholder that can be replaced with any user defined JSON attribute name. Expressions are combined with either `AND` logic operator or `OR` logical operator but not both of them together i.e. only one of the `AND` or `OR` operator can be used throughout the filter string and both the operators cannot be used together. No other logical operators are supported. At most three filter fields are allowed in the filter string and if provided more than that then `INVALID_ARGUMENT` error is returned by the API. Here are a few examples: * `lifecycle.enum_values.values.id: preview-id` - The filter string specifies that the id of the allowed value associated with the lifecycle attribute of the Version is _preview-id_. * `lifecycle.enum_values.values.display_name: \"Preview Display Name\"` - The filter string specifies that the display name of the allowed value associated with the lifecycle attribute of the Version is `Preview Display Name`. * `lifecycle.enum_values.values.id: preview-id AND create_time < \"2021-08-15T14:50:00Z\" AND create_time > \"2021-08-10T12:00:00Z\"` - The id of the allowed value associated with the lifecycle attribute of the Version is _preview-id_ and it was created before _2021-08-15 14:50:00 UTC_ and after _2021-08-10 12:00:00 UTC_. * `compliance.enum_values.values.id: gdpr-id OR compliance.enum_values.values.id: pci-dss-id` - The id of the allowed value associated with the compliance attribute is _gdpr-id_ or _pci-dss-id_. * `lifecycle.enum_values.values.id: preview-id AND attributes.projects/test-project-id/locations/test-location-id/ attributes/17650f90-4a29-4971-b3c0-d5532da3764b.string_values.values: test` - The filter string specifies that the id of the allowed value associated with the lifecycle attribute of the Version is _preview-id_ and the value of the user defined attribute of type string is _test_.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of versions to return. The service may return fewer than this value. If unspecified, at most 50 versions will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} apiParams.pageToken - Optional. A page token, received from a previous `ListVersions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters (except page_size) provided to `ListVersions` must match the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. The parent which owns this collection of API versions i.e., the API resource Format: `projects/{project}/locations/{location}/apis/{api}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.apis.versions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/versions', 'GET', apiParams, clientConfig);

    /**
     * Update API version. The following fields in the version can be updated currently: * display_name * description * documentation * deployments * lifecycle * compliance * accreditation * attributes The update_mask should be used to specify the fields being updated.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Identifier. The name of the version. Format: `projects/{project}/locations/{location}/apis/{api}/versions/{version}`
     * @param {string} apiParams.updateMask - Required. The list of fields to update.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.apis.versions.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Delete an API version. Version can only be deleted if all underlying specs, operations, definitions and linked deployments are deleted.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.force - Optional. If set to true, any specs from this version will also be deleted. Otherwise, the request will only work if the version has no specs.
     * @param {string} apiParams.name - (Required) Required. The name of the version to delete. Format: `projects/{project}/locations/{location}/apis/{api}/versions/{version}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.apis.versions.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.apis.versions.specs = {};

    /**
     * Add a spec to an API version in the API hub. Multiple specs can be added to an API version. Note, while adding a spec, at least one of `contents` or `source_uri` must be provided. If `contents` is provided, then `spec_type` must also be provided. On adding a spec with contents to the version, the operations present in it will be added to the version.Note that the file contents in the spec should be of the same type as defined in the `projects/{project}/locations/{location}/attributes/system-spec-type` attribute associated with spec resource. Note that specs of various types can be uploaded, however parsing of details is supported for OpenAPI spec currently. In order to access the information parsed from the spec, use the GetSpec method. In order to access the raw contents for a particular spec, use the GetSpecContents method. In order to access the operations parsed from the spec, use the ListAPIOperations method.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent resource for Spec. Format: `projects/{project}/locations/{location}/apis/{api}/versions/{version}`
     * @param {string} apiParams.specId - Optional. The ID to use for the spec, which will become the final component of the spec's resource name. This field is optional. * If provided, the same will be used. The service will throw an error if the specified id is already used by another spec in the API resource. * If not provided, a system generated id will be used. This value should be 4-500 characters, overall resource name which will be of format `projects/{project}/locations/{location}/apis/{api}/versions/{version}/specs/{spec}`, its length is limited to 1000 characters and valid characters are /a-z[0-9]-_/.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.apis.versions.specs.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/specs', 'POST', apiParams, clientConfig);

    /**
     * Get details about the information parsed from a spec. Note that this method does not return the raw spec contents. Use GetSpecContents method to retrieve the same.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the spec to retrieve. Format: `projects/{project}/locations/{location}/apis/{api}/versions/{version}/specs/{spec}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.apis.versions.specs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Get spec contents.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the spec whose contents need to be retrieved. Format: `projects/{project}/locations/{location}/apis/{api}/versions/{version}/specs/{spec}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.apis.versions.specs.getContents = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:contents', 'GET', apiParams, clientConfig);

    /**
     * List specs corresponding to a particular API resource.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. An expression that filters the list of Specs. A filter expression consists of a field name, a comparison operator, and a value for filtering. The value must be a string. The comparison operator must be one of: `<`, `>`, `:` or `=`. Filters are not case sensitive. The following fields in the `Spec` are eligible for filtering: * `display_name` - The display name of the Spec. Allowed comparison operators: `=`. * `create_time` - The time at which the Spec was created. The value should be in the (RFC3339)[https://tools.ietf.org/html/rfc3339] format. Allowed comparison operators: `>` and `<`. * `spec_type.enum_values.values.id` - The allowed value id of the spec_type attribute associated with the Spec. Allowed comparison operators: `:`. * `spec_type.enum_values.values.display_name` - The allowed value display name of the spec_type attribute associated with the Spec. Allowed comparison operators: `:`. * `lint_response.json_values.values` - The json value of the lint_response attribute associated with the Spec. Allowed comparison operators: `:`. * `mime_type` - The MIME type of the Spec. Allowed comparison operators: `=`. * `attributes.projects/test-project-id/locations/test-location-id/ attributes/user-defined-attribute-id.enum_values.values.id` - The allowed value id of the user defined enum attribute associated with the Resource. Allowed comparison operator is `:`. Here user-defined-attribute-enum-id is a placeholder that can be replaced with any user defined enum attribute name. * `attributes.projects/test-project-id/locations/test-location-id/ attributes/user-defined-attribute-id.enum_values.values.display_name` - The allowed value display name of the user defined enum attribute associated with the Resource. Allowed comparison operator is `:`. Here user-defined-attribute-enum-display-name is a placeholder that can be replaced with any user defined enum attribute enum name. * `attributes.projects/test-project-id/locations/test-location-id/ attributes/user-defined-attribute-id.string_values.values` - The allowed value of the user defined string attribute associated with the Resource. Allowed comparison operator is `:`. Here user-defined-attribute-string is a placeholder that can be replaced with any user defined string attribute name. * `attributes.projects/test-project-id/locations/test-location-id/ attributes/user-defined-attribute-id.json_values.values` - The allowed value of the user defined JSON attribute associated with the Resource. Allowed comparison operator is `:`. Here user-defined-attribute-json is a placeholder that can be replaced with any user defined JSON attribute name. Expressions are combined with either `AND` logic operator or `OR` logical operator but not both of them together i.e. only one of the `AND` or `OR` operator can be used throughout the filter string and both the operators cannot be used together. No other logical operators are supported. At most three filter fields are allowed in the filter string and if provided more than that then `INVALID_ARGUMENT` error is returned by the API. Here are a few examples: * `spec_type.enum_values.values.id: rest-id` - The filter string specifies that the id of the allowed value associated with the spec_type attribute is _rest-id_. * `spec_type.enum_values.values.display_name: \"Rest Display Name\"` - The filter string specifies that the display name of the allowed value associated with the spec_type attribute is `Rest Display Name`. * `spec_type.enum_values.values.id: grpc-id AND create_time < \"2021-08-15T14:50:00Z\" AND create_time > \"2021-08-10T12:00:00Z\"` - The id of the allowed value associated with the spec_type attribute is _grpc-id_ and the spec was created before _2021-08-15 14:50:00 UTC_ and after _2021-08-10 12:00:00 UTC_. * `spec_type.enum_values.values.id: rest-id OR spec_type.enum_values.values.id: grpc-id` - The id of the allowed value associated with the spec_type attribute is _rest-id_ or _grpc-id_. * `spec_type.enum_values.values.id: rest-id AND attributes.projects/test-project-id/locations/test-location-id/ attributes/17650f90-4a29-4971-b3c0-d5532da3764b.enum_values.values.id: test` - The filter string specifies that the id of the allowed value associated with the spec_type attribute is _rest-id_ and the id of the allowed value associated with the user defined attribute of type enum is _test_.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of specs to return. The service may return fewer than this value. If unspecified, at most 50 specs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} apiParams.pageToken - Optional. A page token, received from a previous `ListSpecs` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListSpecs` must match the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. The parent, which owns this collection of specs. Format: `projects/{project}/locations/{location}/apis/{api}/versions/{version}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.apis.versions.specs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/specs', 'GET', apiParams, clientConfig);

    /**
     * Update spec. The following fields in the spec can be updated: * display_name * source_uri * lint_response * attributes * contents * spec_type In case of an OAS spec, updating spec contents can lead to: 1. Creation, deletion and update of operations. 2. Creation, deletion and update of definitions. 3. Update of other info parsed out from the new spec. In case of contents or source_uri being present in update mask, spec_type must also be present. Also, spec_type can not be present in update mask if contents or source_uri is not present. The update_mask should be used to specify the fields being updated.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Identifier. The name of the spec. Format: `projects/{project}/locations/{location}/apis/{api}/versions/{version}/specs/{spec}`
     * @param {string} apiParams.updateMask - Required. The list of fields to update.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.apis.versions.specs.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Delete a spec. Deleting a spec will also delete the associated operations from the version.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the spec to delete. Format: `projects/{project}/locations/{location}/apis/{api}/versions/{version}/specs/{spec}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.apis.versions.specs.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Lints the requested spec and updates the corresponding API Spec with the lint response. This lint response will be available in all subsequent Get and List Spec calls to Core service.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the spec to be linted. Format: `projects/{project}/locations/{location}/apis/{api}/versions/{version}/specs/{spec}`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.apis.versions.specs.lint = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:lint', 'POST', apiParams, clientConfig);

    this.projects.locations.apis.versions.operations = {};

    /**
     * Create an apiOperation in an API version. An apiOperation can be created only if the version has no apiOperations which were created by parsing a spec.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.apiOperationId - Optional. The ID to use for the operation resource, which will become the final component of the operation's resource name. This field is optional. * If provided, the same will be used. The service will throw an error if the specified id is already used by another operation resource in the API hub. * If not provided, a system generated id will be used. This value should be 4-500 characters, overall resource name which will be of format `projects/{project}/locations/{location}/apis/{api}/versions/{version}/operations/{operation}`, its length is limited to 700 characters, and valid characters are /a-z[0-9]-_/.
     * @param {string} apiParams.parent - (Required) Required. The parent resource for the operation resource. Format: `projects/{project}/locations/{location}/apis/{api}/versions/{version}`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.apis.versions.operations.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/operations', 'POST', apiParams, clientConfig);

    /**
     * Get details about a particular operation in API version.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the operation to retrieve. Format: `projects/{project}/locations/{location}/apis/{api}/versions/{version}/operations/{operation}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.apis.versions.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * List operations in an API version.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. An expression that filters the list of ApiOperations. A filter expression consists of a field name, a comparison operator, and a value for filtering. The value must be a string or a boolean. The comparison operator must be one of: `<`, `>` or `=`. Filters are not case sensitive. The following fields in the `ApiOperation` are eligible for filtering: * `name` - The ApiOperation resource name. Allowed comparison operators: `=`. * `details.http_operation.path.path` - The http operation's complete path relative to server endpoint. Allowed comparison operators: `=`. * `details.http_operation.method` - The http operation method type. Allowed comparison operators: `=`. * `details.deprecated` - Indicates if the ApiOperation is deprecated. Allowed values are True / False indicating the deprycation status of the ApiOperation. Allowed comparison operators: `=`. * `create_time` - The time at which the ApiOperation was created. The value should be in the (RFC3339)[https://tools.ietf.org/html/rfc3339] format. Allowed comparison operators: `>` and `<`. * `attributes.projects/test-project-id/locations/test-location-id/ attributes/user-defined-attribute-id.enum_values.values.id` - The allowed value id of the user defined enum attribute associated with the Resource. Allowed comparison operator is `:`. Here user-defined-attribute-enum-id is a placeholder that can be replaced with any user defined enum attribute name. * `attributes.projects/test-project-id/locations/test-location-id/ attributes/user-defined-attribute-id.enum_values.values.display_name` - The allowed value display name of the user defined enum attribute associated with the Resource. Allowed comparison operator is `:`. Here user-defined-attribute-enum-display-name is a placeholder that can be replaced with any user defined enum attribute enum name. * `attributes.projects/test-project-id/locations/test-location-id/ attributes/user-defined-attribute-id.string_values.values` - The allowed value of the user defined string attribute associated with the Resource. Allowed comparison operator is `:`. Here user-defined-attribute-string is a placeholder that can be replaced with any user defined string attribute name. * `attributes.projects/test-project-id/locations/test-location-id/ attributes/user-defined-attribute-id.json_values.values` - The allowed value of the user defined JSON attribute associated with the Resource. Allowed comparison operator is `:`. Here user-defined-attribute-json is a placeholder that can be replaced with any user defined JSON attribute name. Expressions are combined with either `AND` logic operator or `OR` logical operator but not both of them together i.e. only one of the `AND` or `OR` operator can be used throughout the filter string and both the operators cannot be used together. No other logical operators are supported. At most three filter fields are allowed in the filter string and if provided more than that then `INVALID_ARGUMENT` error is returned by the API. Here are a few examples: * `details.deprecated = True` - The ApiOperation is deprecated. * `details.http_operation.method = GET AND create_time < \"2021-08-15T14:50:00Z\" AND create_time > \"2021-08-10T12:00:00Z\"` - The method of the http operation of the ApiOperation is _GET_ and the spec was created before _2021-08-15 14:50:00 UTC_ and after _2021-08-10 12:00:00 UTC_. * `details.http_operation.method = GET OR details.http_operation.method = POST`. - The http operation of the method of ApiOperation is _GET_ or _POST_. * `details.deprecated = True AND attributes.projects/test-project-id/locations/test-location-id/ attributes/17650f90-4a29-4971-b3c0-d5532da3764b.string_values.values: test` - The filter string specifies that the ApiOperation is deprecated and the value of the user defined attribute of type string is _test_.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of operations to return. The service may return fewer than this value. If unspecified, at most 50 operations will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} apiParams.pageToken - Optional. A page token, received from a previous `ListApiOperations` call. Provide this to retrieve the subsequent page. When paginating, all other parameters (except page_size) provided to `ListApiOperations` must match the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. The parent which owns this collection of operations i.e., the API version. Format: `projects/{project}/locations/{location}/apis/{api}/versions/{version}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.apis.versions.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/operations', 'GET', apiParams, clientConfig);

    /**
     * Update an operation in an API version. The following fields in the ApiOperation resource can be updated: * details.description * details.documentation * details.http_operation.path * details.http_operation.method * details.deprecated * attributes The update_mask should be used to specify the fields being updated. An operation can be updated only if the operation was created via CreateApiOperation API. If the operation was created by parsing the spec, then it can be edited by updating the spec.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Identifier. The name of the operation. Format: `projects/{project}/locations/{location}/apis/{api}/versions/{version}/operations/{operation}`
     * @param {string} apiParams.updateMask - Required. The list of fields to update.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.apis.versions.operations.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Delete an operation in an API version and we can delete only the operations created via create API. If the operation was created by parsing the spec, then it can be deleted by editing or deleting the spec.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the operation resource to delete. Format: `projects/{project}/locations/{location}/apis/{api}/versions/{version}/operations/{operation}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.apis.versions.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.apis.versions.definitions = {};

    /**
     * Get details about a definition in an API version.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the definition to retrieve. Format: `projects/{project}/locations/{location}/apis/{api}/versions/{version}/definitions/{definition}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.apis.versions.definitions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.deployments = {};

    /**
     * Create a deployment resource in the API hub. Once a deployment resource is created, it can be associated with API versions.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.deploymentId - Optional. The ID to use for the deployment resource, which will become the final component of the deployment's resource name. This field is optional. * If provided, the same will be used. The service will throw an error if the specified id is already used by another deployment resource in the API hub. * If not provided, a system generated id will be used. This value should be 4-500 characters, and valid characters are /a-z[0-9]-_/.
     * @param {string} apiParams.parent - (Required) Required. The parent resource for the deployment resource. Format: `projects/{project}/locations/{location}`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.deployments.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/deployments', 'POST', apiParams, clientConfig);

    /**
     * Get details about a deployment and the API versions linked to it.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the deployment resource to retrieve. Format: `projects/{project}/locations/{location}/deployments/{deployment}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.deployments.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * List deployment resources in the API hub.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. An expression that filters the list of Deployments. A filter expression consists of a field name, a comparison operator, and a value for filtering. The value must be a string. The comparison operator must be one of: `<`, `>` or `=`. Filters are not case sensitive. The following fields in the `Deployments` are eligible for filtering: * `display_name` - The display name of the Deployment. Allowed comparison operators: `=`. * `create_time` - The time at which the Deployment was created. The value should be in the (RFC3339)[https://tools.ietf.org/html/rfc3339] format. Allowed comparison operators: `>` and `<`. * `resource_uri` - A URI to the deployment resource. Allowed comparison operators: `=`. * `api_versions` - The API versions linked to this deployment. Allowed comparison operators: `:`. * `source_project` - The project/organization at source for the deployment. Allowed comparison operators: `=`. * `source_environment` - The environment at source for the deployment. Allowed comparison operators: `=`. * `deployment_type.enum_values.values.id` - The allowed value id of the deployment_type attribute associated with the Deployment. Allowed comparison operators: `:`. * `deployment_type.enum_values.values.display_name` - The allowed value display name of the deployment_type attribute associated with the Deployment. Allowed comparison operators: `:`. * `slo.string_values.values` -The allowed string value of the slo attribute associated with the deployment. Allowed comparison operators: `:`. * `environment.enum_values.values.id` - The allowed value id of the environment attribute associated with the deployment. Allowed comparison operators: `:`. * `environment.enum_values.values.display_name` - The allowed value display name of the environment attribute associated with the deployment. Allowed comparison operators: `:`. * `attributes.projects/test-project-id/locations/test-location-id/ attributes/user-defined-attribute-id.enum_values.values.id` - The allowed value id of the user defined enum attribute associated with the Resource. Allowed comparison operator is `:`. Here user-defined-attribute-enum-id is a placeholder that can be replaced with any user defined enum attribute name. * `attributes.projects/test-project-id/locations/test-location-id/ attributes/user-defined-attribute-id.enum_values.values.display_name` - The allowed value display name of the user defined enum attribute associated with the Resource. Allowed comparison operator is `:`. Here user-defined-attribute-enum-display-name is a placeholder that can be replaced with any user defined enum attribute enum name. * `attributes.projects/test-project-id/locations/test-location-id/ attributes/user-defined-attribute-id.string_values.values` - The allowed value of the user defined string attribute associated with the Resource. Allowed comparison operator is `:`. Here user-defined-attribute-string is a placeholder that can be replaced with any user defined string attribute name. * `attributes.projects/test-project-id/locations/test-location-id/ attributes/user-defined-attribute-id.json_values.values` - The allowed value of the user defined JSON attribute associated with the Resource. Allowed comparison operator is `:`. Here user-defined-attribute-json is a placeholder that can be replaced with any user defined JSON attribute name. A filter function is also supported in the filter string. The filter function is `id(name)`. The `id(name)` function returns the id of the resource name. For example, `id(name) = \"deployment-1\"` is equivalent to `name = \"projects/test-project-id/locations/test-location-id/deployments/deployment-1\"` provided the parent is `projects/test-project-id/locations/test-location-id`. Expressions are combined with either `AND` logic operator or `OR` logical operator but not both of them together i.e. only one of the `AND` or `OR` operator can be used throughout the filter string and both the operators cannot be used together. No other logical operators are supported. At most three filter fields are allowed in the filter string and if provided more than that then `INVALID_ARGUMENT` error is returned by the API. Here are a few examples: * `environment.enum_values.values.id: staging-id` - The allowed value id of the environment attribute associated with the Deployment is _staging-id_. * `environment.enum_values.values.display_name: \"Staging Deployment\"` - The allowed value display name of the environment attribute associated with the Deployment is `Staging Deployment`. * `environment.enum_values.values.id: production-id AND create_time < \"2021-08-15T14:50:00Z\" AND create_time > \"2021-08-10T12:00:00Z\"` - The allowed value id of the environment attribute associated with the Deployment is _production-id_ and Deployment was created before _2021-08-15 14:50:00 UTC_ and after _2021-08-10 12:00:00 UTC_. * `environment.enum_values.values.id: production-id OR slo.string_values.values: \"99.99%\"` - The allowed value id of the environment attribute Deployment is _production-id_ or string value of the slo attribute is _99.99%_. * `environment.enum_values.values.id: staging-id AND attributes.projects/test-project-id/locations/test-location-id/ attributes/17650f90-4a29-4971-b3c0-d5532da3764b.string_values.values: test` - The filter string specifies that the allowed value id of the environment attribute associated with the Deployment is _staging-id_ and the value of the user defined attribute of type string is _test_.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of deployment resources to return. The service may return fewer than this value. If unspecified, at most 50 deployments will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} apiParams.pageToken - Optional. A page token, received from a previous `ListDeployments` call. Provide this to retrieve the subsequent page. When paginating, all other parameters (except page_size) provided to `ListDeployments` must match the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. The parent, which owns this collection of deployment resources. Format: `projects/{project}/locations/{location}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.deployments.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/deployments', 'GET', apiParams, clientConfig);

    /**
     * Update a deployment resource in the API hub. The following fields in the deployment resource can be updated: * display_name * description * documentation * deployment_type * resource_uri * endpoints * slo * environment * attributes * source_project * source_environment * management_url * source_uri The update_mask should be used to specify the fields being updated.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Identifier. The name of the deployment. Format: `projects/{project}/locations/{location}/deployments/{deployment}`
     * @param {string} apiParams.updateMask - Required. The list of fields to update.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.deployments.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Delete a deployment resource in the API hub.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the deployment resource to delete. Format: `projects/{project}/locations/{location}/deployments/{deployment}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.deployments.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.attributes = {};

    /**
     * Create a user defined attribute. Certain pre defined attributes are already created by the API hub. These attributes will have type as `SYSTEM_DEFINED` and can be listed via ListAttributes method. Allowed values for the same can be updated via UpdateAttribute method.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.attributeId - Optional. The ID to use for the attribute, which will become the final component of the attribute's resource name. This field is optional. * If provided, the same will be used. The service will throw an error if the specified id is already used by another attribute resource in the API hub. * If not provided, a system generated id will be used. This value should be 4-500 characters, and valid characters are /a-z[0-9]-_/.
     * @param {string} apiParams.parent - (Required) Required. The parent resource for Attribute. Format: `projects/{project}/locations/{location}`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.attributes.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/attributes', 'POST', apiParams, clientConfig);

    /**
     * Get details about the attribute.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the attribute to retrieve. Format: `projects/{project}/locations/{location}/attributes/{attribute}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.attributes.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Update the attribute. The following fields in the Attribute resource can be updated: * display_name The display name can be updated for user defined attributes only. * description The description can be updated for user defined attributes only. * allowed_values To update the list of allowed values, clients need to use the fetched list of allowed values and add or remove values to or from the same list. The mutable allowed values can be updated for both user defined and System defined attributes. The immutable allowed values cannot be updated or deleted. The updated list of allowed values cannot be empty. If an allowed value that is already used by some resource's attribute is deleted, then the association between the resource and the attribute value will also be deleted. * cardinality The cardinality can be updated for user defined attributes only. Cardinality can only be increased during an update. The update_mask should be used to specify the fields being updated.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Identifier. The name of the attribute in the API Hub. Format: `projects/{project}/locations/{location}/attributes/{attribute}`
     * @param {string} apiParams.updateMask - Required. The list of fields to update.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.attributes.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Delete an attribute. Note: System defined attributes cannot be deleted. All associations of the attribute being deleted with any API hub resource will also get deleted.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the attribute to delete. Format: `projects/{project}/locations/{location}/attributes/{attribute}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.attributes.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * List all attributes.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. An expression that filters the list of Attributes. A filter expression consists of a field name, a comparison operator, and a value for filtering. The value must be a string or a boolean. The comparison operator must be one of: `<`, `>` or `=`. Filters are not case sensitive. The following fields in the `Attribute` are eligible for filtering: * `display_name` - The display name of the Attribute. Allowed comparison operators: `=`. * `definition_type` - The definition type of the attribute. Allowed comparison operators: `=`. * `scope` - The scope of the attribute. Allowed comparison operators: `=`. * `data_type` - The type of the data of the attribute. Allowed comparison operators: `=`. * `mandatory` - Denotes whether the attribute is mandatory or not. Allowed comparison operators: `=`. * `create_time` - The time at which the Attribute was created. The value should be in the (RFC3339)[https://tools.ietf.org/html/rfc3339] format. Allowed comparison operators: `>` and `<`. Expressions are combined with either `AND` logic operator or `OR` logical operator but not both of them together i.e. only one of the `AND` or `OR` operator can be used throughout the filter string and both the operators cannot be used together. No other logical operators are supported. At most three filter fields are allowed in the filter string and if provided more than that then `INVALID_ARGUMENT` error is returned by the API. Here are a few examples: * `display_name = production` - - The display name of the attribute is _production_. * `(display_name = production) AND (create_time < \"2021-08-15T14:50:00Z\") AND (create_time > \"2021-08-10T12:00:00Z\")` - The display name of the attribute is _production_ and the attribute was created before _2021-08-15 14:50:00 UTC_ and after _2021-08-10 12:00:00 UTC_. * `display_name = production OR scope = api` - The attribute where the display name is _production_ or the scope is _api_.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of attribute resources to return. The service may return fewer than this value. If unspecified, at most 50 attributes will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} apiParams.pageToken - Optional. A page token, received from a previous `ListAttributes` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAttributes` must match the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. The parent resource for Attribute. Format: `projects/{project}/locations/{location}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.attributes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/attributes', 'GET', apiParams, clientConfig);

    this.projects.locations.externalApis = {};

    /**
     * Create an External API resource in the API hub.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.externalApiId - Optional. The ID to use for the External API resource, which will become the final component of the External API's resource name. This field is optional. * If provided, the same will be used. The service will throw an error if the specified id is already used by another External API resource in the API hub. * If not provided, a system generated id will be used. This value should be 4-500 characters, and valid characters are /a-z[0-9]-_/.
     * @param {string} apiParams.parent - (Required) Required. The parent resource for the External API resource. Format: `projects/{project}/locations/{location}`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.externalApis.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/externalApis', 'POST', apiParams, clientConfig);

    /**
     * Get details about an External API resource in the API hub.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the External API resource to retrieve. Format: `projects/{project}/locations/{location}/externalApis/{externalApi}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.externalApis.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Update an External API resource in the API hub. The following fields can be updated: * display_name * description * documentation * endpoints * paths The update_mask should be used to specify the fields being updated.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Identifier. Format: `projects/{project}/locations/{location}/externalApi/{externalApi}`.
     * @param {string} apiParams.updateMask - Required. The list of fields to update.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.externalApis.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Delete an External API resource in the API hub.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the External API resource to delete. Format: `projects/{project}/locations/{location}/externalApis/{externalApi}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.externalApis.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * List External API resources in the API hub.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of External API resources to return. The service may return fewer than this value. If unspecified, at most 50 ExternalApis will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} apiParams.pageToken - Optional. A page token, received from a previous `ListExternalApis` call. Provide this to retrieve the subsequent page. When paginating, all other parameters (except page_size) provided to `ListExternalApis` must match the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. The parent, which owns this collection of External API resources. Format: `projects/{project}/locations/{location}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.externalApis.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/externalApis', 'GET', apiParams, clientConfig);

    this.projects.locations.dependencies = {};

    /**
     * Create a dependency between two entities in the API hub.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.dependencyId - Optional. The ID to use for the dependency resource, which will become the final component of the dependency's resource name. This field is optional. * If provided, the same will be used. The service will throw an error if duplicate id is provided by the client. * If not provided, a system generated id will be used. This value should be 4-500 characters, and valid characters are `a-z[0-9]-_`.
     * @param {string} apiParams.parent - (Required) Required. The parent resource for the dependency resource. Format: `projects/{project}/locations/{location}`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.dependencies.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/dependencies', 'POST', apiParams, clientConfig);

    /**
     * Get details about a dependency resource in the API hub.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the dependency resource to retrieve. Format: `projects/{project}/locations/{location}/dependencies/{dependency}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.dependencies.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Update a dependency based on the update_mask provided in the request. The following fields in the dependency can be updated: * description
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Identifier. The name of the dependency in the API Hub. Format: `projects/{project}/locations/{location}/dependencies/{dependency}`
     * @param {string} apiParams.updateMask - Required. The list of fields to update.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.dependencies.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Delete the dependency resource.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the dependency resource to delete. Format: `projects/{project}/locations/{location}/dependencies/{dependency}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.dependencies.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * List dependencies based on the provided filter and pagination parameters.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. An expression that filters the list of Dependencies. A filter expression consists of a field name, a comparison operator, and a value for filtering. The value must be a string. Allowed comparison operator is `=`. Filters are not case sensitive. The following fields in the `Dependency` are eligible for filtering: * `consumer.operation_resource_name` - The operation resource name for the consumer entity involved in a dependency. Allowed comparison operators: `=`. * `consumer.external_api_resource_name` - The external api resource name for the consumer entity involved in a dependency. Allowed comparison operators: `=`. * `supplier.operation_resource_name` - The operation resource name for the supplier entity involved in a dependency. Allowed comparison operators: `=`. * `supplier.external_api_resource_name` - The external api resource name for the supplier entity involved in a dependency. Allowed comparison operators: `=`. Expressions are combined with either `AND` logic operator or `OR` logical operator but not both of them together i.e. only one of the `AND` or `OR` operator can be used throughout the filter string and both the operators cannot be used together. No other logical operators are supported. At most three filter fields are allowed in the filter string and if provided more than that then `INVALID_ARGUMENT` error is returned by the API. For example, `consumer.operation_resource_name = \"projects/p1/locations/global/apis/a1/versions/v1/operations/o1\" OR supplier.operation_resource_name = \"projects/p1/locations/global/apis/a1/versions/v1/operations/o1\"` - The dependencies with either consumer or supplier operation resource name as _projects/p1/locations/global/apis/a1/versions/v1/operations/o1_.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of dependency resources to return. The service may return fewer than this value. If unspecified, at most 50 dependencies will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} apiParams.pageToken - Optional. A page token, received from a previous `ListDependencies` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListDependencies` must match the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. The parent which owns this collection of dependency resources. Format: `projects/{project}/locations/{location}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.dependencies.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/dependencies', 'GET', apiParams, clientConfig);

    this.projects.locations.curations = {};

    /**
     * Create a curation resource in the API hub. Once a curation resource is created, plugin instances can start using it.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.curationId - Optional. The ID to use for the curation resource, which will become the final component of the curations's resource name. This field is optional. * If provided, the same will be used. The service will throw an error if the specified ID is already used by another curation resource in the API hub. * If not provided, a system generated ID will be used. This value should be 4-500 characters, and valid characters are /a-z[0-9]-_/.
     * @param {string} apiParams.parent - (Required) Required. The parent resource for the curation resource. Format: `projects/{project}/locations/{location}`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.curations.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/curations', 'POST', apiParams, clientConfig);

    /**
     * Get curation resource details.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the curation resource to retrieve. Format: `projects/{project}/locations/{location}/curations/{curation}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.curations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * List curation resources in the API hub.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. An expression that filters the list of curation resources. A filter expression consists of a field name, a comparison operator, and a value for filtering. The value must be a string. The comparison operator must be one of: `<`, `>`, `:` or `=`. Filters are case insensitive. The following fields in the `curation resource` are eligible for filtering: * `create_time` - The time at which the curation was created. The value should be in the (RFC3339)[https://tools.ietf.org/html/rfc3339] format. Allowed comparison operators: `>` and `<`. * `display_name` - The display name of the curation. Allowed comparison operators: `=`. * `state` - The state of the curation. Allowed comparison operators: `=`. Expressions are combined with either `AND` logic operator or `OR` logical operator but not both of them together i.e. only one of the `AND` or `OR` operator can be used throughout the filter string and both the operators cannot be used together. No other logical operators are supported. At most three filter fields are allowed in the filter string and if provided more than that then `INVALID_ARGUMENT` error is returned by the API. Here are a few examples: * `create_time < \"2021-08-15T14:50:00Z\" AND create_time > \"2021-08-10T12:00:00Z\"` - The curation resource was created before _2021-08-15 14:50:00 UTC_ and after _2021-08-10 12:00:00 UTC_.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of curation resources to return. The service may return fewer than this value. If unspecified, at most 50 curations will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} apiParams.pageToken - Optional. A page token, received from a previous `ListCurations` call. Provide this to retrieve the subsequent page. When paginating, all other parameters (except page_size) provided to `ListCurations` must match the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. The parent, which owns this collection of curation resources. Format: `projects/{project}/locations/{location}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.curations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/curations', 'GET', apiParams, clientConfig);

    /**
     * Update a curation resource in the API hub. The following fields in the curation can be updated: * display_name * description The update_mask should be used to specify the fields being updated.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Identifier. The name of the curation. Format: `projects/{project}/locations/{location}/curations/{curation}`
     * @param {string} apiParams.updateMask - Optional. The list of fields to update.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.curations.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Delete a curation resource in the API hub. A curation can only be deleted if it's not being used by any plugin instance.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the curation resource to delete. Format: `projects/{project}/locations/{location}/curations/{curation}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.curations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.discoveredApiObservations = {};

    /**
     * Lists all the DiscoveredAPIObservations in a given project and location.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of ApiObservations to return. The service may return fewer than this value. If unspecified, at most 10 ApiObservations will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} apiParams.pageToken - Optional. A page token, received from a previous `ListApiObservations` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListApiObservations` must match the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. The parent, which owns this collection of ApiObservations. Format: projects/{project}/locations/{location}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.discoveredApiObservations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/discoveredApiObservations', 'GET', apiParams, clientConfig);

    /**
     * Gets a DiscoveredAPIObservation in a given project, location and ApiObservation.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the DiscoveredApiObservation to retrieve. Format: projects/{project}/locations/{location}/discoveredApiObservations/{discovered_api_observation}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.discoveredApiObservations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.discoveredApiObservations.discoveredApiOperations = {};

    /**
     * Lists all the DiscoveredAPIOperations in a given project, location and ApiObservation.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional. DiscoveredApiOperations will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} apiParams.pageToken - Optional. A page token, received from a previous `ListDiscoveredApiApiOperations` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListDiscoveredApiApiOperations` must match the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. The parent, which owns this collection of DiscoveredApiOperations. Format: projects/{project}/locations/{location}/discoveredApiObservations/{discovered_api_observation}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.discoveredApiObservations.discoveredApiOperations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/discoveredApiOperations', 'GET', apiParams, clientConfig);

    /**
     * Gets a DiscoveredAPIOperation in a given project, location, ApiObservation and ApiOperation.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the DiscoveredApiOperation to retrieve. Format: projects/{project}/locations/{location}/discoveredApiObservations/{discovered_api_observation}/discoveredApiOperations/{discovered_api_operation}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.discoveredApiObservations.discoveredApiOperations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.hostProjectRegistrations = {};

    /**
     * Create a host project registration. A Google cloud project can be registered as a host project if it is not attached as a runtime project to another host project. A project can be registered as a host project only once. Subsequent register calls for the same project will fail.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.hostProjectRegistrationId - Required. The ID to use for the Host Project Registration, which will become the final component of the host project registration's resource name. The ID must be the same as the Google cloud project specified in the host_project_registration.gcp_project field.
     * @param {string} apiParams.parent - (Required) Required. The parent resource for the host project. Format: `projects/{project}/locations/{location}`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.hostProjectRegistrations.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/hostProjectRegistrations', 'POST', apiParams, clientConfig);

    /**
     * Get a host project registration.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Host project registration resource name. projects/{project}/locations/{location}/hostProjectRegistrations/{host_project_registration_id}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.hostProjectRegistrations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists host project registrations.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. An expression that filters the list of HostProjectRegistrations. A filter expression consists of a field name, a comparison operator, and a value for filtering. The value must be a string. All standard operators as documented at https://google.aip.dev/160 are supported. The following fields in the `HostProjectRegistration` are eligible for filtering: * `name` - The name of the HostProjectRegistration. * `create_time` - The time at which the HostProjectRegistration was created. The value should be in the (RFC3339)[https://tools.ietf.org/html/rfc3339] format. * `gcp_project` - The Google cloud project associated with the HostProjectRegistration.
     * @param {string} apiParams.orderBy - Optional. Hint for how to order the results.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of host project registrations to return. The service may return fewer than this value. If unspecified, at most 50 host project registrations will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} apiParams.pageToken - Optional. A page token, received from a previous `ListHostProjectRegistrations` call. Provide this to retrieve the subsequent page. When paginating, all other parameters (except page_size) provided to `ListHostProjectRegistrations` must match the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. The parent, which owns this collection of host projects. Format: `projects/*\/locations/*`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.hostProjectRegistrations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/hostProjectRegistrations', 'GET', apiParams, clientConfig);

    this.projects.locations.apiHubInstances = {};

    /**
     * Provisions instance resources for the API Hub.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.apiHubInstanceId - Optional. Identifier to assign to the Api Hub instance. Must be unique within scope of the parent resource. If the field is not provided, system generated id will be used. This value should be 4-40 characters, and valid characters are `/a-z[0-9]-_/`.
     * @param {string} apiParams.parent - (Required) Required. The parent resource for the Api Hub instance resource. Format: `projects/{project}/locations/{location}`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.apiHubInstances.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/apiHubInstances', 'POST', apiParams, clientConfig);

    /**
     * Deletes the API hub instance. Deleting the API hub instance will also result in the removal of all associated runtime project attachments and the host project registration.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the Api Hub instance to delete. Format: `projects/{project}/locations/{location}/apiHubInstances/{apiHubInstance}`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.apiHubInstances.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Gets details of a single API Hub instance.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the Api Hub instance to retrieve. Format: `projects/{project}/locations/{location}/apiHubInstances/{apiHubInstance}`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.apiHubInstances.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Looks up an Api Hub instance in a given GCP project. There will always be only one Api Hub instance for a GCP project across all locations.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. There will always be only one Api Hub instance for a GCP project across all locations. The parent resource for the Api Hub instance resource. Format: `projects/{project}/locations/{location}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.apiHubInstances.lookup = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/apiHubInstances:lookup', 'GET', apiParams, clientConfig);

    this.projects.locations.runtimeProjectAttachments = {};

    /**
     * Attaches a runtime project to the host project.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent resource for the Runtime Project Attachment. Format: `projects/{project}/locations/{location}`
     * @param {string} apiParams.runtimeProjectAttachmentId - Required. The ID to use for the Runtime Project Attachment, which will become the final component of the Runtime Project Attachment's name. The ID must be the same as the project ID of the Google cloud project specified in the runtime_project_attachment.runtime_project field.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.runtimeProjectAttachments.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/runtimeProjectAttachments', 'POST', apiParams, clientConfig);

    /**
     * Gets a runtime project attachment.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the API resource to retrieve. Format: `projects/{project}/locations/{location}/runtimeProjectAttachments/{runtime_project_attachment}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.runtimeProjectAttachments.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * List runtime projects attached to the host project.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. An expression that filters the list of RuntimeProjectAttachments. A filter expression consists of a field name, a comparison operator, and a value for filtering. The value must be a string. All standard operators as documented at https://google.aip.dev/160 are supported. The following fields in the `RuntimeProjectAttachment` are eligible for filtering: * `name` - The name of the RuntimeProjectAttachment. * `create_time` - The time at which the RuntimeProjectAttachment was created. The value should be in the (RFC3339)[https://tools.ietf.org/html/rfc3339] format. * `runtime_project` - The Google cloud project associated with the RuntimeProjectAttachment.
     * @param {string} apiParams.orderBy - Optional. Hint for how to order the results.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of runtime project attachments to return. The service may return fewer than this value. If unspecified, at most 50 runtime project attachments will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} apiParams.pageToken - Optional. A page token, received from a previous `ListRuntimeProjectAttachments` call. Provide this to retrieve the subsequent page. When paginating, all other parameters (except page_size) provided to `ListRuntimeProjectAttachments` must match the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. The parent, which owns this collection of runtime project attachments. Format: `projects/{project}/locations/{location}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.runtimeProjectAttachments.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/runtimeProjectAttachments', 'GET', apiParams, clientConfig);

    /**
     * Delete a runtime project attachment in the API Hub. This call will detach the runtime project from the host project.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the Runtime Project Attachment to delete. Format: `projects/{project}/locations/{location}/runtimeProjectAttachments/{runtime_project_attachment}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.runtimeProjectAttachments.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
  }

/**
 * @private Builds the full request URL and options object for a request.
 */
_buildRequestDetails(path, httpMethod, apiParams, clientConfig = {}) {
    let url;
    if (path.startsWith('/upload/')) {
        url = 'https://www.googleapis.com' + path;
    } else {
        url = this._rootUrl + this._servicePath + path;
    }

    const remainingParams = { ...apiParams };
    const pathParams = url.match(/{[^{}]+}/g) || [];

    pathParams.forEach(placeholder => {
        const isPlus = placeholder.startsWith('{+');
        const paramName = placeholder.slice(isPlus ? 2 : 1, -1);
        if (Object.prototype.hasOwnProperty.call(remainingParams, paramName)) {
            url = url.replace(placeholder, remainingParams[paramName]);
            delete remainingParams[paramName];
        }
    });

    const options = {
        method: httpMethod,
        headers: {
            'Authorization': 'Bearer ' + this._token,
            ...(clientConfig.headers || {}),
        },
        muteHttpExceptions: true,
    };

    if (apiParams && apiParams.media && apiParams.media.body) {
        let mediaBlob;
        // Check if the body is already a blob by "duck typing" for the getBytes method.
        if (apiParams.media.body.getBytes && typeof apiParams.media.body.getBytes === 'function') {
            mediaBlob = apiParams.media.body;
        } else {
            // If it's not a blob (e.g., a string or byte array), create one.
            mediaBlob = Utilities.newBlob(apiParams.media.body);
        }

        const hasMetadata = apiParams.requestBody && Object.keys(apiParams.requestBody).length > 0;

        if (hasMetadata) {
            // ** Multipart Upload (Media + Metadata) **
            remainingParams.uploadType = 'multipart';
            
            const boundary = '----' + Utilities.getUuid();
            const metadata = apiParams.requestBody;

            let requestData = '--' + boundary + '\r\n';
            requestData += 'Content-Type: application/json; charset=UTF-8\r\n\r\n';
            requestData += JSON.stringify(metadata) + '\r\n';
            requestData += '--' + boundary + '\r\n';
            requestData += 'Content-Type: ' + apiParams.media.mimeType + '\r\n\r\n';
            
            const payloadBytes = Utilities.newBlob(requestData).getBytes()
                .concat(mediaBlob.getBytes())
                .concat(Utilities.newBlob('\r\n--' + boundary + '--').getBytes());

            options.contentType = 'multipart/related; boundary=' + boundary;
            options.payload = payloadBytes;

        } else {
            // ** Simple Media Upload (Media only) **
            remainingParams.uploadType = 'media';

            options.contentType = mediaBlob.getContentType();
            options.payload = mediaBlob.getBytes();
        }

    } else if (apiParams && apiParams.requestBody) {
        options.contentType = 'application/json';
        options.payload = JSON.stringify(apiParams.requestBody);
    }
    const queryParts = [];
    for (const key in remainingParams) {
        if (key !== 'requestBody' && key !== 'media') {
            queryParts.push(`${encodeURIComponent(key)}=${encodeURIComponent(remainingParams[key])}`);
        }
    }
    if (queryParts.length > 0) {
        url += '?' + queryParts.join('&');
    }

    return { url, options };
}

  /**
   * @private Makes the HTTP request with exponential backoff for retries.
   * @return {Promise<object>} A promise that resolves with the response object.
   */
  async _makeRequest(path, httpMethod, apiParams, clientConfig = {}) {
    const isMediaDownload = apiParams.alt === 'media';

    const { url, options } = this._buildRequestDetails(path, httpMethod, apiParams, clientConfig);

    for (let i = 0; i <= this._backoffConfig.retries; i++) {
      const response = UrlFetchApp.fetch(url, options);
      const responseCode = response.getResponseCode();
      const responseHeaders = response.getAllHeaders();

      if (responseCode >= 200 && responseCode < 300) {
        // Prioritize responseType:'blob' and media downloads to return raw data.
        if ((clientConfig && (clientConfig.responseType === 'blob' || clientConfig.responseType === 'stream')) || isMediaDownload) {
          return {
            data: response.getBlob(),
            status: responseCode,
            headers: responseHeaders,
          };
        }

        const responseText = response.getContentText();
        // Handle empty responses, which are valid (e.g., a 204 No Content).
        const responseBody = responseText ? JSON.parse(responseText) : {};
        return {
          data: responseBody,
          status: responseCode,
          headers: responseHeaders,
        };
      }

      const retryableErrors = [429, 500, 503];
      if (retryableErrors.includes(responseCode) && i < this._backoffConfig.retries) {
        const delay = this._backoffConfig.baseDelay * Math.pow(2, i) + Math.random() * 1000;
        Utilities.sleep(delay);
        continue;
      }

      const responseText = response.getContentText(); // Get response text for error
      let errorMessage = `Request failed with status ${responseCode}`;
      try {
        const errorObj = JSON.parse(responseText);
        if (errorObj.error && errorObj.error.message) {
          errorMessage += `: ${errorObj.error.message}`;
        }
      } catch (e) {
        // If the error response isn't JSON, include the raw text.
        if (responseText) {
          errorMessage += `. Response: ${responseText}`;
        }
      }
      throw new Error(errorMessage);
    }

    throw new Error('Request failed after multiple retries.');
  }
}
