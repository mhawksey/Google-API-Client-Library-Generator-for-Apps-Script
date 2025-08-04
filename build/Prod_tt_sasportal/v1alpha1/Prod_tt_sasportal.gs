
/**
 * Google Apps Script client library for the SAS Portal API (Testing)
 * Documentation URL: https://developers.google.com/spectrum-access-system/
 * @class
 */
class Prod_tt_sasportal {
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
    this._rootUrl = 'https://prod-tt-sasportal.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.customers = {};
    this.customers.get = (params) => this._makeRequest('v1alpha1/{+name}', 'GET', params);
    this.customers.list = (params) => this._makeRequest('v1alpha1/customers', 'GET', params);
    this.customers.patch = (params) => this._makeRequest('v1alpha1/{+name}', 'PATCH', params);
    this.customers.listGcpProjectDeployments = (params) => this._makeRequest('v1alpha1/customers:listGcpProjectDeployments', 'GET', params);
    this.customers.provisionDeployment = (params) => this._makeRequest('v1alpha1/customers:provisionDeployment', 'POST', params);
    this.customers.listLegacyOrganizations = (params) => this._makeRequest('v1alpha1/customers:listLegacyOrganizations', 'GET', params);
    this.customers.migrateOrganization = (params) => this._makeRequest('v1alpha1/customers:migrateOrganization', 'POST', params);
    this.customers.setupSasAnalytics = (params) => this._makeRequest('v1alpha1/customers:setupSasAnalytics', 'POST', params);

    this.customers.devices = {};
    this.customers.devices.create = (params) => this._makeRequest('v1alpha1/{+parent}/devices', 'POST', params);
    this.customers.devices.createSigned = (params) => this._makeRequest('v1alpha1/{+parent}/devices:createSigned', 'POST', params);
    this.customers.devices.delete = (params) => this._makeRequest('v1alpha1/{+name}', 'DELETE', params);
    this.customers.devices.get = (params) => this._makeRequest('v1alpha1/{+name}', 'GET', params);
    this.customers.devices.list = (params) => this._makeRequest('v1alpha1/{+parent}/devices', 'GET', params);
    this.customers.devices.move = (params) => this._makeRequest('v1alpha1/{+name}:move', 'POST', params);
    this.customers.devices.patch = (params) => this._makeRequest('v1alpha1/{+name}', 'PATCH', params);
    this.customers.devices.updateSigned = (params) => this._makeRequest('v1alpha1/{+name}:updateSigned', 'PATCH', params);
    this.customers.devices.signDevice = (params) => this._makeRequest('v1alpha1/{+name}:signDevice', 'POST', params);

    this.customers.nodes = {};
    this.customers.nodes.create = (params) => this._makeRequest('v1alpha1/{+parent}/nodes', 'POST', params);
    this.customers.nodes.delete = (params) => this._makeRequest('v1alpha1/{+name}', 'DELETE', params);
    this.customers.nodes.get = (params) => this._makeRequest('v1alpha1/{+name}', 'GET', params);
    this.customers.nodes.list = (params) => this._makeRequest('v1alpha1/{+parent}/nodes', 'GET', params);
    this.customers.nodes.move = (params) => this._makeRequest('v1alpha1/{+name}:move', 'POST', params);
    this.customers.nodes.patch = (params) => this._makeRequest('v1alpha1/{+name}', 'PATCH', params);

    this.customers.nodes.devices = {};
    this.customers.nodes.devices.create = (params) => this._makeRequest('v1alpha1/{+parent}/devices', 'POST', params);
    this.customers.nodes.devices.createSigned = (params) => this._makeRequest('v1alpha1/{+parent}/devices:createSigned', 'POST', params);
    this.customers.nodes.devices.list = (params) => this._makeRequest('v1alpha1/{+parent}/devices', 'GET', params);

    this.customers.nodes.nodes = {};
    this.customers.nodes.nodes.create = (params) => this._makeRequest('v1alpha1/{+parent}/nodes', 'POST', params);
    this.customers.nodes.nodes.list = (params) => this._makeRequest('v1alpha1/{+parent}/nodes', 'GET', params);

    this.customers.nodes.deployments = {};
    this.customers.nodes.deployments.create = (params) => this._makeRequest('v1alpha1/{+parent}/deployments', 'POST', params);
    this.customers.nodes.deployments.list = (params) => this._makeRequest('v1alpha1/{+parent}/deployments', 'GET', params);

    this.customers.deployments = {};
    this.customers.deployments.create = (params) => this._makeRequest('v1alpha1/{+parent}/deployments', 'POST', params);
    this.customers.deployments.delete = (params) => this._makeRequest('v1alpha1/{+name}', 'DELETE', params);
    this.customers.deployments.get = (params) => this._makeRequest('v1alpha1/{+name}', 'GET', params);
    this.customers.deployments.list = (params) => this._makeRequest('v1alpha1/{+parent}/deployments', 'GET', params);
    this.customers.deployments.patch = (params) => this._makeRequest('v1alpha1/{+name}', 'PATCH', params);
    this.customers.deployments.move = (params) => this._makeRequest('v1alpha1/{+name}:move', 'POST', params);

    this.customers.deployments.devices = {};
    this.customers.deployments.devices.create = (params) => this._makeRequest('v1alpha1/{+parent}/devices', 'POST', params);
    this.customers.deployments.devices.createSigned = (params) => this._makeRequest('v1alpha1/{+parent}/devices:createSigned', 'POST', params);
    this.customers.deployments.devices.list = (params) => this._makeRequest('v1alpha1/{+parent}/devices', 'GET', params);

