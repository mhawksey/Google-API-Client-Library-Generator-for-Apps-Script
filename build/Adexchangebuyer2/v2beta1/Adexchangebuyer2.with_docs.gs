
/**
 * Google Apps Script client library for the Ad Exchange Buyer API II
 * Documentation URL: https://developers.google.com/authorized-buyers/apis/reference/rest/
 * @class
 */
class Adexchangebuyer2 {
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
    this._rootUrl = 'https://adexchangebuyer.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.accounts = {};

    this.accounts.creatives = {};

    /**
     * Creates a creative.
     * @param {string} params.accountId - (Required) The account that this creative belongs to. Can be used to filter the response of the creatives.list method.
     * @param {string} params.duplicateIdMode - Indicates if multiple creatives can share an ID or not. Default is NO_DUPLICATES (one ID per creative).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.creatives.create = (params) => this._makeRequest('v2beta1/accounts/{accountId}/creatives', 'POST', params);

    /**
     * Updates a creative.
     * @param {string} params.accountId - (Required) The account that this creative belongs to. Can be used to filter the response of the creatives.list method.
     * @param {string} params.creativeId - (Required) The buyer-defined creative ID of this creative. Can be used to filter the response of the creatives.list method.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.creatives.update = (params) => this._makeRequest('v2beta1/accounts/{accountId}/creatives/{creativeId}', 'PUT', params);

    /**
     * Gets a creative.
     * @param {string} params.accountId - (Required) The account the creative belongs to.
     * @param {string} params.creativeId - (Required) The ID of the creative to retrieve.
     * @return {object} The API response object.
     */
    this.accounts.creatives.get = (params) => this._makeRequest('v2beta1/accounts/{accountId}/creatives/{creativeId}', 'GET', params);

    /**
     * Lists creatives.
     * @param {string} params.accountId - (Required) The account to list the creatives from. Specify "-" to list all creatives the current user has access to.
     * @param {integer} params.pageSize - Requested page size. The server may return fewer creatives than requested (due to timeout constraint) even if more are available through another call. If unspecified, server will pick an appropriate default. Acceptable values are 1 to 1000, inclusive.
     * @param {string} params.pageToken - A token identifying a page of results the server should return. Typically, this is the value of ListCreativesResponse.next_page_token returned from the previous call to 'ListCreatives' method.
     * @param {string} params.query - An optional query string to filter creatives. If no filter is specified, all active creatives will be returned. Supported queries are: - accountId=*account_id_string* - creativeId=*creative_id_string* - dealsStatus: {approved, conditionally_approved, disapproved, not_checked} - openAuctionStatus: {approved, conditionally_approved, disapproved, not_checked} - attribute: {a numeric attribute from the list of attributes} - disapprovalReason: {a reason from DisapprovalReason} Example: 'accountId=12345 AND (dealsStatus:disapproved AND disapprovalReason:unacceptable_content) OR attribute:47'
     * @return {object} The API response object.
     */
    this.accounts.creatives.list = (params) => this._makeRequest('v2beta1/accounts/{accountId}/creatives', 'GET', params);

    /**
     * Watches a creative. Will result in push notifications being sent to the topic when the creative changes status.
     * @param {string} params.accountId - (Required) The account of the creative to watch.
     * @param {string} params.creativeId - (Required) The creative ID to watch for status changes. Specify "-" to watch all creatives under the above account. If both creative-level and account-level notifications are sent, only a single notification will be sent to the creative-level notification topic.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.creatives.watch = (params) => this._makeRequest('v2beta1/accounts/{accountId}/creatives/{creativeId}:watch', 'POST', params);

    /**
     * Stops watching a creative. Will stop push notifications being sent to the topics when the creative changes status.
     * @param {string} params.accountId - (Required) The account of the creative to stop notifications for.
     * @param {string} params.creativeId - (Required) The creative ID of the creative to stop notifications for. Specify "-" to specify stopping account level notifications.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.creatives.stopWatching = (params) => this._makeRequest('v2beta1/accounts/{accountId}/creatives/{creativeId}:stopWatching', 'POST', params);

    this.accounts.creatives.dealAssociations = {};

    /**
     * Associate an existing deal with a creative.
     * @param {string} params.accountId - (Required) The account the creative belongs to.
     * @param {string} params.creativeId - (Required) The ID of the creative associated with the deal.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.creatives.dealAssociations.add = (params) => this._makeRequest('v2beta1/accounts/{accountId}/creatives/{creativeId}/dealAssociations:add', 'POST', params);

    /**
     * Remove the association between a deal and a creative.
     * @param {string} params.accountId - (Required) The account the creative belongs to.
     * @param {string} params.creativeId - (Required) The ID of the creative associated with the deal.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.creatives.dealAssociations.remove = (params) => this._makeRequest('v2beta1/accounts/{accountId}/creatives/{creativeId}/dealAssociations:remove', 'POST', params);

    /**
     * List all creative-deal associations.
     * @param {string} params.accountId - (Required) The account to list the associations from. Specify "-" to list all creatives the current user has access to.
     * @param {string} params.creativeId - (Required) The creative ID to list the associations from. Specify "-" to list all creatives under the above account.
     * @param {integer} params.pageSize - Requested page size. Server may return fewer associations than requested. If unspecified, server will pick an appropriate default.
     * @param {string} params.pageToken - A token identifying a page of results the server should return. Typically, this is the value of ListDealAssociationsResponse.next_page_token returned from the previous call to 'ListDealAssociations' method.
     * @param {string} params.query - An optional query string to filter deal associations. If no filter is specified, all associations will be returned. Supported queries are: - accountId=*account_id_string* - creativeId=*creative_id_string* - dealsId=*deals_id_string* - dealsStatus:{approved, conditionally_approved, disapproved, not_checked} - openAuctionStatus:{approved, conditionally_approved, disapproved, not_checked} Example: 'dealsId=12345 AND dealsStatus:disapproved'
     * @return {object} The API response object.
     */
    this.accounts.creatives.dealAssociations.list = (params) => this._makeRequest('v2beta1/accounts/{accountId}/creatives/{creativeId}/dealAssociations', 'GET', params);

    this.accounts.clients = {};

    /**
     * Gets a client buyer with a given client account ID.
     * @param {string} params.accountId - (Required) Numerical account ID of the client's sponsor buyer. (required)
     * @param {string} params.clientAccountId - (Required) Numerical account ID of the client buyer to retrieve. (required)
     * @return {object} The API response object.
     */
    this.accounts.clients.get = (params) => this._makeRequest('v2beta1/accounts/{accountId}/clients/{clientAccountId}', 'GET', params);

    /**
     * Lists all the clients for the current sponsor buyer.
     * @param {string} params.accountId - (Required) Unique numerical account ID of the sponsor buyer to list the clients for.
     * @param {integer} params.pageSize - Requested page size. The server may return fewer clients than requested. If unspecified, the server will pick an appropriate default.
     * @param {string} params.pageToken - A token identifying a page of results the server should return. Typically, this is the value of ListClientsResponse.nextPageToken returned from the previous call to the accounts.clients.list method.
     * @param {string} params.partnerClientId - Optional unique identifier (from the standpoint of an Ad Exchange sponsor buyer partner) of the client to return. If specified, at most one client will be returned in the response.
     * @return {object} The API response object.
     */
    this.accounts.clients.list = (params) => this._makeRequest('v2beta1/accounts/{accountId}/clients', 'GET', params);

    /**
     * Creates a new client buyer.
     * @param {string} params.accountId - (Required) Unique numerical account ID for the buyer of which the client buyer is a customer; the sponsor buyer to create a client for. (required)
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.clients.create = (params) => this._makeRequest('v2beta1/accounts/{accountId}/clients', 'POST', params);

    /**
     * Updates an existing client buyer.
     * @param {string} params.accountId - (Required) Unique numerical account ID for the buyer of which the client buyer is a customer; the sponsor buyer to update a client for. (required)
     * @param {string} params.clientAccountId - (Required) Unique numerical account ID of the client to update. (required)
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.clients.update = (params) => this._makeRequest('v2beta1/accounts/{accountId}/clients/{clientAccountId}', 'PUT', params);

    this.accounts.clients.users = {};

    /**
     * Lists all the known client users for a specified sponsor buyer account ID.
     * @param {string} params.accountId - (Required) Numerical account ID of the sponsor buyer of the client to list users for. (required)
     * @param {string} params.clientAccountId - (Required) The account ID of the client buyer to list users for. (required) You must specify either a string representation of a numerical account identifier or the `-` character to list all the client users for all the clients of a given sponsor buyer.
     * @param {integer} params.pageSize - Requested page size. The server may return fewer clients than requested. If unspecified, the server will pick an appropriate default.
     * @param {string} params.pageToken - A token identifying a page of results the server should return. Typically, this is the value of ListClientUsersResponse.nextPageToken returned from the previous call to the accounts.clients.users.list method.
     * @return {object} The API response object.
     */
    this.accounts.clients.users.list = (params) => this._makeRequest('v2beta1/accounts/{accountId}/clients/{clientAccountId}/users', 'GET', params);

    /**
     * Updates an existing client user. Only the user status can be changed on update.
     * @param {string} params.accountId - (Required) Numerical account ID of the client's sponsor buyer. (required)
     * @param {string} params.clientAccountId - (Required) Numerical account ID of the client buyer that the user to be retrieved is associated with. (required)
     * @param {string} params.userId - (Required) Numerical identifier of the user to retrieve. (required)
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.clients.users.update = (params) => this._makeRequest('v2beta1/accounts/{accountId}/clients/{clientAccountId}/users/{userId}', 'PUT', params);

    /**
     * Retrieves an existing client user.
     * @param {string} params.accountId - (Required) Numerical account ID of the client's sponsor buyer. (required)
     * @param {string} params.clientAccountId - (Required) Numerical account ID of the client buyer that the user to be retrieved is associated with. (required)
     * @param {string} params.userId - (Required) Numerical identifier of the user to retrieve. (required)
     * @return {object} The API response object.
     */
    this.accounts.clients.users.get = (params) => this._makeRequest('v2beta1/accounts/{accountId}/clients/{clientAccountId}/users/{userId}', 'GET', params);

    this.accounts.clients.invitations = {};

    /**
     * Creates and sends out an email invitation to access an Ad Exchange client buyer account.
     * @param {string} params.accountId - (Required) Numerical account ID of the client's sponsor buyer. (required)
     * @param {string} params.clientAccountId - (Required) Numerical account ID of the client buyer that the user should be associated with. (required)
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.clients.invitations.create = (params) => this._makeRequest('v2beta1/accounts/{accountId}/clients/{clientAccountId}/invitations', 'POST', params);

    /**
     * Retrieves an existing client user invitation.
     * @param {string} params.accountId - (Required) Numerical account ID of the client's sponsor buyer. (required)
     * @param {string} params.clientAccountId - (Required) Numerical account ID of the client buyer that the user invitation to be retrieved is associated with. (required)
     * @param {string} params.invitationId - (Required) Numerical identifier of the user invitation to retrieve. (required)
     * @return {object} The API response object.
     */
    this.accounts.clients.invitations.get = (params) => this._makeRequest('v2beta1/accounts/{accountId}/clients/{clientAccountId}/invitations/{invitationId}', 'GET', params);

    /**
     * Lists all the client users invitations for a client with a given account ID.
     * @param {string} params.accountId - (Required) Numerical account ID of the client's sponsor buyer. (required)
     * @param {string} params.clientAccountId - (Required) Numerical account ID of the client buyer to list invitations for. (required) You must either specify a string representation of a numerical account identifier or the `-` character to list all the invitations for all the clients of a given sponsor buyer.
     * @param {integer} params.pageSize - Requested page size. Server may return fewer clients than requested. If unspecified, server will pick an appropriate default.
     * @param {string} params.pageToken - A token identifying a page of results the server should return. Typically, this is the value of ListClientUserInvitationsResponse.nextPageToken returned from the previous call to the clients.invitations.list method.
     * @return {object} The API response object.
     */
    this.accounts.clients.invitations.list = (params) => this._makeRequest('v2beta1/accounts/{accountId}/clients/{clientAccountId}/invitations', 'GET', params);

    this.accounts.proposals = {};

    /**
     * Gets a proposal given its ID. The proposal is returned at its head revision.
     * @param {string} params.accountId - (Required) Account ID of the buyer.
     * @param {string} params.proposalId - (Required) The unique ID of the proposal
     * @return {object} The API response object.
     */
    this.accounts.proposals.get = (params) => this._makeRequest('v2beta1/accounts/{accountId}/proposals/{proposalId}', 'GET', params);

    /**
     * Create the given proposal. Each created proposal and any deals it contains are assigned a unique ID by the server.
     * @param {string} params.accountId - (Required) Account ID of the buyer.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.proposals.create = (params) => this._makeRequest('v2beta1/accounts/{accountId}/proposals', 'POST', params);

    /**
     * Update the given proposal at the client known revision number. If the server revision has advanced since the passed-in `proposal.proposal_revision`, an `ABORTED` error message will be returned. Only the buyer-modifiable fields of the proposal will be updated. Note that the deals in the proposal will be updated to match the passed-in copy. If a passed-in deal does not have a `deal_id`, the server will assign a new unique ID and create the deal. If passed-in deal has a `deal_id`, it will be updated to match the passed-in copy. Any existing deals not present in the passed-in proposal will be deleted. It is an error to pass in a deal with a `deal_id` not present at head.
     * @param {string} params.accountId - (Required) Account ID of the buyer.
     * @param {string} params.proposalId - (Required) The unique ID of the proposal.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.proposals.update = (params) => this._makeRequest('v2beta1/accounts/{accountId}/proposals/{proposalId}', 'PUT', params);

    /**
     * List proposals. A filter expression (PQL query) may be specified to filter the results. To retrieve all finalized proposals, regardless if a proposal is being renegotiated, see the FinalizedProposals resource. Note that Bidder/ChildSeat relationships differ from the usual behavior. A Bidder account can only see its child seats' proposals by specifying the ChildSeat's accountId in the request path.
     * @param {string} params.accountId - (Required) Account ID of the buyer.
     * @param {string} params.filter - An optional PQL filter query used to query for proposals. Nested repeated fields, such as proposal.deals.targetingCriterion, cannot be filtered.
     * @param {string} params.filterSyntax - Syntax the filter is written in. Current implementation defaults to PQL but in the future it will be LIST_FILTER.
     * @param {integer} params.pageSize - Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
     * @param {string} params.pageToken - The page token as returned from ListProposalsResponse.
     * @return {object} The API response object.
     */
    this.accounts.proposals.list = (params) => this._makeRequest('v2beta1/accounts/{accountId}/proposals', 'GET', params);

    /**
     * Create a new note and attach it to the proposal. The note is assigned a unique ID by the server. The proposal revision number will not increase when associated with a new note.
     * @param {string} params.accountId - (Required) Account ID of the buyer.
     * @param {string} params.proposalId - (Required) The ID of the proposal to attach the note to.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.proposals.addNote = (params) => this._makeRequest('v2beta1/accounts/{accountId}/proposals/{proposalId}:addNote', 'POST', params);

    /**
     * Cancel an ongoing negotiation on a proposal. This does not cancel or end serving for the deals if the proposal has been finalized, but only cancels a negotiation unilaterally.
     * @param {string} params.accountId - (Required) Account ID of the buyer.
     * @param {string} params.proposalId - (Required) The ID of the proposal to cancel negotiation for.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.proposals.cancelNegotiation = (params) => this._makeRequest('v2beta1/accounts/{accountId}/proposals/{proposalId}:cancelNegotiation', 'POST', params);

    /**
     * Mark the proposal as accepted at the given revision number. If the number does not match the server's revision number an `ABORTED` error message will be returned. This call updates the proposal_state from `PROPOSED` to `BUYER_ACCEPTED`, or from `SELLER_ACCEPTED` to `FINALIZED`. Upon calling this endpoint, the buyer implicitly agrees to the terms and conditions optionally set within the proposal by the publisher.
     * @param {string} params.accountId - (Required) Account ID of the buyer.
     * @param {string} params.proposalId - (Required) The ID of the proposal to accept.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.proposals.accept = (params) => this._makeRequest('v2beta1/accounts/{accountId}/proposals/{proposalId}:accept', 'POST', params);

    /**
     * You can opt-in to manually update proposals to indicate that setup is complete. By default, proposal setup is automatically completed after their deals are finalized. Contact your Technical Account Manager to opt in. Buyers can call this method when the proposal has been finalized, and all the required creatives have been uploaded using the Creatives API. This call updates the `is_setup_completed` field on the deals in the proposal, and notifies the seller. The server then advances the revision number of the most recent proposal. To mark an individual deal as ready to serve, call `buyers.finalizedDeals.setReadyToServe` in the Marketplace API.
     * @param {string} params.accountId - (Required) Account ID of the buyer.
     * @param {string} params.proposalId - (Required) The ID of the proposal to mark as setup completed.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.proposals.completeSetup = (params) => this._makeRequest('v2beta1/accounts/{accountId}/proposals/{proposalId}:completeSetup', 'POST', params);

    /**
     * Update the given proposal to pause serving. This method will set the `DealServingMetadata.DealPauseStatus.has_buyer_paused` bit to true for all deals in the proposal. It is a no-op to pause an already-paused proposal. It is an error to call PauseProposal for a proposal that is not finalized or renegotiating.
     * @param {string} params.accountId - (Required) Account ID of the buyer.
     * @param {string} params.proposalId - (Required) The ID of the proposal to pause.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.proposals.pause = (params) => this._makeRequest('v2beta1/accounts/{accountId}/proposals/{proposalId}:pause', 'POST', params);

    /**
     * Update the given proposal to resume serving. This method will set the `DealServingMetadata.DealPauseStatus.has_buyer_paused` bit to false for all deals in the proposal. Note that if the `has_seller_paused` bit is also set, serving will not resume until the seller also resumes. It is a no-op to resume an already-running proposal. It is an error to call ResumeProposal for a proposal that is not finalized or renegotiating.
     * @param {string} params.accountId - (Required) Account ID of the buyer.
     * @param {string} params.proposalId - (Required) The ID of the proposal to resume.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.proposals.resume = (params) => this._makeRequest('v2beta1/accounts/{accountId}/proposals/{proposalId}:resume', 'POST', params);

    this.accounts.finalizedProposals = {};

    /**
     * List finalized proposals, regardless if a proposal is being renegotiated. A filter expression (PQL query) may be specified to filter the results. The notes will not be returned.
     * @param {string} params.accountId - (Required) Account ID of the buyer.
     * @param {string} params.filter - An optional PQL filter query used to query for proposals. Nested repeated fields, such as proposal.deals.targetingCriterion, cannot be filtered.
     * @param {string} params.filterSyntax - Syntax the filter is written in. Current implementation defaults to PQL but in the future it will be LIST_FILTER.
     * @param {integer} params.pageSize - Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
     * @param {string} params.pageToken - The page token as returned from ListProposalsResponse.
     * @return {object} The API response object.
     */
    this.accounts.finalizedProposals.list = (params) => this._makeRequest('v2beta1/accounts/{accountId}/finalizedProposals', 'GET', params);

