
/**
 * Google Apps Script client library for the Google Cloud Data Catalog API
 * Documentation URL: https://cloud.google.com/data-catalog/docs/
 * @class
 */
class Datacatalog {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://datacatalog.googleapis.com/';
    this._servicePath = '';


    this.catalog = {};
    this.catalog.search = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/catalog:search', 'POST', apiParams, clientConfig);

    this.projects = {};

    this.projects.locations = {};

    this.projects.locations.entryGroups = {};
    this.projects.locations.entryGroups.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/entryGroups', 'POST', apiParams, clientConfig);
    this.projects.locations.entryGroups.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.entryGroups.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.entryGroups.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.entryGroups.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/entryGroups', 'GET', apiParams, clientConfig);
    this.projects.locations.entryGroups.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.locations.entryGroups.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+resource}:getIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.locations.entryGroups.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);

    this.projects.locations.entryGroups.entries = {};
    this.projects.locations.entryGroups.entries.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/entries', 'POST', apiParams, clientConfig);
    this.projects.locations.entryGroups.entries.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.entryGroups.entries.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.entryGroups.entries.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.entryGroups.entries.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/entries', 'GET', apiParams, clientConfig);
    this.projects.locations.entryGroups.entries.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+resource}:getIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.locations.entryGroups.entries.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);

    this.projects.locations.entryGroups.entries.tags = {};
    this.projects.locations.entryGroups.entries.tags.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/tags', 'POST', apiParams, clientConfig);
    this.projects.locations.entryGroups.entries.tags.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.entryGroups.entries.tags.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.entryGroups.entries.tags.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/tags', 'GET', apiParams, clientConfig);

    this.projects.locations.entryGroups.tags = {};
    this.projects.locations.entryGroups.tags.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/tags', 'POST', apiParams, clientConfig);
    this.projects.locations.entryGroups.tags.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.entryGroups.tags.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.entryGroups.tags.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/tags', 'GET', apiParams, clientConfig);

    this.projects.locations.tagTemplates = {};
    this.projects.locations.tagTemplates.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/tagTemplates', 'POST', apiParams, clientConfig);
    this.projects.locations.tagTemplates.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.tagTemplates.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.tagTemplates.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.tagTemplates.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.locations.tagTemplates.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+resource}:getIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.locations.tagTemplates.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);

    this.projects.locations.tagTemplates.fields = {};
    this.projects.locations.tagTemplates.fields.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/fields', 'POST', apiParams, clientConfig);
    this.projects.locations.tagTemplates.fields.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.tagTemplates.fields.rename = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:rename', 'POST', apiParams, clientConfig);
    this.projects.locations.tagTemplates.fields.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.tagTemplates.fields.enumValues = {};
    this.projects.locations.tagTemplates.fields.enumValues.rename = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:rename', 'POST', apiParams, clientConfig);

    this.projects.locations.taxonomies = {};
    this.projects.locations.taxonomies.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/taxonomies', 'POST', apiParams, clientConfig);
    this.projects.locations.taxonomies.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.taxonomies.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.taxonomies.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/taxonomies', 'GET', apiParams, clientConfig);
    this.projects.locations.taxonomies.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.taxonomies.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+resource}:getIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.locations.taxonomies.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.locations.taxonomies.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);
    this.projects.locations.taxonomies.import = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/taxonomies:import', 'POST', apiParams, clientConfig);
    this.projects.locations.taxonomies.export = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/taxonomies:export', 'GET', apiParams, clientConfig);

    this.projects.locations.taxonomies.policyTags = {};
    this.projects.locations.taxonomies.policyTags.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/policyTags', 'POST', apiParams, clientConfig);
    this.projects.locations.taxonomies.policyTags.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.taxonomies.policyTags.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.taxonomies.policyTags.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/policyTags', 'GET', apiParams, clientConfig);
    this.projects.locations.taxonomies.policyTags.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.taxonomies.policyTags.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+resource}:getIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.locations.taxonomies.policyTags.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.locations.taxonomies.policyTags.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);

    this.entries = {};
    this.entries.lookup = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/entries:lookup', 'GET', apiParams, clientConfig);
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
