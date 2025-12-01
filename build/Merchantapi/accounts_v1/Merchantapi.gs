
/**
 * Google Apps Script client library for the Merchant API
 * Documentation URL: https://developers.google.com/merchant/api
 * @class
 */
class Merchantapi {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://merchantapi.googleapis.com/';
    this._servicePath = '';


    this.accounts = {};
    this.accounts.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1/{+name}', 'GET', apiParams, clientConfig);
    this.accounts.createAndConfigure = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1/accounts:createAndConfigure', 'POST', apiParams, clientConfig);
    this.accounts.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.accounts.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.accounts.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1/accounts', 'GET', apiParams, clientConfig);
    this.accounts.listSubaccounts = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1/{+provider}:listSubaccounts', 'GET', apiParams, clientConfig);

    this.accounts.issues = {};
    this.accounts.issues.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1/{+parent}/issues', 'GET', apiParams, clientConfig);

    this.accounts.services = {};
    this.accounts.services.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1/{+name}', 'GET', apiParams, clientConfig);
    this.accounts.services.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1/{+parent}/services', 'GET', apiParams, clientConfig);
    this.accounts.services.propose = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1/{+parent}/services:propose', 'POST', apiParams, clientConfig);
    this.accounts.services.approve = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1/{+name}:approve', 'POST', apiParams, clientConfig);
    this.accounts.services.reject = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1/{+name}:reject', 'POST', apiParams, clientConfig);

    this.accounts.relationships = {};
    this.accounts.relationships.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1/{+name}', 'GET', apiParams, clientConfig);
    this.accounts.relationships.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.accounts.relationships.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1/{+parent}/relationships', 'GET', apiParams, clientConfig);

    this.accounts.users = {};
    this.accounts.users.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1/{+name}', 'GET', apiParams, clientConfig);
    this.accounts.users.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1/{+parent}/users', 'POST', apiParams, clientConfig);
    this.accounts.users.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.accounts.users.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.accounts.users.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1/{+parent}/users', 'GET', apiParams, clientConfig);

    this.accounts.users.me = {};
    this.accounts.users.me.verifySelf = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1/{+account}/users/me:verifySelf', 'PATCH', apiParams, clientConfig);

    this.accounts.autofeedSettings = {};
    this.accounts.autofeedSettings.getAutofeedSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1/{+name}', 'GET', apiParams, clientConfig);
    this.accounts.autofeedSettings.updateAutofeedSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1/{+name}', 'PATCH', apiParams, clientConfig);

    this.accounts.automaticImprovements = {};
    this.accounts.automaticImprovements.getAutomaticImprovements = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1/{+name}', 'GET', apiParams, clientConfig);
    this.accounts.automaticImprovements.updateAutomaticImprovements = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1/{+name}', 'PATCH', apiParams, clientConfig);

    this.accounts.businessIdentity = {};
    this.accounts.businessIdentity.getBusinessIdentity = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1/{+name}', 'GET', apiParams, clientConfig);
    this.accounts.businessIdentity.updateBusinessIdentity = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1/{+name}', 'PATCH', apiParams, clientConfig);

    this.accounts.businessInfo = {};
    this.accounts.businessInfo.getBusinessInfo = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1/{+name}', 'GET', apiParams, clientConfig);
    this.accounts.businessInfo.updateBusinessInfo = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1/{+name}', 'PATCH', apiParams, clientConfig);

    this.accounts.developerRegistration = {};
    this.accounts.developerRegistration.registerGcp = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1/{+name}:registerGcp', 'POST', apiParams, clientConfig);
    this.accounts.developerRegistration.getDeveloperRegistration = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1/{+name}', 'GET', apiParams, clientConfig);
    this.accounts.developerRegistration.unregisterGcp = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1/{+name}:unregisterGcp', 'POST', apiParams, clientConfig);
    this.accounts.developerRegistration.getAccountForGcpRegistration = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1/accounts:getAccountForGcpRegistration', 'GET', apiParams, clientConfig);

    this.accounts.emailPreferences = {};
    this.accounts.emailPreferences.getEmailPreferences = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1/{+name}', 'GET', apiParams, clientConfig);
    this.accounts.emailPreferences.updateEmailPreferences = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1/{+name}', 'PATCH', apiParams, clientConfig);

    this.accounts.gbpAccounts = {};
    this.accounts.gbpAccounts.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1/{+parent}/gbpAccounts', 'GET', apiParams, clientConfig);
    this.accounts.gbpAccounts.linkGbpAccount = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1/{+parent}/gbpAccounts:linkGbpAccount', 'POST', apiParams, clientConfig);

