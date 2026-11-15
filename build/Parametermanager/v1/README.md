# Parameter Manager API - Apps Script Client Library

Auto-generated client library for using the **Parameter Manager API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 15 Nov 2026 16:41:23 GMT
- **Last Modified:** Sun, 15 Nov 2026 16:41:23 GMT
- **Created:** Sun, 20 Jul 2025 16:45:05 GMT



---

## API Reference

### `projects`

### `projects.locations`

#### `projects.locations.get()`

Gets information about a location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Resource name for the location. |

#### `projects.locations.list()`

Lists information about the supported locations for this service. This method lists locations based on the resource scope provided in the ListLocationsRequest.name field:

* **Global locations**: If `name` is empty, the method lists the public locations available to all projects.

* **Project-specific locations**: If `name` follows the format `projects/{project}`, the method lists locations visible to that specific project. This includes public, private, or other project-specific locations enabled for the project. For gRPC and client library implementations, the resource name is passed as the `name` field. For direct service calls, the resource name is incorporated into the request path based on the specific service implementation and version.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.filter` | `string` | No | A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). |
| `params.name` | `string` | Yes | The resource that owns the locations collection, if applicable. |
| `params.pageToken` | `string` | No | A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. |
| `params.extraLocationTypes` | `string` | No | Optional. Do not use this field unless explicitly documented otherwise. This is primarily for internal usage. |
| `params.pageSize` | `integer` | No | The maximum number of results to return. If not set, the service selects a default. |

### `projects.locations.parameters`

#### `projects.locations.parameters.patch()`

Updates a single Parameter.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.name` | `string` | Yes | Identifier. The resource name of the Parameter in the format `projects/*/locations/*/parameters/*`. |
| `params.updateMask` | `string` | No | Optional. Field mask is used to specify the fields to be overwritten in the Parameter resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A mutable field will be overwritten if it is in the mask. If the user does not provide a mask then all mutable fields present in the request will be overwritten. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.parameters.get()`

Gets details of a single Parameter.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the resource in the format `projects/*/locations/*/parameters/*`. |

#### `projects.locations.parameters.list()`

Lists Parameters in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent value for ListParametersRequest in the format `projects/*/locations/*`. |
| `params.orderBy` | `string` | No | Optional. Hint for how to order the results |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListParameters` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListParameters` must match the call that provided the page token. |
| `params.pageSize` | `integer` | No | Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. |
| `params.filter` | `string` | No | Optional. Filtering results |

#### `projects.locations.parameters.create()`

Creates a new Parameter in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parameterId` | `string` | No | Required. Id of the Parameter resource |
| `params.parent` | `string` | Yes | Required. Value for parent in the format `projects/*/locations/*`. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.parameters.delete()`

Deletes a single Parameter.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.name` | `string` | Yes | Required. Name of the resource in the format `projects/*/locations/*/parameters/*`. |

### `projects.locations.parameters.versions`

#### `projects.locations.parameters.versions.render()`

Gets rendered version of a ParameterVersion.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the resource |

#### `projects.locations.parameters.versions.patch()`

Updates a single ParameterVersion.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.updateMask` | `string` | No | Optional. Field mask is used to specify the fields to be overwritten in the ParameterVersion resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A mutable field will be overwritten if it is in the mask. If the user does not provide a mask then all mutable fields present in the request will be overwritten. |
| `params.name` | `string` | Yes | Identifier. The resource name of the ParameterVersion in the format `projects/*/locations/*/parameters/*/versions/*`. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.parameters.versions.get()`

Gets details of a single ParameterVersion.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the resource in the format `projects/*/locations/*/parameters/*/versions/*`. |
| `params.view` | `string` | No | Optional. View of the ParameterVersion. In the default FULL view, all metadata & payload associated with the ParameterVersion will be returned. |

#### `projects.locations.parameters.versions.list()`

Lists ParameterVersions in a given project, location, and parameter.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent value for ListParameterVersionsRequest in the format `projects/*/locations/*/parameters/*`. |
| `params.pageSize` | `integer` | No | Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. |
| `params.orderBy` | `string` | No | Optional. Hint for how to order the results |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListParameterVersions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListParameterVersions` must match the call that provided the page token. |
| `params.filter` | `string` | No | Optional. Filtering results |

#### `projects.locations.parameters.versions.delete()`

Deletes a single ParameterVersion.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the resource in the format `projects/*/locations/*/parameters/*/versions/*`. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |

#### `projects.locations.parameters.versions.create()`

Creates a new ParameterVersion in a given project, location, and parameter.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.parameterVersionId` | `string` | No | Required. Id of the ParameterVersion resource |
| `params.parent` | `string` | Yes | Required. Value for parent in the format `projects/*/locations/*/parameters/*`. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.templates`

#### `projects.locations.templates.delete()`

Deletes a single Template.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the resource in the format `projects/*/locations/*/templates/*`. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |

#### `projects.locations.templates.get()`

Gets details of a single Template.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the resource in the format `projects/*/locations/*/templates/*`. |

#### `projects.locations.templates.create()`

Creates a new Template in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Value for parent in the format `projects/*/locations/*`. |
| `params.templateId` | `string` | No | Required. Id of the Template resource |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.templates.patch()`

Updates a single Template.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.updateMask` | `string` | No | Optional. Field mask is used to specify the fields to be overwritten in the Template resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A mutable field will be overwritten if it is in the mask. If the user does not provide a mask then all mutable fields present in the request will be overwritten. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.name` | `string` | Yes | Identifier. The resource name of the Template in the format `projects/*/locations/*/templates/*`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.templates.list()`

Lists Templates in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No | Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. |
| `params.filter` | `string` | No | Optional. Filtering results |
| `params.orderBy` | `string` | No | Optional. Hint for how to order the results |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListTemplates` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListTemplates` must match the call that provided the page token. |
| `params.parent` | `string` | Yes | Required. Parent value for ListTemplatesRequest in the format `projects/*/locations/*`. |

### `projects.locations.templates.versions`

#### `projects.locations.templates.versions.patch()`

Updates a single TemplateVersion.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.updateMask` | `string` | No | Optional. Field mask is used to specify the fields to be overwritten in the TemplateVersion resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A mutable field will be overwritten if it is in the mask. If the user does not provide a mask then all mutable fields present in the request will be overwritten. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.name` | `string` | Yes | Identifier. The resource name of the TemplateVersion in the format `projects/*/locations/*/templates/*/versions/*`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.templates.versions.render()`

Gets rendered version of a TemplateVersion.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parameterVersion` | `string` | No | Required. Parameter version used to render the template version. |
| `params.name` | `string` | Yes | Required. Name of the resource |

#### `projects.locations.templates.versions.delete()`

Deletes a single TemplateVersion.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the resource in the format `projects/*/locations/*/templates/*/versions/*`. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |

#### `projects.locations.templates.versions.get()`

Gets details of a single TemplateVersion.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the resource in the format `projects/*/locations/*/templates/*/versions/*`. |
| `params.view` | `string` | No | Optional. Specifies the view of the TemplateVersion to return. In the default FULL view, all metadata & payload associated with the TemplateVersion will be returned. |

#### `projects.locations.templates.versions.create()`

Creates a new TemplateVersion in a given project, location, and template.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Value for parent in the format `projects/*/locations/*/templates/*`. |
| `params.templateVersionId` | `string` | No | Required. Id of the TemplateVersion resource |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.templates.versions.list()`

Lists TemplateVersions in a given project, location, and template.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListTemplateVersions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListTemplateVersions` must match the call that provided the page token. |
| `params.pageSize` | `integer` | No | Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. |
| `params.orderBy` | `string` | No | Optional. Hint for how to order the results |
| `params.parent` | `string` | Yes | Required. Parent value for ListTemplateVersionsRequest in the format `projects/*/locations/*/templates/*`. |
| `params.filter` | `string` | No | Optional. Filtering results |