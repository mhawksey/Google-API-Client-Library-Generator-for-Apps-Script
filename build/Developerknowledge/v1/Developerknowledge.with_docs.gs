
/**
 * Google Apps Script client library for the Developer Knowledge API
 * Documentation URL: https://developers.google.com/knowledge
 * Generator: https://github.com/mhawksey/Google-API-Client-Library-Generator-for-Apps-Script/
 * @class
 */
class Developerknowledge {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://developerknowledge.googleapis.com/';
    this._servicePath = '';


    this.documents = {};

    /**
     * Retrieves a single document with its full Markdown content.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Specifies the name of the document to retrieve. Format: `documents/{uri_without_scheme}` Example: `documents/docs.cloud.google.com/storage/docs/creating-buckets`
     * @param {string} apiParams.view - Optional. Specifies the DocumentView of the document. If unspecified, DeveloperKnowledge.GetDocument defaults to `DOCUMENT_VIEW_CONTENT`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.documents.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Searches for developer knowledge across Google's developer documentation. Returns DocumentChunks based on the user's query. There may be many chunks from the same Document. To retrieve full documents, use DeveloperKnowledge.GetDocument or DeveloperKnowledge.BatchGetDocuments with the DocumentChunk.parent returned in the SearchDocumentChunksResponse.results.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. Applies a strict filter to the search results. The expression supports a subset of the syntax described at https://google.aip.dev/160. While `SearchDocumentChunks` returns DocumentChunks, the filter is applied to `DocumentChunk.document` fields. Supported fields for filtering: * `data_source` (STRING): The source of the document, e.g. `docs.cloud.google.com`. See https://developers.google.com/knowledge/reference/corpus-reference for the complete list of data sources in the corpus. * `update_time` (TIMESTAMP): The timestamp of when the document was last meaningfully updated. A meaningful update is one that changes document's markdown content or metadata. * `uri` (STRING): The document URI, e.g. `https://docs.cloud.google.com/bigquery/docs/tables`. STRING fields support `=` (equals) and `!=` (not equals) operators for **exact match** on the whole string. Partial match, prefix match, and regexp match are not supported. TIMESTAMP fields support `=`, `<`, `<=`, `>`, and `>=` operators. Timestamps must be in RFC-3339 format, e.g., `"2025-01-01T00:00:00Z"`. You can combine expressions using `AND`, `OR`, and `NOT` (or `-`) logical operators. `OR` has higher precedence than `AND`. Use parentheses for explicit precedence grouping. Examples: * `data_source = "docs.cloud.google.com" OR data_source = "firebase.google.com"` * `data_source != "firebase.google.com"` * `update_time < "2024-01-01T00:00:00Z"` * `update_time >= "2025-01-22T00:00:00Z" AND (data_source = "developer.chrome.com" OR data_source = "web.dev")` * `uri = "https://docs.cloud.google.com/release-notes"` The `filter` string must not exceed 500 characters; values longer than 500 characters will result in an `INVALID_ARGUMENT` error.
     * @param {integer} apiParams.pageSize - Optional. Specifies the maximum number of results to return. The service may return fewer than this value. If unspecified, at most 5 results will be returned. The maximum value is 20; values above 20 will result in an INVALID_ARGUMENT error.
     * @param {string} apiParams.pageToken - Optional. Contains a page token, received from a previous `SearchDocumentChunks` call. Provide this to retrieve the subsequent page.
     * @param {string} apiParams.query - Required. Provides the raw query string provided by the user, such as "How to create a Cloud Storage bucket?".
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.documents.searchDocumentChunks = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/documents:searchDocumentChunks', 'GET', apiParams, clientConfig);

    /**
     * Retrieves multiple documents, each with its full Markdown content.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.names - Required. Specifies the names of the documents to retrieve. A maximum of 20 documents can be retrieved in a batch. The documents are returned in the same order as the `names` in the request. Format: `documents/{uri_without_scheme}` Example: `documents/docs.cloud.google.com/storage/docs/creating-buckets`
     * @param {string} apiParams.view - Optional. Specifies the DocumentView of the document. If unspecified, DeveloperKnowledge.BatchGetDocuments defaults to `DOCUMENT_VIEW_CONTENT`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.documents.batchGet = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/documents:batchGet', 'GET', apiParams, clientConfig);
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
