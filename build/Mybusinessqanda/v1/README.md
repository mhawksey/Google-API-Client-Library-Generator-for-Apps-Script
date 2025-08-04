# My Business Q&A API - Apps Script Client Library

Auto-generated client library for using the **My Business Q&A API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Mon, 04 Aug 2025 20:33:34 GMT
- **Last Modified:** Mon, 04 Aug 2025 20:33:34 GMT
- **Created:** Sun, 20 Jul 2025 16:43:40 GMT



---

## API Reference

### `locations`

### `locations.questions`

#### `locations.questions.list()`

Returns the paginated list of questions and some of its answers for a specified location. This operation is only valid if the specified location is verified.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the location to fetch questions for. |
| `params.pageSize` | `integer` | No | Optional. How many questions to fetch per page. The default and maximum `page_size` values are 10. |
| `params.pageToken` | `string` | No | Optional. If specified, the next page of questions is retrieved. |
| `params.answersPerQuestion` | `integer` | No | Optional. How many answers to fetch per question. The default and maximum `answers_per_question` values are 10. |
| `params.filter` | `string` | No | Optional. A filter constraining the questions to return. The only filter currently supported is "ignore_answered=true" |
| `params.orderBy` | `string` | No | Optional. The order to return the questions. Valid options include 'update_time desc' and 'upvote_count desc', which will return the questions sorted descendingly by the requested field. The default sort order is 'update_time desc'. |

#### `locations.questions.create()`

Adds a question for the specified location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the location to write a question for. |
| `params.resource` | `object` | Yes | The request body. |

#### `locations.questions.patch()`

Updates a specific question written by the current user.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Immutable. The unique name for the question. locations/*/questions/* This field will be ignored if set during question creation. |
| `params.updateMask` | `string` | No | Required. The specific fields to update. Only question text can be updated. |
| `params.resource` | `object` | Yes | The request body. |

#### `locations.questions.delete()`

Deletes a specific question written by the current user.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the question to delete. |

### `locations.questions.answers`

#### `locations.questions.answers.list()`

Returns the paginated list of answers for a specified question.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the question to fetch answers for. |
| `params.pageSize` | `integer` | No | Optional. How many answers to fetch per page. The default and maximum `page_size` values are 10. |
| `params.pageToken` | `string` | No | Optional. If specified, the next page of answers is retrieved. |
| `params.orderBy` | `string` | No | Optional. The order to return the answers. Valid options include 'update_time desc' and 'upvote_count desc', which will return the answers sorted descendingly by the requested field. The default sort order is 'update_time desc'. |

#### `locations.questions.answers.upsert()`

Creates an answer or updates the existing answer written by the user for the specified question. A user can only create one answer per question.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the question to write an answer for. |
| `params.resource` | `object` | Yes | The request body. |

#### `locations.questions.answers.delete()`

Deletes the answer written by the current user to a question.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the question to delete an answer for. |