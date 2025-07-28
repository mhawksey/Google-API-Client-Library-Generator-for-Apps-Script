
/**
 * Google Apps Script client library for the Essential Contacts API
 * Documentation URL: https://cloud.google.com/essentialcontacts/docs/
 * @class
 */
class Essentialcontacts {
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
    this._rootUrl = 'https://essentialcontacts.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.contacts = {};

    /**
     * Adds a new contact for a resource.
     * @param {string} params.parent - (Required) Required. The resource to save this contact for. Format: organizations/{organization_id}, folders/{folder_id} or projects/{project_id}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.contacts.create = (params) => this._makeRequest('v1/{+parent}/contacts', 'POST', params);

    /**
     * Updates a contact. Note: A contact's email address cannot be changed.
     * @param {string} params.name - (Required) Output only. The identifier for the contact. Format: {resource_type}/{resource_id}/contacts/{contact_id}
     * @param {string} params.updateMask - Optional. The update mask applied to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.contacts.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Lists the contacts that have been set on a resource.
     * @param {integer} params.pageSize - Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of `next_page_token` in the response indicates that more results might be available. If not specified, the default page_size is 100.
     * @param {string} params.pageToken - Optional. If present, retrieves the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of other method parameters should be identical to those in the previous call.
     * @param {string} params.parent - (Required) Required. The parent resource name. Format: organizations/{organization_id}, folders/{folder_id} or projects/{project_id}
     * @return {object} The API response object.
     */
    this.projects.contacts.list = (params) => this._makeRequest('v1/{+parent}/contacts', 'GET', params);

    /**
     * Gets a single contact.
     * @param {string} params.name - (Required) Required. The name of the contact to retrieve. Format: organizations/{organization_id}/contacts/{contact_id}, folders/{folder_id}/contacts/{contact_id} or projects/{project_id}/contacts/{contact_id}
     * @return {object} The API response object.
     */
    this.projects.contacts.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Deletes a contact.
     * @param {string} params.name - (Required) Required. The name of the contact to delete. Format: organizations/{organization_id}/contacts/{contact_id}, folders/{folder_id}/contacts/{contact_id} or projects/{project_id}/contacts/{contact_id}
     * @return {object} The API response object.
     */
    this.projects.contacts.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Lists all contacts for the resource that are subscribed to the specified notification categories, including contacts inherited from any parent resources.
     * @param {string} params.notificationCategories - The categories of notifications to compute contacts for. If ALL is included in this list, contacts subscribed to any notification category will be returned.
     * @param {integer} params.pageSize - Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of `next_page_token` in the response indicates that more results might be available. If not specified, the default page_size is 100.
     * @param {string} params.pageToken - Optional. If present, retrieves the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of other method parameters should be identical to those in the previous call.
     * @param {string} params.parent - (Required) Required. The name of the resource to compute contacts for. Format: organizations/{organization_id}, folders/{folder_id} or projects/{project_id}
     * @return {object} The API response object.
     */
    this.projects.contacts.compute = (params) => this._makeRequest('v1/{+parent}/contacts:compute', 'GET', params);

    /**
     * Allows a contact admin to send a test message to contact to verify that it has been configured correctly.
     * @param {string} params.resource - (Required) Required. The name of the resource to send the test message for. All contacts must either be set directly on this resource or inherited from another resource that is an ancestor of this one. Format: organizations/{organization_id}, folders/{folder_id} or projects/{project_id}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.contacts.sendTestMessage = (params) => this._makeRequest('v1/{+resource}/contacts:sendTestMessage', 'POST', params);

    this.folders = {};

    this.folders.contacts = {};

    /**
     * Adds a new contact for a resource.
     * @param {string} params.parent - (Required) Required. The resource to save this contact for. Format: organizations/{organization_id}, folders/{folder_id} or projects/{project_id}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.folders.contacts.create = (params) => this._makeRequest('v1/{+parent}/contacts', 'POST', params);

    /**
     * Updates a contact. Note: A contact's email address cannot be changed.
     * @param {string} params.name - (Required) Output only. The identifier for the contact. Format: {resource_type}/{resource_id}/contacts/{contact_id}
     * @param {string} params.updateMask - Optional. The update mask applied to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.folders.contacts.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Lists the contacts that have been set on a resource.
     * @param {integer} params.pageSize - Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of `next_page_token` in the response indicates that more results might be available. If not specified, the default page_size is 100.
     * @param {string} params.pageToken - Optional. If present, retrieves the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of other method parameters should be identical to those in the previous call.
     * @param {string} params.parent - (Required) Required. The parent resource name. Format: organizations/{organization_id}, folders/{folder_id} or projects/{project_id}
     * @return {object} The API response object.
     */
    this.folders.contacts.list = (params) => this._makeRequest('v1/{+parent}/contacts', 'GET', params);

