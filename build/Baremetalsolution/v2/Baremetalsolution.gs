
/**
 * Google Apps Script client library for the Bare Metal Solution API
 * Documentation URL: https://cloud.google.com/bare-metal
 * @class
 */
class Baremetalsolution {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://baremetalsolution.googleapis.com/';
    this._servicePath = '';


    this.projects = {};

    this.projects.locations = {};
    this.projects.locations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}/locations', 'GET', apiParams, clientConfig);
    this.projects.locations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.instances = {};
    this.projects.locations.instances.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/instances', 'GET', apiParams, clientConfig);
    this.projects.locations.instances.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.instances.loadAuthInfo = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}:loadAuthInfo', 'GET', apiParams, clientConfig);
    this.projects.locations.instances.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.instances.reimage = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}:reimage', 'POST', apiParams, clientConfig);
    this.projects.locations.instances.enableHyperthreading = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}:enableHyperthreading', 'POST', apiParams, clientConfig);
    this.projects.locations.instances.disableHyperthreading = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}:disableHyperthreading', 'POST', apiParams, clientConfig);
    this.projects.locations.instances.rename = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}:rename', 'POST', apiParams, clientConfig);
    this.projects.locations.instances.reset = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}:reset', 'POST', apiParams, clientConfig);
    this.projects.locations.instances.start = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}:start', 'POST', apiParams, clientConfig);
    this.projects.locations.instances.stop = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}:stop', 'POST', apiParams, clientConfig);
    this.projects.locations.instances.enableInteractiveSerialConsole = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}:enableInteractiveSerialConsole', 'POST', apiParams, clientConfig);
    this.projects.locations.instances.disableInteractiveSerialConsole = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}:disableInteractiveSerialConsole', 'POST', apiParams, clientConfig);
    this.projects.locations.instances.detachLun = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+instance}:detachLun', 'POST', apiParams, clientConfig);

    this.projects.locations.sshKeys = {};
    this.projects.locations.sshKeys.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/sshKeys', 'GET', apiParams, clientConfig);
    this.projects.locations.sshKeys.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/sshKeys', 'POST', apiParams, clientConfig);
    this.projects.locations.sshKeys.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.volumes = {};
    this.projects.locations.volumes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/volumes', 'GET', apiParams, clientConfig);
    this.projects.locations.volumes.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.volumes.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.volumes.rename = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}:rename', 'POST', apiParams, clientConfig);
    this.projects.locations.volumes.evict = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}:evict', 'POST', apiParams, clientConfig);
    this.projects.locations.volumes.resize = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+volume}:resize', 'POST', apiParams, clientConfig);

    this.projects.locations.volumes.snapshots = {};
    this.projects.locations.volumes.snapshots.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/snapshots', 'POST', apiParams, clientConfig);
    this.projects.locations.volumes.snapshots.restoreVolumeSnapshot = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+volumeSnapshot}:restoreVolumeSnapshot', 'POST', apiParams, clientConfig);
    this.projects.locations.volumes.snapshots.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.volumes.snapshots.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.volumes.snapshots.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/snapshots', 'GET', apiParams, clientConfig);

    this.projects.locations.volumes.luns = {};
    this.projects.locations.volumes.luns.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.volumes.luns.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/luns', 'GET', apiParams, clientConfig);
    this.projects.locations.volumes.luns.evict = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}:evict', 'POST', apiParams, clientConfig);

    this.projects.locations.networks = {};
    this.projects.locations.networks.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/networks', 'GET', apiParams, clientConfig);
    this.projects.locations.networks.listNetworkUsage = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+location}/networks:listNetworkUsage', 'GET', apiParams, clientConfig);
    this.projects.locations.networks.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.networks.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.networks.rename = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}:rename', 'POST', apiParams, clientConfig);

    this.projects.locations.nfsShares = {};
    this.projects.locations.nfsShares.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.nfsShares.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/nfsShares', 'GET', apiParams, clientConfig);
    this.projects.locations.nfsShares.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.nfsShares.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/nfsShares', 'POST', apiParams, clientConfig);
    this.projects.locations.nfsShares.rename = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}:rename', 'POST', apiParams, clientConfig);
    this.projects.locations.nfsShares.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.provisioningQuotas = {};
    this.projects.locations.provisioningQuotas.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/provisioningQuotas', 'GET', apiParams, clientConfig);

    this.projects.locations.provisioningConfigs = {};
    this.projects.locations.provisioningConfigs.submit = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/provisioningConfigs:submit', 'POST', apiParams, clientConfig);
    this.projects.locations.provisioningConfigs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.provisioningConfigs.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/provisioningConfigs', 'POST', apiParams, clientConfig);
    this.projects.locations.provisioningConfigs.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects.locations.operations = {};
    this.projects.locations.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.osImages = {};
    this.projects.locations.osImages.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/osImages', 'GET', apiParams, clientConfig);
    this.projects.locations.osImages.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);
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
