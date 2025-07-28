# Ad Exchange Buyer API II - Apps Script Client Library

Auto-generated client library for using the **Ad Exchange Buyer API II (version: v2beta1)** in Google Apps Script.

## Metadata

- **Last Checked:** Mon, 28 Jul 2025 21:32:47 GMT
- **Last Modified:** Sun, 27 Jul 2025 12:20:08 GMT
- **Created:** Sun, 20 Jul 2025 16:10:43 GMT



---

## API Reference

### `accounts`

### `accounts.creatives`

#### `accounts.creatives.create()`

Creates a creative.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | The account that this creative belongs to. Can be used to filter the response of the creatives.list method. |
| `params.duplicateIdMode` | `string` | No | Indicates if multiple creatives can share an ID or not. Default is NO_DUPLICATES (one ID per creative). |
| `params.resource` | `object` | Yes | The request body. |

#### `accounts.creatives.update()`

Updates a creative.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | The account that this creative belongs to. Can be used to filter the response of the creatives.list method. |
| `params.creativeId` | `string` | Yes | The buyer-defined creative ID of this creative. Can be used to filter the response of the creatives.list method. |
| `params.resource` | `object` | Yes | The request body. |

#### `accounts.creatives.get()`

Gets a creative.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | The account the creative belongs to. |
| `params.creativeId` | `string` | Yes | The ID of the creative to retrieve. |

#### `accounts.creatives.list()`

Lists creatives.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | The account to list the creatives from. Specify "-" to list all creatives the current user has access to. |
| `params.pageSize` | `integer` | No | Requested page size. The server may return fewer creatives than requested (due to timeout constraint) even if more are available through another call. If unspecified, server will pick an appropriate default. Acceptable values are 1 to 1000, inclusive. |
| `params.pageToken` | `string` | No | A token identifying a page of results the server should return. Typically, this is the value of ListCreativesResponse.next_page_token returned from the previous call to 'ListCreatives' method. |
| `params.query` | `string` | No | An optional query string to filter creatives. If no filter is specified, all active creatives will be returned. Supported queries are: - accountId=*account_id_string* - creativeId=*creative_id_string* - dealsStatus: {approved, conditionally_approved, disapproved, not_checked} - openAuctionStatus: {approved, conditionally_approved, disapproved, not_checked} - attribute: {a numeric attribute from the list of attributes} - disapprovalReason: {a reason from DisapprovalReason} Example: 'accountId=12345 AND (dealsStatus:disapproved AND disapprovalReason:unacceptable_content) OR attribute:47' |

#### `accounts.creatives.watch()`

Watches a creative. Will result in push notifications being sent to the topic when the creative changes status.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | The account of the creative to watch. |
| `params.creativeId` | `string` | Yes | The creative ID to watch for status changes. Specify "-" to watch all creatives under the above account. If both creative-level and account-level notifications are sent, only a single notification will be sent to the creative-level notification topic. |
| `params.resource` | `object` | Yes | The request body. |

#### `accounts.creatives.stopWatching()`

Stops watching a creative. Will stop push notifications being sent to the topics when the creative changes status.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | The account of the creative to stop notifications for. |
| `params.creativeId` | `string` | Yes | The creative ID of the creative to stop notifications for. Specify "-" to specify stopping account level notifications. |
| `params.resource` | `object` | Yes | The request body. |

### `accounts.creatives.dealAssociations`

#### `accounts.creatives.dealAssociations.add()`

Associate an existing deal with a creative.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | The account the creative belongs to. |
| `params.creativeId` | `string` | Yes | The ID of the creative associated with the deal. |
| `params.resource` | `object` | Yes | The request body. |

#### `accounts.creatives.dealAssociations.remove()`

Remove the association between a deal and a creative.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | The account the creative belongs to. |
| `params.creativeId` | `string` | Yes | The ID of the creative associated with the deal. |
| `params.resource` | `object` | Yes | The request body. |

#### `accounts.creatives.dealAssociations.list()`

List all creative-deal associations.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | The account to list the associations from. Specify "-" to list all creatives the current user has access to. |
| `params.creativeId` | `string` | Yes | The creative ID to list the associations from. Specify "-" to list all creatives under the above account. |
| `params.pageSize` | `integer` | No | Requested page size. Server may return fewer associations than requested. If unspecified, server will pick an appropriate default. |
| `params.pageToken` | `string` | No | A token identifying a page of results the server should return. Typically, this is the value of ListDealAssociationsResponse.next_page_token returned from the previous call to 'ListDealAssociations' method. |
| `params.query` | `string` | No | An optional query string to filter deal associations. If no filter is specified, all associations will be returned. Supported queries are: - accountId=*account_id_string* - creativeId=*creative_id_string* - dealsId=*deals_id_string* - dealsStatus:{approved, conditionally_approved, disapproved, not_checked} - openAuctionStatus:{approved, conditionally_approved, disapproved, not_checked} Example: 'dealsId=12345 AND dealsStatus:disapproved' |

