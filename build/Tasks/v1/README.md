# Google Tasks API - Apps Script Client Library

Auto-generated client library for using the **Google Tasks API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Mon, 04 Aug 2025 20:53:26 GMT
- **Last Modified:** Mon, 04 Aug 2025 20:53:26 GMT
- **Created:** Sun, 20 Jul 2025 16:55:36 GMT



---

## API Reference

### `tasks`

#### `tasks.clear()`

Clears all completed tasks from the specified task list. The affected tasks will be marked as 'hidden' and no longer be returned by default when retrieving all tasks for a task list.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.tasklist` | `string` | Yes | Task list identifier. |

#### `tasks.delete()`

Deletes the specified task from the task list. If the task is assigned, both the assigned task and the original task (in Docs, Chat Spaces) are deleted. To delete the assigned task only, navigate to the assignment surface and unassign the task from there.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.tasklist` | `string` | Yes | Task list identifier. |
| `params.task` | `string` | Yes | Task identifier. |

#### `tasks.get()`

Returns the specified task.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.tasklist` | `string` | Yes | Task list identifier. |
| `params.task` | `string` | Yes | Task identifier. |

#### `tasks.insert()`

Creates a new task on the specified task list. Tasks assigned from Docs or Chat Spaces cannot be inserted from Tasks Public API; they can only be created by assigning them from Docs or Chat Spaces. A user can have up to 20,000 non-hidden tasks per list and up to 100,000 tasks in total at a time.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.tasklist` | `string` | Yes | Task list identifier. |
| `params.parent` | `string` | No | Parent task identifier. If the task is created at the top level, this parameter is omitted. An assigned task cannot be a parent task, nor can it have a parent. Setting the parent to an assigned task results in failure of the request. Optional. |
| `params.previous` | `string` | No | Previous sibling task identifier. If the task is created at the first position among its siblings, this parameter is omitted. Optional. |
| `params.resource` | `object` | Yes | The request body. |

#### `tasks.list()`

Returns all tasks in the specified task list. Doesn't return assigned tasks by default (from Docs, Chat Spaces). A user can have up to 20,000 non-hidden tasks per list and up to 100,000 tasks in total at a time.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.tasklist` | `string` | Yes | Task list identifier. |
| `params.completedMax` | `string` | No | Upper bound for a task's completion date (as a RFC 3339 timestamp) to filter by. Optional. The default is not to filter by completion date. |
| `params.completedMin` | `string` | No | Lower bound for a task's completion date (as a RFC 3339 timestamp) to filter by. Optional. The default is not to filter by completion date. |
| `params.dueMax` | `string` | No | Upper bound for a task's due date (as a RFC 3339 timestamp) to filter by. Optional. The default is not to filter by due date. |
| `params.dueMin` | `string` | No | Lower bound for a task's due date (as a RFC 3339 timestamp) to filter by. Optional. The default is not to filter by due date. |
| `params.maxResults` | `integer` | No | Maximum number of tasks returned on one page. Optional. The default is 20 (max allowed: 100). |
| `params.pageToken` | `string` | No | Token specifying the result page to return. Optional. |
| `params.showCompleted` | `boolean` | No | Flag indicating whether completed tasks are returned in the result. Note that showHidden must also be True to show tasks completed in first party clients, such as the web UI and Google's mobile apps. Optional. The default is True. |
| `params.showDeleted` | `boolean` | No | Flag indicating whether deleted tasks are returned in the result. Optional. The default is False. |
| `params.showHidden` | `boolean` | No | Flag indicating whether hidden tasks are returned in the result. Optional. The default is False. |
| `params.updatedMin` | `string` | No | Lower bound for a task's last modification time (as a RFC 3339 timestamp) to filter by. Optional. The default is not to filter by last modification time. |
| `params.showAssigned` | `boolean` | No | Optional. Flag indicating whether tasks assigned to the current user are returned in the result. Optional. The default is False. |

#### `tasks.move()`

Moves the specified task to another position in the destination task list. If the destination list is not specified, the task is moved within its current list. This can include putting it as a child task under a new parent and/or move it to a different position among its sibling tasks. A user can have up to 2,000 subtasks per task.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.tasklist` | `string` | Yes | Task list identifier. |
| `params.task` | `string` | Yes | Task identifier. |
| `params.parent` | `string` | No | Optional. New parent task identifier. If the task is moved to the top level, this parameter is omitted. The task set as parent must exist in the task list and can not be hidden. Exceptions: 1. Assigned and repeating tasks cannot be set as parent tasks (have subtasks), or be moved under a parent task (become subtasks). 2. Tasks that are both completed and hidden cannot be nested, so the parent field must be empty. |
| `params.previous` | `string` | No | Optional. New previous sibling task identifier. If the task is moved to the first position among its siblings, this parameter is omitted. The task set as previous must exist in the task list and can not be hidden. Exceptions: 1. Tasks that are both completed and hidden can only be moved to position 0, so the previous field must be empty. |
| `params.destinationTasklist` | `string` | No | Optional. Destination task list identifier. If set, the task is moved from tasklist to the destinationTasklist list. Otherwise the task is moved within its current list. Recurrent tasks cannot currently be moved between lists. |

#### `tasks.patch()`

Updates the specified task. This method supports patch semantics.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.tasklist` | `string` | Yes | Task list identifier. |
| `params.task` | `string` | Yes | Task identifier. |
| `params.resource` | `object` | Yes | The request body. |

#### `tasks.update()`

Updates the specified task.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.tasklist` | `string` | Yes | Task list identifier. |
| `params.task` | `string` | Yes | Task identifier. |
| `params.resource` | `object` | Yes | The request body. |

### `tasklists`

#### `tasklists.delete()`

Deletes the authenticated user's specified task list. If the list contains assigned tasks, both the assigned tasks and the original tasks in the assignment surface (Docs, Chat Spaces) are deleted.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.tasklist` | `string` | Yes | Task list identifier. |

#### `tasklists.get()`

Returns the authenticated user's specified task list.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.tasklist` | `string` | Yes | Task list identifier. |

#### `tasklists.insert()`

Creates a new task list and adds it to the authenticated user's task lists. A user can have up to 2000 lists at a time.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

#### `tasklists.list()`

Returns all the authenticated user's task lists. A user can have up to 2000 lists at a time.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.maxResults` | `integer` | No | Maximum number of task lists returned on one page. Optional. The default is 1000 (max allowed: 1000). |
| `params.pageToken` | `string` | No | Token specifying the result page to return. Optional. |

#### `tasklists.patch()`

Updates the authenticated user's specified task list. This method supports patch semantics.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.tasklist` | `string` | Yes | Task list identifier. |
| `params.resource` | `object` | Yes | The request body. |

#### `tasklists.update()`

Updates the authenticated user's specified task list.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.tasklist` | `string` | Yes | Task list identifier. |
| `params.resource` | `object` | Yes | The request body. |