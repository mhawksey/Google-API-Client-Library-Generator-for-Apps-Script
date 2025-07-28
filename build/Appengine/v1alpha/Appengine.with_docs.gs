
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

    this.apps.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.
     * @param {string} params.appsId - (Required) Part of `name`. The name of the operation's parent resource.
     * @param {string} params.filter - The standard list filter.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.apps.operations.list = (params) => this._makeRequest('v1alpha/apps/{appsId}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.appsId - (Required) Part of `name`. The name of the operation resource.
     * @param {string} params.operationsId - (Required) Part of `name`. See documentation of `appsId`.
     * @return {object} The API response object.
     */
    this.apps.operations.get = (params) => this._makeRequest('v1alpha/apps/{appsId}/operations/{operationsId}', 'GET', params);

    this.apps.authorizedDomains = {};

    /**
     * Lists all domains the user is authorized to administer.
     * @param {string} params.appsId - (Required) Part of `parent`. Name of the parent Application resource. Example: apps/myapp.
     * @param {integer} params.pageSize - Maximum results to return per page.
     * @param {string} params.pageToken - Continuation token for fetching the next page of results.
     * @return {object} The API response object.
     */
    this.apps.authorizedDomains.list = (params) => this._makeRequest('v1alpha/apps/{appsId}/authorizedDomains', 'GET', params);

    this.apps.authorizedCertificates = {};

    /**
     * Lists all SSL certificates the user is authorized to administer.
     * @param {string} params.appsId - (Required) Part of `parent`. Name of the parent Application resource. Example: apps/myapp.
     * @param {integer} params.pageSize - Maximum results to return per page.
     * @param {string} params.pageToken - Continuation token for fetching the next page of results.
     * @param {string} params.view - Controls the set of fields returned in the LIST response.
     * @return {object} The API response object.
     */
    this.apps.authorizedCertificates.list = (params) => this._makeRequest('v1alpha/apps/{appsId}/authorizedCertificates', 'GET', params);

    /**
     * Gets the specified SSL certificate.
     * @param {string} params.appsId - (Required) Part of `name`. Name of the resource requested. Example: apps/myapp/authorizedCertificates/12345.
     * @param {string} params.authorizedCertificatesId - (Required) Part of `name`. See documentation of `appsId`.
     * @param {string} params.view - Controls the set of fields returned in the GET response.
     * @return {object} The API response object.
     */
    this.apps.authorizedCertificates.get = (params) => this._makeRequest('v1alpha/apps/{appsId}/authorizedCertificates/{authorizedCertificatesId}', 'GET', params);

    /**
     * Uploads the specified SSL certificate.
     * @param {string} params.appsId - (Required) Part of `parent`. Name of the parent Application resource. Example: apps/myapp.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.apps.authorizedCertificates.create = (params) => this._makeRequest('v1alpha/apps/{appsId}/authorizedCertificates', 'POST', params);

    /**
     * Updates the specified SSL certificate. To renew a certificate and maintain its existing domain mappings, update certificate_data with a new certificate. The new certificate must be applicable to the same domains as the original certificate. The certificate display_name may also be updated.
     * @param {string} params.appsId - (Required) Part of `name`. Name of the resource to update. Example: apps/myapp/authorizedCertificates/12345.
     * @param {string} params.authorizedCertificatesId - (Required) Part of `name`. See documentation of `appsId`.
     * @param {string} params.updateMask - Standard field mask for the set of fields to be updated. Updates are only supported on the certificate_raw_data and display_name fields.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.apps.authorizedCertificates.patch = (params) => this._makeRequest('v1alpha/apps/{appsId}/authorizedCertificates/{authorizedCertificatesId}', 'PATCH', params);

    /**
     * Deletes the specified SSL certificate.
     * @param {string} params.appsId - (Required) Part of `name`. Name of the resource to delete. Example: apps/myapp/authorizedCertificates/12345.
     * @param {string} params.authorizedCertificatesId - (Required) Part of `name`. See documentation of `appsId`.
     * @return {object} The API response object.
     */
    this.apps.authorizedCertificates.delete = (params) => this._makeRequest('v1alpha/apps/{appsId}/authorizedCertificates/{authorizedCertificatesId}', 'DELETE', params);

    this.apps.domainMappings = {};

    /**
     * Lists the domain mappings on an application.
     * @param {string} params.appsId - (Required) Part of `parent`. Name of the parent Application resource. Example: apps/myapp.
     * @param {integer} params.pageSize - Maximum results to return per page.
     * @param {string} params.pageToken - Continuation token for fetching the next page of results.
     * @return {object} The API response object.
     */
    this.apps.domainMappings.list = (params) => this._makeRequest('v1alpha/apps/{appsId}/domainMappings', 'GET', params);

    /**
     * Gets the specified domain mapping.
     * @param {string} params.appsId - (Required) Part of `name`. Name of the resource requested. Example: apps/myapp/domainMappings/example.com.
     * @param {string} params.domainMappingsId - (Required) Part of `name`. See documentation of `appsId`.
     * @return {object} The API response object.
     */
    this.apps.domainMappings.get = (params) => this._makeRequest('v1alpha/apps/{appsId}/domainMappings/{domainMappingsId}', 'GET', params);

    /**
     * Maps a domain to an application. A user must be authorized to administer a domain in order to map it to an application. For a list of available authorized domains, see AuthorizedDomains.ListAuthorizedDomains.
     * @param {string} params.appsId - (Required) Part of `parent`. Name of the parent Application resource. Example: apps/myapp.
     * @param {boolean} params.noManagedCertificate - Whether a managed certificate should be provided by App Engine. If true, a certificate ID must be manaually set in the DomainMapping resource to configure SSL for this domain. If false, a managed certificate will be provisioned and a certificate ID will be automatically populated.
     * @param {string} params.overrideStrategy - Whether the domain creation should override any existing mappings for this domain. By default, overrides are rejected.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.apps.domainMappings.create = (params) => this._makeRequest('v1alpha/apps/{appsId}/domainMappings', 'POST', params);

    /**
     * Updates the specified domain mapping. To map an SSL certificate to a domain mapping, update certificate_id to point to an AuthorizedCertificate resource. A user must be authorized to administer the associated domain in order to update a DomainMapping resource.
     * @param {string} params.appsId - (Required) Part of `name`. Name of the resource to update. Example: apps/myapp/domainMappings/example.com.
     * @param {string} params.domainMappingsId - (Required) Part of `name`. See documentation of `appsId`.
     * @param {boolean} params.noManagedCertificate - Whether a managed certificate should be provided by App Engine. If true, a certificate ID must be manually set in the DomainMapping resource to configure SSL for this domain. If false, a managed certificate will be provisioned and a certificate ID will be automatically populated. Only applicable if ssl_settings.certificate_id is specified in the update mask.
     * @param {string} params.updateMask - Required. Standard field mask for the set of fields to be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.apps.domainMappings.patch = (params) => this._makeRequest('v1alpha/apps/{appsId}/domainMappings/{domainMappingsId}', 'PATCH', params);

    /**
     * Deletes the specified domain mapping. A user must be authorized to administer the associated domain in order to delete a DomainMapping resource.
     * @param {string} params.appsId - (Required) Part of `name`. Name of the resource to delete. Example: apps/myapp/domainMappings/example.com.
     * @param {string} params.domainMappingsId - (Required) Part of `name`. See documentation of `appsId`.
     * @return {object} The API response object.
     */
    this.apps.domainMappings.delete = (params) => this._makeRequest('v1alpha/apps/{appsId}/domainMappings/{domainMappingsId}', 'DELETE', params);

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
    this.apps.locations.list = (params) => this._makeRequest('v1alpha/apps/{appsId}/locations', 'GET', params);

    /**
     * Gets information about a location.
     * @param {string} params.appsId - (Required) Part of `name`. Resource name for the location.
     * @param {string} params.locationsId - (Required) Part of `name`. See documentation of `appsId`.
     * @return {object} The API response object.
     */
    this.apps.locations.get = (params) => this._makeRequest('v1alpha/apps/{appsId}/locations/{locationsId}', 'GET', params);

    this.projects = {};

    this.projects.locations = {};

    /**
     * Lists information about the supported locations for this service.
     * @param {string} params.extraLocationTypes - Optional. A list of extra location types that should be used as conditions for controlling the visibility of the locations.
     * @param {string} params.filter - A filter to narrow down results to a preferred subset. The filtering language accepts strings like "displayName=tokyo", and is documented in more detail in AIP-160 (https://google.aip.dev/160).
     * @param {integer} params.pageSize - The maximum number of results to return. If not set, the service selects a default.
     * @param {string} params.pageToken - A page token received from the next_page_token field in the response. Send that page token to receive the subsequent page.
     * @param {string} params.projectsId - (Required) Part of `name`. The resource that owns the locations collection, if applicable.
     * @return {object} The API response object.
     */
    this.projects.locations.list = (params) => this._makeRequest('v1alpha/projects/{projectsId}/locations', 'GET', params);

    /**
     * Gets information about a location.
     * @param {string} params.locationsId - (Required) Part of `name`. See documentation of `projectsId`.
     * @param {string} params.projectsId - (Required) Part of `name`. Resource name for the location.
     * @return {object} The API response object.
     */
    this.projects.locations.get = (params) => this._makeRequest('v1alpha/projects/{projectsId}/locations/{locationsId}', 'GET', params);

    this.projects.locations.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.locationsId - (Required) Part of `name`. See documentation of `projectsId`.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @param {string} params.projectsId - (Required) Part of `name`. The name of the operation's parent resource.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.list = (params) => this._makeRequest('v1alpha/projects/{projectsId}/locations/{locationsId}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.locationsId - (Required) Part of `name`. See documentation of `projectsId`.
     * @param {string} params.operationsId - (Required) Part of `name`. See documentation of `projectsId`.
     * @param {string} params.projectsId - (Required) Part of `name`. The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.get = (params) => this._makeRequest('v1alpha/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}', 'GET', params);

    this.projects.locations.applications = {};

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
    this.projects.locations.applications.authorizedDomains.list = (params) => this._makeRequest('v1alpha/projects/{projectsId}/locations/{locationsId}/applications/{applicationsId}/authorizedDomains', 'GET', params);

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
    this.projects.locations.applications.authorizedCertificates.list = (params) => this._makeRequest('v1alpha/projects/{projectsId}/locations/{locationsId}/applications/{applicationsId}/authorizedCertificates', 'GET', params);

    /**
     * Gets the specified SSL certificate.
     * @param {string} params.applicationsId - (Required) Part of `name`. See documentation of `projectsId`.
     * @param {string} params.authorizedCertificatesId - (Required) Part of `name`. See documentation of `projectsId`.
     * @param {string} params.locationsId - (Required) Part of `name`. See documentation of `projectsId`.
     * @param {string} params.projectsId - (Required) Part of `name`. Name of the resource requested. Example: apps/myapp/authorizedCertificates/12345.
     * @param {string} params.view - Controls the set of fields returned in the GET response.
     * @return {object} The API response object.
     */
    this.projects.locations.applications.authorizedCertificates.get = (params) => this._makeRequest('v1alpha/projects/{projectsId}/locations/{locationsId}/applications/{applicationsId}/authorizedCertificates/{authorizedCertificatesId}', 'GET', params);

    /**
     * Uploads the specified SSL certificate.
     * @param {string} params.applicationsId - (Required) Part of `parent`. See documentation of `projectsId`.
     * @param {string} params.locationsId - (Required) Part of `parent`. See documentation of `projectsId`.
     * @param {string} params.projectsId - (Required) Part of `parent`. Name of the parent Application resource. Example: apps/myapp.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.applications.authorizedCertificates.create = (params) => this._makeRequest('v1alpha/projects/{projectsId}/locations/{locationsId}/applications/{applicationsId}/authorizedCertificates', 'POST', params);

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
    this.projects.locations.applications.authorizedCertificates.patch = (params) => this._makeRequest('v1alpha/projects/{projectsId}/locations/{locationsId}/applications/{applicationsId}/authorizedCertificates/{authorizedCertificatesId}', 'PATCH', params);

    /**
     * Deletes the specified SSL certificate.
     * @param {string} params.applicationsId - (Required) Part of `name`. See documentation of `projectsId`.
     * @param {string} params.authorizedCertificatesId - (Required) Part of `name`. See documentation of `projectsId`.
     * @param {string} params.locationsId - (Required) Part of `name`. See documentation of `projectsId`.
     * @param {string} params.projectsId - (Required) Part of `name`. Name of the resource to delete. Example: apps/myapp/authorizedCertificates/12345.
     * @return {object} The API response object.
     */
    this.projects.locations.applications.authorizedCertificates.delete = (params) => this._makeRequest('v1alpha/projects/{projectsId}/locations/{locationsId}/applications/{applicationsId}/authorizedCertificates/{authorizedCertificatesId}', 'DELETE', params);

    this.projects.locations.applications.domainMappings = {};

    /**
     * Gets the specified domain mapping.
     * @param {string} params.applicationsId - (Required) Part of `name`. See documentation of `projectsId`.
     * @param {string} params.domainMappingsId - (Required) Part of `name`. See documentation of `projectsId`.
     * @param {string} params.locationsId - (Required) Part of `name`. See documentation of `projectsId`.
     * @param {string} params.projectsId - (Required) Part of `name`. Name of the resource requested. Example: apps/myapp/domainMappings/example.com.
     * @return {object} The API response object.
     */
    this.projects.locations.applications.domainMappings.get = (params) => this._makeRequest('v1alpha/projects/{projectsId}/locations/{locationsId}/applications/{applicationsId}/domainMappings/{domainMappingsId}', 'GET', params);

    /**
     * Maps a domain to an application. A user must be authorized to administer a domain in order to map it to an application. For a list of available authorized domains, see AuthorizedDomains.ListAuthorizedDomains.
     * @param {string} params.applicationsId - (Required) Part of `parent`. See documentation of `projectsId`.
     * @param {string} params.locationsId - (Required) Part of `parent`. See documentation of `projectsId`.
     * @param {boolean} params.noManagedCertificate - Whether a managed certificate should be provided by App Engine. If true, a certificate ID must be manaually set in the DomainMapping resource to configure SSL for this domain. If false, a managed certificate will be provisioned and a certificate ID will be automatically populated.
     * @param {string} params.overrideStrategy - Whether the domain creation should override any existing mappings for this domain. By default, overrides are rejected.
     * @param {string} params.projectsId - (Required) Part of `parent`. Name of the parent Application resource. Example: apps/myapp.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.applications.domainMappings.create = (params) => this._makeRequest('v1alpha/projects/{projectsId}/locations/{locationsId}/applications/{applicationsId}/domainMappings', 'POST', params);
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