### `accounts.clients`

#### `accounts.clients.get()`

Gets a client buyer with a given client account ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | Numerical account ID of the client's sponsor buyer. (required) |
| `params.clientAccountId` | `string` | Yes | Numerical account ID of the client buyer to retrieve. (required) |

#### `accounts.clients.list()`

Lists all the clients for the current sponsor buyer.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | Unique numerical account ID of the sponsor buyer to list the clients for. |
| `params.pageSize` | `integer` | No | Requested page size. The server may return fewer clients than requested. If unspecified, the server will pick an appropriate default. |
| `params.pageToken` | `string` | No | A token identifying a page of results the server should return. Typically, this is the value of ListClientsResponse.nextPageToken returned from the previous call to the accounts.clients.list method. |
| `params.partnerClientId` | `string` | No | Optional unique identifier (from the standpoint of an Ad Exchange sponsor buyer partner) of the client to return. If specified, at most one client will be returned in the response. |

#### `accounts.clients.create()`

Creates a new client buyer.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | Unique numerical account ID for the buyer of which the client buyer is a customer; the sponsor buyer to create a client for. (required) |
| `params.resource` | `object` | Yes | The request body. |

#### `accounts.clients.update()`

Updates an existing client buyer.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | Unique numerical account ID for the buyer of which the client buyer is a customer; the sponsor buyer to update a client for. (required) |
| `params.clientAccountId` | `string` | Yes | Unique numerical account ID of the client to update. (required) |
| `params.resource` | `object` | Yes | The request body. |

### `accounts.clients.users`

#### `accounts.clients.users.list()`

Lists all the known client users for a specified sponsor buyer account ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | Numerical account ID of the sponsor buyer of the client to list users for. (required) |
| `params.clientAccountId` | `string` | Yes | The account ID of the client buyer to list users for. (required) You must specify either a string representation of a numerical account identifier or the `-` character to list all the client users for all the clients of a given sponsor buyer. |
| `params.pageSize` | `integer` | No | Requested page size. The server may return fewer clients than requested. If unspecified, the server will pick an appropriate default. |
| `params.pageToken` | `string` | No | A token identifying a page of results the server should return. Typically, this is the value of ListClientUsersResponse.nextPageToken returned from the previous call to the accounts.clients.users.list method. |

#### `accounts.clients.users.update()`

Updates an existing client user. Only the user status can be changed on update.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | Numerical account ID of the client's sponsor buyer. (required) |
| `params.clientAccountId` | `string` | Yes | Numerical account ID of the client buyer that the user to be retrieved is associated with. (required) |
| `params.userId` | `string` | Yes | Numerical identifier of the user to retrieve. (required) |
| `params.resource` | `object` | Yes | The request body. |

#### `accounts.clients.users.get()`

Retrieves an existing client user.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | Numerical account ID of the client's sponsor buyer. (required) |
| `params.clientAccountId` | `string` | Yes | Numerical account ID of the client buyer that the user to be retrieved is associated with. (required) |
| `params.userId` | `string` | Yes | Numerical identifier of the user to retrieve. (required) |

### `accounts.clients.invitations`

#### `accounts.clients.invitations.create()`

Creates and sends out an email invitation to access an Ad Exchange client buyer account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | Numerical account ID of the client's sponsor buyer. (required) |
| `params.clientAccountId` | `string` | Yes | Numerical account ID of the client buyer that the user should be associated with. (required) |
| `params.resource` | `object` | Yes | The request body. |

#### `accounts.clients.invitations.get()`

Retrieves an existing client user invitation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | Numerical account ID of the client's sponsor buyer. (required) |
| `params.clientAccountId` | `string` | Yes | Numerical account ID of the client buyer that the user invitation to be retrieved is associated with. (required) |
| `params.invitationId` | `string` | Yes | Numerical identifier of the user invitation to retrieve. (required) |

#### `accounts.clients.invitations.list()`

Lists all the client users invitations for a client with a given account ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | Numerical account ID of the client's sponsor buyer. (required) |
| `params.clientAccountId` | `string` | Yes | Numerical account ID of the client buyer to list invitations for. (required) You must either specify a string representation of a numerical account identifier or the `-` character to list all the invitations for all the clients of a given sponsor buyer. |
| `params.pageSize` | `integer` | No | Requested page size. Server may return fewer clients than requested. If unspecified, server will pick an appropriate default. |
| `params.pageToken` | `string` | No | A token identifying a page of results the server should return. Typically, this is the value of ListClientUserInvitationsResponse.nextPageToken returned from the previous call to the clients.invitations.list method. |

### `accounts.proposals`

#### `accounts.proposals.get()`

Gets a proposal given its ID. The proposal is returned at its head revision.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | Account ID of the buyer. |
| `params.proposalId` | `string` | Yes | The unique ID of the proposal |

#### `accounts.proposals.create()`

