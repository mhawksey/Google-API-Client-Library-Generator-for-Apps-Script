# Calendar API - Apps Script Client Library

Auto-generated client library for using the **Calendar API (version: v3)** in Google Apps Script.

## Metadata

- **Last Checked:** Mon, 28 Jul 2025 21:36:15 GMT
- **Last Modified:** Sun, 27 Jul 2025 12:22:41 GMT
- **Created:** Sun, 20 Jul 2025 16:14:56 GMT



---

## API Reference

### `acl`

#### `acl.delete()`

Deletes an access control rule.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.calendarId` | `string` | Yes | Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword. |
| `params.ruleId` | `string` | Yes | ACL rule identifier. |

#### `acl.get()`

Returns an access control rule.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.calendarId` | `string` | Yes | Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword. |
| `params.ruleId` | `string` | Yes | ACL rule identifier. |

#### `acl.insert()`

Creates an access control rule.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.calendarId` | `string` | Yes | Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword. |
| `params.sendNotifications` | `boolean` | No | Whether to send notifications about the calendar sharing change. Optional. The default is True. |
| `params.resource` | `object` | Yes | The request body. |

#### `acl.list()`

Returns the rules in the access control list for the calendar.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.calendarId` | `string` | Yes | Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword. |
| `params.maxResults` | `integer` | No | Maximum number of entries returned on one result page. By default the value is 100 entries. The page size can never be larger than 250 entries. Optional. |
| `params.pageToken` | `string` | No | Token specifying which result page to return. Optional. |
| `params.showDeleted` | `boolean` | No | Whether to include deleted ACLs in the result. Deleted ACLs are represented by role equal to "none". Deleted ACLs will always be included if syncToken is provided. Optional. The default is False. |
| `params.syncToken` | `string` | No | Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. All entries deleted since the previous list request will always be in the result set and it is not allowed to set showDeleted to False.
If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken.
Learn more about incremental synchronization.
Optional. The default is to return all entries. |

#### `acl.patch()`

Updates an access control rule. This method supports patch semantics.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.calendarId` | `string` | Yes | Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword. |
| `params.ruleId` | `string` | Yes | ACL rule identifier. |
| `params.sendNotifications` | `boolean` | No | Whether to send notifications about the calendar sharing change. Note that there are no notifications on access removal. Optional. The default is True. |
| `params.resource` | `object` | Yes | The request body. |

#### `acl.update()`

Updates an access control rule.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.calendarId` | `string` | Yes | Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword. |
| `params.ruleId` | `string` | Yes | ACL rule identifier. |
| `params.sendNotifications` | `boolean` | No | Whether to send notifications about the calendar sharing change. Note that there are no notifications on access removal. Optional. The default is True. |
| `params.resource` | `object` | Yes | The request body. |

#### `acl.watch()`

Watch for changes to ACL resources.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.calendarId` | `string` | Yes | Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword. |
| `params.maxResults` | `integer` | No | Maximum number of entries returned on one result page. By default the value is 100 entries. The page size can never be larger than 250 entries. Optional. |
| `params.pageToken` | `string` | No | Token specifying which result page to return. Optional. |
| `params.showDeleted` | `boolean` | No | Whether to include deleted ACLs in the result. Deleted ACLs are represented by role equal to "none". Deleted ACLs will always be included if syncToken is provided. Optional. The default is False. |
| `params.syncToken` | `string` | No | Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. All entries deleted since the previous list request will always be in the result set and it is not allowed to set showDeleted to False.
If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken.
Learn more about incremental synchronization.
Optional. The default is to return all entries. |
| `params.resource` | `object` | Yes | The request body. |

### `calendarList`

#### `calendarList.delete()`

Removes a calendar from the user's calendar list.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.calendarId` | `string` | Yes | Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword. |

#### `calendarList.get()`

Returns a calendar from the user's calendar list.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.calendarId` | `string` | Yes | Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword. |

#### `calendarList.insert()`

Inserts an existing calendar into the user's calendar list.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.colorRgbFormat` | `boolean` | No | Whether to use the foregroundColor and backgroundColor fields to write the calendar colors (RGB). If this feature is used, the index-based colorId field will be set to the best matching option automatically. Optional. The default is False. |
| `params.resource` | `object` | Yes | The request body. |

#### `calendarList.list()`

