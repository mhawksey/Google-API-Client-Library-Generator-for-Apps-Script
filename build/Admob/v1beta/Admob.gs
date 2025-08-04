
/**
 * Google Apps Script client library for the AdMob API
 * Documentation URL: https://developers.google.com/admob/api/
 * @class
 */
class Admob {
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
    this._rootUrl = 'https://admob.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.accounts = {};
    this.accounts.get = (params) => this._makeRequest('v1beta/{+name}', 'GET', params);
    this.accounts.list = (params) => this._makeRequest('v1beta/accounts', 'GET', params);

    this.accounts.networkReport = {};
    this.accounts.networkReport.generate = (params) => this._makeRequest('v1beta/{+parent}/networkReport:generate', 'POST', params);

    this.accounts.mediationReport = {};
    this.accounts.mediationReport.generate = (params) => this._makeRequest('v1beta/{+parent}/mediationReport:generate', 'POST', params);

    this.accounts.campaignReport = {};
    this.accounts.campaignReport.generate = (params) => this._makeRequest('v1beta/{+parent}/campaignReport:generate', 'POST', params);

    this.accounts.apps = {};
    this.accounts.apps.create = (params) => this._makeRequest('v1beta/{+parent}/apps', 'POST', params);
    this.accounts.apps.list = (params) => this._makeRequest('v1beta/{+parent}/apps', 'GET', params);

    this.accounts.adUnits = {};
    this.accounts.adUnits.create = (params) => this._makeRequest('v1beta/{+parent}/adUnits', 'POST', params);
    this.accounts.adUnits.list = (params) => this._makeRequest('v1beta/{+parent}/adUnits', 'GET', params);

    this.accounts.adUnits.adUnitMappings = {};
    this.accounts.adUnits.adUnitMappings.list = (params) => this._makeRequest('v1beta/{+parent}/adUnitMappings', 'GET', params);
    this.accounts.adUnits.adUnitMappings.create = (params) => this._makeRequest('v1beta/{+parent}/adUnitMappings', 'POST', params);

    this.accounts.mediationGroups = {};
    this.accounts.mediationGroups.list = (params) => this._makeRequest('v1beta/{+parent}/mediationGroups', 'GET', params);
    this.accounts.mediationGroups.create = (params) => this._makeRequest('v1beta/{+parent}/mediationGroups', 'POST', params);
    this.accounts.mediationGroups.patch = (params) => this._makeRequest('v1beta/{+name}', 'PATCH', params);

    this.accounts.mediationGroups.mediationAbExperiments = {};
    this.accounts.mediationGroups.mediationAbExperiments.create = (params) => this._makeRequest('v1beta/{+parent}/mediationAbExperiments', 'POST', params);
    this.accounts.mediationGroups.mediationAbExperiments.stop = (params) => this._makeRequest('v1beta/{+name}:stop', 'POST', params);

    this.accounts.adUnitMappings = {};
    this.accounts.adUnitMappings.batchCreate = (params) => this._makeRequest('v1beta/{+parent}/adUnitMappings:batchCreate', 'POST', params);

    this.accounts.adSources = {};
    this.accounts.adSources.list = (params) => this._makeRequest('v1beta/{+parent}/adSources', 'GET', params);

    this.accounts.adSources.adapters = {};
    this.accounts.adSources.adapters.list = (params) => this._makeRequest('v1beta/{+parent}/adapters', 'GET', params);
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