Create the given proposal. Each created proposal and any deals it contains are assigned a unique ID by the server.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | Account ID of the buyer. |
| `params.resource` | `object` | Yes | The request body. |

#### `accounts.proposals.update()`

Update the given proposal at the client known revision number. If the server revision has advanced since the passed-in `proposal.proposal_revision`, an `ABORTED` error message will be returned. Only the buyer-modifiable fields of the proposal will be updated. Note that the deals in the proposal will be updated to match the passed-in copy. If a passed-in deal does not have a `deal_id`, the server will assign a new unique ID and create the deal. If passed-in deal has a `deal_id`, it will be updated to match the passed-in copy. Any existing deals not present in the passed-in proposal will be deleted. It is an error to pass in a deal with a `deal_id` not present at head.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | Account ID of the buyer. |
| `params.proposalId` | `string` | Yes | The unique ID of the proposal. |
| `params.resource` | `object` | Yes | The request body. |

#### `accounts.proposals.list()`

List proposals. A filter expression (PQL query) may be specified to filter the results. To retrieve all finalized proposals, regardless if a proposal is being renegotiated, see the FinalizedProposals resource. Note that Bidder/ChildSeat relationships differ from the usual behavior. A Bidder account can only see its child seats' proposals by specifying the ChildSeat's accountId in the request path.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | Account ID of the buyer. |
| `params.filter` | `string` | No | An optional PQL filter query used to query for proposals. Nested repeated fields, such as proposal.deals.targetingCriterion, cannot be filtered. |
| `params.pageSize` | `integer` | No | Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default. |
| `params.pageToken` | `string` | No | The page token as returned from ListProposalsResponse. |
| `params.filterSyntax` | `string` | No | Syntax the filter is written in. Current implementation defaults to PQL but in the future it will be LIST_FILTER. |

#### `accounts.proposals.addNote()`

Create a new note and attach it to the proposal. The note is assigned a unique ID by the server. The proposal revision number will not increase when associated with a new note.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | Account ID of the buyer. |
| `params.proposalId` | `string` | Yes | The ID of the proposal to attach the note to. |
| `params.resource` | `object` | Yes | The request body. |

#### `accounts.proposals.cancelNegotiation()`

Cancel an ongoing negotiation on a proposal. This does not cancel or end serving for the deals if the proposal has been finalized, but only cancels a negotiation unilaterally.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | Account ID of the buyer. |
| `params.proposalId` | `string` | Yes | The ID of the proposal to cancel negotiation for. |
| `params.resource` | `object` | Yes | The request body. |

#### `accounts.proposals.accept()`

Mark the proposal as accepted at the given revision number. If the number does not match the server's revision number an `ABORTED` error message will be returned. This call updates the proposal_state from `PROPOSED` to `BUYER_ACCEPTED`, or from `SELLER_ACCEPTED` to `FINALIZED`. Upon calling this endpoint, the buyer implicitly agrees to the terms and conditions optionally set within the proposal by the publisher.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | Account ID of the buyer. |
| `params.proposalId` | `string` | Yes | The ID of the proposal to accept. |
| `params.resource` | `object` | Yes | The request body. |

#### `accounts.proposals.completeSetup()`

You can opt-in to manually update proposals to indicate that setup is complete. By default, proposal setup is automatically completed after their deals are finalized. Contact your Technical Account Manager to opt in. Buyers can call this method when the proposal has been finalized, and all the required creatives have been uploaded using the Creatives API. This call updates the `is_setup_completed` field on the deals in the proposal, and notifies the seller. The server then advances the revision number of the most recent proposal. To mark an individual deal as ready to serve, call `buyers.finalizedDeals.setReadyToServe` in the Marketplace API.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | Account ID of the buyer. |
| `params.proposalId` | `string` | Yes | The ID of the proposal to mark as setup completed. |
| `params.resource` | `object` | Yes | The request body. |

#### `accounts.proposals.pause()`

Update the given proposal to pause serving. This method will set the `DealServingMetadata.DealPauseStatus.has_buyer_paused` bit to true for all deals in the proposal. It is a no-op to pause an already-paused proposal. It is an error to call PauseProposal for a proposal that is not finalized or renegotiating.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | Account ID of the buyer. |
| `params.proposalId` | `string` | Yes | The ID of the proposal to pause. |
| `params.resource` | `object` | Yes | The request body. |

#### `accounts.proposals.resume()`

Update the given proposal to resume serving. This method will set the `DealServingMetadata.DealPauseStatus.has_buyer_paused` bit to false for all deals in the proposal. Note that if the `has_seller_paused` bit is also set, serving will not resume until the seller also resumes. It is a no-op to resume an already-running proposal. It is an error to call ResumeProposal for a proposal that is not finalized or renegotiating.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | Account ID of the buyer. |
| `params.proposalId` | `string` | Yes | The ID of the proposal to resume. |
| `params.resource` | `object` | Yes | The request body. |

