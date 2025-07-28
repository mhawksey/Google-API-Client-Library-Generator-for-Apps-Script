# Firebase Cloud Messaging Data API - Apps Script Client Library

Auto-generated client library for using the **Firebase Cloud Messaging Data API (version: v1beta1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 27 Jul 2025 15:59:43 GMT
- **Last Modified:** Sun, 27 Jul 2025 12:32:31 GMT
- **Created:** Sun, 20 Jul 2025 16:32:57 GMT



---

## API Reference

### `projects`

### `projects.androidApps`

### `projects.androidApps.deliveryData`

#### `projects.androidApps.deliveryData.list()`

List aggregate delivery data for the given Android application.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The application for which to list delivery data. Format: `projects/{project_id}/androidApps/{app_id}` |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListAndroidDeliveryDataRequest` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAndroidDeliveryDataRequest` must match the call that provided the page token. |
| `params.pageSize` | `integer` | No | The maximum number of entries to return. The service may return fewer than this value. If unspecified, at most 1,000 entries will be returned. The maximum value is 10,000; values above 10,000 will be capped to 10,000. This default may change over time. |