    this.nodes = {};
    this.nodes.get = (params) => this._makeRequest('v1alpha1/{+name}', 'GET', params);

    this.nodes.devices = {};
    this.nodes.devices.create = (params) => this._makeRequest('v1alpha1/{+parent}/devices', 'POST', params);
    this.nodes.devices.createSigned = (params) => this._makeRequest('v1alpha1/{+parent}/devices:createSigned', 'POST', params);
    this.nodes.devices.delete = (params) => this._makeRequest('v1alpha1/{+name}', 'DELETE', params);
    this.nodes.devices.get = (params) => this._makeRequest('v1alpha1/{+name}', 'GET', params);
    this.nodes.devices.list = (params) => this._makeRequest('v1alpha1/{+parent}/devices', 'GET', params);
    this.nodes.devices.move = (params) => this._makeRequest('v1alpha1/{+name}:move', 'POST', params);
    this.nodes.devices.patch = (params) => this._makeRequest('v1alpha1/{+name}', 'PATCH', params);
    this.nodes.devices.updateSigned = (params) => this._makeRequest('v1alpha1/{+name}:updateSigned', 'PATCH', params);
    this.nodes.devices.signDevice = (params) => this._makeRequest('v1alpha1/{+name}:signDevice', 'POST', params);

    this.nodes.nodes = {};
    this.nodes.nodes.create = (params) => this._makeRequest('v1alpha1/{+parent}/nodes', 'POST', params);
    this.nodes.nodes.delete = (params) => this._makeRequest('v1alpha1/{+name}', 'DELETE', params);
    this.nodes.nodes.get = (params) => this._makeRequest('v1alpha1/{+name}', 'GET', params);
    this.nodes.nodes.list = (params) => this._makeRequest('v1alpha1/{+parent}/nodes', 'GET', params);
    this.nodes.nodes.move = (params) => this._makeRequest('v1alpha1/{+name}:move', 'POST', params);
    this.nodes.nodes.patch = (params) => this._makeRequest('v1alpha1/{+name}', 'PATCH', params);

    this.nodes.nodes.devices = {};
    this.nodes.nodes.devices.create = (params) => this._makeRequest('v1alpha1/{+parent}/devices', 'POST', params);
    this.nodes.nodes.devices.createSigned = (params) => this._makeRequest('v1alpha1/{+parent}/devices:createSigned', 'POST', params);
    this.nodes.nodes.devices.list = (params) => this._makeRequest('v1alpha1/{+parent}/devices', 'GET', params);

    this.nodes.nodes.nodes = {};
    this.nodes.nodes.nodes.create = (params) => this._makeRequest('v1alpha1/{+parent}/nodes', 'POST', params);
    this.nodes.nodes.nodes.list = (params) => this._makeRequest('v1alpha1/{+parent}/nodes', 'GET', params);

    this.nodes.nodes.deployments = {};
    this.nodes.nodes.deployments.create = (params) => this._makeRequest('v1alpha1/{+parent}/deployments', 'POST', params);
    this.nodes.nodes.deployments.list = (params) => this._makeRequest('v1alpha1/{+parent}/deployments', 'GET', params);

    this.nodes.deployments = {};
    this.nodes.deployments.delete = (params) => this._makeRequest('v1alpha1/{+name}', 'DELETE', params);
    this.nodes.deployments.get = (params) => this._makeRequest('v1alpha1/{+name}', 'GET', params);
    this.nodes.deployments.list = (params) => this._makeRequest('v1alpha1/{+parent}/deployments', 'GET', params);
    this.nodes.deployments.patch = (params) => this._makeRequest('v1alpha1/{+name}', 'PATCH', params);
    this.nodes.deployments.move = (params) => this._makeRequest('v1alpha1/{+name}:move', 'POST', params);

    this.nodes.deployments.devices = {};
    this.nodes.deployments.devices.create = (params) => this._makeRequest('v1alpha1/{+parent}/devices', 'POST', params);
    this.nodes.deployments.devices.createSigned = (params) => this._makeRequest('v1alpha1/{+parent}/devices:createSigned', 'POST', params);
    this.nodes.deployments.devices.list = (params) => this._makeRequest('v1alpha1/{+parent}/devices', 'GET', params);

    this.installer = {};
    this.installer.generateSecret = (params) => this._makeRequest('v1alpha1/installer:generateSecret', 'POST', params);
    this.installer.validate = (params) => this._makeRequest('v1alpha1/installer:validate', 'POST', params);

    this.deployments = {};
    this.deployments.get = (params) => this._makeRequest('v1alpha1/{+name}', 'GET', params);

    this.deployments.devices = {};
    this.deployments.devices.delete = (params) => this._makeRequest('v1alpha1/{+name}', 'DELETE', params);
    this.deployments.devices.get = (params) => this._makeRequest('v1alpha1/{+name}', 'GET', params);
    this.deployments.devices.move = (params) => this._makeRequest('v1alpha1/{+name}:move', 'POST', params);
    this.deployments.devices.patch = (params) => this._makeRequest('v1alpha1/{+name}', 'PATCH', params);
    this.deployments.devices.updateSigned = (params) => this._makeRequest('v1alpha1/{+name}:updateSigned', 'PATCH', params);
    this.deployments.devices.signDevice = (params) => this._makeRequest('v1alpha1/{+name}:signDevice', 'POST', params);

    this.policies = {};
    this.policies.set = (params) => this._makeRequest('v1alpha1/policies:set', 'POST', params);
    this.policies.get = (params) => this._makeRequest('v1alpha1/policies:get', 'POST', params);
    this.policies.test = (params) => this._makeRequest('v1alpha1/policies:test', 'POST', params);
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
