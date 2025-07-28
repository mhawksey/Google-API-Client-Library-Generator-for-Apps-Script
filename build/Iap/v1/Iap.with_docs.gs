
/**
 * Google Apps Script client library for the Cloud Identity-Aware Proxy API
 * Documentation URL: https://cloud.google.com/iap
 * @class
 */
class Iap {
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
    this._rootUrl = 'https://iap.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.v1 = {};

    /**
     * Sets the access control policy for an Identity-Aware Proxy protected resource. Replaces any existing policy. More information about managing access via IAP can be found at: https://cloud.google.com/iap/docs/managing-access#managing_access_via_the_api
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.v1.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for an Identity-Aware Proxy protected resource. More information about managing access via IAP can be found at: https://cloud.google.com/iap/docs/managing-access#managing_access_via_the_api
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.v1.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'POST', params);

    /**
     * Returns permissions that a caller has on the Identity-Aware Proxy protected resource. More information about managing access via IAP can be found at: https://cloud.google.com/iap/docs/managing-access#managing_access_via_the_api
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.v1.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    /**
     * Gets the IAP settings on a particular IAP protected resource.
     * @param {string} params.name - (Required) Required. The resource name for which to retrieve the settings. Authorization: Requires the `getSettings` permission for the associated resource.
     * @return {object} The API response object.
     */
    this.v1.getIapSettings = (params) => this._makeRequest('v1/{+name}:iapSettings', 'GET', params);

    /**
     * Updates the IAP settings on a particular IAP protected resource. It replaces all fields unless the `update_mask` is set.
     * @param {string} params.name - (Required) Required. The resource name of the IAP protected resource.
     * @param {string} params.updateMask - The field mask specifying which IAP settings should be updated. If omitted, then all of the settings are updated. See https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask. Note: All IAP reauth settings must always be set together, using the field mask: `iapSettings.accessSettings.reauthSettings`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.v1.updateIapSettings = (params) => this._makeRequest('v1/{+name}:iapSettings', 'PATCH', params);

    /**
     * Validates that a given CEL expression conforms to IAP restrictions.
     * @param {string} params.expression - Required. User input string expression. Should be of the form `attributes.saml_attributes.filter(attribute, attribute.name in ['{attribute_name}', '{attribute_name}'])`
     * @param {string} params.name - (Required) Required. The resource name of the IAP protected resource.
     * @return {object} The API response object.
     */
    this.v1.validateAttributeExpression = (params) => this._makeRequest('v1/{+name}:validateAttributeExpression', 'POST', params);

    this.projects = {};

    this.projects.iap_tunnel = {};

    this.projects.iap_tunnel.locations = {};

    this.projects.iap_tunnel.locations.destGroups = {};

    /**
     * Lists the existing TunnelDestGroups. To group across all locations, use a `-` as the location ID. For example: `/v1/projects/123/iap_tunnel/locations/-/destGroups`
     * @param {integer} params.pageSize - The maximum number of groups to return. The service might return fewer than this value. If unspecified, at most 100 groups are returned. The maximum value is 1000; values above 1000 are coerced to 1000.
     * @param {string} params.pageToken - A page token, received from a previous `ListTunnelDestGroups` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListTunnelDestGroups` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. Google Cloud Project ID and location. In the following format: `projects/{project_number/id}/iap_tunnel/locations/{location}`. A `-` can be used for the location to group across all locations.
     * @return {object} The API response object.
     */
    this.projects.iap_tunnel.locations.destGroups.list = (params) => this._makeRequest('v1/{+parent}/destGroups', 'GET', params);

    /**
     * Creates a new TunnelDestGroup.
     * @param {string} params.parent - (Required) Required. Google Cloud Project ID and location. In the following format: `projects/{project_number/id}/iap_tunnel/locations/{location}`.
     * @param {string} params.tunnelDestGroupId - Required. The ID to use for the TunnelDestGroup, which becomes the final component of the resource name. This value must be 4-63 characters, and valid characters are `[a-z]-`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.iap_tunnel.locations.destGroups.create = (params) => this._makeRequest('v1/{+parent}/destGroups', 'POST', params);

    /**
     * Retrieves an existing TunnelDestGroup.
     * @param {string} params.name - (Required) Required. Name of the TunnelDestGroup to be fetched. In the following format: `projects/{project_number/id}/iap_tunnel/locations/{location}/destGroups/{dest_group}`.
     * @return {object} The API response object.
     */
    this.projects.iap_tunnel.locations.destGroups.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Deletes a TunnelDestGroup.
     * @param {string} params.name - (Required) Required. Name of the TunnelDestGroup to delete. In the following format: `projects/{project_number/id}/iap_tunnel/locations/{location}/destGroups/{dest_group}`.
     * @return {object} The API response object.
     */
    this.projects.iap_tunnel.locations.destGroups.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Updates a TunnelDestGroup.
     * @param {string} params.name - (Required) Identifier. Identifier for the TunnelDestGroup. Must be unique within the project and contain only lower case letters (a-z) and dashes (-).
     * @param {string} params.updateMask - A field mask that specifies which IAP settings to update. If omitted, then all of the settings are updated. See https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.iap_tunnel.locations.destGroups.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.projects.brands = {};

