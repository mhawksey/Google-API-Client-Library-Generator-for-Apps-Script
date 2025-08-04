
/**
 * Google Apps Script client library for the Chrome Policy API
 * Documentation URL: http://developers.google.com/chrome/policy
 * @class
 */
class Chromepolicy {
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
    this._rootUrl = 'https://chromepolicy.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.media = {};

    /**
     * Creates an enterprise file from the content provided by user. Returns a public download url for end user.
     * @param {string} params.customer - (Required) Required. The customer for which the file upload will apply.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.media.upload = (params) => this._makeRequest('v1/{+customer}/policies/files:uploadPolicyFile', 'POST', params);

    this.customers = {};

    this.customers.policies = {};

    /**
     * Gets the resolved policy values for a list of policies that match a search query.
     * @param {string} params.customer - (Required) ID of the G Suite account or literal "my_customer" for the customer associated to the request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.customers.policies.resolve = (params) => this._makeRequest('v1/{+customer}/policies:resolve', 'POST', params);

    this.customers.policies.orgunits = {};

    /**
     * Modify multiple policy values that are applied to a specific org unit. All targets must have the same target format. That is to say that they must point to the same target resource and must have the same keys specified in `additionalTargetKeyNames`, though the values for those keys may be different. On failure the request will return the error details as part of the google.rpc.Status.
     * @param {string} params.customer - (Required) ID of the G Suite account or literal "my_customer" for the customer associated to the request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.customers.policies.orgunits.batchModify = (params) => this._makeRequest('v1/{+customer}/policies/orgunits:batchModify', 'POST', params);

    /**
     * Modify multiple policy values that are applied to a specific org unit so that they now inherit the value from a parent (if applicable). All targets must have the same target format. That is to say that they must point to the same target resource and must have the same keys specified in `additionalTargetKeyNames`, though the values for those keys may be different. On failure the request will return the error details as part of the google.rpc.Status.
     * @param {string} params.customer - (Required) ID of the G Suite account or literal "my_customer" for the customer associated to the request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.customers.policies.orgunits.batchInherit = (params) => this._makeRequest('v1/{+customer}/policies/orgunits:batchInherit', 'POST', params);

    this.customers.policies.groups = {};

    /**
     * Modify multiple policy values that are applied to a specific group. All targets must have the same target format. That is to say that they must point to the same target resource and must have the same keys specified in `additionalTargetKeyNames`, though the values for those keys may be different. On failure the request will return the error details as part of the google.rpc.Status.
     * @param {string} params.customer - (Required) ID of the Google Workspace account or literal "my_customer" for the customer associated to the request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.customers.policies.groups.batchModify = (params) => this._makeRequest('v1/{+customer}/policies/groups:batchModify', 'POST', params);

    /**
     * Delete multiple policy values that are applied to a specific group. All targets must have the same target format. That is to say that they must point to the same target resource and must have the same keys specified in `additionalTargetKeyNames`, though the values for those keys may be different. On failure the request will return the error details as part of the google.rpc.Status.
     * @param {string} params.customer - (Required) ID of the Google Workspace account or literal "my_customer" for the customer associated to the request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.customers.policies.groups.batchDelete = (params) => this._makeRequest('v1/{+customer}/policies/groups:batchDelete', 'POST', params);

    /**
     * Retrieve a group priority ordering for an app. The target app must be supplied in `additionalTargetKeyNames` in the PolicyTargetKey. On failure the request will return the error details as part of the google.rpc.Status.
     * @param {string} params.customer - (Required) Required. ID of the Google Workspace account or literal "my_customer" for the customer associated to the request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.customers.policies.groups.listGroupPriorityOrdering = (params) => this._makeRequest('v1/{+customer}/policies/groups:listGroupPriorityOrdering', 'POST', params);

    /**
     * Update a group priority ordering for an app. The target app must be supplied in `additionalTargetKeyNames` in the PolicyTargetKey. On failure the request will return the error details as part of the google.rpc.Status.
     * @param {string} params.customer - (Required) Required. ID of the Google Workspace account or literal "my_customer" for the customer associated to the request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.customers.policies.groups.updateGroupPriorityOrdering = (params) => this._makeRequest('v1/{+customer}/policies/groups:updateGroupPriorityOrdering', 'POST', params);

    this.customers.policies.networks = {};

    /**
     * Creates a certificate at a specified OU for a customer.
     * @param {string} params.customer - (Required) Required. The customer for which the certificate will apply.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.customers.policies.networks.defineCertificate = (params) => this._makeRequest('v1/{+customer}/policies/networks:defineCertificate', 'POST', params);

    /**
     * Remove an existing certificate by guid.
     * @param {string} params.customer - (Required) Required. The customer whose certificate will be removed.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.customers.policies.networks.removeCertificate = (params) => this._makeRequest('v1/{+customer}/policies/networks:removeCertificate', 'POST', params);

    /**
     * Remove an existing network by guid.
     * @param {string} params.customer - (Required) Required. The customer whose network will be removed.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.customers.policies.networks.removeNetwork = (params) => this._makeRequest('v1/{+customer}/policies/networks:removeNetwork', 'POST', params);

    /**
     * Define a new network.
     * @param {string} params.customer - (Required) Required. The customer who will own this new network.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.customers.policies.networks.defineNetwork = (params) => this._makeRequest('v1/{+customer}/policies/networks:defineNetwork', 'POST', params);

    this.customers.policySchemas = {};

    /**
     * Get a specific policy schema for a customer by its resource name.
     * @param {string} params.name - (Required) Required. The policy schema resource name to query.
     * @return {object} The API response object.
     */
    this.customers.policySchemas.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Gets a list of policy schemas that match a specified filter value for a given customer.
     * @param {string} params.filter - The schema filter used to find a particular schema based on fields like its resource name, description and `additionalTargetKeyNames`.
     * @param {integer} params.pageSize - The maximum number of policy schemas to return, defaults to 100 and has a maximum of 1000.
     * @param {string} params.pageToken - The page token used to retrieve a specific page of the listing request.
     * @param {string} params.parent - (Required) Required. The customer for which the listing request will apply.
     * @return {object} The API response object.
     */
    this.customers.policySchemas.list = (params) => this._makeRequest('v1/{+parent}/policySchemas', 'GET', params);
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
