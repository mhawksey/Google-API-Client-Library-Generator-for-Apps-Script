
/**
 * Google Apps Script client library for the Application Integration API
 * Documentation URL: https://cloud.google.com/application-integration
 * @class
 */
class Integrations {
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
    this._rootUrl = 'https://integrations.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};
    this.projects.getClientmetadata = (params) => this._makeRequest('v1/{+parent}/clientmetadata', 'GET', params);

    this.projects.locations = {};
    this.projects.locations.getClients = (params) => this._makeRequest('v1/{+parent}/clients', 'GET', params);
    this.projects.locations.generateOpenApiSpec = (params) => this._makeRequest('v1/{+name}:generateOpenApiSpec', 'POST', params);

    this.projects.locations.appsScriptProjects = {};
    this.projects.locations.appsScriptProjects.link = (params) => this._makeRequest('v1/{+parent}/appsScriptProjects:link', 'POST', params);
    this.projects.locations.appsScriptProjects.create = (params) => this._makeRequest('v1/{+parent}/appsScriptProjects', 'POST', params);

    this.projects.locations.clients = {};
    this.projects.locations.clients.provision = (params) => this._makeRequest('v1/{+parent}/clients:provision', 'POST', params);
    this.projects.locations.clients.provisionClientPostProcessor = (params) => this._makeRequest('v1/{+parent}/clients:provisionClientPostProcessor', 'POST', params);
    this.projects.locations.clients.deprovision = (params) => this._makeRequest('v1/{+parent}/clients:deprovision', 'POST', params);
    this.projects.locations.clients.changeConfig = (params) => this._makeRequest('v1/{+parent}/clients:changeConfig', 'POST', params);
    this.projects.locations.clients.switch = (params) => this._makeRequest('v1/{+parent}/clients:switch', 'POST', params);
    this.projects.locations.clients.replace = (params) => this._makeRequest('v1/{+parent}/clients:replace', 'POST', params);
    this.projects.locations.clients.switchVariableMasking = (params) => this._makeRequest('v1/{+parent}/clients:switchVariableMasking', 'POST', params);
    this.projects.locations.clients.toggleHttp = (params) => this._makeRequest('v1/{+parent}/clients:toggleHttp', 'POST', params);

    this.projects.locations.products = {};

    this.projects.locations.products.cloudFunctions = {};
    this.projects.locations.products.cloudFunctions.create = (params) => this._makeRequest('v1/{+parent}/cloudFunctions', 'POST', params);

    this.projects.locations.products.certificates = {};
    this.projects.locations.products.certificates.list = (params) => this._makeRequest('v1/{+parent}/certificates', 'GET', params);
    this.projects.locations.products.certificates.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.products.certificates.create = (params) => this._makeRequest('v1/{+parent}/certificates', 'POST', params);
    this.projects.locations.products.certificates.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.products.certificates.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.products.authConfigs = {};
    this.projects.locations.products.authConfigs.create = (params) => this._makeRequest('v1/{+parent}/authConfigs', 'POST', params);
    this.projects.locations.products.authConfigs.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.products.authConfigs.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.products.authConfigs.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.products.authConfigs.list = (params) => this._makeRequest('v1/{+parent}/authConfigs', 'GET', params);

    this.projects.locations.products.integrations = {};
    this.projects.locations.products.integrations.execute = (params) => this._makeRequest('v1/{+name}:execute', 'POST', params);
    this.projects.locations.products.integrations.schedule = (params) => this._makeRequest('v1/{+name}:schedule', 'POST', params);
    this.projects.locations.products.integrations.test = (params) => this._makeRequest('v1/{+name}:test', 'POST', params);
    this.projects.locations.products.integrations.list = (params) => this._makeRequest('v1/{+parent}/integrations', 'GET', params);

    this.projects.locations.products.integrations.versions = {};
    this.projects.locations.products.integrations.versions.list = (params) => this._makeRequest('v1/{+parent}/versions', 'GET', params);
    this.projects.locations.products.integrations.versions.create = (params) => this._makeRequest('v1/{+parent}/versions', 'POST', params);
    this.projects.locations.products.integrations.versions.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.products.integrations.versions.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.products.integrations.versions.publish = (params) => this._makeRequest('v1/{+name}:publish', 'POST', params);
    this.projects.locations.products.integrations.versions.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.products.integrations.versions.upload = (params) => this._makeRequest('v1/{+parent}/versions:upload', 'POST', params);
    this.projects.locations.products.integrations.versions.download = (params) => this._makeRequest('v1/{+name}:download', 'GET', params);
    this.projects.locations.products.integrations.versions.takeoverEditLock = (params) => this._makeRequest('v1/{+integrationVersion}:takeoverEditLock', 'POST', params);
    this.projects.locations.products.integrations.versions.unpublish = (params) => this._makeRequest('v1/{+name}:unpublish', 'POST', params);

