# Cloud Profiler API - Apps Script Client Library

Auto-generated client library for using the **Cloud Profiler API (version: v2)** in Google Apps Script.

## Metadata

- **Last Checked:** Mon, 28 Jul 2025 21:43:32 GMT
- **Last Modified:** Sun, 27 Jul 2025 12:23:45 GMT
- **Created:** Sun, 20 Jul 2025 16:22:13 GMT



---

## API Reference

### `projects`

### `projects.profiles`

#### `projects.profiles.create()`

CreateProfile creates a new profile resource in the online mode. _Direct use of this API is discouraged, please use a [supported profiler agent](https://cloud.google.com/profiler/docs/about-profiler#profiling_agent) instead for profile collection._ The server ensures that the new profiles are created at a constant rate per deployment, so the creation request may hang for some time until the next profile session is available. The request may fail with ABORTED error if the creation is not available within ~1m, the response will indicate the duration of the backoff the client should take before attempting creating a profile again. The backoff duration is returned in google.rpc.RetryInfo extension on the response status. To a gRPC client, the extension will be return as a binary-serialized proto in the trailing metadata item named "google.rpc.retryinfo-bin". 

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Parent project to create the profile in. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.profiles.createOffline()`

CreateOfflineProfile creates a new profile resource in the offline mode. The client provides the profile to create along with the profile bytes, the server records it. _Direct use of this API is discouraged, please use a [supported profiler agent](https://cloud.google.com/profiler/docs/about-profiler#profiling_agent) instead for profile collection._

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Parent project to create the profile in. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.profiles.patch()`

UpdateProfile updates the profile bytes and labels on the profile resource created in the online mode. Updating the bytes for profiles created in the offline mode is currently not supported: the profile content must be provided at the time of the profile creation. _Direct use of this API is discouraged, please use a [supported profiler agent](https://cloud.google.com/profiler/docs/about-profiler#profiling_agent) instead for profile collection._

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. Opaque, server-assigned, unique ID for this profile. |
| `params.updateMask` | `string` | No | Field mask used to specify the fields to be overwritten. Currently only profile_bytes and labels fields are supported by UpdateProfile, so only those fields can be specified in the mask. When no mask is provided, all fields are overwritten. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.profiles.list()`

Lists profiles which have been collected so far and for which the caller has permission to view.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent, which owns this collection of profiles. Format: projects/{user_project_id} |
| `params.pageSize` | `integer` | No | Optional. The maximum number of items to return. Default page_size is 1000. Max limit is 1000. |
| `params.pageToken` | `string` | No | Optional. The token to continue pagination and get profiles from a particular page. When paginating, all other parameters provided to `ListProfiles` must match the call that provided the page token. |