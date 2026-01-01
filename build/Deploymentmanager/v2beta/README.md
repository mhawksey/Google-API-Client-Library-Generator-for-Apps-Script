# Cloud Deployment Manager V2 API - Apps Script Client Library

Auto-generated client library for using the **Cloud Deployment Manager V2 API (version: v2beta)** in Google Apps Script.

## Metadata

- **Last Checked:** Thu, 01 Jan 2026 00:36:13 GMT
- **Last Modified:** Thu, 01 Jan 2026 00:36:13 GMT
- **Created:** Sun, 20 Jul 2025 16:31:09 GMT



---

## API Reference

### `resources`

#### `resources.list()`

Lists all resources in a given deployment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.orderBy` | `string` | No | Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name. You can also sort results in descending order based on the creation timestamp using `orderBy="creationTimestamp desc"`. This sorts results based on the `creationTimestamp` field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first. Currently, only sorting by `name` or `creationTimestamp desc` is supported. |
| `params.pageToken` | `string` | No | Specifies a page token to use. Set `pageToken` to the `nextPageToken` returned by a previous list request to get the next page of results. |
| `params.deployment` | `string` | Yes | The name of the deployment for this request. |
| `params.maxResults` | `integer` | No | The maximum number of results per page that should be returned. If the number of available results is larger than `maxResults`, Compute Engine returns a `nextPageToken` that can be used to get the next page of results in subsequent list requests. Acceptable values are `0` to `500`, inclusive. (Default: `500`) |
| `params.project` | `string` | Yes | The project ID for this request. |
| `params.filter` | `string` | No | A filter expression that filters resources listed in the response. Most Compute resources support two types of filter expressions: expressions that support regular expressions and expressions that follow API improvement proposal AIP-160. These two types of filter expressions cannot be mixed in one request. If you want to use AIP-160, your expression must specify the field name, an operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The operator must be either `=`, `!=`, `>`, `<`, `<=`, `>=` or `:`. For example, if you are filtering Compute Engine instances, you can exclude instances named `example-instance` by specifying `name != example-instance`. The `:*` comparison can be used to test whether a key has been defined. For example, to find all objects with `owner` label use: ``` labels.owner:* ``` You can also filter nested fields. For example, you could specify `scheduling.automaticRestart = false` to include instances only if they are not scheduled for automatic restarts. You can use filtering on nested fields to filter based on resource labels. To filter on multiple expressions, provide each separate expression within parentheses. For example: ``` (scheduling.automaticRestart = true) (cpuPlatform = "Intel Skylake") ``` By default, each expression is an `AND` expression. However, you can include `AND` and `OR` expressions explicitly. For example: ``` (cpuPlatform = "Intel Skylake") OR (cpuPlatform = "Intel Broadwell") AND (scheduling.automaticRestart = true) ``` If you want to use a regular expression, use the `eq` (equal) or `ne` (not equal) operator against a single un-parenthesized expression with or without quotes or against multiple parenthesized expressions. Examples: `fieldname eq unquoted literal` `fieldname eq 'single quoted literal'` `fieldname eq "double quoted literal"` `(fieldname1 eq literal) (fieldname2 ne "literal")` The literal value is interpreted as a regular expression using Google RE2 library syntax. The literal value must match the entire field. For example, to filter for instances that do not end with name "instance", you would use `name ne .*instance`. You cannot combine constraints on multiple fields using regular expressions. |

#### `resources.get()`

Gets information about a single resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | The project ID for this request. |
| `params.deployment` | `string` | Yes | The name of the deployment for this request. |
| `params.header.bypassBillingFilter` | `boolean` | No |  |
| `params.resource` | `string` | Yes | The name of the resource for this request. |

### `manifests`

#### `manifests.get()`

Gets information about a specific manifest.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | The project ID for this request. |
| `params.manifest` | `string` | Yes | The name of the manifest for this request. |
| `params.header.bypassBillingFilter` | `boolean` | No |  |
| `params.deployment` | `string` | Yes | The name of the deployment for this request. |

#### `manifests.list()`

Lists all manifests for a given deployment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No | Specifies a page token to use. Set `pageToken` to the `nextPageToken` returned by a previous list request to get the next page of results. |
| `params.filter` | `string` | No | A filter expression that filters resources listed in the response. Most Compute resources support two types of filter expressions: expressions that support regular expressions and expressions that follow API improvement proposal AIP-160. These two types of filter expressions cannot be mixed in one request. If you want to use AIP-160, your expression must specify the field name, an operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The operator must be either `=`, `!=`, `>`, `<`, `<=`, `>=` or `:`. For example, if you are filtering Compute Engine instances, you can exclude instances named `example-instance` by specifying `name != example-instance`. The `:*` comparison can be used to test whether a key has been defined. For example, to find all objects with `owner` label use: ``` labels.owner:* ``` You can also filter nested fields. For example, you could specify `scheduling.automaticRestart = false` to include instances only if they are not scheduled for automatic restarts. You can use filtering on nested fields to filter based on resource labels. To filter on multiple expressions, provide each separate expression within parentheses. For example: ``` (scheduling.automaticRestart = true) (cpuPlatform = "Intel Skylake") ``` By default, each expression is an `AND` expression. However, you can include `AND` and `OR` expressions explicitly. For example: ``` (cpuPlatform = "Intel Skylake") OR (cpuPlatform = "Intel Broadwell") AND (scheduling.automaticRestart = true) ``` If you want to use a regular expression, use the `eq` (equal) or `ne` (not equal) operator against a single un-parenthesized expression with or without quotes or against multiple parenthesized expressions. Examples: `fieldname eq unquoted literal` `fieldname eq 'single quoted literal'` `fieldname eq "double quoted literal"` `(fieldname1 eq literal) (fieldname2 ne "literal")` The literal value is interpreted as a regular expression using Google RE2 library syntax. The literal value must match the entire field. For example, to filter for instances that do not end with name "instance", you would use `name ne .*instance`. You cannot combine constraints on multiple fields using regular expressions. |
| `params.orderBy` | `string` | No | Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name. You can also sort results in descending order based on the creation timestamp using `orderBy="creationTimestamp desc"`. This sorts results based on the `creationTimestamp` field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first. Currently, only sorting by `name` or `creationTimestamp desc` is supported. |
| `params.maxResults` | `integer` | No | The maximum number of results per page that should be returned. If the number of available results is larger than `maxResults`, Compute Engine returns a `nextPageToken` that can be used to get the next page of results in subsequent list requests. Acceptable values are `0` to `500`, inclusive. (Default: `500`) |
| `params.deployment` | `string` | Yes | The name of the deployment for this request. |
| `params.project` | `string` | Yes | The project ID for this request. |

### `operations`

#### `operations.list()`

Lists all operations for a project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | The project ID for this request. |
| `params.orderBy` | `string` | No | Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name. You can also sort results in descending order based on the creation timestamp using `orderBy="creationTimestamp desc"`. This sorts results based on the `creationTimestamp` field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first. Currently, only sorting by `name` or `creationTimestamp desc` is supported. |
| `params.filter` | `string` | No | A filter expression that filters resources listed in the response. Most Compute resources support two types of filter expressions: expressions that support regular expressions and expressions that follow API improvement proposal AIP-160. These two types of filter expressions cannot be mixed in one request. If you want to use AIP-160, your expression must specify the field name, an operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The operator must be either `=`, `!=`, `>`, `<`, `<=`, `>=` or `:`. For example, if you are filtering Compute Engine instances, you can exclude instances named `example-instance` by specifying `name != example-instance`. The `:*` comparison can be used to test whether a key has been defined. For example, to find all objects with `owner` label use: ``` labels.owner:* ``` You can also filter nested fields. For example, you could specify `scheduling.automaticRestart = false` to include instances only if they are not scheduled for automatic restarts. You can use filtering on nested fields to filter based on resource labels. To filter on multiple expressions, provide each separate expression within parentheses. For example: ``` (scheduling.automaticRestart = true) (cpuPlatform = "Intel Skylake") ``` By default, each expression is an `AND` expression. However, you can include `AND` and `OR` expressions explicitly. For example: ``` (cpuPlatform = "Intel Skylake") OR (cpuPlatform = "Intel Broadwell") AND (scheduling.automaticRestart = true) ``` If you want to use a regular expression, use the `eq` (equal) or `ne` (not equal) operator against a single un-parenthesized expression with or without quotes or against multiple parenthesized expressions. Examples: `fieldname eq unquoted literal` `fieldname eq 'single quoted literal'` `fieldname eq "double quoted literal"` `(fieldname1 eq literal) (fieldname2 ne "literal")` The literal value is interpreted as a regular expression using Google RE2 library syntax. The literal value must match the entire field. For example, to filter for instances that do not end with name "instance", you would use `name ne .*instance`. You cannot combine constraints on multiple fields using regular expressions. |
| `params.maxResults` | `integer` | No | The maximum number of results per page that should be returned. If the number of available results is larger than `maxResults`, Compute Engine returns a `nextPageToken` that can be used to get the next page of results in subsequent list requests. Acceptable values are `0` to `500`, inclusive. (Default: `500`) |
| `params.pageToken` | `string` | No | Specifies a page token to use. Set `pageToken` to the `nextPageToken` returned by a previous list request to get the next page of results. |

#### `operations.get()`

Gets information about a specific operation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.header.bypassBillingFilter` | `boolean` | No |  |
| `params.operation` | `string` | Yes | The name of the operation for this request. |
| `params.project` | `string` | Yes | The project ID for this request. |

### `types`

#### `types.list()`

Lists all resource types for Deployment Manager.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.maxResults` | `integer` | No | The maximum number of results per page that should be returned. If the number of available results is larger than `maxResults`, Compute Engine returns a `nextPageToken` that can be used to get the next page of results in subsequent list requests. Acceptable values are `0` to `500`, inclusive. (Default: `500`) |
| `params.project` | `string` | Yes | The project ID for this request. |
| `params.filter` | `string` | No | A filter expression that filters resources listed in the response. Most Compute resources support two types of filter expressions: expressions that support regular expressions and expressions that follow API improvement proposal AIP-160. These two types of filter expressions cannot be mixed in one request. If you want to use AIP-160, your expression must specify the field name, an operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The operator must be either `=`, `!=`, `>`, `<`, `<=`, `>=` or `:`. For example, if you are filtering Compute Engine instances, you can exclude instances named `example-instance` by specifying `name != example-instance`. The `:*` comparison can be used to test whether a key has been defined. For example, to find all objects with `owner` label use: ``` labels.owner:* ``` You can also filter nested fields. For example, you could specify `scheduling.automaticRestart = false` to include instances only if they are not scheduled for automatic restarts. You can use filtering on nested fields to filter based on resource labels. To filter on multiple expressions, provide each separate expression within parentheses. For example: ``` (scheduling.automaticRestart = true) (cpuPlatform = "Intel Skylake") ``` By default, each expression is an `AND` expression. However, you can include `AND` and `OR` expressions explicitly. For example: ``` (cpuPlatform = "Intel Skylake") OR (cpuPlatform = "Intel Broadwell") AND (scheduling.automaticRestart = true) ``` If you want to use a regular expression, use the `eq` (equal) or `ne` (not equal) operator against a single un-parenthesized expression with or without quotes or against multiple parenthesized expressions. Examples: `fieldname eq unquoted literal` `fieldname eq 'single quoted literal'` `fieldname eq "double quoted literal"` `(fieldname1 eq literal) (fieldname2 ne "literal")` The literal value is interpreted as a regular expression using Google RE2 library syntax. The literal value must match the entire field. For example, to filter for instances that do not end with name "instance", you would use `name ne .*instance`. You cannot combine constraints on multiple fields using regular expressions. |
| `params.pageToken` | `string` | No | Specifies a page token to use. Set `pageToken` to the `nextPageToken` returned by a previous list request to get the next page of results. |
| `params.orderBy` | `string` | No | Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name. You can also sort results in descending order based on the creation timestamp using `orderBy="creationTimestamp desc"`. This sorts results based on the `creationTimestamp` field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first. Currently, only sorting by `name` or `creationTimestamp desc` is supported. |

### `typeProviders`

#### `typeProviders.listTypes()`

Lists all the type info for a TypeProvider.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.typeProvider` | `string` | Yes | The name of the type provider for this request. |
| `params.maxResults` | `integer` | No | The maximum number of results per page that should be returned. If the number of available results is larger than `maxResults`, Compute Engine returns a `nextPageToken` that can be used to get the next page of results in subsequent list requests. Acceptable values are `0` to `500`, inclusive. (Default: `500`) |
| `params.orderBy` | `string` | No | Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name. You can also sort results in descending order based on the creation timestamp using `orderBy="creationTimestamp desc"`. This sorts results based on the `creationTimestamp` field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first. Currently, only sorting by `name` or `creationTimestamp desc` is supported. |
| `params.filter` | `string` | No | A filter expression that filters resources listed in the response. Most Compute resources support two types of filter expressions: expressions that support regular expressions and expressions that follow API improvement proposal AIP-160. These two types of filter expressions cannot be mixed in one request. If you want to use AIP-160, your expression must specify the field name, an operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The operator must be either `=`, `!=`, `>`, `<`, `<=`, `>=` or `:`. For example, if you are filtering Compute Engine instances, you can exclude instances named `example-instance` by specifying `name != example-instance`. The `:*` comparison can be used to test whether a key has been defined. For example, to find all objects with `owner` label use: ``` labels.owner:* ``` You can also filter nested fields. For example, you could specify `scheduling.automaticRestart = false` to include instances only if they are not scheduled for automatic restarts. You can use filtering on nested fields to filter based on resource labels. To filter on multiple expressions, provide each separate expression within parentheses. For example: ``` (scheduling.automaticRestart = true) (cpuPlatform = "Intel Skylake") ``` By default, each expression is an `AND` expression. However, you can include `AND` and `OR` expressions explicitly. For example: ``` (cpuPlatform = "Intel Skylake") OR (cpuPlatform = "Intel Broadwell") AND (scheduling.automaticRestart = true) ``` If you want to use a regular expression, use the `eq` (equal) or `ne` (not equal) operator against a single un-parenthesized expression with or without quotes or against multiple parenthesized expressions. Examples: `fieldname eq unquoted literal` `fieldname eq 'single quoted literal'` `fieldname eq "double quoted literal"` `(fieldname1 eq literal) (fieldname2 ne "literal")` The literal value is interpreted as a regular expression using Google RE2 library syntax. The literal value must match the entire field. For example, to filter for instances that do not end with name "instance", you would use `name ne .*instance`. You cannot combine constraints on multiple fields using regular expressions. |
| `params.project` | `string` | Yes | The project ID for this request. |
| `params.pageToken` | `string` | No | Specifies a page token to use. Set `pageToken` to the `nextPageToken` returned by a previous list request to get the next page of results. |

