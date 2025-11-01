
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
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://retail.googleapis.com/';
    this._servicePath = '';


    this.projects = {};

    this.projects.operations = {};
    this.projects.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}/operations', 'GET', apiParams, clientConfig);
    this.projects.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations = {};

    this.projects.locations.catalogs = {};
    this.projects.locations.catalogs.getDefaultBranch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+catalog}:getDefaultBranch', 'GET', apiParams, clientConfig);
    this.projects.locations.catalogs.getCompletionConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.catalogs.updateGenerativeQuestionFeature = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+catalog}/generativeQuestionFeature', 'PATCH', apiParams, clientConfig);
    this.projects.locations.catalogs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/catalogs', 'GET', apiParams, clientConfig);
    this.projects.locations.catalogs.completeQuery = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+catalog}:completeQuery', 'GET', apiParams, clientConfig);
    this.projects.locations.catalogs.getConversationalSearchCustomizationConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}/conversationalSearchCustomizationConfig', 'GET', apiParams, clientConfig);
    this.projects.locations.catalogs.updateGenerativeQuestion = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+catalog}/generativeQuestion', 'PATCH', apiParams, clientConfig);
    this.projects.locations.catalogs.getGenerativeQuestionFeature = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+catalog}/generativeQuestionFeature', 'GET', apiParams, clientConfig);
    this.projects.locations.catalogs.exportAnalyticsMetrics = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+catalog}:exportAnalyticsMetrics', 'POST', apiParams, clientConfig);
    this.projects.locations.catalogs.updateAttributesConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.catalogs.setDefaultBranch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+catalog}:setDefaultBranch', 'POST', apiParams, clientConfig);
    this.projects.locations.catalogs.getAttributesConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.catalogs.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.catalogs.updateCompletionConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.catalogs.updateConversationalSearchCustomizationConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+catalog}/conversationalSearchCustomizationConfig', 'PATCH', apiParams, clientConfig);

    this.projects.locations.catalogs.servingConfigs = {};
    this.projects.locations.catalogs.servingConfigs.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.catalogs.servingConfigs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.catalogs.servingConfigs.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.catalogs.servingConfigs.removeControl = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+servingConfig}:removeControl', 'POST', apiParams, clientConfig);
    this.projects.locations.catalogs.servingConfigs.conversationalSearch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+placement}:conversationalSearch', 'POST', apiParams, clientConfig);
    this.projects.locations.catalogs.servingConfigs.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/servingConfigs', 'POST', apiParams, clientConfig);
    this.projects.locations.catalogs.servingConfigs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/servingConfigs', 'GET', apiParams, clientConfig);
    this.projects.locations.catalogs.servingConfigs.search = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+placement}:search', 'POST', apiParams, clientConfig);
    this.projects.locations.catalogs.servingConfigs.addControl = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+servingConfig}:addControl', 'POST', apiParams, clientConfig);
    this.projects.locations.catalogs.servingConfigs.predict = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+placement}:predict', 'POST', apiParams, clientConfig);

    this.projects.locations.catalogs.controls = {};
    this.projects.locations.catalogs.controls.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/controls', 'GET', apiParams, clientConfig);
    this.projects.locations.catalogs.controls.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.catalogs.controls.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/controls', 'POST', apiParams, clientConfig);
    this.projects.locations.catalogs.controls.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.catalogs.controls.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects.locations.catalogs.completionData = {};
    this.projects.locations.catalogs.completionData.import = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/completionData:import', 'POST', apiParams, clientConfig);

    this.projects.locations.catalogs.placements = {};
    this.projects.locations.catalogs.placements.predict = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+placement}:predict', 'POST', apiParams, clientConfig);
    this.projects.locations.catalogs.placements.search = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+placement}:search', 'POST', apiParams, clientConfig);
    this.projects.locations.catalogs.placements.conversationalSearch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+placement}:conversationalSearch', 'POST', apiParams, clientConfig);

    this.projects.locations.catalogs.generativeQuestions = {};
    this.projects.locations.catalogs.generativeQuestions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/generativeQuestions', 'GET', apiParams, clientConfig);

    this.projects.locations.catalogs.operations = {};
    this.projects.locations.catalogs.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}/operations', 'GET', apiParams, clientConfig);
    this.projects.locations.catalogs.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.catalogs.generativeQuestion = {};
    this.projects.locations.catalogs.generativeQuestion.batchUpdate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/generativeQuestion:batchUpdate', 'POST', apiParams, clientConfig);

    this.projects.locations.catalogs.branches = {};

    this.projects.locations.catalogs.branches.operations = {};
    this.projects.locations.catalogs.branches.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.catalogs.branches.products = {};
    this.projects.locations.catalogs.branches.products.import = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/products:import', 'POST', apiParams, clientConfig);
    this.projects.locations.catalogs.branches.products.addFulfillmentPlaces = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+product}:addFulfillmentPlaces', 'POST', apiParams, clientConfig);
    this.projects.locations.catalogs.branches.products.removeLocalInventories = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+product}:removeLocalInventories', 'POST', apiParams, clientConfig);
    this.projects.locations.catalogs.branches.products.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.catalogs.branches.products.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/products', 'GET', apiParams, clientConfig);
    this.projects.locations.catalogs.branches.products.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.catalogs.branches.products.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/products', 'POST', apiParams, clientConfig);
    this.projects.locations.catalogs.branches.products.removeFulfillmentPlaces = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+product}:removeFulfillmentPlaces', 'POST', apiParams, clientConfig);
    this.projects.locations.catalogs.branches.products.purge = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/products:purge', 'POST', apiParams, clientConfig);
    this.projects.locations.catalogs.branches.products.addLocalInventories = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+product}:addLocalInventories', 'POST', apiParams, clientConfig);
    this.projects.locations.catalogs.branches.products.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.catalogs.branches.products.setInventory = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}:setInventory', 'POST', apiParams, clientConfig);

    this.projects.locations.catalogs.attributesConfig = {};
    this.projects.locations.catalogs.attributesConfig.replaceCatalogAttribute = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+attributesConfig}:replaceCatalogAttribute', 'POST', apiParams, clientConfig);
    this.projects.locations.catalogs.attributesConfig.removeCatalogAttribute = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+attributesConfig}:removeCatalogAttribute', 'POST', apiParams, clientConfig);
    this.projects.locations.catalogs.attributesConfig.addCatalogAttribute = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+attributesConfig}:addCatalogAttribute', 'POST', apiParams, clientConfig);

    this.projects.locations.catalogs.userEvents = {};
    this.projects.locations.catalogs.userEvents.purge = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/userEvents:purge', 'POST', apiParams, clientConfig);
    this.projects.locations.catalogs.userEvents.write = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/userEvents:write', 'POST', apiParams, clientConfig);
    this.projects.locations.catalogs.userEvents.rejoin = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/userEvents:rejoin', 'POST', apiParams, clientConfig);
    this.projects.locations.catalogs.userEvents.import = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/userEvents:import', 'POST', apiParams, clientConfig);
    this.projects.locations.catalogs.userEvents.collect = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/userEvents:collect', 'POST', apiParams, clientConfig);

    this.projects.locations.catalogs.models = {};
    this.projects.locations.catalogs.models.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/models', 'GET', apiParams, clientConfig);
    this.projects.locations.catalogs.models.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/models', 'POST', apiParams, clientConfig);
    this.projects.locations.catalogs.models.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.catalogs.models.tune = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}:tune', 'POST', apiParams, clientConfig);
    this.projects.locations.catalogs.models.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.catalogs.models.resume = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}:resume', 'POST', apiParams, clientConfig);
    this.projects.locations.catalogs.models.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.catalogs.models.pause = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}:pause', 'POST', apiParams, clientConfig);

    this.projects.locations.operations = {};
    this.projects.locations.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}/operations', 'GET', apiParams, clientConfig);
  }

