
/**
 * Google Apps Script client library for the Android Management API
 * Documentation URL: https://developers.google.com/android/management
 * @class
 */
class Androidmanagement {
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
    this._rootUrl = 'https://androidmanagement.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.signupUrls = {};

    /**
     * Creates an enterprise signup URL.
     * @param {string} params.adminEmail - Optional. Email address used to prefill the admin field of the enterprise signup form. This value is a hint only and can be altered by the user. If allowedDomains is non-empty then this must belong to one of the allowedDomains.
     * @param {string} params.allowedDomains - Optional. A list of domains that are permitted for the admin email. The IT admin cannot enter an email address with a domain name that is not in this list. Subdomains of domains in this list are not allowed but can be allowed by adding a second entry which has *. prefixed to the domain name (e.g. *.example.com). If the field is not present or is an empty list then the IT admin is free to use any valid domain name. Personal email domains are always allowed, but will result in the creation of a managed Google Play Accounts enterprise.
     * @param {string} params.callbackUrl - The callback URL that the admin will be redirected to after successfully creating an enterprise. Before redirecting there the system will add a query parameter to this URL named enterpriseToken which will contain an opaque token to be used for the create enterprise request. The URL will be parsed then reformatted in order to add the enterpriseToken parameter, so there may be some minor formatting changes.
     * @param {string} params.projectId - The ID of the Google Cloud Platform project which will own the enterprise.
     * @return {object} The API response object.
     */
    this.signupUrls.create = (params) => this._makeRequest('v1/signupUrls', 'POST', params);

    this.enterprises = {};

    /**
     * Creates an enterprise. This is the last step in the enterprise signup flow. See also: SigninDetail
     * @param {boolean} params.agreementAccepted - Whether the enterprise admin has seen and agreed to the managed Google Play Agreement (https://www.android.com/enterprise/terms/). Do not set this field for any customer-managed enterprise (https://developers.google.com/android/management/create-enterprise#customer-managed_enterprises). Set this to field to true for all EMM-managed enterprises (https://developers.google.com/android/management/create-enterprise#emm-managed_enterprises).
     * @param {string} params.enterpriseToken - The enterprise token appended to the callback URL. Set this when creating a customer-managed enterprise (https://developers.google.com/android/management/create-enterprise#customer-managed_enterprises) and not when creating a deprecated EMM-managed enterprise (https://developers.google.com/android/management/create-enterprise#emm-managed_enterprises).
     * @param {string} params.projectId - The ID of the Google Cloud Platform project which will own the enterprise.
     * @param {string} params.signupUrlName - The name of the SignupUrl used to sign up for the enterprise. Set this when creating a customer-managed enterprise (https://developers.google.com/android/management/create-enterprise#customer-managed_enterprises) and not when creating a deprecated EMM-managed enterprise (https://developers.google.com/android/management/create-enterprise#emm-managed_enterprises).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.enterprises.create = (params) => this._makeRequest('v1/enterprises', 'POST', params);

    /**
     * Permanently deletes an enterprise and all accounts and data associated with it. Warning: this will result in a cascaded deletion of all AM API devices associated with the deleted enterprise. Only available for EMM-managed enterprises.
     * @param {string} params.name - (Required) The name of the enterprise in the form enterprises/{enterpriseId}.
     * @return {object} The API response object.
     */
    this.enterprises.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Gets an enterprise.
     * @param {string} params.name - (Required) The name of the enterprise in the form enterprises/{enterpriseId}.
     * @return {object} The API response object.
     */
    this.enterprises.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Updates an enterprise. See also: SigninDetail
     * @param {string} params.name - (Required) The name of the enterprise in the form enterprises/{enterpriseId}.
     * @param {string} params.updateMask - The field mask indicating the fields to update. If not set, all modifiable fields will be modified.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.enterprises.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Lists EMM-managed enterprises. Only BASIC fields are returned.
     * @param {integer} params.pageSize - The requested page size. The actual page size may be fixed to a min or max value.
     * @param {string} params.pageToken - A token identifying a page of results returned by the server.
     * @param {string} params.projectId - Required. The Cloud project ID of the EMM managing the enterprises.
     * @param {string} params.view - Specifies which Enterprise fields to return. This method only supports BASIC.
     * @return {object} The API response object.
     */
    this.enterprises.list = (params) => this._makeRequest('v1/enterprises', 'GET', params);

