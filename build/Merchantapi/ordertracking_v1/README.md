# Merchant API - Apps Script Client Library

Auto-generated client library for using the **Merchant API (version: ordertracking_v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 15 Nov 2026 16:31:26 GMT
- **Last Modified:** Fri, 01 May 2026 00:07:32 GMT
- **Created:** Sun, 31 Aug 2025 23:43:54 GMT



---

## API Reference

### `accounts`

### `accounts.orderTrackingSignals`

#### `accounts.orderTrackingSignals.create()`

Creates new order tracking signal.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.orderTrackingSignalId` | `string` | No | Output only. The ID that uniquely identifies this order tracking signal. |
| `params.parent` | `string` | Yes | Required. The account of the business for which the order signal is created. Format: accounts/{account} |
| `params.requestBody` | `object` | Yes | The request body. |