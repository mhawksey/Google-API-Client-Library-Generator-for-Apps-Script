
/**
 * Google Apps Script client library for the Calendar API
 * Documentation URL: https://developers.google.com/workspace/calendar/firstapp
 * @class
 */
class Calendar {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://www.googleapis.com/';
    this._servicePath = 'calendar/v3/';


    this.acl = {};

    /**
     * Deletes an access control rule.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.calendarId - (Required) Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
     * @param {string} apiParams.ruleId - (Required) ACL rule identifier.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.acl.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('calendars/{calendarId}/acl/{ruleId}', 'DELETE', apiParams, clientConfig);

    /**
     * Returns an access control rule.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.calendarId - (Required) Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
     * @param {string} apiParams.ruleId - (Required) ACL rule identifier.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.acl.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('calendars/{calendarId}/acl/{ruleId}', 'GET', apiParams, clientConfig);

    /**
     * Creates an access control rule.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.calendarId - (Required) Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
     * @param {boolean} apiParams.sendNotifications - Whether to send notifications about the calendar sharing change. Optional. The default is True.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.acl.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('calendars/{calendarId}/acl', 'POST', apiParams, clientConfig);

    /**
     * Returns the rules in the access control list for the calendar.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.calendarId - (Required) Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
     * @param {integer} apiParams.maxResults - Maximum number of entries returned on one result page. By default the value is 100 entries. The page size can never be larger than 250 entries. Optional.
     * @param {string} apiParams.pageToken - Token specifying which result page to return. Optional.
     * @param {boolean} apiParams.showDeleted - Whether to include deleted ACLs in the result. Deleted ACLs are represented by role equal to "none". Deleted ACLs will always be included if syncToken is provided. Optional. The default is False.
     * @param {string} apiParams.syncToken - Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. All entries deleted since the previous list request will always be in the result set and it is not allowed to set showDeleted to False.
    If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken.
    Learn more about incremental synchronization.
    Optional. The default is to return all entries.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.acl.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('calendars/{calendarId}/acl', 'GET', apiParams, clientConfig);

    /**
     * Updates an access control rule. This method supports patch semantics.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.calendarId - (Required) Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
     * @param {string} apiParams.ruleId - (Required) ACL rule identifier.
     * @param {boolean} apiParams.sendNotifications - Whether to send notifications about the calendar sharing change. Note that there are no notifications on access removal. Optional. The default is True.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.acl.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('calendars/{calendarId}/acl/{ruleId}', 'PATCH', apiParams, clientConfig);

    /**
     * Updates an access control rule.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.calendarId - (Required) Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
     * @param {string} apiParams.ruleId - (Required) ACL rule identifier.
     * @param {boolean} apiParams.sendNotifications - Whether to send notifications about the calendar sharing change. Note that there are no notifications on access removal. Optional. The default is True.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.acl.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('calendars/{calendarId}/acl/{ruleId}', 'PUT', apiParams, clientConfig);

    /**
     * Watch for changes to ACL resources.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.calendarId - (Required) Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
     * @param {integer} apiParams.maxResults - Maximum number of entries returned on one result page. By default the value is 100 entries. The page size can never be larger than 250 entries. Optional.
     * @param {string} apiParams.pageToken - Token specifying which result page to return. Optional.
     * @param {boolean} apiParams.showDeleted - Whether to include deleted ACLs in the result. Deleted ACLs are represented by role equal to "none". Deleted ACLs will always be included if syncToken is provided. Optional. The default is False.
     * @param {string} apiParams.syncToken - Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. All entries deleted since the previous list request will always be in the result set and it is not allowed to set showDeleted to False.
    If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken.
    Learn more about incremental synchronization.
    Optional. The default is to return all entries.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.acl.watch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('calendars/{calendarId}/acl/watch', 'POST', apiParams, clientConfig);

    this.calendarList = {};

    /**
     * Removes a calendar from the user's calendar list.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.calendarId - (Required) Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.calendarList.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('users/me/calendarList/{calendarId}', 'DELETE', apiParams, clientConfig);

    /**
     * Returns a calendar from the user's calendar list.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.calendarId - (Required) Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.calendarList.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('users/me/calendarList/{calendarId}', 'GET', apiParams, clientConfig);

    /**
     * Inserts an existing calendar into the user's calendar list.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.colorRgbFormat - Whether to use the foregroundColor and backgroundColor fields to write the calendar colors (RGB). If this feature is used, the index-based colorId field will be set to the best matching option automatically. Optional. The default is False.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.calendarList.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('users/me/calendarList', 'POST', apiParams, clientConfig);

    /**
     * Returns the calendars on the user's calendar list.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.maxResults - Maximum number of entries returned on one result page. By default the value is 100 entries. The page size can never be larger than 250 entries. Optional.
     * @param {string} apiParams.minAccessRole - The minimum access role for the user in the returned entries. Optional. The default is no restriction.
     * @param {string} apiParams.pageToken - Token specifying which result page to return. Optional.
     * @param {boolean} apiParams.showDeleted - Whether to include deleted calendar list entries in the result. Optional. The default is False.
     * @param {boolean} apiParams.showHidden - Whether to show hidden entries. Optional. The default is False.
     * @param {string} apiParams.syncToken - Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. If only read-only fields such as calendar properties or ACLs have changed, the entry won't be returned. All entries deleted and hidden since the previous list request will always be in the result set and it is not allowed to set showDeleted neither showHidden to False.
    To ensure client state consistency minAccessRole query parameter cannot be specified together with nextSyncToken.
    If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken.
    Learn more about incremental synchronization.
    Optional. The default is to return all entries.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.calendarList.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('users/me/calendarList', 'GET', apiParams, clientConfig);

    /**
     * Updates an existing calendar on the user's calendar list. This method supports patch semantics.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.calendarId - (Required) Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
     * @param {boolean} apiParams.colorRgbFormat - Whether to use the foregroundColor and backgroundColor fields to write the calendar colors (RGB). If this feature is used, the index-based colorId field will be set to the best matching option automatically. Optional. The default is False.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.calendarList.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('users/me/calendarList/{calendarId}', 'PATCH', apiParams, clientConfig);

    /**
     * Updates an existing calendar on the user's calendar list.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.calendarId - (Required) Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
     * @param {boolean} apiParams.colorRgbFormat - Whether to use the foregroundColor and backgroundColor fields to write the calendar colors (RGB). If this feature is used, the index-based colorId field will be set to the best matching option automatically. Optional. The default is False.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.calendarList.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('users/me/calendarList/{calendarId}', 'PUT', apiParams, clientConfig);

    /**
     * Watch for changes to CalendarList resources.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.maxResults - Maximum number of entries returned on one result page. By default the value is 100 entries. The page size can never be larger than 250 entries. Optional.
     * @param {string} apiParams.minAccessRole - The minimum access role for the user in the returned entries. Optional. The default is no restriction.
     * @param {string} apiParams.pageToken - Token specifying which result page to return. Optional.
     * @param {boolean} apiParams.showDeleted - Whether to include deleted calendar list entries in the result. Optional. The default is False.
     * @param {boolean} apiParams.showHidden - Whether to show hidden entries. Optional. The default is False.
     * @param {string} apiParams.syncToken - Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. If only read-only fields such as calendar properties or ACLs have changed, the entry won't be returned. All entries deleted and hidden since the previous list request will always be in the result set and it is not allowed to set showDeleted neither showHidden to False.
    To ensure client state consistency minAccessRole query parameter cannot be specified together with nextSyncToken.
    If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken.
    Learn more about incremental synchronization.
    Optional. The default is to return all entries.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.calendarList.watch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('users/me/calendarList/watch', 'POST', apiParams, clientConfig);

    this.calendars = {};

    /**
     * Clears a primary calendar. This operation deletes all events associated with the primary calendar of an account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.calendarId - (Required) Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.calendars.clear = async (apiParams = {}, clientConfig = {}) => this._makeRequest('calendars/{calendarId}/clear', 'POST', apiParams, clientConfig);

    /**
     * Deletes a secondary calendar. Use calendars.clear for clearing all events on primary calendars.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.calendarId - (Required) Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.calendars.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('calendars/{calendarId}', 'DELETE', apiParams, clientConfig);

    /**
     * Returns metadata for a calendar.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.calendarId - (Required) Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.calendars.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('calendars/{calendarId}', 'GET', apiParams, clientConfig);

    /**
     * Creates a secondary calendar.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.calendars.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('calendars', 'POST', apiParams, clientConfig);

    /**
     * Updates metadata for a calendar. This method supports patch semantics.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.calendarId - (Required) Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.calendars.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('calendars/{calendarId}', 'PATCH', apiParams, clientConfig);

    /**
     * Updates metadata for a calendar.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.calendarId - (Required) Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.calendars.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('calendars/{calendarId}', 'PUT', apiParams, clientConfig);

    this.channels = {};

    /**
     * Stop watching resources through this channel
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.channels.stop = async (apiParams = {}, clientConfig = {}) => this._makeRequest('channels/stop', 'POST', apiParams, clientConfig);

    this.colors = {};

    /**
     * Returns the color definitions for calendars and events.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.colors.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('colors', 'GET', apiParams, clientConfig);

    this.events = {};

    /**
     * Deletes an event.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.calendarId - (Required) Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
     * @param {string} apiParams.eventId - (Required) Event identifier.
     * @param {boolean} apiParams.sendNotifications - Deprecated. Please use sendUpdates instead.
    
    Whether to send notifications about the deletion of the event. Note that some emails might still be sent even if you set the value to false. The default is false.
     * @param {string} apiParams.sendUpdates - Guests who should receive notifications about the deletion of the event.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.events.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('calendars/{calendarId}/events/{eventId}', 'DELETE', apiParams, clientConfig);

    /**
     * Returns an event based on its Google Calendar ID. To retrieve an event using its iCalendar ID, call the events.list method using the iCalUID parameter.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.alwaysIncludeEmail - Deprecated and ignored. A value will always be returned in the email field for the organizer, creator and attendees, even if no real email address is available (i.e. a generated, non-working value will be provided).
     * @param {string} apiParams.calendarId - (Required) Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
     * @param {string} apiParams.eventId - (Required) Event identifier.
     * @param {integer} apiParams.maxAttendees - The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional.
     * @param {string} apiParams.timeZone - Time zone used in the response. Optional. The default is the time zone of the calendar.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.events.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('calendars/{calendarId}/events/{eventId}', 'GET', apiParams, clientConfig);

    /**
     * Imports an event. This operation is used to add a private copy of an existing event to a calendar. Only events with an eventType of default may be imported.
     * Deprecated behavior: If a non-default event is imported, its type will be changed to default and any event-type-specific properties it may have will be dropped.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.calendarId - (Required) Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
     * @param {integer} apiParams.conferenceDataVersion - Version number of conference data supported by the API client. Version 0 assumes no conference data support and ignores conference data in the event's body. Version 1 enables support for copying of ConferenceData as well as for creating new conferences using the createRequest field of conferenceData. The default is 0.
     * @param {boolean} apiParams.supportsAttachments - Whether API client performing operation supports event attachments. Optional. The default is False.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.events.import = async (apiParams = {}, clientConfig = {}) => this._makeRequest('calendars/{calendarId}/events/import', 'POST', apiParams, clientConfig);

    /**
     * Creates an event.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.calendarId - (Required) Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
     * @param {integer} apiParams.conferenceDataVersion - Version number of conference data supported by the API client. Version 0 assumes no conference data support and ignores conference data in the event's body. Version 1 enables support for copying of ConferenceData as well as for creating new conferences using the createRequest field of conferenceData. The default is 0.
     * @param {integer} apiParams.maxAttendees - The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional.
     * @param {boolean} apiParams.sendNotifications - Deprecated. Please use sendUpdates instead.
    
    Whether to send notifications about the creation of the new event. Note that some emails might still be sent even if you set the value to false. The default is false.
     * @param {string} apiParams.sendUpdates - Whether to send notifications about the creation of the new event. Note that some emails might still be sent. The default is false.
     * @param {boolean} apiParams.supportsAttachments - Whether API client performing operation supports event attachments. Optional. The default is False.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.events.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('calendars/{calendarId}/events', 'POST', apiParams, clientConfig);

    /**
     * Returns instances of the specified recurring event.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.alwaysIncludeEmail - Deprecated and ignored. A value will always be returned in the email field for the organizer, creator and attendees, even if no real email address is available (i.e. a generated, non-working value will be provided).
     * @param {string} apiParams.calendarId - (Required) Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
     * @param {string} apiParams.eventId - (Required) Recurring event identifier.
     * @param {integer} apiParams.maxAttendees - The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional.
     * @param {integer} apiParams.maxResults - Maximum number of events returned on one result page. By default the value is 250 events. The page size can never be larger than 2500 events. Optional.
     * @param {string} apiParams.originalStart - The original start time of the instance in the result. Optional.
     * @param {string} apiParams.pageToken - Token specifying which result page to return. Optional.
     * @param {boolean} apiParams.showDeleted - Whether to include deleted events (with status equals "cancelled") in the result. Cancelled instances of recurring events will still be included if singleEvents is False. Optional. The default is False.
     * @param {string} apiParams.timeMax - Upper bound (exclusive) for an event's start time to filter by. Optional. The default is not to filter by start time. Must be an RFC3339 timestamp with mandatory time zone offset.
     * @param {string} apiParams.timeMin - Lower bound (inclusive) for an event's end time to filter by. Optional. The default is not to filter by end time. Must be an RFC3339 timestamp with mandatory time zone offset.
     * @param {string} apiParams.timeZone - Time zone used in the response. Optional. The default is the time zone of the calendar.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.events.instances = async (apiParams = {}, clientConfig = {}) => this._makeRequest('calendars/{calendarId}/events/{eventId}/instances', 'GET', apiParams, clientConfig);

    /**
     * Returns events on the specified calendar.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.alwaysIncludeEmail - Deprecated and ignored.
     * @param {string} apiParams.calendarId - (Required) Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
     * @param {string} apiParams.eventTypes - Event types to return. Optional. This parameter can be repeated multiple times to return events of different types. If unset, returns all event types.
     * @param {string} apiParams.iCalUID - Specifies an event ID in the iCalendar format to be provided in the response. Optional. Use this if you want to search for an event by its iCalendar ID.
     * @param {integer} apiParams.maxAttendees - The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional.
     * @param {integer} apiParams.maxResults - Maximum number of events returned on one result page. The number of events in the resulting page may be less than this value, or none at all, even if there are more events matching the query. Incomplete pages can be detected by a non-empty nextPageToken field in the response. By default the value is 250 events. The page size can never be larger than 2500 events. Optional.
     * @param {string} apiParams.orderBy - The order of the events returned in the result. Optional. The default is an unspecified, stable order.
     * @param {string} apiParams.pageToken - Token specifying which result page to return. Optional.
     * @param {string} apiParams.privateExtendedProperty - Extended properties constraint specified as propertyName=value. Matches only private properties. This parameter might be repeated multiple times to return events that match all given constraints.
     * @param {string} apiParams.q - Free text search terms to find events that match these terms in the following fields:
    
    - summary 
    - description 
    - location 
    - attendee's displayName 
    - attendee's email 
    - organizer's displayName 
    - organizer's email 
    - workingLocationProperties.officeLocation.buildingId 
    - workingLocationProperties.officeLocation.deskId 
    - workingLocationProperties.officeLocation.label 
    - workingLocationProperties.customLocation.label 
    These search terms also match predefined keywords against all display title translations of working location, out-of-office, and focus-time events. For example, searching for "Office" or "Bureau" returns working location events of type officeLocation, whereas searching for "Out of office" or "Abwesend" returns out-of-office events. Optional.
     * @param {string} apiParams.sharedExtendedProperty - Extended properties constraint specified as propertyName=value. Matches only shared properties. This parameter might be repeated multiple times to return events that match all given constraints.
     * @param {boolean} apiParams.showDeleted - Whether to include deleted events (with status equals "cancelled") in the result. Cancelled instances of recurring events (but not the underlying recurring event) will still be included if showDeleted and singleEvents are both False. If showDeleted and singleEvents are both True, only single instances of deleted events (but not the underlying recurring events) are returned. Optional. The default is False.
     * @param {boolean} apiParams.showHiddenInvitations - Whether to include hidden invitations in the result. Optional. The default is False.
     * @param {boolean} apiParams.singleEvents - Whether to expand recurring events into instances and only return single one-off events and instances of recurring events, but not the underlying recurring events themselves. Optional. The default is False.
     * @param {string} apiParams.syncToken - Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. All events deleted since the previous list request will always be in the result set and it is not allowed to set showDeleted to False.
    There are several query parameters that cannot be specified together with nextSyncToken to ensure consistency of the client state.
    
    These are: 
    - iCalUID 
    - orderBy 
    - privateExtendedProperty 
    - q 
    - sharedExtendedProperty 
    - timeMin 
    - timeMax 
    - updatedMin All other query parameters should be the same as for the initial synchronization to avoid undefined behavior. If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken.
    Learn more about incremental synchronization.
    Optional. The default is to return all entries.
     * @param {string} apiParams.timeMax - Upper bound (exclusive) for an event's start time to filter by. Optional. The default is not to filter by start time. Must be an RFC3339 timestamp with mandatory time zone offset, for example, 2011-06-03T10:00:00-07:00, 2011-06-03T10:00:00Z. Milliseconds may be provided but are ignored. If timeMin is set, timeMax must be greater than timeMin.
     * @param {string} apiParams.timeMin - Lower bound (exclusive) for an event's end time to filter by. Optional. The default is not to filter by end time. Must be an RFC3339 timestamp with mandatory time zone offset, for example, 2011-06-03T10:00:00-07:00, 2011-06-03T10:00:00Z. Milliseconds may be provided but are ignored. If timeMax is set, timeMin must be smaller than timeMax.
     * @param {string} apiParams.timeZone - Time zone used in the response. Optional. The default is the time zone of the calendar.
     * @param {string} apiParams.updatedMin - Lower bound for an event's last modification time (as a RFC3339 timestamp) to filter by. When specified, entries deleted since this time will always be included regardless of showDeleted. Optional. The default is not to filter by last modification time.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.events.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('calendars/{calendarId}/events', 'GET', apiParams, clientConfig);

    /**
     * Moves an event to another calendar, i.e. changes an event's organizer. Note that only default events can be moved; birthday, focusTime, fromGmail, outOfOffice and workingLocation events cannot be moved.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.calendarId - (Required) Calendar identifier of the source calendar where the event currently is on.
     * @param {string} apiParams.destination - (Required) Calendar identifier of the target calendar where the event is to be moved to.
     * @param {string} apiParams.eventId - (Required) Event identifier.
     * @param {boolean} apiParams.sendNotifications - Deprecated. Please use sendUpdates instead.
    
    Whether to send notifications about the change of the event's organizer. Note that some emails might still be sent even if you set the value to false. The default is false.
     * @param {string} apiParams.sendUpdates - Guests who should receive notifications about the change of the event's organizer.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.events.move = async (apiParams = {}, clientConfig = {}) => this._makeRequest('calendars/{calendarId}/events/{eventId}/move', 'POST', apiParams, clientConfig);

    /**
     * Updates an event. This method supports patch semantics.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.alwaysIncludeEmail - Deprecated and ignored. A value will always be returned in the email field for the organizer, creator and attendees, even if no real email address is available (i.e. a generated, non-working value will be provided).
     * @param {string} apiParams.calendarId - (Required) Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
     * @param {integer} apiParams.conferenceDataVersion - Version number of conference data supported by the API client. Version 0 assumes no conference data support and ignores conference data in the event's body. Version 1 enables support for copying of ConferenceData as well as for creating new conferences using the createRequest field of conferenceData. The default is 0.
     * @param {string} apiParams.eventId - (Required) Event identifier.
     * @param {integer} apiParams.maxAttendees - The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional.
     * @param {boolean} apiParams.sendNotifications - Deprecated. Please use sendUpdates instead.
    
    Whether to send notifications about the event update (for example, description changes, etc.). Note that some emails might still be sent even if you set the value to false. The default is false.
     * @param {string} apiParams.sendUpdates - Guests who should receive notifications about the event update (for example, title changes, etc.).
     * @param {boolean} apiParams.supportsAttachments - Whether API client performing operation supports event attachments. Optional. The default is False.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.events.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('calendars/{calendarId}/events/{eventId}', 'PATCH', apiParams, clientConfig);

    /**
     * Creates an event based on a simple text string.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.calendarId - (Required) Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
     * @param {boolean} apiParams.sendNotifications - Deprecated. Please use sendUpdates instead.
    
    Whether to send notifications about the creation of the event. Note that some emails might still be sent even if you set the value to false. The default is false.
     * @param {string} apiParams.sendUpdates - Guests who should receive notifications about the creation of the new event.
     * @param {string} apiParams.text - (Required) The text describing the event to be created.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.events.quickAdd = async (apiParams = {}, clientConfig = {}) => this._makeRequest('calendars/{calendarId}/events/quickAdd', 'POST', apiParams, clientConfig);

    /**
     * Updates an event.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.alwaysIncludeEmail - Deprecated and ignored. A value will always be returned in the email field for the organizer, creator and attendees, even if no real email address is available (i.e. a generated, non-working value will be provided).
     * @param {string} apiParams.calendarId - (Required) Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
     * @param {integer} apiParams.conferenceDataVersion - Version number of conference data supported by the API client. Version 0 assumes no conference data support and ignores conference data in the event's body. Version 1 enables support for copying of ConferenceData as well as for creating new conferences using the createRequest field of conferenceData. The default is 0.
     * @param {string} apiParams.eventId - (Required) Event identifier.
     * @param {integer} apiParams.maxAttendees - The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional.
     * @param {boolean} apiParams.sendNotifications - Deprecated. Please use sendUpdates instead.
    
    Whether to send notifications about the event update (for example, description changes, etc.). Note that some emails might still be sent even if you set the value to false. The default is false.
     * @param {string} apiParams.sendUpdates - Guests who should receive notifications about the event update (for example, title changes, etc.).
     * @param {boolean} apiParams.supportsAttachments - Whether API client performing operation supports event attachments. Optional. The default is False.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.events.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('calendars/{calendarId}/events/{eventId}', 'PUT', apiParams, clientConfig);

    /**
     * Watch for changes to Events resources.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.alwaysIncludeEmail - Deprecated and ignored.
     * @param {string} apiParams.calendarId - (Required) Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
     * @param {string} apiParams.eventTypes - Event types to return. Optional. This parameter can be repeated multiple times to return events of different types. If unset, returns all event types.
     * @param {string} apiParams.iCalUID - Specifies an event ID in the iCalendar format to be provided in the response. Optional. Use this if you want to search for an event by its iCalendar ID.
     * @param {integer} apiParams.maxAttendees - The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional.
     * @param {integer} apiParams.maxResults - Maximum number of events returned on one result page. The number of events in the resulting page may be less than this value, or none at all, even if there are more events matching the query. Incomplete pages can be detected by a non-empty nextPageToken field in the response. By default the value is 250 events. The page size can never be larger than 2500 events. Optional.
     * @param {string} apiParams.orderBy - The order of the events returned in the result. Optional. The default is an unspecified, stable order.
     * @param {string} apiParams.pageToken - Token specifying which result page to return. Optional.
     * @param {string} apiParams.privateExtendedProperty - Extended properties constraint specified as propertyName=value. Matches only private properties. This parameter might be repeated multiple times to return events that match all given constraints.
     * @param {string} apiParams.q - Free text search terms to find events that match these terms in the following fields:
    
    - summary 
    - description 
    - location 
    - attendee's displayName 
    - attendee's email 
    - organizer's displayName 
    - organizer's email 
    - workingLocationProperties.officeLocation.buildingId 
    - workingLocationProperties.officeLocation.deskId 
    - workingLocationProperties.officeLocation.label 
    - workingLocationProperties.customLocation.label 
    These search terms also match predefined keywords against all display title translations of working location, out-of-office, and focus-time events. For example, searching for "Office" or "Bureau" returns working location events of type officeLocation, whereas searching for "Out of office" or "Abwesend" returns out-of-office events. Optional.
     * @param {string} apiParams.sharedExtendedProperty - Extended properties constraint specified as propertyName=value. Matches only shared properties. This parameter might be repeated multiple times to return events that match all given constraints.
     * @param {boolean} apiParams.showDeleted - Whether to include deleted events (with status equals "cancelled") in the result. Cancelled instances of recurring events (but not the underlying recurring event) will still be included if showDeleted and singleEvents are both False. If showDeleted and singleEvents are both True, only single instances of deleted events (but not the underlying recurring events) are returned. Optional. The default is False.
     * @param {boolean} apiParams.showHiddenInvitations - Whether to include hidden invitations in the result. Optional. The default is False.
     * @param {boolean} apiParams.singleEvents - Whether to expand recurring events into instances and only return single one-off events and instances of recurring events, but not the underlying recurring events themselves. Optional. The default is False.
     * @param {string} apiParams.syncToken - Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. All events deleted since the previous list request will always be in the result set and it is not allowed to set showDeleted to False.
    There are several query parameters that cannot be specified together with nextSyncToken to ensure consistency of the client state.
    
    These are: 
    - iCalUID 
    - orderBy 
    - privateExtendedProperty 
    - q 
    - sharedExtendedProperty 
    - timeMin 
    - timeMax 
    - updatedMin All other query parameters should be the same as for the initial synchronization to avoid undefined behavior. If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken.
    Learn more about incremental synchronization.
    Optional. The default is to return all entries.
     * @param {string} apiParams.timeMax - Upper bound (exclusive) for an event's start time to filter by. Optional. The default is not to filter by start time. Must be an RFC3339 timestamp with mandatory time zone offset, for example, 2011-06-03T10:00:00-07:00, 2011-06-03T10:00:00Z. Milliseconds may be provided but are ignored. If timeMin is set, timeMax must be greater than timeMin.
     * @param {string} apiParams.timeMin - Lower bound (exclusive) for an event's end time to filter by. Optional. The default is not to filter by end time. Must be an RFC3339 timestamp with mandatory time zone offset, for example, 2011-06-03T10:00:00-07:00, 2011-06-03T10:00:00Z. Milliseconds may be provided but are ignored. If timeMax is set, timeMin must be smaller than timeMax.
     * @param {string} apiParams.timeZone - Time zone used in the response. Optional. The default is the time zone of the calendar.
     * @param {string} apiParams.updatedMin - Lower bound for an event's last modification time (as a RFC3339 timestamp) to filter by. When specified, entries deleted since this time will always be included regardless of showDeleted. Optional. The default is not to filter by last modification time.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.events.watch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('calendars/{calendarId}/events/watch', 'POST', apiParams, clientConfig);

    this.freebusy = {};

    /**
     * Returns free/busy information for a set of calendars.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.freebusy.query = async (apiParams = {}, clientConfig = {}) => this._makeRequest('freeBusy', 'POST', apiParams, clientConfig);

    this.settings = {};

    /**
     * Returns a single user setting.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.setting - (Required) The id of the user setting.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.settings.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('users/me/settings/{setting}', 'GET', apiParams, clientConfig);

    /**
     * Returns all user settings for the authenticated user.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.maxResults - Maximum number of entries returned on one result page. By default the value is 100 entries. The page size can never be larger than 250 entries. Optional.
     * @param {string} apiParams.pageToken - Token specifying which result page to return. Optional.
     * @param {string} apiParams.syncToken - Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then.
    If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken.
    Learn more about incremental synchronization.
    Optional. The default is to return all entries.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.settings.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('users/me/settings', 'GET', apiParams, clientConfig);

    /**
     * Watch for changes to Settings resources.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.maxResults - Maximum number of entries returned on one result page. By default the value is 100 entries. The page size can never be larger than 250 entries. Optional.
     * @param {string} apiParams.pageToken - Token specifying which result page to return. Optional.
     * @param {string} apiParams.syncToken - Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then.
    If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken.
    Learn more about incremental synchronization.
    Optional. The default is to return all entries.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.settings.watch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('users/me/settings/watch', 'POST', apiParams, clientConfig);
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
