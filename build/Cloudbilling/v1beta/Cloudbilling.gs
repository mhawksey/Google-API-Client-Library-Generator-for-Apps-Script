
/**
 * Google Apps Script client library for the Cloud Billing API
 * Documentation URL: https://cloud.google.com/billing/docs/apis
 * @class
 */
class Cloudbilling {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://cloudbilling.googleapis.com/';
    this._servicePath = '';


    this.billingAccounts = {};

    this.billingAccounts.services = {};

    /**
     * Lists services visible to a billing account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Maximum number of billing account service to return. Results may return fewer than this value. Default value is 50 and maximum value is 5000.
     * @param {string} apiParams.pageToken - Page token received from a previous ListBillingAccountServices call to retrieve the next page of results. If this field is empty, the first page is returned.
     * @param {string} apiParams.parent - (Required) Required. The billing account to list billing account service from. Format: billingAccounts/{billing_account}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.billingAccounts.services.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+parent}/services', 'GET', apiParams, clientConfig);

    /**
     * Gets a Google Cloud service visible to a billing account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the billing account service to retrieve. Format: billingAccounts/{billing_account}/services/{service}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.billingAccounts.services.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+name}', 'GET', apiParams, clientConfig);

    this.billingAccounts.skuGroups = {};

    /**
     * Lists SKU groups visible to a billing account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Maximum number of billing account SKU groups to return. Results may return fewer than this value. Default value is 50 and maximum value is 5000.
     * @param {string} apiParams.pageToken - Page token received from a previous ListBillingAccountSkuGroups call to retrieve the next page of results. If this field is empty, the first page is returned.
     * @param {string} apiParams.parent - (Required) Required. The billing account to list billing account SKU groups from. Format: billingAccounts/{billing_account}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.billingAccounts.skuGroups.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+parent}/skuGroups', 'GET', apiParams, clientConfig);

    /**
     * Gets a SKU group visible to a billing account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the BillingAccountSkuGroup to retrieve. Format: billingAccounts/{billing_account}/skuGroups/{sku_group}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.billingAccounts.skuGroups.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+name}', 'GET', apiParams, clientConfig);

    this.billingAccounts.skuGroups.skus = {};

    /**
     * Lists SKUs that is part of billing account SKU groups.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Maximum number of billing account SKU group SKUs to return. Results may return fewer than this value. Default value is 50 and maximum value is 5000.
     * @param {string} apiParams.pageToken - Page token received from a previous ListBillingAccountSkuGroupSkus call to retrieve the next page of results. If this field is empty, the first page is returned.
     * @param {string} apiParams.parent - (Required) Required. The billing account SKU group to list billing account SKU group SKUs from. Format: billingAccounts/{billing_account}/skuGroups/{sku_group}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.billingAccounts.skuGroups.skus.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+parent}/skus', 'GET', apiParams, clientConfig);

    /**
     * Gets a SKU that is part of a billing account SKU group.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the billing account SKU group SKU to retrieve. Format: billingAccounts/{billing_account}/skuGroups/{sku_group}/skus/{sku}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.billingAccounts.skuGroups.skus.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+name}', 'GET', apiParams, clientConfig);

    this.billingAccounts.skus = {};

    /**
     * Lists SKUs visible to a billing account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Options for how to filter the billing account SKUs. Currently, only filter on `billing_account_service` is supported. Only !=, = operators are supported. Examples: - billing_account_service = "billingAccounts/012345-567890-ABCDEF/services/DA34-426B-A397"
     * @param {integer} apiParams.pageSize - Maximum number of billing account SKUs to return. Results may return fewer than this value. Default value is 50 and maximum value is 5000.
     * @param {string} apiParams.pageToken - Page token received from a previous ListBillingAccountSkus call to retrieve the next page of results. If this field is empty, the first page is returned.
     * @param {string} apiParams.parent - (Required) Required. The billing account to list billing account SKU from. Format: billingAccounts/{billing_account}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.billingAccounts.skus.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+parent}/skus', 'GET', apiParams, clientConfig);

    /**
     * Gets a SKU visible to a billing account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the billing account SKU to retrieve. Format: billingAccounts/{billing_account}/skus/{sku}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.billingAccounts.skus.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+name}', 'GET', apiParams, clientConfig);

    this.billingAccounts.skus.price = {};

    /**
     * Gets the latest price for SKUs available to your Cloud Billing account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.currencyCode - Optional. ISO-4217 currency code for the price. If not specified, the currency of the billing account is used.
     * @param {string} apiParams.name - (Required) Required. Name of the billing account price to retrieve. Format: billingAccounts/{billing_account}/skus/{sku}/price
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.billingAccounts.skus.price.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+name}', 'GET', apiParams, clientConfig);

    this.billingAccounts.skus.prices = {};

    /**
     * Lists the latest prices for SKUs available to your Cloud Billing account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.currencyCode - Optional. ISO-4217 currency code for the price. If not specified, currency of billing account will be used.
     * @param {integer} apiParams.pageSize - Optional. Maximum number of billing account price to return. Results may return fewer than this value. Default value is 50 and maximum value is 5000.
     * @param {string} apiParams.pageToken - Optional. Page token received from a previous ListBillingAccountPrices call to retrieve the next page of results. If this field is empty, the first page is returned.
     * @param {string} apiParams.parent - (Required) Required. To list all Billing Account SKUs, use `-` as the SKU ID. Format: `billingAccounts/{billing_account}/skus/-` Note: Specifying an actual SKU resource id will return a collection of one Billing Account Price.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.billingAccounts.skus.prices.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+parent}/prices', 'GET', apiParams, clientConfig);

    this.skus = {};

    this.skus.price = {};

    /**
     * Gets the latest price for the given SKU.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.currencyCode - Optional. ISO-4217 currency code for the price. If not specified, USD will be used.
     * @param {string} apiParams.name - (Required) Required. Name of the latest price to retrieve. Format: skus/{sku}/price
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.skus.price.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+name}', 'GET', apiParams, clientConfig);

    this.skus.prices = {};

    /**
     * Lists the latest prices for all SKUs.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.currencyCode - Optional. ISO-4217 currency code for the price. If not specified, USD will be used.
     * @param {integer} apiParams.pageSize - Optional. Maximum number of prices to return. Results may return fewer than this value. Default value is 50 and maximum value is 5000.
     * @param {string} apiParams.pageToken - Optional. Page token received from a previous ListPrices call to retrieve the next page of results. If this field is empty, the first page is returned.
     * @param {string} apiParams.parent - (Required) Required. To list the prices for all SKUs, use `-` as the SKU ID. Format: `skus/-` Specifying a specific SKU ID returns a collection with one Price object for the SKU.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.skus.prices.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+parent}/prices', 'GET', apiParams, clientConfig);

    this.skuGroups = {};

    /**
     * Lists all publicly listed SKU groups.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Maximum number of SKU groups to return. Results may return fewer than this value. Default value is 50 and maximum value is 5000.
     * @param {string} apiParams.pageToken - Page token received from a previous ListSkuGroups call to retrieve the next page of results. If this field is empty, the first page is returned.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.skuGroups.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/skuGroups', 'GET', apiParams, clientConfig);

    /**
     * Gets a publicly listed SKU group.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the SKU group to retrieve. Format: skuGroups/{sku_group}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.skuGroups.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+name}', 'GET', apiParams, clientConfig);

    this.skuGroups.skus = {};

    /**
     * Lists all publicly listed SKUs contained by a publicly listed SKU group.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Maximum number of SKU group SKUs to return. Results may return fewer than this value. Default value is 50 and maximum value is 5000.
     * @param {string} apiParams.pageToken - Page token received from a previous ListSkuGroupSkus call to retrieve the next page of results. If this field is empty, the first page is returned.
     * @param {string} apiParams.parent - (Required) Required. The SkuGroup to list SkuGroupSku from. Format: skuGroups/{sku_group}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.skuGroups.skus.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+parent}/skus', 'GET', apiParams, clientConfig);

    /**
     * Gets a publicly listed SKU that is part of a publicly listed SKU group.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the SKU group SKU to retrieve. Format: skuGroups/{sku_group}/skus/{sku}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.skuGroups.skus.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta/{+name}', 'GET', apiParams, clientConfig);
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
