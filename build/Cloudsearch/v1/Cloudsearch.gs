
/**
 * Google Apps Script client library for the Cloud Search API
 * Documentation URL: https://developers.google.com/cloud-search/docs/guides/
 * @class
 */
class Cloudsearch {
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
    this._rootUrl = 'https://cloudsearch.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.operations = {};
    this.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.operations.lro = {};
    this.operations.lro.list = (params) => this._makeRequest('v1/{+name}/lro', 'GET', params);

    this.debug = {};

    this.debug.datasources = {};

    this.debug.datasources.items = {};
    this.debug.datasources.items.checkAccess = (params) => this._makeRequest('v1/debug/{+name}:checkAccess', 'POST', params);
    this.debug.datasources.items.searchByViewUrl = (params) => this._makeRequest('v1/debug/{+name}/items:searchByViewUrl', 'POST', params);

    this.debug.datasources.items.unmappedids = {};
    this.debug.datasources.items.unmappedids.list = (params) => this._makeRequest('v1/debug/{+parent}/unmappedids', 'GET', params);

    this.debug.identitysources = {};

    this.debug.identitysources.unmappedids = {};
    this.debug.identitysources.unmappedids.list = (params) => this._makeRequest('v1/debug/{+parent}/unmappedids', 'GET', params);

    this.debug.identitysources.items = {};
    this.debug.identitysources.items.listForunmappedidentity = (params) => this._makeRequest('v1/debug/{+parent}/items:forunmappedidentity', 'GET', params);

    this.settings = {};
    this.settings.getCustomer = (params) => this._makeRequest('v1/settings/customer', 'GET', params);
    this.settings.updateCustomer = (params) => this._makeRequest('v1/settings/customer', 'PATCH', params);

    this.settings.searchapplications = {};
    this.settings.searchapplications.list = (params) => this._makeRequest('v1/settings/searchapplications', 'GET', params);
    this.settings.searchapplications.get = (params) => this._makeRequest('v1/settings/{+name}', 'GET', params);
    this.settings.searchapplications.create = (params) => this._makeRequest('v1/settings/searchapplications', 'POST', params);
    this.settings.searchapplications.update = (params) => this._makeRequest('v1/settings/{+name}', 'PUT', params);
    this.settings.searchapplications.patch = (params) => this._makeRequest('v1/settings/{+name}', 'PATCH', params);
    this.settings.searchapplications.delete = (params) => this._makeRequest('v1/settings/{+name}', 'DELETE', params);
    this.settings.searchapplications.reset = (params) => this._makeRequest('v1/settings/{+name}:reset', 'POST', params);

    this.settings.datasources = {};
    this.settings.datasources.create = (params) => this._makeRequest('v1/settings/datasources', 'POST', params);
    this.settings.datasources.delete = (params) => this._makeRequest('v1/settings/{+name}', 'DELETE', params);
    this.settings.datasources.get = (params) => this._makeRequest('v1/settings/{+name}', 'GET', params);
    this.settings.datasources.update = (params) => this._makeRequest('v1/settings/{+name}', 'PUT', params);
    this.settings.datasources.patch = (params) => this._makeRequest('v1/settings/{+name}', 'PATCH', params);
    this.settings.datasources.list = (params) => this._makeRequest('v1/settings/datasources', 'GET', params);

    this.v1 = {};
    this.v1.initializeCustomer = (params) => this._makeRequest('v1:initializeCustomer', 'POST', params);

    this.indexing = {};

    this.indexing.datasources = {};
    this.indexing.datasources.updateSchema = (params) => this._makeRequest('v1/indexing/{+name}/schema', 'PUT', params);
    this.indexing.datasources.getSchema = (params) => this._makeRequest('v1/indexing/{+name}/schema', 'GET', params);
    this.indexing.datasources.deleteSchema = (params) => this._makeRequest('v1/indexing/{+name}/schema', 'DELETE', params);

    this.indexing.datasources.items = {};
    this.indexing.datasources.items.delete = (params) => this._makeRequest('v1/indexing/{+name}', 'DELETE', params);
    this.indexing.datasources.items.get = (params) => this._makeRequest('v1/indexing/{+name}', 'GET', params);
    this.indexing.datasources.items.list = (params) => this._makeRequest('v1/indexing/{+name}/items', 'GET', params);
    this.indexing.datasources.items.index = (params) => this._makeRequest('v1/indexing/{+name}:index', 'POST', params);
    this.indexing.datasources.items.upload = (params) => this._makeRequest('v1/indexing/{+name}:upload', 'POST', params);
    this.indexing.datasources.items.poll = (params) => this._makeRequest('v1/indexing/{+name}/items:poll', 'POST', params);
    this.indexing.datasources.items.push = (params) => this._makeRequest('v1/indexing/{+name}:push', 'POST', params);
    this.indexing.datasources.items.unreserve = (params) => this._makeRequest('v1/indexing/{+name}/items:unreserve', 'POST', params);
    this.indexing.datasources.items.deleteQueueItems = (params) => this._makeRequest('v1/indexing/{+name}/items:deleteQueueItems', 'POST', params);

    this.query = {};
    this.query.suggest = (params) => this._makeRequest('v1/query/suggest', 'POST', params);
    this.query.search = (params) => this._makeRequest('v1/query/search', 'POST', params);
    this.query.removeActivity = (params) => this._makeRequest('v1/query:removeActivity', 'POST', params);
    this.query.debugSearch = (params) => this._makeRequest('v1/query:debugSearch', 'POST', params);

    this.query.sources = {};
    this.query.sources.list = (params) => this._makeRequest('v1/query/sources', 'GET', params);

    this.stats = {};
    this.stats.getIndex = (params) => this._makeRequest('v1/stats/index', 'GET', params);
    this.stats.getQuery = (params) => this._makeRequest('v1/stats/query', 'GET', params);
    this.stats.getUser = (params) => this._makeRequest('v1/stats/user', 'GET', params);
    this.stats.getSession = (params) => this._makeRequest('v1/stats/session', 'GET', params);
    this.stats.getSearchapplication = (params) => this._makeRequest('v1/stats/searchapplication', 'GET', params);

    this.stats.index = {};

    this.stats.index.datasources = {};
    this.stats.index.datasources.get = (params) => this._makeRequest('v1/stats/index/{+name}', 'GET', params);

    this.stats.query = {};

    this.stats.query.searchapplications = {};
    this.stats.query.searchapplications.get = (params) => this._makeRequest('v1/stats/query/{+name}', 'GET', params);

    this.stats.user = {};

    this.stats.user.searchapplications = {};
    this.stats.user.searchapplications.get = (params) => this._makeRequest('v1/stats/user/{+name}', 'GET', params);

    this.stats.session = {};

    this.stats.session.searchapplications = {};
    this.stats.session.searchapplications.get = (params) => this._makeRequest('v1/stats/session/{+name}', 'GET', params);

    this.media = {};
    this.media.upload = (params) => this._makeRequest('v1/media/{+resourceName}', 'POST', params);
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
