
/**
 * Google Apps Script client library for the Authorized Buyers Marketplace API
 * Documentation URL: https://developers.google.com/authorized-buyers/apis/marketplace/reference/rest/
 * @class
 */
class Authorizedbuyersmarketplace {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    // "Private" properties using the underscore convention
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://authorizedbuyersmarketplace.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.buyers = {};

    this.buyers.auctionPackages = {};

    /**
     * Gets an auction package given its name.
     * @param {string} params.name - (Required) Required. Name of auction package to get. Format: `buyers/{accountId}/auctionPackages/{auctionPackageId}`
     * @return {object} The API response object.
     */
    this.buyers.auctionPackages.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * List the auction packages. Buyers can use the URL path "/v1alpha/buyers/{accountId}/auctionPackages" to list auction packages for the current buyer and its clients. Bidders can use the URL path "/v1alpha/bidders/{accountId}/auctionPackages" to list auction packages for the bidder, its media planners, its buyers, and all their clients.
     * @param {string} params.filter - Optional. Optional query string using the [Cloud API list filtering syntax](/authorized-buyers/apis/guides/list-filters). Only supported when parent is bidder. Supported columns for filtering are: * displayName * createTime * updateTime * eligibleSeatIds
     * @param {string} params.orderBy - Optional. An optional query string to sort auction packages using the [Cloud API sorting syntax](https://cloud.google.com/apis/design/design_patterns#sorting_order). If no sort order is specified, results will be returned in an arbitrary order. Only supported when parent is bidder. Supported columns for sorting are: * displayName * createTime * updateTime
     * @param {integer} params.pageSize - Requested page size. The server may return fewer results than requested. Max allowed page size is 500.
     * @param {string} params.pageToken - The page token as returned. ListAuctionPackagesResponse.nextPageToken
     * @param {string} params.parent - (Required) Required. Name of the parent buyer that can access the auction package. Format: `buyers/{accountId}`. When used with a bidder account, the auction packages that the bidder, its media planners, its buyers and clients are subscribed to will be listed, in the format `bidders/{accountId}`.
     * @return {object} The API response object.
     */
    this.buyers.auctionPackages.list = (params) => this._makeRequest('v1alpha/{+parent}/auctionPackages', 'GET', params);

    /**
     * Subscribe to the auction package for the specified buyer. Once subscribed, the bidder will receive a call out for inventory matching the auction package targeting criteria with the auction package deal ID and the specified buyer.
     * @param {string} params.name - (Required) Required. Name of the auction package. Format: `buyers/{accountId}/auctionPackages/{auctionPackageId}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.buyers.auctionPackages.subscribe = (params) => this._makeRequest('v1alpha/{+name}:subscribe', 'POST', params);

    /**
     * Unsubscribe from the auction package for the specified buyer. Once unsubscribed, the bidder will no longer receive a call out for the auction package deal ID and the specified buyer.
     * @param {string} params.name - (Required) Required. Name of the auction package. Format: `buyers/{accountId}/auctionPackages/{auctionPackageId}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.buyers.auctionPackages.unsubscribe = (params) => this._makeRequest('v1alpha/{+name}:unsubscribe', 'POST', params);

    /**
     * Subscribe the specified clients of the buyer to the auction package. If a client in the list does not belong to the buyer, an error response will be returned, and all of the following clients in the list will not be subscribed. Subscribing an already subscribed client will have no effect.
     * @param {string} params.auctionPackage - (Required) Required. Name of the auction package. Format: `buyers/{accountId}/auctionPackages/{auctionPackageId}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.buyers.auctionPackages.subscribeClients = (params) => this._makeRequest('v1alpha/{+auctionPackage}:subscribeClients', 'POST', params);

    /**
     * Unsubscribe from the auction package for the specified clients of the buyer. Unsubscribing a client that is not subscribed will have no effect.
     * @param {string} params.auctionPackage - (Required) Required. Name of the auction package. Format: `buyers/{accountId}/auctionPackages/{auctionPackageId}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.buyers.auctionPackages.unsubscribeClients = (params) => this._makeRequest('v1alpha/{+auctionPackage}:unsubscribeClients', 'POST', params);

    this.buyers.clients = {};

    /**
     * Gets a client with a given resource name.
     * @param {string} params.name - (Required) Required. Format: `buyers/{accountId}/clients/{clientAccountId}`
     * @return {object} The API response object.
     */
    this.buyers.clients.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * Lists all the clients for the current buyer.
     * @param {string} params.filter - Query string using the [Filtering Syntax](https://developers.google.com/authorized-buyers/apis/guides/list-filters) Supported fields for filtering are: * partnerClientId Use this field to filter the clients by the partnerClientId. For example, if the partnerClientId of the client is "1234", the value of this field should be `partnerClientId = "1234"`, in order to get only the client whose partnerClientId is "1234" in the response.
     * @param {integer} params.pageSize - Requested page size. If left blank, a default page size of 500 will be applied.
     * @param {string} params.pageToken - A token identifying a page of results the server should return. Typically, this is the value of ListClientsResponse.nextPageToken returned from the previous call to the list method.
     * @param {string} params.parent - (Required) Required. The name of the buyer. Format: `buyers/{accountId}`
     * @return {object} The API response object.
     */
    this.buyers.clients.list = (params) => this._makeRequest('v1alpha/{+parent}/clients', 'GET', params);

    /**
     * Creates a new client.
     * @param {string} params.parent - (Required) Required. The name of the buyer. Format: `buyers/{accountId}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.buyers.clients.create = (params) => this._makeRequest('v1alpha/{+parent}/clients', 'POST', params);

    /**
     * Updates an existing client.
     * @param {string} params.name - (Required) Output only. The resource name of the client. Format: `buyers/{accountId}/clients/{clientAccountId}`
     * @param {string} params.updateMask - List of fields to be updated. If empty or unspecified, the service will update all fields populated in the update request excluding the output only fields and primitive fields with default value. Note that explicit field mask is required in order to reset a primitive field back to its default value, for example, false for boolean fields, 0 for integer fields. A special field mask consisting of a single path "*" can be used to indicate full replacement(the equivalent of PUT method), updatable fields unset or unspecified in the input will be cleared or set to default value. Output only fields will be ignored regardless of the value of updateMask.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.buyers.clients.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);

    /**
     * Activates an existing client. The state of the client will be updated to "ACTIVE". This method has no effect if the client is already in "ACTIVE" state.
     * @param {string} params.name - (Required) Required. Format: `buyers/{buyerAccountId}/clients/{clientAccountId}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.buyers.clients.activate = (params) => this._makeRequest('v1alpha/{+name}:activate', 'POST', params);

    /**
     * Deactivates an existing client. The state of the client will be updated to "INACTIVE". This method has no effect if the client is already in "INACTIVE" state.
     * @param {string} params.name - (Required) Required. Format: `buyers/{buyerAccountId}/clients/{clientAccountId}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.buyers.clients.deactivate = (params) => this._makeRequest('v1alpha/{+name}:deactivate', 'POST', params);

    this.buyers.clients.users = {};

    /**
     * Retrieves an existing client user.
     * @param {string} params.name - (Required) Required. Format: `buyers/{buyerAccountId}/clients/{clientAccountId}/clientUsers/{userId}`
     * @return {object} The API response object.
     */
    this.buyers.clients.users.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * Lists all client users for a specified client.
     * @param {integer} params.pageSize - Requested page size. If left blank, a default page size of 500 will be applied.
     * @param {string} params.pageToken - A token identifying a page of results the server should return. Typically, this is the value of ListClientUsersResponse.nextPageToken returned from the previous call to the list method.
     * @param {string} params.parent - (Required) Required. The name of the client. Format: `buyers/{buyerAccountId}/clients/{clientAccountId}`
     * @return {object} The API response object.
     */
    this.buyers.clients.users.list = (params) => this._makeRequest('v1alpha/{+parent}/users', 'GET', params);

    /**
     * Creates a new client user in "INVITED" state. An email invitation will be sent to the new user, once accepted the user will become active.
     * @param {string} params.parent - (Required) Required. The name of the client. Format: `buyers/{accountId}/clients/{clientAccountId}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.buyers.clients.users.create = (params) => this._makeRequest('v1alpha/{+parent}/users', 'POST', params);

    /**
     * Deletes an existing client user. The client user will lose access to the Authorized Buyers UI. Note that if a client user is deleted, the user's access to the UI can't be restored unless a new client user is created and activated.
     * @param {string} params.name - (Required) Required. Format: `buyers/{buyerAccountId}/clients/{clientAccountId}/clientUsers/{userId}`
     * @return {object} The API response object.
     */
    this.buyers.clients.users.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);

    /**
     * Activates an existing client user. The state of the client user will be updated from "INACTIVE" to "ACTIVE". This method has no effect if the client user is already in "ACTIVE" state. An error will be returned if the client user to activate is still in "INVITED" state.
     * @param {string} params.name - (Required) Required. Format: `buyers/{buyerAccountId}/clients/{clientAccountId}/clientUsers/{userId}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.buyers.clients.users.activate = (params) => this._makeRequest('v1alpha/{+name}:activate', 'POST', params);

    /**
     * Deactivates an existing client user. The state of the client user will be updated from "ACTIVE" to "INACTIVE". This method has no effect if the client user is already in "INACTIVE" state. An error will be returned if the client user to deactivate is still in "INVITED" state.
     * @param {string} params.name - (Required) Required. Format: `buyers/{buyerAccountId}/clients/{clientAccountId}/clientUsers/{userId}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.buyers.clients.users.deactivate = (params) => this._makeRequest('v1alpha/{+name}:deactivate', 'POST', params);

    this.buyers.dataSegments = {};

    /**
     * Gets a data segment given its name.
     * @param {string} params.name - (Required) Required. Name of data segment to get. v1alpha format: `buyers/{accountId}/dataSegments/{curatorDataSegmentId}` v1beta format: `curators/{accountId}/dataSegments/{curatorDataSegmentId}`
     * @return {object} The API response object.
     */
    this.buyers.dataSegments.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * List the data segments owned by a curator.
     * @param {integer} params.pageSize - Optional. Requested page size. The server may return fewer results than requested. Max allowed page size is 500. If unspecified, the server will default to 500.
     * @param {string} params.pageToken - Optional. The page token as returned. ListDataSegmentsResponse.nextPageToken
     * @param {string} params.parent - (Required) Required. Name of the parent curator that can access the data segment. v1alpha format: `buyers/{accountId}` v1beta format: `curators/{accountId}`
     * @return {object} The API response object.
     */
    this.buyers.dataSegments.list = (params) => this._makeRequest('v1alpha/{+parent}/dataSegments', 'GET', params);

    /**
     * Creates a data segment owned by the listed curator. The data segment will be created in the `ACTIVE` state, meaning it will be immediately available for buyers to use in preferred deals, private auction deals, and auction packages.
     * @param {string} params.parent - (Required) Required. The parent resource where this data segment will be created. v1alpha format: `buyers/{accountId}` v1beta format: `curators/{accountId}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.buyers.dataSegments.create = (params) => this._makeRequest('v1alpha/{+parent}/dataSegments', 'POST', params);

    /**
     * Updates a data segment.
     * @param {string} params.name - (Required) Immutable. Identifier. The unique identifier for the data segment. Account ID corresponds to the account ID that created the segment. v1alpha format: `buyers/{accountId}/dataSegments/{curatorDataSegmentId}` v1beta format: `curators/{curatorAccountId}/dataSegments/{curatorDataSegmentId}`
     * @param {string} params.updateMask - Optional. List of fields to be updated. If empty or unspecified, the service will update all fields populated in the update request excluding the output only fields and primitive fields with default value. Note that explicit field mask is required in order to reset a primitive field back to its default value, for example, false for boolean fields, 0 for integer fields. A special field mask consisting of a single path "*" can be used to indicate full replacement(the equivalent of PUT method), updatable fields unset or unspecified in the input will be cleared or set to default value. Output only fields will be ignored regardless of the value of updateMask.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.buyers.dataSegments.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);

    /**
     * Activates a data segment.
     * @param {string} params.name - (Required) Required. Name of data segment to activate. v1alpha format: `buyers/{accountId}/dataSegments/{curatorDataSegmentId}` v1beta format: `curators/{accountId}/dataSegments/{curatorDataSegmentId}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.buyers.dataSegments.activate = (params) => this._makeRequest('v1alpha/{+name}:activate', 'POST', params);

    /**
     * Deactivates a data segment.
     * @param {string} params.name - (Required) Required. Name of data segment to deactivate. v1alpha format: `buyers/{accountId}/dataSegments/{curatorDataSegmentId}` v1beta format: `curators/{accountId}/dataSegments/{curatorDataSegmentId}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.buyers.dataSegments.deactivate = (params) => this._makeRequest('v1alpha/{+name}:deactivate', 'POST', params);

    this.buyers.finalizedDeals = {};

    /**
     * Gets a finalized deal given its name.
     * @param {string} params.name - (Required) Required. Format: `buyers/{accountId}/finalizedDeals/{dealId}`
     * @return {object} The API response object.
     */
    this.buyers.finalizedDeals.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * Lists finalized deals. Use the URL path "/v1alpha/buyers/{accountId}/finalizedDeals" to list finalized deals for the current buyer and its clients. Bidders can use the URL path "/v1alpha/bidders/{accountId}/finalizedDeals" to list finalized deals for the bidder, its buyers and all their clients.
     * @param {string} params.filter - Optional query string using the [Cloud API list filtering syntax](https://developers.google.com/authorized-buyers/apis/guides/list-filters) Supported columns for filtering are: * deal.displayName * deal.dealType * deal.createTime * deal.updateTime * deal.flightStartTime * deal.flightEndTime * deal.eligibleSeatIds * dealServingStatus
     * @param {string} params.orderBy - An optional query string to sort finalized deals using the [Cloud API sorting syntax](https://cloud.google.com/apis/design/design_patterns#sorting_order). If no sort order is specified, results will be returned in an arbitrary order. Supported columns for sorting are: * deal.displayName * deal.createTime * deal.updateTime * deal.flightStartTime * deal.flightEndTime * rtbMetrics.bidRequests7Days * rtbMetrics.bids7Days * rtbMetrics.adImpressions7Days * rtbMetrics.bidRate7Days * rtbMetrics.filteredBidRate7Days * rtbMetrics.mustBidRateCurrentMonth
     * @param {integer} params.pageSize - Requested page size. The server may return fewer results than requested. If requested more than 500, the server will return 500 results per page. If unspecified, the server will pick a default page size of 100.
     * @param {string} params.pageToken - The page token as returned from ListFinalizedDealsResponse.
     * @param {string} params.parent - (Required) Required. The buyer to list the finalized deals for, in the format: `buyers/{accountId}`. When used to list finalized deals for a bidder, its buyers and clients, in the format `bidders/{accountId}`.
     * @return {object} The API response object.
     */
    this.buyers.finalizedDeals.list = (params) => this._makeRequest('v1alpha/{+parent}/finalizedDeals', 'GET', params);

    /**
     * Pauses serving of the given finalized deal. This call only pauses the serving status, and does not affect other fields of the finalized deal. Calling this method for an already paused deal has no effect. This method only applies to programmatic guaranteed deals and preferred deals.
     * @param {string} params.name - (Required) Required. Format: `buyers/{accountId}/finalizedDeals/{dealId}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.buyers.finalizedDeals.pause = (params) => this._makeRequest('v1alpha/{+name}:pause', 'POST', params);

    /**
     * Resumes serving of the given finalized deal. Calling this method for an running deal has no effect. If a deal is initially paused by the seller, calling this method will not resume serving of the deal until the seller also resumes the deal. This method only applies to programmatic guaranteed deals and preferred deals.
     * @param {string} params.name - (Required) Required. Format: `buyers/{accountId}/finalizedDeals/{dealId}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.buyers.finalizedDeals.resume = (params) => this._makeRequest('v1alpha/{+name}:resume', 'POST', params);

    /**
     * Add creative to be used in the bidding process for a finalized deal. For programmatic guaranteed deals, it's recommended that you associate at least one approved creative with the deal before calling SetReadyToServe, to help reduce the number of bid responses filtered because they don't contain approved creatives. Creatives successfully added to a deal can be found in the Realtime-bidding Creatives API creative.deal_ids. This method only applies to programmatic guaranteed deals. Maximum number of 1000 creatives can be added to a finalized deal.
     * @param {string} params.deal - (Required) Required. Name of the finalized deal in the format of: `buyers/{accountId}/finalizedDeals/{dealId}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.buyers.finalizedDeals.addCreative = (params) => this._makeRequest('v1alpha/{+deal}:addCreative', 'POST', params);

    /**
     * Sets the given finalized deal as ready to serve. By default, deals are set as ready to serve as soon as they're finalized. If you want to opt out of the default behavior, and manually indicate that deals are ready to serve, ask your Technical Account Manager to add you to the allowlist. If you choose to use this method, finalized deals belonging to the bidder and its child seats don't start serving until after you call `setReadyToServe`, and after the deals become active. For example, you can use this method to delay receiving bid requests until your creative is ready. This method only applies to programmatic guaranteed deals.
     * @param {string} params.deal - (Required) Required. Format: `buyers/{accountId}/finalizedDeals/{dealId}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.buyers.finalizedDeals.setReadyToServe = (params) => this._makeRequest('v1alpha/{+deal}:setReadyToServe', 'POST', params);

    this.buyers.proposals = {};

    /**
     * Gets a proposal using its resource name. The proposal is returned at the latest revision.
     * @param {string} params.name - (Required) Required. Name of the proposal. Format: `buyers/{accountId}/proposals/{proposalId}`
     * @return {object} The API response object.
     */
    this.buyers.proposals.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * Updates the proposal at the given revision number. If the revision number in the request is behind the latest one kept in the server, an error message will be returned. See FieldMask for how to use FieldMask. Only fields specified in the UpdateProposalRequest.update_mask will be updated; Fields noted as 'Immutable' or 'Output only' yet specified in the UpdateProposalRequest.update_mask will be ignored and left unchanged. Updating a private auction proposal is only allowed for buyer private data, all other fields are immutable.
     * @param {string} params.name - (Required) Immutable. The name of the proposal serving as a unique identifier. Format: buyers/{accountId}/proposals/{proposalId}
     * @param {string} params.updateMask - List of fields to be updated. If empty or unspecified, the service will update all fields populated in the update request excluding the output only fields and primitive fields with default value. Note that explicit field mask is required in order to reset a primitive field back to its default value, for example, false for boolean fields, 0 for integer fields. A special field mask consisting of a single path "*" can be used to indicate full replacement(the equivalent of PUT method), updatable fields unset or unspecified in the input will be cleared or set to default value. Output only fields will be ignored regardless of the value of updateMask.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.buyers.proposals.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);

    /**
     * Lists proposals. A filter expression using [Cloud API list filtering syntax](https://developers.google.com/authorized-buyers/apis/guides/list-filters) may be specified to filter the results.
     * @param {string} params.filter - Optional query string using the [Cloud API list filtering syntax](https://developers.google.com/authorized-buyers/apis/guides/list-filters) Supported columns for filtering are: * displayName * dealType * updateTime * state
     * @param {integer} params.pageSize - Requested page size. The server may return fewer results than requested. If unspecified, the server will put a size of 500.
     * @param {string} params.pageToken - The page token as returned from ListProposalsResponse.
     * @param {string} params.parent - (Required) Required. Parent that owns the collection of proposals Format: `buyers/{accountId}`
     * @return {object} The API response object.
     */
    this.buyers.proposals.list = (params) => this._makeRequest('v1alpha/{+parent}/proposals', 'GET', params);

    /**
     * Cancels an ongoing negotiation on a proposal. This does not cancel or end serving for the deals if the proposal has been finalized. If the proposal has not been finalized before, calling this method will set the Proposal.state to `TERMINATED` and increment the Proposal.proposal_revision. If the proposal has been finalized before and is under renegotiation now, calling this method will reset the Proposal.state to `FINALIZED` and increment the Proposal.proposal_revision. This method does not support private auction proposals whose Proposal.deal_type is 'PRIVATE_AUCTION'.
     * @param {string} params.proposal - (Required) Name of the proposal. Format: `buyers/{accountId}/proposals/{proposalId}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.buyers.proposals.cancelNegotiation = (params) => this._makeRequest('v1alpha/{+proposal}:cancelNegotiation', 'POST', params);

    /**
     * Accepts the proposal at the given revision number. If the revision number in the request is behind the latest from the server, an error message will be returned. This call updates the Proposal.state from `BUYER_ACCEPTANCE_REQUESTED` to `FINALIZED`; it has no side effect if the Proposal.state is already `FINALIZED` and throws exception if the Proposal.state is not either `BUYER_ACCEPTANCE_REQUESTED` or `FINALIZED`. Accepting a proposal means the buyer understands and accepts the Proposal.terms_and_conditions proposed by the seller.
     * @param {string} params.name - (Required) Name of the proposal. Format: `buyers/{accountId}/proposals/{proposalId}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.buyers.proposals.accept = (params) => this._makeRequest('v1alpha/{+name}:accept', 'POST', params);

    /**
     * Creates a note for this proposal and sends to the seller. This method is not supported for proposals with DealType set to 'PRIVATE_AUCTION'.
     * @param {string} params.proposal - (Required) Name of the proposal. Format: `buyers/{accountId}/proposals/{proposalId}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.buyers.proposals.addNote = (params) => this._makeRequest('v1alpha/{+proposal}:addNote', 'POST', params);

    /**
     * Sends a request for proposal (RFP) to a publisher to initiate the negotiation regarding certain inventory. In the RFP, buyers can specify the deal type, deal terms, start and end dates, targeting, and a message to the publisher. Once the RFP is sent, a proposal in `SELLER_REVIEW_REQUESTED` state will be created and returned in the response. The publisher may review your request and respond with detailed deals in the proposal.
     * @param {string} params.buyer - (Required) Required. The current buyer who is sending the RFP in the format: `buyers/{accountId}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.buyers.proposals.sendRfp = (params) => this._makeRequest('v1alpha/{+buyer}/proposals:sendRfp', 'POST', params);

    this.buyers.proposals.deals = {};

    /**
     * Gets a deal given its name. The deal is returned at its head revision.
     * @param {string} params.name - (Required) Required. Format: buyers/{accountId}/proposals/{proposalId}/deals/{dealId}
     * @return {object} The API response object.
     */
    this.buyers.proposals.deals.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * Updates the given deal at the buyer known revision number. If the server revision has advanced since the passed-in proposal.proposal_revision an ABORTED error message will be returned. The revision number is incremented by the server whenever the proposal or its constituent deals are updated. Note: The revision number is kept at a proposal level. The buyer of the API is expected to keep track of the revision number after the last update operation and send it in as part of the next update request. This way, if there are further changes on the server (for example, seller making new updates), then the server can detect conflicts and reject the proposed changes.
     * @param {string} params.name - (Required) Immutable. The unique identifier of the deal. Auto-generated by the server when a deal is created. Format: buyers/{accountId}/proposals/{proposalId}/deals/{dealId}
     * @param {string} params.updateMask - List of fields to be updated. If empty or unspecified, the service will update all fields populated in the update request excluding the output only fields and primitive fields with default value. Note that explicit field mask is required in order to reset a primitive field back to its default value, for example, false for boolean fields, 0 for integer fields. A special field mask consisting of a single path "*" can be used to indicate full replacement(the equivalent of PUT method), updatable fields unset or unspecified in the input will be cleared or set to default value. Output only fields will be ignored regardless of the value of updateMask.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.buyers.proposals.deals.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);

    /**
     * Batch updates multiple deals in the same proposal.
     * @param {string} params.parent - (Required) Required. The name of the proposal containing the deals to batch update. Format: buyers/{accountId}/proposals/{proposalId}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.buyers.proposals.deals.batchUpdate = (params) => this._makeRequest('v1alpha/{+parent}/deals:batchUpdate', 'POST', params);

    /**
     * Lists all deals in a proposal. To retrieve only the finalized revision deals regardless if a deal is being renegotiated, see the FinalizedDeals resource.
     * @param {integer} params.pageSize - Requested page size. The server may return fewer results than requested. If requested more than 500, the server will return 500 results per page. If unspecified, the server will pick a default page size of 100.
     * @param {string} params.pageToken - The page token as returned from ListDealsResponse.
     * @param {string} params.parent - (Required) Required. The name of the proposal containing the deals to retrieve. Format: buyers/{accountId}/proposals/{proposalId}
     * @return {object} The API response object.
     */
    this.buyers.proposals.deals.list = (params) => this._makeRequest('v1alpha/{+parent}/deals', 'GET', params);

    this.buyers.publisherProfiles = {};

    /**
     * Gets the requested publisher profile by name.
     * @param {string} params.name - (Required) Required. Name of the publisher profile. Format: `buyers/{buyerId}/publisherProfiles/{publisherProfileId}`
     * @return {object} The API response object.
     */
    this.buyers.publisherProfiles.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * Lists publisher profiles. The returned publisher profiles aren't in any defined order. The order of the results might change. A new publisher profile can appear in any place in the list of returned results.
     * @param {string} params.filter - Optional query string using the [Cloud API list filtering] (https://developers.google.com/authorized-buyers/apis/guides/list-filters) syntax.
     * @param {integer} params.pageSize - Requested page size. The server may return fewer results than requested. If requested more than 500, the server will return 500 results per page. If unspecified, the server will pick a default page size of 100.
     * @param {string} params.pageToken - The page token as returned from a previous ListPublisherProfilesResponse.
     * @param {string} params.parent - (Required) Required. Parent that owns the collection of publisher profiles Format: `buyers/{buyerId}`
     * @return {object} The API response object.
     */
    this.buyers.publisherProfiles.list = (params) => this._makeRequest('v1alpha/{+parent}/publisherProfiles', 'GET', params);

    this.bidders = {};

    this.bidders.auctionPackages = {};

    /**
     * List the auction packages. Buyers can use the URL path "/v1alpha/buyers/{accountId}/auctionPackages" to list auction packages for the current buyer and its clients. Bidders can use the URL path "/v1alpha/bidders/{accountId}/auctionPackages" to list auction packages for the bidder, its media planners, its buyers, and all their clients.
     * @param {string} params.filter - Optional. Optional query string using the [Cloud API list filtering syntax](/authorized-buyers/apis/guides/list-filters). Only supported when parent is bidder. Supported columns for filtering are: * displayName * createTime * updateTime * eligibleSeatIds
     * @param {string} params.orderBy - Optional. An optional query string to sort auction packages using the [Cloud API sorting syntax](https://cloud.google.com/apis/design/design_patterns#sorting_order). If no sort order is specified, results will be returned in an arbitrary order. Only supported when parent is bidder. Supported columns for sorting are: * displayName * createTime * updateTime
     * @param {integer} params.pageSize - Requested page size. The server may return fewer results than requested. Max allowed page size is 500.
     * @param {string} params.pageToken - The page token as returned. ListAuctionPackagesResponse.nextPageToken
     * @param {string} params.parent - (Required) Required. Name of the parent buyer that can access the auction package. Format: `buyers/{accountId}`. When used with a bidder account, the auction packages that the bidder, its media planners, its buyers and clients are subscribed to will be listed, in the format `bidders/{accountId}`.
     * @return {object} The API response object.
     */
    this.bidders.auctionPackages.list = (params) => this._makeRequest('v1alpha/{+parent}/auctionPackages', 'GET', params);

    this.bidders.finalizedDeals = {};

    /**
     * Lists finalized deals. Use the URL path "/v1alpha/buyers/{accountId}/finalizedDeals" to list finalized deals for the current buyer and its clients. Bidders can use the URL path "/v1alpha/bidders/{accountId}/finalizedDeals" to list finalized deals for the bidder, its buyers and all their clients.
     * @param {string} params.filter - Optional query string using the [Cloud API list filtering syntax](https://developers.google.com/authorized-buyers/apis/guides/list-filters) Supported columns for filtering are: * deal.displayName * deal.dealType * deal.createTime * deal.updateTime * deal.flightStartTime * deal.flightEndTime * deal.eligibleSeatIds * dealServingStatus
     * @param {string} params.orderBy - An optional query string to sort finalized deals using the [Cloud API sorting syntax](https://cloud.google.com/apis/design/design_patterns#sorting_order). If no sort order is specified, results will be returned in an arbitrary order. Supported columns for sorting are: * deal.displayName * deal.createTime * deal.updateTime * deal.flightStartTime * deal.flightEndTime * rtbMetrics.bidRequests7Days * rtbMetrics.bids7Days * rtbMetrics.adImpressions7Days * rtbMetrics.bidRate7Days * rtbMetrics.filteredBidRate7Days * rtbMetrics.mustBidRateCurrentMonth
     * @param {integer} params.pageSize - Requested page size. The server may return fewer results than requested. If requested more than 500, the server will return 500 results per page. If unspecified, the server will pick a default page size of 100.
     * @param {string} params.pageToken - The page token as returned from ListFinalizedDealsResponse.
     * @param {string} params.parent - (Required) Required. The buyer to list the finalized deals for, in the format: `buyers/{accountId}`. When used to list finalized deals for a bidder, its buyers and clients, in the format `bidders/{accountId}`.
     * @return {object} The API response object.
     */
    this.bidders.finalizedDeals.list = (params) => this._makeRequest('v1alpha/{+parent}/finalizedDeals', 'GET', params);
  }

  /**
   * @private Builds the full request URL and options object.
   */
  _buildRequestDetails(path, httpMethod, params) {
    let url = this._rootUrl + this._servicePath + path;
    const remainingParams = { ...params };
    // Fix: Correctly handle {+param} style parameters and other potential special chars.
    const pathParams = url.match(/{[^{}]+}/g) || [];

    pathParams.forEach(placeholder => {
      const isPlus = placeholder.startsWith('{+');
      const paramName = placeholder.slice(isPlus ? 2 : 1, -1);
      if (Object.prototype.hasOwnProperty.call(remainingParams, paramName)) {
        // Fix: URI-encode path parameters for safety.
        url = url.replace(placeholder, encodeURIComponent(remainingParams[paramName]));
        delete remainingParams[paramName];
      }
    });

    const queryParts = [];
    for (const key in remainingParams) {
      if (key !== 'resource') {
        queryParts.push(`${encodeURIComponent(key)}=${encodeURIComponent(remainingParams[key])}`);
      }
    }
    if (queryParts.length > 0) {
      url += '?' + queryParts.join('&');
    }

    const options = {
      method: httpMethod,
      headers: { 'Authorization': 'Bearer ' + this._token },
      contentType: 'application/json',
      muteHttpExceptions: true,
    };
    if (params && params.resource) {
      options.payload = JSON.stringify(params.resource);
    }
    
    return { url, options };
  }

  /**
   * @private Makes the HTTP request with exponential backoff for retries.
   */
  _makeRequest(path, httpMethod, params) {
    const { url, options } = this._buildRequestDetails(path, httpMethod, params);

    for (let i = 0; i <= this._backoffConfig.retries; i++) {
      const response = UrlFetchApp.fetch(url, options);
      const responseCode = response.getResponseCode();
      const responseText = response.getContentText(); // Simplified call

      if (responseCode >= 200 && responseCode < 300) {
        return responseText ? JSON.parse(responseText) : {};
      }

      const retryableErrors = [429, 500, 503];
      if (retryableErrors.includes(responseCode) && i < this._backoffConfig.retries) {
        const delay = this._backoffConfig.baseDelay * Math.pow(2, i) + Math.random() * 1000;
        Utilities.sleep(delay);
        continue;
      }

      try {
        // Return parsed error if possible, otherwise a generic error object
        return JSON.parse(responseText);
      } catch (e) {
        return { error: { code: responseCode, message: responseText } };
      }
    }
    
    // This line is technically unreachable if retries >= 0, but good for safety.
    throw new Error('Request failed after multiple retries.');
  }
}
