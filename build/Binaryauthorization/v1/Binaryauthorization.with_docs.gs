
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
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://binaryauthorization.googleapis.com/';
    this._servicePath = '';


    this.projects = {};

    /**
     * A policy specifies the attestors that must attest to a container image, before the project is allowed to deploy that image. There is at most one policy per project. All image admission requests are permitted if a project has no policy. Gets the policy for this project. Returns a default policy if the project does not have one.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The resource name of the policy to retrieve, in the format `projects/*\/policy`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.getPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Creates or updates a project's policy, and returns a copy of the new policy. A policy is always updated as a whole, to avoid race conditions with concurrent policy enforcement (or management!) requests. Returns `NOT_FOUND` if the project does not exist, `INVALID_ARGUMENT` if the request is malformed.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Output only. The resource name, in the format `projects/*\/policy`. There is at most one policy per project.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.updatePolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PUT', apiParams, clientConfig);

    this.projects.platforms = {};

    this.projects.platforms.gke = {};

    this.projects.platforms.gke.policies = {};

    /**
     * Evaluates a Kubernetes object versus a GKE platform policy. Returns `NOT_FOUND` if the policy doesn't exist, `INVALID_ARGUMENT` if the policy or request is malformed and `PERMISSION_DENIED` if the client does not have sufficient permissions.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the platform policy to evaluate in the format `projects/*\/platforms/*\/policies/*`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.platforms.gke.policies.evaluate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:evaluate', 'POST', apiParams, clientConfig);

    this.projects.platforms.policies = {};

    /**
     * Creates a platform policy, and returns a copy of it. Returns `NOT_FOUND` if the project or platform doesn't exist, `INVALID_ARGUMENT` if the request is malformed, `ALREADY_EXISTS` if the policy already exists, and `INVALID_ARGUMENT` if the policy contains a platform-specific policy that does not match the platform value specified in the URL.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent of this platform policy.
     * @param {string} apiParams.policyId - Required. The platform policy ID.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.platforms.policies.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/policies', 'POST', apiParams, clientConfig);

    /**
     * Gets a platform policy. Returns `NOT_FOUND` if the policy doesn't exist.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the platform policy to retrieve in the format `projects/*\/platforms/*\/policies/*`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.platforms.policies.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Replaces a platform policy. Returns `NOT_FOUND` if the policy doesn't exist.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Output only. The relative resource name of the Binary Authorization platform policy, in the form of `projects/*\/platforms/*\/policies/*`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.platforms.policies.replacePlatformPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PUT', apiParams, clientConfig);

    /**
     * Lists platform policies owned by a project in the specified platform. Returns `INVALID_ARGUMENT` if the project or the platform doesn't exist.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Requested page size. The server may return fewer results than requested. If unspecified, the server picks an appropriate default.
     * @param {string} apiParams.pageToken - A token identifying a page of results the server should return. Typically, this is the value of ListPlatformPoliciesResponse.next_page_token returned from the previous call to the `ListPlatformPolicies` method.
     * @param {string} apiParams.parent - (Required) Required. The resource name of the platform associated with the platform policies using the format `projects/*\/platforms/*`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.platforms.policies.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/policies', 'GET', apiParams, clientConfig);

    /**
     * Deletes a platform policy. Returns `NOT_FOUND` if the policy doesn't exist.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.etag - Optional. Used to prevent deleting the policy when another request has updated it since it was retrieved.
     * @param {string} apiParams.name - (Required) Required. The name of the platform policy to delete, in the format `projects/*\/platforms/*\/policies/*`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.platforms.policies.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.attestors = {};

    /**
     * Creates an attestor, and returns a copy of the new attestor. Returns `NOT_FOUND` if the project does not exist, `INVALID_ARGUMENT` if the request is malformed, `ALREADY_EXISTS` if the attestor already exists.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.attestorId - Required. The attestors ID.
     * @param {string} apiParams.parent - (Required) Required. The parent of this attestor.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.attestors.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/attestors', 'POST', apiParams, clientConfig);

    /**
     * Gets an attestor. Returns `NOT_FOUND` if the attestor does not exist.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the attestor to retrieve, in the format `projects/*\/attestors/*`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.attestors.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Updates an attestor. Returns `NOT_FOUND` if the attestor does not exist.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The resource name, in the format: `projects/*\/attestors/*`. This field may not be updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.attestors.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PUT', apiParams, clientConfig);

    /**
     * Lists attestors. Returns `INVALID_ARGUMENT` if the project does not exist.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
     * @param {string} apiParams.pageToken - A token identifying a page of results the server should return. Typically, this is the value of ListAttestorsResponse.next_page_token returned from the previous call to the `ListAttestors` method.
     * @param {string} apiParams.parent - (Required) Required. The resource name of the project associated with the attestors, in the format `projects/*`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.attestors.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/attestors', 'GET', apiParams, clientConfig);

    /**
     * Deletes an attestor. Returns `NOT_FOUND` if the attestor does not exist.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the attestors to delete, in the format `projects/*\/attestors/*`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.attestors.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Returns whether the given `Attestation` for the given image URI was signed by the given `Attestor`
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.attestor - (Required) Required. The resource name of the Attestor of the occurrence, in the format `projects/*\/attestors/*`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.attestors.validateAttestationOccurrence = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+attestor}:validateAttestationOccurrence', 'POST', apiParams, clientConfig);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.attestors.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} apiParams.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.attestors.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', apiParams, clientConfig);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.attestors.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);

    this.projects.policy = {};

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.policy.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} apiParams.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.policy.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', apiParams, clientConfig);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.policy.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);

    this.systempolicy = {};

    /**
     * Gets the current system policy in the specified location.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The resource name, in the format `locations/*\/policy`. Note that the system policy is not associated with a project.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.systempolicy.getPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
  }

/**
 * @private Builds the full request URL and options object for a request.
 */
