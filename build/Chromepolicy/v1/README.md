# Chrome Policy API - Apps Script Client Library

Auto-generated client library for using the **Chrome Policy API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 27 Jul 2025 15:48:48 GMT
- **Last Modified:** Sun, 27 Jul 2025 12:22:52 GMT
- **Created:** Sun, 20 Jul 2025 16:15:14 GMT



---

## API Reference

### `media`

#### `media.upload()`

Creates an enterprise file from the content provided by user. Returns a public download url for end user.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customer` | `string` | Yes | Required. The customer for which the file upload will apply. |
| `params.resource` | `object` | Yes | The request body. |

### `customers`

### `customers.policies`

#### `customers.policies.resolve()`

Gets the resolved policy values for a list of policies that match a search query.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customer` | `string` | Yes | ID of the G Suite account or literal "my_customer" for the customer associated to the request. |
| `params.resource` | `object` | Yes | The request body. |

### `customers.policies.orgunits`

#### `customers.policies.orgunits.batchModify()`

Modify multiple policy values that are applied to a specific org unit. All targets must have the same target format. That is to say that they must point to the same target resource and must have the same keys specified in `additionalTargetKeyNames`, though the values for those keys may be different. On failure the request will return the error details as part of the google.rpc.Status.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customer` | `string` | Yes | ID of the G Suite account or literal "my_customer" for the customer associated to the request. |
| `params.resource` | `object` | Yes | The request body. |

#### `customers.policies.orgunits.batchInherit()`

Modify multiple policy values that are applied to a specific org unit so that they now inherit the value from a parent (if applicable). All targets must have the same target format. That is to say that they must point to the same target resource and must have the same keys specified in `additionalTargetKeyNames`, though the values for those keys may be different. On failure the request will return the error details as part of the google.rpc.Status.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customer` | `string` | Yes | ID of the G Suite account or literal "my_customer" for the customer associated to the request. |
| `params.resource` | `object` | Yes | The request body. |

### `customers.policies.groups`

#### `customers.policies.groups.batchModify()`

Modify multiple policy values that are applied to a specific group. All targets must have the same target format. That is to say that they must point to the same target resource and must have the same keys specified in `additionalTargetKeyNames`, though the values for those keys may be different. On failure the request will return the error details as part of the google.rpc.Status.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customer` | `string` | Yes | ID of the Google Workspace account or literal "my_customer" for the customer associated to the request. |
| `params.resource` | `object` | Yes | The request body. |

#### `customers.policies.groups.batchDelete()`

Delete multiple policy values that are applied to a specific group. All targets must have the same target format. That is to say that they must point to the same target resource and must have the same keys specified in `additionalTargetKeyNames`, though the values for those keys may be different. On failure the request will return the error details as part of the google.rpc.Status.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customer` | `string` | Yes | ID of the Google Workspace account or literal "my_customer" for the customer associated to the request. |
| `params.resource` | `object` | Yes | The request body. |

#### `customers.policies.groups.listGroupPriorityOrdering()`

Retrieve a group priority ordering for an app. The target app must be supplied in `additionalTargetKeyNames` in the PolicyTargetKey. On failure the request will return the error details as part of the google.rpc.Status.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customer` | `string` | Yes | Required. ID of the Google Workspace account or literal "my_customer" for the customer associated to the request. |
| `params.resource` | `object` | Yes | The request body. |

#### `customers.policies.groups.updateGroupPriorityOrdering()`

Update a group priority ordering for an app. The target app must be supplied in `additionalTargetKeyNames` in the PolicyTargetKey. On failure the request will return the error details as part of the google.rpc.Status.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customer` | `string` | Yes | Required. ID of the Google Workspace account or literal "my_customer" for the customer associated to the request. |
| `params.resource` | `object` | Yes | The request body. |

### `customers.policies.networks`

#### `customers.policies.networks.defineCertificate()`

Creates a certificate at a specified OU for a customer.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customer` | `string` | Yes | Required. The customer for which the certificate will apply. |
| `params.resource` | `object` | Yes | The request body. |

#### `customers.policies.networks.removeCertificate()`

Remove an existing certificate by guid.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customer` | `string` | Yes | Required. The customer whose certificate will be removed. |
| `params.resource` | `object` | Yes | The request body. |

#### `customers.policies.networks.removeNetwork()`

Remove an existing network by guid.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customer` | `string` | Yes | Required. The customer whose network will be removed. |
| `params.resource` | `object` | Yes | The request body. |

#### `customers.policies.networks.defineNetwork()`

Define a new network.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customer` | `string` | Yes | Required. The customer who will own this new network. |
| `params.resource` | `object` | Yes | The request body. |

### `customers.policySchemas`

#### `customers.policySchemas.get()`

Get a specific policy schema for a customer by its resource name.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The policy schema resource name to query. |

#### `customers.policySchemas.list()`

Gets a list of policy schemas that match a specified filter value for a given customer.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The customer for which the listing request will apply. |
| `params.filter` | `string` | No | The schema filter used to find a particular schema based on fields like its resource name, description and `additionalTargetKeyNames`. |
| `params.pageSize` | `integer` | No | The maximum number of policy schemas to return, defaults to 100 and has a maximum of 1000. |
| `params.pageToken` | `string` | No | The page token used to retrieve a specific page of the listing request. |