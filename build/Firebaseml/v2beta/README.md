# Firebase ML API - Apps Script Client Library

Auto-generated client library for using the **Firebase ML API (version: v2beta)** in Google Apps Script.

## Metadata

- **Last Checked:** Mon, 28 Jul 2025 21:55:04 GMT
- **Last Modified:** Sun, 27 Jul 2025 12:33:06 GMT
- **Created:** Sun, 20 Jul 2025 16:33:43 GMT



---

## API Reference

### `projects`

### `projects.locations`

### `projects.locations.publishers`

### `projects.locations.publishers.models`

#### `projects.locations.publishers.models.countTokens()`

Perform a token counting.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.endpoint` | `string` | Yes | Required. The name of the Endpoint requested to perform token counting. Format: `projects/{project}/locations/{location}/endpoints/{endpoint}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.publishers.models.generateContent()`

Generate content with multimodal inputs.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.model` | `string` | Yes | Required. The fully qualified name of the publisher model or tuned model endpoint to use. Publisher model format: `projects/{project}/locations/{location}/publishers/*/models/*` Tuned model endpoint format: `projects/{project}/locations/{location}/endpoints/{endpoint}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.publishers.models.streamGenerateContent()`

Generate content with multimodal inputs with streaming support.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.model` | `string` | Yes | Required. The fully qualified name of the publisher model or tuned model endpoint to use. Publisher model format: `projects/{project}/locations/{location}/publishers/*/models/*` Tuned model endpoint format: `projects/{project}/locations/{location}/endpoints/{endpoint}` |
| `params.resource` | `object` | Yes | The request body. |