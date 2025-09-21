# Merchant API - Apps Script Client Library

Auto-generated client library for using the **Merchant API (version: ordertracking_v1beta)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 21 Sep 2025 17:34:57 GMT
- **Last Modified:** Sun, 21 Sep 2025 17:34:57 GMT
- **Created:** Sun, 20 Jul 2025 16:42:47 GMT



---

## API Reference

### `accounts`

### `accounts.orderTrackingSignals`

#### `accounts.orderTrackingSignals.create()`

Creates new order tracking signal.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The account of the business for which the order signal is created. Format: accounts/{account} |
| `params.orderTrackingSignalId` | `string` | No | Output only. The ID that uniquely identifies this order tracking signal. |
| `params.requestBody` | `object` | Yes | The request body. |