#### `typeProviders.insert()`

Creates a type provider.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.header.bypassBillingFilter` | `boolean` | No |  |
| `params.project` | `string` | Yes | The project ID for this request. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `typeProviders.delete()`

Deletes a type provider.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.typeProvider` | `string` | Yes | The name of the type provider for this request. |
| `params.project` | `string` | Yes | The project ID for this request. |
| `params.header.bypassBillingFilter` | `boolean` | No |  |

#### `typeProviders.getType()`

Gets a type info for a type provided by a TypeProvider.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.type` | `string` | Yes | The name of the type provider type for this request. |
| `params.typeProvider` | `string` | Yes | The name of the type provider for this request. |
| `params.project` | `string` | Yes | The project ID for this request. |
| `params.header.bypassBillingFilter` | `boolean` | No |  |

#### `typeProviders.list()`

Lists all resource type providers for Deployment Manager.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | The project ID for this request. |
| `params.filter` | `string` | No | A filter expression that filters resources listed in the response. Most Compute resources support two types of filter expressions: expressions that support regular expressions and expressions that follow API improvement proposal AIP-160. These two types of filter expressions cannot be mixed in one request. If you want to use AIP-160, your expression must specify the field name, an operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The operator must be either `=`, `!=`, `>`, `<`, `<=`, `>=` or `:`. For example, if you are filtering Compute Engine instances, you can exclude instances named `example-instance` by specifying `name != example-instance`. The `:*` comparison can be used to test whether a key has been defined. For example, to find all objects with `owner` label use: ``` labels.owner:* ``` You can also filter nested fields. For example, you could specify `scheduling.automaticRestart = false` to include instances only if they are not scheduled for automatic restarts. You can use filtering on nested fields to filter based on resource labels. To filter on multiple expressions, provide each separate expression within parentheses. For example: ``` (scheduling.automaticRestart = true) (cpuPlatform = "Intel Skylake") ``` By default, each expression is an `AND` expression. However, you can include `AND` and `OR` expressions explicitly. For example: ``` (cpuPlatform = "Intel Skylake") OR (cpuPlatform = "Intel Broadwell") AND (scheduling.automaticRestart = true) ``` If you want to use a regular expression, use the `eq` (equal) or `ne` (not equal) operator against a single un-parenthesized expression with or without quotes or against multiple parenthesized expressions. Examples: `fieldname eq unquoted literal` `fieldname eq 'single quoted literal'` `fieldname eq "double quoted literal"` `(fieldname1 eq literal) (fieldname2 ne "literal")` The literal value is interpreted as a regular expression using Google RE2 library syntax. The literal value must match the entire field. For example, to filter for instances that do not end with name "instance", you would use `name ne .*instance`. You cannot combine constraints on multiple fields using regular expressions. |
| `params.pageToken` | `string` | No | Specifies a page token to use. Set `pageToken` to the `nextPageToken` returned by a previous list request to get the next page of results. |
| `params.orderBy` | `string` | No | Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name. You can also sort results in descending order based on the creation timestamp using `orderBy="creationTimestamp desc"`. This sorts results based on the `creationTimestamp` field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first. Currently, only sorting by `name` or `creationTimestamp desc` is supported. |
| `params.maxResults` | `integer` | No | The maximum number of results per page that should be returned. If the number of available results is larger than `maxResults`, Compute Engine returns a `nextPageToken` that can be used to get the next page of results in subsequent list requests. Acceptable values are `0` to `500`, inclusive. (Default: `500`) |

#### `typeProviders.patch()`

Patches a type provider.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | The project ID for this request. |
| `params.typeProvider` | `string` | Yes | The name of the type provider for this request. |
| `params.header.bypassBillingFilter` | `boolean` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `typeProviders.get()`

Gets information about a specific type provider.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.typeProvider` | `string` | Yes | The name of the type provider for this request. |
| `params.project` | `string` | Yes | The project ID for this request. |
| `params.header.bypassBillingFilter` | `boolean` | No |  |

