
/**
 * Google Apps Script client library for the Gmail Postmaster Tools API
 * Documentation URL: https://developers.google.com/workspace/gmail/postmaster
 * @class
 */
class Gmailpostmastertools {
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
    this._rootUrl = 'https://gmailpostmastertools.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.domains = {};

    /**
     * Gets a specific domain registered by the client. Returns NOT_FOUND if the domain does not exist.
     * @param {string} params.name - (Required) The resource name of the domain. It should have the form `domains/{domain_name}`, where domain_name is the fully qualified domain name.
     * @return {object} The API response object.
     */
    this.domains.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Lists the domains that have been registered by the client. The order of domains in the response is unspecified and non-deterministic. Newly created domains will not necessarily be added to the end of this list.
     * @param {integer} params.pageSize - Requested page size. Server may return fewer domains than requested. If unspecified, server will pick an appropriate default.
     * @param {string} params.pageToken - The next_page_token value returned from a previous List request, if any. This is the value of ListDomainsResponse.next_page_token returned from the previous call to `ListDomains` method.
     * @return {object} The API response object.
     */
    this.domains.list = (params) => this._makeRequest('v1beta1/domains', 'GET', params);

    this.domains.trafficStats = {};

    /**
     * Get traffic statistics for a domain on a specific date. Returns PERMISSION_DENIED if user does not have permission to access TrafficStats for the domain.
     * @param {string} params.name - (Required) The resource name of the traffic statistics to get. E.g., domains/mymail.mydomain.com/trafficStats/20160807.
     * @return {object} The API response object.
     */
    this.domains.trafficStats.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * List traffic statistics for all available days. Returns PERMISSION_DENIED if user does not have permission to access TrafficStats for the domain.
     * @param {integer} params.endDate.day - Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     * @param {integer} params.endDate.month - Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     * @param {integer} params.endDate.year - Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     * @param {integer} params.pageSize - Requested page size. Server may return fewer TrafficStats than requested. If unspecified, server will pick an appropriate default.
     * @param {string} params.pageToken - The next_page_token value returned from a previous List request, if any. This is the value of ListTrafficStatsResponse.next_page_token returned from the previous call to `ListTrafficStats` method.
     * @param {string} params.parent - (Required) The resource name of the domain whose traffic statistics we'd like to list. It should have the form `domains/{domain_name}`, where domain_name is the fully qualified domain name.
     * @param {integer} params.startDate.day - Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
     * @param {integer} params.startDate.month - Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
     * @param {integer} params.startDate.year - Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.
     * @return {object} The API response object.
     */
    this.domains.trafficStats.list = (params) => this._makeRequest('v1beta1/{+parent}/trafficStats', 'GET', params);
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
