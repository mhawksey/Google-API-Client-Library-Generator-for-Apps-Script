
/**
 * Google Apps Script client library for the AdSense Management API
 * Documentation URL: https://developers.google.com/adsense/management/
 * @class
 */
class Adsense {
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
    this._rootUrl = 'https://adsense.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.accounts = {};
    this.accounts.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.accounts.list = (params) => this._makeRequest('v2/accounts', 'GET', params);
    this.accounts.listChildAccounts = (params) => this._makeRequest('v2/{+parent}:listChildAccounts', 'GET', params);
    this.accounts.getAdBlockingRecoveryTag = (params) => this._makeRequest('v2/{+name}/adBlockingRecoveryTag', 'GET', params);

    this.accounts.adclients = {};
    this.accounts.adclients.list = (params) => this._makeRequest('v2/{+parent}/adclients', 'GET', params);
    this.accounts.adclients.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.accounts.adclients.getAdcode = (params) => this._makeRequest('v2/{+name}/adcode', 'GET', params);

    this.accounts.adclients.adunits = {};
    this.accounts.adclients.adunits.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.accounts.adclients.adunits.list = (params) => this._makeRequest('v2/{+parent}/adunits', 'GET', params);
    this.accounts.adclients.adunits.getAdcode = (params) => this._makeRequest('v2/{+name}/adcode', 'GET', params);
    this.accounts.adclients.adunits.create = (params) => this._makeRequest('v2/{+parent}/adunits', 'POST', params);
    this.accounts.adclients.adunits.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);
    this.accounts.adclients.adunits.listLinkedCustomChannels = (params) => this._makeRequest('v2/{+parent}:listLinkedCustomChannels', 'GET', params);

    this.accounts.adclients.customchannels = {};
    this.accounts.adclients.customchannels.listLinkedAdUnits = (params) => this._makeRequest('v2/{+parent}:listLinkedAdUnits', 'GET', params);
    this.accounts.adclients.customchannels.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.accounts.adclients.customchannels.list = (params) => this._makeRequest('v2/{+parent}/customchannels', 'GET', params);
    this.accounts.adclients.customchannels.create = (params) => this._makeRequest('v2/{+parent}/customchannels', 'POST', params);
    this.accounts.adclients.customchannels.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);
    this.accounts.adclients.customchannels.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.accounts.adclients.urlchannels = {};
    this.accounts.adclients.urlchannels.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.accounts.adclients.urlchannels.list = (params) => this._makeRequest('v2/{+parent}/urlchannels', 'GET', params);

    this.accounts.alerts = {};
    this.accounts.alerts.list = (params) => this._makeRequest('v2/{+parent}/alerts', 'GET', params);

    this.accounts.payments = {};
    this.accounts.payments.list = (params) => this._makeRequest('v2/{+parent}/payments', 'GET', params);

    this.accounts.policyIssues = {};
    this.accounts.policyIssues.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.accounts.policyIssues.list = (params) => this._makeRequest('v2/{+parent}/policyIssues', 'GET', params);

    this.accounts.reports = {};
    this.accounts.reports.getSaved = (params) => this._makeRequest('v2/{+name}/saved', 'GET', params);
    this.accounts.reports.generate = (params) => this._makeRequest('v2/{+account}/reports:generate', 'GET', params);
    this.accounts.reports.generateCsv = (params) => this._makeRequest('v2/{+account}/reports:generateCsv', 'GET', params);

    this.accounts.reports.saved = {};
    this.accounts.reports.saved.generate = (params) => this._makeRequest('v2/{+name}/saved:generate', 'GET', params);
    this.accounts.reports.saved.generateCsv = (params) => this._makeRequest('v2/{+name}/saved:generateCsv', 'GET', params);
    this.accounts.reports.saved.list = (params) => this._makeRequest('v2/{+parent}/reports/saved', 'GET', params);

    this.accounts.sites = {};
    this.accounts.sites.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.accounts.sites.list = (params) => this._makeRequest('v2/{+parent}/sites', 'GET', params);
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
