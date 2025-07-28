
/**
 * Google Apps Script client library for the Cloud Monitoring API
 * Documentation URL: https://cloud.google.com/monitoring/api/
 * @class
 */
class Monitoring {
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
    this._rootUrl = 'https://monitoring.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.operations = {};
    this.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects = {};

    this.projects.dashboards = {};
    this.projects.dashboards.create = (params) => this._makeRequest('v1/{+parent}/dashboards', 'POST', params);
    this.projects.dashboards.list = (params) => this._makeRequest('v1/{+parent}/dashboards', 'GET', params);
    this.projects.dashboards.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.dashboards.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.dashboards.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.projects.location = {};

    this.projects.location.prometheus = {};

    this.projects.location.prometheus.api = {};

    this.projects.location.prometheus.api.v1 = {};
    this.projects.location.prometheus.api.v1.query = (params) => this._makeRequest('v1/{+name}/location/{location}/prometheus/api/v1/query', 'POST', params);
    this.projects.location.prometheus.api.v1.query_range = (params) => this._makeRequest('v1/{+name}/location/{location}/prometheus/api/v1/query_range', 'POST', params);
    this.projects.location.prometheus.api.v1.labels = (params) => this._makeRequest('v1/{+name}/location/{location}/prometheus/api/v1/labels', 'POST', params);
    this.projects.location.prometheus.api.v1.series = (params) => this._makeRequest('v1/{+name}/location/{location}/prometheus/api/v1/series', 'POST', params);
    this.projects.location.prometheus.api.v1.query_exemplars = (params) => this._makeRequest('v1/{+name}/location/{location}/prometheus/api/v1/query_exemplars', 'POST', params);

    this.projects.location.prometheus.api.v1.label = {};
    this.projects.location.prometheus.api.v1.label.values = (params) => this._makeRequest('v1/{+name}/location/{location}/prometheus/api/v1/label/{label}/values', 'GET', params);

    this.projects.location.prometheus.api.v1.metadata = {};
    this.projects.location.prometheus.api.v1.metadata.list = (params) => this._makeRequest('v1/{+name}/location/{location}/prometheus/api/v1/metadata', 'GET', params);

    this.locations = {};

    this.locations.global = {};

    this.locations.global.metricsScopes = {};
    this.locations.global.metricsScopes.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.locations.global.metricsScopes.listMetricsScopesByMonitoredProject = (params) => this._makeRequest('v1/locations/global/metricsScopes:listMetricsScopesByMonitoredProject', 'GET', params);

    this.locations.global.metricsScopes.projects = {};
    this.locations.global.metricsScopes.projects.create = (params) => this._makeRequest('v1/{+parent}/projects', 'POST', params);
    this.locations.global.metricsScopes.projects.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
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
