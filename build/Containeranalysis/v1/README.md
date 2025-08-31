# Container Analysis API - Apps Script Client Library

Auto-generated client library for using the **Container Analysis API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 31 Aug 2025 23:32:27 GMT
- **Last Modified:** Mon, 04 Aug 2025 20:05:21 GMT
- **Created:** Sun, 20 Jul 2025 16:24:17 GMT



---

## API Reference

### `projects`

### `projects.occurrences`

#### `projects.occurrences.get()`

Gets the specified occurrence.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`. |

#### `projects.occurrences.list()`

Lists occurrences for the specified project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the project to list occurrences for in the form of `projects/[PROJECT_ID]`. |
| `params.filter` | `string` | No | The filter expression. |
| `params.pageSize` | `integer` | No | Number of occurrences to return in the list. Must be positive. Max allowed page size is 1000. If not specified, page size defaults to 20. |
| `params.pageToken` | `string` | No | Token to provide to skip to a particular spot in the list. |
| `params.returnPartialSuccess` | `boolean` | No | If set, the request will return all reachable Occurrences and report all unreachable regions in the `unreachable` field in the response. Only applicable for requests in the global region. |

#### `projects.occurrences.delete()`

Deletes the specified occurrence. For example, use this method to delete an occurrence when the occurrence is no longer applicable for the given resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`. |

#### `projects.occurrences.create()`

Creates a new occurrence.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the project in the form of `projects/[PROJECT_ID]`, under which the occurrence is to be created. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.occurrences.batchCreate()`

Creates new occurrences in batch.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the project in the form of `projects/[PROJECT_ID]`, under which the occurrences are to be created. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.occurrences.patch()`

Updates the specified occurrence.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`. |
| `params.updateMask` | `string` | No | The fields to update. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.occurrences.getNotes()`

Gets the note attached to the specified occurrence. Consumer projects can use this method to get a note that belongs to a provider project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`. |

#### `projects.occurrences.setIamPolicy()`

Sets the access control policy on the specified note or occurrence. Requires `containeranalysis.notes.setIamPolicy` or `containeranalysis.occurrences.setIamPolicy` permission if the resource is a note or an occurrence, respectively. The resource takes the format `projects/[PROJECT_ID]/notes/[NOTE_ID]` for notes and `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for occurrences.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.occurrences.getIamPolicy()`

Gets the access control policy for a note or an occurrence resource. Requires `containeranalysis.notes.setIamPolicy` or `containeranalysis.occurrences.setIamPolicy` permission if the resource is a note or occurrence, respectively. The resource takes the format `projects/[PROJECT_ID]/notes/[NOTE_ID]` for notes and `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for occurrences.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.occurrences.testIamPermissions()`

Returns the permissions that a caller has on the specified note or occurrence. Requires list permission on the project (for example, `containeranalysis.notes.list`). The resource takes the format `projects/[PROJECT_ID]/notes/[NOTE_ID]` for notes and `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for occurrences.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.occurrences.getVulnerabilitySummary()`

Gets a summary of the number and severity of occurrences.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the project to get a vulnerability summary for in the form of `projects/[PROJECT_ID]`. |
| `params.filter` | `string` | No | The filter expression. |
| `params.returnPartialSuccess` | `boolean` | No | If set, the request will return all reachable occurrence summaries and report all unreachable regions in the `unreachable` field in the response. Only applicable for requests in the global region. |

### `projects.locations`

### `projects.locations.occurrences`

#### `projects.locations.occurrences.get()`

Gets the specified occurrence.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`. |

#### `projects.locations.occurrences.list()`

Lists occurrences for the specified project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the project to list occurrences for in the form of `projects/[PROJECT_ID]`. |
| `params.filter` | `string` | No | The filter expression. |
| `params.pageSize` | `integer` | No | Number of occurrences to return in the list. Must be positive. Max allowed page size is 1000. If not specified, page size defaults to 20. |
| `params.pageToken` | `string` | No | Token to provide to skip to a particular spot in the list. |
| `params.returnPartialSuccess` | `boolean` | No | If set, the request will return all reachable Occurrences and report all unreachable regions in the `unreachable` field in the response. Only applicable for requests in the global region. |

