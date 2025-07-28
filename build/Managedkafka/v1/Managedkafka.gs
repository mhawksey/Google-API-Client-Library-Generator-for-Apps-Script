
/**
 * Google Apps Script client library for the Managed Service for Apache Kafka API
 * Documentation URL: https://cloud.google.com/managed-service-for-apache-kafka/docs
 * @class
 */
class Managedkafka {
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
    this._rootUrl = 'https://managedkafka.googleapis.com/';
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

    this.projects.locations.clusters = {};
    this.projects.locations.clusters.list = (params) => this._makeRequest('v1/{+parent}/clusters', 'GET', params);
    this.projects.locations.clusters.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.clusters.create = (params) => this._makeRequest('v1/{+parent}/clusters', 'POST', params);
    this.projects.locations.clusters.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.clusters.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.clusters.topics = {};
    this.projects.locations.clusters.topics.list = (params) => this._makeRequest('v1/{+parent}/topics', 'GET', params);
    this.projects.locations.clusters.topics.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.clusters.topics.create = (params) => this._makeRequest('v1/{+parent}/topics', 'POST', params);
    this.projects.locations.clusters.topics.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.clusters.topics.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.clusters.consumerGroups = {};
    this.projects.locations.clusters.consumerGroups.list = (params) => this._makeRequest('v1/{+parent}/consumerGroups', 'GET', params);
    this.projects.locations.clusters.consumerGroups.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.clusters.consumerGroups.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.clusters.consumerGroups.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.clusters.acls = {};
    this.projects.locations.clusters.acls.list = (params) => this._makeRequest('v1/{+parent}/acls', 'GET', params);
    this.projects.locations.clusters.acls.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.clusters.acls.create = (params) => this._makeRequest('v1/{+parent}/acls', 'POST', params);
    this.projects.locations.clusters.acls.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.clusters.acls.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.clusters.acls.addAclEntry = (params) => this._makeRequest('v1/{+acl}:addAclEntry', 'POST', params);
    this.projects.locations.clusters.acls.removeAclEntry = (params) => this._makeRequest('v1/{+acl}:removeAclEntry', 'POST', params);

    this.projects.locations.connectClusters = {};
    this.projects.locations.connectClusters.list = (params) => this._makeRequest('v1/{+parent}/connectClusters', 'GET', params);
    this.projects.locations.connectClusters.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.connectClusters.create = (params) => this._makeRequest('v1/{+parent}/connectClusters', 'POST', params);
    this.projects.locations.connectClusters.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.connectClusters.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.connectClusters.connectors = {};
    this.projects.locations.connectClusters.connectors.list = (params) => this._makeRequest('v1/{+parent}/connectors', 'GET', params);
    this.projects.locations.connectClusters.connectors.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.connectClusters.connectors.create = (params) => this._makeRequest('v1/{+parent}/connectors', 'POST', params);
    this.projects.locations.connectClusters.connectors.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.connectClusters.connectors.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.connectClusters.connectors.pause = (params) => this._makeRequest('v1/{+name}:pause', 'POST', params);
    this.projects.locations.connectClusters.connectors.resume = (params) => this._makeRequest('v1/{+name}:resume', 'POST', params);
    this.projects.locations.connectClusters.connectors.restart = (params) => this._makeRequest('v1/{+name}:restart', 'POST', params);
    this.projects.locations.connectClusters.connectors.stop = (params) => this._makeRequest('v1/{+name}:stop', 'POST', params);

    this.projects.locations.schemaRegistries = {};
    this.projects.locations.schemaRegistries.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.schemaRegistries.list = (params) => this._makeRequest('v1/{+parent}/schemaRegistries', 'GET', params);
    this.projects.locations.schemaRegistries.create = (params) => this._makeRequest('v1/{+parent}/schemaRegistries', 'POST', params);
    this.projects.locations.schemaRegistries.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.schemaRegistries.contexts = {};
    this.projects.locations.schemaRegistries.contexts.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.schemaRegistries.contexts.list = (params) => this._makeRequest('v1/{+parent}/contexts', 'GET', params);

    this.projects.locations.schemaRegistries.contexts.schemas = {};
    this.projects.locations.schemaRegistries.contexts.schemas.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.schemaRegistries.contexts.schemas.getSchema = (params) => this._makeRequest('v1/{+name}/schema', 'GET', params);

    this.projects.locations.schemaRegistries.contexts.schemas.versions = {};
    this.projects.locations.schemaRegistries.contexts.schemas.versions.list = (params) => this._makeRequest('v1/{+parent}/versions', 'GET', params);

    this.projects.locations.schemaRegistries.contexts.schemas.types = {};
    this.projects.locations.schemaRegistries.contexts.schemas.types.list = (params) => this._makeRequest('v1/{+parent}/schemas/types', 'GET', params);

    this.projects.locations.schemaRegistries.contexts.schemas.subjects = {};
    this.projects.locations.schemaRegistries.contexts.schemas.subjects.list = (params) => this._makeRequest('v1/{+parent}/subjects', 'GET', params);