#### `typeProviders.update()`

Updates a type provider.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | The project ID for this request. |
| `params.typeProvider` | `string` | Yes | The name of the type provider for this request. |
| `params.header.bypassBillingFilter` | `boolean` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

### `deployments`

#### `deployments.getIamPolicy()`

Gets the access control policy for a resource. May be empty if no such policy or resource exists.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | Name or id of the resource for this request. |
| `params.optionsRequestedPolicyVersion` | `integer` | No | Requested IAM Policy version. |
| `params.header.bypassBillingFilter` | `boolean` | No |  |
| `params.project` | `string` | Yes | Project ID for this request. |

#### `deployments.patch()`

Patches a deployment and all of the resources described by the deployment manifest.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.deployment` | `string` | Yes | The name of the deployment for this request. |
| `params.project` | `string` | Yes | The project ID for this request. |
| `params.preview` | `boolean` | No | If set to true, updates the deployment and creates and updates the "shell" resources but does not actually alter or instantiate these resources. This allows you to preview what your deployment will look like. You can use this intent to preview how an update would affect your deployment. You must provide a `target.config` with a configuration if this is set to true. After previewing a deployment, you can deploy your resources by making a request with the `update()` or you can `cancelPreview()` to remove the preview altogether. Note that the deployment will still exist after you cancel the preview and you must separately delete this deployment if you want to remove it. |
| `params.header.bypassBillingFilter` | `boolean` | No |  |
| `params.createPolicy` | `string` | No | Sets the policy to use for creating new resources. |
| `params.deletePolicy` | `string` | No | Sets the policy to use for deleting resources. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `deployments.stop()`

Stops an ongoing operation. This does not roll back any work that has already been completed, but prevents any new work from being started.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.deployment` | `string` | Yes | The name of the deployment for this request. |
| `params.project` | `string` | Yes | The project ID for this request. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `deployments.update()`

Updates a deployment and all of the resources described by the deployment manifest.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.preview` | `boolean` | No | If set to true, updates the deployment and creates and updates the "shell" resources but does not actually alter or instantiate these resources. This allows you to preview what your deployment will look like. You can use this intent to preview how an update would affect your deployment. You must provide a `target.config` with a configuration if this is set to true. After previewing a deployment, you can deploy your resources by making a request with the `update()` or you can `cancelPreview()` to remove the preview altogether. Note that the deployment will still exist after you cancel the preview and you must separately delete this deployment if you want to remove it. |
| `params.header.bypassBillingFilter` | `boolean` | No |  |
| `params.deployment` | `string` | Yes | The name of the deployment for this request. |
| `params.deletePolicy` | `string` | No | Sets the policy to use for deleting resources. |
| `params.createPolicy` | `string` | No | Sets the policy to use for creating new resources. |
| `params.project` | `string` | Yes | The project ID for this request. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `deployments.testIamPermissions()`

Returns permissions that a caller has on the specified resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | Name or id of the resource for this request. |
| `params.project` | `string` | Yes | Project ID for this request. |
| `params.header.bypassBillingFilter` | `boolean` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `deployments.insert()`

Creates a deployment and all of the resources described by the deployment manifest.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.preview` | `boolean` | No | If set to true, creates a deployment and creates "shell" resources but does not actually instantiate these resources. This allows you to preview what your deployment looks like. After previewing a deployment, you can deploy your resources by making a request with the `update()` method or you can use the `cancelPreview()` method to cancel the preview altogether. Note that the deployment will still exist after you cancel the preview and you must separately delete this deployment if you want to remove it. |
| `params.header.bypassBillingFilter` | `boolean` | No |  |
| `params.createPolicy` | `string` | No | Sets the policy to use for creating new resources. |
| `params.project` | `string` | Yes | The project ID for this request. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `deployments.get()`

