
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


    this.apps = {};

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
    this.apps.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/apps/{appsId}/operations', 'GET', apiParams, clientConfig);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.appsId - (Required) Part of `name`. The name of the operation resource.
     * @param {string} apiParams.operationsId - (Required) Part of `name`. See documentation of `appsId`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.apps.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/apps/{appsId}/operations/{operationsId}', 'GET', apiParams, clientConfig);

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
    this.apps.authorizedDomains.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/apps/{appsId}/authorizedDomains', 'GET', apiParams, clientConfig);

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
    this.apps.authorizedCertificates.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/apps/{appsId}/authorizedCertificates', 'GET', apiParams, clientConfig);

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
    this.apps.authorizedCertificates.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/apps/{appsId}/authorizedCertificates/{authorizedCertificatesId}', 'GET', apiParams, clientConfig);

    /**
     * Uploads the specified SSL certificate.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.appsId - (Required) Part of `parent`. Required. Name of the parent Application resource. Example: apps/myapp.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.apps.authorizedCertificates.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/apps/{appsId}/authorizedCertificates', 'POST', apiParams, clientConfig);

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
    this.apps.authorizedCertificates.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/apps/{appsId}/authorizedCertificates/{authorizedCertificatesId}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes the specified SSL certificate.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.appsId - (Required) Part of `name`. Required. Name of the resource to delete. Example: apps/myapp/authorizedCertificates/12345.
     * @param {string} apiParams.authorizedCertificatesId - (Required) Part of `name`. See documentation of `appsId`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.apps.authorizedCertificates.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/apps/{appsId}/authorizedCertificates/{authorizedCertificatesId}', 'DELETE', apiParams, clientConfig);

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
    this.apps.domainMappings.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/apps/{appsId}/domainMappings', 'GET', apiParams, clientConfig);

    /**
     * Gets the specified domain mapping.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.appsId - (Required) Part of `name`. Required. Name of the resource requested. Example: apps/myapp/domainMappings/example.com.
     * @param {string} apiParams.domainMappingsId - (Required) Part of `name`. See documentation of `appsId`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.apps.domainMappings.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/apps/{appsId}/domainMappings/{domainMappingsId}', 'GET', apiParams, clientConfig);

    /**
     * Maps a domain to an application. A user must be authorized to administer a domain in order to map it to an application. For a list of available authorized domains, see AuthorizedDomains.ListAuthorizedDomains.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.appsId - (Required) Part of `parent`. Required. Name of the parent Application resource. Example: apps/myapp.
     * @param {boolean} apiParams.noManagedCertificate - Whether a managed certificate should be provided by App Engine. If true, a certificate ID must be manaually set in the DomainMapping resource to configure SSL for this domain. If false, a managed certificate will be provisioned and a certificate ID will be automatically populated.
     * @param {string} apiParams.overrideStrategy - Whether the domain creation should override any existing mappings for this domain. By default, overrides are rejected.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.apps.domainMappings.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/apps/{appsId}/domainMappings', 'POST', apiParams, clientConfig);

    /**
     * Updates the specified domain mapping. To map an SSL certificate to a domain mapping, update certificate_id to point to an AuthorizedCertificate resource. A user must be authorized to administer the associated domain in order to update a DomainMapping resource.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.appsId - (Required) Part of `name`. Required. Name of the resource to update. Example: apps/myapp/domainMappings/example.com.
     * @param {string} apiParams.domainMappingsId - (Required) Part of `name`. See documentation of `appsId`.
     * @param {boolean} apiParams.noManagedCertificate - Whether a managed certificate should be provided by App Engine. If true, a certificate ID must be manually set in the DomainMapping resource to configure SSL for this domain. If false, a managed certificate will be provisioned and a certificate ID will be automatically populated. Only applicable if ssl_settings.certificate_id is specified in the update mask.
     * @param {string} apiParams.updateMask - Required. Standard field mask for the set of fields to be updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.apps.domainMappings.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/apps/{appsId}/domainMappings/{domainMappingsId}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes the specified domain mapping. A user must be authorized to administer the associated domain in order to delete a DomainMapping resource.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.appsId - (Required) Part of `name`. Required. Name of the resource to delete. Example: apps/myapp/domainMappings/example.com.
     * @param {string} apiParams.domainMappingsId - (Required) Part of `name`. See documentation of `appsId`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.apps.domainMappings.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/apps/{appsId}/domainMappings/{domainMappingsId}', 'DELETE', apiParams, clientConfig);

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
    this.apps.locations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/apps/{appsId}/locations', 'GET', apiParams, clientConfig);

    /**
     * Gets information about a location.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.appsId - (Required) Part of `name`. Resource name for the location.
     * @param {string} apiParams.locationsId - (Required) Part of `name`. See documentation of `appsId`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.apps.locations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/apps/{appsId}/locations/{locationsId}', 'GET', apiParams, clientConfig);

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
    this.projects.locations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/projects/{projectsId}/locations', 'GET', apiParams, clientConfig);

    /**
     * Gets information about a location.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.locationsId - (Required) Part of `name`. See documentation of `projectsId`.
     * @param {string} apiParams.projectsId - (Required) Part of `name`. Resource name for the location.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/projects/{projectsId}/locations/{locationsId}', 'GET', apiParams, clientConfig);

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
    this.projects.locations.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/projects/{projectsId}/locations/{locationsId}/operations', 'GET', apiParams, clientConfig);

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
    this.projects.locations.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}', 'GET', apiParams, clientConfig);

    this.projects.locations.applications = {};

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
    this.projects.locations.applications.authorizedDomains.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/projects/{projectsId}/locations/{locationsId}/applications/{applicationsId}/authorizedDomains', 'GET', apiParams, clientConfig);

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
    this.projects.locations.applications.authorizedCertificates.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/projects/{projectsId}/locations/{locationsId}/applications/{applicationsId}/authorizedCertificates', 'GET', apiParams, clientConfig);

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
    this.projects.locations.applications.authorizedCertificates.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/projects/{projectsId}/locations/{locationsId}/applications/{applicationsId}/authorizedCertificates/{authorizedCertificatesId}', 'GET', apiParams, clientConfig);

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
    this.projects.locations.applications.authorizedCertificates.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/projects/{projectsId}/locations/{locationsId}/applications/{applicationsId}/authorizedCertificates', 'POST', apiParams, clientConfig);

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
    this.projects.locations.applications.authorizedCertificates.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/projects/{projectsId}/locations/{locationsId}/applications/{applicationsId}/authorizedCertificates/{authorizedCertificatesId}', 'PATCH', apiParams, clientConfig);

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
    this.projects.locations.applications.authorizedCertificates.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/projects/{projectsId}/locations/{locationsId}/applications/{applicationsId}/authorizedCertificates/{authorizedCertificatesId}', 'DELETE', apiParams, clientConfig);

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
    this.projects.locations.applications.domainMappings.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/projects/{projectsId}/locations/{locationsId}/applications/{applicationsId}/domainMappings/{domainMappingsId}', 'GET', apiParams, clientConfig);

    /**
     * Maps a domain to an application. A user must be authorized to administer a domain in order to map it to an application. For a list of available authorized domains, see AuthorizedDomains.ListAuthorizedDomains.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.applicationsId - (Required) Part of `parent`. See documentation of `projectsId`.
     * @param {string} apiParams.locationsId - (Required) Part of `parent`. See documentation of `projectsId`.
     * @param {boolean} apiParams.noManagedCertificate - Whether a managed certificate should be provided by App Engine. If true, a certificate ID must be manaually set in the DomainMapping resource to configure SSL for this domain. If false, a managed certificate will be provisioned and a certificate ID will be automatically populated.
     * @param {string} apiParams.overrideStrategy - Whether the domain creation should override any existing mappings for this domain. By default, overrides are rejected.
     * @param {string} apiParams.projectsId - (Required) Part of `parent`. Required. Name of the parent Application resource. Example: apps/myapp.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.applications.domainMappings.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/projects/{projectsId}/locations/{locationsId}/applications/{applicationsId}/domainMappings', 'POST', apiParams, clientConfig);
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
