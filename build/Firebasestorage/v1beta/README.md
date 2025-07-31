# Cloud Storage for Firebase API - Apps Script Client Library

Auto-generated client library for using the **Cloud Storage for Firebase API (version: v1beta)** in Google Apps Script.

## Metadata

- **Last Checked:** Thu, 31 Jul 2025 23:35:12 GMT
- **Last Modified:** Sun, 27 Jul 2025 12:33:12 GMT
- **Created:** Sun, 20 Jul 2025 16:33:50 GMT



---

## API Reference

### `projects`

#### `projects.getDefaultBucket()`

Gets the default bucket.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the default bucket to retrieve, `projects/{project_id_or_number}/defaultBucket`. |

#### `projects.deleteDefaultBucket()`

Unlinks and deletes the default bucket.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the default bucket to delete, `projects/{project_id_or_number}/defaultBucket`. |

### `projects.buckets`

#### `projects.buckets.get()`

Gets a single linked storage bucket.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the bucket, mirrors the ID of the underlying Google Cloud Storage bucket, `projects/{project_id_or_number}/buckets/{bucket_id}`. |

#### `projects.buckets.list()`

Lists the linked storage buckets for a project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Resource name of the parent Firebase project, `projects/{project_id_or_number}`. |
| `params.pageSize` | `integer` | No | The maximum number of buckets to return. If not set, the server will use a reasonable default. |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListBuckets` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListBuckets` must match the call that provided the page token. |

#### `projects.buckets.addFirebase()`

Links a Google Cloud Storage bucket to a Firebase project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.bucket` | `string` | Yes | Required. Resource name of the bucket, mirrors the ID of the underlying Google Cloud Storage bucket, `projects/{project_id_or_number}/buckets/{bucket_id}`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.buckets.removeFirebase()`

Unlinks a linked Google Cloud Storage bucket from a Firebase project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.bucket` | `string` | Yes | Required. Resource name of the bucket, mirrors the ID of the underlying Google Cloud Storage bucket, `projects/{project_id_or_number}/buckets/{bucket_id}`. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.defaultBucket`

#### `projects.defaultBucket.create()`

Creates a Spark tier-eligible Cloud Storage bucket and links it to your Firebase project. If the default bucket already exists, this method will re-link it to your Firebase project. See https://firebase.google.com/pricing for pricing details.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource where the default bucket will be created, `projects/{project_id_or_number}`. |
| `params.resource` | `object` | Yes | The request body. |