
/**
 * Google Apps Script client library for the Vertex AI Search for commerce API
 * Documentation URL: https://cloud.google.com/recommendations
 * @class
 */
class Retail {
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
    this._rootUrl = 'https://retail.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};
    this.projects.getRetailProject = (params) => this._makeRequest('v2alpha/{+name}', 'GET', params);
    this.projects.enrollSolution = (params) => this._makeRequest('v2alpha/{+project}:enrollSolution', 'POST', params);
    this.projects.listEnrolledSolutions = (params) => this._makeRequest('v2alpha/{+parent}:enrolledSolutions', 'GET', params);
    this.projects.getLoggingConfig = (params) => this._makeRequest('v2alpha/{+name}', 'GET', params);
    this.projects.updateLoggingConfig = (params) => this._makeRequest('v2alpha/{+name}', 'PATCH', params);
    this.projects.getAlertConfig = (params) => this._makeRequest('v2alpha/{+name}', 'GET', params);
    this.projects.updateAlertConfig = (params) => this._makeRequest('v2alpha/{+name}', 'PATCH', params);

    this.projects.locations = {};

    this.projects.locations.operations = {};
    this.projects.locations.operations.list = (params) => this._makeRequest('v2alpha/{+name}/operations', 'GET', params);
    this.projects.locations.operations.get = (params) => this._makeRequest('v2alpha/{+name}', 'GET', params);

    this.projects.locations.catalogs = {};
    this.projects.locations.catalogs.exportAnalyticsMetrics = (params) => this._makeRequest('v2alpha/{+catalog}:exportAnalyticsMetrics', 'POST', params);
    this.projects.locations.catalogs.list = (params) => this._makeRequest('v2alpha/{+parent}/catalogs', 'GET', params);
    this.projects.locations.catalogs.patch = (params) => this._makeRequest('v2alpha/{+name}', 'PATCH', params);
    this.projects.locations.catalogs.setDefaultBranch = (params) => this._makeRequest('v2alpha/{+catalog}:setDefaultBranch', 'POST', params);
    this.projects.locations.catalogs.getDefaultBranch = (params) => this._makeRequest('v2alpha/{+catalog}:getDefaultBranch', 'GET', params);
    this.projects.locations.catalogs.getCompletionConfig = (params) => this._makeRequest('v2alpha/{+name}', 'GET', params);
    this.projects.locations.catalogs.updateCompletionConfig = (params) => this._makeRequest('v2alpha/{+name}', 'PATCH', params);
    this.projects.locations.catalogs.getAttributesConfig = (params) => this._makeRequest('v2alpha/{+name}', 'GET', params);
    this.projects.locations.catalogs.updateAttributesConfig = (params) => this._makeRequest('v2alpha/{+name}', 'PATCH', params);
    this.projects.locations.catalogs.completeQuery = (params) => this._makeRequest('v2alpha/{+catalog}:completeQuery', 'GET', params);
    this.projects.locations.catalogs.updateGenerativeQuestionFeature = (params) => this._makeRequest('v2alpha/{+catalog}/generativeQuestionFeature', 'PATCH', params);
    this.projects.locations.catalogs.getGenerativeQuestionFeature = (params) => this._makeRequest('v2alpha/{+catalog}/generativeQuestionFeature', 'GET', params);
    this.projects.locations.catalogs.updateGenerativeQuestion = (params) => this._makeRequest('v2alpha/{+catalog}/generativeQuestion', 'PATCH', params);
    this.projects.locations.catalogs.getConversationalSearchCustomizationConfig = (params) => this._makeRequest('v2alpha/{+name}/conversationalSearchCustomizationConfig', 'GET', params);
    this.projects.locations.catalogs.updateConversationalSearchCustomizationConfig = (params) => this._makeRequest('v2alpha/{+catalog}/conversationalSearchCustomizationConfig', 'PATCH', params);

    this.projects.locations.catalogs.operations = {};
    this.projects.locations.catalogs.operations.list = (params) => this._makeRequest('v2alpha/{+name}/operations', 'GET', params);
    this.projects.locations.catalogs.operations.get = (params) => this._makeRequest('v2alpha/{+name}', 'GET', params);

    this.projects.locations.catalogs.branches = {};
    this.projects.locations.catalogs.branches.list = (params) => this._makeRequest('v2alpha/{+parent}/branches', 'GET', params);
    this.projects.locations.catalogs.branches.get = (params) => this._makeRequest('v2alpha/{+name}', 'GET', params);

    this.projects.locations.catalogs.branches.operations = {};
    this.projects.locations.catalogs.branches.operations.get = (params) => this._makeRequest('v2alpha/{+name}', 'GET', params);

    this.projects.locations.catalogs.branches.places = {};

