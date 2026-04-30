# Essential Contacts API - Apps Script Client Library

Auto-generated client library for using the **Essential Contacts API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Thu, 30 Apr 2026 23:54:34 GMT
- **Last Modified:** Thu, 30 Apr 2026 23:54:34 GMT
- **Created:** Sun, 20 Jul 2025 16:32:46 GMT



---

## API Reference

### `organizations`

### `organizations.contacts`

#### `organizations.contacts.delete()`

Deletes a contact.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the contact to delete. Format: organizations/{organization}/contacts/{contact}, folders/{folder}/contacts/{contact} or projects/{project}/contacts/{contact} (where {project} is the project number) |

#### `organizations.contacts.patch()`

Updates a contact. Note: A contact's email address cannot be changed.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. The identifier for the contact. Format: {resource_type}/{resource_id}/contacts/{contact_id} |
| `params.updateMask` | `string` | No | Optional. The update mask applied to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask |
| `params.requestBody` | `object` | Yes | The request body. |

#### `organizations.contacts.list()`

Lists the contacts that have been set on a resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name. Format: organizations/{organization}, folders/{folder} or projects/{project} (where {project} is the project number) |
| `params.pageSize` | `integer` | No | Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of `next_page_token` in the response indicates that more results might be available. If not specified, the default page_size is 100. |
| `params.pageToken` | `string` | No | Optional. If present, retrieves the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of other method parameters should be identical to those in the previous call. |

#### `organizations.contacts.sendTestMessage()`

Allows a contact admin to send a test message to contact to verify that it has been configured correctly.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | Required. The name of the resource to send the test message for. All contacts must either be set directly on this resource or inherited from another resource that is an ancestor of this one. Format: organizations/{organization}, folders/{folder} or projects/{project} (where {project} is the project number) |
| `params.requestBody` | `object` | Yes | The request body. |

#### `organizations.contacts.compute()`

Lists all contacts for the resource that are subscribed to the specified notification categories, including contacts inherited from any parent resources.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the resource to compute contacts for. Format: organizations/{organization}, folders/{folder} or projects/{project} (where {project} is the project number) |
| `params.pageSize` | `integer` | No | Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of `next_page_token` in the response indicates that more results might be available. If not specified, the default page_size is 100. |
| `params.pageToken` | `string` | No | Optional. If present, retrieves the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of other method parameters should be identical to those in the previous call. |
| `params.notificationCategories` | `string` | No | The categories of notifications to compute contacts for. If ALL is included in this list, contacts subscribed to any notification category will be returned. |

#### `organizations.contacts.get()`

Gets a single contact.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the contact to retrieve. Format: organizations/{organization}/contacts/{contact}, folders/{folder}/contacts/{contact} or projects/{project}/contacts/{contact} (where {project} is the project number) |

#### `organizations.contacts.create()`

Adds a new contact for a resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource to save this contact for. Format: organizations/{organization}, folders/{folder} or projects/{project} (where {project} is the project number) |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects`

### `projects.contacts`

#### `projects.contacts.get()`

Gets a single contact.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the contact to retrieve. Format: organizations/{organization}/contacts/{contact}, folders/{folder}/contacts/{contact} or projects/{project}/contacts/{contact} (where {project} is the project number) |

#### `projects.contacts.create()`

Adds a new contact for a resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource to save this contact for. Format: organizations/{organization}, folders/{folder} or projects/{project} (where {project} is the project number) |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.contacts.list()`

Lists the contacts that have been set on a resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name. Format: organizations/{organization}, folders/{folder} or projects/{project} (where {project} is the project number) |
| `params.pageSize` | `integer` | No | Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of `next_page_token` in the response indicates that more results might be available. If not specified, the default page_size is 100. |
| `params.pageToken` | `string` | No | Optional. If present, retrieves the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of other method parameters should be identical to those in the previous call. |

#### `projects.contacts.sendTestMessage()`

