# Colab API - Apps Script Client Library

Auto-generated client library for using the **Colab API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 15 Nov 2026 15:50:02 GMT
- **Last Modified:** Sun, 15 Nov 2026 15:50:02 GMT
- **Created:** Sun, 15 Nov 2026 15:50:02 GMT



---

## API Reference

### `operations`

#### `operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `operations.wait()`

Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to wait on. |
| `params.timeout` | `string` | No | The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used. |

#### `operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |