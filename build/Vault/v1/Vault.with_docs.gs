
/**
 * Google Apps Script client library for the Google Vault API
 * Documentation URL: https://developers.google.com/workspace/vault
 * @class
 */
class Vault {
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
    this._rootUrl = 'https://vault.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.operations.list = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);

    this.matters = {};

    /**
     * Creates a matter with the given name and description. The initial state is open, and the owner is the method caller. Returns the created matter with default view.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.matters.create = (params) => this._makeRequest('v1/matters', 'POST', params);

    /**
     * Updates the specified matter. This updates only the name and description of the matter, identified by matter ID. Changes to any other fields are ignored. Returns the default view of the matter.
     * @param {string} params.matterId - (Required) The matter ID.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.matters.update = (params) => this._makeRequest('v1/matters/{matterId}', 'PUT', params);

    /**
     * Closes the specified matter. Returns the matter with updated state.
     * @param {string} params.matterId - (Required) The matter ID.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.matters.close = (params) => this._makeRequest('v1/matters/{matterId}:close', 'POST', params);

    /**
     * Reopens the specified matter. Returns the matter with updated state.
     * @param {string} params.matterId - (Required) The matter ID.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.matters.reopen = (params) => this._makeRequest('v1/matters/{matterId}:reopen', 'POST', params);

    /**
     * Deletes the specified matter. Returns the matter with updated state.
     * @param {string} params.matterId - (Required) The matter ID
     * @return {object} The API response object.
     */
    this.matters.delete = (params) => this._makeRequest('v1/matters/{matterId}', 'DELETE', params);

    /**
     * Undeletes the specified matter. Returns the matter with updated state.
     * @param {string} params.matterId - (Required) The matter ID.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.matters.undelete = (params) => this._makeRequest('v1/matters/{matterId}:undelete', 'POST', params);

    /**
     * Gets the specified matter.
     * @param {string} params.matterId - (Required) The matter ID.
     * @param {string} params.view - Specifies how much information about the matter to return in the response.
     * @return {object} The API response object.
     */
    this.matters.get = (params) => this._makeRequest('v1/matters/{matterId}', 'GET', params);

    /**
     * Lists matters the requestor has access to.
     * @param {integer} params.pageSize - The number of matters to return in the response. Default and maximum are 100.
     * @param {string} params.pageToken - The pagination token as returned in the response.
     * @param {string} params.state - If set, lists only matters with the specified state. The default lists matters of all states.
     * @param {string} params.view - Specifies how much information about the matter to return in response.
     * @return {object} The API response object.
     */
    this.matters.list = (params) => this._makeRequest('v1/matters', 'GET', params);

    /**
     * Adds an account as a matter collaborator.
     * @param {string} params.matterId - (Required) The matter ID.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.matters.addPermissions = (params) => this._makeRequest('v1/matters/{matterId}:addPermissions', 'POST', params);

    /**
     * Removes an account as a matter collaborator.
     * @param {string} params.matterId - (Required) The matter ID.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.matters.removePermissions = (params) => this._makeRequest('v1/matters/{matterId}:removePermissions', 'POST', params);

    /**
     * Counts the accounts processed by the specified query.
     * @param {string} params.matterId - (Required) The matter ID.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.matters.count = (params) => this._makeRequest('v1/matters/{matterId}:count', 'POST', params);

    this.matters.exports = {};

    /**
     * Creates an export.
     * @param {string} params.matterId - (Required) The matter ID.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.matters.exports.create = (params) => this._makeRequest('v1/matters/{matterId}/exports', 'POST', params);

    /**
     * Deletes an export.
     * @param {string} params.exportId - (Required) The export ID.
     * @param {string} params.matterId - (Required) The matter ID.
     * @return {object} The API response object.
     */
    this.matters.exports.delete = (params) => this._makeRequest('v1/matters/{matterId}/exports/{exportId}', 'DELETE', params);

    /**
     * Gets an export.
     * @param {string} params.exportId - (Required) The export ID.
     * @param {string} params.matterId - (Required) The matter ID.
     * @return {object} The API response object.
     */
    this.matters.exports.get = (params) => this._makeRequest('v1/matters/{matterId}/exports/{exportId}', 'GET', params);

    /**
     * Lists details about the exports in the specified matter.
     * @param {string} params.matterId - (Required) The matter ID.
     * @param {integer} params.pageSize - The number of exports to return in the response.
     * @param {string} params.pageToken - The pagination token as returned in the response.
     * @return {object} The API response object.
     */
    this.matters.exports.list = (params) => this._makeRequest('v1/matters/{matterId}/exports', 'GET', params);

    this.matters.holds = {};

    /**
     * Creates a hold in the specified matter.
     * @param {string} params.matterId - (Required) The matter ID.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.matters.holds.create = (params) => this._makeRequest('v1/matters/{matterId}/holds', 'POST', params);

    /**
     * Updates the scope (organizational unit or accounts) and query parameters of a hold. You cannot add accounts to a hold that covers an organizational unit, nor can you add organizational units to a hold that covers individual accounts. If you try, the unsupported values are ignored.
     * @param {string} params.holdId - (Required) The ID of the hold.
     * @param {string} params.matterId - (Required) The matter ID.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.matters.holds.update = (params) => this._makeRequest('v1/matters/{matterId}/holds/{holdId}', 'PUT', params);

    /**
     * Removes the specified hold and releases the accounts or organizational unit covered by the hold. If the data is not preserved by another hold or retention rule, it might be purged.
     * @param {string} params.holdId - (Required) The hold ID.
     * @param {string} params.matterId - (Required) The matter ID.
     * @return {object} The API response object.
     */
    this.matters.holds.delete = (params) => this._makeRequest('v1/matters/{matterId}/holds/{holdId}', 'DELETE', params);

