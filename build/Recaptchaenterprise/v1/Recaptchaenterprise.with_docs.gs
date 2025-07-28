
/**
 * Google Apps Script client library for the reCAPTCHA Enterprise API
 * Documentation URL: https://cloud.google.com/recaptcha-enterprise/
 * @class
 */
class Recaptchaenterprise {
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
    this._rootUrl = 'https://recaptchaenterprise.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.assessments = {};

    /**
     * Creates an Assessment of the likelihood an event is legitimate.
     * @param {string} params.parent - (Required) Required. The name of the project in which the assessment is created, in the format `projects/{project}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.assessments.create = (params) => this._makeRequest('v1/{+parent}/assessments', 'POST', params);

    /**
     * Annotates a previously created Assessment to provide additional information on whether the event turned out to be authentic or fraudulent.
     * @param {string} params.name - (Required) Required. The resource name of the Assessment, in the format `projects/{project}/assessments/{assessment}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.assessments.annotate = (params) => this._makeRequest('v1/{+name}:annotate', 'POST', params);

    this.projects.keys = {};

    /**
     * Creates a new reCAPTCHA Enterprise key.
     * @param {string} params.parent - (Required) Required. The name of the project in which the key is created, in the format `projects/{project}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.keys.create = (params) => this._makeRequest('v1/{+parent}/keys', 'POST', params);

    /**
     * Returns the list of all keys that belong to a project.
     * @param {integer} params.pageSize - Optional. The maximum number of keys to return. Default is 10. Max limit is 1000.
     * @param {string} params.pageToken - Optional. The next_page_token value returned from a previous. ListKeysRequest, if any.
     * @param {string} params.parent - (Required) Required. The name of the project that contains the keys that is listed, in the format `projects/{project}`.
     * @return {object} The API response object.
     */
    this.projects.keys.list = (params) => this._makeRequest('v1/{+parent}/keys', 'GET', params);

    /**
     * Returns the secret key related to the specified public key. You must use the legacy secret key only in a 3rd party integration with legacy reCAPTCHA.
     * @param {string} params.key - (Required) Required. The public key name linked to the requested secret key in the format `projects/{project}/keys/{key}`.
     * @return {object} The API response object.
     */
    this.projects.keys.retrieveLegacySecretKey = (params) => this._makeRequest('v1/{+key}:retrieveLegacySecretKey', 'GET', params);

    /**
     * Returns the specified key.
     * @param {string} params.name - (Required) Required. The name of the requested key, in the format `projects/{project}/keys/{key}`.
     * @return {object} The API response object.
     */
    this.projects.keys.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Updates the specified key.
     * @param {string} params.name - (Required) Identifier. The resource name for the Key in the format `projects/{project}/keys/{key}`.
     * @param {string} params.updateMask - Optional. The mask to control which fields of the key get updated. If the mask is not present, all fields are updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.keys.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes the specified key.
     * @param {string} params.name - (Required) Required. The name of the key to be deleted, in the format `projects/{project}/keys/{key}`.
     * @return {object} The API response object.
     */
    this.projects.keys.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Migrates an existing key from reCAPTCHA to reCAPTCHA Enterprise. Once a key is migrated, it can be used from either product. SiteVerify requests are billed as CreateAssessment calls. You must be authenticated as one of the current owners of the reCAPTCHA Key, and your user must have the reCAPTCHA Enterprise Admin IAM role in the destination project.
     * @param {string} params.name - (Required) Required. The name of the key to be migrated, in the format `projects/{project}/keys/{key}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.keys.migrate = (params) => this._makeRequest('v1/{+name}:migrate', 'POST', params);

    /**
     * Adds an IP override to a key. The following restrictions hold: * The maximum number of IP overrides per key is 1000. * For any conflict (such as IP already exists or IP part of an existing IP range), an error is returned.
     * @param {string} params.name - (Required) Required. The name of the key to which the IP override is added, in the format `projects/{project}/keys/{key}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.keys.addIpOverride = (params) => this._makeRequest('v1/{+name}:addIpOverride', 'POST', params);

    /**
     * Removes an IP override from a key. The following restrictions hold: * If the IP isn't found in an existing IP override, a `NOT_FOUND` error is returned. * If the IP is found in an existing IP override, but the override type does not match, a `NOT_FOUND` error is returned.
     * @param {string} params.name - (Required) Required. The name of the key from which the IP override is removed, in the format `projects/{project}/keys/{key}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.keys.removeIpOverride = (params) => this._makeRequest('v1/{+name}:removeIpOverride', 'POST', params);

    /**
     * Lists all IP overrides for a key.
     * @param {integer} params.pageSize - Optional. The maximum number of overrides to return. Default is 10. Max limit is 100. If the number of overrides is less than the page_size, all overrides are returned. If the page size is more than 100, it is coerced to 100.
     * @param {string} params.pageToken - Optional. The next_page_token value returned from a previous ListIpOverridesRequest, if any.
     * @param {string} params.parent - (Required) Required. The parent key for which the IP overrides are listed, in the format `projects/{project}/keys/{key}`.
     * @return {object} The API response object.
     */
    this.projects.keys.listIpOverrides = (params) => this._makeRequest('v1/{+parent}:listIpOverrides', 'GET', params);