    this.projects.locations.products.integrations.executions = {};
    this.projects.locations.products.integrations.executions.list = (params) => this._makeRequest('v1/{+parent}/executions', 'GET', params);
    this.projects.locations.products.integrations.executions.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.products.integrations.executions.download = (params) => this._makeRequest('v1/{+name}:download', 'GET', params);

    this.projects.locations.products.integrations.executions.suspensions = {};
    this.projects.locations.products.integrations.executions.suspensions.resolve = (params) => this._makeRequest('v1/{+name}:resolve', 'POST', params);
    this.projects.locations.products.integrations.executions.suspensions.list = (params) => this._makeRequest('v1/{+parent}/suspensions', 'GET', params);
    this.projects.locations.products.integrations.executions.suspensions.lift = (params) => this._makeRequest('v1/{+name}:lift', 'POST', params);

    this.projects.locations.products.sfdcInstances = {};
    this.projects.locations.products.sfdcInstances.create = (params) => this._makeRequest('v1/{+parent}/sfdcInstances', 'POST', params);
    this.projects.locations.products.sfdcInstances.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.products.sfdcInstances.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.products.sfdcInstances.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.products.sfdcInstances.list = (params) => this._makeRequest('v1/{+parent}/sfdcInstances', 'GET', params);

    this.projects.locations.products.sfdcInstances.sfdcChannels = {};
    this.projects.locations.products.sfdcInstances.sfdcChannels.create = (params) => this._makeRequest('v1/{+parent}/sfdcChannels', 'POST', params);
    this.projects.locations.products.sfdcInstances.sfdcChannels.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.products.sfdcInstances.sfdcChannels.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.products.sfdcInstances.sfdcChannels.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.products.sfdcInstances.sfdcChannels.list = (params) => this._makeRequest('v1/{+parent}/sfdcChannels', 'GET', params);

    this.projects.locations.cloudFunctions = {};
    this.projects.locations.cloudFunctions.create = (params) => this._makeRequest('v1/{+parent}/cloudFunctions', 'POST', params);

    this.projects.locations.certificates = {};
    this.projects.locations.certificates.list = (params) => this._makeRequest('v1/{+parent}/certificates', 'GET', params);
    this.projects.locations.certificates.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.certificates.create = (params) => this._makeRequest('v1/{+parent}/certificates', 'POST', params);
    this.projects.locations.certificates.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.certificates.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.authConfigs = {};
    this.projects.locations.authConfigs.create = (params) => this._makeRequest('v1/{+parent}/authConfigs', 'POST', params);
    this.projects.locations.authConfigs.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.authConfigs.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.authConfigs.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.authConfigs.list = (params) => this._makeRequest('v1/{+parent}/authConfigs', 'GET', params);

    this.projects.locations.connections = {};
    this.projects.locations.connections.list = (params) => this._makeRequest('v1/{+parent}/connections', 'GET', params);
    this.projects.locations.connections.getConnectionSchemaMetadata = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.connections.runtimeEntitySchemas = {};
    this.projects.locations.connections.runtimeEntitySchemas.list = (params) => this._makeRequest('v1/{+parent}/runtimeEntitySchemas', 'GET', params);

    this.projects.locations.connections.runtimeActionSchemas = {};
    this.projects.locations.connections.runtimeActionSchemas.list = (params) => this._makeRequest('v1/{+parent}/runtimeActionSchemas', 'GET', params);

    this.projects.locations.integrations = {};
    this.projects.locations.integrations.execute = (params) => this._makeRequest('v1/{+name}:execute', 'POST', params);
    this.projects.locations.integrations.schedule = (params) => this._makeRequest('v1/{+name}:schedule', 'POST', params);
    this.projects.locations.integrations.executeEvent = (params) => this._makeRequest('v1/{+name}:executeEvent', 'POST', params);
    this.projects.locations.integrations.test = (params) => this._makeRequest('v1/{+name}:test', 'POST', params);
    this.projects.locations.integrations.list = (params) => this._makeRequest('v1/{+parent}/integrations', 'GET', params);
    this.projects.locations.integrations.search = (params) => this._makeRequest('v1/{+parent}/integrations:search', 'GET', params);
    this.projects.locations.integrations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.integrations.versions = {};
    this.projects.locations.integrations.versions.list = (params) => this._makeRequest('v1/{+parent}/versions', 'GET', params);
    this.projects.locations.integrations.versions.create = (params) => this._makeRequest('v1/{+parent}/versions', 'POST', params);
    this.projects.locations.integrations.versions.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.integrations.versions.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.integrations.versions.publish = (params) => this._makeRequest('v1/{+name}:publish', 'POST', params);
    this.projects.locations.integrations.versions.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.integrations.versions.upload = (params) => this._makeRequest('v1/{+parent}/versions:upload', 'POST', params);
    this.projects.locations.integrations.versions.download = (params) => this._makeRequest('v1/{+name}:download', 'GET', params);
    this.projects.locations.integrations.versions.downloadJsonPackage = (params) => this._makeRequest('v1/{+name}:downloadJsonPackage', 'GET', params);
    this.projects.locations.integrations.versions.unpublish = (params) => this._makeRequest('v1/{+name}:unpublish', 'POST', params);

