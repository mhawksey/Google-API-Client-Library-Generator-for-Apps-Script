
/**
 * Google Apps Script client library for the Search Ads 360 API
 * Documentation URL: https://developers.google.com/search-ads
 * @class
 */
class Doubleclicksearch {
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
    this._rootUrl = 'https://doubleclicksearch.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.conversion = {};

    /**
     * Retrieves a list of conversions from a DoubleClick Search engine account.
     * @param {string} params.adGroupId - Numeric ID of the ad group.
     * @param {string} params.adId - Numeric ID of the ad.
     * @param {string} params.advertiserId - (Required) Numeric ID of the advertiser.
     * @param {string} params.agencyId - (Required) Numeric ID of the agency.
     * @param {string} params.campaignId - Numeric ID of the campaign.
     * @param {string} params.criterionId - Numeric ID of the criterion.
     * @param {string} params.customerId - Customer ID of a client account in the new Search Ads 360 experience.
     * @param {integer} params.endDate - (Required) Last date (inclusive) on which to retrieve conversions. Format is yyyymmdd.
     * @param {string} params.engineAccountId - (Required) Numeric ID of the engine account.
     * @param {integer} params.rowCount - (Required) The number of conversions to return per call.
     * @param {integer} params.startDate - (Required) First date (inclusive) on which to retrieve conversions. Format is yyyymmdd.
     * @param {integer} params.startRow - (Required) The 0-based starting index for retrieving conversions results.
     * @return {object} The API response object.
     */
    this.conversion.get = (params) => this._makeRequest('doubleclicksearch/v2/agency/{agencyId}/advertiser/{advertiserId}/engine/{engineAccountId}/conversion', 'GET', params);

    /**
     * Retrieves a list of conversions from a DoubleClick Search engine account.
     * @param {string} params.adGroupId - Numeric ID of the ad group.
     * @param {string} params.adId - Numeric ID of the ad.
     * @param {string} params.advertiserId - Numeric ID of the advertiser.
     * @param {string} params.agencyId - Numeric ID of the agency.
     * @param {string} params.campaignId - Numeric ID of the campaign.
     * @param {string} params.criterionId - Numeric ID of the criterion.
     * @param {string} params.customerId - (Required) Customer ID of a client account in the new Search Ads 360 experience.
     * @param {integer} params.endDate - (Required) Last date (inclusive) on which to retrieve conversions. Format is yyyymmdd.
     * @param {string} params.engineAccountId - Numeric ID of the engine account.
     * @param {integer} params.rowCount - (Required) The number of conversions to return per call.
     * @param {integer} params.startDate - (Required) First date (inclusive) on which to retrieve conversions. Format is yyyymmdd.
     * @param {integer} params.startRow - (Required) The 0-based starting index for retrieving conversions results.
     * @return {object} The API response object.
     */
    this.conversion.getByCustomerId = (params) => this._makeRequest('doubleclicksearch/v2/customer/{customerId}/conversion', 'GET', params);

    /**
     * Inserts a batch of new conversions into DoubleClick Search.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.conversion.insert = (params) => this._makeRequest('doubleclicksearch/v2/conversion', 'POST', params);

    /**
     * Updates a batch of conversions in DoubleClick Search.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.conversion.update = (params) => this._makeRequest('doubleclicksearch/v2/conversion', 'PUT', params);

    /**
     * Updates the availabilities of a batch of floodlight activities in DoubleClick Search.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.conversion.updateAvailability = (params) => this._makeRequest('doubleclicksearch/v2/conversion/updateAvailability', 'POST', params);

    this.reports = {};

    /**
     * Generates and returns a report immediately.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.reports.generate = (params) => this._makeRequest('doubleclicksearch/v2/reports/generate', 'POST', params);

    /**
     * Polls for the status of a report request.
     * @param {string} params.reportId - (Required) ID of the report request being polled.
     * @return {object} The API response object.
     */
    this.reports.get = (params) => this._makeRequest('doubleclicksearch/v2/reports/{reportId}', 'GET', params);

    /**
     * Downloads a report file encoded in UTF-8.
     * @param {integer} params.reportFragment - (Required) The index of the report fragment to download.
     * @param {string} params.reportId - (Required) ID of the report.
     * @return {object} The API response object.
     */
    this.reports.getFile = (params) => this._makeRequest('doubleclicksearch/v2/reports/{reportId}/files/{reportFragment}', 'GET', params);

    /**
     * Downloads a csv file(encoded in UTF-8) that contains ID mappings between legacy SA360 and new SA360. The file includes all children entities of the given advertiser(e.g. engine accounts, campaigns, ad groups, etc.) that exist in both legacy SA360 and new SA360.
     * @param {string} params.advertiserId - (Required) Legacy SA360 advertiser ID.
     * @param {string} params.agencyId - (Required) Legacy SA360 agency ID.
     * @return {object} The API response object.
     */
    this.reports.getIdMappingFile = (params) => this._makeRequest('doubleclicksearch/v2/agency/{agencyId}/advertiser/{advertiserId}/idmapping', 'GET', params);

    /**
     * Inserts a report request into the reporting system.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.reports.request = (params) => this._makeRequest('doubleclicksearch/v2/reports', 'POST', params);

    this.savedColumns = {};

    /**
     * Retrieve the list of saved columns for a specified advertiser.
     * @param {string} params.advertiserId - (Required) DS ID of the advertiser.
     * @param {string} params.agencyId - (Required) DS ID of the agency.
     * @return {object} The API response object.
     */
    this.savedColumns.list = (params) => this._makeRequest('doubleclicksearch/v2/agency/{agencyId}/advertiser/{advertiserId}/savedcolumns', 'GET', params);
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