Returns the calendars on the user's calendar list.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.maxResults` | `integer` | No | Maximum number of entries returned on one result page. By default the value is 100 entries. The page size can never be larger than 250 entries. Optional. |
| `params.minAccessRole` | `string` | No | The minimum access role for the user in the returned entries. Optional. The default is no restriction. |
| `params.pageToken` | `string` | No | Token specifying which result page to return. Optional. |
| `params.showDeleted` | `boolean` | No | Whether to include deleted calendar list entries in the result. Optional. The default is False. |
| `params.showHidden` | `boolean` | No | Whether to show hidden entries. Optional. The default is False. |
| `params.syncToken` | `string` | No | Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. If only read-only fields such as calendar properties or ACLs have changed, the entry won't be returned. All entries deleted and hidden since the previous list request will always be in the result set and it is not allowed to set showDeleted neither showHidden to False.
To ensure client state consistency minAccessRole query parameter cannot be specified together with nextSyncToken.
If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken.
Learn more about incremental synchronization.
Optional. The default is to return all entries. |

#### `calendarList.patch()`

Updates an existing calendar on the user's calendar list. This method supports patch semantics.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.calendarId` | `string` | Yes | Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword. |
| `params.colorRgbFormat` | `boolean` | No | Whether to use the foregroundColor and backgroundColor fields to write the calendar colors (RGB). If this feature is used, the index-based colorId field will be set to the best matching option automatically. Optional. The default is False. |
| `params.resource` | `object` | Yes | The request body. |

#### `calendarList.update()`

Updates an existing calendar on the user's calendar list.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.calendarId` | `string` | Yes | Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword. |
| `params.colorRgbFormat` | `boolean` | No | Whether to use the foregroundColor and backgroundColor fields to write the calendar colors (RGB). If this feature is used, the index-based colorId field will be set to the best matching option automatically. Optional. The default is False. |
| `params.resource` | `object` | Yes | The request body. |

#### `calendarList.watch()`

Watch for changes to CalendarList resources.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.maxResults` | `integer` | No | Maximum number of entries returned on one result page. By default the value is 100 entries. The page size can never be larger than 250 entries. Optional. |
| `params.minAccessRole` | `string` | No | The minimum access role for the user in the returned entries. Optional. The default is no restriction. |
| `params.pageToken` | `string` | No | Token specifying which result page to return. Optional. |
| `params.showDeleted` | `boolean` | No | Whether to include deleted calendar list entries in the result. Optional. The default is False. |
| `params.showHidden` | `boolean` | No | Whether to show hidden entries. Optional. The default is False. |
| `params.syncToken` | `string` | No | Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. If only read-only fields such as calendar properties or ACLs have changed, the entry won't be returned. All entries deleted and hidden since the previous list request will always be in the result set and it is not allowed to set showDeleted neither showHidden to False.
To ensure client state consistency minAccessRole query parameter cannot be specified together with nextSyncToken.
If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken.
Learn more about incremental synchronization.
Optional. The default is to return all entries. |
| `params.resource` | `object` | Yes | The request body. |

### `calendars`

#### `calendars.clear()`

Clears a primary calendar. This operation deletes all events associated with the primary calendar of an account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.calendarId` | `string` | Yes | Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword. |

#### `calendars.delete()`

Deletes a secondary calendar. Use calendars.clear for clearing all events on primary calendars.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.calendarId` | `string` | Yes | Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword. |

#### `calendars.get()`

Returns metadata for a calendar.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.calendarId` | `string` | Yes | Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword. |

#### `calendars.insert()`

Creates a secondary calendar.

| `params.resource` | `object` | Yes | The request body. |

#### `calendars.patch()`

Updates metadata for a calendar. This method supports patch semantics.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.calendarId` | `string` | Yes | Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword. |
| `params.resource` | `object` | Yes | The request body. |

#### `calendars.update()`

Updates metadata for a calendar.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.calendarId` | `string` | Yes | Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword. |
| `params.resource` | `object` | Yes | The request body. |

### `channels`

#### `channels.stop()`

Stop watching resources through this channel

| `params.resource` | `object` | Yes | The request body. |

### `colors`

#### `colors.get()`

Returns the color definitions for calendars and events.


### `events`

#### `events.delete()`

