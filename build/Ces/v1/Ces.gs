
/**
 * Google Apps Script client library for the Gemini Enterprise for Customer Experience API
 * Documentation URL: https://docs.cloud.google.com/customer-engagement-ai/conversational-agents/ps
 * @class
 */
class Ces {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://ces.googleapis.com/';
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

    this.projects.locations.apps = {};
    this.projects.locations.apps.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/apps', 'GET', apiParams, clientConfig);
    this.projects.locations.apps.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.apps.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/apps', 'POST', apiParams, clientConfig);
    this.projects.locations.apps.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.apps.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.apps.exportApp = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:exportApp', 'POST', apiParams, clientConfig);
    this.projects.locations.apps.importApp = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/apps:importApp', 'POST', apiParams, clientConfig);
    this.projects.locations.apps.executeTool = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}:executeTool', 'POST', apiParams, clientConfig);
    this.projects.locations.apps.retrieveToolSchema = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}:retrieveToolSchema', 'POST', apiParams, clientConfig);

    this.projects.locations.apps.sessions = {};
    this.projects.locations.apps.sessions.runSession = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+session}:runSession', 'POST', apiParams, clientConfig);
    this.projects.locations.apps.sessions.streamRunSession = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+session}:streamRunSession', 'POST', apiParams, clientConfig);
    this.projects.locations.apps.sessions.generateChatToken = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:generateChatToken', 'POST', apiParams, clientConfig);

    this.projects.locations.apps.agents = {};
    this.projects.locations.apps.agents.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/agents', 'GET', apiParams, clientConfig);
    this.projects.locations.apps.agents.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.apps.agents.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/agents', 'POST', apiParams, clientConfig);
    this.projects.locations.apps.agents.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.apps.agents.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.apps.examples = {};
    this.projects.locations.apps.examples.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/examples', 'GET', apiParams, clientConfig);
    this.projects.locations.apps.examples.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.apps.examples.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/examples', 'POST', apiParams, clientConfig);
    this.projects.locations.apps.examples.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.apps.examples.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.apps.tools = {};
    this.projects.locations.apps.tools.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/tools', 'GET', apiParams, clientConfig);
    this.projects.locations.apps.tools.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.apps.tools.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/tools', 'POST', apiParams, clientConfig);
    this.projects.locations.apps.tools.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.apps.tools.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.apps.conversations = {};
    this.projects.locations.apps.conversations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/conversations', 'GET', apiParams, clientConfig);
    this.projects.locations.apps.conversations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.apps.conversations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.apps.conversations.batchDelete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/conversations:batchDelete', 'POST', apiParams, clientConfig);

    this.projects.locations.apps.guardrails = {};
    this.projects.locations.apps.guardrails.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/guardrails', 'GET', apiParams, clientConfig);
    this.projects.locations.apps.guardrails.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.apps.guardrails.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/guardrails', 'POST', apiParams, clientConfig);
    this.projects.locations.apps.guardrails.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.apps.guardrails.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.apps.deployments = {};
    this.projects.locations.apps.deployments.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/deployments', 'GET', apiParams, clientConfig);
    this.projects.locations.apps.deployments.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.apps.deployments.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/deployments', 'POST', apiParams, clientConfig);
    this.projects.locations.apps.deployments.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.apps.deployments.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.apps.toolsets = {};
    this.projects.locations.apps.toolsets.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/toolsets', 'GET', apiParams, clientConfig);
    this.projects.locations.apps.toolsets.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.apps.toolsets.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/toolsets', 'POST', apiParams, clientConfig);
    this.projects.locations.apps.toolsets.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.apps.toolsets.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.apps.toolsets.retrieveTools = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+toolset}:retrieveTools', 'POST', apiParams, clientConfig);

    this.projects.locations.apps.versions = {};
    this.projects.locations.apps.versions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/versions', 'GET', apiParams, clientConfig);
    this.projects.locations.apps.versions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.apps.versions.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/versions', 'POST', apiParams, clientConfig);
    this.projects.locations.apps.versions.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.apps.versions.restore = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:restore', 'POST', apiParams, clientConfig);

    this.projects.locations.apps.changelogs = {};
    this.projects.locations.apps.changelogs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/changelogs', 'GET', apiParams, clientConfig);
    this.projects.locations.apps.changelogs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
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