    /**
     * Update given deals to pause serving. This method will set the `DealServingMetadata.DealPauseStatus.has_buyer_paused` bit to true for all listed deals in the request. Currently, this method only applies to PG and PD deals. For PA deals, call accounts.proposals.pause endpoint. It is a no-op to pause already-paused deals. It is an error to call PauseProposalDeals for deals which are not part of the proposal of proposal_id or which are not finalized or renegotiating.
     * @param {string} params.accountId - (Required) Account ID of the buyer.
     * @param {string} params.proposalId - (Required) The proposal_id of the proposal containing the deals.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.finalizedProposals.pause = (params) => this._makeRequest('v2beta1/accounts/{accountId}/finalizedProposals/{proposalId}:pause', 'POST', params);

    /**
     * Update given deals to resume serving. This method will set the `DealServingMetadata.DealPauseStatus.has_buyer_paused` bit to false for all listed deals in the request. Currently, this method only applies to PG and PD deals. For PA deals, call accounts.proposals.resume endpoint. It is a no-op to resume running deals or deals paused by the other party. It is an error to call ResumeProposalDeals for deals which are not part of the proposal of proposal_id or which are not finalized or renegotiating.
     * @param {string} params.accountId - (Required) Account ID of the buyer.
     * @param {string} params.proposalId - (Required) The proposal_id of the proposal containing the deals.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.finalizedProposals.resume = (params) => this._makeRequest('v2beta1/accounts/{accountId}/finalizedProposals/{proposalId}:resume', 'POST', params);

    this.accounts.products = {};

    /**
     * Gets the requested product by ID.
     * @param {string} params.accountId - (Required) Account ID of the buyer.
     * @param {string} params.productId - (Required) The ID for the product to get the head revision for.
     * @return {object} The API response object.
     */
    this.accounts.products.get = (params) => this._makeRequest('v2beta1/accounts/{accountId}/products/{productId}', 'GET', params);

    /**
     * List all products visible to the buyer (optionally filtered by the specified PQL query).
     * @param {string} params.accountId - (Required) Account ID of the buyer.
     * @param {string} params.filter - An optional PQL query used to query for products. See https://developers.google.com/ad-manager/docs/pqlreference for documentation about PQL and examples. Nested repeated fields, such as product.targetingCriterion.inclusions, cannot be filtered.
     * @param {integer} params.pageSize - Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
     * @param {string} params.pageToken - The page token as returned from ListProductsResponse.
     * @return {object} The API response object.
     */
    this.accounts.products.list = (params) => this._makeRequest('v2beta1/accounts/{accountId}/products', 'GET', params);

    this.accounts.publisherProfiles = {};

    /**
     * Gets the requested publisher profile by id.
     * @param {string} params.accountId - (Required) Account ID of the buyer.
     * @param {string} params.publisherProfileId - (Required) The id for the publisher profile to get.
     * @return {object} The API response object.
     */
    this.accounts.publisherProfiles.get = (params) => this._makeRequest('v2beta1/accounts/{accountId}/publisherProfiles/{publisherProfileId}', 'GET', params);

    /**
     * List all publisher profiles visible to the buyer
     * @param {string} params.accountId - (Required) Account ID of the buyer.
     * @param {integer} params.pageSize - Specify the number of results to include per page.
     * @param {string} params.pageToken - The page token as return from ListPublisherProfilesResponse.
     * @return {object} The API response object.
     */
    this.accounts.publisherProfiles.list = (params) => this._makeRequest('v2beta1/accounts/{accountId}/publisherProfiles', 'GET', params);

    this.bidders = {};

    this.bidders.accounts = {};

    this.bidders.accounts.filterSets = {};

    /**
     * Creates the specified filter set for the account with the given account ID.
     * @param {boolean} params.isTransient - Whether the filter set is transient, or should be persisted indefinitely. By default, filter sets are not transient. If transient, it will be available for at least 1 hour after creation.
     * @param {string} params.ownerName - (Required) Name of the owner (bidder or account) of the filter set to be created. For example: - For a bidder-level filter set for bidder 123: `bidders/123` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.bidders.accounts.filterSets.create = (params) => this._makeRequest('v2beta1/{+ownerName}/filterSets', 'POST', params);

    /**
     * Retrieves the requested filter set for the account with the given account ID.
     * @param {string} params.name - (Required) Full name of the resource being requested. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
     * @return {object} The API response object.
     */
    this.bidders.accounts.filterSets.get = (params) => this._makeRequest('v2beta1/{+name}', 'GET', params);

    /**
     * Lists all filter sets for the account with the given account ID.
     * @param {string} params.ownerName - (Required) Name of the owner (bidder or account) of the filter sets to be listed. For example: - For a bidder-level filter set for bidder 123: `bidders/123` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456`
     * @param {integer} params.pageSize - Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
     * @param {string} params.pageToken - A token identifying a page of results the server should return. Typically, this is the value of ListFilterSetsResponse.nextPageToken returned from the previous call to the accounts.filterSets.list method.
     * @return {object} The API response object.
     */
    this.bidders.accounts.filterSets.list = (params) => this._makeRequest('v2beta1/{+ownerName}/filterSets', 'GET', params);

    /**
     * Deletes the requested filter set from the account with the given account ID.
     * @param {string} params.name - (Required) Full name of the resource to delete. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
     * @return {object} The API response object.
     */
    this.bidders.accounts.filterSets.delete = (params) => this._makeRequest('v2beta1/{+name}', 'DELETE', params);

    this.bidders.accounts.filterSets.impressionMetrics = {};

    /**
     * Lists all metrics that are measured in terms of number of impressions.
     * @param {string} params.filterSetName - (Required) Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
     * @param {integer} params.pageSize - Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
     * @param {string} params.pageToken - A token identifying a page of results the server should return. Typically, this is the value of ListImpressionMetricsResponse.nextPageToken returned from the previous call to the impressionMetrics.list method.
     * @return {object} The API response object.
     */
    this.bidders.accounts.filterSets.impressionMetrics.list = (params) => this._makeRequest('v2beta1/{+filterSetName}/impressionMetrics', 'GET', params);

    this.bidders.accounts.filterSets.bidMetrics = {};

    /**
     * Lists all metrics that are measured in terms of number of bids.
     * @param {string} params.filterSetName - (Required) Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
     * @param {integer} params.pageSize - Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
     * @param {string} params.pageToken - A token identifying a page of results the server should return. Typically, this is the value of ListBidMetricsResponse.nextPageToken returned from the previous call to the bidMetrics.list method.
     * @return {object} The API response object.
     */
    this.bidders.accounts.filterSets.bidMetrics.list = (params) => this._makeRequest('v2beta1/{+filterSetName}/bidMetrics', 'GET', params);

    this.bidders.accounts.filterSets.filteredBidRequests = {};

    /**
     * List all reasons that caused a bid request not to be sent for an impression, with the number of bid requests not sent for each reason.
     * @param {string} params.filterSetName - (Required) Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
     * @param {integer} params.pageSize - Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
     * @param {string} params.pageToken - A token identifying a page of results the server should return. Typically, this is the value of ListFilteredBidRequestsResponse.nextPageToken returned from the previous call to the filteredBidRequests.list method.
     * @return {object} The API response object.
     */
    this.bidders.accounts.filterSets.filteredBidRequests.list = (params) => this._makeRequest('v2beta1/{+filterSetName}/filteredBidRequests', 'GET', params);

    this.bidders.accounts.filterSets.bidResponseErrors = {};

    /**
     * List all errors that occurred in bid responses, with the number of bid responses affected for each reason.
     * @param {string} params.filterSetName - (Required) Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
     * @param {integer} params.pageSize - Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
     * @param {string} params.pageToken - A token identifying a page of results the server should return. Typically, this is the value of ListBidResponseErrorsResponse.nextPageToken returned from the previous call to the bidResponseErrors.list method.
     * @return {object} The API response object.
     */
    this.bidders.accounts.filterSets.bidResponseErrors.list = (params) => this._makeRequest('v2beta1/{+filterSetName}/bidResponseErrors', 'GET', params);

    this.bidders.accounts.filterSets.bidResponsesWithoutBids = {};

    /**
     * List all reasons for which bid responses were considered to have no applicable bids, with the number of bid responses affected for each reason.
     * @param {string} params.filterSetName - (Required) Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
     * @param {integer} params.pageSize - Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
     * @param {string} params.pageToken - A token identifying a page of results the server should return. Typically, this is the value of ListBidResponsesWithoutBidsResponse.nextPageToken returned from the previous call to the bidResponsesWithoutBids.list method.
     * @return {object} The API response object.
     */
    this.bidders.accounts.filterSets.bidResponsesWithoutBids.list = (params) => this._makeRequest('v2beta1/{+filterSetName}/bidResponsesWithoutBids', 'GET', params);

    this.bidders.accounts.filterSets.filteredBids = {};

    /**
     * List all reasons for which bids were filtered, with the number of bids filtered for each reason.
     * @param {string} params.filterSetName - (Required) Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
     * @param {integer} params.pageSize - Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
     * @param {string} params.pageToken - A token identifying a page of results the server should return. Typically, this is the value of ListFilteredBidsResponse.nextPageToken returned from the previous call to the filteredBids.list method.
     * @return {object} The API response object.
     */
    this.bidders.accounts.filterSets.filteredBids.list = (params) => this._makeRequest('v2beta1/{+filterSetName}/filteredBids', 'GET', params);

    this.bidders.accounts.filterSets.filteredBids.details = {};

    /**
     * List all details associated with a specific reason for which bids were filtered, with the number of bids filtered for each detail.
     * @param {integer} params.creativeStatusId - (Required) The ID of the creative status for which to retrieve a breakdown by detail. See [creative-status-codes](https://developers.google.com/authorized-buyers/rtb/downloads/creative-status-codes). Details are only available for statuses 10, 14, 15, 17, 18, 19, 86, and 87.
     * @param {string} params.filterSetName - (Required) Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
     * @param {integer} params.pageSize - Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
     * @param {string} params.pageToken - A token identifying a page of results the server should return. Typically, this is the value of ListCreativeStatusBreakdownByDetailResponse.nextPageToken returned from the previous call to the filteredBids.details.list method.
     * @return {object} The API response object.
     */
    this.bidders.accounts.filterSets.filteredBids.details.list = (params) => this._makeRequest('v2beta1/{+filterSetName}/filteredBids/{creativeStatusId}/details', 'GET', params);

    this.bidders.accounts.filterSets.filteredBids.creatives = {};

    /**
     * List all creatives associated with a specific reason for which bids were filtered, with the number of bids filtered for each creative.
     * @param {integer} params.creativeStatusId - (Required) The ID of the creative status for which to retrieve a breakdown by creative. See [creative-status-codes](https://developers.google.com/authorized-buyers/rtb/downloads/creative-status-codes).
     * @param {string} params.filterSetName - (Required) Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
     * @param {integer} params.pageSize - Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
     * @param {string} params.pageToken - A token identifying a page of results the server should return. Typically, this is the value of ListCreativeStatusBreakdownByCreativeResponse.nextPageToken returned from the previous call to the filteredBids.creatives.list method.
     * @return {object} The API response object.
     */
    this.bidders.accounts.filterSets.filteredBids.creatives.list = (params) => this._makeRequest('v2beta1/{+filterSetName}/filteredBids/{creativeStatusId}/creatives', 'GET', params);

    this.bidders.accounts.filterSets.losingBids = {};

    /**
     * List all reasons for which bids lost in the auction, with the number of bids that lost for each reason.
     * @param {string} params.filterSetName - (Required) Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
     * @param {integer} params.pageSize - Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
     * @param {string} params.pageToken - A token identifying a page of results the server should return. Typically, this is the value of ListLosingBidsResponse.nextPageToken returned from the previous call to the losingBids.list method.
     * @return {object} The API response object.
     */
    this.bidders.accounts.filterSets.losingBids.list = (params) => this._makeRequest('v2beta1/{+filterSetName}/losingBids', 'GET', params);

    this.bidders.accounts.filterSets.nonBillableWinningBids = {};

    /**
     * List all reasons for which winning bids were not billable, with the number of bids not billed for each reason.
     * @param {string} params.filterSetName - (Required) Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
     * @param {integer} params.pageSize - Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
     * @param {string} params.pageToken - A token identifying a page of results the server should return. Typically, this is the value of ListNonBillableWinningBidsResponse.nextPageToken returned from the previous call to the nonBillableWinningBids.list method.
     * @return {object} The API response object.
     */
    this.bidders.accounts.filterSets.nonBillableWinningBids.list = (params) => this._makeRequest('v2beta1/{+filterSetName}/nonBillableWinningBids', 'GET', params);

    this.bidders.filterSets = {};

    /**
     * Creates the specified filter set for the account with the given account ID.
     * @param {boolean} params.isTransient - Whether the filter set is transient, or should be persisted indefinitely. By default, filter sets are not transient. If transient, it will be available for at least 1 hour after creation.
     * @param {string} params.ownerName - (Required) Name of the owner (bidder or account) of the filter set to be created. For example: - For a bidder-level filter set for bidder 123: `bidders/123` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.bidders.filterSets.create = (params) => this._makeRequest('v2beta1/{+ownerName}/filterSets', 'POST', params);

    /**
     * Retrieves the requested filter set for the account with the given account ID.
     * @param {string} params.name - (Required) Full name of the resource being requested. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
     * @return {object} The API response object.
     */
    this.bidders.filterSets.get = (params) => this._makeRequest('v2beta1/{+name}', 'GET', params);

    /**
     * Lists all filter sets for the account with the given account ID.
     * @param {string} params.ownerName - (Required) Name of the owner (bidder or account) of the filter sets to be listed. For example: - For a bidder-level filter set for bidder 123: `bidders/123` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456`
     * @param {integer} params.pageSize - Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
     * @param {string} params.pageToken - A token identifying a page of results the server should return. Typically, this is the value of ListFilterSetsResponse.nextPageToken returned from the previous call to the accounts.filterSets.list method.
     * @return {object} The API response object.
     */
    this.bidders.filterSets.list = (params) => this._makeRequest('v2beta1/{+ownerName}/filterSets', 'GET', params);

    /**
     * Deletes the requested filter set from the account with the given account ID.
     * @param {string} params.name - (Required) Full name of the resource to delete. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
     * @return {object} The API response object.
     */
    this.bidders.filterSets.delete = (params) => this._makeRequest('v2beta1/{+name}', 'DELETE', params);

    this.bidders.filterSets.impressionMetrics = {};

    /**
     * Lists all metrics that are measured in terms of number of impressions.
     * @param {string} params.filterSetName - (Required) Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
     * @param {integer} params.pageSize - Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
     * @param {string} params.pageToken - A token identifying a page of results the server should return. Typically, this is the value of ListImpressionMetricsResponse.nextPageToken returned from the previous call to the impressionMetrics.list method.
     * @return {object} The API response object.
     */
    this.bidders.filterSets.impressionMetrics.list = (params) => this._makeRequest('v2beta1/{+filterSetName}/impressionMetrics', 'GET', params);

    this.bidders.filterSets.bidMetrics = {};

    /**
     * Lists all metrics that are measured in terms of number of bids.
     * @param {string} params.filterSetName - (Required) Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
     * @param {integer} params.pageSize - Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
     * @param {string} params.pageToken - A token identifying a page of results the server should return. Typically, this is the value of ListBidMetricsResponse.nextPageToken returned from the previous call to the bidMetrics.list method.
     * @return {object} The API response object.
     */
    this.bidders.filterSets.bidMetrics.list = (params) => this._makeRequest('v2beta1/{+filterSetName}/bidMetrics', 'GET', params);

    this.bidders.filterSets.filteredBidRequests = {};

    /**
     * List all reasons that caused a bid request not to be sent for an impression, with the number of bid requests not sent for each reason.
     * @param {string} params.filterSetName - (Required) Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
     * @param {integer} params.pageSize - Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
     * @param {string} params.pageToken - A token identifying a page of results the server should return. Typically, this is the value of ListFilteredBidRequestsResponse.nextPageToken returned from the previous call to the filteredBidRequests.list method.
     * @return {object} The API response object.
     */
    this.bidders.filterSets.filteredBidRequests.list = (params) => this._makeRequest('v2beta1/{+filterSetName}/filteredBidRequests', 'GET', params);

    this.bidders.filterSets.bidResponseErrors = {};

    /**
     * List all errors that occurred in bid responses, with the number of bid responses affected for each reason.
     * @param {string} params.filterSetName - (Required) Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
     * @param {integer} params.pageSize - Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
     * @param {string} params.pageToken - A token identifying a page of results the server should return. Typically, this is the value of ListBidResponseErrorsResponse.nextPageToken returned from the previous call to the bidResponseErrors.list method.
     * @return {object} The API response object.
     */
    this.bidders.filterSets.bidResponseErrors.list = (params) => this._makeRequest('v2beta1/{+filterSetName}/bidResponseErrors', 'GET', params);

    this.bidders.filterSets.bidResponsesWithoutBids = {};

    /**
     * List all reasons for which bid responses were considered to have no applicable bids, with the number of bid responses affected for each reason.
     * @param {string} params.filterSetName - (Required) Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
     * @param {integer} params.pageSize - Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
     * @param {string} params.pageToken - A token identifying a page of results the server should return. Typically, this is the value of ListBidResponsesWithoutBidsResponse.nextPageToken returned from the previous call to the bidResponsesWithoutBids.list method.
     * @return {object} The API response object.
     */
    this.bidders.filterSets.bidResponsesWithoutBids.list = (params) => this._makeRequest('v2beta1/{+filterSetName}/bidResponsesWithoutBids', 'GET', params);

    this.bidders.filterSets.filteredBids = {};

