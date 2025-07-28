
/**
 * Google Apps Script client library for the Access Approval API
 * Documentation URL: https://cloud.google.com/assured-workloads/access-approval/docs
 * @class
 */
class Accessapproval {
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
    this._rootUrl = 'https://accessapproval.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    /**
     * Gets the settings associated with a project, folder, or organization.
     * @param {string} params.name - (Required) The name of the AccessApprovalSettings to retrieve. Format: "{projects|folders|organizations}/{id}/accessApprovalSettings"
     * @return {object} The API response object.
     */
    this.projects.getAccessApprovalSettings = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Updates the settings associated with a project, folder, or organization. Settings to update are determined by the value of field_mask.
     * @param {string} params.name - (Required) The resource name of the settings. Format is one of: * "projects/{project}/accessApprovalSettings" * "folders/{folder}/accessApprovalSettings" * "organizations/{organization}/accessApprovalSettings"
     * @param {string} params.updateMask - The update mask applies to the settings. Only the top level fields of AccessApprovalSettings (notification_emails & enrolled_services) are supported. For each field, if it is included, the currently stored value will be entirely overwritten with the value of the field passed in this request. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask If this field is left unset, only the notification_emails field will be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.updateAccessApprovalSettings = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes the settings associated with a project, folder, or organization. This will have the effect of disabling Access Approval for the project, folder, or organization, but only if all ancestors also have Access Approval disabled. If Access Approval is enabled at a higher level of the hierarchy, then Access Approval will still be enabled at this level as the settings are inherited.
     * @param {string} params.name - (Required) Name of the AccessApprovalSettings to delete.
     * @return {object} The API response object.
     */
    this.projects.deleteAccessApprovalSettings = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Retrieves the service account that is used by Access Approval to access KMS keys for signing approved approval requests.
     * @param {string} params.name - (Required) Name of the AccessApprovalServiceAccount to retrieve.
     * @return {object} The API response object.
     */
    this.projects.getServiceAccount = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.approvalRequests = {};

    /**
     * Lists approval requests associated with a project, folder, or organization. Approval requests can be filtered by state (pending, active, dismissed). The order is reverse chronological.
     * @param {string} params.filter - A filter on the type of approval requests to retrieve. Must be one of the following values: * [not set]: Requests that are pending or have active approvals. * ALL: All requests. * PENDING: Only pending requests. * ACTIVE: Only active (i.e. currently approved) requests. * DISMISSED: Only requests that have been dismissed, or requests that are not approved and past expiration. * EXPIRED: Only requests that have been approved, and the approval has expired. * HISTORY: Active, dismissed and expired requests.
     * @param {integer} params.pageSize - Requested page size.
     * @param {string} params.pageToken - A token identifying the page of results to return.
     * @param {string} params.parent - (Required) The parent resource. This may be "projects/{project}", "folders/{folder}", or "organizations/{organization}".
     * @return {object} The API response object.
     */
    this.projects.approvalRequests.list = (params) => this._makeRequest('v1/{+parent}/approvalRequests', 'GET', params);

    /**
     * Gets an approval request. Returns NOT_FOUND if the request does not exist.
     * @param {string} params.name - (Required) The name of the approval request to retrieve. Format: "{projects|folders|organizations}/{id}/approvalRequests/{approval_request}"
     * @return {object} The API response object.
     */
    this.projects.approvalRequests.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Approves a request and returns the updated ApprovalRequest. Returns NOT_FOUND if the request does not exist. Returns FAILED_PRECONDITION if the request exists but is not in a pending state.
     * @param {string} params.name - (Required) Name of the approval request to approve.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.approvalRequests.approve = (params) => this._makeRequest('v1/{+name}:approve', 'POST', params);

