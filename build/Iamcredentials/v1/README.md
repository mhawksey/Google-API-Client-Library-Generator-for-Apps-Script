# IAM Service Account Credentials API - Apps Script Client Library

Auto-generated client library for using the **IAM Service Account Credentials API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 21 Sep 2025 17:27:09 GMT
- **Last Modified:** Sun, 21 Sep 2025 17:27:09 GMT
- **Created:** Sun, 20 Jul 2025 16:35:09 GMT



---

## API Reference

### `projects`

### `projects.serviceAccounts`

#### `projects.serviceAccounts.generateAccessToken()`

Generates an OAuth 2.0 access token for a service account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the service account for which the credentials are requested, in the following format: `projects/-/serviceAccounts/{ACCOUNT_EMAIL_OR_UNIQUEID}`. The `-` wildcard character is required; replacing it with a project ID is invalid. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.serviceAccounts.generateIdToken()`

Generates an OpenID Connect ID token for a service account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the service account for which the credentials are requested, in the following format: `projects/-/serviceAccounts/{ACCOUNT_EMAIL_OR_UNIQUEID}`. The `-` wildcard character is required; replacing it with a project ID is invalid. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.serviceAccounts.signBlob()`

Signs a blob using a service account's system-managed private key.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the service account for which the credentials are requested, in the following format: `projects/-/serviceAccounts/{ACCOUNT_EMAIL_OR_UNIQUEID}`. The `-` wildcard character is required; replacing it with a project ID is invalid. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.serviceAccounts.signJwt()`

Signs a JWT using a service account's system-managed private key.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the service account for which the credentials are requested, in the following format: `projects/-/serviceAccounts/{ACCOUNT_EMAIL_OR_UNIQUEID}`. The `-` wildcard character is required; replacing it with a project ID is invalid. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.serviceAccounts.getAllowedLocations()`

Returns the trust boundary info for a given service account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of service account. |

### `projects.locations`

### `projects.locations.workloadIdentityPools`

#### `projects.locations.workloadIdentityPools.getAllowedLocations()`

Returns the trust boundary info for a given workload identity pool.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of workload identity pool. |

### `locations`

### `locations.workforcePools`

#### `locations.workforcePools.getAllowedLocations()`

Returns the trust boundary info for a given workforce pool.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of workforce pool. |