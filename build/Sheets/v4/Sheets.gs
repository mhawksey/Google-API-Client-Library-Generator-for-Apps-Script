
/**
 * Google Apps Script client library for the Google Sheets API
 * Documentation URL: https://developers.google.com/workspace/sheets/
 * @class
 */
class Sheets {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://sheets.googleapis.com/';
    this._servicePath = '';


    this.spreadsheets = {};

    /**
     * Creates a spreadsheet, returning the newly created spreadsheet.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.spreadsheets.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/spreadsheets', 'POST', apiParams, clientConfig);

    /**
     * Returns the spreadsheet at the given ID. The caller must specify the spreadsheet ID. By default, data within grids is not returned. You can include grid data in one of 2 ways: * Specify a [field mask](https://developers.google.com/workspace/sheets/api/guides/field-masks) listing your desired fields using the `fields` URL parameter in HTTP * Set the includeGridData URL parameter to true. If a field mask is set, the `includeGridData` parameter is ignored For large spreadsheets, as a best practice, retrieve only the specific spreadsheet fields that you want. To retrieve only subsets of spreadsheet data, use the ranges URL parameter. Ranges are specified using [A1 notation](https://developers.google.com/workspace/sheets/api/guides/concepts#cell). You can define a single cell (for example, `A1`) or multiple cells (for example, `A1:D5`). You can also get cells from other sheets within the same spreadsheet (for example, `Sheet2!A1:C4`) or retrieve multiple ranges at once (for example, `?ranges=A1:D5&ranges=Sheet2!A1:C4`). Limiting the range returns only the portions of the spreadsheet that intersect the requested ranges.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.excludeTablesInBandedRanges - True if tables should be excluded in the banded ranges. False if not set.
     * @param {boolean} apiParams.includeGridData - True if grid data should be returned. This parameter is ignored if a field mask was set in the request.
     * @param {string} apiParams.ranges - The ranges to retrieve from the spreadsheet.
     * @param {string} apiParams.spreadsheetId - (Required) The spreadsheet to request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.spreadsheets.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/spreadsheets/{spreadsheetId}', 'GET', apiParams, clientConfig);

    /**
     * Returns the spreadsheet at the given ID. The caller must specify the spreadsheet ID. This method differs from GetSpreadsheet in that it allows selecting which subsets of spreadsheet data to return by specifying a dataFilters parameter. Multiple DataFilters can be specified. Specifying one or more data filters returns the portions of the spreadsheet that intersect ranges matched by any of the filters. By default, data within grids is not returned. You can include grid data one of 2 ways: * Specify a [field mask](https://developers.google.com/workspace/sheets/api/guides/field-masks) listing your desired fields using the `fields` URL parameter in HTTP * Set the includeGridData parameter to true. If a field mask is set, the `includeGridData` parameter is ignored For large spreadsheets, as a best practice, retrieve only the specific spreadsheet fields that you want.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.spreadsheetId - (Required) The spreadsheet to request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.spreadsheets.getByDataFilter = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/spreadsheets/{spreadsheetId}:getByDataFilter', 'POST', apiParams, clientConfig);

    /**
     * Applies one or more updates to the spreadsheet. Each request is validated before being applied. If any request is not valid then the entire request will fail and nothing will be applied. Some requests have replies to give you some information about how they are applied. The replies will mirror the requests. For example, if you applied 4 updates and the 3rd one had a reply, then the response will have 2 empty replies, the actual reply, and another empty reply, in that order. Due to the collaborative nature of spreadsheets, it is not guaranteed that the spreadsheet will reflect exactly your changes after this completes, however it is guaranteed that the updates in the request will be applied together atomically. Your changes may be altered with respect to collaborator changes. If there are no collaborators, the spreadsheet should reflect your changes.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.spreadsheetId - (Required) The spreadsheet to apply the updates to.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.spreadsheets.batchUpdate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/spreadsheets/{spreadsheetId}:batchUpdate', 'POST', apiParams, clientConfig);

    this.spreadsheets.values = {};

    /**
     * Returns a range of values from a spreadsheet. The caller must specify the spreadsheet ID and a range.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.dateTimeRenderOption - How dates, times, and durations should be represented in the output. This is ignored if value_render_option is FORMATTED_VALUE. The default dateTime render option is SERIAL_NUMBER.
     * @param {string} apiParams.majorDimension - The major dimension that results should use. For example, if the spreadsheet data in Sheet1 is: `A1=1,B1=2,A2=3,B2=4`, then requesting `range=Sheet1!A1:B2?majorDimension=ROWS` returns `[[1,2],[3,4]]`, whereas requesting `range=Sheet1!A1:B2?majorDimension=COLUMNS` returns `[[1,3],[2,4]]`.
     * @param {string} apiParams.range - (Required) The [A1 notation or R1C1 notation](https://developers.google.com/workspace/sheets/api/guides/concepts#cell) of the range to retrieve values from.
     * @param {string} apiParams.spreadsheetId - (Required) The ID of the spreadsheet to retrieve data from.
     * @param {string} apiParams.valueRenderOption - How values should be represented in the output. The default render option is FORMATTED_VALUE.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.spreadsheets.values.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/spreadsheets/{spreadsheetId}/values/{range}', 'GET', apiParams, clientConfig);

    /**
     * Sets values in a range of a spreadsheet. The caller must specify the spreadsheet ID, range, and a valueInputOption.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.includeValuesInResponse - Determines if the update response should include the values of the cells that were updated. By default, responses do not include the updated values. If the range to write was larger than the range actually written, the response includes all values in the requested range (excluding trailing empty rows and columns).
     * @param {string} apiParams.range - (Required) The [A1 notation](https://developers.google.com/workspace/sheets/api/guides/concepts#cell) of the values to update.
     * @param {string} apiParams.responseDateTimeRenderOption - Determines how dates, times, and durations in the response should be rendered. This is ignored if response_value_render_option is FORMATTED_VALUE. The default dateTime render option is SERIAL_NUMBER.
     * @param {string} apiParams.responseValueRenderOption - Determines how values in the response should be rendered. The default render option is FORMATTED_VALUE.
     * @param {string} apiParams.spreadsheetId - (Required) The ID of the spreadsheet to update.
     * @param {string} apiParams.valueInputOption - How the input data should be interpreted.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.spreadsheets.values.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/spreadsheets/{spreadsheetId}/values/{range}', 'PUT', apiParams, clientConfig);

    /**
     * Appends values to a spreadsheet. The input range is used to search for existing data and find a "table" within that range. Values will be appended to the next row of the table, starting with the first column of the table. See the [guide](https://developers.google.com/workspace/sheets/api/guides/values#appending_values) and [sample code](https://developers.google.com/workspace/sheets/api/samples/writing#append_values) for specific details of how tables are detected and data is appended. The caller must specify the spreadsheet ID, range, and a valueInputOption. The `valueInputOption` only controls how the input data will be added to the sheet (column-wise or row-wise), it does not influence what cell the data starts being written to.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.includeValuesInResponse - Determines if the update response should include the values of the cells that were appended. By default, responses do not include the updated values.
     * @param {string} apiParams.insertDataOption - How the input data should be inserted.
     * @param {string} apiParams.range - (Required) The [A1 notation](https://developers.google.com/workspace/sheets/api/guides/concepts#cell) of a range to search for a logical table of data. Values are appended after the last row of the table.
     * @param {string} apiParams.responseDateTimeRenderOption - Determines how dates, times, and durations in the response should be rendered. This is ignored if response_value_render_option is FORMATTED_VALUE. The default dateTime render option is SERIAL_NUMBER.
     * @param {string} apiParams.responseValueRenderOption - Determines how values in the response should be rendered. The default render option is FORMATTED_VALUE.
     * @param {string} apiParams.spreadsheetId - (Required) The ID of the spreadsheet to update.
     * @param {string} apiParams.valueInputOption - How the input data should be interpreted.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.spreadsheets.values.append = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/spreadsheets/{spreadsheetId}/values/{range}:append', 'POST', apiParams, clientConfig);

    /**
     * Clears values from a spreadsheet. The caller must specify the spreadsheet ID and range. Only values are cleared -- all other properties of the cell (such as formatting, data validation, etc..) are kept.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.range - (Required) The [A1 notation or R1C1 notation](https://developers.google.com/workspace/sheets/api/guides/concepts#cell) of the values to clear.
     * @param {string} apiParams.spreadsheetId - (Required) The ID of the spreadsheet to update.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.spreadsheets.values.clear = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/spreadsheets/{spreadsheetId}/values/{range}:clear', 'POST', apiParams, clientConfig);

    /**
     * Returns one or more ranges of values from a spreadsheet. The caller must specify the spreadsheet ID and one or more ranges.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.dateTimeRenderOption - How dates, times, and durations should be represented in the output. This is ignored if value_render_option is FORMATTED_VALUE. The default dateTime render option is SERIAL_NUMBER.
     * @param {string} apiParams.majorDimension - The major dimension that results should use. For example, if the spreadsheet data is: `A1=1,B1=2,A2=3,B2=4`, then requesting `ranges=["A1:B2"],majorDimension=ROWS` returns `[[1,2],[3,4]]`, whereas requesting `ranges=["A1:B2"],majorDimension=COLUMNS` returns `[[1,3],[2,4]]`.
     * @param {string} apiParams.ranges - The [A1 notation or R1C1 notation](https://developers.google.com/workspace/sheets/api/guides/concepts#cell) of the range to retrieve values from.
     * @param {string} apiParams.spreadsheetId - (Required) The ID of the spreadsheet to retrieve data from.
     * @param {string} apiParams.valueRenderOption - How values should be represented in the output. The default render option is ValueRenderOption.FORMATTED_VALUE.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.spreadsheets.values.batchGet = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/spreadsheets/{spreadsheetId}/values:batchGet', 'GET', apiParams, clientConfig);

    /**
     * Sets values in one or more ranges of a spreadsheet. The caller must specify the spreadsheet ID, a valueInputOption, and one or more ValueRanges.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.spreadsheetId - (Required) The ID of the spreadsheet to update.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.spreadsheets.values.batchUpdate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/spreadsheets/{spreadsheetId}/values:batchUpdate', 'POST', apiParams, clientConfig);

    /**
     * Clears one or more ranges of values from a spreadsheet. The caller must specify the spreadsheet ID and one or more ranges. Only values are cleared -- all other properties of the cell (such as formatting and data validation) are kept.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.spreadsheetId - (Required) The ID of the spreadsheet to update.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.spreadsheets.values.batchClear = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/spreadsheets/{spreadsheetId}/values:batchClear', 'POST', apiParams, clientConfig);

    /**
     * Returns one or more ranges of values that match the specified data filters. The caller must specify the spreadsheet ID and one or more DataFilters. Ranges that match any of the data filters in the request will be returned.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.spreadsheetId - (Required) The ID of the spreadsheet to retrieve data from.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.spreadsheets.values.batchGetByDataFilter = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/spreadsheets/{spreadsheetId}/values:batchGetByDataFilter', 'POST', apiParams, clientConfig);

    /**
     * Sets values in one or more ranges of a spreadsheet. The caller must specify the spreadsheet ID, a valueInputOption, and one or more DataFilterValueRanges.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.spreadsheetId - (Required) The ID of the spreadsheet to update.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.spreadsheets.values.batchUpdateByDataFilter = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/spreadsheets/{spreadsheetId}/values:batchUpdateByDataFilter', 'POST', apiParams, clientConfig);

    /**
     * Clears one or more ranges of values from a spreadsheet. The caller must specify the spreadsheet ID and one or more DataFilters. Ranges matching any of the specified data filters will be cleared. Only values are cleared -- all other properties of the cell (such as formatting, data validation, etc..) are kept.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.spreadsheetId - (Required) The ID of the spreadsheet to update.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.spreadsheets.values.batchClearByDataFilter = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/spreadsheets/{spreadsheetId}/values:batchClearByDataFilter', 'POST', apiParams, clientConfig);

    this.spreadsheets.developerMetadata = {};

    /**
     * Returns the developer metadata with the specified ID. The caller must specify the spreadsheet ID and the developer metadata's unique metadataId.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.metadataId - (Required) The ID of the developer metadata to retrieve.
     * @param {string} apiParams.spreadsheetId - (Required) The ID of the spreadsheet to retrieve metadata from.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.spreadsheets.developerMetadata.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/spreadsheets/{spreadsheetId}/developerMetadata/{metadataId}', 'GET', apiParams, clientConfig);

    /**
     * Returns all developer metadata matching the specified DataFilter. If the provided DataFilter represents a DeveloperMetadataLookup object, this will return all DeveloperMetadata entries selected by it. If the DataFilter represents a location in a spreadsheet, this will return all developer metadata associated with locations intersecting that region.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.spreadsheetId - (Required) The ID of the spreadsheet to retrieve metadata from.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.spreadsheets.developerMetadata.search = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/spreadsheets/{spreadsheetId}/developerMetadata:search', 'POST', apiParams, clientConfig);

    this.spreadsheets.sheets = {};

    /**
     * Copies a single sheet from a spreadsheet to another spreadsheet. Returns the properties of the newly created sheet.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.sheetId - (Required) The ID of the sheet to copy.
     * @param {string} apiParams.spreadsheetId - (Required) The ID of the spreadsheet containing the sheet to copy.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.spreadsheets.sheets.copyTo = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v4/spreadsheets/{spreadsheetId}/sheets/{sheetId}:copyTo', 'POST', apiParams, clientConfig);
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
