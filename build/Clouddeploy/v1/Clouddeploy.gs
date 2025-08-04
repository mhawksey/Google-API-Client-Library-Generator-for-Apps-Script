
/**
 * Google Apps Script client library for the Cloud Deploy API
 * Documentation URL: https://cloud.google.com/deploy/
 * @class
 */
class Clouddeploy {
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
    this._rootUrl = 'https://clouddeploy.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.locations = {};
    this.projects.locations.getConfig = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.list = (params) => this._makeRequest('v1/{+name}/locations', 'GET', params);
    this.projects.locations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.operations = {};
    this.projects.locations.operations.list = (params) => this._makeRequest('v1/{+name}/operations', 'GET', params);
    this.projects.locations.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);

    this.projects.locations.deliveryPipelines = {};
    this.projects.locations.deliveryPipelines.list = (params) => this._makeRequest('v1/{+parent}/deliveryPipelines', 'GET', params);
    this.projects.locations.deliveryPipelines.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.deliveryPipelines.create = (params) => this._makeRequest('v1/{+parent}/deliveryPipelines', 'POST', params);
    this.projects.locations.deliveryPipelines.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.deliveryPipelines.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.deliveryPipelines.rollbackTarget = (params) => this._makeRequest('v1/{+name}:rollbackTarget', 'POST', params);
    this.projects.locations.deliveryPipelines.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.deliveryPipelines.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.deliveryPipelines.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.deliveryPipelines.releases = {};
    this.projects.locations.deliveryPipelines.releases.list = (params) => this._makeRequest('v1/{+parent}/releases', 'GET', params);
    this.projects.locations.deliveryPipelines.releases.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.deliveryPipelines.releases.create = (params) => this._makeRequest('v1/{+parent}/releases', 'POST', params);
    this.projects.locations.deliveryPipelines.releases.abandon = (params) => this._makeRequest('v1/{+name}:abandon', 'POST', params);

    this.projects.locations.deliveryPipelines.releases.rollouts = {};
    this.projects.locations.deliveryPipelines.releases.rollouts.approve = (params) => this._makeRequest('v1/{+name}:approve', 'POST', params);
    this.projects.locations.deliveryPipelines.releases.rollouts.advance = (params) => this._makeRequest('v1/{+name}:advance', 'POST', params);
    this.projects.locations.deliveryPipelines.releases.rollouts.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);
    this.projects.locations.deliveryPipelines.releases.rollouts.list = (params) => this._makeRequest('v1/{+parent}/rollouts', 'GET', params);
    this.projects.locations.deliveryPipelines.releases.rollouts.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.deliveryPipelines.releases.rollouts.create = (params) => this._makeRequest('v1/{+parent}/rollouts', 'POST', params);
    this.projects.locations.deliveryPipelines.releases.rollouts.ignoreJob = (params) => this._makeRequest('v1/{+rollout}:ignoreJob', 'POST', params);
    this.projects.locations.deliveryPipelines.releases.rollouts.retryJob = (params) => this._makeRequest('v1/{+rollout}:retryJob', 'POST', params);

    this.projects.locations.deliveryPipelines.releases.rollouts.jobRuns = {};
    this.projects.locations.deliveryPipelines.releases.rollouts.jobRuns.list = (params) => this._makeRequest('v1/{+parent}/jobRuns', 'GET', params);
    this.projects.locations.deliveryPipelines.releases.rollouts.jobRuns.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.deliveryPipelines.releases.rollouts.jobRuns.terminate = (params) => this._makeRequest('v1/{+name}:terminate', 'POST', params);

    this.projects.locations.deliveryPipelines.automations = {};
    this.projects.locations.deliveryPipelines.automations.create = (params) => this._makeRequest('v1/{+parent}/automations', 'POST', params);
    this.projects.locations.deliveryPipelines.automations.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.deliveryPipelines.automations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.deliveryPipelines.automations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.deliveryPipelines.automations.list = (params) => this._makeRequest('v1/{+parent}/automations', 'GET', params);

    this.projects.locations.deliveryPipelines.automationRuns = {};
    this.projects.locations.deliveryPipelines.automationRuns.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.deliveryPipelines.automationRuns.list = (params) => this._makeRequest('v1/{+parent}/automationRuns', 'GET', params);
    this.projects.locations.deliveryPipelines.automationRuns.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);

    this.projects.locations.targets = {};
    this.projects.locations.targets.list = (params) => this._makeRequest('v1/{+parent}/targets', 'GET', params);
    this.projects.locations.targets.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.targets.create = (params) => this._makeRequest('v1/{+parent}/targets', 'POST', params);
    this.projects.locations.targets.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.targets.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.targets.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.targets.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.targets.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.customTargetTypes = {};
    this.projects.locations.customTargetTypes.list = (params) => this._makeRequest('v1/{+parent}/customTargetTypes', 'GET', params);
    this.projects.locations.customTargetTypes.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.customTargetTypes.create = (params) => this._makeRequest('v1/{+parent}/customTargetTypes', 'POST', params);
    this.projects.locations.customTargetTypes.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.customTargetTypes.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.customTargetTypes.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.customTargetTypes.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    this.projects.locations.deployPolicies = {};
    this.projects.locations.deployPolicies.create = (params) => this._makeRequest('v1/{+parent}/deployPolicies', 'POST', params);
    this.projects.locations.deployPolicies.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.deployPolicies.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.deployPolicies.list = (params) => this._makeRequest('v1/{+parent}/deployPolicies', 'GET', params);
    this.projects.locations.deployPolicies.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.deployPolicies.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.deployPolicies.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);
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