    /**
     * List all reasons for which bids were filtered, with the number of bids filtered for each reason.
     * @param {string} params.filterSetName - (Required) Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
     * @param {integer} params.pageSize - Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
     * @param {string} params.pageToken - A token identifying a page of results the server should return. Typically, this is the value of ListFilteredBidsResponse.nextPageToken returned from the previous call to the filteredBids.list method.
     * @return {object} The API response object.
     */
    this.bidders.filterSets.filteredBids.list = (params) => this._makeRequest('v2beta1/{+filterSetName}/filteredBids', 'GET', params);

    this.bidders.filterSets.filteredBids.details = {};

    /**
     * List all details associated with a specific reason for which bids were filtered, with the number of bids filtered for each detail.
     * @param {integer} params.creativeStatusId - (Required) The ID of the creative status for which to retrieve a breakdown by detail. See [creative-status-codes](https://developers.google.com/authorized-buyers/rtb/downloads/creative-status-codes). Details are only available for statuses 10, 14, 15, 17, 18, 19, 86, and 87.
     * @param {string} params.filterSetName - (Required) Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
     * @param {integer} params.pageSize - Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
     * @param {string} params.pageToken - A token identifying a page of results the server should return. Typically, this is the value of ListCreativeStatusBreakdownByDetailResponse.nextPageToken returned from the previous call to the filteredBids.details.list method.
     * @return {object} The API response object.
     */
    this.bidders.filterSets.filteredBids.details.list = (params) => this._makeRequest('v2beta1/{+filterSetName}/filteredBids/{creativeStatusId}/details', 'GET', params);

    this.bidders.filterSets.filteredBids.creatives = {};

    /**
     * List all creatives associated with a specific reason for which bids were filtered, with the number of bids filtered for each creative.
     * @param {integer} params.creativeStatusId - (Required) The ID of the creative status for which to retrieve a breakdown by creative. See [creative-status-codes](https://developers.google.com/authorized-buyers/rtb/downloads/creative-status-codes).
     * @param {string} params.filterSetName - (Required) Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
     * @param {integer} params.pageSize - Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
     * @param {string} params.pageToken - A token identifying a page of results the server should return. Typically, this is the value of ListCreativeStatusBreakdownByCreativeResponse.nextPageToken returned from the previous call to the filteredBids.creatives.list method.
     * @return {object} The API response object.
     */
    this.bidders.filterSets.filteredBids.creatives.list = (params) => this._makeRequest('v2beta1/{+filterSetName}/filteredBids/{creativeStatusId}/creatives', 'GET', params);

    this.bidders.filterSets.losingBids = {};

    /**
     * List all reasons for which bids lost in the auction, with the number of bids that lost for each reason.
     * @param {string} params.filterSetName - (Required) Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
     * @param {integer} params.pageSize - Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
     * @param {string} params.pageToken - A token identifying a page of results the server should return. Typically, this is the value of ListLosingBidsResponse.nextPageToken returned from the previous call to the losingBids.list method.
     * @return {object} The API response object.
     */
    this.bidders.filterSets.losingBids.list = (params) => this._makeRequest('v2beta1/{+filterSetName}/losingBids', 'GET', params);

    this.bidders.filterSets.nonBillableWinningBids = {};

    /**
     * List all reasons for which winning bids were not billable, with the number of bids not billed for each reason.
     * @param {string} params.filterSetName - (Required) Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
     * @param {integer} params.pageSize - Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
     * @param {string} params.pageToken - A token identifying a page of results the server should return. Typically, this is the value of ListNonBillableWinningBidsResponse.nextPageToken returned from the previous call to the nonBillableWinningBids.list method.
     * @return {object} The API response object.
     */
    this.bidders.filterSets.nonBillableWinningBids.list = (params) => this._makeRequest('v2beta1/{+filterSetName}/nonBillableWinningBids', 'GET', params);

    this.buyers = {};

    this.buyers.filterSets = {};

    /**
     * Creates the specified filter set for the account with the given account ID.
     * @param {boolean} params.isTransient - Whether the filter set is transient, or should be persisted indefinitely. By default, filter sets are not transient. If transient, it will be available for at least 1 hour after creation.
     * @param {string} params.ownerName - (Required) Name of the owner (bidder or account) of the filter set to be created. For example: - For a bidder-level filter set for bidder 123: `bidders/123` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.buyers.filterSets.create = (params) => this._makeRequest('v2beta1/{+ownerName}/filterSets', 'POST', params);

    /**
     * Retrieves the requested filter set for the account with the given account ID.
     * @param {string} params.name - (Required) Full name of the resource being requested. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
     * @return {object} The API response object.
     */
    this.buyers.filterSets.get = (params) => this._makeRequest('v2beta1/{+name}', 'GET', params);

    /**
     * Lists all filter sets for the account with the given account ID.
     * @param {string} params.ownerName - (Required) Name of the owner (bidder or account) of the filter sets to be listed. For example: - For a bidder-level filter set for bidder 123: `bidders/123` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456`
     * @param {integer} params.pageSize - Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
     * @param {string} params.pageToken - A token identifying a page of results the server should return. Typically, this is the value of ListFilterSetsResponse.nextPageToken returned from the previous call to the accounts.filterSets.list method.
     * @return {object} The API response object.
     */
    this.buyers.filterSets.list = (params) => this._makeRequest('v2beta1/{+ownerName}/filterSets', 'GET', params);

    /**
     * Deletes the requested filter set from the account with the given account ID.
     * @param {string} params.name - (Required) Full name of the resource to delete. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
     * @return {object} The API response object.
     */
    this.buyers.filterSets.delete = (params) => this._makeRequest('v2beta1/{+name}', 'DELETE', params);

    this.buyers.filterSets.impressionMetrics = {};

    /**
     * Lists all metrics that are measured in terms of number of impressions.
     * @param {string} params.filterSetName - (Required) Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
     * @param {integer} params.pageSize - Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
     * @param {string} params.pageToken - A token identifying a page of results the server should return. Typically, this is the value of ListImpressionMetricsResponse.nextPageToken returned from the previous call to the impressionMetrics.list method.
     * @return {object} The API response object.
     */
    this.buyers.filterSets.impressionMetrics.list = (params) => this._makeRequest('v2beta1/{+filterSetName}/impressionMetrics', 'GET', params);

    this.buyers.filterSets.bidMetrics = {};

