# Google Site Verification API - Apps Script Client Library

Auto-generated client library for using the **Google Site Verification API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Thu, 01 Jan 2026 01:07:56 GMT
- **Last Modified:** Thu, 01 Jan 2026 01:07:56 GMT
- **Created:** Sun, 20 Jul 2025 16:54:40 GMT



---

## API Reference

### `webResource`

#### `webResource.patch()`

Modify the list of owners for your website or domain. This method supports patch semantics.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.id` | `string` | Yes | The id of a verified site or domain. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `webResource.update()`

Modify the list of owners for your website or domain.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.id` | `string` | Yes | The id of a verified site or domain. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `webResource.getToken()`

Get a verification token for placing on a website or domain.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |

#### `webResource.get()`

Get the most current data for a website or domain.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.id` | `string` | Yes | The id of a verified site or domain. |

#### `webResource.delete()`

Relinquish ownership of a website or domain.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.id` | `string` | Yes | The id of a verified site or domain. |

#### `webResource.list()`

Get the list of your verified websites and domains.


#### `webResource.insert()`

Attempt verification of a website or domain.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.verificationMethod` | `string` | Yes | The method to use for verifying a site or domain. |
| `params.requestBody` | `object` | Yes | The request body. |