    /**
     * Dismisses a request. Returns the updated ApprovalRequest. NOTE: This does not deny access to the resource if another request has been made and approved. It is equivalent in effect to ignoring the request altogether. Returns NOT_FOUND if the request does not exist. Returns FAILED_PRECONDITION if the request exists but is not in a pending state.
     * @param {string} params.name - (Required) Name of the ApprovalRequest to dismiss.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.approvalRequests.dismiss = (params) => this._makeRequest('v1/{+name}:dismiss', 'POST', params);

    /**
     * Invalidates an existing ApprovalRequest. Returns the updated ApprovalRequest. NOTE: This does not deny access to the resource if another request has been made and approved. It only invalidates a single approval. Returns FAILED_PRECONDITION if the request exists but is not in an approved state.
     * @param {string} params.name - (Required) Name of the ApprovalRequest to invalidate.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.approvalRequests.invalidate = (params) => this._makeRequest('v1/{+name}:invalidate', 'POST', params);

    this.folders = {};

    /**
     * Gets the settings associated with a project, folder, or organization.
     * @param {string} params.name - (Required) The name of the AccessApprovalSettings to retrieve. Format: "{projects|folders|organizations}/{id}/accessApprovalSettings"
     * @return {object} The API response object.
     */
    this.folders.getAccessApprovalSettings = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Updates the settings associated with a project, folder, or organization. Settings to update are determined by the value of field_mask.
     * @param {string} params.name - (Required) The resource name of the settings. Format is one of: * "projects/{project}/accessApprovalSettings" * "folders/{folder}/accessApprovalSettings" * "organizations/{organization}/accessApprovalSettings"
     * @param {string} params.updateMask - The update mask applies to the settings. Only the top level fields of AccessApprovalSettings (notification_emails & enrolled_services) are supported. For each field, if it is included, the currently stored value will be entirely overwritten with the value of the field passed in this request. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask If this field is left unset, only the notification_emails field will be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.folders.updateAccessApprovalSettings = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes the settings associated with a project, folder, or organization. This will have the effect of disabling Access Approval for the project, folder, or organization, but only if all ancestors also have Access Approval disabled. If Access Approval is enabled at a higher level of the hierarchy, then Access Approval will still be enabled at this level as the settings are inherited.
     * @param {string} params.name - (Required) Name of the AccessApprovalSettings to delete.
     * @return {object} The API response object.
     */
    this.folders.deleteAccessApprovalSettings = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Retrieves the service account that is used by Access Approval to access KMS keys for signing approved approval requests.
     * @param {string} params.name - (Required) Name of the AccessApprovalServiceAccount to retrieve.
     * @return {object} The API response object.
     */
    this.folders.getServiceAccount = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.folders.approvalRequests = {};

    /**
     * Lists approval requests associated with a project, folder, or organization. Approval requests can be filtered by state (pending, active, dismissed). The order is reverse chronological.
     * @param {string} params.filter - A filter on the type of approval requests to retrieve. Must be one of the following values: * [not set]: Requests that are pending or have active approvals. * ALL: All requests. * PENDING: Only pending requests. * ACTIVE: Only active (i.e. currently approved) requests. * DISMISSED: Only requests that have been dismissed, or requests that are not approved and past expiration. * EXPIRED: Only requests that have been approved, and the approval has expired. * HISTORY: Active, dismissed and expired requests.
     * @param {integer} params.pageSize - Requested page size.
     * @param {string} params.pageToken - A token identifying the page of results to return.
     * @param {string} params.parent - (Required) The parent resource. This may be "projects/{project}", "folders/{folder}", or "organizations/{organization}".
     * @return {object} The API response object.
     */
    this.folders.approvalRequests.list = (params) => this._makeRequest('v1/{+parent}/approvalRequests', 'GET', params);

    /**
     * Gets an approval request. Returns NOT_FOUND if the request does not exist.
     * @param {string} params.name - (Required) The name of the approval request to retrieve. Format: "{projects|folders|organizations}/{id}/approvalRequests/{approval_request}"
     * @return {object} The API response object.
     */
    this.folders.approvalRequests.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Approves a request and returns the updated ApprovalRequest. Returns NOT_FOUND if the request does not exist. Returns FAILED_PRECONDITION if the request exists but is not in a pending state.
     * @param {string} params.name - (Required) Name of the approval request to approve.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.folders.approvalRequests.approve = (params) => this._makeRequest('v1/{+name}:approve', 'POST', params);