    /**
     * Generates an enterprise upgrade URL to upgrade an existing managed Google Play Accounts enterprise to a managed Google domain. See the guide (https://developers.google.com/android/management/upgrade-an-enterprise) for more details.
     * @param {string} params.name - (Required) Required. The name of the enterprise to be upgraded in the form enterprises/{enterpriseId}.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.enterprises.generateEnterpriseUpgradeUrl = (params) => this._makeRequest('v1/{+name}:generateEnterpriseUpgradeUrl', 'POST', params);

    this.enterprises.enrollmentTokens = {};

    /**
     * Creates an enrollment token for a given enterprise. It's up to the caller's responsibility to manage the lifecycle of newly created tokens and deleting them when they're not intended to be used anymore.
     * @param {string} params.parent - (Required) The name of the enterprise in the form enterprises/{enterpriseId}.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.enterprises.enrollmentTokens.create = (params) => this._makeRequest('v1/{+parent}/enrollmentTokens', 'POST', params);

    /**
     * Deletes an enrollment token. This operation invalidates the token, preventing its future use.
     * @param {string} params.name - (Required) The name of the enrollment token in the form enterprises/{enterpriseId}/enrollmentTokens/{enrollmentTokenId}.
     * @return {object} The API response object.
     */
    this.enterprises.enrollmentTokens.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Gets an active, unexpired enrollment token. A partial view of the enrollment token is returned. Only the following fields are populated: name, expirationTimestamp, allowPersonalUsage, value, qrCode. This method is meant to help manage active enrollment tokens lifecycle. For security reasons, it's recommended to delete active enrollment tokens as soon as they're not intended to be used anymore.
     * @param {string} params.name - (Required) Required. The name of the enrollment token in the form enterprises/{enterpriseId}/enrollmentTokens/{enrollmentTokenId}.
     * @return {object} The API response object.
     */
    this.enterprises.enrollmentTokens.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists active, unexpired enrollment tokens for a given enterprise. The list items contain only a partial view of EnrollmentToken object. Only the following fields are populated: name, expirationTimestamp, allowPersonalUsage, value, qrCode. This method is meant to help manage active enrollment tokens lifecycle. For security reasons, it's recommended to delete active enrollment tokens as soon as they're not intended to be used anymore.
     * @param {integer} params.pageSize - The requested page size. The service may return fewer than this value. If unspecified, at most 10 items will be returned. The maximum value is 100; values above 100 will be coerced to 100.
     * @param {string} params.pageToken - A token identifying a page of results returned by the server.
     * @param {string} params.parent - (Required) Required. The name of the enterprise in the form enterprises/{enterpriseId}.
     * @return {object} The API response object.
     */
    this.enterprises.enrollmentTokens.list = (params) => this._makeRequest('v1/{+parent}/enrollmentTokens', 'GET', params);

    this.enterprises.webTokens = {};

    /**
     * Creates a web token to access an embeddable managed Google Play web UI for a given enterprise.
     * @param {string} params.parent - (Required) The name of the enterprise in the form enterprises/{enterpriseId}.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.enterprises.webTokens.create = (params) => this._makeRequest('v1/{+parent}/webTokens', 'POST', params);

    this.enterprises.devices = {};

    /**
     * Gets a device. Deleted devices will respond with a 404 error.
     * @param {string} params.name - (Required) The name of the device in the form enterprises/{enterpriseId}/devices/{deviceId}.
     * @return {object} The API response object.
     */
    this.enterprises.devices.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists devices for a given enterprise. Deleted devices are not returned in the response.
     * @param {integer} params.pageSize - The requested page size. If unspecified, at most 10 devices will be returned. The maximum value is 100; values above 100 will be coerced to 100. The limits can change over time.
     * @param {string} params.pageToken - A token identifying a page of results returned by the server.
     * @param {string} params.parent - (Required) The name of the enterprise in the form enterprises/{enterpriseId}.
     * @return {object} The API response object.
     */
    this.enterprises.devices.list = (params) => this._makeRequest('v1/{+parent}/devices', 'GET', params);

