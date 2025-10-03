
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
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://connectors.googleapis.com/';
    this._servicePath = '';


    this.projects = {};

    this.projects.locations = {};
    this.projects.locations.getRuntimeConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.getRegionalSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.updateRegionalSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}/locations', 'GET', apiParams, clientConfig);
    this.projects.locations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.connections = {};
    this.projects.locations.connections.listenEvent = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resourcePath}:listenEvent', 'POST', apiParams, clientConfig);
    this.projects.locations.connections.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/connections', 'GET', apiParams, clientConfig);
    this.projects.locations.connections.search = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:search', 'GET', apiParams, clientConfig);
    this.projects.locations.connections.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.connections.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/connections', 'POST', apiParams, clientConfig);
    this.projects.locations.connections.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.connections.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.connections.getConnectionSchemaMetadata = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.connections.repairEventing = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:repairEventing', 'POST', apiParams, clientConfig);
    this.projects.locations.connections.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.locations.connections.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', apiParams, clientConfig);
    this.projects.locations.connections.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);

    this.projects.locations.connections.connectionSchemaMetadata = {};
    this.projects.locations.connections.connectionSchemaMetadata.refresh = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:refresh', 'POST', apiParams, clientConfig);
    this.projects.locations.connections.connectionSchemaMetadata.listEntityTypes = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:listEntityTypes', 'GET', apiParams, clientConfig);
    this.projects.locations.connections.connectionSchemaMetadata.listActions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:listActions', 'GET', apiParams, clientConfig);
    this.projects.locations.connections.connectionSchemaMetadata.getEntityType = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:getEntityType', 'GET', apiParams, clientConfig);
    this.projects.locations.connections.connectionSchemaMetadata.getAction = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:getAction', 'GET', apiParams, clientConfig);

    this.projects.locations.connections.runtimeEntitySchemas = {};
    this.projects.locations.connections.runtimeEntitySchemas.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/runtimeEntitySchemas', 'GET', apiParams, clientConfig);

    this.projects.locations.connections.runtimeActionSchemas = {};
    this.projects.locations.connections.runtimeActionSchemas.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/runtimeActionSchemas', 'GET', apiParams, clientConfig);

    this.projects.locations.connections.eventSubscriptions = {};
    this.projects.locations.connections.eventSubscriptions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/eventSubscriptions', 'GET', apiParams, clientConfig);
    this.projects.locations.connections.eventSubscriptions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.connections.eventSubscriptions.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/eventSubscriptions', 'POST', apiParams, clientConfig);
    this.projects.locations.connections.eventSubscriptions.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.connections.eventSubscriptions.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.connections.eventSubscriptions.retry = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:retry', 'POST', apiParams, clientConfig);

    this.projects.locations.connections.endUserAuthentications = {};
    this.projects.locations.connections.endUserAuthentications.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/endUserAuthentications', 'GET', apiParams, clientConfig);
    this.projects.locations.connections.endUserAuthentications.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.connections.endUserAuthentications.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/endUserAuthentications', 'POST', apiParams, clientConfig);
    this.projects.locations.connections.endUserAuthentications.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.connections.endUserAuthentications.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.operations = {};
    this.projects.locations.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}/operations', 'GET', apiParams, clientConfig);
    this.projects.locations.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:cancel', 'POST', apiParams, clientConfig);

    this.projects.locations.providers = {};
    this.projects.locations.providers.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/providers', 'GET', apiParams, clientConfig);
    this.projects.locations.providers.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.providers.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.locations.providers.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', apiParams, clientConfig);
    this.projects.locations.providers.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);

    this.projects.locations.providers.connectors = {};
    this.projects.locations.providers.connectors.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/connectors', 'GET', apiParams, clientConfig);
    this.projects.locations.providers.connectors.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.providers.connectors.versions = {};
    this.projects.locations.providers.connectors.versions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/versions', 'GET', apiParams, clientConfig);
    this.projects.locations.providers.connectors.versions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.providers.connectors.versions.fetchAuthSchema = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:fetchAuthSchema', 'GET', apiParams, clientConfig);

    this.projects.locations.providers.connectors.versions.eventtypes = {};
    this.projects.locations.providers.connectors.versions.eventtypes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/eventtypes', 'GET', apiParams, clientConfig);
    this.projects.locations.providers.connectors.versions.eventtypes.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.global = {};
    this.projects.locations.global.getSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.global.updateSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects.locations.global.managedZones = {};
    this.projects.locations.global.managedZones.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/managedZones', 'GET', apiParams, clientConfig);
    this.projects.locations.global.managedZones.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.global.managedZones.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/managedZones', 'POST', apiParams, clientConfig);
    this.projects.locations.global.managedZones.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.global.managedZones.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.global.customConnectors = {};
    this.projects.locations.global.customConnectors.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.global.customConnectors.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/customConnectors', 'GET', apiParams, clientConfig);
    this.projects.locations.global.customConnectors.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.global.customConnectors.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/customConnectors', 'POST', apiParams, clientConfig);
    this.projects.locations.global.customConnectors.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects.locations.global.customConnectors.customConnectorVersions = {};
    this.projects.locations.global.customConnectors.customConnectorVersions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/customConnectorVersions', 'GET', apiParams, clientConfig);
    this.projects.locations.global.customConnectors.customConnectorVersions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.global.customConnectors.customConnectorVersions.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/customConnectorVersions', 'POST', apiParams, clientConfig);

    this.projects.locations.endpointAttachments = {};
    this.projects.locations.endpointAttachments.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/endpointAttachments', 'GET', apiParams, clientConfig);
    this.projects.locations.endpointAttachments.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.endpointAttachments.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/endpointAttachments', 'POST', apiParams, clientConfig);
    this.projects.locations.endpointAttachments.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.endpointAttachments.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.customConnectors = {};
    this.projects.locations.customConnectors.validateCustomConnectorSpec = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/customConnectors:validateCustomConnectorSpec', 'POST', apiParams, clientConfig);

    this.projects.locations.customConnectors.customConnectorVersions = {};
    this.projects.locations.customConnectors.customConnectorVersions.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.customConnectors.customConnectorVersions.deprecate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:deprecate', 'POST', apiParams, clientConfig);
    this.projects.locations.customConnectors.customConnectorVersions.publish = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:publish', 'POST', apiParams, clientConfig);
    this.projects.locations.customConnectors.customConnectorVersions.withdraw = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:withdraw', 'POST', apiParams, clientConfig);
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