    this.projects.locations.integrations.versions.testCases = {};
    this.projects.locations.integrations.versions.testCases.create = (params) => this._makeRequest('v1/{+parent}/testCases', 'POST', params);
    this.projects.locations.integrations.versions.testCases.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.integrations.versions.testCases.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.integrations.versions.testCases.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.integrations.versions.testCases.list = (params) => this._makeRequest('v1/{+parent}/testCases', 'GET', params);
    this.projects.locations.integrations.versions.testCases.executeTest = (params) => this._makeRequest('v1/{+testCaseName}:executeTest', 'POST', params);
    this.projects.locations.integrations.versions.testCases.upload = (params) => this._makeRequest('v1/{+parent}/testCases:upload', 'POST', params);
    this.projects.locations.integrations.versions.testCases.download = (params) => this._makeRequest('v1/{+name}:download', 'GET', params);
    this.projects.locations.integrations.versions.testCases.takeoverEditLock = (params) => this._makeRequest('v1/{+name}:takeoverEditLock', 'POST', params);
    this.projects.locations.integrations.versions.testCases.execute = (params) => this._makeRequest('v1/{+parent}/testCases:execute', 'POST', params);

    this.projects.locations.integrations.executions = {};
    this.projects.locations.integrations.executions.list = (params) => this._makeRequest('v1/{+parent}/executions', 'GET', params);
    this.projects.locations.integrations.executions.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.integrations.executions.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);
    this.projects.locations.integrations.executions.download = (params) => this._makeRequest('v1/{+name}:download', 'GET', params);
    this.projects.locations.integrations.executions.replay = (params) => this._makeRequest('v1/{+name}:replay', 'POST', params);

    this.projects.locations.integrations.executions.suspensions = {};
    this.projects.locations.integrations.executions.suspensions.resolve = (params) => this._makeRequest('v1/{+name}:resolve', 'POST', params);
    this.projects.locations.integrations.executions.suspensions.list = (params) => this._makeRequest('v1/{+parent}/suspensions', 'GET', params);
    this.projects.locations.integrations.executions.suspensions.lift = (params) => this._makeRequest('v1/{+name}:lift', 'POST', params);

    this.projects.locations.sfdcInstances = {};
    this.projects.locations.sfdcInstances.create = (params) => this._makeRequest('v1/{+parent}/sfdcInstances', 'POST', params);
    this.projects.locations.sfdcInstances.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.sfdcInstances.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.sfdcInstances.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.sfdcInstances.list = (params) => this._makeRequest('v1/{+parent}/sfdcInstances', 'GET', params);

    this.projects.locations.sfdcInstances.sfdcChannels = {};
    this.projects.locations.sfdcInstances.sfdcChannels.create = (params) => this._makeRequest('v1/{+parent}/sfdcChannels', 'POST', params);
    this.projects.locations.sfdcInstances.sfdcChannels.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.sfdcInstances.sfdcChannels.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.sfdcInstances.sfdcChannels.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.sfdcInstances.sfdcChannels.list = (params) => this._makeRequest('v1/{+parent}/sfdcChannels', 'GET', params);

    this.projects.locations.templates = {};
    this.projects.locations.templates.list = (params) => this._makeRequest('v1/{+parent}/templates', 'GET', params);
    this.projects.locations.templates.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.templates.create = (params) => this._makeRequest('v1/{+parent}/templates', 'POST', params);
    this.projects.locations.templates.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.templates.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.templates.search = (params) => this._makeRequest('v1/{+parent}/templates:search', 'GET', params);
    this.projects.locations.templates.use = (params) => this._makeRequest('v1/{+name}:use', 'POST', params);
    this.projects.locations.templates.import = (params) => this._makeRequest('v1/{+name}:import', 'POST', params);
    this.projects.locations.templates.share = (params) => this._makeRequest('v1/{+name}:share', 'POST', params);
    this.projects.locations.templates.unshare = (params) => this._makeRequest('v1/{+name}:unshare', 'POST', params);
    this.projects.locations.templates.upload = (params) => this._makeRequest('v1/{+parent}/templates:upload', 'POST', params);
    this.projects.locations.templates.download = (params) => this._makeRequest('v1/{+name}:download', 'GET', params);

    this.connectorPlatformRegions = {};
    this.connectorPlatformRegions.enumerate = (params) => this._makeRequest('v1/connectorPlatformRegions:enumerate', 'GET', params);

    this.callback = {};
    this.callback.generateToken = (params) => this._makeRequest('v1/callback:generateToken', 'GET', params);
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
