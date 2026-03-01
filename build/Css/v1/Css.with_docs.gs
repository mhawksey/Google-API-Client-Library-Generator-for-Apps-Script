
/**
 * Google Apps Script client library for the CSS API
 * Documentation URL: https://developers.google.com/comparison-shopping-services/api/overview
 * @class
 */
class Css {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://css.googleapis.com/';
    this._servicePath = '';


    this.accounts = {};

    /**
     * Lists all the accounts under the specified CSS account ID, and optionally filters by label ID and account name.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.fullName - If set, only the MC accounts with the given name (case sensitive) will be returned.
     * @param {string} apiParams.labelId - If set, only the MC accounts with the given label ID will be returned.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of accounts to return. The service may return fewer than this value. If unspecified, at most 50 accounts will be returned. The maximum value is 100; values above 100 will be coerced to 100.
     * @param {string} apiParams.pageToken - Optional. A page token, received from a previous `ListChildAccounts` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListChildAccounts` must match the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. The parent account. Must be a CSS group or domain. Format: accounts/{account}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.listChildAccounts = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}:listChildAccounts', 'GET', apiParams, clientConfig);

    /**
     * Retrieves a single CSS/MC account by ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the managed CSS/MC account. Format: accounts/{account}
     * @param {string} apiParams.parent - Optional. Only required when retrieving MC account information. The CSS domain that is the parent resource of the MC account. Format: accounts/{account}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Updates labels assigned to CSS/MC accounts by a CSS domain.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The label resource name. Format: accounts/{account}
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.updateLabels = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:updateLabels', 'POST', apiParams, clientConfig);

    this.accounts.labels = {};

    /**
     * Lists the labels owned by an account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of labels to return. The service may return fewer than this value. If unspecified, at most 50 labels will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} apiParams.pageToken - A page token, received from a previous `ListAccountLabels` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAccountLabels` must match the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. The parent account. Format: accounts/{account}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.labels.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/labels', 'GET', apiParams, clientConfig);

    /**
     * Creates a new label, not assigned to any account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent account. Format: accounts/{account}
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.labels.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/labels', 'POST', apiParams, clientConfig);

    /**
     * Updates a label.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Identifier. The resource name of the label. Format: accounts/{account}/labels/{label}
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.labels.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes a label and removes it from all accounts to which it was assigned.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the label to delete. Format: accounts/{account}/labels/{label}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.labels.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.accounts.cssProductInputs = {};

    /**
     * Uploads a CssProductInput to your CSS Center account. If an input with the same contentLanguage, identity, feedLabel and feedId already exists, this method replaces that entry. After inserting, updating, or deleting a CSS Product input, it may take several minutes before the processed CSS Product can be retrieved.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.feedId - Optional. DEPRECATED. Feed id is not required for CSS Products. The primary or supplemental feed id. If CSS Product already exists and feed id provided is different, then the CSS Product will be moved to a new feed. Note: For now, CSSs do not need to provide feed ids as we create feeds on the fly. We do not have supplemental feed support for CSS Products yet.
     * @param {string} apiParams.parent - (Required) Required. The account where this CSS Product will be inserted. Format: accounts/{account}
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.cssProductInputs.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/cssProductInputs:insert', 'POST', apiParams, clientConfig);

    /**
     * Updates the existing Css Product input in your CSS Center account. After inserting, updating, or deleting a CSS Product input, it may take several minutes before the processed Css Product can be retrieved.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Identifier. The name of the CSS Product input. Format: `accounts/{account}/cssProductInputs/{css_product_input}`, where the last section `css_product_input` consists of 3 parts: contentLanguage~feedLabel~offerId. Example: accounts/123/cssProductInputs/de~DE~rawProvidedId123
     * @param {string} apiParams.updateMask - The list of CSS product attributes to be updated. If the update mask is omitted, then it is treated as implied field mask equivalent to all fields that are populated (have a non-empty value). Attributes specified in the update mask without a value specified in the body will be deleted from the CSS product. Update mask can only be specified for top level fields in attributes and custom attributes. To specify the update mask for custom attributes you need to add the `custom_attribute.` prefix. Providing special "*" value for full CSS product replacement is not supported.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.cssProductInputs.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes a CSS Product input from your CSS Center account. After a delete it may take several minutes until the input is no longer available.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the CSS product input resource to delete. Format: accounts/{account}/cssProductInputs/{css_product_input}, where the last section `css_product_input` consists of 3 parts: contentLanguage~feedLabel~offerId. Example: accounts/123/cssProductInputs/de~DE~rawProvidedId123
     * @param {string} apiParams.supplementalFeedId - The Content API Supplemental Feed ID. The field must not be set if the action applies to a primary feed. If the field is set, then product action applies to a supplemental feed instead of primary Content API feed.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.cssProductInputs.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.accounts.cssProducts = {};

    /**
     * Retrieves the processed CSS Product from your CSS Center account. After inserting, updating, or deleting a product input, it may take several minutes before the updated final product can be retrieved.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the CSS product to retrieve. Format: `accounts/{account}/cssProducts/{css_product}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.cssProducts.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists the processed CSS Products in your CSS Center account. The response might contain fewer items than specified by pageSize. Rely on pageToken to determine if there are more items to be requested. After inserting, updating, or deleting a CSS product input, it may take several minutes before the updated processed CSS product can be retrieved.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of CSS Products to return. The service may return fewer than this value. The maximum value is 1000; values above 1000 will be coerced to 1000. If unspecified, the maximum number of CSS products will be returned.
     * @param {string} apiParams.pageToken - A page token, received from a previous `ListCssProducts` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListCssProducts` must match the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. The account/domain to list processed CSS Products for. Format: accounts/{account}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.cssProducts.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/cssProducts', 'GET', apiParams, clientConfig);

    this.accounts.quotas = {};

    /**
     * Lists the daily call quota and usage per group for your CSS Center account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of quotas to return in the response, used for paging. Defaults to 500; values above 1000 will be coerced to 1000.
     * @param {string} apiParams.pageToken - Optional. Token (if provided) to retrieve the subsequent page. All other parameters must match the original call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. The CSS account that owns the collection of method quotas and resources. In most cases, this is the CSS domain. Format: accounts/{account}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.quotas.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/quotas', 'GET', apiParams, clientConfig);
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
