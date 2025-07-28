
/**
 * Google Apps Script client library for the BigQuery Data Policy API
 * Documentation URL: https://cloud.google.com/bigquery/docs/column-data-masking
 * @class
 */
class Bigquerydatapolicy {
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
    this._rootUrl = 'https://bigquerydatapolicy.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.locations = {};

    this.projects.locations.dataPolicies = {};

    /**
     * Creates a new data policy under a project with the given `dataPolicyId` (used as the display name), policy tag, and data policy type.
     * @param {string} params.parent - (Required) Required. Resource name of the project that the data policy will belong to. The format is `projects/{project_number}/locations/{location_id}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.dataPolicies.create = (params) => this._makeRequest('v1/{+parent}/dataPolicies', 'POST', params);

    /**
     * Updates the metadata for an existing data policy. The target data policy can be specified by the resource name.
     * @param {boolean} params.allowMissing - Optional. If set to true, and the data policy is not found, a new data policy will be created. In this situation, update_mask is ignored.
     * @param {string} params.name - (Required) Output only. Resource name of this data policy, in the format of `projects/{project_number}/locations/{location_id}/dataPolicies/{data_policy_id}`.
     * @param {string} params.updateMask - The update mask applies to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask If not set, defaults to all of the fields that are allowed to update. Updates to the `name` and `dataPolicyId` fields are not allowed.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.dataPolicies.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Renames the id (display name) of the specified data policy.
     * @param {string} params.name - (Required) Required. Resource name of the data policy to rename. The format is `projects/{project_number}/locations/{location_id}/dataPolicies/{data_policy_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.dataPolicies.rename = (params) => this._makeRequest('v1/{+name}:rename', 'POST', params);

    /**
     * Deletes the data policy specified by its resource name.
     * @param {boolean} params.force - Optional. If true, the data policy will be deleted even when it is referenced by one or more table columns.
     * @param {string} params.name - (Required) Required. Resource name of the data policy to delete. Format is `projects/{project_number}/locations/{location_id}/dataPolicies/{data_policy_id}`.
     * @return {object} The API response object.
     */
    this.projects.locations.dataPolicies.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Gets the data policy specified by its resource name.
     * @param {string} params.name - (Required) Required. Resource name of the requested data policy. Format is `projects/{project_number}/locations/{location_id}/dataPolicies/{data_policy_id}`.
     * @return {object} The API response object.
     */
    this.projects.locations.dataPolicies.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * List all of the data policies in the specified parent project.
     * @param {string} params.filter - Filters the data policies by policy tags that they are associated with. Currently filter only supports "policy_tag" based filtering and OR based predicates. Sample filter can be "policy_tag: projects/1/locations/us/taxonomies/2/policyTags/3". You may also use wildcard such as "policy_tag: projects/1/locations/us/taxonomies/2*". Please note that OR predicates cannot be used with wildcard filters.
     * @param {integer} params.pageSize - The maximum number of data policies to return. Must be a value between 1 and 1000. If not set, defaults to 50.
     * @param {string} params.pageToken - The `nextPageToken` value returned from a previous list request, if any. If not set, defaults to an empty string.
     * @param {string} params.parent - (Required) Required. Resource name of the project for which to list data policies. Format is `projects/{project_number}/locations/{location_id}`.
     * @return {object} The API response object.
     */
    this.projects.locations.dataPolicies.list = (params) => this._makeRequest('v1/{+parent}/dataPolicies', 'GET', params);

    /**
     * Gets the IAM policy for the specified data policy.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.dataPolicies.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'POST', params);

    /**
     * Sets the IAM policy for the specified data policy.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.dataPolicies.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Returns the caller's permission on the specified data policy resource.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.dataPolicies.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);
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
