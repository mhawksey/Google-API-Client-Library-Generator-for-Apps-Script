
/**
 * Google Apps Script client library for the YouTube Reporting API
 * Documentation URL: https://developers.google.com/youtube/reporting/v1/reports/
 * @class
 */
class Youtubereporting {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://youtubereporting.googleapis.com/';
    this._servicePath = '';


    this.reportTypes = {};

    /**
     * Lists report types.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.includeSystemManaged - If set to true, also system-managed report types will be returned; otherwise only the report types that can be used to create new reporting jobs will be returned.
     * @param {string} apiParams.onBehalfOfContentOwner - The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel).
     * @param {integer} apiParams.pageSize - Requested page size. Server may return fewer report types than requested. If unspecified, server will pick an appropriate default.
     * @param {string} apiParams.pageToken - A token identifying a page of results the server should return. Typically, this is the value of ListReportTypesResponse.next_page_token returned in response to the previous call to the `ListReportTypes` method.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.reportTypes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/reportTypes', 'GET', apiParams, clientConfig);

    this.jobs = {};

    /**
     * Creates a job and returns it.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.onBehalfOfContentOwner - The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel).
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.jobs.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/jobs', 'POST', apiParams, clientConfig);

    /**
     * Lists jobs.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.includeSystemManaged - If set to true, also system-managed jobs will be returned; otherwise only user-created jobs will be returned. System-managed jobs can neither be modified nor deleted.
     * @param {string} apiParams.onBehalfOfContentOwner - The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel).
     * @param {integer} apiParams.pageSize - Requested page size. Server may return fewer jobs than requested. If unspecified, server will pick an appropriate default.
     * @param {string} apiParams.pageToken - A token identifying a page of results the server should return. Typically, this is the value of ListReportTypesResponse.next_page_token returned in response to the previous call to the `ListJobs` method.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.jobs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/jobs', 'GET', apiParams, clientConfig);

    /**
     * Gets a job.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.jobId - (Required) The ID of the job to retrieve.
     * @param {string} apiParams.onBehalfOfContentOwner - The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel).
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.jobs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/jobs/{jobId}', 'GET', apiParams, clientConfig);

    /**
     * Deletes a job.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.jobId - (Required) The ID of the job to delete.
     * @param {string} apiParams.onBehalfOfContentOwner - The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel).
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.jobs.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/jobs/{jobId}', 'DELETE', apiParams, clientConfig);

    this.jobs.reports = {};

    /**
     * Lists reports created by a specific job. Returns NOT_FOUND if the job does not exist.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.createdAfter - If set, only reports created after the specified date/time are returned.
     * @param {string} apiParams.jobId - (Required) The ID of the job.
     * @param {string} apiParams.onBehalfOfContentOwner - The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel).
     * @param {integer} apiParams.pageSize - Requested page size. Server may return fewer report types than requested. If unspecified, server will pick an appropriate default.
     * @param {string} apiParams.pageToken - A token identifying a page of results the server should return. Typically, this is the value of ListReportsResponse.next_page_token returned in response to the previous call to the `ListReports` method.
     * @param {string} apiParams.startTimeAtOrAfter - If set, only reports whose start time is greater than or equal the specified date/time are returned.
     * @param {string} apiParams.startTimeBefore - If set, only reports whose start time is smaller than the specified date/time are returned.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.jobs.reports.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/jobs/{jobId}/reports', 'GET', apiParams, clientConfig);

    /**
     * Gets the metadata of a specific report.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.jobId - (Required) The ID of the job.
     * @param {string} apiParams.onBehalfOfContentOwner - The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel).
     * @param {string} apiParams.reportId - (Required) The ID of the report to retrieve.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.jobs.reports.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/jobs/{jobId}/reports/{reportId}', 'GET', apiParams, clientConfig);

    this.media = {};

    /**
     * Method for media download. Download is supported on the URI `/v1/media/{+name}?alt=media`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resourceName - (Required) Name of the media that is being downloaded.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.media.download = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/media/{+resourceName}', 'GET', apiParams, clientConfig);
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
