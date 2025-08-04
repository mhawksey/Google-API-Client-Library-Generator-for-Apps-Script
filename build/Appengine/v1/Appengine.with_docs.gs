
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
    // "Private" properties using the underscore convention
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://appengine.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.apps = {};

    /**
     * Gets information about an application.
     * @param {string} params.appsId - (Required) Part of `name`. Name of the Application resource to get. Example: apps/myapp.
     * @param {string} params.includeExtraData - Options to include extra data
     * @return {object} The API response object.
     */
    this.apps.get = (params) => this._makeRequest('v1/apps/{appsId}', 'GET', params);

    /**
     * Creates an App Engine application for a Google Cloud Platform project. Required fields: id - The ID of the target Cloud Platform project. location - The region (https://cloud.google.com/appengine/docs/locations) where you want the App Engine application located.For more information about App Engine applications, see Managing Projects, Applications, and Billing (https://cloud.google.com/appengine/docs/standard/python/console/).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.apps.create = (params) => this._makeRequest('v1/apps', 'POST', params);

    /**
     * Updates the specified Application resource. You can update the following fields: auth_domain - Google authentication domain for controlling user access to the application. default_cookie_expiration - Cookie expiration policy for the application. iap - Identity-Aware Proxy properties for the application.
     * @param {string} params.appsId - (Required) Part of `name`. Name of the Application resource to update. Example: apps/myapp.
     * @param {string} params.updateMask - Required. Standard field mask for the set of fields to be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.apps.patch = (params) => this._makeRequest('v1/apps/{appsId}', 'PATCH', params);

    /**
     * Recreates the required App Engine features for the specified App Engine application, for example a Cloud Storage bucket or App Engine service account. Use this method if you receive an error message about a missing feature, for example, Error retrieving the App Engine service account. If you have deleted your App Engine service account, this will not be able to recreate it. Instead, you should attempt to use the IAM undelete API if possible at https://cloud.google.com/iam/reference/rest/v1/projects.serviceAccounts/undelete?apix_params=%7B"name"%3A"projects%2F-%2FserviceAccounts%2Funique_id"%2C"resource"%3A%7B%7D%7D . If the deletion was recent, the numeric ID can be found in the Cloud Console Activity Log.
     * @param {string} params.appsId - (Required) Part of `name`. Name of the application to repair. Example: apps/myapp
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.apps.repair = (params) => this._makeRequest('v1/apps/{appsId}:repair', 'POST', params);

    /**
     * Lists all the available runtimes for the application.
     * @param {string} params.appsId - (Required) Part of `parent`. Required. Name of the parent Application resource. Example: apps/myapp.
     * @param {string} params.environment - Optional. The environment of the Application.
     * @return {object} The API response object.
     */
    this.apps.listRuntimes = (params) => this._makeRequest('v1/apps/{appsId}:listRuntimes', 'GET', params);

    this.apps.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.
     * @param {string} params.appsId - (Required) Part of `name`. The name of the operation's parent resource.
     * @param {string} params.filter - The standard list filter.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.apps.operations.list = (params) => this._makeRequest('v1/apps/{appsId}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.appsId - (Required) Part of `name`. The name of the operation resource.
     * @param {string} params.operationsId - (Required) Part of `name`. See documentation of `appsId`.
     * @return {object} The API response object.
     */
    this.apps.operations.get = (params) => this._makeRequest('v1/apps/{appsId}/operations/{operationsId}', 'GET', params);

    this.apps.services = {};

    /**
     * Lists all the services in the application.
     * @param {string} params.appsId - (Required) Part of `parent`. Name of the parent Application resource. Example: apps/myapp.
     * @param {integer} params.pageSize - Maximum results to return per page.
     * @param {string} params.pageToken - Continuation token for fetching the next page of results.
     * @return {object} The API response object.
     */
    this.apps.services.list = (params) => this._makeRequest('v1/apps/{appsId}/services', 'GET', params);

    /**
     * Gets the current configuration of the specified service.
     * @param {string} params.appsId - (Required) Part of `name`. Name of the resource requested. Example: apps/myapp/services/default.
     * @param {string} params.servicesId - (Required) Part of `name`. See documentation of `appsId`.
     * @return {object} The API response object.
     */
    this.apps.services.get = (params) => this._makeRequest('v1/apps/{appsId}/services/{servicesId}', 'GET', params);

    /**
     * Updates the configuration of the specified service.
     * @param {string} params.appsId - (Required) Part of `name`. Name of the resource to update. Example: apps/myapp/services/default.
     * @param {boolean} params.migrateTraffic - Set to true to gradually shift traffic to one or more versions that you specify. By default, traffic is shifted immediately. For gradual traffic migration, the target versions must be located within instances that are configured for both warmup requests (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#InboundServiceType) and automatic scaling (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#AutomaticScaling). You must specify the shardBy (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services#ShardBy) field in the Service resource. Gradual traffic migration is not supported in the App Engine flexible environment. For examples, see Migrating and Splitting Traffic (https://cloud.google.com/appengine/docs/admin-api/migrating-splitting-traffic).
     * @param {string} params.servicesId - (Required) Part of `name`. See documentation of `appsId`.
     * @param {string} params.updateMask - Required. Standard field mask for the set of fields to be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.apps.services.patch = (params) => this._makeRequest('v1/apps/{appsId}/services/{servicesId}', 'PATCH', params);

    /**
     * Deletes the specified service and all enclosed versions.
     * @param {string} params.appsId - (Required) Part of `name`. Name of the resource requested. Example: apps/myapp/services/default.
     * @param {string} params.servicesId - (Required) Part of `name`. See documentation of `appsId`.
     * @return {object} The API response object.
     */
    this.apps.services.delete = (params) => this._makeRequest('v1/apps/{appsId}/services/{servicesId}', 'DELETE', params);

    this.apps.services.versions = {};

    /**
     * Lists the versions of a service.
     * @param {string} params.appsId - (Required) Part of `parent`. Name of the parent Service resource. Example: apps/myapp/services/default.
     * @param {integer} params.pageSize - Maximum results to return per page.
     * @param {string} params.pageToken - Continuation token for fetching the next page of results.
     * @param {string} params.servicesId - (Required) Part of `parent`. See documentation of `appsId`.
     * @param {string} params.view - Controls the set of fields returned in the List response.
     * @return {object} The API response object.
     */
    this.apps.services.versions.list = (params) => this._makeRequest('v1/apps/{appsId}/services/{servicesId}/versions', 'GET', params);

    /**
     * Gets the specified Version resource. By default, only a BASIC_VIEW will be returned. Specify the FULL_VIEW parameter to get the full resource.
     * @param {string} params.appsId - (Required) Part of `name`. Name of the resource requested. Example: apps/myapp/services/default/versions/v1.
     * @param {string} params.servicesId - (Required) Part of `name`. See documentation of `appsId`.
     * @param {string} params.versionsId - (Required) Part of `name`. See documentation of `appsId`.
     * @param {string} params.view - Controls the set of fields returned in the Get response.
     * @return {object} The API response object.
     */
    this.apps.services.versions.get = (params) => this._makeRequest('v1/apps/{appsId}/services/{servicesId}/versions/{versionsId}', 'GET', params);

    /**
     * Deploys code and resource files to a new version.
     * @param {string} params.appsId - (Required) Part of `parent`. Name of the parent resource to create this version under. Example: apps/myapp/services/default.
     * @param {string} params.servicesId - (Required) Part of `parent`. See documentation of `appsId`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.apps.services.versions.create = (params) => this._makeRequest('v1/apps/{appsId}/services/{servicesId}/versions', 'POST', params);

    /**
     * Updates the specified Version resource. You can specify the following fields depending on the App Engine environment and type of scaling that the version resource uses:Standard environment instance_class (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.instance_class)automatic scaling in the standard environment: automatic_scaling.min_idle_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.automatic_scaling) automatic_scaling.max_idle_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.automatic_scaling) automaticScaling.standard_scheduler_settings.max_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#StandardSchedulerSettings) automaticScaling.standard_scheduler_settings.min_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#StandardSchedulerSettings) automaticScaling.standard_scheduler_settings.target_cpu_utilization (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#StandardSchedulerSettings) automaticScaling.standard_scheduler_settings.target_throughput_utilization (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#StandardSchedulerSettings)basic scaling or manual scaling in the standard environment: serving_status (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.serving_status) manual_scaling.instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#manualscaling)Flexible environment serving_status (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.serving_status)automatic scaling in the flexible environment: automatic_scaling.min_total_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.automatic_scaling) automatic_scaling.max_total_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.automatic_scaling) automatic_scaling.cool_down_period_sec (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.automatic_scaling) automatic_scaling.cpu_utilization.target_utilization (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.automatic_scaling)manual scaling in the flexible environment: manual_scaling.instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#manualscaling)
     * @param {string} params.appsId - (Required) Part of `name`. Name of the resource to update. Example: apps/myapp/services/default/versions/1.
     * @param {string} params.servicesId - (Required) Part of `name`. See documentation of `appsId`.
     * @param {string} params.updateMask - Standard field mask for the set of fields to be updated.
     * @param {string} params.versionsId - (Required) Part of `name`. See documentation of `appsId`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.apps.services.versions.patch = (params) => this._makeRequest('v1/apps/{appsId}/services/{servicesId}/versions/{versionsId}', 'PATCH', params);

    /**
     * Deletes an existing Version resource.
     * @param {string} params.appsId - (Required) Part of `name`. Name of the resource requested. Example: apps/myapp/services/default/versions/v1.
     * @param {string} params.servicesId - (Required) Part of `name`. See documentation of `appsId`.
     * @param {string} params.versionsId - (Required) Part of `name`. See documentation of `appsId`.
     * @return {object} The API response object.
     */
    this.apps.services.versions.delete = (params) => this._makeRequest('v1/apps/{appsId}/services/{servicesId}/versions/{versionsId}', 'DELETE', params);

    this.apps.services.versions.instances = {};

    /**
     * Lists the instances of a version.Tip: To aggregate details about instances over time, see the Stackdriver Monitoring API (https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.timeSeries/list).
     * @param {string} params.appsId - (Required) Part of `parent`. Name of the parent Version resource. Example: apps/myapp/services/default/versions/v1.
     * @param {integer} params.pageSize - Maximum results to return per page.
     * @param {string} params.pageToken - Continuation token for fetching the next page of results.
     * @param {string} params.servicesId - (Required) Part of `parent`. See documentation of `appsId`.
     * @param {string} params.versionsId - (Required) Part of `parent`. See documentation of `appsId`.
     * @return {object} The API response object.
     */
    this.apps.services.versions.instances.list = (params) => this._makeRequest('v1/apps/{appsId}/services/{servicesId}/versions/{versionsId}/instances', 'GET', params);

    /**
     * Gets instance information.
     * @param {string} params.appsId - (Required) Part of `name`. Name of the resource requested. Example: apps/myapp/services/default/versions/v1/instances/instance-1.
     * @param {string} params.instancesId - (Required) Part of `name`. See documentation of `appsId`.
     * @param {string} params.servicesId - (Required) Part of `name`. See documentation of `appsId`.
     * @param {string} params.versionsId - (Required) Part of `name`. See documentation of `appsId`.
     * @return {object} The API response object.
     */
    this.apps.services.versions.instances.get = (params) => this._makeRequest('v1/apps/{appsId}/services/{servicesId}/versions/{versionsId}/instances/{instancesId}', 'GET', params);

    /**
     * Stops a running instance.The instance might be automatically recreated based on the scaling settings of the version. For more information, see "How Instances are Managed" (standard environment (https://cloud.google.com/appengine/docs/standard/python/how-instances-are-managed) | flexible environment (https://cloud.google.com/appengine/docs/flexible/python/how-instances-are-managed)).To ensure that instances are not re-created and avoid getting billed, you can stop all instances within the target version by changing the serving status of the version to STOPPED with the apps.services.versions.patch (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions/patch) method.
     * @param {string} params.appsId - (Required) Part of `name`. Name of the resource requested. Example: apps/myapp/services/default/versions/v1/instances/instance-1.
     * @param {string} params.instancesId - (Required) Part of `name`. See documentation of `appsId`.
     * @param {string} params.servicesId - (Required) Part of `name`. See documentation of `appsId`.
     * @param {string} params.versionsId - (Required) Part of `name`. See documentation of `appsId`.
     * @return {object} The API response object.
     */
    this.apps.services.versions.instances.delete = (params) => this._makeRequest('v1/apps/{appsId}/services/{servicesId}/versions/{versionsId}/instances/{instancesId}', 'DELETE', params);

    /**
     * Enables debugging on a VM instance. This allows you to use the SSH command to connect to the virtual machine where the instance lives. While in "debug mode", the instance continues to serve live traffic. You should delete the instance when you are done debugging and then allow the system to take over and determine if another instance should be started.Only applicable for instances in App Engine flexible environment.
     * @param {string} params.appsId - (Required) Part of `name`. Name of the resource requested. Example: apps/myapp/services/default/versions/v1/instances/instance-1.
     * @param {string} params.instancesId - (Required) Part of `name`. See documentation of `appsId`.
     * @param {string} params.servicesId - (Required) Part of `name`. See documentation of `appsId`.
     * @param {string} params.versionsId - (Required) Part of `name`. See documentation of `appsId`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.apps.services.versions.instances.debug = (params) => this._makeRequest('v1/apps/{appsId}/services/{servicesId}/versions/{versionsId}/instances/{instancesId}:debug', 'POST', params);

    this.apps.firewall = {};

    this.apps.firewall.ingressRules = {};

    /**
     * Lists the firewall rules of an application.
     * @param {string} params.appsId - (Required) Part of `parent`. Name of the Firewall collection to retrieve. Example: apps/myapp/firewall/ingressRules.
     * @param {string} params.matchingAddress - A valid IP Address. If set, only rules matching this address will be returned. The first returned rule will be the rule that fires on requests from this IP.
     * @param {integer} params.pageSize - Maximum results to return per page.
     * @param {string} params.pageToken - Continuation token for fetching the next page of results.
     * @return {object} The API response object.
     */
    this.apps.firewall.ingressRules.list = (params) => this._makeRequest('v1/apps/{appsId}/firewall/ingressRules', 'GET', params);

    /**
     * Replaces the entire firewall ruleset in one bulk operation. This overrides and replaces the rules of an existing firewall with the new rules.If the final rule does not match traffic with the '*' wildcard IP range, then an "allow all" rule is explicitly added to the end of the list.
     * @param {string} params.appsId - (Required) Part of `name`. Name of the Firewall collection to set. Example: apps/myapp/firewall/ingressRules.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.apps.firewall.ingressRules.batchUpdate = (params) => this._makeRequest('v1/apps/{appsId}/firewall/ingressRules:batchUpdate', 'POST', params);

    /**
     * Creates a firewall rule for the application.
     * @param {string} params.appsId - (Required) Part of `parent`. Name of the parent Firewall collection in which to create a new rule. Example: apps/myapp/firewall/ingressRules.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.apps.firewall.ingressRules.create = (params) => this._makeRequest('v1/apps/{appsId}/firewall/ingressRules', 'POST', params);

    /**
     * Gets the specified firewall rule.
     * @param {string} params.appsId - (Required) Part of `name`. Name of the Firewall resource to retrieve. Example: apps/myapp/firewall/ingressRules/100.
     * @param {string} params.ingressRulesId - (Required) Part of `name`. See documentation of `appsId`.
     * @return {object} The API response object.
     */
    this.apps.firewall.ingressRules.get = (params) => this._makeRequest('v1/apps/{appsId}/firewall/ingressRules/{ingressRulesId}', 'GET', params);

    /**
     * Updates the specified firewall rule.
     * @param {string} params.appsId - (Required) Part of `name`. Name of the Firewall resource to update. Example: apps/myapp/firewall/ingressRules/100.
     * @param {string} params.ingressRulesId - (Required) Part of `name`. See documentation of `appsId`.
     * @param {string} params.updateMask - Standard field mask for the set of fields to be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.apps.firewall.ingressRules.patch = (params) => this._makeRequest('v1/apps/{appsId}/firewall/ingressRules/{ingressRulesId}', 'PATCH', params);

    /**
     * Deletes the specified firewall rule.
     * @param {string} params.appsId - (Required) Part of `name`. Name of the Firewall resource to delete. Example: apps/myapp/firewall/ingressRules/100.
     * @param {string} params.ingressRulesId - (Required) Part of `name`. See documentation of `appsId`.
     * @return {object} The API response object.
     */
    this.apps.firewall.ingressRules.delete = (params) => this._makeRequest('v1/apps/{appsId}/firewall/ingressRules/{ingressRulesId}', 'DELETE', params);

    this.apps.authorizedDomains = {};

    /**
     * Lists all domains the user is authorized to administer.
     * @param {string} params.appsId - (Required) Part of `parent`. Name of the parent Application resource. Example: apps/myapp.
     * @param {integer} params.pageSize - Maximum results to return per page.
     * @param {string} params.pageToken - Continuation token for fetching the next page of results.
     * @return {object} The API response object.
     */
    this.apps.authorizedDomains.list = (params) => this._makeRequest('v1/apps/{appsId}/authorizedDomains', 'GET', params);

    this.apps.authorizedCertificates = {};

    /**
     * Lists all SSL certificates the user is authorized to administer.
     * @param {string} params.appsId - (Required) Part of `parent`. Name of the parent Application resource. Example: apps/myapp.
     * @param {integer} params.pageSize - Maximum results to return per page.
     * @param {string} params.pageToken - Continuation token for fetching the next page of results.
     * @param {string} params.view - Controls the set of fields returned in the LIST response.
     * @return {object} The API response object.
     */
    this.apps.authorizedCertificates.list = (params) => this._makeRequest('v1/apps/{appsId}/authorizedCertificates', 'GET', params);

    /**
     * Gets the specified SSL certificate.
     * @param {string} params.appsId - (Required) Part of `name`. Name of the resource requested. Example: apps/myapp/authorizedCertificates/12345.
     * @param {string} params.authorizedCertificatesId - (Required) Part of `name`. See documentation of `appsId`.
     * @param {string} params.view - Controls the set of fields returned in the GET response.
     * @return {object} The API response object.
     */
    this.apps.authorizedCertificates.get = (params) => this._makeRequest('v1/apps/{appsId}/authorizedCertificates/{authorizedCertificatesId}', 'GET', params);

    /**
     * Uploads the specified SSL certificate.
     * @param {string} params.appsId - (Required) Part of `parent`. Name of the parent Application resource. Example: apps/myapp.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.apps.authorizedCertificates.create = (params) => this._makeRequest('v1/apps/{appsId}/authorizedCertificates', 'POST', params);

    /**
     * Updates the specified SSL certificate. To renew a certificate and maintain its existing domain mappings, update certificate_data with a new certificate. The new certificate must be applicable to the same domains as the original certificate. The certificate display_name may also be updated.
     * @param {string} params.appsId - (Required) Part of `name`. Name of the resource to update. Example: apps/myapp/authorizedCertificates/12345.
     * @param {string} params.authorizedCertificatesId - (Required) Part of `name`. See documentation of `appsId`.
     * @param {string} params.updateMask - Standard field mask for the set of fields to be updated. Updates are only supported on the certificate_raw_data and display_name fields.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.apps.authorizedCertificates.patch = (params) => this._makeRequest('v1/apps/{appsId}/authorizedCertificates/{authorizedCertificatesId}', 'PATCH', params);

    /**
     * Deletes the specified SSL certificate.
     * @param {string} params.appsId - (Required) Part of `name`. Name of the resource to delete. Example: apps/myapp/authorizedCertificates/12345.
     * @param {string} params.authorizedCertificatesId - (Required) Part of `name`. See documentation of `appsId`.
     * @return {object} The API response object.
     */
    this.apps.authorizedCertificates.delete = (params) => this._makeRequest('v1/apps/{appsId}/authorizedCertificates/{authorizedCertificatesId}', 'DELETE', params);

    this.apps.domainMappings = {};

    /**
     * Lists the domain mappings on an application.
     * @param {string} params.appsId - (Required) Part of `parent`. Name of the parent Application resource. Example: apps/myapp.
     * @param {integer} params.pageSize - Maximum results to return per page.
     * @param {string} params.pageToken - Continuation token for fetching the next page of results.
     * @return {object} The API response object.
     */
    this.apps.domainMappings.list = (params) => this._makeRequest('v1/apps/{appsId}/domainMappings', 'GET', params);

    /**
     * Gets the specified domain mapping.
     * @param {string} params.appsId - (Required) Part of `name`. Name of the resource requested. Example: apps/myapp/domainMappings/example.com.
     * @param {string} params.domainMappingsId - (Required) Part of `name`. See documentation of `appsId`.
     * @return {object} The API response object.
     */
    this.apps.domainMappings.get = (params) => this._makeRequest('v1/apps/{appsId}/domainMappings/{domainMappingsId}', 'GET', params);

    /**
     * Maps a domain to an application. A user must be authorized to administer a domain in order to map it to an application. For a list of available authorized domains, see AuthorizedDomains.ListAuthorizedDomains.
     * @param {string} params.appsId - (Required) Part of `parent`. Name of the parent Application resource. Example: apps/myapp.
     * @param {string} params.overrideStrategy - Whether the domain creation should override any existing mappings for this domain. By default, overrides are rejected.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.apps.domainMappings.create = (params) => this._makeRequest('v1/apps/{appsId}/domainMappings', 'POST', params);

    /**
     * Updates the specified domain mapping. To map an SSL certificate to a domain mapping, update certificate_id to point to an AuthorizedCertificate resource. A user must be authorized to administer the associated domain in order to update a DomainMapping resource.
     * @param {string} params.appsId - (Required) Part of `name`. Name of the resource to update. Example: apps/myapp/domainMappings/example.com.
     * @param {string} params.domainMappingsId - (Required) Part of `name`. See documentation of `appsId`.
     * @param {string} params.updateMask - Required. Standard field mask for the set of fields to be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.apps.domainMappings.patch = (params) => this._makeRequest('v1/apps/{appsId}/domainMappings/{domainMappingsId}', 'PATCH', params);

    /**
     * Deletes the specified domain mapping. A user must be authorized to administer the associated domain in order to delete a DomainMapping resource.
     * @param {string} params.appsId - (Required) Part of `name`. Name of the resource to delete. Example: apps/myapp/domainMappings/example.com.
     * @param {string} params.domainMappingsId - (Required) Part of `name`. See documentation of `appsId`.
     * @return {object} The API response object.
     */
    this.apps.domainMappings.delete = (params) => this._makeRequest('v1/apps/{appsId}/domainMappings/{domainMappingsId}', 'DELETE', params);

    this.apps.locations = {};

    /**
     * Lists information about the supported locations for this service.
     * @param {string} params.appsId - (Required) Part of `name`. The resource that owns the locations collection, if applicable.
     * @param {string} params.extraLocationTypes - Optional. A list of extra location types that should be used as conditions for controlling the visibility of the locations.
     * @param {string} params.filter - A filter to narrow down results to a preferred subset. The filtering language accepts strings like "displayName=tokyo", and is documented in more detail in AIP-160 (https://google.aip.dev/160).
     * @param {integer} params.pageSize - The maximum number of results to return. If not set, the service selects a default.
     * @param {string} params.pageToken - A page token received from the next_page_token field in the response. Send that page token to receive the subsequent page.
     * @return {object} The API response object.
     */
    this.apps.locations.list = (params) => this._makeRequest('v1/apps/{appsId}/locations', 'GET', params);

    /**
     * Gets information about a location.
     * @param {string} params.appsId - (Required) Part of `name`. Resource name for the location.
     * @param {string} params.locationsId - (Required) Part of `name`. See documentation of `appsId`.
     * @return {object} The API response object.
     */
    this.apps.locations.get = (params) => this._makeRequest('v1/apps/{appsId}/locations/{locationsId}', 'GET', params);

    this.projects = {};

    this.projects.locations = {};

    this.projects.locations.applications = {};

    /**
     * Updates the specified Application resource. You can update the following fields: auth_domain - Google authentication domain for controlling user access to the application. default_cookie_expiration - Cookie expiration policy for the application. iap - Identity-Aware Proxy properties for the application.
     * @param {string} params.applicationsId - (Required) Part of `name`. See documentation of `projectsId`.
     * @param {string} params.locationsId - (Required) Part of `name`. See documentation of `projectsId`.
     * @param {string} params.projectsId - (Required) Part of `name`. Name of the Application resource to update. Example: apps/myapp.
     * @param {string} params.updateMask - Required. Standard field mask for the set of fields to be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.applications.patch = (params) => this._makeRequest('v1/projects/{projectsId}/locations/{locationsId}/applications/{applicationsId}', 'PATCH', params);

    this.projects.locations.applications.services = {};

    /**
     * Updates the configuration of the specified service.
     * @param {string} params.applicationsId - (Required) Part of `name`. See documentation of `projectsId`.
     * @param {string} params.locationsId - (Required) Part of `name`. See documentation of `projectsId`.
     * @param {boolean} params.migrateTraffic - Set to true to gradually shift traffic to one or more versions that you specify. By default, traffic is shifted immediately. For gradual traffic migration, the target versions must be located within instances that are configured for both warmup requests (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#InboundServiceType) and automatic scaling (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#AutomaticScaling). You must specify the shardBy (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services#ShardBy) field in the Service resource. Gradual traffic migration is not supported in the App Engine flexible environment. For examples, see Migrating and Splitting Traffic (https://cloud.google.com/appengine/docs/admin-api/migrating-splitting-traffic).
     * @param {string} params.projectsId - (Required) Part of `name`. Name of the resource to update. Example: apps/myapp/services/default.
     * @param {string} params.servicesId - (Required) Part of `name`. See documentation of `projectsId`.
     * @param {string} params.updateMask - Required. Standard field mask for the set of fields to be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.applications.services.patch = (params) => this._makeRequest('v1/projects/{projectsId}/locations/{locationsId}/applications/{applicationsId}/services/{servicesId}', 'PATCH', params);

    /**
     * Deletes the specified service and all enclosed versions.
     * @param {string} params.applicationsId - (Required) Part of `name`. See documentation of `projectsId`.
     * @param {string} params.locationsId - (Required) Part of `name`. See documentation of `projectsId`.
     * @param {string} params.projectsId - (Required) Part of `name`. Name of the resource requested. Example: apps/myapp/services/default.
     * @param {string} params.servicesId - (Required) Part of `name`. See documentation of `projectsId`.
     * @return {object} The API response object.
     */
    this.projects.locations.applications.services.delete = (params) => this._makeRequest('v1/projects/{projectsId}/locations/{locationsId}/applications/{applicationsId}/services/{servicesId}', 'DELETE', params);

    this.projects.locations.applications.services.versions = {};

    /**
     * Updates the specified Version resource. You can specify the following fields depending on the App Engine environment and type of scaling that the version resource uses:Standard environment instance_class (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.instance_class)automatic scaling in the standard environment: automatic_scaling.min_idle_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.automatic_scaling) automatic_scaling.max_idle_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.automatic_scaling) automaticScaling.standard_scheduler_settings.max_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#StandardSchedulerSettings) automaticScaling.standard_scheduler_settings.min_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#StandardSchedulerSettings) automaticScaling.standard_scheduler_settings.target_cpu_utilization (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#StandardSchedulerSettings) automaticScaling.standard_scheduler_settings.target_throughput_utilization (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#StandardSchedulerSettings)basic scaling or manual scaling in the standard environment: serving_status (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.serving_status) manual_scaling.instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#manualscaling)Flexible environment serving_status (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.serving_status)automatic scaling in the flexible environment: automatic_scaling.min_total_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.automatic_scaling) automatic_scaling.max_total_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.automatic_scaling) automatic_scaling.cool_down_period_sec (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.automatic_scaling) automatic_scaling.cpu_utilization.target_utilization (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#Version.FIELDS.automatic_scaling)manual scaling in the flexible environment: manual_scaling.instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions#manualscaling)
     * @param {string} params.applicationsId - (Required) Part of `name`. See documentation of `projectsId`.
     * @param {string} params.locationsId - (Required) Part of `name`. See documentation of `projectsId`.
     * @param {string} params.projectsId - (Required) Part of `name`. Name of the resource to update. Example: apps/myapp/services/default/versions/1.
     * @param {string} params.servicesId - (Required) Part of `name`. See documentation of `projectsId`.
     * @param {string} params.updateMask - Standard field mask for the set of fields to be updated.
     * @param {string} params.versionsId - (Required) Part of `name`. See documentation of `projectsId`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.applications.services.versions.patch = (params) => this._makeRequest('v1/projects/{projectsId}/locations/{locationsId}/applications/{applicationsId}/services/{servicesId}/versions/{versionsId}', 'PATCH', params);

    /**
     * Deletes an existing Version resource.
     * @param {string} params.applicationsId - (Required) Part of `name`. See documentation of `projectsId`.
     * @param {string} params.locationsId - (Required) Part of `name`. See documentation of `projectsId`.
     * @param {string} params.projectsId - (Required) Part of `name`. Name of the resource requested. Example: apps/myapp/services/default/versions/v1.
     * @param {string} params.servicesId - (Required) Part of `name`. See documentation of `projectsId`.
     * @param {string} params.versionsId - (Required) Part of `name`. See documentation of `projectsId`.
     * @return {object} The API response object.
     */
    this.projects.locations.applications.services.versions.delete = (params) => this._makeRequest('v1/projects/{projectsId}/locations/{locationsId}/applications/{applicationsId}/services/{servicesId}/versions/{versionsId}', 'DELETE', params);

    this.projects.locations.applications.authorizedDomains = {};

    /**
     * Lists all domains the user is authorized to administer.
     * @param {string} params.applicationsId - (Required) Part of `parent`. See documentation of `projectsId`.
     * @param {string} params.locationsId - (Required) Part of `parent`. See documentation of `projectsId`.
     * @param {integer} params.pageSize - Maximum results to return per page.
     * @param {string} params.pageToken - Continuation token for fetching the next page of results.
     * @param {string} params.projectsId - (Required) Part of `parent`. Name of the parent Application resource. Example: apps/myapp.
     * @return {object} The API response object.
     */
    this.projects.locations.applications.authorizedDomains.list = (params) => this._makeRequest('v1/projects/{projectsId}/locations/{locationsId}/applications/{applicationsId}/authorizedDomains', 'GET', params);

    this.projects.locations.applications.authorizedCertificates = {};

    /**
     * Lists all SSL certificates the user is authorized to administer.
     * @param {string} params.applicationsId - (Required) Part of `parent`. See documentation of `projectsId`.
     * @param {string} params.locationsId - (Required) Part of `parent`. See documentation of `projectsId`.
     * @param {integer} params.pageSize - Maximum results to return per page.
     * @param {string} params.pageToken - Continuation token for fetching the next page of results.
     * @param {string} params.projectsId - (Required) Part of `parent`. Name of the parent Application resource. Example: apps/myapp.
     * @param {string} params.view - Controls the set of fields returned in the LIST response.
     * @return {object} The API response object.
     */
    this.projects.locations.applications.authorizedCertificates.list = (params) => this._makeRequest('v1/projects/{projectsId}/locations/{locationsId}/applications/{applicationsId}/authorizedCertificates', 'GET', params);

    /**
     * Gets the specified SSL certificate.
     * @param {string} params.applicationsId - (Required) Part of `name`. See documentation of `projectsId`.
     * @param {string} params.authorizedCertificatesId - (Required) Part of `name`. See documentation of `projectsId`.
     * @param {string} params.locationsId - (Required) Part of `name`. See documentation of `projectsId`.
     * @param {string} params.projectsId - (Required) Part of `name`. Name of the resource requested. Example: apps/myapp/authorizedCertificates/12345.
     * @param {string} params.view - Controls the set of fields returned in the GET response.
     * @return {object} The API response object.
     */
    this.projects.locations.applications.authorizedCertificates.get = (params) => this._makeRequest('v1/projects/{projectsId}/locations/{locationsId}/applications/{applicationsId}/authorizedCertificates/{authorizedCertificatesId}', 'GET', params);

    /**
     * Uploads the specified SSL certificate.
     * @param {string} params.applicationsId - (Required) Part of `parent`. See documentation of `projectsId`.
     * @param {string} params.locationsId - (Required) Part of `parent`. See documentation of `projectsId`.
     * @param {string} params.projectsId - (Required) Part of `parent`. Name of the parent Application resource. Example: apps/myapp.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.applications.authorizedCertificates.create = (params) => this._makeRequest('v1/projects/{projectsId}/locations/{locationsId}/applications/{applicationsId}/authorizedCertificates', 'POST', params);

    /**
     * Updates the specified SSL certificate. To renew a certificate and maintain its existing domain mappings, update certificate_data with a new certificate. The new certificate must be applicable to the same domains as the original certificate. The certificate display_name may also be updated.
     * @param {string} params.applicationsId - (Required) Part of `name`. See documentation of `projectsId`.
     * @param {string} params.authorizedCertificatesId - (Required) Part of `name`. See documentation of `projectsId`.
     * @param {string} params.locationsId - (Required) Part of `name`. See documentation of `projectsId`.
     * @param {string} params.projectsId - (Required) Part of `name`. Name of the resource to update. Example: apps/myapp/authorizedCertificates/12345.
     * @param {string} params.updateMask - Standard field mask for the set of fields to be updated. Updates are only supported on the certificate_raw_data and display_name fields.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.applications.authorizedCertificates.patch = (params) => this._makeRequest('v1/projects/{projectsId}/locations/{locationsId}/applications/{applicationsId}/authorizedCertificates/{authorizedCertificatesId}', 'PATCH', params);

    /**
     * Deletes the specified SSL certificate.
     * @param {string} params.applicationsId - (Required) Part of `name`. See documentation of `projectsId`.
     * @param {string} params.authorizedCertificatesId - (Required) Part of `name`. See documentation of `projectsId`.
     * @param {string} params.locationsId - (Required) Part of `name`. See documentation of `projectsId`.
     * @param {string} params.projectsId - (Required) Part of `name`. Name of the resource to delete. Example: apps/myapp/authorizedCertificates/12345.
     * @return {object} The API response object.
     */
    this.projects.locations.applications.authorizedCertificates.delete = (params) => this._makeRequest('v1/projects/{projectsId}/locations/{locationsId}/applications/{applicationsId}/authorizedCertificates/{authorizedCertificatesId}', 'DELETE', params);

    this.projects.locations.applications.domainMappings = {};

    /**
     * Gets the specified domain mapping.
     * @param {string} params.applicationsId - (Required) Part of `name`. See documentation of `projectsId`.
     * @param {string} params.domainMappingsId - (Required) Part of `name`. See documentation of `projectsId`.
     * @param {string} params.locationsId - (Required) Part of `name`. See documentation of `projectsId`.
     * @param {string} params.projectsId - (Required) Part of `name`. Name of the resource requested. Example: apps/myapp/domainMappings/example.com.
     * @return {object} The API response object.
     */
    this.projects.locations.applications.domainMappings.get = (params) => this._makeRequest('v1/projects/{projectsId}/locations/{locationsId}/applications/{applicationsId}/domainMappings/{domainMappingsId}', 'GET', params);

    /**
     * Maps a domain to an application. A user must be authorized to administer a domain in order to map it to an application. For a list of available authorized domains, see AuthorizedDomains.ListAuthorizedDomains.
     * @param {string} params.applicationsId - (Required) Part of `parent`. See documentation of `projectsId`.
     * @param {string} params.locationsId - (Required) Part of `parent`. See documentation of `projectsId`.
     * @param {string} params.overrideStrategy - Whether the domain creation should override any existing mappings for this domain. By default, overrides are rejected.
     * @param {string} params.projectsId - (Required) Part of `parent`. Name of the parent Application resource. Example: apps/myapp.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.applications.domainMappings.create = (params) => this._makeRequest('v1/projects/{projectsId}/locations/{locationsId}/applications/{applicationsId}/domainMappings', 'POST', params);
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
