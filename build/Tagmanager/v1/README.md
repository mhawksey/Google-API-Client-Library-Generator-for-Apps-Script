# Tag Manager API - Apps Script Client Library

Auto-generated client library for using the **Tag Manager API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Thu, 01 Jan 2026 01:08:35 GMT
- **Last Modified:** Thu, 01 Jan 2026 01:08:35 GMT
- **Created:** Sun, 20 Jul 2025 16:55:29 GMT



---

## API Reference

### `accounts`

#### `accounts.get()`

Gets a GTM Account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | The GTM Account ID. |

#### `accounts.list()`

Lists all GTM Accounts that a user has access to.

| Parameter | Type | Required | Description |
|---|---|---|---|

#### `accounts.update()`

Updates a GTM Account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.fingerprint` | `string` | No | When provided, this fingerprint must match the fingerprint of the account in storage. |
| `params.accountId` | `string` | Yes | The GTM Account ID. |
| `params.requestBody` | `object` | Yes | The request body. |

### `accounts.permissions`

#### `accounts.permissions.update()`

Updates a user's Account & Container Permissions.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | The GTM Account ID. |
| `params.permissionId` | `string` | Yes | The GTM User ID. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `accounts.permissions.list()`

List all users that have access to the account along with Account and Container Permissions granted to each of them.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | The GTM Account ID. |

#### `accounts.permissions.create()`

Creates a user's Account & Container Permissions.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | The GTM Account ID. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `accounts.permissions.get()`

Gets a user's Account & Container Permissions.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | The GTM Account ID. |
| `params.permissionId` | `string` | Yes | The GTM User ID. |

#### `accounts.permissions.delete()`

Removes a user from the account, revoking access to it and all of its containers.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.permissionId` | `string` | Yes | The GTM User ID. |
| `params.accountId` | `string` | Yes | The GTM Account ID. |

### `accounts.containers`

#### `accounts.containers.list()`

Lists all Containers that belongs to a GTM Account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | The GTM Account ID. |

#### `accounts.containers.create()`

Creates a Container.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | The GTM Account ID. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `accounts.containers.delete()`

Deletes a Container.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.containerId` | `string` | Yes | The GTM Container ID. |
| `params.accountId` | `string` | Yes | The GTM Account ID. |

#### `accounts.containers.get()`

Gets a Container.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | The GTM Account ID. |
| `params.containerId` | `string` | Yes | The GTM Container ID. |

#### `accounts.containers.update()`

Updates a Container.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.containerId` | `string` | Yes | The GTM Container ID. |
| `params.fingerprint` | `string` | No | When provided, this fingerprint must match the fingerprint of the container in storage. |
| `params.accountId` | `string` | Yes | The GTM Account ID. |
| `params.requestBody` | `object` | Yes | The request body. |

### `accounts.containers.folders`

#### `accounts.containers.folders.delete()`

Deletes a GTM Folder.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.folderId` | `string` | Yes | The GTM Folder ID. |
| `params.containerId` | `string` | Yes | The GTM Container ID. |
| `params.accountId` | `string` | Yes | The GTM Account ID. |

#### `accounts.containers.folders.create()`

Creates a GTM Folder.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | The GTM Account ID. |
| `params.containerId` | `string` | Yes | The GTM Container ID. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `accounts.containers.folders.update()`

Updates a GTM Folder.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.folderId` | `string` | Yes | The GTM Folder ID. |
| `params.containerId` | `string` | Yes | The GTM Container ID. |
| `params.accountId` | `string` | Yes | The GTM Account ID. |
| `params.fingerprint` | `string` | No | When provided, this fingerprint must match the fingerprint of the folder in storage. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `accounts.containers.folders.get()`

Gets a GTM Folder.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | The GTM Account ID. |
| `params.folderId` | `string` | Yes | The GTM Folder ID. |
| `params.containerId` | `string` | Yes | The GTM Container ID. |

#### `accounts.containers.folders.list()`

Lists all GTM Folders of a Container.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | The GTM Account ID. |
| `params.containerId` | `string` | Yes | The GTM Container ID. |

### `accounts.containers.folders.entities`

#### `accounts.containers.folders.entities.list()`

List all entities in a GTM Folder.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.containerId` | `string` | Yes | The GTM Container ID. |
| `params.accountId` | `string` | Yes | The GTM Account ID. |
| `params.folderId` | `string` | Yes | The GTM Folder ID. |

### `accounts.containers.tags`

#### `accounts.containers.tags.update()`

Updates a GTM Tag.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.fingerprint` | `string` | No | When provided, this fingerprint must match the fingerprint of the tag in storage. |
| `params.accountId` | `string` | Yes | The GTM Account ID. |
| `params.tagId` | `string` | Yes | The GTM Tag ID. |
| `params.containerId` | `string` | Yes | The GTM Container ID. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `accounts.containers.tags.delete()`

