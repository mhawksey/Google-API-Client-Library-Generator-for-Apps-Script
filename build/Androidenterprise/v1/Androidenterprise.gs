
/**
 * Google Apps Script client library for the Google Play EMM API
 * Documentation URL: https://developers.google.com/android/work/play/emm-api
 * @class
 */
class Androidenterprise {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://androidenterprise.googleapis.com/';
    this._servicePath = '';


    this.webapps = {};
    this.webapps.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/webApps', 'GET', apiParams, clientConfig);
    this.webapps.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/webApps/{webAppId}', 'DELETE', apiParams, clientConfig);
    this.webapps.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/webApps', 'POST', apiParams, clientConfig);
    this.webapps.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/webApps/{webAppId}', 'PUT', apiParams, clientConfig);
    this.webapps.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/webApps/{webAppId}', 'GET', apiParams, clientConfig);

    this.enrollmentTokens = {};
    this.enrollmentTokens.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/enrollmentTokens', 'POST', apiParams, clientConfig);

    this.managedconfigurationsforuser = {};
    this.managedconfigurationsforuser.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/managedConfigurationsForUser/{managedConfigurationForUserId}', 'GET', apiParams, clientConfig);
    this.managedconfigurationsforuser.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/managedConfigurationsForUser/{managedConfigurationForUserId}', 'PUT', apiParams, clientConfig);
    this.managedconfigurationsforuser.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/managedConfigurationsForUser/{managedConfigurationForUserId}', 'DELETE', apiParams, clientConfig);
    this.managedconfigurationsforuser.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/managedConfigurationsForUser', 'GET', apiParams, clientConfig);

    this.managedconfigurationssettings = {};
    this.managedconfigurationssettings.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/products/{productId}/managedConfigurationsSettings', 'GET', apiParams, clientConfig);

    this.products = {};
    this.products.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/products/{productId}', 'GET', apiParams, clientConfig);
    this.products.generateApprovalUrl = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/products/{productId}/generateApprovalUrl', 'POST', apiParams, clientConfig);
    this.products.getAppRestrictionsSchema = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/products/{productId}/appRestrictionsSchema', 'GET', apiParams, clientConfig);
    this.products.approve = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/products/{productId}/approve', 'POST', apiParams, clientConfig);
    this.products.unapprove = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/products/{productId}/unapprove', 'POST', apiParams, clientConfig);
    this.products.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/products', 'GET', apiParams, clientConfig);
    this.products.getPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/products/{productId}/permissions', 'GET', apiParams, clientConfig);

    this.storelayoutclusters = {};
    this.storelayoutclusters.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages/{pageId}/clusters', 'POST', apiParams, clientConfig);
    this.storelayoutclusters.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages/{pageId}/clusters/{clusterId}', 'PUT', apiParams, clientConfig);
    this.storelayoutclusters.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages/{pageId}/clusters/{clusterId}', 'GET', apiParams, clientConfig);
    this.storelayoutclusters.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages/{pageId}/clusters/{clusterId}', 'DELETE', apiParams, clientConfig);
    this.storelayoutclusters.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages/{pageId}/clusters', 'GET', apiParams, clientConfig);