### `accounts.finalizedProposals`

#### `accounts.finalizedProposals.list()`

List finalized proposals, regardless if a proposal is being renegotiated. A filter expression (PQL query) may be specified to filter the results. The notes will not be returned.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | Account ID of the buyer. |
| `params.filter` | `string` | No | An optional PQL filter query used to query for proposals. Nested repeated fields, such as proposal.deals.targetingCriterion, cannot be filtered. |
| `params.pageSize` | `integer` | No | Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default. |
| `params.pageToken` | `string` | No | The page token as returned from ListProposalsResponse. |
| `params.filterSyntax` | `string` | No | Syntax the filter is written in. Current implementation defaults to PQL but in the future it will be LIST_FILTER. |

#### `accounts.finalizedProposals.pause()`

Update given deals to pause serving. This method will set the `DealServingMetadata.DealPauseStatus.has_buyer_paused` bit to true for all listed deals in the request. Currently, this method only applies to PG and PD deals. For PA deals, call accounts.proposals.pause endpoint. It is a no-op to pause already-paused deals. It is an error to call PauseProposalDeals for deals which are not part of the proposal of proposal_id or which are not finalized or renegotiating.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | Account ID of the buyer. |
| `params.proposalId` | `string` | Yes | The proposal_id of the proposal containing the deals. |
| `params.resource` | `object` | Yes | The request body. |

#### `accounts.finalizedProposals.resume()`

Update given deals to resume serving. This method will set the `DealServingMetadata.DealPauseStatus.has_buyer_paused` bit to false for all listed deals in the request. Currently, this method only applies to PG and PD deals. For PA deals, call accounts.proposals.resume endpoint. It is a no-op to resume running deals or deals paused by the other party. It is an error to call ResumeProposalDeals for deals which are not part of the proposal of proposal_id or which are not finalized or renegotiating.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | Account ID of the buyer. |
| `params.proposalId` | `string` | Yes | The proposal_id of the proposal containing the deals. |
| `params.resource` | `object` | Yes | The request body. |

### `accounts.products`

#### `accounts.products.get()`

Gets the requested product by ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | Account ID of the buyer. |
| `params.productId` | `string` | Yes | The ID for the product to get the head revision for. |

#### `accounts.products.list()`

List all products visible to the buyer (optionally filtered by the specified PQL query).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | Account ID of the buyer. |
| `params.filter` | `string` | No | An optional PQL query used to query for products. See https://developers.google.com/ad-manager/docs/pqlreference for documentation about PQL and examples. Nested repeated fields, such as product.targetingCriterion.inclusions, cannot be filtered. |
| `params.pageSize` | `integer` | No | Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default. |
| `params.pageToken` | `string` | No | The page token as returned from ListProductsResponse. |

### `accounts.publisherProfiles`

#### `accounts.publisherProfiles.get()`

Gets the requested publisher profile by id.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | Account ID of the buyer. |
| `params.publisherProfileId` | `string` | Yes | The id for the publisher profile to get. |

#### `accounts.publisherProfiles.list()`

List all publisher profiles visible to the buyer

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountId` | `string` | Yes | Account ID of the buyer. |
| `params.pageSize` | `integer` | No | Specify the number of results to include per page. |
| `params.pageToken` | `string` | No | The page token as return from ListPublisherProfilesResponse. |

### `bidders`

### `bidders.accounts`

### `bidders.accounts.filterSets`

#### `bidders.accounts.filterSets.create()`

Creates the specified filter set for the account with the given account ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.ownerName` | `string` | Yes | Name of the owner (bidder or account) of the filter set to be created. For example: - For a bidder-level filter set for bidder 123: `bidders/123` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456` |
| `params.isTransient` | `boolean` | No | Whether the filter set is transient, or should be persisted indefinitely. By default, filter sets are not transient. If transient, it will be available for at least 1 hour after creation. |
| `params.resource` | `object` | Yes | The request body. |

#### `bidders.accounts.filterSets.get()`

Retrieves the requested filter set for the account with the given account ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Full name of the resource being requested. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc` |

#### `bidders.accounts.filterSets.list()`

Lists all filter sets for the account with the given account ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.ownerName` | `string` | Yes | Name of the owner (bidder or account) of the filter sets to be listed. For example: - For a bidder-level filter set for bidder 123: `bidders/123` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456` |
| `params.pageSize` | `integer` | No | Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default. |
| `params.pageToken` | `string` | No | A token identifying a page of results the server should return. Typically, this is the value of ListFilterSetsResponse.nextPageToken returned from the previous call to the accounts.filterSets.list method. |

#### `bidders.accounts.filterSets.delete()`

