# Agent Identity Credentials API - Apps Script Client Library

Auto-generated client library for using the **Agent Identity Credentials API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 15 Nov 2026 15:26:13 GMT
- **Last Modified:** Sun, 15 Nov 2026 15:26:13 GMT
- **Created:** Sun, 15 Nov 2026 15:26:13 GMT



---

## API Reference

### `projects`

### `projects.locations`

### `projects.locations.authProviders`

### `projects.locations.authProviders.credentials`

#### `projects.locations.authProviders.credentials.retrieve()`

Retrieves authorization credentials for an auth provider, or indicates what action needs to be taken to obtain credentials. If the `token` field in the response is populated, credential retrieval was successful. If one of the fields in the `result` oneof is populated, further action is required to obtain credentials, such as redirecting the user for consent. View comments on `RetrieveCredentialsResponse` for more information.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.authProvider` | `string` | Yes | Required. The resource name of the auth provider. Format: `projects/{project}/locations/{location}/authProviders/{auth_provider}` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.authProviders.credentials.finalize()`

Finalizes the credentials after a successful consent flow.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.authProvider` | `string` | Yes | Required. The resource name of the auth provider. Format: `projects/{project}/locations/{location}/authProviders/{auth_provider}` |
| `params.requestBody` | `object` | Yes | The request body. |