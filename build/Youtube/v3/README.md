# YouTube Data API v3 - Apps Script Client Library

Auto-generated client library for using the **YouTube Data API v3 (version: v3)** in Google Apps Script.

## Metadata

- **Last Checked:** Mon, 04 Aug 2025 20:56:15 GMT
- **Last Modified:** Mon, 04 Aug 2025 20:56:15 GMT
- **Created:** Sun, 20 Jul 2025 17:03:32 GMT



---

## API Reference

### `abuseReports`

#### `abuseReports.insert()`

Inserts a new resource into this collection.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.part` | `string` | Yes | The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. |
| `params.resource` | `object` | Yes | The request body. |

### `activities`

#### `activities.list()`

Retrieves a list of resources, possibly filtered.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.channelId` | `string` | No |  |
| `params.home` | `boolean` | No |  |
| `params.mine` | `boolean` | No |  |
| `params.publishedAfter` | `string` | No |  |
| `params.publishedBefore` | `string` | No |  |
| `params.regionCode` | `string` | No |  |
| `params.maxResults` | `integer` | No | The *maxResults* parameter specifies the maximum number of items that should be returned in the result set. |
| `params.pageToken` | `string` | No | The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved. |
| `params.part` | `string` | Yes | The *part* parameter specifies a comma-separated list of one or more activity resource properties that the API response will include. If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in an activity resource, the snippet property contains other properties that identify the type of activity, a display title for the activity, and so forth. If you set *part=snippet*, the API response will also contain all of those nested properties. |

### `captions`

#### `captions.list()`

Retrieves a list of resources, possibly filtered.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.id` | `string` | No | Returns the captions with the given IDs for Stubby or Apiary. |
| `params.videoId` | `string` | Yes | Returns the captions for the specified video. |
| `params.part` | `string` | Yes | The *part* parameter specifies a comma-separated list of one or more caption resource parts that the API response will include. The part names that you can include in the parameter value are id and snippet. |
| `params.onBehalfOf` | `string` | No | ID of the Google+ Page for the channel that the request is on behalf of. |
| `params.onBehalfOfContentOwner` | `string` | No | *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner. |

#### `captions.insert()`

Inserts a new resource into this collection.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.sync` | `boolean` | No | Extra parameter to allow automatically syncing the uploaded caption/transcript with the audio. |
| `params.part` | `string` | Yes | The *part* parameter specifies the caption resource parts that the API response will include. Set the parameter value to snippet. |
| `params.onBehalfOf` | `string` | No | ID of the Google+ Page for the channel that the request is be on behalf of |
| `params.onBehalfOfContentOwner` | `string` | No | *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner. |
| `params.resource` | `object` | Yes | The request body. |

#### `captions.update()`

Updates an existing resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.sync` | `boolean` | No | Extra parameter to allow automatically syncing the uploaded caption/transcript with the audio. |
| `params.part` | `string` | Yes | The *part* parameter specifies a comma-separated list of one or more caption resource parts that the API response will include. The part names that you can include in the parameter value are id and snippet. |
| `params.onBehalfOf` | `string` | No | ID of the Google+ Page for the channel that the request is on behalf of. |
| `params.onBehalfOfContentOwner` | `string` | No | *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner. |
| `params.resource` | `object` | Yes | The request body. |

#### `captions.delete()`

Deletes a resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.id` | `string` | Yes |  |
| `params.onBehalfOf` | `string` | No | ID of the Google+ Page for the channel that the request is be on behalf of |
| `params.onBehalfOfContentOwner` | `string` | No | *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner. |

#### `captions.download()`

Downloads a caption track.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.id` | `string` | Yes | The ID of the caption track to download, required for One Platform. |
| `params.tlang` | `string` | No | tlang is the language code; machine translate the captions into this language. |
| `params.tfmt` | `string` | No | Convert the captions into this format. Supported options are sbv, srt, and vtt. |
| `params.onBehalfOf` | `string` | No | ID of the Google+ Page for the channel that the request is be on behalf of |
| `params.onBehalfOfContentOwner` | `string` | No | *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner. |

### `channels`

#### `channels.list()`

Retrieves a list of resources, possibly filtered.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.mine` | `boolean` | No | Return the ids of channels owned by the authenticated user. |
| `params.id` | `string` | No | Return the channels with the specified IDs. |
| `params.mySubscribers` | `boolean` | No | Return the channels subscribed to the authenticated user |
| `params.categoryId` | `string` | No | Return the channels within the specified guide category ID. |
| `params.managedByMe` | `boolean` | No | Return the channels managed by the authenticated user. |
| `params.forUsername` | `string` | No | Return the channel associated with a YouTube username. |
| `params.forHandle` | `string` | No | Return the channel associated with a YouTube handle. |
| `params.hl` | `string` | No | Stands for "host language". Specifies the localization language of the metadata to be filled into snippet.localized. The field is filled with the default metadata if there is no localization in the specified language. The parameter value must be a language code included in the list returned by the i18nLanguages.list method (e.g. en_US, es_MX). |
| `params.maxResults` | `integer` | No | The *maxResults* parameter specifies the maximum number of items that should be returned in the result set. |
| `params.pageToken` | `string` | No | The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved. |
| `params.part` | `string` | Yes | The *part* parameter specifies a comma-separated list of one or more channel resource properties that the API response will include. If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a channel resource, the contentDetails property contains other properties, such as the uploads properties. As such, if you set *part=contentDetails*, the API response will also contain all of those nested properties. |
| `params.onBehalfOfContentOwner` | `string` | No | *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner. |

#### `channels.update()`

Updates an existing resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.part` | `string` | Yes | The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. The API currently only allows the parameter value to be set to either brandingSettings or invideoPromotion. (You cannot update both of those parts with a single request.) Note that this method overrides the existing values for all of the mutable properties that are contained in any parts that the parameter value specifies. |
| `params.onBehalfOfContentOwner` | `string` | No | The *onBehalfOfContentOwner* parameter indicates that the authenticated user is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with needs to be linked to the specified YouTube content owner. |
| `params.resource` | `object` | Yes | The request body. |

### `channelBanners`

#### `channelBanners.insert()`

Inserts a new resource into this collection.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.channelId` | `string` | No | Unused, channel_id is currently derived from the security context of the requestor. |
| `params.onBehalfOfContentOwner` | `string` | No | *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner. |
| `params.onBehalfOfContentOwnerChannel` | `string` | No | This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel. |
| `params.resource` | `object` | Yes | The request body. |

### `channelSections`

#### `channelSections.list()`

Retrieves a list of resources, possibly filtered.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.id` | `string` | No | Return the ChannelSections with the given IDs for Stubby or Apiary. |
| `params.mine` | `boolean` | No | Return the ChannelSections owned by the authenticated user. |
| `params.channelId` | `string` | No | Return the ChannelSections owned by the specified channel ID. |
| `params.hl` | `string` | No | Return content in specified language |
| `params.part` | `string` | Yes | The *part* parameter specifies a comma-separated list of one or more channelSection resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, and contentDetails. If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a channelSection resource, the snippet property contains other properties, such as a display title for the channelSection. If you set *part=snippet*, the API response will also contain all of those nested properties. |
| `params.onBehalfOfContentOwner` | `string` | No | *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner. |

#### `channelSections.insert()`

Inserts a new resource into this collection.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.part` | `string` | Yes | The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. The part names that you can include in the parameter value are snippet and contentDetails. |
| `params.onBehalfOfContentOwner` | `string` | No | *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner. |
| `params.onBehalfOfContentOwnerChannel` | `string` | No | This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel. |
| `params.resource` | `object` | Yes | The request body. |

#### `channelSections.update()`

Updates an existing resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.part` | `string` | Yes | The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. The part names that you can include in the parameter value are snippet and contentDetails. |
| `params.onBehalfOfContentOwner` | `string` | No | *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner. |
| `params.resource` | `object` | Yes | The request body. |

#### `channelSections.delete()`

Deletes a resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.id` | `string` | Yes |  |
| `params.onBehalfOfContentOwner` | `string` | No | *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner. |

### `comments`

#### `comments.list()`

Retrieves a list of resources, possibly filtered.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.id` | `string` | No | Returns the comments with the given IDs for One Platform. |
| `params.parentId` | `string` | No | Returns replies to the specified comment. Note, currently YouTube features only one level of replies (ie replies to top level comments). However replies to replies may be supported in the future. |
| `params.textFormat` | `string` | No | The requested text format for the returned comments. |
| `params.maxResults` | `integer` | No | The *maxResults* parameter specifies the maximum number of items that should be returned in the result set. |
| `params.pageToken` | `string` | No | The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved. |
| `params.part` | `string` | Yes | The *part* parameter specifies a comma-separated list of one or more comment resource properties that the API response will include. |

#### `comments.insert()`

Inserts a new resource into this collection.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.part` | `string` | Yes | The *part* parameter identifies the properties that the API response will include. Set the parameter value to snippet. The snippet part has a quota cost of 2 units. |
| `params.resource` | `object` | Yes | The request body. |

#### `comments.update()`

Updates an existing resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.part` | `string` | Yes | The *part* parameter identifies the properties that the API response will include. You must at least include the snippet part in the parameter value since that part contains all of the properties that the API request can update. |
| `params.resource` | `object` | Yes | The request body. |

#### `comments.delete()`

Deletes a resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.id` | `string` | Yes |  |

#### `comments.setModerationStatus()`

Sets the moderation status of one or more comments.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.id` | `string` | Yes | Modifies the moderation status of the comments with the given IDs |
| `params.moderationStatus` | `string` | Yes | Specifies the requested moderation status. Note, comments can be in statuses, which are not available through this call. For example, this call does not allow to mark a comment as 'likely spam'. Valid values: 'heldForReview', 'published' or 'rejected'. |
| `params.banAuthor` | `boolean` | No | If set to true the author of the comment gets added to the ban list. This means all future comments of the author will autmomatically be rejected. Only valid in combination with STATUS_REJECTED. |

#### `comments.markAsSpam()`

Expresses the caller's opinion that one or more comments should be flagged as spam.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.id` | `string` | Yes | Flags the comments with the given IDs as spam in the caller's opinion. |

### `commentThreads`

#### `commentThreads.list()`

