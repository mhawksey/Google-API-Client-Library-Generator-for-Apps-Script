# Merchant API - Apps Script Client Library

Auto-generated client library for using the **Merchant API (version: ordertracking_v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sat, 01 Nov 2025 01:02:45 GMT
- **Last Modified:** Sat, 01 Nov 2025 01:02:45 GMT
- **Created:** Sun, 31 Aug 2025 23:43:54 GMT



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