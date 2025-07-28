
/**
 * Google Apps Script client library for the YouTube Data API v3
 * Documentation URL: https://developers.google.com/youtube/
 * @class
 */
class Youtube {
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
    this._rootUrl = 'https://youtube.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.abuseReports = {};

    /**
     * Inserts a new resource into this collection.
     * @param {string} params.part - (Required) The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.abuseReports.insert = (params) => this._makeRequest('youtube/v3/abuseReports', 'POST', params);

    this.activities = {};

    /**
     * Retrieves a list of resources, possibly filtered.
     * @param {string} params.channelId - 
     * @param {boolean} params.home - 
     * @param {integer} params.maxResults - The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.
     * @param {boolean} params.mine - 
     * @param {string} params.pageToken - The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
     * @param {string} params.part - (Required) The *part* parameter specifies a comma-separated list of one or more activity resource properties that the API response will include. If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in an activity resource, the snippet property contains other properties that identify the type of activity, a display title for the activity, and so forth. If you set *part=snippet*, the API response will also contain all of those nested properties.
     * @param {string} params.publishedAfter - 
     * @param {string} params.publishedBefore - 
     * @param {string} params.regionCode - 
     * @return {object} The API response object.
     */
    this.activities.list = (params) => this._makeRequest('youtube/v3/activities', 'GET', params);

    this.captions = {};

    /**
     * Retrieves a list of resources, possibly filtered.
     * @param {string} params.id - Returns the captions with the given IDs for Stubby or Apiary.
     * @param {string} params.onBehalfOf - ID of the Google+ Page for the channel that the request is on behalf of.
     * @param {string} params.onBehalfOfContentOwner - *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string} params.part - (Required) The *part* parameter specifies a comma-separated list of one or more caption resource parts that the API response will include. The part names that you can include in the parameter value are id and snippet.
     * @param {string} params.videoId - (Required) Returns the captions for the specified video.
     * @return {object} The API response object.
     */
    this.captions.list = (params) => this._makeRequest('youtube/v3/captions', 'GET', params);

    /**
     * Inserts a new resource into this collection.
     * @param {string} params.onBehalfOf - ID of the Google+ Page for the channel that the request is be on behalf of
     * @param {string} params.onBehalfOfContentOwner - *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string} params.part - (Required) The *part* parameter specifies the caption resource parts that the API response will include. Set the parameter value to snippet.
     * @param {boolean} params.sync - Extra parameter to allow automatically syncing the uploaded caption/transcript with the audio.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.captions.insert = (params) => this._makeRequest('youtube/v3/captions', 'POST', params);

    /**
     * Updates an existing resource.
     * @param {string} params.onBehalfOf - ID of the Google+ Page for the channel that the request is on behalf of.
     * @param {string} params.onBehalfOfContentOwner - *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string} params.part - (Required) The *part* parameter specifies a comma-separated list of one or more caption resource parts that the API response will include. The part names that you can include in the parameter value are id and snippet.
     * @param {boolean} params.sync - Extra parameter to allow automatically syncing the uploaded caption/transcript with the audio.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.captions.update = (params) => this._makeRequest('youtube/v3/captions', 'PUT', params);

    /**
     * Deletes a resource.
     * @param {string} params.id - (Required)
     * @param {string} params.onBehalfOf - ID of the Google+ Page for the channel that the request is be on behalf of
     * @param {string} params.onBehalfOfContentOwner - *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @return {object} The API response object.
     */
    this.captions.delete = (params) => this._makeRequest('youtube/v3/captions', 'DELETE', params);

    /**
     * Downloads a caption track.
     * @param {string} params.id - (Required) The ID of the caption track to download, required for One Platform.
     * @param {string} params.onBehalfOf - ID of the Google+ Page for the channel that the request is be on behalf of
     * @param {string} params.onBehalfOfContentOwner - *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string} params.tfmt - Convert the captions into this format. Supported options are sbv, srt, and vtt.
     * @param {string} params.tlang - tlang is the language code; machine translate the captions into this language.
     * @return {object} The API response object.
     */
    this.captions.download = (params) => this._makeRequest('youtube/v3/captions/{id}', 'GET', params);

    this.channels = {};

    /**
     * Retrieves a list of resources, possibly filtered.
     * @param {string} params.categoryId - Return the channels within the specified guide category ID.
     * @param {string} params.forHandle - Return the channel associated with a YouTube handle.
     * @param {string} params.forUsername - Return the channel associated with a YouTube username.
     * @param {string} params.hl - Stands for "host language". Specifies the localization language of the metadata to be filled into snippet.localized. The field is filled with the default metadata if there is no localization in the specified language. The parameter value must be a language code included in the list returned by the i18nLanguages.list method (e.g. en_US, es_MX).
     * @param {string} params.id - Return the channels with the specified IDs.
     * @param {boolean} params.managedByMe - Return the channels managed by the authenticated user.
     * @param {integer} params.maxResults - The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.
     * @param {boolean} params.mine - Return the ids of channels owned by the authenticated user.
     * @param {boolean} params.mySubscribers - Return the channels subscribed to the authenticated user
     * @param {string} params.onBehalfOfContentOwner - *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string} params.pageToken - The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
     * @param {string} params.part - (Required) The *part* parameter specifies a comma-separated list of one or more channel resource properties that the API response will include. If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a channel resource, the contentDetails property contains other properties, such as the uploads properties. As such, if you set *part=contentDetails*, the API response will also contain all of those nested properties.
     * @return {object} The API response object.
     */
    this.channels.list = (params) => this._makeRequest('youtube/v3/channels', 'GET', params);