    /**
     * Updates a device.
     * @param {string} params.name - (Required) The name of the device in the form enterprises/{enterpriseId}/devices/{deviceId}.
     * @param {string} params.updateMask - The field mask indicating the fields to update. If not set, all modifiable fields will be modified.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.enterprises.devices.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a device. This operation attempts to wipe the device but this is not guaranteed to succeed if the device is offline for an extended period. Deleted devices do not show up in enterprises.devices.list calls and a 404 is returned from enterprises.devices.get.
     * @param {string} params.name - (Required) The name of the device in the form enterprises/{enterpriseId}/devices/{deviceId}.
     * @param {string} params.wipeDataFlags - Optional flags that control the device wiping behavior.
     * @param {string} params.wipeReasonMessage - Optional. A short message displayed to the user before wiping the work profile on personal devices. This has no effect on company owned devices. The maximum message length is 200 characters.
     * @return {object} The API response object.
     */
    this.enterprises.devices.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Issues a command to a device. The Operation resource returned contains a Command in its metadata field. Use the get operation method to get the status of the command.
     * @param {string} params.name - (Required) The name of the device in the form enterprises/{enterpriseId}/devices/{deviceId}.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.enterprises.devices.issueCommand = (params) => this._makeRequest('v1/{+name}:issueCommand', 'POST', params);

