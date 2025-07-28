# Payments Reseller Subscription API - Apps Script Client Library

Auto-generated client library for using the **Payments Reseller Subscription API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Mon, 28 Jul 2025 22:04:41 GMT
- **Last Modified:** Sun, 27 Jul 2025 12:43:41 GMT
- **Created:** Sun, 20 Jul 2025 16:45:08 GMT



---

## API Reference

### `partners`

### `partners.subscriptions`

#### `partners.subscriptions.create()`

Used by partners to create a subscription for their customers. The created subscription is associated with the end user inferred from the end user credentials. This API must be authorized by the end user using OAuth.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name, which is the identifier of the partner. It will have the format of "partners/{partner_id}". |
| `params.subscriptionId` | `string` | No | Required. Identifies the subscription resource on the Partner side. The value is restricted to 63 ASCII characters at the maximum. If a subscription was previously created with the same subscription_id, we will directly return that one. |
| `params.resource` | `object` | Yes | The request body. |

#### `partners.subscriptions.provision()`

Used by partners to provision a subscription for their customers. This creates a subscription without associating it with the end user account. EntitleSubscription must be called separately using OAuth in order for the end user account to be associated with the subscription. It should be called directly by the partner using service accounts.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name, which is the identifier of the partner. It will have the format of "partners/{partner_id}". |
| `params.subscriptionId` | `string` | No | Required. Identifies the subscription resource on the Partner side. The value is restricted to 63 ASCII characters at the maximum. If a subscription was previously created with the same subscription_id, we will directly return that one. |
| `params.resource` | `object` | Yes | The request body. |

#### `partners.subscriptions.get()`

Gets a subscription by id. It should be called directly by the partner using service accounts.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the subscription resource to retrieve. It will have the format of "partners/{partner_id}/subscriptions/{subscription_id}" |

#### `partners.subscriptions.entitle()`

Entitles a previously provisioned subscription to the current end user. The end user identity is inferred from the authorized credential of the request. This API must be authorized by the end user using OAuth.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the subscription resource that is entitled to the current end user. It will have the format of "partners/{partner_id}/subscriptions/{subscription_id}" |
| `params.resource` | `object` | Yes | The request body. |

#### `partners.subscriptions.extend()`

[Opt-in only] Most partners should be on auto-extend by default. Extends a subscription service for their customers on an ongoing basis for the subscription to remain active and renewable. It should be called directly by the partner using service accounts.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the subscription resource to be extended. It will have the format of "partners/{partner_id}/subscriptions/{subscription_id}". |
| `params.resource` | `object` | Yes | The request body. |

#### `partners.subscriptions.cancel()`

Cancels a subscription service either immediately or by the end of the current billing cycle for their customers. It should be called directly by the partner using service accounts.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the subscription resource to be cancelled. It will have the format of "partners/{partner_id}/subscriptions/{subscription_id}" |
| `params.resource` | `object` | Yes | The request body. |

#### `partners.subscriptions.undoCancel()`

Currently, it is used by **Google One, Play Pass** partners. Revokes the pending cancellation of a subscription, which is currently in `STATE_CANCEL_AT_END_OF_CYCLE` state. If the subscription is already cancelled, the request will fail. It should be called directly by the partner using service accounts.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the subscription resource whose pending cancellation needs to be undone. It will have the format of "partners/{partner_id}/subscriptions/{subscription_id}" |
| `params.resource` | `object` | Yes | The request body. |

#### `partners.subscriptions.suspend()`

Suspends a subscription. Contract terms may dictate if a prorated refund will be issued upon suspension. It should be called directly by the partner using service accounts.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the subscription resource to be suspended. It will have the format of "partners/{partner_id}/subscriptions/{subscription_id}" |
| `params.resource` | `object` | Yes | The request body. |

#### `partners.subscriptions.resume()`

Resumes a suspended subscription. The new billing cycle will start at the time of the request. It should be called directly by the partner using service accounts.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the subscription resource to be resumed. It will have the format of "partners/{partner_id}/subscriptions/{subscription_id}" |
| `params.resource` | `object` | Yes | The request body. |

### `partners.products`

#### `partners.products.list()`

Currently, it doesn't support **YouTube** products. Retrieves the products that can be resold by the partner. It should be autenticated with a service account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent, the partner that can resell. Format: partners/{partner} |
| `params.filter` | `string` | No | Optional. Specifies the filters for the product results. The syntax is defined in https://google.aip.dev/160 with the following caveats: 1. Only the following features are supported: - Logical operator `AND` - Comparison operator `=` (no wildcards `*`) - Traversal operator `.` - Has operator `:` (no wildcards `*`) 2. Only the following fields are supported: - `regionCodes` - `youtubePayload.partnerEligibilityId` - `youtubePayload.postalCode` 3. Unless explicitly mentioned above, other features are not supported. Example: `regionCodes:US AND youtubePayload.postalCode=94043 AND youtubePayload.partnerEligibilityId=eligibility-id` |
| `params.pageSize` | `integer` | No | Optional. The maximum number of products to return. The service may return fewer than this value. If unspecified, at most 50 products will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListProducts` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListProducts` must match the call that provided the page token. |

### `partners.promotions`

#### `partners.promotions.findEligible()`

Currently, it is only enabeld for **YouTube**. Finds eligible promotions for the current user. The API requires user authorization via OAuth. The bare minimum oauth scope `openid` is sufficient, which will skip the consent screen.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent, the partner that can resell. Format: partners/{partner} |
| `params.resource` | `object` | Yes | The request body. |

#### `partners.promotions.list()`

Currently, it doesn't support **YouTube** promotions. Retrieves the promotions, such as free trial, that can be used by the partner. It should be autenticated with a service account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent, the partner that can resell. Format: partners/{partner} |
| `params.filter` | `string` | No | Optional. Specifies the filters for the promotion results. The syntax is defined in https://google.aip.dev/160 with the following caveats: 1. Only the following features are supported: - Logical operator `AND` - Comparison operator `=` (no wildcards `*`) - Traversal operator `.` - Has operator `:` (no wildcards `*`) 2. Only the following fields are supported: - `applicableProducts` - `regionCodes` - `youtubePayload.partnerEligibilityId` - `youtubePayload.postalCode` 3. Unless explicitly mentioned above, other features are not supported. Example: `applicableProducts:partners/partner1/products/product1 AND regionCodes:US AND youtubePayload.postalCode=94043 AND youtubePayload.partnerEligibilityId=eligibility-id` |
| `params.pageSize` | `integer` | No | Optional. The maximum number of promotions to return. The service may return fewer than this value. If unspecified, at most 50 products will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListPromotions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPromotions` must match the call that provided the page token. |

### `partners.userSessions`

#### `partners.userSessions.generate()`

This API replaces user authorized OAuth consent based APIs (Create, Entitle). Issues a timed session token for the given user intent. You can use the session token to redirect the user to Google to finish the signup flow. You can re-generate new session token repeatedly for the same request if necessary, regardless of the previous tokens being expired or not. By default, the session token is valid for 1 hour.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent, the partner that can resell. Format: partners/{partner} |
| `params.resource` | `object` | Yes | The request body. |