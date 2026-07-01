# Security Token Service API - Apps Script Client Library

Auto-generated client library for using the **Security Token Service API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Wed, 01 Jul 2026 00:24:48 GMT
- **Last Modified:** Wed, 01 Jul 2026 00:24:48 GMT
- **Created:** Sun, 20 Jul 2025 16:55:26 GMT



---

## API Reference

### `projects`

### `projects.locations`

### `projects.locations.workloadIdentityPools`

### `projects.locations.workloadIdentityPools.well-known`

#### `projects.locations.workloadIdentityPools.well-known.getOpenid-configuration()`

Gets the OIDC provider configuration for an agentic or managed workload identity pool following [the OIDC 1.0 discovery specification](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderConfigurationResponse). For now, only agentic system pools are supported.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the pool whose OpenID provider configuration to retrieve. Format: 'organizations/{ORGANIZATION_NUMBER}/locations/global/workloadIdentityPools/{POOL_ID}' 'projects/{PROJECT_NUMBER}/locations/global/workloadIdentityPools/{POOL_ID}' Example: 'organizations/1234/locations/global/workloadIdentityPools/agents.global.org-1234.system.id.goog' 'projects/12345678/locations/global/workloadIdentityPools/agents.global.proj-12345678.system.id.goog' |

### `projects.locations.workloadIdentityPools.openid`

#### `projects.locations.workloadIdentityPools.openid.getJwks()`

Fetches the signing keys for an agentic or managed workload identity pool and returns them in JWKs format, defined in [RFC 7517](https://tools.ietf.org/html/rfc7517). For now, only agentic system pools are supported.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the pool whose JWKS needs to be retrieved. Format: 'organizations/{ORGANIZATION_NUMBER}/locations/global/workloadIdentityPools/{POOL_ID}' 'projects/{PROJECT_NUMBER}/locations/global/workloadIdentityPools/{POOL_ID}' Example(s): 'organizations/1234/locations/global/workloadIdentityPools/agents.global.org-1234.system.id.goog' 'projects/12345678/locations/global/workloadIdentityPools/agents.global.proj-12345678.system.id.goog' |

### `v1`

#### `v1.token()`

Exchanges a credential for a Google OAuth 2.0 access token. The token asserts an external identity within an identity pool, or it applies a Credential Access Boundary to a Google access token. Note that workforce pools do not support Credential Access Boundaries. When you call this method, do not send the `Authorization` HTTP header in the request. This method does not require the `Authorization` header, and using the header can cause the request to fail.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |

### `organizations`

### `organizations.locations`

### `organizations.locations.workloadIdentityPools`

### `organizations.locations.workloadIdentityPools.well-known`

#### `organizations.locations.workloadIdentityPools.well-known.getOpenid-configuration()`

Gets the OIDC provider configuration for an agentic or managed workload identity pool following [the OIDC 1.0 discovery specification](https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderConfigurationResponse). For now, only agentic system pools are supported.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the pool whose OpenID provider configuration to retrieve. Format: 'organizations/{ORGANIZATION_NUMBER}/locations/global/workloadIdentityPools/{POOL_ID}' 'projects/{PROJECT_NUMBER}/locations/global/workloadIdentityPools/{POOL_ID}' Example: 'organizations/1234/locations/global/workloadIdentityPools/agents.global.org-1234.system.id.goog' 'projects/12345678/locations/global/workloadIdentityPools/agents.global.proj-12345678.system.id.goog' |

### `organizations.locations.workloadIdentityPools.openid`

#### `organizations.locations.workloadIdentityPools.openid.getJwks()`

Fetches the signing keys for an agentic or managed workload identity pool and returns them in JWKs format, defined in [RFC 7517](https://tools.ietf.org/html/rfc7517). For now, only agentic system pools are supported.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the pool whose JWKS needs to be retrieved. Format: 'organizations/{ORGANIZATION_NUMBER}/locations/global/workloadIdentityPools/{POOL_ID}' 'projects/{PROJECT_NUMBER}/locations/global/workloadIdentityPools/{POOL_ID}' Example(s): 'organizations/1234/locations/global/workloadIdentityPools/agents.global.org-1234.system.id.goog' 'projects/12345678/locations/global/workloadIdentityPools/agents.global.proj-12345678.system.id.goog' |