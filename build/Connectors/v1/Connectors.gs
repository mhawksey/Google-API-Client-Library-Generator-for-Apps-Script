
/**
 * Google Apps Script client library for the Connectors API
 * Documentation URL: https://cloud.google.com/apigee/docs/api-platform/connectors/about-connectors
 * @class
 */
class Connectors {
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
    this._rootUrl = 'https://connectors.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.locations = {};
    this.projects.locations.getRuntimeConfig = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.getRegionalSettings = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.updateRegionalSettings = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.list = (params) => this._makeRequest('v1/{+name}/locations', 'GET', params);
    this.projects.locations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.connections = {};
    this.projects.locations.connections.listenEvent = (params) => this._makeRequest('v1/{+resourcePath}:listenEvent', 'POST', params);
    this.projects.locations.connections.list = (params) => this._makeRequest('v1/{+parent}/connections', 'GET', params);
    this.projects.locations.connections.search = (params) => this._makeRequest('v1/{+name}:search', 'GET', params);
    this.projects.locations.connections.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.connections.create = (params) => this._makeRequest('v1/{+parent}/connections', 'POST', params);
    this.projects.locations.connections.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.connections.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.connections.getConnectionSchemaMetadata = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.connections.repairEventing = (params) => this._makeRequest('v1/{+name}:repairEventing', 'POST', params);
    this.projects.locations.connections.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.connections.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.connections.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.connections.connectionSchemaMetadata = {};
    this.projects.locations.connections.connectionSchemaMetadata.refresh = (params) => this._makeRequest('v1/{+name}:refresh', 'POST', params);
    this.projects.locations.connections.connectionSchemaMetadata.listEntityTypes = (params) => this._makeRequest('v1/{+name}:listEntityTypes', 'GET', params);
    this.projects.locations.connections.connectionSchemaMetadata.listActions = (params) => this._makeRequest('v1/{+name}:listActions', 'GET', params);
    this.projects.locations.connections.connectionSchemaMetadata.getEntityType = (params) => this._makeRequest('v1/{+name}:getEntityType', 'GET', params);
    this.projects.locations.connections.connectionSchemaMetadata.getAction = (params) => this._makeRequest('v1/{+name}:getAction', 'GET', params);

    this.projects.locations.connections.runtimeEntitySchemas = {};
    this.projects.locations.connections.runtimeEntitySchemas.list = (params) => this._makeRequest('v1/{+parent}/runtimeEntitySchemas', 'GET', params);

    this.projects.locations.connections.runtimeActionSchemas = {};
    this.projects.locations.connections.runtimeActionSchemas.list = (params) => this._makeRequest('v1/{+parent}/runtimeActionSchemas', 'GET', params);

    this.projects.locations.connections.eventSubscriptions = {};
    this.projects.locations.connections.eventSubscriptions.list = (params) => this._makeRequest('v1/{+parent}/eventSubscriptions', 'GET', params);
    this.projects.locations.connections.eventSubscriptions.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.connections.eventSubscriptions.create = (params) => this._makeRequest('v1/{+parent}/eventSubscriptions', 'POST', params);
    this.projects.locations.connections.eventSubscriptions.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.connections.eventSubscriptions.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.connections.eventSubscriptions.retry = (params) => this._makeRequest('v1/{+name}:retry', 'POST', params);

    this.projects.locations.connections.endUserAuthentications = {};
    this.projects.locations.connections.endUserAuthentications.list = (params) => this._makeRequest('v1/{+parent}/endUserAuthentications', 'GET', params);
    this.projects.locations.connections.endUserAuthentications.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.connections.endUserAuthentications.create = (params) => this._makeRequest('v1/{+parent}/endUserAuthentications', 'POST', params);
    this.projects.locations.connections.endUserAuthentications.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.connections.endUserAuthentications.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.operations = {};
    this.projects.locations.operations.list = (params) => this._makeRequest('v1/{+name}/operations', 'GET', params);
    this.projects.locations.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);

    this.projects.locations.providers = {};
    this.projects.locations.providers.list = (params) => this._makeRequest('v1/{+parent}/providers', 'GET', params);
    this.projects.locations.providers.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.providers.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.providers.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.providers.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.providers.connectors = {};
    this.projects.locations.providers.connectors.list = (params) => this._makeRequest('v1/{+parent}/connectors', 'GET', params);
    this.projects.locations.providers.connectors.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.providers.connectors.versions = {};
    this.projects.locations.providers.connectors.versions.list = (params) => this._makeRequest('v1/{+parent}/versions', 'GET', params);
    this.projects.locations.providers.connectors.versions.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.providers.connectors.versions.fetchAuthSchema = (params) => this._makeRequest('v1/{+name}:fetchAuthSchema', 'GET', params);

    this.projects.locations.providers.connectors.versions.eventtypes = {};
    this.projects.locations.providers.connectors.versions.eventtypes.list = (params) => this._makeRequest('v1/{+parent}/eventtypes', 'GET', params);
    this.projects.locations.providers.connectors.versions.eventtypes.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.global = {};
    this.projects.locations.global.getSettings = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.global.updateSettings = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.projects.locations.global.managedZones = {};
    this.projects.locations.global.managedZones.list = (params) => this._makeRequest('v1/{+parent}/managedZones', 'GET', params);
    this.projects.locations.global.managedZones.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.global.managedZones.create = (params) => this._makeRequest('v1/{+parent}/managedZones', 'POST', params);
    this.projects.locations.global.managedZones.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.global.managedZones.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.global.customConnectors = {};
    this.projects.locations.global.customConnectors.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.global.customConnectors.list = (params) => this._makeRequest('v1/{+parent}/customConnectors', 'GET', params);
    this.projects.locations.global.customConnectors.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.global.customConnectors.create = (params) => this._makeRequest('v1/{+parent}/customConnectors', 'POST', params);
    this.projects.locations.global.customConnectors.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.projects.locations.global.customConnectors.customConnectorVersions = {};
    this.projects.locations.global.customConnectors.customConnectorVersions.list = (params) => this._makeRequest('v1/{+parent}/customConnectorVersions', 'GET', params);
    this.projects.locations.global.customConnectors.customConnectorVersions.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.global.customConnectors.customConnectorVersions.create = (params) => this._makeRequest('v1/{+parent}/customConnectorVersions', 'POST', params);

    this.projects.locations.endpointAttachments = {};
    this.projects.locations.endpointAttachments.list = (params) => this._makeRequest('v1/{+parent}/endpointAttachments', 'GET', params);
    this.projects.locations.endpointAttachments.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.endpointAttachments.create = (params) => this._makeRequest('v1/{+parent}/endpointAttachments', 'POST', params);
    this.projects.locations.endpointAttachments.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.endpointAttachments.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.customConnectors = {};
    this.projects.locations.customConnectors.validateCustomConnectorSpec = (params) => this._makeRequest('v1/{+parent}/customConnectors:validateCustomConnectorSpec', 'POST', params);

    this.projects.locations.customConnectors.customConnectorVersions = {};
    this.projects.locations.customConnectors.customConnectorVersions.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.customConnectors.customConnectorVersions.deprecate = (params) => this._makeRequest('v1/{+name}:deprecate', 'POST', params);
    this.projects.locations.customConnectors.customConnectorVersions.publish = (params) => this._makeRequest('v1/{+name}:publish', 'POST', params);
    this.projects.locations.customConnectors.customConnectorVersions.withdraw = (params) => this._makeRequest('v1/{+name}:withdraw', 'POST', params);
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
