
/**
 * Google Apps Script client library for the Notebooks API
 * Documentation URL: https://cloud.google.com/notebooks/docs/
 * @class
 */
class Notebooks {
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
    this._rootUrl = 'https://notebooks.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.locations = {};
    this.projects.locations.list = (params) => this._makeRequest('v1/{+name}/locations', 'GET', params);
    this.projects.locations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.operations = {};
    this.projects.locations.operations.list = (params) => this._makeRequest('v1/{+name}/operations', 'GET', params);
    this.projects.locations.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);

    this.projects.locations.runtimes = {};
    this.projects.locations.runtimes.list = (params) => this._makeRequest('v1/{+parent}/runtimes', 'GET', params);
    this.projects.locations.runtimes.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.runtimes.create = (params) => this._makeRequest('v1/{+parent}/runtimes', 'POST', params);
    this.projects.locations.runtimes.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.runtimes.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.runtimes.start = (params) => this._makeRequest('v1/{+name}:start', 'POST', params);
    this.projects.locations.runtimes.stop = (params) => this._makeRequest('v1/{+name}:stop', 'POST', params);
    this.projects.locations.runtimes.switch = (params) => this._makeRequest('v1/{+name}:switch', 'POST', params);
    this.projects.locations.runtimes.reset = (params) => this._makeRequest('v1/{+name}:reset', 'POST', params);
    this.projects.locations.runtimes.upgrade = (params) => this._makeRequest('v1/{+name}:upgrade', 'POST', params);
    this.projects.locations.runtimes.reportEvent = (params) => this._makeRequest('v1/{+name}:reportEvent', 'POST', params);
    this.projects.locations.runtimes.refreshRuntimeTokenInternal = (params) => this._makeRequest('v1/{+name}:refreshRuntimeTokenInternal', 'POST', params);
    this.projects.locations.runtimes.diagnose = (params) => this._makeRequest('v1/{+name}:diagnose', 'POST', params);
    this.projects.locations.runtimes.migrate = (params) => this._makeRequest('v1/{+name}:migrate', 'POST', params);
    this.projects.locations.runtimes.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.runtimes.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.runtimes.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.instances = {};
    this.projects.locations.instances.list = (params) => this._makeRequest('v1/{+parent}/instances', 'GET', params);
    this.projects.locations.instances.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.instances.create = (params) => this._makeRequest('v1/{+parent}/instances', 'POST', params);
    this.projects.locations.instances.register = (params) => this._makeRequest('v1/{+parent}/instances:register', 'POST', params);
    this.projects.locations.instances.setAccelerator = (params) => this._makeRequest('v1/{+name}:setAccelerator', 'PATCH', params);
    this.projects.locations.instances.setMachineType = (params) => this._makeRequest('v1/{+name}:setMachineType', 'PATCH', params);
    this.projects.locations.instances.updateConfig = (params) => this._makeRequest('v1/{+name}:updateConfig', 'PATCH', params);
    this.projects.locations.instances.updateShieldedInstanceConfig = (params) => this._makeRequest('v1/{+name}:updateShieldedInstanceConfig', 'PATCH', params);
    this.projects.locations.instances.setLabels = (params) => this._makeRequest('v1/{+name}:setLabels', 'PATCH', params);
    this.projects.locations.instances.updateMetadataItems = (params) => this._makeRequest('v1/{+name}:updateMetadataItems', 'PATCH', params);
    this.projects.locations.instances.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.instances.start = (params) => this._makeRequest('v1/{+name}:start', 'POST', params);
    this.projects.locations.instances.stop = (params) => this._makeRequest('v1/{+name}:stop', 'POST', params);
    this.projects.locations.instances.reset = (params) => this._makeRequest('v1/{+name}:reset', 'POST', params);
    this.projects.locations.instances.report = (params) => this._makeRequest('v1/{+name}:report', 'POST', params);
    this.projects.locations.instances.isUpgradeable = (params) => this._makeRequest('v1/{+notebookInstance}:isUpgradeable', 'GET', params);
    this.projects.locations.instances.getInstanceHealth = (params) => this._makeRequest('v1/{+name}:getInstanceHealth', 'GET', params);
    this.projects.locations.instances.upgrade = (params) => this._makeRequest('v1/{+name}:upgrade', 'POST', params);
    this.projects.locations.instances.rollback = (params) => this._makeRequest('v1/{+name}:rollback', 'POST', params);
    this.projects.locations.instances.diagnose = (params) => this._makeRequest('v1/{+name}:diagnose', 'POST', params);
    this.projects.locations.instances.upgradeInternal = (params) => this._makeRequest('v1/{+name}:upgradeInternal', 'POST', params);
    this.projects.locations.instances.reportEvent = (params) => this._makeRequest('v1/{+name}:reportEvent', 'POST', params);
    this.projects.locations.instances.migrate = (params) => this._makeRequest('v1/{+name}:migrate', 'POST', params);
    this.projects.locations.instances.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.instances.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.instances.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.environments = {};
    this.projects.locations.environments.list = (params) => this._makeRequest('v1/{+parent}/environments', 'GET', params);
    this.projects.locations.environments.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.environments.create = (params) => this._makeRequest('v1/{+parent}/environments', 'POST', params);
    this.projects.locations.environments.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.schedules = {};
    this.projects.locations.schedules.list = (params) => this._makeRequest('v1/{+parent}/schedules', 'GET', params);
    this.projects.locations.schedules.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.schedules.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.schedules.create = (params) => this._makeRequest('v1/{+parent}/schedules', 'POST', params);
    this.projects.locations.schedules.trigger = (params) => this._makeRequest('v1/{+name}:trigger', 'POST', params);

    this.projects.locations.executions = {};
    this.projects.locations.executions.list = (params) => this._makeRequest('v1/{+parent}/executions', 'GET', params);
    this.projects.locations.executions.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.executions.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.executions.create = (params) => this._makeRequest('v1/{+parent}/executions', 'POST', params);
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
