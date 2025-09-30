# Container Analysis API - Apps Script Client Library

Auto-generated client library for using the **Container Analysis API (version: v1alpha1)** in Google Apps Script.

## Metadata

- **Last Checked:** Tue, 30 Sep 2025 23:32:25 GMT
- **Last Modified:** Sun, 21 Sep 2025 17:15:11 GMT
- **Created:** Sun, 20 Jul 2025 16:24:09 GMT



---

## API Reference

### `projects`

### `projects.occurrences`

#### `projects.occurrences.get()`

Returns the requested `Occurrence`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the occurrence of the form "projects/{project_id}/occurrences/{OCCURRENCE_ID}" |

#### `projects.occurrences.list()`

Lists active `Occurrences` for a given project matching the filters.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | This contains the project Id for example: projects/{project_id}. |
| `params.name` | `string` | No | The name field contains the project Id. For example: "projects/{project_id} @Deprecated |
| `params.filter` | `string` | No | The filter expression. |
| `params.pageSize` | `integer` | No | Number of occurrences to return in the list. |
| `params.pageToken` | `string` | No | Token to provide to skip to a particular spot in the list. |
| `params.kind` | `string` | No | The kind of occurrences to filter on. |

#### `projects.occurrences.delete()`

Deletes the given `Occurrence` from the system. Use this when an `Occurrence` is no longer applicable for the given resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the occurrence in the form of "projects/{project_id}/occurrences/{OCCURRENCE_ID}" |

#### `projects.occurrences.create()`

Creates a new `Occurrence`. Use this method to create `Occurrences` for a resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | This field contains the project Id for example: "projects/{project_id}" |
| `params.name` | `string` | No | The name of the project. Should be of the form "projects/{project_id}". @Deprecated |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.occurrences.patch()`

Updates an existing occurrence.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the occurrence. Should be of the form "projects/{project_id}/occurrences/{OCCURRENCE_ID}". |
| `params.updateMask` | `string` | No | The fields to update. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.occurrences.getNotes()`

Gets the `Note` attached to the given `Occurrence`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the occurrence in the form "projects/{project_id}/occurrences/{OCCURRENCE_ID}" |

#### `projects.occurrences.getVulnerabilitySummary()`

Gets a summary of the number and severity of occurrences.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | This contains the project Id for example: projects/{project_id} |
| `params.filter` | `string` | No | The filter expression. |

#### `projects.occurrences.setIamPolicy()`

Sets the access control policy on the specified `Note` or `Occurrence`. Requires `containeranalysis.notes.setIamPolicy` or `containeranalysis.occurrences.setIamPolicy` permission if the resource is a `Note` or an `Occurrence`, respectively. Attempting to call this method without these permissions will result in a ` `PERMISSION_DENIED` error. Attempting to call this method on a non-existent resource will result in a `NOT_FOUND` error if the user has `containeranalysis.notes.list` permission on a `Note` or `containeranalysis.occurrences.list` on an `Occurrence`, or a `PERMISSION_DENIED` error otherwise. The resource takes the following formats: `projects/{projectid}/occurrences/{occurrenceid}` for occurrences and projects/{projectid}/notes/{noteid} for notes

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.occurrences.getIamPolicy()`

Gets the access control policy for a note or an `Occurrence` resource. Requires `containeranalysis.notes.setIamPolicy` or `containeranalysis.occurrences.setIamPolicy` permission if the resource is a note or occurrence, respectively. Attempting to call this method on a resource without the required permission will result in a `PERMISSION_DENIED` error. Attempting to call this method on a non-existent resource will result in a `NOT_FOUND` error if the user has list permission on the project, or a `PERMISSION_DENIED` error otherwise. The resource takes the following formats: `projects/{PROJECT_ID}/occurrences/{OCCURRENCE_ID}` for occurrences and projects/{PROJECT_ID}/notes/{NOTE_ID} for notes

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.occurrences.testIamPermissions()`

Returns the permissions that a caller has on the specified note or occurrence resource. Requires list permission on the project (for example, "storage.objects.list" on the containing bucket for testing permission of an object). Attempting to call this method on a non-existent resource will result in a `NOT_FOUND` error if the user has list permission on the project, or a `PERMISSION_DENIED` error otherwise. The resource takes the following formats: `projects/{PROJECT_ID}/occurrences/{OCCURRENCE_ID}` for `Occurrences` and `projects/{PROJECT_ID}/notes/{NOTE_ID}` for `Notes`

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.notes`