    /**
     * Updates an existing resource.
     * @param {string} params.onBehalfOfContentOwner - The *onBehalfOfContentOwner* parameter indicates that the authenticated user is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with needs to be linked to the specified YouTube content owner.
     * @param {string} params.part - (Required) The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. The API currently only allows the parameter value to be set to either brandingSettings or invideoPromotion. (You cannot update both of those parts with a single request.) Note that this method overrides the existing values for all of the mutable properties that are contained in any parts that the parameter value specifies.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.channels.update = (params) => this._makeRequest('youtube/v3/channels', 'PUT', params);

    this.channelBanners = {};

    /**
     * Inserts a new resource into this collection.
     * @param {string} params.channelId - Unused, channel_id is currently derived from the security context of the requestor.
     * @param {string} params.onBehalfOfContentOwner - *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string} params.onBehalfOfContentOwnerChannel - This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.channelBanners.insert = (params) => this._makeRequest('youtube/v3/channelBanners/insert', 'POST', params);

    this.channelSections = {};

    /**
     * Retrieves a list of resources, possibly filtered.
     * @param {string} params.channelId - Return the ChannelSections owned by the specified channel ID.
     * @param {string} params.hl - Return content in specified language
     * @param {string} params.id - Return the ChannelSections with the given IDs for Stubby or Apiary.
     * @param {boolean} params.mine - Return the ChannelSections owned by the authenticated user.
     * @param {string} params.onBehalfOfContentOwner - *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string} params.part - (Required) The *part* parameter specifies a comma-separated list of one or more channelSection resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, and contentDetails. If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a channelSection resource, the snippet property contains other properties, such as a display title for the channelSection. If you set *part=snippet*, the API response will also contain all of those nested properties.
     * @return {object} The API response object.
     */
    this.channelSections.list = (params) => this._makeRequest('youtube/v3/channelSections', 'GET', params);

    /**
     * Inserts a new resource into this collection.
     * @param {string} params.onBehalfOfContentOwner - *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string} params.onBehalfOfContentOwnerChannel - This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     * @param {string} params.part - (Required) The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. The part names that you can include in the parameter value are snippet and contentDetails.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.channelSections.insert = (params) => this._makeRequest('youtube/v3/channelSections', 'POST', params);

    /**
     * Updates an existing resource.
     * @param {string} params.onBehalfOfContentOwner - *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string} params.part - (Required) The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. The part names that you can include in the parameter value are snippet and contentDetails.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.channelSections.update = (params) => this._makeRequest('youtube/v3/channelSections', 'PUT', params);

    /**
     * Deletes a resource.
     * @param {string} params.id - (Required)
     * @param {string} params.onBehalfOfContentOwner - *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @return {object} The API response object.
     */
    this.channelSections.delete = (params) => this._makeRequest('youtube/v3/channelSections', 'DELETE', params);

    this.comments = {};

    /**
     * Retrieves a list of resources, possibly filtered.
     * @param {string} params.id - Returns the comments with the given IDs for One Platform.
     * @param {integer} params.maxResults - The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.
     * @param {string} params.pageToken - The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
     * @param {string} params.parentId - Returns replies to the specified comment. Note, currently YouTube features only one level of replies (ie replies to top level comments). However replies to replies may be supported in the future.
     * @param {string} params.part - (Required) The *part* parameter specifies a comma-separated list of one or more comment resource properties that the API response will include.
     * @param {string} params.textFormat - The requested text format for the returned comments.
     * @return {object} The API response object.
     */
    this.comments.list = (params) => this._makeRequest('youtube/v3/comments', 'GET', params);

    /**
     * Inserts a new resource into this collection.
     * @param {string} params.part - (Required) The *part* parameter identifies the properties that the API response will include. Set the parameter value to snippet. The snippet part has a quota cost of 2 units.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.comments.insert = (params) => this._makeRequest('youtube/v3/comments', 'POST', params);

    /**
     * Updates an existing resource.
     * @param {string} params.part - (Required) The *part* parameter identifies the properties that the API response will include. You must at least include the snippet part in the parameter value since that part contains all of the properties that the API request can update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.comments.update = (params) => this._makeRequest('youtube/v3/comments', 'PUT', params);

    /**
     * Deletes a resource.
     * @param {string} params.id - (Required)
     * @return {object} The API response object.
     */
    this.comments.delete = (params) => this._makeRequest('youtube/v3/comments', 'DELETE', params);

    /**
     * Sets the moderation status of one or more comments.
     * @param {boolean} params.banAuthor - If set to true the author of the comment gets added to the ban list. This means all future comments of the author will autmomatically be rejected. Only valid in combination with STATUS_REJECTED.
     * @param {string} params.id - (Required) Modifies the moderation status of the comments with the given IDs
     * @param {string} params.moderationStatus - (Required) Specifies the requested moderation status. Note, comments can be in statuses, which are not available through this call. For example, this call does not allow to mark a comment as 'likely spam'. Valid values: 'heldForReview', 'published' or 'rejected'.
     * @return {object} The API response object.
     */
    this.comments.setModerationStatus = (params) => this._makeRequest('youtube/v3/comments/setModerationStatus', 'POST', params);

    /**
     * Expresses the caller's opinion that one or more comments should be flagged as spam.
     * @param {string} params.id - (Required) Flags the comments with the given IDs as spam in the caller's opinion.
     * @return {object} The API response object.
     */
    this.comments.markAsSpam = (params) => this._makeRequest('youtube/v3/comments/markAsSpam', 'POST', params);

    this.commentThreads = {};

