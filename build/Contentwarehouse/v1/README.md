# Document AI Warehouse API - Apps Script Client Library

Auto-generated client library for using the **Document AI Warehouse API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Tue, 30 Sep 2025 23:32:36 GMT
- **Last Modified:** Tue, 30 Sep 2025 23:32:36 GMT
- **Created:** Sun, 20 Jul 2025 16:24:26 GMT



---

## API Reference

### `projects`

#### `projects.fetchAcl()`

Gets the access control policy for a resource. Returns NOT_FOUND error if the resource does not exist. Returns an empty policy if the resource exists but does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | Required. REQUIRED: The resource for which the policy is being requested. Format for document: projects/{project_number}/locations/{location}/documents/{document_id}. Format for collection: projects/{project_number}/locations/{location}/collections/{collection_id}. Format for project: projects/{project_number}. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.setAcl()`

Sets the access control policy for a resource. Replaces any existing policy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | Required. REQUIRED: The resource for which the policy is being requested. Format for document: projects/{project_number}/locations/{location}/documents/{document_id}. Format for collection: projects/{project_number}/locations/{location}/collections/{collection_id}. Format for project: projects/{project_number}. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations`

#### `projects.locations.initialize()`

Provisions resources for given tenant project. Returns a long running operation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.location` | `string` | Yes | Required. The location to be initialized Format: projects/{project_number}/locations/{location}. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.getStatus()`

Get the project status.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.location` | `string` | Yes | Required. The location to be queried Format: projects/{project_number}/locations/{location}. |

#### `projects.locations.runPipeline()`

Run a predefined pipeline.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name which owns the resources of the pipeline. Format: projects/{project_number}/locations/{location}. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.operations`

#### `projects.locations.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

### `projects.locations.documentSchemas`

#### `projects.locations.documentSchemas.create()`

Creates a document schema.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent name. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.documentSchemas.delete()`

Deletes a document schema. Returns NOT_FOUND if the document schema does not exist. Returns BAD_REQUEST if the document schema has documents depending on it.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the document schema to delete. |

#### `projects.locations.documentSchemas.get()`

Gets a document schema. Returns NOT_FOUND if the document schema does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the document schema to retrieve. |

#### `projects.locations.documentSchemas.patch()`

Updates a Document Schema. Returns INVALID_ARGUMENT if the name of the Document Schema is non-empty and does not equal the existing name. Supports only appending new properties, adding new ENUM possible values, and updating the EnumTypeOptions.validation_check_disabled flag for ENUM possible values. Updating existing properties will result into INVALID_ARGUMENT.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the document schema to update. Format: projects/{project_number}/locations/{location}/documentSchemas/{document_schema_id}. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.documentSchemas.list()`

Lists document schemas.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent, which owns this collection of document schemas. Format: projects/{project_number}/locations/{location}. |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListDocumentSchemas` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListDocumentSchemas` must match the call that provided the page token. |
| `params.pageSize` | `integer` | No | The maximum number of document schemas to return. The service may return fewer than this value. If unspecified, at most 50 document schemas will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |

### `projects.locations.documents`

#### `projects.locations.documents.fetchAcl()`

Gets the access control policy for a resource. Returns NOT_FOUND error if the resource does not exist. Returns an empty policy if the resource exists but does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | Required. REQUIRED: The resource for which the policy is being requested. Format for document: projects/{project_number}/locations/{location}/documents/{document_id}. Format for collection: projects/{project_number}/locations/{location}/collections/{collection_id}. Format for project: projects/{project_number}. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.documents.create()`

Creates a document.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent name. Format: projects/{project_number}/locations/{location}. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.documents.patch()`

Updates a document. Returns INVALID_ARGUMENT if the name of the document is non-empty and does not equal the existing name.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the document to update. Format: projects/{project_number}/locations/{location}/documents/{document_id} or projects/{project_number}/locations/{location}/documents/referenceId/{reference_id}. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.documents.search()`

Searches for documents using provided SearchDocumentsRequest. This call only returns documents that the caller has permission to search against.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent, which owns this collection of documents. Format: projects/{project_number}/locations/{location}. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.documents.lock()`

Lock the document so the document cannot be updated by other users.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the document to lock. Format: projects/{project_number}/locations/{location}/documents/{document}. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.documents.linkedSources()`

Return all source document-links from the document.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the document, for which all source links are returned. Format: projects/{project_number}/locations/{location}/documents/{source_document_id}. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.documents.delete()`

Deletes a document. Returns NOT_FOUND if the document does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the document to delete. Format: projects/{project_number}/locations/{location}/documents/{document_id} or projects/{project_number}/locations/{location}/documents/referenceId/{reference_id}. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.documents.get()`

Gets a document. Returns NOT_FOUND if the document does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the document to retrieve. Format: projects/{project_number}/locations/{location}/documents/{document_id} or projects/{project_number}/locations/{location}/documents/referenceId/{reference_id}. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.documents.linkedTargets()`

