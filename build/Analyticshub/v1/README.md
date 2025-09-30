# Analytics Hub API - Apps Script Client Library

Auto-generated client library for using the **Analytics Hub API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Tue, 30 Sep 2025 23:21:59 GMT
- **Last Modified:** Sun, 21 Sep 2025 17:03:55 GMT
- **Created:** Sun, 20 Jul 2025 16:12:07 GMT



---

## API Reference

### `projects`

### `projects.locations`

### `projects.locations.dataExchanges`

#### `projects.locations.dataExchanges.list()`

Lists all data exchanges in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource path of the data exchanges. e.g. `projects/myproject/locations/us`. |
| `params.pageSize` | `integer` | No | The maximum number of results to return in a single response page. Leverage the page tokens to iterate through the entire collection. |
| `params.pageToken` | `string` | No | Page token, returned by a previous call, to request the next page of results. |

#### `projects.locations.dataExchanges.get()`

Gets the details of a data exchange.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the data exchange. e.g. `projects/myproject/locations/us/dataExchanges/123`. |

#### `projects.locations.dataExchanges.create()`

Creates a new data exchange.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource path of the data exchange. e.g. `projects/myproject/locations/us`. |
| `params.dataExchangeId` | `string` | No | Required. The ID of the data exchange. Must contain only Unicode letters, numbers (0-9), underscores (_). Max length: 100 bytes. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.dataExchanges.patch()`

Updates an existing data exchange.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. The resource name of the data exchange. e.g. `projects/myproject/locations/us/dataExchanges/123`. |
| `params.updateMask` | `string` | No | Required. Field mask specifies the fields to update in the data exchange resource. The fields specified in the `updateMask` are relative to the resource and are not a full request. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.dataExchanges.delete()`

Deletes an existing data exchange.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The full name of the data exchange resource that you want to delete. For example, `projects/myproject/locations/us/dataExchanges/123`. |

#### `projects.locations.dataExchanges.subscribe()`

Creates a Subscription to a Data Clean Room. This is a long-running operation as it will create one or more linked datasets. Throws a Bad Request error if the Data Exchange does not contain any listings.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the Data Exchange. e.g. `projects/publisherproject/locations/us/dataExchanges/123` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.dataExchanges.listSubscriptions()`

Lists all subscriptions on a given Data Exchange or Listing.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | Required. Resource name of the requested target. This resource may be either a Listing or a DataExchange. e.g. projects/123/locations/us/dataExchanges/456 OR e.g. projects/123/locations/us/dataExchanges/456/listings/789 |
| `params.includeDeletedSubscriptions` | `boolean` | No | If selected, includes deleted subscriptions in the response (up to 63 days after deletion). |
| `params.pageSize` | `integer` | No | The maximum number of results to return in a single response page. |
| `params.pageToken` | `string` | No | Page token, returned by a previous call. |

#### `projects.locations.dataExchanges.getIamPolicy()`

Gets the IAM policy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.dataExchanges.setIamPolicy()`

Sets the IAM policy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.dataExchanges.testIamPermissions()`

Returns the permissions that a caller has.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.dataExchanges.listings`

#### `projects.locations.dataExchanges.listings.list()`

Lists all listings in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource path of the listing. e.g. `projects/myproject/locations/us/dataExchanges/123`. |
| `params.pageSize` | `integer` | No | The maximum number of results to return in a single response page. Leverage the page tokens to iterate through the entire collection. |
| `params.pageToken` | `string` | No | Page token, returned by a previous call, to request the next page of results. |

#### `projects.locations.dataExchanges.listings.get()`

Gets the details of a listing.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the listing. e.g. `projects/myproject/locations/us/dataExchanges/123/listings/456`. |

#### `projects.locations.dataExchanges.listings.create()`

Creates a new listing.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource path of the listing. e.g. `projects/myproject/locations/us/dataExchanges/123`. |
| `params.listingId` | `string` | No | Required. The ID of the listing to create. Must contain only Unicode letters, numbers (0-9), underscores (_). Max length: 100 bytes. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.dataExchanges.listings.patch()`

Updates an existing listing.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. The resource name of the listing. e.g. `projects/myproject/locations/us/dataExchanges/123/listings/456` |
| `params.updateMask` | `string` | No | Required. Field mask specifies the fields to update in the listing resource. The fields specified in the `updateMask` are relative to the resource and are not a full request. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.dataExchanges.listings.delete()`

Deletes a listing.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the listing to delete. e.g. `projects/myproject/locations/us/dataExchanges/123/listings/456`. |
| `params.deleteCommercial` | `boolean` | No | Optional. If the listing is commercial then this field must be set to true, otherwise a failure is thrown. This acts as a safety guard to avoid deleting commercial listings accidentally. |

#### `projects.locations.dataExchanges.listings.subscribe()`

Subscribes to a listing. Currently, with Analytics Hub, you can create listings that reference only BigQuery datasets. Upon subscription to a listing for a BigQuery dataset, Analytics Hub creates a linked dataset in the subscriber's project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the listing that you want to subscribe to. e.g. `projects/myproject/locations/us/dataExchanges/123/listings/456`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.dataExchanges.listings.listSubscriptions()`

