
/**
 * Google Apps Script client library for the Enterprise License Manager API
 * Documentation URL: https://developers.google.com/workspace/admin/licensing/
 * @class
 */
class Licensing {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://licensing.googleapis.com/';
    this._servicePath = '';


    this.licenseAssignments = {};

    /**
     * Revoke a license.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.productId - (Required) A product's unique identifier. For more information about products in this version of the API, see Products and SKUs.
     * @param {string} apiParams.skuId - (Required) A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs.
     * @param {string} apiParams.userId - (Required) The user's current primary email address. If the user's email address changes, use the new email address in your API requests. Since a `userId` is subject to change, do not use a `userId` value as a key for persistent data. This key could break if the current user's email address changes. If the `userId` is suspended, the license status changes.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.licenseAssignments.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('apps/licensing/v1/product/{productId}/sku/{skuId}/user/{userId}', 'DELETE', apiParams, clientConfig);

    /**
     * Get a specific user's license by product SKU.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.productId - (Required) A product's unique identifier. For more information about products in this version of the API, see Products and SKUs.
     * @param {string} apiParams.skuId - (Required) A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs.
     * @param {string} apiParams.userId - (Required) The user's current primary email address. If the user's email address changes, use the new email address in your API requests. Since a `userId` is subject to change, do not use a `userId` value as a key for persistent data. This key could break if the current user's email address changes. If the `userId` is suspended, the license status changes.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.licenseAssignments.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('apps/licensing/v1/product/{productId}/sku/{skuId}/user/{userId}', 'GET', apiParams, clientConfig);

    /**
     * Assign a license.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.productId - (Required) A product's unique identifier. For more information about products in this version of the API, see Products and SKUs.
     * @param {string} apiParams.skuId - (Required) A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.licenseAssignments.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('apps/licensing/v1/product/{productId}/sku/{skuId}/user', 'POST', apiParams, clientConfig);

    /**
     * List all users assigned licenses for a specific product SKU.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) The customer's unique ID as defined in the Admin console, such as `C00000000`. If the customer is suspended, the server returns an error.
     * @param {integer} apiParams.maxResults - The `maxResults` query string determines how many entries are returned on each page of a large response. This is an optional parameter. The value must be a positive number.
     * @param {string} apiParams.pageToken - Token to fetch the next page of data. The `maxResults` query string is related to the `pageToken` since `maxResults` determines how many entries are returned on each page. This is an optional query string. If not specified, the server returns the first page.
     * @param {string} apiParams.productId - (Required) A product's unique identifier. For more information about products in this version of the API, see Products and SKUs.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.licenseAssignments.listForProduct = async (apiParams = {}, clientConfig = {}) => this._makeRequest('apps/licensing/v1/product/{productId}/users', 'GET', apiParams, clientConfig);

    /**
     * List all users assigned licenses for a specific product SKU.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customerId - (Required) The customer's unique ID as defined in the Admin console, such as `C00000000`. If the customer is suspended, the server returns an error.
     * @param {integer} apiParams.maxResults - The `maxResults` query string determines how many entries are returned on each page of a large response. This is an optional parameter. The value must be a positive number.
     * @param {string} apiParams.pageToken - Token to fetch the next page of data. The `maxResults` query string is related to the `pageToken` since `maxResults` determines how many entries are returned on each page. This is an optional query string. If not specified, the server returns the first page.
     * @param {string} apiParams.productId - (Required) A product's unique identifier. For more information about products in this version of the API, see Products and SKUs.
     * @param {string} apiParams.skuId - (Required) A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.licenseAssignments.listForProductAndSku = async (apiParams = {}, clientConfig = {}) => this._makeRequest('apps/licensing/v1/product/{productId}/sku/{skuId}/users', 'GET', apiParams, clientConfig);

    /**
     * Reassign a user's product SKU with a different SKU in the same product.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.productId - (Required) A product's unique identifier. For more information about products in this version of the API, see Products and SKUs.
     * @param {string} apiParams.skuId - (Required) A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs.
     * @param {string} apiParams.userId - (Required) The user's current primary email address. If the user's email address changes, use the new email address in your API requests. Since a `userId` is subject to change, do not use a `userId` value as a key for persistent data. This key could break if the current user's email address changes. If the `userId` is suspended, the license status changes.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.licenseAssignments.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('apps/licensing/v1/product/{productId}/sku/{skuId}/user/{userId}', 'PUT', apiParams, clientConfig);

    /**
     * Reassign a user's product SKU with a different SKU in the same product. This method supports patch semantics.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.productId - (Required) A product's unique identifier. For more information about products in this version of the API, see Products and SKUs.
     * @param {string} apiParams.skuId - (Required) A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs.
     * @param {string} apiParams.userId - (Required) The user's current primary email address. If the user's email address changes, use the new email address in your API requests. Since a `userId` is subject to change, do not use a `userId` value as a key for persistent data. This key could break if the current user's email address changes. If the `userId` is suspended, the license status changes.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.licenseAssignments.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('apps/licensing/v1/product/{productId}/sku/{skuId}/user/{userId}', 'PATCH', apiParams, clientConfig);
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
