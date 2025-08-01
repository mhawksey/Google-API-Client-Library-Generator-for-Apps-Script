
/**
 * Google Apps Script client library for the Cloud Vision API
 * Documentation URL: https://cloud.google.com/vision/
 * @class
 */
class Vision {
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
    this._rootUrl = 'https://vision.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.operations = {};
    this.operations.list = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);

    this.projects = {};

    this.projects.operations = {};
    this.projects.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations = {};

    this.projects.locations.operations = {};
    this.projects.locations.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.productSets = {};
    this.projects.locations.productSets.create = (params) => this._makeRequest('v1/{+parent}/productSets', 'POST', params);
    this.projects.locations.productSets.list = (params) => this._makeRequest('v1/{+parent}/productSets', 'GET', params);
    this.projects.locations.productSets.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.productSets.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.productSets.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.productSets.addProduct = (params) => this._makeRequest('v1/{+name}:addProduct', 'POST', params);
    this.projects.locations.productSets.removeProduct = (params) => this._makeRequest('v1/{+name}:removeProduct', 'POST', params);
    this.projects.locations.productSets.import = (params) => this._makeRequest('v1/{+parent}/productSets:import', 'POST', params);

    this.projects.locations.productSets.products = {};
    this.projects.locations.productSets.products.list = (params) => this._makeRequest('v1/{+name}/products', 'GET', params);

    this.projects.locations.products = {};
    this.projects.locations.products.create = (params) => this._makeRequest('v1/{+parent}/products', 'POST', params);
    this.projects.locations.products.list = (params) => this._makeRequest('v1/{+parent}/products', 'GET', params);
    this.projects.locations.products.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.products.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.products.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.products.purge = (params) => this._makeRequest('v1/{+parent}/products:purge', 'POST', params);

    this.projects.locations.products.referenceImages = {};
    this.projects.locations.products.referenceImages.create = (params) => this._makeRequest('v1/{+parent}/referenceImages', 'POST', params);
    this.projects.locations.products.referenceImages.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.products.referenceImages.list = (params) => this._makeRequest('v1/{+parent}/referenceImages', 'GET', params);
    this.projects.locations.products.referenceImages.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.images = {};
    this.projects.locations.images.annotate = (params) => this._makeRequest('v1/{+parent}/images:annotate', 'POST', params);
    this.projects.locations.images.asyncBatchAnnotate = (params) => this._makeRequest('v1/{+parent}/images:asyncBatchAnnotate', 'POST', params);

    this.projects.locations.files = {};
    this.projects.locations.files.annotate = (params) => this._makeRequest('v1/{+parent}/files:annotate', 'POST', params);
    this.projects.locations.files.asyncBatchAnnotate = (params) => this._makeRequest('v1/{+parent}/files:asyncBatchAnnotate', 'POST', params);

    this.projects.images = {};
    this.projects.images.annotate = (params) => this._makeRequest('v1/{+parent}/images:annotate', 'POST', params);
    this.projects.images.asyncBatchAnnotate = (params) => this._makeRequest('v1/{+parent}/images:asyncBatchAnnotate', 'POST', params);

    this.projects.files = {};
    this.projects.files.annotate = (params) => this._makeRequest('v1/{+parent}/files:annotate', 'POST', params);
    this.projects.files.asyncBatchAnnotate = (params) => this._makeRequest('v1/{+parent}/files:asyncBatchAnnotate', 'POST', params);

    this.locations = {};

    this.locations.operations = {};
    this.locations.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.images = {};
    this.images.annotate = (params) => this._makeRequest('v1/images:annotate', 'POST', params);
    this.images.asyncBatchAnnotate = (params) => this._makeRequest('v1/images:asyncBatchAnnotate', 'POST', params);

    this.files = {};
    this.files.annotate = (params) => this._makeRequest('v1/files:annotate', 'POST', params);
    this.files.asyncBatchAnnotate = (params) => this._makeRequest('v1/files:asyncBatchAnnotate', 'POST', params);
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
