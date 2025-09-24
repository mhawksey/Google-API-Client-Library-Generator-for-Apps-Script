
/**
 * Google Apps Script client library for the Search Ads 360 API
 * Documentation URL: https://developers.google.com/search-ads
 * @class
 */
class Doubleclicksearch {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://doubleclicksearch.googleapis.com/';
    this._servicePath = '';


    this.conversion = {};

    /**
     * Retrieves a list of conversions from a DoubleClick Search engine account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.adGroupId - Numeric ID of the ad group.
     * @param {string} apiParams.adId - Numeric ID of the ad.
     * @param {string} apiParams.advertiserId - (Required) Numeric ID of the advertiser.
     * @param {string} apiParams.agencyId - (Required) Numeric ID of the agency.
     * @param {string} apiParams.campaignId - Numeric ID of the campaign.
     * @param {string} apiParams.criterionId - Numeric ID of the criterion.
     * @param {string} apiParams.customerId - Customer ID of a client account in the new Search Ads 360 experience.
     * @param {integer} apiParams.endDate - (Required) Last date (inclusive) on which to retrieve conversions. Format is yyyymmdd.
     * @param {string} apiParams.engineAccountId - (Required) Numeric ID of the engine account.
     * @param {integer} apiParams.rowCount - (Required) The number of conversions to return per call.
     * @param {integer} apiParams.startDate - (Required) First date (inclusive) on which to retrieve conversions. Format is yyyymmdd.
     * @param {integer} apiParams.startRow - (Required) The 0-based starting index for retrieving conversions results.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.conversion.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('doubleclicksearch/v2/agency/{agencyId}/advertiser/{advertiserId}/engine/{engineAccountId}/conversion', 'GET', apiParams, clientConfig);

    /**
     * Retrieves a list of conversions from a DoubleClick Search engine account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.adGroupId - Numeric ID of the ad group.
     * @param {string} apiParams.adId - Numeric ID of the ad.
     * @param {string} apiParams.advertiserId - Numeric ID of the advertiser.
     * @param {string} apiParams.agencyId - Numeric ID of the agency.
     * @param {string} apiParams.campaignId - Numeric ID of the campaign.
     * @param {string} apiParams.criterionId - Numeric ID of the criterion.
     * @param {string} apiParams.customerId - (Required) Customer ID of a client account in the new Search Ads 360 experience.
     * @param {integer} apiParams.endDate - (Required) Last date (inclusive) on which to retrieve conversions. Format is yyyymmdd.
     * @param {string} apiParams.engineAccountId - Numeric ID of the engine account.
     * @param {integer} apiParams.rowCount - (Required) The number of conversions to return per call.
     * @param {integer} apiParams.startDate - (Required) First date (inclusive) on which to retrieve conversions. Format is yyyymmdd.
     * @param {integer} apiParams.startRow - (Required) The 0-based starting index for retrieving conversions results.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.conversion.getByCustomerId = async (apiParams = {}, clientConfig = {}) => this._makeRequest('doubleclicksearch/v2/customer/{customerId}/conversion', 'GET', apiParams, clientConfig);

    /**
     * Inserts a batch of new conversions into DoubleClick Search.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.conversion.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('doubleclicksearch/v2/conversion', 'POST', apiParams, clientConfig);

    /**
     * Updates a batch of conversions in DoubleClick Search.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.conversion.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('doubleclicksearch/v2/conversion', 'PUT', apiParams, clientConfig);

    /**
     * Updates the availabilities of a batch of floodlight activities in DoubleClick Search.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.conversion.updateAvailability = async (apiParams = {}, clientConfig = {}) => this._makeRequest('doubleclicksearch/v2/conversion/updateAvailability', 'POST', apiParams, clientConfig);

    this.reports = {};

    /**
     * Generates and returns a report immediately.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.reports.generate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('doubleclicksearch/v2/reports/generate', 'POST', apiParams, clientConfig);

    /**
     * Polls for the status of a report request.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.reportId - (Required) ID of the report request being polled.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.reports.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('doubleclicksearch/v2/reports/{reportId}', 'GET', apiParams, clientConfig);

    /**
     * Downloads a report file encoded in UTF-8.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.reportFragment - (Required) The index of the report fragment to download.
     * @param {string} apiParams.reportId - (Required) ID of the report.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.reports.getFile = async (apiParams = {}, clientConfig = {}) => this._makeRequest('doubleclicksearch/v2/reports/{reportId}/files/{reportFragment}', 'GET', apiParams, clientConfig);

    /**
     * Downloads a csv file(encoded in UTF-8) that contains ID mappings between legacy SA360 and new SA360. The file includes all children entities of the given advertiser(e.g. engine accounts, campaigns, ad groups, etc.) that exist in both legacy SA360 and new SA360.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - (Required) Legacy SA360 advertiser ID.
     * @param {string} apiParams.agencyId - (Required) Legacy SA360 agency ID.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.reports.getIdMappingFile = async (apiParams = {}, clientConfig = {}) => this._makeRequest('doubleclicksearch/v2/agency/{agencyId}/advertiser/{advertiserId}/idmapping', 'GET', apiParams, clientConfig);

    /**
     * Inserts a report request into the reporting system.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.reports.request = async (apiParams = {}, clientConfig = {}) => this._makeRequest('doubleclicksearch/v2/reports', 'POST', apiParams, clientConfig);

    this.savedColumns = {};

    /**
     * Retrieve the list of saved columns for a specified advertiser.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.advertiserId - (Required) DS ID of the advertiser.
     * @param {string} apiParams.agencyId - (Required) DS ID of the agency.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.savedColumns.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('doubleclicksearch/v2/agency/{agencyId}/advertiser/{advertiserId}/savedcolumns', 'GET', apiParams, clientConfig);
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
