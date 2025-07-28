
/**
 * Google Apps Script client library for the Secret Manager API
 * Documentation URL: https://cloud.google.com/secret-manager/
 * @class
 */
class Secretmanager {
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
    this._rootUrl = 'https://secretmanager.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.locations = {};

    /**
     * Lists information about the supported locations for this service.
     * @param {string} params.extraLocationTypes - Optional. A list of extra location types that should be used as conditions for controlling the visibility of the locations.
     * @param {string} params.filter - A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
     * @param {string} params.name - (Required) The resource that owns the locations collection, if applicable.
     * @param {integer} params.pageSize - The maximum number of results to return. If not set, the service selects a default.
     * @param {string} params.pageToken - A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
     * @return {object} The API response object.
     */
    this.projects.locations.list = (params) => this._makeRequest('v1beta1/{+name}/locations', 'GET', params);

    /**
     * Gets information about a location.
     * @param {string} params.name - (Required) Resource name for the location.
     * @return {object} The API response object.
     */
    this.projects.locations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    this.projects.secrets = {};

    /**
     * Lists Secrets.
     * @param {integer} params.pageSize - Optional. The maximum number of results to be returned in a single page. If set to 0, the server decides the number of results to return. If the number is greater than 25000, it is capped at 25000.
     * @param {string} params.pageToken - Optional. Pagination token, returned earlier via ListSecretsResponse.next_page_token.
     * @param {string} params.parent - (Required) Required. The resource name of the project associated with the Secrets, in the format `projects/*`.
     * @return {object} The API response object.
     */
    this.projects.secrets.list = (params) => this._makeRequest('v1beta1/{+parent}/secrets', 'GET', params);

    /**
     * Creates a new Secret containing no SecretVersions.
     * @param {string} params.parent - (Required) Required. The resource name of the project to associate with the Secret, in the format `projects/*`.
     * @param {string} params.secretId - Required. This must be unique within the project. A secret ID is a string with a maximum length of 255 characters and can contain uppercase and lowercase letters, numerals, and the hyphen (`-`) and underscore (`_`) characters.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.secrets.create = (params) => this._makeRequest('v1beta1/{+parent}/secrets', 'POST', params);

    /**
     * Creates a new SecretVersion containing secret data and attaches it to an existing Secret.
     * @param {string} params.parent - (Required) Required. The resource name of the Secret to associate with the SecretVersion in the format `projects/*\/secrets/*`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.secrets.addVersion = (params) => this._makeRequest('v1beta1/{+parent}:addVersion', 'POST', params);

    /**
     * Gets metadata for a given Secret.
     * @param {string} params.name - (Required) Required. The resource name of the Secret, in the format `projects/*\/secrets/*`.
     * @return {object} The API response object.
     */
    this.projects.secrets.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Updates metadata of an existing Secret.
     * @param {string} params.name - (Required) Output only. The resource name of the Secret in the format `projects/*\/secrets/*`.
     * @param {string} params.updateMask - Required. Specifies the fields to be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.secrets.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    /**
     * Deletes a Secret.
     * @param {string} params.name - (Required) Required. The resource name of the Secret to delete in the format `projects/*\/secrets/*`.
     * @return {object} The API response object.
     */
    this.projects.secrets.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Sets the access control policy on the specified secret. Replaces any existing policy. Permissions on SecretVersions are enforced according to the policy set on the associated Secret.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.secrets.setIamPolicy = (params) => this._makeRequest('v1beta1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a secret. Returns empty policy if the secret exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.secrets.getIamPolicy = (params) => this._makeRequest('v1beta1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has for the specified secret. If the secret does not exist, this call returns an empty set of permissions, not a NOT_FOUND error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.secrets.testIamPermissions = (params) => this._makeRequest('v1beta1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.secrets.versions = {};

    /**
     * Lists SecretVersions. This call does not return secret data.
     * @param {integer} params.pageSize - Optional. The maximum number of results to be returned in a single page. If set to 0, the server decides the number of results to return. If the number is greater than 25000, it is capped at 25000.
     * @param {string} params.pageToken - Optional. Pagination token, returned earlier via ListSecretVersionsResponse.next_page_token][].
     * @param {string} params.parent - (Required) Required. The resource name of the Secret associated with the SecretVersions to list, in the format `projects/*\/secrets/*`.
     * @return {object} The API response object.
     */
    this.projects.secrets.versions.list = (params) => this._makeRequest('v1beta1/{+parent}/versions', 'GET', params);

    /**
     * Gets metadata for a SecretVersion. `projects/*\/secrets/*\/versions/latest` is an alias to the `latest` SecretVersion.
     * @param {string} params.name - (Required) Required. The resource name of the SecretVersion in the format `projects/*\/secrets/*\/versions/*`. `projects/*\/secrets/*\/versions/latest` is an alias to the `latest` SecretVersion.
     * @return {object} The API response object.
     */
    this.projects.secrets.versions.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Accesses a SecretVersion. This call returns the secret data. `projects/*\/secrets/*\/versions/latest` is an alias to the `latest` SecretVersion.
     * @param {string} params.name - (Required) Required. The resource name of the SecretVersion in the format `projects/*\/secrets/*\/versions/*`.
     * @return {object} The API response object.
     */
    this.projects.secrets.versions.access = (params) => this._makeRequest('v1beta1/{+name}:access', 'GET', params);

    /**
     * Disables a SecretVersion. Sets the state of the SecretVersion to DISABLED.
     * @param {string} params.name - (Required) Required. The resource name of the SecretVersion to disable in the format `projects/*\/secrets/*\/versions/*`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.secrets.versions.disable = (params) => this._makeRequest('v1beta1/{+name}:disable', 'POST', params);

    /**
     * Enables a SecretVersion. Sets the state of the SecretVersion to ENABLED.
     * @param {string} params.name - (Required) Required. The resource name of the SecretVersion to enable in the format `projects/*\/secrets/*\/versions/*`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.secrets.versions.enable = (params) => this._makeRequest('v1beta1/{+name}:enable', 'POST', params);

    /**
     * Destroys a SecretVersion. Sets the state of the SecretVersion to DESTROYED and irrevocably destroys the secret data.
     * @param {string} params.name - (Required) Required. The resource name of the SecretVersion to destroy in the format `projects/*\/secrets/*\/versions/*`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.secrets.versions.destroy = (params) => this._makeRequest('v1beta1/{+name}:destroy', 'POST', params);
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