Deletes a GTM Tag.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.tagId` | `string` | Yes | The GTM Tag ID. |
| `params.containerId` | `string` | Yes | The GTM Container ID. |
| `params.accountId` | `string` | Yes | The GTM Account ID. |

#### `accounts.containers.tags.get()`

Gets a GTM Tag.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.tagId` | `string` | Yes | The GTM Tag ID. |
| `params.accountId` | `string` | Yes | The GTM Account ID. |
| `params.containerId` | `string` | Yes | The GTM Container ID. |

#### `accounts.containers.tags.create()`

Creates a GTM Tag.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.containerId` | `string` | Yes | The GTM Container ID. |
| `params.accountId` | `string` | Yes | The GTM Account ID. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `accounts.containers.tags.list()`

Lists all GTM Tags of a Container.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.containerId` | `string` | Yes | The GTM Container ID. |
| `params.accountId` | `string` | Yes | The GTM Account ID. |

### `accounts.containers.move_folders`

#### `accounts.containers.move_folders.update()`

Moves entities to a GTM Folder.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.variableId` | `string` | No | The variables to be moved to the folder. |
| `params.tagId` | `string` | No | The tags to be moved to the folder. |
| `params.triggerId` | `string` | No | The triggers to be moved to the folder. |
| `params.folderId` | `string` | Yes | The GTM Folder ID. |
| `params.containerId` | `string` | Yes | The GTM Container ID. |
| `params.accountId` | `string` | Yes | The GTM Account ID. |
| `params.requestBody` | `object` | Yes | The request body. |

### `accounts.containers.versions`

#### `accounts.containers.versions.get()`

Gets a Container Version.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.containerVersionId` | `string` | Yes | The GTM Container Version ID. Specify published to retrieve the currently published version. |
| `params.accountId` | `string` | Yes | The GTM Account ID. |
| `params.containerId` | `string` | Yes | The GTM Container ID. |

#### `accounts.containers.versions.update()`

Updates a Container Version.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.fingerprint` | `string` | No | When provided, this fingerprint must match the fingerprint of the container version in storage. |
| `params.containerId` | `string` | Yes | The GTM Container ID. |
| `params.containerVersionId` | `string` | Yes | The GTM Container Version ID. |
| `params.accountId` | `string` | Yes | The GTM Account ID. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `accounts.containers.versions.restore()`

Restores a Container Version. This will overwrite the container's current configuration (including its variables, triggers and tags). The operation will not have any effect on the version that is being served (i.e. the published version).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | The GTM Account ID. |
| `params.containerVersionId` | `string` | Yes | The GTM Container Version ID. |
| `params.containerId` | `string` | Yes | The GTM Container ID. |

#### `accounts.containers.versions.undelete()`

Undeletes a Container Version.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | The GTM Account ID. |
| `params.containerId` | `string` | Yes | The GTM Container ID. |
| `params.containerVersionId` | `string` | Yes | The GTM Container Version ID. |

#### `accounts.containers.versions.publish()`

Publishes a Container Version.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.containerVersionId` | `string` | Yes | The GTM Container Version ID. |
| `params.containerId` | `string` | Yes | The GTM Container ID. |
| `params.accountId` | `string` | Yes | The GTM Account ID. |
| `params.fingerprint` | `string` | No | When provided, this fingerprint must match the fingerprint of the container version in storage. |

#### `accounts.containers.versions.list()`

Lists all Container Versions of a GTM Container.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | The GTM Account ID. |
| `params.includeDeleted` | `boolean` | No | Also retrieve deleted (archived) versions when true. |
| `params.containerId` | `string` | Yes | The GTM Container ID. |
| `params.headers` | `boolean` | No | Retrieve headers only when true. |

#### `accounts.containers.versions.create()`

Creates a Container Version.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | The GTM Account ID. |
| `params.containerId` | `string` | Yes | The GTM Container ID. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `accounts.containers.versions.delete()`

