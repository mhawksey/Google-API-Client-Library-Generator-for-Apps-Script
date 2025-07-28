# Admin SDK API (Datatransfer) - Apps Script Client Library

Auto-generated client library for using the **Admin SDK API (version: datatransfer_v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 27 Jul 2025 15:45:26 GMT
- **Last Modified:** Sun, 27 Jul 2025 12:20:13 GMT
- **Created:** Sun, 20 Jul 2025 16:10:51 GMT



---

## API Reference

### `applications`

#### `applications.get()`

Retrieves information about an application for the given application ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.applicationId` | `string` | Yes | ID of the application resource to be retrieved. |

#### `applications.list()`

Lists the applications available for data transfer for a customer.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | No | Immutable ID of the Google Workspace account. |
| `params.maxResults` | `integer` | No | Maximum number of results to return. Default is 100. |
| `params.pageToken` | `string` | No | Token to specify next page in the list. |

### `transfers`

#### `transfers.get()`

Retrieves a data transfer request by its resource ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.dataTransferId` | `string` | Yes | ID of the resource to be retrieved. This is returned in the response from the insert method. |

#### `transfers.insert()`

Inserts a data transfer request. See the [Transfer parameters](https://developers.google.com/workspace/admin/data-transfer/v1/parameters) reference for specific application requirements.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

#### `transfers.list()`

Lists the transfers for a customer by source user, destination user, or status.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | No | Immutable ID of the Google Workspace account. |
| `params.maxResults` | `integer` | No | Maximum number of results to return. Default is 100. |
| `params.newOwnerUserId` | `string` | No | Destination user's profile ID. |
| `params.oldOwnerUserId` | `string` | No | Source user's profile ID. |
| `params.pageToken` | `string` | No | Token to specify the next page in the list. |
| `params.status` | `string` | No | Status of the transfer. |