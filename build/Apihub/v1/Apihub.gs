
/**
 * Google Apps Script client library for the API hub API
 * Documentation URL: https://cloud.google.com/apigee/docs/api-hub/what-is-api-hub
 * @class
 */
class Apihub {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://apihub.googleapis.com/';
    this._servicePath = '';


    this.projects = {};

    this.projects.locations = {};
    this.projects.locations.searchResources = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+location}:searchResources', 'POST', apiParams, clientConfig);
    this.projects.locations.retrieveApiViews = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}:retrieveApiViews', 'GET', apiParams, clientConfig);
    this.projects.locations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}/locations', 'GET', apiParams, clientConfig);
    this.projects.locations.lookupRuntimeProjectAttachment = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:lookupRuntimeProjectAttachment', 'GET', apiParams, clientConfig);
    this.projects.locations.collectApiData = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+location}:collectApiData', 'POST', apiParams, clientConfig);

    this.projects.locations.operations = {};
    this.projects.locations.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}/operations', 'GET', apiParams, clientConfig);
    this.projects.locations.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:cancel', 'POST', apiParams, clientConfig);
    this.projects.locations.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.curations = {};
    this.projects.locations.curations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.curations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.curations.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.curations.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/curations', 'POST', apiParams, clientConfig);
    this.projects.locations.curations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/curations', 'GET', apiParams, clientConfig);

    this.projects.locations.deployments = {};
    this.projects.locations.deployments.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/deployments', 'GET', apiParams, clientConfig);
    this.projects.locations.deployments.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/deployments', 'POST', apiParams, clientConfig);
    this.projects.locations.deployments.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.deployments.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.deployments.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.discoveredApiObservations = {};
    this.projects.locations.discoveredApiObservations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/discoveredApiObservations', 'GET', apiParams, clientConfig);
    this.projects.locations.discoveredApiObservations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.discoveredApiObservations.discoveredApiOperations = {};
    this.projects.locations.discoveredApiObservations.discoveredApiOperations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.discoveredApiObservations.discoveredApiOperations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/discoveredApiOperations', 'GET', apiParams, clientConfig);

    this.projects.locations.apis = {};
    this.projects.locations.apis.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/apis', 'GET', apiParams, clientConfig);
    this.projects.locations.apis.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.apis.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.apis.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/apis', 'POST', apiParams, clientConfig);
    this.projects.locations.apis.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.apis.versions = {};
    this.projects.locations.apis.versions.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.apis.versions.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/versions', 'POST', apiParams, clientConfig);
    this.projects.locations.apis.versions.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.apis.versions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.apis.versions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/versions', 'GET', apiParams, clientConfig);

    this.projects.locations.apis.versions.specs = {};
    this.projects.locations.apis.versions.specs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/specs', 'GET', apiParams, clientConfig);
    this.projects.locations.apis.versions.specs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.apis.versions.specs.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/specs', 'POST', apiParams, clientConfig);
    this.projects.locations.apis.versions.specs.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.apis.versions.specs.lint = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:lint', 'POST', apiParams, clientConfig);
    this.projects.locations.apis.versions.specs.getContents = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:contents', 'GET', apiParams, clientConfig);
    this.projects.locations.apis.versions.specs.fetchAdditionalSpecContent = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:fetchAdditionalSpecContent', 'GET', apiParams, clientConfig);
    this.projects.locations.apis.versions.specs.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects.locations.apis.versions.definitions = {};
    this.projects.locations.apis.versions.definitions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.apis.versions.operations = {};
    this.projects.locations.apis.versions.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/operations', 'GET', apiParams, clientConfig);
    this.projects.locations.apis.versions.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.apis.versions.operations.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/operations', 'POST', apiParams, clientConfig);
    this.projects.locations.apis.versions.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.apis.versions.operations.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects.locations.hostProjectRegistrations = {};
    this.projects.locations.hostProjectRegistrations.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/hostProjectRegistrations', 'POST', apiParams, clientConfig);
    this.projects.locations.hostProjectRegistrations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.hostProjectRegistrations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/hostProjectRegistrations', 'GET', apiParams, clientConfig);

    this.projects.locations.apiHubInstances = {};
    this.projects.locations.apiHubInstances.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.apiHubInstances.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/apiHubInstances', 'POST', apiParams, clientConfig);
    this.projects.locations.apiHubInstances.lookup = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/apiHubInstances:lookup', 'GET', apiParams, clientConfig);
    this.projects.locations.apiHubInstances.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.externalApis = {};
    this.projects.locations.externalApis.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.externalApis.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/externalApis', 'GET', apiParams, clientConfig);
    this.projects.locations.externalApis.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/externalApis', 'POST', apiParams, clientConfig);
    this.projects.locations.externalApis.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.externalApis.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.attributes = {};
    this.projects.locations.attributes.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/attributes', 'POST', apiParams, clientConfig);
    this.projects.locations.attributes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/attributes', 'GET', apiParams, clientConfig);
    this.projects.locations.attributes.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.attributes.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.attributes.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.runtimeProjectAttachments = {};
    this.projects.locations.runtimeProjectAttachments.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.runtimeProjectAttachments.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/runtimeProjectAttachments', 'POST', apiParams, clientConfig);
    this.projects.locations.runtimeProjectAttachments.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/runtimeProjectAttachments', 'GET', apiParams, clientConfig);
    this.projects.locations.runtimeProjectAttachments.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.addons = {};
    this.projects.locations.addons.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.addons.manageConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:manageConfig', 'POST', apiParams, clientConfig);
    this.projects.locations.addons.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/addons', 'GET', apiParams, clientConfig);

    this.projects.locations.dependencies = {};
    this.projects.locations.dependencies.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/dependencies', 'GET', apiParams, clientConfig);
    this.projects.locations.dependencies.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/dependencies', 'POST', apiParams, clientConfig);
    this.projects.locations.dependencies.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.dependencies.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.dependencies.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.plugins = {};
    this.projects.locations.plugins.disable = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:disable', 'POST', apiParams, clientConfig);
    this.projects.locations.plugins.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/plugins', 'GET', apiParams, clientConfig);
    this.projects.locations.plugins.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/plugins', 'POST', apiParams, clientConfig);
    this.projects.locations.plugins.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.plugins.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.plugins.enable = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:enable', 'POST', apiParams, clientConfig);
    this.projects.locations.plugins.getStyleGuide = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.plugins.updateStyleGuide = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects.locations.plugins.instances = {};
    this.projects.locations.plugins.instances.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/instances', 'POST', apiParams, clientConfig);
    this.projects.locations.plugins.instances.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.plugins.instances.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/instances', 'GET', apiParams, clientConfig);
    this.projects.locations.plugins.instances.manageSourceData = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:manageSourceData', 'POST', apiParams, clientConfig);
    this.projects.locations.plugins.instances.enableAction = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:enableAction', 'POST', apiParams, clientConfig);
    this.projects.locations.plugins.instances.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.plugins.instances.disableAction = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:disableAction', 'POST', apiParams, clientConfig);
    this.projects.locations.plugins.instances.executeAction = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:executeAction', 'POST', apiParams, clientConfig);
    this.projects.locations.plugins.instances.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.plugins.styleGuide = {};
    this.projects.locations.plugins.styleGuide.getContents = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:contents', 'GET', apiParams, clientConfig);
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
