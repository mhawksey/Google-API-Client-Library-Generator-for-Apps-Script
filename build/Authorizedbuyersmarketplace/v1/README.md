# Authorized Buyers Marketplace API - Apps Script Client Library

Auto-generated client library for using the **Authorized Buyers Marketplace API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 21 Sep 2025 17:05:21 GMT
- **Last Modified:** Sun, 21 Sep 2025 17:05:21 GMT
- **Created:** Sun, 20 Jul 2025 16:13:37 GMT



---

## API Reference

### `buyers`

### `buyers.auctionPackages`

#### `buyers.auctionPackages.get()`

Gets an auction package given its name.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of auction package to get. Format: `buyers/{accountId}/auctionPackages/{auctionPackageId}` |

#### `buyers.auctionPackages.list()`

List the auction packages. Buyers can use the URL path "/v1/buyers/{accountId}/auctionPackages" to list auction packages for the current buyer and its clients. Bidders can use the URL path "/v1/bidders/{accountId}/auctionPackages" to list auction packages for the bidder, its media planners, its buyers, and all their clients.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Name of the parent buyer that can access the auction package. Format: `buyers/{accountId}`. When used with a bidder account, the auction packages that the bidder, its media planners, its buyers and clients are subscribed to will be listed, in the format `bidders/{accountId}`. |
| `params.pageSize` | `integer` | No | Requested page size. The server may return fewer results than requested. Max allowed page size is 500. |
| `params.pageToken` | `string` | No | The page token as returned. ListAuctionPackagesResponse.nextPageToken |
| `params.filter` | `string` | No | Optional. Optional query string using the [Cloud API list filtering syntax](/authorized-buyers/apis/guides/list-filters). Only supported when parent is bidder. Supported columns for filtering are: * displayName * createTime * updateTime * eligibleSeatIds |
| `params.orderBy` | `string` | No | Optional. An optional query string to sort auction packages using the [Cloud API sorting syntax](https://cloud.google.com/apis/design/design_patterns#sorting_order). If no sort order is specified, results will be returned in an arbitrary order. Only supported when parent is bidder. Supported columns for sorting are: * displayName * createTime * updateTime |

#### `buyers.auctionPackages.subscribe()`

Subscribe to the auction package for the specified buyer. Once subscribed, the bidder will receive a call out for inventory matching the auction package targeting criteria with the auction package deal ID and the specified buyer.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the auction package. Format: `buyers/{accountId}/auctionPackages/{auctionPackageId}` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `buyers.auctionPackages.unsubscribe()`

Unsubscribe from the auction package for the specified buyer. Once unsubscribed, the bidder will no longer receive a call out for the auction package deal ID and the specified buyer.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the auction package. Format: `buyers/{accountId}/auctionPackages/{auctionPackageId}` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `buyers.auctionPackages.subscribeClients()`

Subscribe the specified clients of the buyer to the auction package. If a client in the list does not belong to the buyer, an error response will be returned, and all of the following clients in the list will not be subscribed. Subscribing an already subscribed client will have no effect.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.auctionPackage` | `string` | Yes | Required. Name of the auction package. Format: `buyers/{accountId}/auctionPackages/{auctionPackageId}` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `buyers.auctionPackages.unsubscribeClients()`

Unsubscribe from the auction package for the specified clients of the buyer. Unsubscribing a client that is not subscribed will have no effect.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.auctionPackage` | `string` | Yes | Required. Name of the auction package. Format: `buyers/{accountId}/auctionPackages/{auctionPackageId}` |
| `params.requestBody` | `object` | Yes | The request body. |

### `buyers.clients`

#### `buyers.clients.get()`

Gets a client with a given resource name.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Format: `buyers/{accountId}/clients/{clientAccountId}` |

#### `buyers.clients.list()`

Lists all the clients for the current buyer.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the buyer. Format: `buyers/{accountId}` |
| `params.pageSize` | `integer` | No | Requested page size. If left blank, a default page size of 500 will be applied. |
| `params.pageToken` | `string` | No | A token identifying a page of results the server should return. Typically, this is the value of ListClientsResponse.nextPageToken returned from the previous call to the list method. |
| `params.filter` | `string` | No | Query string using the [Filtering Syntax](https://developers.google.com/authorized-buyers/apis/guides/list-filters) Supported fields for filtering are: * partnerClientId Use this field to filter the clients by the partnerClientId. For example, if the partnerClientId of the client is "1234", the value of this field should be `partnerClientId = "1234"`, in order to get only the client whose partnerClientId is "1234" in the response. |

#### `buyers.clients.create()`

Creates a new client.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the buyer. Format: `buyers/{accountId}` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `buyers.clients.patch()`

Updates an existing client.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. The resource name of the client. Format: `buyers/{accountId}/clients/{clientAccountId}` |
| `params.updateMask` | `string` | No | List of fields to be updated. If empty or unspecified, the service will update all fields populated in the update request excluding the output only fields and primitive fields with default value. Note that explicit field mask is required in order to reset a primitive field back to its default value, for example, false for boolean fields, 0 for integer fields. A special field mask consisting of a single path "*" can be used to indicate full replacement(the equivalent of PUT method), updatable fields unset or unspecified in the input will be cleared or set to default value. Output only fields will be ignored regardless of the value of updateMask. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `buyers.clients.activate()`

Activates an existing client. The state of the client will be updated to "ACTIVE". This method has no effect if the client is already in "ACTIVE" state.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Format: `buyers/{buyerAccountId}/clients/{clientAccountId}` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `buyers.clients.deactivate()`

Deactivates an existing client. The state of the client will be updated to "INACTIVE". This method has no effect if the client is already in "INACTIVE" state.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Format: `buyers/{buyerAccountId}/clients/{clientAccountId}` |
| `params.requestBody` | `object` | Yes | The request body. |

### `buyers.clients.users`

#### `buyers.clients.users.get()`

Retrieves an existing client user.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Format: `buyers/{buyerAccountId}/clients/{clientAccountId}/clientUsers/{userId}` |

#### `buyers.clients.users.list()`

Lists all client users for a specified client.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the client. Format: `buyers/{buyerAccountId}/clients/{clientAccountId}` |
| `params.pageSize` | `integer` | No | Requested page size. If left blank, a default page size of 500 will be applied. |
| `params.pageToken` | `string` | No | A token identifying a page of results the server should return. Typically, this is the value of ListClientUsersResponse.nextPageToken returned from the previous call to the list method. |

#### `buyers.clients.users.create()`

Creates a new client user in "INVITED" state. An email invitation will be sent to the new user, once accepted the user will become active.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the client. Format: `buyers/{accountId}/clients/{clientAccountId}` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `buyers.clients.users.delete()`

Deletes an existing client user. The client user will lose access to the Authorized Buyers UI. Note that if a client user is deleted, the user's access to the UI can't be restored unless a new client user is created and activated.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Format: `buyers/{buyerAccountId}/clients/{clientAccountId}/clientUsers/{userId}` |

#### `buyers.clients.users.activate()`

Activates an existing client user. The state of the client user will be updated from "INACTIVE" to "ACTIVE". This method has no effect if the client user is already in "ACTIVE" state. An error will be returned if the client user to activate is still in "INVITED" state.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Format: `buyers/{buyerAccountId}/clients/{clientAccountId}/clientUsers/{userId}` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `buyers.clients.users.deactivate()`

Deactivates an existing client user. The state of the client user will be updated from "ACTIVE" to "INACTIVE". This method has no effect if the client user is already in "INACTIVE" state. An error will be returned if the client user to deactivate is still in "INVITED" state.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Format: `buyers/{buyerAccountId}/clients/{clientAccountId}/clientUsers/{userId}` |
| `params.requestBody` | `object` | Yes | The request body. |

### `buyers.finalizedDeals`

#### `buyers.finalizedDeals.get()`

Gets a finalized deal given its name.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Format: `buyers/{accountId}/finalizedDeals/{dealId}` |

#### `buyers.finalizedDeals.list()`

Lists finalized deals. Use the URL path "/v1/buyers/{accountId}/finalizedDeals" to list finalized deals for the current buyer and its clients. Bidders can use the URL path "/v1/bidders/{accountId}/finalizedDeals" to list finalized deals for the bidder, its buyers and all their clients.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The buyer to list the finalized deals for, in the format: `buyers/{accountId}`. When used to list finalized deals for a bidder, its buyers and clients, in the format `bidders/{accountId}`. |
| `params.filter` | `string` | No | Optional query string using the [Cloud API list filtering syntax](https://developers.google.com/authorized-buyers/apis/guides/list-filters) Supported columns for filtering are: * deal.displayName * deal.dealType * deal.createTime * deal.updateTime * deal.flightStartTime * deal.flightEndTime * deal.eligibleSeatIds * dealServingStatus |
| `params.orderBy` | `string` | No | An optional query string to sort finalized deals using the [Cloud API sorting syntax](https://cloud.google.com/apis/design/design_patterns#sorting_order). If no sort order is specified, results will be returned in an arbitrary order. Supported columns for sorting are: * deal.displayName * deal.createTime * deal.updateTime * deal.flightStartTime * deal.flightEndTime * rtbMetrics.bidRequests7Days * rtbMetrics.bids7Days * rtbMetrics.adImpressions7Days * rtbMetrics.bidRate7Days * rtbMetrics.filteredBidRate7Days * rtbMetrics.mustBidRateCurrentMonth |
| `params.pageSize` | `integer` | No | Requested page size. The server may return fewer results than requested. If requested more than 500, the server will return 500 results per page. If unspecified, the server will pick a default page size of 100. |
| `params.pageToken` | `string` | No | The page token as returned from ListFinalizedDealsResponse. |

#### `buyers.finalizedDeals.pause()`

Pauses serving of the given finalized deal. This call only pauses the serving status, and does not affect other fields of the finalized deal. Calling this method for an already paused deal has no effect. This method only applies to programmatic guaranteed deals and preferred deals.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Format: `buyers/{accountId}/finalizedDeals/{dealId}` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `buyers.finalizedDeals.resume()`

Resumes serving of the given finalized deal. Calling this method for an running deal has no effect. If a deal is initially paused by the seller, calling this method will not resume serving of the deal until the seller also resumes the deal. This method only applies to programmatic guaranteed deals and preferred deals.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Format: `buyers/{accountId}/finalizedDeals/{dealId}` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `buyers.finalizedDeals.addCreative()`

Add creative to be used in the bidding process for a finalized deal. For programmatic guaranteed deals, it's recommended that you associate at least one approved creative with the deal before calling SetReadyToServe, to help reduce the number of bid responses filtered because they don't contain approved creatives. Creatives successfully added to a deal can be found in the Realtime-bidding Creatives API creative.deal_ids. This method only applies to programmatic guaranteed deals. Maximum number of 1000 creatives can be added to a finalized deal.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.deal` | `string` | Yes | Required. Name of the finalized deal in the format of: `buyers/{accountId}/finalizedDeals/{dealId}` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `buyers.finalizedDeals.setReadyToServe()`

Sets the given finalized deal as ready to serve. By default, deals are set as ready to serve as soon as they're finalized. If you want to opt out of the default behavior, and manually indicate that deals are ready to serve, ask your Technical Account Manager to add you to the allowlist. If you choose to use this method, finalized deals belonging to the bidder and its child seats don't start serving until after you call `setReadyToServe`, and after the deals become active. For example, you can use this method to delay receiving bid requests until your creative is ready. This method only applies to programmatic guaranteed deals.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.deal` | `string` | Yes | Required. Format: `buyers/{accountId}/finalizedDeals/{dealId}` |
| `params.requestBody` | `object` | Yes | The request body. |

### `buyers.proposals`

#### `buyers.proposals.get()`

Gets a proposal using its resource name. The proposal is returned at the latest revision.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the proposal. Format: `buyers/{accountId}/proposals/{proposalId}` |

#### `buyers.proposals.patch()`

Updates the proposal at the given revision number. If the revision number in the request is behind the latest one kept in the server, an error message will be returned. See FieldMask for how to use FieldMask. Only fields specified in the UpdateProposalRequest.update_mask will be updated; Fields noted as 'Immutable' or 'Output only' yet specified in the UpdateProposalRequest.update_mask will be ignored and left unchanged. Updating a private auction proposal is only allowed for buyer private data, all other fields are immutable.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Immutable. The name of the proposal serving as a unique identifier. Format: buyers/{accountId}/proposals/{proposalId} |
| `params.updateMask` | `string` | No | List of fields to be updated. If empty or unspecified, the service will update all fields populated in the update request excluding the output only fields and primitive fields with default value. Note that explicit field mask is required in order to reset a primitive field back to its default value, for example, false for boolean fields, 0 for integer fields. A special field mask consisting of a single path "*" can be used to indicate full replacement(the equivalent of PUT method), updatable fields unset or unspecified in the input will be cleared or set to default value. Output only fields will be ignored regardless of the value of updateMask. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `buyers.proposals.list()`

Lists proposals. A filter expression using [Cloud API list filtering syntax](https://developers.google.com/authorized-buyers/apis/guides/list-filters) may be specified to filter the results.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent that owns the collection of proposals Format: `buyers/{accountId}` |
| `params.filter` | `string` | No | Optional query string using the [Cloud API list filtering syntax](https://developers.google.com/authorized-buyers/apis/guides/list-filters) Supported columns for filtering are: * displayName * dealType * updateTime * state |
| `params.pageSize` | `integer` | No | Requested page size. The server may return fewer results than requested. If unspecified, the server will put a size of 500. |
| `params.pageToken` | `string` | No | The page token as returned from ListProposalsResponse. |

#### `buyers.proposals.cancelNegotiation()`

Cancels an ongoing negotiation on a proposal. This does not cancel or end serving for the deals if the proposal has been finalized. If the proposal has not been finalized before, calling this method will set the Proposal.state to `TERMINATED` and increment the Proposal.proposal_revision. If the proposal has been finalized before and is under renegotiation now, calling this method will reset the Proposal.state to `FINALIZED` and increment the Proposal.proposal_revision. This method does not support private auction proposals whose Proposal.deal_type is 'PRIVATE_AUCTION'.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.proposal` | `string` | Yes | Name of the proposal. Format: `buyers/{accountId}/proposals/{proposalId}` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `buyers.proposals.accept()`

Accepts the proposal at the given revision number. If the revision number in the request is behind the latest from the server, an error message will be returned. This call updates the Proposal.state from `BUYER_ACCEPTANCE_REQUESTED` to `FINALIZED`; it has no side effect if the Proposal.state is already `FINALIZED` and throws exception if the Proposal.state is not either `BUYER_ACCEPTANCE_REQUESTED` or `FINALIZED`. Accepting a proposal means the buyer understands and accepts the Proposal.terms_and_conditions proposed by the seller.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Name of the proposal. Format: `buyers/{accountId}/proposals/{proposalId}` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `buyers.proposals.addNote()`

Creates a note for this proposal and sends to the seller. This method is not supported for proposals with DealType set to 'PRIVATE_AUCTION'.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.proposal` | `string` | Yes | Name of the proposal. Format: `buyers/{accountId}/proposals/{proposalId}` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `buyers.proposals.sendRfp()`

Sends a request for proposal (RFP) to a publisher to initiate the negotiation regarding certain inventory. In the RFP, buyers can specify the deal type, deal terms, start and end dates, targeting, and a message to the publisher. Once the RFP is sent, a proposal in `SELLER_REVIEW_REQUESTED` state will be created and returned in the response. The publisher may review your request and respond with detailed deals in the proposal.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.buyer` | `string` | Yes | Required. The current buyer who is sending the RFP in the format: `buyers/{accountId}`. |
| `params.requestBody` | `object` | Yes | The request body. |

### `buyers.proposals.deals`

#### `buyers.proposals.deals.get()`

Gets a deal given its name. The deal is returned at its head revision.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Format: buyers/{accountId}/proposals/{proposalId}/deals/{dealId} |

#### `buyers.proposals.deals.patch()`

Updates the given deal at the buyer known revision number. If the server revision has advanced since the passed-in proposal.proposal_revision an ABORTED error message will be returned. The revision number is incremented by the server whenever the proposal or its constituent deals are updated. Note: The revision number is kept at a proposal level. The buyer of the API is expected to keep track of the revision number after the last update operation and send it in as part of the next update request. This way, if there are further changes on the server (for example, seller making new updates), then the server can detect conflicts and reject the proposed changes.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Immutable. The unique identifier of the deal. Auto-generated by the server when a deal is created. Format: buyers/{accountId}/proposals/{proposalId}/deals/{dealId} |
| `params.updateMask` | `string` | No | List of fields to be updated. If empty or unspecified, the service will update all fields populated in the update request excluding the output only fields and primitive fields with default value. Note that explicit field mask is required in order to reset a primitive field back to its default value, for example, false for boolean fields, 0 for integer fields. A special field mask consisting of a single path "*" can be used to indicate full replacement(the equivalent of PUT method), updatable fields unset or unspecified in the input will be cleared or set to default value. Output only fields will be ignored regardless of the value of updateMask. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `buyers.proposals.deals.batchUpdate()`

Batch updates multiple deals in the same proposal.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the proposal containing the deals to batch update. Format: buyers/{accountId}/proposals/{proposalId} |
| `params.requestBody` | `object` | Yes | The request body. |

#### `buyers.proposals.deals.list()`

Lists all deals in a proposal. To retrieve only the finalized revision deals regardless if a deal is being renegotiated, see the FinalizedDeals resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the proposal containing the deals to retrieve. Format: buyers/{accountId}/proposals/{proposalId} |
| `params.pageSize` | `integer` | No | Requested page size. The server may return fewer results than requested. If requested more than 500, the server will return 500 results per page. If unspecified, the server will pick a default page size of 100. |
| `params.pageToken` | `string` | No | The page token as returned from ListDealsResponse. |

### `buyers.publisherProfiles`

#### `buyers.publisherProfiles.get()`

Gets the requested publisher profile by name.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the publisher profile. Format: `buyers/{buyerId}/publisherProfiles/{publisherProfileId}` |

#### `buyers.publisherProfiles.list()`

Lists publisher profiles. The returned publisher profiles aren't in any defined order. The order of the results might change. A new publisher profile can appear in any place in the list of returned results.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent that owns the collection of publisher profiles Format: `buyers/{buyerId}` |
| `params.pageSize` | `integer` | No | Requested page size. The server may return fewer results than requested. If requested more than 500, the server will return 500 results per page. If unspecified, the server will pick a default page size of 100. |
| `params.pageToken` | `string` | No | The page token as returned from a previous ListPublisherProfilesResponse. |
| `params.filter` | `string` | No | Optional query string using the [Cloud API list filtering] (https://developers.google.com/authorized-buyers/apis/guides/list-filters) syntax. |

### `bidders`

### `bidders.auctionPackages`

#### `bidders.auctionPackages.list()`

List the auction packages. Buyers can use the URL path "/v1/buyers/{accountId}/auctionPackages" to list auction packages for the current buyer and its clients. Bidders can use the URL path "/v1/bidders/{accountId}/auctionPackages" to list auction packages for the bidder, its media planners, its buyers, and all their clients.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Name of the parent buyer that can access the auction package. Format: `buyers/{accountId}`. When used with a bidder account, the auction packages that the bidder, its media planners, its buyers and clients are subscribed to will be listed, in the format `bidders/{accountId}`. |
| `params.pageSize` | `integer` | No | Requested page size. The server may return fewer results than requested. Max allowed page size is 500. |
| `params.pageToken` | `string` | No | The page token as returned. ListAuctionPackagesResponse.nextPageToken |
| `params.filter` | `string` | No | Optional. Optional query string using the [Cloud API list filtering syntax](/authorized-buyers/apis/guides/list-filters). Only supported when parent is bidder. Supported columns for filtering are: * displayName * createTime * updateTime * eligibleSeatIds |
| `params.orderBy` | `string` | No | Optional. An optional query string to sort auction packages using the [Cloud API sorting syntax](https://cloud.google.com/apis/design/design_patterns#sorting_order). If no sort order is specified, results will be returned in an arbitrary order. Only supported when parent is bidder. Supported columns for sorting are: * displayName * createTime * updateTime |

### `bidders.finalizedDeals`

#### `bidders.finalizedDeals.list()`

Lists finalized deals. Use the URL path "/v1/buyers/{accountId}/finalizedDeals" to list finalized deals for the current buyer and its clients. Bidders can use the URL path "/v1/bidders/{accountId}/finalizedDeals" to list finalized deals for the bidder, its buyers and all their clients.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The buyer to list the finalized deals for, in the format: `buyers/{accountId}`. When used to list finalized deals for a bidder, its buyers and clients, in the format `bidders/{accountId}`. |
| `params.filter` | `string` | No | Optional query string using the [Cloud API list filtering syntax](https://developers.google.com/authorized-buyers/apis/guides/list-filters) Supported columns for filtering are: * deal.displayName * deal.dealType * deal.createTime * deal.updateTime * deal.flightStartTime * deal.flightEndTime * deal.eligibleSeatIds * dealServingStatus |
| `params.orderBy` | `string` | No | An optional query string to sort finalized deals using the [Cloud API sorting syntax](https://cloud.google.com/apis/design/design_patterns#sorting_order). If no sort order is specified, results will be returned in an arbitrary order. Supported columns for sorting are: * deal.displayName * deal.createTime * deal.updateTime * deal.flightStartTime * deal.flightEndTime * rtbMetrics.bidRequests7Days * rtbMetrics.bids7Days * rtbMetrics.adImpressions7Days * rtbMetrics.bidRate7Days * rtbMetrics.filteredBidRate7Days * rtbMetrics.mustBidRateCurrentMonth |
| `params.pageSize` | `integer` | No | Requested page size. The server may return fewer results than requested. If requested more than 500, the server will return 500 results per page. If unspecified, the server will pick a default page size of 100. |
| `params.pageToken` | `string` | No | The page token as returned from ListFinalizedDealsResponse. |