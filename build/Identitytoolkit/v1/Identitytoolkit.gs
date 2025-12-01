
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


    this.accounts = {};
    this.accounts.createAuthUri = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/accounts:createAuthUri', 'POST', apiParams, clientConfig);
    this.accounts.sendVerificationCode = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/accounts:sendVerificationCode', 'POST', apiParams, clientConfig);
    this.accounts.signInWithCustomToken = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/accounts:signInWithCustomToken', 'POST', apiParams, clientConfig);
    this.accounts.signInWithGameCenter = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/accounts:signInWithGameCenter', 'POST', apiParams, clientConfig);
    this.accounts.signInWithPassword = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/accounts:signInWithPassword', 'POST', apiParams, clientConfig);
    this.accounts.signInWithEmailLink = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/accounts:signInWithEmailLink', 'POST', apiParams, clientConfig);
    this.accounts.signInWithIdp = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/accounts:signInWithIdp', 'POST', apiParams, clientConfig);
    this.accounts.signInWithPhoneNumber = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/accounts:signInWithPhoneNumber', 'POST', apiParams, clientConfig);
    this.accounts.verifyIosClient = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/accounts:verifyIosClient', 'POST', apiParams, clientConfig);
    this.accounts.signUp = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/accounts:signUp', 'POST', apiParams, clientConfig);
    this.accounts.issueSamlResponse = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/accounts:issueSamlResponse', 'POST', apiParams, clientConfig);
    this.accounts.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/accounts:delete', 'POST', apiParams, clientConfig);
    this.accounts.lookup = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/accounts:lookup', 'POST', apiParams, clientConfig);
    this.accounts.sendOobCode = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/accounts:sendOobCode', 'POST', apiParams, clientConfig);
    this.accounts.resetPassword = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/accounts:resetPassword', 'POST', apiParams, clientConfig);
    this.accounts.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/accounts:update', 'POST', apiParams, clientConfig);

    this.v1 = {};
    this.v1.getPublicKeys = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/publicKeys', 'GET', apiParams, clientConfig);
    this.v1.getRecaptchaParams = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/recaptchaParams', 'GET', apiParams, clientConfig);
    this.v1.getProjects = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects', 'GET', apiParams, clientConfig);
    this.v1.getSessionCookiePublicKeys = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/sessionCookiePublicKeys', 'GET', apiParams, clientConfig);

    this.projects = {};
    this.projects.accounts = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{+targetProjectId}/accounts', 'POST', apiParams, clientConfig);
    this.projects.queryAccounts = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{+targetProjectId}:queryAccounts', 'POST', apiParams, clientConfig);
    this.projects.createSessionCookie = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{+targetProjectId}:createSessionCookie', 'POST', apiParams, clientConfig);

    this.projects.tenants = {};
    this.projects.tenants.accounts = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{+targetProjectId}/tenants/{+tenantId}/accounts', 'POST', apiParams, clientConfig);
    this.projects.tenants.createSessionCookie = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{+targetProjectId}/tenants/{+tenantId}:createSessionCookie', 'POST', apiParams, clientConfig);

    this.projects.tenants.accounts = {};
    this.projects.tenants.accounts.batchDelete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{+targetProjectId}/tenants/{+tenantId}/accounts:batchDelete', 'POST', apiParams, clientConfig);
    this.projects.tenants.accounts.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{+targetProjectId}/tenants/{+tenantId}/accounts:delete', 'POST', apiParams, clientConfig);
    this.projects.tenants.accounts.batchGet = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{+targetProjectId}/tenants/{+tenantId}/accounts:batchGet', 'GET', apiParams, clientConfig);
    this.projects.tenants.accounts.lookup = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{+targetProjectId}/tenants/{+tenantId}/accounts:lookup', 'POST', apiParams, clientConfig);
    this.projects.tenants.accounts.sendOobCode = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{+targetProjectId}/tenants/{+tenantId}/accounts:sendOobCode', 'POST', apiParams, clientConfig);
    this.projects.tenants.accounts.query = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{+targetProjectId}/tenants/{+tenantId}/accounts:query', 'POST', apiParams, clientConfig);
    this.projects.tenants.accounts.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{+targetProjectId}/tenants/{+tenantId}/accounts:update', 'POST', apiParams, clientConfig);
    this.projects.tenants.accounts.batchCreate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{+targetProjectId}/tenants/{+tenantId}/accounts:batchCreate', 'POST', apiParams, clientConfig);

    this.projects.accounts = {};
    this.projects.accounts.batchDelete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{+targetProjectId}/accounts:batchDelete', 'POST', apiParams, clientConfig);
    this.projects.accounts.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{+targetProjectId}/accounts:delete', 'POST', apiParams, clientConfig);
    this.projects.accounts.batchGet = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{+targetProjectId}/accounts:batchGet', 'GET', apiParams, clientConfig);
    this.projects.accounts.lookup = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{+targetProjectId}/accounts:lookup', 'POST', apiParams, clientConfig);
    this.projects.accounts.sendOobCode = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{+targetProjectId}/accounts:sendOobCode', 'POST', apiParams, clientConfig);
    this.projects.accounts.query = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{+targetProjectId}/accounts:query', 'POST', apiParams, clientConfig);
    this.projects.accounts.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{+targetProjectId}/accounts:update', 'POST', apiParams, clientConfig);
    this.projects.accounts.batchCreate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{+targetProjectId}/accounts:batchCreate', 'POST', apiParams, clientConfig);
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