    /**
     * Gets a single contact.
     * @param {string} params.name - (Required) Required. The name of the contact to retrieve. Format: organizations/{organization_id}/contacts/{contact_id}, folders/{folder_id}/contacts/{contact_id} or projects/{project_id}/contacts/{contact_id}
     * @return {object} The API response object.
     */
    this.folders.contacts.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Deletes a contact.
     * @param {string} params.name - (Required) Required. The name of the contact to delete. Format: organizations/{organization_id}/contacts/{contact_id}, folders/{folder_id}/contacts/{contact_id} or projects/{project_id}/contacts/{contact_id}
     * @return {object} The API response object.
     */
    this.folders.contacts.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Lists all contacts for the resource that are subscribed to the specified notification categories, including contacts inherited from any parent resources.
     * @param {string} params.notificationCategories - The categories of notifications to compute contacts for. If ALL is included in this list, contacts subscribed to any notification category will be returned.
     * @param {integer} params.pageSize - Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of `next_page_token` in the response indicates that more results might be available. If not specified, the default page_size is 100.
     * @param {string} params.pageToken - Optional. If present, retrieves the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of other method parameters should be identical to those in the previous call.
     * @param {string} params.parent - (Required) Required. The name of the resource to compute contacts for. Format: organizations/{organization_id}, folders/{folder_id} or projects/{project_id}
     * @return {object} The API response object.
     */
    this.folders.contacts.compute = (params) => this._makeRequest('v1/{+parent}/contacts:compute', 'GET', params);

    /**
     * Allows a contact admin to send a test message to contact to verify that it has been configured correctly.
     * @param {string} params.resource - (Required) Required. The name of the resource to send the test message for. All contacts must either be set directly on this resource or inherited from another resource that is an ancestor of this one. Format: organizations/{organization_id}, folders/{folder_id} or projects/{project_id}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.folders.contacts.sendTestMessage = (params) => this._makeRequest('v1/{+resource}/contacts:sendTestMessage', 'POST', params);

    this.organizations = {};

    this.organizations.contacts = {};

    /**
     * Adds a new contact for a resource.
     * @param {string} params.parent - (Required) Required. The resource to save this contact for. Format: organizations/{organization_id}, folders/{folder_id} or projects/{project_id}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.contacts.create = (params) => this._makeRequest('v1/{+parent}/contacts', 'POST', params);

    /**
     * Updates a contact. Note: A contact's email address cannot be changed.
     * @param {string} params.name - (Required) Output only. The identifier for the contact. Format: {resource_type}/{resource_id}/contacts/{contact_id}
     * @param {string} params.updateMask - Optional. The update mask applied to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.contacts.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Lists the contacts that have been set on a resource.
     * @param {integer} params.pageSize - Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of `next_page_token` in the response indicates that more results might be available. If not specified, the default page_size is 100.
     * @param {string} params.pageToken - Optional. If present, retrieves the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of other method parameters should be identical to those in the previous call.
     * @param {string} params.parent - (Required) Required. The parent resource name. Format: organizations/{organization_id}, folders/{folder_id} or projects/{project_id}
     * @return {object} The API response object.
     */
    this.organizations.contacts.list = (params) => this._makeRequest('v1/{+parent}/contacts', 'GET', params);

    /**
     * Gets a single contact.
     * @param {string} params.name - (Required) Required. The name of the contact to retrieve. Format: organizations/{organization_id}/contacts/{contact_id}, folders/{folder_id}/contacts/{contact_id} or projects/{project_id}/contacts/{contact_id}
     * @return {object} The API response object.
     */
    this.organizations.contacts.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Deletes a contact.
     * @param {string} params.name - (Required) Required. The name of the contact to delete. Format: organizations/{organization_id}/contacts/{contact_id}, folders/{folder_id}/contacts/{contact_id} or projects/{project_id}/contacts/{contact_id}
     * @return {object} The API response object.
     */
    this.organizations.contacts.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Lists all contacts for the resource that are subscribed to the specified notification categories, including contacts inherited from any parent resources.
     * @param {string} params.notificationCategories - The categories of notifications to compute contacts for. If ALL is included in this list, contacts subscribed to any notification category will be returned.
     * @param {integer} params.pageSize - Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of `next_page_token` in the response indicates that more results might be available. If not specified, the default page_size is 100.
     * @param {string} params.pageToken - Optional. If present, retrieves the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of other method parameters should be identical to those in the previous call.
     * @param {string} params.parent - (Required) Required. The name of the resource to compute contacts for. Format: organizations/{organization_id}, folders/{folder_id} or projects/{project_id}
     * @return {object} The API response object.
     */
    this.organizations.contacts.compute = (params) => this._makeRequest('v1/{+parent}/contacts:compute', 'GET', params);

    /**
     * Allows a contact admin to send a test message to contact to verify that it has been configured correctly.
     * @param {string} params.resource - (Required) Required. The name of the resource to send the test message for. All contacts must either be set directly on this resource or inherited from another resource that is an ancestor of this one. Format: organizations/{organization_id}, folders/{folder_id} or projects/{project_id}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.contacts.sendTestMessage = (params) => this._makeRequest('v1/{+resource}/contacts:sendTestMessage', 'POST', params);
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