    /**
     * Retrieves a list of resources, possibly filtered.
     * @param {string} params.allThreadsRelatedToChannelId - Returns the comment threads of all videos of the channel and the channel comments as well.
     * @param {string} params.channelId - Returns the comment threads for all the channel comments (ie does not include comments left on videos).
     * @param {string} params.id - Returns the comment threads with the given IDs for Stubby or Apiary.
     * @param {integer} params.maxResults - The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.
     * @param {string} params.moderationStatus - Limits the returned comment threads to those with the specified moderation status. Not compatible with the 'id' filter. Valid values: published, heldForReview, likelySpam.
     * @param {string} params.order - 
     * @param {string} params.pageToken - The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
     * @param {string} params.part - (Required) The *part* parameter specifies a comma-separated list of one or more commentThread resource properties that the API response will include.
     * @param {string} params.postId - Returns the comment threads of the specified post.
     * @param {string} params.searchTerms - Limits the returned comment threads to those matching the specified key words. Not compatible with the 'id' filter.
     * @param {string} params.textFormat - The requested text format for the returned comments.
     * @param {string} params.videoId - Returns the comment threads of the specified video.
     * @return {object} The API response object.
     */
    this.commentThreads.list = (params) => this._makeRequest('youtube/v3/commentThreads', 'GET', params);

    /**
     * Inserts a new resource into this collection.
     * @param {string} params.part - (Required) The *part* parameter identifies the properties that the API response will include. Set the parameter value to snippet. The snippet part has a quota cost of 2 units.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.commentThreads.insert = (params) => this._makeRequest('youtube/v3/commentThreads', 'POST', params);

    this.youtube = {};

    this.youtube.v3 = {};

    /**
     * Updates an existing resource.
     * @param {string} params.part - The *part* parameter specifies a comma-separated list of commentThread resource properties that the API response will include. You must at least include the snippet part in the parameter value since that part contains all of the properties that the API request can update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.youtube.v3.updateCommentThreads = (params) => this._makeRequest('youtube/v3/commentThreads', 'PUT', params);

    this.youtube.v3.liveChat = {};

    this.youtube.v3.liveChat.messages = {};

    /**
     * Allows a user to load live chat through a server-streamed RPC.
     * @param {string} params.hl - Specifies the localization language in which the system messages should be returned.
     * @param {string} params.liveChatId - The id of the live chat for which comments should be returned.
     * @param {integer} params.maxResults - The *maxResults* parameter specifies the maximum number of items that should be returned in the result set. Not used in the streaming RPC.
     * @param {string} params.pageToken - The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken property identify other pages that could be retrieved.
     * @param {string} params.part - The *part* parameter specifies the liveChatComment resource parts that the API response will include. Supported values are id, snippet, and authorDetails.
     * @param {integer} params.profileImageSize - Specifies the size of the profile image that should be returned for each user.
     * @return {object} The API response object.
     */
    this.youtube.v3.liveChat.messages.stream = (params) => this._makeRequest('youtube/v3/liveChat/messages/stream', 'GET', params);

    this.i18nLanguages = {};

    /**
     * Retrieves a list of resources, possibly filtered.
     * @param {string} params.hl - 
     * @param {string} params.part - (Required) The *part* parameter specifies the i18nLanguage resource properties that the API response will include. Set the parameter value to snippet.
     * @return {object} The API response object.
     */
    this.i18nLanguages.list = (params) => this._makeRequest('youtube/v3/i18nLanguages', 'GET', params);

    this.i18nRegions = {};

    /**
     * Retrieves a list of resources, possibly filtered.
     * @param {string} params.hl - 
     * @param {string} params.part - (Required) The *part* parameter specifies the i18nRegion resource properties that the API response will include. Set the parameter value to snippet.
     * @return {object} The API response object.
     */
    this.i18nRegions.list = (params) => this._makeRequest('youtube/v3/i18nRegions', 'GET', params);

    this.liveBroadcasts = {};

    /**
     * Retrieve the list of broadcasts associated with the given channel.
     * @param {string} params.broadcastStatus - Return broadcasts with a certain status, e.g. active broadcasts.
     * @param {string} params.broadcastType - Return only broadcasts with the selected type.
     * @param {string} params.id - Return broadcasts with the given ids from Stubby or Apiary.
     * @param {integer} params.maxResults - The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.
     * @param {boolean} params.mine - 
     * @param {string} params.onBehalfOfContentOwner - *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string} params.onBehalfOfContentOwnerChannel - This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     * @param {string} params.pageToken - The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
     * @param {string} params.part - (Required) The *part* parameter specifies a comma-separated list of one or more liveBroadcast resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, contentDetails, status and statistics.
     * @return {object} The API response object.
     */
    this.liveBroadcasts.list = (params) => this._makeRequest('youtube/v3/liveBroadcasts', 'GET', params);

    /**
     * Inserts a new stream for the authenticated user.
     * @param {string} params.onBehalfOfContentOwner - *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string} params.onBehalfOfContentOwnerChannel - This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     * @param {string} params.part - (Required) The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. The part properties that you can include in the parameter value are id, snippet, contentDetails, and status.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.liveBroadcasts.insert = (params) => this._makeRequest('youtube/v3/liveBroadcasts', 'POST', params);

    /**
     * Updates an existing broadcast for the authenticated user.
     * @param {string} params.onBehalfOfContentOwner - *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string} params.onBehalfOfContentOwnerChannel - This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     * @param {string} params.part - (Required) The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. The part properties that you can include in the parameter value are id, snippet, contentDetails, and status. Note that this method will override the existing values for all of the mutable properties that are contained in any parts that the parameter value specifies. For example, a broadcast's privacy status is defined in the status part. As such, if your request is updating a private or unlisted broadcast, and the request's part parameter value includes the status part, the broadcast's privacy setting will be updated to whatever value the request body specifies. If the request body does not specify a value, the existing privacy setting will be removed and the broadcast will revert to the default privacy setting.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.liveBroadcasts.update = (params) => this._makeRequest('youtube/v3/liveBroadcasts', 'PUT', params);

    /**
     * Delete a given broadcast.
     * @param {string} params.id - (Required) Broadcast to delete.
     * @param {string} params.onBehalfOfContentOwner - *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string} params.onBehalfOfContentOwnerChannel - This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     * @return {object} The API response object.
     */
    this.liveBroadcasts.delete = (params) => this._makeRequest('youtube/v3/liveBroadcasts', 'DELETE', params);