#### `projects.notes.get()`

Returns the requested `Note`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the note in the form of "providers/{provider_id}/notes/{NOTE_ID}" |

#### `projects.notes.list()`

Lists all `Notes` for a given project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | This field contains the project Id for example: "projects/{PROJECT_ID}". |
| `params.name` | `string` | No | The name field will contain the project Id for example: "providers/{provider_id} @Deprecated |
| `params.filter` | `string` | No | The filter expression. |
| `params.pageSize` | `integer` | No | Number of notes to return in the list. |
| `params.pageToken` | `string` | No | Token to provide to skip to a particular spot in the list. |

#### `projects.notes.delete()`

Deletes the given `Note` from the system.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the note in the form of "providers/{provider_id}/notes/{NOTE_ID}" |

#### `projects.notes.create()`

Creates a new `Note`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | This field contains the project Id for example: "projects/{project_id} |
| `params.name` | `string` | No | The name of the project. Should be of the form "providers/{provider_id}". @Deprecated |
| `params.noteId` | `string` | No | The ID to use for this note. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.notes.patch()`

Updates an existing `Note`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the note. Should be of the form "projects/{provider_id}/notes/{note_id}". |
| `params.updateMask` | `string` | No | The fields to update. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.notes.setIamPolicy()`

Sets the access control policy on the specified `Note` or `Occurrence`. Requires `containeranalysis.notes.setIamPolicy` or `containeranalysis.occurrences.setIamPolicy` permission if the resource is a `Note` or an `Occurrence`, respectively. Attempting to call this method without these permissions will result in a ` `PERMISSION_DENIED` error. Attempting to call this method on a non-existent resource will result in a `NOT_FOUND` error if the user has `containeranalysis.notes.list` permission on a `Note` or `containeranalysis.occurrences.list` on an `Occurrence`, or a `PERMISSION_DENIED` error otherwise. The resource takes the following formats: `projects/{projectid}/occurrences/{occurrenceid}` for occurrences and projects/{projectid}/notes/{noteid} for notes

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.notes.getIamPolicy()`

Gets the access control policy for a note or an `Occurrence` resource. Requires `containeranalysis.notes.setIamPolicy` or `containeranalysis.occurrences.setIamPolicy` permission if the resource is a note or occurrence, respectively. Attempting to call this method on a resource without the required permission will result in a `PERMISSION_DENIED` error. Attempting to call this method on a non-existent resource will result in a `NOT_FOUND` error if the user has list permission on the project, or a `PERMISSION_DENIED` error otherwise. The resource takes the following formats: `projects/{PROJECT_ID}/occurrences/{OCCURRENCE_ID}` for occurrences and projects/{PROJECT_ID}/notes/{NOTE_ID} for notes

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.notes.testIamPermissions()`

Returns the permissions that a caller has on the specified note or occurrence resource. Requires list permission on the project (for example, "storage.objects.list" on the containing bucket for testing permission of an object). Attempting to call this method on a non-existent resource will result in a `NOT_FOUND` error if the user has list permission on the project, or a `PERMISSION_DENIED` error otherwise. The resource takes the following formats: `projects/{PROJECT_ID}/occurrences/{OCCURRENCE_ID}` for `Occurrences` and `projects/{PROJECT_ID}/notes/{NOTE_ID}` for `Notes`

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.notes.occurrences`

#### `projects.notes.occurrences.list()`

Lists `Occurrences` referencing the specified `Note`. Use this method to get all occurrences referencing your `Note` across all your customer projects.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name field will contain the note name for example: "provider/{provider_id}/notes/{note_id}" |
| `params.filter` | `string` | No | The filter expression. |
| `params.pageSize` | `integer` | No | Number of notes to return in the list. |
| `params.pageToken` | `string` | No | Token to provide to skip to a particular spot in the list. |

### `projects.operations`

#### `projects.operations.create()`

Creates a new `Operation`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | The project Id that this operation should be created under. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.operations.patch()`

Updates an existing operation returns an error if operation does not exist. The only valid operations are to update mark the done bit change the result.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the Operation. Should be of the form "projects/{provider_id}/operations/{operation_id}". |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.scanConfigs`

#### `projects.scanConfigs.get()`

Gets a specific scan configuration for a project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the ScanConfig in the form projects/{project_id}/scanConfigs/{scan_config_id} |

#### `projects.scanConfigs.list()`

