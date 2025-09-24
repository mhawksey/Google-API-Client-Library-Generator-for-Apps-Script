# GKE Hub API - Apps Script Client Library

Auto-generated client library for using the **GKE Hub API (version: v2)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 21 Sep 2025 17:26:28 GMT
- **Last Modified:** Sun, 21 Sep 2025 17:26:28 GMT
- **Created:** Sun, 20 Jul 2025 16:34:34 GMT



---

## API Reference

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
| `params.extraLocationTypes` | `string` | No | Optional. Unless explicitly documented otherwise, don't use this unsupported field which is primarily intended for internal usage. |

#### `projects.locations.get()`

Gets information about a location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Resource name for the location. |

### `projects.locations.operations`

#### `projects.locations.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `projects.locations.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `projects.locations.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.memberships`

### `projects.locations.memberships.features`

#### `projects.locations.memberships.features.get()`

========= MembershipFeature Services ========= Gets details of a membershipFeature.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The MembershipFeature resource name in the format `projects/*/locations/*/memberships/*/features/*`. |

#### `projects.locations.memberships.features.list()`

Lists MembershipFeatures in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent where the MembershipFeature will be listed. In the format: `projects/*/locations/*/memberships/*`. |
| `params.pageSize` | `integer` | No | When requesting a 'page' of resources, `page_size` specifies number of resources to return. If unspecified or set to 0, all resources will be returned. |
| `params.pageToken` | `string` | No | Token returned by previous call to `ListFeatures` which specifies the position in the list from where to continue listing the resources. |
| `params.filter` | `string` | No | Lists MembershipFeatures that match the filter expression, following the syntax outlined in https://google.aip.dev/160. Examples: - Feature with the name "helloworld" in project "foo-proj" and membership "member-bar": name = "projects/foo-proj/locations/global/memberships/member-bar/features/helloworld" - Features that have a label called `foo`: labels.foo:* - Features that have a label called `foo` whose value is `bar`: labels.foo = bar |
| `params.orderBy` | `string` | No | One or more fields to compare and use to sort the output. See https://google.aip.dev/132#ordering. |

#### `projects.locations.memberships.features.create()`

Creates membershipFeature under a given parent.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of parent where the MembershipFeature will be created. Specified in the format `projects/*/locations/*/memberships/*`. |
| `params.requestId` | `string` | No | Idempotent request UUID. |
| `params.featureId` | `string` | No | Required. The ID of the membership_feature to create. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.memberships.features.delete()`

Removes a membershipFeature.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the membershipFeature to be deleted. Specified in the format `projects/*/locations/*/memberships/*/features/*`. |
| `params.requestId` | `string` | No | Idempotent request UUID. |

#### `projects.locations.memberships.features.patch()`

Updates an existing MembershipFeature.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. The resource name of the membershipFeature, in the format: `projects/{project}/locations/{location}/memberships/{membership}/features/{feature}`. Note that `membershipFeatures` is shortened to `features` in the resource name. (see http://go/aip/122#collection-identifiers) |
| `params.updateMask` | `string` | No | Required. Mask of fields to update. |
| `params.requestId` | `string` | No | Idempotent request UUID. |
| `params.allowMissing` | `boolean` | No | Optional. If set to true, and the MembershipFeature is not found, a new MembershipFeature will be created. In this situation, `update_mask` is ignored. |
| `params.requestBody` | `object` | Yes | The request body. |