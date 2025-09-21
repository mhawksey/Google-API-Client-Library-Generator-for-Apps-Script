# Security Token Service API - Apps Script Client Library

Auto-generated client library for using the **Security Token Service API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 21 Sep 2025 17:54:20 GMT
- **Last Modified:** Sun, 21 Sep 2025 17:54:20 GMT
- **Created:** Sun, 20 Jul 2025 16:55:26 GMT



---

## API Reference

### `v1`

#### `v1.token()`

Exchanges a credential for a Google OAuth 2.0 access token. The token asserts an external identity within an identity pool, or it applies a Credential Access Boundary to a Google access token. Note that workforce pools do not support Credential Access Boundaries. When you call this method, do not send the `Authorization` HTTP header in the request. This method does not require the `Authorization` header, and using the header can cause the request to fail.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |