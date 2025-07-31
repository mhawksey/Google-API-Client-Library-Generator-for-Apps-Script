# Cloud Functions API - Apps Script Client Library

Auto-generated client library for using the **Cloud Functions API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Thu, 31 Jul 2025 23:24:31 GMT
- **Last Modified:** Sun, 27 Jul 2025 12:23:32 GMT
- **Created:** Sun, 20 Jul 2025 16:21:50 GMT



---

## API Reference

### `operations`

#### `operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | No | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

### `projects`

### `projects.locations`

#### `projects.locations.list()`

Lists information about the supported locations for this service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The resource that owns the locations collection, if applicable. |
| `params.filter` | `string` | No | A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). |
| `params.pageSize` | `integer` | No | The maximum number of results to return. If not set, the service selects a default. |
| `params.pageToken` | `string` | No | A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. |
| `params.extraLocationTypes` | `string` | No | Optional. A list of extra location types that should be used as conditions for controlling the visibility of the locations. |

### `projects.locations.functions`

#### `projects.locations.functions.list()`

Returns a list of functions that belong to the requested project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | The project and location from which the function should be listed, specified in the format `projects/*/locations/*` If you want to list functions in all locations, use "-" in place of a location. When listing functions in all locations, if one or more location(s) are unreachable, the response will contain functions from all reachable locations along with the names of any unreachable locations. |
| `params.pageSize` | `integer` | No | Maximum number of functions to return per call. |
| `params.pageToken` | `string` | No | The value returned by the last `ListFunctionsResponse`; indicates that this is a continuation of a prior `ListFunctions` call, and that the system should return the next page of data. |

#### `projects.locations.functions.get()`

Returns a function with the given name from the requested project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the function which details should be obtained. |
| `params.versionId` | `string` | No | Optional. The optional version of the function whose details should be obtained. The version of a 1st Gen function is an integer that starts from 1 and gets incremented on redeployments. Each deployment creates a config version of the underlying function. GCF may keep historical configs for old versions. This field can be specified to fetch the historical configs. Leave it blank or set to 0 to get the latest version of the function. |

#### `projects.locations.functions.create()`

Creates a new function. If a function with the given name already exists in the specified project, the long running operation will return `ALREADY_EXISTS` error.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.location` | `string` | Yes | Required. The project and location in which the function should be created, specified in the format `projects/*/locations/*` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.functions.patch()`

Updates existing function.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | A user-defined name of the function. Function names must be unique globally and match pattern `projects/*/locations/*/functions/*` |
| `params.updateMask` | `string` | No | Required. The list of fields in `CloudFunction` that have to be updated. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.functions.delete()`

Deletes a function with the given name from the specified project. If the given function is used by some trigger, the trigger will be updated to remove this function.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the function which should be deleted. |

#### `projects.locations.functions.call()`

Synchronously invokes a deployed Cloud Function. To be used for testing purposes as very limited traffic is allowed. For more information on the actual limits, refer to [Rate Limits](https://cloud.google.com/functions/quotas#rate_limits).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the function to be called. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.functions.generateUploadUrl()`

Returns a signed URL for uploading a function source code. For more information about the signed URL usage see: https://cloud.google.com/storage/docs/access-control/signed-urls. Once the function source code upload is complete, the used signed URL should be provided in CreateFunction or UpdateFunction request as a reference to the function source code. When uploading source code to the generated signed URL, please follow these restrictions:

* Source file type should be a zip file.

* Source file size should not exceed 100MB limit.

* No credentials should be attached - the signed URLs provide access to the target bucket using internal service identity; if credentials were attached, the identity from the credentials would be used, but that identity does not have permissions to upload files to the URL. When making a HTTP PUT request, these two headers need to be specified:

* `content-type: application/zip`

* `x-goog-content-length-range: 0,104857600` And this header SHOULD NOT be specified:

* `Authorization: Bearer YOUR_TOKEN`

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | The project and location in which the Google Cloud Storage signed URL should be generated, specified in the format `projects/*/locations/*`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.functions.generateDownloadUrl()`

Returns a signed URL for downloading deployed function source code. The URL is only valid for a limited period and should be used within minutes after generation. For more information about the signed URL usage see: https://cloud.google.com/storage/docs/access-control/signed-urls

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of function for which source code Google Cloud Storage signed URL should be generated. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.functions.setIamPolicy()`

Sets the IAM access control policy on the specified function. Replaces any existing policy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.functions.getIamPolicy()`

Gets the IAM access control policy for a function. Returns an empty policy if the function exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). |

#### `projects.locations.functions.testIamPermissions()`

Tests the specified permissions against the IAM access control policy for a function. If the function does not exist, this will return an empty set of permissions, not a NOT_FOUND error.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |