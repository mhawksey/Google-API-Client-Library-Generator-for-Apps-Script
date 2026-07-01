# Web Content Publisher API - Apps Script Client Library

Auto-generated client library for using the **Web Content Publisher API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Wed, 01 Jul 2026 00:34:09 GMT
- **Last Modified:** Wed, 01 Jul 2026 00:34:09 GMT
- **Created:** Mon, 01 Jun 2026 00:24:53 GMT



---

## API Reference

### `publications`

#### `publications.checkFreeAccess()`

Checks if a user is eligible for free article access.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.httpReferrer` | `string` | No | Required. The HTTP referrer. |
| `params.uri` | `string` | No | Required. The URI of the content. |
| `params.name` | `string` | Yes | Required. The resource name of the publication. Format: publications/{publication_id} |

### `organizations`

### `organizations.publications`

#### `organizations.publications.get()`

Gets a publication.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the publication to retrieve. Format: `organizations/{organization}/publications/{publication}`. |

#### `organizations.publications.patch()`

Updates a publication.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name of the publication. Format: organizations/{organization}/publications/{publication} |
| `params.updateMask` | `string` | No | Optional. The list of fields to update. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `organizations.publications.create()`

Creates a publication.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource where this publication will be created. Format: `organizations/{organization}`. |
| `params.publicationId` | `string` | No | Optional. The unique identifier of the publication to create. If not specified, the server will generate a random publication ID. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `organizations.publications.list()`

Lists publications.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListPublications` call, to retrieve the next page. |
| `params.filter` | `string` | No | Optional. A filter expression to filter the publications returned. |
| `params.parent` | `string` | Yes | Required. The parent organization whose publications to list. Format: `organizations/{organization}`. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of publications to return. The service may return fewer than this value. If unspecified, at most 50 publications will be returned. |

### `organizations.publications.ctas`

#### `organizations.publications.ctas.get()`

Gets a CTA.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the CTA to retrieve. Format: `organizations/{organization}/publications/{publication}/ctas/{cta}`. |

#### `organizations.publications.ctas.create()`

Creates a CTA.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent publication resource where this CTA will be created. Format: `organizations/{organization}/publications/{publication}`. |
| `params.ctaId` | `string` | No | Optional. The unique identifier of the CTA to create. If not specified, the server will generate a random CTA ID. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `organizations.publications.ctas.list()`

Lists CTAs.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListCtas` call, to retrieve the next page. |
| `params.parent` | `string` | Yes | Required. The parent publication resource whose CTAs to list. Format: `organizations/{organization}/publications/{publication}`. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of CTAs to return. The service may return fewer than this value. If unspecified, at most 50 CTAs will be returned. |