Deletes the requested filter set from the account with the given account ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Full name of the resource to delete. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc` |

### `bidders.accounts.filterSets.impressionMetrics`

#### `bidders.accounts.filterSets.impressionMetrics.list()`

Lists all metrics that are measured in terms of number of impressions.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.filterSetName` | `string` | Yes | Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc` |
| `params.pageSize` | `integer` | No | Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default. |
| `params.pageToken` | `string` | No | A token identifying a page of results the server should return. Typically, this is the value of ListImpressionMetricsResponse.nextPageToken returned from the previous call to the impressionMetrics.list method. |

### `bidders.accounts.filterSets.bidMetrics`

#### `bidders.accounts.filterSets.bidMetrics.list()`

Lists all metrics that are measured in terms of number of bids.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.filterSetName` | `string` | Yes | Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc` |
| `params.pageSize` | `integer` | No | Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default. |
| `params.pageToken` | `string` | No | A token identifying a page of results the server should return. Typically, this is the value of ListBidMetricsResponse.nextPageToken returned from the previous call to the bidMetrics.list method. |

### `bidders.accounts.filterSets.filteredBidRequests`

#### `bidders.accounts.filterSets.filteredBidRequests.list()`

List all reasons that caused a bid request not to be sent for an impression, with the number of bid requests not sent for each reason.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.filterSetName` | `string` | Yes | Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc` |
| `params.pageSize` | `integer` | No | Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default. |
| `params.pageToken` | `string` | No | A token identifying a page of results the server should return. Typically, this is the value of ListFilteredBidRequestsResponse.nextPageToken returned from the previous call to the filteredBidRequests.list method. |

### `bidders.accounts.filterSets.bidResponseErrors`

#### `bidders.accounts.filterSets.bidResponseErrors.list()`

List all errors that occurred in bid responses, with the number of bid responses affected for each reason.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.filterSetName` | `string` | Yes | Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc` |
| `params.pageSize` | `integer` | No | Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default. |
| `params.pageToken` | `string` | No | A token identifying a page of results the server should return. Typically, this is the value of ListBidResponseErrorsResponse.nextPageToken returned from the previous call to the bidResponseErrors.list method. |

### `bidders.accounts.filterSets.bidResponsesWithoutBids`

#### `bidders.accounts.filterSets.bidResponsesWithoutBids.list()`

List all reasons for which bid responses were considered to have no applicable bids, with the number of bid responses affected for each reason.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.filterSetName` | `string` | Yes | Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc` |
| `params.pageSize` | `integer` | No | Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default. |
| `params.pageToken` | `string` | No | A token identifying a page of results the server should return. Typically, this is the value of ListBidResponsesWithoutBidsResponse.nextPageToken returned from the previous call to the bidResponsesWithoutBids.list method. |

### `bidders.accounts.filterSets.filteredBids`

#### `bidders.accounts.filterSets.filteredBids.list()`

List all reasons for which bids were filtered, with the number of bids filtered for each reason.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.filterSetName` | `string` | Yes | Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc` |
| `params.pageSize` | `integer` | No | Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default. |
| `params.pageToken` | `string` | No | A token identifying a page of results the server should return. Typically, this is the value of ListFilteredBidsResponse.nextPageToken returned from the previous call to the filteredBids.list method. |

### `bidders.accounts.filterSets.filteredBids.details`

#### `bidders.accounts.filterSets.filteredBids.details.list()`

List all details associated with a specific reason for which bids were filtered, with the number of bids filtered for each detail.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.filterSetName` | `string` | Yes | Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc` |
| `params.creativeStatusId` | `integer` | Yes | The ID of the creative status for which to retrieve a breakdown by detail. See [creative-status-codes](https://developers.google.com/authorized-buyers/rtb/downloads/creative-status-codes). Details are only available for statuses 10, 14, 15, 17, 18, 19, 86, and 87. |
| `params.pageSize` | `integer` | No | Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default. |
| `params.pageToken` | `string` | No | A token identifying a page of results the server should return. Typically, this is the value of ListCreativeStatusBreakdownByDetailResponse.nextPageToken returned from the previous call to the filteredBids.details.list method. |

### `bidders.accounts.filterSets.filteredBids.creatives`

#### `bidders.accounts.filterSets.filteredBids.creatives.list()`

List all creatives associated with a specific reason for which bids were filtered, with the number of bids filtered for each creative.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.filterSetName` | `string` | Yes | Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc` |
| `params.creativeStatusId` | `integer` | Yes | The ID of the creative status for which to retrieve a breakdown by creative. See [creative-status-codes](https://developers.google.com/authorized-buyers/rtb/downloads/creative-status-codes). |
| `params.pageSize` | `integer` | No | Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default. |
| `params.pageToken` | `string` | No | A token identifying a page of results the server should return. Typically, this is the value of ListCreativeStatusBreakdownByCreativeResponse.nextPageToken returned from the previous call to the filteredBids.creatives.list method. |

### `bidders.accounts.filterSets.losingBids`

#### `bidders.accounts.filterSets.losingBids.list()`

List all reasons for which bids lost in the auction, with the number of bids that lost for each reason.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.filterSetName` | `string` | Yes | Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc` |
| `params.pageSize` | `integer` | No | Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default. |
| `params.pageToken` | `string` | No | A token identifying a page of results the server should return. Typically, this is the value of ListLosingBidsResponse.nextPageToken returned from the previous call to the losingBids.list method. |

### `bidders.accounts.filterSets.nonBillableWinningBids`

#### `bidders.accounts.filterSets.nonBillableWinningBids.list()`

List all reasons for which winning bids were not billable, with the number of bids not billed for each reason.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.filterSetName` | `string` | Yes | Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc` |
| `params.pageSize` | `integer` | No | Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default. |
| `params.pageToken` | `string` | No | A token identifying a page of results the server should return. Typically, this is the value of ListNonBillableWinningBidsResponse.nextPageToken returned from the previous call to the nonBillableWinningBids.list method. |

### `bidders.filterSets`

#### `bidders.filterSets.create()`

Creates the specified filter set for the account with the given account ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.ownerName` | `string` | Yes | Name of the owner (bidder or account) of the filter set to be created. For example: - For a bidder-level filter set for bidder 123: `bidders/123` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456` |
| `params.isTransient` | `boolean` | No | Whether the filter set is transient, or should be persisted indefinitely. By default, filter sets are not transient. If transient, it will be available for at least 1 hour after creation. |
| `params.resource` | `object` | Yes | The request body. |

#### `bidders.filterSets.get()`

Retrieves the requested filter set for the account with the given account ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Full name of the resource being requested. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc` |