    /**
     * Gets the specified hold.
     * @param {string} params.holdId - (Required) The hold ID.
     * @param {string} params.matterId - (Required) The matter ID.
     * @param {string} params.view - The amount of detail to return for a hold.
     * @return {object} The API response object.
     */
    this.matters.holds.get = (params) => this._makeRequest('v1/matters/{matterId}/holds/{holdId}', 'GET', params);

    /**
     * Lists the holds in a matter.
     * @param {string} params.matterId - (Required) The matter ID.
     * @param {integer} params.pageSize - The number of holds to return in the response, between 0 and 100 inclusive. Leaving this empty, or as 0, is the same as **page_size** = 100.
     * @param {string} params.pageToken - The pagination token as returned in the response. An empty token means start from the beginning.
     * @param {string} params.view - The amount of detail to return for a hold.
     * @return {object} The API response object.
     */
    this.matters.holds.list = (params) => this._makeRequest('v1/matters/{matterId}/holds', 'GET', params);

    /**
     * Adds accounts to a hold. Returns a list of accounts that have been successfully added. Accounts can be added only to an existing account-based hold.
     * @param {string} params.holdId - (Required) The hold ID.
     * @param {string} params.matterId - (Required) The matter ID.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.matters.holds.addHeldAccounts = (params) => this._makeRequest('v1/matters/{matterId}/holds/{holdId}:addHeldAccounts', 'POST', params);

    /**
     * Removes the specified accounts from a hold. Returns a list of statuses in the same order as the request.
     * @param {string} params.holdId - (Required) The hold ID.
     * @param {string} params.matterId - (Required) The matter ID.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.matters.holds.removeHeldAccounts = (params) => this._makeRequest('v1/matters/{matterId}/holds/{holdId}:removeHeldAccounts', 'POST', params);

    this.matters.holds.accounts = {};

    /**
     * Adds an account to a hold. Accounts can be added only to a hold that does not have an organizational unit set. If you try to add an account to an organizational unit-based hold, an error is returned.
     * @param {string} params.holdId - (Required) The hold ID.
     * @param {string} params.matterId - (Required) The matter ID.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.matters.holds.accounts.create = (params) => this._makeRequest('v1/matters/{matterId}/holds/{holdId}/accounts', 'POST', params);

    /**
     * Removes an account from a hold.
     * @param {string} params.accountId - (Required) The ID of the account to remove from the hold.
     * @param {string} params.holdId - (Required) The hold ID.
     * @param {string} params.matterId - (Required) The matter ID.
     * @return {object} The API response object.
     */
    this.matters.holds.accounts.delete = (params) => this._makeRequest('v1/matters/{matterId}/holds/{holdId}/accounts/{accountId}', 'DELETE', params);

    /**
     * Lists the accounts covered by a hold. This can list only individually-specified accounts covered by the hold. If the hold covers an organizational unit, use the [Admin SDK](https://developers.google.com/admin-sdk/). to list the members of the organizational unit on hold.
     * @param {string} params.holdId - (Required) The hold ID.
     * @param {string} params.matterId - (Required) The matter ID.
     * @return {object} The API response object.
     */
    this.matters.holds.accounts.list = (params) => this._makeRequest('v1/matters/{matterId}/holds/{holdId}/accounts', 'GET', params);

    this.matters.savedQueries = {};

    /**
     * Creates a saved query.
     * @param {string} params.matterId - (Required) The ID of the matter to create the saved query in.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.matters.savedQueries.create = (params) => this._makeRequest('v1/matters/{matterId}/savedQueries', 'POST', params);

    /**
     * Deletes the specified saved query.
     * @param {string} params.matterId - (Required) The ID of the matter to delete the saved query from.
     * @param {string} params.savedQueryId - (Required) ID of the saved query to delete.
     * @return {object} The API response object.
     */
    this.matters.savedQueries.delete = (params) => this._makeRequest('v1/matters/{matterId}/savedQueries/{savedQueryId}', 'DELETE', params);

    /**
     * Retrieves the specified saved query.
     * @param {string} params.matterId - (Required) The ID of the matter to get the saved query from.
     * @param {string} params.savedQueryId - (Required) ID of the saved query to retrieve.
     * @return {object} The API response object.
     */
    this.matters.savedQueries.get = (params) => this._makeRequest('v1/matters/{matterId}/savedQueries/{savedQueryId}', 'GET', params);

    /**
     * Lists the saved queries in a matter.
     * @param {string} params.matterId - (Required) The ID of the matter to get the saved queries for.
     * @param {integer} params.pageSize - The maximum number of saved queries to return.
     * @param {string} params.pageToken - The pagination token as returned in the previous response. An empty token means start from the beginning.
     * @return {object} The API response object.
     */
    this.matters.savedQueries.list = (params) => this._makeRequest('v1/matters/{matterId}/savedQueries', 'GET', params);
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
