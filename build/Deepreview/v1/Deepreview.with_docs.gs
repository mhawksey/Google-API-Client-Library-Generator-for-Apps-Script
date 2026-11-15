
/**
 * Google Apps Script client library for the Deep Review API
 * Documentation URL: https://research.google/deepreview
 * Generator: https://github.com/mhawksey/Google-API-Client-Library-Generator-for-Apps-Script/
 * @class
 */
class Deepreview {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://deepreview.googleapis.com/';
    this._servicePath = '';


    this.documents = {};

    /**
     * Estimates what a review of a document would cost on the caller's Gemini API key. The estimate comes from what past reviews with the same model, depth, and thinking level cost, adjusted to this document's size and repriced at the Gemini API's current list prices. It covers one review attempt that runs to completion, and doesn't include retries after errors.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.document - (Required) Required. The document to review.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.documents.estimateReviewCost = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+document}:estimateReviewCost', 'POST', apiParams, clientConfig);

    /**
     * Retrieves document metadata. The returned document includes its `latest_review_summary` when a review exists.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The resource name of the document to retrieve.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.documents.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Deletes a document and its stored content. If `force` is set to `true`, any associated reviews are also deleted.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.allowMissing - Optional. If set to `true`, and the document is not found, the request succeeds.
     * @param {boolean} apiParams.force - Optional. If set to `true`, any child resources (e.g. review resources) are also deleted. If `false` and the document has existing reviews, the request fails with `FAILED_PRECONDITION`.
     * @param {string} apiParams.name - (Required) Required. The resource name of the document to delete.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.documents.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Lists documents for the authenticated caller with cursor pagination. Each returned document includes its `latest_review_summary` when a review exists.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. Custom filter expressions are not currently supported; non-empty values return INVALID_ARGUMENT.
     * @param {string} apiParams.orderBy - Optional. Custom order_by expressions are not currently supported; non-empty values return INVALID_ARGUMENT.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of documents to return in a single page. The server may return fewer than this value. If unspecified, at most 50 documents will be returned. The maximum value is 100; values above 100 will be coerced to 100.
     * @param {string} apiParams.pageToken - Optional. A page token received from a previous `ListDocuments` call.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.documents.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/documents', 'GET', apiParams, clientConfig);

    this.documents.reviews = {};

    /**
     * Creates and initiates an asynchronous multi-agent review for a document. Returns a google.longrunning.Operation. When the operation completes, the `response` field contains a `Review` and the `metadata` field contains `CreateReviewMetadata`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent Document resource name where this review will be created.
     * @param {string} apiParams.requestId - Optional. Idempotency identifier for network retry safety (AIP-155). Must be a valid UUID4 string.
     * @param {string} apiParams.reviewId - Optional. The ID to use for the review, which will become the final component of the review's resource name. If not provided, a unique server-generated UUID will be assigned.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.documents.reviews.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/reviews', 'POST', apiParams, clientConfig);

    /**
     * Retrieves a specific review execution result.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The resource name of the review to retrieve.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.documents.reviews.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists all review execution runs for a document.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. Custom filter expressions are not currently supported; non-empty values return INVALID_ARGUMENT.
     * @param {string} apiParams.orderBy - Optional. Custom order_by expressions are not currently supported; non-empty values return INVALID_ARGUMENT.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of reviews to return in a single page. The server may return fewer than this value. If unspecified, at most 50 reviews will be returned. The maximum value is 100; values above 100 will be coerced to 100.
     * @param {string} apiParams.pageToken - Optional. A page token received from a previous `ListReviews` call.
     * @param {string} apiParams.parent - (Required) Required. The parent Document resource name.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.documents.reviews.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/reviews', 'GET', apiParams, clientConfig);

    this.media = {};

    /**
     * Downloads the original document content (PDF binary) using media streaming. Pass `alt=media` as a query parameter to stream the binary PDF bytes. Without `alt=media`, a JSON response is returned.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The resource name of the document to download.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.media.download = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:download', 'GET', apiParams, clientConfig);

    /**
     * Creates a new Document resource and ingests the manuscript using media upload or Google Drive.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.documentId - Optional. The ID to use for the document, which will become the final component of the document's resource name. If not provided, a unique server-generated UUID will be assigned.
     * @param {string} apiParams.requestId - Optional. Idempotency identifier for network retry safety (AIP-155). Must be a valid UUID4 string.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.media.upload = async (apiParams = {}, clientConfig = {}) => {
      // If apiParams.media is provided, use the upload path; otherwise, use the standard path.
      const path = apiParams.media ? '/upload/v1/documents' : 'v1/documents';
      return this._makeRequest(path, 'POST', apiParams, clientConfig);
    };

    this.v1 = {};

    /**
     * Retrieves the review quota limits and sliding-window usage for the authenticated caller.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The resource name of the singleton user quota to retrieve.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.v1.getUserQuota = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.operations = {};

    this.operations.documents = {};

    this.operations.documents.reviews = {};

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the operation resource.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.operations.documents.reviews.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
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
