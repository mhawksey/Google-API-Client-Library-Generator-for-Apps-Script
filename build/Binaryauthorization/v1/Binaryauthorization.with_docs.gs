
/**
 * Google Apps Script client library for the Binary Authorization API
 * Documentation URL: https://cloud.google.com/binary-authorization/
 * @class
 */
class Binaryauthorization {
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
    this._rootUrl = 'https://binaryauthorization.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    /**
     * A policy specifies the attestors that must attest to a container image, before the project is allowed to deploy that image. There is at most one policy per project. All image admission requests are permitted if a project has no policy. Gets the policy for this project. Returns a default policy if the project does not have one.
     * @param {string} params.name - (Required) Required. The resource name of the policy to retrieve, in the format `projects/*\/policy`.
     * @return {object} The API response object.
     */
    this.projects.getPolicy = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates or updates a project's policy, and returns a copy of the new policy. A policy is always updated as a whole, to avoid race conditions with concurrent policy enforcement (or management!) requests. Returns `NOT_FOUND` if the project does not exist, `INVALID_ARGUMENT` if the request is malformed.
     * @param {string} params.name - (Required) Output only. The resource name, in the format `projects/*\/policy`. There is at most one policy per project.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.updatePolicy = (params) => this._makeRequest('v1/{+name}', 'PUT', params);

    this.projects.platforms = {};

    this.projects.platforms.gke = {};

    this.projects.platforms.gke.policies = {};

    /**
     * Evaluates a Kubernetes object versus a GKE platform policy. Returns `NOT_FOUND` if the policy doesn't exist, `INVALID_ARGUMENT` if the policy or request is malformed and `PERMISSION_DENIED` if the client does not have sufficient permissions.
     * @param {string} params.name - (Required) Required. The name of the platform policy to evaluate in the format `projects/*\/platforms/*\/policies/*`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.platforms.gke.policies.evaluate = (params) => this._makeRequest('v1/{+name}:evaluate', 'POST', params);

    this.projects.platforms.policies = {};

    /**
     * Creates a platform policy, and returns a copy of it. Returns `NOT_FOUND` if the project or platform doesn't exist, `INVALID_ARGUMENT` if the request is malformed, `ALREADY_EXISTS` if the policy already exists, and `INVALID_ARGUMENT` if the policy contains a platform-specific policy that does not match the platform value specified in the URL.
     * @param {string} params.parent - (Required) Required. The parent of this platform policy.
     * @param {string} params.policyId - Required. The platform policy ID.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.platforms.policies.create = (params) => this._makeRequest('v1/{+parent}/policies', 'POST', params);

    /**
     * Gets a platform policy. Returns `NOT_FOUND` if the policy doesn't exist.
     * @param {string} params.name - (Required) Required. The name of the platform policy to retrieve in the format `projects/*\/platforms/*\/policies/*`.
     * @return {object} The API response object.
     */
    this.projects.platforms.policies.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Replaces a platform policy. Returns `NOT_FOUND` if the policy doesn't exist.
     * @param {string} params.name - (Required) Output only. The relative resource name of the Binary Authorization platform policy, in the form of `projects/*\/platforms/*\/policies/*`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.platforms.policies.replacePlatformPolicy = (params) => this._makeRequest('v1/{+name}', 'PUT', params);

    /**
     * Lists platform policies owned by a project in the specified platform. Returns `INVALID_ARGUMENT` if the project or the platform doesn't exist.
     * @param {integer} params.pageSize - Requested page size. The server may return fewer results than requested. If unspecified, the server picks an appropriate default.
     * @param {string} params.pageToken - A token identifying a page of results the server should return. Typically, this is the value of ListPlatformPoliciesResponse.next_page_token returned from the previous call to the `ListPlatformPolicies` method.
     * @param {string} params.parent - (Required) Required. The resource name of the platform associated with the platform policies using the format `projects/*\/platforms/*`.
     * @return {object} The API response object.
     */
    this.projects.platforms.policies.list = (params) => this._makeRequest('v1/{+parent}/policies', 'GET', params);

    /**
     * Deletes a platform policy. Returns `NOT_FOUND` if the policy doesn't exist.
     * @param {string} params.etag - Optional. Used to prevent deleting the policy when another request has updated it since it was retrieved.
     * @param {string} params.name - (Required) Required. The name of the platform policy to delete, in the format `projects/*\/platforms/*\/policies/*`.
     * @return {object} The API response object.
     */
    this.projects.platforms.policies.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.attestors = {};

    /**
     * Creates an attestor, and returns a copy of the new attestor. Returns `NOT_FOUND` if the project does not exist, `INVALID_ARGUMENT` if the request is malformed, `ALREADY_EXISTS` if the attestor already exists.
     * @param {string} params.attestorId - Required. The attestors ID.
     * @param {string} params.parent - (Required) Required. The parent of this attestor.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.attestors.create = (params) => this._makeRequest('v1/{+parent}/attestors', 'POST', params);

    /**
     * Gets an attestor. Returns `NOT_FOUND` if the attestor does not exist.
     * @param {string} params.name - (Required) Required. The name of the attestor to retrieve, in the format `projects/*\/attestors/*`.
     * @return {object} The API response object.
     */
    this.projects.attestors.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Updates an attestor. Returns `NOT_FOUND` if the attestor does not exist.
     * @param {string} params.name - (Required) Required. The resource name, in the format: `projects/*\/attestors/*`. This field may not be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.attestors.update = (params) => this._makeRequest('v1/{+name}', 'PUT', params);

    /**
     * Lists attestors. Returns `INVALID_ARGUMENT` if the project does not exist.
     * @param {integer} params.pageSize - Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
     * @param {string} params.pageToken - A token identifying a page of results the server should return. Typically, this is the value of ListAttestorsResponse.next_page_token returned from the previous call to the `ListAttestors` method.
     * @param {string} params.parent - (Required) Required. The resource name of the project associated with the attestors, in the format `projects/*`.
     * @return {object} The API response object.
     */
    this.projects.attestors.list = (params) => this._makeRequest('v1/{+parent}/attestors', 'GET', params);

    /**
     * Deletes an attestor. Returns `NOT_FOUND` if the attestor does not exist.
     * @param {string} params.name - (Required) Required. The name of the attestors to delete, in the format `projects/*\/attestors/*`.
     * @return {object} The API response object.
     */
    this.projects.attestors.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Returns whether the given `Attestation` for the given image URI was signed by the given `Attestor`
     * @param {string} params.attestor - (Required) Required. The resource name of the Attestor of the occurrence, in the format `projects/*\/attestors/*`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.attestors.validateAttestationOccurrence = (params) => this._makeRequest('v1/{+attestor}:validateAttestationOccurrence', 'POST', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.attestors.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.attestors.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.attestors.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.policy = {};

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.policy.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.policy.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.policy.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.systempolicy = {};

    /**
     * Gets the current system policy in the specified location.
     * @param {string} params.name - (Required) Required. The resource name, in the format `locations/*\/policy`. Note that the system policy is not associated with a project.
     * @return {object} The API response object.
     */
    this.systempolicy.getPolicy = (params) => this._makeRequest('v1/{+name}', 'GET', params);
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
