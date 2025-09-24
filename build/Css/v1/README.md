# CSS API - Apps Script Client Library

Auto-generated client library for using the **CSS API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 21 Sep 2025 17:15:28 GMT
- **Last Modified:** Sun, 21 Sep 2025 17:15:28 GMT
- **Created:** Sun, 20 Jul 2025 16:24:29 GMT



---

## API Reference

### `accounts`

#### `accounts.listChildAccounts()`

Lists all the accounts under the specified CSS account ID, and optionally filters by label ID and account name.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent account. Must be a CSS group or domain. Format: accounts/{account} |
| `params.labelId` | `string` | No | If set, only the MC accounts with the given label ID will be returned. |
| `params.fullName` | `string` | No | If set, only the MC accounts with the given name (case sensitive) will be returned. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of accounts to return. The service may return fewer than this value. If unspecified, at most 50 accounts will be returned. The maximum value is 100; values above 100 will be coerced to 100. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListChildAccounts` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListChildAccounts` must match the call that provided the page token. |

#### `accounts.get()`

Retrieves a single CSS/MC account by ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the managed CSS/MC account. Format: accounts/{account} |
| `params.parent` | `string` | No | Optional. Only required when retrieving MC account information. The CSS domain that is the parent resource of the MC account. Format: accounts/{account} |

#### `accounts.updateLabels()`

Updates labels assigned to CSS/MC accounts by a CSS domain.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The label resource name. Format: accounts/{account} |
| `params.requestBody` | `object` | Yes | The request body. |

### `accounts.labels`

#### `accounts.labels.list()`

Lists the labels owned by an account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent account. Format: accounts/{account} |
| `params.pageSize` | `integer` | No | The maximum number of labels to return. The service may return fewer than this value. If unspecified, at most 50 labels will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListAccountLabels` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAccountLabels` must match the call that provided the page token. |

#### `accounts.labels.create()`

Creates a new label, not assigned to any account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent account. Format: accounts/{account} |
| `params.requestBody` | `object` | Yes | The request body. |

#### `accounts.labels.patch()`

Updates a label.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name of the label. Format: accounts/{account}/labels/{label} |
| `params.requestBody` | `object` | Yes | The request body. |

#### `accounts.labels.delete()`

Deletes a label and removes it from all accounts to which it was assigned.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the label to delete. Format: accounts/{account}/labels/{label} |

### `accounts.cssProductInputs`

#### `accounts.cssProductInputs.insert()`

Uploads a CssProductInput to your CSS Center account. If an input with the same contentLanguage, identity, feedLabel and feedId already exists, this method replaces that entry. After inserting, updating, or deleting a CSS Product input, it may take several minutes before the processed CSS Product can be retrieved.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The account where this CSS Product will be inserted. Format: accounts/{account} |
| `params.feedId` | `string` | No | Optional. DEPRECATED. Feed id is not required for CSS Products. The primary or supplemental feed id. If CSS Product already exists and feed id provided is different, then the CSS Product will be moved to a new feed. Note: For now, CSSs do not need to provide feed ids as we create feeds on the fly. We do not have supplemental feed support for CSS Products yet. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `accounts.cssProductInputs.patch()`

Updates the existing Css Product input in your CSS Center account. After inserting, updating, or deleting a CSS Product input, it may take several minutes before the processed Css Product can be retrieved.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The name of the CSS Product input. Format: `accounts/{account}/cssProductInputs/{css_product_input}`, where the last section `css_product_input` consists of 3 parts: contentLanguage~feedLabel~offerId. Example: accounts/123/cssProductInputs/de~DE~rawProvidedId123 |
| `params.updateMask` | `string` | No | The list of CSS product attributes to be updated. If the update mask is omitted, then it is treated as implied field mask equivalent to all fields that are populated (have a non-empty value). Attributes specified in the update mask without a value specified in the body will be deleted from the CSS product. Update mask can only be specified for top level fields in attributes and custom attributes. To specify the update mask for custom attributes you need to add the `custom_attribute.` prefix. Providing special "*" value for full CSS product replacement is not supported. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `accounts.cssProductInputs.delete()`

Deletes a CSS Product input from your CSS Center account. After a delete it may take several minutes until the input is no longer available.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the CSS product input resource to delete. Format: accounts/{account}/cssProductInputs/{css_product_input}, where the last section `css_product_input` consists of 3 parts: contentLanguage~feedLabel~offerId. Example: accounts/123/cssProductInputs/de~DE~rawProvidedId123 |
| `params.supplementalFeedId` | `string` | No | The Content API Supplemental Feed ID. The field must not be set if the action applies to a primary feed. If the field is set, then product action applies to a supplemental feed instead of primary Content API feed. |

### `accounts.cssProducts`

#### `accounts.cssProducts.get()`

Retrieves the processed CSS Product from your CSS Center account. After inserting, updating, or deleting a product input, it may take several minutes before the updated final product can be retrieved.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the CSS product to retrieve. Format: `accounts/{account}/cssProducts/{css_product}` |

#### `accounts.cssProducts.list()`

Lists the processed CSS Products in your CSS Center account. The response might contain fewer items than specified by pageSize. Rely on pageToken to determine if there are more items to be requested. After inserting, updating, or deleting a CSS product input, it may take several minutes before the updated processed CSS product can be retrieved.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The account/domain to list processed CSS Products for. Format: accounts/{account} |
| `params.pageSize` | `integer` | No | The maximum number of CSS Products to return. The service may return fewer than this value. The maximum value is 1000; values above 1000 will be coerced to 1000. If unspecified, the maximum number of CSS products will be returned. |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListCssProducts` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListCssProducts` must match the call that provided the page token. |

### `accounts.quotas`

#### `accounts.quotas.list()`

Lists the daily call quota and usage per group for your CSS Center account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The CSS account that owns the collection of method quotas and resources. In most cases, this is the CSS domain. Format: accounts/{account} |
| `params.pageSize` | `integer` | No | Optional. The maximum number of quotas to return in the response, used for paging. Defaults to 500; values above 1000 will be coerced to 1000. |
| `params.pageToken` | `string` | No | Optional. Token (if provided) to retrieve the subsequent page. All other parameters must match the original call that provided the page token. |