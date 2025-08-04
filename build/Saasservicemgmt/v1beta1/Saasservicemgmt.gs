
/**
 * Google Apps Script client library for the SaaS Runtime API
 * Documentation URL: https://cloud.google.com/saas-runtime/docs
 * @class
 */
class Saasservicemgmt {
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
    this._rootUrl = 'https://saasservicemgmt.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.locations = {};
    this.projects.locations.list = (params) => this._makeRequest('v1beta1/{+name}/locations', 'GET', params);
    this.projects.locations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    this.projects.locations.saas = {};
    this.projects.locations.saas.list = (params) => this._makeRequest('v1beta1/{+parent}/saas', 'GET', params);
    this.projects.locations.saas.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.locations.saas.create = (params) => this._makeRequest('v1beta1/{+parent}/saas', 'POST', params);
    this.projects.locations.saas.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);
    this.projects.locations.saas.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    this.projects.locations.tenants = {};
    this.projects.locations.tenants.list = (params) => this._makeRequest('v1beta1/{+parent}/tenants', 'GET', params);
    this.projects.locations.tenants.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.locations.tenants.create = (params) => this._makeRequest('v1beta1/{+parent}/tenants', 'POST', params);
    this.projects.locations.tenants.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);
    this.projects.locations.tenants.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    this.projects.locations.unitKinds = {};
    this.projects.locations.unitKinds.list = (params) => this._makeRequest('v1beta1/{+parent}/unitKinds', 'GET', params);
    this.projects.locations.unitKinds.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.locations.unitKinds.create = (params) => this._makeRequest('v1beta1/{+parent}/unitKinds', 'POST', params);
    this.projects.locations.unitKinds.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);
    this.projects.locations.unitKinds.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    this.projects.locations.units = {};
    this.projects.locations.units.list = (params) => this._makeRequest('v1beta1/{+parent}/units', 'GET', params);
    this.projects.locations.units.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.locations.units.create = (params) => this._makeRequest('v1beta1/{+parent}/units', 'POST', params);
    this.projects.locations.units.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);
    this.projects.locations.units.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    this.projects.locations.unitOperations = {};
    this.projects.locations.unitOperations.list = (params) => this._makeRequest('v1beta1/{+parent}/unitOperations', 'GET', params);
    this.projects.locations.unitOperations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.locations.unitOperations.create = (params) => this._makeRequest('v1beta1/{+parent}/unitOperations', 'POST', params);
    this.projects.locations.unitOperations.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);
    this.projects.locations.unitOperations.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    this.projects.locations.releases = {};
    this.projects.locations.releases.list = (params) => this._makeRequest('v1beta1/{+parent}/releases', 'GET', params);
    this.projects.locations.releases.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.locations.releases.create = (params) => this._makeRequest('v1beta1/{+parent}/releases', 'POST', params);
    this.projects.locations.releases.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);
    this.projects.locations.releases.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    this.projects.locations.rollouts = {};
    this.projects.locations.rollouts.list = (params) => this._makeRequest('v1beta1/{+parent}/rollouts', 'GET', params);
    this.projects.locations.rollouts.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.locations.rollouts.create = (params) => this._makeRequest('v1beta1/{+parent}/rollouts', 'POST', params);
    this.projects.locations.rollouts.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);
    this.projects.locations.rollouts.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    this.projects.locations.rolloutKinds = {};
    this.projects.locations.rolloutKinds.list = (params) => this._makeRequest('v1beta1/{+parent}/rolloutKinds', 'GET', params);
    this.projects.locations.rolloutKinds.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.locations.rolloutKinds.create = (params) => this._makeRequest('v1beta1/{+parent}/rolloutKinds', 'POST', params);
    this.projects.locations.rolloutKinds.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);
    this.projects.locations.rolloutKinds.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);
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