#### `bidders.filterSets.list()`

Lists all filter sets for the account with the given account ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.ownerName` | `string` | Yes | Name of the owner (bidder or account) of the filter sets to be listed. For example: - For a bidder-level filter set for bidder 123: `bidders/123` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456` |
| `params.pageSize` | `integer` | No | Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default. |
| `params.pageToken` | `string` | No | A token identifying a page of results the server should return. Typically, this is the value of ListFilterSetsResponse.nextPageToken returned from the previous call to the accounts.filterSets.list method. |

#### `bidders.filterSets.delete()`

Deletes the requested filter set from the account with the given account ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Full name of the resource to delete. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc` |

### `bidders.filterSets.impressionMetrics`

#### `bidders.filterSets.impressionMetrics.list()`

Lists all metrics that are measured in terms of number of impressions.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.filterSetName` | `string` | Yes | Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc` |
| `params.pageSize` | `integer` | No | Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default. |
| `params.pageToken` | `string` | No | A token identifying a page of results the server should return. Typically, this is the value of ListImpressionMetricsResponse.nextPageToken returned from the previous call to the impressionMetrics.list method. |

### `bidders.filterSets.bidMetrics`

#### `bidders.filterSets.bidMetrics.list()`

Lists all metrics that are measured in terms of number of bids.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.filterSetName` | `string` | Yes | Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc` |
| `params.pageSize` | `integer` | No | Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default. |
| `params.pageToken` | `string` | No | A token identifying a page of results the server should return. Typically, this is the value of ListBidMetricsResponse.nextPageToken returned from the previous call to the bidMetrics.list method. |

### `bidders.filterSets.filteredBidRequests`

#### `bidders.filterSets.filteredBidRequests.list()`

List all reasons that caused a bid request not to be sent for an impression, with the number of bid requests not sent for each reason.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.filterSetName` | `string` | Yes | Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc` |
| `params.pageSize` | `integer` | No | Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default. |
| `params.pageToken` | `string` | No | A token identifying a page of results the server should return. Typically, this is the value of ListFilteredBidRequestsResponse.nextPageToken returned from the previous call to the filteredBidRequests.list method. |

### `bidders.filterSets.bidResponseErrors`

#### `bidders.filterSets.bidResponseErrors.list()`

List all errors that occurred in bid responses, with the number of bid responses affected for each reason.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.filterSetName` | `string` | Yes | Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc` |
| `params.pageSize` | `integer` | No | Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default. |
| `params.pageToken` | `string` | No | A token identifying a page of results the server should return. Typically, this is the value of ListBidResponseErrorsResponse.nextPageToken returned from the previous call to the bidResponseErrors.list method. |

### `bidders.filterSets.bidResponsesWithoutBids`

#### `bidders.filterSets.bidResponsesWithoutBids.list()`

List all reasons for which bid responses were considered to have no applicable bids, with the number of bid responses affected for each reason.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.filterSetName` | `string` | Yes | Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc` |
| `params.pageSize` | `integer` | No | Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default. |
| `params.pageToken` | `string` | No | A token identifying a page of results the server should return. Typically, this is the value of ListBidResponsesWithoutBidsResponse.nextPageToken returned from the previous call to the bidResponsesWithoutBids.list method. |

### `bidders.filterSets.filteredBids`

#### `bidders.filterSets.filteredBids.list()`

List all reasons for which bids were filtered, with the number of bids filtered for each reason.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.filterSetName` | `string` | Yes | Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc` |
| `params.pageSize` | `integer` | No | Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default. |
| `params.pageToken` | `string` | No | A token identifying a page of results the server should return. Typically, this is the value of ListFilteredBidsResponse.nextPageToken returned from the previous call to the filteredBids.list method. |

### `bidders.filterSets.filteredBids.details`

#### `bidders.filterSets.filteredBids.details.list()`

List all details associated with a specific reason for which bids were filtered, with the number of bids filtered for each detail.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.filterSetName` | `string` | Yes | Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc` |
| `params.creativeStatusId` | `integer` | Yes | The ID of the creative status for which to retrieve a breakdown by detail. See [creative-status-codes](https://developers.google.com/authorized-buyers/rtb/downloads/creative-status-codes). Details are only available for statuses 10, 14, 15, 17, 18, 19, 86, and 87. |
| `params.pageSize` | `integer` | No | Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default. |
| `params.pageToken` | `string` | No | A token identifying a page of results the server should return. Typically, this is the value of ListCreativeStatusBreakdownByDetailResponse.nextPageToken returned from the previous call to the filteredBids.details.list method. |

### `bidders.filterSets.filteredBids.creatives`

#### `bidders.filterSets.filteredBids.creatives.list()`

List all creatives associated with a specific reason for which bids were filtered, with the number of bids filtered for each creative.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.filterSetName` | `string` | Yes | Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc` |
| `params.creativeStatusId` | `integer` | Yes | The ID of the creative status for which to retrieve a breakdown by creative. See [creative-status-codes](https://developers.google.com/authorized-buyers/rtb/downloads/creative-status-codes). |
| `params.pageSize` | `integer` | No | Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default. |
| `params.pageToken` | `string` | No | A token identifying a page of results the server should return. Typically, this is the value of ListCreativeStatusBreakdownByCreativeResponse.nextPageToken returned from the previous call to the filteredBids.creatives.list method. |

### `bidders.filterSets.losingBids`

#### `bidders.filterSets.losingBids.list()`

List all reasons for which bids lost in the auction, with the number of bids that lost for each reason.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.filterSetName` | `string` | Yes | Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc` |
| `params.pageSize` | `integer` | No | Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default. |
| `params.pageToken` | `string` | No | A token identifying a page of results the server should return. Typically, this is the value of ListLosingBidsResponse.nextPageToken returned from the previous call to the losingBids.list method. |

### `bidders.filterSets.nonBillableWinningBids`

#### `bidders.filterSets.nonBillableWinningBids.list()`

List all reasons for which winning bids were not billable, with the number of bids not billed for each reason.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.filterSetName` | `string` | Yes | Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc` |
| `params.pageSize` | `integer` | No | Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default. |
| `params.pageToken` | `string` | No | A token identifying a page of results the server should return. Typically, this is the value of ListNonBillableWinningBidsResponse.nextPageToken returned from the previous call to the nonBillableWinningBids.list method. |

### `buyers`

### `buyers.filterSets`

#### `buyers.filterSets.create()`

Creates the specified filter set for the account with the given account ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.ownerName` | `string` | Yes | Name of the owner (bidder or account) of the filter set to be created. For example: - For a bidder-level filter set for bidder 123: `bidders/123` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456` |
| `params.isTransient` | `boolean` | No | Whether the filter set is transient, or should be persisted indefinitely. By default, filter sets are not transient. If transient, it will be available for at least 1 hour after creation. |
| `params.resource` | `object` | Yes | The request body. |

#### `buyers.filterSets.get()`

Retrieves the requested filter set for the account with the given account ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Full name of the resource being requested. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc` |

