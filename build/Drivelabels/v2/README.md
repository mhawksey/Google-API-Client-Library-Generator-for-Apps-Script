# Drive Labels API - Apps Script Client Library

Auto-generated client library for using the **Drive Labels API (version: v2)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 27 Jul 2025 15:59:32 GMT
- **Last Modified:** Sun, 27 Jul 2025 12:32:21 GMT
- **Created:** Sun, 20 Jul 2025 16:32:44 GMT



---

## API Reference

### `users`

#### `users.getCapabilities()`

Gets the user capabilities.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the user. Only "users/me/capabilities" is supported. |
| `params.customer` | `string` | No | The customer to scope this request to. For example: "customers/abcd1234". If unset, will return settings within the current customer. |

### `labels`

#### `labels.list()`

List labels.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.useAdminAccess` | `boolean` | No | Set to `true` in order to use the user's admin credentials. This will return all Labels within the customer. |
| `params.minimumRole` | `string` | No | Specifies the level of access the user must have on the returned Labels. The minimum role a user must have on a label. Defaults to `READER`. |
| `params.publishedOnly` | `boolean` | No | Whether to include only published labels in the results. * When `true`, only the current published label revisions are returned. Disabled labels are included. Returned label resource names reference the published revision (`labels/{id}/{revision_id}`). * When `false`, the current label revisions are returned, which might not be published. Returned label resource names don't reference a specific revision (`labels/{id}`). |
| `params.customer` | `string` | No | The customer to scope this list request to. For example: "customers/abcd1234". If unset, will return all labels within the current customer. |
| `params.languageCode` | `string` | No | The BCP-47 language code to use for evaluating localized field labels. When not specified, values in the default configured language are used. |
| `params.pageSize` | `integer` | No | Maximum number of labels to return per page. Default: 50. Max: 200. |
| `params.pageToken` | `string` | No | The token of the page to return. |
| `params.view` | `string` | No | When specified, only certain fields belonging to the indicated view are returned. |

#### `labels.get()`

Get a label by its resource name. Resource name may be any of:

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

Creates a new Label.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.useAdminAccess` | `boolean` | No | Set to `true` in order to use the user's admin privileges. The server will verify the user is an admin before allowing access. |
| `params.languageCode` | `string` | No | The BCP-47 language code to use for evaluating localized Field labels in response. When not specified, values in the default configured language will be used. |
| `params.resource` | `object` | Yes | The request body. |

#### `labels.delta()`

Updates a single Label by applying a set of update requests resulting in a new draft revision. The batch update is all-or-nothing: If any of the update requests are invalid, no changes are applied. The resulting draft revision must be published before the changes may be used with Drive Items.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the Label to update. |
| `params.resource` | `object` | Yes | The request body. |

#### `labels.updateLabelCopyMode()`

Updates a Label's `CopyMode`. Changes to this policy are not revisioned, do not require publishing, and take effect immediately.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the Label to update. |
| `params.resource` | `object` | Yes | The request body. |

#### `labels.publish()`

Publish all draft changes to the Label. Once published, the Label may not return to its draft state. See `google.apps.drive.labels.v2.Lifecycle` for more information. Publishing a Label will result in a new published revision. All previous draft revisions will be deleted. Previous published revisions will be kept but are subject to automated deletion as needed. Once published, some changes are no longer permitted. Generally, any change that would invalidate or cause new restrictions on existing metadata related to the Label will be rejected. For example, the following changes to a Label will be rejected after the Label is published:

* The label cannot be directly deleted. It must be disabled first, then deleted.

* Field.FieldType cannot be changed.

* Changes to Field validation options cannot reject something that was previously accepted.

* Reducing the max entries.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Label resource name. |
| `params.resource` | `object` | Yes | The request body. |

#### `labels.disable()`

Disable a published Label. Disabling a Label will result in a new disabled published revision based on the current published revision. If there is a draft revision, a new disabled draft revision will be created based on the latest draft revision. Older draft revisions will be deleted. Once disabled, a label may be deleted with `DeleteLabel`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Label resource name. |
| `params.resource` | `object` | Yes | The request body. |

#### `labels.enable()`

Enable a disabled Label and restore it to its published state. This will result in a new published revision based on the current disabled published revision. If there is an existing disabled draft revision, a new revision will be created based on that draft and will be enabled.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Label resource name. |
| `params.resource` | `object` | Yes | The request body. |

#### `labels.delete()`

Permanently deletes a Label and related metadata on Drive Items. Once deleted, the Label and related Drive item metadata will be deleted. Only draft Labels, and disabled Labels may be deleted.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Label resource name. |
| `params.useAdminAccess` | `boolean` | No | Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access. |
| `params.writeControl.requiredRevisionId` | `string` | No | The revision_id of the label that the write request will be applied to. If this is not the latest revision of the label, the request will not be processed and will return a 400 Bad Request error. |

#### `labels.updatePermissions()`

Updates a Label's permissions. If a permission for the indicated principal doesn't exist, a new Label Permission is created, otherwise the existing permission is updated. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent Label resource name. |
| `params.useAdminAccess` | `boolean` | No | Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access. |
| `params.resource` | `object` | Yes | The request body. |

