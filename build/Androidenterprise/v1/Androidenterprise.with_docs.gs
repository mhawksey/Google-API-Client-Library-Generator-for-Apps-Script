
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

    /**
     * Retrieves the IDs of all of a user's devices.
     * @param {string} params.enterpriseId - (Required) The ID of the enterprise.
     * @param {string} params.userId - (Required) The ID of the user.
     * @return {object} The API response object.
     */
    this.devices.list = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices', 'GET', params);

    /**
     * Retrieves the details of a device.
     * @param {string} params.deviceId - (Required) The ID of the device.
     * @param {string} params.enterpriseId - (Required) The ID of the enterprise.
     * @param {string} params.userId - (Required) The ID of the user.
     * @return {object} The API response object.
     */
    this.devices.get = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}', 'GET', params);

    /**
     * Updates the device policy. To ensure the policy is properly enforced, you need to prevent unmanaged accounts from accessing Google Play by setting the allowed_accounts in the managed configuration for the Google Play package. See restrict accounts in Google Play. When provisioning a new device, you should set the device policy using this method before adding the managed Google Play Account to the device, otherwise the policy will not be applied for a short period of time after adding the account to the device.
     * @param {string} params.deviceId - (Required) The ID of the device.
     * @param {string} params.enterpriseId - (Required) The ID of the enterprise.
     * @param {string} params.updateMask - Mask that identifies which fields to update. If not set, all modifiable fields will be modified. When set in a query parameter, this field should be specified as updateMask=<field1>,<field2>,...
     * @param {string} params.userId - (Required) The ID of the user.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.devices.update = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}', 'PUT', params);

    /**
     * Retrieves whether a device's access to Google services is enabled or disabled. The device state takes effect only if enforcing EMM policies on Android devices is enabled in the Google Admin Console. Otherwise, the device state is ignored and all devices are allowed access to Google services. This is only supported for Google-managed users.
     * @param {string} params.deviceId - (Required) The ID of the device.
     * @param {string} params.enterpriseId - (Required) The ID of the enterprise.
     * @param {string} params.userId - (Required) The ID of the user.
     * @return {object} The API response object.
     */
    this.devices.getState = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/state', 'GET', params);

    /**
     * Sets whether a device's access to Google services is enabled or disabled. The device state takes effect only if enforcing EMM policies on Android devices is enabled in the Google Admin Console. Otherwise, the device state is ignored and all devices are allowed access to Google services. This is only supported for Google-managed users.
     * @param {string} params.deviceId - (Required) The ID of the device.
     * @param {string} params.enterpriseId - (Required) The ID of the enterprise.
     * @param {string} params.userId - (Required) The ID of the user.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.devices.setState = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/state', 'PUT', params);

    /**
     * Uploads a report containing any changes in app states on the device since the last report was generated. You can call this method up to 3 times every 24 hours for a given device. If you exceed the quota, then the Google Play EMM API returns HTTP 429 Too Many Requests.
     * @param {string} params.deviceId - (Required) The ID of the device.
     * @param {string} params.enterpriseId - (Required) The ID of the enterprise.
     * @param {string} params.userId - (Required) The ID of the user.
     * @return {object} The API response object.
     */
    this.devices.forceReportUpload = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/forceReportUpload', 'POST', params);

    this.enrollmentTokens = {};

    /**
     * Returns a token for device enrollment. The DPC can encode this token within the QR/NFC/zero-touch enrollment payload or fetch it before calling the on-device API to authenticate the user. The token can be generated for each device or reused across multiple devices.
     * @param {string} params.enterpriseId - (Required) Required. The ID of the enterprise.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.enrollmentTokens.create = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/enrollmentTokens', 'POST', params);

    this.enterprises = {};

    /**
     * Looks up an enterprise by domain name. This is only supported for enterprises created via the Google-initiated creation flow. Lookup of the id is not needed for enterprises created via the EMM-initiated flow since the EMM learns the enterprise ID in the callback specified in the Enterprises.generateSignupUrl call.
     * @param {string} params.domain - (Required) Required. The exact primary domain name of the enterprise to look up.
     * @return {object} The API response object.
     */
    this.enterprises.list = (params) => this._makeRequest('androidenterprise/v1/enterprises', 'GET', params);

    /**
     * Retrieves the name and domain of an enterprise.
     * @param {string} params.enterpriseId - (Required) The ID of the enterprise.
     * @return {object} The API response object.
     */
    this.enterprises.get = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}', 'GET', params);

    /**
     * Enrolls an enterprise with the calling EMM.
     * @param {string} params.token - (Required) Required. The token provided by the enterprise to register the EMM.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.enterprises.enroll = (params) => this._makeRequest('androidenterprise/v1/enterprises/enroll', 'POST', params);

    /**
     * Sets the account that will be used to authenticate to the API as the enterprise.
     * @param {string} params.enterpriseId - (Required) The ID of the enterprise.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.enterprises.setAccount = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/account', 'PUT', params);

    /**
     * Sends a test notification to validate the EMM integration with the Google Cloud Pub/Sub service for this enterprise.
     * @param {string} params.enterpriseId - (Required) The ID of the enterprise.
     * @return {object} The API response object.
     */
    this.enterprises.sendTestPushNotification = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/sendTestPushNotification', 'POST', params);

    /**
     * Pulls and returns a notification set for the enterprises associated with the service account authenticated for the request. The notification set may be empty if no notification are pending. A notification set returned needs to be acknowledged within 20 seconds by calling Enterprises.AcknowledgeNotificationSet, unless the notification set is empty. Notifications that are not acknowledged within the 20 seconds will eventually be included again in the response to another PullNotificationSet request, and those that are never acknowledged will ultimately be deleted according to the Google Cloud Platform Pub/Sub system policy. Multiple requests might be performed concurrently to retrieve notifications, in which case the pending notifications (if any) will be split among each caller, if any are pending. If no notifications are present, an empty notification list is returned. Subsequent requests may return more notifications once they become available.
     * @param {string} params.requestMode - The request mode for pulling notifications. Specifying waitForNotifications will cause the request to block and wait until one or more notifications are present, or return an empty notification list if no notifications are present after some time. Specifying returnImmediately will cause the request to immediately return the pending notifications, or an empty list if no notifications are present. If omitted, defaults to waitForNotifications.
     * @return {object} The API response object.
     */
    this.enterprises.pullNotificationSet = (params) => this._makeRequest('androidenterprise/v1/enterprises/pullNotificationSet', 'POST', params);

    /**
     * Acknowledges notifications that were received from Enterprises.PullNotificationSet to prevent subsequent calls from returning the same notifications.
     * @param {string} params.notificationSetId - The notification set ID as returned by Enterprises.PullNotificationSet. This must be provided.
     * @return {object} The API response object.
     */
    this.enterprises.acknowledgeNotificationSet = (params) => this._makeRequest('androidenterprise/v1/enterprises/acknowledgeNotificationSet', 'POST', params);

    /**
     * Unenrolls an enterprise from the calling EMM.
     * @param {string} params.enterpriseId - (Required) The ID of the enterprise.
     * @return {object} The API response object.
     */
    this.enterprises.unenroll = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/unenroll', 'POST', params);

    /**
     * Returns the store layout for the enterprise. If the store layout has not been set, returns "basic" as the store layout type and no homepage.
     * @param {string} params.enterpriseId - (Required) The ID of the enterprise.
     * @return {object} The API response object.
     */
    this.enterprises.getStoreLayout = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/storeLayout', 'GET', params);

    /**
     * Sets the store layout for the enterprise. By default, storeLayoutType is set to "basic" and the basic store layout is enabled. The basic layout only contains apps approved by the admin, and that have been added to the available product set for a user (using the setAvailableProductSet call). Apps on the page are sorted in order of their product ID value. If you create a custom store layout (by setting storeLayoutType = "custom" and setting a homepage), the basic store layout is disabled.
     * @param {string} params.enterpriseId - (Required) The ID of the enterprise.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.enterprises.setStoreLayout = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/storeLayout', 'PUT', params);

    /**
     * Generates a sign-up URL.
     * @param {string} params.adminEmail - Optional. Email address used to prefill the admin field of the enterprise signup form. This value is a hint only and can be altered by the user. If `allowedDomains` is non-empty then this must belong to one of the `allowedDomains`.
     * @param {string} params.allowedDomains - Optional. A list of domains that are permitted for the admin email. The IT admin cannot enter an email address with a domain name that is not in this list. Subdomains of domains in this list are not allowed but can be allowed by adding a second entry which has `*.` prefixed to the domain name (e.g. *.example.com). If the field is not present or is an empty list then the IT admin is free to use any valid domain name. Personal email domains are always allowed, but will result in the creation of a managed Google Play Accounts enterprise.
     * @param {string} params.callbackUrl - The callback URL to which the Admin will be redirected after successfully creating an enterprise. Before redirecting there the system will add a single query parameter to this URL named "enterpriseToken" which will contain an opaque token to be used for the CompleteSignup request. Beware that this means that the URL will be parsed, the parameter added and then a new URL formatted, i.e. there may be some minor formatting changes and, more importantly, the URL must be well-formed so that it can be parsed.
     * @return {object} The API response object.
     */
    this.enterprises.generateSignupUrl = (params) => this._makeRequest('androidenterprise/v1/enterprises/signupUrl', 'POST', params);

    /**
     * Completes the signup flow, by specifying the Completion token and Enterprise token. This request must not be called multiple times for a given Enterprise Token.
     * @param {string} params.completionToken - The Completion token initially returned by GenerateSignupUrl.
     * @param {string} params.enterpriseToken - The Enterprise token appended to the Callback URL.
     * @return {object} The API response object.
     */
    this.enterprises.completeSignup = (params) => this._makeRequest('androidenterprise/v1/enterprises/completeSignup', 'POST', params);

    /**
     * Returns a service account and credentials. The service account can be bound to the enterprise by calling setAccount. The service account is unique to this enterprise and EMM, and will be deleted if the enterprise is unbound. The credentials contain private key data and are not stored server-side. This method can only be called after calling Enterprises.Enroll or Enterprises.CompleteSignup, and before Enterprises.SetAccount; at other times it will return an error. Subsequent calls after the first will generate a new, unique set of credentials, and invalidate the previously generated credentials. Once the service account is bound to the enterprise, it can be managed using the serviceAccountKeys resource. *Note:* After you create a key, you might need to wait for 60 seconds or more before you perform another operation with the key. If you try to perform an operation with the key immediately after you create the key, and you receive an error, you can retry the request with exponential backoff .
     * @param {string} params.enterpriseId - (Required) The ID of the enterprise.
     * @param {string} params.keyType - The type of credential to return with the service account. Required.
     * @return {object} The API response object.
     */
    this.enterprises.getServiceAccount = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/serviceAccount', 'GET', params);

    /**
     * Returns a unique token to access an embeddable UI. To generate a web UI, pass the generated token into the managed Google Play javascript API. Each token may only be used to start one UI session. See the JavaScript API documentation for further information.
     * @param {string} params.enterpriseId - (Required) The ID of the enterprise.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.enterprises.createWebToken = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/createWebToken', 'POST', params);

    /**
     * Generates an enterprise upgrade URL to upgrade an existing managed Google Play Accounts enterprise to a managed Google domain. See the guide to upgrading an enterprise for more details.
     * @param {string} params.adminEmail - Optional. Email address used to prefill the admin field of the enterprise signup form as part of the upgrade process. This value is a hint only and can be altered by the user. Personal email addresses are not allowed. If `allowedDomains` is non-empty then this must belong to one of the `allowedDomains`.
     * @param {string} params.allowedDomains - Optional. A list of domains that are permitted for the admin email. The IT admin cannot enter an email address with a domain name that is not in this list. Subdomains of domains in this list are not allowed but can be allowed by adding a second entry which has `*.` prefixed to the domain name (e.g. *.example.com). If the field is not present or is an empty list then the IT admin is free to use any valid domain name. Personal email domains are not allowed.
     * @param {string} params.enterpriseId - (Required) Required. The ID of the enterprise.
     * @return {object} The API response object.
     */
    this.enterprises.generateEnterpriseUpgradeUrl = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/generateEnterpriseUpgradeUrl', 'POST', params);

    this.entitlements = {};

    /**
     * Lists all entitlements for the specified user. Only the ID is set. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.
     * @param {string} params.enterpriseId - (Required) The ID of the enterprise.
     * @param {string} params.userId - (Required) The ID of the user.
     * @return {object} The API response object.
     */
    this.entitlements.list = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/entitlements', 'GET', params);

    /**
     * Retrieves details of an entitlement. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.
     * @param {string} params.enterpriseId - (Required) The ID of the enterprise.
     * @param {string} params.entitlementId - (Required) The ID of the entitlement (a product ID), e.g. "app:com.google.android.gm".
     * @param {string} params.userId - (Required) The ID of the user.
     * @return {object} The API response object.
     */
    this.entitlements.get = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/entitlements/{entitlementId}', 'GET', params);

    /**
     * Adds or updates an entitlement to an app for a user. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.
     * @param {string} params.enterpriseId - (Required) The ID of the enterprise.
     * @param {string} params.entitlementId - (Required) The ID of the entitlement (a product ID), e.g. "app:com.google.android.gm".
     * @param {boolean} params.install - Set to true to also install the product on all the user's devices where possible. Failure to install on one or more devices will not prevent this operation from returning successfully, as long as the entitlement was successfully assigned to the user.
     * @param {string} params.userId - (Required) The ID of the user.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.entitlements.update = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/entitlements/{entitlementId}', 'PUT', params);

    /**
     * Removes an entitlement to an app for a user. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.
     * @param {string} params.enterpriseId - (Required) The ID of the enterprise.
     * @param {string} params.entitlementId - (Required) The ID of the entitlement (a product ID), e.g. "app:com.google.android.gm".
     * @param {string} params.userId - (Required) The ID of the user.
     * @return {object} The API response object.
     */
    this.entitlements.delete = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/entitlements/{entitlementId}', 'DELETE', params);

    this.grouplicenseusers = {};

    /**
     * Retrieves the IDs of the users who have been granted entitlements under the license. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.
     * @param {string} params.enterpriseId - (Required) The ID of the enterprise.
     * @param {string} params.groupLicenseId - (Required) The ID of the product the group license is for, e.g. "app:com.google.android.gm".
     * @return {object} The API response object.
     */
    this.grouplicenseusers.list = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/groupLicenses/{groupLicenseId}/users', 'GET', params);

    this.grouplicenses = {};

    /**
     * Retrieves IDs of all products for which the enterprise has a group license. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.
     * @param {string} params.enterpriseId - (Required) The ID of the enterprise.
     * @return {object} The API response object.
     */
    this.grouplicenses.list = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/groupLicenses', 'GET', params);

    /**
     * Retrieves details of an enterprise's group license for a product. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.
     * @param {string} params.enterpriseId - (Required) The ID of the enterprise.
     * @param {string} params.groupLicenseId - (Required) The ID of the product the group license is for, e.g. "app:com.google.android.gm".
     * @return {object} The API response object.
     */
    this.grouplicenses.get = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/groupLicenses/{groupLicenseId}', 'GET', params);

    this.installs = {};

    /**
     * Retrieves the details of all apps installed on the specified device.
     * @param {string} params.deviceId - (Required) The Android ID of the device.
     * @param {string} params.enterpriseId - (Required) The ID of the enterprise.
     * @param {string} params.userId - (Required) The ID of the user.
     * @return {object} The API response object.
     */
    this.installs.list = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/installs', 'GET', params);

    /**
     * Retrieves details of an installation of an app on a device.
     * @param {string} params.deviceId - (Required) The Android ID of the device.
     * @param {string} params.enterpriseId - (Required) The ID of the enterprise.
     * @param {string} params.installId - (Required) The ID of the product represented by the install, e.g. "app:com.google.android.gm".
     * @param {string} params.userId - (Required) The ID of the user.
     * @return {object} The API response object.
     */
    this.installs.get = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/installs/{installId}', 'GET', params);

    /**
     * Requests to install the latest version of an app to a device. If the app is already installed, then it is updated to the latest version if necessary.
     * @param {string} params.deviceId - (Required) The Android ID of the device.
     * @param {string} params.enterpriseId - (Required) The ID of the enterprise.
     * @param {string} params.installId - (Required) The ID of the product represented by the install, e.g. "app:com.google.android.gm".
     * @param {string} params.userId - (Required) The ID of the user.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.installs.update = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/installs/{installId}', 'PUT', params);

    /**
     * Requests to remove an app from a device. A call to get or list will still show the app as installed on the device until it is actually removed. A successful response indicates that a removal request has been sent to the device. The call will be considered successful even if the app is not present on the device (e.g. it was never installed, or was removed by the user).
     * @param {string} params.deviceId - (Required) The Android ID of the device.
     * @param {string} params.enterpriseId - (Required) The ID of the enterprise.
     * @param {string} params.installId - (Required) The ID of the product represented by the install, e.g. "app:com.google.android.gm".
     * @param {string} params.userId - (Required) The ID of the user.
     * @return {object} The API response object.
     */
    this.installs.delete = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/installs/{installId}', 'DELETE', params);

    this.managedconfigurationsfordevice = {};

    /**
     * Lists all the per-device managed configurations for the specified device. Only the ID is set.
     * @param {string} params.deviceId - (Required) The Android ID of the device.
     * @param {string} params.enterpriseId - (Required) The ID of the enterprise.
     * @param {string} params.userId - (Required) The ID of the user.
     * @return {object} The API response object.
     */
    this.managedconfigurationsfordevice.list = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/managedConfigurationsForDevice', 'GET', params);

    /**
     * Retrieves details of a per-device managed configuration.
     * @param {string} params.deviceId - (Required) The Android ID of the device.
     * @param {string} params.enterpriseId - (Required) The ID of the enterprise.
     * @param {string} params.managedConfigurationForDeviceId - (Required) The ID of the managed configuration (a product ID), e.g. "app:com.google.android.gm".
     * @param {string} params.userId - (Required) The ID of the user.
     * @return {object} The API response object.
     */
    this.managedconfigurationsfordevice.get = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/managedConfigurationsForDevice/{managedConfigurationForDeviceId}', 'GET', params);

    /**
     * Adds or updates a per-device managed configuration for an app for the specified device.
     * @param {string} params.deviceId - (Required) The Android ID of the device.
     * @param {string} params.enterpriseId - (Required) The ID of the enterprise.
     * @param {string} params.managedConfigurationForDeviceId - (Required) The ID of the managed configuration (a product ID), e.g. "app:com.google.android.gm".
     * @param {string} params.userId - (Required) The ID of the user.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.managedconfigurationsfordevice.update = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/managedConfigurationsForDevice/{managedConfigurationForDeviceId}', 'PUT', params);

    /**
     * Removes a per-device managed configuration for an app for the specified device.
     * @param {string} params.deviceId - (Required) The Android ID of the device.
     * @param {string} params.enterpriseId - (Required) The ID of the enterprise.
     * @param {string} params.managedConfigurationForDeviceId - (Required) The ID of the managed configuration (a product ID), e.g. "app:com.google.android.gm".
     * @param {string} params.userId - (Required) The ID of the user.
     * @return {object} The API response object.
     */
    this.managedconfigurationsfordevice.delete = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/managedConfigurationsForDevice/{managedConfigurationForDeviceId}', 'DELETE', params);

    this.managedconfigurationsforuser = {};

    /**
     * Lists all the per-user managed configurations for the specified user. Only the ID is set.
     * @param {string} params.enterpriseId - (Required) The ID of the enterprise.
     * @param {string} params.userId - (Required) The ID of the user.
     * @return {object} The API response object.
     */
    this.managedconfigurationsforuser.list = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/managedConfigurationsForUser', 'GET', params);

    /**
     * Retrieves details of a per-user managed configuration for an app for the specified user.
     * @param {string} params.enterpriseId - (Required) The ID of the enterprise.
     * @param {string} params.managedConfigurationForUserId - (Required) The ID of the managed configuration (a product ID), e.g. "app:com.google.android.gm".
     * @param {string} params.userId - (Required) The ID of the user.
     * @return {object} The API response object.
     */
    this.managedconfigurationsforuser.get = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/managedConfigurationsForUser/{managedConfigurationForUserId}', 'GET', params);

    /**
     * Adds or updates the managed configuration settings for an app for the specified user. If you support the Managed configurations iframe, you can apply managed configurations to a user by specifying an mcmId and its associated configuration variables (if any) in the request. Alternatively, all EMMs can apply managed configurations by passing a list of managed properties.
     * @param {string} params.enterpriseId - (Required) The ID of the enterprise.
     * @param {string} params.managedConfigurationForUserId - (Required) The ID of the managed configuration (a product ID), e.g. "app:com.google.android.gm".
     * @param {string} params.userId - (Required) The ID of the user.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.managedconfigurationsforuser.update = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/managedConfigurationsForUser/{managedConfigurationForUserId}', 'PUT', params);

    /**
     * Removes a per-user managed configuration for an app for the specified user.
     * @param {string} params.enterpriseId - (Required) The ID of the enterprise.
     * @param {string} params.managedConfigurationForUserId - (Required) The ID of the managed configuration (a product ID), e.g. "app:com.google.android.gm".
     * @param {string} params.userId - (Required) The ID of the user.
     * @return {object} The API response object.
     */
    this.managedconfigurationsforuser.delete = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/managedConfigurationsForUser/{managedConfigurationForUserId}', 'DELETE', params);

    this.managedconfigurationssettings = {};

    /**
     * Lists all the managed configurations settings for the specified app.
     * @param {string} params.enterpriseId - (Required) The ID of the enterprise.
     * @param {string} params.productId - (Required) The ID of the product for which the managed configurations settings applies to.
     * @return {object} The API response object.
     */
    this.managedconfigurationssettings.list = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/products/{productId}/managedConfigurationsSettings', 'GET', params);

    this.permissions = {};

    /**
     * Retrieves details of an Android app permission for display to an enterprise admin.
     * @param {string} params.language - The BCP47 tag for the user's preferred language (e.g. "en-US", "de")
     * @param {string} params.permissionId - (Required) The ID of the permission.
     * @return {object} The API response object.
     */
    this.permissions.get = (params) => this._makeRequest('androidenterprise/v1/permissions/{permissionId}', 'GET', params);

    this.products = {};

    /**
     * Retrieves details of a product for display to an enterprise admin.
     * @param {string} params.enterpriseId - (Required) The ID of the enterprise.
     * @param {string} params.language - The BCP47 tag for the user's preferred language (e.g. "en-US", "de").
     * @param {string} params.productId - (Required) The ID of the product, e.g. "app:com.google.android.gm".
     * @return {object} The API response object.
     */
    this.products.get = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/products/{productId}', 'GET', params);

    /**
     * Finds approved products that match a query, or all approved products if there is no query. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.
     * @param {boolean} params.approved - Specifies whether to search among all products (false) or among only products that have been approved (true). Only "true" is supported, and should be specified.
     * @param {string} params.enterpriseId - (Required) The ID of the enterprise.
     * @param {string} params.language - The BCP47 tag for the user's preferred language (e.g. "en-US", "de"). Results are returned in the language best matching the preferred language.
     * @param {integer} params.maxResults - Defines how many results the list operation should return. The default number depends on the resource collection.
     * @param {string} params.query - The search query as typed in the Google Play store search box. If omitted, all approved apps will be returned (using the pagination parameters), including apps that are not available in the store (e.g. unpublished apps).
     * @param {string} params.token - Defines the token of the page to return, usually taken from TokenPagination. This can only be used if token paging is enabled.
     * @return {object} The API response object.
     */
    this.products.list = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/products', 'GET', params);

    /**
     * Retrieves the Android app permissions required by this app.
     * @param {string} params.enterpriseId - (Required) The ID of the enterprise.
     * @param {string} params.productId - (Required) The ID of the product.
     * @return {object} The API response object.
     */
    this.products.getPermissions = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/products/{productId}/permissions', 'GET', params);

    /**
     * Generates a URL that can be rendered in an iframe to display the permissions (if any) of a product. An enterprise admin must view these permissions and accept them on behalf of their organization in order to approve that product. Admins should accept the displayed permissions by interacting with a separate UI element in the EMM console, which in turn should trigger the use of this URL as the approvalUrlInfo.approvalUrl property in a Products.approve call to approve the product. This URL can only be used to display permissions for up to 1 day. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.
     * @param {string} params.enterpriseId - (Required) The ID of the enterprise.
     * @param {string} params.languageCode - The BCP 47 language code used for permission names and descriptions in the returned iframe, for instance "en-US".
     * @param {string} params.productId - (Required) The ID of the product.
     * @return {object} The API response object.
     */
    this.products.generateApprovalUrl = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/products/{productId}/generateApprovalUrl', 'POST', params);

    /**
     * Approves the specified product and the relevant app permissions, if any. The maximum number of products that you can approve per enterprise customer is 1,000. To learn how to use managed Google Play to design and create a store layout to display approved products to your users, see Store Layout Design. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.
     * @param {string} params.enterpriseId - (Required) The ID of the enterprise.
     * @param {string} params.productId - (Required) The ID of the product.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.products.approve = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/products/{productId}/approve', 'POST', params);

    /**
     * Unapproves the specified product (and the relevant app permissions, if any) **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.
     * @param {string} params.enterpriseId - (Required) The ID of the enterprise.
     * @param {string} params.productId - (Required) The ID of the product.
     * @return {object} The API response object.
     */
    this.products.unapprove = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/products/{productId}/unapprove', 'POST', params);

    /**
     * Retrieves the schema that defines the configurable properties for this product. All products have a schema, but this schema may be empty if no managed configurations have been defined. This schema can be used to populate a UI that allows an admin to configure the product. To apply a managed configuration based on the schema obtained using this API, see Managed Configurations through Play.
     * @param {string} params.enterpriseId - (Required) The ID of the enterprise.
     * @param {string} params.language - The BCP47 tag for the user's preferred language (e.g. "en-US", "de").
     * @param {string} params.productId - (Required) The ID of the product.
     * @return {object} The API response object.
     */
    this.products.getAppRestrictionsSchema = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/products/{productId}/appRestrictionsSchema', 'GET', params);

    this.serviceaccountkeys = {};

    /**
     * Generates new credentials for the service account associated with this enterprise. The calling service account must have been retrieved by calling Enterprises.GetServiceAccount and must have been set as the enterprise service account by calling Enterprises.SetAccount. Only the type of the key should be populated in the resource to be inserted.
     * @param {string} params.enterpriseId - (Required) The ID of the enterprise.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.serviceaccountkeys.insert = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/serviceAccountKeys', 'POST', params);

    /**
     * Lists all active credentials for the service account associated with this enterprise. Only the ID and key type are returned. The calling service account must have been retrieved by calling Enterprises.GetServiceAccount and must have been set as the enterprise service account by calling Enterprises.SetAccount.
     * @param {string} params.enterpriseId - (Required) The ID of the enterprise.
     * @return {object} The API response object.
     */
    this.serviceaccountkeys.list = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/serviceAccountKeys', 'GET', params);

    /**
     * Removes and invalidates the specified credentials for the service account associated with this enterprise. The calling service account must have been retrieved by calling Enterprises.GetServiceAccount and must have been set as the enterprise service account by calling Enterprises.SetAccount.
     * @param {string} params.enterpriseId - (Required) The ID of the enterprise.
     * @param {string} params.keyId - (Required) The ID of the key.
     * @return {object} The API response object.
     */
    this.serviceaccountkeys.delete = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/serviceAccountKeys/{keyId}', 'DELETE', params);

    this.storelayoutclusters = {};

    /**
     * Retrieves the details of all clusters on the specified page.
     * @param {string} params.enterpriseId - (Required) The ID of the enterprise.
     * @param {string} params.pageId - (Required) The ID of the page.
     * @return {object} The API response object.
     */
    this.storelayoutclusters.list = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages/{pageId}/clusters', 'GET', params);

    /**
     * Inserts a new cluster in a page.
     * @param {string} params.enterpriseId - (Required) The ID of the enterprise.
     * @param {string} params.pageId - (Required) The ID of the page.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.storelayoutclusters.insert = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages/{pageId}/clusters', 'POST', params);

    /**
     * Retrieves details of a cluster.
     * @param {string} params.clusterId - (Required) The ID of the cluster.
     * @param {string} params.enterpriseId - (Required) The ID of the enterprise.
     * @param {string} params.pageId - (Required) The ID of the page.
     * @return {object} The API response object.
     */
    this.storelayoutclusters.get = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages/{pageId}/clusters/{clusterId}', 'GET', params);

    /**
     * Updates a cluster.
     * @param {string} params.clusterId - (Required) The ID of the cluster.
     * @param {string} params.enterpriseId - (Required) The ID of the enterprise.
     * @param {string} params.pageId - (Required) The ID of the page.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.storelayoutclusters.update = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages/{pageId}/clusters/{clusterId}', 'PUT', params);

    /**
     * Deletes a cluster.
     * @param {string} params.clusterId - (Required) The ID of the cluster.
     * @param {string} params.enterpriseId - (Required) The ID of the enterprise.
     * @param {string} params.pageId - (Required) The ID of the page.
     * @return {object} The API response object.
     */
    this.storelayoutclusters.delete = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages/{pageId}/clusters/{clusterId}', 'DELETE', params);

    this.storelayoutpages = {};

    /**
     * Retrieves the details of all pages in the store.
     * @param {string} params.enterpriseId - (Required) The ID of the enterprise.
     * @return {object} The API response object.
     */
    this.storelayoutpages.list = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages', 'GET', params);

    /**
     * Inserts a new store page.
     * @param {string} params.enterpriseId - (Required) The ID of the enterprise.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.storelayoutpages.insert = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages', 'POST', params);

    /**
     * Retrieves details of a store page.
     * @param {string} params.enterpriseId - (Required) The ID of the enterprise.
     * @param {string} params.pageId - (Required) The ID of the page.
     * @return {object} The API response object.
     */
    this.storelayoutpages.get = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages/{pageId}', 'GET', params);

    /**
     * Updates the content of a store page.
     * @param {string} params.enterpriseId - (Required) The ID of the enterprise.
     * @param {string} params.pageId - (Required) The ID of the page.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.storelayoutpages.update = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages/{pageId}', 'PUT', params);

    /**
     * Deletes a store page.
     * @param {string} params.enterpriseId - (Required) The ID of the enterprise.
     * @param {string} params.pageId - (Required) The ID of the page.
     * @return {object} The API response object.
     */
    this.storelayoutpages.delete = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages/{pageId}', 'DELETE', params);

    this.users = {};

    /**
     * Creates a new EMM-managed user. The Users resource passed in the body of the request should include an accountIdentifier and an accountType. If a corresponding user already exists with the same account identifier, the user will be updated with the resource. In this case only the displayName field can be changed.
     * @param {string} params.enterpriseId - (Required) The ID of the enterprise.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.users.insert = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users', 'POST', params);

    /**
     * Updates the details of an EMM-managed user. Can be used with EMM-managed users only (not Google managed users). Pass the new details in the Users resource in the request body. Only the displayName field can be changed. Other fields must either be unset or have the currently active value.
     * @param {string} params.enterpriseId - (Required) The ID of the enterprise.
     * @param {string} params.userId - (Required) The ID of the user.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.users.update = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}', 'PUT', params);

    /**
     * Looks up a user by primary email address. This is only supported for Google-managed users. Lookup of the id is not needed for EMM-managed users because the id is already returned in the result of the Users.insert call.
     * @param {string} params.email - (Required) Required. The exact primary email address of the user to look up.
     * @param {string} params.enterpriseId - (Required) The ID of the enterprise.
     * @return {object} The API response object.
     */
    this.users.list = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users', 'GET', params);

    /**
     * Retrieves a user's details.
     * @param {string} params.enterpriseId - (Required) The ID of the enterprise.
     * @param {string} params.userId - (Required) The ID of the user.
     * @return {object} The API response object.
     */
    this.users.get = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}', 'GET', params);

    /**
     * Deleted an EMM-managed user.
     * @param {string} params.enterpriseId - (Required) The ID of the enterprise.
     * @param {string} params.userId - (Required) The ID of the user.
     * @return {object} The API response object.
     */
    this.users.delete = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}', 'DELETE', params);

    /**
     * Generates an authentication token which the device policy client can use to provision the given EMM-managed user account on a device. The generated token is single-use and expires after a few minutes. You can provision a maximum of 10 devices per user. This call only works with EMM-managed accounts.
     * @param {string} params.enterpriseId - (Required) The ID of the enterprise.
     * @param {string} params.userId - (Required) The ID of the user.
     * @return {object} The API response object.
     */
    this.users.generateAuthenticationToken = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/authenticationToken', 'POST', params);

    /**
     * Retrieves the set of products a user is entitled to access. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.
     * @param {string} params.enterpriseId - (Required) The ID of the enterprise.
     * @param {string} params.userId - (Required) The ID of the user.
     * @return {object} The API response object.
     */
    this.users.getAvailableProductSet = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/availableProductSet', 'GET', params);

    /**
     * Revokes access to all devices currently provisioned to the user. The user will no longer be able to use the managed Play store on any of their managed devices. This call only works with EMM-managed accounts.
     * @param {string} params.enterpriseId - (Required) The ID of the enterprise.
     * @param {string} params.userId - (Required) The ID of the user.
     * @return {object} The API response object.
     */
    this.users.revokeDeviceAccess = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/deviceAccess', 'DELETE', params);

    /**
     * Modifies the set of products that a user is entitled to access (referred to as *whitelisted* products). Only products that are approved or products that were previously approved (products with revoked approval) can be whitelisted. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.
     * @param {string} params.enterpriseId - (Required) The ID of the enterprise.
     * @param {string} params.userId - (Required) The ID of the user.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.users.setAvailableProductSet = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/availableProductSet', 'PUT', params);

    this.webapps = {};

    /**
     * Gets an existing web app.
     * @param {string} params.enterpriseId - (Required) The ID of the enterprise.
     * @param {string} params.webAppId - (Required) The ID of the web app.
     * @return {object} The API response object.
     */
    this.webapps.get = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/webApps/{webAppId}', 'GET', params);

    /**
     * Retrieves the details of all web apps for a given enterprise.
     * @param {string} params.enterpriseId - (Required) The ID of the enterprise.
     * @return {object} The API response object.
     */
    this.webapps.list = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/webApps', 'GET', params);

    /**
     * Creates a new web app for the enterprise.
     * @param {string} params.enterpriseId - (Required) The ID of the enterprise.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.webapps.insert = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/webApps', 'POST', params);

    /**
     * Updates an existing web app.
     * @param {string} params.enterpriseId - (Required) The ID of the enterprise.
     * @param {string} params.webAppId - (Required) The ID of the web app.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.webapps.update = (params) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/webApps/{webAppId}', 'PUT', params);

    /**
     * Deletes an existing web app.
     * @param {string} params.enterpriseId - (Required) The ID of the enterprise.
     * @param {string} params.webAppId - (Required) The ID of the web app.
     * @return {object} The API response object.
     */
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