Gets information about a specific deployment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.header.bypassBillingFilter` | `boolean` | No |  |
| `params.deployment` | `string` | Yes | The name of the deployment for this request. |
| `params.project` | `string` | Yes | The project ID for this request. |

#### `deployments.delete()`

Deletes a deployment and all of the resources in the deployment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.deletePolicy` | `string` | No | Sets the policy to use for deleting resources. |
| `params.deployment` | `string` | Yes | The name of the deployment for this request. |
| `params.project` | `string` | Yes | The project ID for this request. |
| `params.header.bypassBillingFilter` | `boolean` | No |  |

#### `deployments.list()`

Lists all deployments for a given project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.filter` | `string` | No | A filter expression that filters resources listed in the response. Most Compute resources support two types of filter expressions: expressions that support regular expressions and expressions that follow API improvement proposal AIP-160. These two types of filter expressions cannot be mixed in one request. If you want to use AIP-160, your expression must specify the field name, an operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The operator must be either `=`, `!=`, `>`, `<`, `<=`, `>=` or `:`. For example, if you are filtering Compute Engine instances, you can exclude instances named `example-instance` by specifying `name != example-instance`. The `:*` comparison can be used to test whether a key has been defined. For example, to find all objects with `owner` label use: ``` labels.owner:* ``` You can also filter nested fields. For example, you could specify `scheduling.automaticRestart = false` to include instances only if they are not scheduled for automatic restarts. You can use filtering on nested fields to filter based on resource labels. To filter on multiple expressions, provide each separate expression within parentheses. For example: ``` (scheduling.automaticRestart = true) (cpuPlatform = "Intel Skylake") ``` By default, each expression is an `AND` expression. However, you can include `AND` and `OR` expressions explicitly. For example: ``` (cpuPlatform = "Intel Skylake") OR (cpuPlatform = "Intel Broadwell") AND (scheduling.automaticRestart = true) ``` If you want to use a regular expression, use the `eq` (equal) or `ne` (not equal) operator against a single un-parenthesized expression with or without quotes or against multiple parenthesized expressions. Examples: `fieldname eq unquoted literal` `fieldname eq 'single quoted literal'` `fieldname eq "double quoted literal"` `(fieldname1 eq literal) (fieldname2 ne "literal")` The literal value is interpreted as a regular expression using Google RE2 library syntax. The literal value must match the entire field. For example, to filter for instances that do not end with name "instance", you would use `name ne .*instance`. You cannot combine constraints on multiple fields using regular expressions. |
| `params.pageToken` | `string` | No | Specifies a page token to use. Set `pageToken` to the `nextPageToken` returned by a previous list request to get the next page of results. |
| `params.maxResults` | `integer` | No | The maximum number of results per page that should be returned. If the number of available results is larger than `maxResults`, Compute Engine returns a `nextPageToken` that can be used to get the next page of results in subsequent list requests. Acceptable values are `0` to `500`, inclusive. (Default: `500`) |
| `params.project` | `string` | Yes | The project ID for this request. |
| `params.orderBy` | `string` | No | Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name. You can also sort results in descending order based on the creation timestamp using `orderBy="creationTimestamp desc"`. This sorts results based on the `creationTimestamp` field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first. Currently, only sorting by `name` or `creationTimestamp desc` is supported. |

#### `deployments.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | Name or id of the resource for this request. |
| `params.project` | `string` | Yes | Project ID for this request. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `deployments.cancelPreview()`

Cancels and removes the preview currently associated with the deployment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.deployment` | `string` | Yes | The name of the deployment for this request. |
| `params.project` | `string` | Yes | The project ID for this request. |
| `params.requestBody` | `object` | Yes | The request body. |

### `compositeTypes`

#### `compositeTypes.patch()`

Patches a composite type.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | The project ID for this request. |
| `params.compositeType` | `string` | Yes | The name of the composite type for this request. |
| `params.header.bypassBillingFilter` | `boolean` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |

#### `compositeTypes.delete()`

Deletes a composite type.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.compositeType` | `string` | Yes | The name of the type for this request. |
| `params.header.bypassBillingFilter` | `boolean` | No |  |
| `params.project` | `string` | Yes | The project ID for this request. |

#### `compositeTypes.get()`

Gets information about a specific composite type.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.header.bypassBillingFilter` | `boolean` | No |  |
| `params.project` | `string` | Yes | The project ID for this request. |
| `params.compositeType` | `string` | Yes | The name of the composite type for this request. |

#### `compositeTypes.update()`

Updates a composite type.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | The project ID for this request. |
| `params.header.bypassBillingFilter` | `boolean` | No |  |
| `params.compositeType` | `string` | Yes | The name of the composite type for this request. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `compositeTypes.list()`

Lists all composite types for Deployment Manager.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.maxResults` | `integer` | No | The maximum number of results per page that should be returned. If the number of available results is larger than `maxResults`, Compute Engine returns a `nextPageToken` that can be used to get the next page of results in subsequent list requests. Acceptable values are `0` to `500`, inclusive. (Default: `500`) |
| `params.orderBy` | `string` | No | Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name. You can also sort results in descending order based on the creation timestamp using `orderBy="creationTimestamp desc"`. This sorts results based on the `creationTimestamp` field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first. Currently, only sorting by `name` or `creationTimestamp desc` is supported. |
| `params.project` | `string` | Yes | The project ID for this request. |
| `params.pageToken` | `string` | No | Specifies a page token to use. Set `pageToken` to the `nextPageToken` returned by a previous list request to get the next page of results. |
| `params.filter` | `string` | No | A filter expression that filters resources listed in the response. Most Compute resources support two types of filter expressions: expressions that support regular expressions and expressions that follow API improvement proposal AIP-160. These two types of filter expressions cannot be mixed in one request. If you want to use AIP-160, your expression must specify the field name, an operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The operator must be either `=`, `!=`, `>`, `<`, `<=`, `>=` or `:`. For example, if you are filtering Compute Engine instances, you can exclude instances named `example-instance` by specifying `name != example-instance`. The `:*` comparison can be used to test whether a key has been defined. For example, to find all objects with `owner` label use: ``` labels.owner:* ``` You can also filter nested fields. For example, you could specify `scheduling.automaticRestart = false` to include instances only if they are not scheduled for automatic restarts. You can use filtering on nested fields to filter based on resource labels. To filter on multiple expressions, provide each separate expression within parentheses. For example: ``` (scheduling.automaticRestart = true) (cpuPlatform = "Intel Skylake") ``` By default, each expression is an `AND` expression. However, you can include `AND` and `OR` expressions explicitly. For example: ``` (cpuPlatform = "Intel Skylake") OR (cpuPlatform = "Intel Broadwell") AND (scheduling.automaticRestart = true) ``` If you want to use a regular expression, use the `eq` (equal) or `ne` (not equal) operator against a single un-parenthesized expression with or without quotes or against multiple parenthesized expressions. Examples: `fieldname eq unquoted literal` `fieldname eq 'single quoted literal'` `fieldname eq "double quoted literal"` `(fieldname1 eq literal) (fieldname2 ne "literal")` The literal value is interpreted as a regular expression using Google RE2 library syntax. The literal value must match the entire field. For example, to filter for instances that do not end with name "instance", you would use `name ne .*instance`. You cannot combine constraints on multiple fields using regular expressions. |

#### `compositeTypes.insert()`

Creates a composite type.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | The project ID for this request. |
| `params.header.bypassBillingFilter` | `boolean` | No |  |
| `params.requestBody` | `object` | Yes | The request body. |