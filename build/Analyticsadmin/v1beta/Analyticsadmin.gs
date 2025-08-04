
/**
 * Google Apps Script client library for the Google Analytics Admin API
 * Documentation URL: http://code.google.com/apis/analytics/docs/mgmt/home.html
 * @class
 */
class Analyticsadmin {
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
    this._rootUrl = 'https://analyticsadmin.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.accounts = {};
    this.accounts.get = (params) => this._makeRequest('v1beta/{+name}', 'GET', params);
    this.accounts.list = (params) => this._makeRequest('v1beta/accounts', 'GET', params);
    this.accounts.delete = (params) => this._makeRequest('v1beta/{+name}', 'DELETE', params);
    this.accounts.patch = (params) => this._makeRequest('v1beta/{+name}', 'PATCH', params);
    this.accounts.provisionAccountTicket = (params) => this._makeRequest('v1beta/accounts:provisionAccountTicket', 'POST', params);
    this.accounts.getDataSharingSettings = (params) => this._makeRequest('v1beta/{+name}', 'GET', params);
    this.accounts.searchChangeHistoryEvents = (params) => this._makeRequest('v1beta/{+account}:searchChangeHistoryEvents', 'POST', params);
    this.accounts.runAccessReport = (params) => this._makeRequest('v1beta/{+entity}:runAccessReport', 'POST', params);

    this.accountSummaries = {};
    this.accountSummaries.list = (params) => this._makeRequest('v1beta/accountSummaries', 'GET', params);

    this.properties = {};
    this.properties.get = (params) => this._makeRequest('v1beta/{+name}', 'GET', params);
    this.properties.list = (params) => this._makeRequest('v1beta/properties', 'GET', params);
    this.properties.create = (params) => this._makeRequest('v1beta/properties', 'POST', params);
    this.properties.delete = (params) => this._makeRequest('v1beta/{+name}', 'DELETE', params);
    this.properties.patch = (params) => this._makeRequest('v1beta/{+name}', 'PATCH', params);
    this.properties.acknowledgeUserDataCollection = (params) => this._makeRequest('v1beta/{+property}:acknowledgeUserDataCollection', 'POST', params);
    this.properties.getDataRetentionSettings = (params) => this._makeRequest('v1beta/{+name}', 'GET', params);
    this.properties.updateDataRetentionSettings = (params) => this._makeRequest('v1beta/{+name}', 'PATCH', params);
    this.properties.runAccessReport = (params) => this._makeRequest('v1beta/{+entity}:runAccessReport', 'POST', params);

    this.properties.firebaseLinks = {};
    this.properties.firebaseLinks.create = (params) => this._makeRequest('v1beta/{+parent}/firebaseLinks', 'POST', params);
    this.properties.firebaseLinks.delete = (params) => this._makeRequest('v1beta/{+name}', 'DELETE', params);
    this.properties.firebaseLinks.list = (params) => this._makeRequest('v1beta/{+parent}/firebaseLinks', 'GET', params);

    this.properties.googleAdsLinks = {};
    this.properties.googleAdsLinks.create = (params) => this._makeRequest('v1beta/{+parent}/googleAdsLinks', 'POST', params);
    this.properties.googleAdsLinks.patch = (params) => this._makeRequest('v1beta/{+name}', 'PATCH', params);
    this.properties.googleAdsLinks.delete = (params) => this._makeRequest('v1beta/{+name}', 'DELETE', params);
    this.properties.googleAdsLinks.list = (params) => this._makeRequest('v1beta/{+parent}/googleAdsLinks', 'GET', params);

    this.properties.conversionEvents = {};
    this.properties.conversionEvents.create = (params) => this._makeRequest('v1beta/{+parent}/conversionEvents', 'POST', params);
    this.properties.conversionEvents.patch = (params) => this._makeRequest('v1beta/{+name}', 'PATCH', params);
    this.properties.conversionEvents.get = (params) => this._makeRequest('v1beta/{+name}', 'GET', params);
    this.properties.conversionEvents.delete = (params) => this._makeRequest('v1beta/{+name}', 'DELETE', params);
    this.properties.conversionEvents.list = (params) => this._makeRequest('v1beta/{+parent}/conversionEvents', 'GET', params);

    this.properties.keyEvents = {};
    this.properties.keyEvents.create = (params) => this._makeRequest('v1beta/{+parent}/keyEvents', 'POST', params);
    this.properties.keyEvents.patch = (params) => this._makeRequest('v1beta/{+name}', 'PATCH', params);
    this.properties.keyEvents.get = (params) => this._makeRequest('v1beta/{+name}', 'GET', params);
    this.properties.keyEvents.delete = (params) => this._makeRequest('v1beta/{+name}', 'DELETE', params);
    this.properties.keyEvents.list = (params) => this._makeRequest('v1beta/{+parent}/keyEvents', 'GET', params);

    this.properties.customDimensions = {};
    this.properties.customDimensions.create = (params) => this._makeRequest('v1beta/{+parent}/customDimensions', 'POST', params);
    this.properties.customDimensions.patch = (params) => this._makeRequest('v1beta/{+name}', 'PATCH', params);
    this.properties.customDimensions.list = (params) => this._makeRequest('v1beta/{+parent}/customDimensions', 'GET', params);
    this.properties.customDimensions.archive = (params) => this._makeRequest('v1beta/{+name}:archive', 'POST', params);
    this.properties.customDimensions.get = (params) => this._makeRequest('v1beta/{+name}', 'GET', params);

    this.properties.customMetrics = {};
    this.properties.customMetrics.create = (params) => this._makeRequest('v1beta/{+parent}/customMetrics', 'POST', params);
    this.properties.customMetrics.patch = (params) => this._makeRequest('v1beta/{+name}', 'PATCH', params);
    this.properties.customMetrics.list = (params) => this._makeRequest('v1beta/{+parent}/customMetrics', 'GET', params);
    this.properties.customMetrics.archive = (params) => this._makeRequest('v1beta/{+name}:archive', 'POST', params);
    this.properties.customMetrics.get = (params) => this._makeRequest('v1beta/{+name}', 'GET', params);

    this.properties.dataStreams = {};
    this.properties.dataStreams.create = (params) => this._makeRequest('v1beta/{+parent}/dataStreams', 'POST', params);
    this.properties.dataStreams.delete = (params) => this._makeRequest('v1beta/{+name}', 'DELETE', params);
    this.properties.dataStreams.patch = (params) => this._makeRequest('v1beta/{+name}', 'PATCH', params);
    this.properties.dataStreams.list = (params) => this._makeRequest('v1beta/{+parent}/dataStreams', 'GET', params);
    this.properties.dataStreams.get = (params) => this._makeRequest('v1beta/{+name}', 'GET', params);

    this.properties.dataStreams.measurementProtocolSecrets = {};
    this.properties.dataStreams.measurementProtocolSecrets.get = (params) => this._makeRequest('v1beta/{+name}', 'GET', params);
    this.properties.dataStreams.measurementProtocolSecrets.list = (params) => this._makeRequest('v1beta/{+parent}/measurementProtocolSecrets', 'GET', params);
    this.properties.dataStreams.measurementProtocolSecrets.create = (params) => this._makeRequest('v1beta/{+parent}/measurementProtocolSecrets', 'POST', params);
    this.properties.dataStreams.measurementProtocolSecrets.delete = (params) => this._makeRequest('v1beta/{+name}', 'DELETE', params);
    this.properties.dataStreams.measurementProtocolSecrets.patch = (params) => this._makeRequest('v1beta/{+name}', 'PATCH', params);
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
