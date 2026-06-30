# Gmail Postmaster Tools API - Apps Script Client Library

Auto-generated client library for using the **Gmail Postmaster Tools API (version: v2)** in Google Apps Script.

## Metadata

- **Last Checked:** Tue, 30 Jun 2026 23:55:57 GMT
- **Last Modified:** Tue, 30 Jun 2026 23:55:57 GMT
- **Created:** Wed, 18 Mar 2026 21:47:41 GMT



---

## API Reference

### `domainStats`

#### `domainStats.batchQuery()`

Executes a batch of QueryDomainStats requests for multiple domains. Returns PERMISSION_DENIED if you don't have permission to access DomainStats for any of the requested domains.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |

### `domains`

#### `domains.list()`

Retrieves a list of all domains registered by you, along with their corresponding metadata. The order of domains in the response is unspecified and non-deterministic. Newly registered domains will not necessarily be added to the end of this list.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No | Optional. Requested page size. Server may return fewer domains than requested. If unspecified, the default value for this field is 10. The maximum value for this field is 200. |
| `params.pageToken` | `string` | No | Optional. The next_page_token value returned from a previous List request, if any. |

#### `domains.delete()`

[Developer Preview](https://developers.google.com/workspace/preview): Deletes a domain from the user's account. Returns NOT_FOUND if the domain is not registered by the user.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The domain to delete. |

#### `domains.verify()`

[Developer Preview](https://developers.google.com/workspace/preview): Verifies a user's ownership of a domain at the DNS level. Note that this is distinct from checking if the user has OWNER status within IRDB.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The domain to verify. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `domains.get()`

Retrieves detailed information about a domain registered by you. Returns NOT_FOUND if the domain is not registered by you. Domain represents the metadata of a domain that has been registered within the system and linked to a user.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the domain. Format: `domains/{domain_name}`, where domain_name is the fully qualified domain name (i.e., mymail.mydomain.com). |

#### `domains.getComplianceStatus()`

Retrieves the compliance status for a given domain. Returns PERMISSION_DENIED if you don't have permission to access compliance status for the domain.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the domain's compliance status to retrieve. Format: `domains/{domain_id}/complianceStatus`. |

#### `domains.getVerificationToken()`

[Developer Preview](https://developers.google.com/workspace/preview): Gets a verification token used for verifying a user's ownership over a domain.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the verification token to retrieve. Format: `domains/{domain}/verificationToken` |
| `params.verificationMethod` | `string` | No | Required. The verification method used. Must be specified, i.e. TXT or CNAME. |

#### `domains.create()`

[Developer Preview](https://developers.google.com/workspace/preview): Adds a domain to the user's account. Returns INVALID_ARGUMENT if a domain is not provided. Returns ALREADY_EXISTS if the domain is already registered by the user.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |

### `domains.users`

#### `domains.users.create()`

[Developer Preview](https://developers.google.com/workspace/preview): Creates a user, who has access to a domain. Returns INVALID_ARGUMENT if a user is not provided.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource where this user will be created. Format: domains/{domain} |
| `params.requestBody` | `object` | Yes | The request body. |

#### `domains.users.get()`

[Developer Preview](https://developers.google.com/workspace/preview): Retrieves detailed information about a user that has access to a domain. Returns NOT_FOUND if the user does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the user to retrieve. Format: `domains/{domain}/users/{user}` |

#### `domains.users.patch()`

[Developer Preview](https://developers.google.com/workspace/preview): Updates a user for a domain. Only Owners and Admins can execute this RPC, only a user's domain permission will be allowed to be updated. Returns NOT_FOUND if the user does not exist. Returns INVALID_ARGUMENT if a permission is not provided or is PERMISSION_UNSPECIFIED, NONE, or OWNER.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.updateMask` | `string` | No | The list of fields to update. |
| `params.name` | `string` | Yes | Identifier. The resource name of the user. Format: users/{user} Note: {user} is the user's email address. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `domains.users.list()`

[Developer Preview](https://developers.google.com/workspace/preview): Lists the users that have access to a domain.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No | Optional. The next_page_token value returned from a previous List request, if any. |
| `params.pageSize` | `integer` | No | Optional. Requested page size. Server may return fewer users than requested. If unspecified, the default value for this field is 10. The maximum value for this field is 200. |
| `params.parent` | `string` | Yes | Required. The parent resource name for which to list users. Format: `domains/{domain}` |

#### `domains.users.delete()`

[Developer Preview](https://developers.google.com/workspace/preview): Deletes a user from a domain. Returns NOT_FOUND if the user does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the user to delete. Format: domains/{domain}/users/{user} |

### `domains.domainStats`

#### `domains.domainStats.query()`

Retrieves a list of domain statistics for a given domain and time period. Returns statistics only for dates where data is available. Returns PERMISSION_DENIED if you don't have permission to access DomainStats for the domain.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name where the stats are queried. Format: domains/{domain} |
| `params.requestBody` | `object` | Yes | The request body. |