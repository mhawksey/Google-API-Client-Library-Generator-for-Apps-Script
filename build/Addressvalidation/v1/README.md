# Address Validation API - Apps Script Client Library

Auto-generated client library for using the **Address Validation API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Tue, 30 Sep 2025 23:20:59 GMT
- **Last Modified:** Sun, 21 Sep 2025 17:02:30 GMT
- **Created:** Sun, 20 Jul 2025 16:10:40 GMT



---

## API Reference

### `v1`

#### `v1.validateAddress()`

Validates an address.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |

#### `v1.provideValidationFeedback()`

Feedback about the outcome of the sequence of validation attempts. This should be the last call made after a sequence of validation calls for the same address, and should be called once the transaction is concluded. This should only be sent once for the sequence of `ValidateAddress` requests needed to validate an address fully.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |