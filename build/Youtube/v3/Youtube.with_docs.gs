
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
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://youtube.googleapis.com/';
    this._servicePath = '';


    this.abuseReports = {};

    /**
     * Inserts a new resource into this collection.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.part - (Required) The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.abuseReports.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/abuseReports', 'POST', apiParams, clientConfig);

    this.activities = {};

    /**
     * Retrieves a list of resources, possibly filtered.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.channelId - 
     * @param {boolean} apiParams.home - 
     * @param {integer} apiParams.maxResults - The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.
     * @param {boolean} apiParams.mine - 
     * @param {string} apiParams.pageToken - The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
     * @param {string} apiParams.part - (Required) The *part* parameter specifies a comma-separated list of one or more activity resource properties that the API response will include. If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in an activity resource, the snippet property contains other properties that identify the type of activity, a display title for the activity, and so forth. If you set *part=snippet*, the API response will also contain all of those nested properties.
     * @param {string} apiParams.publishedAfter - 
     * @param {string} apiParams.publishedBefore - 
     * @param {string} apiParams.regionCode - 
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.activities.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/activities', 'GET', apiParams, clientConfig);

    this.captions = {};

    /**
     * Retrieves a list of resources, possibly filtered.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - Returns the captions with the given IDs for Stubby or Apiary.
     * @param {string} apiParams.onBehalfOf - ID of the Google+ Page for the channel that the request is on behalf of.
     * @param {string} apiParams.onBehalfOfContentOwner - *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string} apiParams.part - (Required) The *part* parameter specifies a comma-separated list of one or more caption resource parts that the API response will include. The part names that you can include in the parameter value are id and snippet.
     * @param {string} apiParams.videoId - (Required) Returns the captions for the specified video.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.captions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/captions', 'GET', apiParams, clientConfig);

    /**
     * Inserts a new resource into this collection.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.onBehalfOf - ID of the Google+ Page for the channel that the request is be on behalf of
     * @param {string} apiParams.onBehalfOfContentOwner - *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string} apiParams.part - (Required) The *part* parameter specifies the caption resource parts that the API response will include. Set the parameter value to snippet.
     * @param {boolean} apiParams.sync - Extra parameter to allow automatically syncing the uploaded caption/transcript with the audio.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.captions.insert = async (apiParams = {}, clientConfig = {}) => {
      // If apiParams.media is provided, use the upload path; otherwise, use the standard path.
      const path = apiParams.media ? '/upload/youtube/v3/captions' : 'youtube/v3/captions';
      return this._makeRequest(path, 'POST', apiParams, clientConfig);
    };

    /**
     * Updates an existing resource.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.onBehalfOf - ID of the Google+ Page for the channel that the request is on behalf of.
     * @param {string} apiParams.onBehalfOfContentOwner - *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string} apiParams.part - (Required) The *part* parameter specifies a comma-separated list of one or more caption resource parts that the API response will include. The part names that you can include in the parameter value are id and snippet.
     * @param {boolean} apiParams.sync - Extra parameter to allow automatically syncing the uploaded caption/transcript with the audio.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.captions.update = async (apiParams = {}, clientConfig = {}) => {
      // If apiParams.media is provided, use the upload path; otherwise, use the standard path.
      const path = apiParams.media ? '/upload/youtube/v3/captions' : 'youtube/v3/captions';
      return this._makeRequest(path, 'PUT', apiParams, clientConfig);
    };

    /**
     * Deletes a resource.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required)
     * @param {string} apiParams.onBehalfOf - ID of the Google+ Page for the channel that the request is be on behalf of
     * @param {string} apiParams.onBehalfOfContentOwner - *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.captions.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/captions', 'DELETE', apiParams, clientConfig);

    /**
     * Downloads a caption track.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required) The ID of the caption track to download, required for One Platform.
     * @param {string} apiParams.onBehalfOf - ID of the Google+ Page for the channel that the request is be on behalf of
     * @param {string} apiParams.onBehalfOfContentOwner - *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string} apiParams.tfmt - Convert the captions into this format. Supported options are sbv, srt, and vtt.
     * @param {string} apiParams.tlang - tlang is the language code; machine translate the captions into this language.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.captions.download = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/captions/{id}', 'GET', apiParams, clientConfig);

    this.channels = {};

    /**
     * Retrieves a list of resources, possibly filtered.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.categoryId - Return the channels within the specified guide category ID.
     * @param {string} apiParams.forHandle - Return the channel associated with a YouTube handle.
     * @param {string} apiParams.forUsername - Return the channel associated with a YouTube username.
     * @param {string} apiParams.hl - Stands for "host language". Specifies the localization language of the metadata to be filled into snippet.localized. The field is filled with the default metadata if there is no localization in the specified language. The parameter value must be a language code included in the list returned by the i18nLanguages.list method (e.g. en_US, es_MX).
     * @param {string} apiParams.id - Return the channels with the specified IDs.
     * @param {boolean} apiParams.managedByMe - Return the channels managed by the authenticated user.
     * @param {integer} apiParams.maxResults - The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.
     * @param {boolean} apiParams.mine - Return the ids of channels owned by the authenticated user.
     * @param {boolean} apiParams.mySubscribers - Return the channels subscribed to the authenticated user
     * @param {string} apiParams.onBehalfOfContentOwner - *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string} apiParams.pageToken - The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
     * @param {string} apiParams.part - (Required) The *part* parameter specifies a comma-separated list of one or more channel resource properties that the API response will include. If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a channel resource, the contentDetails property contains other properties, such as the uploads properties. As such, if you set *part=contentDetails*, the API response will also contain all of those nested properties.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.channels.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/channels', 'GET', apiParams, clientConfig);

    /**
     * Updates an existing resource.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.onBehalfOfContentOwner - The *onBehalfOfContentOwner* parameter indicates that the authenticated user is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with needs to be linked to the specified YouTube content owner.
     * @param {string} apiParams.part - (Required) The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. The API currently only allows the parameter value to be set to either brandingSettings or invideoPromotion. (You cannot update both of those parts with a single request.) Note that this method overrides the existing values for all of the mutable properties that are contained in any parts that the parameter value specifies.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.channels.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/channels', 'PUT', apiParams, clientConfig);

    this.channelBanners = {};

    /**
     * Inserts a new resource into this collection.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.channelId - Unused, channel_id is currently derived from the security context of the requestor.
     * @param {string} apiParams.onBehalfOfContentOwner - *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string} apiParams.onBehalfOfContentOwnerChannel - This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.channelBanners.insert = async (apiParams = {}, clientConfig = {}) => {
      // If apiParams.media is provided, use the upload path; otherwise, use the standard path.
      const path = apiParams.media ? '/upload/youtube/v3/channelBanners/insert' : 'youtube/v3/channelBanners/insert';
      return this._makeRequest(path, 'POST', apiParams, clientConfig);
    };

    this.channelSections = {};

    /**
     * Retrieves a list of resources, possibly filtered.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.channelId - Return the ChannelSections owned by the specified channel ID.
     * @param {string} apiParams.hl - Return content in specified language
     * @param {string} apiParams.id - Return the ChannelSections with the given IDs for Stubby or Apiary.
     * @param {boolean} apiParams.mine - Return the ChannelSections owned by the authenticated user.
     * @param {string} apiParams.onBehalfOfContentOwner - *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string} apiParams.part - (Required) The *part* parameter specifies a comma-separated list of one or more channelSection resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, and contentDetails. If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a channelSection resource, the snippet property contains other properties, such as a display title for the channelSection. If you set *part=snippet*, the API response will also contain all of those nested properties.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.channelSections.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/channelSections', 'GET', apiParams, clientConfig);

    /**
     * Inserts a new resource into this collection.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.onBehalfOfContentOwner - *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string} apiParams.onBehalfOfContentOwnerChannel - This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     * @param {string} apiParams.part - (Required) The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. The part names that you can include in the parameter value are snippet and contentDetails.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.channelSections.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/channelSections', 'POST', apiParams, clientConfig);

    /**
     * Updates an existing resource.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.onBehalfOfContentOwner - *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string} apiParams.part - (Required) The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. The part names that you can include in the parameter value are snippet and contentDetails.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.channelSections.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/channelSections', 'PUT', apiParams, clientConfig);

    /**
     * Deletes a resource.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required)
     * @param {string} apiParams.onBehalfOfContentOwner - *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.channelSections.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/channelSections', 'DELETE', apiParams, clientConfig);

    this.comments = {};

    /**
     * Retrieves a list of resources, possibly filtered.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - Returns the comments with the given IDs for One Platform.
     * @param {integer} apiParams.maxResults - The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.
     * @param {string} apiParams.pageToken - The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
     * @param {string} apiParams.parentId - Returns replies to the specified comment. Note, currently YouTube features only one level of replies (ie replies to top level comments). However replies to replies may be supported in the future.
     * @param {string} apiParams.part - (Required) The *part* parameter specifies a comma-separated list of one or more comment resource properties that the API response will include.
     * @param {string} apiParams.textFormat - The requested text format for the returned comments.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.comments.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/comments', 'GET', apiParams, clientConfig);

    /**
     * Inserts a new resource into this collection.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.part - (Required) The *part* parameter identifies the properties that the API response will include. Set the parameter value to snippet. The snippet part has a quota cost of 2 units.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.comments.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/comments', 'POST', apiParams, clientConfig);

    /**
     * Updates an existing resource.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.part - (Required) The *part* parameter identifies the properties that the API response will include. You must at least include the snippet part in the parameter value since that part contains all of the properties that the API request can update.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.comments.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/comments', 'PUT', apiParams, clientConfig);

    /**
     * Deletes a resource.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.comments.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/comments', 'DELETE', apiParams, clientConfig);

    /**
     * Sets the moderation status of one or more comments.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.banAuthor - If set to true the author of the comment gets added to the ban list. This means all future comments of the author will autmomatically be rejected. Only valid in combination with STATUS_REJECTED.
     * @param {string} apiParams.id - (Required) Modifies the moderation status of the comments with the given IDs
     * @param {string} apiParams.moderationStatus - (Required) Specifies the requested moderation status. Note, comments can be in statuses, which are not available through this call. For example, this call does not allow to mark a comment as 'likely spam'. Valid values: 'heldForReview', 'published' or 'rejected'.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.comments.setModerationStatus = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/comments/setModerationStatus', 'POST', apiParams, clientConfig);

    /**
     * Expresses the caller's opinion that one or more comments should be flagged as spam.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required) Flags the comments with the given IDs as spam in the caller's opinion.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.comments.markAsSpam = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/comments/markAsSpam', 'POST', apiParams, clientConfig);

    this.commentThreads = {};

    /**
     * Retrieves a list of resources, possibly filtered.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.allThreadsRelatedToChannelId - Returns the comment threads of all videos of the channel and the channel comments as well.
     * @param {string} apiParams.channelId - Returns the comment threads for all the channel comments (ie does not include comments left on videos).
     * @param {string} apiParams.id - Returns the comment threads with the given IDs for Stubby or Apiary.
     * @param {integer} apiParams.maxResults - The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.
     * @param {string} apiParams.moderationStatus - Limits the returned comment threads to those with the specified moderation status. Not compatible with the 'id' filter. Valid values: published, heldForReview, likelySpam.
     * @param {string} apiParams.order - 
     * @param {string} apiParams.pageToken - The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
     * @param {string} apiParams.part - (Required) The *part* parameter specifies a comma-separated list of one or more commentThread resource properties that the API response will include.
     * @param {string} apiParams.postId - Returns the comment threads of the specified post.
     * @param {string} apiParams.searchTerms - Limits the returned comment threads to those matching the specified key words. Not compatible with the 'id' filter.
     * @param {string} apiParams.textFormat - The requested text format for the returned comments.
     * @param {string} apiParams.videoId - Returns the comment threads of the specified video.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.commentThreads.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/commentThreads', 'GET', apiParams, clientConfig);

    /**
     * Inserts a new resource into this collection.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.part - (Required) The *part* parameter identifies the properties that the API response will include. Set the parameter value to snippet. The snippet part has a quota cost of 2 units.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.commentThreads.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/commentThreads', 'POST', apiParams, clientConfig);

    this.youtube = {};

    this.youtube.v3 = {};

    /**
     * Updates an existing resource.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.part - The *part* parameter specifies a comma-separated list of commentThread resource properties that the API response will include. You must at least include the snippet part in the parameter value since that part contains all of the properties that the API request can update.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.youtube.v3.updateCommentThreads = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/commentThreads', 'PUT', apiParams, clientConfig);

    this.youtube.v3.liveChat = {};

    this.youtube.v3.liveChat.messages = {};

    /**
     * Allows a user to load live chat through a server-streamed RPC.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.hl - Specifies the localization language in which the system messages should be returned.
     * @param {string} apiParams.liveChatId - The id of the live chat for which comments should be returned.
     * @param {integer} apiParams.maxResults - The *maxResults* parameter specifies the maximum number of items that should be returned in the result set. Not used in the streaming RPC.
     * @param {string} apiParams.pageToken - The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken property identify other pages that could be retrieved.
     * @param {string} apiParams.part - The *part* parameter specifies the liveChatComment resource parts that the API response will include. Supported values are id, snippet, and authorDetails.
     * @param {integer} apiParams.profileImageSize - Specifies the size of the profile image that should be returned for each user.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.youtube.v3.liveChat.messages.stream = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/liveChat/messages/stream', 'GET', apiParams, clientConfig);

    this.i18nLanguages = {};

    /**
     * Retrieves a list of resources, possibly filtered.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.hl - 
     * @param {string} apiParams.part - (Required) The *part* parameter specifies the i18nLanguage resource properties that the API response will include. Set the parameter value to snippet.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.i18nLanguages.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/i18nLanguages', 'GET', apiParams, clientConfig);

    this.i18nRegions = {};

    /**
     * Retrieves a list of resources, possibly filtered.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.hl - 
     * @param {string} apiParams.part - (Required) The *part* parameter specifies the i18nRegion resource properties that the API response will include. Set the parameter value to snippet.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.i18nRegions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/i18nRegions', 'GET', apiParams, clientConfig);

    this.liveBroadcasts = {};

    /**
     * Retrieve the list of broadcasts associated with the given channel.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.broadcastStatus - Return broadcasts with a certain status, e.g. active broadcasts.
     * @param {string} apiParams.broadcastType - Return only broadcasts with the selected type.
     * @param {string} apiParams.id - Return broadcasts with the given ids from Stubby or Apiary.
     * @param {integer} apiParams.maxResults - The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.
     * @param {boolean} apiParams.mine - 
     * @param {string} apiParams.onBehalfOfContentOwner - *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string} apiParams.onBehalfOfContentOwnerChannel - This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     * @param {string} apiParams.pageToken - The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
     * @param {string} apiParams.part - (Required) The *part* parameter specifies a comma-separated list of one or more liveBroadcast resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, contentDetails, status and statistics.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.liveBroadcasts.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/liveBroadcasts', 'GET', apiParams, clientConfig);

    /**
     * Inserts a new stream for the authenticated user.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.onBehalfOfContentOwner - *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string} apiParams.onBehalfOfContentOwnerChannel - This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     * @param {string} apiParams.part - (Required) The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. The part properties that you can include in the parameter value are id, snippet, contentDetails, and status.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.liveBroadcasts.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/liveBroadcasts', 'POST', apiParams, clientConfig);

    /**
     * Updates an existing broadcast for the authenticated user.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.onBehalfOfContentOwner - *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string} apiParams.onBehalfOfContentOwnerChannel - This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     * @param {string} apiParams.part - (Required) The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. The part properties that you can include in the parameter value are id, snippet, contentDetails, and status. Note that this method will override the existing values for all of the mutable properties that are contained in any parts that the parameter value specifies. For example, a broadcast's privacy status is defined in the status part. As such, if your request is updating a private or unlisted broadcast, and the request's part parameter value includes the status part, the broadcast's privacy setting will be updated to whatever value the request body specifies. If the request body does not specify a value, the existing privacy setting will be removed and the broadcast will revert to the default privacy setting.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.liveBroadcasts.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/liveBroadcasts', 'PUT', apiParams, clientConfig);

    /**
     * Delete a given broadcast.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required) Broadcast to delete.
     * @param {string} apiParams.onBehalfOfContentOwner - *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string} apiParams.onBehalfOfContentOwnerChannel - This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.liveBroadcasts.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/liveBroadcasts', 'DELETE', apiParams, clientConfig);

    /**
     * Bind a broadcast to a stream.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required) Broadcast to bind to the stream
     * @param {string} apiParams.onBehalfOfContentOwner - *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string} apiParams.onBehalfOfContentOwnerChannel - This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     * @param {string} apiParams.part - (Required) The *part* parameter specifies a comma-separated list of one or more liveBroadcast resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, contentDetails, and status.
     * @param {string} apiParams.streamId - Stream to bind, if not set unbind the current one.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.liveBroadcasts.bind = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/liveBroadcasts/bind', 'POST', apiParams, clientConfig);

    /**
     * Transition a broadcast to a given status.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.broadcastStatus - (Required) The status to which the broadcast is going to transition.
     * @param {string} apiParams.id - (Required) Broadcast to transition.
     * @param {string} apiParams.onBehalfOfContentOwner - *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string} apiParams.onBehalfOfContentOwnerChannel - This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     * @param {string} apiParams.part - (Required) The *part* parameter specifies a comma-separated list of one or more liveBroadcast resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, contentDetails, and status.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.liveBroadcasts.transition = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/liveBroadcasts/transition', 'POST', apiParams, clientConfig);

    /**
     * Insert cuepoints in a broadcast
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - Broadcast to insert ads to, or equivalently `external_video_id` for internal use.
     * @param {string} apiParams.onBehalfOfContentOwner - *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string} apiParams.onBehalfOfContentOwnerChannel - This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     * @param {string} apiParams.part - The *part* parameter specifies a comma-separated list of one or more liveBroadcast resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, contentDetails, and status.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.liveBroadcasts.insertCuepoint = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/liveBroadcasts/cuepoint', 'POST', apiParams, clientConfig);

    this.liveChatBans = {};

    /**
     * Inserts a new resource into this collection.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.part - (Required) The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response returns. Set the parameter value to snippet.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.liveChatBans.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/liveChat/bans', 'POST', apiParams, clientConfig);

    /**
     * Deletes a chat ban.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.liveChatBans.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/liveChat/bans', 'DELETE', apiParams, clientConfig);

    this.liveChatMessages = {};

    /**
     * Retrieves a list of resources, possibly filtered.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.hl - Specifies the localization language in which the system messages should be returned.
     * @param {string} apiParams.liveChatId - (Required) The id of the live chat for which comments should be returned.
     * @param {integer} apiParams.maxResults - The *maxResults* parameter specifies the maximum number of items that should be returned in the result set. Not used in the streaming RPC.
     * @param {string} apiParams.pageToken - The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken property identify other pages that could be retrieved.
     * @param {string} apiParams.part - (Required) The *part* parameter specifies the liveChatComment resource parts that the API response will include. Supported values are id, snippet, and authorDetails.
     * @param {integer} apiParams.profileImageSize - Specifies the size of the profile image that should be returned for each user.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.liveChatMessages.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/liveChat/messages', 'GET', apiParams, clientConfig);

    /**
     * Inserts a new resource into this collection.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.part - (Required) The *part* parameter serves two purposes. It identifies the properties that the write operation will set as well as the properties that the API response will include. Set the parameter value to snippet.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.liveChatMessages.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/liveChat/messages', 'POST', apiParams, clientConfig);

    /**
     * Deletes a chat message.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.liveChatMessages.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/liveChat/messages', 'DELETE', apiParams, clientConfig);

    /**
     * Transition a durable chat event.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - The ID that uniquely identify the chat message event to transition.
     * @param {string} apiParams.status - The status to which the chat event is going to transition.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.liveChatMessages.transition = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/liveChat/messages/transition', 'POST', apiParams, clientConfig);

    this.liveChatModerators = {};

    /**
     * Retrieves a list of resources, possibly filtered.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.liveChatId - (Required) The id of the live chat for which moderators should be returned.
     * @param {integer} apiParams.maxResults - The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.
     * @param {string} apiParams.pageToken - The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
     * @param {string} apiParams.part - (Required) The *part* parameter specifies the liveChatModerator resource parts that the API response will include. Supported values are id and snippet.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.liveChatModerators.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/liveChat/moderators', 'GET', apiParams, clientConfig);

    /**
     * Inserts a new resource into this collection.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.part - (Required) The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response returns. Set the parameter value to snippet.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.liveChatModerators.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/liveChat/moderators', 'POST', apiParams, clientConfig);

    /**
     * Deletes a chat moderator.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.liveChatModerators.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/liveChat/moderators', 'DELETE', apiParams, clientConfig);

    this.liveStreams = {};

    /**
     * Retrieve the list of streams associated with the given channel. --
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - Return LiveStreams with the given ids from Stubby or Apiary.
     * @param {integer} apiParams.maxResults - The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.
     * @param {boolean} apiParams.mine - 
     * @param {string} apiParams.onBehalfOfContentOwner - *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string} apiParams.onBehalfOfContentOwnerChannel - This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     * @param {string} apiParams.pageToken - The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
     * @param {string} apiParams.part - (Required) The *part* parameter specifies a comma-separated list of one or more liveStream resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, cdn, and status.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.liveStreams.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/liveStreams', 'GET', apiParams, clientConfig);

    /**
     * Inserts a new stream for the authenticated user.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.onBehalfOfContentOwner - *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string} apiParams.onBehalfOfContentOwnerChannel - This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     * @param {string} apiParams.part - (Required) The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. The part properties that you can include in the parameter value are id, snippet, cdn, content_details, and status.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.liveStreams.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/liveStreams', 'POST', apiParams, clientConfig);

    /**
     * Updates an existing stream for the authenticated user.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.onBehalfOfContentOwner - *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string} apiParams.onBehalfOfContentOwnerChannel - This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     * @param {string} apiParams.part - (Required) The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. The part properties that you can include in the parameter value are id, snippet, cdn, and status. Note that this method will override the existing values for all of the mutable properties that are contained in any parts that the parameter value specifies. If the request body does not specify a value for a mutable property, the existing value for that property will be removed.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.liveStreams.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/liveStreams', 'PUT', apiParams, clientConfig);

    /**
     * Deletes an existing stream for the authenticated user.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required)
     * @param {string} apiParams.onBehalfOfContentOwner - *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string} apiParams.onBehalfOfContentOwnerChannel - This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.liveStreams.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/liveStreams', 'DELETE', apiParams, clientConfig);

    this.members = {};

    /**
     * Retrieves a list of members that match the request criteria for a channel.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filterByMemberChannelId - Comma separated list of channel IDs. Only data about members that are part of this list will be included in the response.
     * @param {string} apiParams.hasAccessToLevel - Filter members in the results set to the ones that have access to a level.
     * @param {integer} apiParams.maxResults - The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.
     * @param {string} apiParams.mode - Parameter that specifies which channel members to return.
     * @param {string} apiParams.pageToken - The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
     * @param {string} apiParams.part - (Required) The *part* parameter specifies the member resource parts that the API response will include. Set the parameter value to snippet.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.members.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/members', 'GET', apiParams, clientConfig);

    this.membershipsLevels = {};

    /**
     * Retrieves a list of all pricing levels offered by a creator to the fans.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.part - (Required) The *part* parameter specifies the membershipsLevel resource parts that the API response will include. Supported values are id and snippet.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.membershipsLevels.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/membershipsLevels', 'GET', apiParams, clientConfig);

    this.playlists = {};

    /**
     * Retrieves a list of resources, possibly filtered.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.channelId - Return the playlists owned by the specified channel ID.
     * @param {string} apiParams.hl - Return content in specified language
     * @param {string} apiParams.id - Return the playlists with the given IDs for Stubby or Apiary.
     * @param {integer} apiParams.maxResults - The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.
     * @param {boolean} apiParams.mine - Return the playlists owned by the authenticated user.
     * @param {string} apiParams.onBehalfOfContentOwner - *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string} apiParams.onBehalfOfContentOwnerChannel - This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     * @param {string} apiParams.pageToken - The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
     * @param {string} apiParams.part - (Required) The *part* parameter specifies a comma-separated list of one or more playlist resource properties that the API response will include. If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a playlist resource, the snippet property contains properties like author, title, description, tags, and timeCreated. As such, if you set *part=snippet*, the API response will contain all of those properties.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.playlists.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/playlists', 'GET', apiParams, clientConfig);

    /**
     * Inserts a new resource into this collection.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.onBehalfOfContentOwner - *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string} apiParams.onBehalfOfContentOwnerChannel - This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     * @param {string} apiParams.part - (Required) The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.playlists.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/playlists', 'POST', apiParams, clientConfig);

    /**
     * Updates an existing resource.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.onBehalfOfContentOwner - *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string} apiParams.part - (Required) The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. Note that this method will override the existing values for mutable properties that are contained in any parts that the request body specifies. For example, a playlist's description is contained in the snippet part, which must be included in the request body. If the request does not specify a value for the snippet.description property, the playlist's existing description will be deleted.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.playlists.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/playlists', 'PUT', apiParams, clientConfig);

    /**
     * Deletes a resource.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required)
     * @param {string} apiParams.onBehalfOfContentOwner - *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.playlists.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/playlists', 'DELETE', apiParams, clientConfig);

    this.playlistItems = {};

    /**
     * Retrieves a list of resources, possibly filtered.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - 
     * @param {integer} apiParams.maxResults - The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.
     * @param {string} apiParams.onBehalfOfContentOwner - *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string} apiParams.pageToken - The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
     * @param {string} apiParams.part - (Required) The *part* parameter specifies a comma-separated list of one or more playlistItem resource properties that the API response will include. If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a playlistItem resource, the snippet property contains numerous fields, including the title, description, position, and resourceId properties. As such, if you set *part=snippet*, the API response will contain all of those properties.
     * @param {string} apiParams.playlistId - Return the playlist items within the given playlist.
     * @param {string} apiParams.videoId - Return the playlist items associated with the given video ID.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.playlistItems.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/playlistItems', 'GET', apiParams, clientConfig);

    /**
     * Deletes a resource.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required)
     * @param {string} apiParams.onBehalfOfContentOwner - *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.playlistItems.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/playlistItems', 'DELETE', apiParams, clientConfig);

    /**
     * Inserts a new resource into this collection.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.onBehalfOfContentOwner - *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string} apiParams.part - (Required) The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.playlistItems.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/playlistItems', 'POST', apiParams, clientConfig);

    /**
     * Updates an existing resource.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.onBehalfOfContentOwner - *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string} apiParams.part - (Required) The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. Note that this method will override the existing values for all of the mutable properties that are contained in any parts that the parameter value specifies. For example, a playlist item can specify a start time and end time, which identify the times portion of the video that should play when users watch the video in the playlist. If your request is updating a playlist item that sets these values, and the request's part parameter value includes the contentDetails part, the playlist item's start and end times will be updated to whatever value the request body specifies. If the request body does not specify values, the existing start and end times will be removed and replaced with the default settings.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.playlistItems.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/playlistItems', 'PUT', apiParams, clientConfig);

    this.playlistImages = {};

    /**
     * Retrieves a list of resources, possibly filtered.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.maxResults - The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.
     * @param {string} apiParams.onBehalfOfContentOwner - *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string} apiParams.onBehalfOfContentOwnerChannel - This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     * @param {string} apiParams.pageToken - The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
     * @param {string} apiParams.parent - Return PlaylistImages for this playlist id.
     * @param {string} apiParams.part - The *part* parameter specifies a comma-separated list of one or more playlistImage resource properties that the API response will include. If the parameter identifies a property that contains child properties, the child properties will be included in the response.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.playlistImages.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/playlistImages', 'GET', apiParams, clientConfig);

    /**
     * Inserts a new resource into this collection.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.onBehalfOfContentOwner - *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string} apiParams.onBehalfOfContentOwnerChannel - This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     * @param {string} apiParams.part - The *part* parameter specifies the properties that the API response will include.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.playlistImages.insert = async (apiParams = {}, clientConfig = {}) => {
      // If apiParams.media is provided, use the upload path; otherwise, use the standard path.
      const path = apiParams.media ? '/upload/youtube/v3/playlistImages' : 'youtube/v3/playlistImages';
      return this._makeRequest(path, 'POST', apiParams, clientConfig);
    };

    /**
     * Updates an existing resource.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.onBehalfOfContentOwner - *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string} apiParams.part - The *part* parameter specifies the properties that the API response will include.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.playlistImages.update = async (apiParams = {}, clientConfig = {}) => {
      // If apiParams.media is provided, use the upload path; otherwise, use the standard path.
      const path = apiParams.media ? '/upload/youtube/v3/playlistImages' : 'youtube/v3/playlistImages';
      return this._makeRequest(path, 'PUT', apiParams, clientConfig);
    };

    /**
     * Deletes a resource.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - Id to identify this image. This is returned from by the List method.
     * @param {string} apiParams.onBehalfOfContentOwner - *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.playlistImages.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/playlistImages', 'DELETE', apiParams, clientConfig);

    this.search = {};

    /**
     * Retrieves a list of search resources
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.channelId - Filter on resources belonging to this channelId.
     * @param {string} apiParams.channelType - Add a filter on the channel search.
     * @param {string} apiParams.eventType - Filter on the livestream status of the videos.
     * @param {boolean} apiParams.forContentOwner - Search owned by a content owner.
     * @param {boolean} apiParams.forDeveloper - Restrict the search to only retrieve videos uploaded using the project id of the authenticated user.
     * @param {boolean} apiParams.forMine - Search for the private videos of the authenticated user.
     * @param {string} apiParams.location - Filter on location of the video
     * @param {string} apiParams.locationRadius - Filter on distance from the location (specified above).
     * @param {integer} apiParams.maxResults - The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.
     * @param {string} apiParams.onBehalfOfContentOwner - *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string} apiParams.order - Sort order of the results.
     * @param {string} apiParams.pageToken - The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
     * @param {string} apiParams.part - (Required) The *part* parameter specifies a comma-separated list of one or more search resource properties that the API response will include. Set the parameter value to snippet.
     * @param {string} apiParams.publishedAfter - Filter on resources published after this date.
     * @param {string} apiParams.publishedBefore - Filter on resources published before this date.
     * @param {string} apiParams.q - Textual search terms to match.
     * @param {string} apiParams.regionCode - Display the content as seen by viewers in this country.
     * @param {string} apiParams.relevanceLanguage - Return results relevant to this language.
     * @param {string} apiParams.safeSearch - Indicates whether the search results should include restricted content as well as standard content.
     * @param {string} apiParams.topicId - Restrict results to a particular topic.
     * @param {string} apiParams.type - Restrict results to a particular set of resource types from One Platform.
     * @param {string} apiParams.videoCaption - Filter on the presence of captions on the videos.
     * @param {string} apiParams.videoCategoryId - Filter on videos in a specific category.
     * @param {string} apiParams.videoDefinition - Filter on the definition of the videos.
     * @param {string} apiParams.videoDimension - Filter on 3d videos.
     * @param {string} apiParams.videoDuration - Filter on the duration of the videos.
     * @param {string} apiParams.videoEmbeddable - Filter on embeddable videos.
     * @param {string} apiParams.videoLicense - Filter on the license of the videos.
     * @param {string} apiParams.videoPaidProductPlacement - 
     * @param {string} apiParams.videoSyndicated - Filter on syndicated videos.
     * @param {string} apiParams.videoType - Filter on videos of a specific type.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.search.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/search', 'GET', apiParams, clientConfig);

    this.subscriptions = {};

    /**
     * Retrieves a list of resources, possibly filtered.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.channelId - Return the subscriptions of the given channel owner.
     * @param {string} apiParams.forChannelId - Return the subscriptions to the subset of these channels that the authenticated user is subscribed to.
     * @param {string} apiParams.id - Return the subscriptions with the given IDs for Stubby or Apiary.
     * @param {integer} apiParams.maxResults - The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.
     * @param {boolean} apiParams.mine - Flag for returning the subscriptions of the authenticated user.
     * @param {boolean} apiParams.myRecentSubscribers - 
     * @param {boolean} apiParams.mySubscribers - Return the subscribers of the given channel owner.
     * @param {string} apiParams.onBehalfOfContentOwner - *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string} apiParams.onBehalfOfContentOwnerChannel - This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     * @param {string} apiParams.order - The order of the returned subscriptions
     * @param {string} apiParams.pageToken - The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
     * @param {string} apiParams.part - (Required) The *part* parameter specifies a comma-separated list of one or more subscription resource properties that the API response will include. If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a subscription resource, the snippet property contains other properties, such as a display title for the subscription. If you set *part=snippet*, the API response will also contain all of those nested properties.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.subscriptions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/subscriptions', 'GET', apiParams, clientConfig);

    /**
     * Deletes a resource.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.subscriptions.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/subscriptions', 'DELETE', apiParams, clientConfig);

    /**
     * Inserts a new resource into this collection.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.part - (Required) The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.subscriptions.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/subscriptions', 'POST', apiParams, clientConfig);

    this.superChatEvents = {};

    /**
     * Retrieves a list of resources, possibly filtered.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.hl - Return rendered funding amounts in specified language.
     * @param {integer} apiParams.maxResults - The *maxResults* parameter specifies the maximum number of items that should be returned in the result set.
     * @param {string} apiParams.pageToken - The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved.
     * @param {string} apiParams.part - (Required) The *part* parameter specifies the superChatEvent resource parts that the API response will include. This parameter is currently not supported.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.superChatEvents.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/superChatEvents', 'GET', apiParams, clientConfig);

    this.tests = {};

    /**
     * POST method.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.externalChannelId - 
     * @param {string} apiParams.part - (Required)
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.tests.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/tests', 'POST', apiParams, clientConfig);

    this.thirdPartyLinks = {};

    /**
     * Retrieves a list of resources, possibly filtered.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.externalChannelId - Channel ID to which changes should be applied, for delegation.
     * @param {string} apiParams.linkingToken - Get a third party link with the given linking token.
     * @param {string} apiParams.part - (Required) The *part* parameter specifies the thirdPartyLink resource parts that the API response will include. Supported values are linkingToken, status, and snippet.
     * @param {string} apiParams.type - Get a third party link of the given type.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.thirdPartyLinks.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/thirdPartyLinks', 'GET', apiParams, clientConfig);

    /**
     * Inserts a new resource into this collection.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.externalChannelId - Channel ID to which changes should be applied, for delegation.
     * @param {string} apiParams.part - (Required) The *part* parameter specifies the thirdPartyLink resource parts that the API request and response will include. Supported values are linkingToken, status, and snippet.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.thirdPartyLinks.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/thirdPartyLinks', 'POST', apiParams, clientConfig);

    /**
     * Updates an existing resource.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.externalChannelId - Channel ID to which changes should be applied, for delegation.
     * @param {string} apiParams.part - (Required) The *part* parameter specifies the thirdPartyLink resource parts that the API request and response will include. Supported values are linkingToken, status, and snippet.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.thirdPartyLinks.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/thirdPartyLinks', 'PUT', apiParams, clientConfig);

    /**
     * Deletes a resource.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.externalChannelId - Channel ID to which changes should be applied, for delegation.
     * @param {string} apiParams.linkingToken - (Required) Delete the partner links with the given linking token.
     * @param {string} apiParams.part - Do not use. Required for compatibility.
     * @param {string} apiParams.type - (Required) Type of the link to be deleted.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.thirdPartyLinks.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/thirdPartyLinks', 'DELETE', apiParams, clientConfig);

    this.thumbnails = {};

    /**
     * As this is not an insert in a strict sense (it supports uploading/setting of a thumbnail for multiple videos, which doesn't result in creation of a single resource), I use a custom verb here.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.onBehalfOfContentOwner - *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string} apiParams.videoId - (Required) Returns the Thumbnail with the given video IDs for Stubby or Apiary.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.thumbnails.set = async (apiParams = {}, clientConfig = {}) => {
      // If apiParams.media is provided, use the upload path; otherwise, use the standard path.
      const path = apiParams.media ? '/upload/youtube/v3/thumbnails/set' : 'youtube/v3/thumbnails/set';
      return this._makeRequest(path, 'POST', apiParams, clientConfig);
    };

    this.videos = {};

    /**
     * Retrieves a list of resources, possibly filtered.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.chart - Return the videos that are in the specified chart.
     * @param {string} apiParams.hl - Stands for "host language". Specifies the localization language of the metadata to be filled into snippet.localized. The field is filled with the default metadata if there is no localization in the specified language. The parameter value must be a language code included in the list returned by the i18nLanguages.list method (e.g. en_US, es_MX).
     * @param {string} apiParams.id - Return videos with the given ids.
     * @param {string} apiParams.locale - 
     * @param {integer} apiParams.maxHeight - 
     * @param {integer} apiParams.maxResults - The *maxResults* parameter specifies the maximum number of items that should be returned in the result set. *Note:* This parameter is supported for use in conjunction with the myRating and chart parameters, but it is not supported for use in conjunction with the id parameter.
     * @param {integer} apiParams.maxWidth - Return the player with maximum height specified in
     * @param {string} apiParams.myRating - Return videos liked/disliked by the authenticated user. Does not support RateType.RATED_TYPE_NONE.
     * @param {string} apiParams.onBehalfOfContentOwner - *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string} apiParams.pageToken - The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved. *Note:* This parameter is supported for use in conjunction with the myRating and chart parameters, but it is not supported for use in conjunction with the id parameter.
     * @param {string} apiParams.part - (Required) The *part* parameter specifies a comma-separated list of one or more video resource properties that the API response will include. If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a video resource, the snippet property contains the channelId, title, description, tags, and categoryId properties. As such, if you set *part=snippet*, the API response will contain all of those properties.
     * @param {string} apiParams.regionCode - Use a chart that is specific to the specified region
     * @param {string} apiParams.videoCategoryId - Use chart that is specific to the specified video category
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.videos.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/videos', 'GET', apiParams, clientConfig);

    /**
     * Inserts a new resource into this collection.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.autoLevels - Should auto-levels be applied to the upload.
     * @param {boolean} apiParams.notifySubscribers - Notify the channel subscribers about the new video. As default, the notification is enabled.
     * @param {string} apiParams.onBehalfOfContentOwner - *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string} apiParams.onBehalfOfContentOwnerChannel - This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel.
     * @param {string} apiParams.part - (Required) The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. Note that not all parts contain properties that can be set when inserting or updating a video. For example, the statistics object encapsulates statistics that YouTube calculates for a video and does not contain values that you can set or modify. If the parameter value specifies a part that does not contain mutable values, that part will still be included in the API response.
     * @param {boolean} apiParams.stabilize - Should stabilize be applied to the upload.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.videos.insert = async (apiParams = {}, clientConfig = {}) => {
      // If apiParams.media is provided, use the upload path; otherwise, use the standard path.
      const path = apiParams.media ? '/upload/youtube/v3/videos' : 'youtube/v3/videos';
      return this._makeRequest(path, 'POST', apiParams, clientConfig);
    };

    /**
     * Updates an existing resource.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.onBehalfOfContentOwner - *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {string} apiParams.part - (Required) The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. Note that this method will override the existing values for all of the mutable properties that are contained in any parts that the parameter value specifies. For example, a video's privacy setting is contained in the status part. As such, if your request is updating a private video, and the request's part parameter value includes the status part, the video's privacy setting will be updated to whatever value the request body specifies. If the request body does not specify a value, the existing privacy setting will be removed and the video will revert to the default privacy setting. In addition, not all parts contain properties that can be set when inserting or updating a video. For example, the statistics object encapsulates statistics that YouTube calculates for a video and does not contain values that you can set or modify. If the parameter value specifies a part that does not contain mutable values, that part will still be included in the API response.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.videos.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/videos', 'PUT', apiParams, clientConfig);

    /**
     * Deletes a resource.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required)
     * @param {string} apiParams.onBehalfOfContentOwner - *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.videos.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/videos', 'DELETE', apiParams, clientConfig);

    /**
     * Report abuse for a video.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.onBehalfOfContentOwner - *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.videos.reportAbuse = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/videos/reportAbuse', 'POST', apiParams, clientConfig);

    /**
     * Adds a like or dislike rating to a video or removes a rating from a video.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required)
     * @param {string} apiParams.rating - (Required)
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.videos.rate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/videos/rate', 'POST', apiParams, clientConfig);

    /**
     * Retrieves the ratings that the authorized user gave to a list of specified videos.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required)
     * @param {string} apiParams.onBehalfOfContentOwner - *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.videos.getRating = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/videos/getRating', 'GET', apiParams, clientConfig);

    this.videoAbuseReportReasons = {};

    /**
     * Retrieves a list of resources, possibly filtered.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.hl - 
     * @param {string} apiParams.part - (Required) The *part* parameter specifies the videoCategory resource parts that the API response will include. Supported values are id and snippet.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.videoAbuseReportReasons.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/videoAbuseReportReasons', 'GET', apiParams, clientConfig);

    this.videoCategories = {};

    /**
     * Retrieves a list of resources, possibly filtered.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.hl - 
     * @param {string} apiParams.id - Returns the video categories with the given IDs for Stubby or Apiary.
     * @param {string} apiParams.part - (Required) The *part* parameter specifies the videoCategory resource properties that the API response will include. Set the parameter value to snippet.
     * @param {string} apiParams.regionCode - 
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.videoCategories.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/videoCategories', 'GET', apiParams, clientConfig);

    this.videoTrainability = {};

    /**
     * Returns the trainability status of a video.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - The ID of the video to retrieve.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.videoTrainability.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/videoTrainability', 'GET', apiParams, clientConfig);

    this.watermarks = {};

    /**
     * Allows upload of watermark image and setting it for a channel.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.channelId - (Required)
     * @param {string} apiParams.onBehalfOfContentOwner - *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.watermarks.set = async (apiParams = {}, clientConfig = {}) => {
      // If apiParams.media is provided, use the upload path; otherwise, use the standard path.
      const path = apiParams.media ? '/upload/youtube/v3/watermarks/set' : 'youtube/v3/watermarks/set';
      return this._makeRequest(path, 'POST', apiParams, clientConfig);
    };

    /**
     * Allows removal of channel watermark.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.channelId - (Required)
     * @param {string} apiParams.onBehalfOfContentOwner - *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.watermarks.unset = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/watermarks/unset', 'POST', apiParams, clientConfig);
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
