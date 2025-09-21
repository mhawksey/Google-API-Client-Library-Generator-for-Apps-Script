
/**
 * Google Apps Script client library for the Chrome Policy API
 * Documentation URL: http://developers.google.com/chrome/policy
 * @class
 */
class Chromepolicy {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://chromepolicy.googleapis.com/';
    this._servicePath = '';


    this.media = {};

    /**
     * Creates an enterprise file from the content provided by user. Returns a public download url for end user.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customer - (Required) Required. The customer for which the file upload will apply.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.media.upload = async (apiParams = {}, clientConfig = {}) => {
      // If apiParams.media is provided, use the upload path; otherwise, use the standard path.
      const path = apiParams.media ? '/upload/v1/{+customer}/policies/files:uploadPolicyFile' : 'v1/{+customer}/policies/files:uploadPolicyFile';
      return this._makeRequest(path, 'POST', apiParams, clientConfig);
    };

    this.customers = {};

    this.customers.policies = {};

    /**
     * Gets the resolved policy values for a list of policies that match a search query.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customer - (Required) ID of the G Suite account or literal "my_customer" for the customer associated to the request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.policies.resolve = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+customer}/policies:resolve', 'POST', apiParams, clientConfig);

    this.customers.policies.orgunits = {};

    /**
     * Modify multiple policy values that are applied to a specific org unit. All targets must have the same target format. That is to say that they must point to the same target resource and must have the same keys specified in `additionalTargetKeyNames`, though the values for those keys may be different. On failure the request will return the error details as part of the google.rpc.Status.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customer - (Required) ID of the G Suite account or literal "my_customer" for the customer associated to the request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.policies.orgunits.batchModify = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+customer}/policies/orgunits:batchModify', 'POST', apiParams, clientConfig);

    /**
     * Modify multiple policy values that are applied to a specific org unit so that they now inherit the value from a parent (if applicable). All targets must have the same target format. That is to say that they must point to the same target resource and must have the same keys specified in `additionalTargetKeyNames`, though the values for those keys may be different. On failure the request will return the error details as part of the google.rpc.Status.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customer - (Required) ID of the G Suite account or literal "my_customer" for the customer associated to the request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.policies.orgunits.batchInherit = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+customer}/policies/orgunits:batchInherit', 'POST', apiParams, clientConfig);

    this.customers.policies.groups = {};

    /**
     * Modify multiple policy values that are applied to a specific group. All targets must have the same target format. That is to say that they must point to the same target resource and must have the same keys specified in `additionalTargetKeyNames`, though the values for those keys may be different. On failure the request will return the error details as part of the google.rpc.Status.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customer - (Required) ID of the Google Workspace account or literal "my_customer" for the customer associated to the request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.policies.groups.batchModify = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+customer}/policies/groups:batchModify', 'POST', apiParams, clientConfig);

    /**
     * Delete multiple policy values that are applied to a specific group. All targets must have the same target format. That is to say that they must point to the same target resource and must have the same keys specified in `additionalTargetKeyNames`, though the values for those keys may be different. On failure the request will return the error details as part of the google.rpc.Status.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customer - (Required) ID of the Google Workspace account or literal "my_customer" for the customer associated to the request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.policies.groups.batchDelete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+customer}/policies/groups:batchDelete', 'POST', apiParams, clientConfig);

    /**
     * Retrieve a group priority ordering for an app. The target app must be supplied in `additionalTargetKeyNames` in the PolicyTargetKey. On failure the request will return the error details as part of the google.rpc.Status.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customer - (Required) Required. ID of the Google Workspace account or literal "my_customer" for the customer associated to the request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.policies.groups.listGroupPriorityOrdering = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+customer}/policies/groups:listGroupPriorityOrdering', 'POST', apiParams, clientConfig);

    /**
     * Update a group priority ordering for an app. The target app must be supplied in `additionalTargetKeyNames` in the PolicyTargetKey. On failure the request will return the error details as part of the google.rpc.Status.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customer - (Required) Required. ID of the Google Workspace account or literal "my_customer" for the customer associated to the request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.policies.groups.updateGroupPriorityOrdering = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+customer}/policies/groups:updateGroupPriorityOrdering', 'POST', apiParams, clientConfig);

    this.customers.policies.networks = {};

    /**
     * Creates a certificate at a specified OU for a customer.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customer - (Required) Required. The customer for which the certificate will apply.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.policies.networks.defineCertificate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+customer}/policies/networks:defineCertificate', 'POST', apiParams, clientConfig);

    /**
     * Remove an existing certificate by guid.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customer - (Required) Required. The customer whose certificate will be removed.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.policies.networks.removeCertificate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+customer}/policies/networks:removeCertificate', 'POST', apiParams, clientConfig);

    /**
     * Remove an existing network by guid.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customer - (Required) Required. The customer whose network will be removed.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.policies.networks.removeNetwork = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+customer}/policies/networks:removeNetwork', 'POST', apiParams, clientConfig);

    /**
     * Define a new network.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customer - (Required) Required. The customer who will own this new network.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.policies.networks.defineNetwork = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+customer}/policies/networks:defineNetwork', 'POST', apiParams, clientConfig);

    this.customers.policySchemas = {};

    /**
     * Get a specific policy schema for a customer by its resource name.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The policy schema resource name to query.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.policySchemas.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Gets a list of policy schemas that match a specified filter value for a given customer.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - The schema filter used to find a particular schema based on fields like its resource name, description and `additionalTargetKeyNames`.
     * @param {integer} apiParams.pageSize - The maximum number of policy schemas to return, defaults to 100 and has a maximum of 1000.
     * @param {string} apiParams.pageToken - The page token used to retrieve a specific page of the listing request.
     * @param {string} apiParams.parent - (Required) Required. The customer for which the listing request will apply.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customers.policySchemas.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/policySchemas', 'GET', apiParams, clientConfig);
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