Retrieves a list of resources, possibly filtered.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.id` | `string` | No | Returns the comment threads with the given IDs for Stubby or Apiary. |
| `params.videoId` | `string` | No | Returns the comment threads of the specified video. |
| `params.postId` | `string` | No | Returns the comment threads of the specified post. |
| `params.channelId` | `string` | No | Returns the comment threads for all the channel comments (ie does not include comments left on videos). |
| `params.allThreadsRelatedToChannelId` | `string` | No | Returns the comment threads of all videos of the channel and the channel comments as well. |
| `params.moderationStatus` | `string` | No | Limits the returned comment threads to those with the specified moderation status. Not compatible with the 'id' filter. Valid values: published, heldForReview, likelySpam. |
| `params.searchTerms` | `string` | No | Limits the returned comment threads to those matching the specified key words. Not compatible with the 'id' filter. |
| `params.textFormat` | `string` | No | The requested text format for the returned comments. |
| `params.order` | `string` | No |  |
| `params.maxResults` | `integer` | No | The *maxResults* parameter specifies the maximum number of items that should be returned in the result set. |
| `params.pageToken` | `string` | No | The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved. |
| `params.part` | `string` | Yes | The *part* parameter specifies a comma-separated list of one or more commentThread resource properties that the API response will include. |

#### `commentThreads.insert()`

Inserts a new resource into this collection.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.part` | `string` | Yes | The *part* parameter identifies the properties that the API response will include. Set the parameter value to snippet. The snippet part has a quota cost of 2 units. |
| `params.resource` | `object` | Yes | The request body. |

### `youtube`

### `youtube.v3`

#### `youtube.v3.updateCommentThreads()`

Updates an existing resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.part` | `string` | No | The *part* parameter specifies a comma-separated list of commentThread resource properties that the API response will include. You must at least include the snippet part in the parameter value since that part contains all of the properties that the API request can update. |
| `params.resource` | `object` | Yes | The request body. |

### `youtube.v3.liveChat`

### `youtube.v3.liveChat.messages`

#### `youtube.v3.liveChat.messages.stream()`

Allows a user to load live chat through a server-streamed RPC.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.liveChatId` | `string` | No | The id of the live chat for which comments should be returned. |
| `params.hl` | `string` | No | Specifies the localization language in which the system messages should be returned. |
| `params.profileImageSize` | `integer` | No | Specifies the size of the profile image that should be returned for each user. |
| `params.maxResults` | `integer` | No | The *maxResults* parameter specifies the maximum number of items that should be returned in the result set. Not used in the streaming RPC. |
| `params.pageToken` | `string` | No | The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken property identify other pages that could be retrieved. |
| `params.part` | `string` | No | The *part* parameter specifies the liveChatComment resource parts that the API response will include. Supported values are id, snippet, and authorDetails. |

### `i18nLanguages`

#### `i18nLanguages.list()`

Retrieves a list of resources, possibly filtered.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.hl` | `string` | No |  |
| `params.part` | `string` | Yes | The *part* parameter specifies the i18nLanguage resource properties that the API response will include. Set the parameter value to snippet. |

### `i18nRegions`

#### `i18nRegions.list()`

Retrieves a list of resources, possibly filtered.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.hl` | `string` | No |  |
| `params.part` | `string` | Yes | The *part* parameter specifies the i18nRegion resource properties that the API response will include. Set the parameter value to snippet. |

### `liveBroadcasts`

#### `liveBroadcasts.list()`

Retrieve the list of broadcasts associated with the given channel.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.broadcastStatus` | `string` | No | Return broadcasts with a certain status, e.g. active broadcasts. |
| `params.id` | `string` | No | Return broadcasts with the given ids from Stubby or Apiary. |
| `params.mine` | `boolean` | No |  |
| `params.broadcastType` | `string` | No | Return only broadcasts with the selected type. |
| `params.maxResults` | `integer` | No | The *maxResults* parameter specifies the maximum number of items that should be returned in the result set. |
| `params.pageToken` | `string` | No | The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved. |
| `params.part` | `string` | Yes | The *part* parameter specifies a comma-separated list of one or more liveBroadcast resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, contentDetails, status and statistics. |
| `params.onBehalfOfContentOwner` | `string` | No | *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner. |
| `params.onBehalfOfContentOwnerChannel` | `string` | No | This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel. |

#### `liveBroadcasts.insert()`

Inserts a new stream for the authenticated user.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.part` | `string` | Yes | The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. The part properties that you can include in the parameter value are id, snippet, contentDetails, and status. |
| `params.onBehalfOfContentOwner` | `string` | No | *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner. |
| `params.onBehalfOfContentOwnerChannel` | `string` | No | This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel. |
| `params.resource` | `object` | Yes | The request body. |

#### `liveBroadcasts.update()`

Updates an existing broadcast for the authenticated user.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.part` | `string` | Yes | The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. The part properties that you can include in the parameter value are id, snippet, contentDetails, and status. Note that this method will override the existing values for all of the mutable properties that are contained in any parts that the parameter value specifies. For example, a broadcast's privacy status is defined in the status part. As such, if your request is updating a private or unlisted broadcast, and the request's part parameter value includes the status part, the broadcast's privacy setting will be updated to whatever value the request body specifies. If the request body does not specify a value, the existing privacy setting will be removed and the broadcast will revert to the default privacy setting. |
| `params.onBehalfOfContentOwner` | `string` | No | *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner. |
| `params.onBehalfOfContentOwnerChannel` | `string` | No | This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel. |
| `params.resource` | `object` | Yes | The request body. |

#### `liveBroadcasts.delete()`

Delete a given broadcast.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.id` | `string` | Yes | Broadcast to delete. |
| `params.onBehalfOfContentOwner` | `string` | No | *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner. |
| `params.onBehalfOfContentOwnerChannel` | `string` | No | This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel. |

