
/**
 * Google Apps Script client library for the Tag Manager API
 * Documentation URL: https://developers.google.com/tag-manager
 * @class
 */
class Tagmanager {
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
    this._rootUrl = 'https://tagmanager.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.accounts = {};
    this.accounts.list = (params) => this._makeRequest('tagmanager/v2/accounts', 'GET', params);
    this.accounts.get = (params) => this._makeRequest('tagmanager/v2/{+path}', 'GET', params);
    this.accounts.update = (params) => this._makeRequest('tagmanager/v2/{+path}', 'PUT', params);

    this.accounts.user_permissions = {};
    this.accounts.user_permissions.create = (params) => this._makeRequest('tagmanager/v2/{+parent}/user_permissions', 'POST', params);
    this.accounts.user_permissions.list = (params) => this._makeRequest('tagmanager/v2/{+parent}/user_permissions', 'GET', params);
    this.accounts.user_permissions.get = (params) => this._makeRequest('tagmanager/v2/{+path}', 'GET', params);
    this.accounts.user_permissions.update = (params) => this._makeRequest('tagmanager/v2/{+path}', 'PUT', params);
    this.accounts.user_permissions.delete = (params) => this._makeRequest('tagmanager/v2/{+path}', 'DELETE', params);

    this.accounts.containers = {};
    this.accounts.containers.create = (params) => this._makeRequest('tagmanager/v2/{+parent}/containers', 'POST', params);
    this.accounts.containers.list = (params) => this._makeRequest('tagmanager/v2/{+parent}/containers', 'GET', params);
    this.accounts.containers.get = (params) => this._makeRequest('tagmanager/v2/{+path}', 'GET', params);
    this.accounts.containers.snippet = (params) => this._makeRequest('tagmanager/v2/{+path}:snippet', 'GET', params);
    this.accounts.containers.lookup = (params) => this._makeRequest('tagmanager/v2/accounts/containers:lookup', 'GET', params);
    this.accounts.containers.update = (params) => this._makeRequest('tagmanager/v2/{+path}', 'PUT', params);
    this.accounts.containers.combine = (params) => this._makeRequest('tagmanager/v2/{+path}:combine', 'POST', params);
    this.accounts.containers.move_tag_id = (params) => this._makeRequest('tagmanager/v2/{+path}:move_tag_id', 'POST', params);
    this.accounts.containers.delete = (params) => this._makeRequest('tagmanager/v2/{+path}', 'DELETE', params);

    this.accounts.containers.destinations = {};
    this.accounts.containers.destinations.get = (params) => this._makeRequest('tagmanager/v2/{+path}', 'GET', params);
    this.accounts.containers.destinations.list = (params) => this._makeRequest('tagmanager/v2/{+parent}/destinations', 'GET', params);
    this.accounts.containers.destinations.link = (params) => this._makeRequest('tagmanager/v2/{+parent}/destinations:link', 'POST', params);

    this.accounts.containers.workspaces = {};
    this.accounts.containers.workspaces.create = (params) => this._makeRequest('tagmanager/v2/{+parent}/workspaces', 'POST', params);
    this.accounts.containers.workspaces.delete = (params) => this._makeRequest('tagmanager/v2/{+path}', 'DELETE', params);
    this.accounts.containers.workspaces.get = (params) => this._makeRequest('tagmanager/v2/{+path}', 'GET', params);
    this.accounts.containers.workspaces.update = (params) => this._makeRequest('tagmanager/v2/{+path}', 'PUT', params);
    this.accounts.containers.workspaces.list = (params) => this._makeRequest('tagmanager/v2/{+parent}/workspaces', 'GET', params);
    this.accounts.containers.workspaces.sync = (params) => this._makeRequest('tagmanager/v2/{+path}:sync', 'POST', params);
    this.accounts.containers.workspaces.getStatus = (params) => this._makeRequest('tagmanager/v2/{+path}/status', 'GET', params);
    this.accounts.containers.workspaces.resolve_conflict = (params) => this._makeRequest('tagmanager/v2/{+path}:resolve_conflict', 'POST', params);
    this.accounts.containers.workspaces.quick_preview = (params) => this._makeRequest('tagmanager/v2/{+path}:quick_preview', 'POST', params);
    this.accounts.containers.workspaces.create_version = (params) => this._makeRequest('tagmanager/v2/{+path}:create_version', 'POST', params);

