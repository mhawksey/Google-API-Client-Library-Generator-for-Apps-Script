# API Discovery Service - Apps Script Client Library

Auto-generated client library for using the **API Discovery Service (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Fri, 03 Oct 2025 08:57:05 GMT
- **Last Modified:** Fri, 03 Oct 2025 08:57:05 GMT
- **Created:** Sun, 20 Jul 2025 16:31:40 GMT



---

## API Reference

### `apis`

#### `apis.getRest()`

Retrieve the description of a particular version of an api.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.api` | `string` | Yes | The name of the API. |
| `params.version` | `string` | Yes | The version of the API. |

#### `apis.list()`

Retrieve the list of APIs supported at this endpoint.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | No | Only include APIs with the given name. |
| `params.preferred` | `boolean` | No | Return only the preferred version of an API. |