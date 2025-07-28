# Tag Manager API - Apps Script Client Library

Auto-generated client library for using the **Tag Manager API (version: v2)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 27 Jul 2025 16:21:32 GMT
- **Last Modified:** Sun, 27 Jul 2025 13:41:26 GMT
- **Created:** Sun, 20 Jul 2025 16:55:33 GMT



---

## API Reference

### `accounts`

#### `accounts.list()`

Lists all GTM Accounts that a user has access to.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.includeGoogleTags` | `boolean` | No | Also retrieve accounts associated with Google Tag when true. |
| `params.pageToken` | `string` | No | Continuation token for fetching the next page of results. |

#### `accounts.get()`

Gets a GTM Account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.path` | `string` | Yes | GTM Account's API relative path. |

#### `accounts.update()`

Updates a GTM Account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.path` | `string` | Yes | GTM Account's API relative path. |
| `params.fingerprint` | `string` | No | When provided, this fingerprint must match the fingerprint of the account in storage. |
| `params.resource` | `object` | Yes | The request body. |

### `accounts.user_permissions`

#### `accounts.user_permissions.create()`

Creates a user's Account & Container access.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | GTM Account's API relative path. |
| `params.resource` | `object` | Yes | The request body. |

#### `accounts.user_permissions.list()`

List all users that have access to the account along with Account and Container user access granted to each of them.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | GTM Account's API relative path. |
| `params.pageToken` | `string` | No | Continuation token for fetching the next page of results. |

#### `accounts.user_permissions.get()`

Gets a user's Account & Container access.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.path` | `string` | Yes | GTM UserPermission's API relative path. |

#### `accounts.user_permissions.update()`

Updates a user's Account & Container access.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.path` | `string` | Yes | GTM UserPermission's API relative path. |
| `params.resource` | `object` | Yes | The request body. |

#### `accounts.user_permissions.delete()`

Removes a user from the account, revoking access to it and all of its containers.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.path` | `string` | Yes | GTM UserPermission's API relative path. |

### `accounts.containers`

#### `accounts.containers.create()`

Creates a Container.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | GTM Account's API relative path. |
| `params.resource` | `object` | Yes | The request body. |

#### `accounts.containers.list()`

Lists all Containers that belongs to a GTM Account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | GTM Account's API relative path. |
| `params.pageToken` | `string` | No | Continuation token for fetching the next page of results. |

#### `accounts.containers.get()`

Gets a Container.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.path` | `string` | Yes | GTM Container's API relative path. |

#### `accounts.containers.snippet()`

Gets the tagging snippet for a Container.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.path` | `string` | Yes | Container snippet's API relative path. |

#### `accounts.containers.lookup()`

Looks up a Container by destination ID or tag ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.destinationId` | `string` | No | Destination ID linked to a GTM Container, e.g. AW-123456789. Only one of destination_id or tag_id should be set. |
| `params.tagId` | `string` | No | Tag ID for a GTM Container, e.g. GTM-123456789. Only one of destination_id or tag_id should be set. |

#### `accounts.containers.update()`

Updates a Container.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.path` | `string` | Yes | GTM Container's API relative path. |
| `params.fingerprint` | `string` | No | When provided, this fingerprint must match the fingerprint of the container in storage. |
| `params.resource` | `object` | Yes | The request body. |

#### `accounts.containers.combine()`

Combines Containers.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.path` | `string` | Yes | GTM Container's API relative path. |
| `params.containerId` | `string` | No | ID of container that will be merged into the current container. |
| `params.allowUserPermissionFeatureUpdate` | `boolean` | No | Must be set to true to allow features.user_permissions to change from false to true. If this operation causes an update but this bit is false, the operation will fail. |
| `params.settingSource` | `string` | No | Specify the source of config setting after combine |

#### `accounts.containers.move_tag_id()`

