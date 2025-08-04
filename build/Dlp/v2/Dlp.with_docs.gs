
/**
 * Google Apps Script client library for the Sensitive Data Protection (DLP)
 * Documentation URL: https://cloud.google.com/sensitive-data-protection/docs/
 * @class
 */
class Dlp {
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
    this._rootUrl = 'https://dlp.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.content = {};

    /**
     * Finds potentially sensitive info in content. This method has limits on input size, processing time, and output size. When no InfoTypes or CustomInfoTypes are specified in this request, the system will automatically choose what detectors to run. By default this may be all types, but may change over time as detectors are updated. For how to guides, see https://cloud.google.com/sensitive-data-protection/docs/inspecting-images and https://cloud.google.com/sensitive-data-protection/docs/inspecting-text,
     * @param {string} params.parent - (Required) Parent resource name. The format of this value varies depending on whether you have [specified a processing location](https://cloud.google.com/sensitive-data-protection/docs/specifying-location): + Projects scope, location specified: `projects/{project_id}/locations/{location_id}` + Projects scope, no location specified (defaults to global): `projects/{project_id}` The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.content.inspect = (params) => this._makeRequest('v2/{+parent}/content:inspect', 'POST', params);

    /**
     * De-identifies potentially sensitive info from a ContentItem. This method has limits on input size and output size. See https://cloud.google.com/sensitive-data-protection/docs/deidentify-sensitive-data to learn more. When no InfoTypes or CustomInfoTypes are specified in this request, the system will automatically choose what detectors to run. By default this may be all types, but may change over time as detectors are updated.
     * @param {string} params.parent - (Required) Parent resource name. The format of this value varies depending on whether you have [specified a processing location](https://cloud.google.com/sensitive-data-protection/docs/specifying-location): + Projects scope, location specified: `projects/{project_id}/locations/{location_id}` + Projects scope, no location specified (defaults to global): `projects/{project_id}` The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.content.deidentify = (params) => this._makeRequest('v2/{+parent}/content:deidentify', 'POST', params);

    /**
     * Re-identifies content that has been de-identified. See https://cloud.google.com/sensitive-data-protection/docs/pseudonymization#re-identification_in_free_text_code_example to learn more.
     * @param {string} params.parent - (Required) Required. Parent resource name. The format of this value varies depending on whether you have [specified a processing location](https://cloud.google.com/sensitive-data-protection/docs/specifying-location): + Projects scope, location specified: `projects/{project_id}/locations/{location_id}` + Projects scope, no location specified (defaults to global): `projects/{project_id}` The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.content.reidentify = (params) => this._makeRequest('v2/{+parent}/content:reidentify', 'POST', params);

    this.projects.locations = {};

    this.projects.locations.content = {};

    /**
     * Finds potentially sensitive info in content. This method has limits on input size, processing time, and output size. When no InfoTypes or CustomInfoTypes are specified in this request, the system will automatically choose what detectors to run. By default this may be all types, but may change over time as detectors are updated. For how to guides, see https://cloud.google.com/sensitive-data-protection/docs/inspecting-images and https://cloud.google.com/sensitive-data-protection/docs/inspecting-text,
     * @param {string} params.parent - (Required) Parent resource name. The format of this value varies depending on whether you have [specified a processing location](https://cloud.google.com/sensitive-data-protection/docs/specifying-location): + Projects scope, location specified: `projects/{project_id}/locations/{location_id}` + Projects scope, no location specified (defaults to global): `projects/{project_id}` The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.content.inspect = (params) => this._makeRequest('v2/{+parent}/content:inspect', 'POST', params);

    /**
     * De-identifies potentially sensitive info from a ContentItem. This method has limits on input size and output size. See https://cloud.google.com/sensitive-data-protection/docs/deidentify-sensitive-data to learn more. When no InfoTypes or CustomInfoTypes are specified in this request, the system will automatically choose what detectors to run. By default this may be all types, but may change over time as detectors are updated.
     * @param {string} params.parent - (Required) Parent resource name. The format of this value varies depending on whether you have [specified a processing location](https://cloud.google.com/sensitive-data-protection/docs/specifying-location): + Projects scope, location specified: `projects/{project_id}/locations/{location_id}` + Projects scope, no location specified (defaults to global): `projects/{project_id}` The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.content.deidentify = (params) => this._makeRequest('v2/{+parent}/content:deidentify', 'POST', params);

    /**
     * Re-identifies content that has been de-identified. See https://cloud.google.com/sensitive-data-protection/docs/pseudonymization#re-identification_in_free_text_code_example to learn more.
     * @param {string} params.parent - (Required) Required. Parent resource name. The format of this value varies depending on whether you have [specified a processing location](https://cloud.google.com/sensitive-data-protection/docs/specifying-location): + Projects scope, location specified: `projects/{project_id}/locations/{location_id}` + Projects scope, no location specified (defaults to global): `projects/{project_id}` The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.content.reidentify = (params) => this._makeRequest('v2/{+parent}/content:reidentify', 'POST', params);

    this.projects.locations.image = {};

    /**
     * Redacts potentially sensitive info from an image. This method has limits on input size, processing time, and output size. See https://cloud.google.com/sensitive-data-protection/docs/redacting-sensitive-data-images to learn more. When no InfoTypes or CustomInfoTypes are specified in this request, the system will automatically choose what detectors to run. By default this may be all types, but may change over time as detectors are updated. Only the first frame of each multiframe image is redacted. Metadata and other frames are omitted in the response.
     * @param {string} params.parent - (Required) Parent resource name. The format of this value varies depending on whether you have [specified a processing location](https://cloud.google.com/sensitive-data-protection/docs/specifying-location): + Projects scope, location specified: `projects/{project_id}/locations/{location_id}` + Projects scope, no location specified (defaults to global): `projects/{project_id}` The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.image.redact = (params) => this._makeRequest('v2/{+parent}/image:redact', 'POST', params);

    this.projects.locations.infoTypes = {};

    /**
     * Returns a list of the sensitive information types that the DLP API supports. See https://cloud.google.com/sensitive-data-protection/docs/infotypes-reference to learn more.
     * @param {string} params.filter - filter to only return infoTypes supported by certain parts of the API. Defaults to supported_by=INSPECT.
     * @param {string} params.languageCode - BCP-47 language code for localized infoType friendly names. If omitted, or if localized strings are not available, en-US strings will be returned.
     * @param {string} params.locationId - Deprecated. This field has no effect.
     * @param {string} params.parent - (Required) The parent resource name. The format of this value is as follows: `locations/{location_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.infoTypes.list = (params) => this._makeRequest('v2/{+parent}/infoTypes', 'GET', params);

    this.projects.locations.inspectTemplates = {};

    /**
     * Creates an InspectTemplate for reusing frequently used configuration for inspecting content, images, and storage. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates to learn more.
     * @param {string} params.parent - (Required) Required. Parent resource name. The format of this value varies depending on the scope of the request (project or organization) and whether you have [specified a processing location](https://cloud.google.com/sensitive-data-protection/docs/specifying-location): + Projects scope, location specified: `projects/{project_id}/locations/{location_id}` + Projects scope, no location specified (defaults to global): `projects/{project_id}` + Organizations scope, location specified: `organizations/{org_id}/locations/{location_id}` + Organizations scope, no location specified (defaults to global): `organizations/{org_id}` The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.inspectTemplates.create = (params) => this._makeRequest('v2/{+parent}/inspectTemplates', 'POST', params);

    /**
     * Updates the InspectTemplate. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates to learn more.
     * @param {string} params.name - (Required) Required. Resource name of organization and inspectTemplate to be updated, for example `organizations/433245324/inspectTemplates/432452342` or projects/project-id/inspectTemplates/432452342.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.inspectTemplates.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    /**
     * Gets an InspectTemplate. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates to learn more.
     * @param {string} params.name - (Required) Required. Resource name of the organization and inspectTemplate to be read, for example `organizations/433245324/inspectTemplates/432452342` or projects/project-id/inspectTemplates/432452342.
     * @return {object} The API response object.
     */
    this.projects.locations.inspectTemplates.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Lists InspectTemplates. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates to learn more.
     * @param {string} params.locationId - Deprecated. This field has no effect.
     * @param {string} params.orderBy - Comma-separated list of fields to order by, followed by `asc` or `desc` postfix. This list is case insensitive. The default sorting order is ascending. Redundant space characters are insignificant. Example: `name asc,update_time, create_time desc` Supported fields are: - `create_time`: corresponds to the time the template was created. - `update_time`: corresponds to the time the template was last updated. - `name`: corresponds to the template's name. - `display_name`: corresponds to the template's display name.
     * @param {integer} params.pageSize - Size of the page. This value can be limited by the server. If zero server returns a page of max size 100.
     * @param {string} params.pageToken - Page token to continue retrieval. Comes from the previous call to `ListInspectTemplates`.
     * @param {string} params.parent - (Required) Required. Parent resource name. The format of this value varies depending on the scope of the request (project or organization) and whether you have [specified a processing location](https://cloud.google.com/sensitive-data-protection/docs/specifying-location): + Projects scope, location specified: `projects/{project_id}/locations/{location_id}` + Projects scope, no location specified (defaults to global): `projects/{project_id}` + Organizations scope, location specified: `organizations/{org_id}/locations/{location_id}` + Organizations scope, no location specified (defaults to global): `organizations/{org_id}` The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3
     * @return {object} The API response object.
     */
    this.projects.locations.inspectTemplates.list = (params) => this._makeRequest('v2/{+parent}/inspectTemplates', 'GET', params);

    /**
     * Deletes an InspectTemplate. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates to learn more.
     * @param {string} params.name - (Required) Required. Resource name of the organization and inspectTemplate to be deleted, for example `organizations/433245324/inspectTemplates/432452342` or projects/project-id/inspectTemplates/432452342.
     * @return {object} The API response object.
     */
    this.projects.locations.inspectTemplates.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.projects.locations.deidentifyTemplates = {};

    /**
     * Creates a DeidentifyTemplate for reusing frequently used configuration for de-identifying content, images, and storage. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates-deid to learn more.
     * @param {string} params.parent - (Required) Required. Parent resource name. The format of this value varies depending on the scope of the request (project or organization) and whether you have [specified a processing location](https://cloud.google.com/sensitive-data-protection/docs/specifying-location): + Projects scope, location specified: `projects/{project_id}/locations/{location_id}` + Projects scope, no location specified (defaults to global): `projects/{project_id}` + Organizations scope, location specified: `organizations/{org_id}/locations/{location_id}` + Organizations scope, no location specified (defaults to global): `organizations/{org_id}` The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.deidentifyTemplates.create = (params) => this._makeRequest('v2/{+parent}/deidentifyTemplates', 'POST', params);

    /**
     * Updates the DeidentifyTemplate. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates-deid to learn more.
     * @param {string} params.name - (Required) Required. Resource name of organization and deidentify template to be updated, for example `organizations/433245324/deidentifyTemplates/432452342` or projects/project-id/deidentifyTemplates/432452342.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.deidentifyTemplates.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    /**
     * Gets a DeidentifyTemplate. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates-deid to learn more.
     * @param {string} params.name - (Required) Required. Resource name of the organization and deidentify template to be read, for example `organizations/433245324/deidentifyTemplates/432452342` or projects/project-id/deidentifyTemplates/432452342.
     * @return {object} The API response object.
     */
    this.projects.locations.deidentifyTemplates.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Lists DeidentifyTemplates. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates-deid to learn more.
     * @param {string} params.locationId - Deprecated. This field has no effect.
     * @param {string} params.orderBy - Comma-separated list of fields to order by, followed by `asc` or `desc` postfix. This list is case insensitive. The default sorting order is ascending. Redundant space characters are insignificant. Example: `name asc,update_time, create_time desc` Supported fields are: - `create_time`: corresponds to the time the template was created. - `update_time`: corresponds to the time the template was last updated. - `name`: corresponds to the template's name. - `display_name`: corresponds to the template's display name.
     * @param {integer} params.pageSize - Size of the page. This value can be limited by the server. If zero server returns a page of max size 100.
     * @param {string} params.pageToken - Page token to continue retrieval. Comes from the previous call to `ListDeidentifyTemplates`.
     * @param {string} params.parent - (Required) Required. Parent resource name. The format of this value varies depending on the scope of the request (project or organization) and whether you have [specified a processing location](https://cloud.google.com/sensitive-data-protection/docs/specifying-location): + Projects scope, location specified: `projects/{project_id}/locations/{location_id}` + Projects scope, no location specified (defaults to global): `projects/{project_id}` + Organizations scope, location specified: `organizations/{org_id}/locations/{location_id}` + Organizations scope, no location specified (defaults to global): `organizations/{org_id}` The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3
     * @return {object} The API response object.
     */
    this.projects.locations.deidentifyTemplates.list = (params) => this._makeRequest('v2/{+parent}/deidentifyTemplates', 'GET', params);

    /**
     * Deletes a DeidentifyTemplate. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates-deid to learn more.
     * @param {string} params.name - (Required) Required. Resource name of the organization and deidentify template to be deleted, for example `organizations/433245324/deidentifyTemplates/432452342` or projects/project-id/deidentifyTemplates/432452342.
     * @return {object} The API response object.
     */
    this.projects.locations.deidentifyTemplates.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.projects.locations.jobTriggers = {};

    /**
     * Creates a job trigger to run DLP actions such as scanning storage for sensitive information on a set schedule. See https://cloud.google.com/sensitive-data-protection/docs/creating-job-triggers to learn more.
     * @param {string} params.parent - (Required) Required. Parent resource name. The format of this value varies depending on whether you have [specified a processing location](https://cloud.google.com/sensitive-data-protection/docs/specifying-location): + Projects scope, location specified: `projects/{project_id}/locations/{location_id}` + Projects scope, no location specified (defaults to global): `projects/{project_id}` The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.jobTriggers.create = (params) => this._makeRequest('v2/{+parent}/jobTriggers', 'POST', params);

    /**
     * Updates a job trigger. See https://cloud.google.com/sensitive-data-protection/docs/creating-job-triggers to learn more.
     * @param {string} params.name - (Required) Required. Resource name of the project and the triggeredJob, for example `projects/dlp-test-project/jobTriggers/53234423`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.jobTriggers.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    /**
     * Inspect hybrid content and store findings to a trigger. The inspection will be processed asynchronously. To review the findings monitor the jobs within the trigger.
     * @param {string} params.name - (Required) Required. Resource name of the trigger to execute a hybrid inspect on, for example `projects/dlp-test-project/jobTriggers/53234423`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.jobTriggers.hybridInspect = (params) => this._makeRequest('v2/{+name}:hybridInspect', 'POST', params);

    /**
     * Gets a job trigger. See https://cloud.google.com/sensitive-data-protection/docs/creating-job-triggers to learn more.
     * @param {string} params.name - (Required) Required. Resource name of the project and the triggeredJob, for example `projects/dlp-test-project/jobTriggers/53234423`.
     * @return {object} The API response object.
     */
    this.projects.locations.jobTriggers.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Lists job triggers. See https://cloud.google.com/sensitive-data-protection/docs/creating-job-triggers to learn more.
     * @param {string} params.filter - Allows filtering. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` or `OR` logical operators. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `{field} {operator} {value}`. * Supported fields/values for inspect triggers: - `status` - HEALTHY|PAUSED|CANCELLED - `inspected_storage` - DATASTORE|CLOUD_STORAGE|BIGQUERY - 'last_run_time` - RFC 3339 formatted timestamp, surrounded by quotation marks. Nanoseconds are ignored. - 'error_count' - Number of errors that have occurred while running. * The operator must be `=` or `!=` for status and inspected_storage. Examples: * inspected_storage = cloud_storage AND status = HEALTHY * inspected_storage = cloud_storage OR inspected_storage = bigquery * inspected_storage = cloud_storage AND (state = PAUSED OR state = HEALTHY) * last_run_time > \"2017-12-12T00:00:00+00:00\" The length of this field should be no more than 500 characters.
     * @param {string} params.locationId - Deprecated. This field has no effect.
     * @param {string} params.orderBy - Comma-separated list of triggeredJob fields to order by, followed by `asc` or `desc` postfix. This list is case insensitive. The default sorting order is ascending. Redundant space characters are insignificant. Example: `name asc,update_time, create_time desc` Supported fields are: - `create_time`: corresponds to the time the JobTrigger was created. - `update_time`: corresponds to the time the JobTrigger was last updated. - `last_run_time`: corresponds to the last time the JobTrigger ran. - `name`: corresponds to the JobTrigger's name. - `display_name`: corresponds to the JobTrigger's display name. - `status`: corresponds to JobTrigger's status.
     * @param {integer} params.pageSize - Size of the page. This value can be limited by a server.
     * @param {string} params.pageToken - Page token to continue retrieval. Comes from the previous call to ListJobTriggers. `order_by` field must not change for subsequent calls.
     * @param {string} params.parent - (Required) Required. Parent resource name. The format of this value varies depending on whether you have [specified a processing location](https://cloud.google.com/sensitive-data-protection/docs/specifying-location): + Projects scope, location specified: `projects/{project_id}/locations/{location_id}` + Projects scope, no location specified (defaults to global): `projects/{project_id}` The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3
     * @param {string} params.type - The type of jobs. Will use `DlpJobType.INSPECT` if not set.
     * @return {object} The API response object.
     */
    this.projects.locations.jobTriggers.list = (params) => this._makeRequest('v2/{+parent}/jobTriggers', 'GET', params);

    /**
     * Deletes a job trigger. See https://cloud.google.com/sensitive-data-protection/docs/creating-job-triggers to learn more.
     * @param {string} params.name - (Required) Required. Resource name of the project and the triggeredJob, for example `projects/dlp-test-project/jobTriggers/53234423`.
     * @return {object} The API response object.
     */
    this.projects.locations.jobTriggers.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    /**
     * Activate a job trigger. Causes the immediate execute of a trigger instead of waiting on the trigger event to occur.
     * @param {string} params.name - (Required) Required. Resource name of the trigger to activate, for example `projects/dlp-test-project/jobTriggers/53234423`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.jobTriggers.activate = (params) => this._makeRequest('v2/{+name}:activate', 'POST', params);

    this.projects.locations.discoveryConfigs = {};

    /**
     * Creates a config for discovery to scan and profile storage.
     * @param {string} params.parent - (Required) Required. Parent resource name. The format of this value varies depending on the scope of the request (project or organization): + Projects scope: `projects/{project_id}/locations/{location_id}` + Organizations scope: `organizations/{org_id}/locations/{location_id}` The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.discoveryConfigs.create = (params) => this._makeRequest('v2/{+parent}/discoveryConfigs', 'POST', params);

    /**
     * Updates a discovery configuration.
     * @param {string} params.name - (Required) Required. Resource name of the project and the configuration, for example `projects/dlp-test-project/discoveryConfigs/53234423`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.discoveryConfigs.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    /**
     * Gets a discovery configuration.
     * @param {string} params.name - (Required) Required. Resource name of the project and the configuration, for example `projects/dlp-test-project/discoveryConfigs/53234423`.
     * @return {object} The API response object.
     */
    this.projects.locations.discoveryConfigs.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Lists discovery configurations.
     * @param {string} params.orderBy - Comma-separated list of config fields to order by, followed by `asc` or `desc` postfix. This list is case insensitive. The default sorting order is ascending. Redundant space characters are insignificant. Example: `name asc,update_time, create_time desc` Supported fields are: - `last_run_time`: corresponds to the last time the DiscoveryConfig ran. - `name`: corresponds to the DiscoveryConfig's name. - `status`: corresponds to DiscoveryConfig's status.
     * @param {integer} params.pageSize - Size of the page. This value can be limited by a server.
     * @param {string} params.pageToken - Page token to continue retrieval. Comes from the previous call to ListDiscoveryConfigs. `order_by` field must not change for subsequent calls.
     * @param {string} params.parent - (Required) Required. Parent resource name. The format of this value is as follows: `projects/{project_id}/locations/{location_id}` The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3
     * @return {object} The API response object.
     */
    this.projects.locations.discoveryConfigs.list = (params) => this._makeRequest('v2/{+parent}/discoveryConfigs', 'GET', params);

    /**
     * Deletes a discovery configuration.
     * @param {string} params.name - (Required) Required. Resource name of the project and the config, for example `projects/dlp-test-project/discoveryConfigs/53234423`.
     * @return {object} The API response object.
     */
    this.projects.locations.discoveryConfigs.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.projects.locations.dlpJobs = {};

    /**
     * Creates a new job to inspect storage or calculate risk metrics. See https://cloud.google.com/sensitive-data-protection/docs/inspecting-storage and https://cloud.google.com/sensitive-data-protection/docs/compute-risk-analysis to learn more. When no InfoTypes or CustomInfoTypes are specified in inspect jobs, the system will automatically choose what detectors to run. By default this may be all types, but may change over time as detectors are updated.
     * @param {string} params.parent - (Required) Required. Parent resource name. The format of this value varies depending on whether you have [specified a processing location](https://cloud.google.com/sensitive-data-protection/docs/specifying-location): + Projects scope, location specified: `projects/{project_id}/locations/{location_id}` + Projects scope, no location specified (defaults to global): `projects/{project_id}` The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.dlpJobs.create = (params) => this._makeRequest('v2/{+parent}/dlpJobs', 'POST', params);

    /**
     * Lists DlpJobs that match the specified filter in the request. See https://cloud.google.com/sensitive-data-protection/docs/inspecting-storage and https://cloud.google.com/sensitive-data-protection/docs/compute-risk-analysis to learn more.
     * @param {string} params.filter - Allows filtering. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` or `OR` logical operators. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `{field} {operator} {value}`. * Supported fields/values for inspect jobs: - `state` - PENDING|RUNNING|CANCELED|FINISHED|FAILED - `inspected_storage` - DATASTORE|CLOUD_STORAGE|BIGQUERY - `trigger_name` - The name of the trigger that created the job. - 'end_time` - Corresponds to the time the job finished. - 'start_time` - Corresponds to the time the job finished. * Supported fields for risk analysis jobs: - `state` - RUNNING|CANCELED|FINISHED|FAILED - 'end_time` - Corresponds to the time the job finished. - 'start_time` - Corresponds to the time the job finished. * The operator must be `=` or `!=`. Examples: * inspected_storage = cloud_storage AND state = done * inspected_storage = cloud_storage OR inspected_storage = bigquery * inspected_storage = cloud_storage AND (state = done OR state = canceled) * end_time > \"2017-12-12T00:00:00+00:00\" The length of this field should be no more than 500 characters.
     * @param {string} params.locationId - Deprecated. This field has no effect.
     * @param {string} params.orderBy - Comma-separated list of fields to order by, followed by `asc` or `desc` postfix. This list is case insensitive. The default sorting order is ascending. Redundant space characters are insignificant. Example: `name asc, end_time asc, create_time desc` Supported fields are: - `create_time`: corresponds to the time the job was created. - `end_time`: corresponds to the time the job ended. - `name`: corresponds to the job's name. - `state`: corresponds to `state`
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @param {string} params.parent - (Required) Required. Parent resource name. The format of this value varies depending on whether you have [specified a processing location](https://cloud.google.com/sensitive-data-protection/docs/specifying-location): + Projects scope, location specified: `projects/{project_id}/locations/{location_id}` + Projects scope, no location specified (defaults to global): `projects/{project_id}` The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3
     * @param {string} params.type - The type of job. Defaults to `DlpJobType.INSPECT`
     * @return {object} The API response object.
     */
    this.projects.locations.dlpJobs.list = (params) => this._makeRequest('v2/{+parent}/dlpJobs', 'GET', params);

    /**
     * Gets the latest state of a long-running DlpJob. See https://cloud.google.com/sensitive-data-protection/docs/inspecting-storage and https://cloud.google.com/sensitive-data-protection/docs/compute-risk-analysis to learn more.
     * @param {string} params.name - (Required) Required. The name of the DlpJob resource.
     * @return {object} The API response object.
     */
    this.projects.locations.dlpJobs.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Deletes a long-running DlpJob. This method indicates that the client is no longer interested in the DlpJob result. The job will be canceled if possible. See https://cloud.google.com/sensitive-data-protection/docs/inspecting-storage and https://cloud.google.com/sensitive-data-protection/docs/compute-risk-analysis to learn more.
     * @param {string} params.name - (Required) Required. The name of the DlpJob resource to be deleted.
     * @return {object} The API response object.
     */
    this.projects.locations.dlpJobs.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    /**
     * Starts asynchronous cancellation on a long-running DlpJob. The server makes a best effort to cancel the DlpJob, but success is not guaranteed. See https://cloud.google.com/sensitive-data-protection/docs/inspecting-storage and https://cloud.google.com/sensitive-data-protection/docs/compute-risk-analysis to learn more.
     * @param {string} params.name - (Required) Required. The name of the DlpJob resource to be cancelled.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.dlpJobs.cancel = (params) => this._makeRequest('v2/{+name}:cancel', 'POST', params);

    /**
     * Inspect hybrid content and store findings to a job. To review the findings, inspect the job. Inspection will occur asynchronously.
     * @param {string} params.name - (Required) Required. Resource name of the job to execute a hybrid inspect on, for example `projects/dlp-test-project/dlpJob/53234423`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.dlpJobs.hybridInspect = (params) => this._makeRequest('v2/{+name}:hybridInspect', 'POST', params);

    /**
     * Finish a running hybrid DlpJob. Triggers the finalization steps and running of any enabled actions that have not yet run.
     * @param {string} params.name - (Required) Required. The name of the DlpJob resource to be finished.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.dlpJobs.finish = (params) => this._makeRequest('v2/{+name}:finish', 'POST', params);

    this.projects.locations.storedInfoTypes = {};

    /**
     * Creates a pre-built stored infoType to be used for inspection. See https://cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes to learn more.
     * @param {string} params.parent - (Required) Required. Parent resource name. The format of this value varies depending on the scope of the request (project or organization) and whether you have [specified a processing location](https://cloud.google.com/sensitive-data-protection/docs/specifying-location): + Projects scope, location specified: `projects/{project_id}/locations/{location_id}` + Projects scope, no location specified (defaults to global): `projects/{project_id}` + Organizations scope, location specified: `organizations/{org_id}/locations/{location_id}` + Organizations scope, no location specified (defaults to global): `organizations/{org_id}` The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.storedInfoTypes.create = (params) => this._makeRequest('v2/{+parent}/storedInfoTypes', 'POST', params);

    /**
     * Updates the stored infoType by creating a new version. The existing version will continue to be used until the new version is ready. See https://cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes to learn more.
     * @param {string} params.name - (Required) Required. Resource name of organization and storedInfoType to be updated, for example `organizations/433245324/storedInfoTypes/432452342` or projects/project-id/storedInfoTypes/432452342.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.storedInfoTypes.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    /**
     * Gets a stored infoType. See https://cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes to learn more.
     * @param {string} params.name - (Required) Required. Resource name of the organization and storedInfoType to be read, for example `organizations/433245324/storedInfoTypes/432452342` or projects/project-id/storedInfoTypes/432452342.
     * @return {object} The API response object.
     */
    this.projects.locations.storedInfoTypes.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Lists stored infoTypes. See https://cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes to learn more.
     * @param {string} params.locationId - Deprecated. This field has no effect.
     * @param {string} params.orderBy - Comma-separated list of fields to order by, followed by `asc` or `desc` postfix. This list is case insensitive. The default sorting order is ascending. Redundant space characters are insignificant. Example: `name asc, display_name, create_time desc` Supported fields are: - `create_time`: corresponds to the time the most recent version of the resource was created. - `state`: corresponds to the state of the resource. - `name`: corresponds to resource name. - `display_name`: corresponds to info type's display name.
     * @param {integer} params.pageSize - Size of the page. This value can be limited by the server. If zero server returns a page of max size 100.
     * @param {string} params.pageToken - Page token to continue retrieval. Comes from the previous call to `ListStoredInfoTypes`.
     * @param {string} params.parent - (Required) Required. Parent resource name. The format of this value varies depending on the scope of the request (project or organization) and whether you have [specified a processing location](https://cloud.google.com/sensitive-data-protection/docs/specifying-location): + Projects scope, location specified: `projects/{project_id}/locations/{location_id}` + Projects scope, no location specified (defaults to global): `projects/{project_id}` The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3
     * @return {object} The API response object.
     */
    this.projects.locations.storedInfoTypes.list = (params) => this._makeRequest('v2/{+parent}/storedInfoTypes', 'GET', params);

    /**
     * Deletes a stored infoType. See https://cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes to learn more.
     * @param {string} params.name - (Required) Required. Resource name of the organization and storedInfoType to be deleted, for example `organizations/433245324/storedInfoTypes/432452342` or projects/project-id/storedInfoTypes/432452342.
     * @return {object} The API response object.
     */
    this.projects.locations.storedInfoTypes.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.projects.locations.projectDataProfiles = {};

    /**
     * Lists project data profiles for an organization.
     * @param {string} params.filter - Allows filtering. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` or `OR` logical operators. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `{field} {operator} {value}`. * Supported fields/values: - `sensitivity_level` - HIGH|MODERATE|LOW - `data_risk_level` - HIGH|MODERATE|LOW - `status_code` - an RPC status code as defined in https://github.com/googleapis/googleapis/blob/master/google/rpc/code.proto * The operator must be `=` or `!=`. Examples: * `project_id = 12345 AND status_code = 1` * `project_id = 12345 AND sensitivity_level = HIGH` The length of this field should be no more than 500 characters.
     * @param {string} params.orderBy - Comma-separated list of fields to order by, followed by `asc` or `desc` postfix. This list is case insensitive. The default sorting order is ascending. Redundant space characters are insignificant. Only one order field at a time is allowed. Examples: * `project_id` * `sensitivity_level desc` Supported fields are: - `project_id`: Google Cloud project ID - `sensitivity_level`: How sensitive the data in a project is, at most. - `data_risk_level`: How much risk is associated with this data. - `profile_last_generated`: When the profile was last updated in epoch seconds.
     * @param {integer} params.pageSize - Size of the page. This value can be limited by the server. If zero, server returns a page of max size 100.
     * @param {string} params.pageToken - Page token to continue retrieval.
     * @param {string} params.parent - (Required) Required. organizations/{org_id}/locations/{loc_id}
     * @return {object} The API response object.
     */
    this.projects.locations.projectDataProfiles.list = (params) => this._makeRequest('v2/{+parent}/projectDataProfiles', 'GET', params);

    /**
     * Gets a project data profile.
     * @param {string} params.name - (Required) Required. Resource name, for example `organizations/12345/locations/us/projectDataProfiles/53234423`.
     * @return {object} The API response object.
     */
    this.projects.locations.projectDataProfiles.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    this.projects.locations.tableDataProfiles = {};

    /**
     * Lists table data profiles for an organization.
     * @param {string} params.filter - Allows filtering. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` or `OR` logical operators. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `{field} {operator} {value}`. * Supported fields/values: - `project_id` - The Google Cloud project ID. - `dataset_id` - The BigQuery dataset ID. - `table_id` - The ID of the BigQuery table. - `sensitivity_level` - HIGH|MODERATE|LOW - `data_risk_level` - HIGH|MODERATE|LOW - `resource_visibility`: PUBLIC|RESTRICTED - `status_code` - an RPC status code as defined in https://github.com/googleapis/googleapis/blob/master/google/rpc/code.proto * The operator must be `=` or `!=`. Examples: * `project_id = 12345 AND status_code = 1` * `project_id = 12345 AND sensitivity_level = HIGH` * `project_id = 12345 AND resource_visibility = PUBLIC` The length of this field should be no more than 500 characters.
     * @param {string} params.orderBy - Comma-separated list of fields to order by, followed by `asc` or `desc` postfix. This list is case insensitive. The default sorting order is ascending. Redundant space characters are insignificant. Only one order field at a time is allowed. Examples: * `project_id asc` * `table_id` * `sensitivity_level desc` Supported fields are: - `project_id`: The Google Cloud project ID. - `dataset_id`: The ID of a BigQuery dataset. - `table_id`: The ID of a BigQuery table. - `sensitivity_level`: How sensitive the data in a table is, at most. - `data_risk_level`: How much risk is associated with this data. - `profile_last_generated`: When the profile was last updated in epoch seconds. - `last_modified`: The last time the resource was modified. - `resource_visibility`: Visibility restriction for this resource. - `row_count`: Number of rows in this resource.
     * @param {integer} params.pageSize - Size of the page. This value can be limited by the server. If zero, server returns a page of max size 100.
     * @param {string} params.pageToken - Page token to continue retrieval.
     * @param {string} params.parent - (Required) Required. Resource name of the organization or project, for example `organizations/433245324/locations/europe` or `projects/project-id/locations/asia`.
     * @return {object} The API response object.
     */
    this.projects.locations.tableDataProfiles.list = (params) => this._makeRequest('v2/{+parent}/tableDataProfiles', 'GET', params);

    /**
     * Gets a table data profile.
     * @param {string} params.name - (Required) Required. Resource name, for example `organizations/12345/locations/us/tableDataProfiles/53234423`.
     * @return {object} The API response object.
     */
    this.projects.locations.tableDataProfiles.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Delete a TableDataProfile. Will not prevent the profile from being regenerated if the table is still included in a discovery configuration.
     * @param {string} params.name - (Required) Required. Resource name of the table data profile.
     * @return {object} The API response object.
     */
    this.projects.locations.tableDataProfiles.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.projects.locations.columnDataProfiles = {};

    /**
     * Lists column data profiles for an organization.
     * @param {string} params.filter - Allows filtering. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` or `OR` logical operators. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `{field} {operator} {value}`. * Supported fields/values: - `table_data_profile_name` - The name of the related table data profile. - `project_id` - The Google Cloud project ID. (REQUIRED) - `dataset_id` - The BigQuery dataset ID. (REQUIRED) - `table_id` - The BigQuery table ID. (REQUIRED) - `field_id` - The ID of the BigQuery field. - `info_type` - The infotype detected in the resource. - `sensitivity_level` - HIGH|MEDIUM|LOW - `data_risk_level`: How much risk is associated with this data. - `status_code` - an RPC status code as defined in https://github.com/googleapis/googleapis/blob/master/google/rpc/code.proto * The operator must be `=` for project_id, dataset_id, and table_id. Other filters also support `!=`. Examples: * project_id = 12345 AND status_code = 1 * project_id = 12345 AND sensitivity_level = HIGH * project_id = 12345 AND info_type = STREET_ADDRESS The length of this field should be no more than 500 characters.
     * @param {string} params.orderBy - Comma-separated list of fields to order by, followed by `asc` or `desc` postfix. This list is case insensitive. The default sorting order is ascending. Redundant space characters are insignificant. Only one order field at a time is allowed. Examples: * `project_id asc` * `table_id` * `sensitivity_level desc` Supported fields are: - `project_id`: The Google Cloud project ID. - `dataset_id`: The ID of a BigQuery dataset. - `table_id`: The ID of a BigQuery table. - `sensitivity_level`: How sensitive the data in a column is, at most. - `data_risk_level`: How much risk is associated with this data. - `profile_last_generated`: When the profile was last updated in epoch seconds.
     * @param {integer} params.pageSize - Size of the page. This value can be limited by the server. If zero, server returns a page of max size 100.
     * @param {string} params.pageToken - Page token to continue retrieval.
     * @param {string} params.parent - (Required) Required. Resource name of the organization or project, for example `organizations/433245324/locations/europe` or `projects/project-id/locations/asia`.
     * @return {object} The API response object.
     */
    this.projects.locations.columnDataProfiles.list = (params) => this._makeRequest('v2/{+parent}/columnDataProfiles', 'GET', params);

    /**
     * Gets a column data profile.
     * @param {string} params.name - (Required) Required. Resource name, for example `organizations/12345/locations/us/columnDataProfiles/53234423`.
     * @return {object} The API response object.
     */
    this.projects.locations.columnDataProfiles.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    this.projects.locations.fileStoreDataProfiles = {};

    /**
     * Lists file store data profiles for an organization.
     * @param {string} params.filter - Optional. Allows filtering. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` or `OR` logical operators. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `{field} {operator} {value}`. * Supported fields/values: - `project_id` - The Google Cloud project ID. - `account_id` - The AWS account ID. - `file_store_path` - The path like "gs://bucket". - `data_source_type` - The profile's data source type, like "google/storage/bucket". - `data_storage_location` - The location where the file store's data is stored, like "us-central1". - `sensitivity_level` - HIGH|MODERATE|LOW - `data_risk_level` - HIGH|MODERATE|LOW - `resource_visibility`: PUBLIC|RESTRICTED - `status_code` - an RPC status code as defined in https://github.com/googleapis/googleapis/blob/master/google/rpc/code.proto * The operator must be `=` or `!=`. Examples: * `project_id = 12345 AND status_code = 1` * `project_id = 12345 AND sensitivity_level = HIGH` * `project_id = 12345 AND resource_visibility = PUBLIC` * `file_store_path = "gs://mybucket"` The length of this field should be no more than 500 characters.
     * @param {string} params.orderBy - Optional. Comma-separated list of fields to order by, followed by `asc` or `desc` postfix. This list is case insensitive. The default sorting order is ascending. Redundant space characters are insignificant. Only one order field at a time is allowed. Examples: * `project_id asc` * `name` * `sensitivity_level desc` Supported fields are: - `project_id`: The Google Cloud project ID. - `sensitivity_level`: How sensitive the data in a table is, at most. - `data_risk_level`: How much risk is associated with this data. - `profile_last_generated`: When the profile was last updated in epoch seconds. - `last_modified`: The last time the resource was modified. - `resource_visibility`: Visibility restriction for this resource. - `name`: The name of the profile. - `create_time`: The time the file store was first created.
     * @param {integer} params.pageSize - Optional. Size of the page. This value can be limited by the server. If zero, server returns a page of max size 100.
     * @param {string} params.pageToken - Optional. Page token to continue retrieval.
     * @param {string} params.parent - (Required) Required. Resource name of the organization or project, for example `organizations/433245324/locations/europe` or `projects/project-id/locations/asia`.
     * @return {object} The API response object.
     */
    this.projects.locations.fileStoreDataProfiles.list = (params) => this._makeRequest('v2/{+parent}/fileStoreDataProfiles', 'GET', params);

    /**
     * Gets a file store data profile.
     * @param {string} params.name - (Required) Required. Resource name, for example `organizations/12345/locations/us/fileStoreDataProfiles/53234423`.
     * @return {object} The API response object.
     */
    this.projects.locations.fileStoreDataProfiles.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Delete a FileStoreDataProfile. Will not prevent the profile from being regenerated if the resource is still included in a discovery configuration.
     * @param {string} params.name - (Required) Required. Resource name of the file store data profile.
     * @return {object} The API response object.
     */
    this.projects.locations.fileStoreDataProfiles.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.projects.locations.connections = {};

    /**
     * Create a Connection to an external data source.
     * @param {string} params.parent - (Required) Required. Parent resource name. The format of this value varies depending on the scope of the request (project or organization): + Projects scope: `projects/{project_id}/locations/{location_id}` + Organizations scope: `organizations/{org_id}/locations/{location_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.connections.create = (params) => this._makeRequest('v2/{+parent}/connections', 'POST', params);

    /**
     * Get a Connection by name.
     * @param {string} params.name - (Required) Required. Resource name in the format: `projects/{project}/locations/{location}/connections/{connection}`.
     * @return {object} The API response object.
     */
    this.projects.locations.connections.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Lists Connections in a parent. Use SearchConnections to see all connections within an organization.
     * @param {string} params.filter - Optional. Supported field/value: `state` - MISSING|AVAILABLE|ERROR
     * @param {integer} params.pageSize - Optional. Number of results per page, max 1000.
     * @param {string} params.pageToken - Optional. Page token from a previous page to return the next set of results. If set, all other request fields must match the original request.
     * @param {string} params.parent - (Required) Required. Resource name of the organization or project, for example, `organizations/433245324/locations/europe` or `projects/project-id/locations/asia`.
     * @return {object} The API response object.
     */
    this.projects.locations.connections.list = (params) => this._makeRequest('v2/{+parent}/connections', 'GET', params);

    /**
     * Searches for Connections in a parent.
     * @param {string} params.filter - Optional. Supported field/value: - `state` - MISSING|AVAILABLE|ERROR
     * @param {integer} params.pageSize - Optional. Number of results per page, max 1000.
     * @param {string} params.pageToken - Optional. Page token from a previous page to return the next set of results. If set, all other request fields must match the original request.
     * @param {string} params.parent - (Required) Required. Resource name of the organization or project with a wildcard location, for example, `organizations/433245324/locations/-` or `projects/project-id/locations/-`.
     * @return {object} The API response object.
     */
    this.projects.locations.connections.search = (params) => this._makeRequest('v2/{+parent}/connections:search', 'GET', params);

    /**
     * Delete a Connection.
     * @param {string} params.name - (Required) Required. Resource name of the Connection to be deleted, in the format: `projects/{project}/locations/{location}/connections/{connection}`.
     * @return {object} The API response object.
     */
    this.projects.locations.connections.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    /**
     * Update a Connection.
     * @param {string} params.name - (Required) Required. Resource name in the format: `projects/{project}/locations/{location}/connections/{connection}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.connections.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    this.projects.image = {};

    /**
     * Redacts potentially sensitive info from an image. This method has limits on input size, processing time, and output size. See https://cloud.google.com/sensitive-data-protection/docs/redacting-sensitive-data-images to learn more. When no InfoTypes or CustomInfoTypes are specified in this request, the system will automatically choose what detectors to run. By default this may be all types, but may change over time as detectors are updated. Only the first frame of each multiframe image is redacted. Metadata and other frames are omitted in the response.
     * @param {string} params.parent - (Required) Parent resource name. The format of this value varies depending on whether you have [specified a processing location](https://cloud.google.com/sensitive-data-protection/docs/specifying-location): + Projects scope, location specified: `projects/{project_id}/locations/{location_id}` + Projects scope, no location specified (defaults to global): `projects/{project_id}` The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.image.redact = (params) => this._makeRequest('v2/{+parent}/image:redact', 'POST', params);

    this.projects.inspectTemplates = {};

    /**
     * Creates an InspectTemplate for reusing frequently used configuration for inspecting content, images, and storage. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates to learn more.
     * @param {string} params.parent - (Required) Required. Parent resource name. The format of this value varies depending on the scope of the request (project or organization) and whether you have [specified a processing location](https://cloud.google.com/sensitive-data-protection/docs/specifying-location): + Projects scope, location specified: `projects/{project_id}/locations/{location_id}` + Projects scope, no location specified (defaults to global): `projects/{project_id}` + Organizations scope, location specified: `organizations/{org_id}/locations/{location_id}` + Organizations scope, no location specified (defaults to global): `organizations/{org_id}` The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.inspectTemplates.create = (params) => this._makeRequest('v2/{+parent}/inspectTemplates', 'POST', params);

    /**
     * Updates the InspectTemplate. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates to learn more.
     * @param {string} params.name - (Required) Required. Resource name of organization and inspectTemplate to be updated, for example `organizations/433245324/inspectTemplates/432452342` or projects/project-id/inspectTemplates/432452342.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.inspectTemplates.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    /**
     * Gets an InspectTemplate. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates to learn more.
     * @param {string} params.name - (Required) Required. Resource name of the organization and inspectTemplate to be read, for example `organizations/433245324/inspectTemplates/432452342` or projects/project-id/inspectTemplates/432452342.
     * @return {object} The API response object.
     */
    this.projects.inspectTemplates.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Lists InspectTemplates. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates to learn more.
     * @param {string} params.locationId - Deprecated. This field has no effect.
     * @param {string} params.orderBy - Comma-separated list of fields to order by, followed by `asc` or `desc` postfix. This list is case insensitive. The default sorting order is ascending. Redundant space characters are insignificant. Example: `name asc,update_time, create_time desc` Supported fields are: - `create_time`: corresponds to the time the template was created. - `update_time`: corresponds to the time the template was last updated. - `name`: corresponds to the template's name. - `display_name`: corresponds to the template's display name.
     * @param {integer} params.pageSize - Size of the page. This value can be limited by the server. If zero server returns a page of max size 100.
     * @param {string} params.pageToken - Page token to continue retrieval. Comes from the previous call to `ListInspectTemplates`.
     * @param {string} params.parent - (Required) Required. Parent resource name. The format of this value varies depending on the scope of the request (project or organization) and whether you have [specified a processing location](https://cloud.google.com/sensitive-data-protection/docs/specifying-location): + Projects scope, location specified: `projects/{project_id}/locations/{location_id}` + Projects scope, no location specified (defaults to global): `projects/{project_id}` + Organizations scope, location specified: `organizations/{org_id}/locations/{location_id}` + Organizations scope, no location specified (defaults to global): `organizations/{org_id}` The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3
     * @return {object} The API response object.
     */
    this.projects.inspectTemplates.list = (params) => this._makeRequest('v2/{+parent}/inspectTemplates', 'GET', params);

    /**
     * Deletes an InspectTemplate. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates to learn more.
     * @param {string} params.name - (Required) Required. Resource name of the organization and inspectTemplate to be deleted, for example `organizations/433245324/inspectTemplates/432452342` or projects/project-id/inspectTemplates/432452342.
     * @return {object} The API response object.
     */
    this.projects.inspectTemplates.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.projects.deidentifyTemplates = {};

    /**
     * Creates a DeidentifyTemplate for reusing frequently used configuration for de-identifying content, images, and storage. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates-deid to learn more.
     * @param {string} params.parent - (Required) Required. Parent resource name. The format of this value varies depending on the scope of the request (project or organization) and whether you have [specified a processing location](https://cloud.google.com/sensitive-data-protection/docs/specifying-location): + Projects scope, location specified: `projects/{project_id}/locations/{location_id}` + Projects scope, no location specified (defaults to global): `projects/{project_id}` + Organizations scope, location specified: `organizations/{org_id}/locations/{location_id}` + Organizations scope, no location specified (defaults to global): `organizations/{org_id}` The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.deidentifyTemplates.create = (params) => this._makeRequest('v2/{+parent}/deidentifyTemplates', 'POST', params);

    /**
     * Updates the DeidentifyTemplate. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates-deid to learn more.
     * @param {string} params.name - (Required) Required. Resource name of organization and deidentify template to be updated, for example `organizations/433245324/deidentifyTemplates/432452342` or projects/project-id/deidentifyTemplates/432452342.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.deidentifyTemplates.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    /**
     * Gets a DeidentifyTemplate. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates-deid to learn more.
     * @param {string} params.name - (Required) Required. Resource name of the organization and deidentify template to be read, for example `organizations/433245324/deidentifyTemplates/432452342` or projects/project-id/deidentifyTemplates/432452342.
     * @return {object} The API response object.
     */
    this.projects.deidentifyTemplates.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Lists DeidentifyTemplates. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates-deid to learn more.
     * @param {string} params.locationId - Deprecated. This field has no effect.
     * @param {string} params.orderBy - Comma-separated list of fields to order by, followed by `asc` or `desc` postfix. This list is case insensitive. The default sorting order is ascending. Redundant space characters are insignificant. Example: `name asc,update_time, create_time desc` Supported fields are: - `create_time`: corresponds to the time the template was created. - `update_time`: corresponds to the time the template was last updated. - `name`: corresponds to the template's name. - `display_name`: corresponds to the template's display name.
     * @param {integer} params.pageSize - Size of the page. This value can be limited by the server. If zero server returns a page of max size 100.
     * @param {string} params.pageToken - Page token to continue retrieval. Comes from the previous call to `ListDeidentifyTemplates`.
     * @param {string} params.parent - (Required) Required. Parent resource name. The format of this value varies depending on the scope of the request (project or organization) and whether you have [specified a processing location](https://cloud.google.com/sensitive-data-protection/docs/specifying-location): + Projects scope, location specified: `projects/{project_id}/locations/{location_id}` + Projects scope, no location specified (defaults to global): `projects/{project_id}` + Organizations scope, location specified: `organizations/{org_id}/locations/{location_id}` + Organizations scope, no location specified (defaults to global): `organizations/{org_id}` The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3
     * @return {object} The API response object.
     */
    this.projects.deidentifyTemplates.list = (params) => this._makeRequest('v2/{+parent}/deidentifyTemplates', 'GET', params);

    /**
     * Deletes a DeidentifyTemplate. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates-deid to learn more.
     * @param {string} params.name - (Required) Required. Resource name of the organization and deidentify template to be deleted, for example `organizations/433245324/deidentifyTemplates/432452342` or projects/project-id/deidentifyTemplates/432452342.
     * @return {object} The API response object.
     */
    this.projects.deidentifyTemplates.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.projects.jobTriggers = {};

    /**
     * Creates a job trigger to run DLP actions such as scanning storage for sensitive information on a set schedule. See https://cloud.google.com/sensitive-data-protection/docs/creating-job-triggers to learn more.
     * @param {string} params.parent - (Required) Required. Parent resource name. The format of this value varies depending on whether you have [specified a processing location](https://cloud.google.com/sensitive-data-protection/docs/specifying-location): + Projects scope, location specified: `projects/{project_id}/locations/{location_id}` + Projects scope, no location specified (defaults to global): `projects/{project_id}` The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.jobTriggers.create = (params) => this._makeRequest('v2/{+parent}/jobTriggers', 'POST', params);

    /**
     * Updates a job trigger. See https://cloud.google.com/sensitive-data-protection/docs/creating-job-triggers to learn more.
     * @param {string} params.name - (Required) Required. Resource name of the project and the triggeredJob, for example `projects/dlp-test-project/jobTriggers/53234423`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.jobTriggers.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    /**
     * Gets a job trigger. See https://cloud.google.com/sensitive-data-protection/docs/creating-job-triggers to learn more.
     * @param {string} params.name - (Required) Required. Resource name of the project and the triggeredJob, for example `projects/dlp-test-project/jobTriggers/53234423`.
     * @return {object} The API response object.
     */
    this.projects.jobTriggers.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Lists job triggers. See https://cloud.google.com/sensitive-data-protection/docs/creating-job-triggers to learn more.
     * @param {string} params.filter - Allows filtering. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` or `OR` logical operators. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `{field} {operator} {value}`. * Supported fields/values for inspect triggers: - `status` - HEALTHY|PAUSED|CANCELLED - `inspected_storage` - DATASTORE|CLOUD_STORAGE|BIGQUERY - 'last_run_time` - RFC 3339 formatted timestamp, surrounded by quotation marks. Nanoseconds are ignored. - 'error_count' - Number of errors that have occurred while running. * The operator must be `=` or `!=` for status and inspected_storage. Examples: * inspected_storage = cloud_storage AND status = HEALTHY * inspected_storage = cloud_storage OR inspected_storage = bigquery * inspected_storage = cloud_storage AND (state = PAUSED OR state = HEALTHY) * last_run_time > \"2017-12-12T00:00:00+00:00\" The length of this field should be no more than 500 characters.
     * @param {string} params.locationId - Deprecated. This field has no effect.
     * @param {string} params.orderBy - Comma-separated list of triggeredJob fields to order by, followed by `asc` or `desc` postfix. This list is case insensitive. The default sorting order is ascending. Redundant space characters are insignificant. Example: `name asc,update_time, create_time desc` Supported fields are: - `create_time`: corresponds to the time the JobTrigger was created. - `update_time`: corresponds to the time the JobTrigger was last updated. - `last_run_time`: corresponds to the last time the JobTrigger ran. - `name`: corresponds to the JobTrigger's name. - `display_name`: corresponds to the JobTrigger's display name. - `status`: corresponds to JobTrigger's status.
     * @param {integer} params.pageSize - Size of the page. This value can be limited by a server.
     * @param {string} params.pageToken - Page token to continue retrieval. Comes from the previous call to ListJobTriggers. `order_by` field must not change for subsequent calls.
     * @param {string} params.parent - (Required) Required. Parent resource name. The format of this value varies depending on whether you have [specified a processing location](https://cloud.google.com/sensitive-data-protection/docs/specifying-location): + Projects scope, location specified: `projects/{project_id}/locations/{location_id}` + Projects scope, no location specified (defaults to global): `projects/{project_id}` The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3
     * @param {string} params.type - The type of jobs. Will use `DlpJobType.INSPECT` if not set.
     * @return {object} The API response object.
     */
    this.projects.jobTriggers.list = (params) => this._makeRequest('v2/{+parent}/jobTriggers', 'GET', params);

    /**
     * Deletes a job trigger. See https://cloud.google.com/sensitive-data-protection/docs/creating-job-triggers to learn more.
     * @param {string} params.name - (Required) Required. Resource name of the project and the triggeredJob, for example `projects/dlp-test-project/jobTriggers/53234423`.
     * @return {object} The API response object.
     */
    this.projects.jobTriggers.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    /**
     * Activate a job trigger. Causes the immediate execute of a trigger instead of waiting on the trigger event to occur.
     * @param {string} params.name - (Required) Required. Resource name of the trigger to activate, for example `projects/dlp-test-project/jobTriggers/53234423`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.jobTriggers.activate = (params) => this._makeRequest('v2/{+name}:activate', 'POST', params);

    this.projects.dlpJobs = {};

    /**
     * Creates a new job to inspect storage or calculate risk metrics. See https://cloud.google.com/sensitive-data-protection/docs/inspecting-storage and https://cloud.google.com/sensitive-data-protection/docs/compute-risk-analysis to learn more. When no InfoTypes or CustomInfoTypes are specified in inspect jobs, the system will automatically choose what detectors to run. By default this may be all types, but may change over time as detectors are updated.
     * @param {string} params.parent - (Required) Required. Parent resource name. The format of this value varies depending on whether you have [specified a processing location](https://cloud.google.com/sensitive-data-protection/docs/specifying-location): + Projects scope, location specified: `projects/{project_id}/locations/{location_id}` + Projects scope, no location specified (defaults to global): `projects/{project_id}` The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.dlpJobs.create = (params) => this._makeRequest('v2/{+parent}/dlpJobs', 'POST', params);

    /**
     * Lists DlpJobs that match the specified filter in the request. See https://cloud.google.com/sensitive-data-protection/docs/inspecting-storage and https://cloud.google.com/sensitive-data-protection/docs/compute-risk-analysis to learn more.
     * @param {string} params.filter - Allows filtering. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` or `OR` logical operators. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `{field} {operator} {value}`. * Supported fields/values for inspect jobs: - `state` - PENDING|RUNNING|CANCELED|FINISHED|FAILED - `inspected_storage` - DATASTORE|CLOUD_STORAGE|BIGQUERY - `trigger_name` - The name of the trigger that created the job. - 'end_time` - Corresponds to the time the job finished. - 'start_time` - Corresponds to the time the job finished. * Supported fields for risk analysis jobs: - `state` - RUNNING|CANCELED|FINISHED|FAILED - 'end_time` - Corresponds to the time the job finished. - 'start_time` - Corresponds to the time the job finished. * The operator must be `=` or `!=`. Examples: * inspected_storage = cloud_storage AND state = done * inspected_storage = cloud_storage OR inspected_storage = bigquery * inspected_storage = cloud_storage AND (state = done OR state = canceled) * end_time > \"2017-12-12T00:00:00+00:00\" The length of this field should be no more than 500 characters.
     * @param {string} params.locationId - Deprecated. This field has no effect.
     * @param {string} params.orderBy - Comma-separated list of fields to order by, followed by `asc` or `desc` postfix. This list is case insensitive. The default sorting order is ascending. Redundant space characters are insignificant. Example: `name asc, end_time asc, create_time desc` Supported fields are: - `create_time`: corresponds to the time the job was created. - `end_time`: corresponds to the time the job ended. - `name`: corresponds to the job's name. - `state`: corresponds to `state`
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @param {string} params.parent - (Required) Required. Parent resource name. The format of this value varies depending on whether you have [specified a processing location](https://cloud.google.com/sensitive-data-protection/docs/specifying-location): + Projects scope, location specified: `projects/{project_id}/locations/{location_id}` + Projects scope, no location specified (defaults to global): `projects/{project_id}` The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3
     * @param {string} params.type - The type of job. Defaults to `DlpJobType.INSPECT`
     * @return {object} The API response object.
     */
    this.projects.dlpJobs.list = (params) => this._makeRequest('v2/{+parent}/dlpJobs', 'GET', params);

    /**
     * Gets the latest state of a long-running DlpJob. See https://cloud.google.com/sensitive-data-protection/docs/inspecting-storage and https://cloud.google.com/sensitive-data-protection/docs/compute-risk-analysis to learn more.
     * @param {string} params.name - (Required) Required. The name of the DlpJob resource.
     * @return {object} The API response object.
     */
    this.projects.dlpJobs.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Deletes a long-running DlpJob. This method indicates that the client is no longer interested in the DlpJob result. The job will be canceled if possible. See https://cloud.google.com/sensitive-data-protection/docs/inspecting-storage and https://cloud.google.com/sensitive-data-protection/docs/compute-risk-analysis to learn more.
     * @param {string} params.name - (Required) Required. The name of the DlpJob resource to be deleted.
     * @return {object} The API response object.
     */
    this.projects.dlpJobs.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    /**
     * Starts asynchronous cancellation on a long-running DlpJob. The server makes a best effort to cancel the DlpJob, but success is not guaranteed. See https://cloud.google.com/sensitive-data-protection/docs/inspecting-storage and https://cloud.google.com/sensitive-data-protection/docs/compute-risk-analysis to learn more.
     * @param {string} params.name - (Required) Required. The name of the DlpJob resource to be cancelled.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.dlpJobs.cancel = (params) => this._makeRequest('v2/{+name}:cancel', 'POST', params);

    this.projects.storedInfoTypes = {};

    /**
     * Creates a pre-built stored infoType to be used for inspection. See https://cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes to learn more.
     * @param {string} params.parent - (Required) Required. Parent resource name. The format of this value varies depending on the scope of the request (project or organization) and whether you have [specified a processing location](https://cloud.google.com/sensitive-data-protection/docs/specifying-location): + Projects scope, location specified: `projects/{project_id}/locations/{location_id}` + Projects scope, no location specified (defaults to global): `projects/{project_id}` + Organizations scope, location specified: `organizations/{org_id}/locations/{location_id}` + Organizations scope, no location specified (defaults to global): `organizations/{org_id}` The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.storedInfoTypes.create = (params) => this._makeRequest('v2/{+parent}/storedInfoTypes', 'POST', params);

    /**
     * Updates the stored infoType by creating a new version. The existing version will continue to be used until the new version is ready. See https://cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes to learn more.
     * @param {string} params.name - (Required) Required. Resource name of organization and storedInfoType to be updated, for example `organizations/433245324/storedInfoTypes/432452342` or projects/project-id/storedInfoTypes/432452342.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.storedInfoTypes.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    /**
     * Gets a stored infoType. See https://cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes to learn more.
     * @param {string} params.name - (Required) Required. Resource name of the organization and storedInfoType to be read, for example `organizations/433245324/storedInfoTypes/432452342` or projects/project-id/storedInfoTypes/432452342.
     * @return {object} The API response object.
     */
    this.projects.storedInfoTypes.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Lists stored infoTypes. See https://cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes to learn more.
     * @param {string} params.locationId - Deprecated. This field has no effect.
     * @param {string} params.orderBy - Comma-separated list of fields to order by, followed by `asc` or `desc` postfix. This list is case insensitive. The default sorting order is ascending. Redundant space characters are insignificant. Example: `name asc, display_name, create_time desc` Supported fields are: - `create_time`: corresponds to the time the most recent version of the resource was created. - `state`: corresponds to the state of the resource. - `name`: corresponds to resource name. - `display_name`: corresponds to info type's display name.
     * @param {integer} params.pageSize - Size of the page. This value can be limited by the server. If zero server returns a page of max size 100.
     * @param {string} params.pageToken - Page token to continue retrieval. Comes from the previous call to `ListStoredInfoTypes`.
     * @param {string} params.parent - (Required) Required. Parent resource name. The format of this value varies depending on the scope of the request (project or organization) and whether you have [specified a processing location](https://cloud.google.com/sensitive-data-protection/docs/specifying-location): + Projects scope, location specified: `projects/{project_id}/locations/{location_id}` + Projects scope, no location specified (defaults to global): `projects/{project_id}` The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3
     * @return {object} The API response object.
     */
    this.projects.storedInfoTypes.list = (params) => this._makeRequest('v2/{+parent}/storedInfoTypes', 'GET', params);

    /**
     * Deletes a stored infoType. See https://cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes to learn more.
     * @param {string} params.name - (Required) Required. Resource name of the organization and storedInfoType to be deleted, for example `organizations/433245324/storedInfoTypes/432452342` or projects/project-id/storedInfoTypes/432452342.
     * @return {object} The API response object.
     */
    this.projects.storedInfoTypes.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.infoTypes = {};

    /**
     * Returns a list of the sensitive information types that the DLP API supports. See https://cloud.google.com/sensitive-data-protection/docs/infotypes-reference to learn more.
     * @param {string} params.filter - filter to only return infoTypes supported by certain parts of the API. Defaults to supported_by=INSPECT.
     * @param {string} params.languageCode - BCP-47 language code for localized infoType friendly names. If omitted, or if localized strings are not available, en-US strings will be returned.
     * @param {string} params.locationId - Deprecated. This field has no effect.
     * @param {string} params.parent - The parent resource name. The format of this value is as follows: `locations/{location_id}`
     * @return {object} The API response object.
     */
    this.infoTypes.list = (params) => this._makeRequest('v2/infoTypes', 'GET', params);

    this.locations = {};

    this.locations.infoTypes = {};

    /**
     * Returns a list of the sensitive information types that the DLP API supports. See https://cloud.google.com/sensitive-data-protection/docs/infotypes-reference to learn more.
     * @param {string} params.filter - filter to only return infoTypes supported by certain parts of the API. Defaults to supported_by=INSPECT.
     * @param {string} params.languageCode - BCP-47 language code for localized infoType friendly names. If omitted, or if localized strings are not available, en-US strings will be returned.
     * @param {string} params.locationId - Deprecated. This field has no effect.
     * @param {string} params.parent - (Required) The parent resource name. The format of this value is as follows: `locations/{location_id}`
     * @return {object} The API response object.
     */
    this.locations.infoTypes.list = (params) => this._makeRequest('v2/{+parent}/infoTypes', 'GET', params);

    this.organizations = {};

    this.organizations.locations = {};

    this.organizations.locations.infoTypes = {};

    /**
     * Returns a list of the sensitive information types that the DLP API supports. See https://cloud.google.com/sensitive-data-protection/docs/infotypes-reference to learn more.
     * @param {string} params.filter - filter to only return infoTypes supported by certain parts of the API. Defaults to supported_by=INSPECT.
     * @param {string} params.languageCode - BCP-47 language code for localized infoType friendly names. If omitted, or if localized strings are not available, en-US strings will be returned.
     * @param {string} params.locationId - Deprecated. This field has no effect.
     * @param {string} params.parent - (Required) The parent resource name. The format of this value is as follows: `locations/{location_id}`
     * @return {object} The API response object.
     */
    this.organizations.locations.infoTypes.list = (params) => this._makeRequest('v2/{+parent}/infoTypes', 'GET', params);

    this.organizations.locations.inspectTemplates = {};

    /**
     * Creates an InspectTemplate for reusing frequently used configuration for inspecting content, images, and storage. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates to learn more.
     * @param {string} params.parent - (Required) Required. Parent resource name. The format of this value varies depending on the scope of the request (project or organization) and whether you have [specified a processing location](https://cloud.google.com/sensitive-data-protection/docs/specifying-location): + Projects scope, location specified: `projects/{project_id}/locations/{location_id}` + Projects scope, no location specified (defaults to global): `projects/{project_id}` + Organizations scope, location specified: `organizations/{org_id}/locations/{location_id}` + Organizations scope, no location specified (defaults to global): `organizations/{org_id}` The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.locations.inspectTemplates.create = (params) => this._makeRequest('v2/{+parent}/inspectTemplates', 'POST', params);

    /**
     * Updates the InspectTemplate. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates to learn more.
     * @param {string} params.name - (Required) Required. Resource name of organization and inspectTemplate to be updated, for example `organizations/433245324/inspectTemplates/432452342` or projects/project-id/inspectTemplates/432452342.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.locations.inspectTemplates.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    /**
     * Gets an InspectTemplate. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates to learn more.
     * @param {string} params.name - (Required) Required. Resource name of the organization and inspectTemplate to be read, for example `organizations/433245324/inspectTemplates/432452342` or projects/project-id/inspectTemplates/432452342.
     * @return {object} The API response object.
     */
    this.organizations.locations.inspectTemplates.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Lists InspectTemplates. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates to learn more.
     * @param {string} params.locationId - Deprecated. This field has no effect.
     * @param {string} params.orderBy - Comma-separated list of fields to order by, followed by `asc` or `desc` postfix. This list is case insensitive. The default sorting order is ascending. Redundant space characters are insignificant. Example: `name asc,update_time, create_time desc` Supported fields are: - `create_time`: corresponds to the time the template was created. - `update_time`: corresponds to the time the template was last updated. - `name`: corresponds to the template's name. - `display_name`: corresponds to the template's display name.
     * @param {integer} params.pageSize - Size of the page. This value can be limited by the server. If zero server returns a page of max size 100.
     * @param {string} params.pageToken - Page token to continue retrieval. Comes from the previous call to `ListInspectTemplates`.
     * @param {string} params.parent - (Required) Required. Parent resource name. The format of this value varies depending on the scope of the request (project or organization) and whether you have [specified a processing location](https://cloud.google.com/sensitive-data-protection/docs/specifying-location): + Projects scope, location specified: `projects/{project_id}/locations/{location_id}` + Projects scope, no location specified (defaults to global): `projects/{project_id}` + Organizations scope, location specified: `organizations/{org_id}/locations/{location_id}` + Organizations scope, no location specified (defaults to global): `organizations/{org_id}` The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3
     * @return {object} The API response object.
     */
    this.organizations.locations.inspectTemplates.list = (params) => this._makeRequest('v2/{+parent}/inspectTemplates', 'GET', params);

    /**
     * Deletes an InspectTemplate. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates to learn more.
     * @param {string} params.name - (Required) Required. Resource name of the organization and inspectTemplate to be deleted, for example `organizations/433245324/inspectTemplates/432452342` or projects/project-id/inspectTemplates/432452342.
     * @return {object} The API response object.
     */
    this.organizations.locations.inspectTemplates.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.organizations.locations.deidentifyTemplates = {};

    /**
     * Creates a DeidentifyTemplate for reusing frequently used configuration for de-identifying content, images, and storage. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates-deid to learn more.
     * @param {string} params.parent - (Required) Required. Parent resource name. The format of this value varies depending on the scope of the request (project or organization) and whether you have [specified a processing location](https://cloud.google.com/sensitive-data-protection/docs/specifying-location): + Projects scope, location specified: `projects/{project_id}/locations/{location_id}` + Projects scope, no location specified (defaults to global): `projects/{project_id}` + Organizations scope, location specified: `organizations/{org_id}/locations/{location_id}` + Organizations scope, no location specified (defaults to global): `organizations/{org_id}` The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.locations.deidentifyTemplates.create = (params) => this._makeRequest('v2/{+parent}/deidentifyTemplates', 'POST', params);

    /**
     * Updates the DeidentifyTemplate. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates-deid to learn more.
     * @param {string} params.name - (Required) Required. Resource name of organization and deidentify template to be updated, for example `organizations/433245324/deidentifyTemplates/432452342` or projects/project-id/deidentifyTemplates/432452342.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.locations.deidentifyTemplates.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    /**
     * Gets a DeidentifyTemplate. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates-deid to learn more.
     * @param {string} params.name - (Required) Required. Resource name of the organization and deidentify template to be read, for example `organizations/433245324/deidentifyTemplates/432452342` or projects/project-id/deidentifyTemplates/432452342.
     * @return {object} The API response object.
     */
    this.organizations.locations.deidentifyTemplates.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Lists DeidentifyTemplates. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates-deid to learn more.
     * @param {string} params.locationId - Deprecated. This field has no effect.
     * @param {string} params.orderBy - Comma-separated list of fields to order by, followed by `asc` or `desc` postfix. This list is case insensitive. The default sorting order is ascending. Redundant space characters are insignificant. Example: `name asc,update_time, create_time desc` Supported fields are: - `create_time`: corresponds to the time the template was created. - `update_time`: corresponds to the time the template was last updated. - `name`: corresponds to the template's name. - `display_name`: corresponds to the template's display name.
     * @param {integer} params.pageSize - Size of the page. This value can be limited by the server. If zero server returns a page of max size 100.
     * @param {string} params.pageToken - Page token to continue retrieval. Comes from the previous call to `ListDeidentifyTemplates`.
     * @param {string} params.parent - (Required) Required. Parent resource name. The format of this value varies depending on the scope of the request (project or organization) and whether you have [specified a processing location](https://cloud.google.com/sensitive-data-protection/docs/specifying-location): + Projects scope, location specified: `projects/{project_id}/locations/{location_id}` + Projects scope, no location specified (defaults to global): `projects/{project_id}` + Organizations scope, location specified: `organizations/{org_id}/locations/{location_id}` + Organizations scope, no location specified (defaults to global): `organizations/{org_id}` The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3
     * @return {object} The API response object.
     */
    this.organizations.locations.deidentifyTemplates.list = (params) => this._makeRequest('v2/{+parent}/deidentifyTemplates', 'GET', params);

    /**
     * Deletes a DeidentifyTemplate. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates-deid to learn more.
     * @param {string} params.name - (Required) Required. Resource name of the organization and deidentify template to be deleted, for example `organizations/433245324/deidentifyTemplates/432452342` or projects/project-id/deidentifyTemplates/432452342.
     * @return {object} The API response object.
     */
    this.organizations.locations.deidentifyTemplates.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.organizations.locations.jobTriggers = {};

    /**
     * Creates a job trigger to run DLP actions such as scanning storage for sensitive information on a set schedule. See https://cloud.google.com/sensitive-data-protection/docs/creating-job-triggers to learn more.
     * @param {string} params.parent - (Required) Required. Parent resource name. The format of this value varies depending on whether you have [specified a processing location](https://cloud.google.com/sensitive-data-protection/docs/specifying-location): + Projects scope, location specified: `projects/{project_id}/locations/{location_id}` + Projects scope, no location specified (defaults to global): `projects/{project_id}` The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.locations.jobTriggers.create = (params) => this._makeRequest('v2/{+parent}/jobTriggers', 'POST', params);

    /**
     * Updates a job trigger. See https://cloud.google.com/sensitive-data-protection/docs/creating-job-triggers to learn more.
     * @param {string} params.name - (Required) Required. Resource name of the project and the triggeredJob, for example `projects/dlp-test-project/jobTriggers/53234423`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.locations.jobTriggers.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    /**
     * Gets a job trigger. See https://cloud.google.com/sensitive-data-protection/docs/creating-job-triggers to learn more.
     * @param {string} params.name - (Required) Required. Resource name of the project and the triggeredJob, for example `projects/dlp-test-project/jobTriggers/53234423`.
     * @return {object} The API response object.
     */
    this.organizations.locations.jobTriggers.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Lists job triggers. See https://cloud.google.com/sensitive-data-protection/docs/creating-job-triggers to learn more.
     * @param {string} params.filter - Allows filtering. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` or `OR` logical operators. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `{field} {operator} {value}`. * Supported fields/values for inspect triggers: - `status` - HEALTHY|PAUSED|CANCELLED - `inspected_storage` - DATASTORE|CLOUD_STORAGE|BIGQUERY - 'last_run_time` - RFC 3339 formatted timestamp, surrounded by quotation marks. Nanoseconds are ignored. - 'error_count' - Number of errors that have occurred while running. * The operator must be `=` or `!=` for status and inspected_storage. Examples: * inspected_storage = cloud_storage AND status = HEALTHY * inspected_storage = cloud_storage OR inspected_storage = bigquery * inspected_storage = cloud_storage AND (state = PAUSED OR state = HEALTHY) * last_run_time > \"2017-12-12T00:00:00+00:00\" The length of this field should be no more than 500 characters.
     * @param {string} params.locationId - Deprecated. This field has no effect.
     * @param {string} params.orderBy - Comma-separated list of triggeredJob fields to order by, followed by `asc` or `desc` postfix. This list is case insensitive. The default sorting order is ascending. Redundant space characters are insignificant. Example: `name asc,update_time, create_time desc` Supported fields are: - `create_time`: corresponds to the time the JobTrigger was created. - `update_time`: corresponds to the time the JobTrigger was last updated. - `last_run_time`: corresponds to the last time the JobTrigger ran. - `name`: corresponds to the JobTrigger's name. - `display_name`: corresponds to the JobTrigger's display name. - `status`: corresponds to JobTrigger's status.
     * @param {integer} params.pageSize - Size of the page. This value can be limited by a server.
     * @param {string} params.pageToken - Page token to continue retrieval. Comes from the previous call to ListJobTriggers. `order_by` field must not change for subsequent calls.
     * @param {string} params.parent - (Required) Required. Parent resource name. The format of this value varies depending on whether you have [specified a processing location](https://cloud.google.com/sensitive-data-protection/docs/specifying-location): + Projects scope, location specified: `projects/{project_id}/locations/{location_id}` + Projects scope, no location specified (defaults to global): `projects/{project_id}` The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3
     * @param {string} params.type - The type of jobs. Will use `DlpJobType.INSPECT` if not set.
     * @return {object} The API response object.
     */
    this.organizations.locations.jobTriggers.list = (params) => this._makeRequest('v2/{+parent}/jobTriggers', 'GET', params);

    /**
     * Deletes a job trigger. See https://cloud.google.com/sensitive-data-protection/docs/creating-job-triggers to learn more.
     * @param {string} params.name - (Required) Required. Resource name of the project and the triggeredJob, for example `projects/dlp-test-project/jobTriggers/53234423`.
     * @return {object} The API response object.
     */
    this.organizations.locations.jobTriggers.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.organizations.locations.discoveryConfigs = {};

    /**
     * Creates a config for discovery to scan and profile storage.
     * @param {string} params.parent - (Required) Required. Parent resource name. The format of this value varies depending on the scope of the request (project or organization): + Projects scope: `projects/{project_id}/locations/{location_id}` + Organizations scope: `organizations/{org_id}/locations/{location_id}` The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.locations.discoveryConfigs.create = (params) => this._makeRequest('v2/{+parent}/discoveryConfigs', 'POST', params);

    /**
     * Updates a discovery configuration.
     * @param {string} params.name - (Required) Required. Resource name of the project and the configuration, for example `projects/dlp-test-project/discoveryConfigs/53234423`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.locations.discoveryConfigs.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    /**
     * Gets a discovery configuration.
     * @param {string} params.name - (Required) Required. Resource name of the project and the configuration, for example `projects/dlp-test-project/discoveryConfigs/53234423`.
     * @return {object} The API response object.
     */
    this.organizations.locations.discoveryConfigs.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Lists discovery configurations.
     * @param {string} params.orderBy - Comma-separated list of config fields to order by, followed by `asc` or `desc` postfix. This list is case insensitive. The default sorting order is ascending. Redundant space characters are insignificant. Example: `name asc,update_time, create_time desc` Supported fields are: - `last_run_time`: corresponds to the last time the DiscoveryConfig ran. - `name`: corresponds to the DiscoveryConfig's name. - `status`: corresponds to DiscoveryConfig's status.
     * @param {integer} params.pageSize - Size of the page. This value can be limited by a server.
     * @param {string} params.pageToken - Page token to continue retrieval. Comes from the previous call to ListDiscoveryConfigs. `order_by` field must not change for subsequent calls.
     * @param {string} params.parent - (Required) Required. Parent resource name. The format of this value is as follows: `projects/{project_id}/locations/{location_id}` The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3
     * @return {object} The API response object.
     */
    this.organizations.locations.discoveryConfigs.list = (params) => this._makeRequest('v2/{+parent}/discoveryConfigs', 'GET', params);

    /**
     * Deletes a discovery configuration.
     * @param {string} params.name - (Required) Required. Resource name of the project and the config, for example `projects/dlp-test-project/discoveryConfigs/53234423`.
     * @return {object} The API response object.
     */
    this.organizations.locations.discoveryConfigs.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.organizations.locations.dlpJobs = {};

    /**
     * Lists DlpJobs that match the specified filter in the request. See https://cloud.google.com/sensitive-data-protection/docs/inspecting-storage and https://cloud.google.com/sensitive-data-protection/docs/compute-risk-analysis to learn more.
     * @param {string} params.filter - Allows filtering. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` or `OR` logical operators. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `{field} {operator} {value}`. * Supported fields/values for inspect jobs: - `state` - PENDING|RUNNING|CANCELED|FINISHED|FAILED - `inspected_storage` - DATASTORE|CLOUD_STORAGE|BIGQUERY - `trigger_name` - The name of the trigger that created the job. - 'end_time` - Corresponds to the time the job finished. - 'start_time` - Corresponds to the time the job finished. * Supported fields for risk analysis jobs: - `state` - RUNNING|CANCELED|FINISHED|FAILED - 'end_time` - Corresponds to the time the job finished. - 'start_time` - Corresponds to the time the job finished. * The operator must be `=` or `!=`. Examples: * inspected_storage = cloud_storage AND state = done * inspected_storage = cloud_storage OR inspected_storage = bigquery * inspected_storage = cloud_storage AND (state = done OR state = canceled) * end_time > \"2017-12-12T00:00:00+00:00\" The length of this field should be no more than 500 characters.
     * @param {string} params.locationId - Deprecated. This field has no effect.
     * @param {string} params.orderBy - Comma-separated list of fields to order by, followed by `asc` or `desc` postfix. This list is case insensitive. The default sorting order is ascending. Redundant space characters are insignificant. Example: `name asc, end_time asc, create_time desc` Supported fields are: - `create_time`: corresponds to the time the job was created. - `end_time`: corresponds to the time the job ended. - `name`: corresponds to the job's name. - `state`: corresponds to `state`
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @param {string} params.parent - (Required) Required. Parent resource name. The format of this value varies depending on whether you have [specified a processing location](https://cloud.google.com/sensitive-data-protection/docs/specifying-location): + Projects scope, location specified: `projects/{project_id}/locations/{location_id}` + Projects scope, no location specified (defaults to global): `projects/{project_id}` The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3
     * @param {string} params.type - The type of job. Defaults to `DlpJobType.INSPECT`
     * @return {object} The API response object.
     */
    this.organizations.locations.dlpJobs.list = (params) => this._makeRequest('v2/{+parent}/dlpJobs', 'GET', params);

    this.organizations.locations.storedInfoTypes = {};

    /**
     * Creates a pre-built stored infoType to be used for inspection. See https://cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes to learn more.
     * @param {string} params.parent - (Required) Required. Parent resource name. The format of this value varies depending on the scope of the request (project or organization) and whether you have [specified a processing location](https://cloud.google.com/sensitive-data-protection/docs/specifying-location): + Projects scope, location specified: `projects/{project_id}/locations/{location_id}` + Projects scope, no location specified (defaults to global): `projects/{project_id}` + Organizations scope, location specified: `organizations/{org_id}/locations/{location_id}` + Organizations scope, no location specified (defaults to global): `organizations/{org_id}` The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.locations.storedInfoTypes.create = (params) => this._makeRequest('v2/{+parent}/storedInfoTypes', 'POST', params);

    /**
     * Updates the stored infoType by creating a new version. The existing version will continue to be used until the new version is ready. See https://cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes to learn more.
     * @param {string} params.name - (Required) Required. Resource name of organization and storedInfoType to be updated, for example `organizations/433245324/storedInfoTypes/432452342` or projects/project-id/storedInfoTypes/432452342.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.locations.storedInfoTypes.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    /**
     * Gets a stored infoType. See https://cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes to learn more.
     * @param {string} params.name - (Required) Required. Resource name of the organization and storedInfoType to be read, for example `organizations/433245324/storedInfoTypes/432452342` or projects/project-id/storedInfoTypes/432452342.
     * @return {object} The API response object.
     */
    this.organizations.locations.storedInfoTypes.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Lists stored infoTypes. See https://cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes to learn more.
     * @param {string} params.locationId - Deprecated. This field has no effect.
     * @param {string} params.orderBy - Comma-separated list of fields to order by, followed by `asc` or `desc` postfix. This list is case insensitive. The default sorting order is ascending. Redundant space characters are insignificant. Example: `name asc, display_name, create_time desc` Supported fields are: - `create_time`: corresponds to the time the most recent version of the resource was created. - `state`: corresponds to the state of the resource. - `name`: corresponds to resource name. - `display_name`: corresponds to info type's display name.
     * @param {integer} params.pageSize - Size of the page. This value can be limited by the server. If zero server returns a page of max size 100.
     * @param {string} params.pageToken - Page token to continue retrieval. Comes from the previous call to `ListStoredInfoTypes`.
     * @param {string} params.parent - (Required) Required. Parent resource name. The format of this value varies depending on the scope of the request (project or organization) and whether you have [specified a processing location](https://cloud.google.com/sensitive-data-protection/docs/specifying-location): + Projects scope, location specified: `projects/{project_id}/locations/{location_id}` + Projects scope, no location specified (defaults to global): `projects/{project_id}` The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3
     * @return {object} The API response object.
     */
    this.organizations.locations.storedInfoTypes.list = (params) => this._makeRequest('v2/{+parent}/storedInfoTypes', 'GET', params);

    /**
     * Deletes a stored infoType. See https://cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes to learn more.
     * @param {string} params.name - (Required) Required. Resource name of the organization and storedInfoType to be deleted, for example `organizations/433245324/storedInfoTypes/432452342` or projects/project-id/storedInfoTypes/432452342.
     * @return {object} The API response object.
     */
    this.organizations.locations.storedInfoTypes.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.organizations.locations.projectDataProfiles = {};

    /**
     * Lists project data profiles for an organization.
     * @param {string} params.filter - Allows filtering. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` or `OR` logical operators. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `{field} {operator} {value}`. * Supported fields/values: - `sensitivity_level` - HIGH|MODERATE|LOW - `data_risk_level` - HIGH|MODERATE|LOW - `status_code` - an RPC status code as defined in https://github.com/googleapis/googleapis/blob/master/google/rpc/code.proto * The operator must be `=` or `!=`. Examples: * `project_id = 12345 AND status_code = 1` * `project_id = 12345 AND sensitivity_level = HIGH` The length of this field should be no more than 500 characters.
     * @param {string} params.orderBy - Comma-separated list of fields to order by, followed by `asc` or `desc` postfix. This list is case insensitive. The default sorting order is ascending. Redundant space characters are insignificant. Only one order field at a time is allowed. Examples: * `project_id` * `sensitivity_level desc` Supported fields are: - `project_id`: Google Cloud project ID - `sensitivity_level`: How sensitive the data in a project is, at most. - `data_risk_level`: How much risk is associated with this data. - `profile_last_generated`: When the profile was last updated in epoch seconds.
     * @param {integer} params.pageSize - Size of the page. This value can be limited by the server. If zero, server returns a page of max size 100.
     * @param {string} params.pageToken - Page token to continue retrieval.
     * @param {string} params.parent - (Required) Required. organizations/{org_id}/locations/{loc_id}
     * @return {object} The API response object.
     */
    this.organizations.locations.projectDataProfiles.list = (params) => this._makeRequest('v2/{+parent}/projectDataProfiles', 'GET', params);

    /**
     * Gets a project data profile.
     * @param {string} params.name - (Required) Required. Resource name, for example `organizations/12345/locations/us/projectDataProfiles/53234423`.
     * @return {object} The API response object.
     */
    this.organizations.locations.projectDataProfiles.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    this.organizations.locations.tableDataProfiles = {};

    /**
     * Lists table data profiles for an organization.
     * @param {string} params.filter - Allows filtering. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` or `OR` logical operators. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `{field} {operator} {value}`. * Supported fields/values: - `project_id` - The Google Cloud project ID. - `dataset_id` - The BigQuery dataset ID. - `table_id` - The ID of the BigQuery table. - `sensitivity_level` - HIGH|MODERATE|LOW - `data_risk_level` - HIGH|MODERATE|LOW - `resource_visibility`: PUBLIC|RESTRICTED - `status_code` - an RPC status code as defined in https://github.com/googleapis/googleapis/blob/master/google/rpc/code.proto * The operator must be `=` or `!=`. Examples: * `project_id = 12345 AND status_code = 1` * `project_id = 12345 AND sensitivity_level = HIGH` * `project_id = 12345 AND resource_visibility = PUBLIC` The length of this field should be no more than 500 characters.
     * @param {string} params.orderBy - Comma-separated list of fields to order by, followed by `asc` or `desc` postfix. This list is case insensitive. The default sorting order is ascending. Redundant space characters are insignificant. Only one order field at a time is allowed. Examples: * `project_id asc` * `table_id` * `sensitivity_level desc` Supported fields are: - `project_id`: The Google Cloud project ID. - `dataset_id`: The ID of a BigQuery dataset. - `table_id`: The ID of a BigQuery table. - `sensitivity_level`: How sensitive the data in a table is, at most. - `data_risk_level`: How much risk is associated with this data. - `profile_last_generated`: When the profile was last updated in epoch seconds. - `last_modified`: The last time the resource was modified. - `resource_visibility`: Visibility restriction for this resource. - `row_count`: Number of rows in this resource.
     * @param {integer} params.pageSize - Size of the page. This value can be limited by the server. If zero, server returns a page of max size 100.
     * @param {string} params.pageToken - Page token to continue retrieval.
     * @param {string} params.parent - (Required) Required. Resource name of the organization or project, for example `organizations/433245324/locations/europe` or `projects/project-id/locations/asia`.
     * @return {object} The API response object.
     */
    this.organizations.locations.tableDataProfiles.list = (params) => this._makeRequest('v2/{+parent}/tableDataProfiles', 'GET', params);

    /**
     * Gets a table data profile.
     * @param {string} params.name - (Required) Required. Resource name, for example `organizations/12345/locations/us/tableDataProfiles/53234423`.
     * @return {object} The API response object.
     */
    this.organizations.locations.tableDataProfiles.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Delete a TableDataProfile. Will not prevent the profile from being regenerated if the table is still included in a discovery configuration.
     * @param {string} params.name - (Required) Required. Resource name of the table data profile.
     * @return {object} The API response object.
     */
    this.organizations.locations.tableDataProfiles.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.organizations.locations.columnDataProfiles = {};

    /**
     * Lists column data profiles for an organization.
     * @param {string} params.filter - Allows filtering. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` or `OR` logical operators. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `{field} {operator} {value}`. * Supported fields/values: - `table_data_profile_name` - The name of the related table data profile. - `project_id` - The Google Cloud project ID. (REQUIRED) - `dataset_id` - The BigQuery dataset ID. (REQUIRED) - `table_id` - The BigQuery table ID. (REQUIRED) - `field_id` - The ID of the BigQuery field. - `info_type` - The infotype detected in the resource. - `sensitivity_level` - HIGH|MEDIUM|LOW - `data_risk_level`: How much risk is associated with this data. - `status_code` - an RPC status code as defined in https://github.com/googleapis/googleapis/blob/master/google/rpc/code.proto * The operator must be `=` for project_id, dataset_id, and table_id. Other filters also support `!=`. Examples: * project_id = 12345 AND status_code = 1 * project_id = 12345 AND sensitivity_level = HIGH * project_id = 12345 AND info_type = STREET_ADDRESS The length of this field should be no more than 500 characters.
     * @param {string} params.orderBy - Comma-separated list of fields to order by, followed by `asc` or `desc` postfix. This list is case insensitive. The default sorting order is ascending. Redundant space characters are insignificant. Only one order field at a time is allowed. Examples: * `project_id asc` * `table_id` * `sensitivity_level desc` Supported fields are: - `project_id`: The Google Cloud project ID. - `dataset_id`: The ID of a BigQuery dataset. - `table_id`: The ID of a BigQuery table. - `sensitivity_level`: How sensitive the data in a column is, at most. - `data_risk_level`: How much risk is associated with this data. - `profile_last_generated`: When the profile was last updated in epoch seconds.
     * @param {integer} params.pageSize - Size of the page. This value can be limited by the server. If zero, server returns a page of max size 100.
     * @param {string} params.pageToken - Page token to continue retrieval.
     * @param {string} params.parent - (Required) Required. Resource name of the organization or project, for example `organizations/433245324/locations/europe` or `projects/project-id/locations/asia`.
     * @return {object} The API response object.
     */
    this.organizations.locations.columnDataProfiles.list = (params) => this._makeRequest('v2/{+parent}/columnDataProfiles', 'GET', params);

    /**
     * Gets a column data profile.
     * @param {string} params.name - (Required) Required. Resource name, for example `organizations/12345/locations/us/columnDataProfiles/53234423`.
     * @return {object} The API response object.
     */
    this.organizations.locations.columnDataProfiles.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    this.organizations.locations.fileStoreDataProfiles = {};

    /**
     * Lists file store data profiles for an organization.
     * @param {string} params.filter - Optional. Allows filtering. Supported syntax: * Filter expressions are made up of one or more restrictions. * Restrictions can be combined by `AND` or `OR` logical operators. A sequence of restrictions implicitly uses `AND`. * A restriction has the form of `{field} {operator} {value}`. * Supported fields/values: - `project_id` - The Google Cloud project ID. - `account_id` - The AWS account ID. - `file_store_path` - The path like "gs://bucket". - `data_source_type` - The profile's data source type, like "google/storage/bucket". - `data_storage_location` - The location where the file store's data is stored, like "us-central1". - `sensitivity_level` - HIGH|MODERATE|LOW - `data_risk_level` - HIGH|MODERATE|LOW - `resource_visibility`: PUBLIC|RESTRICTED - `status_code` - an RPC status code as defined in https://github.com/googleapis/googleapis/blob/master/google/rpc/code.proto * The operator must be `=` or `!=`. Examples: * `project_id = 12345 AND status_code = 1` * `project_id = 12345 AND sensitivity_level = HIGH` * `project_id = 12345 AND resource_visibility = PUBLIC` * `file_store_path = "gs://mybucket"` The length of this field should be no more than 500 characters.
     * @param {string} params.orderBy - Optional. Comma-separated list of fields to order by, followed by `asc` or `desc` postfix. This list is case insensitive. The default sorting order is ascending. Redundant space characters are insignificant. Only one order field at a time is allowed. Examples: * `project_id asc` * `name` * `sensitivity_level desc` Supported fields are: - `project_id`: The Google Cloud project ID. - `sensitivity_level`: How sensitive the data in a table is, at most. - `data_risk_level`: How much risk is associated with this data. - `profile_last_generated`: When the profile was last updated in epoch seconds. - `last_modified`: The last time the resource was modified. - `resource_visibility`: Visibility restriction for this resource. - `name`: The name of the profile. - `create_time`: The time the file store was first created.
     * @param {integer} params.pageSize - Optional. Size of the page. This value can be limited by the server. If zero, server returns a page of max size 100.
     * @param {string} params.pageToken - Optional. Page token to continue retrieval.
     * @param {string} params.parent - (Required) Required. Resource name of the organization or project, for example `organizations/433245324/locations/europe` or `projects/project-id/locations/asia`.
     * @return {object} The API response object.
     */
    this.organizations.locations.fileStoreDataProfiles.list = (params) => this._makeRequest('v2/{+parent}/fileStoreDataProfiles', 'GET', params);

    /**
     * Gets a file store data profile.
     * @param {string} params.name - (Required) Required. Resource name, for example `organizations/12345/locations/us/fileStoreDataProfiles/53234423`.
     * @return {object} The API response object.
     */
    this.organizations.locations.fileStoreDataProfiles.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Delete a FileStoreDataProfile. Will not prevent the profile from being regenerated if the resource is still included in a discovery configuration.
     * @param {string} params.name - (Required) Required. Resource name of the file store data profile.
     * @return {object} The API response object.
     */
    this.organizations.locations.fileStoreDataProfiles.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.organizations.locations.connections = {};

    /**
     * Create a Connection to an external data source.
     * @param {string} params.parent - (Required) Required. Parent resource name. The format of this value varies depending on the scope of the request (project or organization): + Projects scope: `projects/{project_id}/locations/{location_id}` + Organizations scope: `organizations/{org_id}/locations/{location_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.locations.connections.create = (params) => this._makeRequest('v2/{+parent}/connections', 'POST', params);

    /**
     * Get a Connection by name.
     * @param {string} params.name - (Required) Required. Resource name in the format: `projects/{project}/locations/{location}/connections/{connection}`.
     * @return {object} The API response object.
     */
    this.organizations.locations.connections.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Lists Connections in a parent. Use SearchConnections to see all connections within an organization.
     * @param {string} params.filter - Optional. Supported field/value: `state` - MISSING|AVAILABLE|ERROR
     * @param {integer} params.pageSize - Optional. Number of results per page, max 1000.
     * @param {string} params.pageToken - Optional. Page token from a previous page to return the next set of results. If set, all other request fields must match the original request.
     * @param {string} params.parent - (Required) Required. Resource name of the organization or project, for example, `organizations/433245324/locations/europe` or `projects/project-id/locations/asia`.
     * @return {object} The API response object.
     */
    this.organizations.locations.connections.list = (params) => this._makeRequest('v2/{+parent}/connections', 'GET', params);

    /**
     * Searches for Connections in a parent.
     * @param {string} params.filter - Optional. Supported field/value: - `state` - MISSING|AVAILABLE|ERROR
     * @param {integer} params.pageSize - Optional. Number of results per page, max 1000.
     * @param {string} params.pageToken - Optional. Page token from a previous page to return the next set of results. If set, all other request fields must match the original request.
     * @param {string} params.parent - (Required) Required. Resource name of the organization or project with a wildcard location, for example, `organizations/433245324/locations/-` or `projects/project-id/locations/-`.
     * @return {object} The API response object.
     */
    this.organizations.locations.connections.search = (params) => this._makeRequest('v2/{+parent}/connections:search', 'GET', params);

    /**
     * Delete a Connection.
     * @param {string} params.name - (Required) Required. Resource name of the Connection to be deleted, in the format: `projects/{project}/locations/{location}/connections/{connection}`.
     * @return {object} The API response object.
     */
    this.organizations.locations.connections.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    /**
     * Update a Connection.
     * @param {string} params.name - (Required) Required. Resource name in the format: `projects/{project}/locations/{location}/connections/{connection}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.locations.connections.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    this.organizations.inspectTemplates = {};

    /**
     * Creates an InspectTemplate for reusing frequently used configuration for inspecting content, images, and storage. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates to learn more.
     * @param {string} params.parent - (Required) Required. Parent resource name. The format of this value varies depending on the scope of the request (project or organization) and whether you have [specified a processing location](https://cloud.google.com/sensitive-data-protection/docs/specifying-location): + Projects scope, location specified: `projects/{project_id}/locations/{location_id}` + Projects scope, no location specified (defaults to global): `projects/{project_id}` + Organizations scope, location specified: `organizations/{org_id}/locations/{location_id}` + Organizations scope, no location specified (defaults to global): `organizations/{org_id}` The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.inspectTemplates.create = (params) => this._makeRequest('v2/{+parent}/inspectTemplates', 'POST', params);

    /**
     * Updates the InspectTemplate. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates to learn more.
     * @param {string} params.name - (Required) Required. Resource name of organization and inspectTemplate to be updated, for example `organizations/433245324/inspectTemplates/432452342` or projects/project-id/inspectTemplates/432452342.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.inspectTemplates.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    /**
     * Gets an InspectTemplate. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates to learn more.
     * @param {string} params.name - (Required) Required. Resource name of the organization and inspectTemplate to be read, for example `organizations/433245324/inspectTemplates/432452342` or projects/project-id/inspectTemplates/432452342.
     * @return {object} The API response object.
     */
    this.organizations.inspectTemplates.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Lists InspectTemplates. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates to learn more.
     * @param {string} params.locationId - Deprecated. This field has no effect.
     * @param {string} params.orderBy - Comma-separated list of fields to order by, followed by `asc` or `desc` postfix. This list is case insensitive. The default sorting order is ascending. Redundant space characters are insignificant. Example: `name asc,update_time, create_time desc` Supported fields are: - `create_time`: corresponds to the time the template was created. - `update_time`: corresponds to the time the template was last updated. - `name`: corresponds to the template's name. - `display_name`: corresponds to the template's display name.
     * @param {integer} params.pageSize - Size of the page. This value can be limited by the server. If zero server returns a page of max size 100.
     * @param {string} params.pageToken - Page token to continue retrieval. Comes from the previous call to `ListInspectTemplates`.
     * @param {string} params.parent - (Required) Required. Parent resource name. The format of this value varies depending on the scope of the request (project or organization) and whether you have [specified a processing location](https://cloud.google.com/sensitive-data-protection/docs/specifying-location): + Projects scope, location specified: `projects/{project_id}/locations/{location_id}` + Projects scope, no location specified (defaults to global): `projects/{project_id}` + Organizations scope, location specified: `organizations/{org_id}/locations/{location_id}` + Organizations scope, no location specified (defaults to global): `organizations/{org_id}` The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3
     * @return {object} The API response object.
     */
    this.organizations.inspectTemplates.list = (params) => this._makeRequest('v2/{+parent}/inspectTemplates', 'GET', params);

    /**
     * Deletes an InspectTemplate. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates to learn more.
     * @param {string} params.name - (Required) Required. Resource name of the organization and inspectTemplate to be deleted, for example `organizations/433245324/inspectTemplates/432452342` or projects/project-id/inspectTemplates/432452342.
     * @return {object} The API response object.
     */
    this.organizations.inspectTemplates.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.organizations.deidentifyTemplates = {};

    /**
     * Creates a DeidentifyTemplate for reusing frequently used configuration for de-identifying content, images, and storage. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates-deid to learn more.
     * @param {string} params.parent - (Required) Required. Parent resource name. The format of this value varies depending on the scope of the request (project or organization) and whether you have [specified a processing location](https://cloud.google.com/sensitive-data-protection/docs/specifying-location): + Projects scope, location specified: `projects/{project_id}/locations/{location_id}` + Projects scope, no location specified (defaults to global): `projects/{project_id}` + Organizations scope, location specified: `organizations/{org_id}/locations/{location_id}` + Organizations scope, no location specified (defaults to global): `organizations/{org_id}` The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.deidentifyTemplates.create = (params) => this._makeRequest('v2/{+parent}/deidentifyTemplates', 'POST', params);

    /**
     * Updates the DeidentifyTemplate. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates-deid to learn more.
     * @param {string} params.name - (Required) Required. Resource name of organization and deidentify template to be updated, for example `organizations/433245324/deidentifyTemplates/432452342` or projects/project-id/deidentifyTemplates/432452342.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.deidentifyTemplates.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    /**
     * Gets a DeidentifyTemplate. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates-deid to learn more.
     * @param {string} params.name - (Required) Required. Resource name of the organization and deidentify template to be read, for example `organizations/433245324/deidentifyTemplates/432452342` or projects/project-id/deidentifyTemplates/432452342.
     * @return {object} The API response object.
     */
    this.organizations.deidentifyTemplates.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Lists DeidentifyTemplates. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates-deid to learn more.
     * @param {string} params.locationId - Deprecated. This field has no effect.
     * @param {string} params.orderBy - Comma-separated list of fields to order by, followed by `asc` or `desc` postfix. This list is case insensitive. The default sorting order is ascending. Redundant space characters are insignificant. Example: `name asc,update_time, create_time desc` Supported fields are: - `create_time`: corresponds to the time the template was created. - `update_time`: corresponds to the time the template was last updated. - `name`: corresponds to the template's name. - `display_name`: corresponds to the template's display name.
     * @param {integer} params.pageSize - Size of the page. This value can be limited by the server. If zero server returns a page of max size 100.
     * @param {string} params.pageToken - Page token to continue retrieval. Comes from the previous call to `ListDeidentifyTemplates`.
     * @param {string} params.parent - (Required) Required. Parent resource name. The format of this value varies depending on the scope of the request (project or organization) and whether you have [specified a processing location](https://cloud.google.com/sensitive-data-protection/docs/specifying-location): + Projects scope, location specified: `projects/{project_id}/locations/{location_id}` + Projects scope, no location specified (defaults to global): `projects/{project_id}` + Organizations scope, location specified: `organizations/{org_id}/locations/{location_id}` + Organizations scope, no location specified (defaults to global): `organizations/{org_id}` The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3
     * @return {object} The API response object.
     */
    this.organizations.deidentifyTemplates.list = (params) => this._makeRequest('v2/{+parent}/deidentifyTemplates', 'GET', params);

    /**
     * Deletes a DeidentifyTemplate. See https://cloud.google.com/sensitive-data-protection/docs/creating-templates-deid to learn more.
     * @param {string} params.name - (Required) Required. Resource name of the organization and deidentify template to be deleted, for example `organizations/433245324/deidentifyTemplates/432452342` or projects/project-id/deidentifyTemplates/432452342.
     * @return {object} The API response object.
     */
    this.organizations.deidentifyTemplates.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.organizations.storedInfoTypes = {};

    /**
     * Creates a pre-built stored infoType to be used for inspection. See https://cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes to learn more.
     * @param {string} params.parent - (Required) Required. Parent resource name. The format of this value varies depending on the scope of the request (project or organization) and whether you have [specified a processing location](https://cloud.google.com/sensitive-data-protection/docs/specifying-location): + Projects scope, location specified: `projects/{project_id}/locations/{location_id}` + Projects scope, no location specified (defaults to global): `projects/{project_id}` + Organizations scope, location specified: `organizations/{org_id}/locations/{location_id}` + Organizations scope, no location specified (defaults to global): `organizations/{org_id}` The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.storedInfoTypes.create = (params) => this._makeRequest('v2/{+parent}/storedInfoTypes', 'POST', params);

    /**
     * Updates the stored infoType by creating a new version. The existing version will continue to be used until the new version is ready. See https://cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes to learn more.
     * @param {string} params.name - (Required) Required. Resource name of organization and storedInfoType to be updated, for example `organizations/433245324/storedInfoTypes/432452342` or projects/project-id/storedInfoTypes/432452342.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.storedInfoTypes.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    /**
     * Gets a stored infoType. See https://cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes to learn more.
     * @param {string} params.name - (Required) Required. Resource name of the organization and storedInfoType to be read, for example `organizations/433245324/storedInfoTypes/432452342` or projects/project-id/storedInfoTypes/432452342.
     * @return {object} The API response object.
     */
    this.organizations.storedInfoTypes.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Lists stored infoTypes. See https://cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes to learn more.
     * @param {string} params.locationId - Deprecated. This field has no effect.
     * @param {string} params.orderBy - Comma-separated list of fields to order by, followed by `asc` or `desc` postfix. This list is case insensitive. The default sorting order is ascending. Redundant space characters are insignificant. Example: `name asc, display_name, create_time desc` Supported fields are: - `create_time`: corresponds to the time the most recent version of the resource was created. - `state`: corresponds to the state of the resource. - `name`: corresponds to resource name. - `display_name`: corresponds to info type's display name.
     * @param {integer} params.pageSize - Size of the page. This value can be limited by the server. If zero server returns a page of max size 100.
     * @param {string} params.pageToken - Page token to continue retrieval. Comes from the previous call to `ListStoredInfoTypes`.
     * @param {string} params.parent - (Required) Required. Parent resource name. The format of this value varies depending on the scope of the request (project or organization) and whether you have [specified a processing location](https://cloud.google.com/sensitive-data-protection/docs/specifying-location): + Projects scope, location specified: `projects/{project_id}/locations/{location_id}` + Projects scope, no location specified (defaults to global): `projects/{project_id}` The following example `parent` string specifies a parent project with the identifier `example-project`, and specifies the `europe-west3` location for processing data: parent=projects/example-project/locations/europe-west3
     * @return {object} The API response object.
     */
    this.organizations.storedInfoTypes.list = (params) => this._makeRequest('v2/{+parent}/storedInfoTypes', 'GET', params);

    /**
     * Deletes a stored infoType. See https://cloud.google.com/sensitive-data-protection/docs/creating-stored-infotypes to learn more.
     * @param {string} params.name - (Required) Required. Resource name of the organization and storedInfoType to be deleted, for example `organizations/433245324/storedInfoTypes/432452342` or projects/project-id/storedInfoTypes/432452342.
     * @return {object} The API response object.
     */
    this.organizations.storedInfoTypes.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);
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
