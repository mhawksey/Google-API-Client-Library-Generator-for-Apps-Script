
/**
 * Google Apps Script client library for the Cloud Controls Partner API
 * Documentation URL: https://cloud.google.com/sovereign-controls-by-partners/docs/sovereign-partners/reference/rest
 * @class
 */
class Cloudcontrolspartner {
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
    this._rootUrl = 'https://cloudcontrolspartner.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.organizations = {};

    this.organizations.locations = {};

    /**
     * Get details of a Partner.
     * @param {string} params.name - (Required) Required. Format: `organizations/{organization}/locations/{location}/partner`
     * @return {object} The API response object.
     */
    this.organizations.locations.getPartner = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.organizations.locations.customers = {};

    /**
     * Gets details of a single customer
     * @param {string} params.name - (Required) Required. Format: `organizations/{organization}/locations/{location}/customers/{customer}`
     * @return {object} The API response object.
     */
    this.organizations.locations.customers.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists customers of a partner identified by its Google Cloud organization ID
     * @param {string} params.filter - Optional. Filtering results
     * @param {string} params.orderBy - Optional. Hint for how to order the results
     * @param {integer} params.pageSize - The maximum number of Customers to return. The service may return fewer than this value. If unspecified, at most 500 Customers will be returned.
     * @param {string} params.pageToken - A page token, received from a previous `ListCustomers` call. Provide this to retrieve the subsequent page.
     * @param {string} params.parent - (Required) Required. Parent resource Format: `organizations/{organization}/locations/{location}`
     * @return {object} The API response object.
     */
    this.organizations.locations.customers.list = (params) => this._makeRequest('v1/{+parent}/customers', 'GET', params);

    /**
     * Creates a new customer.
     * @param {string} params.customerId - Required. The customer id to use for the customer, which will become the final component of the customer's resource name. The specified value must be a valid Google cloud organization id.
     * @param {string} params.parent - (Required) Required. Parent resource Format: `organizations/{organization}/locations/{location}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.locations.customers.create = (params) => this._makeRequest('v1/{+parent}/customers', 'POST', params);

    /**
     * Update details of a single customer
     * @param {string} params.name - (Required) Identifier. Format: `organizations/{organization}/locations/{location}/customers/{customer}`
     * @param {string} params.updateMask - Optional. The list of fields to update
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.locations.customers.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Delete details of a single customer
     * @param {string} params.name - (Required) Required. name of the resource to be deleted format: name=organizations/*\/locations/*\/customers/*
     * @return {object} The API response object.
     */
    this.organizations.locations.customers.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.organizations.locations.customers.workloads = {};

    /**
     * Gets details of a single workload
     * @param {string} params.name - (Required) Required. Format: `organizations/{organization}/locations/{location}/customers/{customer}/workloads/{workload}`
     * @return {object} The API response object.
     */
    this.organizations.locations.customers.workloads.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists customer workloads for a given customer org id
     * @param {string} params.filter - Optional. Filtering results.
     * @param {string} params.orderBy - Optional. Hint for how to order the results.
     * @param {integer} params.pageSize - The maximum number of workloads to return. The service may return fewer than this value. If unspecified, at most 500 workloads will be returned.
     * @param {string} params.pageToken - A page token, received from a previous `ListWorkloads` call. Provide this to retrieve the subsequent page.
     * @param {string} params.parent - (Required) Required. Parent resource Format: `organizations/{organization}/locations/{location}/customers/{customer}`
     * @return {object} The API response object.
     */
    this.organizations.locations.customers.workloads.list = (params) => this._makeRequest('v1/{+parent}/workloads', 'GET', params);

    /**
     * Gets the EKM connections associated with a workload
     * @param {string} params.name - (Required) Required. Format: `organizations/{organization}/locations/{location}/customers/{customer}/workloads/{workload}/ekmConnections`
     * @return {object} The API response object.
     */
    this.organizations.locations.customers.workloads.getEkmConnections = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Gets the partner permissions granted for a workload
     * @param {string} params.name - (Required) Required. Name of the resource to get in the format: `organizations/{organization}/locations/{location}/customers/{customer}/workloads/{workload}/partnerPermissions`
     * @return {object} The API response object.
     */
    this.organizations.locations.customers.workloads.getPartnerPermissions = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.organizations.locations.customers.workloads.accessApprovalRequests = {};

    /**
     * Deprecated: Only returns access approval requests directly associated with an assured workload folder.
     * @param {string} params.filter - Optional. Filtering results.
     * @param {string} params.orderBy - Optional. Hint for how to order the results.
     * @param {integer} params.pageSize - Optional. The maximum number of access requests to return. The service may return fewer than this value. If unspecified, at most 500 access requests will be returned.
     * @param {string} params.pageToken - Optional. A page token, received from a previous `ListAccessApprovalRequests` call. Provide this to retrieve the subsequent page.
     * @param {string} params.parent - (Required) Required. Parent resource Format: `organizations/{organization}/locations/{location}/customers/{customer}/workloads/{workload}`
     * @return {object} The API response object.
     */
    this.organizations.locations.customers.workloads.accessApprovalRequests.list = (params) => this._makeRequest('v1/{+parent}/accessApprovalRequests', 'GET', params);

    this.organizations.locations.customers.workloads.violations = {};

    /**
     * Lists Violations for a workload Callers may also choose to read across multiple Customers or for a single customer as per [AIP-159](https://google.aip.dev/159) by using '-' (the hyphen or dash character) as a wildcard character instead of {customer} & {workload}. Format: `organizations/{organization}/locations/{location}/customers/{customer}/workloads/{workload}`
     * @param {string} params.filter - Optional. Filtering results
     * @param {string} params.interval.endTime - Optional. Exclusive end of the interval. If specified, a Timestamp matching this interval will have to be before the end.
     * @param {string} params.interval.startTime - Optional. Inclusive start of the interval. If specified, a Timestamp matching this interval will have to be the same or after the start.
     * @param {string} params.orderBy - Optional. Hint for how to order the results
     * @param {integer} params.pageSize - Optional. The maximum number of customers row to return. The service may return fewer than this value. If unspecified, at most 10 customers will be returned.
     * @param {string} params.pageToken - Optional. A page token, received from a previous `ListViolations` call. Provide this to retrieve the subsequent page.
     * @param {string} params.parent - (Required) Required. Parent resource Format `organizations/{organization}/locations/{location}/customers/{customer}/workloads/{workload}`
     * @return {object} The API response object.
     */
    this.organizations.locations.customers.workloads.violations.list = (params) => this._makeRequest('v1/{+parent}/violations', 'GET', params);

    /**
     * Gets details of a single Violation.
     * @param {string} params.name - (Required) Required. Format: `organizations/{organization}/locations/{location}/customers/{customer}/workloads/{workload}/violations/{violation}`
     * @return {object} The API response object.
     */
    this.organizations.locations.customers.workloads.violations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
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