    this.accounts.containers.workspaces.variables = {};
    this.accounts.containers.workspaces.variables.create = (params) => this._makeRequest('tagmanager/v2/{+parent}/variables', 'POST', params);
    this.accounts.containers.workspaces.variables.list = (params) => this._makeRequest('tagmanager/v2/{+parent}/variables', 'GET', params);
    this.accounts.containers.workspaces.variables.get = (params) => this._makeRequest('tagmanager/v2/{+path}', 'GET', params);
    this.accounts.containers.workspaces.variables.update = (params) => this._makeRequest('tagmanager/v2/{+path}', 'PUT', params);
    this.accounts.containers.workspaces.variables.delete = (params) => this._makeRequest('tagmanager/v2/{+path}', 'DELETE', params);
    this.accounts.containers.workspaces.variables.revert = (params) => this._makeRequest('tagmanager/v2/{+path}:revert', 'POST', params);

    this.accounts.containers.workspaces.built_in_variables = {};
    this.accounts.containers.workspaces.built_in_variables.create = (params) => this._makeRequest('tagmanager/v2/{+parent}/built_in_variables', 'POST', params);
    this.accounts.containers.workspaces.built_in_variables.delete = (params) => this._makeRequest('tagmanager/v2/{+path}', 'DELETE', params);
    this.accounts.containers.workspaces.built_in_variables.list = (params) => this._makeRequest('tagmanager/v2/{+parent}/built_in_variables', 'GET', params);
    this.accounts.containers.workspaces.built_in_variables.revert = (params) => this._makeRequest('tagmanager/v2/{+path}/built_in_variables:revert', 'POST', params);

    this.accounts.containers.workspaces.triggers = {};
    this.accounts.containers.workspaces.triggers.create = (params) => this._makeRequest('tagmanager/v2/{+parent}/triggers', 'POST', params);
    this.accounts.containers.workspaces.triggers.list = (params) => this._makeRequest('tagmanager/v2/{+parent}/triggers', 'GET', params);
    this.accounts.containers.workspaces.triggers.get = (params) => this._makeRequest('tagmanager/v2/{+path}', 'GET', params);
    this.accounts.containers.workspaces.triggers.update = (params) => this._makeRequest('tagmanager/v2/{+path}', 'PUT', params);
    this.accounts.containers.workspaces.triggers.delete = (params) => this._makeRequest('tagmanager/v2/{+path}', 'DELETE', params);
    this.accounts.containers.workspaces.triggers.revert = (params) => this._makeRequest('tagmanager/v2/{+path}:revert', 'POST', params);

    this.accounts.containers.workspaces.tags = {};
    this.accounts.containers.workspaces.tags.create = (params) => this._makeRequest('tagmanager/v2/{+parent}/tags', 'POST', params);
    this.accounts.containers.workspaces.tags.list = (params) => this._makeRequest('tagmanager/v2/{+parent}/tags', 'GET', params);
    this.accounts.containers.workspaces.tags.get = (params) => this._makeRequest('tagmanager/v2/{+path}', 'GET', params);
    this.accounts.containers.workspaces.tags.update = (params) => this._makeRequest('tagmanager/v2/{+path}', 'PUT', params);
    this.accounts.containers.workspaces.tags.delete = (params) => this._makeRequest('tagmanager/v2/{+path}', 'DELETE', params);
    this.accounts.containers.workspaces.tags.revert = (params) => this._makeRequest('tagmanager/v2/{+path}:revert', 'POST', params);

