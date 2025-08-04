
/**
 * Google Apps Script client library for the My Business Account Management API
 * Documentation URL: https://developers.google.com/my-business/
 * @class
 */
class Mybusinessaccountmanagement {
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
    this._rootUrl = 'https://mybusinessaccountmanagement.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.locations = {};

    /**
     * Moves a location from an account that the user owns to another account that the same user administers. The user must be an owner of the account the location is currently associated with and must also be at least a manager of the destination account.
     * @param {string} params.name - (Required) Required. The name of the location to transfer. `locations/{location_id}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.locations.transfer = (params) => this._makeRequest('v1/{+name}:transfer', 'POST', params);

    this.locations.admins = {};

    /**
     * Lists all of the admins for the specified location.
     * @param {string} params.parent - (Required) Required. The name of the location to list admins of. `locations/{location_id}/admins`.
     * @return {object} The API response object.
     */
    this.locations.admins.list = (params) => this._makeRequest('v1/{+parent}/admins', 'GET', params);

    /**
     * Invites the specified user to become an administrator for the specified location. The invitee must accept the invitation in order to be granted access to the location. See AcceptInvitation to programmatically accept an invitation.
     * @param {string} params.parent - (Required) Required. The resource name of the location this admin is created for. `locations/{location_id}/admins`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.locations.admins.create = (params) => this._makeRequest('v1/{+parent}/admins', 'POST', params);

    /**
     * Removes the specified admin as a manager of the specified location.
     * @param {string} params.name - (Required) Required. The resource name of the admin to remove from the location.
     * @return {object} The API response object.
     */
    this.locations.admins.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Updates the Admin for the specified location. Only the AdminRole of the Admin can be updated.
     * @param {string} params.name - (Required) Immutable. The resource name. For account admins, this is in the form: `accounts/{account_id}/admins/{admin_id}` For location admins, this is in the form: `locations/{location_id}/admins/{admin_id}` This field will be ignored if set during admin creation.
     * @param {string} params.updateMask - Required. The specific fields that should be updated. The only editable field is role.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.locations.admins.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.accounts = {};

    /**
     * Lists all of the accounts for the authenticated user. This includes all accounts that the user owns, as well as any accounts for which the user has management rights.
     * @param {string} params.filter - Optional. A filter constraining the accounts to return. The response includes only entries that match the filter. If `filter` is empty, then no constraints are applied and all accounts (paginated) are retrieved for the requested account. For example, a request with the filter `type=USER_GROUP` will only return user groups. The `type` field is the only supported filter.
     * @param {integer} params.pageSize - Optional. How many accounts to fetch per page. The default and maximum is 20.
     * @param {string} params.pageToken - Optional. If specified, the next page of accounts is retrieved. The `pageToken` is returned when a call to `accounts.list` returns more results than can fit into the requested page size.
     * @param {string} params.parentAccount - Optional. The resource name of the account for which the list of directly accessible accounts is to be retrieved. This only makes sense for Organizations and User Groups. If empty, will return `ListAccounts` for the authenticated user. `accounts/{account_id}`.
     * @return {object} The API response object.
     */
    this.accounts.list = (params) => this._makeRequest('v1/accounts', 'GET', params);

    /**
     * Gets the specified account. Returns `NOT_FOUND` if the account does not exist or if the caller does not have access rights to it.
     * @param {string} params.name - (Required) Required. The name of the account to fetch.
     * @return {object} The API response object.
     */
    this.accounts.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates an account with the specified name and type under the given parent. - Personal accounts and Organizations cannot be created. - User Groups cannot be created with a Personal account as primary owner. - Location Groups cannot be created with a primary owner of a Personal account if the Personal account is in an Organization. - Location Groups cannot own Location Groups.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.create = (params) => this._makeRequest('v1/accounts', 'POST', params);

    /**
     * Updates the specified business account. Personal accounts cannot be updated using this method.
     * @param {string} params.name - (Required) Immutable. The resource name, in the format `accounts/{account_id}`.
     * @param {string} params.updateMask - Required. The specific fields that should be updated. The only editable field is `accountName`.
     * @param {boolean} params.validateOnly - Optional. If true, the request is validated without actually updating the account.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.accounts.invitations = {};

    /**
     * Accepts the specified invitation.
     * @param {string} params.name - (Required) Required. The name of the invitation that is being accepted. `accounts/{account_id}/invitations/{invitation_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.invitations.accept = (params) => this._makeRequest('v1/{+name}:accept', 'POST', params);

    /**
     * Declines the specified invitation.
     * @param {string} params.name - (Required) Required. The name of the account invitation that is being declined. `accounts/{account_id}/invitations/{invitation_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.invitations.decline = (params) => this._makeRequest('v1/{+name}:decline', 'POST', params);

    /**
     * Lists pending invitations for the specified account.
     * @param {string} params.filter - Optional. Filtering the response is supported via the Invitation.target_type field.
     * @param {string} params.parent - (Required) Required. The name of the account from which the list of invitations is being retrieved. `accounts/{account_id}/invitations`
     * @return {object} The API response object.
     */
    this.accounts.invitations.list = (params) => this._makeRequest('v1/{+parent}/invitations', 'GET', params);

    this.accounts.admins = {};

    /**
     * Lists the admins for the specified account.
     * @param {string} params.parent - (Required) Required. The name of the account from which to retrieve a list of admins. `accounts/{account_id}/admins`.
     * @return {object} The API response object.
     */
    this.accounts.admins.list = (params) => this._makeRequest('v1/{+parent}/admins', 'GET', params);

    /**
     * Invites the specified user to become an administrator for the specified account. The invitee must accept the invitation in order to be granted access to the account. See AcceptInvitation to programmatically accept an invitation.
     * @param {string} params.parent - (Required) Required. The resource name of the account this admin is created for. `accounts/{account_id}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.admins.create = (params) => this._makeRequest('v1/{+parent}/admins', 'POST', params);

    /**
     * Removes the specified admin from the specified account.
     * @param {string} params.name - (Required) Required. The resource name of the admin to remove from the account. `accounts/{account_id}/admins/{admin_id}`.
     * @return {object} The API response object.
     */
    this.accounts.admins.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Updates the Admin for the specified Account Admin.
     * @param {string} params.name - (Required) Immutable. The resource name. For account admins, this is in the form: `accounts/{account_id}/admins/{admin_id}` For location admins, this is in the form: `locations/{location_id}/admins/{admin_id}` This field will be ignored if set during admin creation.
     * @param {string} params.updateMask - Required. The specific fields that should be updated. The only editable field is role.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.admins.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
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