Deletes an event.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.calendarId` | `string` | Yes | Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword. |
| `params.eventId` | `string` | Yes | Event identifier. |
| `params.sendNotifications` | `boolean` | No | Deprecated. Please use sendUpdates instead.

Whether to send notifications about the deletion of the event. Note that some emails might still be sent even if you set the value to false. The default is false. |
| `params.sendUpdates` | `string` | No | Guests who should receive notifications about the deletion of the event. |

#### `events.get()`

Returns an event based on its Google Calendar ID. To retrieve an event using its iCalendar ID, call the events.list method using the iCalUID parameter.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.alwaysIncludeEmail` | `boolean` | No | Deprecated and ignored. A value will always be returned in the email field for the organizer, creator and attendees, even if no real email address is available (i.e. a generated, non-working value will be provided). |
| `params.calendarId` | `string` | Yes | Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword. |
| `params.eventId` | `string` | Yes | Event identifier. |
| `params.maxAttendees` | `integer` | No | The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional. |
| `params.timeZone` | `string` | No | Time zone used in the response. Optional. The default is the time zone of the calendar. |

#### `events.import()`

Imports an event. This operation is used to add a private copy of an existing event to a calendar. Only events with an eventType of default may be imported.
Deprecated behavior: If a non-default event is imported, its type will be changed to default and any event-type-specific properties it may have will be dropped.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.calendarId` | `string` | Yes | Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword. |
| `params.conferenceDataVersion` | `integer` | No | Version number of conference data supported by the API client. Version 0 assumes no conference data support and ignores conference data in the event's body. Version 1 enables support for copying of ConferenceData as well as for creating new conferences using the createRequest field of conferenceData. The default is 0. |
| `params.supportsAttachments` | `boolean` | No | Whether API client performing operation supports event attachments. Optional. The default is False. |
| `params.resource` | `object` | Yes | The request body. |

#### `events.insert()`

Creates an event.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.calendarId` | `string` | Yes | Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword. |
| `params.conferenceDataVersion` | `integer` | No | Version number of conference data supported by the API client. Version 0 assumes no conference data support and ignores conference data in the event's body. Version 1 enables support for copying of ConferenceData as well as for creating new conferences using the createRequest field of conferenceData. The default is 0. |
| `params.maxAttendees` | `integer` | No | The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional. |
| `params.sendNotifications` | `boolean` | No | Deprecated. Please use sendUpdates instead.

Whether to send notifications about the creation of the new event. Note that some emails might still be sent even if you set the value to false. The default is false. |
| `params.sendUpdates` | `string` | No | Whether to send notifications about the creation of the new event. Note that some emails might still be sent. The default is false. |
| `params.supportsAttachments` | `boolean` | No | Whether API client performing operation supports event attachments. Optional. The default is False. |
| `params.resource` | `object` | Yes | The request body. |

#### `events.instances()`