    this.enterprises.devices.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.enterprises.devices.operations.list = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.enterprises.devices.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @return {object} The API response object.
     */
    this.enterprises.devices.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);

    this.enterprises.policies = {};

    /**
     * Gets a policy.
     * @param {string} params.name - (Required) The name of the policy in the form enterprises/{enterpriseId}/policies/{policyId}.
     * @return {object} The API response object.
     */
    this.enterprises.policies.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists policies for a given enterprise.
     * @param {integer} params.pageSize - The requested page size. The actual page size may be fixed to a min or max value.
     * @param {string} params.pageToken - A token identifying a page of results returned by the server.
     * @param {string} params.parent - (Required) The name of the enterprise in the form enterprises/{enterpriseId}.
     * @return {object} The API response object.
     */
    this.enterprises.policies.list = (params) => this._makeRequest('v1/{+parent}/policies', 'GET', params);

    /**
     * Updates or creates a policy.
     * @param {string} params.name - (Required) The name of the policy in the form enterprises/{enterpriseId}/policies/{policyId}.
     * @param {string} params.updateMask - The field mask indicating the fields to update. If not set, all modifiable fields will be modified.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.enterprises.policies.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a policy. This operation is only permitted if no devices are currently referencing the policy.
     * @param {string} params.name - (Required) The name of the policy in the form enterprises/{enterpriseId}/policies/{policyId}.
     * @return {object} The API response object.
     */
    this.enterprises.policies.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Updates or creates applications in a policy.
     * @param {string} params.name - (Required) Required. The name of the Policy containing the ApplicationPolicy objects to be updated, in the form enterprises/{enterpriseId}/policies/{policyId}.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.enterprises.policies.modifyPolicyApplications = (params) => this._makeRequest('v1/{+name}:modifyPolicyApplications', 'POST', params);

    /**
     * Removes applications in a policy.
     * @param {string} params.name - (Required) Required. The name of the policy containing the ApplicationPolicy objects to be removed, in the form enterprises/{enterpriseId}/policies/{policyId}.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.enterprises.policies.removePolicyApplications = (params) => this._makeRequest('v1/{+name}:removePolicyApplications', 'POST', params);

    this.enterprises.applications = {};

    /**
     * Gets info about an application.
     * @param {string} params.languageCode - The preferred language for localized application info, as a BCP47 tag (e.g. "en-US", "de"). If not specified the default language of the application will be used.
     * @param {string} params.name - (Required) The name of the application in the form enterprises/{enterpriseId}/applications/{package_name}.
     * @return {object} The API response object.
     */
    this.enterprises.applications.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.enterprises.webApps = {};

    /**
     * Creates a web app.
     * @param {string} params.parent - (Required) The name of the enterprise in the form enterprises/{enterpriseId}.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.enterprises.webApps.create = (params) => this._makeRequest('v1/{+parent}/webApps', 'POST', params);

    /**
     * Gets a web app.
     * @param {string} params.name - (Required) The name of the web app in the form enterprises/{enterpriseId}/webApps/{packageName}.
     * @return {object} The API response object.
     */
    this.enterprises.webApps.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists web apps for a given enterprise.
     * @param {integer} params.pageSize - The requested page size. This is a hint and the actual page size in the response may be different.
     * @param {string} params.pageToken - A token identifying a page of results returned by the server.
     * @param {string} params.parent - (Required) The name of the enterprise in the form enterprises/{enterpriseId}.
     * @return {object} The API response object.
     */
    this.enterprises.webApps.list = (params) => this._makeRequest('v1/{+parent}/webApps', 'GET', params);

    /**
     * Updates a web app.
     * @param {string} params.name - (Required) The name of the web app in the form enterprises/{enterpriseId}/webApps/{packageName}.
     * @param {string} params.updateMask - The field mask indicating the fields to update. If not set, all modifiable fields will be modified.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.enterprises.webApps.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a web app.
     * @param {string} params.name - (Required) The name of the web app in the form enterprises/{enterpriseId}/webApps/{packageName}.
     * @return {object} The API response object.
     */
    this.enterprises.webApps.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.enterprises.migrationTokens = {};

    /**
     * Creates a migration token, to migrate an existing device from being managed by the EMM's Device Policy Controller (DPC) to being managed by the Android Management API. See the guide (https://developers.google.com/android/management/dpc-migration) for more details.
     * @param {string} params.parent - (Required) Required. The enterprise in which this migration token is created. This must be the same enterprise which already manages the device in the Play EMM API. Format: enterprises/{enterprise}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.enterprises.migrationTokens.create = (params) => this._makeRequest('v1/{+parent}/migrationTokens', 'POST', params);

    /**
     * Gets a migration token.
     * @param {string} params.name - (Required) Required. The name of the migration token to retrieve. Format: enterprises/{enterprise}/migrationTokens/{migration_token}
     * @return {object} The API response object.
     */
    this.enterprises.migrationTokens.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists migration tokens.
     * @param {integer} params.pageSize - The maximum number of migration tokens to return. Fewer migration tokens may be returned. If unspecified, at most 100 migration tokens will be returned. The maximum value is 100; values above 100 will be coerced to 100.
     * @param {string} params.pageToken - A page token, received from a previous ListMigrationTokens call. Provide this to retrieve the subsequent page.When paginating, all other parameters provided to ListMigrationTokens must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The enterprise which the migration tokens belong to. Format: enterprises/{enterprise}
     * @return {object} The API response object.
     */
    this.enterprises.migrationTokens.list = (params) => this._makeRequest('v1/{+parent}/migrationTokens', 'GET', params);

    this.provisioningInfo = {};

    /**
     * Get the device provisioning information by the identifier provided in the sign-in url.
     * @param {string} params.name - (Required) Required. The identifier that Android Device Policy passes to the 3P sign-in page in the form of provisioningInfo/{provisioning_info}.
     * @return {object} The API response object.
     */
    this.provisioningInfo.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
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
