
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


    this.devices = {};

    /**
     * Retrieves the IDs of all of a user's devices.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.enterpriseId - (Required) The ID of the enterprise.
     * @param {string} apiParams.userId - (Required) The ID of the user.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.devices.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices', 'GET', apiParams, clientConfig);

    /**
     * Retrieves the details of a device.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.deviceId - (Required) The ID of the device.
     * @param {string} apiParams.enterpriseId - (Required) The ID of the enterprise.
     * @param {string} apiParams.userId - (Required) The ID of the user.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.devices.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}', 'GET', apiParams, clientConfig);

    /**
     * Updates the device policy. To ensure the policy is properly enforced, you need to prevent unmanaged accounts from accessing Google Play by setting the allowed_accounts in the managed configuration for the Google Play package. See restrict accounts in Google Play. When provisioning a new device, you should set the device policy using this method before adding the managed Google Play Account to the device, otherwise the policy will not be applied for a short period of time after adding the account to the device.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.deviceId - (Required) The ID of the device.
     * @param {string} apiParams.enterpriseId - (Required) The ID of the enterprise.
     * @param {string} apiParams.updateMask - Mask that identifies which fields to update. If not set, all modifiable fields will be modified. When set in a query parameter, this field should be specified as updateMask=<field1>,<field2>,...
     * @param {string} apiParams.userId - (Required) The ID of the user.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.devices.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}', 'PUT', apiParams, clientConfig);

    /**
     * Retrieves whether a device's access to Google services is enabled or disabled. The device state takes effect only if enforcing EMM policies on Android devices is enabled in the Google Admin Console. Otherwise, the device state is ignored and all devices are allowed access to Google services. This is only supported for Google-managed users.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.deviceId - (Required) The ID of the device.
     * @param {string} apiParams.enterpriseId - (Required) The ID of the enterprise.
     * @param {string} apiParams.userId - (Required) The ID of the user.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.devices.getState = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/state', 'GET', apiParams, clientConfig);

    /**
     * Sets whether a device's access to Google services is enabled or disabled. The device state takes effect only if enforcing EMM policies on Android devices is enabled in the Google Admin Console. Otherwise, the device state is ignored and all devices are allowed access to Google services. This is only supported for Google-managed users.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.deviceId - (Required) The ID of the device.
     * @param {string} apiParams.enterpriseId - (Required) The ID of the enterprise.
     * @param {string} apiParams.userId - (Required) The ID of the user.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.devices.setState = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/state', 'PUT', apiParams, clientConfig);

    /**
     * Uploads a report containing any changes in app states on the device since the last report was generated. You can call this method up to 3 times every 24 hours for a given device. If you exceed the quota, then the Google Play EMM API returns HTTP 429 Too Many Requests.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.deviceId - (Required) The ID of the device.
     * @param {string} apiParams.enterpriseId - (Required) The ID of the enterprise.
     * @param {string} apiParams.userId - (Required) The ID of the user.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.devices.forceReportUpload = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/forceReportUpload', 'POST', apiParams, clientConfig);

    this.enrollmentTokens = {};

    /**
     * Returns a token for device enrollment. The DPC can encode this token within the QR/NFC/zero-touch enrollment payload or fetch it before calling the on-device API to authenticate the user. The token can be generated for each device or reused across multiple devices.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.enterpriseId - (Required) Required. The ID of the enterprise.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.enrollmentTokens.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/enrollmentTokens', 'POST', apiParams, clientConfig);

    this.enterprises = {};

    /**
     * Looks up an enterprise by domain name. This is only supported for enterprises created via the Google-initiated creation flow. Lookup of the id is not needed for enterprises created via the EMM-initiated flow since the EMM learns the enterprise ID in the callback specified in the Enterprises.generateSignupUrl call.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.domain - (Required) Required. The exact primary domain name of the enterprise to look up.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.enterprises.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises', 'GET', apiParams, clientConfig);

    /**
     * Retrieves the name and domain of an enterprise.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.enterpriseId - (Required) The ID of the enterprise.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.enterprises.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}', 'GET', apiParams, clientConfig);

    /**
     * Enrolls an enterprise with the calling EMM.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.token - (Required) Required. The token provided by the enterprise to register the EMM.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.enterprises.enroll = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/enroll', 'POST', apiParams, clientConfig);

    /**
     * Sets the account that will be used to authenticate to the API as the enterprise.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.enterpriseId - (Required) The ID of the enterprise.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.enterprises.setAccount = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/account', 'PUT', apiParams, clientConfig);

    /**
     * Sends a test notification to validate the EMM integration with the Google Cloud Pub/Sub service for this enterprise.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.enterpriseId - (Required) The ID of the enterprise.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.enterprises.sendTestPushNotification = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/sendTestPushNotification', 'POST', apiParams, clientConfig);

    /**
     * Pulls and returns a notification set for the enterprises associated with the service account authenticated for the request. The notification set may be empty if no notification are pending. A notification set returned needs to be acknowledged within 20 seconds by calling Enterprises.AcknowledgeNotificationSet, unless the notification set is empty. Notifications that are not acknowledged within the 20 seconds will eventually be included again in the response to another PullNotificationSet request, and those that are never acknowledged will ultimately be deleted according to the Google Cloud Platform Pub/Sub system policy. Multiple requests might be performed concurrently to retrieve notifications, in which case the pending notifications (if any) will be split among each caller, if any are pending. If no notifications are present, an empty notification list is returned. Subsequent requests may return more notifications once they become available.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.requestMode - The request mode for pulling notifications. Specifying waitForNotifications will cause the request to block and wait until one or more notifications are present, or return an empty notification list if no notifications are present after some time. Specifying returnImmediately will cause the request to immediately return the pending notifications, or an empty list if no notifications are present. If omitted, defaults to waitForNotifications.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.enterprises.pullNotificationSet = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/pullNotificationSet', 'POST', apiParams, clientConfig);

    /**
     * Acknowledges notifications that were received from Enterprises.PullNotificationSet to prevent subsequent calls from returning the same notifications.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.notificationSetId - The notification set ID as returned by Enterprises.PullNotificationSet. This must be provided.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.enterprises.acknowledgeNotificationSet = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/acknowledgeNotificationSet', 'POST', apiParams, clientConfig);

    /**
     * Unenrolls an enterprise from the calling EMM.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.enterpriseId - (Required) The ID of the enterprise.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.enterprises.unenroll = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/unenroll', 'POST', apiParams, clientConfig);

    /**
     * Returns the store layout for the enterprise. If the store layout has not been set, returns "basic" as the store layout type and no homepage.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.enterpriseId - (Required) The ID of the enterprise.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.enterprises.getStoreLayout = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/storeLayout', 'GET', apiParams, clientConfig);

    /**
     * Sets the store layout for the enterprise. By default, storeLayoutType is set to "basic" and the basic store layout is enabled. The basic layout only contains apps approved by the admin, and that have been added to the available product set for a user (using the setAvailableProductSet call). Apps on the page are sorted in order of their product ID value. If you create a custom store layout (by setting storeLayoutType = "custom" and setting a homepage), the basic store layout is disabled.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.enterpriseId - (Required) The ID of the enterprise.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.enterprises.setStoreLayout = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/storeLayout', 'PUT', apiParams, clientConfig);

    /**
     * Generates a sign-up URL.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.adminEmail - Optional. Email address used to prefill the admin field of the enterprise signup form. This value is a hint only and can be altered by the user. If `allowedDomains` is non-empty then this must belong to one of the `allowedDomains`.
     * @param {string} apiParams.allowedDomains - Optional. A list of domains that are permitted for the admin email. The IT admin cannot enter an email address with a domain name that is not in this list. Subdomains of domains in this list are not allowed but can be allowed by adding a second entry which has `*.` prefixed to the domain name (e.g. *.example.com). If the field is not present or is an empty list then the IT admin is free to use any valid domain name. Personal email domains are always allowed, but will result in the creation of a managed Google Play Accounts enterprise.
     * @param {string} apiParams.callbackUrl - The callback URL to which the Admin will be redirected after successfully creating an enterprise. Before redirecting there the system will add a single query parameter to this URL named "enterpriseToken" which will contain an opaque token to be used for the CompleteSignup request. Beware that this means that the URL will be parsed, the parameter added and then a new URL formatted, i.e. there may be some minor formatting changes and, more importantly, the URL must be well-formed so that it can be parsed.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.enterprises.generateSignupUrl = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/signupUrl', 'POST', apiParams, clientConfig);

    /**
     * Completes the signup flow, by specifying the Completion token and Enterprise token. This request must not be called multiple times for a given Enterprise Token.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.completionToken - The Completion token initially returned by GenerateSignupUrl.
     * @param {string} apiParams.enterpriseToken - The Enterprise token appended to the Callback URL.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.enterprises.completeSignup = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/completeSignup', 'POST', apiParams, clientConfig);

    /**
     * Returns a service account and credentials. The service account can be bound to the enterprise by calling setAccount. The service account is unique to this enterprise and EMM, and will be deleted if the enterprise is unbound. The credentials contain private key data and are not stored server-side. This method can only be called after calling Enterprises.Enroll or Enterprises.CompleteSignup, and before Enterprises.SetAccount; at other times it will return an error. Subsequent calls after the first will generate a new, unique set of credentials, and invalidate the previously generated credentials. Once the service account is bound to the enterprise, it can be managed using the serviceAccountKeys resource. *Note:* After you create a key, you might need to wait for 60 seconds or more before you perform another operation with the key. If you try to perform an operation with the key immediately after you create the key, and you receive an error, you can retry the request with exponential backoff .
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.enterpriseId - (Required) The ID of the enterprise.
     * @param {string} apiParams.keyType - The type of credential to return with the service account. Required.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.enterprises.getServiceAccount = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/serviceAccount', 'GET', apiParams, clientConfig);

    /**
     * Returns a unique token to access an embeddable UI. To generate a web UI, pass the generated token into the managed Google Play javascript API. Each token may only be used to start one UI session. See the JavaScript API documentation for further information.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.enterpriseId - (Required) The ID of the enterprise.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.enterprises.createWebToken = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/createWebToken', 'POST', apiParams, clientConfig);

    /**
     * Generates an enterprise upgrade URL to upgrade an existing managed Google Play Accounts enterprise to a managed Google domain. See the guide to upgrading an enterprise for more details.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.adminEmail - Optional. Email address used to prefill the admin field of the enterprise signup form as part of the upgrade process. This value is a hint only and can be altered by the user. Personal email addresses are not allowed. If `allowedDomains` is non-empty then this must belong to one of the `allowedDomains`.
     * @param {string} apiParams.allowedDomains - Optional. A list of domains that are permitted for the admin email. The IT admin cannot enter an email address with a domain name that is not in this list. Subdomains of domains in this list are not allowed but can be allowed by adding a second entry which has `*.` prefixed to the domain name (e.g. *.example.com). If the field is not present or is an empty list then the IT admin is free to use any valid domain name. Personal email domains are not allowed.
     * @param {string} apiParams.enterpriseId - (Required) Required. The ID of the enterprise.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.enterprises.generateEnterpriseUpgradeUrl = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/generateEnterpriseUpgradeUrl', 'POST', apiParams, clientConfig);

    this.entitlements = {};

    /**
     * Lists all entitlements for the specified user. Only the ID is set. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.enterpriseId - (Required) The ID of the enterprise.
     * @param {string} apiParams.userId - (Required) The ID of the user.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.entitlements.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/entitlements', 'GET', apiParams, clientConfig);

    /**
     * Retrieves details of an entitlement. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.enterpriseId - (Required) The ID of the enterprise.
     * @param {string} apiParams.entitlementId - (Required) The ID of the entitlement (a product ID), e.g. "app:com.google.android.gm".
     * @param {string} apiParams.userId - (Required) The ID of the user.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.entitlements.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/entitlements/{entitlementId}', 'GET', apiParams, clientConfig);

    /**
     * Adds or updates an entitlement to an app for a user. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.enterpriseId - (Required) The ID of the enterprise.
     * @param {string} apiParams.entitlementId - (Required) The ID of the entitlement (a product ID), e.g. "app:com.google.android.gm".
     * @param {boolean} apiParams.install - Set to true to also install the product on all the user's devices where possible. Failure to install on one or more devices will not prevent this operation from returning successfully, as long as the entitlement was successfully assigned to the user.
     * @param {string} apiParams.userId - (Required) The ID of the user.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.entitlements.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/entitlements/{entitlementId}', 'PUT', apiParams, clientConfig);

    /**
     * Removes an entitlement to an app for a user. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.enterpriseId - (Required) The ID of the enterprise.
     * @param {string} apiParams.entitlementId - (Required) The ID of the entitlement (a product ID), e.g. "app:com.google.android.gm".
     * @param {string} apiParams.userId - (Required) The ID of the user.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.entitlements.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/entitlements/{entitlementId}', 'DELETE', apiParams, clientConfig);

    this.grouplicenseusers = {};

    /**
     * Retrieves the IDs of the users who have been granted entitlements under the license. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.enterpriseId - (Required) The ID of the enterprise.
     * @param {string} apiParams.groupLicenseId - (Required) The ID of the product the group license is for, e.g. "app:com.google.android.gm".
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.grouplicenseusers.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/groupLicenses/{groupLicenseId}/users', 'GET', apiParams, clientConfig);

    this.grouplicenses = {};

    /**
     * Retrieves IDs of all products for which the enterprise has a group license. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.enterpriseId - (Required) The ID of the enterprise.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.grouplicenses.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/groupLicenses', 'GET', apiParams, clientConfig);

    /**
     * Retrieves details of an enterprise's group license for a product. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.enterpriseId - (Required) The ID of the enterprise.
     * @param {string} apiParams.groupLicenseId - (Required) The ID of the product the group license is for, e.g. "app:com.google.android.gm".
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.grouplicenses.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/groupLicenses/{groupLicenseId}', 'GET', apiParams, clientConfig);

    this.installs = {};

    /**
     * Retrieves the details of all apps installed on the specified device.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.deviceId - (Required) The Android ID of the device.
     * @param {string} apiParams.enterpriseId - (Required) The ID of the enterprise.
     * @param {string} apiParams.userId - (Required) The ID of the user.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.installs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/installs', 'GET', apiParams, clientConfig);

    /**
     * Retrieves details of an installation of an app on a device.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.deviceId - (Required) The Android ID of the device.
     * @param {string} apiParams.enterpriseId - (Required) The ID of the enterprise.
     * @param {string} apiParams.installId - (Required) The ID of the product represented by the install, e.g. "app:com.google.android.gm".
     * @param {string} apiParams.userId - (Required) The ID of the user.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.installs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/installs/{installId}', 'GET', apiParams, clientConfig);

    /**
     * Requests to install the latest version of an app to a device. If the app is already installed, then it is updated to the latest version if necessary.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.deviceId - (Required) The Android ID of the device.
     * @param {string} apiParams.enterpriseId - (Required) The ID of the enterprise.
     * @param {string} apiParams.installId - (Required) The ID of the product represented by the install, e.g. "app:com.google.android.gm".
     * @param {string} apiParams.userId - (Required) The ID of the user.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.installs.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/installs/{installId}', 'PUT', apiParams, clientConfig);

    /**
     * Requests to remove an app from a device. A call to get or list will still show the app as installed on the device until it is actually removed. A successful response indicates that a removal request has been sent to the device. The call will be considered successful even if the app is not present on the device (e.g. it was never installed, or was removed by the user).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.deviceId - (Required) The Android ID of the device.
     * @param {string} apiParams.enterpriseId - (Required) The ID of the enterprise.
     * @param {string} apiParams.installId - (Required) The ID of the product represented by the install, e.g. "app:com.google.android.gm".
     * @param {string} apiParams.userId - (Required) The ID of the user.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.installs.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/installs/{installId}', 'DELETE', apiParams, clientConfig);

    this.managedconfigurationsfordevice = {};

    /**
     * Lists all the per-device managed configurations for the specified device. Only the ID is set.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.deviceId - (Required) The Android ID of the device.
     * @param {string} apiParams.enterpriseId - (Required) The ID of the enterprise.
     * @param {string} apiParams.userId - (Required) The ID of the user.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.managedconfigurationsfordevice.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/managedConfigurationsForDevice', 'GET', apiParams, clientConfig);

    /**
     * Retrieves details of a per-device managed configuration.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.deviceId - (Required) The Android ID of the device.
     * @param {string} apiParams.enterpriseId - (Required) The ID of the enterprise.
     * @param {string} apiParams.managedConfigurationForDeviceId - (Required) The ID of the managed configuration (a product ID), e.g. "app:com.google.android.gm".
     * @param {string} apiParams.userId - (Required) The ID of the user.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.managedconfigurationsfordevice.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/managedConfigurationsForDevice/{managedConfigurationForDeviceId}', 'GET', apiParams, clientConfig);

    /**
     * Adds or updates a per-device managed configuration for an app for the specified device.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.deviceId - (Required) The Android ID of the device.
     * @param {string} apiParams.enterpriseId - (Required) The ID of the enterprise.
     * @param {string} apiParams.managedConfigurationForDeviceId - (Required) The ID of the managed configuration (a product ID), e.g. "app:com.google.android.gm".
     * @param {string} apiParams.userId - (Required) The ID of the user.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.managedconfigurationsfordevice.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/managedConfigurationsForDevice/{managedConfigurationForDeviceId}', 'PUT', apiParams, clientConfig);

    /**
     * Removes a per-device managed configuration for an app for the specified device.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.deviceId - (Required) The Android ID of the device.
     * @param {string} apiParams.enterpriseId - (Required) The ID of the enterprise.
     * @param {string} apiParams.managedConfigurationForDeviceId - (Required) The ID of the managed configuration (a product ID), e.g. "app:com.google.android.gm".
     * @param {string} apiParams.userId - (Required) The ID of the user.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.managedconfigurationsfordevice.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/devices/{deviceId}/managedConfigurationsForDevice/{managedConfigurationForDeviceId}', 'DELETE', apiParams, clientConfig);

    this.managedconfigurationsforuser = {};

    /**
     * Lists all the per-user managed configurations for the specified user. Only the ID is set.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.enterpriseId - (Required) The ID of the enterprise.
     * @param {string} apiParams.userId - (Required) The ID of the user.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.managedconfigurationsforuser.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/managedConfigurationsForUser', 'GET', apiParams, clientConfig);

    /**
     * Retrieves details of a per-user managed configuration for an app for the specified user.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.enterpriseId - (Required) The ID of the enterprise.
     * @param {string} apiParams.managedConfigurationForUserId - (Required) The ID of the managed configuration (a product ID), e.g. "app:com.google.android.gm".
     * @param {string} apiParams.userId - (Required) The ID of the user.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.managedconfigurationsforuser.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/managedConfigurationsForUser/{managedConfigurationForUserId}', 'GET', apiParams, clientConfig);

    /**
     * Adds or updates the managed configuration settings for an app for the specified user. If you support the Managed configurations iframe, you can apply managed configurations to a user by specifying an mcmId and its associated configuration variables (if any) in the request. Alternatively, all EMMs can apply managed configurations by passing a list of managed properties.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.enterpriseId - (Required) The ID of the enterprise.
     * @param {string} apiParams.managedConfigurationForUserId - (Required) The ID of the managed configuration (a product ID), e.g. "app:com.google.android.gm".
     * @param {string} apiParams.userId - (Required) The ID of the user.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.managedconfigurationsforuser.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/managedConfigurationsForUser/{managedConfigurationForUserId}', 'PUT', apiParams, clientConfig);

    /**
     * Removes a per-user managed configuration for an app for the specified user.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.enterpriseId - (Required) The ID of the enterprise.
     * @param {string} apiParams.managedConfigurationForUserId - (Required) The ID of the managed configuration (a product ID), e.g. "app:com.google.android.gm".
     * @param {string} apiParams.userId - (Required) The ID of the user.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.managedconfigurationsforuser.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/managedConfigurationsForUser/{managedConfigurationForUserId}', 'DELETE', apiParams, clientConfig);

    this.managedconfigurationssettings = {};

    /**
     * Lists all the managed configurations settings for the specified app.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.enterpriseId - (Required) The ID of the enterprise.
     * @param {string} apiParams.productId - (Required) The ID of the product for which the managed configurations settings applies to.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.managedconfigurationssettings.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/products/{productId}/managedConfigurationsSettings', 'GET', apiParams, clientConfig);

    this.permissions = {};

    /**
     * Retrieves details of an Android app permission for display to an enterprise admin.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.language - The BCP47 tag for the user's preferred language (e.g. "en-US", "de")
     * @param {string} apiParams.permissionId - (Required) The ID of the permission.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.permissions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/permissions/{permissionId}', 'GET', apiParams, clientConfig);

    this.products = {};

    /**
     * Retrieves details of a product for display to an enterprise admin.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.enterpriseId - (Required) The ID of the enterprise.
     * @param {string} apiParams.language - The BCP47 tag for the user's preferred language (e.g. "en-US", "de").
     * @param {string} apiParams.productId - (Required) The ID of the product, e.g. "app:com.google.android.gm".
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.products.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/products/{productId}', 'GET', apiParams, clientConfig);

    /**
     * Finds approved products that match a query, or all approved products if there is no query. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.approved - Specifies whether to search among all products (false) or among only products that have been approved (true). Only "true" is supported, and should be specified.
     * @param {string} apiParams.enterpriseId - (Required) The ID of the enterprise.
     * @param {string} apiParams.language - The BCP47 tag for the user's preferred language (e.g. "en-US", "de"). Results are returned in the language best matching the preferred language.
     * @param {integer} apiParams.maxResults - Defines how many results the list operation should return. The default number depends on the resource collection.
     * @param {string} apiParams.query - The search query as typed in the Google Play store search box. If omitted, all approved apps will be returned (using the pagination parameters), including apps that are not available in the store (e.g. unpublished apps).
     * @param {string} apiParams.token - Defines the token of the page to return, usually taken from TokenPagination. This can only be used if token paging is enabled.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.products.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/products', 'GET', apiParams, clientConfig);

    /**
     * Retrieves the Android app permissions required by this app.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.enterpriseId - (Required) The ID of the enterprise.
     * @param {string} apiParams.productId - (Required) The ID of the product.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.products.getPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/products/{productId}/permissions', 'GET', apiParams, clientConfig);

    /**
     * Generates a URL that can be rendered in an iframe to display the permissions (if any) of a product. An enterprise admin must view these permissions and accept them on behalf of their organization in order to approve that product. Admins should accept the displayed permissions by interacting with a separate UI element in the EMM console, which in turn should trigger the use of this URL as the approvalUrlInfo.approvalUrl property in a Products.approve call to approve the product. This URL can only be used to display permissions for up to 1 day. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.enterpriseId - (Required) The ID of the enterprise.
     * @param {string} apiParams.languageCode - The BCP 47 language code used for permission names and descriptions in the returned iframe, for instance "en-US".
     * @param {string} apiParams.productId - (Required) The ID of the product.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.products.generateApprovalUrl = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/products/{productId}/generateApprovalUrl', 'POST', apiParams, clientConfig);

    /**
     * Approves the specified product and the relevant app permissions, if any. The maximum number of products that you can approve per enterprise customer is 1,000. To learn how to use managed Google Play to design and create a store layout to display approved products to your users, see Store Layout Design. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.enterpriseId - (Required) The ID of the enterprise.
     * @param {string} apiParams.productId - (Required) The ID of the product.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.products.approve = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/products/{productId}/approve', 'POST', apiParams, clientConfig);

    /**
     * Unapproves the specified product (and the relevant app permissions, if any) **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.enterpriseId - (Required) The ID of the enterprise.
     * @param {string} apiParams.productId - (Required) The ID of the product.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.products.unapprove = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/products/{productId}/unapprove', 'POST', apiParams, clientConfig);

    /**
     * Retrieves the schema that defines the configurable properties for this product. All products have a schema, but this schema may be empty if no managed configurations have been defined. This schema can be used to populate a UI that allows an admin to configure the product. To apply a managed configuration based on the schema obtained using this API, see Managed Configurations through Play.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.enterpriseId - (Required) The ID of the enterprise.
     * @param {string} apiParams.language - The BCP47 tag for the user's preferred language (e.g. "en-US", "de").
     * @param {string} apiParams.productId - (Required) The ID of the product.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.products.getAppRestrictionsSchema = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/products/{productId}/appRestrictionsSchema', 'GET', apiParams, clientConfig);

    this.serviceaccountkeys = {};

    /**
     * Generates new credentials for the service account associated with this enterprise. The calling service account must have been retrieved by calling Enterprises.GetServiceAccount and must have been set as the enterprise service account by calling Enterprises.SetAccount. Only the type of the key should be populated in the resource to be inserted.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.enterpriseId - (Required) The ID of the enterprise.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.serviceaccountkeys.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/serviceAccountKeys', 'POST', apiParams, clientConfig);

    /**
     * Lists all active credentials for the service account associated with this enterprise. Only the ID and key type are returned. The calling service account must have been retrieved by calling Enterprises.GetServiceAccount and must have been set as the enterprise service account by calling Enterprises.SetAccount.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.enterpriseId - (Required) The ID of the enterprise.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.serviceaccountkeys.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/serviceAccountKeys', 'GET', apiParams, clientConfig);

    /**
     * Removes and invalidates the specified credentials for the service account associated with this enterprise. The calling service account must have been retrieved by calling Enterprises.GetServiceAccount and must have been set as the enterprise service account by calling Enterprises.SetAccount.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.enterpriseId - (Required) The ID of the enterprise.
     * @param {string} apiParams.keyId - (Required) The ID of the key.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.serviceaccountkeys.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/serviceAccountKeys/{keyId}', 'DELETE', apiParams, clientConfig);

    this.storelayoutclusters = {};

    /**
     * Retrieves the details of all clusters on the specified page.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.enterpriseId - (Required) The ID of the enterprise.
     * @param {string} apiParams.pageId - (Required) The ID of the page.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.storelayoutclusters.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages/{pageId}/clusters', 'GET', apiParams, clientConfig);

    /**
     * Inserts a new cluster in a page.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.enterpriseId - (Required) The ID of the enterprise.
     * @param {string} apiParams.pageId - (Required) The ID of the page.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.storelayoutclusters.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages/{pageId}/clusters', 'POST', apiParams, clientConfig);

    /**
     * Retrieves details of a cluster.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.clusterId - (Required) The ID of the cluster.
     * @param {string} apiParams.enterpriseId - (Required) The ID of the enterprise.
     * @param {string} apiParams.pageId - (Required) The ID of the page.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.storelayoutclusters.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages/{pageId}/clusters/{clusterId}', 'GET', apiParams, clientConfig);

    /**
     * Updates a cluster.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.clusterId - (Required) The ID of the cluster.
     * @param {string} apiParams.enterpriseId - (Required) The ID of the enterprise.
     * @param {string} apiParams.pageId - (Required) The ID of the page.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.storelayoutclusters.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages/{pageId}/clusters/{clusterId}', 'PUT', apiParams, clientConfig);

    /**
     * Deletes a cluster.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.clusterId - (Required) The ID of the cluster.
     * @param {string} apiParams.enterpriseId - (Required) The ID of the enterprise.
     * @param {string} apiParams.pageId - (Required) The ID of the page.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.storelayoutclusters.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages/{pageId}/clusters/{clusterId}', 'DELETE', apiParams, clientConfig);

    this.storelayoutpages = {};

    /**
     * Retrieves the details of all pages in the store.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.enterpriseId - (Required) The ID of the enterprise.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.storelayoutpages.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages', 'GET', apiParams, clientConfig);

    /**
     * Inserts a new store page.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.enterpriseId - (Required) The ID of the enterprise.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.storelayoutpages.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages', 'POST', apiParams, clientConfig);

    /**
     * Retrieves details of a store page.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.enterpriseId - (Required) The ID of the enterprise.
     * @param {string} apiParams.pageId - (Required) The ID of the page.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.storelayoutpages.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages/{pageId}', 'GET', apiParams, clientConfig);

    /**
     * Updates the content of a store page.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.enterpriseId - (Required) The ID of the enterprise.
     * @param {string} apiParams.pageId - (Required) The ID of the page.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.storelayoutpages.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages/{pageId}', 'PUT', apiParams, clientConfig);

    /**
     * Deletes a store page.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.enterpriseId - (Required) The ID of the enterprise.
     * @param {string} apiParams.pageId - (Required) The ID of the page.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.storelayoutpages.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/storeLayout/pages/{pageId}', 'DELETE', apiParams, clientConfig);

    this.users = {};

    /**
     * Creates a new EMM-managed user. The Users resource passed in the body of the request should include an accountIdentifier and an accountType. If a corresponding user already exists with the same account identifier, the user will be updated with the resource. In this case only the displayName field can be changed.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.enterpriseId - (Required) The ID of the enterprise.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users', 'POST', apiParams, clientConfig);

    /**
     * Updates the details of an EMM-managed user. Can be used with EMM-managed users only (not Google managed users). Pass the new details in the Users resource in the request body. Only the displayName field can be changed. Other fields must either be unset or have the currently active value.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.enterpriseId - (Required) The ID of the enterprise.
     * @param {string} apiParams.userId - (Required) The ID of the user.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}', 'PUT', apiParams, clientConfig);

    /**
     * Looks up a user by primary email address. This is only supported for Google-managed users. Lookup of the id is not needed for EMM-managed users because the id is already returned in the result of the Users.insert call.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.email - (Required) Required. The exact primary email address of the user to look up.
     * @param {string} apiParams.enterpriseId - (Required) The ID of the enterprise.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users', 'GET', apiParams, clientConfig);

    /**
     * Retrieves a user's details.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.enterpriseId - (Required) The ID of the enterprise.
     * @param {string} apiParams.userId - (Required) The ID of the user.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}', 'GET', apiParams, clientConfig);

    /**
     * Deleted an EMM-managed user.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.enterpriseId - (Required) The ID of the enterprise.
     * @param {string} apiParams.userId - (Required) The ID of the user.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}', 'DELETE', apiParams, clientConfig);

    /**
     * Generates an authentication token which the device policy client can use to provision the given EMM-managed user account on a device. The generated token is single-use and expires after a few minutes. You can provision a maximum of 10 devices per user. This call only works with EMM-managed accounts.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.enterpriseId - (Required) The ID of the enterprise.
     * @param {string} apiParams.userId - (Required) The ID of the user.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.generateAuthenticationToken = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/authenticationToken', 'POST', apiParams, clientConfig);

    /**
     * Retrieves the set of products a user is entitled to access. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.enterpriseId - (Required) The ID of the enterprise.
     * @param {string} apiParams.userId - (Required) The ID of the user.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.getAvailableProductSet = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/availableProductSet', 'GET', apiParams, clientConfig);

    /**
     * Revokes access to all devices currently provisioned to the user. The user will no longer be able to use the managed Play store on any of their managed devices. This call only works with EMM-managed accounts.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.enterpriseId - (Required) The ID of the enterprise.
     * @param {string} apiParams.userId - (Required) The ID of the user.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.revokeDeviceAccess = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/deviceAccess', 'DELETE', apiParams, clientConfig);

    /**
     * Modifies the set of products that a user is entitled to access (referred to as *whitelisted* products). Only products that are approved or products that were previously approved (products with revoked approval) can be whitelisted. **Note:** This item has been deprecated. New integrations cannot use this method and can refer to our new recommendations.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.enterpriseId - (Required) The ID of the enterprise.
     * @param {string} apiParams.userId - (Required) The ID of the user.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.setAvailableProductSet = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/users/{userId}/availableProductSet', 'PUT', apiParams, clientConfig);

    this.webapps = {};

    /**
     * Gets an existing web app.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.enterpriseId - (Required) The ID of the enterprise.
     * @param {string} apiParams.webAppId - (Required) The ID of the web app.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.webapps.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/webApps/{webAppId}', 'GET', apiParams, clientConfig);

    /**
     * Retrieves the details of all web apps for a given enterprise.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.enterpriseId - (Required) The ID of the enterprise.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.webapps.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/webApps', 'GET', apiParams, clientConfig);

    /**
     * Creates a new web app for the enterprise.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.enterpriseId - (Required) The ID of the enterprise.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.webapps.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/webApps', 'POST', apiParams, clientConfig);

    /**
     * Updates an existing web app.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.enterpriseId - (Required) The ID of the enterprise.
     * @param {string} apiParams.webAppId - (Required) The ID of the web app.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.webapps.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/webApps/{webAppId}', 'PUT', apiParams, clientConfig);

    /**
     * Deletes an existing web app.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.enterpriseId - (Required) The ID of the enterprise.
     * @param {string} apiParams.webAppId - (Required) The ID of the web app.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.webapps.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('androidenterprise/v1/enterprises/{enterpriseId}/webApps/{webAppId}', 'DELETE', apiParams, clientConfig);
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
