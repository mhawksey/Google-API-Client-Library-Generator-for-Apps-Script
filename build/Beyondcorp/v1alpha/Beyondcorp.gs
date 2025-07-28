
/**
 * Google Apps Script client library for the BeyondCorp API
 * Documentation URL: https://cloud.google.com/
 * @class
 */
class Beyondcorp {
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
    this._rootUrl = 'https://beyondcorp.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.locations = {};
    this.projects.locations.list = (params) => this._makeRequest('v1alpha/{+name}/locations', 'GET', params);
    this.projects.locations.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    this.projects.locations.operations = {};
    this.projects.locations.operations.list = (params) => this._makeRequest('v1alpha/{+name}/operations', 'GET', params);
    this.projects.locations.operations.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
    this.projects.locations.operations.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);
    this.projects.locations.operations.cancel = (params) => this._makeRequest('v1alpha/{+name}:cancel', 'POST', params);

    this.projects.locations.appConnections = {};
    this.projects.locations.appConnections.list = (params) => this._makeRequest('v1alpha/{+parent}/appConnections', 'GET', params);
    this.projects.locations.appConnections.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
    this.projects.locations.appConnections.create = (params) => this._makeRequest('v1alpha/{+parent}/appConnections', 'POST', params);
    this.projects.locations.appConnections.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);
    this.projects.locations.appConnections.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);
    this.projects.locations.appConnections.resolve = (params) => this._makeRequest('v1alpha/{+parent}/appConnections:resolve', 'GET', params);
    this.projects.locations.appConnections.setIamPolicy = (params) => this._makeRequest('v1alpha/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.appConnections.getIamPolicy = (params) => this._makeRequest('v1alpha/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.appConnections.testIamPermissions = (params) => this._makeRequest('v1alpha/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.appConnectors = {};
    this.projects.locations.appConnectors.list = (params) => this._makeRequest('v1alpha/{+parent}/appConnectors', 'GET', params);
    this.projects.locations.appConnectors.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
    this.projects.locations.appConnectors.create = (params) => this._makeRequest('v1alpha/{+parent}/appConnectors', 'POST', params);
    this.projects.locations.appConnectors.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);
    this.projects.locations.appConnectors.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);
    this.projects.locations.appConnectors.resolveInstanceConfig = (params) => this._makeRequest('v1alpha/{+appConnector}:resolveInstanceConfig', 'GET', params);
    this.projects.locations.appConnectors.reportStatus = (params) => this._makeRequest('v1alpha/{+appConnector}:reportStatus', 'POST', params);
    this.projects.locations.appConnectors.setIamPolicy = (params) => this._makeRequest('v1alpha/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.appConnectors.getIamPolicy = (params) => this._makeRequest('v1alpha/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.appConnectors.testIamPermissions = (params) => this._makeRequest('v1alpha/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.appGateways = {};
    this.projects.locations.appGateways.list = (params) => this._makeRequest('v1alpha/{+parent}/appGateways', 'GET', params);
    this.projects.locations.appGateways.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
    this.projects.locations.appGateways.create = (params) => this._makeRequest('v1alpha/{+parent}/appGateways', 'POST', params);
    this.projects.locations.appGateways.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);
    this.projects.locations.appGateways.setIamPolicy = (params) => this._makeRequest('v1alpha/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.appGateways.getIamPolicy = (params) => this._makeRequest('v1alpha/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.appGateways.testIamPermissions = (params) => this._makeRequest('v1alpha/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.connections = {};
    this.projects.locations.connections.list = (params) => this._makeRequest('v1alpha/{+parent}/connections', 'GET', params);
    this.projects.locations.connections.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
    this.projects.locations.connections.create = (params) => this._makeRequest('v1alpha/{+parent}/connections', 'POST', params);
    this.projects.locations.connections.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);
    this.projects.locations.connections.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);
    this.projects.locations.connections.resolve = (params) => this._makeRequest('v1alpha/{+parent}/connections:resolve', 'GET', params);
    this.projects.locations.connections.setIamPolicy = (params) => this._makeRequest('v1alpha/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.connections.getIamPolicy = (params) => this._makeRequest('v1alpha/{+resource}:getIamPolicy', 'GET', params);

    this.projects.locations.connectors = {};
    this.projects.locations.connectors.list = (params) => this._makeRequest('v1alpha/{+parent}/connectors', 'GET', params);
    this.projects.locations.connectors.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
    this.projects.locations.connectors.create = (params) => this._makeRequest('v1alpha/{+parent}/connectors', 'POST', params);
    this.projects.locations.connectors.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);
    this.projects.locations.connectors.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);
    this.projects.locations.connectors.resolveInstanceConfig = (params) => this._makeRequest('v1alpha/{+connector}:resolveInstanceConfig', 'GET', params);
    this.projects.locations.connectors.reportStatus = (params) => this._makeRequest('v1alpha/{+connector}:reportStatus', 'POST', params);
    this.projects.locations.connectors.setIamPolicy = (params) => this._makeRequest('v1alpha/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.connectors.getIamPolicy = (params) => this._makeRequest('v1alpha/{+resource}:getIamPolicy', 'GET', params);

    this.projects.locations.insights = {};
    this.projects.locations.insights.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
    this.projects.locations.insights.configuredInsight = (params) => this._makeRequest('v1alpha/{+insight}:configuredInsight', 'GET', params);
    this.projects.locations.insights.list = (params) => this._makeRequest('v1alpha/{+parent}/insights', 'GET', params);

    this.projects.locations.securityGateways = {};
    this.projects.locations.securityGateways.list = (params) => this._makeRequest('v1alpha/{+parent}/securityGateways', 'GET', params);
    this.projects.locations.securityGateways.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
    this.projects.locations.securityGateways.create = (params) => this._makeRequest('v1alpha/{+parent}/securityGateways', 'POST', params);
    this.projects.locations.securityGateways.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);
    this.projects.locations.securityGateways.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);
    this.projects.locations.securityGateways.setIamPolicy = (params) => this._makeRequest('v1alpha/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.securityGateways.getIamPolicy = (params) => this._makeRequest('v1alpha/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.securityGateways.testIamPermissions = (params) => this._makeRequest('v1alpha/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.securityGateways.applications = {};
    this.projects.locations.securityGateways.applications.list = (params) => this._makeRequest('v1alpha/{+parent}/applications', 'GET', params);
    this.projects.locations.securityGateways.applications.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
    this.projects.locations.securityGateways.applications.create = (params) => this._makeRequest('v1alpha/{+parent}/applications', 'POST', params);
    this.projects.locations.securityGateways.applications.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);
    this.projects.locations.securityGateways.applications.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);
    this.projects.locations.securityGateways.applications.setIamPolicy = (params) => this._makeRequest('v1alpha/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.securityGateways.applications.getIamPolicy = (params) => this._makeRequest('v1alpha/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.securityGateways.applications.testIamPermissions = (params) => this._makeRequest('v1alpha/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.applications = {};
    this.projects.locations.applications.setIamPolicy = (params) => this._makeRequest('v1alpha/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.applications.getIamPolicy = (params) => this._makeRequest('v1alpha/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.applications.testIamPermissions = (params) => this._makeRequest('v1alpha/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.applicationDomains = {};
    this.projects.locations.applicationDomains.setIamPolicy = (params) => this._makeRequest('v1alpha/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.applicationDomains.getIamPolicy = (params) => this._makeRequest('v1alpha/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.applicationDomains.testIamPermissions = (params) => this._makeRequest('v1alpha/{+resource}:testIamPermissions', 'POST', params);

    this.organizations = {};

    this.organizations.locations = {};

    this.organizations.locations.operations = {};
    this.organizations.locations.operations.list = (params) => this._makeRequest('v1alpha/{+name}/operations', 'GET', params);
    this.organizations.locations.operations.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
    this.organizations.locations.operations.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);
    this.organizations.locations.operations.cancel = (params) => this._makeRequest('v1alpha/{+name}:cancel', 'POST', params);

    this.organizations.locations.insights = {};
    this.organizations.locations.insights.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
    this.organizations.locations.insights.configuredInsight = (params) => this._makeRequest('v1alpha/{+insight}:configuredInsight', 'GET', params);
    this.organizations.locations.insights.list = (params) => this._makeRequest('v1alpha/{+parent}/insights', 'GET', params);

    this.organizations.locations.global = {};

    this.organizations.locations.global.partnerTenants = {};
    this.organizations.locations.global.partnerTenants.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
    this.organizations.locations.global.partnerTenants.list = (params) => this._makeRequest('v1alpha/{+parent}/partnerTenants', 'GET', params);
    this.organizations.locations.global.partnerTenants.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);

    this.organizations.locations.subscriptions = {};
    this.organizations.locations.subscriptions.create = (params) => this._makeRequest('v1alpha/{+parent}/subscriptions', 'POST', params);
    this.organizations.locations.subscriptions.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);
    this.organizations.locations.subscriptions.cancel = (params) => this._makeRequest('v1alpha/{+name}:cancel', 'GET', params);
    this.organizations.locations.subscriptions.restart = (params) => this._makeRequest('v1alpha/{+name}:restart', 'GET', params);
    this.organizations.locations.subscriptions.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
    this.organizations.locations.subscriptions.list = (params) => this._makeRequest('v1alpha/{+parent}/subscriptions', 'GET', params);
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
