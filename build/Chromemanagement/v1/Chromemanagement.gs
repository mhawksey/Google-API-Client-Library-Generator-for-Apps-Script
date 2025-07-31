
/**
 * Google Apps Script client library for the Chrome Management API
 * Documentation URL: https://developers.google.com/chrome/management/
 * @class
 */
class Chromemanagement {
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
    this._rootUrl = 'https://chromemanagement.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.customers = {};

    this.customers.apps = {};
    this.customers.apps.countChromeAppRequests = (params) => this._makeRequest('v1/{+customer}/apps:countChromeAppRequests', 'GET', params);
    this.customers.apps.fetchDevicesRequestingExtension = (params) => this._makeRequest('v1/{+customer}/apps:fetchDevicesRequestingExtension', 'GET', params);
    this.customers.apps.fetchUsersRequestingExtension = (params) => this._makeRequest('v1/{+customer}/apps:fetchUsersRequestingExtension', 'GET', params);

    this.customers.apps.chrome = {};
    this.customers.apps.chrome.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.customers.apps.android = {};
    this.customers.apps.android.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.customers.apps.web = {};
    this.customers.apps.web.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.customers.reports = {};
    this.customers.reports.countChromeDevicesReachingAutoExpirationDate = (params) => this._makeRequest('v1/{+customer}/reports:countChromeDevicesReachingAutoExpirationDate', 'GET', params);
    this.customers.reports.countChromeDevicesThatNeedAttention = (params) => this._makeRequest('v1/{+customer}/reports:countChromeDevicesThatNeedAttention', 'GET', params);
    this.customers.reports.countChromeBrowsersNeedingAttention = (params) => this._makeRequest('v1/{+customer}/reports:countChromeBrowsersNeedingAttention', 'GET', params);
    this.customers.reports.countChromeHardwareFleetDevices = (params) => this._makeRequest('v1/{+customer}/reports:countChromeHardwareFleetDevices', 'GET', params);
    this.customers.reports.countInstalledApps = (params) => this._makeRequest('v1/{+customer}/reports:countInstalledApps', 'GET', params);
    this.customers.reports.findInstalledAppDevices = (params) => this._makeRequest('v1/{+customer}/reports:findInstalledAppDevices', 'GET', params);
    this.customers.reports.countChromeVersions = (params) => this._makeRequest('v1/{+customer}/reports:countChromeVersions', 'GET', params);
    this.customers.reports.countPrintJobsByUser = (params) => this._makeRequest('v1/{+customer}/reports:countPrintJobsByUser', 'GET', params);
    this.customers.reports.countPrintJobsByPrinter = (params) => this._makeRequest('v1/{+customer}/reports:countPrintJobsByPrinter', 'GET', params);
    this.customers.reports.enumeratePrintJobs = (params) => this._makeRequest('v1/{+customer}/reports:enumeratePrintJobs', 'GET', params);
    this.customers.reports.countChromeCrashEvents = (params) => this._makeRequest('v1/{+customer}/reports:countChromeCrashEvents', 'GET', params);

    this.customers.telemetry = {};

    this.customers.telemetry.devices = {};
    this.customers.telemetry.devices.list = (params) => this._makeRequest('v1/{+parent}/telemetry/devices', 'GET', params);
    this.customers.telemetry.devices.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.customers.telemetry.events = {};
    this.customers.telemetry.events.list = (params) => this._makeRequest('v1/{+parent}/telemetry/events', 'GET', params);

    this.customers.telemetry.users = {};
    this.customers.telemetry.users.list = (params) => this._makeRequest('v1/{+parent}/telemetry/users', 'GET', params);
    this.customers.telemetry.users.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.customers.telemetry.notificationConfigs = {};
    this.customers.telemetry.notificationConfigs.list = (params) => this._makeRequest('v1/{+parent}/telemetry/notificationConfigs', 'GET', params);
    this.customers.telemetry.notificationConfigs.create = (params) => this._makeRequest('v1/{+parent}/telemetry/notificationConfigs', 'POST', params);
    this.customers.telemetry.notificationConfigs.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.customers.profiles = {};
    this.customers.profiles.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.customers.profiles.list = (params) => this._makeRequest('v1/{+parent}/profiles', 'GET', params);
    this.customers.profiles.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.customers.profiles.commands = {};
    this.customers.profiles.commands.create = (params) => this._makeRequest('v1/{+parent}/commands', 'POST', params);
    this.customers.profiles.commands.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.customers.profiles.commands.list = (params) => this._makeRequest('v1/{+parent}/commands', 'GET', params);

    this.customers.thirdPartyProfileUsers = {};
    this.customers.thirdPartyProfileUsers.move = (params) => this._makeRequest('v1/{+name}:move', 'POST', params);
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
