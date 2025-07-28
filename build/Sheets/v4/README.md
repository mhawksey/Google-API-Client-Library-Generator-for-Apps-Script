# Google Sheets API - Apps Script Client Library

Auto-generated client library for using the **Google Sheets API (version: v4)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 27 Jul 2025 16:20:43 GMT
- **Last Modified:** Sun, 27 Jul 2025 13:39:58 GMT
- **Created:** Sun, 20 Jul 2025 16:54:36 GMT



---

## API Reference

### `spreadsheets`

#### `spreadsheets.create()`

Creates a spreadsheet, returning the newly created spreadsheet.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

#### `spreadsheets.get()`

Returns the spreadsheet at the given ID. The caller must specify the spreadsheet ID. By default, data within grids is not returned. You can include grid data in one of 2 ways:

* Specify a [field mask](https://developers.google.com/workspace/sheets/api/guides/field-masks) listing your desired fields using the `fields` URL parameter in HTTP

* Set the includeGridData URL parameter to true. If a field mask is set, the `includeGridData` parameter is ignored For large spreadsheets, as a best practice, retrieve only the specific spreadsheet fields that you want. To retrieve only subsets of spreadsheet data, use the ranges URL parameter. Ranges are specified using [A1 notation](https://developers.google.com/workspace/sheets/api/guides/concepts#cell). You can define a single cell (for example, `A1`) or multiple cells (for example, `A1:D5`). You can also get cells from other sheets within the same spreadsheet (for example, `Sheet2!A1:C4`) or retrieve multiple ranges at once (for example, `?ranges=A1:D5&ranges=Sheet2!A1:C4`). Limiting the range returns only the portions of the spreadsheet that intersect the requested ranges.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.spreadsheetId` | `string` | Yes | The spreadsheet to request. |
| `params.ranges` | `string` | No | The ranges to retrieve from the spreadsheet. |
| `params.includeGridData` | `boolean` | No | True if grid data should be returned. This parameter is ignored if a field mask was set in the request. |
| `params.excludeTablesInBandedRanges` | `boolean` | No | True if tables should be excluded in the banded ranges. False if not set. |

#### `spreadsheets.getByDataFilter()`

Returns the spreadsheet at the given ID. The caller must specify the spreadsheet ID. This method differs from GetSpreadsheet in that it allows selecting which subsets of spreadsheet data to return by specifying a dataFilters parameter. Multiple DataFilters can be specified. Specifying one or more data filters returns the portions of the spreadsheet that intersect ranges matched by any of the filters. By default, data within grids is not returned. You can include grid data one of 2 ways:

* Specify a [field mask](https://developers.google.com/workspace/sheets/api/guides/field-masks) listing your desired fields using the `fields` URL parameter in HTTP

* Set the includeGridData parameter to true. If a field mask is set, the `includeGridData` parameter is ignored For large spreadsheets, as a best practice, retrieve only the specific spreadsheet fields that you want.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.spreadsheetId` | `string` | Yes | The spreadsheet to request. |
| `params.resource` | `object` | Yes | The request body. |

#### `spreadsheets.batchUpdate()`

Applies one or more updates to the spreadsheet. Each request is validated before being applied. If any request is not valid then the entire request will fail and nothing will be applied. Some requests have replies to give you some information about how they are applied. The replies will mirror the requests. For example, if you applied 4 updates and the 3rd one had a reply, then the response will have 2 empty replies, the actual reply, and another empty reply, in that order. Due to the collaborative nature of spreadsheets, it is not guaranteed that the spreadsheet will reflect exactly your changes after this completes, however it is guaranteed that the updates in the request will be applied together atomically. Your changes may be altered with respect to collaborator changes. If there are no collaborators, the spreadsheet should reflect your changes.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.spreadsheetId` | `string` | Yes | The spreadsheet to apply the updates to. |
| `params.resource` | `object` | Yes | The request body. |

### `spreadsheets.values`

#### `spreadsheets.values.get()`

Returns a range of values from a spreadsheet. The caller must specify the spreadsheet ID and a range.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.spreadsheetId` | `string` | Yes | The ID of the spreadsheet to retrieve data from. |
| `params.range` | `string` | Yes | The [A1 notation or R1C1 notation](https://developers.google.com/workspace/sheets/api/guides/concepts#cell) of the range to retrieve values from. |
| `params.majorDimension` | `string` | No | The major dimension that results should use. For example, if the spreadsheet data in Sheet1 is: `A1=1,B1=2,A2=3,B2=4`, then requesting `range=Sheet1!A1:B2?majorDimension=ROWS` returns `[[1,2],[3,4]]`, whereas requesting `range=Sheet1!A1:B2?majorDimension=COLUMNS` returns `[[1,3],[2,4]]`. |
| `params.valueRenderOption` | `string` | No | How values should be represented in the output. The default render option is FORMATTED_VALUE. |
| `params.dateTimeRenderOption` | `string` | No | How dates, times, and durations should be represented in the output. This is ignored if value_render_option is FORMATTED_VALUE. The default dateTime render option is SERIAL_NUMBER. |

#### `spreadsheets.values.update()`

Sets values in a range of a spreadsheet. The caller must specify the spreadsheet ID, range, and a valueInputOption.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.spreadsheetId` | `string` | Yes | The ID of the spreadsheet to update. |
| `params.range` | `string` | Yes | The [A1 notation](https://developers.google.com/workspace/sheets/api/guides/concepts#cell) of the values to update. |
| `params.valueInputOption` | `string` | No | How the input data should be interpreted. |
| `params.includeValuesInResponse` | `boolean` | No | Determines if the update response should include the values of the cells that were updated. By default, responses do not include the updated values. If the range to write was larger than the range actually written, the response includes all values in the requested range (excluding trailing empty rows and columns). |
| `params.responseValueRenderOption` | `string` | No | Determines how values in the response should be rendered. The default render option is FORMATTED_VALUE. |
| `params.responseDateTimeRenderOption` | `string` | No | Determines how dates, times, and durations in the response should be rendered. This is ignored if response_value_render_option is FORMATTED_VALUE. The default dateTime render option is SERIAL_NUMBER. |
| `params.resource` | `object` | Yes | The request body. |

#### `spreadsheets.values.append()`

Appends values to a spreadsheet. The input range is used to search for existing data and find a "table" within that range. Values will be appended to the next row of the table, starting with the first column of the table. See the [guide](https://developers.google.com/workspace/sheets/api/guides/values#appending_values) and [sample code](https://developers.google.com/workspace/sheets/api/samples/writing#append_values) for specific details of how tables are detected and data is appended. The caller must specify the spreadsheet ID, range, and a valueInputOption. The `valueInputOption` only controls how the input data will be added to the sheet (column-wise or row-wise), it does not influence what cell the data starts being written to.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.spreadsheetId` | `string` | Yes | The ID of the spreadsheet to update. |
| `params.range` | `string` | Yes | The [A1 notation](https://developers.google.com/workspace/sheets/api/guides/concepts#cell) of a range to search for a logical table of data. Values are appended after the last row of the table. |
| `params.valueInputOption` | `string` | No | How the input data should be interpreted. |
| `params.insertDataOption` | `string` | No | How the input data should be inserted. |
| `params.includeValuesInResponse` | `boolean` | No | Determines if the update response should include the values of the cells that were appended. By default, responses do not include the updated values. |
| `params.responseValueRenderOption` | `string` | No | Determines how values in the response should be rendered. The default render option is FORMATTED_VALUE. |
| `params.responseDateTimeRenderOption` | `string` | No | Determines how dates, times, and durations in the response should be rendered. This is ignored if response_value_render_option is FORMATTED_VALUE. The default dateTime render option is SERIAL_NUMBER. |
| `params.resource` | `object` | Yes | The request body. |

#### `spreadsheets.values.clear()`

Clears values from a spreadsheet. The caller must specify the spreadsheet ID and range. Only values are cleared -- all other properties of the cell (such as formatting, data validation, etc..) are kept.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.spreadsheetId` | `string` | Yes | The ID of the spreadsheet to update. |
| `params.range` | `string` | Yes | The [A1 notation or R1C1 notation](https://developers.google.com/workspace/sheets/api/guides/concepts#cell) of the values to clear. |
| `params.resource` | `object` | Yes | The request body. |

#### `spreadsheets.values.batchGet()`

Returns one or more ranges of values from a spreadsheet. The caller must specify the spreadsheet ID and one or more ranges.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.spreadsheetId` | `string` | Yes | The ID of the spreadsheet to retrieve data from. |
| `params.ranges` | `string` | No | The [A1 notation or R1C1 notation](https://developers.google.com/workspace/sheets/api/guides/concepts#cell) of the range to retrieve values from. |
| `params.majorDimension` | `string` | No | The major dimension that results should use. For example, if the spreadsheet data is: `A1=1,B1=2,A2=3,B2=4`, then requesting `ranges=["A1:B2"],majorDimension=ROWS` returns `[[1,2],[3,4]]`, whereas requesting `ranges=["A1:B2"],majorDimension=COLUMNS` returns `[[1,3],[2,4]]`. |
| `params.valueRenderOption` | `string` | No | How values should be represented in the output. The default render option is ValueRenderOption.FORMATTED_VALUE. |
| `params.dateTimeRenderOption` | `string` | No | How dates, times, and durations should be represented in the output. This is ignored if value_render_option is FORMATTED_VALUE. The default dateTime render option is SERIAL_NUMBER. |

#### `spreadsheets.values.batchUpdate()`

Sets values in one or more ranges of a spreadsheet. The caller must specify the spreadsheet ID, a valueInputOption, and one or more ValueRanges.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.spreadsheetId` | `string` | Yes | The ID of the spreadsheet to update. |
| `params.resource` | `object` | Yes | The request body. |

#### `spreadsheets.values.batchClear()`

Clears one or more ranges of values from a spreadsheet. The caller must specify the spreadsheet ID and one or more ranges. Only values are cleared -- all other properties of the cell (such as formatting and data validation) are kept.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.spreadsheetId` | `string` | Yes | The ID of the spreadsheet to update. |
| `params.resource` | `object` | Yes | The request body. |

#### `spreadsheets.values.batchGetByDataFilter()`

Returns one or more ranges of values that match the specified data filters. The caller must specify the spreadsheet ID and one or more DataFilters. Ranges that match any of the data filters in the request will be returned.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.spreadsheetId` | `string` | Yes | The ID of the spreadsheet to retrieve data from. |
| `params.resource` | `object` | Yes | The request body. |

#### `spreadsheets.values.batchUpdateByDataFilter()`

Sets values in one or more ranges of a spreadsheet. The caller must specify the spreadsheet ID, a valueInputOption, and one or more DataFilterValueRanges.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.spreadsheetId` | `string` | Yes | The ID of the spreadsheet to update. |
| `params.resource` | `object` | Yes | The request body. |

#### `spreadsheets.values.batchClearByDataFilter()`

Clears one or more ranges of values from a spreadsheet. The caller must specify the spreadsheet ID and one or more DataFilters. Ranges matching any of the specified data filters will be cleared. Only values are cleared -- all other properties of the cell (such as formatting, data validation, etc..) are kept.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.spreadsheetId` | `string` | Yes | The ID of the spreadsheet to update. |
| `params.resource` | `object` | Yes | The request body. |

### `spreadsheets.developerMetadata`

#### `spreadsheets.developerMetadata.get()`

Returns the developer metadata with the specified ID. The caller must specify the spreadsheet ID and the developer metadata's unique metadataId.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.spreadsheetId` | `string` | Yes | The ID of the spreadsheet to retrieve metadata from. |
| `params.metadataId` | `integer` | Yes | The ID of the developer metadata to retrieve. |

#### `spreadsheets.developerMetadata.search()`

Returns all developer metadata matching the specified DataFilter. If the provided DataFilter represents a DeveloperMetadataLookup object, this will return all DeveloperMetadata entries selected by it. If the DataFilter represents a location in a spreadsheet, this will return all developer metadata associated with locations intersecting that region.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.spreadsheetId` | `string` | Yes | The ID of the spreadsheet to retrieve metadata from. |
| `params.resource` | `object` | Yes | The request body. |

### `spreadsheets.sheets`

#### `spreadsheets.sheets.copyTo()`

Copies a single sheet from a spreadsheet to another spreadsheet. Returns the properties of the newly created sheet.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.spreadsheetId` | `string` | Yes | The ID of the spreadsheet containing the sheet to copy. |
| `params.sheetId` | `integer` | Yes | The ID of the sheet to copy. |
| `params.resource` | `object` | Yes | The request body. |