#### `buyers.filterSets.list()`

Lists all filter sets for the account with the given account ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.ownerName` | `string` | Yes | Name of the owner (bidder or account) of the filter sets to be listed. For example: - For a bidder-level filter set for bidder 123: `bidders/123` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456` |
| `params.pageSize` | `integer` | No | Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default. |
| `params.pageToken` | `string` | No | A token identifying a page of results the server should return. Typically, this is the value of ListFilterSetsResponse.nextPageToken returned from the previous call to the accounts.filterSets.list method. |

#### `buyers.filterSets.delete()`

Deletes the requested filter set from the account with the given account ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Full name of the resource to delete. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc` |

### `buyers.filterSets.impressionMetrics`

#### `buyers.filterSets.impressionMetrics.list()`

Lists all metrics that are measured in terms of number of impressions.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.filterSetName` | `string` | Yes | Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc` |
| `params.pageSize` | `integer` | No | Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default. |
| `params.pageToken` | `string` | No | A token identifying a page of results the server should return. Typically, this is the value of ListImpressionMetricsResponse.nextPageToken returned from the previous call to the impressionMetrics.list method. |

### `buyers.filterSets.bidMetrics`

#### `buyers.filterSets.bidMetrics.list()`

Lists all metrics that are measured in terms of number of bids.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.filterSetName` | `string` | Yes | Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc` |
| `params.pageSize` | `integer` | No | Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default. |
| `params.pageToken` | `string` | No | A token identifying a page of results the server should return. Typically, this is the value of ListBidMetricsResponse.nextPageToken returned from the previous call to the bidMetrics.list method. |

### `buyers.filterSets.filteredBidRequests`

#### `buyers.filterSets.filteredBidRequests.list()`

List all reasons that caused a bid request not to be sent for an impression, with the number of bid requests not sent for each reason.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.filterSetName` | `string` | Yes | Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc` |
| `params.pageSize` | `integer` | No | Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default. |
| `params.pageToken` | `string` | No | A token identifying a page of results the server should return. Typically, this is the value of ListFilteredBidRequestsResponse.nextPageToken returned from the previous call to the filteredBidRequests.list method. |

### `buyers.filterSets.bidResponseErrors`

#### `buyers.filterSets.bidResponseErrors.list()`

List all errors that occurred in bid responses, with the number of bid responses affected for each reason.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.filterSetName` | `string` | Yes | Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc` |
| `params.pageSize` | `integer` | No | Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default. |
| `params.pageToken` | `string` | No | A token identifying a page of results the server should return. Typically, this is the value of ListBidResponseErrorsResponse.nextPageToken returned from the previous call to the bidResponseErrors.list method. |

### `buyers.filterSets.bidResponsesWithoutBids`

#### `buyers.filterSets.bidResponsesWithoutBids.list()`

List all reasons for which bid responses were considered to have no applicable bids, with the number of bid responses affected for each reason.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.filterSetName` | `string` | Yes | Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc` |
| `params.pageSize` | `integer` | No | Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default. |
| `params.pageToken` | `string` | No | A token identifying a page of results the server should return. Typically, this is the value of ListBidResponsesWithoutBidsResponse.nextPageToken returned from the previous call to the bidResponsesWithoutBids.list method. |

### `buyers.filterSets.filteredBids`

#### `buyers.filterSets.filteredBids.list()`

List all reasons for which bids were filtered, with the number of bids filtered for each reason.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.filterSetName` | `string` | Yes | Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc` |
| `params.pageSize` | `integer` | No | Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default. |
| `params.pageToken` | `string` | No | A token identifying a page of results the server should return. Typically, this is the value of ListFilteredBidsResponse.nextPageToken returned from the previous call to the filteredBids.list method. |

### `buyers.filterSets.filteredBids.details`

#### `buyers.filterSets.filteredBids.details.list()`

List all details associated with a specific reason for which bids were filtered, with the number of bids filtered for each detail.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.filterSetName` | `string` | Yes | Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc` |
| `params.creativeStatusId` | `integer` | Yes | The ID of the creative status for which to retrieve a breakdown by detail. See [creative-status-codes](https://developers.google.com/authorized-buyers/rtb/downloads/creative-status-codes). Details are only available for statuses 10, 14, 15, 17, 18, 19, 86, and 87. |
| `params.pageSize` | `integer` | No | Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default. |
| `params.pageToken` | `string` | No | A token identifying a page of results the server should return. Typically, this is the value of ListCreativeStatusBreakdownByDetailResponse.nextPageToken returned from the previous call to the filteredBids.details.list method. |

### `buyers.filterSets.filteredBids.creatives`

#### `buyers.filterSets.filteredBids.creatives.list()`

List all creatives associated with a specific reason for which bids were filtered, with the number of bids filtered for each creative.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.filterSetName` | `string` | Yes | Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc` |
| `params.creativeStatusId` | `integer` | Yes | The ID of the creative status for which to retrieve a breakdown by creative. See [creative-status-codes](https://developers.google.com/authorized-buyers/rtb/downloads/creative-status-codes). |
| `params.pageSize` | `integer` | No | Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default. |
| `params.pageToken` | `string` | No | A token identifying a page of results the server should return. Typically, this is the value of ListCreativeStatusBreakdownByCreativeResponse.nextPageToken returned from the previous call to the filteredBids.creatives.list method. |

### `buyers.filterSets.losingBids`

#### `buyers.filterSets.losingBids.list()`

List all reasons for which bids lost in the auction, with the number of bids that lost for each reason.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.filterSetName` | `string` | Yes | Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc` |
| `params.pageSize` | `integer` | No | Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default. |
| `params.pageToken` | `string` | No | A token identifying a page of results the server should return. Typically, this is the value of ListLosingBidsResponse.nextPageToken returned from the previous call to the losingBids.list method. |

### `buyers.filterSets.nonBillableWinningBids`

#### `buyers.filterSets.nonBillableWinningBids.list()`

List all reasons for which winning bids were not billable, with the number of bids not billed for each reason.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.filterSetName` | `string` | Yes | Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc` |
| `params.pageSize` | `integer` | No | Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default. |
| `params.pageToken` | `string` | No | A token identifying a page of results the server should return. Typically, this is the value of ListNonBillableWinningBidsResponse.nextPageToken returned from the previous call to the nonBillableWinningBids.list method. |