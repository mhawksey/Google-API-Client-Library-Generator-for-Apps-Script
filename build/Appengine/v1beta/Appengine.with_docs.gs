
/**
 * Google Apps Script client library for the App Engine Admin API
 * Documentation URL: https://cloud.google.com/appengine/docs/admin-api/
 * @class
 */
class Appengine {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://appengine.googleapis.com/';
    this._servicePath = '';


    this.projects = {};

    this.projects.locations = {};

    /**
     * Lists information about the supported locations for this service.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.extraLocationTypes - Optional. Do not use this field. It is unsupported and is ignored unless explicitly documented otherwise. This is primarily for internal usage.
     * @param {string} apiParams.filter - A filter to narrow down results to a preferred subset. The filtering language accepts strings like "displayName=tokyo", and is documented in more detail in AIP-160 (https://google.aip.dev/160).
     * @param {integer} apiParams.pageSize - The maximum number of results to return. If not set, the service selects a default.
     * @param {string} apiParams.pageToken - A page token received from the next_page_token field in the response. Send that page token to receive the subsequent page.
     * @param {string} apiParams.projectsId - (Required) Part of `name`. The resource that owns the locations collection, if applicable.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/projects/{projectsId}/locations', 'GET', apiParams, clientConfig);

    /**
     * Gets information about a location.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.locationsId - (Required) Part of `name`. See documentation of `projectsId`.
     * @param {string} apiParams.projectsId - (Required) Part of `name`. Resource name for the location.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/projects/{projectsId}/locations/{locationsId}', 'GET', apiParams, clientConfig);

    this.projects.locations.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - The standard list filter.
     * @param {string} apiParams.locationsId - (Required) Part of `name`. See documentation of `projectsId`.
     * @param {integer} apiParams.pageSize - The standard list page size.
     * @param {string} apiParams.pageToken - The standard list page token.
     * @param {string} apiParams.projectsId - (Required) Part of `name`. The name of the operation's parent resource.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/projects/{projectsId}/locations/{locationsId}/operations', 'GET', apiParams, clientConfig);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.locationsId - (Required) Part of `name`. See documentation of `projectsId`.
     * @param {string} apiParams.operationsId - (Required) Part of `name`. See documentation of `projectsId`.
     * @param {string} apiParams.projectsId - (Required) Part of `name`. The name of the operation resource.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}', 'GET', apiParams, clientConfig);

    this.projects.locations.applications = {};

    /**
     * Updates the specified Application resource. You can update the following fields: auth_domain - Google authentication domain for controlling user access to the application. default_cookie_expiration - Cookie expiration policy for the application. iap - Identity-Aware Proxy properties for the application.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.applicationsId - (Required) Part of `name`. See documentation of `projectsId`.
     * @param {string} apiParams.locationsId - (Required) Part of `name`. See documentation of `projectsId`.
     * @param {string} apiParams.projectsId - (Required) Part of `name`. Required. Name of the Application resource to update. Example: apps/myapp.
     * @param {string} apiParams.updateMask - Required. Standard field mask for the set of fields to be updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.applications.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/projects/{projectsId}/locations/{locationsId}/applications/{applicationsId}', 'PATCH', apiParams, clientConfig);

    this.projects.locations.applications.services = {};

    /**
     * Updates the configuration of the specified service.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.applicationsId - (Required) Part of `name`. See documentation of `projectsId`.
     * @param {string} apiParams.locationsId - (Required) Part of `name`. See documentation of `projectsId`.
     * @param {boolean} apiParams.migrateTraffic - Set to true to gradually shift traffic to one or more versions that you specify. By default, traffic is shifted immediately. For gradual traffic migration, the target versions must be located within instances that are configured for both warmup requests (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#InboundServiceType) and automatic scaling (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#AutomaticScaling). You must specify the shardBy (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services#ShardBy) field in the Service resource. Gradual traffic migration is not supported in the App Engine flexible environment. For examples, see Migrating and Splitting Traffic (https://cloud.google.com/appengine/docs/admin-api/migrating-splitting-traffic).
     * @param {string} apiParams.projectsId - (Required) Part of `name`. Required. Name of the resource to update. Example: apps/myapp/services/default.
     * @param {string} apiParams.servicesId - (Required) Part of `name`. See documentation of `projectsId`.
     * @param {string} apiParams.updateMask - Required. Standard field mask for the set of fields to be updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.applications.services.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/projects/{projectsId}/locations/{locationsId}/applications/{applicationsId}/services/{servicesId}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes the specified service and all enclosed versions.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.applicationsId - (Required) Part of `name`. See documentation of `projectsId`.
     * @param {string} apiParams.locationsId - (Required) Part of `name`. See documentation of `projectsId`.
     * @param {string} apiParams.projectsId - (Required) Part of `name`. Required. Name of the resource requested. Example: apps/myapp/services/default.
     * @param {string} apiParams.servicesId - (Required) Part of `name`. See documentation of `projectsId`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.applications.services.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/projects/{projectsId}/locations/{locationsId}/applications/{applicationsId}/services/{servicesId}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.applications.services.versions = {};

    /**
     * Updates the specified Version resource. You can specify the following fields depending on the App Engine environment and type of scaling that the version resource uses:Standard environment instance_class (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.instance_class)automatic scaling in the standard environment: automatic_scaling.min_idle_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.automatic_scaling) automatic_scaling.max_idle_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.automatic_scaling) automaticScaling.standard_scheduler_settings.max_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#StandardSchedulerSettings) automaticScaling.standard_scheduler_settings.min_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#StandardSchedulerSettings) automaticScaling.standard_scheduler_settings.target_cpu_utilization (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#StandardSchedulerSettings) automaticScaling.standard_scheduler_settings.target_throughput_utilization (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#StandardSchedulerSettings)basic scaling or manual scaling in the standard environment: serving_status (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.serving_status) manual_scaling.instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#manualscaling)Flexible environment serving_status (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.serving_status)automatic scaling in the flexible environment: automatic_scaling.min_total_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.automatic_scaling) automatic_scaling.max_total_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.automatic_scaling) automatic_scaling.cool_down_period_sec (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.automatic_scaling) automatic_scaling.cpu_utilization.target_utilization (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.automatic_scaling)manual scaling in the flexible environment: manual_scaling.instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#manualscaling)
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.applicationsId - (Required) Part of `name`. See documentation of `projectsId`.
     * @param {string} apiParams.locationsId - (Required) Part of `name`. See documentation of `projectsId`.
     * @param {string} apiParams.projectsId - (Required) Part of `name`. Required. Name of the resource to update. Example: apps/myapp/services/default/versions/1.
     * @param {string} apiParams.servicesId - (Required) Part of `name`. See documentation of `projectsId`.
     * @param {string} apiParams.updateMask - Standard field mask for the set of fields to be updated.
     * @param {string} apiParams.versionsId - (Required) Part of `name`. See documentation of `projectsId`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.applications.services.versions.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/projects/{projectsId}/locations/{locationsId}/applications/{applicationsId}/services/{servicesId}/versions/{versionsId}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes an existing Version resource.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.applicationsId - (Required) Part of `name`. See documentation of `projectsId`.
     * @param {string} apiParams.locationsId - (Required) Part of `name`. See documentation of `projectsId`.
     * @param {string} apiParams.projectsId - (Required) Part of `name`. Required. Name of the resource requested. Example: apps/myapp/services/default/versions/v1.
     * @param {string} apiParams.servicesId - (Required) Part of `name`. See documentation of `projectsId`.
     * @param {string} apiParams.versionsId - (Required) Part of `name`. See documentation of `projectsId`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.applications.services.versions.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/projects/{projectsId}/locations/{locationsId}/applications/{applicationsId}/services/{servicesId}/versions/{versionsId}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.applications.authorizedDomains = {};

    /**
     * Lists all domains the user is authorized to administer.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.applicationsId - (Required) Part of `parent`. See documentation of `projectsId`.
     * @param {string} apiParams.locationsId - (Required) Part of `parent`. See documentation of `projectsId`.
     * @param {integer} apiParams.pageSize - Maximum results to return per page.
     * @param {string} apiParams.pageToken - Continuation token for fetching the next page of results.
     * @param {string} apiParams.projectsId - (Required) Part of `parent`. Required. Name of the parent Application resource. Example: apps/myapp.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.applications.authorizedDomains.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/projects/{projectsId}/locations/{locationsId}/applications/{applicationsId}/authorizedDomains', 'GET', apiParams, clientConfig);

    this.projects.locations.applications.authorizedCertificates = {};

    /**
     * Lists all SSL certificates the user is authorized to administer.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.applicationsId - (Required) Part of `parent`. See documentation of `projectsId`.
     * @param {string} apiParams.locationsId - (Required) Part of `parent`. See documentation of `projectsId`.
     * @param {integer} apiParams.pageSize - Maximum results to return per page.
     * @param {string} apiParams.pageToken - Continuation token for fetching the next page of results.
     * @param {string} apiParams.projectsId - (Required) Part of `parent`. Required. Name of the parent Application resource. Example: apps/myapp.
     * @param {string} apiParams.view - Controls the set of fields returned in the LIST response.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.applications.authorizedCertificates.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/projects/{projectsId}/locations/{locationsId}/applications/{applicationsId}/authorizedCertificates', 'GET', apiParams, clientConfig);

    /**
     * Gets the specified SSL certificate.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.applicationsId - (Required) Part of `name`. See documentation of `projectsId`.
     * @param {string} apiParams.authorizedCertificatesId - (Required) Part of `name`. See documentation of `projectsId`.
     * @param {string} apiParams.locationsId - (Required) Part of `name`. See documentation of `projectsId`.
     * @param {string} apiParams.projectsId - (Required) Part of `name`. Required. Name of the resource requested. Example: apps/myapp/authorizedCertificates/12345.
     * @param {string} apiParams.view - Controls the set of fields returned in the GET response.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.applications.authorizedCertificates.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/projects/{projectsId}/locations/{locationsId}/applications/{applicationsId}/authorizedCertificates/{authorizedCertificatesId}', 'GET', apiParams, clientConfig);

    /**
     * Uploads the specified SSL certificate.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.applicationsId - (Required) Part of `parent`. See documentation of `projectsId`.
     * @param {string} apiParams.locationsId - (Required) Part of `parent`. See documentation of `projectsId`.
     * @param {string} apiParams.projectsId - (Required) Part of `parent`. Required. Name of the parent Application resource. Example: apps/myapp.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.applications.authorizedCertificates.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/projects/{projectsId}/locations/{locationsId}/applications/{applicationsId}/authorizedCertificates', 'POST', apiParams, clientConfig);

    /**
     * Updates the specified SSL certificate. To renew a certificate and maintain its existing domain mappings, update certificate_data with a new certificate. The new certificate must be applicable to the same domains as the original certificate. The certificate display_name may also be updated.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.applicationsId - (Required) Part of `name`. See documentation of `projectsId`.
     * @param {string} apiParams.authorizedCertificatesId - (Required) Part of `name`. See documentation of `projectsId`.
     * @param {string} apiParams.locationsId - (Required) Part of `name`. See documentation of `projectsId`.
     * @param {string} apiParams.projectsId - (Required) Part of `name`. Required. Name of the resource to update. Example: apps/myapp/authorizedCertificates/12345.
     * @param {string} apiParams.updateMask - Standard field mask for the set of fields to be updated. Updates are only supported on the certificate_raw_data and display_name fields.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.applications.authorizedCertificates.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/projects/{projectsId}/locations/{locationsId}/applications/{applicationsId}/authorizedCertificates/{authorizedCertificatesId}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes the specified SSL certificate.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.applicationsId - (Required) Part of `name`. See documentation of `projectsId`.
     * @param {string} apiParams.authorizedCertificatesId - (Required) Part of `name`. See documentation of `projectsId`.
     * @param {string} apiParams.locationsId - (Required) Part of `name`. See documentation of `projectsId`.
     * @param {string} apiParams.projectsId - (Required) Part of `name`. Required. Name of the resource to delete. Example: apps/myapp/authorizedCertificates/12345.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.applications.authorizedCertificates.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/projects/{projectsId}/locations/{locationsId}/applications/{applicationsId}/authorizedCertificates/{authorizedCertificatesId}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.applications.domainMappings = {};

    /**
     * Gets the specified domain mapping.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.applicationsId - (Required) Part of `name`. See documentation of `projectsId`.
     * @param {string} apiParams.domainMappingsId - (Required) Part of `name`. See documentation of `projectsId`.
     * @param {string} apiParams.locationsId - (Required) Part of `name`. See documentation of `projectsId`.
     * @param {string} apiParams.projectsId - (Required) Part of `name`. Required. Name of the resource requested. Example: apps/myapp/domainMappings/example.com.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.applications.domainMappings.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/projects/{projectsId}/locations/{locationsId}/applications/{applicationsId}/domainMappings/{domainMappingsId}', 'GET', apiParams, clientConfig);

    /**
     * Maps a domain to an application. A user must be authorized to administer a domain in order to map it to an application. For a list of available authorized domains, see AuthorizedDomains.ListAuthorizedDomains.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.applicationsId - (Required) Part of `parent`. See documentation of `projectsId`.
     * @param {string} apiParams.locationsId - (Required) Part of `parent`. See documentation of `projectsId`.
     * @param {string} apiParams.overrideStrategy - Whether the domain creation should override any existing mappings for this domain. By default, overrides are rejected.
     * @param {string} apiParams.projectsId - (Required) Part of `parent`. Required. Name of the parent Application resource. Example: apps/myapp.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.applications.domainMappings.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/projects/{projectsId}/locations/{locationsId}/applications/{applicationsId}/domainMappings', 'POST', apiParams, clientConfig);

    this.apps = {};

    /**
     * Gets information about an application.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.appsId - (Required) Part of `name`. Required. Name of the Application resource to get. Example: apps/myapp.
     * @param {string} apiParams.includeExtraData - Optional. Options to include extra data
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.apps.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/apps/{appsId}', 'GET', apiParams, clientConfig);

    /**
     * Creates an App Engine application for a Google Cloud Platform project. Required fields: id - The ID of the target Cloud Platform project. location - The region (https://cloud.google.com/appengine/docs/locations) where you want the App Engine application located.For more information about App Engine applications, see Managing Projects, Applications, and Billing (https://cloud.google.com/appengine/docs/standard/python/console/).
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.apps.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/apps', 'POST', apiParams, clientConfig);

    /**
     * Updates the specified Application resource. You can update the following fields: auth_domain - Google authentication domain for controlling user access to the application. default_cookie_expiration - Cookie expiration policy for the application. iap - Identity-Aware Proxy properties for the application.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.appsId - (Required) Part of `name`. Required. Name of the Application resource to update. Example: apps/myapp.
     * @param {string} apiParams.updateMask - Required. Standard field mask for the set of fields to be updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.apps.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/apps/{appsId}', 'PATCH', apiParams, clientConfig);

    /**
     * Recreates the required App Engine features for the specified App Engine application, for example a Cloud Storage bucket or App Engine service account. Use this method if you receive an error message about a missing feature, for example, Error retrieving the App Engine service account. If you have deleted your App Engine service account, this will not be able to recreate it. Instead, you should attempt to use the IAM undelete API if possible at https://cloud.google.com/iam/reference/rest/v1/projects.serviceAccounts/undelete?apix_params=%7B"name"%3A"projects%2F-%2FserviceAccounts%2Funique_id"%2C"resource"%3A%7B%7D%7D . If the deletion was recent, the numeric ID can be found in the Cloud Console Activity Log.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.appsId - (Required) Part of `name`. Required. Name of the application to repair. Example: apps/myapp
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.apps.repair = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/apps/{appsId}:repair', 'POST', apiParams, clientConfig);

    /**
     * Lists all the available runtimes for the application.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.appsId - (Required) Part of `parent`. Required. Name of the parent Application resource. Example: apps/myapp.
     * @param {string} apiParams.environment - Optional. The environment of the Application.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.apps.listRuntimes = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/apps/{appsId}:listRuntimes', 'GET', apiParams, clientConfig);

    this.apps.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.appsId - (Required) Part of `name`. The name of the operation's parent resource.
     * @param {string} apiParams.filter - The standard list filter.
     * @param {integer} apiParams.pageSize - The standard list page size.
     * @param {string} apiParams.pageToken - The standard list page token.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.apps.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/apps/{appsId}/operations', 'GET', apiParams, clientConfig);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.appsId - (Required) Part of `name`. The name of the operation resource.
     * @param {string} apiParams.operationsId - (Required) Part of `name`. See documentation of `appsId`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.apps.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/apps/{appsId}/operations/{operationsId}', 'GET', apiParams, clientConfig);

    this.apps.services = {};

    /**
     * Lists all the services in the application.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.appsId - (Required) Part of `parent`. Required. Name of the parent Application resource. Example: apps/myapp.
     * @param {integer} apiParams.pageSize - Maximum results to return per page.
     * @param {string} apiParams.pageToken - Continuation token for fetching the next page of results.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.apps.services.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/apps/{appsId}/services', 'GET', apiParams, clientConfig);

    /**
     * Gets the current configuration of the specified service.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.appsId - (Required) Part of `name`. Required. Name of the resource requested. Example: apps/myapp/services/default.
     * @param {string} apiParams.includeExtraData - Optional. Options to include extra data
     * @param {string} apiParams.servicesId - (Required) Part of `name`. See documentation of `appsId`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.apps.services.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/apps/{appsId}/services/{servicesId}', 'GET', apiParams, clientConfig);

    /**
     * Updates the configuration of the specified service.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.appsId - (Required) Part of `name`. Required. Name of the resource to update. Example: apps/myapp/services/default.
     * @param {boolean} apiParams.migrateTraffic - Set to true to gradually shift traffic to one or more versions that you specify. By default, traffic is shifted immediately. For gradual traffic migration, the target versions must be located within instances that are configured for both warmup requests (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#InboundServiceType) and automatic scaling (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#AutomaticScaling). You must specify the shardBy (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services#ShardBy) field in the Service resource. Gradual traffic migration is not supported in the App Engine flexible environment. For examples, see Migrating and Splitting Traffic (https://cloud.google.com/appengine/docs/admin-api/migrating-splitting-traffic).
     * @param {string} apiParams.servicesId - (Required) Part of `name`. See documentation of `appsId`.
     * @param {string} apiParams.updateMask - Required. Standard field mask for the set of fields to be updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.apps.services.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/apps/{appsId}/services/{servicesId}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes the specified service and all enclosed versions.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.appsId - (Required) Part of `name`. Required. Name of the resource requested. Example: apps/myapp/services/default.
     * @param {string} apiParams.servicesId - (Required) Part of `name`. See documentation of `appsId`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.apps.services.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/apps/{appsId}/services/{servicesId}', 'DELETE', apiParams, clientConfig);

    this.apps.services.versions = {};

    /**
     * Lists the versions of a service.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.appsId - (Required) Part of `parent`. Required. Name of the parent Service resource. Example: apps/myapp/services/default.
     * @param {integer} apiParams.pageSize - Maximum results to return per page.
     * @param {string} apiParams.pageToken - Continuation token for fetching the next page of results.
     * @param {string} apiParams.servicesId - (Required) Part of `parent`. See documentation of `appsId`.
     * @param {string} apiParams.view - Controls the set of fields returned in the List response.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.apps.services.versions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/apps/{appsId}/services/{servicesId}/versions', 'GET', apiParams, clientConfig);

    /**
     * Gets the specified Version resource. By default, only a BASIC_VIEW will be returned. Specify the FULL_VIEW parameter to get the full resource.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.appsId - (Required) Part of `name`. Required. Name of the resource requested. Example: apps/myapp/services/default/versions/v1.
     * @param {string} apiParams.includeExtraData - Optional. Options to include extra data
     * @param {string} apiParams.servicesId - (Required) Part of `name`. See documentation of `appsId`.
     * @param {string} apiParams.versionsId - (Required) Part of `name`. See documentation of `appsId`.
     * @param {string} apiParams.view - Controls the set of fields returned in the Get response.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.apps.services.versions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/apps/{appsId}/services/{servicesId}/versions/{versionsId}', 'GET', apiParams, clientConfig);

    /**
     * Deploys code and resource files to a new version.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.appsId - (Required) Part of `parent`. Required. Name of the parent resource to create this version under. Example: apps/myapp/services/default.
     * @param {string} apiParams.servicesId - (Required) Part of `parent`. See documentation of `appsId`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.apps.services.versions.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/apps/{appsId}/services/{servicesId}/versions', 'POST', apiParams, clientConfig);

    /**
     * Updates the specified Version resource. You can specify the following fields depending on the App Engine environment and type of scaling that the version resource uses:Standard environment instance_class (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.instance_class)automatic scaling in the standard environment: automatic_scaling.min_idle_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.automatic_scaling) automatic_scaling.max_idle_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.automatic_scaling) automaticScaling.standard_scheduler_settings.max_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#StandardSchedulerSettings) automaticScaling.standard_scheduler_settings.min_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#StandardSchedulerSettings) automaticScaling.standard_scheduler_settings.target_cpu_utilization (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#StandardSchedulerSettings) automaticScaling.standard_scheduler_settings.target_throughput_utilization (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#StandardSchedulerSettings)basic scaling or manual scaling in the standard environment: serving_status (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.serving_status) manual_scaling.instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#manualscaling)Flexible environment serving_status (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.serving_status)automatic scaling in the flexible environment: automatic_scaling.min_total_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.automatic_scaling) automatic_scaling.max_total_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.automatic_scaling) automatic_scaling.cool_down_period_sec (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.automatic_scaling) automatic_scaling.cpu_utilization.target_utilization (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.automatic_scaling)manual scaling in the flexible environment: manual_scaling.instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#manualscaling)
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.appsId - (Required) Part of `name`. Required. Name of the resource to update. Example: apps/myapp/services/default/versions/1.
     * @param {string} apiParams.servicesId - (Required) Part of `name`. See documentation of `appsId`.
     * @param {string} apiParams.updateMask - Standard field mask for the set of fields to be updated.
     * @param {string} apiParams.versionsId - (Required) Part of `name`. See documentation of `appsId`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.apps.services.versions.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/apps/{appsId}/services/{servicesId}/versions/{versionsId}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes an existing Version resource.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.appsId - (Required) Part of `name`. Required. Name of the resource requested. Example: apps/myapp/services/default/versions/v1.
     * @param {string} apiParams.servicesId - (Required) Part of `name`. See documentation of `appsId`.
     * @param {string} apiParams.versionsId - (Required) Part of `name`. See documentation of `appsId`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.apps.services.versions.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/apps/{appsId}/services/{servicesId}/versions/{versionsId}', 'DELETE', apiParams, clientConfig);

    this.apps.services.versions.instances = {};

    /**
     * Lists the instances of a version.Tip: To aggregate details about instances over time, see the Stackdriver Monitoring API (https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.timeSeries/list).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.appsId - (Required) Part of `parent`. Required. Name of the parent Version resource. Example: apps/myapp/services/default/versions/v1.
     * @param {integer} apiParams.pageSize - Maximum results to return per page.
     * @param {string} apiParams.pageToken - Continuation token for fetching the next page of results.
     * @param {string} apiParams.servicesId - (Required) Part of `parent`. See documentation of `appsId`.
     * @param {string} apiParams.versionsId - (Required) Part of `parent`. See documentation of `appsId`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.apps.services.versions.instances.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/apps/{appsId}/services/{servicesId}/versions/{versionsId}/instances', 'GET', apiParams, clientConfig);

    /**
     * Gets instance information.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.appsId - (Required) Part of `name`. Required. Name of the resource requested. Example: apps/myapp/services/default/versions/v1/instances/instance-1.
     * @param {string} apiParams.instancesId - (Required) Part of `name`. See documentation of `appsId`.
     * @param {string} apiParams.servicesId - (Required) Part of `name`. See documentation of `appsId`.
     * @param {string} apiParams.versionsId - (Required) Part of `name`. See documentation of `appsId`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.apps.services.versions.instances.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/apps/{appsId}/services/{servicesId}/versions/{versionsId}/instances/{instancesId}', 'GET', apiParams, clientConfig);

    /**
     * Stops a running instance.The instance might be automatically recreated based on the scaling settings of the version. For more information, see "How Instances are Managed" (standard environment (https://cloud.google.com/appengine/docs/standard/python/how-instances-are-managed) | flexible environment (https://cloud.google.com/appengine/docs/flexible/python/how-instances-are-managed)).To ensure that instances are not re-created and avoid getting billed, you can stop all instances within the target version by changing the serving status of the version to STOPPED with the apps.services.versions.patch (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions/patch) method.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.appsId - (Required) Part of `name`. Required. Name of the resource requested. Example: apps/myapp/services/default/versions/v1/instances/instance-1.
     * @param {string} apiParams.instancesId - (Required) Part of `name`. See documentation of `appsId`.
     * @param {string} apiParams.servicesId - (Required) Part of `name`. See documentation of `appsId`.
     * @param {string} apiParams.versionsId - (Required) Part of `name`. See documentation of `appsId`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.apps.services.versions.instances.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/apps/{appsId}/services/{servicesId}/versions/{versionsId}/instances/{instancesId}', 'DELETE', apiParams, clientConfig);

    /**
     * Enables debugging on a VM instance. This allows you to use the SSH command to connect to the virtual machine where the instance lives. While in "debug mode", the instance continues to serve live traffic. You should delete the instance when you are done debugging and then allow the system to take over and determine if another instance should be started.Only applicable for instances in App Engine flexible environment.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.appsId - (Required) Part of `name`. Required. Name of the resource requested. Example: apps/myapp/services/default/versions/v1/instances/instance-1.
     * @param {string} apiParams.instancesId - (Required) Part of `name`. See documentation of `appsId`.
     * @param {string} apiParams.servicesId - (Required) Part of `name`. See documentation of `appsId`.
     * @param {string} apiParams.versionsId - (Required) Part of `name`. See documentation of `appsId`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.apps.services.versions.instances.debug = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/apps/{appsId}/services/{servicesId}/versions/{versionsId}/instances/{instancesId}:debug', 'POST', apiParams, clientConfig);

    this.apps.firewall = {};

    this.apps.firewall.ingressRules = {};

    /**
     * Lists the firewall rules of an application.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.appsId - (Required) Part of `parent`. Name of the Firewall collection to retrieve. Example: apps/myapp/firewall/ingressRules.
     * @param {string} apiParams.matchingAddress - A valid IP Address. If set, only rules matching this address will be returned. The first returned rule will be the rule that fires on requests from this IP.
     * @param {integer} apiParams.pageSize - Maximum results to return per page.
     * @param {string} apiParams.pageToken - Continuation token for fetching the next page of results.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.apps.firewall.ingressRules.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/apps/{appsId}/firewall/ingressRules', 'GET', apiParams, clientConfig);

    /**
     * Replaces the entire firewall ruleset in one bulk operation. This overrides and replaces the rules of an existing firewall with the new rules.If the final rule does not match traffic with the '*' wildcard IP range, then an "allow all" rule is explicitly added to the end of the list.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.appsId - (Required) Part of `name`. Name of the Firewall collection to set. Example: apps/myapp/firewall/ingressRules.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.apps.firewall.ingressRules.batchUpdate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/apps/{appsId}/firewall/ingressRules:batchUpdate', 'POST', apiParams, clientConfig);

    /**
     * Creates a firewall rule for the application.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.appsId - (Required) Part of `parent`. Required. Name of the parent Firewall collection in which to create a new rule. Example: apps/myapp/firewall/ingressRules.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.apps.firewall.ingressRules.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/apps/{appsId}/firewall/ingressRules', 'POST', apiParams, clientConfig);

    /**
     * Gets the specified firewall rule.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.appsId - (Required) Part of `name`. Name of the Firewall resource to retrieve. Example: apps/myapp/firewall/ingressRules/100.
     * @param {string} apiParams.ingressRulesId - (Required) Part of `name`. See documentation of `appsId`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.apps.firewall.ingressRules.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/apps/{appsId}/firewall/ingressRules/{ingressRulesId}', 'GET', apiParams, clientConfig);

    /**
     * Updates the specified firewall rule.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.appsId - (Required) Part of `name`. Name of the Firewall resource to update. Example: apps/myapp/firewall/ingressRules/100.
     * @param {string} apiParams.ingressRulesId - (Required) Part of `name`. See documentation of `appsId`.
     * @param {string} apiParams.updateMask - Standard field mask for the set of fields to be updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.apps.firewall.ingressRules.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/apps/{appsId}/firewall/ingressRules/{ingressRulesId}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes the specified firewall rule.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.appsId - (Required) Part of `name`. Name of the Firewall resource to delete. Example: apps/myapp/firewall/ingressRules/100.
     * @param {string} apiParams.ingressRulesId - (Required) Part of `name`. See documentation of `appsId`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.apps.firewall.ingressRules.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/apps/{appsId}/firewall/ingressRules/{ingressRulesId}', 'DELETE', apiParams, clientConfig);

    this.apps.authorizedDomains = {};

    /**
     * Lists all domains the user is authorized to administer.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.appsId - (Required) Part of `parent`. Required. Name of the parent Application resource. Example: apps/myapp.
     * @param {integer} apiParams.pageSize - Maximum results to return per page.
     * @param {string} apiParams.pageToken - Continuation token for fetching the next page of results.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.apps.authorizedDomains.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/apps/{appsId}/authorizedDomains', 'GET', apiParams, clientConfig);

    this.apps.authorizedCertificates = {};

    /**
     * Lists all SSL certificates the user is authorized to administer.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.appsId - (Required) Part of `parent`. Required. Name of the parent Application resource. Example: apps/myapp.
     * @param {integer} apiParams.pageSize - Maximum results to return per page.
     * @param {string} apiParams.pageToken - Continuation token for fetching the next page of results.
     * @param {string} apiParams.view - Controls the set of fields returned in the LIST response.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.apps.authorizedCertificates.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/apps/{appsId}/authorizedCertificates', 'GET', apiParams, clientConfig);

    /**
     * Gets the specified SSL certificate.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.appsId - (Required) Part of `name`. Required. Name of the resource requested. Example: apps/myapp/authorizedCertificates/12345.
     * @param {string} apiParams.authorizedCertificatesId - (Required) Part of `name`. See documentation of `appsId`.
     * @param {string} apiParams.view - Controls the set of fields returned in the GET response.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.apps.authorizedCertificates.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/apps/{appsId}/authorizedCertificates/{authorizedCertificatesId}', 'GET', apiParams, clientConfig);

    /**
     * Uploads the specified SSL certificate.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.appsId - (Required) Part of `parent`. Required. Name of the parent Application resource. Example: apps/myapp.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.apps.authorizedCertificates.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/apps/{appsId}/authorizedCertificates', 'POST', apiParams, clientConfig);

    /**
     * Updates the specified SSL certificate. To renew a certificate and maintain its existing domain mappings, update certificate_data with a new certificate. The new certificate must be applicable to the same domains as the original certificate. The certificate display_name may also be updated.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.appsId - (Required) Part of `name`. Required. Name of the resource to update. Example: apps/myapp/authorizedCertificates/12345.
     * @param {string} apiParams.authorizedCertificatesId - (Required) Part of `name`. See documentation of `appsId`.
     * @param {string} apiParams.updateMask - Standard field mask for the set of fields to be updated. Updates are only supported on the certificate_raw_data and display_name fields.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.apps.authorizedCertificates.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/apps/{appsId}/authorizedCertificates/{authorizedCertificatesId}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes the specified SSL certificate.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.appsId - (Required) Part of `name`. Required. Name of the resource to delete. Example: apps/myapp/authorizedCertificates/12345.
     * @param {string} apiParams.authorizedCertificatesId - (Required) Part of `name`. See documentation of `appsId`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.apps.authorizedCertificates.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/apps/{appsId}/authorizedCertificates/{authorizedCertificatesId}', 'DELETE', apiParams, clientConfig);

    this.apps.domainMappings = {};

    /**
     * Lists the domain mappings on an application.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.appsId - (Required) Part of `parent`. Required. Name of the parent Application resource. Example: apps/myapp.
     * @param {integer} apiParams.pageSize - Maximum results to return per page.
     * @param {string} apiParams.pageToken - Continuation token for fetching the next page of results.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.apps.domainMappings.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/apps/{appsId}/domainMappings', 'GET', apiParams, clientConfig);

    /**
     * Gets the specified domain mapping.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.appsId - (Required) Part of `name`. Required. Name of the resource requested. Example: apps/myapp/domainMappings/example.com.
     * @param {string} apiParams.domainMappingsId - (Required) Part of `name`. See documentation of `appsId`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.apps.domainMappings.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/apps/{appsId}/domainMappings/{domainMappingsId}', 'GET', apiParams, clientConfig);

    /**
     * Maps a domain to an application. A user must be authorized to administer a domain in order to map it to an application. For a list of available authorized domains, see AuthorizedDomains.ListAuthorizedDomains.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.appsId - (Required) Part of `parent`. Required. Name of the parent Application resource. Example: apps/myapp.
     * @param {string} apiParams.overrideStrategy - Whether the domain creation should override any existing mappings for this domain. By default, overrides are rejected.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.apps.domainMappings.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/apps/{appsId}/domainMappings', 'POST', apiParams, clientConfig);

    /**
     * Updates the specified domain mapping. To map an SSL certificate to a domain mapping, update certificate_id to point to an AuthorizedCertificate resource. A user must be authorized to administer the associated domain in order to update a DomainMapping resource.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.appsId - (Required) Part of `name`. Required. Name of the resource to update. Example: apps/myapp/domainMappings/example.com.
     * @param {string} apiParams.domainMappingsId - (Required) Part of `name`. See documentation of `appsId`.
     * @param {string} apiParams.updateMask - Required. Standard field mask for the set of fields to be updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.apps.domainMappings.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/apps/{appsId}/domainMappings/{domainMappingsId}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes the specified domain mapping. A user must be authorized to administer the associated domain in order to delete a DomainMapping resource.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.appsId - (Required) Part of `name`. Required. Name of the resource to delete. Example: apps/myapp/domainMappings/example.com.
     * @param {string} apiParams.domainMappingsId - (Required) Part of `name`. See documentation of `appsId`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.apps.domainMappings.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/apps/{appsId}/domainMappings/{domainMappingsId}', 'DELETE', apiParams, clientConfig);

    this.apps.locations = {};

    /**
     * Lists information about the supported locations for this service.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.appsId - (Required) Part of `name`. The resource that owns the locations collection, if applicable.
     * @param {string} apiParams.extraLocationTypes - Optional. Do not use this field. It is unsupported and is ignored unless explicitly documented otherwise. This is primarily for internal usage.
     * @param {string} apiParams.filter - A filter to narrow down results to a preferred subset. The filtering language accepts strings like "displayName=tokyo", and is documented in more detail in AIP-160 (https://google.aip.dev/160).
     * @param {integer} apiParams.pageSize - The maximum number of results to return. If not set, the service selects a default.
     * @param {string} apiParams.pageToken - A page token received from the next_page_token field in the response. Send that page token to receive the subsequent page.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.apps.locations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/apps/{appsId}/locations', 'GET', apiParams, clientConfig);

    /**
     * Gets information about a location.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.appsId - (Required) Part of `name`. Resource name for the location.
     * @param {string} apiParams.locationsId - (Required) Part of `name`. See documentation of `appsId`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.apps.locations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/apps/{appsId}/locations/{locationsId}', 'GET', apiParams, clientConfig);
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
