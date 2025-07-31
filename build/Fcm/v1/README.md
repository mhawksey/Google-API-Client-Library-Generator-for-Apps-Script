# Firebase Cloud Messaging API - Apps Script Client Library

Auto-generated client library for using the **Firebase Cloud Messaging API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Thu, 31 Jul 2025 23:34:25 GMT
- **Last Modified:** Sun, 27 Jul 2025 12:32:29 GMT
- **Created:** Sun, 20 Jul 2025 16:32:54 GMT



---

## API Reference

### `projects`

### `projects.messages`

#### `projects.messages.send()`

Send a message to specified target (a registration token, topic or condition).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. It contains the Firebase project id (i.e. the unique identifier for your Firebase project), in the format of `projects/{project_id}`. The numeric project number with no padding is also supported in the format of `projects/{project_number}`. |
| `params.resource` | `object` | Yes | The request body. |