Lists all subscriptions on a given Data Exchange or Listing.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | Required. Resource name of the requested target. This resource may be either a Listing or a DataExchange. e.g. projects/123/locations/us/dataExchanges/456 OR e.g. projects/123/locations/us/dataExchanges/456/listings/789 |
| `params.includeDeletedSubscriptions` | `boolean` | No | If selected, includes deleted subscriptions in the response (up to 63 days after deletion). |
| `params.pageSize` | `integer` | No | The maximum number of results to return in a single response page. |
| `params.pageToken` | `string` | No | Page token, returned by a previous call. |

#### `projects.locations.dataExchanges.listings.getIamPolicy()`

Gets the IAM policy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.dataExchanges.listings.setIamPolicy()`

Sets the IAM policy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.dataExchanges.listings.testIamPermissions()`

Returns the permissions that a caller has.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.dataExchanges.queryTemplates`

#### `projects.locations.dataExchanges.queryTemplates.create()`

Creates a new QueryTemplate

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource path of the QueryTemplate. e.g. `projects/myproject/locations/us/dataExchanges/123/queryTemplates/myQueryTemplate`. |
| `params.queryTemplateId` | `string` | No | Required. The ID of the QueryTemplate to create. Must contain only Unicode letters, numbers (0-9), underscores (_). Max length: 100 bytes. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.dataExchanges.queryTemplates.get()`

Gets a QueryTemplate

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The parent resource path of the QueryTemplate. e.g. `projects/myproject/locations/us/dataExchanges/123/queryTemplates/myqueryTemplate`. |

#### `projects.locations.dataExchanges.queryTemplates.list()`

Lists all QueryTemplates in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource path of the QueryTemplates. e.g. `projects/myproject/locations/us/dataExchanges/123`. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of results to return in a single response page. Leverage the page tokens to iterate through the entire collection. |
| `params.pageToken` | `string` | No | Optional. Page token, returned by a previous call, to request the next page of results. |

#### `projects.locations.dataExchanges.queryTemplates.patch()`

Updates an existing QueryTemplate

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. The resource name of the QueryTemplate. e.g. `projects/myproject/locations/us/dataExchanges/123/queryTemplates/456` |
| `params.updateMask` | `string` | No | Optional. Field mask specifies the fields to update in the query template resource. The fields specified in the `updateMask` are relative to the resource and are not a full request. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.dataExchanges.queryTemplates.delete()`

Deletes a query template.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource path of the QueryTemplate. e.g. `projects/myproject/locations/us/dataExchanges/123/queryTemplates/myqueryTemplate`. |

#### `projects.locations.dataExchanges.queryTemplates.submit()`

Submits a query template for approval.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource path of the QueryTemplate. e.g. `projects/myproject/locations/us/dataExchanges/123/queryTemplates/myqueryTemplate`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.dataExchanges.queryTemplates.approve()`

Approves a query template.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource path of the QueryTemplate. e.g. `projects/myproject/locations/us/dataExchanges/123/queryTemplates/myqueryTemplate`. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.subscriptions`

#### `projects.locations.subscriptions.refresh()`

Refreshes a Subscription to a Data Exchange. A Data Exchange can become stale when a publisher adds or removes data. This is a long-running operation as it may create many linked datasets.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the Subscription to refresh. e.g. `projects/subscriberproject/locations/us/subscriptions/123` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.subscriptions.get()`

Gets the details of a Subscription.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the subscription. e.g. projects/123/locations/us/subscriptions/456 |

#### `projects.locations.subscriptions.list()`

Lists all subscriptions in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource path of the subscription. e.g. projects/myproject/locations/us |
| `params.filter` | `string` | No | An expression for filtering the results of the request. Eligible fields for filtering are: + `listing` + `data_exchange` Alternatively, a literal wrapped in double quotes may be provided. This will be checked for an exact match against both fields above. In all cases, the full Data Exchange or Listing resource name must be provided. Some example of using filters: + data_exchange="projects/myproject/locations/us/dataExchanges/123" + listing="projects/123/locations/us/dataExchanges/456/listings/789" + "projects/myproject/locations/us/dataExchanges/123" |
| `params.pageSize` | `integer` | No | The maximum number of results to return in a single response page. |
| `params.pageToken` | `string` | No | Page token, returned by a previous call. |

#### `projects.locations.subscriptions.revoke()`

Revokes a given subscription.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the subscription to revoke. e.g. projects/123/locations/us/subscriptions/456 |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.subscriptions.delete()`

Deletes a subscription.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the subscription to delete. e.g. projects/123/locations/us/subscriptions/456 |

#### `projects.locations.subscriptions.getIamPolicy()`

Gets the IAM policy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.subscriptions.setIamPolicy()`

Sets the IAM policy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

### `organizations`

### `organizations.locations`

### `organizations.locations.dataExchanges`

#### `organizations.locations.dataExchanges.list()`

Lists all data exchanges from projects in a given organization and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.organization` | `string` | Yes | Required. The organization resource path of the projects containing DataExchanges. e.g. `organizations/myorg/locations/us`. |
| `params.pageSize` | `integer` | No | The maximum number of results to return in a single response page. Leverage the page tokens to iterate through the entire collection. |
| `params.pageToken` | `string` | No | Page token, returned by a previous call, to request the next page of results. |