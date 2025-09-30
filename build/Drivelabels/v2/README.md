# Drive Labels API - Apps Script Client Library

Auto-generated client library for using the **Drive Labels API (version: v2)** in Google Apps Script.

## Metadata

- **Last Checked:** Tue, 30 Sep 2025 23:35:02 GMT
- **Last Modified:** Sun, 21 Sep 2025 17:24:22 GMT
- **Created:** Sun, 20 Jul 2025 16:32:44 GMT



---

## API Reference

### `users`

#### `users.getCapabilities()`

Gets the user capabilities.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the user. Only "users/me/capabilities" is supported. |
| `params.customer` | `string` | No | The customer to scope this request to. For example: `customers/abcd1234`. If unset, it will return settings within the current customer. |

### `labels`

#### `labels.list()`

List labels. For more information, see [Search for labels](https://developers.google.com/workspace/drive/labels/guides/search-label).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.useAdminAccess` | `boolean` | No | Set to `true` in order to use the user's admin credentials. This will return all labels within the customer. |
| `params.minimumRole` | `string` | No | Specifies the level of access the user must have on the returned labels. The minimum role a user must have on a label. Defaults to `READER`. |
| `params.publishedOnly` | `boolean` | No | Whether to include only published labels in the results. * When `true`, only the current published label revisions are returned. Disabled labels are included. Returned label resource names reference the published revision (`labels/{id}/{revision_id}`). * When `false`, the current label revisions are returned, which might not be published. Returned label resource names don't reference a specific revision (`labels/{id}`). |
| `params.customer` | `string` | No | The customer to scope this list request to. For example: `customers/abcd1234`. If unset, will return all labels within the current customer. |
| `params.languageCode` | `string` | No | The BCP-47 language code to use for evaluating localized field labels. When not specified, values in the default configured language are used. |
| `params.pageSize` | `integer` | No | Maximum number of labels to return per page. Default: 50. Max: 200. |
| `params.pageToken` | `string` | No | The token of the page to return. |
| `params.view` | `string` | No | When specified, only certain fields belonging to the indicated view are returned. |

#### `labels.get()`

Get a label by its resource name. For more information, see [Search for labels](https://developers.google.com/workspace/drive/labels/guides/search-label). Resource name may be any of:

* `labels/{id}` - See `labels/{id}@latest`

* `labels/{id}@latest` - Gets the latest revision of the label.

* `labels/{id}@published` - Gets the current published revision of the label.

* `labels/{id}@{revision_id}` - Gets the label at the specified revision ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Label resource name. May be any of: * `labels/{id}` (equivalent to labels/{id}@latest) * `labels/{id}@latest` * `labels/{id}@published` * `labels/{id}@{revision_id}` |
| `params.useAdminAccess` | `boolean` | No | Set to `true` in order to use the user's admin credentials. The server verifies that the user is an admin for the label before allowing access. |
| `params.languageCode` | `string` | No | The BCP-47 language code to use for evaluating localized field labels. When not specified, values in the default configured language are used. |
| `params.view` | `string` | No | When specified, only certain fields belonging to the indicated view are returned. |

#### `labels.create()`

Creates a label. For more information, see [Create and publish a label](https://developers.google.com/workspace/drive/labels/guides/create-label).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.useAdminAccess` | `boolean` | No | Set to `true` in order to use the user's admin privileges. The server will verify the user is an admin before allowing access. |
| `params.languageCode` | `string` | No | The BCP-47 language code to use for evaluating localized field labels in response. When not specified, values in the default configured language will be used. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `labels.delta()`

Updates a single label by applying a set of update requests resulting in a new draft revision. For more information, see [Update a label](https://developers.google.com/workspace/drive/labels/guides/update-label). The batch update is all-or-nothing: If any of the update requests are invalid, no changes are applied. The resulting draft revision must be published before the changes may be used with Drive items.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the label to update. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `labels.updateLabelCopyMode()`

Updates a label's `CopyMode`. Changes to this policy aren't revisioned, don't require publishing, and take effect immediately.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the label to update. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `labels.publish()`

Publish all draft changes to the label. Once published, the label may not return to its draft state. For more information, see [Create and publish a label](https://developers.google.com/workspace/drive/labels/guides/create-label). Publishing a label will result in a new published revision. All previous draft revisions will be deleted. Previous published revisions will be kept but are subject to automated deletion as needed. For more information, see [Label lifecycle](https://developers.google.com/workspace/drive/labels/guides/label-lifecycle). Once published, some changes are no longer permitted. Generally, any change that would invalidate or cause new restrictions on existing metadata related to the label will be rejected. For example, the following changes to a label will be rejected after the label is published:

* The label cannot be directly deleted. It must be disabled first, then deleted.

* `Field.FieldType` cannot be changed.

* Changes to field validation options cannot reject something that was previously accepted.

* Reducing the maximum entries.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Label resource name. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `labels.disable()`

Disable a published label. For more information, see [Disable, enable, and delete a label](https://developers.google.com/workspace/drive/labels/guides/disable-delete-label). Disabling a label will result in a new disabled published revision based on the current published revision. If there's a draft revision, a new disabled draft revision will be created based on the latest draft revision. Older draft revisions will be deleted. Once disabled, a label may be deleted with `DeleteLabel`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Label resource name. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `labels.enable()`

Enable a disabled label and restore it to its published state. For more information, see [Disable, enable, and delete a label](https://developers.google.com/workspace/drive/labels/guides/disable-delete-label). This will result in a new published revision based on the current disabled published revision. If there's an existing disabled draft revision, a new revision will be created based on that draft and will be enabled.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Label resource name. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `labels.delete()`

Permanently deletes a label and related metadata on Drive items. For more information, see [Disable, enable, and delete a label](https://developers.google.com/workspace/drive/labels/guides/disable-delete-label). Once deleted, the label and related Drive item metadata will be deleted. Only draft labels and disabled labels may be deleted.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Label resource name. |
| `params.useAdminAccess` | `boolean` | No | Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the label before allowing access. |
| `params.writeControl.requiredRevisionId` | `string` | No | The revision ID of the label that the write request will be applied to. If this isn't the latest revision of the label, the request will not be processed and will return a 400 Bad Request error. |

#### `labels.updatePermissions()`

Updates a label's permissions. If a permission for the indicated principal doesn't exist, a label permission is created, otherwise the existing permission is updated. Permissions affect the label resource as a whole, aren't revisioned, and don't require publishing.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent label resource name. |
| `params.useAdminAccess` | `boolean` | No | Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the label before allowing access. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `labels.updateLabelEnabledAppSettings()`

Updates a label's `EnabledAppSettings`. Enabling a label in a Google Workspace app allows it to be used in that app. This change isn't revisioned, doesn't require publishing, and takes effect immediately.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the label to update. The resource name of the label to update. |
| `params.requestBody` | `object` | Yes | The request body. |

### `labels.permissions`

#### `labels.permissions.list()`

Lists a label's permissions.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent label resource name on which label permissions are listed. Format: `labels/{label}`. |
| `params.useAdminAccess` | `boolean` | No | Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the label before allowing access. |
| `params.pageSize` | `integer` | No | Maximum number of permissions to return per page. Default: 50. Max: 200. |
| `params.pageToken` | `string` | No | The token of the page to return. |

#### `labels.permissions.create()`

Updates a label's permissions. If a permission for the indicated principal doesn't exist, a label permission is created, otherwise the existing permission is updated. Permissions affect the label resource as a whole, aren't revisioned, and don't require publishing.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent label resource name on the label permission is created. Format: `labels/{label}`. |
| `params.useAdminAccess` | `boolean` | No | Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the label before allowing access. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `labels.permissions.delete()`

Deletes a label's permission. Permissions affect the label resource as a whole, aren't revisioned, and don't require publishing.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Label permission resource name. |
| `params.useAdminAccess` | `boolean` | No | Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the label before allowing access. |

#### `labels.permissions.batchUpdate()`

Updates label permissions. If a permission for the indicated principal doesn't exist, a label permission is created, otherwise the existing permission is updated. Permissions affect the label resource as a whole, aren't revisioned, and don't require publishing.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent label resource name shared by all permissions being updated. Format: `labels/{label}`. If this is set, the parent field in the `UpdateLabelPermissionRequest` messages must either be empty or match this field. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `labels.permissions.batchDelete()`

Deletes label permissions. Permissions affect the label resource as a whole, aren't revisioned, and don't require publishing.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent label resource name shared by all permissions being deleted. Format: `labels/{label}`. If this is set, the parent field in the `UpdateLabelPermissionRequest` messages must either be empty or match this field. |
| `params.requestBody` | `object` | Yes | The request body. |

### `labels.revisions`

#### `labels.revisions.updatePermissions()`

Updates a label's permissions. If a permission for the indicated principal doesn't exist, a label permission is created, otherwise the existing permission is updated. Permissions affect the label resource as a whole, aren't revisioned, and don't require publishing.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent label resource name. |
| `params.useAdminAccess` | `boolean` | No | Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the label before allowing access. |
| `params.requestBody` | `object` | Yes | The request body. |

### `labels.revisions.permissions`

#### `labels.revisions.permissions.list()`

Lists a label's permissions.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent label resource name on which label permissions are listed. Format: `labels/{label}`. |
| `params.useAdminAccess` | `boolean` | No | Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the label before allowing access. |
| `params.pageSize` | `integer` | No | Maximum number of permissions to return per page. Default: 50. Max: 200. |
| `params.pageToken` | `string` | No | The token of the page to return. |

#### `labels.revisions.permissions.create()`

Updates a label's permissions. If a permission for the indicated principal doesn't exist, a label permission is created, otherwise the existing permission is updated. Permissions affect the label resource as a whole, aren't revisioned, and don't require publishing.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent label resource name on the label permission is created. Format: `labels/{label}`. |
| `params.useAdminAccess` | `boolean` | No | Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the label before allowing access. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `labels.revisions.permissions.delete()`

Deletes a label's permission. Permissions affect the label resource as a whole, aren't revisioned, and don't require publishing.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Label permission resource name. |
| `params.useAdminAccess` | `boolean` | No | Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the label before allowing access. |

#### `labels.revisions.permissions.batchUpdate()`

Updates label permissions. If a permission for the indicated principal doesn't exist, a label permission is created, otherwise the existing permission is updated. Permissions affect the label resource as a whole, aren't revisioned, and don't require publishing.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent label resource name shared by all permissions being updated. Format: `labels/{label}`. If this is set, the parent field in the `UpdateLabelPermissionRequest` messages must either be empty or match this field. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `labels.revisions.permissions.batchDelete()`

Deletes label permissions. Permissions affect the label resource as a whole, aren't revisioned, and don't require publishing.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent label resource name shared by all permissions being deleted. Format: `labels/{label}`. If this is set, the parent field in the `UpdateLabelPermissionRequest` messages must either be empty or match this field. |
| `params.requestBody` | `object` | Yes | The request body. |

### `labels.revisions.locks`

#### `labels.revisions.locks.list()`

Lists the label locks on a label.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Label on which locks are applied. Format: `labels/{label}`. |
| `params.pageSize` | `integer` | No | Maximum number of locks to return per page. Default: 100. Max: 200. |
| `params.pageToken` | `string` | No | The token of the page to return. |

### `labels.locks`

#### `labels.locks.list()`

Lists the label locks on a label.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Label on which locks are applied. Format: `labels/{label}`. |
| `params.pageSize` | `integer` | No | Maximum number of locks to return per page. Default: 100. Max: 200. |
| `params.pageToken` | `string` | No | The token of the page to return. |

### `limits`

#### `limits.getLabel()`

Get the constraints on the structure of a label; such as, the maximum number of fields allowed and maximum length of the label title.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | No | Required. Label revision resource name must be: "limits/label". |