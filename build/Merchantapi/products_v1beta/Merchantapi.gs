
/**
 * Google Apps Script client library for the Merchant API
 * Documentation URL: https://developers.google.com/merchant/api
 * @class
 */
class Merchantapi {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://merchantapi.googleapis.com/';
    this._servicePath = '';


    this.accounts = {};

    this.accounts.productInputs = {};

    /**
     * [Uploads a product input to your Merchant Center account](/merchant/api/guides/products/add-manage#add_a_product). You must have a products [data source](/merchant/api/guides/data-sources/api-sources#create-primary-data-source) to be able to insert a product. The unique identifier of the data source is passed as a query parameter in the request URL. If a product input with the same contentLanguage, offerId, and dataSource already exists, then the product input inserted by this method replaces that entry. After inserting, updating, or deleting a product input, it may take several minutes before the processed product can be retrieved.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.dataSource - Required. The primary or supplemental product data source name. If the product already exists and data source provided is different, then the product will be moved to a new data source. For more information, see [Create a primary data source](/merchant/api/guides/data-sources/api-sources#create-primary-data-source). Only API data sources are supported. Format: `accounts/{account}/dataSources/{datasource}`. For example, `accounts/123456/dataSources/104628`.
     * @param {string} apiParams.parent - (Required) Required. The account where this product will be inserted. Format: `accounts/{account}`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.productInputs.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('products/v1beta/{+parent}/productInputs:insert', 'POST', apiParams, clientConfig);

    /**
     * Updates the existing product input in your Merchant Center account. After inserting, updating, or deleting a product input, it may take several minutes before the processed product can be retrieved.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.dataSource - Required. The primary or supplemental product data source where `data_source` name identifies the product input to be updated. Only API data sources are supported. Format: `accounts/{account}/dataSources/{datasource}`. For example, `accounts/123456/dataSources/104628`.
     * @param {string} apiParams.name - (Required) Identifier. The name of the product input. Format: `accounts/{account}/productInputs/{productinput}` where the last section `productinput` consists of: `content_language~feed_label~offer_id` example for product input name is `accounts/123/productInputs/en~US~sku123`. A legacy local product input name would be `accounts/123/productInputs/local~en~US~sku123`. Note: For calls to the v1beta version, the `productInput` section consists of: `channel~content_language~feed_label~offer_id`, for example: `accounts/123/productInputs/online~en~US~sku123`.
     * @param {string} apiParams.updateMask - Optional. The list of product attributes to be updated. If the update mask is omitted, then it is treated as implied field mask equivalent to all fields that are populated (have a non-empty value). Attributes specified in the update mask without a value specified in the body will be deleted from the product. Update mask can only be specified for top level fields in attributes and custom attributes. To specify the update mask for custom attributes you need to add the `custom_attribute.` prefix. Providing special "*" value for full product replacement is not supported.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.productInputs.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('products/v1beta/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes a product input from your Merchant Center account. After inserting, updating, or deleting a product input, it may take several minutes before the processed product can be retrieved.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.dataSource - Required. The primary or supplemental data source from which the product input should be deleted. Format: `accounts/{account}/dataSources/{datasource}`. For example, `accounts/123456/dataSources/104628`.
     * @param {string} apiParams.name - (Required) Required. The name of the product input resource to delete. Format: `accounts/{account}/productInputs/{product}` where the last section `product` consists of: `content_language~feed_label~offer_id` example for product name is `accounts/123/productInputs/en~US~sku123`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.productInputs.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('products/v1beta/{+name}', 'DELETE', apiParams, clientConfig);

    this.accounts.products = {};

    /**
     * Retrieves the processed product from your Merchant Center account. After inserting, updating, or deleting a product input, it may take several minutes before the updated final product can be retrieved.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the product to retrieve. Format: `accounts/{account}/products/{product}` where the last section `product` consists of: `content_language~feed_label~offer_id` example for product name is `accounts/123/products/en~US~sku123`. A legacy local product name would be `accounts/123/products/local~en~US~sku123`. Note: For calls to the v1beta version, the `product` section consists of: `channel~content_language~feed_label~offer_id`, for example: `accounts/123/products/online~en~US~sku123`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.products.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('products/v1beta/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists the processed products in your Merchant Center account. The response might contain fewer items than specified by `pageSize`. Rely on `pageToken` to determine if there are more items to be requested. After inserting, updating, or deleting a product input, it may take several minutes before the updated processed product can be retrieved.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of products to return. The service may return fewer than this value. The maximum value is 1000; values above 1000 will be coerced to 1000. If unspecified, the default page size of 25 products will be returned.
     * @param {string} apiParams.pageToken - A page token, received from a previous `ListProducts` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListProducts` must match the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. The account to list processed products for. Format: `accounts/{account}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.products.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('products/v1beta/{+parent}/products', 'GET', apiParams, clientConfig);
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
