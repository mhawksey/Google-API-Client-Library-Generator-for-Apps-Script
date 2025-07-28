# Cloud Shell API - Apps Script Client Library

Auto-generated client library for using the **Cloud Shell API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 27 Jul 2025 15:56:13 GMT
- **Last Modified:** Sun, 27 Jul 2025 12:24:04 GMT
- **Created:** Sun, 20 Jul 2025 16:22:44 GMT



---

## API Reference

### `operations`

#### `operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

#### `operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |
| `params.resource` | `object` | Yes | The request body. |

### `users`

### `users.environments`

#### `users.environments.get()`

Gets an environment. Returns NOT_FOUND if the environment does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the requested resource, for example `users/me/environments/default` or `users/someone@example.com/environments/default`. |

#### `users.environments.start()`

Starts an existing environment, allowing clients to connect to it. The returned operation will contain an instance of StartEnvironmentMetadata in its metadata field. Users can wait for the environment to start by polling this operation via GetOperation. Once the environment has finished starting and is ready to accept connections, the operation will contain a StartEnvironmentResponse in its response field.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Name of the resource that should be started, for example `users/me/environments/default` or `users/someone@example.com/environments/default`. |
| `params.resource` | `object` | Yes | The request body. |

#### `users.environments.authorize()`

Sends OAuth credentials to a running environment on behalf of a user. When this completes, the environment will be authorized to run various Google Cloud command line tools without requiring the user to manually authenticate.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Name of the resource that should receive the credentials, for example `users/me/environments/default` or `users/someone@example.com/environments/default`. |
| `params.resource` | `object` | Yes | The request body. |

#### `users.environments.addPublicKey()`

Adds a public SSH key to an environment, allowing clients with the corresponding private key to connect to that environment via SSH. If a key with the same content already exists, this will error with ALREADY_EXISTS.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.environment` | `string` | Yes | Environment this key should be added to, e.g. `users/me/environments/default`. |
| `params.resource` | `object` | Yes | The request body. |

#### `users.environments.removePublicKey()`

Removes a public SSH key from an environment. Clients will no longer be able to connect to the environment using the corresponding private key. If a key with the same content is not present, this will error with NOT_FOUND.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.environment` | `string` | Yes | Environment this key should be removed from, e.g. `users/me/environments/default`. |
| `params.resource` | `object` | Yes | The request body. |