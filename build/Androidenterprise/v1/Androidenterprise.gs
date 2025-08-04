
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
    // "Private" properties using the underscore convention
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://androidenterprise.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.devices = {};
    this.devices.list = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices', 'GET', params);
    this.devices.get = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}', 'GET', params);
    this.devices.update = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}', 'PUT', params);
    this.devices.getState = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/state', 'GET', params);
    this.devices.setState = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/state', 'PUT', params);
    this.devices.forceReportUpload = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/forceReportUpload', 'POST', params);

    this.enrollmentTokens = {};
    this.enrollmentTokens.create = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/enrollmentTokens', 'POST', params);

    this.enterprises = {};
    this.enterprises.list = (params) => this._makeRequest('androidenterprise/v1/enterprises', 'GET', params);
    this.enterprises.get = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}', 'GET', params);
    this.enterprises.enroll = (params) => this._makeRequest('androidenterprise/v1/enterprises/enroll', 'POST', params);
    this.enterprises.setAccount = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/account', 'PUT', params);
    this.enterprises.sendTestPushNotification = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/sendTestPushNotification', 'POST', params);
    this.enterprises.pullNotificationSet = (params) => this._makeRequest('androidenterprise/v1/enterprises/pullNotificationSet', 'POST', params);
    this.enterprises.acknowledgeNotificationSet = (params) => this._makeRequest('androidenterprise/v1/enterprises/acknowledgeNotificationSet', 'POST', params);
    this.enterprises.unenroll = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/unenroll', 'POST', params);
    this.enterprises.getStoreLayout = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/storeLayout', 'GET', params);
    this.enterprises.setStoreLayout = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/storeLayout', 'PUT', params);
    this.enterprises.generateSignupUrl = (params) => this._makeRequest('androidenterprise/v1/enterprises/signupUrl', 'POST', params);
    this.enterprises.completeSignup = (params) => this._makeRequest('androidenterprise/v1/enterprises/completeSignup', 'POST', params);
    this.enterprises.getServiceAccount = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/serviceAccount', 'GET', params);
    this.enterprises.createWebToken = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/createWebToken', 'POST', params);
    this.enterprises.generateEnterpriseUpgradeUrl = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/generateEnterpriseUpgradeUrl', 'POST', params);

    this.entitlements = {};
    this.entitlements.list = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/entitlements', 'GET', params);
    this.entitlements.get = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/entitlements/{entitlementId}', 'GET', params);
    this.entitlements.update = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/entitlements/{entitlementId}', 'PUT', params);
    this.entitlements.delete = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/entitlements/{entitlementId}', 'DELETE', params);

    this.grouplicenseusers = {};
    this.grouplicenseusers.list = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/groupLicenses/{groupLicenseId}/users', 'GET', params);

    this.grouplicenses = {};
    this.grouplicenses.list = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/groupLicenses', 'GET', params);
    this.grouplicenses.get = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/groupLicenses/{groupLicenseId}', 'GET', params);

    this.installs = {};
    this.installs.list = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/installs', 'GET', params);
    this.installs.get = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/installs/{installId}', 'GET', params);
    this.installs.update = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/installs/{installId}', 'PUT', params);
    this.installs.delete = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/installs/{installId}', 'DELETE', params);

    this.managedconfigurationsfordevice = {};
    this.managedconfigurationsfordevice.list = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/managedConfigurationsForDevice', 'GET', params);
    this.managedconfigurationsfordevice.get = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/managedConfigurationsForDevice/{managedConfigurationForDeviceId}', 'GET', params);
    this.managedconfigurationsfordevice.update = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/managedConfigurationsForDevice/{managedConfigurationForDeviceId}', 'PUT', params);
    this.managedconfigurationsfordevice.delete = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/managedConfigurationsForDevice/{managedConfigurationForDeviceId}', 'DELETE', params);

    this.managedconfigurationsforuser = {};
    this.managedconfigurationsforuser.list = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/managedConfigurationsForUser', 'GET', params);
    this.managedconfigurationsforuser.get = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/managedConfigurationsForUser/{managedConfigurationForUserId}', 'GET', params);
    this.managedconfigurationsforuser.update = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/managedConfigurationsForUser/{managedConfigurationForUserId}', 'PUT', params);
    this.managedconfigurationsforuser.delete = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/managedConfigurationsForUser/{managedConfigurationForUserId}', 'DELETE', params);

    this.managedconfigurationssettings = {};
    this.managedconfigurationssettings.list = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/products/{productId}/managedConfigurationsSettings', 'GET', params);

    this.permissions = {};
    this.permissions.get = (params) => this._makeRequest('androidenterprise/v1/permissions/{permissionId}', 'GET', params);

    this.products = {};
    this.products.get = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/products/{productId}', 'GET', params);
    this.products.list = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/products', 'GET', params);
    this.products.getPermissions = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/products/{productId}/permissions', 'GET', params);
    this.products.generateApprovalUrl = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/products/{productId}/generateApprovalUrl', 'POST', params);
    this.products.approve = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/products/{productId}/approve', 'POST', params);
    this.products.unapprove = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/products/{productId}/unapprove', 'POST', params);
    this.products.getAppRestrictionsSchema = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/products/{productId}/appRestrictionsSchema', 'GET', params);

    this.serviceaccountkeys = {};
    this.serviceaccountkeys.insert = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/serviceAccountKeys', 'POST', params);
    this.serviceaccountkeys.list = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/serviceAccountKeys', 'GET', params);
    this.serviceaccountkeys.delete = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/serviceAccountKeys/{keyId}', 'DELETE', params);

    this.storelayoutclusters = {};
    this.storelayoutclusters.list = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages/{pageId}/clusters', 'GET', params);
    this.storelayoutclusters.insert = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages/{pageId}/clusters', 'POST', params);
    this.storelayoutclusters.get = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages/{pageId}/clusters/{clusterId}', 'GET', params);
    this.storelayoutclusters.update = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages/{pageId}/clusters/{clusterId}', 'PUT', params);
    this.storelayoutclusters.delete = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages/{pageId}/clusters/{clusterId}', 'DELETE', params);

    this.storelayoutpages = {};
    this.storelayoutpages.list = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages', 'GET', params);
    this.storelayoutpages.insert = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages', 'POST', params);
    this.storelayoutpages.get = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages/{pageId}', 'GET', params);
    this.storelayoutpages.update = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages/{pageId}', 'PUT', params);
    this.storelayoutpages.delete = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages/{pageId}', 'DELETE', params);

    this.users = {};
    this.users.insert = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users', 'POST', params);
    this.users.update = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}', 'PUT', params);
    this.users.list = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users', 'GET', params);
    this.users.get = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}', 'GET', params);
    this.users.delete = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}', 'DELETE', params);
    this.users.generateAuthenticationToken = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/authenticationToken', 'POST', params);
    this.users.getAvailableProductSet = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/availableProductSet', 'GET', params);
    this.users.revokeDeviceAccess = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/deviceAccess', 'DELETE', params);
    this.users.setAvailableProductSet = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/availableProductSet', 'PUT', params);

    this.webapps = {};
    this.webapps.get = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/webApps/{webAppId}', 'GET', params);
    this.webapps.list = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/webApps', 'GET', params);
    this.webapps.insert = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/webApps', 'POST', params);
    this.webapps.update = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/webApps/{webAppId}', 'PUT', params);
    this.webapps.delete = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/webApps/{webAppId}', 'DELETE', params);
  }

  /**
   * @private Builds the full request URL and options object.
   */
  _buildRequestDetails(path, httpMethod, params) {
    let url = this._rootUrl + this._servicePath + path;
    const remainingParams = { ...params };
    // Fix: Correctly handle {+param} style parameters and other potential special chars.
    const pathParams = url.match(/{[^{}]+}/g) || [];

    pathParams.forEach(placeholder => {
      const isPlus = placeholder.startsWith('{+');
      const paramName = placeholder.slice(isPlus ? 2 : 1, -1);
      if (Object.prototype.hasOwnProperty.call(remainingParams, paramName)) {
        url = url.replace(placeholder, remainingParams[paramName]);
        delete remainingParams[paramName];
      }
    });

    const queryParts = [];
    for (const key in remainingParams) {
      if (key !== 'resource') {
        queryParts.push(`${encodeURIComponent(key)}=${encodeURIComponent(remainingParams[key])}`);
      }
    }
    if (queryParts.length > 0) {
      url += '?' + queryParts.join('&');
    }

    const options = {
      method: httpMethod,
      headers: { 'Authorization': 'Bearer ' + this._token },
      contentType: 'application/json',
      muteHttpExceptions: true,
    };
    if (params && params.resource) {
      options.payload = JSON.stringify(params.resource);
    }
    
    return { url, options };
  }

  /**
   * @private Makes the HTTP request with exponential backoff for retries.
   */
  _makeRequest(path, httpMethod, params) {
    const { url, options } = this._buildRequestDetails(path, httpMethod, params);

    for (let i = 0; i <= this._backoffConfig.retries; i++) {
      const response = UrlFetchApp.fetch(url, options);
      const responseCode = response.getResponseCode();
      const responseText = response.getContentText(); // Simplified call

      if (responseCode >= 200 && responseCode < 300) {
        return responseText ? JSON.parse(responseText) : {};
      }

      const retryableErrors = [429, 500, 503];
      if (retryableErrors.includes(responseCode) && i < this._backoffConfig.retries) {
        const delay = this._backoffConfig.baseDelay * Math.pow(2, i) + Math.random() * 1000;
        Utilities.sleep(delay);
        continue;
      }

      try {
        // Return parsed error if possible, otherwise a generic error object
        return JSON.parse(responseText);
      } catch (e) {
        return { error: { code: responseCode, message: responseText } };
      }
    }
    
    // This line is technically unreachable if retries >= 0, but good for safety.
    throw new Error('Request failed after multiple retries.');
  }
}
