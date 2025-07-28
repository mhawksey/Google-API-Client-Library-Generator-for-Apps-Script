
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
    this.projects.assessments.create = (params) => this._makeRequest('v1/{+parent}/assessments', 'POST', params);
    this.projects.assessments.annotate = (params) => this._makeRequest('v1/{+name}:annotate', 'POST', params);

    this.projects.keys = {};
    this.projects.keys.create = (params) => this._makeRequest('v1/{+parent}/keys', 'POST', params);
    this.projects.keys.list = (params) => this._makeRequest('v1/{+parent}/keys', 'GET', params);
    this.projects.keys.retrieveLegacySecretKey = (params) => this._makeRequest('v1/{+key}:retrieveLegacySecretKey', 'GET', params);
    this.projects.keys.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.keys.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.keys.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.keys.migrate = (params) => this._makeRequest('v1/{+name}:migrate', 'POST', params);
    this.projects.keys.addIpOverride = (params) => this._makeRequest('v1/{+name}:addIpOverride', 'POST', params);
    this.projects.keys.removeIpOverride = (params) => this._makeRequest('v1/{+name}:removeIpOverride', 'POST', params);
    this.projects.keys.listIpOverrides = (params) => this._makeRequest('v1/{+parent}:listIpOverrides', 'GET', params);
    this.projects.keys.getMetrics = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.firewallpolicies = {};
    this.projects.firewallpolicies.create = (params) => this._makeRequest('v1/{+parent}/firewallpolicies', 'POST', params);
    this.projects.firewallpolicies.list = (params) => this._makeRequest('v1/{+parent}/firewallpolicies', 'GET', params);
    this.projects.firewallpolicies.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.firewallpolicies.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.firewallpolicies.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.firewallpolicies.reorder = (params) => this._makeRequest('v1/{+parent}/firewallpolicies:reorder', 'POST', params);

    this.projects.relatedaccountgroups = {};
    this.projects.relatedaccountgroups.list = (params) => this._makeRequest('v1/{+parent}/relatedaccountgroups', 'GET', params);

    this.projects.relatedaccountgroups.memberships = {};
    this.projects.relatedaccountgroups.memberships.list = (params) => this._makeRequest('v1/{+parent}/memberships', 'GET', params);

    this.projects.relatedaccountgroupmemberships = {};
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