Deletes a Container Version.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.containerId` | `string` | Yes | The GTM Container ID. |
| `params.accountId` | `string` | Yes | The GTM Account ID. |
| `params.containerVersionId` | `string` | Yes | The GTM Container Version ID. |

### `accounts.containers.reauthorize_environments`

#### `accounts.containers.reauthorize_environments.update()`

Re-generates the authorization code for a GTM Environment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.containerId` | `string` | Yes | The GTM Container ID. |
| `params.environmentId` | `string` | Yes | The GTM Environment ID. |
| `params.accountId` | `string` | Yes | The GTM Account ID. |
| `params.requestBody` | `object` | Yes | The request body. |

### `accounts.containers.triggers`

#### `accounts.containers.triggers.update()`

Updates a GTM Trigger.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.fingerprint` | `string` | No | When provided, this fingerprint must match the fingerprint of the trigger in storage. |
| `params.accountId` | `string` | Yes | The GTM Account ID. |
| `params.triggerId` | `string` | Yes | The GTM Trigger ID. |
| `params.containerId` | `string` | Yes | The GTM Container ID. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `accounts.containers.triggers.create()`

Creates a GTM Trigger.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.containerId` | `string` | Yes | The GTM Container ID. |
| `params.accountId` | `string` | Yes | The GTM Account ID. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `accounts.containers.triggers.get()`

Gets a GTM Trigger.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | The GTM Account ID. |
| `params.triggerId` | `string` | Yes | The GTM Trigger ID. |
| `params.containerId` | `string` | Yes | The GTM Container ID. |

#### `accounts.containers.triggers.delete()`

Deletes a GTM Trigger.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | The GTM Account ID. |
| `params.containerId` | `string` | Yes | The GTM Container ID. |
| `params.triggerId` | `string` | Yes | The GTM Trigger ID. |

#### `accounts.containers.triggers.list()`

Lists all GTM Triggers of a Container.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | The GTM Account ID. |
| `params.containerId` | `string` | Yes | The GTM Container ID. |

### `accounts.containers.environments`

#### `accounts.containers.environments.list()`

Lists all GTM Environments of a GTM Container.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.containerId` | `string` | Yes | The GTM Container ID. |
| `params.accountId` | `string` | Yes | The GTM Account ID. |

#### `accounts.containers.environments.update()`

Updates a GTM Environment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.environmentId` | `string` | Yes | The GTM Environment ID. |
| `params.containerId` | `string` | Yes | The GTM Container ID. |
| `params.accountId` | `string` | Yes | The GTM Account ID. |
| `params.fingerprint` | `string` | No | When provided, this fingerprint must match the fingerprint of the environment in storage. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `accounts.containers.environments.get()`

Gets a GTM Environment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.environmentId` | `string` | Yes | The GTM Environment ID. |
| `params.containerId` | `string` | Yes | The GTM Container ID. |
| `params.accountId` | `string` | Yes | The GTM Account ID. |

#### `accounts.containers.environments.delete()`

Deletes a GTM Environment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.environmentId` | `string` | Yes | The GTM Environment ID. |
| `params.accountId` | `string` | Yes | The GTM Account ID. |
| `params.containerId` | `string` | Yes | The GTM Container ID. |

#### `accounts.containers.environments.create()`

Creates a GTM Environment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | The GTM Account ID. |
| `params.containerId` | `string` | Yes | The GTM Container ID. |
| `params.requestBody` | `object` | Yes | The request body. |

### `accounts.containers.variables`

#### `accounts.containers.variables.update()`

Updates a GTM Variable.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.variableId` | `string` | Yes | The GTM Variable ID. |
| `params.accountId` | `string` | Yes | The GTM Account ID. |
| `params.fingerprint` | `string` | No | When provided, this fingerprint must match the fingerprint of the variable in storage. |
| `params.containerId` | `string` | Yes | The GTM Container ID. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `accounts.containers.variables.list()`

Lists all GTM Variables of a Container.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | The GTM Account ID. |
| `params.containerId` | `string` | Yes | The GTM Container ID. |

#### `accounts.containers.variables.get()`

Gets a GTM Variable.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.containerId` | `string` | Yes | The GTM Container ID. |
| `params.accountId` | `string` | Yes | The GTM Account ID. |
| `params.variableId` | `string` | Yes | The GTM Variable ID. |

#### `accounts.containers.variables.delete()`

Deletes a GTM Variable.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.containerId` | `string` | Yes | The GTM Container ID. |
| `params.accountId` | `string` | Yes | The GTM Account ID. |
| `params.variableId` | `string` | Yes | The GTM Variable ID. |

#### `accounts.containers.variables.create()`

Creates a GTM Variable.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | The GTM Account ID. |
| `params.containerId` | `string` | Yes | The GTM Container ID. |
| `params.requestBody` | `object` | Yes | The request body. |