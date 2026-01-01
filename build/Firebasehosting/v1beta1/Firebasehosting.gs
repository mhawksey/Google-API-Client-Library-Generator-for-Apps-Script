
/**
 * Google Apps Script client library for the Firebase Hosting API
 * Documentation URL: https://firebase.google.com/docs/hosting/
 * @class
 */
class Firebasehosting {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://firebasehosting.googleapis.com/';
    this._servicePath = '';


    this.projects = {};

    this.projects.sites = {};
    this.projects.sites.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.sites.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.sites.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/sites', 'POST', apiParams, clientConfig);
    this.projects.sites.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/sites', 'GET', apiParams, clientConfig);
    this.projects.sites.updateConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.sites.getConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.sites.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects.sites.releases = {};
    this.projects.sites.releases.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/releases', 'POST', apiParams, clientConfig);
    this.projects.sites.releases.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.sites.releases.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/releases', 'GET', apiParams, clientConfig);

    this.projects.sites.channels = {};
    this.projects.sites.channels.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.sites.channels.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/channels', 'POST', apiParams, clientConfig);
    this.projects.sites.channels.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.sites.channels.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.sites.channels.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/channels', 'GET', apiParams, clientConfig);

    this.projects.sites.channels.releases = {};
    this.projects.sites.channels.releases.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.sites.channels.releases.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/releases', 'GET', apiParams, clientConfig);
    this.projects.sites.channels.releases.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/releases', 'POST', apiParams, clientConfig);

    this.projects.sites.customDomains = {};
    this.projects.sites.customDomains.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/customDomains', 'POST', apiParams, clientConfig);
    this.projects.sites.customDomains.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/customDomains', 'GET', apiParams, clientConfig);
    this.projects.sites.customDomains.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.sites.customDomains.undelete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:undelete', 'POST', apiParams, clientConfig);
    this.projects.sites.customDomains.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.sites.customDomains.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects.sites.customDomains.operations = {};
    this.projects.sites.customDomains.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/operations', 'GET', apiParams, clientConfig);
    this.projects.sites.customDomains.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);

    this.projects.sites.versions = {};
    this.projects.sites.versions.clone = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/versions:clone', 'POST', apiParams, clientConfig);
    this.projects.sites.versions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/versions', 'GET', apiParams, clientConfig);
    this.projects.sites.versions.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.sites.versions.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.sites.versions.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/versions', 'POST', apiParams, clientConfig);
    this.projects.sites.versions.populateFiles = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}:populateFiles', 'POST', apiParams, clientConfig);
    this.projects.sites.versions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);

    this.projects.sites.versions.files = {};
    this.projects.sites.versions.files.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/files', 'GET', apiParams, clientConfig);

    this.projects.sites.domains = {};
    this.projects.sites.domains.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.sites.domains.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PUT', apiParams, clientConfig);
    this.projects.sites.domains.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/domains', 'GET', apiParams, clientConfig);
    this.projects.sites.domains.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.sites.domains.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/domains', 'POST', apiParams, clientConfig);

    this.projects.operations = {};
    this.projects.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);

    this.sites = {};
    this.sites.updateConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.sites.getConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);

    this.sites.releases = {};
    this.sites.releases.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/releases', 'POST', apiParams, clientConfig);
    this.sites.releases.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/releases', 'GET', apiParams, clientConfig);
    this.sites.releases.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);

    this.sites.versions = {};
    this.sites.versions.populateFiles = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}:populateFiles', 'POST', apiParams, clientConfig);
    this.sites.versions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/versions', 'GET', apiParams, clientConfig);
    this.sites.versions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.sites.versions.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/versions', 'POST', apiParams, clientConfig);
    this.sites.versions.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.sites.versions.clone = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/versions:clone', 'POST', apiParams, clientConfig);
    this.sites.versions.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);

    this.sites.versions.files = {};
    this.sites.versions.files.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/files', 'GET', apiParams, clientConfig);

    this.sites.domains = {};
    this.sites.domains.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PUT', apiParams, clientConfig);
    this.sites.domains.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/domains', 'POST', apiParams, clientConfig);
    this.sites.domains.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.sites.domains.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.sites.domains.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/domains', 'GET', apiParams, clientConfig);

    this.sites.channels = {};
    this.sites.channels.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.sites.channels.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.sites.channels.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.sites.channels.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/channels', 'POST', apiParams, clientConfig);
    this.sites.channels.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/channels', 'GET', apiParams, clientConfig);

    this.sites.channels.releases = {};
    this.sites.channels.releases.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/releases', 'GET', apiParams, clientConfig);
    this.sites.channels.releases.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/releases', 'POST', apiParams, clientConfig);
    this.sites.channels.releases.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
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
