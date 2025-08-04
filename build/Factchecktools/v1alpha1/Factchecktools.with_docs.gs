
/**
 * Google Apps Script client library for the Fact Check Tools API
 * Documentation URL: https://developers.google.com/fact-check/tools/api/
 * @class
 */
class Factchecktools {
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
    this._rootUrl = 'https://factchecktools.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.claims = {};

    /**
     * Search through fact-checked claims.
     * @param {string} params.languageCode - The BCP-47 language code, such as "en-US" or "sr-Latn". Can be used to restrict results by language, though we do not currently consider the region.
     * @param {integer} params.maxAgeDays - The maximum age of the returned search results, in days. Age is determined by either claim date or review date, whichever is newer.
     * @param {integer} params.offset - An integer that specifies the current offset (that is, starting result location) in search results. This field is only considered if `page_token` is unset. For example, 0 means to return results starting from the first matching result, and 10 means to return from the 11th result.
     * @param {integer} params.pageSize - The pagination size. We will return up to that many results. Defaults to 10 if not set.
     * @param {string} params.pageToken - The pagination token. You may provide the `next_page_token` returned from a previous List request, if any, in order to get the next page. All other fields must have the same values as in the previous request.
     * @param {string} params.query - Textual query string. Required unless `review_publisher_site_filter` is specified.
     * @param {string} params.reviewPublisherSiteFilter - The review publisher site to filter results by, e.g. nytimes.com.
     * @return {object} The API response object.
     */
    this.claims.search = (params) => this._makeRequest('v1alpha1/claims:search', 'GET', params);

    /**
     * Search through fact-checked claims using an image as the query.
     * @param {string} params.imageUri - Required. The URI of the source image. This must be a publicly-accessible image HTTP/HTTPS URL. When fetching images from HTTP/HTTPS URLs, Google cannot guarantee that the request will be completed. Your request may fail if the specified host denies the request (e.g. due to request throttling or DOS prevention), or if Google throttles requests to the site for abuse prevention. You should not depend on externally-hosted images for production applications.
     * @param {string} params.languageCode - Optional. The BCP-47 language code, such as "en-US" or "sr-Latn". Can be used to restrict results by language, though we do not currently consider the region.
     * @param {integer} params.offset - Optional. An integer that specifies the current offset (that is, starting result location) in search results. This field is only considered if `page_token` is unset. For example, 0 means to return results starting from the first matching result, and 10 means to return from the 11th result.
     * @param {integer} params.pageSize - Optional. The pagination size. We will return up to that many results. Defaults to 10 if not set.
     * @param {string} params.pageToken - Optional. The pagination token. You may provide the `next_page_token` returned from a previous List request, if any, in order to get the next page. All other fields must have the same values as in the previous request.
     * @return {object} The API response object.
     */
    this.claims.imageSearch = (params) => this._makeRequest('v1alpha1/claims:imageSearch', 'GET', params);

    this.pages = {};

    /**
     * Create `ClaimReview` markup on a page.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.pages.create = (params) => this._makeRequest('v1alpha1/pages', 'POST', params);

    /**
     * Get all `ClaimReview` markup on a page.
     * @param {string} params.name - (Required) The name of the resource to get, in the form of `pages/{page_id}`.
     * @return {object} The API response object.
     */
    this.pages.get = (params) => this._makeRequest('v1alpha1/{+name}', 'GET', params);

    /**
     * List the `ClaimReview` markup pages for a specific URL or for an organization.
     * @param {integer} params.offset - An integer that specifies the current offset (that is, starting result location) in search results. This field is only considered if `page_token` is unset, and if the request is not for a specific URL. For example, 0 means to return results starting from the first matching result, and 10 means to return from the 11th result.
     * @param {string} params.organization - The organization for which we want to fetch markups for. For instance, "site.com". Cannot be specified along with an URL.
     * @param {integer} params.pageSize - The pagination size. We will return up to that many results. Defaults to 10 if not set. Has no effect if a URL is requested.
     * @param {string} params.pageToken - The pagination token. You may provide the `next_page_token` returned from a previous List request, if any, in order to get the next page. All other fields must have the same values as in the previous request.
     * @param {string} params.url - The URL from which to get `ClaimReview` markup. There will be at most one result. If markup is associated with a more canonical version of the URL provided, we will return that URL instead. Cannot be specified along with an organization.
     * @return {object} The API response object.
     */
    this.pages.list = (params) => this._makeRequest('v1alpha1/pages', 'GET', params);

    /**
     * Update for all `ClaimReview` markup on a page Note that this is a full update. To retain the existing `ClaimReview` markup on a page, first perform a Get operation, then modify the returned markup, and finally call Update with the entire `ClaimReview` markup as the body.
     * @param {string} params.name - (Required) The name of this `ClaimReview` markup page resource, in the form of `pages/{page_id}`. Except for update requests, this field is output-only and should not be set by the user.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.pages.update = (params) => this._makeRequest('v1alpha1/{+name}', 'PUT', params);

    /**
     * Delete all `ClaimReview` markup on a page.
     * @param {string} params.name - (Required) The name of the resource to delete, in the form of `pages/{page_id}`.
     * @return {object} The API response object.
     */
    this.pages.delete = (params) => this._makeRequest('v1alpha1/{+name}', 'DELETE', params);
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
