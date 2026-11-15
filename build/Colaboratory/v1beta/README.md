# Colab API - Apps Script Client Library

Auto-generated client library for using the **Colab API (version: v1beta)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 15 Nov 2026 15:49:54 GMT
- **Last Modified:** Sun, 15 Nov 2026 15:49:54 GMT
- **Created:** Sun, 15 Nov 2026 15:49:54 GMT



---

## API Reference

### `runtimes`

#### `runtimes.list()`

Lists Colab runtimes assigned to the requesting user.

| Parameter | Type | Required | Description |
|---|---|---|---|

#### `runtimes.delete()`

Deletes a Colab runtime assignment. **Best Practices:** - Avoid deleting runtimes unless necessary. Reuse runtimes for efficiency. - Open a new Jupyter session on an existing runtime for state isolation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the runtime to unassign. Format: `runtimes/{runtime_id}`. |
| `params.allowMissing` | `boolean` | No | Optional. If set to `true`, and the runtime is not found, the request will succeed but no action will be taken on the server. |

#### `runtimes.get()`

Gets a Colab runtime assigned to the requesting user.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the runtime to retrieve. Format: `runtimes/{runtime_id}`. |

#### `runtimes.create()`

Creates a Colab runtime assignment. When runtime creation is refused with a [`FAILED_PRECONDITION` (code: 9)](https://github.com/googleapis/googleapis/blob/437254f595a380cd9323111700ce0fcf9d6d2c21/google/rpc/code.proto#L128) error, a more specific error reason will be returned in the details of the Operation error wrapped in google.rpc.ErrorInfo. A requests-per-minute-per-project and a requests-per-minute-per-user quota are enforced on this API. To see the exact limit your project is subject to, after you enable the Colab API, view it in your project's [Quotas & System Limits](https://console.cloud.google.com/apis/api/colaboratory.googleapis.com/quotas) page. Note that there is no usage reporting on the per-user limit and it is not overridable at the individual user level.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestId` | `string` | No | Optional. A unique identifier for this request. This request is only idempotent if a `request_id` is provided. See [AIP-155](https://google.aip.dev/155) for more details. If provided, the request ID must be in UUID4 format per https://linter.aip.dev/155/request-id-format. |
| `params.runtimeId` | `string` | No | Optional. A unique identifier for the runtime. If not supplied, a random ID will be generated. If a runtime with the given ID owned by the requesting user already exists, a completed Operation with an [`ALREADY_EXISTS` (code: 6)](https://github.com/googleapis/googleapis/blob/437254f595a380cd9323111700ce0fcf9d6d2c21/google/rpc/code.proto#L84) error will be returned. See [AIP-133](https://google.aip.dev/133#user-specified-ids) for more details. The ID must conform to [RFC-1034](https://datatracker.ietf.org/doc/html/rfc1034), specifically: - 1 to 63 characters - Lower-case letters, digits, and hyphens - Start with a letter - End with a letter or digit |
| `params.requestBody` | `object` | Yes | The request body. |

### `v1beta`

#### `v1beta.getSubscription()`

Gets the subscription of the requesting user.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the subscription to retrieve. The only valid value is "subscription". |

### `runtimespecs`

#### `runtimespecs.list()`

Lists available Colab runtime specs and their eligibility to the requesting user.

| Parameter | Type | Required | Description |
|---|---|---|---|