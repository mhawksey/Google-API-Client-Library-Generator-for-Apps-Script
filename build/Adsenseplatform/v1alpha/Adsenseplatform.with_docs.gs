
/**
 * Google Apps Script client library for the AdSense Platform API
 * Documentation URL: https://developers.google.com/adsense/platforms/
 * @class
 */
class Adsenseplatform {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://adsenseplatform.googleapis.com/';
    this._servicePath = '';


    this.platforms = {};

    this.platforms.accounts = {};

    /**
     * Gets information about the selected sub-account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Account to get information about. Format: platforms/{platform}/accounts/{account_id}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.platforms.accounts.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Looks up information about a sub-account for a specified creation_request_id. If no account exists for the given creation_request_id, returns 404.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.creationRequestId - Optional. The creation_request_id provided when calling createAccount.
     * @param {string} apiParams.parent - (Required) Required. Platform who parents the account. Format: platforms/{platform}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.platforms.accounts.lookup = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/accounts:lookup', 'GET', apiParams, clientConfig);

    /**
     * Lists a partial view of sub-accounts for a specific parent account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of accounts to include in the response, used for paging. If unspecified, at most 10000 accounts will be returned. The maximum value is 10000; values above 10000 will be coerced to 10000.
     * @param {string} apiParams.pageToken - Optional. A page token, received from a previous `ListAccounts` call. Provide this to retrieve the subsequent page.
     * @param {string} apiParams.parent - (Required) Required. Platform who parents the accounts. Format: platforms/{platform}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.platforms.accounts.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/accounts', 'GET', apiParams, clientConfig);

    /**
     * Creates a sub-account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. Platform to create an account for. Format: platforms/{platform}
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.platforms.accounts.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/accounts', 'POST', apiParams, clientConfig);

    /**
     * Closes a sub-account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Account to close. Format: platforms/{platform}/accounts/{account_id}
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.platforms.accounts.close = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}:close', 'POST', apiParams, clientConfig);

    this.platforms.accounts.events = {};

    /**
     * Creates an account event.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. Account to log events about. Format: platforms/{platform}/accounts/{account}
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.platforms.accounts.events.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/events', 'POST', apiParams, clientConfig);

    this.platforms.accounts.sites = {};

    /**
     * Gets a site from a specified sub-account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the site to retrieve. Format: platforms/{platform}/accounts/{account}/sites/{site}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.platforms.accounts.sites.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists sites for a specific account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of sites to include in the response, used for paging. If unspecified, at most 10000 sites will be returned. The maximum value is 10000; values above 10000 will be coerced to 10000.
     * @param {string} apiParams.pageToken - A page token, received from a previous `ListSites` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListSites` must match the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. The account which owns the sites. Format: platforms/{platform}/accounts/{account}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.platforms.accounts.sites.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/sites', 'GET', apiParams, clientConfig);

    /**
     * Creates a site for a specified account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. Account to create site. Format: platforms/{platform}/accounts/{account_id}
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.platforms.accounts.sites.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/sites', 'POST', apiParams, clientConfig);

    /**
     * Requests the review of a site. The site should be in REQUIRES_REVIEW or NEEDS_ATTENTION state. Note: Make sure you place an [ad tag](https://developers.google.com/adsense/platforms/direct/ad-tags) on your site before requesting a review.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the site to submit for review. Format: platforms/{platform}/accounts/{account}/sites/{site}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.platforms.accounts.sites.requestReview = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}:requestReview', 'POST', apiParams, clientConfig);

    /**
     * Deletes a site from a specified account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the site to delete. Format: platforms/{platform}/accounts/{account}/sites/{site}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.platforms.accounts.sites.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'DELETE', apiParams, clientConfig);

    this.accounts = {};

    this.accounts.platforms = {};

    /**
     * Gets a platform.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the platform to retrieve. Format: accounts/{account}/platforms/{platform}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.platforms.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists platforms for a specified account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of platforms to include in the response, used for paging. If unspecified, at most 10000 platforms will be returned. The maximum value is 10000; values above 10000 will be coerced to 10000.
     * @param {string} apiParams.pageToken - Optional. A page token, received from a previous `ListPlatforms` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPlatforms` must match the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. The account which owns the platforms. Format: accounts/{account}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.platforms.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/platforms', 'GET', apiParams, clientConfig);

    this.accounts.platforms.groups = {};

    /**
     * Lists Platform Groups for a specified Platform.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of groups to include in the response, used for paging. If unspecified, at most 10000 groups will be returned. The maximum value is 10000; values above 10000 will be coerced to 10000.
     * @param {string} apiParams.pageToken - Optional. A page token, received from a previous `ListPlatformGroups` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPlatformGroups` must match the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. The name of the platform to retrieve. Format: accounts/{account}/platforms/{platform}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.platforms.groups.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/groups', 'GET', apiParams, clientConfig);

    /**
     * Gets a Platform Group for a specified Platform and group.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the platform group to retrieve. Format: accounts/{account}/platforms/{platform}/groups/{group}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.platforms.groups.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Update a Platform Group.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Identifier. Format: accounts/{account}/platforms/{platform}/groups/{platform_group}
     * @param {string} apiParams.updateMask - Optional. The list of fields to update - currently only supports updating the `description` field.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.platforms.groups.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);

    this.accounts.platforms.childAccounts = {};

    this.accounts.platforms.childAccounts.sites = {};

    /**
     * Lists Platform Child Sites for a specified Platform Child Account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of children to include in the response, used for paging. If unspecified, at most 10000 platforms will be returned. The maximum value is 10000; values above 10000 will be coerced to 10000.
     * @param {string} apiParams.pageToken - Optional. A page token, received from a previous `ListPlatformChildSites` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPlatformChildSites` must match the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. The name of the child account under the given platform which owns the platform child sites. Format: accounts/{account}/platforms/{platform}/childAccounts/{child_account}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.platforms.childAccounts.sites.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/sites', 'GET', apiParams, clientConfig);

    /**
     * Gets a Platform Child Site for a specified Platform Child Account and site.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the platform child site to retrieve. Format: accounts/{account}/platforms/{platform}/childAccounts/{child_account}/sites/{platform_child_site}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.platforms.childAccounts.sites.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Update a Platform Child Site.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Identifier. Format: accounts/{account}/platforms/{platform}/childAccounts/{child_account}/sites/{platform_child_site}
     * @param {string} apiParams.updateMask - Optional. The list of fields to update - currently only supports updating the `platform_group` field.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.platforms.childAccounts.sites.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);
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