Return all target document-links from the document.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the document, for which all target links are returned. Format: projects/{project_number}/locations/{location}/documents/{target_document_id}. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.documents.setAcl()`

Sets the access control policy for a resource. Replaces any existing policy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | Required. REQUIRED: The resource for which the policy is being requested. Format for document: projects/{project_number}/locations/{location}/documents/{document_id}. Format for collection: projects/{project_number}/locations/{location}/collections/{collection_id}. Format for project: projects/{project_number}. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.documents.documentLinks`

#### `projects.locations.documents.documentLinks.delete()`

Remove the link between the source and target documents.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the document-link to be deleted. Format: projects/{project_number}/locations/{location}/documents/{source_document_id}/documentLinks/{document_link_id}. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.documents.documentLinks.create()`

Create a link between a source document and a target document.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent of the document-link to be created. parent of document-link should be a document. Format: projects/{project_number}/locations/{location}/documents/{source_document_id}. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.documents.referenceId`

#### `projects.locations.documents.referenceId.patch()`

Updates a document. Returns INVALID_ARGUMENT if the name of the document is non-empty and does not equal the existing name.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the document to update. Format: projects/{project_number}/locations/{location}/documents/{document_id} or projects/{project_number}/locations/{location}/documents/referenceId/{reference_id}. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.documents.referenceId.delete()`

Deletes a document. Returns NOT_FOUND if the document does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the document to delete. Format: projects/{project_number}/locations/{location}/documents/{document_id} or projects/{project_number}/locations/{location}/documents/referenceId/{reference_id}. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.documents.referenceId.get()`

Gets a document. Returns NOT_FOUND if the document does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the document to retrieve. Format: projects/{project_number}/locations/{location}/documents/{document_id} or projects/{project_number}/locations/{location}/documents/referenceId/{reference_id}. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.ruleSets`

#### `projects.locations.ruleSets.get()`

Gets a ruleset. Returns NOT_FOUND if the ruleset does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the rule set to retrieve. Format: projects/{project_number}/locations/{location}/ruleSets/{rule_set_id}. |

#### `projects.locations.ruleSets.create()`

Creates a ruleset.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent name. Format: projects/{project_number}/locations/{location}. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.ruleSets.list()`

Lists rulesets.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent, which owns this collection of document. Format: projects/{project_number}/locations/{location}. |
| `params.pageSize` | `integer` | No | The maximum number of rule sets to return. The service may return fewer than this value. If unspecified, at most 50 rule sets will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListRuleSets` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListRuleSets` must match the call that provided the page token. |

#### `projects.locations.ruleSets.patch()`

Updates a ruleset. Returns INVALID_ARGUMENT if the name of the ruleset is non-empty and does not equal the existing name.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the rule set to update. Format: projects/{project_number}/locations/{location}/ruleSets/{rule_set_id}. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.ruleSets.delete()`

Deletes a ruleset. Returns NOT_FOUND if the document does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the rule set to delete. Format: projects/{project_number}/locations/{location}/ruleSets/{rule_set_id}. |

### `projects.locations.synonymSets`

#### `projects.locations.synonymSets.list()`

Returns all SynonymSets (for all contexts) for the specified location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No | A page token, received from a previous `ListSynonymSets` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListSynonymSets` must match the call that provided the page token. |
| `params.pageSize` | `integer` | No | The maximum number of synonymSets to return. The service may return fewer than this value. If unspecified, at most 50 rule sets will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| `params.parent` | `string` | Yes | Required. The parent name. Format: projects/{project_number}/locations/{location}. |

#### `projects.locations.synonymSets.get()`

Gets a SynonymSet for a particular context. Throws a NOT_FOUND exception if the Synonymset does not exist

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the synonymSet to retrieve Format: projects/{project_number}/locations/{location}/synonymSets/{context}. |

#### `projects.locations.synonymSets.create()`

Creates a SynonymSet for a single context. Throws an ALREADY_EXISTS exception if a synonymset already exists for the context.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent name. Format: projects/{project_number}/locations/{location}. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.synonymSets.patch()`

Remove the existing SynonymSet for the context and replaces it with a new one. Throws a NOT_FOUND exception if the SynonymSet is not found.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the synonymSet to update Format: projects/{project_number}/locations/{location}/synonymSets/{context}. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.synonymSets.delete()`

Deletes a SynonymSet for a given context. Throws a NOT_FOUND exception if the SynonymSet is not found.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the synonymSet to delete Format: projects/{project_number}/locations/{location}/synonymSets/{context}. |