    /**
     * Get some aggregated metrics for a Key. This data can be used to build dashboards.
     * @param {string} params.name - (Required) Required. The name of the requested metrics, in the format `projects/{project}/keys/{key}/metrics`.
     * @return {object} The API response object.
     */
    this.projects.keys.getMetrics = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.firewallpolicies = {};

    /**
     * Creates a new FirewallPolicy, specifying conditions at which reCAPTCHA Enterprise actions can be executed. A project may have a maximum of 1000 policies.
     * @param {string} params.parent - (Required) Required. The name of the project this policy applies to, in the format `projects/{project}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.firewallpolicies.create = (params) => this._makeRequest('v1/{+parent}/firewallpolicies', 'POST', params);

    /**
     * Returns the list of all firewall policies that belong to a project.
     * @param {integer} params.pageSize - Optional. The maximum number of policies to return. Default is 10. Max limit is 1000.
     * @param {string} params.pageToken - Optional. The next_page_token value returned from a previous. ListFirewallPoliciesRequest, if any.
     * @param {string} params.parent - (Required) Required. The name of the project to list the policies for, in the format `projects/{project}`.
     * @return {object} The API response object.
     */
    this.projects.firewallpolicies.list = (params) => this._makeRequest('v1/{+parent}/firewallpolicies', 'GET', params);

    /**
     * Returns the specified firewall policy.
     * @param {string} params.name - (Required) Required. The name of the requested policy, in the format `projects/{project}/firewallpolicies/{firewallpolicy}`.
     * @return {object} The API response object.
     */
    this.projects.firewallpolicies.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Updates the specified firewall policy.
     * @param {string} params.name - (Required) Identifier. The resource name for the FirewallPolicy in the format `projects/{project}/firewallpolicies/{firewallpolicy}`.
     * @param {string} params.updateMask - Optional. The mask to control which fields of the policy get updated. If the mask is not present, all fields are updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.firewallpolicies.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes the specified firewall policy.
     * @param {string} params.name - (Required) Required. The name of the policy to be deleted, in the format `projects/{project}/firewallpolicies/{firewallpolicy}`.
     * @return {object} The API response object.
     */
    this.projects.firewallpolicies.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Reorders all firewall policies.
     * @param {string} params.parent - (Required) Required. The name of the project to list the policies for, in the format `projects/{project}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.firewallpolicies.reorder = (params) => this._makeRequest('v1/{+parent}/firewallpolicies:reorder', 'POST', params);

    this.projects.relatedaccountgroups = {};

    /**
     * List groups of related accounts.
     * @param {integer} params.pageSize - Optional. The maximum number of groups to return. The service might return fewer than this value. If unspecified, at most 50 groups are returned. The maximum value is 1000; values above 1000 are coerced to 1000.
     * @param {string} params.pageToken - Optional. A page token, received from a previous `ListRelatedAccountGroups` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListRelatedAccountGroups` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The name of the project to list related account groups from, in the format `projects/{project}`.
     * @return {object} The API response object.
     */
    this.projects.relatedaccountgroups.list = (params) => this._makeRequest('v1/{+parent}/relatedaccountgroups', 'GET', params);

    this.projects.relatedaccountgroups.memberships = {};

    /**
     * Get memberships in a group of related accounts.
     * @param {integer} params.pageSize - Optional. The maximum number of accounts to return. The service might return fewer than this value. If unspecified, at most 50 accounts are returned. The maximum value is 1000; values above 1000 are coerced to 1000.
     * @param {string} params.pageToken - Optional. A page token, received from a previous `ListRelatedAccountGroupMemberships` call. When paginating, all other parameters provided to `ListRelatedAccountGroupMemberships` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The resource name for the related account group in the format `projects/{project}/relatedaccountgroups/{relatedaccountgroup}`.
     * @return {object} The API response object.
     */
    this.projects.relatedaccountgroups.memberships.list = (params) => this._makeRequest('v1/{+parent}/memberships', 'GET', params);

    this.projects.relatedaccountgroupmemberships = {};

    /**
     * Search group memberships related to a given account.
     * @param {string} params.project - (Required) Required. The name of the project to search related account group memberships from. Specify the project name in the following format: `projects/{project}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.relatedaccountgroupmemberships.search = (params) => this._makeRequest('v1/{+project}/relatedaccountgroupmemberships:search', 'POST', params);
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
