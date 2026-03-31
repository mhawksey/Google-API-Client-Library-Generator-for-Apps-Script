
/**
 * Google Apps Script client library for the reCAPTCHA Enterprise API
 * Documentation URL: https://cloud.google.com/recaptcha-enterprise/
 * @class
 */
class Recaptchaenterprise {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://recaptchaenterprise.googleapis.com/';
    this._servicePath = '';


    this.projects = {};

    this.projects.assessments = {};

    /**
     * Creates an Assessment of the likelihood an event is legitimate.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The name of the project in which the assessment is created, in the format `projects/{project}`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.assessments.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/assessments', 'POST', apiParams, clientConfig);

    /**
     * Annotates a previously created Assessment to provide additional information on whether the event turned out to be authentic or fraudulent.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The resource name of the Assessment, in the format `projects/{project}/assessments/{assessment}`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.assessments.annotate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:annotate', 'POST', apiParams, clientConfig);

    this.projects.keys = {};

    /**
     * Creates a new reCAPTCHA Enterprise key.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The name of the project in which the key is created, in the format `projects/{project}`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.keys.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/keys', 'POST', apiParams, clientConfig);

    /**
     * Returns the list of all keys that belong to a project.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of keys to return. Default is 10. Max limit is 1000.
     * @param {string} apiParams.pageToken - Optional. The next_page_token value returned from a previous. ListKeysRequest, if any.
     * @param {string} apiParams.parent - (Required) Required. The name of the project that contains the keys that is listed, in the format `projects/{project}`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.keys.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/keys', 'GET', apiParams, clientConfig);

    /**
     * Returns the secret key related to the specified public key. You must use the legacy secret key only in a 3rd party integration with legacy reCAPTCHA.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.key - (Required) Required. The public key name linked to the requested secret key in the format `projects/{project}/keys/{key}`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.keys.retrieveLegacySecretKey = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+key}:retrieveLegacySecretKey', 'GET', apiParams, clientConfig);

    /**
     * Returns the specified key.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the requested key, in the format `projects/{project}/keys/{key}`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.keys.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Updates the specified key.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Identifier. The resource name for the Key in the format `projects/{project}/keys/{key}`.
     * @param {string} apiParams.updateMask - Optional. The mask to control which fields of the key get updated. If the mask is not present, all fields are updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.keys.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes the specified key.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the key to be deleted, in the format `projects/{project}/keys/{key}`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.keys.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Migrates an existing key from reCAPTCHA to reCAPTCHA Enterprise. Once a key is migrated, it can be used from either product. SiteVerify requests are billed as CreateAssessment calls. You must be authenticated as one of the current owners of the reCAPTCHA Key, and your user must have the reCAPTCHA Enterprise Admin IAM role in the destination project.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the key to be migrated, in the format `projects/{project}/keys/{key}`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.keys.migrate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:migrate', 'POST', apiParams, clientConfig);

    /**
     * Adds an IP override to a key. The following restrictions hold: * The maximum number of IP overrides per key is 1000. * For any conflict (such as IP already exists or IP part of an existing IP range), an error is returned.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the key to which the IP override is added, in the format `projects/{project}/keys/{key}`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.keys.addIpOverride = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:addIpOverride', 'POST', apiParams, clientConfig);

    /**
     * Removes an IP override from a key. The following restrictions hold: * If the IP isn't found in an existing IP override, a `NOT_FOUND` error is returned. * If the IP is found in an existing IP override, but the override type does not match, a `NOT_FOUND` error is returned.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the key from which the IP override is removed, in the format `projects/{project}/keys/{key}`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.keys.removeIpOverride = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:removeIpOverride', 'POST', apiParams, clientConfig);

    /**
     * Lists all IP overrides for a key.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of overrides to return. Default is 10. Max limit is 100. If the number of overrides is less than the page_size, all overrides are returned. If the page size is more than 100, it is coerced to 100.
     * @param {string} apiParams.pageToken - Optional. The next_page_token value returned from a previous ListIpOverridesRequest, if any.
     * @param {string} apiParams.parent - (Required) Required. The parent key for which the IP overrides are listed, in the format `projects/{project}/keys/{key}`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.keys.listIpOverrides = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}:listIpOverrides', 'GET', apiParams, clientConfig);

    /**
     * Get some aggregated metrics for a Key. This data can be used to build dashboards.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the requested metrics, in the format `projects/{project}/keys/{key}/metrics`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.keys.getMetrics = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.projects.firewallpolicies = {};

    /**
     * Creates a new FirewallPolicy, specifying conditions at which reCAPTCHA Enterprise actions can be executed. A project may have a maximum of 1000 policies.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The name of the project this policy applies to, in the format `projects/{project}`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.firewallpolicies.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/firewallpolicies', 'POST', apiParams, clientConfig);

    /**
     * Returns the list of all firewall policies that belong to a project.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of policies to return. Default is 10. Max limit is 1000.
     * @param {string} apiParams.pageToken - Optional. The next_page_token value returned from a previous. ListFirewallPoliciesRequest, if any.
     * @param {string} apiParams.parent - (Required) Required. The name of the project to list the policies for, in the format `projects/{project}`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.firewallpolicies.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/firewallpolicies', 'GET', apiParams, clientConfig);

    /**
     * Returns the specified firewall policy.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the requested policy, in the format `projects/{project}/firewallpolicies/{firewallpolicy}`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.firewallpolicies.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Updates the specified firewall policy.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Identifier. The resource name for the FirewallPolicy in the format `projects/{project}/firewallpolicies/{firewallpolicy}`.
     * @param {string} apiParams.updateMask - Optional. The mask to control which fields of the policy get updated. If the mask is not present, all fields are updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.firewallpolicies.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes the specified firewall policy.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the policy to be deleted, in the format `projects/{project}/firewallpolicies/{firewallpolicy}`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.firewallpolicies.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Reorders all firewall policies.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The name of the project to list the policies for, in the format `projects/{project}`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.firewallpolicies.reorder = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/firewallpolicies:reorder', 'POST', apiParams, clientConfig);

    this.projects.relatedaccountgroups = {};

    /**
     * List groups of related accounts.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of groups to return. The service might return fewer than this value. If unspecified, at most 50 groups are returned. The maximum value is 1000; values above 1000 are coerced to 1000.
     * @param {string} apiParams.pageToken - Optional. A page token, received from a previous `ListRelatedAccountGroups` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListRelatedAccountGroups` must match the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. The name of the project to list related account groups from, in the format `projects/{project}`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.relatedaccountgroups.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/relatedaccountgroups', 'GET', apiParams, clientConfig);

    this.projects.relatedaccountgroups.memberships = {};

    /**
     * Get memberships in a group of related accounts.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of accounts to return. The service might return fewer than this value. If unspecified, at most 50 accounts are returned. The maximum value is 1000; values above 1000 are coerced to 1000.
     * @param {string} apiParams.pageToken - Optional. A page token, received from a previous `ListRelatedAccountGroupMemberships` call. When paginating, all other parameters provided to `ListRelatedAccountGroupMemberships` must match the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. The resource name for the related account group in the format `projects/{project}/relatedaccountgroups/{relatedaccountgroup}`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.relatedaccountgroups.memberships.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/memberships', 'GET', apiParams, clientConfig);

    this.projects.relatedaccountgroupmemberships = {};

    /**
     * Search group memberships related to a given account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.project - (Required) Required. The name of the project to search related account group memberships from. Specify the project name in the following format: `projects/{project}`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.relatedaccountgroupmemberships.search = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+project}/relatedaccountgroupmemberships:search', 'POST', apiParams, clientConfig);
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