    /**
     * Dismisses a request. Returns the updated ApprovalRequest. NOTE: This does not deny access to the resource if another request has been made and approved. It is equivalent in effect to ignoring the request altogether. Returns NOT_FOUND if the request does not exist. Returns FAILED_PRECONDITION if the request exists but is not in a pending state.
     * @param {string} params.name - (Required) Name of the ApprovalRequest to dismiss.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.folders.approvalRequests.dismiss = (params) => this._makeRequest('v1/{+name}:dismiss', 'POST', params);

    /**
     * Invalidates an existing ApprovalRequest. Returns the updated ApprovalRequest. NOTE: This does not deny access to the resource if another request has been made and approved. It only invalidates a single approval. Returns FAILED_PRECONDITION if the request exists but is not in an approved state.
     * @param {string} params.name - (Required) Name of the ApprovalRequest to invalidate.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.folders.approvalRequests.invalidate = (params) => this._makeRequest('v1/{+name}:invalidate', 'POST', params);

    this.organizations = {};

    /**
     * Gets the settings associated with a project, folder, or organization.
     * @param {string} params.name - (Required) The name of the AccessApprovalSettings to retrieve. Format: "{projects|folders|organizations}/{id}/accessApprovalSettings"
     * @return {object} The API response object.
     */
    this.organizations.getAccessApprovalSettings = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Updates the settings associated with a project, folder, or organization. Settings to update are determined by the value of field_mask.
     * @param {string} params.name - (Required) The resource name of the settings. Format is one of: * "projects/{project}/accessApprovalSettings" * "folders/{folder}/accessApprovalSettings" * "organizations/{organization}/accessApprovalSettings"
     * @param {string} params.updateMask - The update mask applies to the settings. Only the top level fields of AccessApprovalSettings (notification_emails & enrolled_services) are supported. For each field, if it is included, the currently stored value will be entirely overwritten with the value of the field passed in this request. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask If this field is left unset, only the notification_emails field will be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.updateAccessApprovalSettings = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes the settings associated with a project, folder, or organization. This will have the effect of disabling Access Approval for the project, folder, or organization, but only if all ancestors also have Access Approval disabled. If Access Approval is enabled at a higher level of the hierarchy, then Access Approval will still be enabled at this level as the settings are inherited.
     * @param {string} params.name - (Required) Name of the AccessApprovalSettings to delete.
     * @return {object} The API response object.
     */
    this.organizations.deleteAccessApprovalSettings = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Retrieves the service account that is used by Access Approval to access KMS keys for signing approved approval requests.
     * @param {string} params.name - (Required) Name of the AccessApprovalServiceAccount to retrieve.
     * @return {object} The API response object.
     */
    this.organizations.getServiceAccount = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.organizations.approvalRequests = {};

    /**
     * Lists approval requests associated with a project, folder, or organization. Approval requests can be filtered by state (pending, active, dismissed). The order is reverse chronological.
     * @param {string} params.filter - A filter on the type of approval requests to retrieve. Must be one of the following values: * [not set]: Requests that are pending or have active approvals. * ALL: All requests. * PENDING: Only pending requests. * ACTIVE: Only active (i.e. currently approved) requests. * DISMISSED: Only requests that have been dismissed, or requests that are not approved and past expiration. * EXPIRED: Only requests that have been approved, and the approval has expired. * HISTORY: Active, dismissed and expired requests.
     * @param {integer} params.pageSize - Requested page size.
     * @param {string} params.pageToken - A token identifying the page of results to return.
     * @param {string} params.parent - (Required) The parent resource. This may be "projects/{project}", "folders/{folder}", or "organizations/{organization}".
     * @return {object} The API response object.
     */
    this.organizations.approvalRequests.list = (params) => this._makeRequest('v1/{+parent}/approvalRequests', 'GET', params);

    /**
     * Gets an approval request. Returns NOT_FOUND if the request does not exist.
     * @param {string} params.name - (Required) The name of the approval request to retrieve. Format: "{projects|folders|organizations}/{id}/approvalRequests/{approval_request}"
     * @return {object} The API response object.
     */
    this.organizations.approvalRequests.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Approves a request and returns the updated ApprovalRequest. Returns NOT_FOUND if the request does not exist. Returns FAILED_PRECONDITION if the request exists but is not in a pending state.
     * @param {string} params.name - (Required) Name of the approval request to approve.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.approvalRequests.approve = (params) => this._makeRequest('v1/{+name}:approve', 'POST', params);

    /**
     * Dismisses a request. Returns the updated ApprovalRequest. NOTE: This does not deny access to the resource if another request has been made and approved. It is equivalent in effect to ignoring the request altogether. Returns NOT_FOUND if the request does not exist. Returns FAILED_PRECONDITION if the request exists but is not in a pending state.
     * @param {string} params.name - (Required) Name of the ApprovalRequest to dismiss.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.approvalRequests.dismiss = (params) => this._makeRequest('v1/{+name}:dismiss', 'POST', params);

    /**
     * Invalidates an existing ApprovalRequest. Returns the updated ApprovalRequest. NOTE: This does not deny access to the resource if another request has been made and approved. It only invalidates a single approval. Returns FAILED_PRECONDITION if the request exists but is not in an approved state.
     * @param {string} params.name - (Required) Name of the ApprovalRequest to invalidate.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.approvalRequests.invalidate = (params) => this._makeRequest('v1/{+name}:invalidate', 'POST', params);
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
        // Fix: URI-encode path parameters for safety.
        url = url.replace(placeholder, encodeURIComponent(remainingParams[paramName]));
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
