# Google Vault API - Apps Script Client Library

Auto-generated client library for using the **Google Vault API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Thu, 01 Jan 2026 01:14:41 GMT
- **Last Modified:** Thu, 01 Jan 2026 01:14:41 GMT
- **Created:** Sun, 20 Jul 2025 16:56:28 GMT



---

## API Reference

### `operations`

#### `operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.pageToken` | `string` | No | The standard list page token. |
| `params.returnPartialSuccess` | `boolean` | No | When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. |
| `params.filter` | `string` | No | The standard list filter. |

#### `operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

### `matters`

#### `matters.get()`

Gets the specified matter.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.matterId` | `string` | Yes | The matter ID. |
| `params.view` | `string` | No | Specifies how much information about the matter to return in the response. |

#### `matters.count()`

Counts the accounts processed by the specified query.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.matterId` | `string` | Yes | The matter ID. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `matters.delete()`

Deletes the specified matter. Returns the matter with updated state.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.matterId` | `string` | Yes | The matter ID |

#### `matters.list()`

Lists matters the requestor has access to.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.view` | `string` | No | Specifies how much information about the matter to return in response. |
| `params.state` | `string` | No | If set, lists only matters with the specified state. The default lists matters of all states. |
| `params.pageSize` | `integer` | No | The number of matters to return in the response. Default and maximum are 100. |
| `params.pageToken` | `string` | No | The pagination token as returned in the response. |

#### `matters.close()`

Closes the specified matter. Returns the matter with updated state.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.matterId` | `string` | Yes | The matter ID. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `matters.reopen()`

Reopens the specified matter. Returns the matter with updated state.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.matterId` | `string` | Yes | The matter ID. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `matters.update()`

Updates the specified matter. This updates only the name and description of the matter, identified by matter ID. Changes to any other fields are ignored. Returns the default view of the matter.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.matterId` | `string` | Yes | The matter ID. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `matters.undelete()`

Undeletes the specified matter. Returns the matter with updated state.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.matterId` | `string` | Yes | The matter ID. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `matters.create()`

Creates a matter with the given name and description. The initial state is open, and the owner is the method caller. Returns the created matter with default view.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |

#### `matters.addPermissions()`

Adds an account as a matter collaborator.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.matterId` | `string` | Yes | The matter ID. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `matters.removePermissions()`

Removes an account as a matter collaborator.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.matterId` | `string` | Yes | The matter ID. |
| `params.requestBody` | `object` | Yes | The request body. |

### `matters.savedQueries`

#### `matters.savedQueries.list()`

Lists the saved queries in a matter.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No | The maximum number of saved queries to return. |
| `params.matterId` | `string` | Yes | The ID of the matter to get the saved queries for. |
| `params.pageToken` | `string` | No | The pagination token as returned in the previous response. An empty token means start from the beginning. |

#### `matters.savedQueries.get()`

Retrieves the specified saved query.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.savedQueryId` | `string` | Yes | ID of the saved query to retrieve. |
| `params.matterId` | `string` | Yes | The ID of the matter to get the saved query from. |

#### `matters.savedQueries.create()`

Creates a saved query.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.matterId` | `string` | Yes | The ID of the matter to create the saved query in. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `matters.savedQueries.delete()`

Deletes the specified saved query.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.savedQueryId` | `string` | Yes | ID of the saved query to delete. |
| `params.matterId` | `string` | Yes | The ID of the matter to delete the saved query from. |

### `matters.exports`

#### `matters.exports.list()`

Lists details about the exports in the specified matter.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No | The pagination token as returned in the response. |
| `params.matterId` | `string` | Yes | The matter ID. |
| `params.pageSize` | `integer` | No | The number of exports to return in the response. |

#### `matters.exports.delete()`

Deletes an export.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.exportId` | `string` | Yes | The export ID. |
| `params.matterId` | `string` | Yes | The matter ID. |

#### `matters.exports.create()`

Creates an export.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.matterId` | `string` | Yes | The matter ID. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `matters.exports.get()`

Gets an export.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.exportId` | `string` | Yes | The export ID. |
| `params.matterId` | `string` | Yes | The matter ID. |

### `matters.holds`

#### `matters.holds.update()`

Updates the scope (organizational unit or accounts) and query parameters of a hold. You cannot add accounts to a hold that covers an organizational unit, nor can you add organizational units to a hold that covers individual accounts. If you try, the unsupported values are ignored.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.holdId` | `string` | Yes | The ID of the hold. |
| `params.matterId` | `string` | Yes | The matter ID. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `matters.holds.get()`

Gets the specified hold.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.holdId` | `string` | Yes | The hold ID. |
| `params.view` | `string` | No | The amount of detail to return for a hold. |
| `params.matterId` | `string` | Yes | The matter ID. |

#### `matters.holds.list()`

Lists the holds in a matter.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.view` | `string` | No | The amount of detail to return for a hold. |
| `params.pageSize` | `integer` | No | The number of holds to return in the response, between 0 and 100 inclusive. Leaving this empty, or as 0, is the same as **page_size** = 100. |
| `params.matterId` | `string` | Yes | The matter ID. |
| `params.pageToken` | `string` | No | The pagination token as returned in the response. An empty token means start from the beginning. |

#### `matters.holds.addHeldAccounts()`

Adds accounts to a hold. Returns a list of accounts that have been successfully added. Accounts can be added only to an existing account-based hold.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.holdId` | `string` | Yes | The hold ID. |
| `params.matterId` | `string` | Yes | The matter ID. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `matters.holds.create()`

Creates a hold in the specified matter.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.matterId` | `string` | Yes | The matter ID. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `matters.holds.removeHeldAccounts()`

Removes the specified accounts from a hold. Returns a list of statuses in the same order as the request.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.matterId` | `string` | Yes | The matter ID. |
| `params.holdId` | `string` | Yes | The hold ID. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `matters.holds.delete()`

Removes the specified hold and releases the accounts or organizational unit covered by the hold. If the data is not preserved by another hold or retention rule, it might be purged.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.matterId` | `string` | Yes | The matter ID. |
| `params.holdId` | `string` | Yes | The hold ID. |

### `matters.holds.accounts`

#### `matters.holds.accounts.create()`

Adds an account to a hold. Accounts can be added only to a hold that does not have an organizational unit set. If you try to add an account to an organizational unit-based hold, an error is returned.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.holdId` | `string` | Yes | The hold ID. |
| `params.matterId` | `string` | Yes | The matter ID. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `matters.holds.accounts.delete()`

Removes an account from a hold.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.matterId` | `string` | Yes | The matter ID. |
| `params.accountId` | `string` | Yes | The ID of the account to remove from the hold. |
| `params.holdId` | `string` | Yes | The hold ID. |

#### `matters.holds.accounts.list()`

Lists the accounts covered by a hold. This can list only individually-specified accounts covered by the hold. If the hold covers an organizational unit, use the [Admin SDK](https://developers.google.com/admin-sdk/). to list the members of the organizational unit on hold.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.matterId` | `string` | Yes | The matter ID. |
| `params.holdId` | `string` | Yes | The hold ID. |