# My Business Account Management API - Apps Script Client Library

Auto-generated client library for using the **My Business Account Management API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Thu, 31 Jul 2025 23:44:28 GMT
- **Last Modified:** Sun, 27 Jul 2025 12:42:12 GMT
- **Created:** Sun, 20 Jul 2025 16:43:26 GMT



---

## API Reference

### `locations`

#### `locations.transfer()`

Moves a location from an account that the user owns to another account that the same user administers. The user must be an owner of the account the location is currently associated with and must also be at least a manager of the destination account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the location to transfer. `locations/{location_id}`. |
| `params.resource` | `object` | Yes | The request body. |

### `locations.admins`

#### `locations.admins.list()`

Lists all of the admins for the specified location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the location to list admins of. `locations/{location_id}/admins`. |

#### `locations.admins.create()`

Invites the specified user to become an administrator for the specified location. The invitee must accept the invitation in order to be granted access to the location. See AcceptInvitation to programmatically accept an invitation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the location this admin is created for. `locations/{location_id}/admins`. |
| `params.resource` | `object` | Yes | The request body. |

#### `locations.admins.delete()`

Removes the specified admin as a manager of the specified location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the admin to remove from the location. |

#### `locations.admins.patch()`

Updates the Admin for the specified location. Only the AdminRole of the Admin can be updated.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Immutable. The resource name. For account admins, this is in the form: `accounts/{account_id}/admins/{admin_id}` For location admins, this is in the form: `locations/{location_id}/admins/{admin_id}` This field will be ignored if set during admin creation. |
| `params.updateMask` | `string` | No | Required. The specific fields that should be updated. The only editable field is role. |
| `params.resource` | `object` | Yes | The request body. |

### `accounts`

#### `accounts.list()`

Lists all of the accounts for the authenticated user. This includes all accounts that the user owns, as well as any accounts for which the user has management rights.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parentAccount` | `string` | No | Optional. The resource name of the account for which the list of directly accessible accounts is to be retrieved. This only makes sense for Organizations and User Groups. If empty, will return `ListAccounts` for the authenticated user. `accounts/{account_id}`. |
| `params.pageSize` | `integer` | No | Optional. How many accounts to fetch per page. The default and maximum is 20. |
| `params.pageToken` | `string` | No | Optional. If specified, the next page of accounts is retrieved. The `pageToken` is returned when a call to `accounts.list` returns more results than can fit into the requested page size. |
| `params.filter` | `string` | No | Optional. A filter constraining the accounts to return. The response includes only entries that match the filter. If `filter` is empty, then no constraints are applied and all accounts (paginated) are retrieved for the requested account. For example, a request with the filter `type=USER_GROUP` will only return user groups. The `type` field is the only supported filter. |

#### `accounts.get()`

Gets the specified account. Returns `NOT_FOUND` if the account does not exist or if the caller does not have access rights to it.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the account to fetch. |

#### `accounts.create()`

Creates an account with the specified name and type under the given parent. - Personal accounts and Organizations cannot be created. - User Groups cannot be created with a Personal account as primary owner. - Location Groups cannot be created with a primary owner of a Personal account if the Personal account is in an Organization. - Location Groups cannot own Location Groups.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

#### `accounts.patch()`

Updates the specified business account. Personal accounts cannot be updated using this method.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Immutable. The resource name, in the format `accounts/{account_id}`. |
| `params.updateMask` | `string` | No | Required. The specific fields that should be updated. The only editable field is `accountName`. |
| `params.validateOnly` | `boolean` | No | Optional. If true, the request is validated without actually updating the account. |
| `params.resource` | `object` | Yes | The request body. |

### `accounts.invitations`

#### `accounts.invitations.accept()`

Accepts the specified invitation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the invitation that is being accepted. `accounts/{account_id}/invitations/{invitation_id}` |
| `params.resource` | `object` | Yes | The request body. |

#### `accounts.invitations.decline()`

Declines the specified invitation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the account invitation that is being declined. `accounts/{account_id}/invitations/{invitation_id}` |
| `params.resource` | `object` | Yes | The request body. |

#### `accounts.invitations.list()`

Lists pending invitations for the specified account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the account from which the list of invitations is being retrieved. `accounts/{account_id}/invitations` |
| `params.filter` | `string` | No | Optional. Filtering the response is supported via the Invitation.target_type field. |

### `accounts.admins`

#### `accounts.admins.list()`

Lists the admins for the specified account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the account from which to retrieve a list of admins. `accounts/{account_id}/admins`. |

#### `accounts.admins.create()`

Invites the specified user to become an administrator for the specified account. The invitee must accept the invitation in order to be granted access to the account. See AcceptInvitation to programmatically accept an invitation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the account this admin is created for. `accounts/{account_id}`. |
| `params.resource` | `object` | Yes | The request body. |

#### `accounts.admins.delete()`

Removes the specified admin from the specified account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the admin to remove from the account. `accounts/{account_id}/admins/{admin_id}`. |

#### `accounts.admins.patch()`

Updates the Admin for the specified Account Admin.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Immutable. The resource name. For account admins, this is in the form: `accounts/{account_id}/admins/{admin_id}` For location admins, this is in the form: `locations/{location_id}/admins/{admin_id}` This field will be ignored if set during admin creation. |
| `params.updateMask` | `string` | No | Required. The specific fields that should be updated. The only editable field is role. |
| `params.resource` | `object` | Yes | The request body. |