#### `projects.locations.occurrences.delete()`

Deletes the specified occurrence. For example, use this method to delete an occurrence when the occurrence is no longer applicable for the given resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`. |

#### `projects.locations.occurrences.create()`

Creates a new occurrence.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the project in the form of `projects/[PROJECT_ID]`, under which the occurrence is to be created. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.occurrences.batchCreate()`

Creates new occurrences in batch.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the project in the form of `projects/[PROJECT_ID]`, under which the occurrences are to be created. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.occurrences.patch()`

Updates the specified occurrence.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`. |
| `params.updateMask` | `string` | No | The fields to update. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.occurrences.getNotes()`

Gets the note attached to the specified occurrence. Consumer projects can use this method to get a note that belongs to a provider project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`. |

#### `projects.locations.occurrences.setIamPolicy()`

Sets the access control policy on the specified note or occurrence. Requires `containeranalysis.notes.setIamPolicy` or `containeranalysis.occurrences.setIamPolicy` permission if the resource is a note or an occurrence, respectively. The resource takes the format `projects/[PROJECT_ID]/notes/[NOTE_ID]` for notes and `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for occurrences.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.occurrences.getIamPolicy()`

Gets the access control policy for a note or an occurrence resource. Requires `containeranalysis.notes.setIamPolicy` or `containeranalysis.occurrences.setIamPolicy` permission if the resource is a note or occurrence, respectively. The resource takes the format `projects/[PROJECT_ID]/notes/[NOTE_ID]` for notes and `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for occurrences.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.occurrences.testIamPermissions()`

Returns the permissions that a caller has on the specified note or occurrence. Requires list permission on the project (for example, `containeranalysis.notes.list`). The resource takes the format `projects/[PROJECT_ID]/notes/[NOTE_ID]` for notes and `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for occurrences.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.occurrences.getVulnerabilitySummary()`

Gets a summary of the number and severity of occurrences.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the project to get a vulnerability summary for in the form of `projects/[PROJECT_ID]`. |
| `params.filter` | `string` | No | The filter expression. |
| `params.returnPartialSuccess` | `boolean` | No | If set, the request will return all reachable occurrence summaries and report all unreachable regions in the `unreachable` field in the response. Only applicable for requests in the global region. |

### `projects.locations.notes`

#### `projects.locations.notes.get()`

Gets the specified note.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the note in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`. |

#### `projects.locations.notes.list()`

Lists notes for the specified project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the project to list notes for in the form of `projects/[PROJECT_ID]`. |
| `params.filter` | `string` | No | The filter expression. |
| `params.pageSize` | `integer` | No | Number of notes to return in the list. Must be positive. Max allowed page size is 1000. If not specified, page size defaults to 20. |
| `params.pageToken` | `string` | No | Token to provide to skip to a particular spot in the list. |
| `params.returnPartialSuccess` | `boolean` | No | If set, the request will return all reachable Notes and report all unreachable regions in the `unreachable` field in the response. Only applicable for requests in the global region. |

#### `projects.locations.notes.delete()`

Deletes the specified note.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the note in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`. |

#### `projects.locations.notes.create()`

Creates a new note.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the project in the form of `projects/[PROJECT_ID]`, under which the note is to be created. |
| `params.noteId` | `string` | No | Required. The ID to use for this note. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.notes.batchCreate()`

Creates new notes in batch.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the project in the form of `projects/[PROJECT_ID]`, under which the notes are to be created. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.notes.patch()`

Updates the specified note.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the note in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`. |
| `params.updateMask` | `string` | No | The fields to update. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.notes.setIamPolicy()`

Sets the access control policy on the specified note or occurrence. Requires `containeranalysis.notes.setIamPolicy` or `containeranalysis.occurrences.setIamPolicy` permission if the resource is a note or an occurrence, respectively. The resource takes the format `projects/[PROJECT_ID]/notes/[NOTE_ID]` for notes and `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for occurrences.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.notes.getIamPolicy()`

Gets the access control policy for a note or an occurrence resource. Requires `containeranalysis.notes.setIamPolicy` or `containeranalysis.occurrences.setIamPolicy` permission if the resource is a note or occurrence, respectively. The resource takes the format `projects/[PROJECT_ID]/notes/[NOTE_ID]` for notes and `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for occurrences.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.notes.testIamPermissions()`

