
/**
 * Google Apps Script client library for the Security Command Center API
 * Documentation URL: https://cloud.google.com/security-command-center
 * @class
 */
class Securitycenter {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://securitycenter.googleapis.com/';
    this._servicePath = '';


    this.folders = {};

    this.folders.findings = {};

    /**
     * Kicks off an LRO to bulk mute findings for a parent based on a filter. The parent can be either an organization, folder or project. The findings matched by the filter will be muted after the LRO is done.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent, at which bulk action needs to be applied. Its format is `organizations/[organization_id]`, `folders/[folder_id]`, `projects/[project_id]`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.findings.bulkMute = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/findings:bulkMute', 'POST', apiParams, clientConfig);

    this.folders.securityHealthAnalyticsSettings = {};

    this.folders.securityHealthAnalyticsSettings.customModules = {};

    /**
     * Creates a resident SecurityHealthAnalyticsCustomModule at the scope of the given CRM parent, and also creates inherited SecurityHealthAnalyticsCustomModules for all CRM descendants of the given parent. These modules are enabled by default.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. Resource name of the new custom module's parent. Its format is `organizations/{organization}/securityHealthAnalyticsSettings`, `folders/{folder}/securityHealthAnalyticsSettings`, or `projects/{project}/securityHealthAnalyticsSettings`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.securityHealthAnalyticsSettings.customModules.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/customModules', 'POST', apiParams, clientConfig);

    /**
     * Deletes the specified SecurityHealthAnalyticsCustomModule and all of its descendants in the CRM hierarchy. This method is only supported for resident custom modules.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the custom module to delete. Its format is `organizations/{organization}/securityHealthAnalyticsSettings/customModules/{customModule}`, `folders/{folder}/securityHealthAnalyticsSettings/customModules/{customModule}`, or `projects/{project}/securityHealthAnalyticsSettings/customModules/{customModule}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.securityHealthAnalyticsSettings.customModules.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Retrieves a SecurityHealthAnalyticsCustomModule.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the custom module to get. Its format is `organizations/{organization}/securityHealthAnalyticsSettings/customModules/{customModule}`, `folders/{folder}/securityHealthAnalyticsSettings/customModules/{customModule}`, or `projects/{project}/securityHealthAnalyticsSettings/customModules/{customModule}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.securityHealthAnalyticsSettings.customModules.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Returns a list of all resident SecurityHealthAnalyticsCustomModules under the given CRM parent and all of the parent’s CRM descendants.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000.
     * @param {string} apiParams.pageToken - The value returned by the last call indicating a continuation
     * @param {string} apiParams.parent - (Required) Required. Name of parent to list descendant custom modules. Its format is `organizations/{organization}/securityHealthAnalyticsSettings`, `folders/{folder}/securityHealthAnalyticsSettings`, or `projects/{project}/securityHealthAnalyticsSettings`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.securityHealthAnalyticsSettings.customModules.listDescendant = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/customModules:listDescendant', 'GET', apiParams, clientConfig);

    /**
     * Returns a list of all SecurityHealthAnalyticsCustomModules for the given parent. This includes resident modules defined at the scope of the parent, and inherited modules, inherited from CRM ancestors.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000.
     * @param {string} apiParams.pageToken - The value returned by the last call indicating a continuation
     * @param {string} apiParams.parent - (Required) Required. Name of parent to list custom modules. Its format is `organizations/{organization}/securityHealthAnalyticsSettings`, `folders/{folder}/securityHealthAnalyticsSettings`, or `projects/{project}/securityHealthAnalyticsSettings`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.securityHealthAnalyticsSettings.customModules.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/customModules', 'GET', apiParams, clientConfig);

    /**
     * Simulates a given SecurityHealthAnalyticsCustomModule and Resource.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The relative resource name of the organization, project, or folder. For more information about relative resource names, see [Relative Resource Name](https://cloud.google.com/apis/design/resource_names#relative_resource_name) Example: `organizations/{organization_id}`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.securityHealthAnalyticsSettings.customModules.simulate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/customModules:simulate', 'POST', apiParams, clientConfig);

    /**
     * Updates the SecurityHealthAnalyticsCustomModule under the given name based on the given update mask. Updating the enablement state is supported on both resident and inherited modules (though resident modules cannot have an enablement state of "inherited"). Updating the display name and custom config of a module is supported on resident modules only.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Immutable. The resource name of the custom module. Its format is "organizations/{organization}/securityHealthAnalyticsSettings/customModules/{customModule}", or "folders/{folder}/securityHealthAnalyticsSettings/customModules/{customModule}", or "projects/{project}/securityHealthAnalyticsSettings/customModules/{customModule}" The id {customModule} is server-generated and is not user settable. It will be a numeric id containing 1-20 digits.
     * @param {string} apiParams.updateMask - The list of fields to be updated. The only fields that can be updated are `enablement_state` and `custom_config`. If empty or set to the wildcard value `*`, both `enablement_state` and `custom_config` are updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.securityHealthAnalyticsSettings.customModules.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    this.folders.securityHealthAnalyticsSettings.effectiveCustomModules = {};

    /**
     * Retrieves an EffectiveSecurityHealthAnalyticsCustomModule.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the effective custom module to get. Its format is `organizations/{organization}/securityHealthAnalyticsSettings/effectiveCustomModules/{customModule}`, `folders/{folder}/securityHealthAnalyticsSettings/effectiveCustomModules/{customModule}`, or `projects/{project}/securityHealthAnalyticsSettings/effectiveCustomModules/{customModule}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.securityHealthAnalyticsSettings.effectiveCustomModules.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Returns a list of all EffectiveSecurityHealthAnalyticsCustomModules for the given parent. This includes resident modules defined at the scope of the parent, and inherited modules, inherited from CRM ancestors.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000.
     * @param {string} apiParams.pageToken - The value returned by the last call indicating a continuation
     * @param {string} apiParams.parent - (Required) Required. Name of parent to list effective custom modules. Its format is `organizations/{organization}/securityHealthAnalyticsSettings`, `folders/{folder}/securityHealthAnalyticsSettings`, or `projects/{project}/securityHealthAnalyticsSettings`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.securityHealthAnalyticsSettings.effectiveCustomModules.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/effectiveCustomModules', 'GET', apiParams, clientConfig);

    this.folders.muteConfigs = {};

    /**
     * Creates a mute config.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.muteConfigId - Required. Unique identifier provided by the client within the parent scope. It must consist of only lowercase letters, numbers, and hyphens, must start with a letter, must end with either a letter or a number, and must be 63 characters or less.
     * @param {string} apiParams.parent - (Required) Required. Resource name of the new mute configs's parent. Its format is `organizations/[organization_id]`, `folders/[folder_id]`, or `projects/[project_id]`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.muteConfigs.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/muteConfigs', 'POST', apiParams, clientConfig);

    /**
     * Deletes an existing mute config.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the mute config to delete. Its format is `organizations/{organization}/muteConfigs/{config_id}`, `folders/{folder}/muteConfigs/{config_id}`, `projects/{project}/muteConfigs/{config_id}`, `organizations/{organization}/locations/global/muteConfigs/{config_id}`, `folders/{folder}/locations/global/muteConfigs/{config_id}`, or `projects/{project}/locations/global/muteConfigs/{config_id}`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.muteConfigs.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Gets a mute config.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the mute config to retrieve. Its format is `organizations/{organization}/muteConfigs/{config_id}`, `folders/{folder}/muteConfigs/{config_id}`, `projects/{project}/muteConfigs/{config_id}`, `organizations/{organization}/locations/global/muteConfigs/{config_id}`, `folders/{folder}/locations/global/muteConfigs/{config_id}`, or `projects/{project}/locations/global/muteConfigs/{config_id}`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.muteConfigs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists mute configs.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of configs to return. The service may return fewer than this value. If unspecified, at most 10 configs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} apiParams.pageToken - A page token, received from a previous `ListMuteConfigs` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListMuteConfigs` must match the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. The parent, which owns the collection of mute configs. Its format is `organizations/[organization_id]`, `folders/[folder_id]`, `projects/[project_id]`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.muteConfigs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/muteConfigs', 'GET', apiParams, clientConfig);

    /**
     * Updates a mute config.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) This field will be ignored if provided on config creation. Format `organizations/{organization}/muteConfigs/{mute_config}` `folders/{folder}/muteConfigs/{mute_config}` `projects/{project}/muteConfigs/{mute_config}` `organizations/{organization}/locations/global/muteConfigs/{mute_config}` `folders/{folder}/locations/global/muteConfigs/{mute_config}` `projects/{project}/locations/global/muteConfigs/{mute_config}`
     * @param {string} apiParams.updateMask - The list of fields to be updated. If empty all mutable fields will be updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.muteConfigs.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    this.folders.notificationConfigs = {};

    /**
     * Creates a notification config.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.configId - Required. Unique identifier provided by the client within the parent scope. It must be between 1 and 128 characters and contain alphanumeric characters, underscores, or hyphens only.
     * @param {string} apiParams.parent - (Required) Required. Resource name of the new notification config's parent. Its format is `organizations/[organization_id]`, `folders/[folder_id]`, or `projects/[project_id]`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.notificationConfigs.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/notificationConfigs', 'POST', apiParams, clientConfig);

    /**
     * Deletes a notification config.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the notification config to delete. Its format is `organizations/[organization_id]/notificationConfigs/[config_id]`, `folders/[folder_id]/notificationConfigs/[config_id]`, or `projects/[project_id]/notificationConfigs/[config_id]`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.notificationConfigs.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Gets a notification config.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the notification config to get. Its format is `organizations/[organization_id]/notificationConfigs/[config_id]`, `folders/[folder_id]/notificationConfigs/[config_id]`, or `projects/[project_id]/notificationConfigs/[config_id]`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.notificationConfigs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists notification configs.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000.
     * @param {string} apiParams.pageToken - The value returned by the last `ListNotificationConfigsResponse`; indicates that this is a continuation of a prior `ListNotificationConfigs` call, and that the system should return the next page of data.
     * @param {string} apiParams.parent - (Required) Required. The name of the parent in which to list the notification configurations. Its format is "organizations/[organization_id]", "folders/[folder_id]", or "projects/[project_id]".
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.notificationConfigs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/notificationConfigs', 'GET', apiParams, clientConfig);

    /**
     * Updates a notification config. The following update fields are allowed: description, pubsub_topic, streaming_config.filter
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The relative resource name of this notification config. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Example: "organizations/{organization_id}/notificationConfigs/notify_public_bucket", "folders/{folder_id}/notificationConfigs/notify_public_bucket", or "projects/{project_id}/notificationConfigs/notify_public_bucket".
     * @param {string} apiParams.updateMask - The FieldMask to use when updating the notification config. If empty all mutable fields will be updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.notificationConfigs.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    this.folders.locations = {};

    this.folders.locations.muteConfigs = {};

    /**
     * Deletes an existing mute config.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the mute config to delete. Its format is `organizations/{organization}/muteConfigs/{config_id}`, `folders/{folder}/muteConfigs/{config_id}`, `projects/{project}/muteConfigs/{config_id}`, `organizations/{organization}/locations/global/muteConfigs/{config_id}`, `folders/{folder}/locations/global/muteConfigs/{config_id}`, or `projects/{project}/locations/global/muteConfigs/{config_id}`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.locations.muteConfigs.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Gets a mute config.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the mute config to retrieve. Its format is `organizations/{organization}/muteConfigs/{config_id}`, `folders/{folder}/muteConfigs/{config_id}`, `projects/{project}/muteConfigs/{config_id}`, `organizations/{organization}/locations/global/muteConfigs/{config_id}`, `folders/{folder}/locations/global/muteConfigs/{config_id}`, or `projects/{project}/locations/global/muteConfigs/{config_id}`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.locations.muteConfigs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Updates a mute config.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) This field will be ignored if provided on config creation. Format `organizations/{organization}/muteConfigs/{mute_config}` `folders/{folder}/muteConfigs/{mute_config}` `projects/{project}/muteConfigs/{mute_config}` `organizations/{organization}/locations/global/muteConfigs/{mute_config}` `folders/{folder}/locations/global/muteConfigs/{mute_config}` `projects/{project}/locations/global/muteConfigs/{mute_config}`
     * @param {string} apiParams.updateMask - The list of fields to be updated. If empty all mutable fields will be updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.locations.muteConfigs.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    this.folders.bigQueryExports = {};

    /**
     * Gets a BigQuery export.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the BigQuery export to retrieve. Its format is `organizations/{organization}/bigQueryExports/{export_id}`, `folders/{folder}/bigQueryExports/{export_id}`, or `projects/{project}/bigQueryExports/{export_id}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.bigQueryExports.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Creates a BigQuery export.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.bigQueryExportId - Required. Unique identifier provided by the client within the parent scope. It must consist of only lowercase letters, numbers, and hyphens, must start with a letter, must end with either a letter or a number, and must be 63 characters or less.
     * @param {string} apiParams.parent - (Required) Required. The name of the parent resource of the new BigQuery export. Its format is `organizations/[organization_id]`, `folders/[folder_id]`, or `projects/[project_id]`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.bigQueryExports.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/bigQueryExports', 'POST', apiParams, clientConfig);

    /**
     * Deletes an existing BigQuery export.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the BigQuery export to delete. Its format is `organizations/{organization}/bigQueryExports/{export_id}`, `folders/{folder}/bigQueryExports/{export_id}`, or `projects/{project}/bigQueryExports/{export_id}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.bigQueryExports.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Updates a BigQuery export.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The relative resource name of this export. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name. Example format: "organizations/{organization_id}/bigQueryExports/{export_id}" Example format: "folders/{folder_id}/bigQueryExports/{export_id}" Example format: "projects/{project_id}/bigQueryExports/{export_id}" This field is provided in responses, and is ignored when provided in create requests.
     * @param {string} apiParams.updateMask - The list of fields to be updated. If empty all mutable fields will be updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.bigQueryExports.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Lists BigQuery exports. Note that when requesting BigQuery exports at a given level all exports under that level are also returned e.g. if requesting BigQuery exports under a folder, then all BigQuery exports immediately under the folder plus the ones created under the projects within the folder are returned.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of configs to return. The service may return fewer than this value. If unspecified, at most 10 configs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} apiParams.pageToken - A page token, received from a previous `ListBigQueryExports` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListBigQueryExports` must match the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. The parent, which owns the collection of BigQuery exports. Its format is `organizations/[organization_id]`, `folders/[folder_id]`, `projects/[project_id]`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.bigQueryExports.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/bigQueryExports', 'GET', apiParams, clientConfig);

    this.folders.assets = {};

    /**
     * Filters an organization's assets and groups them by their specified properties.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The name of the parent to group the assets by. Its format is `organizations/[organization_id]`, `folders/[folder_id]`, or `projects/[project_id]`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.assets.group = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/assets:group', 'POST', apiParams, clientConfig);

    /**
     * Lists an organization's assets.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.compareDuration - When compare_duration is set, the ListAssetsResult's "state_change" attribute is updated to indicate whether the asset was added, removed, or remained present during the compare_duration period of time that precedes the read_time. This is the time between (read_time - compare_duration) and read_time. The state_change value is derived based on the presence of the asset at the two points in time. Intermediate state changes between the two times don't affect the result. For example, the results aren't affected if the asset is removed and re-created again. Possible "state_change" values when compare_duration is specified: * "ADDED": indicates that the asset was not present at the start of compare_duration, but present at read_time. * "REMOVED": indicates that the asset was present at the start of compare_duration, but not present at read_time. * "ACTIVE": indicates that the asset was present at both the start and the end of the time period defined by compare_duration and read_time. If compare_duration is not specified, then the only possible state_change is "UNUSED", which will be the state_change set for all assets present at read_time.
     * @param {string} apiParams.fieldMask - A field mask to specify the ListAssetsResult fields to be listed in the response. An empty field mask will list all fields.
     * @param {string} apiParams.filter - Expression that defines the filter to apply across assets. The expression is a list of zero or more restrictions combined via logical operators `AND` and `OR`. Parentheses are supported, and `OR` has higher precedence than `AND`. Restrictions have the form ` ` and may have a `-` character in front of them to indicate negation. The fields map to those defined in the Asset resource. Examples include: * name * security_center_properties.resource_name * resource_properties.a_property * security_marks.marks.marka The supported operators are: * `=` for all value types. * `>`, `<`, `>=`, `<=` for integer values. * `:`, meaning substring matching, for strings. The supported value types are: * string literals in quotes. * integer literals without quotes. * boolean literals `true` and `false` without quotes. The following are the allowed field and operator combinations: * name: `=` * update_time: `=`, `>`, `<`, `>=`, `<=` Usage: This should be milliseconds since epoch or an RFC3339 string. Examples: `update_time = "2019-06-10T16:07:18-07:00"` `update_time = 1560208038000` * create_time: `=`, `>`, `<`, `>=`, `<=` Usage: This should be milliseconds since epoch or an RFC3339 string. Examples: `create_time = "2019-06-10T16:07:18-07:00"` `create_time = 1560208038000` * iam_policy.policy_blob: `=`, `:` * resource_properties: `=`, `:`, `>`, `<`, `>=`, `<=` * security_marks.marks: `=`, `:` * security_center_properties.resource_name: `=`, `:` * security_center_properties.resource_display_name: `=`, `:` * security_center_properties.resource_type: `=`, `:` * security_center_properties.resource_parent: `=`, `:` * security_center_properties.resource_parent_display_name: `=`, `:` * security_center_properties.resource_project: `=`, `:` * security_center_properties.resource_project_display_name: `=`, `:` * security_center_properties.resource_owners: `=`, `:` For example, `resource_properties.size = 100` is a valid filter string. Use a partial match on the empty string to filter based on a property existing: `resource_properties.my_property : ""` Use a negated partial match on the empty string to filter based on a property not existing: `-resource_properties.my_property : ""`
     * @param {string} apiParams.orderBy - Expression that defines what fields and order to use for sorting. The string value should follow SQL syntax: comma separated list of fields. For example: "name,resource_properties.a_property". The default sorting order is ascending. To specify descending order for a field, a suffix " desc" should be appended to the field name. For example: "name desc,resource_properties.a_property". Redundant space characters in the syntax are insignificant. "name desc,resource_properties.a_property" and " name desc , resource_properties.a_property " are equivalent. The following fields are supported: name update_time resource_properties security_marks.marks security_center_properties.resource_name security_center_properties.resource_display_name security_center_properties.resource_parent security_center_properties.resource_parent_display_name security_center_properties.resource_project security_center_properties.resource_project_display_name security_center_properties.resource_type
     * @param {integer} apiParams.pageSize - The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000.
     * @param {string} apiParams.pageToken - The value returned by the last `ListAssetsResponse`; indicates that this is a continuation of a prior `ListAssets` call, and that the system should return the next page of data.
     * @param {string} apiParams.parent - (Required) Required. The name of the parent resource that contains the assets. The value that you can specify on parent depends on the method in which you specify parent. You can specify one of the following values: `organizations/[organization_id]`, `folders/[folder_id]`, or `projects/[project_id]`.
     * @param {string} apiParams.readTime - Time used as a reference point when filtering assets. The filter is limited to assets existing at the supplied time and their values are those at that specific time. Absence of this field will default to the API's version of NOW.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.assets.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/assets', 'GET', apiParams, clientConfig);

    /**
     * Updates security marks.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The relative resource name of the SecurityMarks. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Examples: "organizations/{organization_id}/assets/{asset_id}/securityMarks" "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}/securityMarks".
     * @param {string} apiParams.startTime - The time at which the updated SecurityMarks take effect. If not set uses current server time. Updates will be applied to the SecurityMarks that are active immediately preceding this time. Must be earlier or equal to the server time.
     * @param {string} apiParams.updateMask - The FieldMask to use when updating the security marks resource. The field mask must not contain duplicate fields. If empty or set to "marks", all marks will be replaced. Individual marks can be updated using "marks.".
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.assets.updateSecurityMarks = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    this.folders.sources = {};

    /**
     * Lists all sources belonging to an organization.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000.
     * @param {string} apiParams.pageToken - The value returned by the last `ListSourcesResponse`; indicates that this is a continuation of a prior `ListSources` call, and that the system should return the next page of data.
     * @param {string} apiParams.parent - (Required) Required. Resource name of the parent of sources to list. Its format should be `organizations/[organization_id]`, `folders/[folder_id]`, or `projects/[project_id]`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.sources.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/sources', 'GET', apiParams, clientConfig);

    this.folders.sources.findings = {};

    /**
     * Filters an organization or source's findings and groups them by their specified properties. To group across all sources provide a `-` as the source id. Example: /v1/organizations/{organization_id}/sources/-/findings, /v1/folders/{folder_id}/sources/-/findings, /v1/projects/{project_id}/sources/-/findings
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. Name of the source to groupBy. Its format is `organizations/[organization_id]/sources/[source_id]`, `folders/[folder_id]/sources/[source_id]`, or `projects/[project_id]/sources/[source_id]`. To groupBy across all sources provide a source_id of `-`. For example: `organizations/{organization_id}/sources/-, folders/{folder_id}/sources/-`, or `projects/{project_id}/sources/-`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.sources.findings.group = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/findings:group', 'POST', apiParams, clientConfig);

    /**
     * Lists an organization or source's findings. To list across all sources provide a `-` as the source id. Example: /v1/organizations/{organization_id}/sources/-/findings
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.compareDuration - When compare_duration is set, the ListFindingsResult's "state_change" attribute is updated to indicate whether the finding had its state changed, the finding's state remained unchanged, or if the finding was added in any state during the compare_duration period of time that precedes the read_time. This is the time between (read_time - compare_duration) and read_time. The state_change value is derived based on the presence and state of the finding at the two points in time. Intermediate state changes between the two times don't affect the result. For example, the results aren't affected if the finding is made inactive and then active again. Possible "state_change" values when compare_duration is specified: * "CHANGED": indicates that the finding was present and matched the given filter at the start of compare_duration, but changed its state at read_time. * "UNCHANGED": indicates that the finding was present and matched the given filter at the start of compare_duration and did not change state at read_time. * "ADDED": indicates that the finding did not match the given filter or was not present at the start of compare_duration, but was present at read_time. * "REMOVED": indicates that the finding was present and matched the filter at the start of compare_duration, but did not match the filter at read_time. If compare_duration is not specified, then the only possible state_change is "UNUSED", which will be the state_change set for all findings present at read_time.
     * @param {string} apiParams.fieldMask - A field mask to specify the Finding fields to be listed in the response. An empty field mask will list all fields.
     * @param {string} apiParams.filter - Expression that defines the filter to apply across findings. The expression is a list of one or more restrictions combined via logical operators `AND` and `OR`. Parentheses are supported, and `OR` has higher precedence than `AND`. Restrictions have the form ` ` and may have a `-` character in front of them to indicate negation. Examples include: * name * source_properties.a_property * security_marks.marks.marka The supported operators are: * `=` for all value types. * `>`, `<`, `>=`, `<=` for integer values. * `:`, meaning substring matching, for strings. The supported value types are: * string literals in quotes. * integer literals without quotes. * boolean literals `true` and `false` without quotes. The following field and operator combinations are supported: * name: `=` * parent: `=`, `:` * resource_name: `=`, `:` * state: `=`, `:` * category: `=`, `:` * external_uri: `=`, `:` * event_time: `=`, `>`, `<`, `>=`, `<=` Usage: This should be milliseconds since epoch or an RFC3339 string. Examples: `event_time = "2019-06-10T16:07:18-07:00"` `event_time = 1560208038000` * severity: `=`, `:` * workflow_state: `=`, `:` * security_marks.marks: `=`, `:` * source_properties: `=`, `:`, `>`, `<`, `>=`, `<=` For example, `source_properties.size = 100` is a valid filter string. Use a partial match on the empty string to filter based on a property existing: `source_properties.my_property : ""` Use a negated partial match on the empty string to filter based on a property not existing: `-source_properties.my_property : ""` * resource: * resource.name: `=`, `:` * resource.parent_name: `=`, `:` * resource.parent_display_name: `=`, `:` * resource.project_name: `=`, `:` * resource.project_display_name: `=`, `:` * resource.type: `=`, `:` * resource.folders.resource_folder: `=`, `:` * resource.display_name: `=`, `:`
     * @param {string} apiParams.orderBy - Expression that defines what fields and order to use for sorting. The string value should follow SQL syntax: comma separated list of fields. For example: "name,resource_properties.a_property". The default sorting order is ascending. To specify descending order for a field, a suffix " desc" should be appended to the field name. For example: "name desc,source_properties.a_property". Redundant space characters in the syntax are insignificant. "name desc,source_properties.a_property" and " name desc , source_properties.a_property " are equivalent. The following fields are supported: name parent state category resource_name event_time source_properties security_marks.marks
     * @param {integer} apiParams.pageSize - The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000.
     * @param {string} apiParams.pageToken - The value returned by the last `ListFindingsResponse`; indicates that this is a continuation of a prior `ListFindings` call, and that the system should return the next page of data.
     * @param {string} apiParams.parent - (Required) Required. Name of the source the findings belong to. Its format is `organizations/[organization_id]/sources/[source_id]`, `folders/[folder_id]/sources/[source_id]`, or `projects/[project_id]/sources/[source_id]`. To list across all sources provide a source_id of `-`. For example: `organizations/{organization_id}/sources/-`, `folders/{folder_id}/sources/-` or `projects/{projects_id}/sources/-`
     * @param {string} apiParams.readTime - Time used as a reference point when filtering findings. The filter is limited to findings existing at the supplied time and their values are those at that specific time. Absence of this field will default to the API's version of NOW.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.sources.findings.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/findings', 'GET', apiParams, clientConfig);

    /**
     * Updates the state of a finding.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The [relative resource name](https://cloud.google.com/apis/design/resource_names#relative_resource_name) of the finding. Example: `organizations/{organization_id}/sources/{source_id}/findings/{finding_id}`, `folders/{folder_id}/sources/{source_id}/findings/{finding_id}`, `projects/{project_id}/sources/{source_id}/findings/{finding_id}`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.sources.findings.setState = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:setState', 'POST', apiParams, clientConfig);

    /**
     * Updates the mute state of a finding.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The [relative resource name](https://cloud.google.com/apis/design/resource_names#relative_resource_name) of the finding. Example: `organizations/{organization_id}/sources/{source_id}/findings/{finding_id}`, `folders/{folder_id}/sources/{source_id}/findings/{finding_id}`, `projects/{project_id}/sources/{source_id}/findings/{finding_id}`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.sources.findings.setMute = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:setMute', 'POST', apiParams, clientConfig);

    /**
     * Creates or updates a finding. The corresponding source must exist for a finding creation to succeed.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The [relative resource name](https://cloud.google.com/apis/design/resource_names#relative_resource_name) of the finding. Example: "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}", "folders/{folder_id}/sources/{source_id}/findings/{finding_id}", "projects/{project_id}/sources/{source_id}/findings/{finding_id}".
     * @param {string} apiParams.updateMask - The FieldMask to use when updating the finding resource. This field should not be specified when creating a finding. When updating a finding, an empty mask is treated as updating all mutable fields and replacing source_properties. Individual source_properties can be added/updated by using "source_properties." in the field mask.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.sources.findings.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Updates security marks.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The relative resource name of the SecurityMarks. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Examples: "organizations/{organization_id}/assets/{asset_id}/securityMarks" "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}/securityMarks".
     * @param {string} apiParams.startTime - The time at which the updated SecurityMarks take effect. If not set uses current server time. Updates will be applied to the SecurityMarks that are active immediately preceding this time. Must be earlier or equal to the server time.
     * @param {string} apiParams.updateMask - The FieldMask to use when updating the security marks resource. The field mask must not contain duplicate fields. If empty or set to "marks", all marks will be replaced. Individual marks can be updated using "marks.".
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.sources.findings.updateSecurityMarks = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    this.folders.sources.findings.externalSystems = {};

    /**
     * Updates external system. This is for a given finding.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Full resource name of the external system, for example: "organizations/1234/sources/5678/findings/123456/externalSystems/jira", "folders/1234/sources/5678/findings/123456/externalSystems/jira", "projects/1234/sources/5678/findings/123456/externalSystems/jira"
     * @param {string} apiParams.updateMask - The FieldMask to use when updating the external system resource. If empty all mutable fields will be updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.sources.findings.externalSystems.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    this.folders.eventThreatDetectionSettings = {};

    /**
     * Validates the given Event Threat Detection custom module.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. Resource name of the parent to validate the Custom Module under. Its format is: * `organizations/{organization}/eventThreatDetectionSettings`. * `folders/{folder}/eventThreatDetectionSettings`. * `projects/{project}/eventThreatDetectionSettings`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.eventThreatDetectionSettings.validateCustomModule = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}:validateCustomModule', 'POST', apiParams, clientConfig);

    this.folders.eventThreatDetectionSettings.customModules = {};

    /**
     * Creates a resident Event Threat Detection custom module at the scope of the given Resource Manager parent, and also creates inherited custom modules for all descendants of the given parent. These modules are enabled by default.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The new custom module's parent. Its format is: * `organizations/{organization}/eventThreatDetectionSettings`. * `folders/{folder}/eventThreatDetectionSettings`. * `projects/{project}/eventThreatDetectionSettings`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.eventThreatDetectionSettings.customModules.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/customModules', 'POST', apiParams, clientConfig);

    /**
     * Deletes the specified Event Threat Detection custom module and all of its descendants in the Resource Manager hierarchy. This method is only supported for resident custom modules.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the custom module to delete. Its format is: * `organizations/{organization}/eventThreatDetectionSettings/customModules/{module}`. * `folders/{folder}/eventThreatDetectionSettings/customModules/{module}`. * `projects/{project}/eventThreatDetectionSettings/customModules/{module}`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.eventThreatDetectionSettings.customModules.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Gets an Event Threat Detection custom module.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the custom module to get. Its format is: * `organizations/{organization}/eventThreatDetectionSettings/customModules/{module}`. * `folders/{folder}/eventThreatDetectionSettings/customModules/{module}`. * `projects/{project}/eventThreatDetectionSettings/customModules/{module}`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.eventThreatDetectionSettings.customModules.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists all resident Event Threat Detection custom modules under the given Resource Manager parent and its descendants.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of modules to return. The service may return fewer than this value. If unspecified, at most 10 configs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} apiParams.pageToken - A page token, received from a previous `ListDescendantEventThreatDetectionCustomModules` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListDescendantEventThreatDetectionCustomModules` must match the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. Name of the parent to list custom modules under. Its format is: * `organizations/{organization}/eventThreatDetectionSettings`. * `folders/{folder}/eventThreatDetectionSettings`. * `projects/{project}/eventThreatDetectionSettings`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.eventThreatDetectionSettings.customModules.listDescendant = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/customModules:listDescendant', 'GET', apiParams, clientConfig);

    /**
     * Lists all Event Threat Detection custom modules for the given Resource Manager parent. This includes resident modules defined at the scope of the parent along with modules inherited from ancestors.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of modules to return. The service may return fewer than this value. If unspecified, at most 10 configs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} apiParams.pageToken - A page token, received from a previous `ListEventThreatDetectionCustomModules` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListEventThreatDetectionCustomModules` must match the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. Name of the parent to list custom modules under. Its format is: * `organizations/{organization}/eventThreatDetectionSettings`. * `folders/{folder}/eventThreatDetectionSettings`. * `projects/{project}/eventThreatDetectionSettings`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.eventThreatDetectionSettings.customModules.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/customModules', 'GET', apiParams, clientConfig);

    /**
     * Updates the Event Threat Detection custom module with the given name based on the given update mask. Updating the enablement state is supported for both resident and inherited modules (though resident modules cannot have an enablement state of "inherited"). Updating the display name or configuration of a module is supported for resident modules only. The type of a module cannot be changed.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Immutable. The resource name of the Event Threat Detection custom module. Its format is: * `organizations/{organization}/eventThreatDetectionSettings/customModules/{module}`. * `folders/{folder}/eventThreatDetectionSettings/customModules/{module}`. * `projects/{project}/eventThreatDetectionSettings/customModules/{module}`.
     * @param {string} apiParams.updateMask - The list of fields to be updated. If empty all mutable fields will be updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.eventThreatDetectionSettings.customModules.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    this.folders.eventThreatDetectionSettings.effectiveCustomModules = {};

    /**
     * Gets an effective Event Threat Detection custom module at the given level.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The resource name of the effective Event Threat Detection custom module. Its format is: * `organizations/{organization}/eventThreatDetectionSettings/effectiveCustomModules/{module}`. * `folders/{folder}/eventThreatDetectionSettings/effectiveCustomModules/{module}`. * `projects/{project}/eventThreatDetectionSettings/effectiveCustomModules/{module}`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.eventThreatDetectionSettings.effectiveCustomModules.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists all effective Event Threat Detection custom modules for the given parent. This includes resident modules defined at the scope of the parent along with modules inherited from its ancestors.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of modules to return. The service may return fewer than this value. If unspecified, at most 10 configs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} apiParams.pageToken - A page token, received from a previous `ListEffectiveEventThreatDetectionCustomModules` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListEffectiveEventThreatDetectionCustomModules` must match the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. Name of the parent to list custom modules for. Its format is: * `organizations/{organization}/eventThreatDetectionSettings`. * `folders/{folder}/eventThreatDetectionSettings`. * `projects/{project}/eventThreatDetectionSettings`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.folders.eventThreatDetectionSettings.effectiveCustomModules.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/effectiveCustomModules', 'GET', apiParams, clientConfig);

    this.projects = {};

    this.projects.findings = {};

    /**
     * Kicks off an LRO to bulk mute findings for a parent based on a filter. The parent can be either an organization, folder or project. The findings matched by the filter will be muted after the LRO is done.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent, at which bulk action needs to be applied. Its format is `organizations/[organization_id]`, `folders/[folder_id]`, `projects/[project_id]`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.findings.bulkMute = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/findings:bulkMute', 'POST', apiParams, clientConfig);

    this.projects.securityHealthAnalyticsSettings = {};

    this.projects.securityHealthAnalyticsSettings.customModules = {};

    /**
     * Creates a resident SecurityHealthAnalyticsCustomModule at the scope of the given CRM parent, and also creates inherited SecurityHealthAnalyticsCustomModules for all CRM descendants of the given parent. These modules are enabled by default.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. Resource name of the new custom module's parent. Its format is `organizations/{organization}/securityHealthAnalyticsSettings`, `folders/{folder}/securityHealthAnalyticsSettings`, or `projects/{project}/securityHealthAnalyticsSettings`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.securityHealthAnalyticsSettings.customModules.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/customModules', 'POST', apiParams, clientConfig);

    /**
     * Deletes the specified SecurityHealthAnalyticsCustomModule and all of its descendants in the CRM hierarchy. This method is only supported for resident custom modules.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the custom module to delete. Its format is `organizations/{organization}/securityHealthAnalyticsSettings/customModules/{customModule}`, `folders/{folder}/securityHealthAnalyticsSettings/customModules/{customModule}`, or `projects/{project}/securityHealthAnalyticsSettings/customModules/{customModule}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.securityHealthAnalyticsSettings.customModules.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Retrieves a SecurityHealthAnalyticsCustomModule.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the custom module to get. Its format is `organizations/{organization}/securityHealthAnalyticsSettings/customModules/{customModule}`, `folders/{folder}/securityHealthAnalyticsSettings/customModules/{customModule}`, or `projects/{project}/securityHealthAnalyticsSettings/customModules/{customModule}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.securityHealthAnalyticsSettings.customModules.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Returns a list of all resident SecurityHealthAnalyticsCustomModules under the given CRM parent and all of the parent’s CRM descendants.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000.
     * @param {string} apiParams.pageToken - The value returned by the last call indicating a continuation
     * @param {string} apiParams.parent - (Required) Required. Name of parent to list descendant custom modules. Its format is `organizations/{organization}/securityHealthAnalyticsSettings`, `folders/{folder}/securityHealthAnalyticsSettings`, or `projects/{project}/securityHealthAnalyticsSettings`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.securityHealthAnalyticsSettings.customModules.listDescendant = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/customModules:listDescendant', 'GET', apiParams, clientConfig);

    /**
     * Returns a list of all SecurityHealthAnalyticsCustomModules for the given parent. This includes resident modules defined at the scope of the parent, and inherited modules, inherited from CRM ancestors.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000.
     * @param {string} apiParams.pageToken - The value returned by the last call indicating a continuation
     * @param {string} apiParams.parent - (Required) Required. Name of parent to list custom modules. Its format is `organizations/{organization}/securityHealthAnalyticsSettings`, `folders/{folder}/securityHealthAnalyticsSettings`, or `projects/{project}/securityHealthAnalyticsSettings`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.securityHealthAnalyticsSettings.customModules.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/customModules', 'GET', apiParams, clientConfig);

    /**
     * Simulates a given SecurityHealthAnalyticsCustomModule and Resource.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The relative resource name of the organization, project, or folder. For more information about relative resource names, see [Relative Resource Name](https://cloud.google.com/apis/design/resource_names#relative_resource_name) Example: `organizations/{organization_id}`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.securityHealthAnalyticsSettings.customModules.simulate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/customModules:simulate', 'POST', apiParams, clientConfig);

    /**
     * Updates the SecurityHealthAnalyticsCustomModule under the given name based on the given update mask. Updating the enablement state is supported on both resident and inherited modules (though resident modules cannot have an enablement state of "inherited"). Updating the display name and custom config of a module is supported on resident modules only.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Immutable. The resource name of the custom module. Its format is "organizations/{organization}/securityHealthAnalyticsSettings/customModules/{customModule}", or "folders/{folder}/securityHealthAnalyticsSettings/customModules/{customModule}", or "projects/{project}/securityHealthAnalyticsSettings/customModules/{customModule}" The id {customModule} is server-generated and is not user settable. It will be a numeric id containing 1-20 digits.
     * @param {string} apiParams.updateMask - The list of fields to be updated. The only fields that can be updated are `enablement_state` and `custom_config`. If empty or set to the wildcard value `*`, both `enablement_state` and `custom_config` are updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.securityHealthAnalyticsSettings.customModules.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects.securityHealthAnalyticsSettings.effectiveCustomModules = {};

    /**
     * Retrieves an EffectiveSecurityHealthAnalyticsCustomModule.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the effective custom module to get. Its format is `organizations/{organization}/securityHealthAnalyticsSettings/effectiveCustomModules/{customModule}`, `folders/{folder}/securityHealthAnalyticsSettings/effectiveCustomModules/{customModule}`, or `projects/{project}/securityHealthAnalyticsSettings/effectiveCustomModules/{customModule}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.securityHealthAnalyticsSettings.effectiveCustomModules.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Returns a list of all EffectiveSecurityHealthAnalyticsCustomModules for the given parent. This includes resident modules defined at the scope of the parent, and inherited modules, inherited from CRM ancestors.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000.
     * @param {string} apiParams.pageToken - The value returned by the last call indicating a continuation
     * @param {string} apiParams.parent - (Required) Required. Name of parent to list effective custom modules. Its format is `organizations/{organization}/securityHealthAnalyticsSettings`, `folders/{folder}/securityHealthAnalyticsSettings`, or `projects/{project}/securityHealthAnalyticsSettings`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.securityHealthAnalyticsSettings.effectiveCustomModules.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/effectiveCustomModules', 'GET', apiParams, clientConfig);

    this.projects.muteConfigs = {};

    /**
     * Creates a mute config.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.muteConfigId - Required. Unique identifier provided by the client within the parent scope. It must consist of only lowercase letters, numbers, and hyphens, must start with a letter, must end with either a letter or a number, and must be 63 characters or less.
     * @param {string} apiParams.parent - (Required) Required. Resource name of the new mute configs's parent. Its format is `organizations/[organization_id]`, `folders/[folder_id]`, or `projects/[project_id]`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.muteConfigs.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/muteConfigs', 'POST', apiParams, clientConfig);

    /**
     * Deletes an existing mute config.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the mute config to delete. Its format is `organizations/{organization}/muteConfigs/{config_id}`, `folders/{folder}/muteConfigs/{config_id}`, `projects/{project}/muteConfigs/{config_id}`, `organizations/{organization}/locations/global/muteConfigs/{config_id}`, `folders/{folder}/locations/global/muteConfigs/{config_id}`, or `projects/{project}/locations/global/muteConfigs/{config_id}`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.muteConfigs.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Gets a mute config.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the mute config to retrieve. Its format is `organizations/{organization}/muteConfigs/{config_id}`, `folders/{folder}/muteConfigs/{config_id}`, `projects/{project}/muteConfigs/{config_id}`, `organizations/{organization}/locations/global/muteConfigs/{config_id}`, `folders/{folder}/locations/global/muteConfigs/{config_id}`, or `projects/{project}/locations/global/muteConfigs/{config_id}`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.muteConfigs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists mute configs.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of configs to return. The service may return fewer than this value. If unspecified, at most 10 configs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} apiParams.pageToken - A page token, received from a previous `ListMuteConfigs` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListMuteConfigs` must match the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. The parent, which owns the collection of mute configs. Its format is `organizations/[organization_id]`, `folders/[folder_id]`, `projects/[project_id]`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.muteConfigs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/muteConfigs', 'GET', apiParams, clientConfig);

    /**
     * Updates a mute config.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) This field will be ignored if provided on config creation. Format `organizations/{organization}/muteConfigs/{mute_config}` `folders/{folder}/muteConfigs/{mute_config}` `projects/{project}/muteConfigs/{mute_config}` `organizations/{organization}/locations/global/muteConfigs/{mute_config}` `folders/{folder}/locations/global/muteConfigs/{mute_config}` `projects/{project}/locations/global/muteConfigs/{mute_config}`
     * @param {string} apiParams.updateMask - The list of fields to be updated. If empty all mutable fields will be updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.muteConfigs.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects.notificationConfigs = {};

    /**
     * Creates a notification config.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.configId - Required. Unique identifier provided by the client within the parent scope. It must be between 1 and 128 characters and contain alphanumeric characters, underscores, or hyphens only.
     * @param {string} apiParams.parent - (Required) Required. Resource name of the new notification config's parent. Its format is `organizations/[organization_id]`, `folders/[folder_id]`, or `projects/[project_id]`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.notificationConfigs.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/notificationConfigs', 'POST', apiParams, clientConfig);

    /**
     * Deletes a notification config.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the notification config to delete. Its format is `organizations/[organization_id]/notificationConfigs/[config_id]`, `folders/[folder_id]/notificationConfigs/[config_id]`, or `projects/[project_id]/notificationConfigs/[config_id]`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.notificationConfigs.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Gets a notification config.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the notification config to get. Its format is `organizations/[organization_id]/notificationConfigs/[config_id]`, `folders/[folder_id]/notificationConfigs/[config_id]`, or `projects/[project_id]/notificationConfigs/[config_id]`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.notificationConfigs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists notification configs.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000.
     * @param {string} apiParams.pageToken - The value returned by the last `ListNotificationConfigsResponse`; indicates that this is a continuation of a prior `ListNotificationConfigs` call, and that the system should return the next page of data.
     * @param {string} apiParams.parent - (Required) Required. The name of the parent in which to list the notification configurations. Its format is "organizations/[organization_id]", "folders/[folder_id]", or "projects/[project_id]".
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.notificationConfigs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/notificationConfigs', 'GET', apiParams, clientConfig);

    /**
     * Updates a notification config. The following update fields are allowed: description, pubsub_topic, streaming_config.filter
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The relative resource name of this notification config. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Example: "organizations/{organization_id}/notificationConfigs/notify_public_bucket", "folders/{folder_id}/notificationConfigs/notify_public_bucket", or "projects/{project_id}/notificationConfigs/notify_public_bucket".
     * @param {string} apiParams.updateMask - The FieldMask to use when updating the notification config. If empty all mutable fields will be updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.notificationConfigs.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects.locations = {};

    this.projects.locations.muteConfigs = {};

    /**
     * Deletes an existing mute config.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the mute config to delete. Its format is `organizations/{organization}/muteConfigs/{config_id}`, `folders/{folder}/muteConfigs/{config_id}`, `projects/{project}/muteConfigs/{config_id}`, `organizations/{organization}/locations/global/muteConfigs/{config_id}`, `folders/{folder}/locations/global/muteConfigs/{config_id}`, or `projects/{project}/locations/global/muteConfigs/{config_id}`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.muteConfigs.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Gets a mute config.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the mute config to retrieve. Its format is `organizations/{organization}/muteConfigs/{config_id}`, `folders/{folder}/muteConfigs/{config_id}`, `projects/{project}/muteConfigs/{config_id}`, `organizations/{organization}/locations/global/muteConfigs/{config_id}`, `folders/{folder}/locations/global/muteConfigs/{config_id}`, or `projects/{project}/locations/global/muteConfigs/{config_id}`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.muteConfigs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Updates a mute config.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) This field will be ignored if provided on config creation. Format `organizations/{organization}/muteConfigs/{mute_config}` `folders/{folder}/muteConfigs/{mute_config}` `projects/{project}/muteConfigs/{mute_config}` `organizations/{organization}/locations/global/muteConfigs/{mute_config}` `folders/{folder}/locations/global/muteConfigs/{mute_config}` `projects/{project}/locations/global/muteConfigs/{mute_config}`
     * @param {string} apiParams.updateMask - The list of fields to be updated. If empty all mutable fields will be updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.muteConfigs.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects.bigQueryExports = {};

    /**
     * Gets a BigQuery export.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the BigQuery export to retrieve. Its format is `organizations/{organization}/bigQueryExports/{export_id}`, `folders/{folder}/bigQueryExports/{export_id}`, or `projects/{project}/bigQueryExports/{export_id}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.bigQueryExports.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Creates a BigQuery export.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.bigQueryExportId - Required. Unique identifier provided by the client within the parent scope. It must consist of only lowercase letters, numbers, and hyphens, must start with a letter, must end with either a letter or a number, and must be 63 characters or less.
     * @param {string} apiParams.parent - (Required) Required. The name of the parent resource of the new BigQuery export. Its format is `organizations/[organization_id]`, `folders/[folder_id]`, or `projects/[project_id]`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.bigQueryExports.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/bigQueryExports', 'POST', apiParams, clientConfig);

    /**
     * Deletes an existing BigQuery export.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the BigQuery export to delete. Its format is `organizations/{organization}/bigQueryExports/{export_id}`, `folders/{folder}/bigQueryExports/{export_id}`, or `projects/{project}/bigQueryExports/{export_id}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.bigQueryExports.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Updates a BigQuery export.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The relative resource name of this export. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name. Example format: "organizations/{organization_id}/bigQueryExports/{export_id}" Example format: "folders/{folder_id}/bigQueryExports/{export_id}" Example format: "projects/{project_id}/bigQueryExports/{export_id}" This field is provided in responses, and is ignored when provided in create requests.
     * @param {string} apiParams.updateMask - The list of fields to be updated. If empty all mutable fields will be updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.bigQueryExports.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Lists BigQuery exports. Note that when requesting BigQuery exports at a given level all exports under that level are also returned e.g. if requesting BigQuery exports under a folder, then all BigQuery exports immediately under the folder plus the ones created under the projects within the folder are returned.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of configs to return. The service may return fewer than this value. If unspecified, at most 10 configs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} apiParams.pageToken - A page token, received from a previous `ListBigQueryExports` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListBigQueryExports` must match the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. The parent, which owns the collection of BigQuery exports. Its format is `organizations/[organization_id]`, `folders/[folder_id]`, `projects/[project_id]`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.bigQueryExports.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/bigQueryExports', 'GET', apiParams, clientConfig);

    this.projects.assets = {};

    /**
     * Filters an organization's assets and groups them by their specified properties.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The name of the parent to group the assets by. Its format is `organizations/[organization_id]`, `folders/[folder_id]`, or `projects/[project_id]`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.assets.group = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/assets:group', 'POST', apiParams, clientConfig);

    /**
     * Lists an organization's assets.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.compareDuration - When compare_duration is set, the ListAssetsResult's "state_change" attribute is updated to indicate whether the asset was added, removed, or remained present during the compare_duration period of time that precedes the read_time. This is the time between (read_time - compare_duration) and read_time. The state_change value is derived based on the presence of the asset at the two points in time. Intermediate state changes between the two times don't affect the result. For example, the results aren't affected if the asset is removed and re-created again. Possible "state_change" values when compare_duration is specified: * "ADDED": indicates that the asset was not present at the start of compare_duration, but present at read_time. * "REMOVED": indicates that the asset was present at the start of compare_duration, but not present at read_time. * "ACTIVE": indicates that the asset was present at both the start and the end of the time period defined by compare_duration and read_time. If compare_duration is not specified, then the only possible state_change is "UNUSED", which will be the state_change set for all assets present at read_time.
     * @param {string} apiParams.fieldMask - A field mask to specify the ListAssetsResult fields to be listed in the response. An empty field mask will list all fields.
     * @param {string} apiParams.filter - Expression that defines the filter to apply across assets. The expression is a list of zero or more restrictions combined via logical operators `AND` and `OR`. Parentheses are supported, and `OR` has higher precedence than `AND`. Restrictions have the form ` ` and may have a `-` character in front of them to indicate negation. The fields map to those defined in the Asset resource. Examples include: * name * security_center_properties.resource_name * resource_properties.a_property * security_marks.marks.marka The supported operators are: * `=` for all value types. * `>`, `<`, `>=`, `<=` for integer values. * `:`, meaning substring matching, for strings. The supported value types are: * string literals in quotes. * integer literals without quotes. * boolean literals `true` and `false` without quotes. The following are the allowed field and operator combinations: * name: `=` * update_time: `=`, `>`, `<`, `>=`, `<=` Usage: This should be milliseconds since epoch or an RFC3339 string. Examples: `update_time = "2019-06-10T16:07:18-07:00"` `update_time = 1560208038000` * create_time: `=`, `>`, `<`, `>=`, `<=` Usage: This should be milliseconds since epoch or an RFC3339 string. Examples: `create_time = "2019-06-10T16:07:18-07:00"` `create_time = 1560208038000` * iam_policy.policy_blob: `=`, `:` * resource_properties: `=`, `:`, `>`, `<`, `>=`, `<=` * security_marks.marks: `=`, `:` * security_center_properties.resource_name: `=`, `:` * security_center_properties.resource_display_name: `=`, `:` * security_center_properties.resource_type: `=`, `:` * security_center_properties.resource_parent: `=`, `:` * security_center_properties.resource_parent_display_name: `=`, `:` * security_center_properties.resource_project: `=`, `:` * security_center_properties.resource_project_display_name: `=`, `:` * security_center_properties.resource_owners: `=`, `:` For example, `resource_properties.size = 100` is a valid filter string. Use a partial match on the empty string to filter based on a property existing: `resource_properties.my_property : ""` Use a negated partial match on the empty string to filter based on a property not existing: `-resource_properties.my_property : ""`
     * @param {string} apiParams.orderBy - Expression that defines what fields and order to use for sorting. The string value should follow SQL syntax: comma separated list of fields. For example: "name,resource_properties.a_property". The default sorting order is ascending. To specify descending order for a field, a suffix " desc" should be appended to the field name. For example: "name desc,resource_properties.a_property". Redundant space characters in the syntax are insignificant. "name desc,resource_properties.a_property" and " name desc , resource_properties.a_property " are equivalent. The following fields are supported: name update_time resource_properties security_marks.marks security_center_properties.resource_name security_center_properties.resource_display_name security_center_properties.resource_parent security_center_properties.resource_parent_display_name security_center_properties.resource_project security_center_properties.resource_project_display_name security_center_properties.resource_type
     * @param {integer} apiParams.pageSize - The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000.
     * @param {string} apiParams.pageToken - The value returned by the last `ListAssetsResponse`; indicates that this is a continuation of a prior `ListAssets` call, and that the system should return the next page of data.
     * @param {string} apiParams.parent - (Required) Required. The name of the parent resource that contains the assets. The value that you can specify on parent depends on the method in which you specify parent. You can specify one of the following values: `organizations/[organization_id]`, `folders/[folder_id]`, or `projects/[project_id]`.
     * @param {string} apiParams.readTime - Time used as a reference point when filtering assets. The filter is limited to assets existing at the supplied time and their values are those at that specific time. Absence of this field will default to the API's version of NOW.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.assets.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/assets', 'GET', apiParams, clientConfig);

    /**
     * Updates security marks.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The relative resource name of the SecurityMarks. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Examples: "organizations/{organization_id}/assets/{asset_id}/securityMarks" "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}/securityMarks".
     * @param {string} apiParams.startTime - The time at which the updated SecurityMarks take effect. If not set uses current server time. Updates will be applied to the SecurityMarks that are active immediately preceding this time. Must be earlier or equal to the server time.
     * @param {string} apiParams.updateMask - The FieldMask to use when updating the security marks resource. The field mask must not contain duplicate fields. If empty or set to "marks", all marks will be replaced. Individual marks can be updated using "marks.".
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.assets.updateSecurityMarks = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects.sources = {};

    /**
     * Lists all sources belonging to an organization.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000.
     * @param {string} apiParams.pageToken - The value returned by the last `ListSourcesResponse`; indicates that this is a continuation of a prior `ListSources` call, and that the system should return the next page of data.
     * @param {string} apiParams.parent - (Required) Required. Resource name of the parent of sources to list. Its format should be `organizations/[organization_id]`, `folders/[folder_id]`, or `projects/[project_id]`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.sources.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/sources', 'GET', apiParams, clientConfig);

    this.projects.sources.findings = {};

    /**
     * Filters an organization or source's findings and groups them by their specified properties. To group across all sources provide a `-` as the source id. Example: /v1/organizations/{organization_id}/sources/-/findings, /v1/folders/{folder_id}/sources/-/findings, /v1/projects/{project_id}/sources/-/findings
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. Name of the source to groupBy. Its format is `organizations/[organization_id]/sources/[source_id]`, `folders/[folder_id]/sources/[source_id]`, or `projects/[project_id]/sources/[source_id]`. To groupBy across all sources provide a source_id of `-`. For example: `organizations/{organization_id}/sources/-, folders/{folder_id}/sources/-`, or `projects/{project_id}/sources/-`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.sources.findings.group = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/findings:group', 'POST', apiParams, clientConfig);

    /**
     * Lists an organization or source's findings. To list across all sources provide a `-` as the source id. Example: /v1/organizations/{organization_id}/sources/-/findings
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.compareDuration - When compare_duration is set, the ListFindingsResult's "state_change" attribute is updated to indicate whether the finding had its state changed, the finding's state remained unchanged, or if the finding was added in any state during the compare_duration period of time that precedes the read_time. This is the time between (read_time - compare_duration) and read_time. The state_change value is derived based on the presence and state of the finding at the two points in time. Intermediate state changes between the two times don't affect the result. For example, the results aren't affected if the finding is made inactive and then active again. Possible "state_change" values when compare_duration is specified: * "CHANGED": indicates that the finding was present and matched the given filter at the start of compare_duration, but changed its state at read_time. * "UNCHANGED": indicates that the finding was present and matched the given filter at the start of compare_duration and did not change state at read_time. * "ADDED": indicates that the finding did not match the given filter or was not present at the start of compare_duration, but was present at read_time. * "REMOVED": indicates that the finding was present and matched the filter at the start of compare_duration, but did not match the filter at read_time. If compare_duration is not specified, then the only possible state_change is "UNUSED", which will be the state_change set for all findings present at read_time.
     * @param {string} apiParams.fieldMask - A field mask to specify the Finding fields to be listed in the response. An empty field mask will list all fields.
     * @param {string} apiParams.filter - Expression that defines the filter to apply across findings. The expression is a list of one or more restrictions combined via logical operators `AND` and `OR`. Parentheses are supported, and `OR` has higher precedence than `AND`. Restrictions have the form ` ` and may have a `-` character in front of them to indicate negation. Examples include: * name * source_properties.a_property * security_marks.marks.marka The supported operators are: * `=` for all value types. * `>`, `<`, `>=`, `<=` for integer values. * `:`, meaning substring matching, for strings. The supported value types are: * string literals in quotes. * integer literals without quotes. * boolean literals `true` and `false` without quotes. The following field and operator combinations are supported: * name: `=` * parent: `=`, `:` * resource_name: `=`, `:` * state: `=`, `:` * category: `=`, `:` * external_uri: `=`, `:` * event_time: `=`, `>`, `<`, `>=`, `<=` Usage: This should be milliseconds since epoch or an RFC3339 string. Examples: `event_time = "2019-06-10T16:07:18-07:00"` `event_time = 1560208038000` * severity: `=`, `:` * workflow_state: `=`, `:` * security_marks.marks: `=`, `:` * source_properties: `=`, `:`, `>`, `<`, `>=`, `<=` For example, `source_properties.size = 100` is a valid filter string. Use a partial match on the empty string to filter based on a property existing: `source_properties.my_property : ""` Use a negated partial match on the empty string to filter based on a property not existing: `-source_properties.my_property : ""` * resource: * resource.name: `=`, `:` * resource.parent_name: `=`, `:` * resource.parent_display_name: `=`, `:` * resource.project_name: `=`, `:` * resource.project_display_name: `=`, `:` * resource.type: `=`, `:` * resource.folders.resource_folder: `=`, `:` * resource.display_name: `=`, `:`
     * @param {string} apiParams.orderBy - Expression that defines what fields and order to use for sorting. The string value should follow SQL syntax: comma separated list of fields. For example: "name,resource_properties.a_property". The default sorting order is ascending. To specify descending order for a field, a suffix " desc" should be appended to the field name. For example: "name desc,source_properties.a_property". Redundant space characters in the syntax are insignificant. "name desc,source_properties.a_property" and " name desc , source_properties.a_property " are equivalent. The following fields are supported: name parent state category resource_name event_time source_properties security_marks.marks
     * @param {integer} apiParams.pageSize - The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000.
     * @param {string} apiParams.pageToken - The value returned by the last `ListFindingsResponse`; indicates that this is a continuation of a prior `ListFindings` call, and that the system should return the next page of data.
     * @param {string} apiParams.parent - (Required) Required. Name of the source the findings belong to. Its format is `organizations/[organization_id]/sources/[source_id]`, `folders/[folder_id]/sources/[source_id]`, or `projects/[project_id]/sources/[source_id]`. To list across all sources provide a source_id of `-`. For example: `organizations/{organization_id}/sources/-`, `folders/{folder_id}/sources/-` or `projects/{projects_id}/sources/-`
     * @param {string} apiParams.readTime - Time used as a reference point when filtering findings. The filter is limited to findings existing at the supplied time and their values are those at that specific time. Absence of this field will default to the API's version of NOW.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.sources.findings.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/findings', 'GET', apiParams, clientConfig);

    /**
     * Updates the state of a finding.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The [relative resource name](https://cloud.google.com/apis/design/resource_names#relative_resource_name) of the finding. Example: `organizations/{organization_id}/sources/{source_id}/findings/{finding_id}`, `folders/{folder_id}/sources/{source_id}/findings/{finding_id}`, `projects/{project_id}/sources/{source_id}/findings/{finding_id}`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.sources.findings.setState = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:setState', 'POST', apiParams, clientConfig);

    /**
     * Updates the mute state of a finding.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The [relative resource name](https://cloud.google.com/apis/design/resource_names#relative_resource_name) of the finding. Example: `organizations/{organization_id}/sources/{source_id}/findings/{finding_id}`, `folders/{folder_id}/sources/{source_id}/findings/{finding_id}`, `projects/{project_id}/sources/{source_id}/findings/{finding_id}`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.sources.findings.setMute = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:setMute', 'POST', apiParams, clientConfig);

    /**
     * Creates or updates a finding. The corresponding source must exist for a finding creation to succeed.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The [relative resource name](https://cloud.google.com/apis/design/resource_names#relative_resource_name) of the finding. Example: "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}", "folders/{folder_id}/sources/{source_id}/findings/{finding_id}", "projects/{project_id}/sources/{source_id}/findings/{finding_id}".
     * @param {string} apiParams.updateMask - The FieldMask to use when updating the finding resource. This field should not be specified when creating a finding. When updating a finding, an empty mask is treated as updating all mutable fields and replacing source_properties. Individual source_properties can be added/updated by using "source_properties." in the field mask.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.sources.findings.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Updates security marks.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The relative resource name of the SecurityMarks. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Examples: "organizations/{organization_id}/assets/{asset_id}/securityMarks" "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}/securityMarks".
     * @param {string} apiParams.startTime - The time at which the updated SecurityMarks take effect. If not set uses current server time. Updates will be applied to the SecurityMarks that are active immediately preceding this time. Must be earlier or equal to the server time.
     * @param {string} apiParams.updateMask - The FieldMask to use when updating the security marks resource. The field mask must not contain duplicate fields. If empty or set to "marks", all marks will be replaced. Individual marks can be updated using "marks.".
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.sources.findings.updateSecurityMarks = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects.sources.findings.externalSystems = {};

    /**
     * Updates external system. This is for a given finding.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Full resource name of the external system, for example: "organizations/1234/sources/5678/findings/123456/externalSystems/jira", "folders/1234/sources/5678/findings/123456/externalSystems/jira", "projects/1234/sources/5678/findings/123456/externalSystems/jira"
     * @param {string} apiParams.updateMask - The FieldMask to use when updating the external system resource. If empty all mutable fields will be updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.sources.findings.externalSystems.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects.eventThreatDetectionSettings = {};

    /**
     * Validates the given Event Threat Detection custom module.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. Resource name of the parent to validate the Custom Module under. Its format is: * `organizations/{organization}/eventThreatDetectionSettings`. * `folders/{folder}/eventThreatDetectionSettings`. * `projects/{project}/eventThreatDetectionSettings`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.eventThreatDetectionSettings.validateCustomModule = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}:validateCustomModule', 'POST', apiParams, clientConfig);

    this.projects.eventThreatDetectionSettings.customModules = {};

    /**
     * Creates a resident Event Threat Detection custom module at the scope of the given Resource Manager parent, and also creates inherited custom modules for all descendants of the given parent. These modules are enabled by default.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The new custom module's parent. Its format is: * `organizations/{organization}/eventThreatDetectionSettings`. * `folders/{folder}/eventThreatDetectionSettings`. * `projects/{project}/eventThreatDetectionSettings`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.eventThreatDetectionSettings.customModules.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/customModules', 'POST', apiParams, clientConfig);

    /**
     * Deletes the specified Event Threat Detection custom module and all of its descendants in the Resource Manager hierarchy. This method is only supported for resident custom modules.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the custom module to delete. Its format is: * `organizations/{organization}/eventThreatDetectionSettings/customModules/{module}`. * `folders/{folder}/eventThreatDetectionSettings/customModules/{module}`. * `projects/{project}/eventThreatDetectionSettings/customModules/{module}`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.eventThreatDetectionSettings.customModules.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Gets an Event Threat Detection custom module.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the custom module to get. Its format is: * `organizations/{organization}/eventThreatDetectionSettings/customModules/{module}`. * `folders/{folder}/eventThreatDetectionSettings/customModules/{module}`. * `projects/{project}/eventThreatDetectionSettings/customModules/{module}`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.eventThreatDetectionSettings.customModules.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists all resident Event Threat Detection custom modules under the given Resource Manager parent and its descendants.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of modules to return. The service may return fewer than this value. If unspecified, at most 10 configs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} apiParams.pageToken - A page token, received from a previous `ListDescendantEventThreatDetectionCustomModules` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListDescendantEventThreatDetectionCustomModules` must match the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. Name of the parent to list custom modules under. Its format is: * `organizations/{organization}/eventThreatDetectionSettings`. * `folders/{folder}/eventThreatDetectionSettings`. * `projects/{project}/eventThreatDetectionSettings`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.eventThreatDetectionSettings.customModules.listDescendant = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/customModules:listDescendant', 'GET', apiParams, clientConfig);

    /**
     * Lists all Event Threat Detection custom modules for the given Resource Manager parent. This includes resident modules defined at the scope of the parent along with modules inherited from ancestors.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of modules to return. The service may return fewer than this value. If unspecified, at most 10 configs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} apiParams.pageToken - A page token, received from a previous `ListEventThreatDetectionCustomModules` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListEventThreatDetectionCustomModules` must match the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. Name of the parent to list custom modules under. Its format is: * `organizations/{organization}/eventThreatDetectionSettings`. * `folders/{folder}/eventThreatDetectionSettings`. * `projects/{project}/eventThreatDetectionSettings`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.eventThreatDetectionSettings.customModules.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/customModules', 'GET', apiParams, clientConfig);

    /**
     * Updates the Event Threat Detection custom module with the given name based on the given update mask. Updating the enablement state is supported for both resident and inherited modules (though resident modules cannot have an enablement state of "inherited"). Updating the display name or configuration of a module is supported for resident modules only. The type of a module cannot be changed.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Immutable. The resource name of the Event Threat Detection custom module. Its format is: * `organizations/{organization}/eventThreatDetectionSettings/customModules/{module}`. * `folders/{folder}/eventThreatDetectionSettings/customModules/{module}`. * `projects/{project}/eventThreatDetectionSettings/customModules/{module}`.
     * @param {string} apiParams.updateMask - The list of fields to be updated. If empty all mutable fields will be updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.eventThreatDetectionSettings.customModules.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects.eventThreatDetectionSettings.effectiveCustomModules = {};

    /**
     * Gets an effective Event Threat Detection custom module at the given level.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The resource name of the effective Event Threat Detection custom module. Its format is: * `organizations/{organization}/eventThreatDetectionSettings/effectiveCustomModules/{module}`. * `folders/{folder}/eventThreatDetectionSettings/effectiveCustomModules/{module}`. * `projects/{project}/eventThreatDetectionSettings/effectiveCustomModules/{module}`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.eventThreatDetectionSettings.effectiveCustomModules.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists all effective Event Threat Detection custom modules for the given parent. This includes resident modules defined at the scope of the parent along with modules inherited from its ancestors.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of modules to return. The service may return fewer than this value. If unspecified, at most 10 configs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} apiParams.pageToken - A page token, received from a previous `ListEffectiveEventThreatDetectionCustomModules` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListEffectiveEventThreatDetectionCustomModules` must match the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. Name of the parent to list custom modules for. Its format is: * `organizations/{organization}/eventThreatDetectionSettings`. * `folders/{folder}/eventThreatDetectionSettings`. * `projects/{project}/eventThreatDetectionSettings`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.eventThreatDetectionSettings.effectiveCustomModules.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/effectiveCustomModules', 'GET', apiParams, clientConfig);

    this.organizations = {};

    /**
     * Gets the settings for an organization.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the organization to get organization settings for. Its format is `organizations/[organization_id]/organizationSettings`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.getOrganizationSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Updates an organization's settings.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The relative resource name of the settings. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Example: "organizations/{organization_id}/organizationSettings".
     * @param {string} apiParams.updateMask - The FieldMask to use when updating the settings resource. If empty all mutable fields will be updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.updateOrganizationSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    this.organizations.operations = {};

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
    this.organizations.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the operation resource.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the operation resource to be deleted.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the operation resource to be cancelled.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:cancel', 'POST', apiParams, clientConfig);

    this.organizations.findings = {};

    /**
     * Kicks off an LRO to bulk mute findings for a parent based on a filter. The parent can be either an organization, folder or project. The findings matched by the filter will be muted after the LRO is done.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent, at which bulk action needs to be applied. Its format is `organizations/[organization_id]`, `folders/[folder_id]`, `projects/[project_id]`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.findings.bulkMute = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/findings:bulkMute', 'POST', apiParams, clientConfig);

    this.organizations.securityHealthAnalyticsSettings = {};

    this.organizations.securityHealthAnalyticsSettings.customModules = {};

    /**
     * Creates a resident SecurityHealthAnalyticsCustomModule at the scope of the given CRM parent, and also creates inherited SecurityHealthAnalyticsCustomModules for all CRM descendants of the given parent. These modules are enabled by default.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. Resource name of the new custom module's parent. Its format is `organizations/{organization}/securityHealthAnalyticsSettings`, `folders/{folder}/securityHealthAnalyticsSettings`, or `projects/{project}/securityHealthAnalyticsSettings`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.securityHealthAnalyticsSettings.customModules.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/customModules', 'POST', apiParams, clientConfig);

    /**
     * Deletes the specified SecurityHealthAnalyticsCustomModule and all of its descendants in the CRM hierarchy. This method is only supported for resident custom modules.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the custom module to delete. Its format is `organizations/{organization}/securityHealthAnalyticsSettings/customModules/{customModule}`, `folders/{folder}/securityHealthAnalyticsSettings/customModules/{customModule}`, or `projects/{project}/securityHealthAnalyticsSettings/customModules/{customModule}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.securityHealthAnalyticsSettings.customModules.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Retrieves a SecurityHealthAnalyticsCustomModule.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the custom module to get. Its format is `organizations/{organization}/securityHealthAnalyticsSettings/customModules/{customModule}`, `folders/{folder}/securityHealthAnalyticsSettings/customModules/{customModule}`, or `projects/{project}/securityHealthAnalyticsSettings/customModules/{customModule}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.securityHealthAnalyticsSettings.customModules.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Returns a list of all resident SecurityHealthAnalyticsCustomModules under the given CRM parent and all of the parent’s CRM descendants.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000.
     * @param {string} apiParams.pageToken - The value returned by the last call indicating a continuation
     * @param {string} apiParams.parent - (Required) Required. Name of parent to list descendant custom modules. Its format is `organizations/{organization}/securityHealthAnalyticsSettings`, `folders/{folder}/securityHealthAnalyticsSettings`, or `projects/{project}/securityHealthAnalyticsSettings`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.securityHealthAnalyticsSettings.customModules.listDescendant = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/customModules:listDescendant', 'GET', apiParams, clientConfig);

    /**
     * Returns a list of all SecurityHealthAnalyticsCustomModules for the given parent. This includes resident modules defined at the scope of the parent, and inherited modules, inherited from CRM ancestors.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000.
     * @param {string} apiParams.pageToken - The value returned by the last call indicating a continuation
     * @param {string} apiParams.parent - (Required) Required. Name of parent to list custom modules. Its format is `organizations/{organization}/securityHealthAnalyticsSettings`, `folders/{folder}/securityHealthAnalyticsSettings`, or `projects/{project}/securityHealthAnalyticsSettings`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.securityHealthAnalyticsSettings.customModules.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/customModules', 'GET', apiParams, clientConfig);

    /**
     * Simulates a given SecurityHealthAnalyticsCustomModule and Resource.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The relative resource name of the organization, project, or folder. For more information about relative resource names, see [Relative Resource Name](https://cloud.google.com/apis/design/resource_names#relative_resource_name) Example: `organizations/{organization_id}`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.securityHealthAnalyticsSettings.customModules.simulate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/customModules:simulate', 'POST', apiParams, clientConfig);

    /**
     * Updates the SecurityHealthAnalyticsCustomModule under the given name based on the given update mask. Updating the enablement state is supported on both resident and inherited modules (though resident modules cannot have an enablement state of "inherited"). Updating the display name and custom config of a module is supported on resident modules only.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Immutable. The resource name of the custom module. Its format is "organizations/{organization}/securityHealthAnalyticsSettings/customModules/{customModule}", or "folders/{folder}/securityHealthAnalyticsSettings/customModules/{customModule}", or "projects/{project}/securityHealthAnalyticsSettings/customModules/{customModule}" The id {customModule} is server-generated and is not user settable. It will be a numeric id containing 1-20 digits.
     * @param {string} apiParams.updateMask - The list of fields to be updated. The only fields that can be updated are `enablement_state` and `custom_config`. If empty or set to the wildcard value `*`, both `enablement_state` and `custom_config` are updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.securityHealthAnalyticsSettings.customModules.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    this.organizations.securityHealthAnalyticsSettings.effectiveCustomModules = {};

    /**
     * Retrieves an EffectiveSecurityHealthAnalyticsCustomModule.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the effective custom module to get. Its format is `organizations/{organization}/securityHealthAnalyticsSettings/effectiveCustomModules/{customModule}`, `folders/{folder}/securityHealthAnalyticsSettings/effectiveCustomModules/{customModule}`, or `projects/{project}/securityHealthAnalyticsSettings/effectiveCustomModules/{customModule}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.securityHealthAnalyticsSettings.effectiveCustomModules.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Returns a list of all EffectiveSecurityHealthAnalyticsCustomModules for the given parent. This includes resident modules defined at the scope of the parent, and inherited modules, inherited from CRM ancestors.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000.
     * @param {string} apiParams.pageToken - The value returned by the last call indicating a continuation
     * @param {string} apiParams.parent - (Required) Required. Name of parent to list effective custom modules. Its format is `organizations/{organization}/securityHealthAnalyticsSettings`, `folders/{folder}/securityHealthAnalyticsSettings`, or `projects/{project}/securityHealthAnalyticsSettings`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.securityHealthAnalyticsSettings.effectiveCustomModules.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/effectiveCustomModules', 'GET', apiParams, clientConfig);

    this.organizations.sources = {};

    /**
     * Creates a source.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. Resource name of the new source's parent. Its format should be `organizations/[organization_id]`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.sources.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/sources', 'POST', apiParams, clientConfig);

    /**
     * Gets the access control policy on the specified Source.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.sources.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:getIamPolicy', 'POST', apiParams, clientConfig);

    /**
     * Gets a source.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Relative resource name of the source. Its format is `organizations/[organization_id]/source/[source_id]`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.sources.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists all sources belonging to an organization.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000.
     * @param {string} apiParams.pageToken - The value returned by the last `ListSourcesResponse`; indicates that this is a continuation of a prior `ListSources` call, and that the system should return the next page of data.
     * @param {string} apiParams.parent - (Required) Required. Resource name of the parent of sources to list. Its format should be `organizations/[organization_id]`, `folders/[folder_id]`, or `projects/[project_id]`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.sources.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/sources', 'GET', apiParams, clientConfig);

    /**
     * Sets the access control policy on the specified Source.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.sources.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);

    /**
     * Returns the permissions that a caller has on the specified source.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.sources.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);

    /**
     * Updates a source.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The relative resource name of this source. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Example: "organizations/{organization_id}/sources/{source_id}"
     * @param {string} apiParams.updateMask - The FieldMask to use when updating the source resource. If empty all mutable fields will be updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.sources.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    this.organizations.sources.findings = {};

    /**
     * Creates a finding. The corresponding source must exist for finding creation to succeed.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.findingId - Required. Unique identifier provided by the client within the parent scope. It must be alphanumeric and less than or equal to 32 characters and greater than 0 characters in length.
     * @param {string} apiParams.parent - (Required) Required. Resource name of the new finding's parent. Its format should be `organizations/[organization_id]/sources/[source_id]`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.sources.findings.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/findings', 'POST', apiParams, clientConfig);

    /**
     * Filters an organization or source's findings and groups them by their specified properties. To group across all sources provide a `-` as the source id. Example: /v1/organizations/{organization_id}/sources/-/findings, /v1/folders/{folder_id}/sources/-/findings, /v1/projects/{project_id}/sources/-/findings
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. Name of the source to groupBy. Its format is `organizations/[organization_id]/sources/[source_id]`, `folders/[folder_id]/sources/[source_id]`, or `projects/[project_id]/sources/[source_id]`. To groupBy across all sources provide a source_id of `-`. For example: `organizations/{organization_id}/sources/-, folders/{folder_id}/sources/-`, or `projects/{project_id}/sources/-`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.sources.findings.group = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/findings:group', 'POST', apiParams, clientConfig);

    /**
     * Lists an organization or source's findings. To list across all sources provide a `-` as the source id. Example: /v1/organizations/{organization_id}/sources/-/findings
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.compareDuration - When compare_duration is set, the ListFindingsResult's "state_change" attribute is updated to indicate whether the finding had its state changed, the finding's state remained unchanged, or if the finding was added in any state during the compare_duration period of time that precedes the read_time. This is the time between (read_time - compare_duration) and read_time. The state_change value is derived based on the presence and state of the finding at the two points in time. Intermediate state changes between the two times don't affect the result. For example, the results aren't affected if the finding is made inactive and then active again. Possible "state_change" values when compare_duration is specified: * "CHANGED": indicates that the finding was present and matched the given filter at the start of compare_duration, but changed its state at read_time. * "UNCHANGED": indicates that the finding was present and matched the given filter at the start of compare_duration and did not change state at read_time. * "ADDED": indicates that the finding did not match the given filter or was not present at the start of compare_duration, but was present at read_time. * "REMOVED": indicates that the finding was present and matched the filter at the start of compare_duration, but did not match the filter at read_time. If compare_duration is not specified, then the only possible state_change is "UNUSED", which will be the state_change set for all findings present at read_time.
     * @param {string} apiParams.fieldMask - A field mask to specify the Finding fields to be listed in the response. An empty field mask will list all fields.
     * @param {string} apiParams.filter - Expression that defines the filter to apply across findings. The expression is a list of one or more restrictions combined via logical operators `AND` and `OR`. Parentheses are supported, and `OR` has higher precedence than `AND`. Restrictions have the form ` ` and may have a `-` character in front of them to indicate negation. Examples include: * name * source_properties.a_property * security_marks.marks.marka The supported operators are: * `=` for all value types. * `>`, `<`, `>=`, `<=` for integer values. * `:`, meaning substring matching, for strings. The supported value types are: * string literals in quotes. * integer literals without quotes. * boolean literals `true` and `false` without quotes. The following field and operator combinations are supported: * name: `=` * parent: `=`, `:` * resource_name: `=`, `:` * state: `=`, `:` * category: `=`, `:` * external_uri: `=`, `:` * event_time: `=`, `>`, `<`, `>=`, `<=` Usage: This should be milliseconds since epoch or an RFC3339 string. Examples: `event_time = "2019-06-10T16:07:18-07:00"` `event_time = 1560208038000` * severity: `=`, `:` * workflow_state: `=`, `:` * security_marks.marks: `=`, `:` * source_properties: `=`, `:`, `>`, `<`, `>=`, `<=` For example, `source_properties.size = 100` is a valid filter string. Use a partial match on the empty string to filter based on a property existing: `source_properties.my_property : ""` Use a negated partial match on the empty string to filter based on a property not existing: `-source_properties.my_property : ""` * resource: * resource.name: `=`, `:` * resource.parent_name: `=`, `:` * resource.parent_display_name: `=`, `:` * resource.project_name: `=`, `:` * resource.project_display_name: `=`, `:` * resource.type: `=`, `:` * resource.folders.resource_folder: `=`, `:` * resource.display_name: `=`, `:`
     * @param {string} apiParams.orderBy - Expression that defines what fields and order to use for sorting. The string value should follow SQL syntax: comma separated list of fields. For example: "name,resource_properties.a_property". The default sorting order is ascending. To specify descending order for a field, a suffix " desc" should be appended to the field name. For example: "name desc,source_properties.a_property". Redundant space characters in the syntax are insignificant. "name desc,source_properties.a_property" and " name desc , source_properties.a_property " are equivalent. The following fields are supported: name parent state category resource_name event_time source_properties security_marks.marks
     * @param {integer} apiParams.pageSize - The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000.
     * @param {string} apiParams.pageToken - The value returned by the last `ListFindingsResponse`; indicates that this is a continuation of a prior `ListFindings` call, and that the system should return the next page of data.
     * @param {string} apiParams.parent - (Required) Required. Name of the source the findings belong to. Its format is `organizations/[organization_id]/sources/[source_id]`, `folders/[folder_id]/sources/[source_id]`, or `projects/[project_id]/sources/[source_id]`. To list across all sources provide a source_id of `-`. For example: `organizations/{organization_id}/sources/-`, `folders/{folder_id}/sources/-` or `projects/{projects_id}/sources/-`
     * @param {string} apiParams.readTime - Time used as a reference point when filtering findings. The filter is limited to findings existing at the supplied time and their values are those at that specific time. Absence of this field will default to the API's version of NOW.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.sources.findings.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/findings', 'GET', apiParams, clientConfig);

    /**
     * Updates the state of a finding.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The [relative resource name](https://cloud.google.com/apis/design/resource_names#relative_resource_name) of the finding. Example: `organizations/{organization_id}/sources/{source_id}/findings/{finding_id}`, `folders/{folder_id}/sources/{source_id}/findings/{finding_id}`, `projects/{project_id}/sources/{source_id}/findings/{finding_id}`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.sources.findings.setState = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:setState', 'POST', apiParams, clientConfig);

    /**
     * Updates the mute state of a finding.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The [relative resource name](https://cloud.google.com/apis/design/resource_names#relative_resource_name) of the finding. Example: `organizations/{organization_id}/sources/{source_id}/findings/{finding_id}`, `folders/{folder_id}/sources/{source_id}/findings/{finding_id}`, `projects/{project_id}/sources/{source_id}/findings/{finding_id}`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.sources.findings.setMute = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:setMute', 'POST', apiParams, clientConfig);

    /**
     * Creates or updates a finding. The corresponding source must exist for a finding creation to succeed.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The [relative resource name](https://cloud.google.com/apis/design/resource_names#relative_resource_name) of the finding. Example: "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}", "folders/{folder_id}/sources/{source_id}/findings/{finding_id}", "projects/{project_id}/sources/{source_id}/findings/{finding_id}".
     * @param {string} apiParams.updateMask - The FieldMask to use when updating the finding resource. This field should not be specified when creating a finding. When updating a finding, an empty mask is treated as updating all mutable fields and replacing source_properties. Individual source_properties can be added/updated by using "source_properties." in the field mask.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.sources.findings.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Updates security marks.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The relative resource name of the SecurityMarks. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Examples: "organizations/{organization_id}/assets/{asset_id}/securityMarks" "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}/securityMarks".
     * @param {string} apiParams.startTime - The time at which the updated SecurityMarks take effect. If not set uses current server time. Updates will be applied to the SecurityMarks that are active immediately preceding this time. Must be earlier or equal to the server time.
     * @param {string} apiParams.updateMask - The FieldMask to use when updating the security marks resource. The field mask must not contain duplicate fields. If empty or set to "marks", all marks will be replaced. Individual marks can be updated using "marks.".
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.sources.findings.updateSecurityMarks = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    this.organizations.sources.findings.externalSystems = {};

    /**
     * Updates external system. This is for a given finding.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Full resource name of the external system, for example: "organizations/1234/sources/5678/findings/123456/externalSystems/jira", "folders/1234/sources/5678/findings/123456/externalSystems/jira", "projects/1234/sources/5678/findings/123456/externalSystems/jira"
     * @param {string} apiParams.updateMask - The FieldMask to use when updating the external system resource. If empty all mutable fields will be updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.sources.findings.externalSystems.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    this.organizations.muteConfigs = {};

    /**
     * Creates a mute config.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.muteConfigId - Required. Unique identifier provided by the client within the parent scope. It must consist of only lowercase letters, numbers, and hyphens, must start with a letter, must end with either a letter or a number, and must be 63 characters or less.
     * @param {string} apiParams.parent - (Required) Required. Resource name of the new mute configs's parent. Its format is `organizations/[organization_id]`, `folders/[folder_id]`, or `projects/[project_id]`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.muteConfigs.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/muteConfigs', 'POST', apiParams, clientConfig);

    /**
     * Deletes an existing mute config.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the mute config to delete. Its format is `organizations/{organization}/muteConfigs/{config_id}`, `folders/{folder}/muteConfigs/{config_id}`, `projects/{project}/muteConfigs/{config_id}`, `organizations/{organization}/locations/global/muteConfigs/{config_id}`, `folders/{folder}/locations/global/muteConfigs/{config_id}`, or `projects/{project}/locations/global/muteConfigs/{config_id}`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.muteConfigs.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Gets a mute config.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the mute config to retrieve. Its format is `organizations/{organization}/muteConfigs/{config_id}`, `folders/{folder}/muteConfigs/{config_id}`, `projects/{project}/muteConfigs/{config_id}`, `organizations/{organization}/locations/global/muteConfigs/{config_id}`, `folders/{folder}/locations/global/muteConfigs/{config_id}`, or `projects/{project}/locations/global/muteConfigs/{config_id}`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.muteConfigs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists mute configs.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of configs to return. The service may return fewer than this value. If unspecified, at most 10 configs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} apiParams.pageToken - A page token, received from a previous `ListMuteConfigs` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListMuteConfigs` must match the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. The parent, which owns the collection of mute configs. Its format is `organizations/[organization_id]`, `folders/[folder_id]`, `projects/[project_id]`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.muteConfigs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/muteConfigs', 'GET', apiParams, clientConfig);

    /**
     * Updates a mute config.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) This field will be ignored if provided on config creation. Format `organizations/{organization}/muteConfigs/{mute_config}` `folders/{folder}/muteConfigs/{mute_config}` `projects/{project}/muteConfigs/{mute_config}` `organizations/{organization}/locations/global/muteConfigs/{mute_config}` `folders/{folder}/locations/global/muteConfigs/{mute_config}` `projects/{project}/locations/global/muteConfigs/{mute_config}`
     * @param {string} apiParams.updateMask - The list of fields to be updated. If empty all mutable fields will be updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.muteConfigs.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    this.organizations.notificationConfigs = {};

    /**
     * Creates a notification config.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.configId - Required. Unique identifier provided by the client within the parent scope. It must be between 1 and 128 characters and contain alphanumeric characters, underscores, or hyphens only.
     * @param {string} apiParams.parent - (Required) Required. Resource name of the new notification config's parent. Its format is `organizations/[organization_id]`, `folders/[folder_id]`, or `projects/[project_id]`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.notificationConfigs.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/notificationConfigs', 'POST', apiParams, clientConfig);

    /**
     * Deletes a notification config.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the notification config to delete. Its format is `organizations/[organization_id]/notificationConfigs/[config_id]`, `folders/[folder_id]/notificationConfigs/[config_id]`, or `projects/[project_id]/notificationConfigs/[config_id]`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.notificationConfigs.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Gets a notification config.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the notification config to get. Its format is `organizations/[organization_id]/notificationConfigs/[config_id]`, `folders/[folder_id]/notificationConfigs/[config_id]`, or `projects/[project_id]/notificationConfigs/[config_id]`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.notificationConfigs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists notification configs.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000.
     * @param {string} apiParams.pageToken - The value returned by the last `ListNotificationConfigsResponse`; indicates that this is a continuation of a prior `ListNotificationConfigs` call, and that the system should return the next page of data.
     * @param {string} apiParams.parent - (Required) Required. The name of the parent in which to list the notification configurations. Its format is "organizations/[organization_id]", "folders/[folder_id]", or "projects/[project_id]".
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.notificationConfigs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/notificationConfigs', 'GET', apiParams, clientConfig);

    /**
     * Updates a notification config. The following update fields are allowed: description, pubsub_topic, streaming_config.filter
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The relative resource name of this notification config. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Example: "organizations/{organization_id}/notificationConfigs/notify_public_bucket", "folders/{folder_id}/notificationConfigs/notify_public_bucket", or "projects/{project_id}/notificationConfigs/notify_public_bucket".
     * @param {string} apiParams.updateMask - The FieldMask to use when updating the notification config. If empty all mutable fields will be updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.notificationConfigs.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    this.organizations.locations = {};

    this.organizations.locations.muteConfigs = {};

    /**
     * Deletes an existing mute config.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the mute config to delete. Its format is `organizations/{organization}/muteConfigs/{config_id}`, `folders/{folder}/muteConfigs/{config_id}`, `projects/{project}/muteConfigs/{config_id}`, `organizations/{organization}/locations/global/muteConfigs/{config_id}`, `folders/{folder}/locations/global/muteConfigs/{config_id}`, or `projects/{project}/locations/global/muteConfigs/{config_id}`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.locations.muteConfigs.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Gets a mute config.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the mute config to retrieve. Its format is `organizations/{organization}/muteConfigs/{config_id}`, `folders/{folder}/muteConfigs/{config_id}`, `projects/{project}/muteConfigs/{config_id}`, `organizations/{organization}/locations/global/muteConfigs/{config_id}`, `folders/{folder}/locations/global/muteConfigs/{config_id}`, or `projects/{project}/locations/global/muteConfigs/{config_id}`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.locations.muteConfigs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Updates a mute config.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) This field will be ignored if provided on config creation. Format `organizations/{organization}/muteConfigs/{mute_config}` `folders/{folder}/muteConfigs/{mute_config}` `projects/{project}/muteConfigs/{mute_config}` `organizations/{organization}/locations/global/muteConfigs/{mute_config}` `folders/{folder}/locations/global/muteConfigs/{mute_config}` `projects/{project}/locations/global/muteConfigs/{mute_config}`
     * @param {string} apiParams.updateMask - The list of fields to be updated. If empty all mutable fields will be updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.locations.muteConfigs.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    this.organizations.simulations = {};

    /**
     * Get the simulation by name or the latest simulation for the given organization.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The organization name or simulation name of this simulation Valid format: `organizations/{organization}/simulations/latest` `organizations/{organization}/simulations/{simulation}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.simulations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.organizations.simulations.valuedResources = {};

    /**
     * Get the valued resource by name
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of this valued resource Valid format: `organizations/{organization}/simulations/{simulation}/valuedResources/{valued_resource}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.simulations.valuedResources.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists the valued resources for a set of simulation results and filter.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - The filter expression that filters the valued resources in the response. Supported fields: * `resource_value` supports = * `resource_type` supports =
     * @param {string} apiParams.orderBy - Optional. The fields by which to order the valued resources response. Supported fields: * `exposed_score` * `resource_value` * `resource_type` * `resource` * `display_name` Values should be a comma separated list of fields. For example: `exposed_score,resource_value`. The default sorting order is descending. To specify ascending or descending order for a field, append a ` ASC` or a ` DESC` suffix, respectively; for example: `exposed_score DESC`.
     * @param {integer} apiParams.pageSize - The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000.
     * @param {string} apiParams.pageToken - The value returned by the last `ListValuedResourcesResponse`; indicates that this is a continuation of a prior `ListValuedResources` call, and that the system should return the next page of data.
     * @param {string} apiParams.parent - (Required) Required. Name of parent to list valued resources. Valid formats: `organizations/{organization}`, `organizations/{organization}/simulations/{simulation}` `organizations/{organization}/simulations/{simulation}/attackExposureResults/{attack_exposure_result_v2}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.simulations.valuedResources.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/valuedResources', 'GET', apiParams, clientConfig);

    this.organizations.simulations.valuedResources.attackPaths = {};

    /**
     * Lists the attack paths for a set of simulation results or valued resources and filter.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - The filter expression that filters the attack path in the response. Supported fields: * `valued_resources` supports =
     * @param {integer} apiParams.pageSize - The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000.
     * @param {string} apiParams.pageToken - The value returned by the last `ListAttackPathsResponse`; indicates that this is a continuation of a prior `ListAttackPaths` call, and that the system should return the next page of data.
     * @param {string} apiParams.parent - (Required) Required. Name of parent to list attack paths. Valid formats: `organizations/{organization}`, `organizations/{organization}/simulations/{simulation}` `organizations/{organization}/simulations/{simulation}/attackExposureResults/{attack_exposure_result_v2}` `organizations/{organization}/simulations/{simulation}/valuedResources/{valued_resource}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.simulations.valuedResources.attackPaths.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/attackPaths', 'GET', apiParams, clientConfig);

    this.organizations.simulations.attackExposureResults = {};

    this.organizations.simulations.attackExposureResults.valuedResources = {};

    /**
     * Lists the valued resources for a set of simulation results and filter.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - The filter expression that filters the valued resources in the response. Supported fields: * `resource_value` supports = * `resource_type` supports =
     * @param {string} apiParams.orderBy - Optional. The fields by which to order the valued resources response. Supported fields: * `exposed_score` * `resource_value` * `resource_type` * `resource` * `display_name` Values should be a comma separated list of fields. For example: `exposed_score,resource_value`. The default sorting order is descending. To specify ascending or descending order for a field, append a ` ASC` or a ` DESC` suffix, respectively; for example: `exposed_score DESC`.
     * @param {integer} apiParams.pageSize - The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000.
     * @param {string} apiParams.pageToken - The value returned by the last `ListValuedResourcesResponse`; indicates that this is a continuation of a prior `ListValuedResources` call, and that the system should return the next page of data.
     * @param {string} apiParams.parent - (Required) Required. Name of parent to list valued resources. Valid formats: `organizations/{organization}`, `organizations/{organization}/simulations/{simulation}` `organizations/{organization}/simulations/{simulation}/attackExposureResults/{attack_exposure_result_v2}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.simulations.attackExposureResults.valuedResources.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/valuedResources', 'GET', apiParams, clientConfig);

    this.organizations.simulations.attackExposureResults.attackPaths = {};

    /**
     * Lists the attack paths for a set of simulation results or valued resources and filter.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - The filter expression that filters the attack path in the response. Supported fields: * `valued_resources` supports =
     * @param {integer} apiParams.pageSize - The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000.
     * @param {string} apiParams.pageToken - The value returned by the last `ListAttackPathsResponse`; indicates that this is a continuation of a prior `ListAttackPaths` call, and that the system should return the next page of data.
     * @param {string} apiParams.parent - (Required) Required. Name of parent to list attack paths. Valid formats: `organizations/{organization}`, `organizations/{organization}/simulations/{simulation}` `organizations/{organization}/simulations/{simulation}/attackExposureResults/{attack_exposure_result_v2}` `organizations/{organization}/simulations/{simulation}/valuedResources/{valued_resource}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.simulations.attackExposureResults.attackPaths.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/attackPaths', 'GET', apiParams, clientConfig);

    this.organizations.simulations.attackPaths = {};

    /**
     * Lists the attack paths for a set of simulation results or valued resources and filter.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - The filter expression that filters the attack path in the response. Supported fields: * `valued_resources` supports =
     * @param {integer} apiParams.pageSize - The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000.
     * @param {string} apiParams.pageToken - The value returned by the last `ListAttackPathsResponse`; indicates that this is a continuation of a prior `ListAttackPaths` call, and that the system should return the next page of data.
     * @param {string} apiParams.parent - (Required) Required. Name of parent to list attack paths. Valid formats: `organizations/{organization}`, `organizations/{organization}/simulations/{simulation}` `organizations/{organization}/simulations/{simulation}/attackExposureResults/{attack_exposure_result_v2}` `organizations/{organization}/simulations/{simulation}/valuedResources/{valued_resource}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.simulations.attackPaths.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/attackPaths', 'GET', apiParams, clientConfig);

    this.organizations.bigQueryExports = {};

    /**
     * Gets a BigQuery export.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the BigQuery export to retrieve. Its format is `organizations/{organization}/bigQueryExports/{export_id}`, `folders/{folder}/bigQueryExports/{export_id}`, or `projects/{project}/bigQueryExports/{export_id}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.bigQueryExports.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Creates a BigQuery export.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.bigQueryExportId - Required. Unique identifier provided by the client within the parent scope. It must consist of only lowercase letters, numbers, and hyphens, must start with a letter, must end with either a letter or a number, and must be 63 characters or less.
     * @param {string} apiParams.parent - (Required) Required. The name of the parent resource of the new BigQuery export. Its format is `organizations/[organization_id]`, `folders/[folder_id]`, or `projects/[project_id]`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.bigQueryExports.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/bigQueryExports', 'POST', apiParams, clientConfig);

    /**
     * Deletes an existing BigQuery export.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the BigQuery export to delete. Its format is `organizations/{organization}/bigQueryExports/{export_id}`, `folders/{folder}/bigQueryExports/{export_id}`, or `projects/{project}/bigQueryExports/{export_id}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.bigQueryExports.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Updates a BigQuery export.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The relative resource name of this export. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name. Example format: "organizations/{organization_id}/bigQueryExports/{export_id}" Example format: "folders/{folder_id}/bigQueryExports/{export_id}" Example format: "projects/{project_id}/bigQueryExports/{export_id}" This field is provided in responses, and is ignored when provided in create requests.
     * @param {string} apiParams.updateMask - The list of fields to be updated. If empty all mutable fields will be updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.bigQueryExports.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Lists BigQuery exports. Note that when requesting BigQuery exports at a given level all exports under that level are also returned e.g. if requesting BigQuery exports under a folder, then all BigQuery exports immediately under the folder plus the ones created under the projects within the folder are returned.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of configs to return. The service may return fewer than this value. If unspecified, at most 10 configs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} apiParams.pageToken - A page token, received from a previous `ListBigQueryExports` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListBigQueryExports` must match the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. The parent, which owns the collection of BigQuery exports. Its format is `organizations/[organization_id]`, `folders/[folder_id]`, `projects/[project_id]`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.bigQueryExports.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/bigQueryExports', 'GET', apiParams, clientConfig);

    this.organizations.assets = {};

    /**
     * Filters an organization's assets and groups them by their specified properties.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The name of the parent to group the assets by. Its format is `organizations/[organization_id]`, `folders/[folder_id]`, or `projects/[project_id]`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.assets.group = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/assets:group', 'POST', apiParams, clientConfig);

    /**
     * Lists an organization's assets.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.compareDuration - When compare_duration is set, the ListAssetsResult's "state_change" attribute is updated to indicate whether the asset was added, removed, or remained present during the compare_duration period of time that precedes the read_time. This is the time between (read_time - compare_duration) and read_time. The state_change value is derived based on the presence of the asset at the two points in time. Intermediate state changes between the two times don't affect the result. For example, the results aren't affected if the asset is removed and re-created again. Possible "state_change" values when compare_duration is specified: * "ADDED": indicates that the asset was not present at the start of compare_duration, but present at read_time. * "REMOVED": indicates that the asset was present at the start of compare_duration, but not present at read_time. * "ACTIVE": indicates that the asset was present at both the start and the end of the time period defined by compare_duration and read_time. If compare_duration is not specified, then the only possible state_change is "UNUSED", which will be the state_change set for all assets present at read_time.
     * @param {string} apiParams.fieldMask - A field mask to specify the ListAssetsResult fields to be listed in the response. An empty field mask will list all fields.
     * @param {string} apiParams.filter - Expression that defines the filter to apply across assets. The expression is a list of zero or more restrictions combined via logical operators `AND` and `OR`. Parentheses are supported, and `OR` has higher precedence than `AND`. Restrictions have the form ` ` and may have a `-` character in front of them to indicate negation. The fields map to those defined in the Asset resource. Examples include: * name * security_center_properties.resource_name * resource_properties.a_property * security_marks.marks.marka The supported operators are: * `=` for all value types. * `>`, `<`, `>=`, `<=` for integer values. * `:`, meaning substring matching, for strings. The supported value types are: * string literals in quotes. * integer literals without quotes. * boolean literals `true` and `false` without quotes. The following are the allowed field and operator combinations: * name: `=` * update_time: `=`, `>`, `<`, `>=`, `<=` Usage: This should be milliseconds since epoch or an RFC3339 string. Examples: `update_time = "2019-06-10T16:07:18-07:00"` `update_time = 1560208038000` * create_time: `=`, `>`, `<`, `>=`, `<=` Usage: This should be milliseconds since epoch or an RFC3339 string. Examples: `create_time = "2019-06-10T16:07:18-07:00"` `create_time = 1560208038000` * iam_policy.policy_blob: `=`, `:` * resource_properties: `=`, `:`, `>`, `<`, `>=`, `<=` * security_marks.marks: `=`, `:` * security_center_properties.resource_name: `=`, `:` * security_center_properties.resource_display_name: `=`, `:` * security_center_properties.resource_type: `=`, `:` * security_center_properties.resource_parent: `=`, `:` * security_center_properties.resource_parent_display_name: `=`, `:` * security_center_properties.resource_project: `=`, `:` * security_center_properties.resource_project_display_name: `=`, `:` * security_center_properties.resource_owners: `=`, `:` For example, `resource_properties.size = 100` is a valid filter string. Use a partial match on the empty string to filter based on a property existing: `resource_properties.my_property : ""` Use a negated partial match on the empty string to filter based on a property not existing: `-resource_properties.my_property : ""`
     * @param {string} apiParams.orderBy - Expression that defines what fields and order to use for sorting. The string value should follow SQL syntax: comma separated list of fields. For example: "name,resource_properties.a_property". The default sorting order is ascending. To specify descending order for a field, a suffix " desc" should be appended to the field name. For example: "name desc,resource_properties.a_property". Redundant space characters in the syntax are insignificant. "name desc,resource_properties.a_property" and " name desc , resource_properties.a_property " are equivalent. The following fields are supported: name update_time resource_properties security_marks.marks security_center_properties.resource_name security_center_properties.resource_display_name security_center_properties.resource_parent security_center_properties.resource_parent_display_name security_center_properties.resource_project security_center_properties.resource_project_display_name security_center_properties.resource_type
     * @param {integer} apiParams.pageSize - The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000.
     * @param {string} apiParams.pageToken - The value returned by the last `ListAssetsResponse`; indicates that this is a continuation of a prior `ListAssets` call, and that the system should return the next page of data.
     * @param {string} apiParams.parent - (Required) Required. The name of the parent resource that contains the assets. The value that you can specify on parent depends on the method in which you specify parent. You can specify one of the following values: `organizations/[organization_id]`, `folders/[folder_id]`, or `projects/[project_id]`.
     * @param {string} apiParams.readTime - Time used as a reference point when filtering assets. The filter is limited to assets existing at the supplied time and their values are those at that specific time. Absence of this field will default to the API's version of NOW.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.assets.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/assets', 'GET', apiParams, clientConfig);

    /**
     * Runs asset discovery. The discovery is tracked with a long-running operation. This API can only be called with limited frequency for an organization. If it is called too frequently the caller will receive a TOO_MANY_REQUESTS error.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. Name of the organization to run asset discovery for. Its format is `organizations/[organization_id]`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.assets.runDiscovery = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/assets:runDiscovery', 'POST', apiParams, clientConfig);

    /**
     * Updates security marks.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The relative resource name of the SecurityMarks. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Examples: "organizations/{organization_id}/assets/{asset_id}/securityMarks" "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}/securityMarks".
     * @param {string} apiParams.startTime - The time at which the updated SecurityMarks take effect. If not set uses current server time. Updates will be applied to the SecurityMarks that are active immediately preceding this time. Must be earlier or equal to the server time.
     * @param {string} apiParams.updateMask - The FieldMask to use when updating the security marks resource. The field mask must not contain duplicate fields. If empty or set to "marks", all marks will be replaced. Individual marks can be updated using "marks.".
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.assets.updateSecurityMarks = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    this.organizations.eventThreatDetectionSettings = {};

    /**
     * Validates the given Event Threat Detection custom module.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. Resource name of the parent to validate the Custom Module under. Its format is: * `organizations/{organization}/eventThreatDetectionSettings`. * `folders/{folder}/eventThreatDetectionSettings`. * `projects/{project}/eventThreatDetectionSettings`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.eventThreatDetectionSettings.validateCustomModule = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}:validateCustomModule', 'POST', apiParams, clientConfig);

    this.organizations.eventThreatDetectionSettings.customModules = {};

    /**
     * Creates a resident Event Threat Detection custom module at the scope of the given Resource Manager parent, and also creates inherited custom modules for all descendants of the given parent. These modules are enabled by default.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The new custom module's parent. Its format is: * `organizations/{organization}/eventThreatDetectionSettings`. * `folders/{folder}/eventThreatDetectionSettings`. * `projects/{project}/eventThreatDetectionSettings`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.eventThreatDetectionSettings.customModules.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/customModules', 'POST', apiParams, clientConfig);

    /**
     * Deletes the specified Event Threat Detection custom module and all of its descendants in the Resource Manager hierarchy. This method is only supported for resident custom modules.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the custom module to delete. Its format is: * `organizations/{organization}/eventThreatDetectionSettings/customModules/{module}`. * `folders/{folder}/eventThreatDetectionSettings/customModules/{module}`. * `projects/{project}/eventThreatDetectionSettings/customModules/{module}`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.eventThreatDetectionSettings.customModules.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Gets an Event Threat Detection custom module.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the custom module to get. Its format is: * `organizations/{organization}/eventThreatDetectionSettings/customModules/{module}`. * `folders/{folder}/eventThreatDetectionSettings/customModules/{module}`. * `projects/{project}/eventThreatDetectionSettings/customModules/{module}`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.eventThreatDetectionSettings.customModules.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists all resident Event Threat Detection custom modules under the given Resource Manager parent and its descendants.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of modules to return. The service may return fewer than this value. If unspecified, at most 10 configs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} apiParams.pageToken - A page token, received from a previous `ListDescendantEventThreatDetectionCustomModules` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListDescendantEventThreatDetectionCustomModules` must match the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. Name of the parent to list custom modules under. Its format is: * `organizations/{organization}/eventThreatDetectionSettings`. * `folders/{folder}/eventThreatDetectionSettings`. * `projects/{project}/eventThreatDetectionSettings`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.eventThreatDetectionSettings.customModules.listDescendant = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/customModules:listDescendant', 'GET', apiParams, clientConfig);

    /**
     * Lists all Event Threat Detection custom modules for the given Resource Manager parent. This includes resident modules defined at the scope of the parent along with modules inherited from ancestors.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of modules to return. The service may return fewer than this value. If unspecified, at most 10 configs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} apiParams.pageToken - A page token, received from a previous `ListEventThreatDetectionCustomModules` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListEventThreatDetectionCustomModules` must match the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. Name of the parent to list custom modules under. Its format is: * `organizations/{organization}/eventThreatDetectionSettings`. * `folders/{folder}/eventThreatDetectionSettings`. * `projects/{project}/eventThreatDetectionSettings`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.eventThreatDetectionSettings.customModules.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/customModules', 'GET', apiParams, clientConfig);

    /**
     * Updates the Event Threat Detection custom module with the given name based on the given update mask. Updating the enablement state is supported for both resident and inherited modules (though resident modules cannot have an enablement state of "inherited"). Updating the display name or configuration of a module is supported for resident modules only. The type of a module cannot be changed.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Immutable. The resource name of the Event Threat Detection custom module. Its format is: * `organizations/{organization}/eventThreatDetectionSettings/customModules/{module}`. * `folders/{folder}/eventThreatDetectionSettings/customModules/{module}`. * `projects/{project}/eventThreatDetectionSettings/customModules/{module}`.
     * @param {string} apiParams.updateMask - The list of fields to be updated. If empty all mutable fields will be updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.eventThreatDetectionSettings.customModules.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    this.organizations.eventThreatDetectionSettings.effectiveCustomModules = {};

    /**
     * Gets an effective Event Threat Detection custom module at the given level.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The resource name of the effective Event Threat Detection custom module. Its format is: * `organizations/{organization}/eventThreatDetectionSettings/effectiveCustomModules/{module}`. * `folders/{folder}/eventThreatDetectionSettings/effectiveCustomModules/{module}`. * `projects/{project}/eventThreatDetectionSettings/effectiveCustomModules/{module}`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.eventThreatDetectionSettings.effectiveCustomModules.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists all effective Event Threat Detection custom modules for the given parent. This includes resident modules defined at the scope of the parent along with modules inherited from its ancestors.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of modules to return. The service may return fewer than this value. If unspecified, at most 10 configs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} apiParams.pageToken - A page token, received from a previous `ListEffectiveEventThreatDetectionCustomModules` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListEffectiveEventThreatDetectionCustomModules` must match the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. Name of the parent to list custom modules for. Its format is: * `organizations/{organization}/eventThreatDetectionSettings`. * `folders/{folder}/eventThreatDetectionSettings`. * `projects/{project}/eventThreatDetectionSettings`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.eventThreatDetectionSettings.effectiveCustomModules.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/effectiveCustomModules', 'GET', apiParams, clientConfig);

    this.organizations.resourceValueConfigs = {};

    /**
     * Creates a ResourceValueConfig for an organization. Maps user's tags to difference resource values for use by the attack path simulation.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. Resource name of the new ResourceValueConfig's parent. The parent field in the CreateResourceValueConfigRequest messages must either be empty or match this field.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.resourceValueConfigs.batchCreate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/resourceValueConfigs:batchCreate', 'POST', apiParams, clientConfig);

    /**
     * Deletes a ResourceValueConfig.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the ResourceValueConfig to delete
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.resourceValueConfigs.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Gets a ResourceValueConfig.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the resource value config to retrieve. Its format is `organizations/{organization}/resourceValueConfigs/{config_id}`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.resourceValueConfigs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists all ResourceValueConfigs.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The number of results to return. The service may return fewer than this value. If unspecified, at most 10 configs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} apiParams.pageToken - A page token, received from a previous `ListResourceValueConfigs` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListResourceValueConfigs` must match the call that provided the page token. page_size can be specified, and the new page_size will be used.
     * @param {string} apiParams.parent - (Required) Required. The parent, which owns the collection of resource value configs. Its format is `organizations/[organization_id]`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.resourceValueConfigs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/resourceValueConfigs', 'GET', apiParams, clientConfig);

    /**
     * Updates an existing ResourceValueConfigs with new rules.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Name for the resource value configuration
     * @param {string} apiParams.updateMask - The list of fields to be updated. If empty all mutable fields will be updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.resourceValueConfigs.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    this.organizations.valuedResources = {};

    /**
     * Lists the valued resources for a set of simulation results and filter.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - The filter expression that filters the valued resources in the response. Supported fields: * `resource_value` supports = * `resource_type` supports =
     * @param {string} apiParams.orderBy - Optional. The fields by which to order the valued resources response. Supported fields: * `exposed_score` * `resource_value` * `resource_type` * `resource` * `display_name` Values should be a comma separated list of fields. For example: `exposed_score,resource_value`. The default sorting order is descending. To specify ascending or descending order for a field, append a ` ASC` or a ` DESC` suffix, respectively; for example: `exposed_score DESC`.
     * @param {integer} apiParams.pageSize - The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000.
     * @param {string} apiParams.pageToken - The value returned by the last `ListValuedResourcesResponse`; indicates that this is a continuation of a prior `ListValuedResources` call, and that the system should return the next page of data.
     * @param {string} apiParams.parent - (Required) Required. Name of parent to list valued resources. Valid formats: `organizations/{organization}`, `organizations/{organization}/simulations/{simulation}` `organizations/{organization}/simulations/{simulation}/attackExposureResults/{attack_exposure_result_v2}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.valuedResources.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/valuedResources', 'GET', apiParams, clientConfig);

    this.organizations.attackPaths = {};

    /**
     * Lists the attack paths for a set of simulation results or valued resources and filter.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - The filter expression that filters the attack path in the response. Supported fields: * `valued_resources` supports =
     * @param {integer} apiParams.pageSize - The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000.
     * @param {string} apiParams.pageToken - The value returned by the last `ListAttackPathsResponse`; indicates that this is a continuation of a prior `ListAttackPaths` call, and that the system should return the next page of data.
     * @param {string} apiParams.parent - (Required) Required. Name of parent to list attack paths. Valid formats: `organizations/{organization}`, `organizations/{organization}/simulations/{simulation}` `organizations/{organization}/simulations/{simulation}/attackExposureResults/{attack_exposure_result_v2}` `organizations/{organization}/simulations/{simulation}/valuedResources/{valued_resource}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.attackPaths.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/attackPaths', 'GET', apiParams, clientConfig);
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
