
/**
 * Google Apps Script client library for the Cloud Key Management Service (KMS) API
 * Documentation URL: https://cloud.google.com/kms/
 * @class
 */
class Cloudkms {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://cloudkms.googleapis.com/';
    this._servicePath = '';


    this.folders = {};
    this.folders.updateAutokeyConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.folders.getAutokeyConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.folders.getKajPolicyConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.folders.updateKajPolicyConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects = {};
    this.projects.updateAutokeyConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.getAutokeyConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.showEffectiveAutokeyConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}:showEffectiveAutokeyConfig', 'GET', apiParams, clientConfig);
    this.projects.getKajPolicyConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.updateKajPolicyConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.showEffectiveKeyAccessJustificationsPolicyConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+project}:showEffectiveKeyAccessJustificationsPolicyConfig', 'GET', apiParams, clientConfig);
    this.projects.showEffectiveKeyAccessJustificationsEnrollmentConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+project}:showEffectiveKeyAccessJustificationsEnrollmentConfig', 'GET', apiParams, clientConfig);

    this.projects.locations = {};
    this.projects.locations.getEkmConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.updateEkmConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.generateRandomBytes = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+location}:generateRandomBytes', 'POST', apiParams, clientConfig);
    this.projects.locations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}/locations', 'GET', apiParams, clientConfig);
    this.projects.locations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.operations = {};
    this.projects.locations.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.keyHandles = {};
    this.projects.locations.keyHandles.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/keyHandles', 'POST', apiParams, clientConfig);
    this.projects.locations.keyHandles.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.keyHandles.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/keyHandles', 'GET', apiParams, clientConfig);

    this.projects.locations.ekmConnections = {};
    this.projects.locations.ekmConnections.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/ekmConnections', 'GET', apiParams, clientConfig);
    this.projects.locations.ekmConnections.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.ekmConnections.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/ekmConnections', 'POST', apiParams, clientConfig);
    this.projects.locations.ekmConnections.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.ekmConnections.verifyConnectivity = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:verifyConnectivity', 'GET', apiParams, clientConfig);
    this.projects.locations.ekmConnections.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.locations.ekmConnections.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', apiParams, clientConfig);
    this.projects.locations.ekmConnections.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);

    this.projects.locations.keyRings = {};
    this.projects.locations.keyRings.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/keyRings', 'GET', apiParams, clientConfig);
    this.projects.locations.keyRings.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.keyRings.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/keyRings', 'POST', apiParams, clientConfig);
    this.projects.locations.keyRings.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.locations.keyRings.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', apiParams, clientConfig);
    this.projects.locations.keyRings.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);

    this.projects.locations.keyRings.cryptoKeys = {};
    this.projects.locations.keyRings.cryptoKeys.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/cryptoKeys', 'GET', apiParams, clientConfig);
    this.projects.locations.keyRings.cryptoKeys.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.keyRings.cryptoKeys.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/cryptoKeys', 'POST', apiParams, clientConfig);
    this.projects.locations.keyRings.cryptoKeys.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.keyRings.cryptoKeys.updatePrimaryVersion = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:updatePrimaryVersion', 'POST', apiParams, clientConfig);
    this.projects.locations.keyRings.cryptoKeys.encrypt = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:encrypt', 'POST', apiParams, clientConfig);
    this.projects.locations.keyRings.cryptoKeys.decrypt = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:decrypt', 'POST', apiParams, clientConfig);
    this.projects.locations.keyRings.cryptoKeys.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.locations.keyRings.cryptoKeys.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', apiParams, clientConfig);
    this.projects.locations.keyRings.cryptoKeys.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);

    this.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions = {};
    this.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/cryptoKeyVersions', 'GET', apiParams, clientConfig);
    this.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.getPublicKey = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}/publicKey', 'GET', apiParams, clientConfig);
    this.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/cryptoKeyVersions', 'POST', apiParams, clientConfig);
    this.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.import = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/cryptoKeyVersions:import', 'POST', apiParams, clientConfig);
    this.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.destroy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:destroy', 'POST', apiParams, clientConfig);
    this.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.restore = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:restore', 'POST', apiParams, clientConfig);
    this.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.rawEncrypt = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:rawEncrypt', 'POST', apiParams, clientConfig);
    this.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.rawDecrypt = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:rawDecrypt', 'POST', apiParams, clientConfig);
    this.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.asymmetricSign = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:asymmetricSign', 'POST', apiParams, clientConfig);
    this.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.asymmetricDecrypt = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:asymmetricDecrypt', 'POST', apiParams, clientConfig);
    this.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.macSign = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:macSign', 'POST', apiParams, clientConfig);
    this.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.macVerify = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:macVerify', 'POST', apiParams, clientConfig);
    this.projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.decapsulate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:decapsulate', 'POST', apiParams, clientConfig);

    this.projects.locations.keyRings.importJobs = {};
    this.projects.locations.keyRings.importJobs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/importJobs', 'GET', apiParams, clientConfig);
    this.projects.locations.keyRings.importJobs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.keyRings.importJobs.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/importJobs', 'POST', apiParams, clientConfig);
    this.projects.locations.keyRings.importJobs.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.locations.keyRings.importJobs.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', apiParams, clientConfig);
    this.projects.locations.keyRings.importJobs.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);

    this.projects.locations.ekmConfig = {};
    this.projects.locations.ekmConfig.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.locations.ekmConfig.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', apiParams, clientConfig);
    this.projects.locations.ekmConfig.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);

    this.organizations = {};
    this.organizations.getKajPolicyConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.updateKajPolicyConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
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
