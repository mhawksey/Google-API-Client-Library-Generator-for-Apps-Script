
/**
 * Google Apps Script client library for the Firebase Management API
 * Documentation URL: https://firebase.google.com
 * @class
 */
class Firebase {
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
    this._rootUrl = 'https://firebase.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.operations = {};
    this.operations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    this.projects = {};
    this.projects.addGoogleAnalytics = (params) => this._makeRequest('v1beta1/{+parent}:addGoogleAnalytics', 'POST', params);
    this.projects.getAnalyticsDetails = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.removeAnalytics = (params) => this._makeRequest('v1beta1/{+parent}:removeAnalytics', 'POST', params);
    this.projects.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.list = (params) => this._makeRequest('v1beta1/projects', 'GET', params);
    this.projects.addFirebase = (params) => this._makeRequest('v1beta1/{+project}:addFirebase', 'POST', params);
    this.projects.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);
    this.projects.getAdminSdkConfig = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.searchApps = (params) => this._makeRequest('v1beta1/{+parent}:searchApps', 'GET', params);

    this.projects.androidApps = {};
    this.projects.androidApps.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.androidApps.list = (params) => this._makeRequest('v1beta1/{+parent}/androidApps', 'GET', params);
    this.projects.androidApps.create = (params) => this._makeRequest('v1beta1/{+parent}/androidApps', 'POST', params);
    this.projects.androidApps.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);
    this.projects.androidApps.remove = (params) => this._makeRequest('v1beta1/{+name}:remove', 'POST', params);
    this.projects.androidApps.undelete = (params) => this._makeRequest('v1beta1/{+name}:undelete', 'POST', params);
    this.projects.androidApps.getConfig = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    this.projects.androidApps.sha = {};
    this.projects.androidApps.sha.list = (params) => this._makeRequest('v1beta1/{+parent}/sha', 'GET', params);
    this.projects.androidApps.sha.create = (params) => this._makeRequest('v1beta1/{+parent}/sha', 'POST', params);
    this.projects.androidApps.sha.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    this.projects.iosApps = {};
    this.projects.iosApps.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.iosApps.list = (params) => this._makeRequest('v1beta1/{+parent}/iosApps', 'GET', params);
    this.projects.iosApps.create = (params) => this._makeRequest('v1beta1/{+parent}/iosApps', 'POST', params);
    this.projects.iosApps.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);
    this.projects.iosApps.remove = (params) => this._makeRequest('v1beta1/{+name}:remove', 'POST', params);
    this.projects.iosApps.undelete = (params) => this._makeRequest('v1beta1/{+name}:undelete', 'POST', params);
    this.projects.iosApps.getConfig = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    this.projects.availableLocations = {};
    this.projects.availableLocations.list = (params) => this._makeRequest('v1beta1/{+parent}/availableLocations', 'GET', params);

    this.projects.defaultLocation = {};
    this.projects.defaultLocation.finalize = (params) => this._makeRequest('v1beta1/{+parent}/defaultLocation:finalize', 'POST', params);

    this.projects.webApps = {};
    this.projects.webApps.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.webApps.list = (params) => this._makeRequest('v1beta1/{+parent}/webApps', 'GET', params);
    this.projects.webApps.create = (params) => this._makeRequest('v1beta1/{+parent}/webApps', 'POST', params);
    this.projects.webApps.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);
    this.projects.webApps.remove = (params) => this._makeRequest('v1beta1/{+name}:remove', 'POST', params);
    this.projects.webApps.undelete = (params) => this._makeRequest('v1beta1/{+name}:undelete', 'POST', params);
    this.projects.webApps.getConfig = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    this.availableProjects = {};
    this.availableProjects.list = (params) => this._makeRequest('v1beta1/availableProjects', 'GET', params);
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