    /**
     * Bind a broadcast to a stream.
     * @param {string} params.id - (Required) Broadcast to bind to the stream
     * @param {string} params.onBehalfOfContentOwner - *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string} params.onBehalfOfContentOwnerChannel - This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     * @param {string} params.part - (Required) The *part* parameter specifies a comma-separated list of one or more liveBroadcast resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, contentDetails, and status.
     * @param {string} params.streamId - Stream to bind, if not set unbind the current one.
     * @return {object} The API response object.
     */
    this.liveBroadcasts.bind = (params) => this._makeRequest('youtube/v3/liveBroadcasts/bind', 'POST', params);

    /**
     * Transition a broadcast to a given status.
     * @param {string} params.broadcastStatus - (Required) The status to which the broadcast is going to transition.
     * @param {string} params.id - (Required) Broadcast to transition.
     * @param {string} params.onBehalfOfContentOwner - *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string} params.onBehalfOfContentOwnerChannel - This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     * @param {string} params.part - (Required) The *part* parameter specifies a comma-separated list of one or more liveBroadcast resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, contentDetails, and status.
     * @return {object} The API response object.
     */
    this.liveBroadcasts.transition = (params) => this._makeRequest('youtube/v3/liveBroadcasts/transition', 'POST', params);

    /**
     * Insert cuepoints in a broadcast
     * @param {string} params.id - Broadcast to insert ads to, or equivalently `external_video_id` for internal use.
     * @param {string} params.onBehalfOfContentOwner - *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string} params.onBehalfOfContentOwnerChannel - This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     * @param {string} params.part - The *part* parameter specifies a comma-separated list of one or more liveBroadcast resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, contentDetails, and status.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.liveBroadcasts.insertCuepoint = (params) => this._makeRequest('youtube/v3/liveBroadcasts/cuepoint', 'POST', params);

    this.liveChatBans = {};

    /**
     * Inserts a new resource into this collection.
     * @param {string} params.part - (Required) The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response returns. Set the parameter value to snippet.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.liveChatBans.insert = (params) => this._makeRequest('youtube/v3/liveChat/bans', 'POST', params);

    /**
     * Deletes a chat ban.
     * @param {string} params.id - (Required)
     * @return {object} The API response object.
     */
    this.liveChatBans.delete = (params) => this._makeRequest('youtube/v3/liveChat/bans', 'DELETE', params);

    this.liveChatMessages = {};

    /**
     * Retrieves a list of resources, possibly filtered.
     * @param {string} params.hl - Specifies the localization language in which the system messages should be returned.
     * @param {string} params.liveChatId - (Required) The id of the live chat for which comments should be returned.
     * @param {integer} params.maxResults - The *maxResults* parameter specifies the maximum number of items that should be returned in the result set. Not used in the streaming RPC.
     * @param {string} params.pageToken - The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken property identify other pages that could be retrieved.
     * @param {string} params.part - (Required) The *part* parameter specifies the liveChatComment resource parts that the API response will include. Supported values are id, snippet, and authorDetails.
     * @param {integer} params.profileImageSize - Specifies the size of the profile image that should be returned for each user.
     * @return {object} The API response object.
     */
    this.liveChatMessages.list = (params) => this._makeRequest('youtube/v3/liveChat/messages', 'GET', params);

    /**
     * Inserts a new resource into this collection.
     * @param {string} params.part - (Required) The *part* parameter serves two purposes. It identifies the properties that the write operation will set as well as the properties that the API response will include. Set the parameter value to snippet.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.liveChatMessages.insert = (params) => this._makeRequest('youtube/v3/liveChat/messages', 'POST', params);

    /**
     * Deletes a chat message.
     * @param {string} params.id - (Required)
     * @return {object} The API response object.
     */
    this.liveChatMessages.delete = (params) => this._makeRequest('youtube/v3/liveChat/messages', 'DELETE', params);

    /**
     * Transition a durable chat event.
     * @param {string} params.id - The ID that uniquely identify the chat message event to transition.
     * @param {string} params.status - The status to which the chat event is going to transition.
     * @return {object} The API response object.
     */
    this.liveChatMessages.transition = (params) => this._makeRequest('youtube/v3/liveChat/messages/transition', 'POST', params);

    this.liveChatModerators = {};

    /**
     * Retrieves a list of resources, possibly filtered.
     * @param {string} params.liveChatId - (Required) The id of the live chat for which moderators should be returned.
     * @param {integer} params.maxResults - The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.
     * @param {string} params.pageToken - The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
     * @param {string} params.part - (Required) The *part* parameter specifies the liveChatModerator resource parts that the API response will include. Supported values are id and snippet.
     * @return {object} The API response object.
     */
    this.liveChatModerators.list = (params) => this._makeRequest('youtube/v3/liveChat/moderators', 'GET', params);

    /**
     * Inserts a new resource into this collection.
     * @param {string} params.part - (Required) The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response returns. Set the parameter value to snippet.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.liveChatModerators.insert = (params) => this._makeRequest('youtube/v3/liveChat/moderators', 'POST', params);

    /**
     * Deletes a chat moderator.
     * @param {string} params.id - (Required)
     * @return {object} The API response object.
     */
    this.liveChatModerators.delete = (params) => this._makeRequest('youtube/v3/liveChat/moderators', 'DELETE', params);

    this.liveStreams = {};

