# Security Token Service API - Apps Script Client Library

Auto-generated client library for using the **Security Token Service API (version: v1beta)** in Google Apps Script.

## Metadata

- **Last Checked:** Mon, 28 Jul 2025 22:08:09 GMT
- **Last Modified:** Sun, 27 Jul 2025 13:41:10 GMT
- **Created:** Sun, 20 Jul 2025 16:55:23 GMT



---

## API Reference

### `v1beta`

#### `v1beta.token()`

Exchanges a credential for a Google OAuth 2.0 access token. The token asserts an external identity within a workload identity pool, or it applies a Credential Access Boundary to a Google access token. When you call this method, do not send the `Authorization` HTTP header in the request. This method does not require the `Authorization` header, and using the header can cause the request to fail.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |