
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
    // "Private" properties using the underscore convention
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://sheets.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.spreadsheets = {};

    /**
     * Creates a spreadsheet, returning the newly created spreadsheet.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.spreadsheets.create = (params) => this._makeRequest('v4/spreadsheets', 'POST', params);

    /**
     * Returns the spreadsheet at the given ID. The caller must specify the spreadsheet ID. By default, data within grids is not returned. You can include grid data in one of 2 ways: * Specify a [field mask](https://developers.google.com/workspace/sheets/api/guides/field-masks) listing your desired fields using the `fields` URL parameter in HTTP * Set the includeGridData URL parameter to true. If a field mask is set, the `includeGridData` parameter is ignored For large spreadsheets, as a best practice, retrieve only the specific spreadsheet fields that you want. To retrieve only subsets of spreadsheet data, use the ranges URL parameter. Ranges are specified using [A1 notation](https://developers.google.com/workspace/sheets/api/guides/concepts#cell). You can define a single cell (for example, `A1`) or multiple cells (for example, `A1:D5`). You can also get cells from other sheets within the same spreadsheet (for example, `Sheet2!A1:C4`) or retrieve multiple ranges at once (for example, `?ranges=A1:D5&ranges=Sheet2!A1:C4`). Limiting the range returns only the portions of the spreadsheet that intersect the requested ranges.
     * @param {boolean} params.excludeTablesInBandedRanges - True if tables should be excluded in the banded ranges. False if not set.
     * @param {boolean} params.includeGridData - True if grid data should be returned. This parameter is ignored if a field mask was set in the request.
     * @param {string} params.ranges - The ranges to retrieve from the spreadsheet.
     * @param {string} params.spreadsheetId - (Required) The spreadsheet to request.
     * @return {object} The API response object.
     */
    this.spreadsheets.get = (params) => this._makeRequest('v4/spreadsheets/{spreadsheetId}', 'GET', params);

    /**
     * Returns the spreadsheet at the given ID. The caller must specify the spreadsheet ID. This method differs from GetSpreadsheet in that it allows selecting which subsets of spreadsheet data to return by specifying a dataFilters parameter. Multiple DataFilters can be specified. Specifying one or more data filters returns the portions of the spreadsheet that intersect ranges matched by any of the filters. By default, data within grids is not returned. You can include grid data one of 2 ways: * Specify a [field mask](https://developers.google.com/workspace/sheets/api/guides/field-masks) listing your desired fields using the `fields` URL parameter in HTTP * Set the includeGridData parameter to true. If a field mask is set, the `includeGridData` parameter is ignored For large spreadsheets, as a best practice, retrieve only the specific spreadsheet fields that you want.
     * @param {string} params.spreadsheetId - (Required) The spreadsheet to request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.spreadsheets.getByDataFilter = (params) => this._makeRequest('v4/spreadsheets/{spreadsheetId}:getByDataFilter', 'POST', params);

    /**
     * Applies one or more updates to the spreadsheet. Each request is validated before being applied. If any request is not valid then the entire request will fail and nothing will be applied. Some requests have replies to give you some information about how they are applied. The replies will mirror the requests. For example, if you applied 4 updates and the 3rd one had a reply, then the response will have 2 empty replies, the actual reply, and another empty reply, in that order. Due to the collaborative nature of spreadsheets, it is not guaranteed that the spreadsheet will reflect exactly your changes after this completes, however it is guaranteed that the updates in the request will be applied together atomically. Your changes may be altered with respect to collaborator changes. If there are no collaborators, the spreadsheet should reflect your changes.
     * @param {string} params.spreadsheetId - (Required) The spreadsheet to apply the updates to.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.spreadsheets.batchUpdate = (params) => this._makeRequest('v4/spreadsheets/{spreadsheetId}:batchUpdate', 'POST', params);

    this.spreadsheets.values = {};

    /**
     * Returns a range of values from a spreadsheet. The caller must specify the spreadsheet ID and a range.
     * @param {string} params.dateTimeRenderOption - How dates, times, and durations should be represented in the output. This is ignored if value_render_option is FORMATTED_VALUE. The default dateTime render option is SERIAL_NUMBER.
     * @param {string} params.majorDimension - The major dimension that results should use. For example, if the spreadsheet data in Sheet1 is: `A1=1,B1=2,A2=3,B2=4`, then requesting `range=Sheet1!A1:B2?majorDimension=ROWS` returns `[[1,2],[3,4]]`, whereas requesting `range=Sheet1!A1:B2?majorDimension=COLUMNS` returns `[[1,3],[2,4]]`.
     * @param {string} params.range - (Required) The [A1 notation or R1C1 notation](https://developers.google.com/workspace/sheets/api/guides/concepts#cell) of the range to retrieve values from.
     * @param {string} params.spreadsheetId - (Required) The ID of the spreadsheet to retrieve data from.
     * @param {string} params.valueRenderOption - How values should be represented in the output. The default render option is FORMATTED_VALUE.
     * @return {object} The API response object.
     */
    this.spreadsheets.values.get = (params) => this._makeRequest('v4/spreadsheets/{spreadsheetId}/values/{range}', 'GET', params);

    /**
     * Sets values in a range of a spreadsheet. The caller must specify the spreadsheet ID, range, and a valueInputOption.
     * @param {boolean} params.includeValuesInResponse - Determines if the update response should include the values of the cells that were updated. By default, responses do not include the updated values. If the range to write was larger than the range actually written, the response includes all values in the requested range (excluding trailing empty rows and columns).
     * @param {string} params.range - (Required) The [A1 notation](https://developers.google.com/workspace/sheets/api/guides/concepts#cell) of the values to update.
     * @param {string} params.responseDateTimeRenderOption - Determines how dates, times, and durations in the response should be rendered. This is ignored if response_value_render_option is FORMATTED_VALUE. The default dateTime render option is SERIAL_NUMBER.
     * @param {string} params.responseValueRenderOption - Determines how values in the response should be rendered. The default render option is FORMATTED_VALUE.
     * @param {string} params.spreadsheetId - (Required) The ID of the spreadsheet to update.
     * @param {string} params.valueInputOption - How the input data should be interpreted.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.spreadsheets.values.update = (params) => this._makeRequest('v4/spreadsheets/{spreadsheetId}/values/{range}', 'PUT', params);

    /**
     * Appends values to a spreadsheet. The input range is used to search for existing data and find a "table" within that range. Values will be appended to the next row of the table, starting with the first column of the table. See the [guide](https://developers.google.com/workspace/sheets/api/guides/values#appending_values) and [sample code](https://developers.google.com/workspace/sheets/api/samples/writing#append_values) for specific details of how tables are detected and data is appended. The caller must specify the spreadsheet ID, range, and a valueInputOption. The `valueInputOption` only controls how the input data will be added to the sheet (column-wise or row-wise), it does not influence what cell the data starts being written to.
     * @param {boolean} params.includeValuesInResponse - Determines if the update response should include the values of the cells that were appended. By default, responses do not include the updated values.
     * @param {string} params.insertDataOption - How the input data should be inserted.
     * @param {string} params.range - (Required) The [A1 notation](https://developers.google.com/workspace/sheets/api/guides/concepts#cell) of a range to search for a logical table of data. Values are appended after the last row of the table.
     * @param {string} params.responseDateTimeRenderOption - Determines how dates, times, and durations in the response should be rendered. This is ignored if response_value_render_option is FORMATTED_VALUE. The default dateTime render option is SERIAL_NUMBER.
     * @param {string} params.responseValueRenderOption - Determines how values in the response should be rendered. The default render option is FORMATTED_VALUE.
     * @param {string} params.spreadsheetId - (Required) The ID of the spreadsheet to update.
     * @param {string} params.valueInputOption - How the input data should be interpreted.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.spreadsheets.values.append = (params) => this._makeRequest('v4/spreadsheets/{spreadsheetId}/values/{range}:append', 'POST', params);

    /**
     * Clears values from a spreadsheet. The caller must specify the spreadsheet ID and range. Only values are cleared -- all other properties of the cell (such as formatting, data validation, etc..) are kept.
     * @param {string} params.range - (Required) The [A1 notation or R1C1 notation](https://developers.google.com/workspace/sheets/api/guides/concepts#cell) of the values to clear.
     * @param {string} params.spreadsheetId - (Required) The ID of the spreadsheet to update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.spreadsheets.values.clear = (params) => this._makeRequest('v4/spreadsheets/{spreadsheetId}/values/{range}:clear', 'POST', params);

    /**
     * Returns one or more ranges of values from a spreadsheet. The caller must specify the spreadsheet ID and one or more ranges.
     * @param {string} params.dateTimeRenderOption - How dates, times, and durations should be represented in the output. This is ignored if value_render_option is FORMATTED_VALUE. The default dateTime render option is SERIAL_NUMBER.
     * @param {string} params.majorDimension - The major dimension that results should use. For example, if the spreadsheet data is: `A1=1,B1=2,A2=3,B2=4`, then requesting `ranges=["A1:B2"],majorDimension=ROWS` returns `[[1,2],[3,4]]`, whereas requesting `ranges=["A1:B2"],majorDimension=COLUMNS` returns `[[1,3],[2,4]]`.
     * @param {string} params.ranges - The [A1 notation or R1C1 notation](https://developers.google.com/workspace/sheets/api/guides/concepts#cell) of the range to retrieve values from.
     * @param {string} params.spreadsheetId - (Required) The ID of the spreadsheet to retrieve data from.
     * @param {string} params.valueRenderOption - How values should be represented in the output. The default render option is ValueRenderOption.FORMATTED_VALUE.
     * @return {object} The API response object.
     */
    this.spreadsheets.values.batchGet = (params) => this._makeRequest('v4/spreadsheets/{spreadsheetId}/values:batchGet', 'GET', params);

    /**
     * Sets values in one or more ranges of a spreadsheet. The caller must specify the spreadsheet ID, a valueInputOption, and one or more ValueRanges.
     * @param {string} params.spreadsheetId - (Required) The ID of the spreadsheet to update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.spreadsheets.values.batchUpdate = (params) => this._makeRequest('v4/spreadsheets/{spreadsheetId}/values:batchUpdate', 'POST', params);

    /**
     * Clears one or more ranges of values from a spreadsheet. The caller must specify the spreadsheet ID and one or more ranges. Only values are cleared -- all other properties of the cell (such as formatting and data validation) are kept.
     * @param {string} params.spreadsheetId - (Required) The ID of the spreadsheet to update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.spreadsheets.values.batchClear = (params) => this._makeRequest('v4/spreadsheets/{spreadsheetId}/values:batchClear', 'POST', params);

    /**
     * Returns one or more ranges of values that match the specified data filters. The caller must specify the spreadsheet ID and one or more DataFilters. Ranges that match any of the data filters in the request will be returned.
     * @param {string} params.spreadsheetId - (Required) The ID of the spreadsheet to retrieve data from.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.spreadsheets.values.batchGetByDataFilter = (params) => this._makeRequest('v4/spreadsheets/{spreadsheetId}/values:batchGetByDataFilter', 'POST', params);

    /**
     * Sets values in one or more ranges of a spreadsheet. The caller must specify the spreadsheet ID, a valueInputOption, and one or more DataFilterValueRanges.
     * @param {string} params.spreadsheetId - (Required) The ID of the spreadsheet to update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.spreadsheets.values.batchUpdateByDataFilter = (params) => this._makeRequest('v4/spreadsheets/{spreadsheetId}/values:batchUpdateByDataFilter', 'POST', params);

    /**
     * Clears one or more ranges of values from a spreadsheet. The caller must specify the spreadsheet ID and one or more DataFilters. Ranges matching any of the specified data filters will be cleared. Only values are cleared -- all other properties of the cell (such as formatting, data validation, etc..) are kept.
     * @param {string} params.spreadsheetId - (Required) The ID of the spreadsheet to update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.spreadsheets.values.batchClearByDataFilter = (params) => this._makeRequest('v4/spreadsheets/{spreadsheetId}/values:batchClearByDataFilter', 'POST', params);

    this.spreadsheets.developerMetadata = {};

    /**
     * Returns the developer metadata with the specified ID. The caller must specify the spreadsheet ID and the developer metadata's unique metadataId.
     * @param {integer} params.metadataId - (Required) The ID of the developer metadata to retrieve.
     * @param {string} params.spreadsheetId - (Required) The ID of the spreadsheet to retrieve metadata from.
     * @return {object} The API response object.
     */
    this.spreadsheets.developerMetadata.get = (params) => this._makeRequest('v4/spreadsheets/{spreadsheetId}/developerMetadata/{metadataId}', 'GET', params);

    /**
     * Returns all developer metadata matching the specified DataFilter. If the provided DataFilter represents a DeveloperMetadataLookup object, this will return all DeveloperMetadata entries selected by it. If the DataFilter represents a location in a spreadsheet, this will return all developer metadata associated with locations intersecting that region.
     * @param {string} params.spreadsheetId - (Required) The ID of the spreadsheet to retrieve metadata from.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.spreadsheets.developerMetadata.search = (params) => this._makeRequest('v4/spreadsheets/{spreadsheetId}/developerMetadata:search', 'POST', params);

    this.spreadsheets.sheets = {};

    /**
     * Copies a single sheet from a spreadsheet to another spreadsheet. Returns the properties of the newly created sheet.
     * @param {integer} params.sheetId - (Required) The ID of the sheet to copy.
     * @param {string} params.spreadsheetId - (Required) The ID of the spreadsheet containing the sheet to copy.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.spreadsheets.sheets.copyTo = (params) => this._makeRequest('v4/spreadsheets/{spreadsheetId}/sheets/{sheetId}:copyTo', 'POST', params);
  }

  /**
   * @private Builds the full request URL and options object.
   */
  _buildRequestDetails(path, httpMethod, params) {
    let url = this._rootUrl + this._servicePath + path;
    const remainingParams = { ...params };
    // Fix: Correctly handle {+param} style parameters and other potential special chars.
    const pathParams = url.match(/{[^{}]+}/g) || [];

    pathParams.forEach(placeholder => {
      const isPlus = placeholder.startsWith('{+');
      const paramName = placeholder.slice(isPlus ? 2 : 1, -1);
      if (Object.prototype.hasOwnProperty.call(remainingParams, paramName)) {
        // Fix: URI-encode path parameters for safety.
        url = url.replace(placeholder, encodeURIComponent(remainingParams[paramName]));
        delete remainingParams[paramName];
      }
    });

    const queryParts = [];
    for (const key in remainingParams) {
      if (key !== 'resource') {
        queryParts.push(`${encodeURIComponent(key)}=${encodeURIComponent(remainingParams[key])}`);
      }
    }
    if (queryParts.length > 0) {
      url += '?' + queryParts.join('&');
    }

    const options = {
      method: httpMethod,
      headers: { 'Authorization': 'Bearer ' + this._token },
      contentType: 'application/json',
      muteHttpExceptions: true,
    };
    if (params && params.resource) {
      options.payload = JSON.stringify(params.resource);
    }
    
    return { url, options };
  }

  /**
   * @private Makes the HTTP request with exponential backoff for retries.
   */
  _makeRequest(path, httpMethod, params) {
    const { url, options } = this._buildRequestDetails(path, httpMethod, params);

    for (let i = 0; i <= this._backoffConfig.retries; i++) {
      const response = UrlFetchApp.fetch(url, options);
      const responseCode = response.getResponseCode();
      const responseText = response.getContentText(); // Simplified call

      if (responseCode >= 200 && responseCode < 300) {
        return responseText ? JSON.parse(responseText) : {};
      }

      const retryableErrors = [429, 500, 503];
      if (retryableErrors.includes(responseCode) && i < this._backoffConfig.retries) {
        const delay = this._backoffConfig.baseDelay * Math.pow(2, i) + Math.random() * 1000;
        Utilities.sleep(delay);
        continue;
      }

      try {
        // Return parsed error if possible, otherwise a generic error object
        return JSON.parse(responseText);
      } catch (e) {
        return { error: { code: responseCode, message: responseText } };
      }
    }
    
    // This line is technically unreachable if retries >= 0, but good for safety.
    throw new Error('Request failed after multiple retries.');
  }
}