Move Tag ID out of a Container.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.path` | `string` | Yes | GTM Container's API relative path. |
| `params.tagId` | `string` | No | Tag ID to be removed from the current Container. |
| `params.tagName` | `string` | No | The name for the newly created tag. |
| `params.copyUsers` | `boolean` | No | Whether or not to copy users from this tag to the new tag. |
| `params.copySettings` | `boolean` | No | Whether or not to copy tag settings from this tag to the new tag. |
| `params.allowUserPermissionFeatureUpdate` | `boolean` | No | Must be set to true to allow features.user_permissions to change from false to true. If this operation causes an update but this bit is false, the operation will fail. |
| `params.copyTermsOfService` | `boolean` | No | Must be set to true to accept all terms of service agreements copied from the current tag to the newly created tag. If this bit is false, the operation will fail. |

#### `accounts.containers.delete()`

Deletes a Container.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.path` | `string` | Yes | GTM Container's API relative path. |

### `accounts.containers.destinations`

#### `accounts.containers.destinations.get()`

Gets a Destination.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.path` | `string` | Yes | Google Tag Destination's API relative path. |

#### `accounts.containers.destinations.list()`

Lists all Destinations linked to a GTM Container.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | GTM parent Container's API relative path. |

#### `accounts.containers.destinations.link()`

Adds a Destination to this Container and removes it from the Container to which it is currently linked.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | GTM parent Container's API relative path. |
| `params.destinationId` | `string` | No | Destination ID to be linked to the current container. |
| `params.allowUserPermissionFeatureUpdate` | `boolean` | No | Must be set to true to allow features.user_permissions to change from false to true. If this operation causes an update but this bit is false, the operation will fail. |

### `accounts.containers.workspaces`

#### `accounts.containers.workspaces.create()`

Creates a Workspace.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | GTM parent Container's API relative path. |
| `params.resource` | `object` | Yes | The request body. |

#### `accounts.containers.workspaces.delete()`

Deletes a Workspace.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.path` | `string` | Yes | GTM Workspace's API relative path. |

#### `accounts.containers.workspaces.get()`

Gets a Workspace.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.path` | `string` | Yes | GTM Workspace's API relative path. |

#### `accounts.containers.workspaces.update()`

Updates a Workspace.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.path` | `string` | Yes | GTM Workspace's API relative path. |
| `params.fingerprint` | `string` | No | When provided, this fingerprint must match the fingerprint of the workspace in storage. |
| `params.resource` | `object` | Yes | The request body. |

#### `accounts.containers.workspaces.list()`

Lists all Workspaces that belong to a GTM Container.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | GTM parent Container's API relative path. |
| `params.pageToken` | `string` | No | Continuation token for fetching the next page of results. |

#### `accounts.containers.workspaces.sync()`

Syncs a workspace to the latest container version by updating all unmodified workspace entities and displaying conflicts for modified entities.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.path` | `string` | Yes | GTM Workspace's API relative path. |

#### `accounts.containers.workspaces.getStatus()`

Finds conflicting and modified entities in the workspace.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.path` | `string` | Yes | GTM Workspace's API relative path. |

#### `accounts.containers.workspaces.resolve_conflict()`

Resolves a merge conflict for a workspace entity by updating it to the resolved entity passed in the request.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.path` | `string` | Yes | GTM Workspace's API relative path. |
| `params.fingerprint` | `string` | No | When provided, this fingerprint must match the fingerprint of the entity_in_workspace in the merge conflict. |
| `params.resource` | `object` | Yes | The request body. |

#### `accounts.containers.workspaces.quick_preview()`

Quick previews a workspace by creating a fake container version from all entities in the provided workspace.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.path` | `string` | Yes | GTM Workspace's API relative path. |

#### `accounts.containers.workspaces.create_version()`

Creates a Container Version from the entities present in the workspace, deletes the workspace, and sets the base container version to the newly created version.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.path` | `string` | Yes | GTM Workspace's API relative path. |
| `params.resource` | `object` | Yes | The request body. |

### `accounts.containers.workspaces.variables`

#### `accounts.containers.workspaces.variables.create()`

Creates a GTM Variable.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | GTM Workspace's API relative path. |
| `params.resource` | `object` | Yes | The request body. |

#### `accounts.containers.workspaces.variables.list()`

Lists all GTM Variables of a Container.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | GTM Workspace's API relative path. |
| `params.pageToken` | `string` | No | Continuation token for fetching the next page of results. |

#### `accounts.containers.workspaces.variables.get()`

Gets a GTM Variable.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.path` | `string` | Yes | GTM Variable's API relative path. |

#### `accounts.containers.workspaces.variables.update()`

Updates a GTM Variable.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.path` | `string` | Yes | GTM Variable's API relative path. |
| `params.fingerprint` | `string` | No | When provided, this fingerprint must match the fingerprint of the variable in storage. |
| `params.resource` | `object` | Yes | The request body. |

#### `accounts.containers.workspaces.variables.delete()`

Deletes a GTM Variable.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.path` | `string` | Yes | GTM Variable's API relative path. |

#### `accounts.containers.workspaces.variables.revert()`

Reverts changes to a GTM Variable in a GTM Workspace.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.path` | `string` | Yes | GTM Variable's API relative path. |
| `params.fingerprint` | `string` | No | When provided, this fingerprint must match the fingerprint of the variable in storage. |

### `accounts.containers.workspaces.built_in_variables`

#### `accounts.containers.workspaces.built_in_variables.create()`

Creates one or more GTM Built-In Variables.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | GTM Workspace's API relative path. |
| `params.type` | `string` | No | The types of built-in variables to enable. |

#### `accounts.containers.workspaces.built_in_variables.delete()`

Deletes one or more GTM Built-In Variables.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.path` | `string` | Yes | GTM BuiltInVariable's API relative path. |
| `params.type` | `string` | No | The types of built-in variables to delete. |

#### `accounts.containers.workspaces.built_in_variables.list()`

Lists all the enabled Built-In Variables of a GTM Container.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | GTM Workspace's API relative path. |
| `params.pageToken` | `string` | No | Continuation token for fetching the next page of results. |

#### `accounts.containers.workspaces.built_in_variables.revert()`

Reverts changes to a GTM Built-In Variables in a GTM Workspace.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.path` | `string` | Yes | GTM BuiltInVariable's API relative path. |
| `params.type` | `string` | No | The type of built-in variable to revert. |

### `accounts.containers.workspaces.triggers`

#### `accounts.containers.workspaces.triggers.create()`

Creates a GTM Trigger.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | GTM Workspace's API relative path. |
| `params.resource` | `object` | Yes | The request body. |

#### `accounts.containers.workspaces.triggers.list()`

Lists all GTM Triggers of a Container.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | GTM Workspace's API relative path. |
| `params.pageToken` | `string` | No | Continuation token for fetching the next page of results. |

#### `accounts.containers.workspaces.triggers.get()`

Gets a GTM Trigger.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.path` | `string` | Yes | GTM Trigger's API relative path. |

#### `accounts.containers.workspaces.triggers.update()`

Updates a GTM Trigger.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.path` | `string` | Yes | GTM Trigger's API relative path. |
| `params.fingerprint` | `string` | No | When provided, this fingerprint must match the fingerprint of the trigger in storage. |
| `params.resource` | `object` | Yes | The request body. |

#### `accounts.containers.workspaces.triggers.delete()`

Deletes a GTM Trigger.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.path` | `string` | Yes | GTM Trigger's API relative path. |

#### `accounts.containers.workspaces.triggers.revert()`

Reverts changes to a GTM Trigger in a GTM Workspace.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.path` | `string` | Yes | GTM Trigger's API relative path. |
| `params.fingerprint` | `string` | No | When provided, this fingerprint must match the fingerprint of the trigger in storage. |

### `accounts.containers.workspaces.tags`

#### `accounts.containers.workspaces.tags.create()`

Creates a GTM Tag.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | GTM Workspace's API relative path. |
| `params.resource` | `object` | Yes | The request body. |

#### `accounts.containers.workspaces.tags.list()`

Lists all GTM Tags of a Container.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | GTM Workspace's API relative path. |
| `params.pageToken` | `string` | No | Continuation token for fetching the next page of results. |

#### `accounts.containers.workspaces.tags.get()`

Gets a GTM Tag.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.path` | `string` | Yes | GTM Tag's API relative path. |

#### `accounts.containers.workspaces.tags.update()`

Updates a GTM Tag.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.path` | `string` | Yes | GTM Tag's API relative path. |
| `params.fingerprint` | `string` | No | When provided, this fingerprint must match the fingerprint of the tag in storage. |
| `params.resource` | `object` | Yes | The request body. |

#### `accounts.containers.workspaces.tags.delete()`

Deletes a GTM Tag.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.path` | `string` | Yes | GTM Tag's API relative path. |

#### `accounts.containers.workspaces.tags.revert()`

Reverts changes to a GTM Tag in a GTM Workspace.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.path` | `string` | Yes | GTM Tag's API relative path. |
| `params.fingerprint` | `string` | No | When provided, this fingerprint must match the fingerprint of thetag in storage. |

### `accounts.containers.workspaces.gtag_config`

#### `accounts.containers.workspaces.gtag_config.create()`

Creates a Google tag config.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Workspace's API relative path. |
| `params.resource` | `object` | Yes | The request body. |

#### `accounts.containers.workspaces.gtag_config.list()`

Lists all Google tag configs in a Container.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Workspace's API relative path. |
| `params.pageToken` | `string` | No | Continuation token for fetching the next page of results. |

#### `accounts.containers.workspaces.gtag_config.get()`

Gets a Google tag config.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.path` | `string` | Yes | Google tag config's API relative path. |

#### `accounts.containers.workspaces.gtag_config.update()`

Updates a Google tag config.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.path` | `string` | Yes | Google tag config's API relative path. |
| `params.fingerprint` | `string` | No | When provided, this fingerprint must match the fingerprint of the config in storage. |
| `params.resource` | `object` | Yes | The request body. |

#### `accounts.containers.workspaces.gtag_config.delete()`

Deletes a Google tag config.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.path` | `string` | Yes | Google tag config's API relative path. |

### `accounts.containers.workspaces.templates`

#### `accounts.containers.workspaces.templates.create()`

Creates a GTM Custom Template.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | GTM Workspace's API relative path. |
| `params.resource` | `object` | Yes | The request body. |

#### `accounts.containers.workspaces.templates.import_from_gallery()`

Imports a GTM Custom Template from Gallery.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | GTM Workspace's API relative path. |
| `params.galleryOwner` | `string` | No | Owner of the Gallery template to import |
| `params.galleryRepository` | `string` | No | Repository of the Gallery template to import |
| `params.gallerySha` | `string` | No | SHA version of the Gallery template to import. Defaulted to the latest SHA version if not provided. |
| `params.acknowledgePermissions` | `boolean` | No | Must be set to true to allow Gallery template to be imported into the workspace. If this bit is false, the import operation will fail. |

#### `accounts.containers.workspaces.templates.list()`

Lists all GTM Templates of a GTM container workspace.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | GTM Workspace's API relative path. |
| `params.pageToken` | `string` | No | Continuation token for fetching the next page of results. |

#### `accounts.containers.workspaces.templates.get()`

Gets a GTM Template.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.path` | `string` | Yes | GTM Custom Template's API relative path. |

#### `accounts.containers.workspaces.templates.update()`

Updates a GTM Template.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.path` | `string` | Yes | GTM Custom Template's API relative path. |
| `params.fingerprint` | `string` | No | When provided, this fingerprint must match the fingerprint of the templates in storage. |
| `params.resource` | `object` | Yes | The request body. |

#### `accounts.containers.workspaces.templates.delete()`

Deletes a GTM Template.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.path` | `string` | Yes | GTM Custom Template's API relative path. |

#### `accounts.containers.workspaces.templates.revert()`

Reverts changes to a GTM Template in a GTM Workspace.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.path` | `string` | Yes | GTM Custom Template's API relative path. |
| `params.fingerprint` | `string` | No | When provided, this fingerprint must match the fingerprint of the template in storage. |

### `accounts.containers.workspaces.folders`

#### `accounts.containers.workspaces.folders.create()`

Creates a GTM Folder.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | GTM Workspace's API relative path. |
| `params.resource` | `object` | Yes | The request body. |

#### `accounts.containers.workspaces.folders.list()`

Lists all GTM Folders of a Container.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | GTM Workspace's API relative path. |
| `params.pageToken` | `string` | No | Continuation token for fetching the next page of results. |

#### `accounts.containers.workspaces.folders.get()`

Gets a GTM Folder.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.path` | `string` | Yes | GTM Folder's API relative path. |

#### `accounts.containers.workspaces.folders.entities()`

List all entities in a GTM Folder.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.path` | `string` | Yes | GTM Folder's API relative path. |
| `params.pageToken` | `string` | No | Continuation token for fetching the next page of results. |

#### `accounts.containers.workspaces.folders.update()`

Updates a GTM Folder.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.path` | `string` | Yes | GTM Folder's API relative path. |
| `params.fingerprint` | `string` | No | When provided, this fingerprint must match the fingerprint of the folder in storage. |
| `params.resource` | `object` | Yes | The request body. |

#### `accounts.containers.workspaces.folders.delete()`

Deletes a GTM Folder.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.path` | `string` | Yes | GTM Folder's API relative path. |

#### `accounts.containers.workspaces.folders.move_entities_to_folder()`

Moves entities to a GTM Folder. If {folder_id} in the request path equals 0, this will instead move entities out of the folder they currently belong to.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.path` | `string` | Yes | GTM Folder's API relative path. |
| `params.tagId` | `string` | No | The tags to be moved to the folder. |
| `params.variableId` | `string` | No | The variables to be moved to the folder. |
| `params.triggerId` | `string` | No | The triggers to be moved to the folder. |
| `params.resource` | `object` | Yes | The request body. |

#### `accounts.containers.workspaces.folders.revert()`

Reverts changes to a GTM Folder in a GTM Workspace.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.path` | `string` | Yes | GTM Folder's API relative path. |
| `params.fingerprint` | `string` | No | When provided, this fingerprint must match the fingerprint of the tag in storage. |

### `accounts.containers.workspaces.zones`

#### `accounts.containers.workspaces.zones.create()`

Creates a GTM Zone.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | GTM Workspace's API relative path. |
| `params.resource` | `object` | Yes | The request body. |

#### `accounts.containers.workspaces.zones.list()`

Lists all GTM Zones of a GTM container workspace.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | GTM Workspace's API relative path. |
| `params.pageToken` | `string` | No | Continuation token for fetching the next page of results. |

#### `accounts.containers.workspaces.zones.get()`

Gets a GTM Zone.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.path` | `string` | Yes | GTM Zone's API relative path. |

#### `accounts.containers.workspaces.zones.update()`

Updates a GTM Zone.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.path` | `string` | Yes | GTM Zone's API relative path. |
| `params.fingerprint` | `string` | No | When provided, this fingerprint must match the fingerprint of the zone in storage. |
| `params.resource` | `object` | Yes | The request body. |

#### `accounts.containers.workspaces.zones.delete()`

Deletes a GTM Zone.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.path` | `string` | Yes | GTM Zone's API relative path. |

#### `accounts.containers.workspaces.zones.revert()`

Reverts changes to a GTM Zone in a GTM Workspace.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.path` | `string` | Yes | GTM Zone's API relative path. |
| `params.fingerprint` | `string` | No | When provided, this fingerprint must match the fingerprint of the zone in storage. |

### `accounts.containers.workspaces.clients`

#### `accounts.containers.workspaces.clients.create()`

Creates a GTM Client.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | GTM Workspace's API relative path. |
| `params.resource` | `object` | Yes | The request body. |

#### `accounts.containers.workspaces.clients.list()`

Lists all GTM Clients of a GTM container workspace.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | GTM Workspace's API relative path. |
| `params.pageToken` | `string` | No | Continuation token for fetching the next page of results. |

#### `accounts.containers.workspaces.clients.get()`

Gets a GTM Client.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.path` | `string` | Yes | GTM Client's API relative path. |

#### `accounts.containers.workspaces.clients.update()`

Updates a GTM Client.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.path` | `string` | Yes | GTM Client's API relative path. |
| `params.fingerprint` | `string` | No | When provided, this fingerprint must match the fingerprint of the client in storage. |
| `params.resource` | `object` | Yes | The request body. |

#### `accounts.containers.workspaces.clients.delete()`

Deletes a GTM Client.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.path` | `string` | Yes | GTM Client's API relative path. |

#### `accounts.containers.workspaces.clients.revert()`

Reverts changes to a GTM Client in a GTM Workspace.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.path` | `string` | Yes | GTM Client's API relative path. |
| `params.fingerprint` | `string` | No | When provided, this fingerprint must match the fingerprint of the client in storage. |

### `accounts.containers.workspaces.transformations`

#### `accounts.containers.workspaces.transformations.create()`

Creates a GTM Transformation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | GTM Workspace's API relative path. |
| `params.resource` | `object` | Yes | The request body. |

#### `accounts.containers.workspaces.transformations.list()`