    this.projects.locations.catalogs.branches.places.operations = {};
    this.projects.locations.catalogs.branches.places.operations.get = (params) => this._makeRequest('v2alpha/{+name}', 'GET', params);

    this.projects.locations.catalogs.branches.products = {};
    this.projects.locations.catalogs.branches.products.create = (params) => this._makeRequest('v2alpha/{+parent}/products', 'POST', params);
    this.projects.locations.catalogs.branches.products.get = (params) => this._makeRequest('v2alpha/{+name}', 'GET', params);
    this.projects.locations.catalogs.branches.products.list = (params) => this._makeRequest('v2alpha/{+parent}/products', 'GET', params);
    this.projects.locations.catalogs.branches.products.patch = (params) => this._makeRequest('v2alpha/{+name}', 'PATCH', params);
    this.projects.locations.catalogs.branches.products.delete = (params) => this._makeRequest('v2alpha/{+name}', 'DELETE', params);
    this.projects.locations.catalogs.branches.products.purge = (params) => this._makeRequest('v2alpha/{+parent}/products:purge', 'POST', params);
    this.projects.locations.catalogs.branches.products.import = (params) => this._makeRequest('v2alpha/{+parent}/products:import', 'POST', params);
    this.projects.locations.catalogs.branches.products.export = (params) => this._makeRequest('v2alpha/{+parent}/products:export', 'POST', params);
    this.projects.locations.catalogs.branches.products.setInventory = (params) => this._makeRequest('v2alpha/{+name}:setInventory', 'POST', params);
    this.projects.locations.catalogs.branches.products.addFulfillmentPlaces = (params) => this._makeRequest('v2alpha/{+product}:addFulfillmentPlaces', 'POST', params);
    this.projects.locations.catalogs.branches.products.removeFulfillmentPlaces = (params) => this._makeRequest('v2alpha/{+product}:removeFulfillmentPlaces', 'POST', params);
    this.projects.locations.catalogs.branches.products.addLocalInventories = (params) => this._makeRequest('v2alpha/{+product}:addLocalInventories', 'POST', params);
    this.projects.locations.catalogs.branches.products.removeLocalInventories = (params) => this._makeRequest('v2alpha/{+product}:removeLocalInventories', 'POST', params);

    this.projects.locations.catalogs.attributesConfig = {};
    this.projects.locations.catalogs.attributesConfig.addCatalogAttribute = (params) => this._makeRequest('v2alpha/{+attributesConfig}:addCatalogAttribute', 'POST', params);
    this.projects.locations.catalogs.attributesConfig.removeCatalogAttribute = (params) => this._makeRequest('v2alpha/{+attributesConfig}:removeCatalogAttribute', 'POST', params);
    this.projects.locations.catalogs.attributesConfig.batchRemoveCatalogAttributes = (params) => this._makeRequest('v2alpha/{+attributesConfig}:batchRemoveCatalogAttributes', 'POST', params);
    this.projects.locations.catalogs.attributesConfig.replaceCatalogAttribute = (params) => this._makeRequest('v2alpha/{+attributesConfig}:replaceCatalogAttribute', 'POST', params);

    this.projects.locations.catalogs.placements = {};
    this.projects.locations.catalogs.placements.search = (params) => this._makeRequest('v2alpha/{+placement}:search', 'POST', params);
    this.projects.locations.catalogs.placements.conversationalSearch = (params) => this._makeRequest('v2alpha/{+placement}:conversationalSearch', 'POST', params);
    this.projects.locations.catalogs.placements.predict = (params) => this._makeRequest('v2alpha/{+placement}:predict', 'POST', params);

    this.projects.locations.catalogs.servingConfigs = {};
    this.projects.locations.catalogs.servingConfigs.search = (params) => this._makeRequest('v2alpha/{+placement}:search', 'POST', params);
    this.projects.locations.catalogs.servingConfigs.conversationalSearch = (params) => this._makeRequest('v2alpha/{+placement}:conversationalSearch', 'POST', params);
    this.projects.locations.catalogs.servingConfigs.predict = (params) => this._makeRequest('v2alpha/{+placement}:predict', 'POST', params);
    this.projects.locations.catalogs.servingConfigs.create = (params) => this._makeRequest('v2alpha/{+parent}/servingConfigs', 'POST', params);
    this.projects.locations.catalogs.servingConfigs.delete = (params) => this._makeRequest('v2alpha/{+name}', 'DELETE', params);
    this.projects.locations.catalogs.servingConfigs.patch = (params) => this._makeRequest('v2alpha/{+name}', 'PATCH', params);
    this.projects.locations.catalogs.servingConfigs.get = (params) => this._makeRequest('v2alpha/{+name}', 'GET', params);
    this.projects.locations.catalogs.servingConfigs.list = (params) => this._makeRequest('v2alpha/{+parent}/servingConfigs', 'GET', params);
    this.projects.locations.catalogs.servingConfigs.addControl = (params) => this._makeRequest('v2alpha/{+servingConfig}:addControl', 'POST', params);
    this.projects.locations.catalogs.servingConfigs.removeControl = (params) => this._makeRequest('v2alpha/{+servingConfig}:removeControl', 'POST', params);