Returns instances of the specified recurring event.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.alwaysIncludeEmail` | `boolean` | No | Deprecated and ignored. A value will always be returned in the email field for the organizer, creator and attendees, even if no real email address is available (i.e. a generated, non-working value will be provided). |
| `params.calendarId` | `string` | Yes | Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword. |
| `params.eventId` | `string` | Yes | Recurring event identifier. |
| `params.maxAttendees` | `integer` | No | The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional. |
| `params.maxResults` | `integer` | No | Maximum number of events returned on one result page. By default the value is 250 events. The page size can never be larger than 2500 events. Optional. |
| `params.originalStart` | `string` | No | The original start time of the instance in the result. Optional. |
| `params.pageToken` | `string` | No | Token specifying which result page to return. Optional. |
| `params.showDeleted` | `boolean` | No | Whether to include deleted events (with status equals "cancelled") in the result. Cancelled instances of recurring events will still be included if singleEvents is False. Optional. The default is False. |
| `params.timeMax` | `string` | No | Upper bound (exclusive) for an event's start time to filter by. Optional. The default is not to filter by start time. Must be an RFC3339 timestamp with mandatory time zone offset. |
| `params.timeMin` | `string` | No | Lower bound (inclusive) for an event's end time to filter by. Optional. The default is not to filter by end time. Must be an RFC3339 timestamp with mandatory time zone offset. |
| `params.timeZone` | `string` | No | Time zone used in the response. Optional. The default is the time zone of the calendar. |

#### `events.list()`

Returns events on the specified calendar.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.alwaysIncludeEmail` | `boolean` | No | Deprecated and ignored. |
| `params.calendarId` | `string` | Yes | Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword. |
| `params.eventTypes` | `string` | No | Event types to return. Optional. This parameter can be repeated multiple times to return events of different types. If unset, returns all event types. |
| `params.iCalUID` | `string` | No | Specifies an event ID in the iCalendar format to be provided in the response. Optional. Use this if you want to search for an event by its iCalendar ID. |
| `params.maxAttendees` | `integer` | No | The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional. |
| `params.maxResults` | `integer` | No | Maximum number of events returned on one result page. The number of events in the resulting page may be less than this value, or none at all, even if there are more events matching the query. Incomplete pages can be detected by a non-empty nextPageToken field in the response. By default the value is 250 events. The page size can never be larger than 2500 events. Optional. |
| `params.orderBy` | `string` | No | The order of the events returned in the result. Optional. The default is an unspecified, stable order. |
| `params.pageToken` | `string` | No | Token specifying which result page to return. Optional. |
| `params.privateExtendedProperty` | `string` | No | Extended properties constraint specified as propertyName=value. Matches only private properties. This parameter might be repeated multiple times to return events that match all given constraints. |
| `params.q` | `string` | No | Free text search terms to find events that match these terms in the following fields:

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
These search terms also match predefined keywords against all display title translations of working location, out-of-office, and focus-time events. For example, searching for "Office" or "Bureau" returns working location events of type officeLocation, whereas searching for "Out of office" or "Abwesend" returns out-of-office events. Optional. |
| `params.sharedExtendedProperty` | `string` | No | Extended properties constraint specified as propertyName=value. Matches only shared properties. This parameter might be repeated multiple times to return events that match all given constraints. |
| `params.showDeleted` | `boolean` | No | Whether to include deleted events (with status equals "cancelled") in the result. Cancelled instances of recurring events (but not the underlying recurring event) will still be included if showDeleted and singleEvents are both False. If showDeleted and singleEvents are both True, only single instances of deleted events (but not the underlying recurring events) are returned. Optional. The default is False. |
| `params.showHiddenInvitations` | `boolean` | No | Whether to include hidden invitations in the result. Optional. The default is False. |
| `params.singleEvents` | `boolean` | No | Whether to expand recurring events into instances and only return single one-off events and instances of recurring events, but not the underlying recurring events themselves. Optional. The default is False. |
| `params.syncToken` | `string` | No | Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. All events deleted since the previous list request will always be in the result set and it is not allowed to set showDeleted to False.
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
Optional. The default is to return all entries. |
| `params.timeMax` | `string` | No | Upper bound (exclusive) for an event's start time to filter by. Optional. The default is not to filter by start time. Must be an RFC3339 timestamp with mandatory time zone offset, for example, 2011-06-03T10:00:00-07:00, 2011-06-03T10:00:00Z. Milliseconds may be provided but are ignored. If timeMin is set, timeMax must be greater than timeMin. |
| `params.timeMin` | `string` | No | Lower bound (exclusive) for an event's end time to filter by. Optional. The default is not to filter by end time. Must be an RFC3339 timestamp with mandatory time zone offset, for example, 2011-06-03T10:00:00-07:00, 2011-06-03T10:00:00Z. Milliseconds may be provided but are ignored. If timeMax is set, timeMin must be smaller than timeMax. |
| `params.timeZone` | `string` | No | Time zone used in the response. Optional. The default is the time zone of the calendar. |
| `params.updatedMin` | `string` | No | Lower bound for an event's last modification time (as a RFC3339 timestamp) to filter by. When specified, entries deleted since this time will always be included regardless of showDeleted. Optional. The default is not to filter by last modification time. |

#### `events.move()`

Moves an event to another calendar, i.e. changes an event's organizer. Note that only default events can be moved; birthday, focusTime, fromGmail, outOfOffice and workingLocation events cannot be moved.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.calendarId` | `string` | Yes | Calendar identifier of the source calendar where the event currently is on. |
| `params.destination` | `string` | Yes | Calendar identifier of the target calendar where the event is to be moved to. |
| `params.eventId` | `string` | Yes | Event identifier. |
| `params.sendNotifications` | `boolean` | No | Deprecated. Please use sendUpdates instead.

