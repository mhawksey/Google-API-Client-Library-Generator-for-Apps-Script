
/**
 * Google Apps Script client library for the Gmail Postmaster Tools API
 * Documentation URL: https://developers.google.com/workspace/gmail/postmaster
 * Generator: https://github.com/mhawksey/Google-API-Client-Library-Generator-for-Apps-Script/
 * @class
 */
class Gmailpostmastertools {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://gmailpostmastertools.googleapis.com/';
    this._servicePath = '';


    this.domainStats = {};

    /**
     * Executes a batch of QueryDomainStats requests for multiple domains. Returns PERMISSION_DENIED if you don't have permission to access DomainStats for any of the requested domains.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.domainStats.batchQuery = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/domainStats:batchQuery', 'POST', apiParams, clientConfig);

    this.domains = {};

    /**
     * Retrieves a list of all domains registered by you, along with their corresponding metadata. The order of domains in the response is unspecified and non-deterministic. Newly registered domains will not necessarily be added to the end of this list.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional. Requested page size. Server may return fewer domains than requested. If unspecified, the default value for this field is 10. The maximum value for this field is 200.
     * @param {string} apiParams.pageToken - Optional. The next_page_token value returned from a previous List request, if any.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.domains.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/domains', 'GET', apiParams, clientConfig);

    /**
     * [Developer Preview](https://developers.google.com/workspace/preview): Deletes a domain from the user's account. Returns NOT_FOUND if the domain is not registered by the user.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The domain to delete.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.domains.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * [Developer Preview](https://developers.google.com/workspace/preview): Verifies a user's ownership of a domain at the DNS level. Note that this is distinct from checking if the user has OWNER status within IRDB.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The domain to verify.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.domains.verify = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}:verify', 'POST', apiParams, clientConfig);

    /**
     * Retrieves detailed information about a domain registered by you. Returns NOT_FOUND if the domain is not registered by you. Domain represents the metadata of a domain that has been registered within the system and linked to a user.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The resource name of the domain. Format: `domains/{domain_name}`, where domain_name is the fully qualified domain name (i.e., mymail.mydomain.com).
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.domains.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Retrieves the compliance status for a given domain. Returns PERMISSION_DENIED if you don't have permission to access compliance status for the domain.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The resource name of the domain's compliance status to retrieve. Format: `domains/{domain_id}/complianceStatus`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.domains.getComplianceStatus = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);

    /**
     * [Developer Preview](https://developers.google.com/workspace/preview): Gets a verification token used for verifying a user's ownership over a domain.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The resource name of the verification token to retrieve. Format: `domains/{domain}/verificationToken`
     * @param {string} apiParams.verificationMethod - Required. The verification method used. Must be specified, i.e. TXT or CNAME.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.domains.getVerificationToken = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);

    /**
     * [Developer Preview](https://developers.google.com/workspace/preview): Adds a domain to the user's account. Returns INVALID_ARGUMENT if a domain is not provided. Returns ALREADY_EXISTS if the domain is already registered by the user.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.domains.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/domains', 'POST', apiParams, clientConfig);

    this.domains.users = {};

    /**
     * [Developer Preview](https://developers.google.com/workspace/preview): Creates a user, who has access to a domain. Returns INVALID_ARGUMENT if a user is not provided.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent resource where this user will be created. Format: domains/{domain}
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.domains.users.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/users', 'POST', apiParams, clientConfig);

    /**
     * [Developer Preview](https://developers.google.com/workspace/preview): Retrieves detailed information about a user that has access to a domain. Returns NOT_FOUND if the user does not exist.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The resource name of the user to retrieve. Format: `domains/{domain}/users/{user}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.domains.users.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);

    /**
     * [Developer Preview](https://developers.google.com/workspace/preview): Updates a user for a domain. Only Owners and Admins can execute this RPC, only a user's domain permission will be allowed to be updated. Returns NOT_FOUND if the user does not exist. Returns INVALID_ARGUMENT if a permission is not provided or is PERMISSION_UNSPECIFIED, NONE, or OWNER.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Identifier. The resource name of the user. Format: users/{user} Note: {user} is the user's email address.
     * @param {string} apiParams.updateMask - The list of fields to update.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.domains.users.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * [Developer Preview](https://developers.google.com/workspace/preview): Lists the users that have access to a domain.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional. Requested page size. Server may return fewer users than requested. If unspecified, the default value for this field is 10. The maximum value for this field is 200.
     * @param {string} apiParams.pageToken - Optional. The next_page_token value returned from a previous List request, if any.
     * @param {string} apiParams.parent - (Required) Required. The parent resource name for which to list users. Format: `domains/{domain}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.domains.users.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/users', 'GET', apiParams, clientConfig);

    /**
     * [Developer Preview](https://developers.google.com/workspace/preview): Deletes a user from a domain. Returns NOT_FOUND if the user does not exist.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The resource name of the user to delete. Format: domains/{domain}/users/{user}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.domains.users.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'DELETE', apiParams, clientConfig);

    this.domains.domainStats = {};

    /**
     * Retrieves a list of domain statistics for a given domain and time period. Returns statistics only for dates where data is available. Returns PERMISSION_DENIED if you don't have permission to access DomainStats for the domain.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent resource name where the stats are queried. Format: domains/{domain}
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.domains.domainStats.query = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/domainStats:query', 'POST', apiParams, clientConfig);
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