    this.projects.locations.schemaRegistries.contexts.subjects = {};
    this.projects.locations.schemaRegistries.contexts.subjects.list = (params) => this._makeRequest('v1/{+parent}/subjects', 'GET', params);
    this.projects.locations.schemaRegistries.contexts.subjects.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.schemaRegistries.contexts.subjects.lookupVersion = (params) => this._makeRequest('v1/{+parent}', 'POST', params);

    this.projects.locations.schemaRegistries.contexts.subjects.versions = {};
    this.projects.locations.schemaRegistries.contexts.subjects.versions.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.schemaRegistries.contexts.subjects.versions.getSchema = (params) => this._makeRequest('v1/{+name}/schema', 'GET', params);
    this.projects.locations.schemaRegistries.contexts.subjects.versions.list = (params) => this._makeRequest('v1/{+parent}/versions', 'GET', params);
    this.projects.locations.schemaRegistries.contexts.subjects.versions.create = (params) => this._makeRequest('v1/{+parent}/versions', 'POST', params);
    this.projects.locations.schemaRegistries.contexts.subjects.versions.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.schemaRegistries.contexts.subjects.versions.referencedby = {};
    this.projects.locations.schemaRegistries.contexts.subjects.versions.referencedby.list = (params) => this._makeRequest('v1/{+parent}/referencedby', 'GET', params);

    this.projects.locations.schemaRegistries.contexts.compatibility = {};
    this.projects.locations.schemaRegistries.contexts.compatibility.checkCompatibility = (params) => this._makeRequest('v1/{+name}', 'POST', params);

    this.projects.locations.schemaRegistries.contexts.config = {};
    this.projects.locations.schemaRegistries.contexts.config.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.schemaRegistries.contexts.config.update = (params) => this._makeRequest('v1/{+name}', 'PUT', params);
    this.projects.locations.schemaRegistries.contexts.config.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.schemaRegistries.contexts.mode = {};
    this.projects.locations.schemaRegistries.contexts.mode.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.schemaRegistries.contexts.mode.update = (params) => this._makeRequest('v1/{+name}', 'PUT', params);
    this.projects.locations.schemaRegistries.contexts.mode.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.schemaRegistries.schemas = {};
    this.projects.locations.schemaRegistries.schemas.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.schemaRegistries.schemas.getSchema = (params) => this._makeRequest('v1/{+name}/schema', 'GET', params);

    this.projects.locations.schemaRegistries.schemas.versions = {};
    this.projects.locations.schemaRegistries.schemas.versions.list = (params) => this._makeRequest('v1/{+parent}/versions', 'GET', params);

    this.projects.locations.schemaRegistries.schemas.types = {};
    this.projects.locations.schemaRegistries.schemas.types.list = (params) => this._makeRequest('v1/{+parent}/schemas/types', 'GET', params);

    this.projects.locations.schemaRegistries.schemas.subjects = {};
    this.projects.locations.schemaRegistries.schemas.subjects.list = (params) => this._makeRequest('v1/{+parent}/subjects', 'GET', params);

    this.projects.locations.schemaRegistries.subjects = {};
    this.projects.locations.schemaRegistries.subjects.list = (params) => this._makeRequest('v1/{+parent}/subjects', 'GET', params);
    this.projects.locations.schemaRegistries.subjects.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.schemaRegistries.subjects.lookupVersion = (params) => this._makeRequest('v1/{+parent}', 'POST', params);

    this.projects.locations.schemaRegistries.subjects.versions = {};
    this.projects.locations.schemaRegistries.subjects.versions.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.schemaRegistries.subjects.versions.getSchema = (params) => this._makeRequest('v1/{+name}/schema', 'GET', params);
    this.projects.locations.schemaRegistries.subjects.versions.list = (params) => this._makeRequest('v1/{+parent}/versions', 'GET', params);
    this.projects.locations.schemaRegistries.subjects.versions.create = (params) => this._makeRequest('v1/{+parent}/versions', 'POST', params);
    this.projects.locations.schemaRegistries.subjects.versions.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.schemaRegistries.subjects.versions.referencedby = {};
    this.projects.locations.schemaRegistries.subjects.versions.referencedby.list = (params) => this._makeRequest('v1/{+parent}/referencedby', 'GET', params);

    this.projects.locations.schemaRegistries.compatibility = {};
    this.projects.locations.schemaRegistries.compatibility.checkCompatibility = (params) => this._makeRequest('v1/{+name}', 'POST', params);

    this.projects.locations.schemaRegistries.config = {};
    this.projects.locations.schemaRegistries.config.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.schemaRegistries.config.update = (params) => this._makeRequest('v1/{+name}', 'PUT', params);
    this.projects.locations.schemaRegistries.config.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.schemaRegistries.mode = {};
    this.projects.locations.schemaRegistries.mode.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.schemaRegistries.mode.update = (params) => this._makeRequest('v1/{+name}', 'PUT', params);
    this.projects.locations.schemaRegistries.mode.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
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
