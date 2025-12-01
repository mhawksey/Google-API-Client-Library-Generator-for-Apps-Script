
/**
 * Google Apps Script client library for the Identity Toolkit API
 * Documentation URL: https://cloud.google.com/identity-platform
 * @class
 */
class Identitytoolkit {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://identitytoolkit.googleapis.com/';
    this._servicePath = '';


    this.projects = {};
    this.projects.getConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);
    this.projects.updateConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects.identityPlatform = {};
    this.projects.identityPlatform.initializeAuth = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+project}/identityPlatform:initializeAuth', 'POST', apiParams, clientConfig);

    this.projects.defaultSupportedIdpConfigs = {};
    this.projects.defaultSupportedIdpConfigs.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/defaultSupportedIdpConfigs', 'POST', apiParams, clientConfig);
    this.projects.defaultSupportedIdpConfigs.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.defaultSupportedIdpConfigs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);
    this.projects.defaultSupportedIdpConfigs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/defaultSupportedIdpConfigs', 'GET', apiParams, clientConfig);
    this.projects.defaultSupportedIdpConfigs.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects.oauthIdpConfigs = {};
    this.projects.oauthIdpConfigs.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/oauthIdpConfigs', 'POST', apiParams, clientConfig);
    this.projects.oauthIdpConfigs.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.oauthIdpConfigs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);
    this.projects.oauthIdpConfigs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/oauthIdpConfigs', 'GET', apiParams, clientConfig);
    this.projects.oauthIdpConfigs.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects.inboundSamlConfigs = {};
    this.projects.inboundSamlConfigs.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/inboundSamlConfigs', 'POST', apiParams, clientConfig);
    this.projects.inboundSamlConfigs.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.inboundSamlConfigs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);
    this.projects.inboundSamlConfigs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/inboundSamlConfigs', 'GET', apiParams, clientConfig);
    this.projects.inboundSamlConfigs.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects.tenants = {};
    this.projects.tenants.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.tenants.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+resource}:getIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.tenants.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);
    this.projects.tenants.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/tenants', 'POST', apiParams, clientConfig);
    this.projects.tenants.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.tenants.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);
    this.projects.tenants.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/tenants', 'GET', apiParams, clientConfig);
    this.projects.tenants.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects.tenants.defaultSupportedIdpConfigs = {};
    this.projects.tenants.defaultSupportedIdpConfigs.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/defaultSupportedIdpConfigs', 'POST', apiParams, clientConfig);
    this.projects.tenants.defaultSupportedIdpConfigs.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.tenants.defaultSupportedIdpConfigs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);
    this.projects.tenants.defaultSupportedIdpConfigs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/defaultSupportedIdpConfigs', 'GET', apiParams, clientConfig);
    this.projects.tenants.defaultSupportedIdpConfigs.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects.tenants.oauthIdpConfigs = {};
    this.projects.tenants.oauthIdpConfigs.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/oauthIdpConfigs', 'POST', apiParams, clientConfig);
    this.projects.tenants.oauthIdpConfigs.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.tenants.oauthIdpConfigs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);
    this.projects.tenants.oauthIdpConfigs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/oauthIdpConfigs', 'GET', apiParams, clientConfig);
    this.projects.tenants.oauthIdpConfigs.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects.tenants.inboundSamlConfigs = {};
    this.projects.tenants.inboundSamlConfigs.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/inboundSamlConfigs', 'POST', apiParams, clientConfig);
    this.projects.tenants.inboundSamlConfigs.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.tenants.inboundSamlConfigs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);
    this.projects.tenants.inboundSamlConfigs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/inboundSamlConfigs', 'GET', apiParams, clientConfig);
    this.projects.tenants.inboundSamlConfigs.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'PATCH', apiParams, clientConfig);

    this.defaultSupportedIdps = {};
    this.defaultSupportedIdps.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/defaultSupportedIdps', 'GET', apiParams, clientConfig);

    this.v2 = {};
    this.v2.getRecaptchaConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/recaptchaConfig', 'GET', apiParams, clientConfig);
    this.v2.getPasswordPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/passwordPolicy', 'GET', apiParams, clientConfig);

    this.accounts = {};
    this.accounts.revokeToken = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/accounts:revokeToken', 'POST', apiParams, clientConfig);

    this.accounts.mfaEnrollment = {};
    this.accounts.mfaEnrollment.finalize = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/accounts/mfaEnrollment:finalize', 'POST', apiParams, clientConfig);
    this.accounts.mfaEnrollment.start = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/accounts/mfaEnrollment:start', 'POST', apiParams, clientConfig);
    this.accounts.mfaEnrollment.withdraw = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/accounts/mfaEnrollment:withdraw', 'POST', apiParams, clientConfig);

    this.accounts.mfaSignIn = {};
    this.accounts.mfaSignIn.finalize = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/accounts/mfaSignIn:finalize', 'POST', apiParams, clientConfig);
    this.accounts.mfaSignIn.start = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/accounts/mfaSignIn:start', 'POST', apiParams, clientConfig);
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
