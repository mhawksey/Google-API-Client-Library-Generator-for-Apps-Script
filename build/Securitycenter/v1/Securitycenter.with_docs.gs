
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
    // "Private" properties using the underscore convention
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://securitycenter.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.folders = {};

    this.folders.findings = {};

    /**
     * Kicks off an LRO to bulk mute findings for a parent based on a filter. The parent can be either an organization, folder or project. The findings matched by the filter will be muted after the LRO is done.
     * @param {string} params.parent - (Required) Required. The parent, at which bulk action needs to be applied. Its format is `organizations/[organization_id]`, `folders/[folder_id]`, `projects/[project_id]`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.folders.findings.bulkMute = (params) => this._makeRequest('v1/{+parent}/findings:bulkMute', 'POST', params);

    this.folders.securityHealthAnalyticsSettings = {};

    this.folders.securityHealthAnalyticsSettings.customModules = {};

    /**
     * Creates a resident SecurityHealthAnalyticsCustomModule at the scope of the given CRM parent, and also creates inherited SecurityHealthAnalyticsCustomModules for all CRM descendants of the given parent. These modules are enabled by default.
     * @param {string} params.parent - (Required) Required. Resource name of the new custom module's parent. Its format is `organizations/{organization}/securityHealthAnalyticsSettings`, `folders/{folder}/securityHealthAnalyticsSettings`, or `projects/{project}/securityHealthAnalyticsSettings`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.folders.securityHealthAnalyticsSettings.customModules.create = (params) => this._makeRequest('v1/{+parent}/customModules', 'POST', params);

    /**
     * Deletes the specified SecurityHealthAnalyticsCustomModule and all of its descendants in the CRM hierarchy. This method is only supported for resident custom modules.
     * @param {string} params.name - (Required) Required. Name of the custom module to delete. Its format is `organizations/{organization}/securityHealthAnalyticsSettings/customModules/{customModule}`, `folders/{folder}/securityHealthAnalyticsSettings/customModules/{customModule}`, or `projects/{project}/securityHealthAnalyticsSettings/customModules/{customModule}`
     * @return {object} The API response object.
     */
    this.folders.securityHealthAnalyticsSettings.customModules.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Retrieves a SecurityHealthAnalyticsCustomModule.
     * @param {string} params.name - (Required) Required. Name of the custom module to get. Its format is `organizations/{organization}/securityHealthAnalyticsSettings/customModules/{customModule}`, `folders/{folder}/securityHealthAnalyticsSettings/customModules/{customModule}`, or `projects/{project}/securityHealthAnalyticsSettings/customModules/{customModule}`
     * @return {object} The API response object.
     */
    this.folders.securityHealthAnalyticsSettings.customModules.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Returns a list of all resident SecurityHealthAnalyticsCustomModules under the given CRM parent and all of the parent’s CRM descendants.
     * @param {integer} params.pageSize - The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000.
     * @param {string} params.pageToken - The value returned by the last call indicating a continuation
     * @param {string} params.parent - (Required) Required. Name of parent to list descendant custom modules. Its format is `organizations/{organization}/securityHealthAnalyticsSettings`, `folders/{folder}/securityHealthAnalyticsSettings`, or `projects/{project}/securityHealthAnalyticsSettings`
     * @return {object} The API response object.
     */
    this.folders.securityHealthAnalyticsSettings.customModules.listDescendant = (params) => this._makeRequest('v1/{+parent}/customModules:listDescendant', 'GET', params);

    /**
     * Returns a list of all SecurityHealthAnalyticsCustomModules for the given parent. This includes resident modules defined at the scope of the parent, and inherited modules, inherited from CRM ancestors.
     * @param {integer} params.pageSize - The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000.
     * @param {string} params.pageToken - The value returned by the last call indicating a continuation
     * @param {string} params.parent - (Required) Required. Name of parent to list custom modules. Its format is `organizations/{organization}/securityHealthAnalyticsSettings`, `folders/{folder}/securityHealthAnalyticsSettings`, or `projects/{project}/securityHealthAnalyticsSettings`
     * @return {object} The API response object.
     */
    this.folders.securityHealthAnalyticsSettings.customModules.list = (params) => this._makeRequest('v1/{+parent}/customModules', 'GET', params);

    /**
     * Simulates a given SecurityHealthAnalyticsCustomModule and Resource.
     * @param {string} params.parent - (Required) Required. The relative resource name of the organization, project, or folder. For more information about relative resource names, see [Relative Resource Name](https://cloud.google.com/apis/design/resource_names#relative_resource_name) Example: `organizations/{organization_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.folders.securityHealthAnalyticsSettings.customModules.simulate = (params) => this._makeRequest('v1/{+parent}/customModules:simulate', 'POST', params);

    /**
     * Updates the SecurityHealthAnalyticsCustomModule under the given name based on the given update mask. Updating the enablement state is supported on both resident and inherited modules (though resident modules cannot have an enablement state of "inherited"). Updating the display name and custom config of a module is supported on resident modules only.
     * @param {string} params.name - (Required) Immutable. The resource name of the custom module. Its format is "organizations/{organization}/securityHealthAnalyticsSettings/customModules/{customModule}", or "folders/{folder}/securityHealthAnalyticsSettings/customModules/{customModule}", or "projects/{project}/securityHealthAnalyticsSettings/customModules/{customModule}" The id {customModule} is server-generated and is not user settable. It will be a numeric id containing 1-20 digits.
     * @param {string} params.updateMask - The list of fields to be updated. The only fields that can be updated are `enablement_state` and `custom_config`. If empty or set to the wildcard value `*`, both `enablement_state` and `custom_config` are updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.folders.securityHealthAnalyticsSettings.customModules.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.folders.securityHealthAnalyticsSettings.effectiveCustomModules = {};

    /**
     * Retrieves an EffectiveSecurityHealthAnalyticsCustomModule.
     * @param {string} params.name - (Required) Required. Name of the effective custom module to get. Its format is `organizations/{organization}/securityHealthAnalyticsSettings/effectiveCustomModules/{customModule}`, `folders/{folder}/securityHealthAnalyticsSettings/effectiveCustomModules/{customModule}`, or `projects/{project}/securityHealthAnalyticsSettings/effectiveCustomModules/{customModule}`
     * @return {object} The API response object.
     */
    this.folders.securityHealthAnalyticsSettings.effectiveCustomModules.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Returns a list of all EffectiveSecurityHealthAnalyticsCustomModules for the given parent. This includes resident modules defined at the scope of the parent, and inherited modules, inherited from CRM ancestors.
     * @param {integer} params.pageSize - The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000.
     * @param {string} params.pageToken - The value returned by the last call indicating a continuation
     * @param {string} params.parent - (Required) Required. Name of parent to list effective custom modules. Its format is `organizations/{organization}/securityHealthAnalyticsSettings`, `folders/{folder}/securityHealthAnalyticsSettings`, or `projects/{project}/securityHealthAnalyticsSettings`
     * @return {object} The API response object.
     */
    this.folders.securityHealthAnalyticsSettings.effectiveCustomModules.list = (params) => this._makeRequest('v1/{+parent}/effectiveCustomModules', 'GET', params);

    this.folders.muteConfigs = {};

    /**
     * Creates a mute config.
     * @param {string} params.muteConfigId - Required. Unique identifier provided by the client within the parent scope. It must consist of only lowercase letters, numbers, and hyphens, must start with a letter, must end with either a letter or a number, and must be 63 characters or less.
     * @param {string} params.parent - (Required) Required. Resource name of the new mute configs's parent. Its format is `organizations/[organization_id]`, `folders/[folder_id]`, or `projects/[project_id]`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.folders.muteConfigs.create = (params) => this._makeRequest('v1/{+parent}/muteConfigs', 'POST', params);

    /**
     * Deletes an existing mute config.
     * @param {string} params.name - (Required) Required. Name of the mute config to delete. Its format is `organizations/{organization}/muteConfigs/{config_id}`, `folders/{folder}/muteConfigs/{config_id}`, `projects/{project}/muteConfigs/{config_id}`, `organizations/{organization}/locations/global/muteConfigs/{config_id}`, `folders/{folder}/locations/global/muteConfigs/{config_id}`, or `projects/{project}/locations/global/muteConfigs/{config_id}`.
     * @return {object} The API response object.
     */
    this.folders.muteConfigs.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Gets a mute config.
     * @param {string} params.name - (Required) Required. Name of the mute config to retrieve. Its format is `organizations/{organization}/muteConfigs/{config_id}`, `folders/{folder}/muteConfigs/{config_id}`, `projects/{project}/muteConfigs/{config_id}`, `organizations/{organization}/locations/global/muteConfigs/{config_id}`, `folders/{folder}/locations/global/muteConfigs/{config_id}`, or `projects/{project}/locations/global/muteConfigs/{config_id}`.
     * @return {object} The API response object.
     */
    this.folders.muteConfigs.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists mute configs.
     * @param {integer} params.pageSize - The maximum number of configs to return. The service may return fewer than this value. If unspecified, at most 10 configs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - A page token, received from a previous `ListMuteConfigs` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListMuteConfigs` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent, which owns the collection of mute configs. Its format is `organizations/[organization_id]`, `folders/[folder_id]`, `projects/[project_id]`.
     * @return {object} The API response object.
     */
    this.folders.muteConfigs.list = (params) => this._makeRequest('v1/{+parent}/muteConfigs', 'GET', params);

    /**
     * Updates a mute config.
     * @param {string} params.name - (Required) This field will be ignored if provided on config creation. Format `organizations/{organization}/muteConfigs/{mute_config}` `folders/{folder}/muteConfigs/{mute_config}` `projects/{project}/muteConfigs/{mute_config}` `organizations/{organization}/locations/global/muteConfigs/{mute_config}` `folders/{folder}/locations/global/muteConfigs/{mute_config}` `projects/{project}/locations/global/muteConfigs/{mute_config}`
     * @param {string} params.updateMask - The list of fields to be updated. If empty all mutable fields will be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.folders.muteConfigs.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.folders.notificationConfigs = {};

    /**
     * Creates a notification config.
     * @param {string} params.configId - Required. Unique identifier provided by the client within the parent scope. It must be between 1 and 128 characters and contain alphanumeric characters, underscores, or hyphens only.
     * @param {string} params.parent - (Required) Required. Resource name of the new notification config's parent. Its format is `organizations/[organization_id]`, `folders/[folder_id]`, or `projects/[project_id]`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.folders.notificationConfigs.create = (params) => this._makeRequest('v1/{+parent}/notificationConfigs', 'POST', params);

    /**
     * Deletes a notification config.
     * @param {string} params.name - (Required) Required. Name of the notification config to delete. Its format is `organizations/[organization_id]/notificationConfigs/[config_id]`, `folders/[folder_id]/notificationConfigs/[config_id]`, or `projects/[project_id]/notificationConfigs/[config_id]`.
     * @return {object} The API response object.
     */
    this.folders.notificationConfigs.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Gets a notification config.
     * @param {string} params.name - (Required) Required. Name of the notification config to get. Its format is `organizations/[organization_id]/notificationConfigs/[config_id]`, `folders/[folder_id]/notificationConfigs/[config_id]`, or `projects/[project_id]/notificationConfigs/[config_id]`.
     * @return {object} The API response object.
     */
    this.folders.notificationConfigs.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists notification configs.
     * @param {integer} params.pageSize - The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000.
     * @param {string} params.pageToken - The value returned by the last `ListNotificationConfigsResponse`; indicates that this is a continuation of a prior `ListNotificationConfigs` call, and that the system should return the next page of data.
     * @param {string} params.parent - (Required) Required. The name of the parent in which to list the notification configurations. Its format is "organizations/[organization_id]", "folders/[folder_id]", or "projects/[project_id]".
     * @return {object} The API response object.
     */
    this.folders.notificationConfigs.list = (params) => this._makeRequest('v1/{+parent}/notificationConfigs', 'GET', params);

    /**
     * Updates a notification config. The following update fields are allowed: description, pubsub_topic, streaming_config.filter
     * @param {string} params.name - (Required) The relative resource name of this notification config. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Example: "organizations/{organization_id}/notificationConfigs/notify_public_bucket", "folders/{folder_id}/notificationConfigs/notify_public_bucket", or "projects/{project_id}/notificationConfigs/notify_public_bucket".
     * @param {string} params.updateMask - The FieldMask to use when updating the notification config. If empty all mutable fields will be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.folders.notificationConfigs.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.folders.locations = {};

    this.folders.locations.muteConfigs = {};

    /**
     * Deletes an existing mute config.
     * @param {string} params.name - (Required) Required. Name of the mute config to delete. Its format is `organizations/{organization}/muteConfigs/{config_id}`, `folders/{folder}/muteConfigs/{config_id}`, `projects/{project}/muteConfigs/{config_id}`, `organizations/{organization}/locations/global/muteConfigs/{config_id}`, `folders/{folder}/locations/global/muteConfigs/{config_id}`, or `projects/{project}/locations/global/muteConfigs/{config_id}`.
     * @return {object} The API response object.
     */
    this.folders.locations.muteConfigs.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Gets a mute config.
     * @param {string} params.name - (Required) Required. Name of the mute config to retrieve. Its format is `organizations/{organization}/muteConfigs/{config_id}`, `folders/{folder}/muteConfigs/{config_id}`, `projects/{project}/muteConfigs/{config_id}`, `organizations/{organization}/locations/global/muteConfigs/{config_id}`, `folders/{folder}/locations/global/muteConfigs/{config_id}`, or `projects/{project}/locations/global/muteConfigs/{config_id}`.
     * @return {object} The API response object.
     */
    this.folders.locations.muteConfigs.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Updates a mute config.
     * @param {string} params.name - (Required) This field will be ignored if provided on config creation. Format `organizations/{organization}/muteConfigs/{mute_config}` `folders/{folder}/muteConfigs/{mute_config}` `projects/{project}/muteConfigs/{mute_config}` `organizations/{organization}/locations/global/muteConfigs/{mute_config}` `folders/{folder}/locations/global/muteConfigs/{mute_config}` `projects/{project}/locations/global/muteConfigs/{mute_config}`
     * @param {string} params.updateMask - The list of fields to be updated. If empty all mutable fields will be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.folders.locations.muteConfigs.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.folders.bigQueryExports = {};

    /**
     * Gets a BigQuery export.
     * @param {string} params.name - (Required) Required. Name of the BigQuery export to retrieve. Its format is `organizations/{organization}/bigQueryExports/{export_id}`, `folders/{folder}/bigQueryExports/{export_id}`, or `projects/{project}/bigQueryExports/{export_id}`
     * @return {object} The API response object.
     */
    this.folders.bigQueryExports.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a BigQuery export.
     * @param {string} params.bigQueryExportId - Required. Unique identifier provided by the client within the parent scope. It must consist of only lowercase letters, numbers, and hyphens, must start with a letter, must end with either a letter or a number, and must be 63 characters or less.
     * @param {string} params.parent - (Required) Required. The name of the parent resource of the new BigQuery export. Its format is `organizations/[organization_id]`, `folders/[folder_id]`, or `projects/[project_id]`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.folders.bigQueryExports.create = (params) => this._makeRequest('v1/{+parent}/bigQueryExports', 'POST', params);

    /**
     * Deletes an existing BigQuery export.
     * @param {string} params.name - (Required) Required. The name of the BigQuery export to delete. Its format is `organizations/{organization}/bigQueryExports/{export_id}`, `folders/{folder}/bigQueryExports/{export_id}`, or `projects/{project}/bigQueryExports/{export_id}`
     * @return {object} The API response object.
     */
    this.folders.bigQueryExports.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Updates a BigQuery export.
     * @param {string} params.name - (Required) The relative resource name of this export. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name. Example format: "organizations/{organization_id}/bigQueryExports/{export_id}" Example format: "folders/{folder_id}/bigQueryExports/{export_id}" Example format: "projects/{project_id}/bigQueryExports/{export_id}" This field is provided in responses, and is ignored when provided in create requests.
     * @param {string} params.updateMask - The list of fields to be updated. If empty all mutable fields will be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.folders.bigQueryExports.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Lists BigQuery exports. Note that when requesting BigQuery exports at a given level all exports under that level are also returned e.g. if requesting BigQuery exports under a folder, then all BigQuery exports immediately under the folder plus the ones created under the projects within the folder are returned.
     * @param {integer} params.pageSize - The maximum number of configs to return. The service may return fewer than this value. If unspecified, at most 10 configs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - A page token, received from a previous `ListBigQueryExports` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListBigQueryExports` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent, which owns the collection of BigQuery exports. Its format is `organizations/[organization_id]`, `folders/[folder_id]`, `projects/[project_id]`.
     * @return {object} The API response object.
     */
    this.folders.bigQueryExports.list = (params) => this._makeRequest('v1/{+parent}/bigQueryExports', 'GET', params);

    this.folders.assets = {};

    /**
     * Filters an organization's assets and groups them by their specified properties.
     * @param {string} params.parent - (Required) Required. The name of the parent to group the assets by. Its format is `organizations/[organization_id]`, `folders/[folder_id]`, or `projects/[project_id]`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.folders.assets.group = (params) => this._makeRequest('v1/{+parent}/assets:group', 'POST', params);

    /**
     * Lists an organization's assets.
     * @param {string} params.compareDuration - When compare_duration is set, the ListAssetsResult's "state_change" attribute is updated to indicate whether the asset was added, removed, or remained present during the compare_duration period of time that precedes the read_time. This is the time between (read_time - compare_duration) and read_time. The state_change value is derived based on the presence of the asset at the two points in time. Intermediate state changes between the two times don't affect the result. For example, the results aren't affected if the asset is removed and re-created again. Possible "state_change" values when compare_duration is specified: * "ADDED": indicates that the asset was not present at the start of compare_duration, but present at read_time. * "REMOVED": indicates that the asset was present at the start of compare_duration, but not present at read_time. * "ACTIVE": indicates that the asset was present at both the start and the end of the time period defined by compare_duration and read_time. If compare_duration is not specified, then the only possible state_change is "UNUSED", which will be the state_change set for all assets present at read_time.
     * @param {string} params.fieldMask - A field mask to specify the ListAssetsResult fields to be listed in the response. An empty field mask will list all fields.
     * @param {string} params.filter - Expression that defines the filter to apply across assets. The expression is a list of zero or more restrictions combined via logical operators `AND` and `OR`. Parentheses are supported, and `OR` has higher precedence than `AND`. Restrictions have the form ` ` and may have a `-` character in front of them to indicate negation. The fields map to those defined in the Asset resource. Examples include: * name * security_center_properties.resource_name * resource_properties.a_property * security_marks.marks.marka The supported operators are: * `=` for all value types. * `>`, `<`, `>=`, `<=` for integer values. * `:`, meaning substring matching, for strings. The supported value types are: * string literals in quotes. * integer literals without quotes. * boolean literals `true` and `false` without quotes. The following are the allowed field and operator combinations: * name: `=` * update_time: `=`, `>`, `<`, `>=`, `<=` Usage: This should be milliseconds since epoch or an RFC3339 string. Examples: `update_time = "2019-06-10T16:07:18-07:00"` `update_time = 1560208038000` * create_time: `=`, `>`, `<`, `>=`, `<=` Usage: This should be milliseconds since epoch or an RFC3339 string. Examples: `create_time = "2019-06-10T16:07:18-07:00"` `create_time = 1560208038000` * iam_policy.policy_blob: `=`, `:` * resource_properties: `=`, `:`, `>`, `<`, `>=`, `<=` * security_marks.marks: `=`, `:` * security_center_properties.resource_name: `=`, `:` * security_center_properties.resource_display_name: `=`, `:` * security_center_properties.resource_type: `=`, `:` * security_center_properties.resource_parent: `=`, `:` * security_center_properties.resource_parent_display_name: `=`, `:` * security_center_properties.resource_project: `=`, `:` * security_center_properties.resource_project_display_name: `=`, `:` * security_center_properties.resource_owners: `=`, `:` For example, `resource_properties.size = 100` is a valid filter string. Use a partial match on the empty string to filter based on a property existing: `resource_properties.my_property : ""` Use a negated partial match on the empty string to filter based on a property not existing: `-resource_properties.my_property : ""`
     * @param {string} params.orderBy - Expression that defines what fields and order to use for sorting. The string value should follow SQL syntax: comma separated list of fields. For example: "name,resource_properties.a_property". The default sorting order is ascending. To specify descending order for a field, a suffix " desc" should be appended to the field name. For example: "name desc,resource_properties.a_property". Redundant space characters in the syntax are insignificant. "name desc,resource_properties.a_property" and " name desc , resource_properties.a_property " are equivalent. The following fields are supported: name update_time resource_properties security_marks.marks security_center_properties.resource_name security_center_properties.resource_display_name security_center_properties.resource_parent security_center_properties.resource_parent_display_name security_center_properties.resource_project security_center_properties.resource_project_display_name security_center_properties.resource_type
     * @param {integer} params.pageSize - The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000.
     * @param {string} params.pageToken - The value returned by the last `ListAssetsResponse`; indicates that this is a continuation of a prior `ListAssets` call, and that the system should return the next page of data.
     * @param {string} params.parent - (Required) Required. The name of the parent resource that contains the assets. The value that you can specify on parent depends on the method in which you specify parent. You can specify one of the following values: `organizations/[organization_id]`, `folders/[folder_id]`, or `projects/[project_id]`.
     * @param {string} params.readTime - Time used as a reference point when filtering assets. The filter is limited to assets existing at the supplied time and their values are those at that specific time. Absence of this field will default to the API's version of NOW.
     * @return {object} The API response object.
     */
    this.folders.assets.list = (params) => this._makeRequest('v1/{+parent}/assets', 'GET', params);

    /**
     * Updates security marks.
     * @param {string} params.name - (Required) The relative resource name of the SecurityMarks. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Examples: "organizations/{organization_id}/assets/{asset_id}/securityMarks" "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}/securityMarks".
     * @param {string} params.startTime - The time at which the updated SecurityMarks take effect. If not set uses current server time. Updates will be applied to the SecurityMarks that are active immediately preceding this time. Must be earlier or equal to the server time.
     * @param {string} params.updateMask - The FieldMask to use when updating the security marks resource. The field mask must not contain duplicate fields. If empty or set to "marks", all marks will be replaced. Individual marks can be updated using "marks.".
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.folders.assets.updateSecurityMarks = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.folders.sources = {};

    /**
     * Lists all sources belonging to an organization.
     * @param {integer} params.pageSize - The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000.
     * @param {string} params.pageToken - The value returned by the last `ListSourcesResponse`; indicates that this is a continuation of a prior `ListSources` call, and that the system should return the next page of data.
     * @param {string} params.parent - (Required) Required. Resource name of the parent of sources to list. Its format should be `organizations/[organization_id]`, `folders/[folder_id]`, or `projects/[project_id]`.
     * @return {object} The API response object.
     */
    this.folders.sources.list = (params) => this._makeRequest('v1/{+parent}/sources', 'GET', params);

    this.folders.sources.findings = {};

    /**
     * Filters an organization or source's findings and groups them by their specified properties. To group across all sources provide a `-` as the source id. Example: /v1/organizations/{organization_id}/sources/-/findings, /v1/folders/{folder_id}/sources/-/findings, /v1/projects/{project_id}/sources/-/findings
     * @param {string} params.parent - (Required) Required. Name of the source to groupBy. Its format is `organizations/[organization_id]/sources/[source_id]`, `folders/[folder_id]/sources/[source_id]`, or `projects/[project_id]/sources/[source_id]`. To groupBy across all sources provide a source_id of `-`. For example: `organizations/{organization_id}/sources/-, folders/{folder_id}/sources/-`, or `projects/{project_id}/sources/-`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.folders.sources.findings.group = (params) => this._makeRequest('v1/{+parent}/findings:group', 'POST', params);

    /**
     * Lists an organization or source's findings. To list across all sources provide a `-` as the source id. Example: /v1/organizations/{organization_id}/sources/-/findings
     * @param {string} params.compareDuration - When compare_duration is set, the ListFindingsResult's "state_change" attribute is updated to indicate whether the finding had its state changed, the finding's state remained unchanged, or if the finding was added in any state during the compare_duration period of time that precedes the read_time. This is the time between (read_time - compare_duration) and read_time. The state_change value is derived based on the presence and state of the finding at the two points in time. Intermediate state changes between the two times don't affect the result. For example, the results aren't affected if the finding is made inactive and then active again. Possible "state_change" values when compare_duration is specified: * "CHANGED": indicates that the finding was present and matched the given filter at the start of compare_duration, but changed its state at read_time. * "UNCHANGED": indicates that the finding was present and matched the given filter at the start of compare_duration and did not change state at read_time. * "ADDED": indicates that the finding did not match the given filter or was not present at the start of compare_duration, but was present at read_time. * "REMOVED": indicates that the finding was present and matched the filter at the start of compare_duration, but did not match the filter at read_time. If compare_duration is not specified, then the only possible state_change is "UNUSED", which will be the state_change set for all findings present at read_time.
     * @param {string} params.fieldMask - A field mask to specify the Finding fields to be listed in the response. An empty field mask will list all fields.
     * @param {string} params.filter - Expression that defines the filter to apply across findings. The expression is a list of one or more restrictions combined via logical operators `AND` and `OR`. Parentheses are supported, and `OR` has higher precedence than `AND`. Restrictions have the form ` ` and may have a `-` character in front of them to indicate negation. Examples include: * name * source_properties.a_property * security_marks.marks.marka The supported operators are: * `=` for all value types. * `>`, `<`, `>=`, `<=` for integer values. * `:`, meaning substring matching, for strings. The supported value types are: * string literals in quotes. * integer literals without quotes. * boolean literals `true` and `false` without quotes. The following field and operator combinations are supported: * name: `=` * parent: `=`, `:` * resource_name: `=`, `:` * state: `=`, `:` * category: `=`, `:` * external_uri: `=`, `:` * event_time: `=`, `>`, `<`, `>=`, `<=` Usage: This should be milliseconds since epoch or an RFC3339 string. Examples: `event_time = "2019-06-10T16:07:18-07:00"` `event_time = 1560208038000` * severity: `=`, `:` * workflow_state: `=`, `:` * security_marks.marks: `=`, `:` * source_properties: `=`, `:`, `>`, `<`, `>=`, `<=` For example, `source_properties.size = 100` is a valid filter string. Use a partial match on the empty string to filter based on a property existing: `source_properties.my_property : ""` Use a negated partial match on the empty string to filter based on a property not existing: `-source_properties.my_property : ""` * resource: * resource.name: `=`, `:` * resource.parent_name: `=`, `:` * resource.parent_display_name: `=`, `:` * resource.project_name: `=`, `:` * resource.project_display_name: `=`, `:` * resource.type: `=`, `:` * resource.folders.resource_folder: `=`, `:` * resource.display_name: `=`, `:`
     * @param {string} params.orderBy - Expression that defines what fields and order to use for sorting. The string value should follow SQL syntax: comma separated list of fields. For example: "name,resource_properties.a_property". The default sorting order is ascending. To specify descending order for a field, a suffix " desc" should be appended to the field name. For example: "name desc,source_properties.a_property". Redundant space characters in the syntax are insignificant. "name desc,source_properties.a_property" and " name desc , source_properties.a_property " are equivalent. The following fields are supported: name parent state category resource_name event_time source_properties security_marks.marks
     * @param {integer} params.pageSize - The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000.
     * @param {string} params.pageToken - The value returned by the last `ListFindingsResponse`; indicates that this is a continuation of a prior `ListFindings` call, and that the system should return the next page of data.
     * @param {string} params.parent - (Required) Required. Name of the source the findings belong to. Its format is `organizations/[organization_id]/sources/[source_id]`, `folders/[folder_id]/sources/[source_id]`, or `projects/[project_id]/sources/[source_id]`. To list across all sources provide a source_id of `-`. For example: `organizations/{organization_id}/sources/-`, `folders/{folder_id}/sources/-` or `projects/{projects_id}/sources/-`
     * @param {string} params.readTime - Time used as a reference point when filtering findings. The filter is limited to findings existing at the supplied time and their values are those at that specific time. Absence of this field will default to the API's version of NOW.
     * @return {object} The API response object.
     */
    this.folders.sources.findings.list = (params) => this._makeRequest('v1/{+parent}/findings', 'GET', params);

    /**
     * Updates the state of a finding.
     * @param {string} params.name - (Required) Required. The [relative resource name](https://cloud.google.com/apis/design/resource_names#relative_resource_name) of the finding. Example: `organizations/{organization_id}/sources/{source_id}/findings/{finding_id}`, `folders/{folder_id}/sources/{source_id}/findings/{finding_id}`, `projects/{project_id}/sources/{source_id}/findings/{finding_id}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.folders.sources.findings.setState = (params) => this._makeRequest('v1/{+name}:setState', 'POST', params);

    /**
     * Updates the mute state of a finding.
     * @param {string} params.name - (Required) Required. The [relative resource name](https://cloud.google.com/apis/design/resource_names#relative_resource_name) of the finding. Example: `organizations/{organization_id}/sources/{source_id}/findings/{finding_id}`, `folders/{folder_id}/sources/{source_id}/findings/{finding_id}`, `projects/{project_id}/sources/{source_id}/findings/{finding_id}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.folders.sources.findings.setMute = (params) => this._makeRequest('v1/{+name}:setMute', 'POST', params);

    /**
     * Creates or updates a finding. The corresponding source must exist for a finding creation to succeed.
     * @param {string} params.name - (Required) The [relative resource name](https://cloud.google.com/apis/design/resource_names#relative_resource_name) of the finding. Example: "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}", "folders/{folder_id}/sources/{source_id}/findings/{finding_id}", "projects/{project_id}/sources/{source_id}/findings/{finding_id}".
     * @param {string} params.updateMask - The FieldMask to use when updating the finding resource. This field should not be specified when creating a finding. When updating a finding, an empty mask is treated as updating all mutable fields and replacing source_properties. Individual source_properties can be added/updated by using "source_properties." in the field mask.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.folders.sources.findings.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Updates security marks.
     * @param {string} params.name - (Required) The relative resource name of the SecurityMarks. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Examples: "organizations/{organization_id}/assets/{asset_id}/securityMarks" "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}/securityMarks".
     * @param {string} params.startTime - The time at which the updated SecurityMarks take effect. If not set uses current server time. Updates will be applied to the SecurityMarks that are active immediately preceding this time. Must be earlier or equal to the server time.
     * @param {string} params.updateMask - The FieldMask to use when updating the security marks resource. The field mask must not contain duplicate fields. If empty or set to "marks", all marks will be replaced. Individual marks can be updated using "marks.".
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.folders.sources.findings.updateSecurityMarks = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.folders.sources.findings.externalSystems = {};

    /**
     * Updates external system. This is for a given finding.
     * @param {string} params.name - (Required) Full resource name of the external system, for example: "organizations/1234/sources/5678/findings/123456/externalSystems/jira", "folders/1234/sources/5678/findings/123456/externalSystems/jira", "projects/1234/sources/5678/findings/123456/externalSystems/jira"
     * @param {string} params.updateMask - The FieldMask to use when updating the external system resource. If empty all mutable fields will be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.folders.sources.findings.externalSystems.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.folders.eventThreatDetectionSettings = {};

    /**
     * Validates the given Event Threat Detection custom module.
     * @param {string} params.parent - (Required) Required. Resource name of the parent to validate the Custom Module under. Its format is: * `organizations/{organization}/eventThreatDetectionSettings`. * `folders/{folder}/eventThreatDetectionSettings`. * `projects/{project}/eventThreatDetectionSettings`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.folders.eventThreatDetectionSettings.validateCustomModule = (params) => this._makeRequest('v1/{+parent}:validateCustomModule', 'POST', params);

    this.folders.eventThreatDetectionSettings.customModules = {};

    /**
     * Creates a resident Event Threat Detection custom module at the scope of the given Resource Manager parent, and also creates inherited custom modules for all descendants of the given parent. These modules are enabled by default.
     * @param {string} params.parent - (Required) Required. The new custom module's parent. Its format is: * `organizations/{organization}/eventThreatDetectionSettings`. * `folders/{folder}/eventThreatDetectionSettings`. * `projects/{project}/eventThreatDetectionSettings`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.folders.eventThreatDetectionSettings.customModules.create = (params) => this._makeRequest('v1/{+parent}/customModules', 'POST', params);

    /**
     * Deletes the specified Event Threat Detection custom module and all of its descendants in the Resource Manager hierarchy. This method is only supported for resident custom modules.
     * @param {string} params.name - (Required) Required. Name of the custom module to delete. Its format is: * `organizations/{organization}/eventThreatDetectionSettings/customModules/{module}`. * `folders/{folder}/eventThreatDetectionSettings/customModules/{module}`. * `projects/{project}/eventThreatDetectionSettings/customModules/{module}`.
     * @return {object} The API response object.
     */
    this.folders.eventThreatDetectionSettings.customModules.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Gets an Event Threat Detection custom module.
     * @param {string} params.name - (Required) Required. Name of the custom module to get. Its format is: * `organizations/{organization}/eventThreatDetectionSettings/customModules/{module}`. * `folders/{folder}/eventThreatDetectionSettings/customModules/{module}`. * `projects/{project}/eventThreatDetectionSettings/customModules/{module}`.
     * @return {object} The API response object.
     */
    this.folders.eventThreatDetectionSettings.customModules.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists all resident Event Threat Detection custom modules under the given Resource Manager parent and its descendants.
     * @param {integer} params.pageSize - The maximum number of modules to return. The service may return fewer than this value. If unspecified, at most 10 configs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - A page token, received from a previous `ListDescendantEventThreatDetectionCustomModules` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListDescendantEventThreatDetectionCustomModules` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. Name of the parent to list custom modules under. Its format is: * `organizations/{organization}/eventThreatDetectionSettings`. * `folders/{folder}/eventThreatDetectionSettings`. * `projects/{project}/eventThreatDetectionSettings`.
     * @return {object} The API response object.
     */
    this.folders.eventThreatDetectionSettings.customModules.listDescendant = (params) => this._makeRequest('v1/{+parent}/customModules:listDescendant', 'GET', params);

    /**
     * Lists all Event Threat Detection custom modules for the given Resource Manager parent. This includes resident modules defined at the scope of the parent along with modules inherited from ancestors.
     * @param {integer} params.pageSize - The maximum number of modules to return. The service may return fewer than this value. If unspecified, at most 10 configs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - A page token, received from a previous `ListEventThreatDetectionCustomModules` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListEventThreatDetectionCustomModules` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. Name of the parent to list custom modules under. Its format is: * `organizations/{organization}/eventThreatDetectionSettings`. * `folders/{folder}/eventThreatDetectionSettings`. * `projects/{project}/eventThreatDetectionSettings`.
     * @return {object} The API response object.
     */
    this.folders.eventThreatDetectionSettings.customModules.list = (params) => this._makeRequest('v1/{+parent}/customModules', 'GET', params);

    /**
     * Updates the Event Threat Detection custom module with the given name based on the given update mask. Updating the enablement state is supported for both resident and inherited modules (though resident modules cannot have an enablement state of "inherited"). Updating the display name or configuration of a module is supported for resident modules only. The type of a module cannot be changed.
     * @param {string} params.name - (Required) Immutable. The resource name of the Event Threat Detection custom module. Its format is: * `organizations/{organization}/eventThreatDetectionSettings/customModules/{module}`. * `folders/{folder}/eventThreatDetectionSettings/customModules/{module}`. * `projects/{project}/eventThreatDetectionSettings/customModules/{module}`.
     * @param {string} params.updateMask - The list of fields to be updated. If empty all mutable fields will be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.folders.eventThreatDetectionSettings.customModules.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.folders.eventThreatDetectionSettings.effectiveCustomModules = {};

    /**
     * Gets an effective Event Threat Detection custom module at the given level.
     * @param {string} params.name - (Required) Required. The resource name of the effective Event Threat Detection custom module. Its format is: * `organizations/{organization}/eventThreatDetectionSettings/effectiveCustomModules/{module}`. * `folders/{folder}/eventThreatDetectionSettings/effectiveCustomModules/{module}`. * `projects/{project}/eventThreatDetectionSettings/effectiveCustomModules/{module}`.
     * @return {object} The API response object.
     */
    this.folders.eventThreatDetectionSettings.effectiveCustomModules.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists all effective Event Threat Detection custom modules for the given parent. This includes resident modules defined at the scope of the parent along with modules inherited from its ancestors.
     * @param {integer} params.pageSize - The maximum number of modules to return. The service may return fewer than this value. If unspecified, at most 10 configs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - A page token, received from a previous `ListEffectiveEventThreatDetectionCustomModules` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListEffectiveEventThreatDetectionCustomModules` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. Name of the parent to list custom modules for. Its format is: * `organizations/{organization}/eventThreatDetectionSettings`. * `folders/{folder}/eventThreatDetectionSettings`. * `projects/{project}/eventThreatDetectionSettings`.
     * @return {object} The API response object.
     */
    this.folders.eventThreatDetectionSettings.effectiveCustomModules.list = (params) => this._makeRequest('v1/{+parent}/effectiveCustomModules', 'GET', params);

    this.projects = {};

    this.projects.findings = {};

    /**
     * Kicks off an LRO to bulk mute findings for a parent based on a filter. The parent can be either an organization, folder or project. The findings matched by the filter will be muted after the LRO is done.
     * @param {string} params.parent - (Required) Required. The parent, at which bulk action needs to be applied. Its format is `organizations/[organization_id]`, `folders/[folder_id]`, `projects/[project_id]`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.findings.bulkMute = (params) => this._makeRequest('v1/{+parent}/findings:bulkMute', 'POST', params);

    this.projects.securityHealthAnalyticsSettings = {};

    this.projects.securityHealthAnalyticsSettings.customModules = {};

    /**
     * Creates a resident SecurityHealthAnalyticsCustomModule at the scope of the given CRM parent, and also creates inherited SecurityHealthAnalyticsCustomModules for all CRM descendants of the given parent. These modules are enabled by default.
     * @param {string} params.parent - (Required) Required. Resource name of the new custom module's parent. Its format is `organizations/{organization}/securityHealthAnalyticsSettings`, `folders/{folder}/securityHealthAnalyticsSettings`, or `projects/{project}/securityHealthAnalyticsSettings`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.securityHealthAnalyticsSettings.customModules.create = (params) => this._makeRequest('v1/{+parent}/customModules', 'POST', params);

    /**
     * Deletes the specified SecurityHealthAnalyticsCustomModule and all of its descendants in the CRM hierarchy. This method is only supported for resident custom modules.
     * @param {string} params.name - (Required) Required. Name of the custom module to delete. Its format is `organizations/{organization}/securityHealthAnalyticsSettings/customModules/{customModule}`, `folders/{folder}/securityHealthAnalyticsSettings/customModules/{customModule}`, or `projects/{project}/securityHealthAnalyticsSettings/customModules/{customModule}`
     * @return {object} The API response object.
     */
    this.projects.securityHealthAnalyticsSettings.customModules.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Retrieves a SecurityHealthAnalyticsCustomModule.
     * @param {string} params.name - (Required) Required. Name of the custom module to get. Its format is `organizations/{organization}/securityHealthAnalyticsSettings/customModules/{customModule}`, `folders/{folder}/securityHealthAnalyticsSettings/customModules/{customModule}`, or `projects/{project}/securityHealthAnalyticsSettings/customModules/{customModule}`
     * @return {object} The API response object.
     */
    this.projects.securityHealthAnalyticsSettings.customModules.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Returns a list of all resident SecurityHealthAnalyticsCustomModules under the given CRM parent and all of the parent’s CRM descendants.
     * @param {integer} params.pageSize - The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000.
     * @param {string} params.pageToken - The value returned by the last call indicating a continuation
     * @param {string} params.parent - (Required) Required. Name of parent to list descendant custom modules. Its format is `organizations/{organization}/securityHealthAnalyticsSettings`, `folders/{folder}/securityHealthAnalyticsSettings`, or `projects/{project}/securityHealthAnalyticsSettings`
     * @return {object} The API response object.
     */
    this.projects.securityHealthAnalyticsSettings.customModules.listDescendant = (params) => this._makeRequest('v1/{+parent}/customModules:listDescendant', 'GET', params);

    /**
     * Returns a list of all SecurityHealthAnalyticsCustomModules for the given parent. This includes resident modules defined at the scope of the parent, and inherited modules, inherited from CRM ancestors.
     * @param {integer} params.pageSize - The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000.
     * @param {string} params.pageToken - The value returned by the last call indicating a continuation
     * @param {string} params.parent - (Required) Required. Name of parent to list custom modules. Its format is `organizations/{organization}/securityHealthAnalyticsSettings`, `folders/{folder}/securityHealthAnalyticsSettings`, or `projects/{project}/securityHealthAnalyticsSettings`
     * @return {object} The API response object.
     */
    this.projects.securityHealthAnalyticsSettings.customModules.list = (params) => this._makeRequest('v1/{+parent}/customModules', 'GET', params);

    /**
     * Simulates a given SecurityHealthAnalyticsCustomModule and Resource.
     * @param {string} params.parent - (Required) Required. The relative resource name of the organization, project, or folder. For more information about relative resource names, see [Relative Resource Name](https://cloud.google.com/apis/design/resource_names#relative_resource_name) Example: `organizations/{organization_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.securityHealthAnalyticsSettings.customModules.simulate = (params) => this._makeRequest('v1/{+parent}/customModules:simulate', 'POST', params);

    /**
     * Updates the SecurityHealthAnalyticsCustomModule under the given name based on the given update mask. Updating the enablement state is supported on both resident and inherited modules (though resident modules cannot have an enablement state of "inherited"). Updating the display name and custom config of a module is supported on resident modules only.
     * @param {string} params.name - (Required) Immutable. The resource name of the custom module. Its format is "organizations/{organization}/securityHealthAnalyticsSettings/customModules/{customModule}", or "folders/{folder}/securityHealthAnalyticsSettings/customModules/{customModule}", or "projects/{project}/securityHealthAnalyticsSettings/customModules/{customModule}" The id {customModule} is server-generated and is not user settable. It will be a numeric id containing 1-20 digits.
     * @param {string} params.updateMask - The list of fields to be updated. The only fields that can be updated are `enablement_state` and `custom_config`. If empty or set to the wildcard value `*`, both `enablement_state` and `custom_config` are updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.securityHealthAnalyticsSettings.customModules.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.projects.securityHealthAnalyticsSettings.effectiveCustomModules = {};

    /**
     * Retrieves an EffectiveSecurityHealthAnalyticsCustomModule.
     * @param {string} params.name - (Required) Required. Name of the effective custom module to get. Its format is `organizations/{organization}/securityHealthAnalyticsSettings/effectiveCustomModules/{customModule}`, `folders/{folder}/securityHealthAnalyticsSettings/effectiveCustomModules/{customModule}`, or `projects/{project}/securityHealthAnalyticsSettings/effectiveCustomModules/{customModule}`
     * @return {object} The API response object.
     */
    this.projects.securityHealthAnalyticsSettings.effectiveCustomModules.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Returns a list of all EffectiveSecurityHealthAnalyticsCustomModules for the given parent. This includes resident modules defined at the scope of the parent, and inherited modules, inherited from CRM ancestors.
     * @param {integer} params.pageSize - The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000.
     * @param {string} params.pageToken - The value returned by the last call indicating a continuation
     * @param {string} params.parent - (Required) Required. Name of parent to list effective custom modules. Its format is `organizations/{organization}/securityHealthAnalyticsSettings`, `folders/{folder}/securityHealthAnalyticsSettings`, or `projects/{project}/securityHealthAnalyticsSettings`
     * @return {object} The API response object.
     */
    this.projects.securityHealthAnalyticsSettings.effectiveCustomModules.list = (params) => this._makeRequest('v1/{+parent}/effectiveCustomModules', 'GET', params);

    this.projects.muteConfigs = {};

    /**
     * Creates a mute config.
     * @param {string} params.muteConfigId - Required. Unique identifier provided by the client within the parent scope. It must consist of only lowercase letters, numbers, and hyphens, must start with a letter, must end with either a letter or a number, and must be 63 characters or less.
     * @param {string} params.parent - (Required) Required. Resource name of the new mute configs's parent. Its format is `organizations/[organization_id]`, `folders/[folder_id]`, or `projects/[project_id]`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.muteConfigs.create = (params) => this._makeRequest('v1/{+parent}/muteConfigs', 'POST', params);

    /**
     * Deletes an existing mute config.
     * @param {string} params.name - (Required) Required. Name of the mute config to delete. Its format is `organizations/{organization}/muteConfigs/{config_id}`, `folders/{folder}/muteConfigs/{config_id}`, `projects/{project}/muteConfigs/{config_id}`, `organizations/{organization}/locations/global/muteConfigs/{config_id}`, `folders/{folder}/locations/global/muteConfigs/{config_id}`, or `projects/{project}/locations/global/muteConfigs/{config_id}`.
     * @return {object} The API response object.
     */
    this.projects.muteConfigs.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Gets a mute config.
     * @param {string} params.name - (Required) Required. Name of the mute config to retrieve. Its format is `organizations/{organization}/muteConfigs/{config_id}`, `folders/{folder}/muteConfigs/{config_id}`, `projects/{project}/muteConfigs/{config_id}`, `organizations/{organization}/locations/global/muteConfigs/{config_id}`, `folders/{folder}/locations/global/muteConfigs/{config_id}`, or `projects/{project}/locations/global/muteConfigs/{config_id}`.
     * @return {object} The API response object.
     */
    this.projects.muteConfigs.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists mute configs.
     * @param {integer} params.pageSize - The maximum number of configs to return. The service may return fewer than this value. If unspecified, at most 10 configs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - A page token, received from a previous `ListMuteConfigs` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListMuteConfigs` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent, which owns the collection of mute configs. Its format is `organizations/[organization_id]`, `folders/[folder_id]`, `projects/[project_id]`.
     * @return {object} The API response object.
     */
    this.projects.muteConfigs.list = (params) => this._makeRequest('v1/{+parent}/muteConfigs', 'GET', params);

    /**
     * Updates a mute config.
     * @param {string} params.name - (Required) This field will be ignored if provided on config creation. Format `organizations/{organization}/muteConfigs/{mute_config}` `folders/{folder}/muteConfigs/{mute_config}` `projects/{project}/muteConfigs/{mute_config}` `organizations/{organization}/locations/global/muteConfigs/{mute_config}` `folders/{folder}/locations/global/muteConfigs/{mute_config}` `projects/{project}/locations/global/muteConfigs/{mute_config}`
     * @param {string} params.updateMask - The list of fields to be updated. If empty all mutable fields will be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.muteConfigs.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.projects.notificationConfigs = {};

    /**
     * Creates a notification config.
     * @param {string} params.configId - Required. Unique identifier provided by the client within the parent scope. It must be between 1 and 128 characters and contain alphanumeric characters, underscores, or hyphens only.
     * @param {string} params.parent - (Required) Required. Resource name of the new notification config's parent. Its format is `organizations/[organization_id]`, `folders/[folder_id]`, or `projects/[project_id]`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.notificationConfigs.create = (params) => this._makeRequest('v1/{+parent}/notificationConfigs', 'POST', params);

    /**
     * Deletes a notification config.
     * @param {string} params.name - (Required) Required. Name of the notification config to delete. Its format is `organizations/[organization_id]/notificationConfigs/[config_id]`, `folders/[folder_id]/notificationConfigs/[config_id]`, or `projects/[project_id]/notificationConfigs/[config_id]`.
     * @return {object} The API response object.
     */
    this.projects.notificationConfigs.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Gets a notification config.
     * @param {string} params.name - (Required) Required. Name of the notification config to get. Its format is `organizations/[organization_id]/notificationConfigs/[config_id]`, `folders/[folder_id]/notificationConfigs/[config_id]`, or `projects/[project_id]/notificationConfigs/[config_id]`.
     * @return {object} The API response object.
     */
    this.projects.notificationConfigs.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists notification configs.
     * @param {integer} params.pageSize - The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000.
     * @param {string} params.pageToken - The value returned by the last `ListNotificationConfigsResponse`; indicates that this is a continuation of a prior `ListNotificationConfigs` call, and that the system should return the next page of data.
     * @param {string} params.parent - (Required) Required. The name of the parent in which to list the notification configurations. Its format is "organizations/[organization_id]", "folders/[folder_id]", or "projects/[project_id]".
     * @return {object} The API response object.
     */
    this.projects.notificationConfigs.list = (params) => this._makeRequest('v1/{+parent}/notificationConfigs', 'GET', params);

    /**
     * Updates a notification config. The following update fields are allowed: description, pubsub_topic, streaming_config.filter
     * @param {string} params.name - (Required) The relative resource name of this notification config. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Example: "organizations/{organization_id}/notificationConfigs/notify_public_bucket", "folders/{folder_id}/notificationConfigs/notify_public_bucket", or "projects/{project_id}/notificationConfigs/notify_public_bucket".
     * @param {string} params.updateMask - The FieldMask to use when updating the notification config. If empty all mutable fields will be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.notificationConfigs.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.projects.locations = {};

    this.projects.locations.muteConfigs = {};

    /**
     * Deletes an existing mute config.
     * @param {string} params.name - (Required) Required. Name of the mute config to delete. Its format is `organizations/{organization}/muteConfigs/{config_id}`, `folders/{folder}/muteConfigs/{config_id}`, `projects/{project}/muteConfigs/{config_id}`, `organizations/{organization}/locations/global/muteConfigs/{config_id}`, `folders/{folder}/locations/global/muteConfigs/{config_id}`, or `projects/{project}/locations/global/muteConfigs/{config_id}`.
     * @return {object} The API response object.
     */
    this.projects.locations.muteConfigs.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Gets a mute config.
     * @param {string} params.name - (Required) Required. Name of the mute config to retrieve. Its format is `organizations/{organization}/muteConfigs/{config_id}`, `folders/{folder}/muteConfigs/{config_id}`, `projects/{project}/muteConfigs/{config_id}`, `organizations/{organization}/locations/global/muteConfigs/{config_id}`, `folders/{folder}/locations/global/muteConfigs/{config_id}`, or `projects/{project}/locations/global/muteConfigs/{config_id}`.
     * @return {object} The API response object.
     */
    this.projects.locations.muteConfigs.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Updates a mute config.
     * @param {string} params.name - (Required) This field will be ignored if provided on config creation. Format `organizations/{organization}/muteConfigs/{mute_config}` `folders/{folder}/muteConfigs/{mute_config}` `projects/{project}/muteConfigs/{mute_config}` `organizations/{organization}/locations/global/muteConfigs/{mute_config}` `folders/{folder}/locations/global/muteConfigs/{mute_config}` `projects/{project}/locations/global/muteConfigs/{mute_config}`
     * @param {string} params.updateMask - The list of fields to be updated. If empty all mutable fields will be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.muteConfigs.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.projects.bigQueryExports = {};

    /**
     * Gets a BigQuery export.
     * @param {string} params.name - (Required) Required. Name of the BigQuery export to retrieve. Its format is `organizations/{organization}/bigQueryExports/{export_id}`, `folders/{folder}/bigQueryExports/{export_id}`, or `projects/{project}/bigQueryExports/{export_id}`
     * @return {object} The API response object.
     */
    this.projects.bigQueryExports.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a BigQuery export.
     * @param {string} params.bigQueryExportId - Required. Unique identifier provided by the client within the parent scope. It must consist of only lowercase letters, numbers, and hyphens, must start with a letter, must end with either a letter or a number, and must be 63 characters or less.
     * @param {string} params.parent - (Required) Required. The name of the parent resource of the new BigQuery export. Its format is `organizations/[organization_id]`, `folders/[folder_id]`, or `projects/[project_id]`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.bigQueryExports.create = (params) => this._makeRequest('v1/{+parent}/bigQueryExports', 'POST', params);

    /**
     * Deletes an existing BigQuery export.
     * @param {string} params.name - (Required) Required. The name of the BigQuery export to delete. Its format is `organizations/{organization}/bigQueryExports/{export_id}`, `folders/{folder}/bigQueryExports/{export_id}`, or `projects/{project}/bigQueryExports/{export_id}`
     * @return {object} The API response object.
     */
    this.projects.bigQueryExports.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Updates a BigQuery export.
     * @param {string} params.name - (Required) The relative resource name of this export. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name. Example format: "organizations/{organization_id}/bigQueryExports/{export_id}" Example format: "folders/{folder_id}/bigQueryExports/{export_id}" Example format: "projects/{project_id}/bigQueryExports/{export_id}" This field is provided in responses, and is ignored when provided in create requests.
     * @param {string} params.updateMask - The list of fields to be updated. If empty all mutable fields will be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.bigQueryExports.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Lists BigQuery exports. Note that when requesting BigQuery exports at a given level all exports under that level are also returned e.g. if requesting BigQuery exports under a folder, then all BigQuery exports immediately under the folder plus the ones created under the projects within the folder are returned.
     * @param {integer} params.pageSize - The maximum number of configs to return. The service may return fewer than this value. If unspecified, at most 10 configs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - A page token, received from a previous `ListBigQueryExports` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListBigQueryExports` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent, which owns the collection of BigQuery exports. Its format is `organizations/[organization_id]`, `folders/[folder_id]`, `projects/[project_id]`.
     * @return {object} The API response object.
     */
    this.projects.bigQueryExports.list = (params) => this._makeRequest('v1/{+parent}/bigQueryExports', 'GET', params);

    this.projects.assets = {};

    /**
     * Filters an organization's assets and groups them by their specified properties.
     * @param {string} params.parent - (Required) Required. The name of the parent to group the assets by. Its format is `organizations/[organization_id]`, `folders/[folder_id]`, or `projects/[project_id]`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.assets.group = (params) => this._makeRequest('v1/{+parent}/assets:group', 'POST', params);

    /**
     * Lists an organization's assets.
     * @param {string} params.compareDuration - When compare_duration is set, the ListAssetsResult's "state_change" attribute is updated to indicate whether the asset was added, removed, or remained present during the compare_duration period of time that precedes the read_time. This is the time between (read_time - compare_duration) and read_time. The state_change value is derived based on the presence of the asset at the two points in time. Intermediate state changes between the two times don't affect the result. For example, the results aren't affected if the asset is removed and re-created again. Possible "state_change" values when compare_duration is specified: * "ADDED": indicates that the asset was not present at the start of compare_duration, but present at read_time. * "REMOVED": indicates that the asset was present at the start of compare_duration, but not present at read_time. * "ACTIVE": indicates that the asset was present at both the start and the end of the time period defined by compare_duration and read_time. If compare_duration is not specified, then the only possible state_change is "UNUSED", which will be the state_change set for all assets present at read_time.
     * @param {string} params.fieldMask - A field mask to specify the ListAssetsResult fields to be listed in the response. An empty field mask will list all fields.
     * @param {string} params.filter - Expression that defines the filter to apply across assets. The expression is a list of zero or more restrictions combined via logical operators `AND` and `OR`. Parentheses are supported, and `OR` has higher precedence than `AND`. Restrictions have the form ` ` and may have a `-` character in front of them to indicate negation. The fields map to those defined in the Asset resource. Examples include: * name * security_center_properties.resource_name * resource_properties.a_property * security_marks.marks.marka The supported operators are: * `=` for all value types. * `>`, `<`, `>=`, `<=` for integer values. * `:`, meaning substring matching, for strings. The supported value types are: * string literals in quotes. * integer literals without quotes. * boolean literals `true` and `false` without quotes. The following are the allowed field and operator combinations: * name: `=` * update_time: `=`, `>`, `<`, `>=`, `<=` Usage: This should be milliseconds since epoch or an RFC3339 string. Examples: `update_time = "2019-06-10T16:07:18-07:00"` `update_time = 1560208038000` * create_time: `=`, `>`, `<`, `>=`, `<=` Usage: This should be milliseconds since epoch or an RFC3339 string. Examples: `create_time = "2019-06-10T16:07:18-07:00"` `create_time = 1560208038000` * iam_policy.policy_blob: `=`, `:` * resource_properties: `=`, `:`, `>`, `<`, `>=`, `<=` * security_marks.marks: `=`, `:` * security_center_properties.resource_name: `=`, `:` * security_center_properties.resource_display_name: `=`, `:` * security_center_properties.resource_type: `=`, `:` * security_center_properties.resource_parent: `=`, `:` * security_center_properties.resource_parent_display_name: `=`, `:` * security_center_properties.resource_project: `=`, `:` * security_center_properties.resource_project_display_name: `=`, `:` * security_center_properties.resource_owners: `=`, `:` For example, `resource_properties.size = 100` is a valid filter string. Use a partial match on the empty string to filter based on a property existing: `resource_properties.my_property : ""` Use a negated partial match on the empty string to filter based on a property not existing: `-resource_properties.my_property : ""`
     * @param {string} params.orderBy - Expression that defines what fields and order to use for sorting. The string value should follow SQL syntax: comma separated list of fields. For example: "name,resource_properties.a_property". The default sorting order is ascending. To specify descending order for a field, a suffix " desc" should be appended to the field name. For example: "name desc,resource_properties.a_property". Redundant space characters in the syntax are insignificant. "name desc,resource_properties.a_property" and " name desc , resource_properties.a_property " are equivalent. The following fields are supported: name update_time resource_properties security_marks.marks security_center_properties.resource_name security_center_properties.resource_display_name security_center_properties.resource_parent security_center_properties.resource_parent_display_name security_center_properties.resource_project security_center_properties.resource_project_display_name security_center_properties.resource_type
     * @param {integer} params.pageSize - The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000.
     * @param {string} params.pageToken - The value returned by the last `ListAssetsResponse`; indicates that this is a continuation of a prior `ListAssets` call, and that the system should return the next page of data.
     * @param {string} params.parent - (Required) Required. The name of the parent resource that contains the assets. The value that you can specify on parent depends on the method in which you specify parent. You can specify one of the following values: `organizations/[organization_id]`, `folders/[folder_id]`, or `projects/[project_id]`.
     * @param {string} params.readTime - Time used as a reference point when filtering assets. The filter is limited to assets existing at the supplied time and their values are those at that specific time. Absence of this field will default to the API's version of NOW.
     * @return {object} The API response object.
     */
    this.projects.assets.list = (params) => this._makeRequest('v1/{+parent}/assets', 'GET', params);

    /**
     * Updates security marks.
     * @param {string} params.name - (Required) The relative resource name of the SecurityMarks. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Examples: "organizations/{organization_id}/assets/{asset_id}/securityMarks" "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}/securityMarks".
     * @param {string} params.startTime - The time at which the updated SecurityMarks take effect. If not set uses current server time. Updates will be applied to the SecurityMarks that are active immediately preceding this time. Must be earlier or equal to the server time.
     * @param {string} params.updateMask - The FieldMask to use when updating the security marks resource. The field mask must not contain duplicate fields. If empty or set to "marks", all marks will be replaced. Individual marks can be updated using "marks.".
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.assets.updateSecurityMarks = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.projects.sources = {};

    /**
     * Lists all sources belonging to an organization.
     * @param {integer} params.pageSize - The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000.
     * @param {string} params.pageToken - The value returned by the last `ListSourcesResponse`; indicates that this is a continuation of a prior `ListSources` call, and that the system should return the next page of data.
     * @param {string} params.parent - (Required) Required. Resource name of the parent of sources to list. Its format should be `organizations/[organization_id]`, `folders/[folder_id]`, or `projects/[project_id]`.
     * @return {object} The API response object.
     */
    this.projects.sources.list = (params) => this._makeRequest('v1/{+parent}/sources', 'GET', params);

    this.projects.sources.findings = {};

    /**
     * Filters an organization or source's findings and groups them by their specified properties. To group across all sources provide a `-` as the source id. Example: /v1/organizations/{organization_id}/sources/-/findings, /v1/folders/{folder_id}/sources/-/findings, /v1/projects/{project_id}/sources/-/findings
     * @param {string} params.parent - (Required) Required. Name of the source to groupBy. Its format is `organizations/[organization_id]/sources/[source_id]`, `folders/[folder_id]/sources/[source_id]`, or `projects/[project_id]/sources/[source_id]`. To groupBy across all sources provide a source_id of `-`. For example: `organizations/{organization_id}/sources/-, folders/{folder_id}/sources/-`, or `projects/{project_id}/sources/-`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.sources.findings.group = (params) => this._makeRequest('v1/{+parent}/findings:group', 'POST', params);

    /**
     * Lists an organization or source's findings. To list across all sources provide a `-` as the source id. Example: /v1/organizations/{organization_id}/sources/-/findings
     * @param {string} params.compareDuration - When compare_duration is set, the ListFindingsResult's "state_change" attribute is updated to indicate whether the finding had its state changed, the finding's state remained unchanged, or if the finding was added in any state during the compare_duration period of time that precedes the read_time. This is the time between (read_time - compare_duration) and read_time. The state_change value is derived based on the presence and state of the finding at the two points in time. Intermediate state changes between the two times don't affect the result. For example, the results aren't affected if the finding is made inactive and then active again. Possible "state_change" values when compare_duration is specified: * "CHANGED": indicates that the finding was present and matched the given filter at the start of compare_duration, but changed its state at read_time. * "UNCHANGED": indicates that the finding was present and matched the given filter at the start of compare_duration and did not change state at read_time. * "ADDED": indicates that the finding did not match the given filter or was not present at the start of compare_duration, but was present at read_time. * "REMOVED": indicates that the finding was present and matched the filter at the start of compare_duration, but did not match the filter at read_time. If compare_duration is not specified, then the only possible state_change is "UNUSED", which will be the state_change set for all findings present at read_time.
     * @param {string} params.fieldMask - A field mask to specify the Finding fields to be listed in the response. An empty field mask will list all fields.
     * @param {string} params.filter - Expression that defines the filter to apply across findings. The expression is a list of one or more restrictions combined via logical operators `AND` and `OR`. Parentheses are supported, and `OR` has higher precedence than `AND`. Restrictions have the form ` ` and may have a `-` character in front of them to indicate negation. Examples include: * name * source_properties.a_property * security_marks.marks.marka The supported operators are: * `=` for all value types. * `>`, `<`, `>=`, `<=` for integer values. * `:`, meaning substring matching, for strings. The supported value types are: * string literals in quotes. * integer literals without quotes. * boolean literals `true` and `false` without quotes. The following field and operator combinations are supported: * name: `=` * parent: `=`, `:` * resource_name: `=`, `:` * state: `=`, `:` * category: `=`, `:` * external_uri: `=`, `:` * event_time: `=`, `>`, `<`, `>=`, `<=` Usage: This should be milliseconds since epoch or an RFC3339 string. Examples: `event_time = "2019-06-10T16:07:18-07:00"` `event_time = 1560208038000` * severity: `=`, `:` * workflow_state: `=`, `:` * security_marks.marks: `=`, `:` * source_properties: `=`, `:`, `>`, `<`, `>=`, `<=` For example, `source_properties.size = 100` is a valid filter string. Use a partial match on the empty string to filter based on a property existing: `source_properties.my_property : ""` Use a negated partial match on the empty string to filter based on a property not existing: `-source_properties.my_property : ""` * resource: * resource.name: `=`, `:` * resource.parent_name: `=`, `:` * resource.parent_display_name: `=`, `:` * resource.project_name: `=`, `:` * resource.project_display_name: `=`, `:` * resource.type: `=`, `:` * resource.folders.resource_folder: `=`, `:` * resource.display_name: `=`, `:`
     * @param {string} params.orderBy - Expression that defines what fields and order to use for sorting. The string value should follow SQL syntax: comma separated list of fields. For example: "name,resource_properties.a_property". The default sorting order is ascending. To specify descending order for a field, a suffix " desc" should be appended to the field name. For example: "name desc,source_properties.a_property". Redundant space characters in the syntax are insignificant. "name desc,source_properties.a_property" and " name desc , source_properties.a_property " are equivalent. The following fields are supported: name parent state category resource_name event_time source_properties security_marks.marks
     * @param {integer} params.pageSize - The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000.
     * @param {string} params.pageToken - The value returned by the last `ListFindingsResponse`; indicates that this is a continuation of a prior `ListFindings` call, and that the system should return the next page of data.
     * @param {string} params.parent - (Required) Required. Name of the source the findings belong to. Its format is `organizations/[organization_id]/sources/[source_id]`, `folders/[folder_id]/sources/[source_id]`, or `projects/[project_id]/sources/[source_id]`. To list across all sources provide a source_id of `-`. For example: `organizations/{organization_id}/sources/-`, `folders/{folder_id}/sources/-` or `projects/{projects_id}/sources/-`
     * @param {string} params.readTime - Time used as a reference point when filtering findings. The filter is limited to findings existing at the supplied time and their values are those at that specific time. Absence of this field will default to the API's version of NOW.
     * @return {object} The API response object.
     */
    this.projects.sources.findings.list = (params) => this._makeRequest('v1/{+parent}/findings', 'GET', params);

    /**
     * Updates the state of a finding.
     * @param {string} params.name - (Required) Required. The [relative resource name](https://cloud.google.com/apis/design/resource_names#relative_resource_name) of the finding. Example: `organizations/{organization_id}/sources/{source_id}/findings/{finding_id}`, `folders/{folder_id}/sources/{source_id}/findings/{finding_id}`, `projects/{project_id}/sources/{source_id}/findings/{finding_id}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.sources.findings.setState = (params) => this._makeRequest('v1/{+name}:setState', 'POST', params);

    /**
     * Updates the mute state of a finding.
     * @param {string} params.name - (Required) Required. The [relative resource name](https://cloud.google.com/apis/design/resource_names#relative_resource_name) of the finding. Example: `organizations/{organization_id}/sources/{source_id}/findings/{finding_id}`, `folders/{folder_id}/sources/{source_id}/findings/{finding_id}`, `projects/{project_id}/sources/{source_id}/findings/{finding_id}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.sources.findings.setMute = (params) => this._makeRequest('v1/{+name}:setMute', 'POST', params);

    /**
     * Creates or updates a finding. The corresponding source must exist for a finding creation to succeed.
     * @param {string} params.name - (Required) The [relative resource name](https://cloud.google.com/apis/design/resource_names#relative_resource_name) of the finding. Example: "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}", "folders/{folder_id}/sources/{source_id}/findings/{finding_id}", "projects/{project_id}/sources/{source_id}/findings/{finding_id}".
     * @param {string} params.updateMask - The FieldMask to use when updating the finding resource. This field should not be specified when creating a finding. When updating a finding, an empty mask is treated as updating all mutable fields and replacing source_properties. Individual source_properties can be added/updated by using "source_properties." in the field mask.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.sources.findings.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Updates security marks.
     * @param {string} params.name - (Required) The relative resource name of the SecurityMarks. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Examples: "organizations/{organization_id}/assets/{asset_id}/securityMarks" "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}/securityMarks".
     * @param {string} params.startTime - The time at which the updated SecurityMarks take effect. If not set uses current server time. Updates will be applied to the SecurityMarks that are active immediately preceding this time. Must be earlier or equal to the server time.
     * @param {string} params.updateMask - The FieldMask to use when updating the security marks resource. The field mask must not contain duplicate fields. If empty or set to "marks", all marks will be replaced. Individual marks can be updated using "marks.".
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.sources.findings.updateSecurityMarks = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.projects.sources.findings.externalSystems = {};

    /**
     * Updates external system. This is for a given finding.
     * @param {string} params.name - (Required) Full resource name of the external system, for example: "organizations/1234/sources/5678/findings/123456/externalSystems/jira", "folders/1234/sources/5678/findings/123456/externalSystems/jira", "projects/1234/sources/5678/findings/123456/externalSystems/jira"
     * @param {string} params.updateMask - The FieldMask to use when updating the external system resource. If empty all mutable fields will be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.sources.findings.externalSystems.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.projects.eventThreatDetectionSettings = {};

    /**
     * Validates the given Event Threat Detection custom module.
     * @param {string} params.parent - (Required) Required. Resource name of the parent to validate the Custom Module under. Its format is: * `organizations/{organization}/eventThreatDetectionSettings`. * `folders/{folder}/eventThreatDetectionSettings`. * `projects/{project}/eventThreatDetectionSettings`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.eventThreatDetectionSettings.validateCustomModule = (params) => this._makeRequest('v1/{+parent}:validateCustomModule', 'POST', params);

    this.projects.eventThreatDetectionSettings.customModules = {};

    /**
     * Creates a resident Event Threat Detection custom module at the scope of the given Resource Manager parent, and also creates inherited custom modules for all descendants of the given parent. These modules are enabled by default.
     * @param {string} params.parent - (Required) Required. The new custom module's parent. Its format is: * `organizations/{organization}/eventThreatDetectionSettings`. * `folders/{folder}/eventThreatDetectionSettings`. * `projects/{project}/eventThreatDetectionSettings`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.eventThreatDetectionSettings.customModules.create = (params) => this._makeRequest('v1/{+parent}/customModules', 'POST', params);

    /**
     * Deletes the specified Event Threat Detection custom module and all of its descendants in the Resource Manager hierarchy. This method is only supported for resident custom modules.
     * @param {string} params.name - (Required) Required. Name of the custom module to delete. Its format is: * `organizations/{organization}/eventThreatDetectionSettings/customModules/{module}`. * `folders/{folder}/eventThreatDetectionSettings/customModules/{module}`. * `projects/{project}/eventThreatDetectionSettings/customModules/{module}`.
     * @return {object} The API response object.
     */
    this.projects.eventThreatDetectionSettings.customModules.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Gets an Event Threat Detection custom module.
     * @param {string} params.name - (Required) Required. Name of the custom module to get. Its format is: * `organizations/{organization}/eventThreatDetectionSettings/customModules/{module}`. * `folders/{folder}/eventThreatDetectionSettings/customModules/{module}`. * `projects/{project}/eventThreatDetectionSettings/customModules/{module}`.
     * @return {object} The API response object.
     */
    this.projects.eventThreatDetectionSettings.customModules.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists all resident Event Threat Detection custom modules under the given Resource Manager parent and its descendants.
     * @param {integer} params.pageSize - The maximum number of modules to return. The service may return fewer than this value. If unspecified, at most 10 configs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - A page token, received from a previous `ListDescendantEventThreatDetectionCustomModules` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListDescendantEventThreatDetectionCustomModules` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. Name of the parent to list custom modules under. Its format is: * `organizations/{organization}/eventThreatDetectionSettings`. * `folders/{folder}/eventThreatDetectionSettings`. * `projects/{project}/eventThreatDetectionSettings`.
     * @return {object} The API response object.
     */
    this.projects.eventThreatDetectionSettings.customModules.listDescendant = (params) => this._makeRequest('v1/{+parent}/customModules:listDescendant', 'GET', params);

    /**
     * Lists all Event Threat Detection custom modules for the given Resource Manager parent. This includes resident modules defined at the scope of the parent along with modules inherited from ancestors.
     * @param {integer} params.pageSize - The maximum number of modules to return. The service may return fewer than this value. If unspecified, at most 10 configs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - A page token, received from a previous `ListEventThreatDetectionCustomModules` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListEventThreatDetectionCustomModules` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. Name of the parent to list custom modules under. Its format is: * `organizations/{organization}/eventThreatDetectionSettings`. * `folders/{folder}/eventThreatDetectionSettings`. * `projects/{project}/eventThreatDetectionSettings`.
     * @return {object} The API response object.
     */
    this.projects.eventThreatDetectionSettings.customModules.list = (params) => this._makeRequest('v1/{+parent}/customModules', 'GET', params);

    /**
     * Updates the Event Threat Detection custom module with the given name based on the given update mask. Updating the enablement state is supported for both resident and inherited modules (though resident modules cannot have an enablement state of "inherited"). Updating the display name or configuration of a module is supported for resident modules only. The type of a module cannot be changed.
     * @param {string} params.name - (Required) Immutable. The resource name of the Event Threat Detection custom module. Its format is: * `organizations/{organization}/eventThreatDetectionSettings/customModules/{module}`. * `folders/{folder}/eventThreatDetectionSettings/customModules/{module}`. * `projects/{project}/eventThreatDetectionSettings/customModules/{module}`.
     * @param {string} params.updateMask - The list of fields to be updated. If empty all mutable fields will be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.eventThreatDetectionSettings.customModules.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.projects.eventThreatDetectionSettings.effectiveCustomModules = {};

    /**
     * Gets an effective Event Threat Detection custom module at the given level.
     * @param {string} params.name - (Required) Required. The resource name of the effective Event Threat Detection custom module. Its format is: * `organizations/{organization}/eventThreatDetectionSettings/effectiveCustomModules/{module}`. * `folders/{folder}/eventThreatDetectionSettings/effectiveCustomModules/{module}`. * `projects/{project}/eventThreatDetectionSettings/effectiveCustomModules/{module}`.
     * @return {object} The API response object.
     */
    this.projects.eventThreatDetectionSettings.effectiveCustomModules.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists all effective Event Threat Detection custom modules for the given parent. This includes resident modules defined at the scope of the parent along with modules inherited from its ancestors.
     * @param {integer} params.pageSize - The maximum number of modules to return. The service may return fewer than this value. If unspecified, at most 10 configs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - A page token, received from a previous `ListEffectiveEventThreatDetectionCustomModules` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListEffectiveEventThreatDetectionCustomModules` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. Name of the parent to list custom modules for. Its format is: * `organizations/{organization}/eventThreatDetectionSettings`. * `folders/{folder}/eventThreatDetectionSettings`. * `projects/{project}/eventThreatDetectionSettings`.
     * @return {object} The API response object.
     */
    this.projects.eventThreatDetectionSettings.effectiveCustomModules.list = (params) => this._makeRequest('v1/{+parent}/effectiveCustomModules', 'GET', params);

    this.organizations = {};

    /**
     * Gets the settings for an organization.
     * @param {string} params.name - (Required) Required. Name of the organization to get organization settings for. Its format is `organizations/[organization_id]/organizationSettings`.
     * @return {object} The API response object.
     */
    this.organizations.getOrganizationSettings = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Updates an organization's settings.
     * @param {string} params.name - (Required) The relative resource name of the settings. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Example: "organizations/{organization_id}/organizationSettings".
     * @param {string} params.updateMask - The FieldMask to use when updating the settings resource. If empty all mutable fields will be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.updateOrganizationSettings = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.organizations.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.organizations.operations.list = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.organizations.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.organizations.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @return {object} The API response object.
     */
    this.organizations.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);

    this.organizations.findings = {};

    /**
     * Kicks off an LRO to bulk mute findings for a parent based on a filter. The parent can be either an organization, folder or project. The findings matched by the filter will be muted after the LRO is done.
     * @param {string} params.parent - (Required) Required. The parent, at which bulk action needs to be applied. Its format is `organizations/[organization_id]`, `folders/[folder_id]`, `projects/[project_id]`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.findings.bulkMute = (params) => this._makeRequest('v1/{+parent}/findings:bulkMute', 'POST', params);

    this.organizations.securityHealthAnalyticsSettings = {};

    this.organizations.securityHealthAnalyticsSettings.customModules = {};

    /**
     * Creates a resident SecurityHealthAnalyticsCustomModule at the scope of the given CRM parent, and also creates inherited SecurityHealthAnalyticsCustomModules for all CRM descendants of the given parent. These modules are enabled by default.
     * @param {string} params.parent - (Required) Required. Resource name of the new custom module's parent. Its format is `organizations/{organization}/securityHealthAnalyticsSettings`, `folders/{folder}/securityHealthAnalyticsSettings`, or `projects/{project}/securityHealthAnalyticsSettings`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.securityHealthAnalyticsSettings.customModules.create = (params) => this._makeRequest('v1/{+parent}/customModules', 'POST', params);

    /**
     * Deletes the specified SecurityHealthAnalyticsCustomModule and all of its descendants in the CRM hierarchy. This method is only supported for resident custom modules.
     * @param {string} params.name - (Required) Required. Name of the custom module to delete. Its format is `organizations/{organization}/securityHealthAnalyticsSettings/customModules/{customModule}`, `folders/{folder}/securityHealthAnalyticsSettings/customModules/{customModule}`, or `projects/{project}/securityHealthAnalyticsSettings/customModules/{customModule}`
     * @return {object} The API response object.
     */
    this.organizations.securityHealthAnalyticsSettings.customModules.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Retrieves a SecurityHealthAnalyticsCustomModule.
     * @param {string} params.name - (Required) Required. Name of the custom module to get. Its format is `organizations/{organization}/securityHealthAnalyticsSettings/customModules/{customModule}`, `folders/{folder}/securityHealthAnalyticsSettings/customModules/{customModule}`, or `projects/{project}/securityHealthAnalyticsSettings/customModules/{customModule}`
     * @return {object} The API response object.
     */
    this.organizations.securityHealthAnalyticsSettings.customModules.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Returns a list of all resident SecurityHealthAnalyticsCustomModules under the given CRM parent and all of the parent’s CRM descendants.
     * @param {integer} params.pageSize - The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000.
     * @param {string} params.pageToken - The value returned by the last call indicating a continuation
     * @param {string} params.parent - (Required) Required. Name of parent to list descendant custom modules. Its format is `organizations/{organization}/securityHealthAnalyticsSettings`, `folders/{folder}/securityHealthAnalyticsSettings`, or `projects/{project}/securityHealthAnalyticsSettings`
     * @return {object} The API response object.
     */
    this.organizations.securityHealthAnalyticsSettings.customModules.listDescendant = (params) => this._makeRequest('v1/{+parent}/customModules:listDescendant', 'GET', params);

    /**
     * Returns a list of all SecurityHealthAnalyticsCustomModules for the given parent. This includes resident modules defined at the scope of the parent, and inherited modules, inherited from CRM ancestors.
     * @param {integer} params.pageSize - The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000.
     * @param {string} params.pageToken - The value returned by the last call indicating a continuation
     * @param {string} params.parent - (Required) Required. Name of parent to list custom modules. Its format is `organizations/{organization}/securityHealthAnalyticsSettings`, `folders/{folder}/securityHealthAnalyticsSettings`, or `projects/{project}/securityHealthAnalyticsSettings`
     * @return {object} The API response object.
     */
    this.organizations.securityHealthAnalyticsSettings.customModules.list = (params) => this._makeRequest('v1/{+parent}/customModules', 'GET', params);

    /**
     * Simulates a given SecurityHealthAnalyticsCustomModule and Resource.
     * @param {string} params.parent - (Required) Required. The relative resource name of the organization, project, or folder. For more information about relative resource names, see [Relative Resource Name](https://cloud.google.com/apis/design/resource_names#relative_resource_name) Example: `organizations/{organization_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.securityHealthAnalyticsSettings.customModules.simulate = (params) => this._makeRequest('v1/{+parent}/customModules:simulate', 'POST', params);

    /**
     * Updates the SecurityHealthAnalyticsCustomModule under the given name based on the given update mask. Updating the enablement state is supported on both resident and inherited modules (though resident modules cannot have an enablement state of "inherited"). Updating the display name and custom config of a module is supported on resident modules only.
     * @param {string} params.name - (Required) Immutable. The resource name of the custom module. Its format is "organizations/{organization}/securityHealthAnalyticsSettings/customModules/{customModule}", or "folders/{folder}/securityHealthAnalyticsSettings/customModules/{customModule}", or "projects/{project}/securityHealthAnalyticsSettings/customModules/{customModule}" The id {customModule} is server-generated and is not user settable. It will be a numeric id containing 1-20 digits.
     * @param {string} params.updateMask - The list of fields to be updated. The only fields that can be updated are `enablement_state` and `custom_config`. If empty or set to the wildcard value `*`, both `enablement_state` and `custom_config` are updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.securityHealthAnalyticsSettings.customModules.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.organizations.securityHealthAnalyticsSettings.effectiveCustomModules = {};

    /**
     * Retrieves an EffectiveSecurityHealthAnalyticsCustomModule.
     * @param {string} params.name - (Required) Required. Name of the effective custom module to get. Its format is `organizations/{organization}/securityHealthAnalyticsSettings/effectiveCustomModules/{customModule}`, `folders/{folder}/securityHealthAnalyticsSettings/effectiveCustomModules/{customModule}`, or `projects/{project}/securityHealthAnalyticsSettings/effectiveCustomModules/{customModule}`
     * @return {object} The API response object.
     */
    this.organizations.securityHealthAnalyticsSettings.effectiveCustomModules.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Returns a list of all EffectiveSecurityHealthAnalyticsCustomModules for the given parent. This includes resident modules defined at the scope of the parent, and inherited modules, inherited from CRM ancestors.
     * @param {integer} params.pageSize - The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000.
     * @param {string} params.pageToken - The value returned by the last call indicating a continuation
     * @param {string} params.parent - (Required) Required. Name of parent to list effective custom modules. Its format is `organizations/{organization}/securityHealthAnalyticsSettings`, `folders/{folder}/securityHealthAnalyticsSettings`, or `projects/{project}/securityHealthAnalyticsSettings`
     * @return {object} The API response object.
     */
    this.organizations.securityHealthAnalyticsSettings.effectiveCustomModules.list = (params) => this._makeRequest('v1/{+parent}/effectiveCustomModules', 'GET', params);

    this.organizations.sources = {};

    /**
     * Creates a source.
     * @param {string} params.parent - (Required) Required. Resource name of the new source's parent. Its format should be `organizations/[organization_id]`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.sources.create = (params) => this._makeRequest('v1/{+parent}/sources', 'POST', params);

    /**
     * Gets the access control policy on the specified Source.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.sources.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'POST', params);

    /**
     * Gets a source.
     * @param {string} params.name - (Required) Required. Relative resource name of the source. Its format is `organizations/[organization_id]/source/[source_id]`.
     * @return {object} The API response object.
     */
    this.organizations.sources.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists all sources belonging to an organization.
     * @param {integer} params.pageSize - The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000.
     * @param {string} params.pageToken - The value returned by the last `ListSourcesResponse`; indicates that this is a continuation of a prior `ListSources` call, and that the system should return the next page of data.
     * @param {string} params.parent - (Required) Required. Resource name of the parent of sources to list. Its format should be `organizations/[organization_id]`, `folders/[folder_id]`, or `projects/[project_id]`.
     * @return {object} The API response object.
     */
    this.organizations.sources.list = (params) => this._makeRequest('v1/{+parent}/sources', 'GET', params);

    /**
     * Sets the access control policy on the specified Source.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.sources.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Returns the permissions that a caller has on the specified source.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.sources.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    /**
     * Updates a source.
     * @param {string} params.name - (Required) The relative resource name of this source. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Example: "organizations/{organization_id}/sources/{source_id}"
     * @param {string} params.updateMask - The FieldMask to use when updating the source resource. If empty all mutable fields will be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.sources.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.organizations.sources.findings = {};

    /**
     * Creates a finding. The corresponding source must exist for finding creation to succeed.
     * @param {string} params.findingId - Required. Unique identifier provided by the client within the parent scope. It must be alphanumeric and less than or equal to 32 characters and greater than 0 characters in length.
     * @param {string} params.parent - (Required) Required. Resource name of the new finding's parent. Its format should be `organizations/[organization_id]/sources/[source_id]`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.sources.findings.create = (params) => this._makeRequest('v1/{+parent}/findings', 'POST', params);

    /**
     * Filters an organization or source's findings and groups them by their specified properties. To group across all sources provide a `-` as the source id. Example: /v1/organizations/{organization_id}/sources/-/findings, /v1/folders/{folder_id}/sources/-/findings, /v1/projects/{project_id}/sources/-/findings
     * @param {string} params.parent - (Required) Required. Name of the source to groupBy. Its format is `organizations/[organization_id]/sources/[source_id]`, `folders/[folder_id]/sources/[source_id]`, or `projects/[project_id]/sources/[source_id]`. To groupBy across all sources provide a source_id of `-`. For example: `organizations/{organization_id}/sources/-, folders/{folder_id}/sources/-`, or `projects/{project_id}/sources/-`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.sources.findings.group = (params) => this._makeRequest('v1/{+parent}/findings:group', 'POST', params);

    /**
     * Lists an organization or source's findings. To list across all sources provide a `-` as the source id. Example: /v1/organizations/{organization_id}/sources/-/findings
     * @param {string} params.compareDuration - When compare_duration is set, the ListFindingsResult's "state_change" attribute is updated to indicate whether the finding had its state changed, the finding's state remained unchanged, or if the finding was added in any state during the compare_duration period of time that precedes the read_time. This is the time between (read_time - compare_duration) and read_time. The state_change value is derived based on the presence and state of the finding at the two points in time. Intermediate state changes between the two times don't affect the result. For example, the results aren't affected if the finding is made inactive and then active again. Possible "state_change" values when compare_duration is specified: * "CHANGED": indicates that the finding was present and matched the given filter at the start of compare_duration, but changed its state at read_time. * "UNCHANGED": indicates that the finding was present and matched the given filter at the start of compare_duration and did not change state at read_time. * "ADDED": indicates that the finding did not match the given filter or was not present at the start of compare_duration, but was present at read_time. * "REMOVED": indicates that the finding was present and matched the filter at the start of compare_duration, but did not match the filter at read_time. If compare_duration is not specified, then the only possible state_change is "UNUSED", which will be the state_change set for all findings present at read_time.
     * @param {string} params.fieldMask - A field mask to specify the Finding fields to be listed in the response. An empty field mask will list all fields.
     * @param {string} params.filter - Expression that defines the filter to apply across findings. The expression is a list of one or more restrictions combined via logical operators `AND` and `OR`. Parentheses are supported, and `OR` has higher precedence than `AND`. Restrictions have the form ` ` and may have a `-` character in front of them to indicate negation. Examples include: * name * source_properties.a_property * security_marks.marks.marka The supported operators are: * `=` for all value types. * `>`, `<`, `>=`, `<=` for integer values. * `:`, meaning substring matching, for strings. The supported value types are: * string literals in quotes. * integer literals without quotes. * boolean literals `true` and `false` without quotes. The following field and operator combinations are supported: * name: `=` * parent: `=`, `:` * resource_name: `=`, `:` * state: `=`, `:` * category: `=`, `:` * external_uri: `=`, `:` * event_time: `=`, `>`, `<`, `>=`, `<=` Usage: This should be milliseconds since epoch or an RFC3339 string. Examples: `event_time = "2019-06-10T16:07:18-07:00"` `event_time = 1560208038000` * severity: `=`, `:` * workflow_state: `=`, `:` * security_marks.marks: `=`, `:` * source_properties: `=`, `:`, `>`, `<`, `>=`, `<=` For example, `source_properties.size = 100` is a valid filter string. Use a partial match on the empty string to filter based on a property existing: `source_properties.my_property : ""` Use a negated partial match on the empty string to filter based on a property not existing: `-source_properties.my_property : ""` * resource: * resource.name: `=`, `:` * resource.parent_name: `=`, `:` * resource.parent_display_name: `=`, `:` * resource.project_name: `=`, `:` * resource.project_display_name: `=`, `:` * resource.type: `=`, `:` * resource.folders.resource_folder: `=`, `:` * resource.display_name: `=`, `:`
     * @param {string} params.orderBy - Expression that defines what fields and order to use for sorting. The string value should follow SQL syntax: comma separated list of fields. For example: "name,resource_properties.a_property". The default sorting order is ascending. To specify descending order for a field, a suffix " desc" should be appended to the field name. For example: "name desc,source_properties.a_property". Redundant space characters in the syntax are insignificant. "name desc,source_properties.a_property" and " name desc , source_properties.a_property " are equivalent. The following fields are supported: name parent state category resource_name event_time source_properties security_marks.marks
     * @param {integer} params.pageSize - The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000.
     * @param {string} params.pageToken - The value returned by the last `ListFindingsResponse`; indicates that this is a continuation of a prior `ListFindings` call, and that the system should return the next page of data.
     * @param {string} params.parent - (Required) Required. Name of the source the findings belong to. Its format is `organizations/[organization_id]/sources/[source_id]`, `folders/[folder_id]/sources/[source_id]`, or `projects/[project_id]/sources/[source_id]`. To list across all sources provide a source_id of `-`. For example: `organizations/{organization_id}/sources/-`, `folders/{folder_id}/sources/-` or `projects/{projects_id}/sources/-`
     * @param {string} params.readTime - Time used as a reference point when filtering findings. The filter is limited to findings existing at the supplied time and their values are those at that specific time. Absence of this field will default to the API's version of NOW.
     * @return {object} The API response object.
     */
    this.organizations.sources.findings.list = (params) => this._makeRequest('v1/{+parent}/findings', 'GET', params);

    /**
     * Updates the state of a finding.
     * @param {string} params.name - (Required) Required. The [relative resource name](https://cloud.google.com/apis/design/resource_names#relative_resource_name) of the finding. Example: `organizations/{organization_id}/sources/{source_id}/findings/{finding_id}`, `folders/{folder_id}/sources/{source_id}/findings/{finding_id}`, `projects/{project_id}/sources/{source_id}/findings/{finding_id}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.sources.findings.setState = (params) => this._makeRequest('v1/{+name}:setState', 'POST', params);

    /**
     * Updates the mute state of a finding.
     * @param {string} params.name - (Required) Required. The [relative resource name](https://cloud.google.com/apis/design/resource_names#relative_resource_name) of the finding. Example: `organizations/{organization_id}/sources/{source_id}/findings/{finding_id}`, `folders/{folder_id}/sources/{source_id}/findings/{finding_id}`, `projects/{project_id}/sources/{source_id}/findings/{finding_id}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.sources.findings.setMute = (params) => this._makeRequest('v1/{+name}:setMute', 'POST', params);

    /**
     * Creates or updates a finding. The corresponding source must exist for a finding creation to succeed.
     * @param {string} params.name - (Required) The [relative resource name](https://cloud.google.com/apis/design/resource_names#relative_resource_name) of the finding. Example: "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}", "folders/{folder_id}/sources/{source_id}/findings/{finding_id}", "projects/{project_id}/sources/{source_id}/findings/{finding_id}".
     * @param {string} params.updateMask - The FieldMask to use when updating the finding resource. This field should not be specified when creating a finding. When updating a finding, an empty mask is treated as updating all mutable fields and replacing source_properties. Individual source_properties can be added/updated by using "source_properties." in the field mask.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.sources.findings.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Updates security marks.
     * @param {string} params.name - (Required) The relative resource name of the SecurityMarks. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Examples: "organizations/{organization_id}/assets/{asset_id}/securityMarks" "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}/securityMarks".
     * @param {string} params.startTime - The time at which the updated SecurityMarks take effect. If not set uses current server time. Updates will be applied to the SecurityMarks that are active immediately preceding this time. Must be earlier or equal to the server time.
     * @param {string} params.updateMask - The FieldMask to use when updating the security marks resource. The field mask must not contain duplicate fields. If empty or set to "marks", all marks will be replaced. Individual marks can be updated using "marks.".
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.sources.findings.updateSecurityMarks = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.organizations.sources.findings.externalSystems = {};

    /**
     * Updates external system. This is for a given finding.
     * @param {string} params.name - (Required) Full resource name of the external system, for example: "organizations/1234/sources/5678/findings/123456/externalSystems/jira", "folders/1234/sources/5678/findings/123456/externalSystems/jira", "projects/1234/sources/5678/findings/123456/externalSystems/jira"
     * @param {string} params.updateMask - The FieldMask to use when updating the external system resource. If empty all mutable fields will be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.sources.findings.externalSystems.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.organizations.muteConfigs = {};

    /**
     * Creates a mute config.
     * @param {string} params.muteConfigId - Required. Unique identifier provided by the client within the parent scope. It must consist of only lowercase letters, numbers, and hyphens, must start with a letter, must end with either a letter or a number, and must be 63 characters or less.
     * @param {string} params.parent - (Required) Required. Resource name of the new mute configs's parent. Its format is `organizations/[organization_id]`, `folders/[folder_id]`, or `projects/[project_id]`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.muteConfigs.create = (params) => this._makeRequest('v1/{+parent}/muteConfigs', 'POST', params);

    /**
     * Deletes an existing mute config.
     * @param {string} params.name - (Required) Required. Name of the mute config to delete. Its format is `organizations/{organization}/muteConfigs/{config_id}`, `folders/{folder}/muteConfigs/{config_id}`, `projects/{project}/muteConfigs/{config_id}`, `organizations/{organization}/locations/global/muteConfigs/{config_id}`, `folders/{folder}/locations/global/muteConfigs/{config_id}`, or `projects/{project}/locations/global/muteConfigs/{config_id}`.
     * @return {object} The API response object.
     */
    this.organizations.muteConfigs.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Gets a mute config.
     * @param {string} params.name - (Required) Required. Name of the mute config to retrieve. Its format is `organizations/{organization}/muteConfigs/{config_id}`, `folders/{folder}/muteConfigs/{config_id}`, `projects/{project}/muteConfigs/{config_id}`, `organizations/{organization}/locations/global/muteConfigs/{config_id}`, `folders/{folder}/locations/global/muteConfigs/{config_id}`, or `projects/{project}/locations/global/muteConfigs/{config_id}`.
     * @return {object} The API response object.
     */
    this.organizations.muteConfigs.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists mute configs.
     * @param {integer} params.pageSize - The maximum number of configs to return. The service may return fewer than this value. If unspecified, at most 10 configs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - A page token, received from a previous `ListMuteConfigs` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListMuteConfigs` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent, which owns the collection of mute configs. Its format is `organizations/[organization_id]`, `folders/[folder_id]`, `projects/[project_id]`.
     * @return {object} The API response object.
     */
    this.organizations.muteConfigs.list = (params) => this._makeRequest('v1/{+parent}/muteConfigs', 'GET', params);

    /**
     * Updates a mute config.
     * @param {string} params.name - (Required) This field will be ignored if provided on config creation. Format `organizations/{organization}/muteConfigs/{mute_config}` `folders/{folder}/muteConfigs/{mute_config}` `projects/{project}/muteConfigs/{mute_config}` `organizations/{organization}/locations/global/muteConfigs/{mute_config}` `folders/{folder}/locations/global/muteConfigs/{mute_config}` `projects/{project}/locations/global/muteConfigs/{mute_config}`
     * @param {string} params.updateMask - The list of fields to be updated. If empty all mutable fields will be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.muteConfigs.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.organizations.notificationConfigs = {};

    /**
     * Creates a notification config.
     * @param {string} params.configId - Required. Unique identifier provided by the client within the parent scope. It must be between 1 and 128 characters and contain alphanumeric characters, underscores, or hyphens only.
     * @param {string} params.parent - (Required) Required. Resource name of the new notification config's parent. Its format is `organizations/[organization_id]`, `folders/[folder_id]`, or `projects/[project_id]`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.notificationConfigs.create = (params) => this._makeRequest('v1/{+parent}/notificationConfigs', 'POST', params);

    /**
     * Deletes a notification config.
     * @param {string} params.name - (Required) Required. Name of the notification config to delete. Its format is `organizations/[organization_id]/notificationConfigs/[config_id]`, `folders/[folder_id]/notificationConfigs/[config_id]`, or `projects/[project_id]/notificationConfigs/[config_id]`.
     * @return {object} The API response object.
     */
    this.organizations.notificationConfigs.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Gets a notification config.
     * @param {string} params.name - (Required) Required. Name of the notification config to get. Its format is `organizations/[organization_id]/notificationConfigs/[config_id]`, `folders/[folder_id]/notificationConfigs/[config_id]`, or `projects/[project_id]/notificationConfigs/[config_id]`.
     * @return {object} The API response object.
     */
    this.organizations.notificationConfigs.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists notification configs.
     * @param {integer} params.pageSize - The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000.
     * @param {string} params.pageToken - The value returned by the last `ListNotificationConfigsResponse`; indicates that this is a continuation of a prior `ListNotificationConfigs` call, and that the system should return the next page of data.
     * @param {string} params.parent - (Required) Required. The name of the parent in which to list the notification configurations. Its format is "organizations/[organization_id]", "folders/[folder_id]", or "projects/[project_id]".
     * @return {object} The API response object.
     */
    this.organizations.notificationConfigs.list = (params) => this._makeRequest('v1/{+parent}/notificationConfigs', 'GET', params);

    /**
     * Updates a notification config. The following update fields are allowed: description, pubsub_topic, streaming_config.filter
     * @param {string} params.name - (Required) The relative resource name of this notification config. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Example: "organizations/{organization_id}/notificationConfigs/notify_public_bucket", "folders/{folder_id}/notificationConfigs/notify_public_bucket", or "projects/{project_id}/notificationConfigs/notify_public_bucket".
     * @param {string} params.updateMask - The FieldMask to use when updating the notification config. If empty all mutable fields will be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.notificationConfigs.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.organizations.locations = {};

    this.organizations.locations.muteConfigs = {};

    /**
     * Deletes an existing mute config.
     * @param {string} params.name - (Required) Required. Name of the mute config to delete. Its format is `organizations/{organization}/muteConfigs/{config_id}`, `folders/{folder}/muteConfigs/{config_id}`, `projects/{project}/muteConfigs/{config_id}`, `organizations/{organization}/locations/global/muteConfigs/{config_id}`, `folders/{folder}/locations/global/muteConfigs/{config_id}`, or `projects/{project}/locations/global/muteConfigs/{config_id}`.
     * @return {object} The API response object.
     */
    this.organizations.locations.muteConfigs.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Gets a mute config.
     * @param {string} params.name - (Required) Required. Name of the mute config to retrieve. Its format is `organizations/{organization}/muteConfigs/{config_id}`, `folders/{folder}/muteConfigs/{config_id}`, `projects/{project}/muteConfigs/{config_id}`, `organizations/{organization}/locations/global/muteConfigs/{config_id}`, `folders/{folder}/locations/global/muteConfigs/{config_id}`, or `projects/{project}/locations/global/muteConfigs/{config_id}`.
     * @return {object} The API response object.
     */
    this.organizations.locations.muteConfigs.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Updates a mute config.
     * @param {string} params.name - (Required) This field will be ignored if provided on config creation. Format `organizations/{organization}/muteConfigs/{mute_config}` `folders/{folder}/muteConfigs/{mute_config}` `projects/{project}/muteConfigs/{mute_config}` `organizations/{organization}/locations/global/muteConfigs/{mute_config}` `folders/{folder}/locations/global/muteConfigs/{mute_config}` `projects/{project}/locations/global/muteConfigs/{mute_config}`
     * @param {string} params.updateMask - The list of fields to be updated. If empty all mutable fields will be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.locations.muteConfigs.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.organizations.simulations = {};

    /**
     * Get the simulation by name or the latest simulation for the given organization.
     * @param {string} params.name - (Required) Required. The organization name or simulation name of this simulation Valid format: `organizations/{organization}/simulations/latest` `organizations/{organization}/simulations/{simulation}`
     * @return {object} The API response object.
     */
    this.organizations.simulations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.organizations.simulations.valuedResources = {};

    /**
     * Get the valued resource by name
     * @param {string} params.name - (Required) Required. The name of this valued resource Valid format: `organizations/{organization}/simulations/{simulation}/valuedResources/{valued_resource}`
     * @return {object} The API response object.
     */
    this.organizations.simulations.valuedResources.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists the valued resources for a set of simulation results and filter.
     * @param {string} params.filter - The filter expression that filters the valued resources in the response. Supported fields: * `resource_value` supports = * `resource_type` supports =
     * @param {string} params.orderBy - Optional. The fields by which to order the valued resources response. Supported fields: * `exposed_score` * `resource_value` * `resource_type` * `resource` * `display_name` Values should be a comma separated list of fields. For example: `exposed_score,resource_value`. The default sorting order is descending. To specify ascending or descending order for a field, append a ` ASC` or a ` DESC` suffix, respectively; for example: `exposed_score DESC`.
     * @param {integer} params.pageSize - The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000.
     * @param {string} params.pageToken - The value returned by the last `ListValuedResourcesResponse`; indicates that this is a continuation of a prior `ListValuedResources` call, and that the system should return the next page of data.
     * @param {string} params.parent - (Required) Required. Name of parent to list valued resources. Valid formats: `organizations/{organization}`, `organizations/{organization}/simulations/{simulation}` `organizations/{organization}/simulations/{simulation}/attackExposureResults/{attack_exposure_result_v2}`
     * @return {object} The API response object.
     */
    this.organizations.simulations.valuedResources.list = (params) => this._makeRequest('v1/{+parent}/valuedResources', 'GET', params);

    this.organizations.simulations.valuedResources.attackPaths = {};

    /**
     * Lists the attack paths for a set of simulation results or valued resources and filter.
     * @param {string} params.filter - The filter expression that filters the attack path in the response. Supported fields: * `valued_resources` supports =
     * @param {integer} params.pageSize - The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000.
     * @param {string} params.pageToken - The value returned by the last `ListAttackPathsResponse`; indicates that this is a continuation of a prior `ListAttackPaths` call, and that the system should return the next page of data.
     * @param {string} params.parent - (Required) Required. Name of parent to list attack paths. Valid formats: `organizations/{organization}`, `organizations/{organization}/simulations/{simulation}` `organizations/{organization}/simulations/{simulation}/attackExposureResults/{attack_exposure_result_v2}` `organizations/{organization}/simulations/{simulation}/valuedResources/{valued_resource}`
     * @return {object} The API response object.
     */
    this.organizations.simulations.valuedResources.attackPaths.list = (params) => this._makeRequest('v1/{+parent}/attackPaths', 'GET', params);

    this.organizations.simulations.attackExposureResults = {};

    this.organizations.simulations.attackExposureResults.valuedResources = {};

    /**
     * Lists the valued resources for a set of simulation results and filter.
     * @param {string} params.filter - The filter expression that filters the valued resources in the response. Supported fields: * `resource_value` supports = * `resource_type` supports =
     * @param {string} params.orderBy - Optional. The fields by which to order the valued resources response. Supported fields: * `exposed_score` * `resource_value` * `resource_type` * `resource` * `display_name` Values should be a comma separated list of fields. For example: `exposed_score,resource_value`. The default sorting order is descending. To specify ascending or descending order for a field, append a ` ASC` or a ` DESC` suffix, respectively; for example: `exposed_score DESC`.
     * @param {integer} params.pageSize - The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000.
     * @param {string} params.pageToken - The value returned by the last `ListValuedResourcesResponse`; indicates that this is a continuation of a prior `ListValuedResources` call, and that the system should return the next page of data.
     * @param {string} params.parent - (Required) Required. Name of parent to list valued resources. Valid formats: `organizations/{organization}`, `organizations/{organization}/simulations/{simulation}` `organizations/{organization}/simulations/{simulation}/attackExposureResults/{attack_exposure_result_v2}`
     * @return {object} The API response object.
     */
    this.organizations.simulations.attackExposureResults.valuedResources.list = (params) => this._makeRequest('v1/{+parent}/valuedResources', 'GET', params);

    this.organizations.simulations.attackExposureResults.attackPaths = {};

    /**
     * Lists the attack paths for a set of simulation results or valued resources and filter.
     * @param {string} params.filter - The filter expression that filters the attack path in the response. Supported fields: * `valued_resources` supports =
     * @param {integer} params.pageSize - The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000.
     * @param {string} params.pageToken - The value returned by the last `ListAttackPathsResponse`; indicates that this is a continuation of a prior `ListAttackPaths` call, and that the system should return the next page of data.
     * @param {string} params.parent - (Required) Required. Name of parent to list attack paths. Valid formats: `organizations/{organization}`, `organizations/{organization}/simulations/{simulation}` `organizations/{organization}/simulations/{simulation}/attackExposureResults/{attack_exposure_result_v2}` `organizations/{organization}/simulations/{simulation}/valuedResources/{valued_resource}`
     * @return {object} The API response object.
     */
    this.organizations.simulations.attackExposureResults.attackPaths.list = (params) => this._makeRequest('v1/{+parent}/attackPaths', 'GET', params);

    this.organizations.simulations.attackPaths = {};

    /**
     * Lists the attack paths for a set of simulation results or valued resources and filter.
     * @param {string} params.filter - The filter expression that filters the attack path in the response. Supported fields: * `valued_resources` supports =
     * @param {integer} params.pageSize - The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000.
     * @param {string} params.pageToken - The value returned by the last `ListAttackPathsResponse`; indicates that this is a continuation of a prior `ListAttackPaths` call, and that the system should return the next page of data.
     * @param {string} params.parent - (Required) Required. Name of parent to list attack paths. Valid formats: `organizations/{organization}`, `organizations/{organization}/simulations/{simulation}` `organizations/{organization}/simulations/{simulation}/attackExposureResults/{attack_exposure_result_v2}` `organizations/{organization}/simulations/{simulation}/valuedResources/{valued_resource}`
     * @return {object} The API response object.
     */
    this.organizations.simulations.attackPaths.list = (params) => this._makeRequest('v1/{+parent}/attackPaths', 'GET', params);

    this.organizations.bigQueryExports = {};

    /**
     * Gets a BigQuery export.
     * @param {string} params.name - (Required) Required. Name of the BigQuery export to retrieve. Its format is `organizations/{organization}/bigQueryExports/{export_id}`, `folders/{folder}/bigQueryExports/{export_id}`, or `projects/{project}/bigQueryExports/{export_id}`
     * @return {object} The API response object.
     */
    this.organizations.bigQueryExports.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a BigQuery export.
     * @param {string} params.bigQueryExportId - Required. Unique identifier provided by the client within the parent scope. It must consist of only lowercase letters, numbers, and hyphens, must start with a letter, must end with either a letter or a number, and must be 63 characters or less.
     * @param {string} params.parent - (Required) Required. The name of the parent resource of the new BigQuery export. Its format is `organizations/[organization_id]`, `folders/[folder_id]`, or `projects/[project_id]`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.bigQueryExports.create = (params) => this._makeRequest('v1/{+parent}/bigQueryExports', 'POST', params);

    /**
     * Deletes an existing BigQuery export.
     * @param {string} params.name - (Required) Required. The name of the BigQuery export to delete. Its format is `organizations/{organization}/bigQueryExports/{export_id}`, `folders/{folder}/bigQueryExports/{export_id}`, or `projects/{project}/bigQueryExports/{export_id}`
     * @return {object} The API response object.
     */
    this.organizations.bigQueryExports.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Updates a BigQuery export.
     * @param {string} params.name - (Required) The relative resource name of this export. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name. Example format: "organizations/{organization_id}/bigQueryExports/{export_id}" Example format: "folders/{folder_id}/bigQueryExports/{export_id}" Example format: "projects/{project_id}/bigQueryExports/{export_id}" This field is provided in responses, and is ignored when provided in create requests.
     * @param {string} params.updateMask - The list of fields to be updated. If empty all mutable fields will be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.bigQueryExports.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Lists BigQuery exports. Note that when requesting BigQuery exports at a given level all exports under that level are also returned e.g. if requesting BigQuery exports under a folder, then all BigQuery exports immediately under the folder plus the ones created under the projects within the folder are returned.
     * @param {integer} params.pageSize - The maximum number of configs to return. The service may return fewer than this value. If unspecified, at most 10 configs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - A page token, received from a previous `ListBigQueryExports` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListBigQueryExports` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent, which owns the collection of BigQuery exports. Its format is `organizations/[organization_id]`, `folders/[folder_id]`, `projects/[project_id]`.
     * @return {object} The API response object.
     */
    this.organizations.bigQueryExports.list = (params) => this._makeRequest('v1/{+parent}/bigQueryExports', 'GET', params);

    this.organizations.assets = {};

    /**
     * Filters an organization's assets and groups them by their specified properties.
     * @param {string} params.parent - (Required) Required. The name of the parent to group the assets by. Its format is `organizations/[organization_id]`, `folders/[folder_id]`, or `projects/[project_id]`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.assets.group = (params) => this._makeRequest('v1/{+parent}/assets:group', 'POST', params);

    /**
     * Lists an organization's assets.
     * @param {string} params.compareDuration - When compare_duration is set, the ListAssetsResult's "state_change" attribute is updated to indicate whether the asset was added, removed, or remained present during the compare_duration period of time that precedes the read_time. This is the time between (read_time - compare_duration) and read_time. The state_change value is derived based on the presence of the asset at the two points in time. Intermediate state changes between the two times don't affect the result. For example, the results aren't affected if the asset is removed and re-created again. Possible "state_change" values when compare_duration is specified: * "ADDED": indicates that the asset was not present at the start of compare_duration, but present at read_time. * "REMOVED": indicates that the asset was present at the start of compare_duration, but not present at read_time. * "ACTIVE": indicates that the asset was present at both the start and the end of the time period defined by compare_duration and read_time. If compare_duration is not specified, then the only possible state_change is "UNUSED", which will be the state_change set for all assets present at read_time.
     * @param {string} params.fieldMask - A field mask to specify the ListAssetsResult fields to be listed in the response. An empty field mask will list all fields.
     * @param {string} params.filter - Expression that defines the filter to apply across assets. The expression is a list of zero or more restrictions combined via logical operators `AND` and `OR`. Parentheses are supported, and `OR` has higher precedence than `AND`. Restrictions have the form ` ` and may have a `-` character in front of them to indicate negation. The fields map to those defined in the Asset resource. Examples include: * name * security_center_properties.resource_name * resource_properties.a_property * security_marks.marks.marka The supported operators are: * `=` for all value types. * `>`, `<`, `>=`, `<=` for integer values. * `:`, meaning substring matching, for strings. The supported value types are: * string literals in quotes. * integer literals without quotes. * boolean literals `true` and `false` without quotes. The following are the allowed field and operator combinations: * name: `=` * update_time: `=`, `>`, `<`, `>=`, `<=` Usage: This should be milliseconds since epoch or an RFC3339 string. Examples: `update_time = "2019-06-10T16:07:18-07:00"` `update_time = 1560208038000` * create_time: `=`, `>`, `<`, `>=`, `<=` Usage: This should be milliseconds since epoch or an RFC3339 string. Examples: `create_time = "2019-06-10T16:07:18-07:00"` `create_time = 1560208038000` * iam_policy.policy_blob: `=`, `:` * resource_properties: `=`, `:`, `>`, `<`, `>=`, `<=` * security_marks.marks: `=`, `:` * security_center_properties.resource_name: `=`, `:` * security_center_properties.resource_display_name: `=`, `:` * security_center_properties.resource_type: `=`, `:` * security_center_properties.resource_parent: `=`, `:` * security_center_properties.resource_parent_display_name: `=`, `:` * security_center_properties.resource_project: `=`, `:` * security_center_properties.resource_project_display_name: `=`, `:` * security_center_properties.resource_owners: `=`, `:` For example, `resource_properties.size = 100` is a valid filter string. Use a partial match on the empty string to filter based on a property existing: `resource_properties.my_property : ""` Use a negated partial match on the empty string to filter based on a property not existing: `-resource_properties.my_property : ""`
     * @param {string} params.orderBy - Expression that defines what fields and order to use for sorting. The string value should follow SQL syntax: comma separated list of fields. For example: "name,resource_properties.a_property". The default sorting order is ascending. To specify descending order for a field, a suffix " desc" should be appended to the field name. For example: "name desc,resource_properties.a_property". Redundant space characters in the syntax are insignificant. "name desc,resource_properties.a_property" and " name desc , resource_properties.a_property " are equivalent. The following fields are supported: name update_time resource_properties security_marks.marks security_center_properties.resource_name security_center_properties.resource_display_name security_center_properties.resource_parent security_center_properties.resource_parent_display_name security_center_properties.resource_project security_center_properties.resource_project_display_name security_center_properties.resource_type
     * @param {integer} params.pageSize - The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000.
     * @param {string} params.pageToken - The value returned by the last `ListAssetsResponse`; indicates that this is a continuation of a prior `ListAssets` call, and that the system should return the next page of data.
     * @param {string} params.parent - (Required) Required. The name of the parent resource that contains the assets. The value that you can specify on parent depends on the method in which you specify parent. You can specify one of the following values: `organizations/[organization_id]`, `folders/[folder_id]`, or `projects/[project_id]`.
     * @param {string} params.readTime - Time used as a reference point when filtering assets. The filter is limited to assets existing at the supplied time and their values are those at that specific time. Absence of this field will default to the API's version of NOW.
     * @return {object} The API response object.
     */
    this.organizations.assets.list = (params) => this._makeRequest('v1/{+parent}/assets', 'GET', params);

    /**
     * Runs asset discovery. The discovery is tracked with a long-running operation. This API can only be called with limited frequency for an organization. If it is called too frequently the caller will receive a TOO_MANY_REQUESTS error.
     * @param {string} params.parent - (Required) Required. Name of the organization to run asset discovery for. Its format is `organizations/[organization_id]`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.assets.runDiscovery = (params) => this._makeRequest('v1/{+parent}/assets:runDiscovery', 'POST', params);

    /**
     * Updates security marks.
     * @param {string} params.name - (Required) The relative resource name of the SecurityMarks. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Examples: "organizations/{organization_id}/assets/{asset_id}/securityMarks" "organizations/{organization_id}/sources/{source_id}/findings/{finding_id}/securityMarks".
     * @param {string} params.startTime - The time at which the updated SecurityMarks take effect. If not set uses current server time. Updates will be applied to the SecurityMarks that are active immediately preceding this time. Must be earlier or equal to the server time.
     * @param {string} params.updateMask - The FieldMask to use when updating the security marks resource. The field mask must not contain duplicate fields. If empty or set to "marks", all marks will be replaced. Individual marks can be updated using "marks.".
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.assets.updateSecurityMarks = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.organizations.eventThreatDetectionSettings = {};

    /**
     * Validates the given Event Threat Detection custom module.
     * @param {string} params.parent - (Required) Required. Resource name of the parent to validate the Custom Module under. Its format is: * `organizations/{organization}/eventThreatDetectionSettings`. * `folders/{folder}/eventThreatDetectionSettings`. * `projects/{project}/eventThreatDetectionSettings`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.eventThreatDetectionSettings.validateCustomModule = (params) => this._makeRequest('v1/{+parent}:validateCustomModule', 'POST', params);

    this.organizations.eventThreatDetectionSettings.customModules = {};

    /**
     * Creates a resident Event Threat Detection custom module at the scope of the given Resource Manager parent, and also creates inherited custom modules for all descendants of the given parent. These modules are enabled by default.
     * @param {string} params.parent - (Required) Required. The new custom module's parent. Its format is: * `organizations/{organization}/eventThreatDetectionSettings`. * `folders/{folder}/eventThreatDetectionSettings`. * `projects/{project}/eventThreatDetectionSettings`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.eventThreatDetectionSettings.customModules.create = (params) => this._makeRequest('v1/{+parent}/customModules', 'POST', params);

    /**
     * Deletes the specified Event Threat Detection custom module and all of its descendants in the Resource Manager hierarchy. This method is only supported for resident custom modules.
     * @param {string} params.name - (Required) Required. Name of the custom module to delete. Its format is: * `organizations/{organization}/eventThreatDetectionSettings/customModules/{module}`. * `folders/{folder}/eventThreatDetectionSettings/customModules/{module}`. * `projects/{project}/eventThreatDetectionSettings/customModules/{module}`.
     * @return {object} The API response object.
     */
    this.organizations.eventThreatDetectionSettings.customModules.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Gets an Event Threat Detection custom module.
     * @param {string} params.name - (Required) Required. Name of the custom module to get. Its format is: * `organizations/{organization}/eventThreatDetectionSettings/customModules/{module}`. * `folders/{folder}/eventThreatDetectionSettings/customModules/{module}`. * `projects/{project}/eventThreatDetectionSettings/customModules/{module}`.
     * @return {object} The API response object.
     */
    this.organizations.eventThreatDetectionSettings.customModules.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists all resident Event Threat Detection custom modules under the given Resource Manager parent and its descendants.
     * @param {integer} params.pageSize - The maximum number of modules to return. The service may return fewer than this value. If unspecified, at most 10 configs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - A page token, received from a previous `ListDescendantEventThreatDetectionCustomModules` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListDescendantEventThreatDetectionCustomModules` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. Name of the parent to list custom modules under. Its format is: * `organizations/{organization}/eventThreatDetectionSettings`. * `folders/{folder}/eventThreatDetectionSettings`. * `projects/{project}/eventThreatDetectionSettings`.
     * @return {object} The API response object.
     */
    this.organizations.eventThreatDetectionSettings.customModules.listDescendant = (params) => this._makeRequest('v1/{+parent}/customModules:listDescendant', 'GET', params);

    /**
     * Lists all Event Threat Detection custom modules for the given Resource Manager parent. This includes resident modules defined at the scope of the parent along with modules inherited from ancestors.
     * @param {integer} params.pageSize - The maximum number of modules to return. The service may return fewer than this value. If unspecified, at most 10 configs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - A page token, received from a previous `ListEventThreatDetectionCustomModules` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListEventThreatDetectionCustomModules` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. Name of the parent to list custom modules under. Its format is: * `organizations/{organization}/eventThreatDetectionSettings`. * `folders/{folder}/eventThreatDetectionSettings`. * `projects/{project}/eventThreatDetectionSettings`.
     * @return {object} The API response object.
     */
    this.organizations.eventThreatDetectionSettings.customModules.list = (params) => this._makeRequest('v1/{+parent}/customModules', 'GET', params);

    /**
     * Updates the Event Threat Detection custom module with the given name based on the given update mask. Updating the enablement state is supported for both resident and inherited modules (though resident modules cannot have an enablement state of "inherited"). Updating the display name or configuration of a module is supported for resident modules only. The type of a module cannot be changed.
     * @param {string} params.name - (Required) Immutable. The resource name of the Event Threat Detection custom module. Its format is: * `organizations/{organization}/eventThreatDetectionSettings/customModules/{module}`. * `folders/{folder}/eventThreatDetectionSettings/customModules/{module}`. * `projects/{project}/eventThreatDetectionSettings/customModules/{module}`.
     * @param {string} params.updateMask - The list of fields to be updated. If empty all mutable fields will be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.eventThreatDetectionSettings.customModules.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.organizations.eventThreatDetectionSettings.effectiveCustomModules = {};

    /**
     * Gets an effective Event Threat Detection custom module at the given level.
     * @param {string} params.name - (Required) Required. The resource name of the effective Event Threat Detection custom module. Its format is: * `organizations/{organization}/eventThreatDetectionSettings/effectiveCustomModules/{module}`. * `folders/{folder}/eventThreatDetectionSettings/effectiveCustomModules/{module}`. * `projects/{project}/eventThreatDetectionSettings/effectiveCustomModules/{module}`.
     * @return {object} The API response object.
     */
    this.organizations.eventThreatDetectionSettings.effectiveCustomModules.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists all effective Event Threat Detection custom modules for the given parent. This includes resident modules defined at the scope of the parent along with modules inherited from its ancestors.
     * @param {integer} params.pageSize - The maximum number of modules to return. The service may return fewer than this value. If unspecified, at most 10 configs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - A page token, received from a previous `ListEffectiveEventThreatDetectionCustomModules` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListEffectiveEventThreatDetectionCustomModules` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. Name of the parent to list custom modules for. Its format is: * `organizations/{organization}/eventThreatDetectionSettings`. * `folders/{folder}/eventThreatDetectionSettings`. * `projects/{project}/eventThreatDetectionSettings`.
     * @return {object} The API response object.
     */
    this.organizations.eventThreatDetectionSettings.effectiveCustomModules.list = (params) => this._makeRequest('v1/{+parent}/effectiveCustomModules', 'GET', params);

    this.organizations.resourceValueConfigs = {};

    /**
     * Creates a ResourceValueConfig for an organization. Maps user's tags to difference resource values for use by the attack path simulation.
     * @param {string} params.parent - (Required) Required. Resource name of the new ResourceValueConfig's parent. The parent field in the CreateResourceValueConfigRequest messages must either be empty or match this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.resourceValueConfigs.batchCreate = (params) => this._makeRequest('v1/{+parent}/resourceValueConfigs:batchCreate', 'POST', params);

    /**
     * Deletes a ResourceValueConfig.
     * @param {string} params.name - (Required) Required. Name of the ResourceValueConfig to delete
     * @return {object} The API response object.
     */
    this.organizations.resourceValueConfigs.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Gets a ResourceValueConfig.
     * @param {string} params.name - (Required) Required. Name of the resource value config to retrieve. Its format is `organizations/{organization}/resourceValueConfigs/{config_id}`.
     * @return {object} The API response object.
     */
    this.organizations.resourceValueConfigs.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists all ResourceValueConfigs.
     * @param {integer} params.pageSize - The number of results to return. The service may return fewer than this value. If unspecified, at most 10 configs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - A page token, received from a previous `ListResourceValueConfigs` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListResourceValueConfigs` must match the call that provided the page token. page_size can be specified, and the new page_size will be used.
     * @param {string} params.parent - (Required) Required. The parent, which owns the collection of resource value configs. Its format is `organizations/[organization_id]`
     * @return {object} The API response object.
     */
    this.organizations.resourceValueConfigs.list = (params) => this._makeRequest('v1/{+parent}/resourceValueConfigs', 'GET', params);

    /**
     * Updates an existing ResourceValueConfigs with new rules.
     * @param {string} params.name - (Required) Name for the resource value configuration
     * @param {string} params.updateMask - The list of fields to be updated. If empty all mutable fields will be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.resourceValueConfigs.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.organizations.valuedResources = {};

    /**
     * Lists the valued resources for a set of simulation results and filter.
     * @param {string} params.filter - The filter expression that filters the valued resources in the response. Supported fields: * `resource_value` supports = * `resource_type` supports =
     * @param {string} params.orderBy - Optional. The fields by which to order the valued resources response. Supported fields: * `exposed_score` * `resource_value` * `resource_type` * `resource` * `display_name` Values should be a comma separated list of fields. For example: `exposed_score,resource_value`. The default sorting order is descending. To specify ascending or descending order for a field, append a ` ASC` or a ` DESC` suffix, respectively; for example: `exposed_score DESC`.
     * @param {integer} params.pageSize - The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000.
     * @param {string} params.pageToken - The value returned by the last `ListValuedResourcesResponse`; indicates that this is a continuation of a prior `ListValuedResources` call, and that the system should return the next page of data.
     * @param {string} params.parent - (Required) Required. Name of parent to list valued resources. Valid formats: `organizations/{organization}`, `organizations/{organization}/simulations/{simulation}` `organizations/{organization}/simulations/{simulation}/attackExposureResults/{attack_exposure_result_v2}`
     * @return {object} The API response object.
     */
    this.organizations.valuedResources.list = (params) => this._makeRequest('v1/{+parent}/valuedResources', 'GET', params);

    this.organizations.attackPaths = {};

    /**
     * Lists the attack paths for a set of simulation results or valued resources and filter.
     * @param {string} params.filter - The filter expression that filters the attack path in the response. Supported fields: * `valued_resources` supports =
     * @param {integer} params.pageSize - The maximum number of results to return in a single response. Default is 10, minimum is 1, maximum is 1000.
     * @param {string} params.pageToken - The value returned by the last `ListAttackPathsResponse`; indicates that this is a continuation of a prior `ListAttackPaths` call, and that the system should return the next page of data.
     * @param {string} params.parent - (Required) Required. Name of parent to list attack paths. Valid formats: `organizations/{organization}`, `organizations/{organization}/simulations/{simulation}` `organizations/{organization}/simulations/{simulation}/attackExposureResults/{attack_exposure_result_v2}` `organizations/{organization}/simulations/{simulation}/valuedResources/{valued_resource}`
     * @return {object} The API response object.
     */
    this.organizations.attackPaths.list = (params) => this._makeRequest('v1/{+parent}/attackPaths', 'GET', params);
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