#### `liveBroadcasts.bind()`

Bind a broadcast to a stream.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.id` | `string` | Yes | Broadcast to bind to the stream |
| `params.streamId` | `string` | No | Stream to bind, if not set unbind the current one. |
| `params.part` | `string` | Yes | The *part* parameter specifies a comma-separated list of one or more liveBroadcast resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, contentDetails, and status. |
| `params.onBehalfOfContentOwner` | `string` | No | *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner. |
| `params.onBehalfOfContentOwnerChannel` | `string` | No | This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel. |

#### `liveBroadcasts.transition()`

Transition a broadcast to a given status.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.id` | `string` | Yes | Broadcast to transition. |
| `params.broadcastStatus` | `string` | Yes | The status to which the broadcast is going to transition. |
| `params.part` | `string` | Yes | The *part* parameter specifies a comma-separated list of one or more liveBroadcast resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, contentDetails, and status. |
| `params.onBehalfOfContentOwner` | `string` | No | *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner. |
| `params.onBehalfOfContentOwnerChannel` | `string` | No | This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel. |

#### `liveBroadcasts.insertCuepoint()`

Insert cuepoints in a broadcast

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.id` | `string` | No | Broadcast to insert ads to, or equivalently `external_video_id` for internal use. |
| `params.part` | `string` | No | The *part* parameter specifies a comma-separated list of one or more liveBroadcast resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, contentDetails, and status. |
| `params.onBehalfOfContentOwner` | `string` | No | *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner. |
| `params.onBehalfOfContentOwnerChannel` | `string` | No | This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel. |
| `params.resource` | `object` | Yes | The request body. |

### `liveChatBans`

#### `liveChatBans.insert()`

Inserts a new resource into this collection.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.part` | `string` | Yes | The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response returns. Set the parameter value to snippet. |
| `params.resource` | `object` | Yes | The request body. |

#### `liveChatBans.delete()`

Deletes a chat ban.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.id` | `string` | Yes |  |

### `liveChatMessages`

#### `liveChatMessages.list()`

Retrieves a list of resources, possibly filtered.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.liveChatId` | `string` | Yes | The id of the live chat for which comments should be returned. |
| `params.hl` | `string` | No | Specifies the localization language in which the system messages should be returned. |
| `params.profileImageSize` | `integer` | No | Specifies the size of the profile image that should be returned for each user. |
| `params.maxResults` | `integer` | No | The *maxResults* parameter specifies the maximum number of items that should be returned in the result set. Not used in the streaming RPC. |
| `params.pageToken` | `string` | No | The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken property identify other pages that could be retrieved. |
| `params.part` | `string` | Yes | The *part* parameter specifies the liveChatComment resource parts that the API response will include. Supported values are id, snippet, and authorDetails. |

#### `liveChatMessages.insert()`

Inserts a new resource into this collection.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.part` | `string` | Yes | The *part* parameter serves two purposes. It identifies the properties that the write operation will set as well as the properties that the API response will include. Set the parameter value to snippet. |
| `params.resource` | `object` | Yes | The request body. |

#### `liveChatMessages.delete()`

Deletes a chat message.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.id` | `string` | Yes |  |

#### `liveChatMessages.transition()`

Transition a durable chat event.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.id` | `string` | No | The ID that uniquely identify the chat message event to transition. |
| `params.status` | `string` | No | The status to which the chat event is going to transition. |

### `liveChatModerators`

#### `liveChatModerators.list()`

Retrieves a list of resources, possibly filtered.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.liveChatId` | `string` | Yes | The id of the live chat for which moderators should be returned. |
| `params.maxResults` | `integer` | No | The *maxResults* parameter specifies the maximum number of items that should be returned in the result set. |
| `params.pageToken` | `string` | No | The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved. |
| `params.part` | `string` | Yes | The *part* parameter specifies the liveChatModerator resource parts that the API response will include. Supported values are id and snippet. |

#### `liveChatModerators.insert()`

Inserts a new resource into this collection.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.part` | `string` | Yes | The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response returns. Set the parameter value to snippet. |
| `params.resource` | `object` | Yes | The request body. |

#### `liveChatModerators.delete()`

Deletes a chat moderator.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.id` | `string` | Yes |  |

### `liveStreams`

#### `liveStreams.list()`

Retrieve the list of streams associated with the given channel. --

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.id` | `string` | No | Return LiveStreams with the given ids from Stubby or Apiary. |
| `params.mine` | `boolean` | No |  |
| `params.maxResults` | `integer` | No | The *maxResults* parameter specifies the maximum number of items that should be returned in the result set. |
| `params.pageToken` | `string` | No | The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved. |
| `params.part` | `string` | Yes | The *part* parameter specifies a comma-separated list of one or more liveStream resource properties that the API response will include. The part names that you can include in the parameter value are id, snippet, cdn, and status. |
| `params.onBehalfOfContentOwner` | `string` | No | *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner. |
| `params.onBehalfOfContentOwnerChannel` | `string` | No | This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel. |

#### `liveStreams.insert()`

Inserts a new stream for the authenticated user.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.part` | `string` | Yes | The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. The part properties that you can include in the parameter value are id, snippet, cdn, content_details, and status. |
| `params.onBehalfOfContentOwner` | `string` | No | *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner. |
| `params.onBehalfOfContentOwnerChannel` | `string` | No | This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel. |
| `params.resource` | `object` | Yes | The request body. |

#### `liveStreams.update()`

Updates an existing stream for the authenticated user.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.part` | `string` | Yes | The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. The part properties that you can include in the parameter value are id, snippet, cdn, and status. Note that this method will override the existing values for all of the mutable properties that are contained in any parts that the parameter value specifies. If the request body does not specify a value for a mutable property, the existing value for that property will be removed. |
| `params.onBehalfOfContentOwner` | `string` | No | *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner. |
| `params.onBehalfOfContentOwnerChannel` | `string` | No | This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel. |
| `params.resource` | `object` | Yes | The request body. |

#### `liveStreams.delete()`

Deletes an existing stream for the authenticated user.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.id` | `string` | Yes |  |
| `params.onBehalfOfContentOwner` | `string` | No | *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner. |
| `params.onBehalfOfContentOwnerChannel` | `string` | No | This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel. |

### `members`

#### `members.list()`

Retrieves a list of members that match the request criteria for a channel.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.mode` | `string` | No | Parameter that specifies which channel members to return. |
| `params.hasAccessToLevel` | `string` | No | Filter members in the results set to the ones that have access to a level. |
| `params.maxResults` | `integer` | No | The *maxResults* parameter specifies the maximum number of items that should be returned in the result set. |
| `params.pageToken` | `string` | No | The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved. |
| `params.filterByMemberChannelId` | `string` | No | Comma separated list of channel IDs. Only data about members that are part of this list will be included in the response. |
| `params.part` | `string` | Yes | The *part* parameter specifies the member resource parts that the API response will include. Set the parameter value to snippet. |

### `membershipsLevels`

#### `membershipsLevels.list()`

Retrieves a list of all pricing levels offered by a creator to the fans.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.part` | `string` | Yes | The *part* parameter specifies the membershipsLevel resource parts that the API response will include. Supported values are id and snippet. |

### `playlists`

#### `playlists.list()`

Retrieves a list of resources, possibly filtered.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.id` | `string` | No | Return the playlists with the given IDs for Stubby or Apiary. |
| `params.mine` | `boolean` | No | Return the playlists owned by the authenticated user. |
| `params.channelId` | `string` | No | Return the playlists owned by the specified channel ID. |
| `params.hl` | `string` | No | Return content in specified language |
| `params.maxResults` | `integer` | No | The *maxResults* parameter specifies the maximum number of items that should be returned in the result set. |
| `params.pageToken` | `string` | No | The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved. |
| `params.part` | `string` | Yes | The *part* parameter specifies a comma-separated list of one or more playlist resource properties that the API response will include. If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a playlist resource, the snippet property contains properties like author, title, description, tags, and timeCreated. As such, if you set *part=snippet*, the API response will contain all of those properties. |
| `params.onBehalfOfContentOwner` | `string` | No | *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner. |
| `params.onBehalfOfContentOwnerChannel` | `string` | No | This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel. |

#### `playlists.insert()`

Inserts a new resource into this collection.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.part` | `string` | Yes | The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. |
| `params.onBehalfOfContentOwner` | `string` | No | *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner. |
| `params.onBehalfOfContentOwnerChannel` | `string` | No | This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel. |
| `params.resource` | `object` | Yes | The request body. |

#### `playlists.update()`

Updates an existing resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.part` | `string` | Yes | The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. Note that this method will override the existing values for mutable properties that are contained in any parts that the request body specifies. For example, a playlist's description is contained in the snippet part, which must be included in the request body. If the request does not specify a value for the snippet.description property, the playlist's existing description will be deleted. |
| `params.onBehalfOfContentOwner` | `string` | No | *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner. |
| `params.resource` | `object` | Yes | The request body. |

#### `playlists.delete()`

Deletes a resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.id` | `string` | Yes |  |
| `params.onBehalfOfContentOwner` | `string` | No | *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner. |

### `playlistItems`

#### `playlistItems.list()`

Retrieves a list of resources, possibly filtered.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.id` | `string` | No |  |
| `params.playlistId` | `string` | No | Return the playlist items within the given playlist. |
| `params.videoId` | `string` | No | Return the playlist items associated with the given video ID. |
| `params.maxResults` | `integer` | No | The *maxResults* parameter specifies the maximum number of items that should be returned in the result set. |
| `params.pageToken` | `string` | No | The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved. |
| `params.part` | `string` | Yes | The *part* parameter specifies a comma-separated list of one or more playlistItem resource properties that the API response will include. If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a playlistItem resource, the snippet property contains numerous fields, including the title, description, position, and resourceId properties. As such, if you set *part=snippet*, the API response will contain all of those properties. |
| `params.onBehalfOfContentOwner` | `string` | No | *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner. |

#### `playlistItems.delete()`

Deletes a resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.id` | `string` | Yes |  |
| `params.onBehalfOfContentOwner` | `string` | No | *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner. |

#### `playlistItems.insert()`

Inserts a new resource into this collection.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.part` | `string` | Yes | The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. |
| `params.onBehalfOfContentOwner` | `string` | No | *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner. |
| `params.resource` | `object` | Yes | The request body. |

#### `playlistItems.update()`

Updates an existing resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.part` | `string` | Yes | The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. Note that this method will override the existing values for all of the mutable properties that are contained in any parts that the parameter value specifies. For example, a playlist item can specify a start time and end time, which identify the times portion of the video that should play when users watch the video in the playlist. If your request is updating a playlist item that sets these values, and the request's part parameter value includes the contentDetails part, the playlist item's start and end times will be updated to whatever value the request body specifies. If the request body does not specify values, the existing start and end times will be removed and replaced with the default settings. |
| `params.onBehalfOfContentOwner` | `string` | No | *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner. |
| `params.resource` | `object` | Yes | The request body. |

### `playlistImages`

#### `playlistImages.list()`

Retrieves a list of resources, possibly filtered.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | No | Return PlaylistImages for this playlist id. |
| `params.maxResults` | `integer` | No | The *maxResults* parameter specifies the maximum number of items that should be returned in the result set. |
| `params.pageToken` | `string` | No | The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved. |
| `params.part` | `string` | No | The *part* parameter specifies a comma-separated list of one or more playlistImage resource properties that the API response will include. If the parameter identifies a property that contains child properties, the child properties will be included in the response. |
| `params.onBehalfOfContentOwner` | `string` | No | *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner. |
| `params.onBehalfOfContentOwnerChannel` | `string` | No | This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel. |

#### `playlistImages.insert()`

Inserts a new resource into this collection.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.part` | `string` | No | The *part* parameter specifies the properties that the API response will include. |
| `params.onBehalfOfContentOwner` | `string` | No | *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner. |
| `params.onBehalfOfContentOwnerChannel` | `string` | No | This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel. |
| `params.resource` | `object` | Yes | The request body. |

#### `playlistImages.update()`

Updates an existing resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.part` | `string` | No | The *part* parameter specifies the properties that the API response will include. |
| `params.onBehalfOfContentOwner` | `string` | No | *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner. |
| `params.resource` | `object` | Yes | The request body. |

#### `playlistImages.delete()`

Deletes a resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.id` | `string` | No | Id to identify this image. This is returned from by the List method. |
| `params.onBehalfOfContentOwner` | `string` | No | *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner. |

### `search`

#### `search.list()`

Retrieves a list of search resources

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.q` | `string` | No | Textual search terms to match. |
| `params.type` | `string` | No | Restrict results to a particular set of resource types from One Platform. |
| `params.order` | `string` | No | Sort order of the results. |
| `params.relevanceLanguage` | `string` | No | Return results relevant to this language. |
| `params.videoDimension` | `string` | No | Filter on 3d videos. |
| `params.videoDefinition` | `string` | No | Filter on the definition of the videos. |
| `params.videoLicense` | `string` | No | Filter on the license of the videos. |
| `params.videoDuration` | `string` | No | Filter on the duration of the videos. |
| `params.videoCaption` | `string` | No | Filter on the presence of captions on the videos. |
| `params.videoEmbeddable` | `string` | No | Filter on embeddable videos. |
| `params.videoSyndicated` | `string` | No | Filter on syndicated videos. |
| `params.videoCategoryId` | `string` | No | Filter on videos in a specific category. |
| `params.videoType` | `string` | No | Filter on videos of a specific type. |
| `params.eventType` | `string` | No | Filter on the livestream status of the videos. |
| `params.location` | `string` | No | Filter on location of the video |
| `params.locationRadius` | `string` | No | Filter on distance from the location (specified above). |
| `params.channelId` | `string` | No | Filter on resources belonging to this channelId. |
| `params.publishedAfter` | `string` | No | Filter on resources published after this date. |
| `params.publishedBefore` | `string` | No | Filter on resources published before this date. |
| `params.topicId` | `string` | No | Restrict results to a particular topic. |
| `params.videoPaidProductPlacement` | `string` | No |  |
| `params.forContentOwner` | `boolean` | No | Search owned by a content owner. |
| `params.regionCode` | `string` | No | Display the content as seen by viewers in this country. |
| `params.channelType` | `string` | No | Add a filter on the channel search. |
| `params.safeSearch` | `string` | No | Indicates whether the search results should include restricted content as well as standard content. |
| `params.forMine` | `boolean` | No | Search for the private videos of the authenticated user. |
| `params.forDeveloper` | `boolean` | No | Restrict the search to only retrieve videos uploaded using the project id of the authenticated user. |
| `params.maxResults` | `integer` | No | The *maxResults* parameter specifies the maximum number of items that should be returned in the result set. |
| `params.pageToken` | `string` | No | The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved. |
| `params.part` | `string` | Yes | The *part* parameter specifies a comma-separated list of one or more search resource properties that the API response will include. Set the parameter value to snippet. |
| `params.onBehalfOfContentOwner` | `string` | No | *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner. |

### `subscriptions`

#### `subscriptions.list()`

Retrieves a list of resources, possibly filtered.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.id` | `string` | No | Return the subscriptions with the given IDs for Stubby or Apiary. |
| `params.mine` | `boolean` | No | Flag for returning the subscriptions of the authenticated user. |
| `params.channelId` | `string` | No | Return the subscriptions of the given channel owner. |
| `params.forChannelId` | `string` | No | Return the subscriptions to the subset of these channels that the authenticated user is subscribed to. |
| `params.order` | `string` | No | The order of the returned subscriptions |
| `params.mySubscribers` | `boolean` | No | Return the subscribers of the given channel owner. |
| `params.myRecentSubscribers` | `boolean` | No |  |
| `params.maxResults` | `integer` | No | The *maxResults* parameter specifies the maximum number of items that should be returned in the result set. |
| `params.pageToken` | `string` | No | The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved. |
| `params.part` | `string` | Yes | The *part* parameter specifies a comma-separated list of one or more subscription resource properties that the API response will include. If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a subscription resource, the snippet property contains other properties, such as a display title for the subscription. If you set *part=snippet*, the API response will also contain all of those nested properties. |
| `params.onBehalfOfContentOwner` | `string` | No | *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner. |
| `params.onBehalfOfContentOwnerChannel` | `string` | No | This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel. |

#### `subscriptions.delete()`

Deletes a resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.id` | `string` | Yes |  |

#### `subscriptions.insert()`

Inserts a new resource into this collection.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.part` | `string` | Yes | The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. |
| `params.resource` | `object` | Yes | The request body. |

### `superChatEvents`

#### `superChatEvents.list()`

Retrieves a list of resources, possibly filtered.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.hl` | `string` | No | Return rendered funding amounts in specified language. |
| `params.maxResults` | `integer` | No | The *maxResults* parameter specifies the maximum number of items that should be returned in the result set. |
| `params.pageToken` | `string` | No | The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved. |
| `params.part` | `string` | Yes | The *part* parameter specifies the superChatEvent resource parts that the API response will include. This parameter is currently not supported. |

### `tests`

#### `tests.insert()`

POST method.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.part` | `string` | Yes |  |
| `params.externalChannelId` | `string` | No |  |
| `params.resource` | `object` | Yes | The request body. |

### `thirdPartyLinks`

#### `thirdPartyLinks.list()`

Retrieves a list of resources, possibly filtered.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.linkingToken` | `string` | No | Get a third party link with the given linking token. |
| `params.type` | `string` | No | Get a third party link of the given type. |
| `params.externalChannelId` | `string` | No | Channel ID to which changes should be applied, for delegation. |
| `params.part` | `string` | Yes | The *part* parameter specifies the thirdPartyLink resource parts that the API response will include. Supported values are linkingToken, status, and snippet. |

#### `thirdPartyLinks.insert()`

Inserts a new resource into this collection.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.externalChannelId` | `string` | No | Channel ID to which changes should be applied, for delegation. |
| `params.part` | `string` | Yes | The *part* parameter specifies the thirdPartyLink resource parts that the API request and response will include. Supported values are linkingToken, status, and snippet. |
| `params.resource` | `object` | Yes | The request body. |

#### `thirdPartyLinks.update()`

Updates an existing resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.externalChannelId` | `string` | No | Channel ID to which changes should be applied, for delegation. |
| `params.part` | `string` | Yes | The *part* parameter specifies the thirdPartyLink resource parts that the API request and response will include. Supported values are linkingToken, status, and snippet. |
| `params.resource` | `object` | Yes | The request body. |

#### `thirdPartyLinks.delete()`

Deletes a resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.linkingToken` | `string` | Yes | Delete the partner links with the given linking token. |
| `params.type` | `string` | Yes | Type of the link to be deleted. |
| `params.externalChannelId` | `string` | No | Channel ID to which changes should be applied, for delegation. |
| `params.part` | `string` | No | Do not use. Required for compatibility. |

### `thumbnails`

#### `thumbnails.set()`

As this is not an insert in a strict sense (it supports uploading/setting of a thumbnail for multiple videos, which doesn't result in creation of a single resource), I use a custom verb here.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.videoId` | `string` | Yes | Returns the Thumbnail with the given video IDs for Stubby or Apiary. |
| `params.onBehalfOfContentOwner` | `string` | No | *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner. |

### `videos`

#### `videos.list()`

Retrieves a list of resources, possibly filtered.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.id` | `string` | No | Return videos with the given ids. |
| `params.myRating` | `string` | No | Return videos liked/disliked by the authenticated user. Does not support RateType.RATED_TYPE_NONE. |
| `params.chart` | `string` | No | Return the videos that are in the specified chart. |
| `params.videoCategoryId` | `string` | No | Use chart that is specific to the specified video category |
| `params.regionCode` | `string` | No | Use a chart that is specific to the specified region |
| `params.maxWidth` | `integer` | No | Return the player with maximum height specified in |
| `params.maxHeight` | `integer` | No |  |
| `params.hl` | `string` | No | Stands for "host language". Specifies the localization language of the metadata to be filled into snippet.localized. The field is filled with the default metadata if there is no localization in the specified language. The parameter value must be a language code included in the list returned by the i18nLanguages.list method (e.g. en_US, es_MX). |
| `params.locale` | `string` | No |  |
| `params.maxResults` | `integer` | No | The *maxResults* parameter specifies the maximum number of items that should be returned in the result set. *Note:* This parameter is supported for use in conjunction with the myRating and chart parameters, but it is not supported for use in conjunction with the id parameter. |
| `params.pageToken` | `string` | No | The *pageToken* parameter identifies a specific page in the result set that should be returned. In an API response, the nextPageToken and prevPageToken properties identify other pages that could be retrieved. *Note:* This parameter is supported for use in conjunction with the myRating and chart parameters, but it is not supported for use in conjunction with the id parameter. |
| `params.part` | `string` | Yes | The *part* parameter specifies a comma-separated list of one or more video resource properties that the API response will include. If the parameter identifies a property that contains child properties, the child properties will be included in the response. For example, in a video resource, the snippet property contains the channelId, title, description, tags, and categoryId properties. As such, if you set *part=snippet*, the API response will contain all of those properties. |
| `params.onBehalfOfContentOwner` | `string` | No | *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner. |

#### `videos.insert()`

Inserts a new resource into this collection.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.autoLevels` | `boolean` | No | Should auto-levels be applied to the upload. |
| `params.stabilize` | `boolean` | No | Should stabilize be applied to the upload. |
| `params.notifySubscribers` | `boolean` | No | Notify the channel subscribers about the new video. As default, the notification is enabled. |
| `params.part` | `string` | Yes | The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. Note that not all parts contain properties that can be set when inserting or updating a video. For example, the statistics object encapsulates statistics that YouTube calculates for a video and does not contain values that you can set or modify. If the parameter value specifies a part that does not contain mutable values, that part will still be included in the API response. |
| `params.onBehalfOfContentOwner` | `string` | No | *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner. |
| `params.onBehalfOfContentOwnerChannel` | `string` | No | This parameter can only be used in a properly authorized request. *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwnerChannel* parameter specifies the YouTube channel ID of the channel to which a video is being added. This parameter is required when a request specifies a value for the onBehalfOfContentOwner parameter, and it can only be used in conjunction with that parameter. In addition, the request must be authorized using a CMS account that is linked to the content owner that the onBehalfOfContentOwner parameter specifies. Finally, the channel that the onBehalfOfContentOwnerChannel parameter value specifies must be linked to the content owner that the onBehalfOfContentOwner parameter specifies. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and perform actions on behalf of the channel specified in the parameter value, without having to provide authentication credentials for each separate channel. |
| `params.resource` | `object` | Yes | The request body. |

#### `videos.update()`

Updates an existing resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.part` | `string` | Yes | The *part* parameter serves two purposes in this operation. It identifies the properties that the write operation will set as well as the properties that the API response will include. Note that this method will override the existing values for all of the mutable properties that are contained in any parts that the parameter value specifies. For example, a video's privacy setting is contained in the status part. As such, if your request is updating a private video, and the request's part parameter value includes the status part, the video's privacy setting will be updated to whatever value the request body specifies. If the request body does not specify a value, the existing privacy setting will be removed and the video will revert to the default privacy setting. In addition, not all parts contain properties that can be set when inserting or updating a video. For example, the statistics object encapsulates statistics that YouTube calculates for a video and does not contain values that you can set or modify. If the parameter value specifies a part that does not contain mutable values, that part will still be included in the API response. |
| `params.onBehalfOfContentOwner` | `string` | No | *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner. |
| `params.resource` | `object` | Yes | The request body. |

#### `videos.delete()`

Deletes a resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.id` | `string` | Yes |  |
| `params.onBehalfOfContentOwner` | `string` | No | *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The actual CMS account that the user authenticates with must be linked to the specified YouTube content owner. |

#### `videos.reportAbuse()`

Report abuse for a video.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.onBehalfOfContentOwner` | `string` | No | *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner. |
| `params.resource` | `object` | Yes | The request body. |

#### `videos.rate()`

Adds a like or dislike rating to a video or removes a rating from a video.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.id` | `string` | Yes |  |
| `params.rating` | `string` | Yes |  |

#### `videos.getRating()`

Retrieves the ratings that the authorized user gave to a list of specified videos.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.id` | `string` | Yes |  |
| `params.onBehalfOfContentOwner` | `string` | No | *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner. |

### `videoAbuseReportReasons`

#### `videoAbuseReportReasons.list()`

Retrieves a list of resources, possibly filtered.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.hl` | `string` | No |  |
| `params.part` | `string` | Yes | The *part* parameter specifies the videoCategory resource parts that the API response will include. Supported values are id and snippet. |

### `videoCategories`

#### `videoCategories.list()`

Retrieves a list of resources, possibly filtered.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.id` | `string` | No | Returns the video categories with the given IDs for Stubby or Apiary. |
| `params.regionCode` | `string` | No |  |
| `params.hl` | `string` | No |  |
| `params.part` | `string` | Yes | The *part* parameter specifies the videoCategory resource properties that the API response will include. Set the parameter value to snippet. |

### `videoTrainability`

#### `videoTrainability.get()`

Returns the trainability status of a video.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.id` | `string` | No | The ID of the video to retrieve. |

### `watermarks`

#### `watermarks.set()`

Allows upload of watermark image and setting it for a channel.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.channelId` | `string` | Yes |  |
| `params.onBehalfOfContentOwner` | `string` | No | *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner. |
| `params.resource` | `object` | Yes | The request body. |

#### `watermarks.unset()`

Allows removal of channel watermark.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.channelId` | `string` | Yes |  |
| `params.onBehalfOfContentOwner` | `string` | No | *Note:* This parameter is intended exclusively for YouTube content partners. The *onBehalfOfContentOwner* parameter indicates that the request's authorization credentials identify a YouTube CMS user who is acting on behalf of the content owner specified in the parameter value. This parameter is intended for YouTube content partners that own and manage many different YouTube channels. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The CMS account that the user authenticates with must be linked to the specified YouTube content owner. |