Whether to send notifications about the change of the event's organizer. Note that some emails might still be sent even if you set the value to false. The default is false. |
| `params.sendUpdates` | `string` | No | Guests who should receive notifications about the change of the event's organizer. |

#### `events.patch()`

Updates an event. This method supports patch semantics.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.alwaysIncludeEmail` | `boolean` | No | Deprecated and ignored. A value will always be returned in the email field for the organizer, creator and attendees, even if no real email address is available (i.e. a generated, non-working value will be provided). |
| `params.calendarId` | `string` | Yes | Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword. |
| `params.conferenceDataVersion` | `integer` | No | Version number of conference data supported by the API client. Version 0 assumes no conference data support and ignores conference data in the event's body. Version 1 enables support for copying of ConferenceData as well as for creating new conferences using the createRequest field of conferenceData. The default is 0. |
| `params.eventId` | `string` | Yes | Event identifier. |
| `params.maxAttendees` | `integer` | No | The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional. |
| `params.sendNotifications` | `boolean` | No | Deprecated. Please use sendUpdates instead.

Whether to send notifications about the event update (for example, description changes, etc.). Note that some emails might still be sent even if you set the value to false. The default is false. |
| `params.sendUpdates` | `string` | No | Guests who should receive notifications about the event update (for example, title changes, etc.). |
| `params.supportsAttachments` | `boolean` | No | Whether API client performing operation supports event attachments. Optional. The default is False. |
| `params.resource` | `object` | Yes | The request body. |

#### `events.quickAdd()`

Creates an event based on a simple text string.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.calendarId` | `string` | Yes | Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword. |
| `params.sendNotifications` | `boolean` | No | Deprecated. Please use sendUpdates instead.

Whether to send notifications about the creation of the event. Note that some emails might still be sent even if you set the value to false. The default is false. |
| `params.sendUpdates` | `string` | No | Guests who should receive notifications about the creation of the new event. |
| `params.text` | `string` | Yes | The text describing the event to be created. |

#### `events.update()`