    /**
     * Retrieve the list of streams associated with the given channel. --
     * @param {string} params.id - Return LiveStreams with the given ids from Stubby or Apiary.
     * @param {integer} params.maxResults - The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.
     * @param {boolean} params.mine - 
     * @param {string} params.onBehalfOfContentOwner - *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string} params.onBehalfOfContentOwnerChannel - This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     * @param {string} params.pageToken - The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
     * @param {string} params.part - (Required) The *part* parameter specifies a comma-separated list of one or more liveStream resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, cdn, and status.
     * @return {object} The API response object.
     */
    this.liveStreams.list = (params) => this._makeRequest('youtube/v3/liveStreams', 'GET', params);

    /**
     * Inserts a new stream for the authenticated user.
     * @param {string} params.onBehalfOfContentOwner - *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string} params.onBehalfOfContentOwnerChannel - This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     * @param {string} params.part - (Required) The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. The part properties that you can include in the parameter value are id, snippet, cdn, content_details, and status.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.liveStreams.insert = (params) => this._makeRequest('youtube/v3/liveStreams', 'POST', params);

    /**
     * Updates an existing stream for the authenticated user.
     * @param {string} params.onBehalfOfContentOwner - *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string} params.onBehalfOfContentOwnerChannel - This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     * @param {string} params.part - (Required) The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. The part properties that you can include in the parameter value are id, snippet, cdn, and status. Note that this method will override the existing values for all of the mutable properties that are contained in any parts that the parameter value specifies. If the request body does not specify a value for a mutable property, the existing value for that property will be removed.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.liveStreams.update = (params) => this._makeRequest('youtube/v3/liveStreams', 'PUT', params);

    /**
     * Deletes an existing stream for the authenticated user.
     * @param {string} params.id - (Required)
     * @param {string} params.onBehalfOfContentOwner - *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string} params.onBehalfOfContentOwnerChannel - This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     * @return {object} The API response object.
     */
    this.liveStreams.delete = (params) => this._makeRequest('youtube/v3/liveStreams', 'DELETE', params);

    this.members = {};

    /**
     * Retrieves a list of members that match the request criteria for a channel.
     * @param {string} params.filterByMemberChannelId - Comma separated list of channel IDs. Only data about members that are part of this list will be included in the response.
     * @param {string} params.hasAccessToLevel - Filter members in the results set to the ones that have access to a level.
     * @param {integer} params.maxResults - The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.
     * @param {string} params.mode - Parameter that specifies which channel members to return.
     * @param {string} params.pageToken - The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
     * @param {string} params.part - (Required) The *part* parameter specifies the member resource parts that the API response will include. Set the parameter value to snippet.
     * @return {object} The API response object.
     */
    this.members.list = (params) => this._makeRequest('youtube/v3/members', 'GET', params);

    this.membershipsLevels = {};

    /**
     * Retrieves a list of all pricing levels offered by a creator to the fans.
     * @param {string} params.part - (Required) The *part* parameter specifies the membershipsLevel resource parts that the API response will include. Supported values are id and snippet.
     * @return {object} The API response object.
     */
    this.membershipsLevels.list = (params) => this._makeRequest('youtube/v3/membershipsLevels', 'GET', params);

    this.playlists = {};

    /**
     * Retrieves a list of resources, possibly filtered.
     * @param {string} params.channelId - Return the playlists owned by the specified channel ID.
     * @param {string} params.hl - Return content in specified language
     * @param {string} params.id - Return the playlists with the given IDs for Stubby or Apiary.
     * @param {integer} params.maxResults - The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.
     * @param {boolean} params.mine - Return the playlists owned by the authenticated user.
     * @param {string} params.onBehalfOfContentOwner - *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string} params.onBehalfOfContentOwnerChannel - This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     * @param {string} params.pageToken - The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
     * @param {string} params.part - (Required) The *part* parameter specifies a comma-separated list of one or more playlist resource properties that the API response will include. If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a playlist resource, the snippet property contains properties like author, title, description, tags, and timeCreated. As such, if you set *part=snippet*, the API response will contain all of those properties.
     * @return {object} The API response object.
     */
    this.playlists.list = (params) => this._makeRequest('youtube/v3/playlists', 'GET', params);

    /**
     * Inserts a new resource into this collection.
     * @param {string} params.onBehalfOfContentOwner - *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string} params.onBehalfOfContentOwnerChannel - This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     * @param {string} params.part - (Required) The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.playlists.insert = (params) => this._makeRequest('youtube/v3/playlists', 'POST', params);

    /**
     * Updates an existing resource.
     * @param {string} params.onBehalfOfContentOwner - *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string} params.part - (Required) The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. Note that this method will override the existing values for mutable properties that are contained in any parts that the request body specifies. For example, a playlist's description is contained in the snippet part, which must be included in the request body. If the request does not specify a value for the snippet.description property, the playlist's existing description will be deleted.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.playlists.update = (params) => this._makeRequest('youtube/v3/playlists', 'PUT', params);

    /**
     * Deletes a resource.
     * @param {string} params.id - (Required)
     * @param {string} params.onBehalfOfContentOwner - *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @return {object} The API response object.
     */
    this.playlists.delete = (params) => this._makeRequest('youtube/v3/playlists', 'DELETE', params);

    this.playlistItems = {};

    /**
     * Retrieves a list of resources, possibly filtered.
     * @param {string} params.id - 
     * @param {integer} params.maxResults - The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.
     * @param {string} params.onBehalfOfContentOwner - *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string} params.pageToken - The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
     * @param {string} params.part - (Required) The *part* parameter specifies a comma-separated list of one or more playlistItem resource properties that the API response will include. If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a playlistItem resource, the snippet property contains numerous fields, including the title, description, position, and resourceId properties. As such, if you set *part=snippet*, the API response will contain all of those properties.
     * @param {string} params.playlistId - Return the playlist items within the given playlist.
     * @param {string} params.videoId - Return the playlist items associated with the given video ID.
     * @return {object} The API response object.
     */
    this.playlistItems.list = (params) => this._makeRequest('youtube/v3/playlistItems', 'GET', params);