    this.accounts.containers.workspaces.gtag_config = {};
    this.accounts.containers.workspaces.gtag_config.create = (params) => this._makeRequest('tagmanager/v2/{+parent}/gtag_config', 'POST', params);
    this.accounts.containers.workspaces.gtag_config.list = (params) => this._makeRequest('tagmanager/v2/{+parent}/gtag_config', 'GET', params);
    this.accounts.containers.workspaces.gtag_config.get = (params) => this._makeRequest('tagmanager/v2/{+path}', 'GET', params);
    this.accounts.containers.workspaces.gtag_config.update = (params) => this._makeRequest('tagmanager/v2/{+path}', 'PUT', params);
    this.accounts.containers.workspaces.gtag_config.delete = (params) => this._makeRequest('tagmanager/v2/{+path}', 'DELETE', params);

    this.accounts.containers.workspaces.templates = {};
    this.accounts.containers.workspaces.templates.create = (params) => this._makeRequest('tagmanager/v2/{+parent}/templates', 'POST', params);
    this.accounts.containers.workspaces.templates.import_from_gallery = (params) => this._makeRequest('tagmanager/v2/{+parent}/templates:import_from_gallery', 'POST', params);
    this.accounts.containers.workspaces.templates.list = (params) => this._makeRequest('tagmanager/v2/{+parent}/templates', 'GET', params);
    this.accounts.containers.workspaces.templates.get = (params) => this._makeRequest('tagmanager/v2/{+path}', 'GET', params);
    this.accounts.containers.workspaces.templates.update = (params) => this._makeRequest('tagmanager/v2/{+path}', 'PUT', params);
    this.accounts.containers.workspaces.templates.delete = (params) => this._makeRequest('tagmanager/v2/{+path}', 'DELETE', params);
    this.accounts.containers.workspaces.templates.revert = (params) => this._makeRequest('tagmanager/v2/{+path}:revert', 'POST', params);

    this.accounts.containers.workspaces.folders = {};
    this.accounts.containers.workspaces.folders.create = (params) => this._makeRequest('tagmanager/v2/{+parent}/folders', 'POST', params);
    this.accounts.containers.workspaces.folders.list = (params) => this._makeRequest('tagmanager/v2/{+parent}/folders', 'GET', params);
    this.accounts.containers.workspaces.folders.get = (params) => this._makeRequest('tagmanager/v2/{+path}', 'GET', params);
    this.accounts.containers.workspaces.folders.entities = (params) => this._makeRequest('tagmanager/v2/{+path}:entities', 'POST', params);
    this.accounts.containers.workspaces.folders.update = (params) => this._makeRequest('tagmanager/v2/{+path}', 'PUT', params);
    this.accounts.containers.workspaces.folders.delete = (params) => this._makeRequest('tagmanager/v2/{+path}', 'DELETE', params);
    this.accounts.containers.workspaces.folders.move_entities_to_folder = (params) => this._makeRequest('tagmanager/v2/{+path}:move_entities_to_folder', 'POST', params);
    this.accounts.containers.workspaces.folders.revert = (params) => this._makeRequest('tagmanager/v2/{+path}:revert', 'POST', params);

    this.accounts.containers.workspaces.zones = {};
    this.accounts.containers.workspaces.zones.create = (params) => this._makeRequest('tagmanager/v2/{+parent}/zones', 'POST', params);
    this.accounts.containers.workspaces.zones.list = (params) => this._makeRequest('tagmanager/v2/{+parent}/zones', 'GET', params);
    this.accounts.containers.workspaces.zones.get = (params) => this._makeRequest('tagmanager/v2/{+path}', 'GET', params);
    this.accounts.containers.workspaces.zones.update = (params) => this._makeRequest('tagmanager/v2/{+path}', 'PUT', params);
    this.accounts.containers.workspaces.zones.delete = (params) => this._makeRequest('tagmanager/v2/{+path}', 'DELETE', params);
    this.accounts.containers.workspaces.zones.revert = (params) => this._makeRequest('tagmanager/v2/{+path}:revert', 'POST', params);

