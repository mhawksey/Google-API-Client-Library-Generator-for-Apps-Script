# Enterprise License Manager API - Apps Script Client Library

Auto-generated client library for using the **Enterprise License Manager API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 31 Aug 2025 23:42:39 GMT
- **Last Modified:** Mon, 04 Aug 2025 20:25:20 GMT
- **Created:** Sun, 20 Jul 2025 16:36:00 GMT



---

## API Reference

### `licenseAssignments`

#### `licenseAssignments.delete()`

Revoke a license.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.productId` | `string` | Yes | A product's unique identifier. For more information about products in this version of the API, see Products and SKUs. |
| `params.skuId` | `string` | Yes | A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs. |
| `params.userId` | `string` | Yes | The user's current primary email address. If the user's email address changes, use the new email address in your API requests. Since a `userId` is subject to change, do not use a `userId` value as a key for persistent data. This key could break if the current user's email address changes. If the `userId` is suspended, the license status changes. |

#### `licenseAssignments.get()`

Get a specific user's license by product SKU.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.productId` | `string` | Yes | A product's unique identifier. For more information about products in this version of the API, see Products and SKUs. |
| `params.skuId` | `string` | Yes | A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs. |
| `params.userId` | `string` | Yes | The user's current primary email address. If the user's email address changes, use the new email address in your API requests. Since a `userId` is subject to change, do not use a `userId` value as a key for persistent data. This key could break if the current user's email address changes. If the `userId` is suspended, the license status changes. |

#### `licenseAssignments.insert()`

Assign a license.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.productId` | `string` | Yes | A product's unique identifier. For more information about products in this version of the API, see Products and SKUs. |
| `params.skuId` | `string` | Yes | A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs. |
| `params.resource` | `object` | Yes | The request body. |

#### `licenseAssignments.listForProduct()`

List all users assigned licenses for a specific product SKU.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.productId` | `string` | Yes | A product's unique identifier. For more information about products in this version of the API, see Products and SKUs. |
| `params.customerId` | `string` | Yes | The customer's unique ID as defined in the Admin console, such as `C00000000`. If the customer is suspended, the server returns an error. |
| `params.maxResults` | `integer` | No | The `maxResults` query string determines how many entries are returned on each page of a large response. This is an optional parameter. The value must be a positive number. |
| `params.pageToken` | `string` | No | Token to fetch the next page of data. The `maxResults` query string is related to the `pageToken` since `maxResults` determines how many entries are returned on each page. This is an optional query string. If not specified, the server returns the first page. |

#### `licenseAssignments.listForProductAndSku()`

List all users assigned licenses for a specific product SKU.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.productId` | `string` | Yes | A product's unique identifier. For more information about products in this version of the API, see Products and SKUs. |
| `params.skuId` | `string` | Yes | A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs. |
| `params.customerId` | `string` | Yes | The customer's unique ID as defined in the Admin console, such as `C00000000`. If the customer is suspended, the server returns an error. |
| `params.maxResults` | `integer` | No | The `maxResults` query string determines how many entries are returned on each page of a large response. This is an optional parameter. The value must be a positive number. |
| `params.pageToken` | `string` | No | Token to fetch the next page of data. The `maxResults` query string is related to the `pageToken` since `maxResults` determines how many entries are returned on each page. This is an optional query string. If not specified, the server returns the first page. |

#### `licenseAssignments.update()`

Reassign a user's product SKU with a different SKU in the same product.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.productId` | `string` | Yes | A product's unique identifier. For more information about products in this version of the API, see Products and SKUs. |
| `params.skuId` | `string` | Yes | A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs. |
| `params.userId` | `string` | Yes | The user's current primary email address. If the user's email address changes, use the new email address in your API requests. Since a `userId` is subject to change, do not use a `userId` value as a key for persistent data. This key could break if the current user's email address changes. If the `userId` is suspended, the license status changes. |
| `params.resource` | `object` | Yes | The request body. |

#### `licenseAssignments.patch()`

Reassign a user's product SKU with a different SKU in the same product. This method supports patch semantics.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.productId` | `string` | Yes | A product's unique identifier. For more information about products in this version of the API, see Products and SKUs. |
| `params.skuId` | `string` | Yes | A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs. |
| `params.userId` | `string` | Yes | The user's current primary email address. If the user's email address changes, use the new email address in your API requests. Since a `userId` is subject to change, do not use a `userId` value as a key for persistent data. This key could break if the current user's email address changes. If the `userId` is suspended, the license status changes. |
| `params.resource` | `object` | Yes | The request body. |