Lists scan configurations for a project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | This containers the project Id i.e.: projects/{project_id} |
| `params.filter` | `string` | No | The filter expression. |
| `params.pageSize` | `integer` | No | The number of items to return. |
| `params.pageToken` | `string` | No | The page token to use for the next request. |

#### `projects.scanConfigs.patch()`

Updates the scan configuration to a new value.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The scan config to update of the form projects/{project_id}/scanConfigs/{scan_config_id}. |
| `params.updateMask` | `string` | No | The fields to update. |
| `params.requestBody` | `object` | Yes | The request body. |

### `providers`

### `providers.notes`

#### `providers.notes.get()`

Returns the requested `Note`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the note in the form of "providers/{provider_id}/notes/{NOTE_ID}" |

#### `providers.notes.list()`

Lists all `Notes` for a given project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name field will contain the project Id for example: "providers/{provider_id} @Deprecated |
| `params.parent` | `string` | No | This field contains the project Id for example: "projects/{PROJECT_ID}". |
| `params.filter` | `string` | No | The filter expression. |
| `params.pageSize` | `integer` | No | Number of notes to return in the list. |
| `params.pageToken` | `string` | No | Token to provide to skip to a particular spot in the list. |

#### `providers.notes.delete()`

Deletes the given `Note` from the system.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the note in the form of "providers/{provider_id}/notes/{NOTE_ID}" |

#### `providers.notes.create()`

Creates a new `Note`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the project. Should be of the form "providers/{provider_id}". @Deprecated |
| `params.parent` | `string` | No | This field contains the project Id for example: "projects/{project_id} |
| `params.noteId` | `string` | No | The ID to use for this note. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `providers.notes.patch()`

Updates an existing `Note`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the note. Should be of the form "projects/{provider_id}/notes/{note_id}". |
| `params.updateMask` | `string` | No | The fields to update. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `providers.notes.setIamPolicy()`

Sets the access control policy on the specified `Note` or `Occurrence`. Requires `containeranalysis.notes.setIamPolicy` or `containeranalysis.occurrences.setIamPolicy` permission if the resource is a `Note` or an `Occurrence`, respectively. Attempting to call this method without these permissions will result in a ` `PERMISSION_DENIED` error. Attempting to call this method on a non-existent resource will result in a `NOT_FOUND` error if the user has `containeranalysis.notes.list` permission on a `Note` or `containeranalysis.occurrences.list` on an `Occurrence`, or a `PERMISSION_DENIED` error otherwise. The resource takes the following formats: `projects/{projectid}/occurrences/{occurrenceid}` for occurrences and projects/{projectid}/notes/{noteid} for notes

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `providers.notes.getIamPolicy()`

Gets the access control policy for a note or an `Occurrence` resource. Requires `containeranalysis.notes.setIamPolicy` or `containeranalysis.occurrences.setIamPolicy` permission if the resource is a note or occurrence, respectively. Attempting to call this method on a resource without the required permission will result in a `PERMISSION_DENIED` error. Attempting to call this method on a non-existent resource will result in a `NOT_FOUND` error if the user has list permission on the project, or a `PERMISSION_DENIED` error otherwise. The resource takes the following formats: `projects/{PROJECT_ID}/occurrences/{OCCURRENCE_ID}` for occurrences and projects/{PROJECT_ID}/notes/{NOTE_ID} for notes

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `providers.notes.testIamPermissions()`

Returns the permissions that a caller has on the specified note or occurrence resource. Requires list permission on the project (for example, "storage.objects.list" on the containing bucket for testing permission of an object). Attempting to call this method on a non-existent resource will result in a `NOT_FOUND` error if the user has list permission on the project, or a `PERMISSION_DENIED` error otherwise. The resource takes the following formats: `projects/{PROJECT_ID}/occurrences/{OCCURRENCE_ID}` for `Occurrences` and `projects/{PROJECT_ID}/notes/{NOTE_ID}` for `Notes`

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

### `providers.notes.occurrences`

#### `providers.notes.occurrences.list()`

Lists `Occurrences` referencing the specified `Note`. Use this method to get all occurrences referencing your `Note` across all your customer projects.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name field will contain the note name for example: "provider/{provider_id}/notes/{note_id}" |
| `params.filter` | `string` | No | The filter expression. |
| `params.pageSize` | `integer` | No | Number of notes to return in the list. |
| `params.pageToken` | `string` | No | Token to provide to skip to a particular spot in the list. |