
/**
 * Google Apps Script client library for the Firebase App Check API
 * Documentation URL: https://firebase.google.com/docs/app-check
 * @class
 */
class Firebaseappcheck {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://firebaseappcheck.googleapis.com/';
    this._servicePath = '';


    this.projects = {};

    this.projects.services = {};
    this.projects.services.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.services.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/services', 'GET', apiParams, clientConfig);
    this.projects.services.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.services.batchUpdate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/services:batchUpdate', 'POST', apiParams, clientConfig);

    this.projects.services.resourcePolicies = {};
    this.projects.services.resourcePolicies.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.services.resourcePolicies.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/resourcePolicies', 'GET', apiParams, clientConfig);
    this.projects.services.resourcePolicies.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/resourcePolicies', 'POST', apiParams, clientConfig);
    this.projects.services.resourcePolicies.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.services.resourcePolicies.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.services.resourcePolicies.batchUpdate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/resourcePolicies:batchUpdate', 'POST', apiParams, clientConfig);

    this.projects.apps = {};
    this.projects.apps.exchangeSafetyNetToken = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+app}:exchangeSafetyNetToken', 'POST', apiParams, clientConfig);
    this.projects.apps.generatePlayIntegrityChallenge = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+app}:generatePlayIntegrityChallenge', 'POST', apiParams, clientConfig);
    this.projects.apps.exchangePlayIntegrityToken = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+app}:exchangePlayIntegrityToken', 'POST', apiParams, clientConfig);
    this.projects.apps.exchangeDeviceCheckToken = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+app}:exchangeDeviceCheckToken', 'POST', apiParams, clientConfig);
    this.projects.apps.exchangeRecaptchaV3Token = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+app}:exchangeRecaptchaV3Token', 'POST', apiParams, clientConfig);
    this.projects.apps.exchangeRecaptchaEnterpriseToken = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+app}:exchangeRecaptchaEnterpriseToken', 'POST', apiParams, clientConfig);
    this.projects.apps.exchangeCustomToken = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+app}:exchangeCustomToken', 'POST', apiParams, clientConfig);
    this.projects.apps.exchangeDebugToken = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+app}:exchangeDebugToken', 'POST', apiParams, clientConfig);
    this.projects.apps.generateAppAttestChallenge = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+app}:generateAppAttestChallenge', 'POST', apiParams, clientConfig);
    this.projects.apps.exchangeAppAttestAttestation = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+app}:exchangeAppAttestAttestation', 'POST', apiParams, clientConfig);
    this.projects.apps.exchangeAppAttestAssertion = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+app}:exchangeAppAttestAssertion', 'POST', apiParams, clientConfig);

    this.projects.apps.appAttestConfig = {};
    this.projects.apps.appAttestConfig.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.apps.appAttestConfig.batchGet = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/apps/-/appAttestConfig:batchGet', 'GET', apiParams, clientConfig);
    this.projects.apps.appAttestConfig.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects.apps.deviceCheckConfig = {};
    this.projects.apps.deviceCheckConfig.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.apps.deviceCheckConfig.batchGet = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/apps/-/deviceCheckConfig:batchGet', 'GET', apiParams, clientConfig);
    this.projects.apps.deviceCheckConfig.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects.apps.recaptchaV3Config = {};
    this.projects.apps.recaptchaV3Config.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.apps.recaptchaV3Config.batchGet = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/apps/-/recaptchaV3Config:batchGet', 'GET', apiParams, clientConfig);
    this.projects.apps.recaptchaV3Config.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects.apps.recaptchaEnterpriseConfig = {};
    this.projects.apps.recaptchaEnterpriseConfig.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.apps.recaptchaEnterpriseConfig.batchGet = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/apps/-/recaptchaEnterpriseConfig:batchGet', 'GET', apiParams, clientConfig);
    this.projects.apps.recaptchaEnterpriseConfig.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects.apps.safetyNetConfig = {};
    this.projects.apps.safetyNetConfig.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.apps.safetyNetConfig.batchGet = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/apps/-/safetyNetConfig:batchGet', 'GET', apiParams, clientConfig);
    this.projects.apps.safetyNetConfig.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects.apps.playIntegrityConfig = {};
    this.projects.apps.playIntegrityConfig.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.apps.playIntegrityConfig.batchGet = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/apps/-/playIntegrityConfig:batchGet', 'GET', apiParams, clientConfig);
    this.projects.apps.playIntegrityConfig.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects.apps.debugTokens = {};
    this.projects.apps.debugTokens.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.apps.debugTokens.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/debugTokens', 'GET', apiParams, clientConfig);
    this.projects.apps.debugTokens.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/debugTokens', 'POST', apiParams, clientConfig);
    this.projects.apps.debugTokens.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.apps.debugTokens.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.jwks = {};
    this.jwks.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.oauthClients = {};
    this.oauthClients.exchangeDebugToken = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+app}:exchangeDebugToken', 'POST', apiParams, clientConfig);
    this.oauthClients.generateAppAttestChallenge = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+app}:generateAppAttestChallenge', 'POST', apiParams, clientConfig);
    this.oauthClients.exchangeAppAttestAttestation = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+app}:exchangeAppAttestAttestation', 'POST', apiParams, clientConfig);
    this.oauthClients.exchangeAppAttestAssertion = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+app}:exchangeAppAttestAssertion', 'POST', apiParams, clientConfig);
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
