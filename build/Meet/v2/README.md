# Google Meet API - Apps Script Client Library

Auto-generated client library for using the **Google Meet API (version: v2)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 15 Nov 2026 16:30:33 GMT
- **Last Modified:** Sun, 15 Nov 2026 16:30:33 GMT
- **Created:** Sun, 20 Jul 2025 16:42:19 GMT



---

## API Reference

### `conferenceRecords`

#### `conferenceRecords.get()`

Gets a conference record by conference ID. For more information, see [Work with conferences](https://developers.google.com/workspace/meet/api/guides/conferences).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the conference. |

#### `conferenceRecords.list()`

Lists the conference records. By default, ordered by start time and in descending order. For more information, see [Work with conferences](https://developers.google.com/workspace/meet/api/guides/conferences).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No | Optional. Page token returned from previous List Call. |
| `params.filter` | `string` | No | Optional. User specified filtering condition in [EBNF format](https://en.wikipedia.org/wiki/Extended_Backus%E2%80%93Naur_form). The following are the filterable fields: * `space.meeting_code` * `space.name` * `start_time` * `end_time` For example, consider the following filters: * `space.name = "spaces/NAME"` * `space.meeting_code = "abc-mnop-xyz"` * `start_time>="2024-01-01T00:00:00.000Z" AND start_time<="2024-01-02T00:00:00.000Z"` * `end_time IS NULL` |
| `params.pageSize` | `integer` | No | Optional. Maximum number of conference records to return. The service might return fewer than this value. If unspecified, at most 25 conference records are returned. The maximum value is 100; values above 100 are coerced to 100. Maximum might change in the future. |

### `conferenceRecords.recordings`

#### `conferenceRecords.recordings.list()`

Lists the recording resources from the conference record. By default, ordered by start time and in ascending order. For more information, see [Work with artifacts](https://developers.google.com/workspace/meet/api/guides/artifacts).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No | Page token returned from previous List Call. |
| `params.pageSize` | `integer` | No | Maximum number of recordings to return. The service might return fewer than this value. If unspecified, at most 10 recordings are returned. The maximum value is 100; values above 100 are coerced to 100. Maximum might change in the future. |
| `params.parent` | `string` | Yes | Required. Format: `conferenceRecords/{conference_record}` |

#### `conferenceRecords.recordings.get()`

Gets a recording by recording ID. For more information, see [Work with artifacts](https://developers.google.com/workspace/meet/api/guides/artifacts).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the recording. |

### `conferenceRecords.smartNotes`

#### `conferenceRecords.smartNotes.list()`

Lists the set of smart notes from the conference record. By default, ordered by start time and in ascending order. For more information, see [Work with artifacts](https://developers.google.com/workspace/meet/api/guides/artifacts).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No | Optional. Maximum number of smart notes to return. The service might return fewer than this value. If unspecified, at most 10 smart notes are returned. The maximum value is 100; values above 100 are coerced to 100. Maximum might change in the future. |
| `params.parent` | `string` | Yes | Required. Format: `conferenceRecords/{conference_record}` |
| `params.pageToken` | `string` | No | Optional. Page token returned from previous List Call. |

#### `conferenceRecords.smartNotes.get()`

Gets smart notes by smart note ID. For more information, see [Work with artifacts](https://developers.google.com/workspace/meet/api/guides/artifacts).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the smart note. Format: conferenceRecords/{conference_record}/smartNotes/{smart_note} |

### `conferenceRecords.participants`

#### `conferenceRecords.participants.get()`

Gets a participant by participant ID. For more information, see [Work with participants](https://developers.google.com/workspace/meet/api/guides/participants).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the participant. |

#### `conferenceRecords.participants.list()`

Lists the participants in a conference record. By default, ordered by join time and in descending order. This API supports `fields` as standard parameters like every other API. However, when the `fields` request parameter is omitted, this API defaults to `'participants/*, next_page_token'`. For more information, see [Work with participants](https://developers.google.com/workspace/meet/api/guides/participants).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Format: `conferenceRecords/{conference_record}` |
| `params.filter` | `string` | No | Optional. User specified filtering condition in [EBNF format](https://en.wikipedia.org/wiki/Extended_Backus%E2%80%93Naur_form). The following are the filterable fields: * `earliest_start_time` * `latest_end_time` For example, `latest_end_time IS NULL` returns active participants in the conference. |
| `params.pageSize` | `integer` | No | Maximum number of participants to return. The service might return fewer than this value. If unspecified, at most 100 participants are returned. The maximum value is 250; values above 250 are coerced to 250. Maximum might change in the future. |
| `params.pageToken` | `string` | No | Page token returned from previous List Call. |

### `conferenceRecords.participants.participantSessions`

#### `conferenceRecords.participants.participantSessions.get()`

Gets a participant session by participant session ID. For more information, see [Work with participants](https://developers.google.com/workspace/meet/api/guides/participants).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the participant. |

#### `conferenceRecords.participants.participantSessions.list()`

Lists the participant sessions of a participant in a conference record. By default, ordered by join time and in descending order. This API supports `fields` as standard parameters like every other API. However, when the `fields` request parameter is omitted this API defaults to `'participantsessions/*, next_page_token'`. For more information, see [Work with participants](https://developers.google.com/workspace/meet/api/guides/participants).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No | Optional. Page token returned from previous List Call. |
| `params.pageSize` | `integer` | No | Optional. Maximum number of participant sessions to return. The service might return fewer than this value. If unspecified, at most 100 participants are returned. The maximum value is 250; values above 250 are coerced to 250. Maximum might change in the future. |
| `params.parent` | `string` | Yes | Required. Format: `conferenceRecords/{conference_record}/participants/{participant}` |
| `params.filter` | `string` | No | Optional. User specified filtering condition in [EBNF format](https://en.wikipedia.org/wiki/Extended_Backus%E2%80%93Naur_form). The following are the filterable fields: * `start_time` * `end_time` For example, `end_time IS NULL` returns active participant sessions in the conference record. |

### `conferenceRecords.transcripts`

#### `conferenceRecords.transcripts.list()`

Lists the set of transcripts from the conference record. By default, ordered by start time and in ascending order. For more information, see [Work with artifacts](https://developers.google.com/workspace/meet/api/guides/artifacts).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No | Maximum number of transcripts to return. The service might return fewer than this value. If unspecified, at most 10 transcripts are returned. The maximum value is 100; values above 100 are coerced to 100. Maximum might change in the future. |
| `params.pageToken` | `string` | No | Page token returned from previous List Call. |
| `params.parent` | `string` | Yes | Required. Format: `conferenceRecords/{conference_record}` |

#### `conferenceRecords.transcripts.get()`

Gets a transcript by transcript ID. For more information, see [Work with artifacts](https://developers.google.com/workspace/meet/api/guides/artifacts).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the transcript. |

### `conferenceRecords.transcripts.entries`

#### `conferenceRecords.transcripts.entries.list()`

Lists the structured transcript entries per transcript. By default, ordered by start time and in ascending order. For more information, see [Work with artifacts](https://developers.google.com/workspace/meet/api/guides/artifacts). Note: The transcript entries returned by the Google Meet API might not match the transcription found in the Google Docs transcript file. This can occur when 1) we have interleaved speakers within milliseconds, or 2) the Google Docs transcript file is modified after generation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No | Page token returned from previous List Call. |
| `params.pageSize` | `integer` | No | Maximum number of entries to return. The service might return fewer than this value. If unspecified, at most 10 entries are returned. The maximum value is 100; values above 100 are coerced to 100. Maximum might change in the future. |
| `params.parent` | `string` | Yes | Required. Format: `conferenceRecords/{conference_record}/transcripts/{transcript}` |

#### `conferenceRecords.transcripts.entries.get()`

Gets a `TranscriptEntry` resource by entry ID. For more information, see [Work with artifacts](https://developers.google.com/workspace/meet/api/guides/artifacts). Note: The transcript entries returned by the Google Meet API might not match the transcription found in the Google Docs transcript file. This can occur when 1) we have interleaved speakers within milliseconds, or 2) the Google Docs transcript file is modified after generation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the `TranscriptEntry`. |

### `spaces`

#### `spaces.endActiveConference()`

Ends an active conference (if there's one). For more information, see [Manage meeting spaces](https://developers.google.com/workspace/meet/api/guides/manage-meeting-spaces).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the space. Format: `spaces/{space}`. `{space}` is the resource identifier for the space. It's a unique, server-generated ID and is case sensitive. For example, `jQCFfuBOdN5z`. For more information, see [How Meet identifies a meeting space](https://developers.google.com/workspace/meet/api/guides/meeting-spaces#identify-meeting-space). |
| `params.requestBody` | `object` | Yes | The request body. |

#### `spaces.create()`

Creates a space. For more information, see [Manage meeting spaces](https://developers.google.com/workspace/meet/api/guides/manage-meeting-spaces).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |

#### `spaces.patch()`

Updates details about a meeting space. For more information, see [Manage meeting spaces](https://developers.google.com/workspace/meet/api/guides/manage-meeting-spaces).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Immutable. Resource name of the space. Format: `spaces/{space}`. `{space}` is the resource identifier for the space. It's a unique, server-generated ID and is case sensitive. For example, `jQCFfuBOdN5z`. For more information, see [How Meet identifies a meeting space](https://developers.google.com/workspace/meet/api/guides/meeting-spaces#identify-meeting-space). |
| `params.updateMask` | `string` | No | Optional. Field mask used to specify the fields to be updated in the space. If update_mask isn't provided(not set, set with empty paths, or only has "" as paths), it defaults to update all fields provided with values in the request. Using "*" as update_mask will update all fields, including deleting fields not set in the request. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `spaces.get()`

Gets details about a meeting space. For more information, see [Manage meeting spaces](https://developers.google.com/workspace/meet/api/guides/manage-meeting-spaces). For an example, see [Get a meeting space](https://developers.google.com/workspace/meet/api/guides/meeting-spaces#get-meeting-space).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the space. Format: `spaces/{space}` or `spaces/{meetingCode}`. `{space}` is the resource identifier for the space. It's a unique, server-generated ID and is case sensitive. For example, `jQCFfuBOdN5z`. `{meetingCode}` is an alias for the space. It's a typeable, unique character string and is non-case sensitive. For example, `abc-mnop-xyz`. The maximum length is 128 characters. A `meetingCode` shouldn't be stored long term as it can become dissociated from a meeting space and can be reused for different meeting spaces in the future. Generally, a `meetingCode` expires 365 days after last use. For more information, see [Learn about meeting codes in Google Meet](https://support.google.com/meet/answer/10710509). For more information, see [How Meet identifies a meeting space](https://developers.google.com/workspace/meet/api/guides/meeting-spaces#identify-meeting-space). |

### `spaces.members`

#### `spaces.members.get()`

Gets a member. For more information, see [Manage meeting space members](https://developers.google.com/workspace/meet/api/guides/meeting-space-members). This API supports the `fields` parameter in [SystemParameterContext](https://cloud.google.com/apis/docs/system-parameters). When the `fields` parameter is omitted, this API response will default to "name,email,role,user".

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Format: “spaces/{space}/members/{member}” |

#### `spaces.members.delete()`

Deletes the member who was previously assigned roles in the space. For more information, see [Manage meeting space members](https://developers.google.com/workspace/meet/api/guides/meeting-space-members).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Format: “spaces/{space}/members/{member}” |

#### `spaces.members.patch()`

Updates a member. For more information, see [Manage meeting space members](https://developers.google.com/workspace/meet/api/guides/meeting-space-members).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.updateMask` | `string` | No | Optional. Field mask used to specify the fields to be updated in the member. If update_mask isn't provided(not set, set with empty paths, or only has "" as paths), it defaults to update all fields provided with values in the request. Using "*" as update_mask will update all fields, including deleting fields not set in the request. In case of BatchUpdate, it must be absent or the same as the update_mask in BatchUpdateMembersRequest when UpdateMemberRequest is built as a child request of BatchUpdateMembersRequest. |
| `params.name` | `string` | Yes | Identifier. Resource name of the member. Format: `spaces/{space}/members/{member}` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `spaces.members.create()`

Creates a member. For more information, see [Manage meeting space members](https://developers.google.com/workspace/meet/api/guides/meeting-space-members). This API supports the `fields` parameter in [SystemParameterContext](https://cloud.google.com/apis/docs/system-parameters). When the `fields` parameter is omitted, this API response will default to "name,email,role,user".

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Format: spaces/{space} |
| `params.requestBody` | `object` | Yes | The request body. |

#### `spaces.members.list()`

Lists members. For more information, see [Manage meeting space members](https://developers.google.com/workspace/meet/api/guides/meeting-space-members). This API supports the `fields` parameter in [SystemParameterContext](https://cloud.google.com/apis/docs/system-parameters). When the `fields` parameter is omitted this API response will default to "name,email,role,user".

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No | Optional. Maximum number of members to return. The service might return fewer than this value. If unspecified or set to 0, at most 250 members are returned. The maximum value is 500; values above 500 are coerced to 500. Maximum might change in the future. |
| `params.pageToken` | `string` | No | Optional. Page token returned from previous List Call. |
| `params.parent` | `string` | Yes | Required. Format: spaces/{space} |

#### `spaces.members.batchUpdate()`

Updates members of one space within a batch. For more information, see [Manage meeting space members](https://developers.google.com/workspace/meet/api/guides/meeting-space-members).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource shared by all Members being updated. Format: spaces/{space} |
| `params.requestBody` | `object` | Yes | The request body. |