#### `labels.updateLabelEnabledAppSettings()`

Updates a Label's EabledAppSettings. Enabling a Label in a Workspace Application allows it to be used in that application. This change is not revisioned, does not require publishing, and takes effect immediately.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the Label to update. The resource name of the Label to update. |
| `params.resource` | `object` | Yes | The request body. |

### `labels.permissions`

#### `labels.permissions.list()`

Lists a Label's permissions.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent Label resource name on which Label Permission are listed. Format: labels/{label} |
| `params.useAdminAccess` | `boolean` | No | Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access. |
| `params.pageSize` | `integer` | No | Maximum number of permissions to return per page. Default: 50. Max: 200. |
| `params.pageToken` | `string` | No | The token of the page to return. |

#### `labels.permissions.create()`

Updates a Label's permissions. If a permission for the indicated principal doesn't exist, a new Label Permission is created, otherwise the existing permission is updated. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent Label resource name on the Label Permission is created. Format: labels/{label} |
| `params.useAdminAccess` | `boolean` | No | Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access. |
| `params.resource` | `object` | Yes | The request body. |

#### `labels.permissions.delete()`

Deletes a Label's permission. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Label Permission resource name. |
| `params.useAdminAccess` | `boolean` | No | Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access. |

#### `labels.permissions.batchUpdate()`

Updates Label permissions. If a permission for the indicated principal doesn't exist, a new Label Permission is created, otherwise the existing permission is updated. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent Label resource name shared by all permissions being updated. Format: labels/{label} If this is set, the parent field in the UpdateLabelPermissionRequest messages must either be empty or match this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `labels.permissions.batchDelete()`

Deletes Label permissions. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent Label resource name shared by all permissions being deleted. Format: labels/{label} If this is set, the parent field in the UpdateLabelPermissionRequest messages must either be empty or match this field. |
| `params.resource` | `object` | Yes | The request body. |

### `labels.revisions`

#### `labels.revisions.updatePermissions()`

Updates a Label's permissions. If a permission for the indicated principal doesn't exist, a new Label Permission is created, otherwise the existing permission is updated. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent Label resource name. |
| `params.useAdminAccess` | `boolean` | No | Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access. |
| `params.resource` | `object` | Yes | The request body. |

### `labels.revisions.permissions`

#### `labels.revisions.permissions.list()`

Lists a Label's permissions.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent Label resource name on which Label Permission are listed. Format: labels/{label} |
| `params.useAdminAccess` | `boolean` | No | Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access. |
| `params.pageSize` | `integer` | No | Maximum number of permissions to return per page. Default: 50. Max: 200. |
| `params.pageToken` | `string` | No | The token of the page to return. |

#### `labels.revisions.permissions.create()`

Updates a Label's permissions. If a permission for the indicated principal doesn't exist, a new Label Permission is created, otherwise the existing permission is updated. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent Label resource name on the Label Permission is created. Format: labels/{label} |
| `params.useAdminAccess` | `boolean` | No | Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access. |
| `params.resource` | `object` | Yes | The request body. |

#### `labels.revisions.permissions.delete()`

Deletes a Label's permission. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Label Permission resource name. |
| `params.useAdminAccess` | `boolean` | No | Set to `true` in order to use the user's admin credentials. The server will verify the user is an admin for the Label before allowing access. |

#### `labels.revisions.permissions.batchUpdate()`

Updates Label permissions. If a permission for the indicated principal doesn't exist, a new Label Permission is created, otherwise the existing permission is updated. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent Label resource name shared by all permissions being updated. Format: labels/{label} If this is set, the parent field in the UpdateLabelPermissionRequest messages must either be empty or match this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `labels.revisions.permissions.batchDelete()`

Deletes Label permissions. Permissions affect the Label resource as a whole, are not revisioned, and do not require publishing.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent Label resource name shared by all permissions being deleted. Format: labels/{label} If this is set, the parent field in the UpdateLabelPermissionRequest messages must either be empty or match this field. |
| `params.resource` | `object` | Yes | The request body. |

### `labels.revisions.locks`

#### `labels.revisions.locks.list()`

Lists the LabelLocks on a Label.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Label on which Locks are applied. Format: labels/{label} |
| `params.pageSize` | `integer` | No | Maximum number of Locks to return per page. Default: 100. Max: 200. |
| `params.pageToken` | `string` | No | The token of the page to return. |

### `labels.locks`

#### `labels.locks.list()`

Lists the LabelLocks on a Label.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Label on which Locks are applied. Format: labels/{label} |
| `params.pageSize` | `integer` | No | Maximum number of Locks to return per page. Default: 100. Max: 200. |
| `params.pageToken` | `string` | No | The token of the page to return. |

### `limits`

#### `limits.getLabel()`

Get the constraints on the structure of a Label; such as, the maximum number of Fields allowed and maximum length of the label title.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | No | Required. Label revision resource name Must be: "limits/label" |