    /**
     * Lists all metrics that are measured in terms of number of bids.
     * @param {string} params.filterSetName - (Required) Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
     * @param {integer} params.pageSize - Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
     * @param {string} params.pageToken - A token identifying a page of results the server should return. Typically, this is the value of ListBidMetricsResponse.nextPageToken returned from the previous call to the bidMetrics.list method.
     * @return {object} The API response object.
     */
    this.buyers.filterSets.bidMetrics.list = (params) => this._makeRequest('v2beta1/{+filterSetName}/bidMetrics', 'GET', params);

    this.buyers.filterSets.filteredBidRequests = {};

    /**
     * List all reasons that caused a bid request not to be sent for an impression, with the number of bid requests not sent for each reason.
     * @param {string} params.filterSetName - (Required) Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
     * @param {integer} params.pageSize - Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
     * @param {string} params.pageToken - A token identifying a page of results the server should return. Typically, this is the value of ListFilteredBidRequestsResponse.nextPageToken returned from the previous call to the filteredBidRequests.list method.
     * @return {object} The API response object.
     */
    this.buyers.filterSets.filteredBidRequests.list = (params) => this._makeRequest('v2beta1/{+filterSetName}/filteredBidRequests', 'GET', params);

    this.buyers.filterSets.bidResponseErrors = {};

    /**
     * List all errors that occurred in bid responses, with the number of bid responses affected for each reason.
     * @param {string} params.filterSetName - (Required) Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
     * @param {integer} params.pageSize - Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
     * @param {string} params.pageToken - A token identifying a page of results the server should return. Typically, this is the value of ListBidResponseErrorsResponse.nextPageToken returned from the previous call to the bidResponseErrors.list method.
     * @return {object} The API response object.
     */
    this.buyers.filterSets.bidResponseErrors.list = (params) => this._makeRequest('v2beta1/{+filterSetName}/bidResponseErrors', 'GET', params);

    this.buyers.filterSets.bidResponsesWithoutBids = {};

    /**
     * List all reasons for which bid responses were considered to have no applicable bids, with the number of bid responses affected for each reason.
     * @param {string} params.filterSetName - (Required) Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
     * @param {integer} params.pageSize - Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
     * @param {string} params.pageToken - A token identifying a page of results the server should return. Typically, this is the value of ListBidResponsesWithoutBidsResponse.nextPageToken returned from the previous call to the bidResponsesWithoutBids.list method.
     * @return {object} The API response object.
     */
    this.buyers.filterSets.bidResponsesWithoutBids.list = (params) => this._makeRequest('v2beta1/{+filterSetName}/bidResponsesWithoutBids', 'GET', params);

    this.buyers.filterSets.filteredBids = {};

    /**
     * List all reasons for which bids were filtered, with the number of bids filtered for each reason.
     * @param {string} params.filterSetName - (Required) Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
     * @param {integer} params.pageSize - Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
     * @param {string} params.pageToken - A token identifying a page of results the server should return. Typically, this is the value of ListFilteredBidsResponse.nextPageToken returned from the previous call to the filteredBids.list method.
     * @return {object} The API response object.
     */
    this.buyers.filterSets.filteredBids.list = (params) => this._makeRequest('v2beta1/{+filterSetName}/filteredBids', 'GET', params);

    this.buyers.filterSets.filteredBids.details = {};

    /**
     * List all details associated with a specific reason for which bids were filtered, with the number of bids filtered for each detail.
     * @param {integer} params.creativeStatusId - (Required) The ID of the creative status for which to retrieve a breakdown by detail. See [creative-status-codes](https://developers.google.com/authorized-buyers/rtb/downloads/creative-status-codes). Details are only available for statuses 10, 14, 15, 17, 18, 19, 86, and 87.
     * @param {string} params.filterSetName - (Required) Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
     * @param {integer} params.pageSize - Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
     * @param {string} params.pageToken - A token identifying a page of results the server should return. Typically, this is the value of ListCreativeStatusBreakdownByDetailResponse.nextPageToken returned from the previous call to the filteredBids.details.list method.
     * @return {object} The API response object.
     */
    this.buyers.filterSets.filteredBids.details.list = (params) => this._makeRequest('v2beta1/{+filterSetName}/filteredBids/{creativeStatusId}/details', 'GET', params);

    this.buyers.filterSets.filteredBids.creatives = {};

    /**
     * List all creatives associated with a specific reason for which bids were filtered, with the number of bids filtered for each creative.
     * @param {integer} params.creativeStatusId - (Required) The ID of the creative status for which to retrieve a breakdown by creative. See [creative-status-codes](https://developers.google.com/authorized-buyers/rtb/downloads/creative-status-codes).
     * @param {string} params.filterSetName - (Required) Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
     * @param {integer} params.pageSize - Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
     * @param {string} params.pageToken - A token identifying a page of results the server should return. Typically, this is the value of ListCreativeStatusBreakdownByCreativeResponse.nextPageToken returned from the previous call to the filteredBids.creatives.list method.
     * @return {object} The API response object.
     */
    this.buyers.filterSets.filteredBids.creatives.list = (params) => this._makeRequest('v2beta1/{+filterSetName}/filteredBids/{creativeStatusId}/creatives', 'GET', params);

    this.buyers.filterSets.losingBids = {};

    /**
     * List all reasons for which bids lost in the auction, with the number of bids that lost for each reason.
     * @param {string} params.filterSetName - (Required) Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
     * @param {integer} params.pageSize - Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
     * @param {string} params.pageToken - A token identifying a page of results the server should return. Typically, this is the value of ListLosingBidsResponse.nextPageToken returned from the previous call to the losingBids.list method.
     * @return {object} The API response object.
     */
    this.buyers.filterSets.losingBids.list = (params) => this._makeRequest('v2beta1/{+filterSetName}/losingBids', 'GET', params);

    this.buyers.filterSets.nonBillableWinningBids = {};

    /**
     * List all reasons for which winning bids were not billable, with the number of bids not billed for each reason.
     * @param {string} params.filterSetName - (Required) Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
     * @param {integer} params.pageSize - Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
     * @param {string} params.pageToken - A token identifying a page of results the server should return. Typically, this is the value of ListNonBillableWinningBidsResponse.nextPageToken returned from the previous call to the nonBillableWinningBids.list method.
     * @return {object} The API response object.
     */
    this.buyers.filterSets.nonBillableWinningBids.list = (params) => this._makeRequest('v2beta1/{+filterSetName}/nonBillableWinningBids', 'GET', params);
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
        url = url.replace(placeholder, remainingParams[paramName]);
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