Returns the permissions that a caller has on the specified note or occurrence. Requires list permission on the project (for example, `containeranalysis.notes.list`). The resource takes the format `projects/[PROJECT_ID]/notes/[NOTE_ID]` for notes and `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for occurrences.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.notes.occurrences`

#### `projects.locations.notes.occurrences.list()`

Lists occurrences referencing the specified note. Provider projects can use this method to get all occurrences across consumer projects referencing the specified note.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the note to list occurrences for in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`. |
| `params.filter` | `string` | No | The filter expression. |
| `params.pageSize` | `integer` | No | Number of occurrences to return in the list. |
| `params.pageToken` | `string` | No | Token to provide to skip to a particular spot in the list. |

### `projects.locations.resources`

#### `projects.locations.resources.exportSBOM()`

Generates an SBOM for the given resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the resource in the form of `projects/[PROJECT_ID]/resources/[RESOURCE_URL]`. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.notes`

#### `projects.notes.get()`

Gets the specified note.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the note in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`. |

#### `projects.notes.list()`

Lists notes for the specified project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the project to list notes for in the form of `projects/[PROJECT_ID]`. |
| `params.filter` | `string` | No | The filter expression. |
| `params.pageSize` | `integer` | No | Number of notes to return in the list. Must be positive. Max allowed page size is 1000. If not specified, page size defaults to 20. |
| `params.pageToken` | `string` | No | Token to provide to skip to a particular spot in the list. |
| `params.returnPartialSuccess` | `boolean` | No | If set, the request will return all reachable Notes and report all unreachable regions in the `unreachable` field in the response. Only applicable for requests in the global region. |

#### `projects.notes.delete()`

Deletes the specified note.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the note in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`. |

#### `projects.notes.create()`

Creates a new note.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the project in the form of `projects/[PROJECT_ID]`, under which the note is to be created. |
| `params.noteId` | `string` | No | Required. The ID to use for this note. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.notes.batchCreate()`

Creates new notes in batch.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the project in the form of `projects/[PROJECT_ID]`, under which the notes are to be created. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.notes.patch()`

Updates the specified note.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the note in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`. |
| `params.updateMask` | `string` | No | The fields to update. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.notes.setIamPolicy()`

Sets the access control policy on the specified note or occurrence. Requires `containeranalysis.notes.setIamPolicy` or `containeranalysis.occurrences.setIamPolicy` permission if the resource is a note or an occurrence, respectively. The resource takes the format `projects/[PROJECT_ID]/notes/[NOTE_ID]` for notes and `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for occurrences.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.notes.getIamPolicy()`

Gets the access control policy for a note or an occurrence resource. Requires `containeranalysis.notes.setIamPolicy` or `containeranalysis.occurrences.setIamPolicy` permission if the resource is a note or occurrence, respectively. The resource takes the format `projects/[PROJECT_ID]/notes/[NOTE_ID]` for notes and `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for occurrences.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.notes.testIamPermissions()`

Returns the permissions that a caller has on the specified note or occurrence. Requires list permission on the project (for example, `containeranalysis.notes.list`). The resource takes the format `projects/[PROJECT_ID]/notes/[NOTE_ID]` for notes and `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]` for occurrences.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.notes.occurrences`

#### `projects.notes.occurrences.list()`

Lists occurrences referencing the specified note. Provider projects can use this method to get all occurrences across consumer projects referencing the specified note.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the note to list occurrences for in the form of `projects/[PROVIDER_ID]/notes/[NOTE_ID]`. |
| `params.filter` | `string` | No | The filter expression. |
| `params.pageSize` | `integer` | No | Number of occurrences to return in the list. |
| `params.pageToken` | `string` | No | Token to provide to skip to a particular spot in the list. |

### `projects.resources`

#### `projects.resources.exportSBOM()`

Generates an SBOM for the given resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the resource in the form of `projects/[PROJECT_ID]/resources/[RESOURCE_URL]`. |
| `params.resource` | `object` | Yes | The request body. |