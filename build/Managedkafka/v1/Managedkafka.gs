
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
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://managedkafka.googleapis.com/';
    this._servicePath = '';


    this.projects = {};

    this.projects.locations = {};
    this.projects.locations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}/locations', 'GET', apiParams, clientConfig);
    this.projects.locations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.operations = {};
    this.projects.locations.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}/operations', 'GET', apiParams, clientConfig);
    this.projects.locations.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:cancel', 'POST', apiParams, clientConfig);

    this.projects.locations.clusters = {};
    this.projects.locations.clusters.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/clusters', 'GET', apiParams, clientConfig);
    this.projects.locations.clusters.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.clusters.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/clusters', 'POST', apiParams, clientConfig);
    this.projects.locations.clusters.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.clusters.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.clusters.topics = {};
    this.projects.locations.clusters.topics.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/topics', 'GET', apiParams, clientConfig);
    this.projects.locations.clusters.topics.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.clusters.topics.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/topics', 'POST', apiParams, clientConfig);
    this.projects.locations.clusters.topics.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.clusters.topics.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.clusters.consumerGroups = {};
    this.projects.locations.clusters.consumerGroups.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/consumerGroups', 'GET', apiParams, clientConfig);
    this.projects.locations.clusters.consumerGroups.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.clusters.consumerGroups.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.clusters.consumerGroups.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.clusters.acls = {};
    this.projects.locations.clusters.acls.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/acls', 'GET', apiParams, clientConfig);
    this.projects.locations.clusters.acls.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.clusters.acls.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/acls', 'POST', apiParams, clientConfig);
    this.projects.locations.clusters.acls.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.clusters.acls.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.clusters.acls.addAclEntry = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+acl}:addAclEntry', 'POST', apiParams, clientConfig);
    this.projects.locations.clusters.acls.removeAclEntry = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+acl}:removeAclEntry', 'POST', apiParams, clientConfig);

    this.projects.locations.connectClusters = {};
    this.projects.locations.connectClusters.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/connectClusters', 'GET', apiParams, clientConfig);
    this.projects.locations.connectClusters.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.connectClusters.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/connectClusters', 'POST', apiParams, clientConfig);
    this.projects.locations.connectClusters.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.connectClusters.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.connectClusters.connectors = {};
    this.projects.locations.connectClusters.connectors.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/connectors', 'GET', apiParams, clientConfig);
    this.projects.locations.connectClusters.connectors.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.connectClusters.connectors.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/connectors', 'POST', apiParams, clientConfig);
    this.projects.locations.connectClusters.connectors.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.connectClusters.connectors.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.connectClusters.connectors.pause = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:pause', 'POST', apiParams, clientConfig);
    this.projects.locations.connectClusters.connectors.resume = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:resume', 'POST', apiParams, clientConfig);
    this.projects.locations.connectClusters.connectors.restart = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:restart', 'POST', apiParams, clientConfig);
    this.projects.locations.connectClusters.connectors.stop = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:stop', 'POST', apiParams, clientConfig);

    this.projects.locations.schemaRegistries = {};
    this.projects.locations.schemaRegistries.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.schemaRegistries.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/schemaRegistries', 'GET', apiParams, clientConfig);
    this.projects.locations.schemaRegistries.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/schemaRegistries', 'POST', apiParams, clientConfig);
    this.projects.locations.schemaRegistries.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.schemaRegistries.contexts = {};
    this.projects.locations.schemaRegistries.contexts.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.schemaRegistries.contexts.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/contexts', 'GET', apiParams, clientConfig);

    this.projects.locations.schemaRegistries.contexts.schemas = {};
    this.projects.locations.schemaRegistries.contexts.schemas.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.schemaRegistries.contexts.schemas.getSchema = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}/schema', 'GET', apiParams, clientConfig);

    this.projects.locations.schemaRegistries.contexts.schemas.versions = {};
    this.projects.locations.schemaRegistries.contexts.schemas.versions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/versions', 'GET', apiParams, clientConfig);

    this.projects.locations.schemaRegistries.contexts.schemas.types = {};
    this.projects.locations.schemaRegistries.contexts.schemas.types.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/schemas/types', 'GET', apiParams, clientConfig);

    this.projects.locations.schemaRegistries.contexts.schemas.subjects = {};
    this.projects.locations.schemaRegistries.contexts.schemas.subjects.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/subjects', 'GET', apiParams, clientConfig);

    this.projects.locations.schemaRegistries.contexts.subjects = {};
    this.projects.locations.schemaRegistries.contexts.subjects.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/subjects', 'GET', apiParams, clientConfig);
    this.projects.locations.schemaRegistries.contexts.subjects.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.schemaRegistries.contexts.subjects.lookupVersion = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}', 'POST', apiParams, clientConfig);

    this.projects.locations.schemaRegistries.contexts.subjects.versions = {};
    this.projects.locations.schemaRegistries.contexts.subjects.versions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.schemaRegistries.contexts.subjects.versions.getSchema = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}/schema', 'GET', apiParams, clientConfig);
    this.projects.locations.schemaRegistries.contexts.subjects.versions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/versions', 'GET', apiParams, clientConfig);
    this.projects.locations.schemaRegistries.contexts.subjects.versions.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/versions', 'POST', apiParams, clientConfig);
    this.projects.locations.schemaRegistries.contexts.subjects.versions.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.schemaRegistries.contexts.subjects.versions.referencedby = {};
    this.projects.locations.schemaRegistries.contexts.subjects.versions.referencedby.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/referencedby', 'GET', apiParams, clientConfig);

    this.projects.locations.schemaRegistries.contexts.compatibility = {};
    this.projects.locations.schemaRegistries.contexts.compatibility.checkCompatibility = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'POST', apiParams, clientConfig);

    this.projects.locations.schemaRegistries.contexts.config = {};
    this.projects.locations.schemaRegistries.contexts.config.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.schemaRegistries.contexts.config.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PUT', apiParams, clientConfig);
    this.projects.locations.schemaRegistries.contexts.config.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.schemaRegistries.contexts.mode = {};
    this.projects.locations.schemaRegistries.contexts.mode.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.schemaRegistries.contexts.mode.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PUT', apiParams, clientConfig);
    this.projects.locations.schemaRegistries.contexts.mode.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.schemaRegistries.schemas = {};
    this.projects.locations.schemaRegistries.schemas.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.schemaRegistries.schemas.getSchema = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}/schema', 'GET', apiParams, clientConfig);

    this.projects.locations.schemaRegistries.schemas.versions = {};
    this.projects.locations.schemaRegistries.schemas.versions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/versions', 'GET', apiParams, clientConfig);

    this.projects.locations.schemaRegistries.schemas.types = {};
    this.projects.locations.schemaRegistries.schemas.types.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/schemas/types', 'GET', apiParams, clientConfig);

    this.projects.locations.schemaRegistries.schemas.subjects = {};
    this.projects.locations.schemaRegistries.schemas.subjects.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/subjects', 'GET', apiParams, clientConfig);

    this.projects.locations.schemaRegistries.subjects = {};
    this.projects.locations.schemaRegistries.subjects.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/subjects', 'GET', apiParams, clientConfig);
    this.projects.locations.schemaRegistries.subjects.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.schemaRegistries.subjects.lookupVersion = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}', 'POST', apiParams, clientConfig);

    this.projects.locations.schemaRegistries.subjects.versions = {};
    this.projects.locations.schemaRegistries.subjects.versions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.schemaRegistries.subjects.versions.getSchema = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}/schema', 'GET', apiParams, clientConfig);
    this.projects.locations.schemaRegistries.subjects.versions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/versions', 'GET', apiParams, clientConfig);
    this.projects.locations.schemaRegistries.subjects.versions.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/versions', 'POST', apiParams, clientConfig);
    this.projects.locations.schemaRegistries.subjects.versions.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.schemaRegistries.subjects.versions.referencedby = {};
    this.projects.locations.schemaRegistries.subjects.versions.referencedby.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/referencedby', 'GET', apiParams, clientConfig);

    this.projects.locations.schemaRegistries.compatibility = {};
    this.projects.locations.schemaRegistries.compatibility.checkCompatibility = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'POST', apiParams, clientConfig);

    this.projects.locations.schemaRegistries.config = {};
    this.projects.locations.schemaRegistries.config.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.schemaRegistries.config.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PUT', apiParams, clientConfig);
    this.projects.locations.schemaRegistries.config.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.schemaRegistries.mode = {};
    this.projects.locations.schemaRegistries.mode.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.schemaRegistries.mode.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PUT', apiParams, clientConfig);
    this.projects.locations.schemaRegistries.mode.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
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