    this.accounts.containers.workspaces.clients = {};
    this.accounts.containers.workspaces.clients.create = (params) => this._makeRequest('tagmanager/v2/{+parent}/clients', 'POST', params);
    this.accounts.containers.workspaces.clients.list = (params) => this._makeRequest('tagmanager/v2/{+parent}/clients', 'GET', params);
    this.accounts.containers.workspaces.clients.get = (params) => this._makeRequest('tagmanager/v2/{+path}', 'GET', params);
    this.accounts.containers.workspaces.clients.update = (params) => this._makeRequest('tagmanager/v2/{+path}', 'PUT', params);
    this.accounts.containers.workspaces.clients.delete = (params) => this._makeRequest('tagmanager/v2/{+path}', 'DELETE', params);
    this.accounts.containers.workspaces.clients.revert = (params) => this._makeRequest('tagmanager/v2/{+path}:revert', 'POST', params);

    this.accounts.containers.workspaces.transformations = {};
    this.accounts.containers.workspaces.transformations.create = (params) => this._makeRequest('tagmanager/v2/{+parent}/transformations', 'POST', params);
    this.accounts.containers.workspaces.transformations.list = (params) => this._makeRequest('tagmanager/v2/{+parent}/transformations', 'GET', params);
    this.accounts.containers.workspaces.transformations.get = (params) => this._makeRequest('tagmanager/v2/{+path}', 'GET', params);
    this.accounts.containers.workspaces.transformations.update = (params) => this._makeRequest('tagmanager/v2/{+path}', 'PUT', params);
    this.accounts.containers.workspaces.transformations.delete = (params) => this._makeRequest('tagmanager/v2/{+path}', 'DELETE', params);
    this.accounts.containers.workspaces.transformations.revert = (params) => this._makeRequest('tagmanager/v2/{+path}:revert', 'POST', params);

    this.accounts.containers.versions = {};
    this.accounts.containers.versions.get = (params) => this._makeRequest('tagmanager/v2/{+path}', 'GET', params);
    this.accounts.containers.versions.update = (params) => this._makeRequest('tagmanager/v2/{+path}', 'PUT', params);
    this.accounts.containers.versions.delete = (params) => this._makeRequest('tagmanager/v2/{+path}', 'DELETE', params);
    this.accounts.containers.versions.undelete = (params) => this._makeRequest('tagmanager/v2/{+path}:undelete', 'POST', params);
    this.accounts.containers.versions.publish = (params) => this._makeRequest('tagmanager/v2/{+path}:publish', 'POST', params);
    this.accounts.containers.versions.set_latest = (params) => this._makeRequest('tagmanager/v2/{+path}:set_latest', 'POST', params);
    this.accounts.containers.versions.live = (params) => this._makeRequest('tagmanager/v2/{+parent}/versions:live', 'GET', params);

    this.accounts.containers.version_headers = {};
    this.accounts.containers.version_headers.list = (params) => this._makeRequest('tagmanager/v2/{+parent}/version_headers', 'GET', params);
    this.accounts.containers.version_headers.latest = (params) => this._makeRequest('tagmanager/v2/{+parent}/version_headers:latest', 'GET', params);

    this.accounts.containers.environments = {};
    this.accounts.containers.environments.create = (params) => this._makeRequest('tagmanager/v2/{+parent}/environments', 'POST', params);
    this.accounts.containers.environments.list = (params) => this._makeRequest('tagmanager/v2/{+parent}/environments', 'GET', params);
    this.accounts.containers.environments.get = (params) => this._makeRequest('tagmanager/v2/{+path}', 'GET', params);
    this.accounts.containers.environments.update = (params) => this._makeRequest('tagmanager/v2/{+path}', 'PUT', params);
    this.accounts.containers.environments.delete = (params) => this._makeRequest('tagmanager/v2/{+path}', 'DELETE', params);
    this.accounts.containers.environments.reauthorize = (params) => this._makeRequest('tagmanager/v2/{+path}:reauthorize', 'POST', params);
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