Updates an event.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.alwaysIncludeEmail` | `boolean` | No | Deprecated and ignored. A value will always be returned in the email field for the organizer, creator and attendees, even if no real email address is available (i.e. a generated, non-working value will be provided). |
| `params.calendarId` | `string` | Yes | Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword. |
| `params.conferenceDataVersion` | `integer` | No | Version number of conference data supported by the API client. Version 0 assumes no conference data support and ignores conference data in the event's body. Version 1 enables support for copying of ConferenceData as well as for creating new conferences using the createRequest field of conferenceData. The default is 0. |
| `params.eventId` | `string` | Yes | Event identifier. |
| `params.maxAttendees` | `integer` | No | The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional. |
| `params.sendNotifications` | `boolean` | No | Deprecated. Please use sendUpdates instead.

Whether to send notifications about the event update (for example, description changes, etc.). Note that some emails might still be sent even if you set the value to false. The default is false. |
| `params.sendUpdates` | `string` | No | Guests who should receive notifications about the event update (for example, title changes, etc.). |
| `params.supportsAttachments` | `boolean` | No | Whether API client performing operation supports event attachments. Optional. The default is False. |
| `params.resource` | `object` | Yes | The request body. |

#### `events.watch()`

Watch for changes to Events resources.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.alwaysIncludeEmail` | `boolean` | No | Deprecated and ignored. |
| `params.calendarId` | `string` | Yes | Calendar identifier. To retrieve calendar IDs call the calendarList.list method. If you want to access the primary calendar of the currently logged in user, use the "primary" keyword. |
| `params.eventTypes` | `string` | No | Event types to return. Optional. This parameter can be repeated multiple times to return events of different types. If unset, returns all event types. |
| `params.iCalUID` | `string` | No | Specifies an event ID in the iCalendar format to be provided in the response. Optional. Use this if you want to search for an event by its iCalendar ID. |
| `params.maxAttendees` | `integer` | No | The maximum number of attendees to include in the response. If there are more than the specified number of attendees, only the participant is returned. Optional. |
| `params.maxResults` | `integer` | No | Maximum number of events returned on one result page. The number of events in the resulting page may be less than this value, or none at all, even if there are more events matching the query. Incomplete pages can be detected by a non-empty nextPageToken field in the response. By default the value is 250 events. The page size can never be larger than 2500 events. Optional. |
| `params.orderBy` | `string` | No | The order of the events returned in the result. Optional. The default is an unspecified, stable order. |
| `params.pageToken` | `string` | No | Token specifying which result page to return. Optional. |
| `params.privateExtendedProperty` | `string` | No | Extended properties constraint specified as propertyName=value. Matches only private properties. This parameter might be repeated multiple times to return events that match all given constraints. |
| `params.q` | `string` | No | Free text search terms to find events that match these terms in the following fields:

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
These search terms also match predefined keywords against all display title translations of working location, out-of-office, and focus-time events. For example, searching for "Office" or "Bureau" returns working location events of type officeLocation, whereas searching for "Out of office" or "Abwesend" returns out-of-office events. Optional. |
| `params.sharedExtendedProperty` | `string` | No | Extended properties constraint specified as propertyName=value. Matches only shared properties. This parameter might be repeated multiple times to return events that match all given constraints. |
| `params.showDeleted` | `boolean` | No | Whether to include deleted events (with status equals "cancelled") in the result. Cancelled instances of recurring events (but not the underlying recurring event) will still be included if showDeleted and singleEvents are both False. If showDeleted and singleEvents are both True, only single instances of deleted events (but not the underlying recurring events) are returned. Optional. The default is False. |
| `params.showHiddenInvitations` | `boolean` | No | Whether to include hidden invitations in the result. Optional. The default is False. |
| `params.singleEvents` | `boolean` | No | Whether to expand recurring events into instances and only return single one-off events and instances of recurring events, but not the underlying recurring events themselves. Optional. The default is False. |
| `params.syncToken` | `string` | No | Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then. All events deleted since the previous list request will always be in the result set and it is not allowed to set showDeleted to False.
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
Optional. The default is to return all entries. |
| `params.timeMax` | `string` | No | Upper bound (exclusive) for an event's start time to filter by. Optional. The default is not to filter by start time. Must be an RFC3339 timestamp with mandatory time zone offset, for example, 2011-06-03T10:00:00-07:00, 2011-06-03T10:00:00Z. Milliseconds may be provided but are ignored. If timeMin is set, timeMax must be greater than timeMin. |
| `params.timeMin` | `string` | No | Lower bound (exclusive) for an event's end time to filter by. Optional. The default is not to filter by end time. Must be an RFC3339 timestamp with mandatory time zone offset, for example, 2011-06-03T10:00:00-07:00, 2011-06-03T10:00:00Z. Milliseconds may be provided but are ignored. If timeMax is set, timeMin must be smaller than timeMax. |
| `params.timeZone` | `string` | No | Time zone used in the response. Optional. The default is the time zone of the calendar. |
| `params.updatedMin` | `string` | No | Lower bound for an event's last modification time (as a RFC3339 timestamp) to filter by. When specified, entries deleted since this time will always be included regardless of showDeleted. Optional. The default is not to filter by last modification time. |
| `params.resource` | `object` | Yes | The request body. |

### `freebusy`

#### `freebusy.query()`

Returns free/busy information for a set of calendars.

| `params.resource` | `object` | Yes | The request body. |

### `settings`

#### `settings.get()`

Returns a single user setting.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.setting` | `string` | Yes | The id of the user setting. |

#### `settings.list()`

Returns all user settings for the authenticated user.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.maxResults` | `integer` | No | Maximum number of entries returned on one result page. By default the value is 100 entries. The page size can never be larger than 250 entries. Optional. |
| `params.pageToken` | `string` | No | Token specifying which result page to return. Optional. |
| `params.syncToken` | `string` | No | Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then.
If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken.
Learn more about incremental synchronization.
Optional. The default is to return all entries. |

#### `settings.watch()`

Watch for changes to Settings resources.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.maxResults` | `integer` | No | Maximum number of entries returned on one result page. By default the value is 100 entries. The page size can never be larger than 250 entries. Optional. |
| `params.pageToken` | `string` | No | Token specifying which result page to return. Optional. |
| `params.syncToken` | `string` | No | Token obtained from the nextSyncToken field returned on the last page of results from the previous list request. It makes the result of this list request contain only entries that have changed since then.
If the syncToken expires, the server will respond with a 410 GONE response code and the client should clear its storage and perform a full synchronization without any syncToken.
Learn more about incremental synchronization.
Optional. The default is to return all entries. |
| `params.resource` | `object` | Yes | The request body. |