    this.accounts.homepage = {};
    this.accounts.homepage.getHomepage = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1/{+name}', 'GET', apiParams, clientConfig);
    this.accounts.homepage.updateHomepage = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.accounts.homepage.claim = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1/{+name}:claim', 'POST', apiParams, clientConfig);
    this.accounts.homepage.unclaim = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1/{+name}:unclaim', 'POST', apiParams, clientConfig);

    this.accounts.omnichannelSettings = {};
    this.accounts.omnichannelSettings.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1/{+name}', 'GET', apiParams, clientConfig);
    this.accounts.omnichannelSettings.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1/{+parent}/omnichannelSettings', 'GET', apiParams, clientConfig);
    this.accounts.omnichannelSettings.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1/{+parent}/omnichannelSettings', 'POST', apiParams, clientConfig);
    this.accounts.omnichannelSettings.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.accounts.omnichannelSettings.requestInventoryVerification = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1/{+name}:requestInventoryVerification', 'POST', apiParams, clientConfig);

    this.accounts.omnichannelSettings.lfpProviders = {};
    this.accounts.omnichannelSettings.lfpProviders.find = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1/{+parent}/lfpProviders:find', 'GET', apiParams, clientConfig);
    this.accounts.omnichannelSettings.lfpProviders.linkLfpProvider = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1/{+name}:linkLfpProvider', 'POST', apiParams, clientConfig);

    this.accounts.onlineReturnPolicies = {};
    this.accounts.onlineReturnPolicies.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1/{+name}', 'GET', apiParams, clientConfig);
    this.accounts.onlineReturnPolicies.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1/{+parent}/onlineReturnPolicies', 'GET', apiParams, clientConfig);
    this.accounts.onlineReturnPolicies.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1/{+parent}/onlineReturnPolicies', 'POST', apiParams, clientConfig);
    this.accounts.onlineReturnPolicies.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.accounts.programs = {};
    this.accounts.programs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1/{+name}', 'GET', apiParams, clientConfig);
    this.accounts.programs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1/{+parent}/programs', 'GET', apiParams, clientConfig);
    this.accounts.programs.enable = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1/{+name}:enable', 'POST', apiParams, clientConfig);
    this.accounts.programs.disable = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1/{+name}:disable', 'POST', apiParams, clientConfig);

    this.accounts.programs.checkoutSettings = {};
    this.accounts.programs.checkoutSettings.getCheckoutSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1/{+name}', 'GET', apiParams, clientConfig);
    this.accounts.programs.checkoutSettings.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1/{+parent}/checkoutSettings', 'POST', apiParams, clientConfig);
    this.accounts.programs.checkoutSettings.updateCheckoutSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.accounts.programs.checkoutSettings.deleteCheckoutSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.accounts.regions = {};
    this.accounts.regions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1/{+name}', 'GET', apiParams, clientConfig);
    this.accounts.regions.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1/{+parent}/regions', 'POST', apiParams, clientConfig);
    this.accounts.regions.batchCreate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1/{+parent}/regions:batchCreate', 'POST', apiParams, clientConfig);
    this.accounts.regions.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.accounts.regions.batchUpdate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1/{+parent}/regions:batchUpdate', 'POST', apiParams, clientConfig);
    this.accounts.regions.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.accounts.regions.batchDelete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1/{+parent}/regions:batchDelete', 'POST', apiParams, clientConfig);
    this.accounts.regions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1/{+parent}/regions', 'GET', apiParams, clientConfig);

    this.accounts.shippingSettings = {};
    this.accounts.shippingSettings.getShippingSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1/{+name}', 'GET', apiParams, clientConfig);
    this.accounts.shippingSettings.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1/{+parent}/shippingSettings:insert', 'POST', apiParams, clientConfig);

    this.accounts.termsOfServiceAgreementStates = {};
    this.accounts.termsOfServiceAgreementStates.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1/{+name}', 'GET', apiParams, clientConfig);
    this.accounts.termsOfServiceAgreementStates.retrieveForApplication = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1/{+parent}/termsOfServiceAgreementStates:retrieveForApplication', 'GET', apiParams, clientConfig);

    this.termsOfService = {};
    this.termsOfService.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1/{+name}', 'GET', apiParams, clientConfig);
    this.termsOfService.retrieveLatest = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1/termsOfService:retrieveLatest', 'GET', apiParams, clientConfig);
    this.termsOfService.accept = async (apiParams = {}, clientConfig = {}) => this._makeRequest('accounts/v1/{+name}:accept', 'POST', apiParams, clientConfig);
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
