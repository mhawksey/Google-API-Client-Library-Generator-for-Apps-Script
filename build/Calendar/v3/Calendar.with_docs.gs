
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
    // "Private" properties using the underscore convention
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://www.googleapis.com/';
    this._servicePath = 'calendar/v3/';

    // --- Public Interface Initialization ---

    this.acl = {};

    /**
     * Deletes an access control rule.
     * @param {string} params.calendarId - (Required) Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
     * @param {string} params.ruleId - (Required) ACL rule identifier.
     * @return {object} The API response object.
     */
    this.acl.delete = (params) => this._makeRequest('calendars/{calendarId}/acl/{ruleId}', 'DELETE', params);

    /**
     * Returns an access control rule.
     * @param {string} params.calendarId - (Required) Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
     * @param {string} params.ruleId - (Required) ACL rule identifier.
     * @return {object} The API response object.
     */
    this.acl.get = (params) => this._makeRequest('calendars/{calendarId}/acl/{ruleId}', 'GET', params);

    /**
     * Creates an access control rule.
     * @param {string} params.calendarId - (Required) Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
     * @param {boolean} params.sendNotifications - Whether to send notifications about the calendar sharing change. Optional. The default is True.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.acl.insert = (params) => this._makeRequest('calendars/{calendarId}/acl', 'POST', params);

    /**
     * Returns the rules in the access control list for the calendar.
     * @param {string} params.calendarId - (Required) Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
     * @param {integer} params.maxResults - Maximum number of entries returned on one result page. By default the value is 100 entries. The page size can never be larger than 250 entries. Optional.
     * @param {string} params.pageToken - Token specifying which result page to return. Optional.
     * @param {boolean} params.showDeleted - Whether to include deleted ACLs in the result. Deleted ACLs are represented by role equal to "none". Deleted ACLs will always be included if syncToken is provided. Optional. The default is False.
     * @param {string} params.syncToken - Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. All entries deleted since the previous list request will always be in the result set and it is not allowed to set showDeleted to False.
    If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken.
    Learn more about incremental synchronization.
    Optional. The default is to return all entries.
     * @return {object} The API response object.
     */
    this.acl.list = (params) => this._makeRequest('calendars/{calendarId}/acl', 'GET', params);

    /**
     * Updates an access control rule. This method supports patch semantics.
     * @param {string} params.calendarId - (Required) Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
     * @param {string} params.ruleId - (Required) ACL rule identifier.
     * @param {boolean} params.sendNotifications - Whether to send notifications about the calendar sharing change. Note that there are no notifications on access removal. Optional. The default is True.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.acl.patch = (params) => this._makeRequest('calendars/{calendarId}/acl/{ruleId}', 'PATCH', params);

    /**
     * Updates an access control rule.
     * @param {string} params.calendarId - (Required) Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
     * @param {string} params.ruleId - (Required) ACL rule identifier.
     * @param {boolean} params.sendNotifications - Whether to send notifications about the calendar sharing change. Note that there are no notifications on access removal. Optional. The default is True.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.acl.update = (params) => this._makeRequest('calendars/{calendarId}/acl/{ruleId}', 'PUT', params);

    /**
     * Watch for changes to ACL resources.
     * @param {string} params.calendarId - (Required) Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
     * @param {integer} params.maxResults - Maximum number of entries returned on one result page. By default the value is 100 entries. The page size can never be larger than 250 entries. Optional.
     * @param {string} params.pageToken - Token specifying which result page to return. Optional.
     * @param {boolean} params.showDeleted - Whether to include deleted ACLs in the result. Deleted ACLs are represented by role equal to "none". Deleted ACLs will always be included if syncToken is provided. Optional. The default is False.
     * @param {string} params.syncToken - Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. All entries deleted since the previous list request will always be in the result set and it is not allowed to set showDeleted to False.
    If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken.
    Learn more about incremental synchronization.
    Optional. The default is to return all entries.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.acl.watch = (params) => this._makeRequest('calendars/{calendarId}/acl/watch', 'POST', params);

    this.calendarList = {};

    /**
     * Removes a calendar from the user's calendar list.
     * @param {string} params.calendarId - (Required) Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
     * @return {object} The API response object.
     */
    this.calendarList.delete = (params) => this._makeRequest('users/me/calendarList/{calendarId}', 'DELETE', params);

    /**
     * Returns a calendar from the user's calendar list.
     * @param {string} params.calendarId - (Required) Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
     * @return {object} The API response object.
     */
    this.calendarList.get = (params) => this._makeRequest('users/me/calendarList/{calendarId}', 'GET', params);

    /**
     * Inserts an existing calendar into the user's calendar list.
     * @param {boolean} params.colorRgbFormat - Whether to use the foregroundColor and backgroundColor fields to write the calendar colors (RGB). If this feature is used, the index-based colorId field will be set to the best matching option automatically. Optional. The default is False.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.calendarList.insert = (params) => this._makeRequest('users/me/calendarList', 'POST', params);

    /**
     * Returns the calendars on the user's calendar list.
     * @param {integer} params.maxResults - Maximum number of entries returned on one result page. By default the value is 100 entries. The page size can never be larger than 250 entries. Optional.
     * @param {string} params.minAccessRole - The minimum access role for the user in the returned entries. Optional. The default is no restriction.
     * @param {string} params.pageToken - Token specifying which result page to return. Optional.
     * @param {boolean} params.showDeleted - Whether to include deleted calendar list entries in the result. Optional. The default is False.
     * @param {boolean} params.showHidden - Whether to show hidden entries. Optional. The default is False.
     * @param {string} params.syncToken - Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. If only read-only fields such as calendar properties or ACLs have changed, the entry won't be returned. All entries deleted and hidden since the previous list request will always be in the result set and it is not allowed to set showDeleted neither showHidden to False.
    To ensure client state consistency minAccessRole query parameter cannot be specified together with nextSyncToken.
    If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken.
    Learn more about incremental synchronization.
    Optional. The default is to return all entries.
     * @return {object} The API response object.
     */
    this.calendarList.list = (params) => this._makeRequest('users/me/calendarList', 'GET', params);

    /**
     * Updates an existing calendar on the user's calendar list. This method supports patch semantics.
     * @param {string} params.calendarId - (Required) Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
     * @param {boolean} params.colorRgbFormat - Whether to use the foregroundColor and backgroundColor fields to write the calendar colors (RGB). If this feature is used, the index-based colorId field will be set to the best matching option automatically. Optional. The default is False.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.calendarList.patch = (params) => this._makeRequest('users/me/calendarList/{calendarId}', 'PATCH', params);

    /**
     * Updates an existing calendar on the user's calendar list.
     * @param {string} params.calendarId - (Required) Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
     * @param {boolean} params.colorRgbFormat - Whether to use the foregroundColor and backgroundColor fields to write the calendar colors (RGB). If this feature is used, the index-based colorId field will be set to the best matching option automatically. Optional. The default is False.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.calendarList.update = (params) => this._makeRequest('users/me/calendarList/{calendarId}', 'PUT', params);

    /**
     * Watch for changes to CalendarList resources.
     * @param {integer} params.maxResults - Maximum number of entries returned on one result page. By default the value is 100 entries. The page size can never be larger than 250 entries. Optional.
     * @param {string} params.minAccessRole - The minimum access role for the user in the returned entries. Optional. The default is no restriction.
     * @param {string} params.pageToken - Token specifying which result page to return. Optional.
     * @param {boolean} params.showDeleted - Whether to include deleted calendar list entries in the result. Optional. The default is False.
     * @param {boolean} params.showHidden - Whether to show hidden entries. Optional. The default is False.
     * @param {string} params.syncToken - Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. If only read-only fields such as calendar properties or ACLs have changed, the entry won't be returned. All entries deleted and hidden since the previous list request will always be in the result set and it is not allowed to set showDeleted neither showHidden to False.
    To ensure client state consistency minAccessRole query parameter cannot be specified together with nextSyncToken.
    If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken.
    Learn more about incremental synchronization.
    Optional. The default is to return all entries.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.calendarList.watch = (params) => this._makeRequest('users/me/calendarList/watch', 'POST', params);

    this.calendars = {};

    /**
     * Clears a primary calendar. This operation deletes all events associated with the primary calendar of an account.
     * @param {string} params.calendarId - (Required) Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
     * @return {object} The API response object.
     */
    this.calendars.clear = (params) => this._makeRequest('calendars/{calendarId}/clear', 'POST', params);

    /**
     * Deletes a secondary calendar. Use calendars.clear for clearing all events on primary calendars.
     * @param {string} params.calendarId - (Required) Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
     * @return {object} The API response object.
     */
    this.calendars.delete = (params) => this._makeRequest('calendars/{calendarId}', 'DELETE', params);

    /**
     * Returns metadata for a calendar.
     * @param {string} params.calendarId - (Required) Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
     * @return {object} The API response object.
     */
    this.calendars.get = (params) => this._makeRequest('calendars/{calendarId}', 'GET', params);

    /**
     * Creates a secondary calendar.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.calendars.insert = (params) => this._makeRequest('calendars', 'POST', params);

    /**
     * Updates metadata for a calendar. This method supports patch semantics.
     * @param {string} params.calendarId - (Required) Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.calendars.patch = (params) => this._makeRequest('calendars/{calendarId}', 'PATCH', params);

    /**
     * Updates metadata for a calendar.
     * @param {string} params.calendarId - (Required) Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.calendars.update = (params) => this._makeRequest('calendars/{calendarId}', 'PUT', params);

    this.channels = {};

    /**
     * Stop watching resources through this channel
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.channels.stop = (params) => this._makeRequest('channels/stop', 'POST', params);

    this.colors = {};

    /**
     * Returns the color definitions for calendars and events.
     * @return {object} The API response object.
     */
    this.colors.get = (params) => this._makeRequest('colors', 'GET', params);

    this.events = {};

    /**
     * Deletes an event.
     * @param {string} params.calendarId - (Required) Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
     * @param {string} params.eventId - (Required) Event identifier.
     * @param {boolean} params.sendNotifications - Deprecated. Please use sendUpdates instead.
    
    Whether to send notifications about the deletion of the event. Note that some emails might still be sent even if you set the value to false. The default is false.
     * @param {string} params.sendUpdates - Guests who should receive notifications about the deletion of the event.
     * @return {object} The API response object.
     */
    this.events.delete = (params) => this._makeRequest('calendars/{calendarId}/events/{eventId}', 'DELETE', params);

    /**
     * Returns an event based on its Google Calendar ID. To retrieve an event using its iCalendar ID, call the events.list method using the iCalUID parameter.
     * @param {boolean} params.alwaysIncludeEmail - Deprecated and ignored. A value will always be returned in the email field for the organizer, creator and attendees, even if no real email address is available (i.e. a generated, non-working value will be provided).
     * @param {string} params.calendarId - (Required) Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
     * @param {string} params.eventId - (Required) Event identifier.
     * @param {integer} params.maxAttendees - The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional.
     * @param {string} params.timeZone - Time zone used in the response. Optional. The default is the time zone of the calendar.
     * @return {object} The API response object.
     */
    this.events.get = (params) => this._makeRequest('calendars/{calendarId}/events/{eventId}', 'GET', params);

    /**
     * Imports an event. This operation is used to add a private copy of an existing event to a calendar. Only events with an eventType of default may be imported.
     * Deprecated behavior: If a non-default event is imported, its type will be changed to default and any event-type-specific properties it may have will be dropped.
     * @param {string} params.calendarId - (Required) Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
     * @param {integer} params.conferenceDataVersion - Version number of conference data supported by the API client. Version 0 assumes no conference data support and ignores conference data in the event's body. Version 1 enables support for copying of ConferenceData as well as for creating new conferences using the createRequest field of conferenceData. The default is 0.
     * @param {boolean} params.supportsAttachments - Whether API client performing operation supports event attachments. Optional. The default is False.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.events.import = (params) => this._makeRequest('calendars/{calendarId}/events/import', 'POST', params);

    /**
     * Creates an event.
     * @param {string} params.calendarId - (Required) Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
     * @param {integer} params.conferenceDataVersion - Version number of conference data supported by the API client. Version 0 assumes no conference data support and ignores conference data in the event's body. Version 1 enables support for copying of ConferenceData as well as for creating new conferences using the createRequest field of conferenceData. The default is 0.
     * @param {integer} params.maxAttendees - The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional.
     * @param {boolean} params.sendNotifications - Deprecated. Please use sendUpdates instead.
    
    Whether to send notifications about the creation of the new event. Note that some emails might still be sent even if you set the value to false. The default is false.
     * @param {string} params.sendUpdates - Whether to send notifications about the creation of the new event. Note that some emails might still be sent. The default is false.
     * @param {boolean} params.supportsAttachments - Whether API client performing operation supports event attachments. Optional. The default is False.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.events.insert = (params) => this._makeRequest('calendars/{calendarId}/events', 'POST', params);

    /**
     * Returns instances of the specified recurring event.
     * @param {boolean} params.alwaysIncludeEmail - Deprecated and ignored. A value will always be returned in the email field for the organizer, creator and attendees, even if no real email address is available (i.e. a generated, non-working value will be provided).
     * @param {string} params.calendarId - (Required) Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
     * @param {string} params.eventId - (Required) Recurring event identifier.
     * @param {integer} params.maxAttendees - The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional.
     * @param {integer} params.maxResults - Maximum number of events returned on one result page. By default the value is 250 events. The page size can never be larger than 2500 events. Optional.
     * @param {string} params.originalStart - The original start time of the instance in the result. Optional.
     * @param {string} params.pageToken - Token specifying which result page to return. Optional.
     * @param {boolean} params.showDeleted - Whether to include deleted events (with status equals "cancelled") in the result. Cancelled instances of recurring events will still be included if singleEvents is False. Optional. The default is False.
     * @param {string} params.timeMax - Upper bound (exclusive) for an event's start time to filter by. Optional. The default is not to filter by start time. Must be an RFC3339 timestamp with mandatory time zone offset.
     * @param {string} params.timeMin - Lower bound (inclusive) for an event's end time to filter by. Optional. The default is not to filter by end time. Must be an RFC3339 timestamp with mandatory time zone offset.
     * @param {string} params.timeZone - Time zone used in the response. Optional. The default is the time zone of the calendar.
     * @return {object} The API response object.
     */
    this.events.instances = (params) => this._makeRequest('calendars/{calendarId}/events/{eventId}/instances', 'GET', params);

    /**
     * Returns events on the specified calendar.
     * @param {boolean} params.alwaysIncludeEmail - Deprecated and ignored.
     * @param {string} params.calendarId - (Required) Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
     * @param {string} params.eventTypes - Event types to return. Optional. This parameter can be repeated multiple times to return events of different types. If unset, returns all event types.
     * @param {string} params.iCalUID - Specifies an event ID in the iCalendar format to be provided in the response. Optional. Use this if you want to search for an event by its iCalendar ID.
     * @param {integer} params.maxAttendees - The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional.
     * @param {integer} params.maxResults - Maximum number of events returned on one result page. The number of events in the resulting page may be less than this value, or none at all, even if there are more events matching the query. Incomplete pages can be detected by a non-empty nextPageToken field in the response. By default the value is 250 events. The page size can never be larger than 2500 events. Optional.
     * @param {string} params.orderBy - The order of the events returned in the result. Optional. The default is an unspecified, stable order.
     * @param {string} params.pageToken - Token specifying which result page to return. Optional.
     * @param {string} params.privateExtendedProperty - Extended properties constraint specified as propertyName=value. Matches only private properties. This parameter might be repeated multiple times to return events that match all given constraints.
     * @param {string} params.q - Free text search terms to find events that match these terms in the following fields:
    
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
     * @param {string} params.sharedExtendedProperty - Extended properties constraint specified as propertyName=value. Matches only shared properties. This parameter might be repeated multiple times to return events that match all given constraints.
     * @param {boolean} params.showDeleted - Whether to include deleted events (with status equals "cancelled") in the result. Cancelled instances of recurring events (but not the underlying recurring event) will still be included if showDeleted and singleEvents are both False. If showDeleted and singleEvents are both True, only single instances of deleted events (but not the underlying recurring events) are returned. Optional. The default is False.
     * @param {boolean} params.showHiddenInvitations - Whether to include hidden invitations in the result. Optional. The default is False.
     * @param {boolean} params.singleEvents - Whether to expand recurring events into instances and only return single one-off events and instances of recurring events, but not the underlying recurring events themselves. Optional. The default is False.
     * @param {string} params.syncToken - Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. All events deleted since the previous list request will always be in the result set and it is not allowed to set showDeleted to False.
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
     * @param {string} params.timeMax - Upper bound (exclusive) for an event's start time to filter by. Optional. The default is not to filter by start time. Must be an RFC3339 timestamp with mandatory time zone offset, for example, 2011-06-03T10:00:00-07:00, 2011-06-03T10:00:00Z. Milliseconds may be provided but are ignored. If timeMin is set, timeMax must be greater than timeMin.
     * @param {string} params.timeMin - Lower bound (exclusive) for an event's end time to filter by. Optional. The default is not to filter by end time. Must be an RFC3339 timestamp with mandatory time zone offset, for example, 2011-06-03T10:00:00-07:00, 2011-06-03T10:00:00Z. Milliseconds may be provided but are ignored. If timeMax is set, timeMin must be smaller than timeMax.
     * @param {string} params.timeZone - Time zone used in the response. Optional. The default is the time zone of the calendar.
     * @param {string} params.updatedMin - Lower bound for an event's last modification time (as a RFC3339 timestamp) to filter by. When specified, entries deleted since this time will always be included regardless of showDeleted. Optional. The default is not to filter by last modification time.
     * @return {object} The API response object.
     */
    this.events.list = (params) => this._makeRequest('calendars/{calendarId}/events', 'GET', params);

    /**
     * Moves an event to another calendar, i.e. changes an event's organizer. Note that only default events can be moved; birthday, focusTime, fromGmail, outOfOffice and workingLocation events cannot be moved.
     * @param {string} params.calendarId - (Required) Calendar identifier of the source calendar where the event currently is on.
     * @param {string} params.destination - (Required) Calendar identifier of the target calendar where the event is to be moved to.
     * @param {string} params.eventId - (Required) Event identifier.
     * @param {boolean} params.sendNotifications - Deprecated. Please use sendUpdates instead.
    
    Whether to send notifications about the change of the event's organizer. Note that some emails might still be sent even if you set the value to false. The default is false.
     * @param {string} params.sendUpdates - Guests who should receive notifications about the change of the event's organizer.
     * @return {object} The API response object.
     */
    this.events.move = (params) => this._makeRequest('calendars/{calendarId}/events/{eventId}/move', 'POST', params);

    /**
     * Updates an event. This method supports patch semantics.
     * @param {boolean} params.alwaysIncludeEmail - Deprecated and ignored. A value will always be returned in the email field for the organizer, creator and attendees, even if no real email address is available (i.e. a generated, non-working value will be provided).
     * @param {string} params.calendarId - (Required) Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
     * @param {integer} params.conferenceDataVersion - Version number of conference data supported by the API client. Version 0 assumes no conference data support and ignores conference data in the event's body. Version 1 enables support for copying of ConferenceData as well as for creating new conferences using the createRequest field of conferenceData. The default is 0.
     * @param {string} params.eventId - (Required) Event identifier.
     * @param {integer} params.maxAttendees - The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional.
     * @param {boolean} params.sendNotifications - Deprecated. Please use sendUpdates instead.
    
    Whether to send notifications about the event update (for example, description changes, etc.). Note that some emails might still be sent even if you set the value to false. The default is false.
     * @param {string} params.sendUpdates - Guests who should receive notifications about the event update (for example, title changes, etc.).
     * @param {boolean} params.supportsAttachments - Whether API client performing operation supports event attachments. Optional. The default is False.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.events.patch = (params) => this._makeRequest('calendars/{calendarId}/events/{eventId}', 'PATCH', params);

    /**
     * Creates an event based on a simple text string.
     * @param {string} params.calendarId - (Required) Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
     * @param {boolean} params.sendNotifications - Deprecated. Please use sendUpdates instead.
    
    Whether to send notifications about the creation of the event. Note that some emails might still be sent even if you set the value to false. The default is false.
     * @param {string} params.sendUpdates - Guests who should receive notifications about the creation of the new event.
     * @param {string} params.text - (Required) The text describing the event to be created.
     * @return {object} The API response object.
     */
    this.events.quickAdd = (params) => this._makeRequest('calendars/{calendarId}/events/quickAdd', 'POST', params);

    /**
     * Updates an event.
     * @param {boolean} params.alwaysIncludeEmail - Deprecated and ignored. A value will always be returned in the email field for the organizer, creator and attendees, even if no real email address is available (i.e. a generated, non-working value will be provided).
     * @param {string} params.calendarId - (Required) Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
     * @param {integer} params.conferenceDataVersion - Version number of conference data supported by the API client. Version 0 assumes no conference data support and ignores conference data in the event's body. Version 1 enables support for copying of ConferenceData as well as for creating new conferences using the createRequest field of conferenceData. The default is 0.
     * @param {string} params.eventId - (Required) Event identifier.
     * @param {integer} params.maxAttendees - The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional.
     * @param {boolean} params.sendNotifications - Deprecated. Please use sendUpdates instead.
    
    Whether to send notifications about the event update (for example, description changes, etc.). Note that some emails might still be sent even if you set the value to false. The default is false.
     * @param {string} params.sendUpdates - Guests who should receive notifications about the event update (for example, title changes, etc.).
     * @param {boolean} params.supportsAttachments - Whether API client performing operation supports event attachments. Optional. The default is False.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.events.update = (params) => this._makeRequest('calendars/{calendarId}/events/{eventId}', 'PUT', params);

    /**
     * Watch for changes to Events resources.
     * @param {boolean} params.alwaysIncludeEmail - Deprecated and ignored.
     * @param {string} params.calendarId - (Required) Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword.
     * @param {string} params.eventTypes - Event types to return. Optional. This parameter can be repeated multiple times to return events of different types. If unset, returns all event types.
     * @param {string} params.iCalUID - Specifies an event ID in the iCalendar format to be provided in the response. Optional. Use this if you want to search for an event by its iCalendar ID.
     * @param {integer} params.maxAttendees - The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional.
     * @param {integer} params.maxResults - Maximum number of events returned on one result page. The number of events in the resulting page may be less than this value, or none at all, even if there are more events matching the query. Incomplete pages can be detected by a non-empty nextPageToken field in the response. By default the value is 250 events. The page size can never be larger than 2500 events. Optional.
     * @param {string} params.orderBy - The order of the events returned in the result. Optional. The default is an unspecified, stable order.
     * @param {string} params.pageToken - Token specifying which result page to return. Optional.
     * @param {string} params.privateExtendedProperty - Extended properties constraint specified as propertyName=value. Matches only private properties. This parameter might be repeated multiple times to return events that match all given constraints.
     * @param {string} params.q - Free text search terms to find events that match these terms in the following fields:
    
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
     * @param {string} params.sharedExtendedProperty - Extended properties constraint specified as propertyName=value. Matches only shared properties. This parameter might be repeated multiple times to return events that match all given constraints.
     * @param {boolean} params.showDeleted - Whether to include deleted events (with status equals "cancelled") in the result. Cancelled instances of recurring events (but not the underlying recurring event) will still be included if showDeleted and singleEvents are both False. If showDeleted and singleEvents are both True, only single instances of deleted events (but not the underlying recurring events) are returned. Optional. The default is False.
     * @param {boolean} params.showHiddenInvitations - Whether to include hidden invitations in the result. Optional. The default is False.
     * @param {boolean} params.singleEvents - Whether to expand recurring events into instances and only return single one-off events and instances of recurring events, but not the underlying recurring events themselves. Optional. The default is False.
     * @param {string} params.syncToken - Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. All events deleted since the previous list request will always be in the result set and it is not allowed to set showDeleted to False.
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
     * @param {string} params.timeMax - Upper bound (exclusive) for an event's start time to filter by. Optional. The default is not to filter by start time. Must be an RFC3339 timestamp with mandatory time zone offset, for example, 2011-06-03T10:00:00-07:00, 2011-06-03T10:00:00Z. Milliseconds may be provided but are ignored. If timeMin is set, timeMax must be greater than timeMin.
     * @param {string} params.timeMin - Lower bound (exclusive) for an event's end time to filter by. Optional. The default is not to filter by end time. Must be an RFC3339 timestamp with mandatory time zone offset, for example, 2011-06-03T10:00:00-07:00, 2011-06-03T10:00:00Z. Milliseconds may be provided but are ignored. If timeMax is set, timeMin must be smaller than timeMax.
     * @param {string} params.timeZone - Time zone used in the response. Optional. The default is the time zone of the calendar.
     * @param {string} params.updatedMin - Lower bound for an event's last modification time (as a RFC3339 timestamp) to filter by. When specified, entries deleted since this time will always be included regardless of showDeleted. Optional. The default is not to filter by last modification time.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.events.watch = (params) => this._makeRequest('calendars/{calendarId}/events/watch', 'POST', params);

    this.freebusy = {};

    /**
     * Returns free/busy information for a set of calendars.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.freebusy.query = (params) => this._makeRequest('freeBusy', 'POST', params);

    this.settings = {};

    /**
     * Returns a single user setting.
     * @param {string} params.setting - (Required) The id of the user setting.
     * @return {object} The API response object.
     */
    this.settings.get = (params) => this._makeRequest('users/me/settings/{setting}', 'GET', params);

    /**
     * Returns all user settings for the authenticated user.
     * @param {integer} params.maxResults - Maximum number of entries returned on one result page. By default the value is 100 entries. The page size can never be larger than 250 entries. Optional.
     * @param {string} params.pageToken - Token specifying which result page to return. Optional.
     * @param {string} params.syncToken - Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then.
    If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken.
    Learn more about incremental synchronization.
    Optional. The default is to return all entries.
     * @return {object} The API response object.
     */
    this.settings.list = (params) => this._makeRequest('users/me/settings', 'GET', params);

    /**
     * Watch for changes to Settings resources.
     * @param {integer} params.maxResults - Maximum number of entries returned on one result page. By default the value is 100 entries. The page size can never be larger than 250 entries. Optional.
     * @param {string} params.pageToken - Token specifying which result page to return. Optional.
     * @param {string} params.syncToken - Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then.
    If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken.
    Learn more about incremental synchronization.
    Optional. The default is to return all entries.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.settings.watch = (params) => this._makeRequest('users/me/settings/watch', 'POST', params);
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
