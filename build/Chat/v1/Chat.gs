
/**
 * Google Apps Script client library for the Google Chat API
 * Documentation URL: https://developers.google.com/hangouts/chat
 * @class
 */
class Chat {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://chat.googleapis.com/';
    this._servicePath = '';


    this.media = {};

    /**
     * Downloads media. Download is supported on the URI `/v1/media/{+name}?alt=media`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resourceName - (Required) Name of the media that is being downloaded. See ReadRequest.resource_name.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.media.download = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/media/{+resourceName}', 'GET', apiParams, clientConfig);

    /**
     * Uploads an attachment. For an example, see [Upload media as a file attachment](https://developers.google.com/workspace/chat/upload-media-attachments). Requires user [authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following [authorization scopes](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes): - `https://www.googleapis.com/auth/chat.messages.create` - `https://www.googleapis.com/auth/chat.messages` - `https://www.googleapis.com/auth/chat.import` (import mode spaces only) You can upload attachments up to 200 MB. Certain file types aren't supported. For details, see [File types blocked by Google Chat](https://support.google.com/chat/answer/7651457?&co=GENIE.Platform%3DDesktop#File%20types%20blocked%20in%20Google%20Chat).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. Resource name of the Chat space in which the attachment is uploaded. Format "spaces/{space}".
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.media.upload = async (apiParams = {}, clientConfig = {}) => {
      // If apiParams.media is provided, use the upload path; otherwise, use the standard path.
      const path = apiParams.media ? '/upload/v1/{+parent}/attachments:upload' : 'v1/{+parent}/attachments:upload';
      return this._makeRequest(path, 'POST', apiParams, clientConfig);
    };

    this.spaces = {};

    /**
     * Lists spaces the caller is a member of. Group chats and DMs aren't listed until the first message is sent. For an example, see [List spaces](https://developers.google.com/workspace/chat/list-spaces). Supports the following types of [authentication](https://developers.google.com/workspace/chat/authenticate-authorize): - [App authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) with the authorization scope: - `https://www.googleapis.com/auth/chat.bot` - [User authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following authorization scopes: - `https://www.googleapis.com/auth/chat.spaces.readonly` - `https://www.googleapis.com/auth/chat.spaces` To list all named spaces by Google Workspace organization, use the [`spaces.search()`](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces/search) method using Workspace administrator privileges instead.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. A query filter. You can filter spaces by the space type ([`space_type`](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces#spacetype)). To filter by space type, you must specify valid enum value, such as `SPACE` or `GROUP_CHAT` (the `space_type` can't be `SPACE_TYPE_UNSPECIFIED`). To query for multiple space types, use the `OR` operator. For example, the following queries are valid: ``` space_type = "SPACE" spaceType = "GROUP_CHAT" OR spaceType = "DIRECT_MESSAGE" ``` Invalid queries are rejected by the server with an `INVALID_ARGUMENT` error.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of spaces to return. The service might return fewer than this value. If unspecified, at most 100 spaces are returned. The maximum value is 1000. If you use a value more than 1000, it's automatically changed to 1000. Negative values return an `INVALID_ARGUMENT` error.
     * @param {string} apiParams.pageToken - Optional. A page token, received from a previous list spaces call. Provide this parameter to retrieve the subsequent page. When paginating, the filter value should match the call that provided the page token. Passing a different value may lead to unexpected results.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.spaces.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/spaces', 'GET', apiParams, clientConfig);

    /**
     * Returns a list of spaces in a Google Workspace organization based on an administrator's search. In the request, set `use_admin_access` to `true`. For an example, see [Search for and manage spaces](https://developers.google.com/workspace/chat/search-manage-admin). Requires [user authentication with administrator privileges](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user#admin-privileges) and one of the following [authorization scopes](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes): - `https://www.googleapis.com/auth/chat.admin.spaces.readonly` - `https://www.googleapis.com/auth/chat.admin.spaces`
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.orderBy - Optional. How the list of spaces is ordered. Supported attributes to order by are: - `membership_count.joined_direct_human_user_count` — Denotes the count of human users that have directly joined a space. - `last_active_time` — Denotes the time when last eligible item is added to any topic of this space. - `create_time` — Denotes the time of the space creation. Valid ordering operation values are: - `ASC` for ascending. Default value. - `DESC` for descending. The supported syntax are: - `membership_count.joined_direct_human_user_count DESC` - `membership_count.joined_direct_human_user_count ASC` - `last_active_time DESC` - `last_active_time ASC` - `create_time DESC` - `create_time ASC`
     * @param {integer} apiParams.pageSize - The maximum number of spaces to return. The service may return fewer than this value. If unspecified, at most 100 spaces are returned. The maximum value is 1000. If you use a value more than 1000, it's automatically changed to 1000.
     * @param {string} apiParams.pageToken - A token, received from the previous search spaces call. Provide this parameter to retrieve the subsequent page. When paginating, all other parameters provided should match the call that provided the page token. Passing different values to the other parameters might lead to unexpected results.
     * @param {string} apiParams.query - Required. A search query. You can search by using the following parameters: - `create_time` - `customer` - `display_name` - `external_user_allowed` - `last_active_time` - `space_history_state` - `space_type` `create_time` and `last_active_time` accept a timestamp in [RFC-3339](https://www.rfc-editor.org/rfc/rfc3339) format and the supported comparison operators are: `=`, `<`, `>`, `<=`, `>=`. `customer` is required and is used to indicate which customer to fetch spaces from. `customers/my_customer` is the only supported value. `display_name` only accepts the `HAS` (`:`) operator. The text to match is first tokenized into tokens and each token is prefix-matched case-insensitively and independently as a substring anywhere in the space's `display_name`. For example, `Fun Eve` matches `Fun event` or `The evening was fun`, but not `notFun event` or `even`. `external_user_allowed` accepts either `true` or `false`. `space_history_state` only accepts values from the [`historyState`] (https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces#Space.HistoryState) field of a `space` resource. `space_type` is required and the only valid value is `SPACE`. Across different fields, only `AND` operators are supported. A valid example is `space_type = "SPACE" AND display_name:"Hello"` and an invalid example is `space_type = "SPACE" OR display_name:"Hello"`. Among the same field, `space_type` doesn't support `AND` or `OR` operators. `display_name`, 'space_history_state', and 'external_user_allowed' only support `OR` operators. `last_active_time` and `create_time` support both `AND` and `OR` operators. `AND` can only be used to represent an interval, such as `last_active_time < "2022-01-01T00:00:00+00:00" AND last_active_time > "2023-01-01T00:00:00+00:00"`. The following example queries are valid: ``` customer = "customers/my_customer" AND space_type = "SPACE" customer = "customers/my_customer" AND space_type = "SPACE" AND display_name:"Hello World" customer = "customers/my_customer" AND space_type = "SPACE" AND (last_active_time < "2020-01-01T00:00:00+00:00" OR last_active_time > "2022-01-01T00:00:00+00:00") customer = "customers/my_customer" AND space_type = "SPACE" AND (display_name:"Hello World" OR display_name:"Fun event") AND (last_active_time > "2020-01-01T00:00:00+00:00" AND last_active_time < "2022-01-01T00:00:00+00:00") customer = "customers/my_customer" AND space_type = "SPACE" AND (create_time > "2019-01-01T00:00:00+00:00" AND create_time < "2020-01-01T00:00:00+00:00") AND (external_user_allowed = "true") AND (space_history_state = "HISTORY_ON" OR space_history_state = "HISTORY_OFF") ```
     * @param {boolean} apiParams.useAdminAccess - When `true`, the method runs using the user's Google Workspace administrator privileges. The calling user must be a Google Workspace administrator with the [manage chat and spaces conversations privilege](https://support.google.com/a/answer/13369245). Requires either the `chat.admin.spaces.readonly` or `chat.admin.spaces` [OAuth 2.0 scope](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes). This method currently only supports admin access, thus only `true` is accepted for this field.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.spaces.search = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/spaces:search', 'GET', apiParams, clientConfig);

    /**
     * Returns details about a space. For an example, see [Get details about a space](https://developers.google.com/workspace/chat/get-spaces). Supports the following types of [authentication](https://developers.google.com/workspace/chat/authenticate-authorize): - [App authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) with one of the following authorization scopes: - `https://www.googleapis.com/auth/chat.bot` - `https://www.googleapis.com/auth/chat.app.spaces` with [administrator approval](https://support.google.com/a?p=chat-app-auth) - [User authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following authorization scopes: - `https://www.googleapis.com/auth/chat.spaces.readonly` - `https://www.googleapis.com/auth/chat.spaces` - User authentication grants administrator privileges when an administrator account authenticates, `use_admin_access` is `true`, and one of the following authorization scopes is used: - `https://www.googleapis.com/auth/chat.admin.spaces.readonly` - `https://www.googleapis.com/auth/chat.admin.spaces` App authentication has the following limitations: - `space.access_settings` is only populated when using the `chat.app.spaces` scope. - `space.predefind_permission_settings` and `space.permission_settings` are only populated when using the `chat.app.spaces` scope, and only for spaces the app created.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Resource name of the space, in the form `spaces/{space}`. Format: `spaces/{space}`
     * @param {boolean} apiParams.useAdminAccess - Optional. When `true`, the method runs using the user's Google Workspace administrator privileges. The calling user must be a Google Workspace administrator with the [manage chat and spaces conversations privilege](https://support.google.com/a/answer/13369245). Requires the `chat.admin.spaces` or `chat.admin.spaces.readonly` [OAuth 2.0 scopes](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes).
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.spaces.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Creates a space. Can be used to create a named space, or a group chat in `Import mode`. For an example, see [Create a space](https://developers.google.com/workspace/chat/create-spaces). Supports the following types of [authentication](https://developers.google.com/workspace/chat/authenticate-authorize): - [App authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) with [administrator approval](https://support.google.com/a?p=chat-app-auth) and one of the following authorization scopes: - `https://www.googleapis.com/auth/chat.app.spaces.create` - `https://www.googleapis.com/auth/chat.app.spaces` - [User authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following authorization scopes: - `https://www.googleapis.com/auth/chat.spaces.create` - `https://www.googleapis.com/auth/chat.spaces` - `https://www.googleapis.com/auth/chat.import` (import mode spaces only) When authenticating as an app, the `space.customer` field must be set in the request. When authenticating as an app, the Chat app is added as a member of the space. However, unlike human authentication, the Chat app is not added as a space manager. By default, the Chat app can be removed from the space by all space members. To allow only space managers to remove the app from a space, set `space.permission_settings.manage_apps` to `managers_allowed`. Space membership upon creation depends on whether the space is created in `Import mode`: * **Import mode:** No members are created. * **All other modes:** The calling user is added as a member. This is: * The app itself when using app authentication. * The human user when using user authentication. If you receive the error message `ALREADY_EXISTS` when creating a space, try a different `displayName`. An existing space within the Google Workspace organization might already use this display name.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.requestId - Optional. A unique identifier for this request. A random UUID is recommended. Specifying an existing request ID returns the space created with that ID instead of creating a new space. Specifying an existing request ID from the same Chat app with a different authenticated user returns an error.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.spaces.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/spaces', 'POST', apiParams, clientConfig);

    /**
     * Creates a space and adds specified users to it. The calling user is automatically added to the space, and shouldn't be specified as a membership in the request. For an example, see [Set up a space with initial members](https://developers.google.com/workspace/chat/set-up-spaces). To specify the human members to add, add memberships with the appropriate `membership.member.name`. To add a human user, use `users/{user}`, where `{user}` can be the email address for the user. For users in the same Workspace organization `{user}` can also be the `id` for the person from the People API, or the `id` for the user in the Directory API. For example, if the People API Person profile ID for `user@example.com` is `123456789`, you can add the user to the space by setting the `membership.member.name` to `users/user@example.com` or `users/123456789`. To specify the Google groups to add, add memberships with the appropriate `membership.group_member.name`. To add or invite a Google group, use `groups/{group}`, where `{group}` is the `id` for the group from the Cloud Identity Groups API. For example, you can use [Cloud Identity Groups lookup API](https://cloud.google.com/identity/docs/reference/rest/v1/groups/lookup) to retrieve the ID `123456789` for group email `group@example.com`, then you can add the group to the space by setting the `membership.group_member.name` to `groups/123456789`. Group email is not supported, and Google groups can only be added as members in named spaces. For a named space or group chat, if the caller blocks, or is blocked by some members, or doesn't have permission to add some members, then those members aren't added to the created space. To create a direct message (DM) between the calling user and another human user, specify exactly one membership to represent the human user. If one user blocks the other, the request fails and the DM isn't created. To create a DM between the calling user and the calling app, set `Space.singleUserBotDm` to `true` and don't specify any memberships. You can only use this method to set up a DM with the calling app. To add the calling app as a member of a space or an existing DM between two human users, see [Invite or add a user or app to a space](https://developers.google.com/workspace/chat/create-members). If a DM already exists between two users, even when one user blocks the other at the time a request is made, then the existing DM is returned. Spaces with threaded replies aren't supported. If you receive the error message `ALREADY_EXISTS` when setting up a space, try a different `displayName`. An existing space within the Google Workspace organization might already use this display name. Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following [authorization scopes](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes): - `https://www.googleapis.com/auth/chat.spaces.create` - `https://www.googleapis.com/auth/chat.spaces`
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.spaces.setup = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/spaces:setup', 'POST', apiParams, clientConfig);

    /**
     * Updates a space. For an example, see [Update a space](https://developers.google.com/workspace/chat/update-spaces). If you're updating the `displayName` field and receive the error message `ALREADY_EXISTS`, try a different display name.. An existing space within the Google Workspace organization might already use this display name. Supports the following types of [authentication](https://developers.google.com/workspace/chat/authenticate-authorize): - [App authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) with [administrator approval](https://support.google.com/a?p=chat-app-auth) and one of the following authorization scopes: - `https://www.googleapis.com/auth/chat.app.spaces` - [User authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following authorization scopes: - `https://www.googleapis.com/auth/chat.spaces` - `https://www.googleapis.com/auth/chat.import` (import mode spaces only) - User authentication grants administrator privileges when an administrator account authenticates, `use_admin_access` is `true`, and the following authorization scopes is used: - `https://www.googleapis.com/auth/chat.admin.spaces` App authentication has the following limitations: - To update either `space.predefined_permission_settings` or `space.permission_settings`, the app must be the space creator. - Updating the `space.access_settings.audience` is not supported for app authentication.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Identifier. Resource name of the space. Format: `spaces/{space}` Where `{space}` represents the system-assigned ID for the space. You can obtain the space ID by calling the [`spaces.list()`](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces/list) method or from the space URL. For example, if the space URL is `https://mail.google.com/mail/u/0/#chat/space/AAAAAAAAA`, the space ID is `AAAAAAAAA`.
     * @param {string} apiParams.updateMask - Required. The updated field paths, comma separated if there are multiple. You can update the following fields for a space: `space_details`: Updates the space's description. Supports up to 150 characters. `display_name`: Only supports updating the display name for spaces where `spaceType` field is `SPACE`. If you receive the error message `ALREADY_EXISTS`, try a different value. An existing space within the Google Workspace organization might already use this display name. `space_type`: Only supports changing a `GROUP_CHAT` space type to `SPACE`. Include `display_name` together with `space_type` in the update mask and ensure that the specified space has a non-empty display name and the `SPACE` space type. Including the `space_type` mask and the `SPACE` type in the specified space when updating the display name is optional if the existing space already has the `SPACE` type. Trying to update the space type in other ways results in an invalid argument error. `space_type` is not supported with `useAdminAccess`. `space_history_state`: Updates [space history settings](https://support.google.com/chat/answer/7664687) by turning history on or off for the space. Only supported if history settings are enabled for the Google Workspace organization. To update the space history state, you must omit all other field masks in your request. `space_history_state` is not supported with `useAdminAccess`. `access_settings.audience`: Updates the [access setting](https://support.google.com/chat/answer/11971020) of who can discover the space, join the space, and preview the messages in named space where `spaceType` field is `SPACE`. If the existing space has a target audience, you can remove the audience and restrict space access by omitting a value for this field mask. To update access settings for a space, the authenticating user must be a space manager and omit all other field masks in your request. You can't update this field if the space is in [import mode](https://developers.google.com/workspace/chat/import-data-overview). To learn more, see [Make a space discoverable to specific users](https://developers.google.com/workspace/chat/space-target-audience). `access_settings.audience` is not supported with `useAdminAccess`. `permission_settings`: Supports changing the [permission settings](https://support.google.com/chat/answer/13340792) of a space. When updating permission settings, you can only specify `permissionSettings` field masks; you cannot update other field masks at the same time. `permissionSettings` is not supported with `useAdminAccess`. The supported field masks include: - `permission_settings.manageMembersAndGroups` - `permission_settings.modifySpaceDetails` - `permission_settings.toggleHistory` - `permission_settings.useAtMentionAll` - `permission_settings.manageApps` - `permission_settings.manageWebhooks` - `permission_settings.replyMessages`
     * @param {boolean} apiParams.useAdminAccess - Optional. When `true`, the method runs using the user's Google Workspace administrator privileges. The calling user must be a Google Workspace administrator with the [manage chat and spaces conversations privilege](https://support.google.com/a/answer/13369245). Requires the `chat.admin.spaces` [OAuth 2.0 scope](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes). Some `FieldMask` values are not supported using admin access. For details, see the description of `update_mask`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.spaces.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes a named space. Always performs a cascading delete, which means that the space's child resources—like messages posted in the space and memberships in the space—are also deleted. For an example, see [Delete a space](https://developers.google.com/workspace/chat/delete-spaces). Supports the following types of [authentication](https://developers.google.com/workspace/chat/authenticate-authorize): - [App authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) with [administrator approval](https://support.google.com/a?p=chat-app-auth) and the authorization scope: - `https://www.googleapis.com/auth/chat.app.delete` (only in spaces the app created) - [User authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following authorization scopes: - `https://www.googleapis.com/auth/chat.delete` - `https://www.googleapis.com/auth/chat.import` (import mode spaces only) - User authentication grants administrator privileges when an administrator account authenticates, `use_admin_access` is `true`, and the following authorization scope is used: - `https://www.googleapis.com/auth/chat.admin.delete`
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Resource name of the space to delete. Format: `spaces/{space}`
     * @param {boolean} apiParams.useAdminAccess - Optional. When `true`, the method runs using the user's Google Workspace administrator privileges. The calling user must be a Google Workspace administrator with the [manage chat and spaces conversations privilege](https://support.google.com/a/answer/13369245). Requires the `chat.admin.delete` [OAuth 2.0 scope](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes).
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.spaces.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Completes the [import process](https://developers.google.com/workspace/chat/import-data) for the specified space and makes it visible to users. Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) and domain-wide delegation with the [authorization scope](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes): - `https://www.googleapis.com/auth/chat.import` For more information, see [Authorize Google Chat apps to import data](https://developers.google.com/workspace/chat/authorize-import).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Resource name of the import mode space. Format: `spaces/{space}`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.spaces.completeImport = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:completeImport', 'POST', apiParams, clientConfig);

    /**
     * Returns the existing direct message with the specified user. If no direct message space is found, returns a `404 NOT_FOUND` error. For an example, see [Find a direct message](/chat/api/guides/v1/spaces/find-direct-message). With [app authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app), returns the direct message space between the specified user and the calling Chat app. With [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user), returns the direct message space between the specified user and the authenticated user. Supports the following types of [authentication](https://developers.google.com/workspace/chat/authenticate-authorize): - [App authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) with the authorization scope: - `https://www.googleapis.com/auth/chat.bot` - [User authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following authorization scopes: - `https://www.googleapis.com/auth/chat.spaces.readonly` - `https://www.googleapis.com/auth/chat.spaces`
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - Required. Resource name of the user to find direct message with. Format: `users/{user}`, where `{user}` is either the `id` for the [person](https://developers.google.com/people/api/rest/v1/people) from the People API, or the `id` for the [user](https://developers.google.com/admin-sdk/directory/reference/rest/v1/users) in the Directory API. For example, if the People API profile ID is `123456789`, you can find a direct message with that person by using `users/123456789` as the `name`. When [authenticated as a user](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user), you can use the email as an alias for `{user}`. For example, `users/example@gmail.com` where `example@gmail.com` is the email of the Google Chat user.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.spaces.findDirectMessage = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/spaces:findDirectMessage', 'GET', apiParams, clientConfig);

    this.spaces.messages = {};

    /**
     * Creates a message in a Google Chat space. For an example, see [Send a message](https://developers.google.com/workspace/chat/create-messages). Supports the following types of [authentication](https://developers.google.com/workspace/chat/authenticate-authorize): - [App authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) with the authorization scope: - `https://www.googleapis.com/auth/chat.bot` - [User authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following authorization scopes: - `https://www.googleapis.com/auth/chat.messages.create` - `https://www.googleapis.com/auth/chat.messages` - `https://www.googleapis.com/auth/chat.import` (import mode spaces only) Chat attributes the message sender differently depending on the type of authentication that you use in your request. The following image shows how Chat attributes a message when you use app authentication. Chat displays the Chat app as the message sender. The content of the message can contain text (`text`), cards (`cardsV2`), and accessory widgets (`accessoryWidgets`). ![Message sent with app authentication](https://developers.google.com/workspace/chat/images/message-app-auth.svg) The following image shows how Chat attributes a message when you use user authentication. Chat displays the user as the message sender and attributes the Chat app to the message by displaying its name. The content of message can only contain text (`text`). ![Message sent with user authentication](https://developers.google.com/workspace/chat/images/message-user-auth.svg) The maximum message size, including the message contents, is 32,000 bytes. For [webhook](https://developers.google.com/workspace/chat/quickstart/webhooks) requests, the response doesn't contain the full message. The response only populates the `name` and `thread.name` fields in addition to the information that was in the request.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.messageId - Optional. A custom ID for a message. Lets Chat apps get, update, or delete a message without needing to store the system-assigned ID in the message's resource name (represented in the message `name` field). The value for this field must meet the following requirements: * Begins with `client-`. For example, `client-custom-name` is a valid custom ID, but `custom-name` is not. * Contains up to 63 characters and only lowercase letters, numbers, and hyphens. * Is unique within a space. A Chat app can't use the same custom ID for different messages. For details, see [Name a message](https://developers.google.com/workspace/chat/create-messages#name_a_created_message).
     * @param {string} apiParams.messageReplyOption - Optional. Specifies whether a message starts a thread or replies to one. Only supported in named spaces. When [responding to user interactions](https://developers.google.com/workspace/chat/receive-respond-interactions), this field is ignored. For interactions within a thread, the reply is created in the same thread. Otherwise, the reply is created as a new thread.
     * @param {string} apiParams.parent - (Required) Required. The resource name of the space in which to create a message. Format: `spaces/{space}`
     * @param {string} apiParams.requestId - Optional. A unique request ID for this message. Specifying an existing request ID returns the message created with that ID instead of creating a new message.
     * @param {string} apiParams.threadKey - Optional. Deprecated: Use thread.thread_key instead. ID for the thread. Supports up to 4000 characters. To start or add to a thread, create a message and specify a `threadKey` or the thread.name. For example usage, see [Start or reply to a message thread](https://developers.google.com/workspace/chat/create-messages#create-message-thread).
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.spaces.messages.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/messages', 'POST', apiParams, clientConfig);

    /**
     * Lists messages in a space that the caller is a member of, including messages from blocked members and spaces. System messages, like those announcing new space members, aren't included. If you list messages from a space with no messages, the response is an empty object. When using a REST/HTTP interface, the response contains an empty JSON object, `{}`. For an example, see [List messages](https://developers.google.com/workspace/chat/api/guides/v1/messages/list). Supports the following types of [authentication](https://developers.google.com/workspace/chat/authenticate-authorize): - [App authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) with [administrator approval](https://support.google.com/a?p=chat-app-auth) in [Developer Preview](https://developers.google.com/workspace/preview) with the authorization scope: - `https://www.googleapis.com/auth/chat.app.messages.readonly`. When using this authentication scope, this method only returns public messages in a space. It doesn't include private messages. - [User authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following authorization scopes: - `https://www.googleapis.com/auth/chat.messages.readonly` - `https://www.googleapis.com/auth/chat.messages` - `https://www.googleapis.com/auth/chat.import` (import mode spaces only)
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. A query filter. You can filter messages by date (`create_time`) and thread (`thread.name`). To filter messages by the date they were created, specify the `create_time` with a timestamp in [RFC-3339](https://www.rfc-editor.org/rfc/rfc3339) format and double quotation marks. For example, `"2023-04-21T11:30:00-04:00"`. You can use the greater than operator `>` to list messages that were created after a timestamp, or the less than operator `<` to list messages that were created before a timestamp. To filter messages within a time interval, use the `AND` operator between two timestamps. To filter by thread, specify the `thread.name`, formatted as `spaces/{space}/threads/{thread}`. You can only specify one `thread.name` per query. To filter by both thread and date, use the `AND` operator in your query. For example, the following queries are valid: ``` create_time > "2012-04-21T11:30:00-04:00" create_time > "2012-04-21T11:30:00-04:00" AND thread.name = spaces/AAAAAAAAAAA/threads/123 create_time > "2012-04-21T11:30:00+00:00" AND create_time < "2013-01-01T00:00:00+00:00" AND thread.name = spaces/AAAAAAAAAAA/threads/123 thread.name = spaces/AAAAAAAAAAA/threads/123 ``` Invalid queries are rejected by the server with an `INVALID_ARGUMENT` error.
     * @param {string} apiParams.orderBy - Optional. How the list of messages is ordered. Specify a value to order by an ordering operation. Valid ordering operation values are as follows: - `ASC` for ascending. - `DESC` for descending. The default ordering is `create_time ASC`.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of messages returned. The service might return fewer messages than this value. If unspecified, at most 25 are returned. The maximum value is 1000. If you use a value more than 1000, it's automatically changed to 1000. Negative values return an `INVALID_ARGUMENT` error.
     * @param {string} apiParams.pageToken - Optional. A page token received from a previous list messages call. Provide this parameter to retrieve the subsequent page. When paginating, all other parameters provided should match the call that provided the page token. Passing different values to the other parameters might lead to unexpected results.
     * @param {string} apiParams.parent - (Required) Required. The resource name of the space to list messages from. Format: `spaces/{space}`
     * @param {boolean} apiParams.showDeleted - Optional. Whether to include deleted messages. Deleted messages include deleted time and metadata about their deletion, but message content is unavailable.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.spaces.messages.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/messages', 'GET', apiParams, clientConfig);

    /**
     * Returns details about a message. For an example, see [Get details about a message](https://developers.google.com/workspace/chat/get-messages). Supports the following types of [authentication](https://developers.google.com/workspace/chat/authenticate-authorize): - [App authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) with one of the following authorization scopes: - `https://www.googleapis.com/auth/chat.bot`: When using this authorization scope, this method returns details about a message the Chat app has access to, like direct messages and [slash commands](https://developers.google.com/workspace/chat/slash-commands) that invoke the Chat app. - `https://www.googleapis.com/auth/chat.app.messages.readonly` with [administrator approval](https://support.google.com/a?p=chat-app-auth) (available in [Developer Preview](https://developers.google.com/workspace/preview)). When using this authentication scope, this method returns details about a public message in a space. - [User authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following authorization scopes: - `https://www.googleapis.com/auth/chat.messages.readonly` - `https://www.googleapis.com/auth/chat.messages` Note: Might return a message from a blocked member or space.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Resource name of the message. Format: `spaces/{space}/messages/{message}` If you've set a custom ID for your message, you can use the value from the `clientAssignedMessageId` field for `{message}`. For details, see [Name a message] (https://developers.google.com/workspace/chat/create-messages#name_a_created_message).
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.spaces.messages.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Updates a message. There's a difference between the `patch` and `update` methods. The `patch` method uses a `patch` request while the `update` method uses a `put` request. We recommend using the `patch` method. For an example, see [Update a message](https://developers.google.com/workspace/chat/update-messages). Supports the following types of [authentication](https://developers.google.com/workspace/chat/authenticate-authorize): - [App authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) with the authorization scope: - `https://www.googleapis.com/auth/chat.bot` - [User authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following authorization scopes: - `https://www.googleapis.com/auth/chat.messages` - `https://www.googleapis.com/auth/chat.import` (import mode spaces only) When using app authentication, requests can only update messages created by the calling Chat app.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.allowMissing - Optional. If `true` and the message isn't found, a new message is created and `updateMask` is ignored. The specified message ID must be [client-assigned](https://developers.google.com/workspace/chat/create-messages#name_a_created_message) or the request fails.
     * @param {string} apiParams.name - (Required) Identifier. Resource name of the message. Format: `spaces/{space}/messages/{message}` Where `{space}` is the ID of the space where the message is posted and `{message}` is a system-assigned ID for the message. For example, `spaces/AAAAAAAAAAA/messages/BBBBBBBBBBB.BBBBBBBBBBB`. If you set a custom ID when you create a message, you can use this ID to specify the message in a request by replacing `{message}` with the value from the `clientAssignedMessageId` field. For example, `spaces/AAAAAAAAAAA/messages/client-custom-name`. For details, see [Name a message](https://developers.google.com/workspace/chat/create-messages#name_a_created_message).
     * @param {string} apiParams.updateMask - Required. The field paths to update. Separate multiple values with commas or use `*` to update all field paths. Currently supported field paths: - `text` - `attachment` - `cards` (Requires [app authentication](/chat/api/guides/auth/service-accounts).) - `cards_v2` (Requires [app authentication](/chat/api/guides/auth/service-accounts).) - `accessory_widgets` (Requires [app authentication](/chat/api/guides/auth/service-accounts).) - `quoted_message_metadata` (Only allows removal of the quoted message.)
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.spaces.messages.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PUT', apiParams, clientConfig);

    /**
     * Updates a message. There's a difference between the `patch` and `update` methods. The `patch` method uses a `patch` request while the `update` method uses a `put` request. We recommend using the `patch` method. For an example, see [Update a message](https://developers.google.com/workspace/chat/update-messages). Supports the following types of [authentication](https://developers.google.com/workspace/chat/authenticate-authorize): - [App authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) with the authorization scope: - `https://www.googleapis.com/auth/chat.bot` - [User authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following authorization scopes: - `https://www.googleapis.com/auth/chat.messages` - `https://www.googleapis.com/auth/chat.import` (import mode spaces only) When using app authentication, requests can only update messages created by the calling Chat app.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.allowMissing - Optional. If `true` and the message isn't found, a new message is created and `updateMask` is ignored. The specified message ID must be [client-assigned](https://developers.google.com/workspace/chat/create-messages#name_a_created_message) or the request fails.
     * @param {string} apiParams.name - (Required) Identifier. Resource name of the message. Format: `spaces/{space}/messages/{message}` Where `{space}` is the ID of the space where the message is posted and `{message}` is a system-assigned ID for the message. For example, `spaces/AAAAAAAAAAA/messages/BBBBBBBBBBB.BBBBBBBBBBB`. If you set a custom ID when you create a message, you can use this ID to specify the message in a request by replacing `{message}` with the value from the `clientAssignedMessageId` field. For example, `spaces/AAAAAAAAAAA/messages/client-custom-name`. For details, see [Name a message](https://developers.google.com/workspace/chat/create-messages#name_a_created_message).
     * @param {string} apiParams.updateMask - Required. The field paths to update. Separate multiple values with commas or use `*` to update all field paths. Currently supported field paths: - `text` - `attachment` - `cards` (Requires [app authentication](/chat/api/guides/auth/service-accounts).) - `cards_v2` (Requires [app authentication](/chat/api/guides/auth/service-accounts).) - `accessory_widgets` (Requires [app authentication](/chat/api/guides/auth/service-accounts).) - `quoted_message_metadata` (Only allows removal of the quoted message.)
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.spaces.messages.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes a message. For an example, see [Delete a message](https://developers.google.com/workspace/chat/delete-messages). Supports the following types of [authentication](https://developers.google.com/workspace/chat/authenticate-authorize): - [App authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) with the authorization scope: - `https://www.googleapis.com/auth/chat.bot` - [User authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following authorization scopes: - `https://www.googleapis.com/auth/chat.messages` - `https://www.googleapis.com/auth/chat.import` (import mode spaces only) When using app authentication, requests can only delete messages created by the calling Chat app.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.force - Optional. When `true`, deleting a message also deletes its threaded replies. When `false`, if a message has threaded replies, deletion fails. Only applies when [authenticating as a user](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user). Has no effect when [authenticating as a Chat app] (https://developers.google.com/workspace/chat/authenticate-authorize-chat-app).
     * @param {string} apiParams.name - (Required) Required. Resource name of the message. Format: `spaces/{space}/messages/{message}` If you've set a custom ID for your message, you can use the value from the `clientAssignedMessageId` field for `{message}`. For details, see [Name a message] (https://developers.google.com/workspace/chat/create-messages#name_a_created_message).
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.spaces.messages.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.spaces.messages.attachments = {};

    /**
     * Gets the metadata of a message attachment. The attachment data is fetched using the [media API](https://developers.google.com/workspace/chat/api/reference/rest/v1/media/download). For an example, see [Get metadata about a message attachment](https://developers.google.com/workspace/chat/get-media-attachments). Requires [app authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) with the [authorization scope](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes): - `https://www.googleapis.com/auth/chat.bot`
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Resource name of the attachment, in the form `spaces/{space}/messages/{message}/attachments/{attachment}`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.spaces.messages.attachments.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.spaces.messages.reactions = {};

    /**
     * Creates a reaction and adds it to a message. For an example, see [Add a reaction to a message](https://developers.google.com/workspace/chat/create-reactions). Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following [authorization scopes](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes): - `https://www.googleapis.com/auth/chat.messages.reactions.create` - `https://www.googleapis.com/auth/chat.messages.reactions` - `https://www.googleapis.com/auth/chat.messages` - `https://www.googleapis.com/auth/chat.import` (import mode spaces only)
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The message where the reaction is created. Format: `spaces/{space}/messages/{message}`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.spaces.messages.reactions.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/reactions', 'POST', apiParams, clientConfig);

    /**
     * Lists reactions to a message. For an example, see [List reactions for a message](https://developers.google.com/workspace/chat/list-reactions). Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following [authorization scopes](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes): - `https://www.googleapis.com/auth/chat.messages.reactions.readonly` - `https://www.googleapis.com/auth/chat.messages.reactions` - `https://www.googleapis.com/auth/chat.messages.readonly` - `https://www.googleapis.com/auth/chat.messages`
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. A query filter. You can filter reactions by [emoji](https://developers.google.com/workspace/chat/api/reference/rest/v1/Emoji) (either `emoji.unicode` or `emoji.custom_emoji.uid`) and [user](https://developers.google.com/workspace/chat/api/reference/rest/v1/User) (`user.name`). To filter reactions for multiple emojis or users, join similar fields with the `OR` operator, such as `emoji.unicode = "🙂" OR emoji.unicode = "👍"` and `user.name = "users/AAAAAA" OR user.name = "users/BBBBBB"`. To filter reactions by emoji and user, use the `AND` operator, such as `emoji.unicode = "🙂" AND user.name = "users/AAAAAA"`. If your query uses both `AND` and `OR`, group them with parentheses. For example, the following queries are valid: ``` user.name = "users/{user}" emoji.unicode = "🙂" emoji.custom_emoji.uid = "{uid}" emoji.unicode = "🙂" OR emoji.unicode = "👍" emoji.unicode = "🙂" OR emoji.custom_emoji.uid = "{uid}" emoji.unicode = "🙂" AND user.name = "users/{user}" (emoji.unicode = "🙂" OR emoji.custom_emoji.uid = "{uid}") AND user.name = "users/{user}" ``` The following queries are invalid: ``` emoji.unicode = "🙂" AND emoji.unicode = "👍" emoji.unicode = "🙂" AND emoji.custom_emoji.uid = "{uid}" emoji.unicode = "🙂" OR user.name = "users/{user}" emoji.unicode = "🙂" OR emoji.custom_emoji.uid = "{uid}" OR user.name = "users/{user}" emoji.unicode = "🙂" OR emoji.custom_emoji.uid = "{uid}" AND user.name = "users/{user}" ``` Invalid queries are rejected with an `INVALID_ARGUMENT` error.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of reactions returned. The service can return fewer reactions than this value. If unspecified, the default value is 25. The maximum value is 200; values above 200 are changed to 200.
     * @param {string} apiParams.pageToken - Optional. (If resuming from a previous query.) A page token received from a previous list reactions call. Provide this to retrieve the subsequent page. When paginating, the filter value should match the call that provided the page token. Passing a different value might lead to unexpected results.
     * @param {string} apiParams.parent - (Required) Required. The message users reacted to. Format: `spaces/{space}/messages/{message}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.spaces.messages.reactions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/reactions', 'GET', apiParams, clientConfig);

    /**
     * Deletes a reaction to a message. For an example, see [Delete a reaction](https://developers.google.com/workspace/chat/delete-reactions). Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following [authorization scopes](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes): - `https://www.googleapis.com/auth/chat.messages.reactions` - `https://www.googleapis.com/auth/chat.messages` - `https://www.googleapis.com/auth/chat.import` (import mode spaces only)
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the reaction to delete. Format: `spaces/{space}/messages/{message}/reactions/{reaction}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.spaces.messages.reactions.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.spaces.members = {};

    /**
     * Lists memberships in a space. For an example, see [List users and Google Chat apps in a space](https://developers.google.com/workspace/chat/list-members). Listing memberships with [app authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) lists memberships in spaces that the Chat app has access to, but excludes Chat app memberships, including its own. Listing memberships with [User authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) lists memberships in spaces that the authenticated user has access to. Supports the following types of [authentication](https://developers.google.com/workspace/chat/authenticate-authorize): - [App authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) with one of the following authorization scopes: - `https://www.googleapis.com/auth/chat.bot` - `https://www.googleapis.com/auth/chat.app.memberships` (requires [administrator approval](https://support.google.com/a?p=chat-app-auth)) - [User authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following authorization scopes: - `https://www.googleapis.com/auth/chat.memberships.readonly` - `https://www.googleapis.com/auth/chat.memberships` - `https://www.googleapis.com/auth/chat.import` (import mode spaces only) - User authentication grants administrator privileges when an administrator account authenticates, `use_admin_access` is `true`, and one of the following authorization scopes is used: - `https://www.googleapis.com/auth/chat.admin.memberships.readonly` - `https://www.googleapis.com/auth/chat.admin.memberships`
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. A query filter. You can filter memberships by a member's role ([`role`](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.members#membershiprole)) and type ([`member.type`](https://developers.google.com/workspace/chat/api/reference/rest/v1/User#type)). To filter by role, set `role` to `ROLE_MEMBER` or `ROLE_MANAGER`. To filter by type, set `member.type` to `HUMAN` or `BOT`. You can also filter for `member.type` using the `!=` operator. To filter by both role and type, use the `AND` operator. To filter by either role or type, use the `OR` operator. Either `member.type = "HUMAN"` or `member.type != "BOT"` is required when `use_admin_access` is set to true. Other member type filters will be rejected. For example, the following queries are valid: ``` role = "ROLE_MANAGER" OR role = "ROLE_MEMBER" member.type = "HUMAN" AND role = "ROLE_MANAGER" member.type != "BOT" ``` The following queries are invalid: ``` member.type = "HUMAN" AND member.type = "BOT" role = "ROLE_MANAGER" AND role = "ROLE_MEMBER" ``` Invalid queries are rejected by the server with an `INVALID_ARGUMENT` error.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of memberships to return. The service might return fewer than this value. If unspecified, at most 100 memberships are returned. The maximum value is 1000. If you use a value more than 1000, it's automatically changed to 1000. Negative values return an `INVALID_ARGUMENT` error.
     * @param {string} apiParams.pageToken - Optional. A page token, received from a previous call to list memberships. Provide this parameter to retrieve the subsequent page. When paginating, all other parameters provided should match the call that provided the page token. Passing different values to the other parameters might lead to unexpected results.
     * @param {string} apiParams.parent - (Required) Required. The resource name of the space for which to fetch a membership list. Format: spaces/{space}
     * @param {boolean} apiParams.showGroups - Optional. When `true`, also returns memberships associated with a Google Group, in addition to other types of memberships. If a filter is set, Google Group memberships that don't match the filter criteria aren't returned.
     * @param {boolean} apiParams.showInvited - Optional. When `true`, also returns memberships associated with invited members, in addition to other types of memberships. If a filter is set, invited memberships that don't match the filter criteria aren't returned. Currently requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user).
     * @param {boolean} apiParams.useAdminAccess - Optional. When `true`, the method runs using the user's Google Workspace administrator privileges. The calling user must be a Google Workspace administrator with the [manage chat and spaces conversations privilege](https://support.google.com/a/answer/13369245). Requires either the `chat.admin.memberships.readonly` or `chat.admin.memberships` [OAuth 2.0 scope](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes). Listing app memberships in a space isn't supported when using admin access.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.spaces.members.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/members', 'GET', apiParams, clientConfig);

    /**
     * Returns details about a membership. For an example, see [Get details about a user's or Google Chat app's membership](https://developers.google.com/workspace/chat/get-members). Supports the following types of [authentication](https://developers.google.com/workspace/chat/authenticate-authorize): - [App authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) with one of the following authorization scopes: - `https://www.googleapis.com/auth/chat.bot` - `https://www.googleapis.com/auth/chat.app.memberships` (requires [administrator approval](https://support.google.com/a?p=chat-app-auth)) - [User authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following authorization scopes: - `https://www.googleapis.com/auth/chat.memberships.readonly` - `https://www.googleapis.com/auth/chat.memberships` - User authentication grants administrator privileges when an administrator account authenticates, `use_admin_access` is `true`, and one of the following authorization scopes is used: - `https://www.googleapis.com/auth/chat.admin.memberships.readonly` - `https://www.googleapis.com/auth/chat.admin.memberships`
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Resource name of the membership to retrieve. To get the app's own membership [by using user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user), you can optionally use `spaces/{space}/members/app`. Format: `spaces/{space}/members/{member}` or `spaces/{space}/members/app` You can use the user's email as an alias for `{member}`. For example, `spaces/{space}/members/example@gmail.com` where `example@gmail.com` is the email of the Google Chat user.
     * @param {boolean} apiParams.useAdminAccess - Optional. When `true`, the method runs using the user's Google Workspace administrator privileges. The calling user must be a Google Workspace administrator with the [manage chat and spaces conversations privilege](https://support.google.com/a/answer/13369245). Requires the `chat.admin.memberships` or `chat.admin.memberships.readonly` [OAuth 2.0 scopes](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes). Getting app memberships in a space isn't supported when using admin access.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.spaces.members.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Creates a membership for the calling Chat app, a user, or a Google Group. Creating memberships for other Chat apps isn't supported. When creating a membership, if the specified member has their auto-accept policy turned off, then they're invited, and must accept the space invitation before joining. Otherwise, creating a membership adds the member directly to the specified space. Supports the following types of [authentication](https://developers.google.com/workspace/chat/authenticate-authorize): - [App authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) with [administrator approval](https://support.google.com/a?p=chat-app-auth) and the authorization scope: - `https://www.googleapis.com/auth/chat.app.memberships` - [User authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following authorization scopes: - `https://www.googleapis.com/auth/chat.memberships` - `https://www.googleapis.com/auth/chat.memberships.app` (to add the calling app to the space) - `https://www.googleapis.com/auth/chat.import` (import mode spaces only) - User authentication grants administrator privileges when an administrator account authenticates, `use_admin_access` is `true`, and the following authorization scope is used: - `https://www.googleapis.com/auth/chat.admin.memberships` App authentication is not supported for the following use cases: - Inviting users external to the Workspace organization that owns the space. - Adding a Google Group to a space. - Adding a Chat app to a space. For example usage, see: - [Invite or add a user to a space](https://developers.google.com/workspace/chat/create-members#create-user-membership). - [Invite or add a Google Group to a space](https://developers.google.com/workspace/chat/create-members#create-group-membership). - [Add the Chat app to a space](https://developers.google.com/workspace/chat/create-members#create-membership-calling-api).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The resource name of the space for which to create the membership. Format: spaces/{space}
     * @param {boolean} apiParams.useAdminAccess - Optional. When `true`, the method runs using the user's Google Workspace administrator privileges. The calling user must be a Google Workspace administrator with the [manage chat and spaces conversations privilege](https://support.google.com/a/answer/13369245). Requires the `chat.admin.memberships` [OAuth 2.0 scope](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes). Creating app memberships or creating memberships for users outside the administrator's Google Workspace organization isn't supported using admin access.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.spaces.members.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/members', 'POST', apiParams, clientConfig);

    /**
     * Updates a membership. For an example, see [Update a user's membership in a space](https://developers.google.com/workspace/chat/update-members). Supports the following types of [authentication](https://developers.google.com/workspace/chat/authenticate-authorize): - [App authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) with [administrator approval](https://support.google.com/a?p=chat-app-auth) and the authorization scope: - `https://www.googleapis.com/auth/chat.app.memberships` (only in spaces the app created) - [User authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following authorization scopes: - `https://www.googleapis.com/auth/chat.memberships` - `https://www.googleapis.com/auth/chat.import` (import mode spaces only) - User authentication grants administrator privileges when an administrator account authenticates, `use_admin_access` is `true`, and the following authorization scope is used: - `https://www.googleapis.com/auth/chat.admin.memberships`
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Identifier. Resource name of the membership, assigned by the server. Format: `spaces/{space}/members/{member}`
     * @param {string} apiParams.updateMask - Required. The field paths to update. Separate multiple values with commas or use `*` to update all field paths. Currently supported field paths: - `role`
     * @param {boolean} apiParams.useAdminAccess - Optional. When `true`, the method runs using the user's Google Workspace administrator privileges. The calling user must be a Google Workspace administrator with the [manage chat and spaces conversations privilege](https://support.google.com/a/answer/13369245). Requires the `chat.admin.memberships` [OAuth 2.0 scope](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes).
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.spaces.members.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes a membership. For an example, see [Remove a user or a Google Chat app from a space](https://developers.google.com/workspace/chat/delete-members). Supports the following types of [authentication](https://developers.google.com/workspace/chat/authenticate-authorize): - [App authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) with [administrator approval](https://support.google.com/a?p=chat-app-auth) and the authorization scope: - `https://www.googleapis.com/auth/chat.app.memberships` - [User authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following authorization scopes: - `https://www.googleapis.com/auth/chat.memberships` - `https://www.googleapis.com/auth/chat.memberships.app` (to remove the calling app from the space) - `https://www.googleapis.com/auth/chat.import` (import mode spaces only) - User authentication grants administrator privileges when an administrator account authenticates, `use_admin_access` is `true`, and the following authorization scope is used: - `https://www.googleapis.com/auth/chat.admin.memberships` App authentication is not supported for the following use cases: - Removing a Google Group from a space. - Removing a Chat app from a space. To delete memberships for space managers, the requester must be a space manager. If you're using [app authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) the Chat app must be the space creator.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Resource name of the membership to delete. Chat apps can delete human users' or their own memberships. Chat apps can't delete other apps' memberships. When deleting a human membership, requires the `chat.memberships` scope with [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) or the `chat.memberships.app` scope with [app authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-app) and the `spaces/{space}/members/{member}` format. You can use the email as an alias for `{member}`. For example, `spaces/{space}/members/example@gmail.com` where `example@gmail.com` is the email of the Google Chat user. When deleting an app membership, requires the `chat.memberships.app` scope and `spaces/{space}/members/app` format. Format: `spaces/{space}/members/{member}` or `spaces/{space}/members/app`.
     * @param {boolean} apiParams.useAdminAccess - Optional. When `true`, the method runs using the user's Google Workspace administrator privileges. The calling user must be a Google Workspace administrator with the [manage chat and spaces conversations privilege](https://support.google.com/a/answer/13369245). Requires the `chat.admin.memberships` [OAuth 2.0 scope](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes). Deleting app memberships in a space isn't supported using admin access.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.spaces.members.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.spaces.spaceEvents = {};

    /**
     * Returns an event from a Google Chat space. The [event payload](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.spaceEvents#SpaceEvent.FIELDS.oneof_payload) contains the most recent version of the resource that changed. For example, if you request an event about a new message but the message was later updated, the server returns the updated `Message` resource in the event payload. Note: The `permissionSettings` field is not returned in the Space object of the Space event data for this request. Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with an [authorization scope](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes) appropriate for reading the requested data: - `https://www.googleapis.com/auth/chat.spaces.readonly` - `https://www.googleapis.com/auth/chat.spaces` - `https://www.googleapis.com/auth/chat.messages.readonly` - `https://www.googleapis.com/auth/chat.messages` - `https://www.googleapis.com/auth/chat.messages.reactions.readonly` - `https://www.googleapis.com/auth/chat.messages.reactions` - `https://www.googleapis.com/auth/chat.memberships.readonly` - `https://www.googleapis.com/auth/chat.memberships` To get an event, the authenticated user must be a member of the space. For an example, see [Get details about an event from a Google Chat space](https://developers.google.com/workspace/chat/get-space-event).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The resource name of the space event. Format: `spaces/{space}/spaceEvents/{spaceEvent}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.spaces.spaceEvents.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists events from a Google Chat space. For each event, the [payload](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.spaceEvents#SpaceEvent.FIELDS.oneof_payload) contains the most recent version of the Chat resource. For example, if you list events about new space members, the server returns `Membership` resources that contain the latest membership details. If new members were removed during the requested period, the event payload contains an empty `Membership` resource. Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with an [authorization scope](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes) appropriate for reading the requested data: - `https://www.googleapis.com/auth/chat.spaces.readonly` - `https://www.googleapis.com/auth/chat.spaces` - `https://www.googleapis.com/auth/chat.messages.readonly` - `https://www.googleapis.com/auth/chat.messages` - `https://www.googleapis.com/auth/chat.messages.reactions.readonly` - `https://www.googleapis.com/auth/chat.messages.reactions` - `https://www.googleapis.com/auth/chat.memberships.readonly` - `https://www.googleapis.com/auth/chat.memberships` To list events, the authenticated user must be a member of the space. For an example, see [List events from a Google Chat space](https://developers.google.com/workspace/chat/list-space-events).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Required. A query filter. You must specify at least one event type (`event_type`) using the has `:` operator. To filter by multiple event types, use the `OR` operator. Omit batch event types in your filter. The request automatically returns any related batch events. For example, if you filter by new reactions (`google.workspace.chat.reaction.v1.created`), the server also returns batch new reactions events (`google.workspace.chat.reaction.v1.batchCreated`). For a list of supported event types, see the [`SpaceEvents` reference documentation](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces.spaceEvents#SpaceEvent.FIELDS.event_type). Optionally, you can also filter by start time (`start_time`) and end time (`end_time`): * `start_time`: Exclusive timestamp from which to start listing space events. You can list events that occurred up to 28 days ago. If unspecified, lists space events from the past 28 days. * `end_time`: Inclusive timestamp until which space events are listed. If unspecified, lists events up to the time of the request. To specify a start or end time, use the equals `=` operator and format in [RFC-3339](https://www.rfc-editor.org/rfc/rfc3339). To filter by both `start_time` and `end_time`, use the `AND` operator. For example, the following queries are valid: ``` start_time="2023-08-23T19:20:33+00:00" AND end_time="2023-08-23T19:21:54+00:00" ``` ``` start_time="2023-08-23T19:20:33+00:00" AND (event_types:"google.workspace.chat.space.v1.updated" OR event_types:"google.workspace.chat.message.v1.created") ``` The following queries are invalid: ``` start_time="2023-08-23T19:20:33+00:00" OR end_time="2023-08-23T19:21:54+00:00" ``` ``` event_types:"google.workspace.chat.space.v1.updated" AND event_types:"google.workspace.chat.message.v1.created" ``` Invalid queries are rejected by the server with an `INVALID_ARGUMENT` error.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of space events returned. The service might return fewer than this value. Negative values return an `INVALID_ARGUMENT` error.
     * @param {string} apiParams.pageToken - Optional. A page token, received from a previous list space events call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to list space events must match the call that provided the page token. Passing different values to the other parameters might lead to unexpected results.
     * @param {string} apiParams.parent - (Required) Required. Resource name of the [Google Chat space](https://developers.google.com/workspace/chat/api/reference/rest/v1/spaces) where the events occurred. Format: `spaces/{space}`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.spaces.spaceEvents.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/spaceEvents', 'GET', apiParams, clientConfig);

    this.customEmojis = {};

    /**
     * Creates a custom emoji. Custom emojis are only available for Google Workspace accounts, and the administrator must turn custom emojis on for the organization. For more information, see [Learn about custom emojis in Google Chat](https://support.google.com/chat/answer/12800149) and [Manage custom emoji permissions](https://support.google.com/a/answer/12850085). Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with the [authorization scope](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes): - `https://www.googleapis.com/auth/chat.customemojis`
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customEmojis.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/customEmojis', 'POST', apiParams, clientConfig);

    /**
     * Returns details about a custom emoji. Custom emojis are only available for Google Workspace accounts, and the administrator must turn custom emojis on for the organization. For more information, see [Learn about custom emojis in Google Chat](https://support.google.com/chat/answer/12800149) and [Manage custom emoji permissions](https://support.google.com/a/answer/12850085). Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following [authorization scopes](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes): - `https://www.googleapis.com/auth/chat.customemojis.readonly` - `https://www.googleapis.com/auth/chat.customemojis`
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Resource name of the custom emoji. Format: `customEmojis/{customEmoji}` You can use the emoji name as an alias for `{customEmoji}`. For example, `customEmojis/:example-emoji:` where `:example-emoji:` is the emoji name for a custom emoji.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customEmojis.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists custom emojis visible to the authenticated user. Custom emojis are only available for Google Workspace accounts, and the administrator must turn custom emojis on for the organization. For more information, see [Learn about custom emojis in Google Chat](https://support.google.com/chat/answer/12800149) and [Manage custom emoji permissions](https://support.google.com/a/answer/12850085). Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following [authorization scopes](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes): - `https://www.googleapis.com/auth/chat.customemojis.readonly` - `https://www.googleapis.com/auth/chat.customemojis`
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. A query filter. Supports filtering by creator. To filter by creator, you must specify a valid value. Currently only `creator("users/me")` and `NOT creator("users/me")` are accepted to filter custom emojis by whether they were created by the calling user or not. For example, the following query returns custom emojis created by the caller: ``` creator("users/me") ``` Invalid queries are rejected with an `INVALID_ARGUMENT` error.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of custom emojis returned. The service can return fewer custom emojis than this value. If unspecified, the default value is 25. The maximum value is 200; values above 200 are changed to 200.
     * @param {string} apiParams.pageToken - Optional. (If resuming from a previous query.) A page token received from a previous list custom emoji call. Provide this to retrieve the subsequent page. When paginating, the filter value should match the call that provided the page token. Passing a different value might lead to unexpected results.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customEmojis.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/customEmojis', 'GET', apiParams, clientConfig);

    /**
     * Deletes a custom emoji. By default, users can only delete custom emoji they created. [Emoji managers](https://support.google.com/a/answer/12850085) assigned by the administrator can delete any custom emoji in the organization. See [Learn about custom emojis in Google Chat](https://support.google.com/chat/answer/12800149). Custom emojis are only available for Google Workspace accounts, and the administrator must turn custom emojis on for the organization. For more information, see [Learn about custom emojis in Google Chat](https://support.google.com/chat/answer/12800149) and [Manage custom emoji permissions](https://support.google.com/a/answer/12850085). Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with the [authorization scope](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes): - `https://www.googleapis.com/auth/chat.customemojis`
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Resource name of the custom emoji to delete. Format: `customEmojis/{customEmoji}` You can use the emoji name as an alias for `{customEmoji}`. For example, `customEmojis/:example-emoji:` where `:example-emoji:` is the emoji name for a custom emoji.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.customEmojis.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.users = {};

    this.users.spaces = {};

    /**
     * Returns details about a user's read state within a space, used to identify read and unread messages. For an example, see [Get details about a user's space read state](https://developers.google.com/workspace/chat/get-space-read-state). Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following [authorization scopes](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes): - `https://www.googleapis.com/auth/chat.users.readstate.readonly` - `https://www.googleapis.com/auth/chat.users.readstate`
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Resource name of the space read state to retrieve. Only supports getting read state for the calling user. To refer to the calling user, set one of the following: - The `me` alias. For example, `users/me/spaces/{space}/spaceReadState`. - Their Workspace email address. For example, `users/user@example.com/spaces/{space}/spaceReadState`. - Their user id. For example, `users/123456789/spaces/{space}/spaceReadState`. Format: users/{user}/spaces/{space}/spaceReadState
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.spaces.getSpaceReadState = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Updates a user's read state within a space, used to identify read and unread messages. For an example, see [Update a user's space read state](https://developers.google.com/workspace/chat/update-space-read-state). Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with the [authorization scope](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes): - `https://www.googleapis.com/auth/chat.users.readstate`
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Resource name of the space read state. Format: `users/{user}/spaces/{space}/spaceReadState`
     * @param {string} apiParams.updateMask - Required. The field paths to update. Currently supported field paths: - `last_read_time` When the `last_read_time` is before the latest message create time, the space appears as unread in the UI. To mark the space as read, set `last_read_time` to any value later (larger) than the latest message create time. The `last_read_time` is coerced to match the latest message create time. Note that the space read state only affects the read state of messages that are visible in the space's top-level conversation. Replies in threads are unaffected by this timestamp, and instead rely on the thread read state.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.spaces.updateSpaceReadState = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    this.users.spaces.threads = {};

    /**
     * Returns details about a user's read state within a thread, used to identify read and unread messages. For an example, see [Get details about a user's thread read state](https://developers.google.com/workspace/chat/get-thread-read-state). Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with one of the following [authorization scopes](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes): - `https://www.googleapis.com/auth/chat.users.readstate.readonly` - `https://www.googleapis.com/auth/chat.users.readstate`
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Resource name of the thread read state to retrieve. Only supports getting read state for the calling user. To refer to the calling user, set one of the following: - The `me` alias. For example, `users/me/spaces/{space}/threads/{thread}/threadReadState`. - Their Workspace email address. For example, `users/user@example.com/spaces/{space}/threads/{thread}/threadReadState`. - Their user id. For example, `users/123456789/spaces/{space}/threads/{thread}/threadReadState`. Format: users/{user}/spaces/{space}/threads/{thread}/threadReadState
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.spaces.threads.getThreadReadState = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.users.spaces.spaceNotificationSetting = {};

    /**
     * Gets the space notification setting. For an example, see [Get the caller's space notification setting](https://developers.google.com/workspace/chat/get-space-notification-setting). Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with the [authorization scope](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes): - `https://www.googleapis.com/auth/chat.users.spacesettings`
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Format: users/{user}/spaces/{space}/spaceNotificationSetting - `users/me/spaces/{space}/spaceNotificationSetting`, OR - `users/user@example.com/spaces/{space}/spaceNotificationSetting`, OR - `users/123456789/spaces/{space}/spaceNotificationSetting`. Note: Only the caller's user id or email is allowed in the path.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.spaces.spaceNotificationSetting.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Updates the space notification setting. For an example, see [Update the caller's space notification setting](https://developers.google.com/workspace/chat/update-space-notification-setting). Requires [user authentication](https://developers.google.com/workspace/chat/authenticate-authorize-chat-user) with the [authorization scope](https://developers.google.com/workspace/chat/authenticate-authorize#chat-api-scopes): - `https://www.googleapis.com/auth/chat.users.spacesettings`
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Identifier. The resource name of the space notification setting. Format: `users/{user}/spaces/{space}/spaceNotificationSetting`.
     * @param {string} apiParams.updateMask - Required. Supported field paths: - `notification_setting` - `mute_setting`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.users.spaces.spaceNotificationSetting.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
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