    this.users = {};
    this.users.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users', 'POST', apiParams, clientConfig);
    this.users.revokeDeviceAccess = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/deviceAccess', 'DELETE', apiParams, clientConfig);
    this.users.getAvailableProductSet = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/availableProductSet', 'GET', apiParams, clientConfig);
    this.users.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users', 'GET', apiParams, clientConfig);
    this.users.generateAuthenticationToken = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/authenticationToken', 'POST', apiParams, clientConfig);
    this.users.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}', 'GET', apiParams, clientConfig);
    this.users.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}', 'DELETE', apiParams, clientConfig);
    this.users.setAvailableProductSet = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/availableProductSet', 'PUT', apiParams, clientConfig);
    this.users.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}', 'PUT', apiParams, clientConfig);

    this.entitlements = {};
    this.entitlements.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/entitlements/{entitlementId}', 'GET', apiParams, clientConfig);
    this.entitlements.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/entitlements/{entitlementId}', 'DELETE', apiParams, clientConfig);
    this.entitlements.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/entitlements/{entitlementId}', 'PUT', apiParams, clientConfig);
    this.entitlements.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/entitlements', 'GET', apiParams, clientConfig);

    this.serviceaccountkeys = {};
    this.serviceaccountkeys.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/serviceAccountKeys/{keyId}', 'DELETE', apiParams, clientConfig);
    this.serviceaccountkeys.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/serviceAccountKeys', 'POST', apiParams, clientConfig);
    this.serviceaccountkeys.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/serviceAccountKeys', 'GET', apiParams, clientConfig);

    this.permissions = {};
    this.permissions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/permissions/{permissionId}', 'GET', apiParams, clientConfig);

    this.grouplicenses = {};
    this.grouplicenses.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/groupLicenses/{groupLicenseId}', 'GET', apiParams, clientConfig);
    this.grouplicenses.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/groupLicenses', 'GET', apiParams, clientConfig);

    this.enterprises = {};
    this.enterprises.acknowledgeNotificationSet = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/acknowledgeNotificationSet', 'POST', apiParams, clientConfig);
    this.enterprises.completeSignup = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/completeSignup', 'POST', apiParams, clientConfig);
    this.enterprises.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises', 'GET', apiParams, clientConfig);
    this.enterprises.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}', 'GET', apiParams, clientConfig);
    this.enterprises.enroll = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/enroll', 'POST', apiParams, clientConfig);
    this.enterprises.sendTestPushNotification = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/sendTestPushNotification', 'POST', apiParams, clientConfig);
    this.enterprises.getStoreLayout = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/storeLayout', 'GET', apiParams, clientConfig);
    this.enterprises.generateEnterpriseUpgradeUrl = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/generateEnterpriseUpgradeUrl', 'POST', apiParams, clientConfig);
    this.enterprises.pullNotificationSet = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/pullNotificationSet', 'POST', apiParams, clientConfig);
    this.enterprises.unenroll = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/unenroll', 'POST', apiParams, clientConfig);
    this.enterprises.setStoreLayout = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/storeLayout', 'PUT', apiParams, clientConfig);
    this.enterprises.generateSignupUrl = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/signupUrl', 'POST', apiParams, clientConfig);
    this.enterprises.setAccount = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/account', 'PUT', apiParams, clientConfig);
    this.enterprises.createWebToken = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/createWebToken', 'POST', apiParams, clientConfig);
    this.enterprises.getServiceAccount = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/serviceAccount', 'GET', apiParams, clientConfig);

    this.managedconfigurationsfordevice = {};
    this.managedconfigurationsfordevice.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/managedConfigurationsForDevice', 'GET', apiParams, clientConfig);
    this.managedconfigurationsfordevice.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/managedConfigurationsForDevice/{managedConfigurationForDeviceId}', 'PUT', apiParams, clientConfig);
    this.managedconfigurationsfordevice.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/managedConfigurationsForDevice/{managedConfigurationForDeviceId}', 'DELETE', apiParams, clientConfig);
    this.managedconfigurationsfordevice.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/managedConfigurationsForDevice/{managedConfigurationForDeviceId}', 'GET', apiParams, clientConfig);

    this.grouplicenseusers = {};
    this.grouplicenseusers.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/groupLicenses/{groupLicenseId}/users', 'GET', apiParams, clientConfig);

    this.installs = {};
    this.installs.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/installs/{installId}', 'DELETE', apiParams, clientConfig);
    this.installs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/installs', 'GET', apiParams, clientConfig);
    this.installs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/installs/{installId}', 'GET', apiParams, clientConfig);
    this.installs.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/installs/{installId}', 'PUT', apiParams, clientConfig);

    this.storelayoutpages = {};
    this.storelayoutpages.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages/{pageId}', 'PUT', apiParams, clientConfig);
    this.storelayoutpages.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages/{pageId}', 'DELETE', apiParams, clientConfig);
    this.storelayoutpages.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages/{pageId}', 'GET', apiParams, clientConfig);
    this.storelayoutpages.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages', 'GET', apiParams, clientConfig);
    this.storelayoutpages.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages', 'POST', apiParams, clientConfig);

    this.devices = {};
    this.devices.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}', 'PUT', apiParams, clientConfig);
    this.devices.setState = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/state', 'PUT', apiParams, clientConfig);
    this.devices.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices', 'GET', apiParams, clientConfig);
    this.devices.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}', 'GET', apiParams, clientConfig);
    this.devices.forceReportUpload = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/forceReportUpload', 'POST', apiParams, clientConfig);
    this.devices.getState = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/state', 'GET', apiParams, clientConfig);
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