    /**
     * Deletes a resource.
     * @param {string} params.id - (Required)
     * @param {string} params.onBehalfOfContentOwner - *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @return {object} The API response object.
     */
    this.playlistItems.delete = (params) => this._makeRequest('youtube/v3/playlistItems', 'DELETE', params);

    /**
     * Inserts a new resource into this collection.
     * @param {string} params.onBehalfOfContentOwner - *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string} params.part - (Required) The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.playlistItems.insert = (params) => this._makeRequest('youtube/v3/playlistItems', 'POST', params);

    /**
     * Updates an existing resource.
     * @param {string} params.onBehalfOfContentOwner - *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string} params.part - (Required) The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. Note that this method will override the existing values for all of the mutable properties that are contained in any parts that the parameter value specifies. For example, a playlist item can specify a start time and end time, which identify the times portion of the video that should play when users watch the video in the playlist. If your request is updating a playlist item that sets these values, and the request's part parameter value includes the contentDetails part, the playlist item's start and end times will be updated to whatever value the request body specifies. If the request body does not specify values, the existing start and end times will be removed and replaced with the default settings.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.playlistItems.update = (params) => this._makeRequest('youtube/v3/playlistItems', 'PUT', params);

    this.playlistImages = {};

    /**
     * Retrieves a list of resources, possibly filtered.
     * @param {integer} params.maxResults - The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.
     * @param {string} params.onBehalfOfContentOwner - *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string} params.onBehalfOfContentOwnerChannel - This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     * @param {string} params.pageToken - The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
     * @param {string} params.parent - Return PlaylistImages for this playlist id.
     * @param {string} params.part - The *part* parameter specifies a comma-separated list of one or more playlistImage resource properties that the API response will include. If the parameter identifies a property that contains child properties, the child properties will be included in the response.
     * @return {object} The API response object.
     */
    this.playlistImages.list = (params) => this._makeRequest('youtube/v3/playlistImages', 'GET', params);

    /**
     * Inserts a new resource into this collection.
     * @param {string} params.onBehalfOfContentOwner - *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string} params.onBehalfOfContentOwnerChannel - This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     * @param {string} params.part - The *part* parameter specifies the properties that the API response will include.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.playlistImages.insert = (params) => this._makeRequest('youtube/v3/playlistImages', 'POST', params);

    /**
     * Updates an existing resource.
     * @param {string} params.onBehalfOfContentOwner - *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string} params.part - The *part* parameter specifies the properties that the API response will include.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.playlistImages.update = (params) => this._makeRequest('youtube/v3/playlistImages', 'PUT', params);

    /**
     * Deletes a resource.
     * @param {string} params.id - Id to identify this image. This is returned from by the List method.
     * @param {string} params.onBehalfOfContentOwner - *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @return {object} The API response object.
     */
    this.playlistImages.delete = (params) => this._makeRequest('youtube/v3/playlistImages', 'DELETE', params);

    this.search = {};

    /**
     * Retrieves a list of search resources
     * @param {string} params.channelId - Filter on resources belonging to this channelId.
     * @param {string} params.channelType - Add a filter on the channel search.
     * @param {string} params.eventType - Filter on the livestream status of the videos.
     * @param {boolean} params.forContentOwner - Search owned by a content owner.
     * @param {boolean} params.forDeveloper - Restrict the search to only retrieve videos uploaded using the project id of the authenticated user.
     * @param {boolean} params.forMine - Search for the private videos of the authenticated user.
     * @param {string} params.location - Filter on location of the video
     * @param {string} params.locationRadius - Filter on distance from the location (specified above).
     * @param {integer} params.maxResults - The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.
     * @param {string} params.onBehalfOfContentOwner - *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string} params.order - Sort order of the results.
     * @param {string} params.pageToken - The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
     * @param {string} params.part - (Required) The *part* parameter specifies a comma-separated list of one or more search resource properties that the API response will include. Set the parameter value to snippet.
     * @param {string} params.publishedAfter - Filter on resources published after this date.
     * @param {string} params.publishedBefore - Filter on resources published before this date.
     * @param {string} params.q - Textual search terms to match.
     * @param {string} params.regionCode - Display the content as seen by viewers in this country.
     * @param {string} params.relevanceLanguage - Return results relevant to this language.
     * @param {string} params.safeSearch - Indicates whether the search results should include restricted content as well as standard content.
     * @param {string} params.topicId - Restrict results to a particular topic.
     * @param {string} params.type - Restrict results to a particular set of resource types from One Platform.
     * @param {string} params.videoCaption - Filter on the presence of captions on the videos.
     * @param {string} params.videoCategoryId - Filter on videos in a specific category.
     * @param {string} params.videoDefinition - Filter on the definition of the videos.
     * @param {string} params.videoDimension - Filter on 3d videos.
     * @param {string} params.videoDuration - Filter on the duration of the videos.
     * @param {string} params.videoEmbeddable - Filter on embeddable videos.
     * @param {string} params.videoLicense - Filter on the license of the videos.
     * @param {string} params.videoPaidProductPlacement - 
     * @param {string} params.videoSyndicated - Filter on syndicated videos.
     * @param {string} params.videoType - Filter on videos of a specific type.
     * @return {object} The API response object.
     */
    this.search.list = (params) => this._makeRequest('youtube/v3/search', 'GET', params);

    this.subscriptions = {};

    /**
     * Retrieves a list of resources, possibly filtered.
     * @param {string} params.channelId - Return the subscriptions of the given channel owner.
     * @param {string} params.forChannelId - Return the subscriptions to the subset of these channels that the authenticated user is subscribed to.
     * @param {string} params.id - Return the subscriptions with the given IDs for Stubby or Apiary.
     * @param {integer} params.maxResults - The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.
     * @param {boolean} params.mine - Flag for returning the subscriptions of the authenticated user.
     * @param {boolean} params.myRecentSubscribers - 
     * @param {boolean} params.mySubscribers - Return the subscribers of the given channel owner.
     * @param {string} params.onBehalfOfContentOwner - *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string} params.onBehalfOfContentOwnerChannel - This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     * @param {string} params.order - The order of the returned subscriptions
     * @param {string} params.pageToken - The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
     * @param {string} params.part - (Required) The *part* parameter specifies a comma-separated list of one or more subscription resource properties that the API response will include. If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a subscription resource, the snippet property contains other properties, such as a display title for the subscription. If you set *part=snippet*, the API response will also contain all of those nested properties.
     * @return {object} The API response object.
     */
    this.subscriptions.list = (params) => this._makeRequest('youtube/v3/subscriptions', 'GET', params);

    /**
     * Deletes a resource.
     * @param {string} params.id - (Required)
     * @return {object} The API response object.
     */
    this.subscriptions.delete = (params) => this._makeRequest('youtube/v3/subscriptions', 'DELETE', params);

    /**
     * Inserts a new resource into this collection.
     * @param {string} params.part - (Required) The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.subscriptions.insert = (params) => this._makeRequest('youtube/v3/subscriptions', 'POST', params);

    this.superChatEvents = {};

    /**
     * Retrieves a list of resources, possibly filtered.
     * @param {string} params.hl - Return rendered funding amounts in specified language.
     * @param {integer} params.maxResults - The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.
     * @param {string} params.pageToken - The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
     * @param {string} params.part - (Required) The *part* parameter specifies the superChatEvent resource parts that the API response will include. This parameter is currently not supported.
     * @return {object} The API response object.
     */
    this.superChatEvents.list = (params) => this._makeRequest('youtube/v3/superChatEvents', 'GET', params);

    this.tests = {};

    /**
     * POST method.
     * @param {string} params.externalChannelId - 
     * @param {string} params.part - (Required)
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.tests.insert = (params) => this._makeRequest('youtube/v3/tests', 'POST', params);

    this.thirdPartyLinks = {};

    /**
     * Retrieves a list of resources, possibly filtered.
     * @param {string} params.externalChannelId - Channel ID to which changes should be applied, for delegation.
     * @param {string} params.linkingToken - Get a third party link with the given linking token.
     * @param {string} params.part - (Required) The *part* parameter specifies the thirdPartyLink resource parts that the API response will include. Supported values are linkingToken, status, and snippet.
     * @param {string} params.type - Get a third party link of the given type.
     * @return {object} The API response object.
     */
    this.thirdPartyLinks.list = (params) => this._makeRequest('youtube/v3/thirdPartyLinks', 'GET', params);

    /**
     * Inserts a new resource into this collection.
     * @param {string} params.externalChannelId - Channel ID to which changes should be applied, for delegation.
     * @param {string} params.part - (Required) The *part* parameter specifies the thirdPartyLink resource parts that the API request and response will include. Supported values are linkingToken, status, and snippet.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.thirdPartyLinks.insert = (params) => this._makeRequest('youtube/v3/thirdPartyLinks', 'POST', params);

    /**
     * Updates an existing resource.
     * @param {string} params.externalChannelId - Channel ID to which changes should be applied, for delegation.
     * @param {string} params.part - (Required) The *part* parameter specifies the thirdPartyLink resource parts that the API request and response will include. Supported values are linkingToken, status, and snippet.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.thirdPartyLinks.update = (params) => this._makeRequest('youtube/v3/thirdPartyLinks', 'PUT', params);

    /**
     * Deletes a resource.
     * @param {string} params.externalChannelId - Channel ID to which changes should be applied, for delegation.
     * @param {string} params.linkingToken - (Required) Delete the partner links with the given linking token.
     * @param {string} params.part - Do not use. Required for compatibility.
     * @param {string} params.type - (Required) Type of the link to be deleted.
     * @return {object} The API response object.
     */
    this.thirdPartyLinks.delete = (params) => this._makeRequest('youtube/v3/thirdPartyLinks', 'DELETE', params);

    this.thumbnails = {};

    /**
     * As this is not an insert in a strict sense (it supports uploading/setting of a thumbnail for multiple videos, which doesn't result in creation of a single resource), I use a custom verb here.
     * @param {string} params.onBehalfOfContentOwner - *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string} params.videoId - (Required) Returns the Thumbnail with the given video IDs for Stubby or Apiary.
     * @return {object} The API response object.
     */
    this.thumbnails.set = (params) => this._makeRequest('youtube/v3/thumbnails/set', 'POST', params);

    this.videos = {};

    /**
     * Retrieves a list of resources, possibly filtered.
     * @param {string} params.chart - Return the videos that are in the specified chart.
     * @param {string} params.hl - Stands for "host language". Specifies the localization language of the metadata to be filled into snippet.localized. The field is filled with the default metadata if there is no localization in the specified language. The parameter value must be a language code included in the list returned by the i18nLanguages.list method (e.g. en_US, es_MX).
     * @param {string} params.id - Return videos with the given ids.
     * @param {string} params.locale - 
     * @param {integer} params.maxHeight - 
     * @param {integer} params.maxResults - The *maxResults* parameter specifies the maximum number of items that should be returned in the result set. *Note:* This parameter is supported for use in conjunction with the myRating and chart parameters, but it is not supported for use in conjunction with the id parameter.
     * @param {integer} params.maxWidth - Return the player with maximum height specified in
     * @param {string} params.myRating - Return videos liked/disliked by the authenticated user. Does not support RateType.RATED_TYPE_NONE.
     * @param {string} params.onBehalfOfContentOwner - *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string} params.pageToken - The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved. *Note:* This parameter is supported for use in conjunction with the myRating and chart parameters, but it is not supported for use in conjunction with the id parameter.
     * @param {string} params.part - (Required) The *part* parameter specifies a comma-separated list of one or more video resource properties that the API response will include. If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a video resource, the snippet property contains the channelId, title, description, tags, and categoryId properties. As such, if you set *part=snippet*, the API response will contain all of those properties.
     * @param {string} params.regionCode - Use a chart that is specific to the specified region
     * @param {string} params.videoCategoryId - Use chart that is specific to the specified video category
     * @return {object} The API response object.
     */
    this.videos.list = (params) => this._makeRequest('youtube/v3/videos', 'GET', params);

    /**
     * Inserts a new resource into this collection.
     * @param {boolean} params.autoLevels - Should auto-levels be applied to the upload.
     * @param {boolean} params.notifySubscribers - Notify the channel subscribers about the new video. As default, the notification is enabled.
     * @param {string} params.onBehalfOfContentOwner - *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string} params.onBehalfOfContentOwnerChannel - This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     * @param {string} params.part - (Required) The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. Note that not all parts contain properties that can be set when inserting or updating a video. For example, the statistics object encapsulates statistics that YouTube calculates for a video and does not contain values that you can set or modify. If the parameter value specifies a part that does not contain mutable values, that part will still be included in the API response.
     * @param {boolean} params.stabilize - Should stabilize be applied to the upload.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.videos.insert = (params) => this._makeRequest('youtube/v3/videos', 'POST', params);

    /**
     * Updates an existing resource.
     * @param {string} params.onBehalfOfContentOwner - *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string} params.part - (Required) The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. Note that this method will override the existing values for all of the mutable properties that are contained in any parts that the parameter value specifies. For example, a video's privacy setting is contained in the status part. As such, if your request is updating a private video, and the request's part parameter value includes the status part, the video's privacy setting will be updated to whatever value the request body specifies. If the request body does not specify a value, the existing privacy setting will be removed and the video will revert to the default privacy setting. In addition, not all parts contain properties that can be set when inserting or updating a video. For example, the statistics object encapsulates statistics that YouTube calculates for a video and does not contain values that you can set or modify. If the parameter value specifies a part that does not contain mutable values, that part will still be included in the API response.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.videos.update = (params) => this._makeRequest('youtube/v3/videos', 'PUT', params);

    /**
     * Deletes a resource.
     * @param {string} params.id - (Required)
     * @param {string} params.onBehalfOfContentOwner - *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @return {object} The API response object.
     */
    this.videos.delete = (params) => this._makeRequest('youtube/v3/videos', 'DELETE', params);

    /**
     * Report abuse for a video.
     * @param {string} params.onBehalfOfContentOwner - *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.videos.reportAbuse = (params) => this._makeRequest('youtube/v3/videos/reportAbuse', 'POST', params);

    /**
     * Adds a like or dislike rating to a video or removes a rating from a video.
     * @param {string} params.id - (Required)
     * @param {string} params.rating - (Required)
     * @return {object} The API response object.
     */
    this.videos.rate = (params) => this._makeRequest('youtube/v3/videos/rate', 'POST', params);

    /**
     * Retrieves the ratings that the authorized user gave to a list of specified videos.
     * @param {string} params.id - (Required)
     * @param {string} params.onBehalfOfContentOwner - *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @return {object} The API response object.
     */
    this.videos.getRating = (params) => this._makeRequest('youtube/v3/videos/getRating', 'GET', params);

    this.videoAbuseReportReasons = {};

    /**
     * Retrieves a list of resources, possibly filtered.
     * @param {string} params.hl - 
     * @param {string} params.part - (Required) The *part* parameter specifies the videoCategory resource parts that the API response will include. Supported values are id and snippet.
     * @return {object} The API response object.
     */
    this.videoAbuseReportReasons.list = (params) => this._makeRequest('youtube/v3/videoAbuseReportReasons', 'GET', params);

    this.videoCategories = {};

    /**
     * Retrieves a list of resources, possibly filtered.
     * @param {string} params.hl - 
     * @param {string} params.id - Returns the video categories with the given IDs for Stubby or Apiary.
     * @param {string} params.part - (Required) The *part* parameter specifies the videoCategory resource properties that the API response will include. Set the parameter value to snippet.
     * @param {string} params.regionCode - 
     * @return {object} The API response object.
     */
    this.videoCategories.list = (params) => this._makeRequest('youtube/v3/videoCategories', 'GET', params);

    this.videoTrainability = {};

    /**
     * Returns the trainability status of a video.
     * @param {string} params.id - The ID of the video to retrieve.
     * @return {object} The API response object.
     */
    this.videoTrainability.get = (params) => this._makeRequest('youtube/v3/videoTrainability', 'GET', params);

    this.watermarks = {};

    /**
     * Allows upload of watermark image and setting it for a channel.
     * @param {string} params.channelId - (Required)
     * @param {string} params.onBehalfOfContentOwner - *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.watermarks.set = (params) => this._makeRequest('youtube/v3/watermarks/set', 'POST', params);

    /**
     * Allows removal of channel watermark.
     * @param {string} params.channelId - (Required)
     * @param {string} params.onBehalfOfContentOwner - *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @return {object} The API response object.
     */
    this.watermarks.unset = (params) => this._makeRequest('youtube/v3/watermarks/unset', 'POST', params);
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