    this.projects.locations.catalogs.completionData = {};
    this.projects.locations.catalogs.completionData.import = (params) => this._makeRequest('v2alpha/{+parent}/completionData:import', 'POST', params);

    this.projects.locations.catalogs.controls = {};
    this.projects.locations.catalogs.controls.create = (params) => this._makeRequest('v2alpha/{+parent}/controls', 'POST', params);
    this.projects.locations.catalogs.controls.delete = (params) => this._makeRequest('v2alpha/{+name}', 'DELETE', params);
    this.projects.locations.catalogs.controls.patch = (params) => this._makeRequest('v2alpha/{+name}', 'PATCH', params);
    this.projects.locations.catalogs.controls.get = (params) => this._makeRequest('v2alpha/{+name}', 'GET', params);
    this.projects.locations.catalogs.controls.list = (params) => this._makeRequest('v2alpha/{+parent}/controls', 'GET', params);

    this.projects.locations.catalogs.generativeQuestions = {};
    this.projects.locations.catalogs.generativeQuestions.list = (params) => this._makeRequest('v2alpha/{+parent}/generativeQuestions', 'GET', params);

    this.projects.locations.catalogs.generativeQuestion = {};
    this.projects.locations.catalogs.generativeQuestion.batchUpdate = (params) => this._makeRequest('v2alpha/{+parent}/generativeQuestion:batchUpdate', 'POST', params);

    this.projects.locations.catalogs.models = {};
    this.projects.locations.catalogs.models.create = (params) => this._makeRequest('v2alpha/{+parent}/models', 'POST', params);
    this.projects.locations.catalogs.models.get = (params) => this._makeRequest('v2alpha/{+name}', 'GET', params);
    this.projects.locations.catalogs.models.pause = (params) => this._makeRequest('v2alpha/{+name}:pause', 'POST', params);
    this.projects.locations.catalogs.models.resume = (params) => this._makeRequest('v2alpha/{+name}:resume', 'POST', params);
    this.projects.locations.catalogs.models.delete = (params) => this._makeRequest('v2alpha/{+name}', 'DELETE', params);
    this.projects.locations.catalogs.models.list = (params) => this._makeRequest('v2alpha/{+parent}/models', 'GET', params);
    this.projects.locations.catalogs.models.patch = (params) => this._makeRequest('v2alpha/{+name}', 'PATCH', params);
    this.projects.locations.catalogs.models.tune = (params) => this._makeRequest('v2alpha/{+name}:tune', 'POST', params);

    this.projects.locations.catalogs.userEvents = {};
    this.projects.locations.catalogs.userEvents.write = (params) => this._makeRequest('v2alpha/{+parent}/userEvents:write', 'POST', params);
    this.projects.locations.catalogs.userEvents.collect = (params) => this._makeRequest('v2alpha/{+parent}/userEvents:collect', 'POST', params);
    this.projects.locations.catalogs.userEvents.purge = (params) => this._makeRequest('v2alpha/{+parent}/userEvents:purge', 'POST', params);
    this.projects.locations.catalogs.userEvents.import = (params) => this._makeRequest('v2alpha/{+parent}/userEvents:import', 'POST', params);
    this.projects.locations.catalogs.userEvents.export = (params) => this._makeRequest('v2alpha/{+parent}/userEvents:export', 'POST', params);
    this.projects.locations.catalogs.userEvents.rejoin = (params) => this._makeRequest('v2alpha/{+parent}/userEvents:rejoin', 'POST', params);

    this.projects.locations.catalogs.merchantCenterAccountLinks = {};
    this.projects.locations.catalogs.merchantCenterAccountLinks.list = (params) => this._makeRequest('v2alpha/{+parent}/merchantCenterAccountLinks', 'GET', params);
    this.projects.locations.catalogs.merchantCenterAccountLinks.create = (params) => this._makeRequest('v2alpha/{+parent}/merchantCenterAccountLinks', 'POST', params);
    this.projects.locations.catalogs.merchantCenterAccountLinks.delete = (params) => this._makeRequest('v2alpha/{+name}', 'DELETE', params);

    this.projects.operations = {};
    this.projects.operations.list = (params) => this._makeRequest('v2alpha/{+name}/operations', 'GET', params);
    this.projects.operations.get = (params) => this._makeRequest('v2alpha/{+name}', 'GET', params);

    this.projects.retailProject = {};
    this.projects.retailProject.acceptTerms = (params) => this._makeRequest('v2alpha/{+project}:acceptTerms', 'POST', params);
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
