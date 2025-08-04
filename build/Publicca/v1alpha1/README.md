# Public Certificate Authority API - Apps Script Client Library

Auto-generated client library for using the **Public Certificate Authority API (version: v1alpha1)** in Google Apps Script.

## Metadata

- **Last Checked:** Mon, 04 Aug 2025 20:43:36 GMT
- **Last Modified:** Mon, 04 Aug 2025 20:43:36 GMT
- **Created:** Sun, 20 Jul 2025 16:46:40 GMT



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
| `params.resource` | `object` | Yes | The request body. |