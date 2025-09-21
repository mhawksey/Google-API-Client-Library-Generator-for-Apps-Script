# Google Site Verification API - Apps Script Client Library

Auto-generated client library for using the **Google Site Verification API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 31 Aug 2025 23:55:05 GMT
- **Last Modified:** Mon, 04 Aug 2025 20:46:44 GMT
- **Created:** Sun, 20 Jul 2025 16:54:40 GMT



---

## API Reference

### `webResource`

#### `webResource.delete()`

Relinquish ownership of a website or domain.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.id` | `string` | Yes | The id of a verified site or domain. |

#### `webResource.get()`

Get the most current data for a website or domain.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.id` | `string` | Yes | The id of a verified site or domain. |

#### `webResource.getToken()`

Get a verification token for placing on a website or domain.

| `params.resource` | `object` | Yes | The request body. |

#### `webResource.insert()`

Attempt verification of a website or domain.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.verificationMethod` | `string` | Yes | The method to use for verifying a site or domain. |
| `params.resource` | `object` | Yes | The request body. |

#### `webResource.list()`

Get the list of your verified websites and domains.


#### `webResource.patch()`

Modify the list of owners for your website or domain. This method supports patch semantics.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.id` | `string` | Yes | The id of a verified site or domain. |
| `params.resource` | `object` | Yes | The request body. |

#### `webResource.update()`

Modify the list of owners for your website or domain.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.id` | `string` | Yes | The id of a verified site or domain. |
| `params.resource` | `object` | Yes | The request body. |