
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
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://cloudsearch.googleapis.com/';
    this._servicePath = '';


    this.operations = {};
    this.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.operations.lro = {};
    this.operations.lro.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}/lro', 'GET', apiParams, clientConfig);

    this.debug = {};

    this.debug.datasources = {};

    this.debug.datasources.items = {};
    this.debug.datasources.items.checkAccess = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/debug/{+name}:checkAccess', 'POST', apiParams, clientConfig);
    this.debug.datasources.items.searchByViewUrl = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/debug/{+name}/items:searchByViewUrl', 'POST', apiParams, clientConfig);

    this.debug.datasources.items.unmappedids = {};
    this.debug.datasources.items.unmappedids.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/debug/{+parent}/unmappedids', 'GET', apiParams, clientConfig);

    this.debug.identitysources = {};

    this.debug.identitysources.unmappedids = {};
    this.debug.identitysources.unmappedids.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/debug/{+parent}/unmappedids', 'GET', apiParams, clientConfig);

    this.debug.identitysources.items = {};
    this.debug.identitysources.items.listForunmappedidentity = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/debug/{+parent}/items:forunmappedidentity', 'GET', apiParams, clientConfig);

    this.settings = {};
    this.settings.getCustomer = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/settings/customer', 'GET', apiParams, clientConfig);
    this.settings.updateCustomer = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/settings/customer', 'PATCH', apiParams, clientConfig);

    this.settings.searchapplications = {};
    this.settings.searchapplications.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/settings/searchapplications', 'GET', apiParams, clientConfig);
    this.settings.searchapplications.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/settings/{+name}', 'GET', apiParams, clientConfig);
    this.settings.searchapplications.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/settings/searchapplications', 'POST', apiParams, clientConfig);
    this.settings.searchapplications.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/settings/{+name}', 'PUT', apiParams, clientConfig);
    this.settings.searchapplications.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/settings/{+name}', 'PATCH', apiParams, clientConfig);
    this.settings.searchapplications.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/settings/{+name}', 'DELETE', apiParams, clientConfig);
    this.settings.searchapplications.reset = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/settings/{+name}:reset', 'POST', apiParams, clientConfig);

    this.settings.datasources = {};
    this.settings.datasources.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/settings/datasources', 'POST', apiParams, clientConfig);
    this.settings.datasources.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/settings/{+name}', 'DELETE', apiParams, clientConfig);
    this.settings.datasources.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/settings/{+name}', 'GET', apiParams, clientConfig);
    this.settings.datasources.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/settings/{+name}', 'PUT', apiParams, clientConfig);
    this.settings.datasources.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/settings/{+name}', 'PATCH', apiParams, clientConfig);
    this.settings.datasources.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/settings/datasources', 'GET', apiParams, clientConfig);

    this.v1 = {};
    this.v1.initializeCustomer = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1:initializeCustomer', 'POST', apiParams, clientConfig);

    this.indexing = {};

    this.indexing.datasources = {};
    this.indexing.datasources.updateSchema = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/indexing/{+name}/schema', 'PUT', apiParams, clientConfig);
    this.indexing.datasources.getSchema = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/indexing/{+name}/schema', 'GET', apiParams, clientConfig);
    this.indexing.datasources.deleteSchema = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/indexing/{+name}/schema', 'DELETE', apiParams, clientConfig);

    this.indexing.datasources.items = {};
    this.indexing.datasources.items.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/indexing/{+name}', 'DELETE', apiParams, clientConfig);
    this.indexing.datasources.items.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/indexing/{+name}', 'GET', apiParams, clientConfig);
    this.indexing.datasources.items.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/indexing/{+name}/items', 'GET', apiParams, clientConfig);
    this.indexing.datasources.items.index = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/indexing/{+name}:index', 'POST', apiParams, clientConfig);
    this.indexing.datasources.items.upload = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/indexing/{+name}:upload', 'POST', apiParams, clientConfig);
    this.indexing.datasources.items.poll = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/indexing/{+name}/items:poll', 'POST', apiParams, clientConfig);
    this.indexing.datasources.items.push = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/indexing/{+name}:push', 'POST', apiParams, clientConfig);
    this.indexing.datasources.items.unreserve = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/indexing/{+name}/items:unreserve', 'POST', apiParams, clientConfig);
    this.indexing.datasources.items.deleteQueueItems = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/indexing/{+name}/items:deleteQueueItems', 'POST', apiParams, clientConfig);

    this.query = {};
    this.query.suggest = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/query/suggest', 'POST', apiParams, clientConfig);
    this.query.search = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/query/search', 'POST', apiParams, clientConfig);
    this.query.removeActivity = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/query:removeActivity', 'POST', apiParams, clientConfig);
    this.query.debugSearch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/query:debugSearch', 'POST', apiParams, clientConfig);

    this.query.sources = {};
    this.query.sources.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/query/sources', 'GET', apiParams, clientConfig);

    this.stats = {};
    this.stats.getIndex = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/stats/index', 'GET', apiParams, clientConfig);
    this.stats.getQuery = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/stats/query', 'GET', apiParams, clientConfig);
    this.stats.getUser = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/stats/user', 'GET', apiParams, clientConfig);
    this.stats.getSession = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/stats/session', 'GET', apiParams, clientConfig);
    this.stats.getSearchapplication = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/stats/searchapplication', 'GET', apiParams, clientConfig);

    this.stats.index = {};

    this.stats.index.datasources = {};
    this.stats.index.datasources.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/stats/index/{+name}', 'GET', apiParams, clientConfig);

    this.stats.query = {};

    this.stats.query.searchapplications = {};
    this.stats.query.searchapplications.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/stats/query/{+name}', 'GET', apiParams, clientConfig);

    this.stats.user = {};

    this.stats.user.searchapplications = {};
    this.stats.user.searchapplications.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/stats/user/{+name}', 'GET', apiParams, clientConfig);

    this.stats.session = {};

    this.stats.session.searchapplications = {};
    this.stats.session.searchapplications.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/stats/session/{+name}', 'GET', apiParams, clientConfig);

    this.media = {};
    this.media.upload = async (apiParams = {}, clientConfig = {}) => {
      // If apiParams.media is provided, use the upload path; otherwise, use the standard path.
      const path = apiParams.media ? '/upload/v1/media/{+resourceName}' : 'v1/media/{+resourceName}';
      return this._makeRequest(path, 'POST', apiParams, clientConfig);
    };
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
