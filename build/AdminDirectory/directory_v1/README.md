# Admin SDK API (Directory) - Apps Script Client Library

Auto-generated client library for using the **Admin SDK API (version: directory_v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 21 Sep 2025 17:02:42 GMT
- **Last Modified:** Sun, 21 Sep 2025 17:02:42 GMT
- **Created:** Sun, 20 Jul 2025 16:10:54 GMT



---

## API Reference

### `chromeosdevices`

#### `chromeosdevices.action()`

Use [BatchChangeChromeOsDeviceStatus](https://developers.google.com/workspace/admin/directory/reference/rest/v1/customer.devices.chromeos/batchChangeStatus) instead. Takes an action that affects a Chrome OS Device. This includes deprovisioning, disabling, and re-enabling devices. *Warning:*

* Deprovisioning a device will stop device policy syncing and remove device-level printers. After a device is deprovisioned, it must be wiped before it can be re-enrolled.

* Lost or stolen devices should use the disable action.

* Re-enabling a disabled device will consume a device license. If you do not have sufficient licenses available when completing the re-enable action, you will receive an error. For more information about deprovisioning and disabling devices, visit the [help center](https://support.google.com/chrome/a/answer/3523633).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](https://developers.google.com/workspace/admin/directory/v1/reference/users). |
| `params.resourceId` | `string` | Yes | The unique ID of the device. The `resourceId`s are returned in the response from the [chromeosdevices.list](https://developers.google.com/workspace/admin/directory/v1/reference/chromeosdevices/list) method. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `chromeosdevices.get()`

Retrieves a Chrome OS device's properties.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](https://developers.google.com/workspace/admin/directory/v1/reference/users). |
| `params.deviceId` | `string` | Yes | The unique ID of the device. The `deviceId`s are returned in the response from the [chromeosdevices.list](https://developers.google.com/workspace/admin/directory/v1/reference/chromeosdevices/list) method. |
| `params.projection` | `string` | No | Determines whether the response contains the full list of properties or only a subset. |

#### `chromeosdevices.list()`

Retrieves a paginated list of Chrome OS devices within an account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](https://developers.google.com/workspace/admin/directory/v1/reference/users). |
| `params.maxResults` | `integer` | No | Maximum number of results to return. Value should not exceed 300. |
| `params.orderBy` | `string` | No | Device property to use for sorting results. |
| `params.orgUnitPath` | `string` | No | The full path of the organizational unit (minus the leading `/`) or its unique ID. |
| `params.pageToken` | `string` | No | The `pageToken` query parameter is used to request the next page of query results. The follow-on request's `pageToken` query parameter is the `nextPageToken` from your previous response. |
| `params.projection` | `string` | No | Determines whether the response contains the full list of properties or only a subset. |
| `params.query` | `string` | No | Search string in the format given at https://developers.google.com/workspace/admin/directory/v1/list-query-operators |
| `params.sortOrder` | `string` | No | Whether to return results in ascending or descending order. Must be used with the `orderBy` parameter. |
| `params.includeChildOrgunits` | `boolean` | No | Return devices from all child orgunits, as well as the specified org unit. If this is set to true, 'orgUnitPath' must be provided. |

#### `chromeosdevices.moveDevicesToOu()`

Moves or inserts multiple Chrome OS devices to an organizational unit. You can move up to 50 devices at once.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Immutable. ID of the Google Workspace account |
| `params.orgUnitPath` | `string` | Yes | Full path of the target organizational unit or its ID |
| `params.requestBody` | `object` | Yes | The request body. |

#### `chromeosdevices.patch()`

Updates a device's updatable properties, such as `annotatedUser`, `annotatedLocation`, `notes`, `orgUnitPath`, or `annotatedAssetId`. This method supports [patch semantics](https://developers.google.com/workspace/admin/directory/v1/guides/performance#patch).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](https://developers.google.com/workspace/admin/directory/v1/reference/users). |
| `params.deviceId` | `string` | Yes | The unique ID of the device. The `deviceId`s are returned in the response from the [chromeosdevices.list](https://developers.google.com/workspace/admin/v1/reference/chromeosdevices/list) method. |
| `params.projection` | `string` | No | Determines whether the response contains the full list of properties or only a subset. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `chromeosdevices.update()`

Updates a device's updatable properties, such as `annotatedUser`, `annotatedLocation`, `notes`, `orgUnitPath`, or `annotatedAssetId`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](https://developers.google.com/workspace/admin/directory/v1/reference/users). |
| `params.deviceId` | `string` | Yes | The unique ID of the device. The `deviceId`s are returned in the response from the [chromeosdevices.list](https://developers.google.com/workspace/admin/v1/reference/chromeosdevices/list) method. |
| `params.projection` | `string` | No | Determines whether the response contains the full list of properties or only a subset. |
| `params.requestBody` | `object` | Yes | The request body. |

### `customer`

### `customer.devices`

### `customer.devices.chromeos`

#### `customer.devices.chromeos.issueCommand()`

Issues a command for the device to execute.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Immutable. ID of the Google Workspace account. |
| `params.deviceId` | `string` | Yes | Immutable. ID of Chrome OS Device. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `customer.devices.chromeos.batchChangeStatus()`

Changes the status of a batch of ChromeOS devices. For more information about changing a ChromeOS device state [Repair, repurpose, or retire ChromeOS devices](https://support.google.com/chrome/a/answer/3523633).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. Immutable ID of the Google Workspace account. |
| `params.requestBody` | `object` | Yes | The request body. |

### `customer.devices.chromeos.commands`

#### `customer.devices.chromeos.commands.get()`

Gets command data a specific command issued to the device.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Immutable. ID of the Google Workspace account. |
| `params.deviceId` | `string` | Yes | Immutable. ID of Chrome OS Device. |
| `params.commandId` | `string` | Yes | Immutable. ID of Chrome OS Device Command. |

### `asps`

#### `asps.delete()`

Deletes an ASP issued by a user.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userKey` | `string` | Yes | Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID. |
| `params.codeId` | `integer` | Yes | The unique ID of the ASP to be deleted. |

#### `asps.get()`

Gets information about an ASP issued by a user.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userKey` | `string` | Yes | Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID. |
| `params.codeId` | `integer` | Yes | The unique ID of the ASP. |

#### `asps.list()`

Lists the ASPs issued by a user.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userKey` | `string` | Yes | Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID. |

### `channels`

#### `channels.stop()`

Stops watching resources through this channel.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |

### `customers`

#### `customers.get()`

Retrieves a customer.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerKey` | `string` | Yes | Id of the customer to be retrieved |

#### `customers.update()`

Updates a customer.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerKey` | `string` | Yes | Id of the customer to be updated |
| `params.requestBody` | `object` | Yes | The request body. |

#### `customers.patch()`

Patches a customer.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerKey` | `string` | Yes | Id of the customer to be updated |
| `params.requestBody` | `object` | Yes | The request body. |

### `customers.chrome`

### `customers.chrome.printers`

#### `customers.chrome.printers.listPrinterModels()`

Lists the supported printer models.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the customer who owns this collection of printers. Format: customers/{customer_id} |
| `params.pageSize` | `integer` | No | The maximum number of objects to return. The service may return fewer than this value. |
| `params.pageToken` | `string` | No | A page token, received from a previous call. |
| `params.filter` | `string` | No | Filer to list only models by a given manufacturer in format: "manufacturer:Brother". Search syntax is shared between this api and Admin Console printers pages. |

#### `customers.chrome.printers.list()`

List printers configs.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the customer who owns this collection of printers. Format: customers/{customer_id} |
| `params.pageSize` | `integer` | No | The maximum number of objects to return. The service may return fewer than this value. |
| `params.pageToken` | `string` | No | A page token, received from a previous call. |
| `params.orgUnitId` | `string` | No | Organization Unit that we want to list the printers for. When org_unit is not present in the request then all printers of the customer are returned (or filtered). When org_unit is present in the request then only printers available to this OU will be returned (owned or inherited). You may see if printer is owned or inherited for this OU by looking at Printer.org_unit_id. |
| `params.filter` | `string` | No | Search query. Search syntax is shared between this api and Admin Console printers pages. |
| `params.orderBy` | `string` | No | The order to sort results by. Must be one of display_name, description, make_and_model, or create_time. Default order is ascending, but descending order can be returned by appending "desc" to the order_by field. For instance, "description desc" will return the printers sorted by description in descending order. |

#### `customers.chrome.printers.get()`

Returns a `Printer` resource (printer's config).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the printer to retrieve. Format: customers/{customer_id}/chrome/printers/{printer_id} |

#### `customers.chrome.printers.create()`

Creates a printer under given Organization Unit.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the customer. Format: customers/{customer_id} |
| `params.requestBody` | `object` | Yes | The request body. |

#### `customers.chrome.printers.batchCreatePrinters()`

Creates printers under given Organization Unit.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the customer. Format: customers/{customer_id} |
| `params.requestBody` | `object` | Yes | The request body. |

#### `customers.chrome.printers.patch()`

Updates a `Printer` resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name of the Printer object, in the format customers/{customer-id}/printers/{printer-id} (During printer creation leave empty) |
| `params.updateMask` | `string` | No | The list of fields to be updated. Note, some of the fields are read only and cannot be updated. Values for not specified fields will be patched. |
| `params.clearMask` | `string` | No | The list of fields to be cleared. Note, some of the fields are read only and cannot be updated. Values for not specified fields will be patched. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `customers.chrome.printers.delete()`

Deletes a `Printer`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the printer to be updated. Format: customers/{customer_id}/chrome/printers/{printer_id} |

#### `customers.chrome.printers.batchDeletePrinters()`

Deletes printers in batch.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the customer. Format: customers/{customer_id} |
| `params.requestBody` | `object` | Yes | The request body. |

### `customers.chrome.printServers`

#### `customers.chrome.printServers.list()`

Lists print server configurations.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The [unique ID](https://developers.google.com/workspace/admin/directory/reference/rest/v1/customers) of the customer's Google Workspace account. Format: `customers/{id}` |
| `params.pageSize` | `integer` | No | The maximum number of objects to return (default `100`, max `100`). The service might return fewer than this value. |
| `params.pageToken` | `string` | No | A generated token to paginate results (the `next_page_token` from a previous call). |
| `params.orgUnitId` | `string` | No | If `org_unit_id` is present in the request, only print servers owned or inherited by the organizational unit (OU) are returned. If the `PrintServer` resource's `org_unit_id` matches the one in the request, the OU owns the server. If `org_unit_id` is not specified in the request, all print servers are returned or filtered against. |
| `params.filter` | `string` | No | Search query in [Common Expression Language syntax](https://github.com/google/cel-spec). Supported filters are `display_name`, `description`, and `uri`. Example: `printServer.displayName=='marketing-queue'`. |
| `params.orderBy` | `string` | No | Sort order for results. Supported values are `display_name`, `description`, or `create_time`. Default order is ascending, but descending order can be returned by appending "desc" to the `order_by` field. For instance, `orderBy=='description desc'` returns the print servers sorted by description in descending order. |

#### `customers.chrome.printServers.get()`

Returns a print server's configuration.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The [unique ID](https://developers.google.com/workspace/admin/directory/reference/rest/v1/customers) of the customer's Google Workspace account. Format: `customers/{id}` |

#### `customers.chrome.printServers.create()`

Creates a print server.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The [unique ID](https://developers.google.com/workspace/admin/directory/reference/rest/v1/customers) of the customer's Google Workspace account. Format: `customers/{id}` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `customers.chrome.printServers.batchCreatePrintServers()`

Creates multiple print servers.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The [unique ID](https://developers.google.com/workspace/admin/directory/reference/rest/v1/customers) of the customer's Google Workspace account. Format: `customers/{id}` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `customers.chrome.printServers.patch()`

Updates a print server's configuration.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. Resource name of the print server. Leave empty when creating. Format: `customers/{customer.id}/printServers/{print_server.id}` |
| `params.updateMask` | `string` | No | The list of fields to update. Some fields are read-only and cannot be updated. Values for unspecified fields are patched. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `customers.chrome.printServers.delete()`

Deletes a print server.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the print server to be deleted. Format: `customers/{customer.id}/chrome/printServers/{print_server.id}` |

#### `customers.chrome.printServers.batchDeletePrintServers()`

Deletes multiple print servers.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The [unique ID](https://developers.google.com/workspace/admin/directory/reference/rest/v1/customers) of the customer's Google Workspace account. Format: `customers/{customer.id}` |
| `params.requestBody` | `object` | Yes | The request body. |

### `domainAliases`

#### `domainAliases.delete()`

Deletes a domain Alias of the customer.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customer` | `string` | Yes | Immutable ID of the Google Workspace account. |
| `params.domainAliasName` | `string` | Yes | Name of domain alias to be retrieved. |

#### `domainAliases.get()`

Retrieves a domain alias of the customer.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customer` | `string` | Yes | The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, use this field instead of `domain`. You can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users](https://developers.google.com/workspace/admin/directory/v1/reference/users) resource. You must provide either the `customer` or the `domain` parameter. |
| `params.domainAliasName` | `string` | Yes | Name of domain alias to be retrieved. |

#### `domainAliases.insert()`

Inserts a domain alias of the customer.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customer` | `string` | Yes | Immutable ID of the Google Workspace account. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `domainAliases.list()`

Lists the domain aliases of the customer.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customer` | `string` | Yes | The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, use this field instead of `domain`. You can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users](https://developers.google.com/workspace/admin/directory/v1/reference/users) resource. You must provide either the `customer` or the `domain` parameter. |
| `params.parentDomainName` | `string` | No | Name of the parent domain for which domain aliases are to be fetched. |

### `domains`

#### `domains.delete()`

Deletes a domain of the customer.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customer` | `string` | Yes | Immutable ID of the Google Workspace account. |
| `params.domainName` | `string` | Yes | Name of domain to be deleted |

#### `domains.get()`

Retrieves a domain of the customer.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customer` | `string` | Yes | The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, use this field instead of `domain`. You can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users](https://developers.google.com/workspace/admin/directory/v1/reference/users) resource. You must provide either the `customer` or the `domain` parameter. |
| `params.domainName` | `string` | Yes | Name of domain to be retrieved |

#### `domains.insert()`

Inserts a domain of the customer.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customer` | `string` | Yes | Immutable ID of the Google Workspace account. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `domains.list()`

Lists the domains of the customer.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customer` | `string` | Yes | The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, use this field instead of `domain`. You can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users](https://developers.google.com/workspace/admin/directory/v1/reference/users) resource. You must provide either the `customer` or the `domain` parameter. |

### `groups`

#### `groups.delete()`

Deletes a group.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.groupKey` | `string` | Yes | Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID. |

#### `groups.get()`

Retrieves a group's properties.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.groupKey` | `string` | Yes | Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID. |

#### `groups.insert()`

Creates a group.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |

#### `groups.list()`

Retrieves all groups of a domain or of a user given a userKey (paginated).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customer` | `string` | No | The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, use this field instead of `domain`. You can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users](https://developers.google.com/workspace/admin/directory/v1/reference/users) resource. You must provide either the `customer` or the `domain` parameter. |
| `params.domain` | `string` | No | The domain name. Use this field to get groups from only one domain. To return all domains for a customer account, use the `customer` query parameter instead. |
| `params.maxResults` | `integer` | No | Maximum number of results to return. Max allowed value is 200. |
| `params.orderBy` | `string` | No | Column to use for sorting results |
| `params.pageToken` | `string` | No | Token to specify next page in the list |
| `params.query` | `string` | No | Query string search. Should be of the form "". Complete documentation is at https://developers.google.com/workspace/admin/directory/v1/guides/search-groups |
| `params.sortOrder` | `string` | No | Whether to return results in ascending or descending order. Only of use when orderBy is also used |
| `params.userKey` | `string` | No | Email or immutable ID of the user if only those groups are to be listed, the given user is a member of. If it's an ID, it should match with the ID of the user object. Cannot be used with the `customer` parameter. |

#### `groups.update()`

Updates a group's properties.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.groupKey` | `string` | Yes | Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `groups.patch()`

Updates a group's properties. This method supports [patch semantics](https://developers.google.com/workspace/admin/directory/v1/guides/performance#patch).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.groupKey` | `string` | Yes | Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID. |
| `params.requestBody` | `object` | Yes | The request body. |

### `groups.aliases`

#### `groups.aliases.delete()`

Removes an alias.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.groupKey` | `string` | Yes | Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID. |
| `params.alias` | `string` | Yes | The alias to be removed |

#### `groups.aliases.insert()`

Adds an alias for the group.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.groupKey` | `string` | Yes | Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `groups.aliases.list()`

Lists all aliases for a group.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.groupKey` | `string` | Yes | Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID. |

### `members`

#### `members.delete()`

Removes a member from a group.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.groupKey` | `string` | Yes | Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID. |
| `params.memberKey` | `string` | Yes | Identifies the group member in the API request. A group member can be a user or another group. The value can be the member's (group or user) primary email address, alias, or unique ID. |

#### `members.get()`

Retrieves a group member's properties.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.groupKey` | `string` | Yes | Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID. |
| `params.memberKey` | `string` | Yes | Identifies the group member in the API request. A group member can be a user or another group. The value can be the member's (group or user) primary email address, alias, or unique ID. |

#### `members.hasMember()`

Checks whether the given user is a member of the group. Membership can be direct or nested, but if nested, the `memberKey` and `groupKey` must be entities in the same domain or an `Invalid input` error is returned. To check for nested memberships that include entities outside of the group's domain, use the [`checkTransitiveMembership()`](https://cloud.google.com/identity/docs/reference/rest/v1/groups.memberships/checkTransitiveMembership) method in the Cloud Identity Groups API.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.groupKey` | `string` | Yes | Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID. |
| `params.memberKey` | `string` | Yes | Identifies the user member in the API request. The value can be the user's primary email address, alias, or unique ID. |

#### `members.insert()`

Adds a user to the specified group.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.groupKey` | `string` | Yes | Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `members.list()`

Retrieves a paginated list of all members in a group. This method times out after 60 minutes. For more information, see [Troubleshoot error codes](https://developers.google.com/workspace/admin/directory/v1/guides/troubleshoot-error-codes).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.groupKey` | `string` | Yes | Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID. |
| `params.includeDerivedMembership` | `boolean` | No | Whether to list indirect memberships. Default: false. |
| `params.maxResults` | `integer` | No | Maximum number of results to return. Max allowed value is 200. |
| `params.pageToken` | `string` | No | Token to specify next page in the list. |
| `params.roles` | `string` | No | The `roles` query parameter allows you to retrieve group members by role. Allowed values are `OWNER`, `MANAGER`, and `MEMBER`. |

#### `members.update()`

Updates the membership of a user in the specified group.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.groupKey` | `string` | Yes | Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID. |
| `params.memberKey` | `string` | Yes | Identifies the group member in the API request. A group member can be a user or another group. The value can be the member's (group or user) primary email address, alias, or unique ID. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `members.patch()`

Updates the membership properties of a user in the specified group. This method supports [patch semantics](https://developers.google.com/workspace/admin/directory/v1/guides/performance#patch).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.groupKey` | `string` | Yes | Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID. |
| `params.memberKey` | `string` | Yes | Identifies the group member in the API request. A group member can be a user or another group. The value can be the member's (group or user) primary email address, alias, or unique ID. |
| `params.requestBody` | `object` | Yes | The request body. |

### `mobiledevices`

#### `mobiledevices.action()`

Takes an action that affects a mobile device. For example, remotely wiping a device.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](https://developers.google.com/workspace/admin/directory/v1/reference/users). |
| `params.resourceId` | `string` | Yes | The unique ID the API service uses to identify the mobile device. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `mobiledevices.delete()`

Removes a mobile device.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](https://developers.google.com/workspace/admin/directory/v1/reference/users). |
| `params.resourceId` | `string` | Yes | The unique ID the API service uses to identify the mobile device. |

#### `mobiledevices.get()`

Retrieves a mobile device's properties.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](https://developers.google.com/workspace/admin/directory/v1/reference/users). |
| `params.resourceId` | `string` | Yes | The unique ID the API service uses to identify the mobile device. |
| `params.projection` | `string` | No | Restrict information returned to a set of selected fields. |

#### `mobiledevices.list()`

Retrieves a paginated list of all user-owned mobile devices for an account. To retrieve a list that includes company-owned devices, use the Cloud Identity [Devices API](https://cloud.google.com/identity/docs/concepts/overview-devices) instead. This method times out after 60 minutes. For more information, see [Troubleshoot error codes](https://developers.google.com/workspace/admin/directory/v1/guides/troubleshoot-error-codes).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](https://developers.google.com/workspace/admin/directory/v1/reference/users). |
| `params.maxResults` | `integer` | No | Maximum number of results to return. Max allowed value is 100. |
| `params.orderBy` | `string` | No | Device property to use for sorting results. |
| `params.pageToken` | `string` | No | Token to specify next page in the list |
| `params.projection` | `string` | No | Restrict information returned to a set of selected fields. |
| `params.query` | `string` | No | Search string in the format given at https://developers.google.com/workspace/admin/directory/v1/search-operators |
| `params.sortOrder` | `string` | No | Whether to return results in ascending or descending order. Must be used with the `orderBy` parameter. |

### `orgunits`

#### `orgunits.delete()`

Removes an organizational unit.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](https://developers.google.com/workspace/admin/directory/v1/reference/users). |
| `params.orgUnitPath` | `string` | Yes | The full path of the organizational unit (minus the leading `/`) or its unique ID. |

#### `orgunits.get()`

Retrieves an organizational unit.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](https://developers.google.com/workspace/admin/directory/v1/reference/users). |
| `params.orgUnitPath` | `string` | Yes | The full path of the organizational unit (minus the leading `/`) or its unique ID. |

#### `orgunits.insert()`

Adds an organizational unit.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](https://developers.google.com/workspace/admin/directory/v1/reference/users). |
| `params.requestBody` | `object` | Yes | The request body. |

#### `orgunits.list()`

Retrieves a list of all organizational units for an account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](https://developers.google.com/workspace/admin/directory/v1/reference/users). |
| `params.orgUnitPath` | `string` | No | The full path to the organizational unit or its unique ID. Returns the children of the specified organizational unit. |
| `params.type` | `string` | No | Whether to return all sub-organizations or just immediate children. |

#### `orgunits.update()`

Updates an organizational unit.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](https://developers.google.com/workspace/admin/directory/v1/reference/users). |
| `params.orgUnitPath` | `string` | Yes | The full path of the organizational unit (minus the leading `/`) or its unique ID. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `orgunits.patch()`

Updates an organizational unit. This method supports [patch semantics](https://developers.google.com/workspace/admin/directory/v1/guides/performance#patch)

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](https://developers.google.com/workspace/admin/directory/v1/reference/users). |
| `params.orgUnitPath` | `string` | Yes | The full path of the organizational unit (minus the leading `/`) or its unique ID. |
| `params.requestBody` | `object` | Yes | The request body. |

### `privileges`

#### `privileges.list()`

Retrieves a paginated list of all privileges for a customer.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customer` | `string` | Yes | The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, use this field instead of `domain`. You can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users](https://developers.google.com/workspace/admin/directory/v1/reference/users) resource. You must provide either the `customer` or the `domain` parameter. |

### `roleAssignments`

#### `roleAssignments.delete()`

Deletes a role assignment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customer` | `string` | Yes | Immutable ID of the Google Workspace account. |
| `params.roleAssignmentId` | `string` | Yes | Immutable ID of the role assignment. |

#### `roleAssignments.get()`

Retrieves a role assignment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customer` | `string` | Yes | The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, use this field instead of `domain`. You can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users](https://developers.google.com/workspace/admin/directory/v1/reference/users) resource. You must provide either the `customer` or the `domain` parameter. |
| `params.roleAssignmentId` | `string` | Yes | Immutable ID of the role assignment. |

#### `roleAssignments.insert()`

Creates a role assignment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customer` | `string` | Yes | Immutable ID of the Google Workspace account. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `roleAssignments.list()`

Retrieves a paginated list of all roleAssignments.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customer` | `string` | Yes | The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, use this field instead of `domain`. You can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users](https://developers.google.com/workspace/admin/directory/v1/reference/users) resource. You must provide either the `customer` or the `domain` parameter. |
| `params.maxResults` | `integer` | No | Maximum number of results to return. |
| `params.pageToken` | `string` | No | Token to specify the next page in the list. |
| `params.roleId` | `string` | No | Immutable ID of a role. If included in the request, returns only role assignments containing this role ID. |
| `params.userKey` | `string` | No | The primary email address, alias email address, or unique user or group ID. If included in the request, returns role assignments only for this user or group. |
| `params.includeIndirectRoleAssignments` | `boolean` | No | When set to `true`, fetches indirect role assignments (i.e. role assignment via a group) as well as direct ones. Defaults to `false`. You must specify `user_key` or the indirect role assignments will not be included. |

### `resources`

### `resources.buildings`

#### `resources.buildings.delete()`

Deletes a building.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customer` | `string` | Yes | The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID. |
| `params.buildingId` | `string` | Yes | The id of the building to delete. |

#### `resources.buildings.get()`

Retrieves a building.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customer` | `string` | Yes | The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID. |
| `params.buildingId` | `string` | Yes | The unique ID of the building to retrieve. |

#### `resources.buildings.insert()`

Inserts a building.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customer` | `string` | Yes | The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID. |
| `params.coordinatesSource` | `string` | No | Source from which Building.coordinates are derived. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `resources.buildings.list()`

Retrieves a list of buildings for an account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customer` | `string` | Yes | The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID. |
| `params.maxResults` | `integer` | No | Maximum number of results to return. |
| `params.pageToken` | `string` | No | Token to specify the next page in the list. |

#### `resources.buildings.update()`

Updates a building.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customer` | `string` | Yes | The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID. |
| `params.buildingId` | `string` | Yes | The id of the building to update. |
| `params.coordinatesSource` | `string` | No | Source from which Building.coordinates are derived. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `resources.buildings.patch()`

Patches a building.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customer` | `string` | Yes | The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID. |
| `params.buildingId` | `string` | Yes | The id of the building to update. |
| `params.coordinatesSource` | `string` | No | Source from which Building.coordinates are derived. |
| `params.requestBody` | `object` | Yes | The request body. |

### `resources.calendars`

#### `resources.calendars.delete()`

Deletes a calendar resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customer` | `string` | Yes | The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID. |
| `params.calendarResourceId` | `string` | Yes | The unique ID of the calendar resource to delete. |

#### `resources.calendars.get()`

Retrieves a calendar resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customer` | `string` | Yes | The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID. |
| `params.calendarResourceId` | `string` | Yes | The unique ID of the calendar resource to retrieve. |

#### `resources.calendars.insert()`

Inserts a calendar resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customer` | `string` | Yes | The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `resources.calendars.list()`

Retrieves a list of calendar resources for an account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customer` | `string` | Yes | The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID. |
| `params.maxResults` | `integer` | No | Maximum number of results to return. |
| `params.orderBy` | `string` | No | Field(s) to sort results by in either ascending or descending order. Supported fields include `resourceId`, `resourceName`, `capacity`, `buildingId`, and `floorName`. If no order is specified, defaults to ascending. Should be of the form "field [asc|desc], field [asc|desc], ...". For example `buildingId, capacity desc` would return results sorted first by `buildingId` in ascending order then by `capacity` in descending order. |
| `params.pageToken` | `string` | No | Token to specify the next page in the list. |
| `params.query` | `string` | No | String query used to filter results. Should be of the form "field operator value" where field can be any of supported fields and operators can be any of supported operations. Operators include '=' for exact match, '!=' for mismatch and ':' for prefix match or HAS match where applicable. For prefix match, the value should always be followed by a *. Logical operators NOT and AND are supported (in this order of precedence). Supported fields include `generatedResourceName`, `name`, `buildingId`, `floor_name`, `capacity`, `featureInstances.feature.name`, `resourceEmail`, `resourceCategory`. For example `buildingId=US-NYC-9TH AND featureInstances.feature.name:Phone`. |

#### `resources.calendars.update()`

Updates a calendar resource. This method supports patch semantics, meaning you only need to include the fields you wish to update. Fields that are not present in the request will be preserved.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customer` | `string` | Yes | The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID. |
| `params.calendarResourceId` | `string` | Yes | The unique ID of the calendar resource to update. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `resources.calendars.patch()`

Patches a calendar resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customer` | `string` | Yes | The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID. |
| `params.calendarResourceId` | `string` | Yes | The unique ID of the calendar resource to update. |
| `params.requestBody` | `object` | Yes | The request body. |

### `resources.features`

#### `resources.features.delete()`

Deletes a feature.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customer` | `string` | Yes | The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID. |
| `params.featureKey` | `string` | Yes | The unique ID of the feature to delete. |

#### `resources.features.get()`

Retrieves a feature.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customer` | `string` | Yes | The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID. |
| `params.featureKey` | `string` | Yes | The unique ID of the feature to retrieve. |

#### `resources.features.insert()`

Inserts a feature.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customer` | `string` | Yes | The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `resources.features.list()`

Retrieves a list of features for an account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customer` | `string` | Yes | The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID. |
| `params.maxResults` | `integer` | No | Maximum number of results to return. |
| `params.pageToken` | `string` | No | Token to specify the next page in the list. |

#### `resources.features.rename()`

Renames a feature.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customer` | `string` | Yes | The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID. |
| `params.oldName` | `string` | Yes | The unique ID of the feature to rename. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `resources.features.update()`

Updates a feature.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customer` | `string` | Yes | The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID. |
| `params.featureKey` | `string` | Yes | The unique ID of the feature to update. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `resources.features.patch()`

Patches a feature.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customer` | `string` | Yes | The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID. |
| `params.featureKey` | `string` | Yes | The unique ID of the feature to update. |
| `params.requestBody` | `object` | Yes | The request body. |

### `roles`

#### `roles.delete()`

Deletes a role.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customer` | `string` | Yes | Immutable ID of the Google Workspace account. |
| `params.roleId` | `string` | Yes | Immutable ID of the role. |

#### `roles.get()`

Retrieves a role.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customer` | `string` | Yes | The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, use this field instead of `domain`. You can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users](https://developers.google.com/workspace/admin/directory/v1/reference/users) resource. You must provide either the `customer` or the `domain` parameter. |
| `params.roleId` | `string` | Yes | Immutable ID of the role. |

#### `roles.insert()`

Creates a role.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customer` | `string` | Yes | Immutable ID of the Google Workspace account. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `roles.list()`

Retrieves a paginated list of all the roles in a domain.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customer` | `string` | Yes | The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, use this field instead of `domain`. You can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users](https://developers.google.com/workspace/admin/directory/v1/reference/users) resource. You must provide either the `customer` or the `domain` parameter. |
| `params.maxResults` | `integer` | No | Maximum number of results to return. |
| `params.pageToken` | `string` | No | Token to specify the next page in the list. |

#### `roles.update()`

Updates a role.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customer` | `string` | Yes | Immutable ID of the Google Workspace account. |
| `params.roleId` | `string` | Yes | Immutable ID of the role. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `roles.patch()`

Patches a role.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customer` | `string` | Yes | Immutable ID of the Google Workspace account. |
| `params.roleId` | `string` | Yes | Immutable ID of the role. |
| `params.requestBody` | `object` | Yes | The request body. |

### `schemas`

#### `schemas.delete()`

Deletes a schema.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Immutable ID of the Google Workspace account. |
| `params.schemaKey` | `string` | Yes | Name or immutable ID of the schema. |

#### `schemas.get()`

Retrieves a schema.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, use this field instead of `domain`. You can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users](https://developers.google.com/workspace/admin/directory/v1/reference/users) resource. You must provide either the `customer` or the `domain` parameter. |
| `params.schemaKey` | `string` | Yes | Name or immutable ID of the schema. |

#### `schemas.insert()`

Creates a schema.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Immutable ID of the Google Workspace account. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `schemas.list()`

Retrieves all schemas for a customer.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, use this field instead of `domain`. You can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users](https://developers.google.com/workspace/admin/directory/v1/reference/users) resource. You must provide either the `customer` or the `domain` parameter. |

#### `schemas.patch()`

Patches a schema.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Immutable ID of the Google Workspace account. |
| `params.schemaKey` | `string` | Yes | Name or immutable ID of the schema. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `schemas.update()`

Updates a schema.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Immutable ID of the Google Workspace account. |
| `params.schemaKey` | `string` | Yes | Name or immutable ID of the schema. |
| `params.requestBody` | `object` | Yes | The request body. |

### `tokens`

#### `tokens.delete()`

Deletes all access tokens issued by a user for an application.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userKey` | `string` | Yes | Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID. |
| `params.clientId` | `string` | Yes | The Client ID of the application the token is issued to. |

#### `tokens.get()`

Gets information about an access token issued by a user.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userKey` | `string` | Yes | Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID. |
| `params.clientId` | `string` | Yes | The Client ID of the application the token is issued to. |

#### `tokens.list()`

Returns the set of tokens specified user has issued to 3rd party applications.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userKey` | `string` | Yes | Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID. |

### `twoStepVerification`

#### `twoStepVerification.turnOff()`

Turns off 2-Step Verification for user.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userKey` | `string` | Yes | Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID. |

### `users`

#### `users.delete()`

Deletes a user.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userKey` | `string` | Yes | Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID. |

#### `users.get()`

Retrieves a user.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userKey` | `string` | Yes | Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID. |
| `params.customFieldMask` | `string` | No | A comma-separated list of schema names. All fields from these schemas are fetched. This should only be set when `projection=custom`. |
| `params.projection` | `string` | No | What subset of fields to fetch for this user. |
| `params.viewType` | `string` | No | Whether to fetch the administrator-only or domain-wide public view of the user. For more information, see [Retrieve a user as a non-administrator](https://developers.google.com/workspace/admin/directory/v1/guides/manage-users#retrieve_users_non_admin). |

#### `users.insert()`

Creates a user. Mutate calls immediately following user creation might sometimes fail as the user isn't fully created due to propagation delay in our backends. Check the error details for the "User creation is not complete" message to see if this is the case. Retrying the calls after some time can help in this case. If `resolveConflictAccount` is set to `true`, a `202` response code means that a conflicting unmanaged account exists and was invited to join the organization. A `409` response code means that a conflicting account exists so the user wasn't created based on the [handling unmanaged user accounts](https://support.google.com/a/answer/11112794) option selected.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resolveConflictAccount` | `boolean` | No | Optional. If set to `true`, the option selected for [handling unmanaged user accounts](https://support.google.com/a/answer/11112794) will apply. Default: `false` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `users.list()`

Retrieves a paginated list of either deleted users or all users in a domain.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customFieldMask` | `string` | No | A comma-separated list of schema names. All fields from these schemas are fetched. This should only be set when `projection=custom`. |
| `params.customer` | `string` | No | The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all users for a customer, use this field instead of `domain`. You can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users](https://developers.google.com/workspace/admin/directory/v1/reference/users) resource. You must provide either the `customer` or the `domain` parameter. |
| `params.domain` | `string` | No | The domain name. Use this field to get users from only one domain. To return all domains for a customer account, use the `customer` query parameter instead. Either the `customer` or the `domain` parameter must be provided. |
| `params.event` | `string` | No | Event on which subscription is intended (if subscribing) |
| `params.maxResults` | `integer` | No | Maximum number of results to return. |
| `params.orderBy` | `string` | No | Property to use for sorting results. |
| `params.pageToken` | `string` | No | Token to specify next page in the list. The page token is only valid for three days. |
| `params.projection` | `string` | No | What subset of fields to fetch for this user. |
| `params.query` | `string` | No | Query string for searching user fields. For more information on constructing user queries, see [Search for Users](https://developers.google.com/workspace/admin/directory/v1/guides/search-users). |
| `params.showDeleted` | `string` | No | If set to `true`, retrieves the list of deleted users. (Default: `false`) |
| `params.sortOrder` | `string` | No | Whether to return results in ascending or descending order, ignoring case. |
| `params.viewType` | `string` | No | Whether to fetch the administrator-only or domain-wide public view of the user. For more information, see [Retrieve a user as a non-administrator](https://developers.google.com/workspace/admin/directory/v1/guides/manage-users#retrieve_users_non_admin). |

#### `users.makeAdmin()`

Makes a user a super administrator.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userKey` | `string` | Yes | Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `users.patch()`

Updates a user using patch semantics. The update method should be used instead, because it also supports patch semantics and has better performance. If you're mapping an external identity to a Google identity, use the [`update`](https://developers.google.com/workspace/admin/directory/v1/reference/users/update) method instead of the `patch` method. This method is unable to clear fields that contain repeated objects (`addresses`, `phones`, etc). Use the update method instead.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userKey` | `string` | Yes | Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `users.undelete()`

Undeletes a deleted user.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userKey` | `string` | Yes | The immutable id of the user |
| `params.requestBody` | `object` | Yes | The request body. |

#### `users.update()`

Updates a user. This method supports patch semantics, meaning that you only need to include the fields you wish to update. Fields that are not present in the request will be preserved, and fields set to `null` will be cleared. For repeating fields that contain arrays, individual items in the array can't be patched piecemeal; they must be supplied in the request body with the desired values for all items. See the [user accounts guide](https://developers.google.com/workspace/admin/directory/v1/guides/manage-users#update_user) for more information.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userKey` | `string` | Yes | Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `users.watch()`

Watches for changes in users list.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.domain` | `string` | No | Name of the domain. Fill this field to get users from only this domain. To return all users in a multi-domain fill customer field instead." |
| `params.customer` | `string` | No | Immutable ID of the Google Workspace account. In case of multi-domain, to fetch all users for a customer, fill this field instead of domain. |
| `params.event` | `string` | No | Events to watch for. |
| `params.customFieldMask` | `string` | No | Comma-separated list of schema names. All fields from these schemas are fetched. This should only be set when projection=custom. |
| `params.maxResults` | `integer` | No | Maximum number of results to return. |
| `params.orderBy` | `string` | No | Column to use for sorting results |
| `params.pageToken` | `string` | No | Token to specify next page in the list |
| `params.projection` | `string` | No | What subset of fields to fetch for this user. |
| `params.query` | `string` | No | Query string search. Should be of the form "". Complete documentation is at https://developers.google.com/workspace/admin/directory/v1/guides/search-users |
| `params.showDeleted` | `string` | No | If set to true, retrieves the list of deleted users. (Default: false) |
| `params.sortOrder` | `string` | No | Whether to return results in ascending or descending order. |
| `params.viewType` | `string` | No | Whether to fetch the administrator-only or domain-wide public view of the user. For more information, see [Retrieve a user as a non-administrator](https://developers.google.com/workspace/admin/directory/v1/guides/manage-users#retrieve_users_non_admin). |
| `params.requestBody` | `object` | Yes | The request body. |

#### `users.signOut()`

Signs a user out of all web and device sessions and reset their sign-in cookies. User will have to sign in by authenticating again.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userKey` | `string` | Yes | Identifies the target user in the API request. The value can be the user's primary email address, alias email address, or unique user ID. |

### `users.aliases`

#### `users.aliases.delete()`

Removes an alias.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userKey` | `string` | Yes | Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID. |
| `params.alias` | `string` | Yes | The alias to be removed. |

#### `users.aliases.insert()`

Adds an alias.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userKey` | `string` | Yes | Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `users.aliases.list()`

Lists all aliases for a user.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userKey` | `string` | Yes | Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID. |
| `params.event` | `string` | No | Events to watch for. |

#### `users.aliases.watch()`

Watches for changes in users list.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userKey` | `string` | Yes | Email or immutable ID of the user |
| `params.event` | `string` | No | Events to watch for. |
| `params.requestBody` | `object` | Yes | The request body. |

### `users.photos`

#### `users.photos.delete()`

Removes the user's photo.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userKey` | `string` | Yes | Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID. |

#### `users.photos.get()`

Retrieves the user's photo.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userKey` | `string` | Yes | Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID. |

#### `users.photos.update()`

Adds a photo for the user.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userKey` | `string` | Yes | Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `users.photos.patch()`

Adds a photo for the user. This method supports [patch semantics](https://developers.google.com/workspace/admin/directory/v1/guides/performance#patch).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userKey` | `string` | Yes | Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID. |
| `params.requestBody` | `object` | Yes | The request body. |

### `verificationCodes`

#### `verificationCodes.generate()`

Generates new backup verification codes for the user.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userKey` | `string` | Yes | Email or immutable ID of the user |

#### `verificationCodes.invalidate()`

Invalidates the current backup verification codes for the user.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userKey` | `string` | Yes | Email or immutable ID of the user |

#### `verificationCodes.list()`

Returns the current set of valid backup verification codes for the specified user.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userKey` | `string` | Yes | Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID. |