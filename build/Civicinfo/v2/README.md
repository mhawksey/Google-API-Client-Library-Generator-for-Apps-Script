# Google Civic Information API - Apps Script Client Library

Auto-generated client library for using the **Google Civic Information API (version: v2)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 31 Aug 2025 23:24:13 GMT
- **Last Modified:** Mon, 04 Aug 2025 20:00:57 GMT
- **Created:** Sun, 20 Jul 2025 16:15:21 GMT



---

## API Reference

### `elections`

#### `elections.voterInfoQuery()`

Looks up information relevant to a voter based on the voter's registered address.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.address` | `string` | No | The registered address of the voter to look up. |
| `params.electionId` | `string` | No | The unique ID of the election to look up. A list of election IDs can be obtained at https://www.googleapis.com/civicinfo/{version}/elections. If no election ID is specified in the query and there is more than one election with data for the given voter, the additional elections are provided in the otherElections response field. |
| `params.officialOnly` | `boolean` | No | If set to true, only data from official state sources will be returned. |
| `params.returnAllAvailableData` | `boolean` | No | If set to true, the query will return the success code and include any partial information when it is unable to determine a matching address or unable to determine the election for electionId=0 queries. |
| `params.productionDataOnly` | `boolean` | No | Whether to include data that has not been vetted yet. Should only be made available to internal IPs or trusted partners. This is a non-discoverable parameter in the One Platform API config. |

#### `elections.electionQuery()`

List of available elections to query.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.productionDataOnly` | `boolean` | No | Whether to include data that has not been allowlisted yet |

### `divisions`

#### `divisions.search()`

Searches for political divisions by their natural name or OCD ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.query` | `string` | No | The search query. Queries can cover any parts of a OCD ID or a human readable division name. All words given in the query are treated as required patterns. In addition to that, most query operators of the Apache Lucene library are supported. See http://lucene.apache.org/core/2_9_4/queryparsersyntax.html |

#### `divisions.queryDivisionByAddress()`

Lookup OCDIDs and names for divisions related to an address.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.address` | `string` | No |  |