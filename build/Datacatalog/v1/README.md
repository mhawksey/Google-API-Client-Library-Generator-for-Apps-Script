# Google Cloud Data Catalog API - Apps Script Client Library

Auto-generated client library for using the **Google Cloud Data Catalog API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 15 Nov 2026 15:59:06 GMT
- **Last Modified:** Sun, 15 Nov 2026 15:59:06 GMT
- **Created:** Sun, 20 Jul 2025 16:24:39 GMT



---

## API Reference

### `projects`

### `projects.locations`

#### `projects.locations.setConfig()`

Sets the configuration related to the migration to Dataplex Universal Catalog for an organization or project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The organization or project whose config is being specified. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.retrieveEffectiveConfig()`

Retrieves the effective configuration related to the migration from Data Catalog to Dataplex Universal Catalog for a specific organization or project. If there is no specific configuration set for the resource, the setting is checked hierarchicahlly through the ancestors of the resource, starting from the resource itself.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource whose effective config is being retrieved. |

### `projects.locations.taxonomies`

#### `projects.locations.taxonomies.export()`

Exports taxonomies in the requested type and returns them, including their policy tags. The requested taxonomies must belong to the same project. This method generates `SerializedTaxonomy` protocol buffers with nested policy tags that can be used as input for `ImportTaxonomies` calls.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.taxonomies` | `string` | No | Required. Resource names of the taxonomies to export. |
| `params.serializedTaxonomies` | `boolean` | No | Serialized export taxonomies that contain all the policy tags as nested protocol buffers. |
| `params.parent` | `string` | Yes | Required. Resource name of the project that the exported taxonomies belong to. |

#### `projects.locations.taxonomies.list()`

Lists all taxonomies in a project in a particular location that you have a permission to view.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Resource name of the project to list the taxonomies of. |
| `params.filter` | `string` | No | Supported field for filter is 'service' and value is 'dataplex'. Eg: service=dataplex. |
| `params.pageSize` | `integer` | No | The maximum number of items to return. Must be a value between 1 and 1000 inclusively. If not set, defaults to 50. |
| `params.pageToken` | `string` | No | The pagination token of the next results page. If not set, the first page is returned. The token is returned in the response to a previous list request. |

#### `projects.locations.taxonomies.delete()`

Deletes a taxonomy, including all policy tags in this taxonomy, their associated policies, and the policy tags references from BigQuery columns.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the taxonomy to delete. Note: All policy tags in this taxonomy are also deleted. |

#### `projects.locations.taxonomies.patch()`

Updates a taxonomy, including its display name, description, and activated policy types.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. Resource name of this taxonomy in URL format. Note: Policy tag manager generates unique taxonomy IDs. |
| `params.updateMask` | `string` | No | Specifies fields to update. If not set, defaults to all fields you can update. For more information, see [FieldMask] (https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask). |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.taxonomies.testIamPermissions()`

Returns your permissions on a specified policy tag or taxonomy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.taxonomies.get()`

Gets a taxonomy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the taxonomy to get. |

#### `projects.locations.taxonomies.create()`

Creates a taxonomy in a specified project. The taxonomy is initially empty, that is, it doesn't contain policy tags.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Resource name of the project that the taxonomy will belong to. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.taxonomies.replace()`

Replaces (updates) a taxonomy and all its policy tags. The taxonomy and its entire hierarchy of policy tags must be represented literally by `SerializedTaxonomy` and the nested `SerializedPolicyTag` messages. This operation automatically does the following: - Deletes the existing policy tags that are missing from the `SerializedPolicyTag`. - Creates policy tags that don't have resource names. They are considered new. - Updates policy tags with valid resources names accordingly.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the taxonomy to update. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.taxonomies.setIamPolicy()`

Sets the IAM policy for a policy tag or a taxonomy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.taxonomies.getIamPolicy()`

Gets the IAM policy for a policy tag or a taxonomy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.taxonomies.import()`

Creates new taxonomies (including their policy tags) in a given project by importing from inlined or cross-regional sources. For a cross-regional source, new taxonomies are created by copying from a source in another region. For an inlined source, taxonomies and policy tags are created in bulk using nested protocol buffer structures.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Resource name of project that the imported taxonomies will belong to. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.taxonomies.policyTags`

#### `projects.locations.taxonomies.policyTags.get()`

Gets a policy tag.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the policy tag. |

#### `projects.locations.taxonomies.policyTags.delete()`

Deletes a policy tag together with the following:

* All of its descendant policy tags, if any

* Policies associated with the policy tag and its descendants

* References from BigQuery table schema of the policy tag and its descendants

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the policy tag to delete. Note: All of its descendant policy tags are also deleted. |

#### `projects.locations.taxonomies.policyTags.getIamPolicy()`

Gets the IAM policy for a policy tag or a taxonomy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.taxonomies.policyTags.setIamPolicy()`

Sets the IAM policy for a policy tag or a taxonomy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.taxonomies.policyTags.create()`

Creates a policy tag in a taxonomy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Resource name of the taxonomy that the policy tag will belong to. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.taxonomies.policyTags.patch()`

Updates a policy tag, including its display name, description, and parent policy tag.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.updateMask` | `string` | No | Specifies the fields to update. You can update only display name, description, and parent policy tag. If not set, defaults to all updatable fields. For more information, see [FieldMask] (https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask). |
| `params.name` | `string` | Yes | Identifier. Resource name of this policy tag in the URL format. The policy tag manager generates unique taxonomy IDs and policy tag IDs. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.taxonomies.policyTags.testIamPermissions()`

Returns your permissions on a specified policy tag or taxonomy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.taxonomies.policyTags.list()`

Lists all policy tags in a taxonomy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No | The maximum number of items to return. Must be a value between 1 and 1000 inclusively. If not set, defaults to 50. |
| `params.parent` | `string` | Yes | Required. Resource name of the taxonomy to list the policy tags of. |
| `params.pageToken` | `string` | No | The pagination token of the next results page. If not set, returns the first page. The token is returned in the response to a previous list request. |

### `projects.locations.operations`

#### `projects.locations.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No | The standard list page token. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.returnPartialSuccess` | `boolean` | No | When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. |

#### `projects.locations.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |

#### `projects.locations.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `projects.locations.operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

### `organizations`

### `organizations.locations`

#### `organizations.locations.retrieveConfig()`

Retrieves the configuration related to the migration from Data Catalog to Dataplex Universal Catalog for a specific organization, including all the projects under it which have a separate configuration set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The organization whose config is being retrieved. |

#### `organizations.locations.setConfig()`

Sets the configuration related to the migration to Dataplex Universal Catalog for an organization or project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The organization or project whose config is being specified. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `organizations.locations.retrieveEffectiveConfig()`

Retrieves the effective configuration related to the migration from Data Catalog to Dataplex Universal Catalog for a specific organization or project. If there is no specific configuration set for the resource, the setting is checked hierarchicahlly through the ancestors of the resource, starting from the resource itself.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource whose effective config is being retrieved. |

### `catalog`

#### `catalog.search()`

Searches Data Catalog for multiple resources like entries and tags that match a query. This is a [Custom Method] (https://cloud.google.com/apis/design/custom_methods) that doesn't return all information on a resource, only its ID and high level fields. To get more information, you can subsequently call specific get methods. Note: Data Catalog search queries don't guarantee full recall. Results that match your query might not be returned, even in subsequent result pages. Additionally, returned (and not returned) results can vary if you repeat search queries. For more information, see [Data Catalog search syntax] (https://cloud.google.com/data-catalog/docs/how-to/search-reference).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |