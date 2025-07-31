# API Discovery Service - Apps Script Client Library

Auto-generated client library for using the **API Discovery Service (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Thu, 31 Jul 2025 23:33:14 GMT
- **Last Modified:** Mon, 28 Jul 2025 21:47:04 GMT
- **Created:** Sun, 20 Jul 2025 16:31:40 GMT



---

## API Reference

### `apis`

#### `apis.list()`

Retrieve the list of APIs supported at this endpoint.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.preferred` | `boolean` | No | Return only the preferred version of an API. |
| `params.name` | `string` | No | Only include APIs with the given name. |

#### `apis.getRest()`

Retrieve the description of a particular version of an api.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.api` | `string` | Yes | The name of the API. |
| `params.version` | `string` | Yes | The version of the API. |