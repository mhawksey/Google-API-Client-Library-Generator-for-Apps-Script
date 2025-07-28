
/**
 * Google Apps Script client library for the GKE On-Prem API
 * Documentation URL: https://cloud.google.com/anthos/clusters/docs/on-prem/
 * @class
 */
class Gkeonprem {
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
    this._rootUrl = 'https://gkeonprem.googleapis.com/';
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

    this.projects.locations.bareMetalClusters = {};
    this.projects.locations.bareMetalClusters.create = (params) => this._makeRequest('v1/{+parent}/bareMetalClusters', 'POST', params);
    this.projects.locations.bareMetalClusters.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.bareMetalClusters.enroll = (params) => this._makeRequest('v1/{+parent}/bareMetalClusters:enroll', 'POST', params);
    this.projects.locations.bareMetalClusters.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.bareMetalClusters.list = (params) => this._makeRequest('v1/{+parent}/bareMetalClusters', 'GET', params);
    this.projects.locations.bareMetalClusters.unenroll = (params) => this._makeRequest('v1/{+name}:unenroll', 'DELETE', params);
    this.projects.locations.bareMetalClusters.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.bareMetalClusters.queryVersionConfig = (params) => this._makeRequest('v1/{+parent}/bareMetalClusters:queryVersionConfig', 'POST', params);
    this.projects.locations.bareMetalClusters.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.bareMetalClusters.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.bareMetalClusters.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.bareMetalClusters.operations = {};
    this.projects.locations.bareMetalClusters.operations.list = (params) => this._makeRequest('v1/{+name}/operations', 'GET', params);
    this.projects.locations.bareMetalClusters.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.bareMetalClusters.bareMetalNodePools = {};
    this.projects.locations.bareMetalClusters.bareMetalNodePools.create = (params) => this._makeRequest('v1/{+parent}/bareMetalNodePools', 'POST', params);
    this.projects.locations.bareMetalClusters.bareMetalNodePools.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.bareMetalClusters.bareMetalNodePools.enroll = (params) => this._makeRequest('v1/{+parent}/bareMetalNodePools:enroll', 'POST', params);
    this.projects.locations.bareMetalClusters.bareMetalNodePools.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.bareMetalClusters.bareMetalNodePools.list = (params) => this._makeRequest('v1/{+parent}/bareMetalNodePools', 'GET', params);
    this.projects.locations.bareMetalClusters.bareMetalNodePools.unenroll = (params) => this._makeRequest('v1/{+name}:unenroll', 'DELETE', params);
    this.projects.locations.bareMetalClusters.bareMetalNodePools.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.bareMetalClusters.bareMetalNodePools.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.bareMetalClusters.bareMetalNodePools.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.bareMetalClusters.bareMetalNodePools.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.bareMetalClusters.bareMetalNodePools.operations = {};
    this.projects.locations.bareMetalClusters.bareMetalNodePools.operations.list = (params) => this._makeRequest('v1/{+name}/operations', 'GET', params);
    this.projects.locations.bareMetalClusters.bareMetalNodePools.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.vmwareClusters = {};
    this.projects.locations.vmwareClusters.enroll = (params) => this._makeRequest('v1/{+parent}/vmwareClusters:enroll', 'POST', params);
    this.projects.locations.vmwareClusters.unenroll = (params) => this._makeRequest('v1/{+name}:unenroll', 'DELETE', params);
    this.projects.locations.vmwareClusters.create = (params) => this._makeRequest('v1/{+parent}/vmwareClusters', 'POST', params);
    this.projects.locations.vmwareClusters.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.vmwareClusters.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.vmwareClusters.list = (params) => this._makeRequest('v1/{+parent}/vmwareClusters', 'GET', params);
    this.projects.locations.vmwareClusters.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.vmwareClusters.queryVersionConfig = (params) => this._makeRequest('v1/{+parent}/vmwareClusters:queryVersionConfig', 'POST', params);
    this.projects.locations.vmwareClusters.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.vmwareClusters.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.vmwareClusters.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.vmwareClusters.operations = {};
    this.projects.locations.vmwareClusters.operations.list = (params) => this._makeRequest('v1/{+name}/operations', 'GET', params);
    this.projects.locations.vmwareClusters.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.vmwareClusters.vmwareNodePools = {};
    this.projects.locations.vmwareClusters.vmwareNodePools.create = (params) => this._makeRequest('v1/{+parent}/vmwareNodePools', 'POST', params);
    this.projects.locations.vmwareClusters.vmwareNodePools.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.vmwareClusters.vmwareNodePools.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.vmwareClusters.vmwareNodePools.list = (params) => this._makeRequest('v1/{+parent}/vmwareNodePools', 'GET', params);
    this.projects.locations.vmwareClusters.vmwareNodePools.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.vmwareClusters.vmwareNodePools.enroll = (params) => this._makeRequest('v1/{+parent}/vmwareNodePools:enroll', 'POST', params);
    this.projects.locations.vmwareClusters.vmwareNodePools.unenroll = (params) => this._makeRequest('v1/{+name}:unenroll', 'DELETE', params);
    this.projects.locations.vmwareClusters.vmwareNodePools.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.vmwareClusters.vmwareNodePools.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.vmwareClusters.vmwareNodePools.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.vmwareClusters.vmwareNodePools.operations = {};
    this.projects.locations.vmwareClusters.vmwareNodePools.operations.list = (params) => this._makeRequest('v1/{+name}/operations', 'GET', params);
    this.projects.locations.vmwareClusters.vmwareNodePools.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.vmwareAdminClusters = {};
    this.projects.locations.vmwareAdminClusters.create = (params) => this._makeRequest('v1/{+parent}/vmwareAdminClusters', 'POST', params);
    this.projects.locations.vmwareAdminClusters.list = (params) => this._makeRequest('v1/{+parent}/vmwareAdminClusters', 'GET', params);
    this.projects.locations.vmwareAdminClusters.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.vmwareAdminClusters.enroll = (params) => this._makeRequest('v1/{+parent}/vmwareAdminClusters:enroll', 'POST', params);
    this.projects.locations.vmwareAdminClusters.unenroll = (params) => this._makeRequest('v1/{+name}:unenroll', 'DELETE', params);
    this.projects.locations.vmwareAdminClusters.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.vmwareAdminClusters.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.vmwareAdminClusters.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.vmwareAdminClusters.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.vmwareAdminClusters.operations = {};
    this.projects.locations.vmwareAdminClusters.operations.list = (params) => this._makeRequest('v1/{+name}/operations', 'GET', params);
    this.projects.locations.vmwareAdminClusters.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.bareMetalAdminClusters = {};
    this.projects.locations.bareMetalAdminClusters.create = (params) => this._makeRequest('v1/{+parent}/bareMetalAdminClusters', 'POST', params);
    this.projects.locations.bareMetalAdminClusters.list = (params) => this._makeRequest('v1/{+parent}/bareMetalAdminClusters', 'GET', params);
    this.projects.locations.bareMetalAdminClusters.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.bareMetalAdminClusters.enroll = (params) => this._makeRequest('v1/{+parent}/bareMetalAdminClusters:enroll', 'POST', params);
    this.projects.locations.bareMetalAdminClusters.unenroll = (params) => this._makeRequest('v1/{+name}:unenroll', 'DELETE', params);
    this.projects.locations.bareMetalAdminClusters.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.bareMetalAdminClusters.queryVersionConfig = (params) => this._makeRequest('v1/{+parent}/bareMetalAdminClusters:queryVersionConfig', 'POST', params);
    this.projects.locations.bareMetalAdminClusters.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.bareMetalAdminClusters.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.bareMetalAdminClusters.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.bareMetalAdminClusters.operations = {};
    this.projects.locations.bareMetalAdminClusters.operations.list = (params) => this._makeRequest('v1/{+name}/operations', 'GET', params);
    this.projects.locations.bareMetalAdminClusters.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
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
