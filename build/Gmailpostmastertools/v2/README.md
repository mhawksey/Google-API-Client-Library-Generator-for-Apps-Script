# Gmail Postmaster Tools API - Apps Script Client Library

Auto-generated client library for using the **Gmail Postmaster Tools API (version: v2)** in Google Apps Script.

## Metadata

- **Last Checked:** Wed, 18 Mar 2026 21:47:41 GMT
- **Last Modified:** Wed, 18 Mar 2026 21:47:41 GMT
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

#### `domains.list()`

Retrieves a list of all domains registered by you, along with their corresponding metadata. The order of domains in the response is unspecified and non-deterministic. Newly registered domains will not necessarily be added to the end of this list.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No | Optional. Requested page size. Server may return fewer domains than requested. If unspecified, the default value for this field is 10. The maximum value for this field is 200. |
| `params.pageToken` | `string` | No | Optional. The next_page_token value returned from a previous List request, if any. |

### `domains.domainStats`

#### `domains.domainStats.query()`

Retrieves a list of domain statistics for a given domain and time period. Returns statistics only for dates where data is available. Returns PERMISSION_DENIED if you don't have permission to access DomainStats for the domain.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name where the stats are queried. Format: domains/{domain} |
| `params.requestBody` | `object` | Yes | The request body. |