Allows a contact admin to send a test message to contact to verify that it has been configured correctly.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | Required. The name of the resource to send the test message for. All contacts must either be set directly on this resource or inherited from another resource that is an ancestor of this one. Format: organizations/{organization}, folders/{folder} or projects/{project} (where {project} is the project number) |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.contacts.compute()`

Lists all contacts for the resource that are subscribed to the specified notification categories, including contacts inherited from any parent resources.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.notificationCategories` | `string` | No | The categories of notifications to compute contacts for. If ALL is included in this list, contacts subscribed to any notification category will be returned. |
| `params.parent` | `string` | Yes | Required. The name of the resource to compute contacts for. Format: organizations/{organization}, folders/{folder} or projects/{project} (where {project} is the project number) |
| `params.pageSize` | `integer` | No | Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of `next_page_token` in the response indicates that more results might be available. If not specified, the default page_size is 100. |
| `params.pageToken` | `string` | No | Optional. If present, retrieves the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of other method parameters should be identical to those in the previous call. |

#### `projects.contacts.patch()`

Updates a contact. Note: A contact's email address cannot be changed.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. The identifier for the contact. Format: {resource_type}/{resource_id}/contacts/{contact_id} |
| `params.updateMask` | `string` | No | Optional. The update mask applied to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.contacts.delete()`

Deletes a contact.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the contact to delete. Format: organizations/{organization}/contacts/{contact}, folders/{folder}/contacts/{contact} or projects/{project}/contacts/{contact} (where {project} is the project number) |

### `folders`

### `folders.contacts`

#### `folders.contacts.delete()`

Deletes a contact.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the contact to delete. Format: organizations/{organization}/contacts/{contact}, folders/{folder}/contacts/{contact} or projects/{project}/contacts/{contact} (where {project} is the project number) |

#### `folders.contacts.patch()`

Updates a contact. Note: A contact's email address cannot be changed.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. The identifier for the contact. Format: {resource_type}/{resource_id}/contacts/{contact_id} |
| `params.updateMask` | `string` | No | Optional. The update mask applied to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask |
| `params.requestBody` | `object` | Yes | The request body. |

#### `folders.contacts.list()`

Lists the contacts that have been set on a resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name. Format: organizations/{organization}, folders/{folder} or projects/{project} (where {project} is the project number) |
| `params.pageSize` | `integer` | No | Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of `next_page_token` in the response indicates that more results might be available. If not specified, the default page_size is 100. |
| `params.pageToken` | `string` | No | Optional. If present, retrieves the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of other method parameters should be identical to those in the previous call. |

#### `folders.contacts.sendTestMessage()`

Allows a contact admin to send a test message to contact to verify that it has been configured correctly.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | Required. The name of the resource to send the test message for. All contacts must either be set directly on this resource or inherited from another resource that is an ancestor of this one. Format: organizations/{organization}, folders/{folder} or projects/{project} (where {project} is the project number) |
| `params.requestBody` | `object` | Yes | The request body. |

#### `folders.contacts.compute()`

Lists all contacts for the resource that are subscribed to the specified notification categories, including contacts inherited from any parent resources.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the resource to compute contacts for. Format: organizations/{organization}, folders/{folder} or projects/{project} (where {project} is the project number) |
| `params.pageSize` | `integer` | No | Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of `next_page_token` in the response indicates that more results might be available. If not specified, the default page_size is 100. |
| `params.pageToken` | `string` | No | Optional. If present, retrieves the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of other method parameters should be identical to those in the previous call. |
| `params.notificationCategories` | `string` | No | The categories of notifications to compute contacts for. If ALL is included in this list, contacts subscribed to any notification category will be returned. |

#### `folders.contacts.get()`

Gets a single contact.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the contact to retrieve. Format: organizations/{organization}/contacts/{contact}, folders/{folder}/contacts/{contact} or projects/{project}/contacts/{contact} (where {project} is the project number) |

#### `folders.contacts.create()`

Adds a new contact for a resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource to save this contact for. Format: organizations/{organization}, folders/{folder} or projects/{project} (where {project} is the project number) |
| `params.requestBody` | `object` | Yes | The request body. |