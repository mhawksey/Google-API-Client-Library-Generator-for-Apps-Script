
/**
 * Google Apps Script client library for the Google Marketing Platform Admin API
 * Documentation URL: https://developers.google.com/analytics/devguides/config/gmp/v1
 * @class
 */
class Marketingplatformadmin {
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
    this._rootUrl = 'https://marketingplatformadmin.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.organizations = {};

    /**
     * Lookup for a single organization.
     * @param {string} params.name - (Required) Required. The name of the Organization to retrieve. Format: organizations/{org_id}
     * @return {object} The API response object.
     */
    this.organizations.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    this.organizations.analyticsAccountLinks = {};

    /**
     * Lists the Google Analytics accounts link to the specified Google Marketing Platform organization.
     * @param {integer} params.pageSize - Optional. The maximum number of Analytics account links to return in one call. The service may return fewer than this value. If unspecified, at most 50 Analytics account links will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - Optional. A page token, received from a previous ListAnalyticsAccountLinks call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAnalyticsAccountLinks` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent organization, which owns this collection of Analytics account links. Format: organizations/{org_id}
     * @return {object} The API response object.
     */
    this.organizations.analyticsAccountLinks.list = (params) => this._makeRequest('v1alpha/{+parent}/analyticsAccountLinks', 'GET', params);

    /**
     * Creates the link between the Analytics account and the Google Marketing Platform organization. User needs to be an org user, and admin on the Analytics account to create the link. If the account is already linked to an organization, user needs to unlink the account from the current organization, then try link again.
     * @param {string} params.parent - (Required) Required. The parent resource where this Analytics account link will be created. Format: organizations/{org_id}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.analyticsAccountLinks.create = (params) => this._makeRequest('v1alpha/{+parent}/analyticsAccountLinks', 'POST', params);

    /**
     * Deletes the AnalyticsAccountLink, which detaches the Analytics account from the Google Marketing Platform organization. User needs to be an org user, and admin on the Analytics account in order to delete the link.
     * @param {string} params.name - (Required) Required. The name of the Analytics account link to delete. Format: organizations/{org_id}/analyticsAccountLinks/{analytics_account_link_id}
     * @return {object} The API response object.
     */
    this.organizations.analyticsAccountLinks.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);

    /**
     * Updates the service level for an Analytics property.
     * @param {string} params.analyticsAccountLink - (Required) Required. The parent AnalyticsAccountLink scope where this property is in. Format: organizations/{org_id}/analyticsAccountLinks/{analytics_account_link_id}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.analyticsAccountLinks.setPropertyServiceLevel = (params) => this._makeRequest('v1alpha/{+analyticsAccountLink}:setPropertyServiceLevel', 'POST', params);
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