/**
 * @private Builds the full request URL and options object for a request.
 */
_buildRequestDetails(path, httpMethod, apiParams, clientConfig = {}) {
    let url;
    if (path.startsWith('/upload/')) {
        url = 'https://www.googleapis.com' + path;
    } else {
        url = this._rootUrl + this._servicePath + path;
    }

    const remainingParams = { ...apiParams };
    const pathParams = url.match(/{[^{}]+}/g) || [];

    pathParams.forEach(placeholder => {
        const isPlus = placeholder.startsWith('{+');
        const paramName = placeholder.slice(isPlus ? 2 : 1, -1);
        if (Object.prototype.hasOwnProperty.call(remainingParams, paramName)) {
            url = url.replace(placeholder, remainingParams[paramName]);
            delete remainingParams[paramName];
        }
    });

    const options = {
        method: httpMethod,
        headers: {
            'Authorization': 'Bearer ' + this._token,
            ...(clientConfig.headers || {}),
        },
        muteHttpExceptions: true,
    };

    if (apiParams && apiParams.media && apiParams.media.body) {
        let mediaBlob;
        // Check if the body is already a blob by "duck typing" for the getBytes method.
        if (apiParams.media.body.getBytes && typeof apiParams.media.body.getBytes === 'function') {
            mediaBlob = apiParams.media.body;
        } else {
            // If it's not a blob (e.g., a string or byte array), create one.
            mediaBlob = Utilities.newBlob(apiParams.media.body);
        }

        const hasMetadata = apiParams.requestBody && Object.keys(apiParams.requestBody).length > 0;

        if (hasMetadata) {
            // ** Multipart Upload (Media + Metadata) **
            remainingParams.uploadType = 'multipart';
            
            const boundary = '----' + Utilities.getUuid();
            const metadata = apiParams.requestBody;

            let requestData = '--' + boundary + '\r\n';
            requestData += 'Content-Type: application/json; charset=UTF-8\r\n\r\n';
            requestData += JSON.stringify(metadata) + '\r\n';
            requestData += '--' + boundary + '\r\n';
            requestData += 'Content-Type: ' + apiParams.media.mimeType + '\r\n\r\n';
            
            const payloadBytes = Utilities.newBlob(requestData).getBytes()
                .concat(mediaBlob.getBytes())
                .concat(Utilities.newBlob('\r\n--' + boundary + '--').getBytes());

            options.contentType = 'multipart/related; boundary=' + boundary;
            options.payload = payloadBytes;

        } else {
            // ** Simple Media Upload (Media only) **
            remainingParams.uploadType = 'media';

            options.contentType = mediaBlob.getContentType();
            options.payload = mediaBlob.getBytes();
        }

    } else if (apiParams && apiParams.requestBody) {
        options.contentType = 'application/json';
        options.payload = JSON.stringify(apiParams.requestBody);
    }
    const queryParts = [];
    for (const key in remainingParams) {
        if (key !== 'requestBody' && key !== 'media') {
            queryParts.push(`${encodeURIComponent(key)}=${encodeURIComponent(remainingParams[key])}`);
        }
    }
    if (queryParts.length > 0) {
        url += '?' + queryParts.join('&');
    }

    return { url, options };
}

  /**
   * @private Makes the HTTP request with exponential backoff for retries.
   * @return {Promise<object>} A promise that resolves with the response object.
   */
  async _makeRequest(path, httpMethod, apiParams, clientConfig = {}) {
    const isMediaDownload = apiParams.alt === 'media';

    const { url, options } = this._buildRequestDetails(path, httpMethod, apiParams, clientConfig);

    for (let i = 0; i <= this._backoffConfig.retries; i++) {
      const response = UrlFetchApp.fetch(url, options);
      const responseCode = response.getResponseCode();
      const responseHeaders = response.getAllHeaders();

      if (responseCode >= 200 && responseCode < 300) {
        // Prioritize responseType:'blob' and media downloads to return raw data.
        if ((clientConfig && (clientConfig.responseType === 'blob' || clientConfig.responseType === 'stream')) || isMediaDownload) {
          return {
            data: response.getBlob(),
            status: responseCode,
            headers: responseHeaders,
          };
        }

        const responseText = response.getContentText();
        // Handle empty responses, which are valid (e.g., a 204 No Content).
        const responseBody = responseText ? JSON.parse(responseText) : {};
        return {
          data: responseBody,
          status: responseCode,
          headers: responseHeaders,
        };
      }

      const retryableErrors = [429, 500, 503];
      if (retryableErrors.includes(responseCode) && i < this._backoffConfig.retries) {
        const delay = this._backoffConfig.baseDelay * Math.pow(2, i) + Math.random() * 1000;
        Utilities.sleep(delay);
        continue;
      }

      const responseText = response.getContentText(); // Get response text for error
      let errorMessage = `Request failed with status ${responseCode}`;
      try {
        const errorObj = JSON.parse(responseText);
        if (errorObj.error && errorObj.error.message) {
          errorMessage += `: ${errorObj.error.message}`;
        }
      } catch (e) {
        // If the error response isn't JSON, include the raw text.
        if (responseText) {
          errorMessage += `. Response: ${responseText}`;
        }
      }
      throw new Error(errorMessage);
    }

    throw new Error('Request failed after multiple retries.');
  }
}
