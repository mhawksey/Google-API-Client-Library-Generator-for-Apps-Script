
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

    this.projects = {};

    this.projects.monitoredResourceDescriptors = {};
    this.projects.monitoredResourceDescriptors.list = (params) => this._makeRequest('v3/{+name}/monitoredResourceDescriptors', 'GET', params);
    this.projects.monitoredResourceDescriptors.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);

    this.projects.metricDescriptors = {};
    this.projects.metricDescriptors.list = (params) => this._makeRequest('v3/{+name}/metricDescriptors', 'GET', params);
    this.projects.metricDescriptors.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);
    this.projects.metricDescriptors.create = (params) => this._makeRequest('v3/{+name}/metricDescriptors', 'POST', params);
    this.projects.metricDescriptors.delete = (params) => this._makeRequest('v3/{+name}', 'DELETE', params);

    this.projects.timeSeries = {};
    this.projects.timeSeries.list = (params) => this._makeRequest('v3/{+name}/timeSeries', 'GET', params);
    this.projects.timeSeries.create = (params) => this._makeRequest('v3/{+name}/timeSeries', 'POST', params);
    this.projects.timeSeries.createService = (params) => this._makeRequest('v3/{+name}/timeSeries:createService', 'POST', params);
    this.projects.timeSeries.query = (params) => this._makeRequest('v3/{+name}/timeSeries:query', 'POST', params);

    this.projects.collectdTimeSeries = {};
    this.projects.collectdTimeSeries.create = (params) => this._makeRequest('v3/{+name}/collectdTimeSeries', 'POST', params);

    this.projects.alertPolicies = {};
    this.projects.alertPolicies.list = (params) => this._makeRequest('v3/{+name}/alertPolicies', 'GET', params);
    this.projects.alertPolicies.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);
    this.projects.alertPolicies.create = (params) => this._makeRequest('v3/{+name}/alertPolicies', 'POST', params);
    this.projects.alertPolicies.delete = (params) => this._makeRequest('v3/{+name}', 'DELETE', params);
    this.projects.alertPolicies.patch = (params) => this._makeRequest('v3/{+name}', 'PATCH', params);

    this.projects.groups = {};
    this.projects.groups.list = (params) => this._makeRequest('v3/{+name}/groups', 'GET', params);
    this.projects.groups.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);
    this.projects.groups.create = (params) => this._makeRequest('v3/{+name}/groups', 'POST', params);
    this.projects.groups.update = (params) => this._makeRequest('v3/{+name}', 'PUT', params);
    this.projects.groups.delete = (params) => this._makeRequest('v3/{+name}', 'DELETE', params);

    this.projects.groups.members = {};
    this.projects.groups.members.list = (params) => this._makeRequest('v3/{+name}/members', 'GET', params);

    this.projects.notificationChannelDescriptors = {};
    this.projects.notificationChannelDescriptors.list = (params) => this._makeRequest('v3/{+name}/notificationChannelDescriptors', 'GET', params);
    this.projects.notificationChannelDescriptors.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);

    this.projects.notificationChannels = {};
    this.projects.notificationChannels.list = (params) => this._makeRequest('v3/{+name}/notificationChannels', 'GET', params);
    this.projects.notificationChannels.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);
    this.projects.notificationChannels.create = (params) => this._makeRequest('v3/{+name}/notificationChannels', 'POST', params);
    this.projects.notificationChannels.patch = (params) => this._makeRequest('v3/{+name}', 'PATCH', params);
    this.projects.notificationChannels.delete = (params) => this._makeRequest('v3/{+name}', 'DELETE', params);
    this.projects.notificationChannels.sendVerificationCode = (params) => this._makeRequest('v3/{+name}:sendVerificationCode', 'POST', params);
    this.projects.notificationChannels.getVerificationCode = (params) => this._makeRequest('v3/{+name}:getVerificationCode', 'POST', params);
    this.projects.notificationChannels.verify = (params) => this._makeRequest('v3/{+name}:verify', 'POST', params);

    this.projects.snoozes = {};
    this.projects.snoozes.create = (params) => this._makeRequest('v3/{+parent}/snoozes', 'POST', params);
    this.projects.snoozes.list = (params) => this._makeRequest('v3/{+parent}/snoozes', 'GET', params);
    this.projects.snoozes.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);
    this.projects.snoozes.patch = (params) => this._makeRequest('v3/{+name}', 'PATCH', params);

    this.projects.uptimeCheckConfigs = {};
    this.projects.uptimeCheckConfigs.list = (params) => this._makeRequest('v3/{+parent}/uptimeCheckConfigs', 'GET', params);
    this.projects.uptimeCheckConfigs.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);
    this.projects.uptimeCheckConfigs.create = (params) => this._makeRequest('v3/{+parent}/uptimeCheckConfigs', 'POST', params);
    this.projects.uptimeCheckConfigs.patch = (params) => this._makeRequest('v3/{+name}', 'PATCH', params);
    this.projects.uptimeCheckConfigs.delete = (params) => this._makeRequest('v3/{+name}', 'DELETE', params);

    this.organizations = {};

    this.organizations.timeSeries = {};
    this.organizations.timeSeries.list = (params) => this._makeRequest('v3/{+name}/timeSeries', 'GET', params);

    this.folders = {};

    this.folders.timeSeries = {};
    this.folders.timeSeries.list = (params) => this._makeRequest('v3/{+name}/timeSeries', 'GET', params);

    this.services = {};
    this.services.create = (params) => this._makeRequest('v3/{+parent}/services', 'POST', params);
    this.services.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);
    this.services.list = (params) => this._makeRequest('v3/{+parent}/services', 'GET', params);
    this.services.patch = (params) => this._makeRequest('v3/{+name}', 'PATCH', params);
    this.services.delete = (params) => this._makeRequest('v3/{+name}', 'DELETE', params);

    this.services.serviceLevelObjectives = {};
    this.services.serviceLevelObjectives.create = (params) => this._makeRequest('v3/{+parent}/serviceLevelObjectives', 'POST', params);
    this.services.serviceLevelObjectives.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);
    this.services.serviceLevelObjectives.list = (params) => this._makeRequest('v3/{+parent}/serviceLevelObjectives', 'GET', params);
    this.services.serviceLevelObjectives.patch = (params) => this._makeRequest('v3/{+name}', 'PATCH', params);
    this.services.serviceLevelObjectives.delete = (params) => this._makeRequest('v3/{+name}', 'DELETE', params);

    this.uptimeCheckIps = {};
    this.uptimeCheckIps.list = (params) => this._makeRequest('v3/uptimeCheckIps', 'GET', params);
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
