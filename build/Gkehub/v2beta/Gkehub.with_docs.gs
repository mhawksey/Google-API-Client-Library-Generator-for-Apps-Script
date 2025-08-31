
/**
 * Google Apps Script client library for the GKE Hub API
 * Documentation URL: https://cloud.google.com/anthos/multicluster-management/connect/registering-a-cluster
 * @class
 */
class Gkehub {
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
    this._rootUrl = 'https://gkehub.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.locations = {};

    /**
     * Lists information about the supported locations for this service.
     * @param {string} params.extraLocationTypes - Optional. Do not use this field. It is unsupported and is ignored unless explicitly documented otherwise. This is primarily for internal usage.
     * @param {string} params.filter - A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
     * @param {string} params.name - (Required) The resource that owns the locations collection, if applicable.
     * @param {integer} params.pageSize - The maximum number of results to return. If not set, the service selects a default.
     * @param {string} params.pageToken - A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
     * @return {object} The API response object.
     */
    this.projects.locations.list = (params) => this._makeRequest('v2beta/{+name}/locations', 'GET', params);

    /**
     * Gets information about a location.
     * @param {string} params.name - (Required) Resource name for the location.
     * @return {object} The API response object.
     */
    this.projects.locations.get = (params) => this._makeRequest('v2beta/{+name}', 'GET', params);

    this.projects.locations.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.list = (params) => this._makeRequest('v2beta/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.get = (params) => this._makeRequest('v2beta/{+name}', 'GET', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.cancel = (params) => this._makeRequest('v2beta/{+name}:cancel', 'POST', params);

    this.projects.locations.memberships = {};

    this.projects.locations.memberships.features = {};

    /**
     * ========= MembershipFeature Services ========= Gets details of a membershipFeature.
     * @param {string} params.name - (Required) Required. The MembershipFeature resource name in the format `projects/*\/locations/*\/memberships/*\/features/*`.
     * @return {object} The API response object.
     */
    this.projects.locations.memberships.features.get = (params) => this._makeRequest('v2beta/{+name}', 'GET', params);

    /**
     * Lists MembershipFeatures in a given project and location.
     * @param {string} params.filter - Lists MembershipFeatures that match the filter expression, following the syntax outlined in https://google.aip.dev/160. Examples: - Feature with the name "helloworld" in project "foo-proj" and membership "member-bar": name = "projects/foo-proj/locations/global/memberships/member-bar/features/helloworld" - Features that have a label called `foo`: labels.foo:* - Features that have a label called `foo` whose value is `bar`: labels.foo = bar
     * @param {string} params.orderBy - One or more fields to compare and use to sort the output. See https://google.aip.dev/132#ordering.
     * @param {integer} params.pageSize - When requesting a 'page' of resources, `page_size` specifies number of resources to return. If unspecified or set to 0, all resources will be returned.
     * @param {string} params.pageToken - Token returned by previous call to `ListFeatures` which specifies the position in the list from where to continue listing the resources.
     * @param {string} params.parent - (Required) Required. The parent where the MembershipFeature will be listed. In the format: `projects/*\/locations/*\/memberships/*`.
     * @return {object} The API response object.
     */
    this.projects.locations.memberships.features.list = (params) => this._makeRequest('v2beta/{+parent}/features', 'GET', params);

    /**
     * Creates membershipFeature under a given parent.
     * @param {string} params.featureId - Required. The ID of the membership_feature to create.
     * @param {string} params.parent - (Required) Required. The name of parent where the MembershipFeature will be created. Specified in the format `projects/*\/locations/*\/memberships/*`.
     * @param {string} params.requestId - Idempotent request UUID.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.memberships.features.create = (params) => this._makeRequest('v2beta/{+parent}/features', 'POST', params);

    /**
     * Removes a membershipFeature.
     * @param {string} params.name - (Required) Required. The name of the membershipFeature to be deleted. Specified in the format `projects/*\/locations/*\/memberships/*\/features/*`.
     * @param {string} params.requestId - Idempotent request UUID.
     * @return {object} The API response object.
     */
    this.projects.locations.memberships.features.delete = (params) => this._makeRequest('v2beta/{+name}', 'DELETE', params);

    /**
     * Updates an existing MembershipFeature.
     * @param {boolean} params.allowMissing - Optional. If set to true, and the MembershipFeature is not found, a new MembershipFeature will be created. In this situation, `update_mask` is ignored.
     * @param {string} params.name - (Required) Output only. The resource name of the membershipFeature, in the format: `projects/{project}/locations/{location}/memberships/{membership}/features/{feature}`. Note that `membershipFeatures` is shortened to `features` in the resource name. (see http://go/aip/122#collection-identifiers)
     * @param {string} params.requestId - Idempotent request UUID.
     * @param {string} params.updateMask - Required. Mask of fields to update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.memberships.features.patch = (params) => this._makeRequest('v2beta/{+name}', 'PATCH', params);
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
