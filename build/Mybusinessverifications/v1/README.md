# My Business Verifications API - Apps Script Client Library

Auto-generated client library for using the **My Business Verifications API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sat, 01 Nov 2025 01:04:43 GMT
- **Last Modified:** Sat, 01 Nov 2025 01:04:43 GMT
- **Created:** Sun, 20 Jul 2025 16:43:43 GMT



---

## API Reference

### `locations`

#### `locations.fetchVerificationOptions()`

Reports all eligible verification options for a location in a specific language.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.location` | `string` | Yes | Required. The location to verify. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `locations.verify()`

Starts the verification process for a location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the location to verify. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `locations.getVoiceOfMerchantState()`

Gets the VoiceOfMerchant state.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the location. |

### `locations.verifications`

#### `locations.verifications.list()`

List verifications of a location, ordered by create time.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No | How many verification to include per page. Minimum is 1, and the default and maximum page size is 100. |
| `params.pageToken` | `string` | No | If specified, returns the next page of verifications. |
| `params.parent` | `string` | Yes | Required. Resource name of the location that verification requests belong to. |

#### `locations.verifications.complete()`

Completes a `PENDING` verification. It is only necessary for non `AUTO` verification methods. `AUTO` verification request is instantly `VERIFIED` upon creation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the verification to complete. |
| `params.requestBody` | `object` | Yes | The request body. |

### `verificationTokens`

#### `verificationTokens.generate()`

Generate a token for the provided location data to verify the location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |