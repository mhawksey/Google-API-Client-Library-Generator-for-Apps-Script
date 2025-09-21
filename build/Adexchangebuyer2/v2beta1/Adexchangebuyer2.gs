
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
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://adexchangebuyer.googleapis.com/';
    this._servicePath = '';


    this.accounts = {};

    this.accounts.creatives = {};

    /**
     * Creates a creative.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) The account that this creative belongs to. Can be used to filter the response of the creatives.list method.
     * @param {string} apiParams.duplicateIdMode - Indicates if multiple creatives can share an ID or not. Default is NO_DUPLICATES (one ID per creative).
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.creatives.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/accounts/{accountId}/creatives', 'POST', apiParams, clientConfig);

    /**
     * Updates a creative.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) The account that this creative belongs to. Can be used to filter the response of the creatives.list method.
     * @param {string} apiParams.creativeId - (Required) The buyer-defined creative ID of this creative. Can be used to filter the response of the creatives.list method.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.creatives.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/accounts/{accountId}/creatives/{creativeId}', 'PUT', apiParams, clientConfig);

    /**
     * Gets a creative.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) The account the creative belongs to.
     * @param {string} apiParams.creativeId - (Required) The ID of the creative to retrieve.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.creatives.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/accounts/{accountId}/creatives/{creativeId}', 'GET', apiParams, clientConfig);

    /**
     * Lists creatives.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) The account to list the creatives from. Specify "-" to list all creatives the current user has access to.
     * @param {integer} apiParams.pageSize - Requested page size. The server may return fewer creatives than requested (due to timeout constraint) even if more are available through another call. If unspecified, server will pick an appropriate default. Acceptable values are 1 to 1000, inclusive.
     * @param {string} apiParams.pageToken - A token identifying a page of results the server should return. Typically, this is the value of ListCreativesResponse.next_page_token returned from the previous call to 'ListCreatives' method.
     * @param {string} apiParams.query - An optional query string to filter creatives. If no filter is specified, all active creatives will be returned. Supported queries are: - accountId=*account_id_string* - creativeId=*creative_id_string* - dealsStatus: {approved, conditionally_approved, disapproved, not_checked} - openAuctionStatus: {approved, conditionally_approved, disapproved, not_checked} - attribute: {a numeric attribute from the list of attributes} - disapprovalReason: {a reason from DisapprovalReason} Example: 'accountId=12345 AND (dealsStatus:disapproved AND disapprovalReason:unacceptable_content) OR attribute:47'
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.creatives.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/accounts/{accountId}/creatives', 'GET', apiParams, clientConfig);

    /**
     * Watches a creative. Will result in push notifications being sent to the topic when the creative changes status.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) The account of the creative to watch.
     * @param {string} apiParams.creativeId - (Required) The creative ID to watch for status changes. Specify "-" to watch all creatives under the above account. If both creative-level and account-level notifications are sent, only a single notification will be sent to the creative-level notification topic.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.creatives.watch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/accounts/{accountId}/creatives/{creativeId}:watch', 'POST', apiParams, clientConfig);

    /**
     * Stops watching a creative. Will stop push notifications being sent to the topics when the creative changes status.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) The account of the creative to stop notifications for.
     * @param {string} apiParams.creativeId - (Required) The creative ID of the creative to stop notifications for. Specify "-" to specify stopping account level notifications.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.creatives.stopWatching = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/accounts/{accountId}/creatives/{creativeId}:stopWatching', 'POST', apiParams, clientConfig);

    this.accounts.creatives.dealAssociations = {};

    /**
     * Associate an existing deal with a creative.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) The account the creative belongs to.
     * @param {string} apiParams.creativeId - (Required) The ID of the creative associated with the deal.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.creatives.dealAssociations.add = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/accounts/{accountId}/creatives/{creativeId}/dealAssociations:add', 'POST', apiParams, clientConfig);

    /**
     * Remove the association between a deal and a creative.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) The account the creative belongs to.
     * @param {string} apiParams.creativeId - (Required) The ID of the creative associated with the deal.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.creatives.dealAssociations.remove = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/accounts/{accountId}/creatives/{creativeId}/dealAssociations:remove', 'POST', apiParams, clientConfig);

    /**
     * List all creative-deal associations.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) The account to list the associations from. Specify "-" to list all creatives the current user has access to.
     * @param {string} apiParams.creativeId - (Required) The creative ID to list the associations from. Specify "-" to list all creatives under the above account.
     * @param {integer} apiParams.pageSize - Requested page size. Server may return fewer associations than requested. If unspecified, server will pick an appropriate default.
     * @param {string} apiParams.pageToken - A token identifying a page of results the server should return. Typically, this is the value of ListDealAssociationsResponse.next_page_token returned from the previous call to 'ListDealAssociations' method.
     * @param {string} apiParams.query - An optional query string to filter deal associations. If no filter is specified, all associations will be returned. Supported queries are: - accountId=*account_id_string* - creativeId=*creative_id_string* - dealsId=*deals_id_string* - dealsStatus:{approved, conditionally_approved, disapproved, not_checked} - openAuctionStatus:{approved, conditionally_approved, disapproved, not_checked} Example: 'dealsId=12345 AND dealsStatus:disapproved'
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.creatives.dealAssociations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/accounts/{accountId}/creatives/{creativeId}/dealAssociations', 'GET', apiParams, clientConfig);

    this.accounts.clients = {};

    /**
     * Gets a client buyer with a given client account ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) Numerical account ID of the client's sponsor buyer. (required)
     * @param {string} apiParams.clientAccountId - (Required) Numerical account ID of the client buyer to retrieve. (required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.clients.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/accounts/{accountId}/clients/{clientAccountId}', 'GET', apiParams, clientConfig);

    /**
     * Lists all the clients for the current sponsor buyer.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) Unique numerical account ID of the sponsor buyer to list the clients for.
     * @param {integer} apiParams.pageSize - Requested page size. The server may return fewer clients than requested. If unspecified, the server will pick an appropriate default.
     * @param {string} apiParams.pageToken - A token identifying a page of results the server should return. Typically, this is the value of ListClientsResponse.nextPageToken returned from the previous call to the accounts.clients.list method.
     * @param {string} apiParams.partnerClientId - Optional unique identifier (from the standpoint of an Ad Exchange sponsor buyer partner) of the client to return. If specified, at most one client will be returned in the response.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.clients.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/accounts/{accountId}/clients', 'GET', apiParams, clientConfig);

    /**
     * Creates a new client buyer.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) Unique numerical account ID for the buyer of which the client buyer is a customer; the sponsor buyer to create a client for. (required)
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.clients.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/accounts/{accountId}/clients', 'POST', apiParams, clientConfig);

    /**
     * Updates an existing client buyer.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) Unique numerical account ID for the buyer of which the client buyer is a customer; the sponsor buyer to update a client for. (required)
     * @param {string} apiParams.clientAccountId - (Required) Unique numerical account ID of the client to update. (required)
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.clients.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/accounts/{accountId}/clients/{clientAccountId}', 'PUT', apiParams, clientConfig);

    this.accounts.clients.users = {};

    /**
     * Lists all the known client users for a specified sponsor buyer account ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) Numerical account ID of the sponsor buyer of the client to list users for. (required)
     * @param {string} apiParams.clientAccountId - (Required) The account ID of the client buyer to list users for. (required) You must specify either a string representation of a numerical account identifier or the `-` character to list all the client users for all the clients of a given sponsor buyer.
     * @param {integer} apiParams.pageSize - Requested page size. The server may return fewer clients than requested. If unspecified, the server will pick an appropriate default.
     * @param {string} apiParams.pageToken - A token identifying a page of results the server should return. Typically, this is the value of ListClientUsersResponse.nextPageToken returned from the previous call to the accounts.clients.users.list method.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.clients.users.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/accounts/{accountId}/clients/{clientAccountId}/users', 'GET', apiParams, clientConfig);

    /**
     * Updates an existing client user. Only the user status can be changed on update.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) Numerical account ID of the client's sponsor buyer. (required)
     * @param {string} apiParams.clientAccountId - (Required) Numerical account ID of the client buyer that the user to be retrieved is associated with. (required)
     * @param {string} apiParams.userId - (Required) Numerical identifier of the user to retrieve. (required)
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.clients.users.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/accounts/{accountId}/clients/{clientAccountId}/users/{userId}', 'PUT', apiParams, clientConfig);

    /**
     * Retrieves an existing client user.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) Numerical account ID of the client's sponsor buyer. (required)
     * @param {string} apiParams.clientAccountId - (Required) Numerical account ID of the client buyer that the user to be retrieved is associated with. (required)
     * @param {string} apiParams.userId - (Required) Numerical identifier of the user to retrieve. (required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.clients.users.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/accounts/{accountId}/clients/{clientAccountId}/users/{userId}', 'GET', apiParams, clientConfig);

    this.accounts.clients.invitations = {};

    /**
     * Creates and sends out an email invitation to access an Ad Exchange client buyer account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) Numerical account ID of the client's sponsor buyer. (required)
     * @param {string} apiParams.clientAccountId - (Required) Numerical account ID of the client buyer that the user should be associated with. (required)
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.clients.invitations.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/accounts/{accountId}/clients/{clientAccountId}/invitations', 'POST', apiParams, clientConfig);

    /**
     * Retrieves an existing client user invitation.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) Numerical account ID of the client's sponsor buyer. (required)
     * @param {string} apiParams.clientAccountId - (Required) Numerical account ID of the client buyer that the user invitation to be retrieved is associated with. (required)
     * @param {string} apiParams.invitationId - (Required) Numerical identifier of the user invitation to retrieve. (required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.clients.invitations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/accounts/{accountId}/clients/{clientAccountId}/invitations/{invitationId}', 'GET', apiParams, clientConfig);

    /**
     * Lists all the client users invitations for a client with a given account ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) Numerical account ID of the client's sponsor buyer. (required)
     * @param {string} apiParams.clientAccountId - (Required) Numerical account ID of the client buyer to list invitations for. (required) You must either specify a string representation of a numerical account identifier or the `-` character to list all the invitations for all the clients of a given sponsor buyer.
     * @param {integer} apiParams.pageSize - Requested page size. Server may return fewer clients than requested. If unspecified, server will pick an appropriate default.
     * @param {string} apiParams.pageToken - A token identifying a page of results the server should return. Typically, this is the value of ListClientUserInvitationsResponse.nextPageToken returned from the previous call to the clients.invitations.list method.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.clients.invitations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/accounts/{accountId}/clients/{clientAccountId}/invitations', 'GET', apiParams, clientConfig);

    this.accounts.proposals = {};

    /**
     * Gets a proposal given its ID. The proposal is returned at its head revision.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) Account ID of the buyer.
     * @param {string} apiParams.proposalId - (Required) The unique ID of the proposal
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.proposals.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/accounts/{accountId}/proposals/{proposalId}', 'GET', apiParams, clientConfig);

    /**
     * Create the given proposal. Each created proposal and any deals it contains are assigned a unique ID by the server.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) Account ID of the buyer.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.proposals.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/accounts/{accountId}/proposals', 'POST', apiParams, clientConfig);

    /**
     * Update the given proposal at the client known revision number. If the server revision has advanced since the passed-in `proposal.proposal_revision`, an `ABORTED` error message will be returned. Only the buyer-modifiable fields of the proposal will be updated. Note that the deals in the proposal will be updated to match the passed-in copy. If a passed-in deal does not have a `deal_id`, the server will assign a new unique ID and create the deal. If passed-in deal has a `deal_id`, it will be updated to match the passed-in copy. Any existing deals not present in the passed-in proposal will be deleted. It is an error to pass in a deal with a `deal_id` not present at head.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) Account ID of the buyer.
     * @param {string} apiParams.proposalId - (Required) The unique ID of the proposal.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.proposals.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/accounts/{accountId}/proposals/{proposalId}', 'PUT', apiParams, clientConfig);

    /**
     * List proposals. A filter expression (PQL query) may be specified to filter the results. To retrieve all finalized proposals, regardless if a proposal is being renegotiated, see the FinalizedProposals resource. Note that Bidder/ChildSeat relationships differ from the usual behavior. A Bidder account can only see its child seats' proposals by specifying the ChildSeat's accountId in the request path.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) Account ID of the buyer.
     * @param {string} apiParams.filter - An optional PQL filter query used to query for proposals. Nested repeated fields, such as proposal.deals.targetingCriterion, cannot be filtered.
     * @param {string} apiParams.filterSyntax - Syntax the filter is written in. Current implementation defaults to PQL but in the future it will be LIST_FILTER.
     * @param {integer} apiParams.pageSize - Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
     * @param {string} apiParams.pageToken - The page token as returned from ListProposalsResponse.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.proposals.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/accounts/{accountId}/proposals', 'GET', apiParams, clientConfig);

    /**
     * Create a new note and attach it to the proposal. The note is assigned a unique ID by the server. The proposal revision number will not increase when associated with a new note.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) Account ID of the buyer.
     * @param {string} apiParams.proposalId - (Required) The ID of the proposal to attach the note to.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.proposals.addNote = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/accounts/{accountId}/proposals/{proposalId}:addNote', 'POST', apiParams, clientConfig);

    /**
     * Cancel an ongoing negotiation on a proposal. This does not cancel or end serving for the deals if the proposal has been finalized, but only cancels a negotiation unilaterally.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) Account ID of the buyer.
     * @param {string} apiParams.proposalId - (Required) The ID of the proposal to cancel negotiation for.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.proposals.cancelNegotiation = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/accounts/{accountId}/proposals/{proposalId}:cancelNegotiation', 'POST', apiParams, clientConfig);

    /**
     * Mark the proposal as accepted at the given revision number. If the number does not match the server's revision number an `ABORTED` error message will be returned. This call updates the proposal_state from `PROPOSED` to `BUYER_ACCEPTED`, or from `SELLER_ACCEPTED` to `FINALIZED`. Upon calling this endpoint, the buyer implicitly agrees to the terms and conditions optionally set within the proposal by the publisher.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) Account ID of the buyer.
     * @param {string} apiParams.proposalId - (Required) The ID of the proposal to accept.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.proposals.accept = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/accounts/{accountId}/proposals/{proposalId}:accept', 'POST', apiParams, clientConfig);

    /**
     * You can opt-in to manually update proposals to indicate that setup is complete. By default, proposal setup is automatically completed after their deals are finalized. Contact your Technical Account Manager to opt in. Buyers can call this method when the proposal has been finalized, and all the required creatives have been uploaded using the Creatives API. This call updates the `is_setup_completed` field on the deals in the proposal, and notifies the seller. The server then advances the revision number of the most recent proposal. To mark an individual deal as ready to serve, call `buyers.finalizedDeals.setReadyToServe` in the Marketplace API.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) Account ID of the buyer.
     * @param {string} apiParams.proposalId - (Required) The ID of the proposal to mark as setup completed.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.proposals.completeSetup = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/accounts/{accountId}/proposals/{proposalId}:completeSetup', 'POST', apiParams, clientConfig);

    /**
     * Update the given proposal to pause serving. This method will set the `DealServingMetadata.DealPauseStatus.has_buyer_paused` bit to true for all deals in the proposal. It is a no-op to pause an already-paused proposal. It is an error to call PauseProposal for a proposal that is not finalized or renegotiating.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) Account ID of the buyer.
     * @param {string} apiParams.proposalId - (Required) The ID of the proposal to pause.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.proposals.pause = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/accounts/{accountId}/proposals/{proposalId}:pause', 'POST', apiParams, clientConfig);

    /**
     * Update the given proposal to resume serving. This method will set the `DealServingMetadata.DealPauseStatus.has_buyer_paused` bit to false for all deals in the proposal. Note that if the `has_seller_paused` bit is also set, serving will not resume until the seller also resumes. It is a no-op to resume an already-running proposal. It is an error to call ResumeProposal for a proposal that is not finalized or renegotiating.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) Account ID of the buyer.
     * @param {string} apiParams.proposalId - (Required) The ID of the proposal to resume.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.proposals.resume = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/accounts/{accountId}/proposals/{proposalId}:resume', 'POST', apiParams, clientConfig);

    this.accounts.finalizedProposals = {};

    /**
     * List finalized proposals, regardless if a proposal is being renegotiated. A filter expression (PQL query) may be specified to filter the results. The notes will not be returned.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) Account ID of the buyer.
     * @param {string} apiParams.filter - An optional PQL filter query used to query for proposals. Nested repeated fields, such as proposal.deals.targetingCriterion, cannot be filtered.
     * @param {string} apiParams.filterSyntax - Syntax the filter is written in. Current implementation defaults to PQL but in the future it will be LIST_FILTER.
     * @param {integer} apiParams.pageSize - Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
     * @param {string} apiParams.pageToken - The page token as returned from ListProposalsResponse.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.finalizedProposals.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/accounts/{accountId}/finalizedProposals', 'GET', apiParams, clientConfig);

    /**
     * Update given deals to pause serving. This method will set the `DealServingMetadata.DealPauseStatus.has_buyer_paused` bit to true for all listed deals in the request. Currently, this method only applies to PG and PD deals. For PA deals, call accounts.proposals.pause endpoint. It is a no-op to pause already-paused deals. It is an error to call PauseProposalDeals for deals which are not part of the proposal of proposal_id or which are not finalized or renegotiating.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) Account ID of the buyer.
     * @param {string} apiParams.proposalId - (Required) The proposal_id of the proposal containing the deals.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.finalizedProposals.pause = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/accounts/{accountId}/finalizedProposals/{proposalId}:pause', 'POST', apiParams, clientConfig);

    /**
     * Update given deals to resume serving. This method will set the `DealServingMetadata.DealPauseStatus.has_buyer_paused` bit to false for all listed deals in the request. Currently, this method only applies to PG and PD deals. For PA deals, call accounts.proposals.resume endpoint. It is a no-op to resume running deals or deals paused by the other party. It is an error to call ResumeProposalDeals for deals which are not part of the proposal of proposal_id or which are not finalized or renegotiating.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) Account ID of the buyer.
     * @param {string} apiParams.proposalId - (Required) The proposal_id of the proposal containing the deals.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.finalizedProposals.resume = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/accounts/{accountId}/finalizedProposals/{proposalId}:resume', 'POST', apiParams, clientConfig);

    this.accounts.products = {};

    /**
     * Gets the requested product by ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) Account ID of the buyer.
     * @param {string} apiParams.productId - (Required) The ID for the product to get the head revision for.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.products.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/accounts/{accountId}/products/{productId}', 'GET', apiParams, clientConfig);

    /**
     * List all products visible to the buyer (optionally filtered by the specified PQL query).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) Account ID of the buyer.
     * @param {string} apiParams.filter - An optional PQL query used to query for products. See https://developers.google.com/ad-manager/docs/pqlreference for documentation about PQL and examples. Nested repeated fields, such as product.targetingCriterion.inclusions, cannot be filtered.
     * @param {integer} apiParams.pageSize - Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
     * @param {string} apiParams.pageToken - The page token as returned from ListProductsResponse.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.products.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/accounts/{accountId}/products', 'GET', apiParams, clientConfig);

    this.accounts.publisherProfiles = {};

    /**
     * Gets the requested publisher profile by id.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) Account ID of the buyer.
     * @param {string} apiParams.publisherProfileId - (Required) The id for the publisher profile to get.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.publisherProfiles.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/accounts/{accountId}/publisherProfiles/{publisherProfileId}', 'GET', apiParams, clientConfig);

    /**
     * List all publisher profiles visible to the buyer
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.accountId - (Required) Account ID of the buyer.
     * @param {integer} apiParams.pageSize - Specify the number of results to include per page.
     * @param {string} apiParams.pageToken - The page token as return from ListPublisherProfilesResponse.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.publisherProfiles.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/accounts/{accountId}/publisherProfiles', 'GET', apiParams, clientConfig);

    this.bidders = {};

    this.bidders.accounts = {};

    this.bidders.accounts.filterSets = {};

    /**
     * Creates the specified filter set for the account with the given account ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.isTransient - Whether the filter set is transient, or should be persisted indefinitely. By default, filter sets are not transient. If transient, it will be available for at least 1 hour after creation.
     * @param {string} apiParams.ownerName - (Required) Name of the owner (bidder or account) of the filter set to be created. For example: - For a bidder-level filter set for bidder 123: `bidders/123` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.bidders.accounts.filterSets.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+ownerName}/filterSets', 'POST', apiParams, clientConfig);

    /**
     * Retrieves the requested filter set for the account with the given account ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Full name of the resource being requested. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.bidders.accounts.filterSets.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists all filter sets for the account with the given account ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.ownerName - (Required) Name of the owner (bidder or account) of the filter sets to be listed. For example: - For a bidder-level filter set for bidder 123: `bidders/123` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456`
     * @param {integer} apiParams.pageSize - Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
     * @param {string} apiParams.pageToken - A token identifying a page of results the server should return. Typically, this is the value of ListFilterSetsResponse.nextPageToken returned from the previous call to the accounts.filterSets.list method.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.bidders.accounts.filterSets.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+ownerName}/filterSets', 'GET', apiParams, clientConfig);

    /**
     * Deletes the requested filter set from the account with the given account ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Full name of the resource to delete. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.bidders.accounts.filterSets.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'DELETE', apiParams, clientConfig);

    this.bidders.accounts.filterSets.impressionMetrics = {};

    /**
     * Lists all metrics that are measured in terms of number of impressions.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filterSetName - (Required) Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
     * @param {integer} apiParams.pageSize - Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
     * @param {string} apiParams.pageToken - A token identifying a page of results the server should return. Typically, this is the value of ListImpressionMetricsResponse.nextPageToken returned from the previous call to the impressionMetrics.list method.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.bidders.accounts.filterSets.impressionMetrics.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+filterSetName}/impressionMetrics', 'GET', apiParams, clientConfig);

    this.bidders.accounts.filterSets.bidMetrics = {};

    /**
     * Lists all metrics that are measured in terms of number of bids.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filterSetName - (Required) Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
     * @param {integer} apiParams.pageSize - Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
     * @param {string} apiParams.pageToken - A token identifying a page of results the server should return. Typically, this is the value of ListBidMetricsResponse.nextPageToken returned from the previous call to the bidMetrics.list method.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.bidders.accounts.filterSets.bidMetrics.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+filterSetName}/bidMetrics', 'GET', apiParams, clientConfig);

    this.bidders.accounts.filterSets.filteredBidRequests = {};

    /**
     * List all reasons that caused a bid request not to be sent for an impression, with the number of bid requests not sent for each reason.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filterSetName - (Required) Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
     * @param {integer} apiParams.pageSize - Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
     * @param {string} apiParams.pageToken - A token identifying a page of results the server should return. Typically, this is the value of ListFilteredBidRequestsResponse.nextPageToken returned from the previous call to the filteredBidRequests.list method.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.bidders.accounts.filterSets.filteredBidRequests.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+filterSetName}/filteredBidRequests', 'GET', apiParams, clientConfig);

    this.bidders.accounts.filterSets.bidResponseErrors = {};

    /**
     * List all errors that occurred in bid responses, with the number of bid responses affected for each reason.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filterSetName - (Required) Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
     * @param {integer} apiParams.pageSize - Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
     * @param {string} apiParams.pageToken - A token identifying a page of results the server should return. Typically, this is the value of ListBidResponseErrorsResponse.nextPageToken returned from the previous call to the bidResponseErrors.list method.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.bidders.accounts.filterSets.bidResponseErrors.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+filterSetName}/bidResponseErrors', 'GET', apiParams, clientConfig);

    this.bidders.accounts.filterSets.bidResponsesWithoutBids = {};

    /**
     * List all reasons for which bid responses were considered to have no applicable bids, with the number of bid responses affected for each reason.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filterSetName - (Required) Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
     * @param {integer} apiParams.pageSize - Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
     * @param {string} apiParams.pageToken - A token identifying a page of results the server should return. Typically, this is the value of ListBidResponsesWithoutBidsResponse.nextPageToken returned from the previous call to the bidResponsesWithoutBids.list method.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.bidders.accounts.filterSets.bidResponsesWithoutBids.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+filterSetName}/bidResponsesWithoutBids', 'GET', apiParams, clientConfig);

    this.bidders.accounts.filterSets.filteredBids = {};

    /**
     * List all reasons for which bids were filtered, with the number of bids filtered for each reason.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filterSetName - (Required) Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
     * @param {integer} apiParams.pageSize - Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
     * @param {string} apiParams.pageToken - A token identifying a page of results the server should return. Typically, this is the value of ListFilteredBidsResponse.nextPageToken returned from the previous call to the filteredBids.list method.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.bidders.accounts.filterSets.filteredBids.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+filterSetName}/filteredBids', 'GET', apiParams, clientConfig);

    this.bidders.accounts.filterSets.filteredBids.details = {};

    /**
     * List all details associated with a specific reason for which bids were filtered, with the number of bids filtered for each detail.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.creativeStatusId - (Required) The ID of the creative status for which to retrieve a breakdown by detail. See [creative-status-codes](https://developers.google.com/authorized-buyers/rtb/downloads/creative-status-codes). Details are only available for statuses 10, 14, 15, 17, 18, 19, 86, and 87.
     * @param {string} apiParams.filterSetName - (Required) Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
     * @param {integer} apiParams.pageSize - Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
     * @param {string} apiParams.pageToken - A token identifying a page of results the server should return. Typically, this is the value of ListCreativeStatusBreakdownByDetailResponse.nextPageToken returned from the previous call to the filteredBids.details.list method.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.bidders.accounts.filterSets.filteredBids.details.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+filterSetName}/filteredBids/{creativeStatusId}/details', 'GET', apiParams, clientConfig);

    this.bidders.accounts.filterSets.filteredBids.creatives = {};

    /**
     * List all creatives associated with a specific reason for which bids were filtered, with the number of bids filtered for each creative.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.creativeStatusId - (Required) The ID of the creative status for which to retrieve a breakdown by creative. See [creative-status-codes](https://developers.google.com/authorized-buyers/rtb/downloads/creative-status-codes).
     * @param {string} apiParams.filterSetName - (Required) Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
     * @param {integer} apiParams.pageSize - Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
     * @param {string} apiParams.pageToken - A token identifying a page of results the server should return. Typically, this is the value of ListCreativeStatusBreakdownByCreativeResponse.nextPageToken returned from the previous call to the filteredBids.creatives.list method.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.bidders.accounts.filterSets.filteredBids.creatives.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+filterSetName}/filteredBids/{creativeStatusId}/creatives', 'GET', apiParams, clientConfig);

    this.bidders.accounts.filterSets.losingBids = {};

    /**
     * List all reasons for which bids lost in the auction, with the number of bids that lost for each reason.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filterSetName - (Required) Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
     * @param {integer} apiParams.pageSize - Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
     * @param {string} apiParams.pageToken - A token identifying a page of results the server should return. Typically, this is the value of ListLosingBidsResponse.nextPageToken returned from the previous call to the losingBids.list method.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.bidders.accounts.filterSets.losingBids.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+filterSetName}/losingBids', 'GET', apiParams, clientConfig);

    this.bidders.accounts.filterSets.nonBillableWinningBids = {};

    /**
     * List all reasons for which winning bids were not billable, with the number of bids not billed for each reason.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filterSetName - (Required) Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
     * @param {integer} apiParams.pageSize - Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
     * @param {string} apiParams.pageToken - A token identifying a page of results the server should return. Typically, this is the value of ListNonBillableWinningBidsResponse.nextPageToken returned from the previous call to the nonBillableWinningBids.list method.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.bidders.accounts.filterSets.nonBillableWinningBids.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+filterSetName}/nonBillableWinningBids', 'GET', apiParams, clientConfig);

    this.bidders.filterSets = {};

    /**
     * Creates the specified filter set for the account with the given account ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.isTransient - Whether the filter set is transient, or should be persisted indefinitely. By default, filter sets are not transient. If transient, it will be available for at least 1 hour after creation.
     * @param {string} apiParams.ownerName - (Required) Name of the owner (bidder or account) of the filter set to be created. For example: - For a bidder-level filter set for bidder 123: `bidders/123` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.bidders.filterSets.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+ownerName}/filterSets', 'POST', apiParams, clientConfig);

    /**
     * Retrieves the requested filter set for the account with the given account ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Full name of the resource being requested. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.bidders.filterSets.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists all filter sets for the account with the given account ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.ownerName - (Required) Name of the owner (bidder or account) of the filter sets to be listed. For example: - For a bidder-level filter set for bidder 123: `bidders/123` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456`
     * @param {integer} apiParams.pageSize - Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
     * @param {string} apiParams.pageToken - A token identifying a page of results the server should return. Typically, this is the value of ListFilterSetsResponse.nextPageToken returned from the previous call to the accounts.filterSets.list method.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.bidders.filterSets.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+ownerName}/filterSets', 'GET', apiParams, clientConfig);

    /**
     * Deletes the requested filter set from the account with the given account ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Full name of the resource to delete. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.bidders.filterSets.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'DELETE', apiParams, clientConfig);

    this.bidders.filterSets.impressionMetrics = {};

    /**
     * Lists all metrics that are measured in terms of number of impressions.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filterSetName - (Required) Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
     * @param {integer} apiParams.pageSize - Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
     * @param {string} apiParams.pageToken - A token identifying a page of results the server should return. Typically, this is the value of ListImpressionMetricsResponse.nextPageToken returned from the previous call to the impressionMetrics.list method.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.bidders.filterSets.impressionMetrics.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+filterSetName}/impressionMetrics', 'GET', apiParams, clientConfig);

    this.bidders.filterSets.bidMetrics = {};

    /**
     * Lists all metrics that are measured in terms of number of bids.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filterSetName - (Required) Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
     * @param {integer} apiParams.pageSize - Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
     * @param {string} apiParams.pageToken - A token identifying a page of results the server should return. Typically, this is the value of ListBidMetricsResponse.nextPageToken returned from the previous call to the bidMetrics.list method.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.bidders.filterSets.bidMetrics.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+filterSetName}/bidMetrics', 'GET', apiParams, clientConfig);

    this.bidders.filterSets.filteredBidRequests = {};

    /**
     * List all reasons that caused a bid request not to be sent for an impression, with the number of bid requests not sent for each reason.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filterSetName - (Required) Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
     * @param {integer} apiParams.pageSize - Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
     * @param {string} apiParams.pageToken - A token identifying a page of results the server should return. Typically, this is the value of ListFilteredBidRequestsResponse.nextPageToken returned from the previous call to the filteredBidRequests.list method.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.bidders.filterSets.filteredBidRequests.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+filterSetName}/filteredBidRequests', 'GET', apiParams, clientConfig);

    this.bidders.filterSets.bidResponseErrors = {};

    /**
     * List all errors that occurred in bid responses, with the number of bid responses affected for each reason.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filterSetName - (Required) Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
     * @param {integer} apiParams.pageSize - Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
     * @param {string} apiParams.pageToken - A token identifying a page of results the server should return. Typically, this is the value of ListBidResponseErrorsResponse.nextPageToken returned from the previous call to the bidResponseErrors.list method.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.bidders.filterSets.bidResponseErrors.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+filterSetName}/bidResponseErrors', 'GET', apiParams, clientConfig);

    this.bidders.filterSets.bidResponsesWithoutBids = {};

    /**
     * List all reasons for which bid responses were considered to have no applicable bids, with the number of bid responses affected for each reason.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filterSetName - (Required) Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
     * @param {integer} apiParams.pageSize - Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
     * @param {string} apiParams.pageToken - A token identifying a page of results the server should return. Typically, this is the value of ListBidResponsesWithoutBidsResponse.nextPageToken returned from the previous call to the bidResponsesWithoutBids.list method.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.bidders.filterSets.bidResponsesWithoutBids.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+filterSetName}/bidResponsesWithoutBids', 'GET', apiParams, clientConfig);

    this.bidders.filterSets.filteredBids = {};

    /**
     * List all reasons for which bids were filtered, with the number of bids filtered for each reason.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filterSetName - (Required) Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
     * @param {integer} apiParams.pageSize - Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
     * @param {string} apiParams.pageToken - A token identifying a page of results the server should return. Typically, this is the value of ListFilteredBidsResponse.nextPageToken returned from the previous call to the filteredBids.list method.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.bidders.filterSets.filteredBids.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+filterSetName}/filteredBids', 'GET', apiParams, clientConfig);

    this.bidders.filterSets.filteredBids.details = {};

    /**
     * List all details associated with a specific reason for which bids were filtered, with the number of bids filtered for each detail.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.creativeStatusId - (Required) The ID of the creative status for which to retrieve a breakdown by detail. See [creative-status-codes](https://developers.google.com/authorized-buyers/rtb/downloads/creative-status-codes). Details are only available for statuses 10, 14, 15, 17, 18, 19, 86, and 87.
     * @param {string} apiParams.filterSetName - (Required) Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
     * @param {integer} apiParams.pageSize - Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
     * @param {string} apiParams.pageToken - A token identifying a page of results the server should return. Typically, this is the value of ListCreativeStatusBreakdownByDetailResponse.nextPageToken returned from the previous call to the filteredBids.details.list method.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.bidders.filterSets.filteredBids.details.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+filterSetName}/filteredBids/{creativeStatusId}/details', 'GET', apiParams, clientConfig);

    this.bidders.filterSets.filteredBids.creatives = {};

    /**
     * List all creatives associated with a specific reason for which bids were filtered, with the number of bids filtered for each creative.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.creativeStatusId - (Required) The ID of the creative status for which to retrieve a breakdown by creative. See [creative-status-codes](https://developers.google.com/authorized-buyers/rtb/downloads/creative-status-codes).
     * @param {string} apiParams.filterSetName - (Required) Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
     * @param {integer} apiParams.pageSize - Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
     * @param {string} apiParams.pageToken - A token identifying a page of results the server should return. Typically, this is the value of ListCreativeStatusBreakdownByCreativeResponse.nextPageToken returned from the previous call to the filteredBids.creatives.list method.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.bidders.filterSets.filteredBids.creatives.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+filterSetName}/filteredBids/{creativeStatusId}/creatives', 'GET', apiParams, clientConfig);

    this.bidders.filterSets.losingBids = {};

    /**
     * List all reasons for which bids lost in the auction, with the number of bids that lost for each reason.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filterSetName - (Required) Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
     * @param {integer} apiParams.pageSize - Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
     * @param {string} apiParams.pageToken - A token identifying a page of results the server should return. Typically, this is the value of ListLosingBidsResponse.nextPageToken returned from the previous call to the losingBids.list method.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.bidders.filterSets.losingBids.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+filterSetName}/losingBids', 'GET', apiParams, clientConfig);

    this.bidders.filterSets.nonBillableWinningBids = {};

    /**
     * List all reasons for which winning bids were not billable, with the number of bids not billed for each reason.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filterSetName - (Required) Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
     * @param {integer} apiParams.pageSize - Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
     * @param {string} apiParams.pageToken - A token identifying a page of results the server should return. Typically, this is the value of ListNonBillableWinningBidsResponse.nextPageToken returned from the previous call to the nonBillableWinningBids.list method.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.bidders.filterSets.nonBillableWinningBids.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+filterSetName}/nonBillableWinningBids', 'GET', apiParams, clientConfig);

    this.buyers = {};

    this.buyers.filterSets = {};

    /**
     * Creates the specified filter set for the account with the given account ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.isTransient - Whether the filter set is transient, or should be persisted indefinitely. By default, filter sets are not transient. If transient, it will be available for at least 1 hour after creation.
     * @param {string} apiParams.ownerName - (Required) Name of the owner (bidder or account) of the filter set to be created. For example: - For a bidder-level filter set for bidder 123: `bidders/123` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.buyers.filterSets.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+ownerName}/filterSets', 'POST', apiParams, clientConfig);

    /**
     * Retrieves the requested filter set for the account with the given account ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Full name of the resource being requested. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.buyers.filterSets.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists all filter sets for the account with the given account ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.ownerName - (Required) Name of the owner (bidder or account) of the filter sets to be listed. For example: - For a bidder-level filter set for bidder 123: `bidders/123` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456`
     * @param {integer} apiParams.pageSize - Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
     * @param {string} apiParams.pageToken - A token identifying a page of results the server should return. Typically, this is the value of ListFilterSetsResponse.nextPageToken returned from the previous call to the accounts.filterSets.list method.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.buyers.filterSets.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+ownerName}/filterSets', 'GET', apiParams, clientConfig);

    /**
     * Deletes the requested filter set from the account with the given account ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Full name of the resource to delete. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.buyers.filterSets.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'DELETE', apiParams, clientConfig);

    this.buyers.filterSets.impressionMetrics = {};

    /**
     * Lists all metrics that are measured in terms of number of impressions.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filterSetName - (Required) Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
     * @param {integer} apiParams.pageSize - Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
     * @param {string} apiParams.pageToken - A token identifying a page of results the server should return. Typically, this is the value of ListImpressionMetricsResponse.nextPageToken returned from the previous call to the impressionMetrics.list method.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.buyers.filterSets.impressionMetrics.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+filterSetName}/impressionMetrics', 'GET', apiParams, clientConfig);

    this.buyers.filterSets.bidMetrics = {};

    /**
     * Lists all metrics that are measured in terms of number of bids.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filterSetName - (Required) Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
     * @param {integer} apiParams.pageSize - Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
     * @param {string} apiParams.pageToken - A token identifying a page of results the server should return. Typically, this is the value of ListBidMetricsResponse.nextPageToken returned from the previous call to the bidMetrics.list method.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.buyers.filterSets.bidMetrics.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+filterSetName}/bidMetrics', 'GET', apiParams, clientConfig);

    this.buyers.filterSets.filteredBidRequests = {};

    /**
     * List all reasons that caused a bid request not to be sent for an impression, with the number of bid requests not sent for each reason.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filterSetName - (Required) Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
     * @param {integer} apiParams.pageSize - Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
     * @param {string} apiParams.pageToken - A token identifying a page of results the server should return. Typically, this is the value of ListFilteredBidRequestsResponse.nextPageToken returned from the previous call to the filteredBidRequests.list method.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.buyers.filterSets.filteredBidRequests.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+filterSetName}/filteredBidRequests', 'GET', apiParams, clientConfig);

    this.buyers.filterSets.bidResponseErrors = {};

    /**
     * List all errors that occurred in bid responses, with the number of bid responses affected for each reason.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filterSetName - (Required) Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
     * @param {integer} apiParams.pageSize - Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
     * @param {string} apiParams.pageToken - A token identifying a page of results the server should return. Typically, this is the value of ListBidResponseErrorsResponse.nextPageToken returned from the previous call to the bidResponseErrors.list method.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.buyers.filterSets.bidResponseErrors.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+filterSetName}/bidResponseErrors', 'GET', apiParams, clientConfig);

    this.buyers.filterSets.bidResponsesWithoutBids = {};

    /**
     * List all reasons for which bid responses were considered to have no applicable bids, with the number of bid responses affected for each reason.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filterSetName - (Required) Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
     * @param {integer} apiParams.pageSize - Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
     * @param {string} apiParams.pageToken - A token identifying a page of results the server should return. Typically, this is the value of ListBidResponsesWithoutBidsResponse.nextPageToken returned from the previous call to the bidResponsesWithoutBids.list method.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.buyers.filterSets.bidResponsesWithoutBids.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+filterSetName}/bidResponsesWithoutBids', 'GET', apiParams, clientConfig);

    this.buyers.filterSets.filteredBids = {};

    /**
     * List all reasons for which bids were filtered, with the number of bids filtered for each reason.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filterSetName - (Required) Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
     * @param {integer} apiParams.pageSize - Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
     * @param {string} apiParams.pageToken - A token identifying a page of results the server should return. Typically, this is the value of ListFilteredBidsResponse.nextPageToken returned from the previous call to the filteredBids.list method.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.buyers.filterSets.filteredBids.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+filterSetName}/filteredBids', 'GET', apiParams, clientConfig);

    this.buyers.filterSets.filteredBids.details = {};

    /**
     * List all details associated with a specific reason for which bids were filtered, with the number of bids filtered for each detail.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.creativeStatusId - (Required) The ID of the creative status for which to retrieve a breakdown by detail. See [creative-status-codes](https://developers.google.com/authorized-buyers/rtb/downloads/creative-status-codes). Details are only available for statuses 10, 14, 15, 17, 18, 19, 86, and 87.
     * @param {string} apiParams.filterSetName - (Required) Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
     * @param {integer} apiParams.pageSize - Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
     * @param {string} apiParams.pageToken - A token identifying a page of results the server should return. Typically, this is the value of ListCreativeStatusBreakdownByDetailResponse.nextPageToken returned from the previous call to the filteredBids.details.list method.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.buyers.filterSets.filteredBids.details.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+filterSetName}/filteredBids/{creativeStatusId}/details', 'GET', apiParams, clientConfig);

    this.buyers.filterSets.filteredBids.creatives = {};

    /**
     * List all creatives associated with a specific reason for which bids were filtered, with the number of bids filtered for each creative.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.creativeStatusId - (Required) The ID of the creative status for which to retrieve a breakdown by creative. See [creative-status-codes](https://developers.google.com/authorized-buyers/rtb/downloads/creative-status-codes).
     * @param {string} apiParams.filterSetName - (Required) Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
     * @param {integer} apiParams.pageSize - Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
     * @param {string} apiParams.pageToken - A token identifying a page of results the server should return. Typically, this is the value of ListCreativeStatusBreakdownByCreativeResponse.nextPageToken returned from the previous call to the filteredBids.creatives.list method.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.buyers.filterSets.filteredBids.creatives.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+filterSetName}/filteredBids/{creativeStatusId}/creatives', 'GET', apiParams, clientConfig);

    this.buyers.filterSets.losingBids = {};

    /**
     * List all reasons for which bids lost in the auction, with the number of bids that lost for each reason.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filterSetName - (Required) Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
     * @param {integer} apiParams.pageSize - Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
     * @param {string} apiParams.pageToken - A token identifying a page of results the server should return. Typically, this is the value of ListLosingBidsResponse.nextPageToken returned from the previous call to the losingBids.list method.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.buyers.filterSets.losingBids.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+filterSetName}/losingBids', 'GET', apiParams, clientConfig);

    this.buyers.filterSets.nonBillableWinningBids = {};

    /**
     * List all reasons for which winning bids were not billable, with the number of bids not billed for each reason.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filterSetName - (Required) Name of the filter set that should be applied to the requested metrics. For example: - For a bidder-level filter set for bidder 123: `bidders/123/filterSets/abc` - For an account-level filter set for the buyer account representing bidder 123: `bidders/123/accounts/123/filterSets/abc` - For an account-level filter set for the child seat buyer account 456 whose bidder is 123: `bidders/123/accounts/456/filterSets/abc`
     * @param {integer} apiParams.pageSize - Requested page size. The server may return fewer results than requested. If unspecified, the server will pick an appropriate default.
     * @param {string} apiParams.pageToken - A token identifying a page of results the server should return. Typically, this is the value of ListNonBillableWinningBidsResponse.nextPageToken returned from the previous call to the nonBillableWinningBids.list method.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.buyers.filterSets.nonBillableWinningBids.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+filterSetName}/nonBillableWinningBids', 'GET', apiParams, clientConfig);
  }

/**
 * @private Builds the full request URL and options object for a request.
 */
_buildRequestDetails(path, httpMethod, apiParams, clientConfig = {}) {
    let url;
    if (path.startsWith('/upload/')) {
        url = 'https://www.googleapis.com' + path;
    } else {
        url = this._rootUrl + this._servicePath + path;
    }

    const remainingParams = { ...apiParams };
    const pathParams = url.match(/{[^{}]+}/g) || [];

    pathParams.forEach(placeholder => {
        const isPlus = placeholder.startsWith('{+');
        const paramName = placeholder.slice(isPlus ? 2 : 1, -1);
        if (Object.prototype.hasOwnProperty.call(remainingParams, paramName)) {
            url = url.replace(placeholder, remainingParams[paramName]);
            delete remainingParams[paramName];
        }
    });

    const options = {
        method: httpMethod,
        headers: {
            'Authorization': 'Bearer ' + this._token,
            ...(clientConfig.headers || {}),
        },
        muteHttpExceptions: true,
    };

    if (apiParams && apiParams.media && apiParams.media.body) {
        let mediaBlob;
        // Check if the body is already a blob by "duck typing" for the getBytes method.
        if (apiParams.media.body.getBytes && typeof apiParams.media.body.getBytes === 'function') {
            mediaBlob = apiParams.media.body;
        } else {
            // If it's not a blob (e.g., a string or byte array), create one.
            mediaBlob = Utilities.newBlob(apiParams.media.body);
        }

        const hasMetadata = apiParams.requestBody && Object.keys(apiParams.requestBody).length > 0;

        if (hasMetadata) {
            // ** Multipart Upload (Media + Metadata) **
            remainingParams.uploadType = 'multipart';
            
            const boundary = '----' + Utilities.getUuid();
            const metadata = apiParams.requestBody;

            let requestData = '--' + boundary + '\r\n';
            requestData += 'Content-Type: application/json; charset=UTF-8\r\n\r\n';
            requestData += JSON.stringify(metadata) + '\r\n';
            requestData += '--' + boundary + '\r\n';
            requestData += 'Content-Type: ' + apiParams.media.mimeType + '\r\n\r\n';
            
            const payloadBytes = Utilities.newBlob(requestData).getBytes()
                .concat(mediaBlob.getBytes())
                .concat(Utilities.newBlob('\r\n--' + boundary + '--').getBytes());

            options.contentType = 'multipart/related; boundary=' + boundary;
            options.payload = payloadBytes;

        } else {
            // ** Simple Media Upload (Media only) **
            remainingParams.uploadType = 'media';

            options.contentType = mediaBlob.getContentType();
            options.payload = mediaBlob.getBytes();
        }

    } else if (apiParams && apiParams.requestBody) {
        options.contentType = 'application/json';
        options.payload = JSON.stringify(apiParams.requestBody);
    }
    const queryParts = [];
    for (const key in remainingParams) {
        if (key !== 'requestBody' && key !== 'media') {
            queryParts.push(`${encodeURIComponent(key)}=${encodeURIComponent(remainingParams[key])}`);
        }
    }
    if (queryParts.length > 0) {
        url += '?' + queryParts.join('&');
    }

    return { url, options };
}

  /**
   * @private Makes the HTTP request with exponential backoff for retries.
   * @return {Promise<object>} A promise that resolves with the response object.
   */
  async _makeRequest(path, httpMethod, apiParams, clientConfig = {}) {
    const isMediaDownload = apiParams.alt === 'media';

    const { url, options } = this._buildRequestDetails(path, httpMethod, apiParams, clientConfig);

    for (let i = 0; i <= this._backoffConfig.retries; i++) {
      const response = UrlFetchApp.fetch(url, options);
      const responseCode = response.getResponseCode();
      const responseHeaders = response.getAllHeaders();

      if (responseCode >= 200 && responseCode < 300) {
        // Prioritize responseType:'blob' and media downloads to return raw data.
        if ((clientConfig && (clientConfig.responseType === 'blob' || clientConfig.responseType === 'stream')) || isMediaDownload) {
          return {
            data: response.getBlob(),
            status: responseCode,
            headers: responseHeaders,
          };
        }

        const responseText = response.getContentText();
        // Handle empty responses, which are valid (e.g., a 204 No Content).
        const responseBody = responseText ? JSON.parse(responseText) : {};
        return {
          data: responseBody,
          status: responseCode,
          headers: responseHeaders,
        };
      }

      const retryableErrors = [429, 500, 503];
      if (retryableErrors.includes(responseCode) && i < this._backoffConfig.retries) {
        const delay = this._backoffConfig.baseDelay * Math.pow(2, i) + Math.random() * 1000;
        Utilities.sleep(delay);
        continue;
      }

      const responseText = response.getContentText(); // Get response text for error
      let errorMessage = `Request failed with status ${responseCode}`;
      try {
        const errorObj = JSON.parse(responseText);
        if (errorObj.error && errorObj.error.message) {
          errorMessage += `: ${errorObj.error.message}`;
        }
      } catch (e) {
        // If the error response isn't JSON, include the raw text.
        if (responseText) {
          errorMessage += `. Response: ${responseText}`;
        }
      }
      throw new Error(errorMessage);
    }

    throw new Error('Request failed after multiple retries.');
  }
}