    /**
     * Lists the existing brands for the project.
     * @param {string} params.parent - (Required) Required. GCP Project number/id. In the following format: projects/{project_number/id}.
     * @return {object} The API response object.
     */
    this.projects.brands.list = (params) => this._makeRequest('v1/{+parent}/brands', 'GET', params);

    /**
     * Constructs a new OAuth brand for the project if one does not exist. The created brand is "internal only", meaning that OAuth clients created under it only accept requests from users who belong to the same Google Workspace organization as the project. The brand is created in an un-reviewed status. NOTE: The "internal only" status can be manually changed in the Google Cloud Console. Requires that a brand does not already exist for the project, and that the specified support email is owned by the caller.
     * @param {string} params.parent - (Required) Required. GCP Project number/id under which the brand is to be created. In the following format: projects/{project_number/id}.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.brands.create = (params) => this._makeRequest('v1/{+parent}/brands', 'POST', params);

    /**
     * Retrieves the OAuth brand of the project.
     * @param {string} params.name - (Required) Required. Name of the brand to be fetched. In the following format: projects/{project_number/id}/brands/{brand}.
     * @return {object} The API response object.
     */
    this.projects.brands.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.brands.identityAwareProxyClients = {};

    /**
     * Creates an Identity Aware Proxy (IAP) OAuth client. The client is owned by IAP. Requires that the brand for the project exists and that it is set for internal-only use.
     * @param {string} params.parent - (Required) Required. Path to create the client in. In the following format: projects/{project_number/id}/brands/{brand}. The project must belong to a G Suite account.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.brands.identityAwareProxyClients.create = (params) => this._makeRequest('v1/{+parent}/identityAwareProxyClients', 'POST', params);

    /**
     * Lists the existing clients for the brand.
     * @param {integer} params.pageSize - The maximum number of clients to return. The service may return fewer than this value. If unspecified, at most 100 clients will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - A page token, received from a previous `ListIdentityAwareProxyClients` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListIdentityAwareProxyClients` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. Full brand path. In the following format: projects/{project_number/id}/brands/{brand}.
     * @return {object} The API response object.
     */
    this.projects.brands.identityAwareProxyClients.list = (params) => this._makeRequest('v1/{+parent}/identityAwareProxyClients', 'GET', params);

    /**
     * Retrieves an Identity Aware Proxy (IAP) OAuth client. Requires that the client is owned by IAP.
     * @param {string} params.name - (Required) Required. Name of the Identity Aware Proxy client to be fetched. In the following format: projects/{project_number/id}/brands/{brand}/identityAwareProxyClients/{client_id}.
     * @return {object} The API response object.
     */
    this.projects.brands.identityAwareProxyClients.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Resets an Identity Aware Proxy (IAP) OAuth client secret. Useful if the secret was compromised. Requires that the client is owned by IAP.
     * @param {string} params.name - (Required) Required. Name of the Identity Aware Proxy client to that will have its secret reset. In the following format: projects/{project_number/id}/brands/{brand}/identityAwareProxyClients/{client_id}.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.brands.identityAwareProxyClients.resetSecret = (params) => this._makeRequest('v1/{+name}:resetSecret', 'POST', params);

    /**
     * Deletes an Identity Aware Proxy (IAP) OAuth client. Useful for removing obsolete clients, managing the number of clients in a given project, and cleaning up after tests. Requires that the client is owned by IAP.
     * @param {string} params.name - (Required) Required. Name of the Identity Aware Proxy client to be deleted. In the following format: projects/{project_number/id}/brands/{brand}/identityAwareProxyClients/{client_id}.
     * @return {object} The API response object.
     */
    this.projects.brands.identityAwareProxyClients.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
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