Lists all GTM Transformations of a GTM container workspace.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | GTM Workspace's API relative path. |
| `params.pageToken` | `string` | No | Continuation token for fetching the next page of results. |

#### `accounts.containers.workspaces.transformations.get()`

Gets a GTM Transformation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.path` | `string` | Yes | GTM Transformation's API relative path. |

#### `accounts.containers.workspaces.transformations.update()`

Updates a GTM Transformation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.path` | `string` | Yes | GTM Transformation's API relative path. |
| `params.fingerprint` | `string` | No | When provided, this fingerprint must match the fingerprint of the transformation in storage. |
| `params.resource` | `object` | Yes | The request body. |

#### `accounts.containers.workspaces.transformations.delete()`

Deletes a GTM Transformation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.path` | `string` | Yes | GTM Transformation's API relative path. |

#### `accounts.containers.workspaces.transformations.revert()`

Reverts changes to a GTM Transformation in a GTM Workspace.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.path` | `string` | Yes | GTM Transformation's API relative path. |
| `params.fingerprint` | `string` | No | When provided, this fingerprint must match the fingerprint of the transformation in storage. |

### `accounts.containers.versions`

#### `accounts.containers.versions.get()`

Gets a Container Version.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.path` | `string` | Yes | GTM ContainerVersion's API relative path. |
| `params.containerVersionId` | `string` | No | The GTM ContainerVersion ID. Specify published to retrieve the currently published version. |

#### `accounts.containers.versions.update()`

Updates a Container Version.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.path` | `string` | Yes | GTM ContainerVersion's API relative path. |
| `params.fingerprint` | `string` | No | When provided, this fingerprint must match the fingerprint of the container version in storage. |
| `params.resource` | `object` | Yes | The request body. |

#### `accounts.containers.versions.delete()`

Deletes a Container Version.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.path` | `string` | Yes | GTM ContainerVersion's API relative path. |

#### `accounts.containers.versions.undelete()`

Undeletes a Container Version.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.path` | `string` | Yes | GTM ContainerVersion's API relative path. |

#### `accounts.containers.versions.publish()`

Publishes a Container Version.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.path` | `string` | Yes | GTM ContainerVersion's API relative path. |
| `params.fingerprint` | `string` | No | When provided, this fingerprint must match the fingerprint of the container version in storage. |

#### `accounts.containers.versions.set_latest()`

Sets the latest version used for synchronization of workspaces when detecting conflicts and errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.path` | `string` | Yes | GTM ContainerVersion's API relative path. |

#### `accounts.containers.versions.live()`

Gets the live (i.e. published) container version

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | GTM Container's API relative path. |

### `accounts.containers.version_headers`

#### `accounts.containers.version_headers.list()`

Lists all Container Versions of a GTM Container.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | GTM Container's API relative path. |
| `params.includeDeleted` | `boolean` | No | Also retrieve deleted (archived) versions when true. |
| `params.pageToken` | `string` | No | Continuation token for fetching the next page of results. |

#### `accounts.containers.version_headers.latest()`

Gets the latest container version header

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | GTM Container's API relative path. |

### `accounts.containers.environments`

#### `accounts.containers.environments.create()`

Creates a GTM Environment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | GTM Container's API relative path. |
| `params.resource` | `object` | Yes | The request body. |

#### `accounts.containers.environments.list()`

Lists all GTM Environments of a GTM Container.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | GTM Container's API relative path. |
| `params.pageToken` | `string` | No | Continuation token for fetching the next page of results. |

#### `accounts.containers.environments.get()`

Gets a GTM Environment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.path` | `string` | Yes | GTM Environment's API relative path. |

#### `accounts.containers.environments.update()`

Updates a GTM Environment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.path` | `string` | Yes | GTM Environment's API relative path. |
| `params.fingerprint` | `string` | No | When provided, this fingerprint must match the fingerprint of the environment in storage. |
| `params.resource` | `object` | Yes | The request body. |

#### `accounts.containers.environments.delete()`

Deletes a GTM Environment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.path` | `string` | Yes | GTM Environment's API relative path. |

#### `accounts.containers.environments.reauthorize()`

Re-generates the authorization code for a GTM Environment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.path` | `string` | Yes | GTM Environment's API relative path. |
| `params.resource` | `object` | Yes | The request body. |