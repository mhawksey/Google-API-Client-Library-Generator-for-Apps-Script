# Public Certificate Authority API - Apps Script Client Library

Auto-generated client library for using the **Public Certificate Authority API (version: v1beta1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sat, 01 Nov 2025 01:14:05 GMT
- **Last Modified:** Sat, 01 Nov 2025 01:14:05 GMT
- **Created:** Sun, 20 Jul 2025 16:46:43 GMT



---

## API Reference

### `projects`

### `projects.locations`

### `projects.locations.externalAccountKeys`

#### `projects.locations.externalAccountKeys.create()`

Creates a new ExternalAccountKey bound to the project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource where this external_account_key will be created. Format: projects/[project_id]/locations/[location]. At present only the "global" location is supported. |
| `params.requestBody` | `object` | Yes | The request body. |