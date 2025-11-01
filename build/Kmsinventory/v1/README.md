# KMS Inventory API - Apps Script Client Library

Auto-generated client library for using the **KMS Inventory API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sat, 01 Nov 2025 00:54:28 GMT
- **Last Modified:** Sat, 01 Nov 2025 00:54:28 GMT
- **Created:** Sun, 20 Jul 2025 16:35:47 GMT



---

## API Reference

### `organizations`

### `organizations.protectedResources`

#### `organizations.protectedResources.search()`

Returns metadata about the resources protected by the given Cloud KMS CryptoKey in the given Cloud organization.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.cryptoKey` | `string` | No | Required. The resource name of the CryptoKey. |
| `params.pageSize` | `integer` | No | The maximum number of resources to return. The service may return fewer than this value. If unspecified, at most 500 resources will be returned. The maximum value is 500; values above 500 will be coerced to 500. |
| `params.scope` | `string` | Yes | Required. Resource name of the organization. Example: organizations/123 |
| `params.pageToken` | `string` | No | A page token, received from a previous KeyTrackingService.SearchProtectedResources call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to KeyTrackingService.SearchProtectedResources must match the call that provided the page token. |
| `params.resourceTypes` | `string` | No | Optional. A list of resource types that this request searches for. If empty, it will search all the [trackable resource types](https://cloud.google.com/kms/docs/view-key-usage#tracked-resource-types). Regular expressions are also supported. For example: * `compute.googleapis.com.*` snapshots resources whose type starts with `compute.googleapis.com`. * `.*Image` snapshots resources whose type ends with `Image`. * `.*Image.*` snapshots resources whose type contains `Image`. See [RE2](https://github.com/google/re2/wiki/Syntax) for all supported regular expression syntax. If the regular expression does not match any supported resource type, an INVALID_ARGUMENT error will be returned. |

### `projects`

### `projects.locations`

### `projects.locations.keyRings`

### `projects.locations.keyRings.cryptoKeys`

#### `projects.locations.keyRings.cryptoKeys.getProtectedResourcesSummary()`

Returns aggregate information about the resources protected by the given Cloud KMS CryptoKey. Only resources within the same Cloud organization as the key will be returned. The project that holds the key must be part of an organization in order for this call to succeed.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the CryptoKey. |

### `projects.cryptoKeys`

#### `projects.cryptoKeys.list()`

Returns cryptographic keys managed by Cloud KMS in a given Cloud project. Note that this data is sourced from snapshots, meaning it may not completely reflect the actual state of key metadata at call time.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No | Optional. The maximum number of keys to return. The service may return fewer than this value. If unspecified, at most 1000 keys will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| `params.parent` | `string` | Yes | Required. The Google Cloud project for which to retrieve key metadata, in the format `projects/*` |
| `params.pageToken` | `string` | No | Optional. Pass this into a subsequent request in order to receive the next page of results. |