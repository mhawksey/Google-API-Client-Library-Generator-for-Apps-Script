
/**
 * Google Apps Script client library for the Google Search Console API
 * Documentation URL: https://developers.google.com/webmaster-tools/about
 * @class
 */
class Searchconsole {
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
    this._rootUrl = 'https://searchconsole.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.urlInspection = {};

    this.urlInspection.index = {};

    /**
     * Index inspection.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.urlInspection.index.inspect = (params) => this._makeRequest('v1/urlInspection/index:inspect', 'POST', params);

    this.searchanalytics = {};

    /**
     * Query your data with filters and parameters that you define. Returns zero or more rows grouped by the row keys that you define. You must define a date range of one or more days. When date is one of the group by values, any days without data are omitted from the result list. If you need to know which days have data, issue a broad date range query grouped by date for any metric, and see which day rows are returned.
     * @param {string} params.siteUrl - (Required) The site's URL, including protocol. For example: `http://www.example.com/`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.searchanalytics.query = (params) => this._makeRequest('webmasters/v3/sites/{siteUrl}/searchAnalytics/query', 'POST', params);

    this.urlTestingTools = {};

    this.urlTestingTools.mobileFriendlyTest = {};

    /**
     * Runs Mobile-Friendly Test for a given URL.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.urlTestingTools.mobileFriendlyTest.run = (params) => this._makeRequest('v1/urlTestingTools/mobileFriendlyTest:run', 'POST', params);

    this.sitemaps = {};

    /**
     * Deletes a sitemap from the Sitemaps report. Does not stop Google from crawling this sitemap or the URLs that were previously crawled in the deleted sitemap.
     * @param {string} params.feedpath - (Required) The URL of the actual sitemap. For example: `http://www.example.com/sitemap.xml`.
     * @param {string} params.siteUrl - (Required) The site's URL, including protocol. For example: `http://www.example.com/`.
     * @return {object} The API response object.
     */
    this.sitemaps.delete = (params) => this._makeRequest('webmasters/v3/sites/{siteUrl}/sitemaps/{feedpath}', 'DELETE', params);

    /**
     * Retrieves information about a specific sitemap.
     * @param {string} params.feedpath - (Required) The URL of the actual sitemap. For example: `http://www.example.com/sitemap.xml`.
     * @param {string} params.siteUrl - (Required) The site's URL, including protocol. For example: `http://www.example.com/`.
     * @return {object} The API response object.
     */
    this.sitemaps.get = (params) => this._makeRequest('webmasters/v3/sites/{siteUrl}/sitemaps/{feedpath}', 'GET', params);

    /**
     * Lists the [sitemaps-entries](/webmaster-tools/v3/sitemaps) submitted for this site, or included in the sitemap index file (if `sitemapIndex` is specified in the request).
     * @param {string} params.siteUrl - (Required) The site's URL, including protocol. For example: `http://www.example.com/`.
     * @param {string} params.sitemapIndex - A URL of a site's sitemap index. For example: `http://www.example.com/sitemapindex.xml`.
     * @return {object} The API response object.
     */
    this.sitemaps.list = (params) => this._makeRequest('webmasters/v3/sites/{siteUrl}/sitemaps', 'GET', params);

    /**
     * Submits a sitemap for a site.
     * @param {string} params.feedpath - (Required) The URL of the actual sitemap. For example: `http://www.example.com/sitemap.xml`.
     * @param {string} params.siteUrl - (Required) The site's URL, including protocol. For example: `http://www.example.com/`.
     * @return {object} The API response object.
     */
    this.sitemaps.submit = (params) => this._makeRequest('webmasters/v3/sites/{siteUrl}/sitemaps/{feedpath}', 'PUT', params);

    this.sites = {};

    /**
     * Removes a site from the set of the user's Search Console sites.
     * @param {string} params.siteUrl - (Required) The URI of the property as defined in Search Console. **Examples:** `http://www.example.com/` or `sc-domain:example.com`.
     * @return {object} The API response object.
     */
    this.sites.delete = (params) => this._makeRequest('webmasters/v3/sites/{siteUrl}', 'DELETE', params);

    /**
     * Retrieves information about specific site.
     * @param {string} params.siteUrl - (Required) The URI of the property as defined in Search Console. **Examples:** `http://www.example.com/` or `sc-domain:example.com`.
     * @return {object} The API response object.
     */
    this.sites.get = (params) => this._makeRequest('webmasters/v3/sites/{siteUrl}', 'GET', params);

    /**
     * Lists the user's Search Console sites.
     * @return {object} The API response object.
     */
    this.sites.list = (params) => this._makeRequest('webmasters/v3/sites', 'GET', params);

    /**
     * Adds a site to the set of the user's sites in Search Console.
     * @param {string} params.siteUrl - (Required) The URL of the site to add.
     * @return {object} The API response object.
     */
    this.sites.add = (params) => this._makeRequest('webmasters/v3/sites/{siteUrl}', 'PUT', params);
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
