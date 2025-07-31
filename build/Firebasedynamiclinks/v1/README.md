# Firebase Dynamic Links API - Apps Script Client Library

Auto-generated client library for using the **Firebase Dynamic Links API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Thu, 31 Jul 2025 23:34:58 GMT
- **Last Modified:** Thu, 31 Jul 2025 23:34:58 GMT
- **Created:** Sun, 20 Jul 2025 16:33:32 GMT



---

## API Reference

### `managedShortLinks`

#### `managedShortLinks.create()`

Creates a managed short Dynamic Link given either a valid long Dynamic Link or details such as Dynamic Link domain, Android and iOS app information. The created short Dynamic Link will not expire. This differs from CreateShortDynamicLink in the following ways: - The request will also contain a name for the link (non unique name for the front end). - The response must be authenticated with an auth token (generated with the admin service account). - The link will appear in the FDL list of links in the console front end. The Dynamic Link domain in the request must be owned by requester's Firebase project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

### `shortLinks`

#### `shortLinks.create()`

Creates a short Dynamic Link given either a valid long Dynamic Link or details such as Dynamic Link domain, Android and iOS app information. The created short Dynamic Link will not expire. Repeated calls with the same long Dynamic Link or Dynamic Link information will produce the same short Dynamic Link. The Dynamic Link domain in the request must be owned by requester's Firebase project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

### `v1`

#### `v1.getLinkStats()`

Fetches analytics stats of a short Dynamic Link for a given duration. Metrics include number of clicks, redirects, installs, app first opens, and app reopens.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.durationDays` | `string` | No | The span of time requested in days. |
| `params.dynamicLink` | `string` | Yes | Dynamic Link URL. e.g. https://abcd.app.goo.gl/wxyz |
| `params.sdkVersion` | `string` | No | Google SDK version. Version takes the form "$major.$minor.$patch" |

#### `v1.installAttribution()`

Get iOS strong/weak-match info for post-install attribution.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

#### `v1.reopenAttribution()`

Get iOS reopen attribution for app universal link open deeplinking.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |