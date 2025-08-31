# Content API for Shopping - Apps Script Client Library

Auto-generated client library for using the **Content API for Shopping (version: v2.1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 31 Aug 2025 23:32:30 GMT
- **Last Modified:** Mon, 04 Aug 2025 20:05:26 GMT
- **Created:** Sun, 20 Jul 2025 16:24:21 GMT



---

## API Reference

### `accounts`

#### `accounts.authinfo()`

Returns information about the authenticated user.

| Parameter | Type | Required | Description |
|---|---|---|---|

#### `accounts.claimwebsite()`

Claims the website of a Merchant Center sub-account. Merchant accounts with approved third-party CSSs aren't required to claim a website.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.merchantId` | `string` | Yes | The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account. |
| `params.accountId` | `string` | Yes | The ID of the account whose website is claimed. |
| `params.overwrite` | `boolean` | No | Only available to selected merchants, for example multi-client accounts (MCAs) and their sub-accounts. When set to `True`, this option removes any existing claim on the requested website and replaces it with a claim from the account that makes the request. |

#### `accounts.custombatch()`

Retrieves, inserts, updates, and deletes multiple Merchant Center (sub-)accounts in a single request.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

#### `accounts.delete()`

Deletes a Merchant Center sub-account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.merchantId` | `string` | Yes | The ID of the managing account. This must be a multi-client account, and accountId must be the ID of a sub-account of this account. |
| `params.accountId` | `string` | Yes | The ID of the account. |
| `params.force` | `boolean` | No | Option to delete sub-accounts with products. The default value is false. |

#### `accounts.get()`

Retrieves a Merchant Center account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.merchantId` | `string` | Yes | The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account. |
| `params.accountId` | `string` | Yes | The ID of the account. |
| `params.view` | `string` | No | Controls which fields will be populated. Acceptable values are: "merchant" and "css". The default value is "merchant". |

#### `accounts.insert()`

Creates a Merchant Center sub-account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.merchantId` | `string` | Yes | The ID of the managing account. This must be a multi-client account. |
| `params.resource` | `object` | Yes | The request body. |

#### `accounts.link()`

Performs an action on a link between two Merchant Center accounts, namely accountId and linkedAccountId.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.merchantId` | `string` | Yes | The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account. |
| `params.accountId` | `string` | Yes | The ID of the account that should be linked. |
| `params.resource` | `object` | Yes | The request body. |

#### `accounts.list()`

Lists the sub-accounts in your Merchant Center account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.merchantId` | `string` | Yes | The ID of the managing account. This must be a multi-client account. |
| `params.maxResults` | `integer` | No | The maximum number of accounts to return in the response, used for paging. |
| `params.pageToken` | `string` | No | The token returned by the previous request. |
| `params.view` | `string` | No | Controls which fields will be populated. Acceptable values are: "merchant" and "css". The default value is "merchant". |
| `params.label` | `string` | No | If view is set to "css", only return accounts that are assigned label with given ID. |
| `params.name` | `string` | No | If set, only the accounts with the given name (case sensitive) will be returned. |

#### `accounts.listlinks()`

Returns the list of accounts linked to your Merchant Center account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.merchantId` | `string` | Yes | The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account. |
| `params.accountId` | `string` | Yes | The ID of the account for which to list links. |
| `params.maxResults` | `integer` | No | The maximum number of links to return in the response, used for pagination. The minimum allowed value is 5 results per page. If provided value is lower than 5, it will be automatically increased to 5. |
| `params.pageToken` | `string` | No | The token returned by the previous request. |

#### `accounts.update()`

Updates a Merchant Center account. Any fields that are not provided are deleted from the resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.merchantId` | `string` | Yes | The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account. |
| `params.accountId` | `string` | Yes | The ID of the account. |
| `params.resource` | `object` | Yes | The request body. |

#### `accounts.updatelabels()`

Updates labels that are assigned to the Merchant Center account by CSS user.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.merchantId` | `string` | Yes | The ID of the managing account. |
| `params.accountId` | `string` | Yes | The ID of the account whose labels are updated. |
| `params.resource` | `object` | Yes | The request body. |

#### `accounts.requestphoneverification()`

Request verification code to start phone verification.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.merchantId` | `string` | Yes | Required. The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and accountId must be the ID of a sub-account of this account. |
| `params.accountId` | `string` | Yes | Required. The ID of the account. |
| `params.resource` | `object` | Yes | The request body. |

#### `accounts.verifyphonenumber()`

Validates verification code to verify phone number for the account. If successful this will overwrite the value of `accounts.businessinformation.phoneNumber`. Only verified phone number will replace an existing verified phone number.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.merchantId` | `string` | Yes | Required. The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and accountId must be the ID of a sub-account of this account. |
| `params.accountId` | `string` | Yes | Required. The ID of the account. |
| `params.resource` | `object` | Yes | The request body. |

### `accounts.credentials`

#### `accounts.credentials.create()`

Uploads credentials for the Merchant Center account. If credentials already exist for this Merchant Center account and purpose, this method updates them.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | Required. The merchant id of the account these credentials belong to. |
| `params.resource` | `object` | Yes | The request body. |

### `accounts.labels`

#### `accounts.labels.list()`

Lists the labels assigned to an account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | Required. The account id for whose labels are to be listed. |
| `params.pageSize` | `integer` | No | The maximum number of labels to return. The service may return fewer than this value. If unspecified, at most 50 labels will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListAccountLabels` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAccountLabels` must match the call that provided the page token. |

#### `accounts.labels.create()`

Creates a new label, not assigned to any account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | Required. The id of the account this label belongs to. |
| `params.resource` | `object` | Yes | The request body. |

#### `accounts.labels.patch()`

Updates a label.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | Required. The id of the account this label belongs to. |
| `params.labelId` | `string` | Yes | Required. The id of the label to update. |
| `params.resource` | `object` | Yes | The request body. |

#### `accounts.labels.delete()`

Deletes a label and removes it from all accounts to which it was assigned.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | Required. The id of the account that owns the label. |
| `params.labelId` | `string` | Yes | Required. The id of the label to delete. |

### `accounts.returncarrier`

#### `accounts.returncarrier.create()`

Links return carrier to a merchant account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | Required. The Merchant Center Account Id under which the Return Carrier is to be linked. |
| `params.resource` | `object` | Yes | The request body. |

#### `accounts.returncarrier.patch()`

Updates a return carrier in the merchant account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | Required. The Merchant Center Account Id under which the Return Carrier is to be linked. |
| `params.carrierAccountId` | `string` | Yes | Required. The Google-provided unique carrier ID, used to update the resource. |
| `params.resource` | `object` | Yes | The request body. |

#### `accounts.returncarrier.delete()`

Delete a return carrier in the merchant account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | Required. The Merchant Center Account Id under which the Return Carrier is to be linked. |
| `params.carrierAccountId` | `string` | Yes | Required. The Google-provided unique carrier ID, used to update the resource. |

#### `accounts.returncarrier.list()`

Lists available return carriers in the merchant account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | Required. The Merchant Center Account Id under which the Return Carrier is to be linked. |

### `accountstatuses`

#### `accountstatuses.custombatch()`

Retrieves multiple Merchant Center account statuses in a single request.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

#### `accountstatuses.get()`

Retrieves the status of a Merchant Center account. No itemLevelIssues are returned for multi-client accounts.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.merchantId` | `string` | Yes | The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account. |
| `params.accountId` | `string` | Yes | The ID of the account. |
| `params.destinations` | `string` | No | If set, only issues for the specified destinations are returned, otherwise only issues for the Shopping destination. |

#### `accountstatuses.list()`

Lists the statuses of the sub-accounts in your Merchant Center account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.merchantId` | `string` | Yes | The ID of the managing account. This must be a multi-client account. |
| `params.maxResults` | `integer` | No | The maximum number of account statuses to return in the response, used for paging. |
| `params.pageToken` | `string` | No | The token returned by the previous request. |
| `params.destinations` | `string` | No | If set, only issues for the specified destinations are returned, otherwise only issues for the Shopping destination. |
| `params.name` | `string` | No | If set, only the accounts with the given name (case sensitive) will be returned. |

### `accounttax`

#### `accounttax.custombatch()`

Retrieves and updates tax settings of multiple accounts in a single request.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

#### `accounttax.get()`

Retrieves the tax settings of the account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.merchantId` | `string` | Yes | The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account. |
| `params.accountId` | `string` | Yes | The ID of the account for which to get/update account tax settings. |

#### `accounttax.list()`

Lists the tax settings of the sub-accounts in your Merchant Center account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.merchantId` | `string` | Yes | The ID of the managing account. This must be a multi-client account. |
| `params.maxResults` | `integer` | No | The maximum number of tax settings to return in the response, used for paging. |
| `params.pageToken` | `string` | No | The token returned by the previous request. |

#### `accounttax.update()`

Updates the tax settings of the account. Any fields that are not provided are deleted from the resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.merchantId` | `string` | Yes | The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account. |
| `params.accountId` | `string` | Yes | The ID of the account for which to get/update account tax settings. |
| `params.resource` | `object` | Yes | The request body. |

### `datafeeds`

#### `datafeeds.custombatch()`

Deletes, fetches, gets, inserts and updates multiple datafeeds in a single request.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

#### `datafeeds.delete()`

Deletes a datafeed configuration from your Merchant Center account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.merchantId` | `string` | Yes | The ID of the account that manages the datafeed. This account cannot be a multi-client account. |
| `params.datafeedId` | `string` | Yes | The ID of the datafeed. |

#### `datafeeds.fetchnow()`

Invokes a fetch for the datafeed in your Merchant Center account. If you need to call this method more than once per day, we recommend you use the [Products service](https://developers.google.com/shopping-content/reference/rest/v2.1/products) to update your product data.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.merchantId` | `string` | Yes | The ID of the account that manages the datafeed. This account cannot be a multi-client account. |
| `params.datafeedId` | `string` | Yes | The ID of the datafeed to be fetched. |

#### `datafeeds.get()`

Retrieves a datafeed configuration from your Merchant Center account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.merchantId` | `string` | Yes | The ID of the account that manages the datafeed. This account cannot be a multi-client account. |
| `params.datafeedId` | `string` | Yes | The ID of the datafeed. |

#### `datafeeds.insert()`

Registers a datafeed configuration with your Merchant Center account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.merchantId` | `string` | Yes | The ID of the account that manages the datafeed. This account cannot be a multi-client account. |
| `params.resource` | `object` | Yes | The request body. |

#### `datafeeds.list()`

Lists the configurations for datafeeds in your Merchant Center account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.merchantId` | `string` | Yes | The ID of the account that manages the datafeeds. This account cannot be a multi-client account. |
| `params.maxResults` | `integer` | No | The maximum number of products to return in the response, used for paging. |
| `params.pageToken` | `string` | No | The token returned by the previous request. |

#### `datafeeds.update()`

Updates a datafeed configuration of your Merchant Center account. Any fields that are not provided are deleted from the resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.merchantId` | `string` | Yes | The ID of the account that manages the datafeed. This account cannot be a multi-client account. |
| `params.datafeedId` | `string` | Yes | The ID of the datafeed. |
| `params.resource` | `object` | Yes | The request body. |

### `datafeedstatuses`

#### `datafeedstatuses.custombatch()`

Gets multiple Merchant Center datafeed statuses in a single request.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

#### `datafeedstatuses.get()`

Retrieves the status of a datafeed from your Merchant Center account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.merchantId` | `string` | Yes | The ID of the account that manages the datafeed. This account cannot be a multi-client account. |
| `params.datafeedId` | `string` | Yes | The ID of the datafeed. |
| `params.country` | `string` | No | Deprecated. Use `feedLabel` instead. The country to get the datafeed status for. If this parameter is provided then `language` must also be provided. Note that this parameter is required for feeds targeting multiple countries and languages, since a feed may have a different status for each target. |
| `params.feedLabel` | `string` | No | The feed label to get the datafeed status for. If this parameter is provided then `language` must also be provided. Note that this parameter is required for feeds targeting multiple countries and languages, since a feed may have a different status for each target. |
| `params.language` | `string` | No | The language to get the datafeed status for. If this parameter is provided then `country` must also be provided. Note that this parameter is required for feeds targeting multiple countries and languages, since a feed may have a different status for each target. |

#### `datafeedstatuses.list()`

Lists the statuses of the datafeeds in your Merchant Center account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.merchantId` | `string` | Yes | The ID of the account that manages the datafeeds. This account cannot be a multi-client account. |
| `params.maxResults` | `integer` | No | The maximum number of products to return in the response, used for paging. |
| `params.pageToken` | `string` | No | The token returned by the previous request. |

### `liasettings`

#### `liasettings.custombatch()`

Retrieves and/or updates the LIA settings of multiple accounts in a single request.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

#### `liasettings.get()`

Retrieves the LIA settings of the account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.merchantId` | `string` | Yes | The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account. |
| `params.accountId` | `string` | Yes | The ID of the account for which to get or update LIA settings. |

#### `liasettings.getaccessiblegmbaccounts()`

Retrieves the list of accessible Business Profiles.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.merchantId` | `string` | Yes | The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account. |
| `params.accountId` | `string` | Yes | The ID of the account for which to retrieve accessible Business Profiles. |

#### `liasettings.list()`

Lists the LIA settings of the sub-accounts in your Merchant Center account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.merchantId` | `string` | Yes | The ID of the managing account. This must be a multi-client account. |
| `params.maxResults` | `integer` | No | The maximum number of LIA settings to return in the response, used for paging. |
| `params.pageToken` | `string` | No | The token returned by the previous request. |

#### `liasettings.listposdataproviders()`

Retrieves the list of POS data providers that have active settings for the all eiligible countries.

| Parameter | Type | Required | Description |
|---|---|---|---|

#### `liasettings.requestgmbaccess()`

Requests access to a specified Business Profile.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.merchantId` | `string` | Yes | The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account. |
| `params.accountId` | `string` | Yes | The ID of the account for which Business Profile access is requested. |
| `params.gmbEmail` | `string` | Yes | The email of the Business Profile. |

#### `liasettings.requestinventoryverification()`

Requests inventory validation for the specified country.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.merchantId` | `string` | Yes | The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account. |
| `params.accountId` | `string` | Yes | The ID of the account that manages the order. This cannot be a multi-client account. |
| `params.country` | `string` | Yes | The country for which inventory validation is requested. |

#### `liasettings.setinventoryverificationcontact()`

Sets the inventory verification contact for the specified country.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.merchantId` | `string` | Yes | The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account. |
| `params.accountId` | `string` | Yes | The ID of the account that manages the order. This cannot be a multi-client account. |
| `params.country` | `string` | Yes | The country for which inventory verification is requested. |
| `params.language` | `string` | Yes | The language for which inventory verification is requested. |
| `params.contactName` | `string` | Yes | The name of the inventory verification contact. |
| `params.contactEmail` | `string` | Yes | The email of the inventory verification contact. |

#### `liasettings.setomnichannelexperience()`

Sets the omnichannel experience for the specified country. Only supported for merchants whose POS data provider is trusted to enable the corresponding experience. For more context, see these help articles [about LFP](https://support.google.com/merchants/answer/7676652) and [how to get started](https://support.google.com/merchants/answer/7676578) with it.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.merchantId` | `string` | Yes | The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account. |
| `params.accountId` | `string` | Yes | The ID of the account for which to retrieve accessible Business Profiles. |
| `params.country` | `string` | No | The CLDR country code (for example, "US") for which the omnichannel experience is selected. |
| `params.lsfType` | `string` | No | The Local Store Front (LSF) type for this country. Acceptable values are: - "`ghlsf`" (Google-Hosted Local Store Front) - "`mhlsfBasic`" (Merchant-Hosted Local Store Front Basic) - "`mhlsfFull`" (Merchant-Hosted Local Store Front Full) More details about these types can be found here. |
| `params.pickupTypes` | `string` | No | The Pickup types for this country. Acceptable values are: - "`pickupToday`" - "`pickupLater`"  |

#### `liasettings.setposdataprovider()`

Sets the POS data provider for the specified country.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.merchantId` | `string` | Yes | The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account. |
| `params.accountId` | `string` | Yes | The ID of the account for which to retrieve accessible Business Profiles. |
| `params.country` | `string` | Yes | The country for which the POS data provider is selected. |
| `params.posDataProviderId` | `string` | No | The ID of POS data provider. |
| `params.posExternalAccountId` | `string` | No | The account ID by which this merchant is known to the POS data provider. |

#### `liasettings.update()`

Updates the LIA settings of the account. Any fields that are not provided are deleted from the resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.merchantId` | `string` | Yes | The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account. |
| `params.accountId` | `string` | Yes | The ID of the account for which to get or update LIA settings. |
| `params.resource` | `object` | Yes | The request body. |

### `localinventory`

#### `localinventory.custombatch()`

Updates local inventory for multiple products or stores in a single request.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

#### `localinventory.insert()`

Updates the local inventory of a product in your Merchant Center account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.merchantId` | `string` | Yes | The ID of the account that contains the product. This account cannot be a multi-client account. |
| `params.productId` | `string` | Yes | The REST ID of the product for which to update local inventory. |
| `params.resource` | `object` | Yes | The request body. |

### `pos`

#### `pos.custombatch()`

Batches multiple POS-related calls in a single request.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

#### `pos.delete()`

Deletes a store for the given merchant.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.merchantId` | `string` | Yes | The ID of the POS or inventory data provider. |
| `params.targetMerchantId` | `string` | Yes | The ID of the target merchant. |
| `params.storeCode` | `string` | Yes | A store code that is unique per merchant. |

#### `pos.get()`

Retrieves information about the given store.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.merchantId` | `string` | Yes | The ID of the POS or inventory data provider. |
| `params.targetMerchantId` | `string` | Yes | The ID of the target merchant. |
| `params.storeCode` | `string` | Yes | A store code that is unique per merchant. |

#### `pos.insert()`

Creates a store for the given merchant.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.merchantId` | `string` | Yes | The ID of the POS or inventory data provider. |
| `params.targetMerchantId` | `string` | Yes | The ID of the target merchant. |
| `params.resource` | `object` | Yes | The request body. |

#### `pos.inventory()`

Submit inventory for the given merchant.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.merchantId` | `string` | Yes | The ID of the POS or inventory data provider. |
| `params.targetMerchantId` | `string` | Yes | The ID of the target merchant. |
| `params.resource` | `object` | Yes | The request body. |

#### `pos.list()`

Lists the stores of the target merchant.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.merchantId` | `string` | Yes | The ID of the POS or inventory data provider. |
| `params.targetMerchantId` | `string` | Yes | The ID of the target merchant. |

#### `pos.sale()`

Submit a sale event for the given merchant.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.merchantId` | `string` | Yes | The ID of the POS or inventory data provider. |
| `params.targetMerchantId` | `string` | Yes | The ID of the target merchant. |
| `params.resource` | `object` | Yes | The request body. |

### `products`

#### `products.custombatch()`

Retrieves, inserts, and deletes multiple products in a single request.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

#### `products.delete()`

Deletes a product from your Merchant Center account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.merchantId` | `string` | Yes | The ID of the account that contains the product. This account cannot be a multi-client account. |
| `params.productId` | `string` | Yes | The REST ID of the product. |
| `params.feedId` | `string` | No | The Content API Supplemental Feed ID. If present then product deletion applies to the data in a supplemental feed. If absent, entire product will be deleted. |

#### `products.get()`

Retrieves a product from your Merchant Center account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.merchantId` | `string` | Yes | The ID of the account that contains the product. This account cannot be a multi-client account. |
| `params.productId` | `string` | Yes | The REST ID of the product. |

#### `products.insert()`

Uploads a product to your Merchant Center account. If an item with the same channel, contentLanguage, offerId, and targetCountry already exists, this method updates that entry.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.merchantId` | `string` | Yes | The ID of the account that contains the product. This account cannot be a multi-client account. |
| `params.feedId` | `string` | No | The Content API Supplemental Feed ID. If present then product insertion applies to the data in a supplemental feed. |
| `params.resource` | `object` | Yes | The request body. |

#### `products.update()`

Updates an existing product in your Merchant Center account. Only updates attributes provided in the request.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.merchantId` | `string` | Yes | The ID of the account that contains the product. This account cannot be a multi-client account. |
| `params.productId` | `string` | Yes | The REST ID of the product for which to update. |
| `params.updateMask` | `string` | No | The comma-separated list of product attributes to be updated. Example: `"title,salePrice"`. Attributes specified in the update mask without a value specified in the body will be deleted from the product. *You must specify the update mask to delete attributes.* Only top-level product attributes can be updated. If not defined, product attributes with set values will be updated and other attributes will stay unchanged. |
| `params.resource` | `object` | Yes | The request body. |

#### `products.list()`

Lists the products in your Merchant Center account. The response might contain fewer items than specified by maxResults. Rely on nextPageToken to determine if there are more items to be requested.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.merchantId` | `string` | Yes | The ID of the account that contains the products. This account cannot be a multi-client account. |
| `params.maxResults` | `integer` | No | The maximum number of products to return in the response, used for paging. The default value is 25. The maximum value is 250. |
| `params.pageToken` | `string` | No | The token returned by the previous request. |

### `productstatuses`

#### `productstatuses.custombatch()`

Gets the statuses of multiple products in a single request.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

#### `productstatuses.get()`

Gets the status of a product from your Merchant Center account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.merchantId` | `string` | Yes | The ID of the account that contains the product. This account cannot be a multi-client account. |
| `params.productId` | `string` | Yes | The REST ID of the product. |
| `params.destinations` | `string` | No | If set, only issues for the specified destinations are returned, otherwise only issues for the Shopping destination. |

#### `productstatuses.list()`

Lists the statuses of the products in your Merchant Center account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.merchantId` | `string` | Yes | The ID of the account that contains the products. This account cannot be a multi-client account. |
| `params.maxResults` | `integer` | No | The maximum number of product statuses to return in the response, used for paging. The default value is 25. The maximum value is 250. |
| `params.pageToken` | `string` | No | The token returned by the previous request. |
| `params.destinations` | `string` | No | If set, only issues for the specified destinations are returned, otherwise only issues for the Shopping destination. |

### `pubsubnotificationsettings`

#### `pubsubnotificationsettings.get()`

Retrieves a Merchant Center account's pubsub notification settings.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.merchantId` | `string` | Yes | The ID of the account for which to get pubsub notification settings. |

#### `pubsubnotificationsettings.update()`

Register a Merchant Center account for pubsub notifications. Note that cloud topic name shouldn't be provided as part of the request.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.merchantId` | `string` | Yes | The ID of the account. |
| `params.resource` | `object` | Yes | The request body. |

### `regionalinventory`

#### `regionalinventory.custombatch()`

Updates regional inventory for multiple products or regions in a single request.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

#### `regionalinventory.insert()`

Updates the regional inventory of a product in your Merchant Center account. If a regional inventory with the same region ID already exists, this method updates that entry.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.merchantId` | `string` | Yes | The ID of the account that contains the product. This account cannot be a multi-client account. |
| `params.productId` | `string` | Yes | The REST ID of the product for which to update the regional inventory. |
| `params.resource` | `object` | Yes | The request body. |

### `returnaddress`

#### `returnaddress.custombatch()`

Batches multiple return address related calls in a single request.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

#### `returnaddress.delete()`

Deletes a return address for the given Merchant Center account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.merchantId` | `string` | Yes | The Merchant Center account from which to delete the given return address. |
| `params.returnAddressId` | `string` | Yes | Return address ID generated by Google. |

#### `returnaddress.get()`

Gets a return address of the Merchant Center account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.merchantId` | `string` | Yes | The Merchant Center account to get a return address for. |
| `params.returnAddressId` | `string` | Yes | Return address ID generated by Google. |

#### `returnaddress.insert()`

Inserts a return address for the Merchant Center account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.merchantId` | `string` | Yes | The Merchant Center account to insert a return address for. |
| `params.resource` | `object` | Yes | The request body. |

#### `returnaddress.list()`

Lists the return addresses of the Merchant Center account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.merchantId` | `string` | Yes | The Merchant Center account to list return addresses for. |
| `params.maxResults` | `integer` | No | The maximum number of addresses in the response, used for paging. |
| `params.pageToken` | `string` | No | The token returned by the previous request. |
| `params.country` | `string` | No | List only return addresses applicable to the given country of sale. When omitted, all return addresses are listed. |

### `returnpolicy`

#### `returnpolicy.custombatch()`

Batches multiple return policy related calls in a single request.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

#### `returnpolicy.delete()`

Deletes a return policy for the given Merchant Center account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.merchantId` | `string` | Yes | The Merchant Center account from which to delete the given return policy. |
| `params.returnPolicyId` | `string` | Yes | Return policy ID generated by Google. |

#### `returnpolicy.get()`

Gets a return policy of the Merchant Center account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.merchantId` | `string` | Yes | The Merchant Center account to get a return policy for. |
| `params.returnPolicyId` | `string` | Yes | Return policy ID generated by Google. |

#### `returnpolicy.insert()`

Inserts a return policy for the Merchant Center account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.merchantId` | `string` | Yes | The Merchant Center account to insert a return policy for. |
| `params.resource` | `object` | Yes | The request body. |

#### `returnpolicy.list()`

Lists the return policies of the Merchant Center account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.merchantId` | `string` | Yes | The Merchant Center account to list return policies for. |

### `shippingsettings`

#### `shippingsettings.custombatch()`

Retrieves and updates the shipping settings of multiple accounts in a single request.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

#### `shippingsettings.get()`

Retrieves the shipping settings of the account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.merchantId` | `string` | Yes | The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account. |
| `params.accountId` | `string` | Yes | The ID of the account for which to get/update shipping settings. |

#### `shippingsettings.getsupportedcarriers()`

Retrieves supported carriers and carrier services for an account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.merchantId` | `string` | Yes | The ID of the account for which to retrieve the supported carriers. |

#### `shippingsettings.getsupportedholidays()`

Retrieves supported holidays for an account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.merchantId` | `string` | Yes | The ID of the account for which to retrieve the supported holidays. |

#### `shippingsettings.getsupportedpickupservices()`

Retrieves supported pickup services for an account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.merchantId` | `string` | Yes | The ID of the account for which to retrieve the supported pickup services. |

#### `shippingsettings.list()`

Lists the shipping settings of the sub-accounts in your Merchant Center account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.merchantId` | `string` | Yes | The ID of the managing account. This must be a multi-client account. |
| `params.maxResults` | `integer` | No | The maximum number of shipping settings to return in the response, used for paging. |
| `params.pageToken` | `string` | No | The token returned by the previous request. |

#### `shippingsettings.update()`

Updates the shipping settings of the account. Any fields that are not provided are deleted from the resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.merchantId` | `string` | Yes | The ID of the managing account. If this parameter is not the same as accountId, then this account must be a multi-client account and `accountId` must be the ID of a sub-account of this account. |
| `params.accountId` | `string` | Yes | The ID of the account for which to get/update shipping settings. |
| `params.resource` | `object` | Yes | The request body. |

### `collections`

#### `collections.get()`

Retrieves a collection from your Merchant Center account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.merchantId` | `string` | Yes | Required. The ID of the account that contains the collection. This account cannot be a multi-client account. |
| `params.collectionId` | `string` | Yes | Required. The REST ID of the collection. |

#### `collections.list()`

Lists the collections in your Merchant Center account. The response might contain fewer items than specified by page_size. Rely on next_page_token to determine if there are more items to be requested.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.merchantId` | `string` | Yes | Required. The ID of the account that contains the collection. This account cannot be a multi-client account. |
| `params.pageSize` | `integer` | No | The maximum number of collections to return in the response, used for paging. Defaults to 50; values above 1000 will be coerced to 1000. |
| `params.pageToken` | `string` | No | Token (if provided) to retrieve the subsequent page. All other parameters must match the original call that provided the page token. |

#### `collections.create()`

Uploads a collection to your Merchant Center account. If a collection with the same collectionId already exists, this method updates that entry. In each update, the collection is completely replaced by the fields in the body of the update request.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.merchantId` | `string` | Yes | Required. The ID of the account that contains the collection. This account cannot be a multi-client account. |
| `params.resource` | `object` | Yes | The request body. |

#### `collections.delete()`

Deletes a collection from your Merchant Center account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.merchantId` | `string` | Yes | Required. The ID of the account that contains the collection. This account cannot be a multi-client account. |
| `params.collectionId` | `string` | Yes | Required. The collectionId of the collection. CollectionId is the same as the REST ID of the collection. |

### `quotas`

#### `quotas.list()`

Lists the daily call quota and usage per method for your Merchant Center account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.merchantId` | `string` | Yes | Required. The ID of the account that has quota. This account must be an admin. |
| `params.pageSize` | `integer` | No | The maximum number of quotas to return in the response, used for paging. Defaults to 500; values above 1000 will be coerced to 1000. |
| `params.pageToken` | `string` | No | Token (if provided) to retrieve the subsequent page. All other parameters must match the original call that provided the page token. |

### `collectionstatuses`

#### `collectionstatuses.get()`

Gets the status of a collection from your Merchant Center account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.merchantId` | `string` | Yes | Required. The ID of the account that contains the collection. This account cannot be a multi-client account. |
| `params.collectionId` | `string` | Yes | Required. The collectionId of the collection. CollectionId is the same as the REST ID of the collection. |

#### `collectionstatuses.list()`

Lists the statuses of the collections in your Merchant Center account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.merchantId` | `string` | Yes | Required. The ID of the account that contains the collection. This account cannot be a multi-client account. |
| `params.pageSize` | `integer` | No | The maximum number of collection statuses to return in the response, used for paging. Defaults to 50; values above 1000 will be coerced to 1000. |
| `params.pageToken` | `string` | No | Token (if provided) to retrieve the subsequent page. All other parameters must match the original call that provided the page token. |

### `conversionsources`

#### `conversionsources.create()`

Creates a new conversion source.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.merchantId` | `string` | Yes | Required. The ID of the account that owns the new conversion source. |
| `params.resource` | `object` | Yes | The request body. |

#### `conversionsources.patch()`

Updates information of an existing conversion source.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.merchantId` | `string` | Yes | Required. The ID of the account that owns the new conversion source. |
| `params.conversionSourceId` | `string` | Yes | Required. The ID of the conversion source to be updated. |
| `params.updateMask` | `string` | No | Optional. List of fields being updated. The following fields can be updated: `attribution_settings`, `display_name`, `currency_code`. |
| `params.resource` | `object` | Yes | The request body. |

#### `conversionsources.delete()`

Archives an existing conversion source. It will be recoverable for 30 days. This archiving behavior is not typical in the Content API and unique to this service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.merchantId` | `string` | Yes | Required. The ID of the account that owns the new conversion source. |
| `params.conversionSourceId` | `string` | Yes | Required. The ID of the conversion source to be deleted. |

#### `conversionsources.undelete()`

Re-enables an archived conversion source.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.merchantId` | `string` | Yes | Required. The ID of the account that owns the new conversion source. |
| `params.conversionSourceId` | `string` | Yes | Required. The ID of the conversion source to be undeleted. |
| `params.resource` | `object` | Yes | The request body. |

#### `conversionsources.get()`

Fetches a conversion source.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.merchantId` | `string` | Yes | Required. The ID of the account that owns the new conversion source. |
| `params.conversionSourceId` | `string` | Yes | Required. The REST ID of the collection. |

#### `conversionsources.list()`

Retrieves the list of conversion sources the caller has access to.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.merchantId` | `string` | Yes | Required. The ID of the account that owns the new conversion source. |
| `params.pageSize` | `integer` | No | The maximum number of conversion sources to return in a page. If no `page_size` is specified, `100` is used as the default value. The maximum value is `200`. Values above `200` will be coerced to `200`. Regardless of pagination, at most `200` conversion sources are returned in total. |
| `params.pageToken` | `string` | No | Page token. |
| `params.showDeleted` | `boolean` | No | If true, also returns archived conversion sources. |

### `freelistingsprogram`

#### `freelistingsprogram.get()`

Retrieves the status and review eligibility for the free listing program. Returns errors and warnings if they require action to resolve, will become disapprovals, or impact impressions. Use `accountstatuses` to view all issues for an account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.merchantId` | `string` | Yes | Required. The ID of the account. |

#### `freelistingsprogram.requestreview()`

Requests a review of free listings in a specific region. This method deprecated. Use the `MerchantSupportService` to view product and account issues and request a review.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.merchantId` | `string` | Yes | Required. The ID of the account. |
| `params.resource` | `object` | Yes | The request body. |

### `freelistingsprogram.checkoutsettings`

#### `freelistingsprogram.checkoutsettings.get()`

Gets Checkout settings for the given merchant. This includes information about review state, enrollment state and URL settings.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.merchantId` | `string` | Yes | Required. The ID of the account. |

#### `freelistingsprogram.checkoutsettings.insert()`

Enrolls merchant in `Checkout` program.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.merchantId` | `string` | Yes | Required. The ID of the account. |
| `params.resource` | `object` | Yes | The request body. |

#### `freelistingsprogram.checkoutsettings.delete()`

Deletes `Checkout` settings and unenrolls merchant from `Checkout` program.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.merchantId` | `string` | Yes | Required. The ID of the account. |

### `shoppingadsprogram`

#### `shoppingadsprogram.get()`

Retrieves the status and review eligibility for the Shopping Ads program. Returns errors and warnings if they require action to resolve, will become disapprovals, or impact impressions. Use `accountstatuses` to view all issues for an account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.merchantId` | `string` | Yes | Required. The ID of the account. |

#### `shoppingadsprogram.requestreview()`

Requests a review of Shopping ads in a specific region. This method deprecated. Use the `MerchantSupportService` to view product and account issues and request a review.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.merchantId` | `string` | Yes | Required. The ID of the account. |
| `params.resource` | `object` | Yes | The request body. |

### `csses`

#### `csses.list()`

Lists CSS domains affiliated with a CSS group.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.cssGroupId` | `string` | Yes | Required. The CSS group ID of CSS domains to be listed. |
| `params.pageSize` | `integer` | No | The maximum number of CSS domains to return. The service may return fewer than this value. If unspecified, at most 50 CSS domains will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListCsses` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListCsses` must match the call that provided the page token. |

#### `csses.get()`

Retrieves a single CSS domain by ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.cssGroupId` | `string` | Yes | Required. The ID of the managing account. If this parameter is not the same as [cssDomainId](#cssDomainId), then this ID must be a CSS group ID and `cssDomainId` must be the ID of a CSS domain affiliated with this group. |
| `params.cssDomainId` | `string` | Yes | Required. The ID of the CSS domain to return. |

#### `csses.updatelabels()`

Updates labels that are assigned to a CSS domain by its CSS group.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.cssGroupId` | `string` | Yes | Required. The CSS group ID of the updated CSS domain. |
| `params.cssDomainId` | `string` | Yes | Required. The ID of the updated CSS domain. |
| `params.resource` | `object` | Yes | The request body. |

### `reports`

#### `reports.search()`

Retrieves merchant performance metrics matching the search query and optionally segmented by selected dimensions.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.merchantId` | `string` | Yes | Required. Id of the merchant making the call. Must be a standalone account or an MCA subaccount. |
| `params.resource` | `object` | Yes | The request body. |

### `merchantsupport`

#### `merchantsupport.renderaccountissues()`

Provide a list of merchant's issues with a support content and available actions. This content and actions are meant to be rendered and shown in third-party applications.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.merchantId` | `string` | Yes | Required. The ID of the account to fetch issues for. |
| `params.languageCode` | `string` | No | Optional. The [IETF BCP-47](https://tools.ietf.org/html/bcp47) language code used to localize support content. If not set, the result will be in default language `en-US`. |
| `params.timeZone` | `string` | No | Optional. The [IANA](https://www.iana.org/time-zones) timezone used to localize times in support content. For example 'America/Los_Angeles'. If not set, results will use as a default UTC. |
| `params.resource` | `object` | Yes | The request body. |

#### `merchantsupport.renderproductissues()`

Provide a list of issues for merchant's product with a support content and available actions. This content and actions are meant to be rendered and shown in third-party applications.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.merchantId` | `string` | Yes | Required. The ID of the account that contains the product. |
| `params.productId` | `string` | Yes | Required. The [REST_ID](https://developers.google.com/shopping-content/reference/rest/v2.1/products#Product.FIELDS.id) of the product to fetch issues for. |
| `params.languageCode` | `string` | No | Optional. The [IETF BCP-47](https://tools.ietf.org/html/bcp47) language code used to localize support content. If not set, the result will be in default language `en-US`. |
| `params.timeZone` | `string` | No | Optional. The [IANA](https://www.iana.org/time-zones) timezone used to localize times in support content. For example 'America/Los_Angeles'. If not set, results will use as a default UTC. |
| `params.resource` | `object` | Yes | The request body. |

#### `merchantsupport.triggeraction()`

Start an action. The action can be requested by merchants in third-party application. Before merchants can request the action, the third-party application needs to show them action specific content and display a user input form. The action can be successfully started only once all `required` inputs are provided. If any `required` input is missing, or invalid value was provided, the service will return 400 error. Validation errors will contain Ids for all problematic field together with translated, human readable error messages that can be shown to the user.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.merchantId` | `string` | Yes | Required. The ID of the merchant's account. |
| `params.languageCode` | `string` | No | Optional. Language code [IETF BCP 47 syntax](https://tools.ietf.org/html/bcp47) used to localize the response. If not set, the result will be in default language `en-US`. |
| `params.resource` | `object` | Yes | The request body. |

### `regions`

#### `regions.get()`

Retrieves a region defined in your Merchant Center account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.merchantId` | `string` | Yes | Required. The id of the merchant for which to retrieve region definition. |
| `params.regionId` | `string` | Yes | Required. The id of the region to retrieve. |

#### `regions.create()`

Creates a region definition in your Merchant Center account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.merchantId` | `string` | Yes | Required. The id of the merchant for which to create region definition. |
| `params.regionId` | `string` | No | Required. The id of the region to create. |
| `params.resource` | `object` | Yes | The request body. |

#### `regions.patch()`

Updates a region definition in your Merchant Center account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.merchantId` | `string` | Yes | Required. The id of the merchant for which to update region definition. |
| `params.regionId` | `string` | Yes | Required. The id of the region to update. |
| `params.updateMask` | `string` | No | Optional. The comma-separated field mask indicating the fields to update. Example: `"displayName,postalCodeArea.regionCode"`. |
| `params.resource` | `object` | Yes | The request body. |

#### `regions.delete()`

Deletes a region definition from your Merchant Center account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.merchantId` | `string` | Yes | Required. The id of the merchant for which to delete region definition. |
| `params.regionId` | `string` | Yes | Required. The id of the region to delete. |

#### `regions.list()`

Lists the regions in your Merchant Center account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.merchantId` | `string` | Yes | Required. The id of the merchant for which to list region definitions. |
| `params.pageSize` | `integer` | No | The maximum number of regions to return. The service may return fewer than this value. If unspecified, at most 50 rules will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListRegions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListRegions` must match the call that provided the page token. |

### `promotions`

#### `promotions.create()`

Inserts a promotion for your Merchant Center account. If the promotion already exists, then it updates the promotion instead. To [end or delete] (https://developers.google.com/shopping-content/guides/promotions#end_a_promotion) a promotion update the time period of the promotion to a time that has already passed.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.merchantId` | `string` | Yes | Required. The ID of the account that contains the collection. |
| `params.resource` | `object` | Yes | The request body. |

#### `promotions.get()`

Retrieves a promotion from your Merchant Center account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.merchantId` | `string` | Yes | Required. The ID of the account that contains the collection. |
| `params.id` | `string` | Yes | Required. REST ID of the promotion to retrieve. |

#### `promotions.list()`

List all promotions from your Merchant Center account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.merchantId` | `string` | Yes | Required. The ID of the account that contains the collection. |
| `params.pageSize` | `integer` | No | The maximum number of promotions to return. The service may return fewer than this value. If unspecified, at most 50 labels will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListPromotion` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPromotion` must match the call that provided the page token. |
| `params.countryCode` | `string` | No | [CLDR country code](http://www.unicode.org/repos/cldr/tags/latest/common/main/en.xml) (for example, "US"), used as a filter on promotions target country. |
| `params.languageCode` | `string` | No | The two-letter ISO 639-1 language code associated with the promotions, used as a filter. |

### `recommendations`

#### `recommendations.generate()`

Generates recommendations for a merchant.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.merchantId` | `string` | Yes | Required. The ID of the account to fetch recommendations for. |
| `params.languageCode` | `string` | No | Optional. Language code of the client. If not set, the result will be in default language (English). This language code affects all fields prefixed with "localized". This should be set to ISO 639-1 country code. List of currently verified supported language code: en, fr, cs, da, de, es, it, nl, no, pl, pt, pt, fi, sv, vi, tr, th, ko, zh-CN, zh-TW, ja, id, hi |
| `params.allowedTag` | `string` | No | Optional. List of allowed tags. Tags are a set of predefined strings that describe the category that individual recommendation types belong to. User can specify zero or more tags in this field to indicate what categories of recommendations they want to receive. Current list of supported tags: - TREND |

#### `recommendations.reportInteraction()`

Reports an interaction on a recommendation for a merchant.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.merchantId` | `string` | Yes | Required. The ID of the account that wants to report an interaction. |
| `params.resource` | `object` | Yes | The request body. |

### `returnpolicyonline`

#### `returnpolicyonline.get()`

Gets an existing return policy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.merchantId` | `string` | Yes | Required. The id of the merchant for which to retrieve the return policy online object. |
| `params.returnPolicyId` | `string` | Yes | Required. The id of the return policy to retrieve. |

#### `returnpolicyonline.create()`

Creates a new return policy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.merchantId` | `string` | Yes | Required. The id of the merchant for which to retrieve the return policy online object. |
| `params.resource` | `object` | Yes | The request body. |

#### `returnpolicyonline.delete()`

Deletes an existing return policy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.merchantId` | `string` | Yes | Required. The id of the merchant for which to retrieve the return policy online object. |
| `params.returnPolicyId` | `string` | Yes | Required. The id of the return policy to delete. |

#### `returnpolicyonline.patch()`

Updates an existing return policy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.merchantId` | `string` | Yes | Required. The id of the merchant for which to retrieve the return policy online object. |
| `params.returnPolicyId` | `string` | Yes | Required. The id of the return policy to update. |
| `params.resource` | `object` | Yes | The request body. |

#### `returnpolicyonline.list()`

Lists all existing return policies.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.merchantId` | `string` | Yes | Required. The id of the merchant for which to retrieve the return policy online object. |

### `ordertrackingsignals`

#### `ordertrackingsignals.create()`

Creates new order tracking signal.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.merchantId` | `string` | Yes | The ID of the merchant for which the order signal is created. |
| `params.resource` | `object` | Yes | The request body. |

### `productdeliverytime`

#### `productdeliverytime.create()`

Creates or updates the delivery time of a product.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.merchantId` | `string` | Yes | The Google merchant ID of the account that contains the product. This account cannot be a multi-client account. |
| `params.resource` | `object` | Yes | The request body. |

#### `productdeliverytime.get()`

Gets `productDeliveryTime` by `productId`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.merchantId` | `string` | Yes | Required. The Google merchant ID of the account that contains the product. This account cannot be a multi-client account. |
| `params.productId` | `string` | Yes | Required. The Content API ID of the product, in the form `channel:contentLanguage:targetCountry:offerId`. |

#### `productdeliverytime.delete()`

Deletes the delivery time of a product.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.merchantId` | `string` | Yes | Required. The Google merchant ID of the account that contains the product. This account cannot be a multi-client account. |
| `params.productId` | `string` | Yes | Required. The Content API ID of the product, in the form `channel:contentLanguage:targetCountry:offerId`. |