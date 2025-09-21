# Address Validation API - Apps Script Client Library

Auto-generated client library for using the **Address Validation API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 31 Aug 2025 23:20:56 GMT
- **Last Modified:** Mon, 04 Aug 2025 19:50:26 GMT
- **Created:** Sun, 20 Jul 2025 16:10:40 GMT



---

## API Reference

### `v1`

#### `v1.validateAddress()`

Validates an address.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

#### `v1.provideValidationFeedback()`

Feedback about the outcome of the sequence of validation attempts. This should be the last call made after a sequence of validation calls for the same address, and should be called once the transaction is concluded. This should only be sent once for the sequence of `ValidateAddress` requests needed to validate an address fully.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |