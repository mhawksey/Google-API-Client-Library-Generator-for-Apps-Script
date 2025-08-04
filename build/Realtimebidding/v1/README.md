# Real-time Bidding API - Apps Script Client Library

Auto-generated client library for using the **Real-time Bidding API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Mon, 04 Aug 2025 20:44:08 GMT
- **Last Modified:** Mon, 04 Aug 2025 20:44:08 GMT
- **Created:** Sun, 20 Jul 2025 16:52:11 GMT



---

## API Reference

### `bidders`

#### `bidders.get()`

Gets a bidder account by its name.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the bidder to get. Format: `bidders/{bidderAccountId}` |

#### `bidders.list()`

Lists all the bidder accounts that belong to the caller.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No | The maximum number of bidders to return. If unspecified, at most 100 bidders will be returned. The maximum value is 500; values above 500 will be coerced to 500. |
| `params.pageToken` | `string` | No | A token identifying a page of results the server should return. This value is received from a previous `ListBidders` call in ListBiddersResponse.nextPageToken. |

### `bidders.endpoints`

#### `bidders.endpoints.get()`

Gets a bidder endpoint by its name.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the bidder endpoint to get. Format: `bidders/{bidderAccountId}/endpoints/{endpointId}` |

#### `bidders.endpoints.list()`

Lists all the bidder's endpoints.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Name of the bidder whose endpoints will be listed. Format: `bidders/{bidderAccountId}` |
| `params.pageSize` | `integer` | No | The maximum number of endpoints to return. If unspecified, at most 100 endpoints will be returned. The maximum value is 500; values above 500 will be coerced to 500. |
| `params.pageToken` | `string` | No | A token identifying a page of results the server should return. This value is received from a previous `ListEndpoints` call in ListEndpointsResponse.nextPageToken. |

#### `bidders.endpoints.patch()`

Updates a bidder's endpoint.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. Name of the endpoint resource that must follow the pattern `bidders/{bidderAccountId}/endpoints/{endpointId}`, where {bidderAccountId} is the account ID of the bidder who operates this endpoint, and {endpointId} is a unique ID assigned by the server. |
| `params.updateMask` | `string` | No | Field mask to use for partial in-place updates. |
| `params.resource` | `object` | Yes | The request body. |

### `bidders.creatives`

#### `bidders.creatives.list()`

Lists creatives as they are at the time of the initial request. This call may take multiple hours to complete. For large, paginated requests, this method returns a snapshot of creatives at the time of request for the first page. `lastStatusUpdate` and `creativeServingDecision` may be outdated for creatives on sequential pages. We recommend [Google Cloud Pub/Sub](//cloud.google.com/pubsub/docs/overview) to view the latest status.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Name of the parent buyer that owns the creatives. The pattern for this resource is either `buyers/{buyerAccountId}` or `bidders/{bidderAccountId}`. For `buyers/{buyerAccountId}`, the `buyerAccountId` can be one of the following: 1. The ID of the buyer that is accessing their own creatives. 2. The ID of the child seat buyer under a bidder account. So for listing creatives pertaining to the child seat buyer (`456`) under bidder account (`123`), you would use the pattern: `buyers/456`. 3. The ID of the bidder itself. So for listing creatives pertaining to bidder (`123`), you would use `buyers/123`. If you want to access all creatives pertaining to both the bidder and all of its child seat accounts, you would use `bidders/{bidderAccountId}`, for example, for all creatives pertaining to bidder (`123`), use `bidders/123`. |
| `params.pageSize` | `integer` | No | Requested page size. The server may return fewer creatives than requested (due to timeout constraint) even if more are available through another call. If unspecified, server will pick an appropriate default. Acceptable values are 1 to 1000, inclusive. |
| `params.pageToken` | `string` | No | A token identifying a page of results the server should return. Typically, this is the value of ListCreativesResponse.nextPageToken returned from the previous call to the 'ListCreatives' method. Page tokens for continued pages are valid for up to five hours, counting from the call to 'ListCreatives' for the first page. |
| `params.filter` | `string` | No | Query string to filter creatives. If no filter is specified, all active creatives will be returned. Example: 'accountId=12345 AND (dealsStatus:DISAPPROVED AND disapprovalReason:UNACCEPTABLE_CONTENT) OR declaredAttributes:IS_COOKIE_TARGETED' |
| `params.view` | `string` | No | Controls the amount of information included in the response. By default only creativeServingDecision is included. To retrieve the entire creative resource (including the declared fields and the creative content) specify the view as "FULL". |

#### `bidders.creatives.watch()`

Watches all creatives pertaining to a bidder. It is sufficient to invoke this endpoint once per bidder. A Pub/Sub topic will be created and notifications will be pushed to the topic when any of the bidder's creatives change status. All of the bidder's service accounts will have access to read from the topic. Subsequent invocations of this method will return the existing Pub/Sub configuration.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. To watch all creatives pertaining to the bidder and all its child seat accounts, the bidder must follow the pattern `bidders/{bidderAccountId}`. |
| `params.resource` | `object` | Yes | The request body. |

### `bidders.pretargetingConfigs`

#### `bidders.pretargetingConfigs.list()`

Lists all pretargeting configurations for a single bidder.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Name of the bidder whose pretargeting configurations will be listed. Format: bidders/{bidderAccountId} |
| `params.pageSize` | `integer` | No | The maximum number of pretargeting configurations to return. If unspecified, at most 10 pretargeting configurations will be returned. The maximum value is 100; values above 100 will be coerced to 100. |
| `params.pageToken` | `string` | No | A token identifying a page of results the server should return. This value is received from a previous `ListPretargetingConfigs` call in ListPretargetingConfigsResponse.nextPageToken. |

#### `bidders.pretargetingConfigs.get()`

Gets a pretargeting configuration.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the pretargeting configuration to get. Format: bidders/{bidderAccountId}/pretargetingConfig/{configId} |

#### `bidders.pretargetingConfigs.create()`

Creates a pretargeting configuration. A pretargeting configuration's state (PretargetingConfig.state) is active upon creation, and it will start to affect traffic shortly after. A bidder may create a maximum of 10 pretargeting configurations. Attempts to exceed this maximum results in a 400 bad request error.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Name of the bidder to create the pretargeting configuration for. Format: bidders/{bidderAccountId} |
| `params.resource` | `object` | Yes | The request body. |

#### `bidders.pretargetingConfigs.patch()`

Updates a pretargeting configuration.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. Name of the pretargeting configuration that must follow the pattern `bidders/{bidder_account_id}/pretargetingConfigs/{config_id}` |
| `params.updateMask` | `string` | No | Field mask to use for partial in-place updates. |
| `params.resource` | `object` | Yes | The request body. |

#### `bidders.pretargetingConfigs.delete()`

Deletes a pretargeting configuration.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the pretargeting configuration to delete. Format: bidders/{bidderAccountId}/pretargetingConfig/{configId} |

#### `bidders.pretargetingConfigs.activate()`

Activates a pretargeting configuration.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the pretargeting configuration. Format: bidders/{bidderAccountId}/pretargetingConfig/{configId} |
| `params.resource` | `object` | Yes | The request body. |

#### `bidders.pretargetingConfigs.suspend()`

Suspends a pretargeting configuration.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the pretargeting configuration. Format: bidders/{bidderAccountId}/pretargetingConfig/{configId} |
| `params.resource` | `object` | Yes | The request body. |

#### `bidders.pretargetingConfigs.addTargetedSites()`

Adds targeted sites to the pretargeting configuration.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pretargetingConfig` | `string` | Yes | Required. The name of the pretargeting configuration. Format: bidders/{bidderAccountId}/pretargetingConfig/{configId} |
| `params.resource` | `object` | Yes | The request body. |

#### `bidders.pretargetingConfigs.removeTargetedSites()`

Removes targeted sites from the pretargeting configuration.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pretargetingConfig` | `string` | Yes | Required. The name of the pretargeting configuration. Format: bidders/{bidderAccountId}/pretargetingConfig/{configId} |
| `params.resource` | `object` | Yes | The request body. |

#### `bidders.pretargetingConfigs.addTargetedApps()`

Adds targeted apps to the pretargeting configuration.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pretargetingConfig` | `string` | Yes | Required. The name of the pretargeting configuration. Format: bidders/{bidderAccountId}/pretargetingConfig/{configId} |
| `params.resource` | `object` | Yes | The request body. |

#### `bidders.pretargetingConfigs.removeTargetedApps()`

Removes targeted apps from the pretargeting configuration.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pretargetingConfig` | `string` | Yes | Required. The name of the pretargeting configuration. Format: bidders/{bidderAccountId}/pretargetingConfig/{configId} |
| `params.resource` | `object` | Yes | The request body. |

#### `bidders.pretargetingConfigs.addTargetedPublishers()`

Adds targeted publishers to the pretargeting config.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pretargetingConfig` | `string` | Yes | Required. The name of the pretargeting configuration. Format: bidders/{bidderAccountId}/pretargetingConfig/{configId} |
| `params.resource` | `object` | Yes | The request body. |

#### `bidders.pretargetingConfigs.removeTargetedPublishers()`

Removes targeted publishers from the pretargeting config.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pretargetingConfig` | `string` | Yes | Required. The name of the pretargeting configuration. Format: bidders/{bidderAccountId}/pretargetingConfig/{configId} |
| `params.resource` | `object` | Yes | The request body. |

### `bidders.publisherConnections`

#### `bidders.publisherConnections.list()`

Lists publisher connections for a given bidder.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Name of the bidder for which publishers have initiated connections. The pattern for this resource is `bidders/{bidder}` where `{bidder}` represents the account ID of the bidder. |
| `params.pageSize` | `integer` | No | Requested page size. The server may return fewer results than requested (due to timeout constraint) even if more are available through another call. If unspecified, the server will pick an appropriate default. Acceptable values are 1 to 5000, inclusive. |
| `params.pageToken` | `string` | No | A token identifying a page of results the server should return. Typically, this is the value of ListPublisherConnectionsResponse.nextPageToken returned from the previous call to the 'ListPublisherConnections' method. |
| `params.filter` | `string` | No | Query string to filter publisher connections. Connections can be filtered by `displayName`, `publisherPlatform`, and `biddingState`. If no filter is specified, all publisher connections will be returned. Example: 'displayName="Great Publisher*" AND publisherPlatform=ADMOB AND biddingState != PENDING' See https://google.aip.dev/160 for more information about filtering syntax. |
| `params.orderBy` | `string` | No | Order specification by which results should be sorted. If no sort order is specified, the results will be returned in alphabetic order based on the publisher's publisher code. Results can be sorted by `createTime`. Example: 'createTime DESC'. |

#### `bidders.publisherConnections.get()`

Gets a publisher connection.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the publisher whose connection information is to be retrieved. In the pattern `bidders/{bidder}/publisherConnections/{publisher}` where `{bidder}` is the account ID of the bidder, and `{publisher}` is the ads.txt/app-ads.txt publisher ID. See publisherConnection.name. |

#### `bidders.publisherConnections.batchApprove()`

Batch approves multiple publisher connections.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The bidder for whom publisher connections will be approved. Format: `bidders/{bidder}` where `{bidder}` is the account ID of the bidder. |
| `params.resource` | `object` | Yes | The request body. |

#### `bidders.publisherConnections.batchReject()`

Batch rejects multiple publisher connections.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The bidder for whom publisher connections will be rejected. Format: `bidders/{bidder}` where `{bidder}` is the account ID of the bidder. |
| `params.resource` | `object` | Yes | The request body. |

### `buyers`

#### `buyers.get()`

Gets a buyer account by its name.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the buyer to get. Format: `buyers/{buyerId}` |

#### `buyers.list()`

Lists all buyer account information the calling buyer user or service account is permissioned to manage.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No | The maximum number of buyers to return. If unspecified, at most 100 buyers will be returned. The maximum value is 500; values above 500 will be coerced to 500. |
| `params.pageToken` | `string` | No | A token identifying a page of results the server should return. This value is received from a previous `ListBuyers` call in ListBuyersResponse.nextPageToken. |

#### `buyers.getRemarketingTag()`

This has been sunset as of October 2023, and will return an error response if called. For more information, see the release notes: https://developers.google.com/authorized-buyers/apis/relnotes#real-time-bidding-api Gets remarketing tag for a buyer. A remarketing tag is a piece of JavaScript code that can be placed on a web page. When a user visits a page containing a remarketing tag, Google adds the user to a user list.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. To fetch the remarketing tag for an account, the name must follow the pattern `buyers/{accountId}`, where `{accountId}` represents the ID of the buyer that owns the remarketing tag. For a bidder accessing the remarketing tag on behalf of a child seat buyer, `{accountId}` should represent the ID of the child seat buyer. To fetch the remarketing tag for a specific user list, the name must follow the pattern `buyers/{accountId}/userLists/{userListId}`. See UserList.name. |

### `buyers.creatives`

#### `buyers.creatives.list()`

Lists creatives as they are at the time of the initial request. This call may take multiple hours to complete. For large, paginated requests, this method returns a snapshot of creatives at the time of request for the first page. `lastStatusUpdate` and `creativeServingDecision` may be outdated for creatives on sequential pages. We recommend [Google Cloud Pub/Sub](//cloud.google.com/pubsub/docs/overview) to view the latest status.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Name of the parent buyer that owns the creatives. The pattern for this resource is either `buyers/{buyerAccountId}` or `bidders/{bidderAccountId}`. For `buyers/{buyerAccountId}`, the `buyerAccountId` can be one of the following: 1. The ID of the buyer that is accessing their own creatives. 2. The ID of the child seat buyer under a bidder account. So for listing creatives pertaining to the child seat buyer (`456`) under bidder account (`123`), you would use the pattern: `buyers/456`. 3. The ID of the bidder itself. So for listing creatives pertaining to bidder (`123`), you would use `buyers/123`. If you want to access all creatives pertaining to both the bidder and all of its child seat accounts, you would use `bidders/{bidderAccountId}`, for example, for all creatives pertaining to bidder (`123`), use `bidders/123`. |
| `params.pageSize` | `integer` | No | Requested page size. The server may return fewer creatives than requested (due to timeout constraint) even if more are available through another call. If unspecified, server will pick an appropriate default. Acceptable values are 1 to 1000, inclusive. |
| `params.pageToken` | `string` | No | A token identifying a page of results the server should return. Typically, this is the value of ListCreativesResponse.nextPageToken returned from the previous call to the 'ListCreatives' method. Page tokens for continued pages are valid for up to five hours, counting from the call to 'ListCreatives' for the first page. |
| `params.filter` | `string` | No | Query string to filter creatives. If no filter is specified, all active creatives will be returned. Example: 'accountId=12345 AND (dealsStatus:DISAPPROVED AND disapprovalReason:UNACCEPTABLE_CONTENT) OR declaredAttributes:IS_COOKIE_TARGETED' |
| `params.view` | `string` | No | Controls the amount of information included in the response. By default only creativeServingDecision is included. To retrieve the entire creative resource (including the declared fields and the creative content) specify the view as "FULL". |

#### `buyers.creatives.get()`

Gets a creative.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the creative to retrieve. See creative.name. |
| `params.view` | `string` | No | Controls the amount of information included in the response. By default only creativeServingDecision is included. To retrieve the entire creative resource (including the declared fields and the creative content) specify the view as "FULL". |

#### `buyers.creatives.create()`

Creates a creative.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the parent buyer that the new creative belongs to that must follow the pattern `buyers/{buyerAccountId}`, where `{buyerAccountId}` represents the account ID of the buyer who owns a creative. For a bidder accessing creatives on behalf of a child seat buyer, `{buyerAccountId}` should represent the account ID of the child seat buyer. |
| `params.resource` | `object` | Yes | The request body. |

#### `buyers.creatives.patch()`

Updates a creative.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. Name of the creative. Follows the pattern `buyers/{buyer}/creatives/{creative}`, where `{buyer}` represents the account ID of the buyer who owns the creative, and `{creative}` is the buyer-specific creative ID that references this creative in the bid response. |
| `params.updateMask` | `string` | No | Field mask to use for partial in-place updates. |
| `params.resource` | `object` | Yes | The request body. |

### `buyers.userLists`

#### `buyers.userLists.get()`

Gets a user list by its name.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the user list to be retrieved. See UserList.name. |

#### `buyers.userLists.list()`

Lists the user lists visible to the current user.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the parent buyer for the user lists to be returned that must follow the pattern `buyers/{buyerAccountId}`, where `{buyerAccountId}` represents the account ID of the buyer who owns user lists. For a bidder accessing user lists on behalf of a child seat buyer , `{buyerAccountId}` should represent the account ID of the child seat buyer. |
| `params.pageSize` | `integer` | No | The number of results to return per page. |
| `params.pageToken` | `string` | No | Continuation page token as received from a previous response. |

#### `buyers.userLists.create()`

Creates a new user list.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the parent buyer of the user list to be retrieved, which must follow the pattern `buyers/{buyerAccountId}`, where `{buyerAccountId}` represents the account ID of the buyer who owns the user list. For a bidder accessing user lists on behalf of a child seat buyer, `{buyerAccountId}` should represent the account ID of the child seat buyer. |
| `params.resource` | `object` | Yes | The request body. |

#### `buyers.userLists.update()`

Updates the given user list. Only user lists with URLRestrictions can be updated.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. Name of the user list that must follow the pattern `buyers/{buyer}/userLists/{user_list}`, where `{buyer}` represents the account ID of the buyer who owns the user list. For a bidder accessing user lists on behalf of a child seat buyer, `{buyer}` represents the account ID of the child seat buyer. `{user_list}` is an int64 identifier assigned by Google to uniquely identify a user list. |
| `params.resource` | `object` | Yes | The request body. |

#### `buyers.userLists.open()`

Changes the status of a user list to OPEN. This allows new users to be added to the user list.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the user list to open. See UserList.name |
| `params.resource` | `object` | Yes | The request body. |

#### `buyers.userLists.close()`

Changes the status of a user list to CLOSED. This prevents new users from being added to the user list.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the user list to close. See UserList.name |
| `params.resource` | `object` | Yes | The request body. |

#### `buyers.userLists.getRemarketingTag()`

This has been sunset as of October 2023, and will return an error response if called. For more information, see the release notes: https://developers.google.com/authorized-buyers/apis/relnotes#real-time-bidding-api Gets remarketing tag for a buyer. A remarketing tag is a piece of JavaScript code that can be placed on a web page. When a user visits a page containing a remarketing tag, Google adds the user to a user list.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. To fetch the remarketing tag for an account, the name must follow the pattern `buyers/{accountId}`, where `{accountId}` represents the ID of the buyer that owns the remarketing tag. For a bidder accessing the remarketing tag on behalf of a child seat buyer, `{accountId}` should represent the ID of the child seat buyer. To fetch the remarketing tag for a specific user list, the name must follow the pattern `buyers/{accountId}/userLists/{userListId}`. See UserList.name. |