_buildRequestDetails(path, httpMethod, apiParams, clientConfig = {}) {
    let url;
    if (path.startsWith('/upload/')) {
        url = 'https://www.googleapis.com' + path;
    } else {
        url = this._rootUrl + this._servicePath + path;
    }

    const remainingParams = { ...apiParams };
    const pathParams = url.match(/{[^{}]+}/g) || [];

    pathParams.forEach(placeholder => {
        const isPlus = placeholder.startsWith('{+');
        const paramName = placeholder.slice(isPlus ? 2 : 1, -1);
        if (Object.prototype.hasOwnProperty.call(remainingParams, paramName)) {
            url = url.replace(placeholder, remainingParams[paramName]);
            delete remainingParams[paramName];
        }
    });

    const options = {
        method: httpMethod,
        headers: {
            'Authorization': 'Bearer ' + this._token,
            ...(clientConfig.headers || {}),
        },
        muteHttpExceptions: true,
    };

    if (apiParams && apiParams.media && apiParams.media.body) {
        let mediaBlob;
        // Check if the body is already a blob by "duck typing" for the getBytes method.
        if (apiParams.media.body.getBytes && typeof apiParams.media.body.getBytes === 'function') {
            mediaBlob = apiParams.media.body;
        } else {
            // If it's not a blob (e.g., a string or byte array), create one.
            mediaBlob = Utilities.newBlob(apiParams.media.body);
        }

        const hasMetadata = apiParams.requestBody && Object.keys(apiParams.requestBody).length > 0;

        if (hasMetadata) {
            // ** Multipart Upload (Media + Metadata) **
            remainingParams.uploadType = 'multipart';
            
            const boundary = '----' + Utilities.getUuid();
            const metadata = apiParams.requestBody;

            let requestData = '--' + boundary + '\r\n';
            requestData += 'Content-Type: application/json; charset=UTF-8\r\n\r\n';
            requestData += JSON.stringify(metadata) + '\r\n';
            requestData += '--' + boundary + '\r\n';
            requestData += 'Content-Type: ' + apiParams.media.mimeType + '\r\n\r\n';
            
            const payloadBytes = Utilities.newBlob(requestData).getBytes()
                .concat(mediaBlob.getBytes())
                .concat(Utilities.newBlob('\r\n--' + boundary + '--').getBytes());

            options.contentType = 'multipart/related; boundary=' + boundary;
            options.payload = payloadBytes;

        } else {
            // ** Simple Media Upload (Media only) **
            remainingParams.uploadType = 'media';

            options.contentType = mediaBlob.getContentType();
            options.payload = mediaBlob.getBytes();
        }

    } else if (apiParams && apiParams.requestBody) {
        options.contentType = 'application/json';
        options.payload = JSON.stringify(apiParams.requestBody);
    }
    const queryParts = [];
    for (const key in remainingParams) {
        if (key !== 'requestBody' && key !== 'media') {
            queryParts.push(`${encodeURIComponent(key)}=${encodeURIComponent(remainingParams[key])}`);
        }
    }
    if (queryParts.length > 0) {
        url += '?' + queryParts.join('&');
    }

    return { url, options };
}

  /**
   * @private Makes the HTTP request with exponential backoff for retries.
   * @return {Promise<object>} A promise that resolves with the response object.
   */
  async _makeRequest(path, httpMethod, apiParams, clientConfig = {}) {
    const isMediaDownload = apiParams.alt === 'media';

    const { url, options } = this._buildRequestDetails(path, httpMethod, apiParams, clientConfig);

    for (let i = 0; i <= this._backoffConfig.retries; i++) {
      const response = UrlFetchApp.fetch(url, options);
      const responseCode = response.getResponseCode();
      const responseHeaders = response.getAllHeaders();

      if (responseCode >= 200 && responseCode < 300) {
        // Prioritize responseType:'blob' and media downloads to return raw data.
        if ((clientConfig && (clientConfig.responseType === 'blob' || clientConfig.responseType === 'stream')) || isMediaDownload) {
          return {
            data: response.getBlob(),
            status: responseCode,
            headers: responseHeaders,
          };
        }

        const responseText = response.getContentText();
        // Handle empty responses, which are valid (e.g., a 204 No Content).
        const responseBody = responseText ? JSON.parse(responseText) : {};
        return {
          data: responseBody,
          status: responseCode,
          headers: responseHeaders,
        };
      }

      const retryableErrors = [429, 500, 503];
      if (retryableErrors.includes(responseCode) && i < this._backoffConfig.retries) {
        const delay = this._backoffConfig.baseDelay * Math.pow(2, i) + Math.random() * 1000;
        Utilities.sleep(delay);
        continue;
      }

      const responseText = response.getContentText(); // Get response text for error
      let errorMessage = `Request failed with status ${responseCode}`;
      try {
        const errorObj = JSON.parse(responseText);
        if (errorObj.error && errorObj.error.message) {
          errorMessage += `: ${errorObj.error.message}`;
        }
      } catch (e) {
        // If the error response isn't JSON, include the raw text.
        if (responseText) {
          errorMessage += `. Response: ${responseText}`;
        }
      }
      throw new Error(errorMessage);
    }

    throw new Error('Request failed after multiple retries.');
  }
}
