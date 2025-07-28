# Google Classroom API - Apps Script Client Library

Auto-generated client library for using the **Google Classroom API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 27 Jul 2025 15:48:56 GMT
- **Last Modified:** Sun, 27 Jul 2025 12:22:58 GMT
- **Created:** Sun, 20 Jul 2025 16:20:50 GMT



---

## API Reference

### `courses`

#### `courses.create()`

Creates a course. The user specified in `ownerId` is the owner of the created course and added as a teacher. A non-admin requesting user can only create a course with themselves as the owner. Domain admins can create courses owned by any user within their domain. This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting user is not permitted to create courses or for access errors.

* `NOT_FOUND` if the primary teacher is not a valid user.

* `FAILED_PRECONDITION` if the course owner's account is disabled or for the following request errors:

* UserCannotOwnCourse

* UserGroupsMembershipLimitReached

* `ALREADY_EXISTS` if an alias was specified in the `id` and already exists.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

#### `courses.get()`

Returns a course. This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or for access errors.

* `NOT_FOUND` if no course exists with the requested ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.id` | `string` | Yes | Identifier of the course to return. This identifier can be either the Classroom-assigned identifier or an alias. |

#### `courses.update()`

Updates a course. This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting user is not permitted to modify the requested course or for access errors.

* `NOT_FOUND` if no course exists with the requested ID.

* `FAILED_PRECONDITION` for the following request errors:

* CourseNotModifiable

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.id` | `string` | Yes | Identifier of the course to update. This identifier can be either the Classroom-assigned identifier or an alias. |
| `params.resource` | `object` | Yes | The request body. |

#### `courses.patch()`

Updates one or more fields in a course. This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting user is not permitted to modify the requested course or for access errors.

* `NOT_FOUND` if no course exists with the requested ID.

* `INVALID_ARGUMENT` if invalid fields are specified in the update mask or if no update mask is supplied.

* `FAILED_PRECONDITION` for the following request errors:

* CourseNotModifiable

* InactiveCourseOwner

* IneligibleOwner

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.id` | `string` | Yes | Identifier of the course to update. This identifier can be either the Classroom-assigned identifier or an alias. |
| `params.updateMask` | `string` | No | Mask that identifies which fields on the course to update. This field is required to do an update. The update will fail if invalid fields are specified. The following fields are valid: * `name` * `section` * `descriptionHeading` * `description` * `room` * `courseState` * `ownerId` Note: patches to ownerId are treated as being effective immediately, but in practice it may take some time for the ownership transfer of all affected resources to complete. When set in a query parameter, this field should be specified as `updateMask=,,...` |
| `params.resource` | `object` | Yes | The request body. |

#### `courses.delete()`

Deletes a course. This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting user is not permitted to delete the requested course or for access errors.

* `NOT_FOUND` if no course exists with the requested ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.id` | `string` | Yes | Identifier of the course to delete. This identifier can be either the Classroom-assigned identifier or an alias. |

#### `courses.list()`

Returns a list of courses that the requesting user is permitted to view, restricted to those that match the request. Returned courses are ordered by creation time, with the most recently created coming first. This method returns the following error codes:

* `PERMISSION_DENIED` for access errors.

* `INVALID_ARGUMENT` if the query argument is malformed.

* `NOT_FOUND` if any users specified in the query arguments do not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.studentId` | `string` | No | Restricts returned courses to those having a student with the specified identifier. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user |
| `params.teacherId` | `string` | No | Restricts returned courses to those having a teacher with the specified identifier. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user |
| `params.courseStates` | `string` | No | Restricts returned courses to those in one of the specified states The default value is ACTIVE, ARCHIVED, PROVISIONED, DECLINED. |
| `params.pageSize` | `integer` | No | Maximum number of items to return. Zero or unspecified indicates that the server may assign a maximum. The server may return fewer than the specified number of results. |
| `params.pageToken` | `string` | No | nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token. |

#### `courses.getGradingPeriodSettings()`

Returns the grading period settings in a course. This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting user isn't permitted to access the grading period settings in the requested course or for access errors.

* `NOT_FOUND` if the requested course does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.courseId` | `string` | Yes | Required. The identifier of the course. |

#### `courses.updateGradingPeriodSettings()`

Updates grading period settings of a course. Individual grading periods can be added, removed, or modified using this method. The requesting user and course owner must be eligible to modify Grading Periods. For details, see [licensing requirements](https://developers.google.com/workspace/classroom/grading-periods/manage-grading-periods#licensing_requirements). This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting user is not permitted to modify the grading period settings in a course or for access errors:

* UserIneligibleToUpdateGradingPeriodSettings

* `INVALID_ARGUMENT` if the request is malformed.

* `NOT_FOUND` if the requested course does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.courseId` | `string` | Yes | Required. The identifier of the course. |
| `params.updateMask` | `string` | No | Mask that identifies which fields in the GradingPeriodSettings to update. The GradingPeriodSettings `grading_periods` list will be fully replaced by the grading periods specified in the update request. For example: * Grading periods included in the list without an ID are considered additions, and a new ID will be assigned when the request is made. * Grading periods that currently exist, but are missing from the request will be considered deletions. * Grading periods with an existing ID and modified data are considered edits. Unmodified data will be left as is. * Grading periods included with an unknown ID will result in an error. The following fields may be specified: * `grading_periods` * `apply_to_existing_coursework` |
| `params.resource` | `object` | Yes | The request body. |

### `courses.aliases`

#### `courses.aliases.create()`

Creates an alias for a course. This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting user is not permitted to create the alias or for access errors.

* `NOT_FOUND` if the course does not exist.

* `ALREADY_EXISTS` if the alias already exists.

* `FAILED_PRECONDITION` if the alias requested does not make sense for the requesting user or course (for example, if a user not in a domain attempts to access a domain-scoped alias).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.courseId` | `string` | Yes | Identifier of the course to alias. This identifier can be either the Classroom-assigned identifier or an alias. |
| `params.resource` | `object` | Yes | The request body. |

#### `courses.aliases.delete()`

Deletes an alias of a course. This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting user is not permitted to remove the alias or for access errors.

* `NOT_FOUND` if the alias does not exist.

* `FAILED_PRECONDITION` if the alias requested does not make sense for the requesting user or course (for example, if a user not in a domain attempts to delete a domain-scoped alias).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.courseId` | `string` | Yes | Identifier of the course whose alias should be deleted. This identifier can be either the Classroom-assigned identifier or an alias. |
| `params.alias` | `string` | Yes | Alias to delete. This may not be the Classroom-assigned identifier. |

#### `courses.aliases.list()`

Returns a list of aliases for a course. This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting user is not permitted to access the course or for access errors.

* `NOT_FOUND` if the course does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.courseId` | `string` | Yes | The identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias. |
| `params.pageSize` | `integer` | No | Maximum number of items to return. Zero or unspecified indicates that the server may assign a maximum. The server may return fewer than the specified number of results. |
| `params.pageToken` | `string` | No | nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token. |

### `courses.courseWork`

#### `courses.courseWork.create()`

Creates course work. The resulting course work (and corresponding student submissions) are associated with the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to make the request. Classroom API requests to modify course work and student submissions must be made with an OAuth client ID from the associated Developer Console project. This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course, create course work in the requested course, share a Drive attachment, or for access errors.

* `INVALID_ARGUMENT` if the request is malformed.

* `NOT_FOUND` if the requested course does not exist.

* `FAILED_PRECONDITION` for the following request error:

* AttachmentNotVisible

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.courseId` | `string` | Yes | Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias. |
| `params.resource` | `object` | Yes | The request body. |

#### `courses.courseWork.patch()`

Updates one or more fields of a course work. See google.classroom.v1.CourseWork for details of which fields may be updated and who may change them. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work item. This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting developer project did not create the corresponding course work, if the user is not permitted to make the requested modification to the student submission, or for access errors.

* `INVALID_ARGUMENT` if the request is malformed.

* `FAILED_PRECONDITION` if the requested course work has already been deleted.

* `NOT_FOUND` if the requested course or course work does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.courseId` | `string` | Yes | Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias. |
| `params.id` | `string` | Yes | Identifier of the course work. |
| `params.updateMask` | `string` | No | Mask that identifies which fields on the course work to update. This field is required to do an update. The update fails if invalid fields are specified. If a field supports empty values, it can be cleared by specifying it in the update mask and not in the `CourseWork` object. If a field that does not support empty values is included in the update mask and not set in the `CourseWork` object, an `INVALID_ARGUMENT` error is returned. The following fields may be specified by teachers: * `title` * `description` * `state` * `due_date` * `due_time` * `max_points` * `scheduled_time` * `submission_modification_mode` * `topic_id` * `grading_period_id` |
| `params.resource` | `object` | Yes | The request body. |

#### `courses.courseWork.delete()`

Deletes a course work. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work item. This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting developer project did not create the corresponding course work, if the requesting user is not permitted to delete the requested course or for access errors.

* `FAILED_PRECONDITION` if the requested course work has already been deleted.

* `NOT_FOUND` if no course exists with the requested ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.courseId` | `string` | Yes | Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias. |
| `params.id` | `string` | Yes | Identifier of the course work to delete. This identifier is a Classroom-assigned identifier. |

#### `courses.courseWork.get()`

Returns course work. This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work, or for access errors.

* `INVALID_ARGUMENT` if the request is malformed.

* `NOT_FOUND` if the requested course or course work does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.courseId` | `string` | Yes | Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias. |
| `params.id` | `string` | Yes | Identifier of the course work. |

#### `courses.courseWork.list()`

Returns a list of course work that the requester is permitted to view. Course students may only view `PUBLISHED` course work. Course teachers and domain administrators may view all course work. This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or for access errors.

* `INVALID_ARGUMENT` if the request is malformed.

* `NOT_FOUND` if the requested course does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.courseId` | `string` | Yes | Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias. |
| `params.courseWorkStates` | `string` | No | Restriction on the work status to return. Only courseWork that matches is returned. If unspecified, items with a work status of `PUBLISHED` is returned. |
| `params.orderBy` | `string` | No | Optional sort ordering for results. A comma-separated list of fields with an optional sort direction keyword. Supported fields are `updateTime` and `dueDate`. Supported direction keywords are `asc` and `desc`. If not specified, `updateTime desc` is the default behavior. Examples: `dueDate asc,updateTime desc`, `updateTime,dueDate desc` |
| `params.pageSize` | `integer` | No | Maximum number of items to return. Zero or unspecified indicates that the server may assign a maximum. The server may return fewer than the specified number of results. |
| `params.pageToken` | `string` | No | nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token. |

#### `courses.courseWork.modifyAssignees()`

Modifies assignee mode and options of a coursework. Only a teacher of the course that contains the coursework may call this method. This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work or for access errors.

* `INVALID_ARGUMENT` if the request is malformed.

* `NOT_FOUND` if the requested course or course work does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.courseId` | `string` | Yes | Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias. |
| `params.id` | `string` | Yes | Identifier of the coursework. |
| `params.resource` | `object` | Yes | The request body. |

#### `courses.courseWork.getAddOnContext()`

Gets metadata for Classroom add-ons in the context of a specific post. To maintain the integrity of its own data and permissions model, an add-on should call this to validate query parameters and the requesting user's role whenever the add-on is opened in an [iframe](https://developers.google.com/workspace/classroom/add-ons/get-started/iframes/iframes-overview). This method returns the following error codes:

* `PERMISSION_DENIED` for access errors.

* `INVALID_ARGUMENT` if the request is malformed.

* `NOT_FOUND` if one of the identified resources does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.courseId` | `string` | Yes | Required. Identifier of the course. |
| `params.itemId` | `string` | Yes | Identifier of the `Announcement`, `CourseWork`, or `CourseWorkMaterial` under which the attachment is attached. This field is required, but is not marked as such while we are migrating from post_id. |
| `params.postId` | `string` | No | Optional. Deprecated, use `item_id` instead. |
| `params.addOnToken` | `string` | No | Optional. Token that authorizes the request. The token is passed as a query parameter when the user is redirected from Classroom to the add-on's URL. The authorization token is required when neither of the following is true: * The add-on has attachments on the post. * The developer project issuing the request is the same project that created the post. |
| `params.attachmentId` | `string` | No | Optional. The identifier of the attachment. This field is required for all requests except when the user is in the [Attachment Discovery iframe](https://developers.google.com/workspace/classroom/add-ons/get-started/iframes/attachment-discovery-iframe). |

#### `courses.courseWork.updateRubric()`

Updates a rubric. See google.classroom.v1.Rubric for details of which fields can be updated. Rubric update capabilities are [limited](/classroom/rubrics/limitations) once grading has started. The requesting user and course owner must have rubrics creation capabilities. For details, see [licensing requirements](https://developers.google.com/workspace/classroom/rubrics/limitations#license-requirements). This request must be made by the Google Cloud console of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the parent course work item. This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting developer project didn't create the corresponding course work, if the user isn't permitted to make the requested modification to the rubric, or for access errors. This error code is also returned if grading has already started on the rubric.

* `INVALID_ARGUMENT` if the request is malformed and for the following request error:

* `RubricCriteriaInvalidFormat`

* `NOT_FOUND` if the requested course, course work, or rubric doesn't exist or if the user doesn't have access to the corresponding course work.

* `INTERNAL` if grading has already started on the rubric.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.courseId` | `string` | Yes | Required. Identifier of the course. |
| `params.courseWorkId` | `string` | Yes | Required. Identifier of the course work. |
| `params.id` | `string` | No | Optional. Identifier of the rubric. |
| `params.updateMask` | `string` | No | Optional. Mask that identifies which fields on the rubric to update. This field is required to do an update. The update fails if invalid fields are specified. There are multiple options to define the criteria of a rubric: the `source_spreadsheet_id` and the `criteria` list. Only one of these can be used at a time to define a rubric. The rubric `criteria` list is fully replaced by the rubric criteria specified in the update request. For example, if a criterion or level is missing from the request, it is deleted. New criteria and levels are added and an ID is assigned. Existing criteria and levels retain the previously assigned ID if the ID is specified in the request. The following fields can be specified by teachers: * `criteria` * `source_spreadsheet_id` |
| `params.resource` | `object` | Yes | The request body. |

### `courses.courseWork.studentSubmissions`

#### `courses.courseWork.studentSubmissions.get()`

Returns a student submission.

* `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course, course work, or student submission or for access errors.

* `INVALID_ARGUMENT` if the request is malformed.

* `NOT_FOUND` if the requested course, course work, or student submission does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.courseId` | `string` | Yes | Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias. |
| `params.courseWorkId` | `string` | Yes | Identifier of the course work. |
| `params.id` | `string` | Yes | Identifier of the student submission. |

#### `courses.courseWork.studentSubmissions.patch()`

Updates one or more fields of a student submission. See google.classroom.v1.StudentSubmission for details of which fields may be updated and who may change them. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work item. This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting developer project did not create the corresponding course work, if the user is not permitted to make the requested modification to the student submission, or for access errors.

* `INVALID_ARGUMENT` if the request is malformed.

* `NOT_FOUND` if the requested course, course work, or student submission does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.courseId` | `string` | Yes | Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias. |
| `params.courseWorkId` | `string` | Yes | Identifier of the course work. |
| `params.id` | `string` | Yes | Identifier of the student submission. |
| `params.updateMask` | `string` | No | Mask that identifies which fields on the student submission to update. This field is required to do an update. The update fails if invalid fields are specified. The following fields may be specified by teachers: * `draft_grade` * `assigned_grade` |
| `params.resource` | `object` | Yes | The request body. |

#### `courses.courseWork.studentSubmissions.list()`

Returns a list of student submissions that the requester is permitted to view, factoring in the OAuth scopes of the request. `-` may be specified as the `course_work_id` to include student submissions for multiple course work items. Course students may only view their own work. Course teachers and domain administrators may view all student submissions. This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work, or for access errors.

* `INVALID_ARGUMENT` if the request is malformed.

* `NOT_FOUND` if the requested course does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.courseId` | `string` | Yes | Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias. |
| `params.courseWorkId` | `string` | Yes | Identifier of the student work to request. This may be set to the string literal `"-"` to request student work for all course work in the specified course. |
| `params.userId` | `string` | No | Optional argument to restrict returned student work to those owned by the student with the specified identifier. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user |
| `params.states` | `string` | No | Requested submission states. If specified, returned student submissions match one of the specified submission states. |
| `params.late` | `string` | No | Requested lateness value. If specified, returned student submissions are restricted by the requested value. If unspecified, submissions are returned regardless of `late` value. |
| `params.pageSize` | `integer` | No | Maximum number of items to return. Zero or unspecified indicates that the server may assign a maximum. The server may return fewer than the specified number of results. |
| `params.pageToken` | `string` | No | nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token. |

#### `courses.courseWork.studentSubmissions.turnIn()`

Turns in a student submission. Turning in a student submission transfers ownership of attached Drive files to the teacher and may also update the submission state. This may only be called by the student that owns the specified student submission. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work item. This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work, turn in the requested student submission, or for access errors.

* `INVALID_ARGUMENT` if the request is malformed.

* `NOT_FOUND` if the requested course, course work, or student submission does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.courseId` | `string` | Yes | Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias. |
| `params.courseWorkId` | `string` | Yes | Identifier of the course work. |
| `params.id` | `string` | Yes | Identifier of the student submission. |
| `params.resource` | `object` | Yes | The request body. |

#### `courses.courseWork.studentSubmissions.reclaim()`

Reclaims a student submission on behalf of the student that owns it. Reclaiming a student submission transfers ownership of attached Drive files to the student and updates the submission state. Only the student that owns the requested student submission may call this method, and only for a student submission that has been turned in. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work item. This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work, unsubmit the requested student submission, or for access errors.

* `FAILED_PRECONDITION` if the student submission has not been turned in.

* `INVALID_ARGUMENT` if the request is malformed.

* `NOT_FOUND` if the requested course, course work, or student submission does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.courseId` | `string` | Yes | Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias. |
| `params.courseWorkId` | `string` | Yes | Identifier of the course work. |
| `params.id` | `string` | Yes | Identifier of the student submission. |
| `params.resource` | `object` | Yes | The request body. |

#### `courses.courseWork.studentSubmissions.return()`

Returns a student submission. Returning a student submission transfers ownership of attached Drive files to the student and may also update the submission state. Unlike the Classroom application, returning a student submission does not set assignedGrade to the draftGrade value. Only a teacher of the course that contains the requested student submission may call this method. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work item. This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work, return the requested student submission, or for access errors.

* `INVALID_ARGUMENT` if the request is malformed.

* `NOT_FOUND` if the requested course, course work, or student submission does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.courseId` | `string` | Yes | Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias. |
| `params.courseWorkId` | `string` | Yes | Identifier of the course work. |
| `params.id` | `string` | Yes | Identifier of the student submission. |
| `params.resource` | `object` | Yes | The request body. |

#### `courses.courseWork.studentSubmissions.modifyAttachments()`

Modifies attachments of student submission. Attachments may only be added to student submissions belonging to course work objects with a `workType` of `ASSIGNMENT`. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work item. This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work, if the user is not permitted to modify attachments on the requested student submission, or for access errors.

* `INVALID_ARGUMENT` if the request is malformed.

* `NOT_FOUND` if the requested course, course work, or student submission does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.courseId` | `string` | Yes | Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias. |
| `params.courseWorkId` | `string` | Yes | Identifier of the course work. |
| `params.id` | `string` | Yes | Identifier of the student submission. |
| `params.resource` | `object` | Yes | The request body. |

### `courses.courseWork.addOnAttachments`

#### `courses.courseWork.addOnAttachments.get()`

Returns an add-on attachment. Requires the add-on requesting the attachment to be the original creator of the attachment. This method returns the following error codes:

* `PERMISSION_DENIED` for access errors.

* `INVALID_ARGUMENT` if the request is malformed.

* `NOT_FOUND` if one of the identified resources does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.courseId` | `string` | Yes | Required. Identifier of the course. |
| `params.itemId` | `string` | Yes | Identifier of the `Announcement`, `CourseWork`, or `CourseWorkMaterial` under which the attachment is attached. This field is required, but is not marked as such while we are migrating from post_id. |
| `params.attachmentId` | `string` | Yes | Required. Identifier of the attachment. |
| `params.postId` | `string` | No | Optional. Deprecated, use `item_id` instead. |

#### `courses.courseWork.addOnAttachments.list()`

Returns all attachments created by an add-on under the post. Requires the add-on to have active attachments on the post or have permission to create new attachments on the post. This method returns the following error codes:

* `PERMISSION_DENIED` for access errors.

* `INVALID_ARGUMENT` if the request is malformed.

* `NOT_FOUND` if one of the identified resources does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.courseId` | `string` | Yes | Required. Identifier of the course. |
| `params.itemId` | `string` | Yes | Identifier of the `Announcement`, `CourseWork`, or `CourseWorkMaterial` whose attachments should be enumerated. This field is required, but is not marked as such while we are migrating from post_id. |
| `params.postId` | `string` | No | Optional. Identifier of the post under the course whose attachments to enumerate. Deprecated, use `item_id` instead. |
| `params.pageSize` | `integer` | No | The maximum number of attachments to return. The service may return fewer than this value. If unspecified, at most 20 attachments will be returned. The maximum value is 20; values above 20 will be coerced to 20. |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListAddOnAttachments` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAddOnAttachments` must match the call that provided the page token. |

#### `courses.courseWork.addOnAttachments.create()`

Creates an add-on attachment under a post. Requires the add-on to have permission to create new attachments on the post. This method returns the following error codes:

* `PERMISSION_DENIED` for access errors.

* `INVALID_ARGUMENT` if the request is malformed.

* `NOT_FOUND` if one of the identified resources does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.courseId` | `string` | Yes | Required. Identifier of the course. |
| `params.itemId` | `string` | Yes | Identifier of the `Announcement`, `CourseWork`, or `CourseWorkMaterial` under which to create the attachment. This field is required, but is not marked as such while we are migrating from post_id. |
| `params.postId` | `string` | No | Optional. Deprecated, use `item_id` instead. |
| `params.addOnToken` | `string` | No | Optional. Token that authorizes the request. The token is passed as a query parameter when the user is redirected from Classroom to the add-on's URL. This authorization token is required for in-Classroom attachment creation but optional for partner-first attachment creation. Returns an error if not provided for partner-first attachment creation and the developer projects that created the attachment and its parent stream item do not match. |
| `params.resource` | `object` | Yes | The request body. |

#### `courses.courseWork.addOnAttachments.patch()`

Updates an add-on attachment. Requires the add-on to have been the original creator of the attachment. This method returns the following error codes:

* `PERMISSION_DENIED` for access errors.

* `INVALID_ARGUMENT` if the request is malformed.

* `NOT_FOUND` if one of the identified resources does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.courseId` | `string` | Yes | Required. Identifier of the course. |
| `params.itemId` | `string` | Yes | Identifier of the post under which the attachment is attached. |
| `params.attachmentId` | `string` | Yes | Required. Identifier of the attachment. |
| `params.postId` | `string` | No | Required. Identifier of the post under which the attachment is attached. |
| `params.updateMask` | `string` | No | Required. Mask that identifies which fields on the attachment to update. The update fails if invalid fields are specified. If a field supports empty values, it can be cleared by specifying it in the update mask and not in the `AddOnAttachment` object. If a field that does not support empty values is included in the update mask and not set in the `AddOnAttachment` object, an `INVALID_ARGUMENT` error is returned. The following fields may be specified by teachers: * `title` * `teacher_view_uri` * `student_view_uri` * `student_work_review_uri` * `due_date` * `due_time` * `max_points` |
| `params.resource` | `object` | Yes | The request body. |

#### `courses.courseWork.addOnAttachments.delete()`

Deletes an add-on attachment. Requires the add-on to have been the original creator of the attachment. This method returns the following error codes:

* `PERMISSION_DENIED` for access errors.

* `INVALID_ARGUMENT` if the request is malformed.

* `NOT_FOUND` if one of the identified resources does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.courseId` | `string` | Yes | Required. Identifier of the course. |
| `params.itemId` | `string` | Yes | Identifier of the `Announcement`, `CourseWork`, or `CourseWorkMaterial` under which the attachment is attached. This field is required, but is not marked as such while we are migrating from post_id. |
| `params.attachmentId` | `string` | Yes | Required. Identifier of the attachment. |
| `params.postId` | `string` | No | Optional. Deprecated, use `item_id` instead. |

### `courses.courseWork.addOnAttachments.studentSubmissions`

#### `courses.courseWork.addOnAttachments.studentSubmissions.patch()`

Updates data associated with an add-on attachment submission. Requires the add-on to have been the original creator of the attachment and the attachment to have a positive `max_points` value set. This method returns the following error codes:

* `PERMISSION_DENIED` for access errors.

* `INVALID_ARGUMENT` if the request is malformed.

* `NOT_FOUND` if one of the identified resources does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.courseId` | `string` | Yes | Required. Identifier of the course. |
| `params.itemId` | `string` | Yes | Identifier of the `Announcement`, `CourseWork`, or `CourseWorkMaterial` under which the attachment is attached. This field is required, but is not marked as such while we are migrating from post_id. |
| `params.attachmentId` | `string` | Yes | Required. Identifier of the attachment. |
| `params.submissionId` | `string` | Yes | Required. Identifier of the student's submission. |
| `params.postId` | `string` | No | Optional. Deprecated, use `item_id` instead. |
| `params.updateMask` | `string` | No | Required. Mask that identifies which fields on the attachment to update. The update fails if invalid fields are specified. If a field supports empty values, it can be cleared by specifying it in the update mask and not in the `AddOnAttachmentStudentSubmission` object. The following fields may be specified by teachers: * `points_earned` |
| `params.resource` | `object` | Yes | The request body. |

#### `courses.courseWork.addOnAttachments.studentSubmissions.get()`

Returns a student submission for an add-on attachment. This method returns the following error codes:

* `PERMISSION_DENIED` for access errors.

* `INVALID_ARGUMENT` if the request is malformed.

* `NOT_FOUND` if one of the identified resources does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.courseId` | `string` | Yes | Required. Identifier of the course. |
| `params.itemId` | `string` | Yes | Identifier of the `Announcement`, `CourseWork`, or `CourseWorkMaterial` under which the attachment is attached. This field is required, but is not marked as such while we are migrating from post_id. |
| `params.attachmentId` | `string` | Yes | Required. Identifier of the attachment. |
| `params.submissionId` | `string` | Yes | Required. Identifier of the student’s submission. |
| `params.postId` | `string` | No | Optional. Deprecated, use `item_id` instead. |

### `courses.courseWork.rubrics`

#### `courses.courseWork.rubrics.patch()`

Updates a rubric. See google.classroom.v1.Rubric for details of which fields can be updated. Rubric update capabilities are [limited](/classroom/rubrics/limitations) once grading has started. The requesting user and course owner must have rubrics creation capabilities. For details, see [licensing requirements](https://developers.google.com/workspace/classroom/rubrics/limitations#license-requirements). This request must be made by the Google Cloud console of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the parent course work item. This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting developer project didn't create the corresponding course work, if the user isn't permitted to make the requested modification to the rubric, or for access errors. This error code is also returned if grading has already started on the rubric.

* `INVALID_ARGUMENT` if the request is malformed and for the following request error:

* `RubricCriteriaInvalidFormat`

* `NOT_FOUND` if the requested course, course work, or rubric doesn't exist or if the user doesn't have access to the corresponding course work.

* `INTERNAL` if grading has already started on the rubric.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.courseId` | `string` | Yes | Required. Identifier of the course. |
| `params.courseWorkId` | `string` | Yes | Required. Identifier of the course work. |
| `params.id` | `string` | Yes | Optional. Identifier of the rubric. |
| `params.updateMask` | `string` | No | Optional. Mask that identifies which fields on the rubric to update. This field is required to do an update. The update fails if invalid fields are specified. There are multiple options to define the criteria of a rubric: the `source_spreadsheet_id` and the `criteria` list. Only one of these can be used at a time to define a rubric. The rubric `criteria` list is fully replaced by the rubric criteria specified in the update request. For example, if a criterion or level is missing from the request, it is deleted. New criteria and levels are added and an ID is assigned. Existing criteria and levels retain the previously assigned ID if the ID is specified in the request. The following fields can be specified by teachers: * `criteria` * `source_spreadsheet_id` |
| `params.resource` | `object` | Yes | The request body. |

#### `courses.courseWork.rubrics.create()`

Creates a rubric. The requesting user and course owner must have rubrics creation capabilities. For details, see [licensing requirements](https://developers.google.com/workspace/classroom/rubrics/limitations#license-requirements). For further details, see [Rubrics structure and known limitations](/classroom/rubrics/limitations). This request must be made by the Google Cloud console of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the parent course work item. This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting user isn't permitted to create rubrics for course work in the requested course.

* `INTERNAL` if the request has insufficient OAuth scopes.

* `INVALID_ARGUMENT` if the request is malformed and for the following request error:

* `RubricCriteriaInvalidFormat`

* `NOT_FOUND` if the requested course or course work don't exist or the user doesn't have access to the course or course work.

* `FAILED_PRECONDITION` for the following request error:

* `AttachmentNotVisible`

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.courseId` | `string` | Yes | Required. Identifier of the course. |
| `params.courseWorkId` | `string` | Yes | Required. Identifier of the course work. |
| `params.resource` | `object` | Yes | The request body. |

#### `courses.courseWork.rubrics.get()`

Returns a rubric. This method returns the following error codes:

* `PERMISSION_DENIED` for access errors.

* `INVALID_ARGUMENT` if the request is malformed.

* `NOT_FOUND` if the requested course, course work, or rubric doesn't exist or if the user doesn't have access to the corresponding course work.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.courseId` | `string` | Yes | Required. Identifier of the course. |
| `params.courseWorkId` | `string` | Yes | Required. Identifier of the course work. |
| `params.id` | `string` | Yes | Required. Identifier of the rubric. |

#### `courses.courseWork.rubrics.list()`

Returns a list of rubrics that the requester is permitted to view. This method returns the following error codes:

* `PERMISSION_DENIED` for access errors.

* `INVALID_ARGUMENT` if the request is malformed.

* `NOT_FOUND` if the requested course or course work doesn't exist or if the user doesn't have access to the corresponding course work.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.courseId` | `string` | Yes | Required. Identifier of the course. |
| `params.courseWorkId` | `string` | Yes | Required. Identifier of the course work. |
| `params.pageSize` | `integer` | No | The maximum number of rubrics to return. If unspecified, at most 1 rubric is returned. The maximum value is 1; values above 1 are coerced to 1. |
| `params.pageToken` | `string` | No | nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token. |

#### `courses.courseWork.rubrics.delete()`

Deletes a rubric. The requesting user and course owner must have rubrics creation capabilities. For details, see [licensing requirements](https://developers.google.com/workspace/classroom/rubrics/limitations#license-requirements). This request must be made by the Google Cloud console of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding rubric. This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting developer project didn't create the corresponding rubric, or if the requesting user isn't permitted to delete the requested rubric.

* `NOT_FOUND` if no rubric exists with the requested ID or the user does not have access to the course, course work, or rubric.

* `INVALID_ARGUMENT` if grading has already started on the rubric.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.courseId` | `string` | Yes | Required. Identifier of the course. |
| `params.courseWorkId` | `string` | Yes | Required. Identifier of the course work. |
| `params.id` | `string` | Yes | Required. Identifier of the rubric. |

### `courses.announcements`

#### `courses.announcements.delete()`

Deletes an announcement. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding announcement item. This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting developer project did not create the corresponding announcement, if the requesting user is not permitted to delete the requested course or for access errors.

* `FAILED_PRECONDITION` if the requested announcement has already been deleted.

* `NOT_FOUND` if no course exists with the requested ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.courseId` | `string` | Yes | Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias. |
| `params.id` | `string` | Yes | Identifier of the announcement to delete. This identifier is a Classroom-assigned identifier. |

#### `courses.announcements.create()`

Creates an announcement. This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course, create announcements in the requested course, share a Drive attachment, or for access errors.

* `INVALID_ARGUMENT` if the request is malformed.

* `NOT_FOUND` if the requested course does not exist.

* `FAILED_PRECONDITION` for the following request error:

* AttachmentNotVisible

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.courseId` | `string` | Yes | Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias. |
| `params.resource` | `object` | Yes | The request body. |

#### `courses.announcements.get()`

Returns an announcement. This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or announcement, or for access errors.

* `INVALID_ARGUMENT` if the request is malformed.

* `NOT_FOUND` if the requested course or announcement does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.courseId` | `string` | Yes | Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias. |
| `params.id` | `string` | Yes | Identifier of the announcement. |

#### `courses.announcements.list()`

Returns a list of announcements that the requester is permitted to view. Course students may only view `PUBLISHED` announcements. Course teachers and domain administrators may view all announcements. This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or for access errors.

* `INVALID_ARGUMENT` if the request is malformed.

* `NOT_FOUND` if the requested course does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.courseId` | `string` | Yes | Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias. |
| `params.announcementStates` | `string` | No | Restriction on the `state` of announcements returned. If this argument is left unspecified, the default value is `PUBLISHED`. |
| `params.orderBy` | `string` | No | Optional sort ordering for results. A comma-separated list of fields with an optional sort direction keyword. Supported field is `updateTime`. Supported direction keywords are `asc` and `desc`. If not specified, `updateTime desc` is the default behavior. Examples: `updateTime asc`, `updateTime` |
| `params.pageSize` | `integer` | No | Maximum number of items to return. Zero or unspecified indicates that the server may assign a maximum. The server may return fewer than the specified number of results. |
| `params.pageToken` | `string` | No | nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token. |

#### `courses.announcements.patch()`

Updates one or more fields of an announcement. This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting developer project did not create the corresponding announcement or for access errors.

* `INVALID_ARGUMENT` if the request is malformed.

* `FAILED_PRECONDITION` if the requested announcement has already been deleted.

* `NOT_FOUND` if the requested course or announcement does not exist

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.courseId` | `string` | Yes | Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias. |
| `params.id` | `string` | Yes | Identifier of the announcement. |
| `params.updateMask` | `string` | No | Mask that identifies which fields on the announcement to update. This field is required to do an update. The update fails if invalid fields are specified. If a field supports empty values, it can be cleared by specifying it in the update mask and not in the Announcement object. If a field that does not support empty values is included in the update mask and not set in the Announcement object, an `INVALID_ARGUMENT` error is returned. The following fields may be specified by teachers: * `text` * `state` * `scheduled_time` |
| `params.resource` | `object` | Yes | The request body. |

#### `courses.announcements.modifyAssignees()`

Modifies assignee mode and options of an announcement. Only a teacher of the course that contains the announcement may call this method. This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work or for access errors.

* `INVALID_ARGUMENT` if the request is malformed.

* `NOT_FOUND` if the requested course or course work does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.courseId` | `string` | Yes | Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias. |
| `params.id` | `string` | Yes | Identifier of the announcement. |
| `params.resource` | `object` | Yes | The request body. |

#### `courses.announcements.getAddOnContext()`

Gets metadata for Classroom add-ons in the context of a specific post. To maintain the integrity of its own data and permissions model, an add-on should call this to validate query parameters and the requesting user's role whenever the add-on is opened in an [iframe](https://developers.google.com/workspace/classroom/add-ons/get-started/iframes/iframes-overview). This method returns the following error codes:

* `PERMISSION_DENIED` for access errors.

* `INVALID_ARGUMENT` if the request is malformed.

* `NOT_FOUND` if one of the identified resources does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.courseId` | `string` | Yes | Required. Identifier of the course. |
| `params.itemId` | `string` | Yes | Identifier of the `Announcement`, `CourseWork`, or `CourseWorkMaterial` under which the attachment is attached. This field is required, but is not marked as such while we are migrating from post_id. |
| `params.postId` | `string` | No | Optional. Deprecated, use `item_id` instead. |
| `params.addOnToken` | `string` | No | Optional. Token that authorizes the request. The token is passed as a query parameter when the user is redirected from Classroom to the add-on's URL. The authorization token is required when neither of the following is true: * The add-on has attachments on the post. * The developer project issuing the request is the same project that created the post. |
| `params.attachmentId` | `string` | No | Optional. The identifier of the attachment. This field is required for all requests except when the user is in the [Attachment Discovery iframe](https://developers.google.com/workspace/classroom/add-ons/get-started/iframes/attachment-discovery-iframe). |

### `courses.announcements.addOnAttachments`

#### `courses.announcements.addOnAttachments.get()`

Returns an add-on attachment. Requires the add-on requesting the attachment to be the original creator of the attachment. This method returns the following error codes:

* `PERMISSION_DENIED` for access errors.

* `INVALID_ARGUMENT` if the request is malformed.

* `NOT_FOUND` if one of the identified resources does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.courseId` | `string` | Yes | Required. Identifier of the course. |
| `params.itemId` | `string` | Yes | Identifier of the `Announcement`, `CourseWork`, or `CourseWorkMaterial` under which the attachment is attached. This field is required, but is not marked as such while we are migrating from post_id. |
| `params.attachmentId` | `string` | Yes | Required. Identifier of the attachment. |
| `params.postId` | `string` | No | Optional. Deprecated, use `item_id` instead. |

#### `courses.announcements.addOnAttachments.list()`

Returns all attachments created by an add-on under the post. Requires the add-on to have active attachments on the post or have permission to create new attachments on the post. This method returns the following error codes:

* `PERMISSION_DENIED` for access errors.

* `INVALID_ARGUMENT` if the request is malformed.

* `NOT_FOUND` if one of the identified resources does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.courseId` | `string` | Yes | Required. Identifier of the course. |
| `params.itemId` | `string` | Yes | Identifier of the `Announcement`, `CourseWork`, or `CourseWorkMaterial` whose attachments should be enumerated. This field is required, but is not marked as such while we are migrating from post_id. |
| `params.postId` | `string` | No | Optional. Identifier of the post under the course whose attachments to enumerate. Deprecated, use `item_id` instead. |
| `params.pageSize` | `integer` | No | The maximum number of attachments to return. The service may return fewer than this value. If unspecified, at most 20 attachments will be returned. The maximum value is 20; values above 20 will be coerced to 20. |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListAddOnAttachments` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAddOnAttachments` must match the call that provided the page token. |

#### `courses.announcements.addOnAttachments.create()`

Creates an add-on attachment under a post. Requires the add-on to have permission to create new attachments on the post. This method returns the following error codes:

* `PERMISSION_DENIED` for access errors.

* `INVALID_ARGUMENT` if the request is malformed.

* `NOT_FOUND` if one of the identified resources does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.courseId` | `string` | Yes | Required. Identifier of the course. |
| `params.itemId` | `string` | Yes | Identifier of the `Announcement`, `CourseWork`, or `CourseWorkMaterial` under which to create the attachment. This field is required, but is not marked as such while we are migrating from post_id. |
| `params.postId` | `string` | No | Optional. Deprecated, use `item_id` instead. |
| `params.addOnToken` | `string` | No | Optional. Token that authorizes the request. The token is passed as a query parameter when the user is redirected from Classroom to the add-on's URL. This authorization token is required for in-Classroom attachment creation but optional for partner-first attachment creation. Returns an error if not provided for partner-first attachment creation and the developer projects that created the attachment and its parent stream item do not match. |
| `params.resource` | `object` | Yes | The request body. |

#### `courses.announcements.addOnAttachments.patch()`

Updates an add-on attachment. Requires the add-on to have been the original creator of the attachment. This method returns the following error codes:

* `PERMISSION_DENIED` for access errors.

* `INVALID_ARGUMENT` if the request is malformed.

* `NOT_FOUND` if one of the identified resources does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.courseId` | `string` | Yes | Required. Identifier of the course. |
| `params.itemId` | `string` | Yes | Identifier of the post under which the attachment is attached. |
| `params.attachmentId` | `string` | Yes | Required. Identifier of the attachment. |
| `params.postId` | `string` | No | Required. Identifier of the post under which the attachment is attached. |
| `params.updateMask` | `string` | No | Required. Mask that identifies which fields on the attachment to update. The update fails if invalid fields are specified. If a field supports empty values, it can be cleared by specifying it in the update mask and not in the `AddOnAttachment` object. If a field that does not support empty values is included in the update mask and not set in the `AddOnAttachment` object, an `INVALID_ARGUMENT` error is returned. The following fields may be specified by teachers: * `title` * `teacher_view_uri` * `student_view_uri` * `student_work_review_uri` * `due_date` * `due_time` * `max_points` |
| `params.resource` | `object` | Yes | The request body. |

#### `courses.announcements.addOnAttachments.delete()`

Deletes an add-on attachment. Requires the add-on to have been the original creator of the attachment. This method returns the following error codes:

* `PERMISSION_DENIED` for access errors.

* `INVALID_ARGUMENT` if the request is malformed.

* `NOT_FOUND` if one of the identified resources does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.courseId` | `string` | Yes | Required. Identifier of the course. |
| `params.itemId` | `string` | Yes | Identifier of the `Announcement`, `CourseWork`, or `CourseWorkMaterial` under which the attachment is attached. This field is required, but is not marked as such while we are migrating from post_id. |
| `params.attachmentId` | `string` | Yes | Required. Identifier of the attachment. |
| `params.postId` | `string` | No | Optional. Deprecated, use `item_id` instead. |

### `courses.courseWorkMaterials`

#### `courses.courseWorkMaterials.create()`

Creates a course work material. This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course, create course work material in the requested course, share a Drive attachment, or for access errors.

* `INVALID_ARGUMENT` if the request is malformed or if more than 20

* materials are provided.

* `NOT_FOUND` if the requested course does not exist.

* `FAILED_PRECONDITION` for the following request error:

* AttachmentNotVisible

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.courseId` | `string` | Yes | Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias. |
| `params.resource` | `object` | Yes | The request body. |

#### `courses.courseWorkMaterials.get()`

Returns a course work material. This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work material, or for access errors.

* `INVALID_ARGUMENT` if the request is malformed.

* `NOT_FOUND` if the requested course or course work material does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.courseId` | `string` | Yes | Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias. |
| `params.id` | `string` | Yes | Identifier of the course work material. |

#### `courses.courseWorkMaterials.list()`

Returns a list of course work material that the requester is permitted to view. Course students may only view `PUBLISHED` course work material. Course teachers and domain administrators may view all course work material. This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or for access errors.

* `INVALID_ARGUMENT` if the request is malformed.

* `NOT_FOUND` if the requested course does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.courseId` | `string` | Yes | Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias. |
| `params.courseWorkMaterialStates` | `string` | No | Restriction on the work status to return. Only course work material that matches is returned. If unspecified, items with a work status of `PUBLISHED` is returned. |
| `params.orderBy` | `string` | No | Optional sort ordering for results. A comma-separated list of fields with an optional sort direction keyword. Supported field is `updateTime`. Supported direction keywords are `asc` and `desc`. If not specified, `updateTime desc` is the default behavior. Examples: `updateTime asc`, `updateTime` |
| `params.pageSize` | `integer` | No | Maximum number of items to return. Zero or unspecified indicates that the server may assign a maximum. The server may return fewer than the specified number of results. |
| `params.pageToken` | `string` | No | nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token. |
| `params.materialLink` | `string` | No | Optional filtering for course work material with at least one link material whose URL partially matches the provided string. |
| `params.materialDriveId` | `string` | No | Optional filtering for course work material with at least one Drive material whose ID matches the provided string. If `material_link` is also specified, course work material must have materials matching both filters. |

#### `courses.courseWorkMaterials.patch()`

Updates one or more fields of a course work material. This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting developer project for access errors.

* `INVALID_ARGUMENT` if the request is malformed.

* `FAILED_PRECONDITION` if the requested course work material has already been deleted.

* `NOT_FOUND` if the requested course or course work material does not exist

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.courseId` | `string` | Yes | Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias. |
| `params.id` | `string` | Yes | Identifier of the course work material. |
| `params.updateMask` | `string` | No | Mask that identifies which fields on the course work material to update. This field is required to do an update. The update fails if invalid fields are specified. If a field supports empty values, it can be cleared by specifying it in the update mask and not in the course work material object. If a field that does not support empty values is included in the update mask and not set in the course work material object, an `INVALID_ARGUMENT` error is returned. The following fields may be specified by teachers: * `title` * `description` * `state` * `scheduled_time` * `topic_id` |
| `params.resource` | `object` | Yes | The request body. |

#### `courses.courseWorkMaterials.delete()`

Deletes a course work material. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work material item. This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting developer project did not create the corresponding course work material, if the requesting user is not permitted to delete the requested course or for access errors.

* `FAILED_PRECONDITION` if the requested course work material has already been deleted.

* `NOT_FOUND` if no course exists with the requested ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.courseId` | `string` | Yes | Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias. |
| `params.id` | `string` | Yes | Identifier of the course work material to delete. This identifier is a Classroom-assigned identifier. |

#### `courses.courseWorkMaterials.getAddOnContext()`

Gets metadata for Classroom add-ons in the context of a specific post. To maintain the integrity of its own data and permissions model, an add-on should call this to validate query parameters and the requesting user's role whenever the add-on is opened in an [iframe](https://developers.google.com/workspace/classroom/add-ons/get-started/iframes/iframes-overview). This method returns the following error codes:

* `PERMISSION_DENIED` for access errors.

* `INVALID_ARGUMENT` if the request is malformed.

* `NOT_FOUND` if one of the identified resources does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.courseId` | `string` | Yes | Required. Identifier of the course. |
| `params.itemId` | `string` | Yes | Identifier of the `Announcement`, `CourseWork`, or `CourseWorkMaterial` under which the attachment is attached. This field is required, but is not marked as such while we are migrating from post_id. |
| `params.postId` | `string` | No | Optional. Deprecated, use `item_id` instead. |
| `params.addOnToken` | `string` | No | Optional. Token that authorizes the request. The token is passed as a query parameter when the user is redirected from Classroom to the add-on's URL. The authorization token is required when neither of the following is true: * The add-on has attachments on the post. * The developer project issuing the request is the same project that created the post. |
| `params.attachmentId` | `string` | No | Optional. The identifier of the attachment. This field is required for all requests except when the user is in the [Attachment Discovery iframe](https://developers.google.com/workspace/classroom/add-ons/get-started/iframes/attachment-discovery-iframe). |

### `courses.courseWorkMaterials.addOnAttachments`

#### `courses.courseWorkMaterials.addOnAttachments.get()`

Returns an add-on attachment. Requires the add-on requesting the attachment to be the original creator of the attachment. This method returns the following error codes:

* `PERMISSION_DENIED` for access errors.

* `INVALID_ARGUMENT` if the request is malformed.

* `NOT_FOUND` if one of the identified resources does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.courseId` | `string` | Yes | Required. Identifier of the course. |
| `params.itemId` | `string` | Yes | Identifier of the `Announcement`, `CourseWork`, or `CourseWorkMaterial` under which the attachment is attached. This field is required, but is not marked as such while we are migrating from post_id. |
| `params.attachmentId` | `string` | Yes | Required. Identifier of the attachment. |
| `params.postId` | `string` | No | Optional. Deprecated, use `item_id` instead. |

#### `courses.courseWorkMaterials.addOnAttachments.list()`

Returns all attachments created by an add-on under the post. Requires the add-on to have active attachments on the post or have permission to create new attachments on the post. This method returns the following error codes:

* `PERMISSION_DENIED` for access errors.

* `INVALID_ARGUMENT` if the request is malformed.

* `NOT_FOUND` if one of the identified resources does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.courseId` | `string` | Yes | Required. Identifier of the course. |
| `params.itemId` | `string` | Yes | Identifier of the `Announcement`, `CourseWork`, or `CourseWorkMaterial` whose attachments should be enumerated. This field is required, but is not marked as such while we are migrating from post_id. |
| `params.postId` | `string` | No | Optional. Identifier of the post under the course whose attachments to enumerate. Deprecated, use `item_id` instead. |
| `params.pageSize` | `integer` | No | The maximum number of attachments to return. The service may return fewer than this value. If unspecified, at most 20 attachments will be returned. The maximum value is 20; values above 20 will be coerced to 20. |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListAddOnAttachments` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAddOnAttachments` must match the call that provided the page token. |

#### `courses.courseWorkMaterials.addOnAttachments.create()`

Creates an add-on attachment under a post. Requires the add-on to have permission to create new attachments on the post. This method returns the following error codes:

* `PERMISSION_DENIED` for access errors.

* `INVALID_ARGUMENT` if the request is malformed.

* `NOT_FOUND` if one of the identified resources does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.courseId` | `string` | Yes | Required. Identifier of the course. |
| `params.itemId` | `string` | Yes | Identifier of the `Announcement`, `CourseWork`, or `CourseWorkMaterial` under which to create the attachment. This field is required, but is not marked as such while we are migrating from post_id. |
| `params.postId` | `string` | No | Optional. Deprecated, use `item_id` instead. |
| `params.addOnToken` | `string` | No | Optional. Token that authorizes the request. The token is passed as a query parameter when the user is redirected from Classroom to the add-on's URL. This authorization token is required for in-Classroom attachment creation but optional for partner-first attachment creation. Returns an error if not provided for partner-first attachment creation and the developer projects that created the attachment and its parent stream item do not match. |
| `params.resource` | `object` | Yes | The request body. |

#### `courses.courseWorkMaterials.addOnAttachments.patch()`

Updates an add-on attachment. Requires the add-on to have been the original creator of the attachment. This method returns the following error codes:

* `PERMISSION_DENIED` for access errors.

* `INVALID_ARGUMENT` if the request is malformed.

* `NOT_FOUND` if one of the identified resources does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.courseId` | `string` | Yes | Required. Identifier of the course. |
| `params.itemId` | `string` | Yes | Identifier of the post under which the attachment is attached. |
| `params.attachmentId` | `string` | Yes | Required. Identifier of the attachment. |
| `params.postId` | `string` | No | Required. Identifier of the post under which the attachment is attached. |
| `params.updateMask` | `string` | No | Required. Mask that identifies which fields on the attachment to update. The update fails if invalid fields are specified. If a field supports empty values, it can be cleared by specifying it in the update mask and not in the `AddOnAttachment` object. If a field that does not support empty values is included in the update mask and not set in the `AddOnAttachment` object, an `INVALID_ARGUMENT` error is returned. The following fields may be specified by teachers: * `title` * `teacher_view_uri` * `student_view_uri` * `student_work_review_uri` * `due_date` * `due_time` * `max_points` |
| `params.resource` | `object` | Yes | The request body. |

#### `courses.courseWorkMaterials.addOnAttachments.delete()`

Deletes an add-on attachment. Requires the add-on to have been the original creator of the attachment. This method returns the following error codes:

* `PERMISSION_DENIED` for access errors.

* `INVALID_ARGUMENT` if the request is malformed.

* `NOT_FOUND` if one of the identified resources does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.courseId` | `string` | Yes | Required. Identifier of the course. |
| `params.itemId` | `string` | Yes | Identifier of the `Announcement`, `CourseWork`, or `CourseWorkMaterial` under which the attachment is attached. This field is required, but is not marked as such while we are migrating from post_id. |
| `params.attachmentId` | `string` | Yes | Required. Identifier of the attachment. |
| `params.postId` | `string` | No | Optional. Deprecated, use `item_id` instead. |

### `courses.topics`

#### `courses.topics.create()`

Creates a topic. This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course, create a topic in the requested course, or for access errors.

* `INVALID_ARGUMENT` if the request is malformed.

* `ALREADY_EXISTS` if there exists a topic in the course with the same name.

* `FAILED_PRECONDITION` for the following request error:

* CourseTopicLimitReached

* `NOT_FOUND` if the requested course does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.courseId` | `string` | Yes | Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias. |
| `params.resource` | `object` | Yes | The request body. |

#### `courses.topics.patch()`

Updates one or more fields of a topic. This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting developer project did not create the corresponding topic or for access errors.

* `INVALID_ARGUMENT` if the request is malformed.

* `FAILED_PRECONDITION` if there exists a topic in the course with the same name.

* `NOT_FOUND` if the requested course or topic does not exist

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.courseId` | `string` | Yes | Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias. |
| `params.id` | `string` | Yes | Identifier of the topic. |
| `params.updateMask` | `string` | No | Mask that identifies which fields on the topic to update. This field is required to do an update. The update fails if invalid fields are specified. If a field supports empty values, it can be cleared by specifying it in the update mask and not in the Topic object. If a field that does not support empty values is included in the update mask and not set in the Topic object, an `INVALID_ARGUMENT` error is returned. The following fields may be specified: * `name` |
| `params.resource` | `object` | Yes | The request body. |

#### `courses.topics.delete()`

Deletes a topic. This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting user is not allowed to delete the requested topic or for access errors.

* `FAILED_PRECONDITION` if the requested topic has already been deleted.

* `NOT_FOUND` if no course or topic exists with the requested ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.courseId` | `string` | Yes | Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias. |
| `params.id` | `string` | Yes | Identifier of the topic to delete. |

#### `courses.topics.get()`

Returns a topic. This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or topic, or for access errors.

* `INVALID_ARGUMENT` if the request is malformed.

* `NOT_FOUND` if the requested course or topic does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.courseId` | `string` | Yes | Identifier of the course. |
| `params.id` | `string` | Yes | Identifier of the topic. |

#### `courses.topics.list()`

Returns the list of topics that the requester is permitted to view. This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or for access errors.

* `INVALID_ARGUMENT` if the request is malformed.

* `NOT_FOUND` if the requested course does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.courseId` | `string` | Yes | Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias. |
| `params.pageSize` | `integer` | No | Maximum number of items to return. Zero or unspecified indicates that the server may assign a maximum. The server may return fewer than the specified number of results. |
| `params.pageToken` | `string` | No | nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token. |

### `courses.posts`

#### `courses.posts.getAddOnContext()`

Gets metadata for Classroom add-ons in the context of a specific post. To maintain the integrity of its own data and permissions model, an add-on should call this to validate query parameters and the requesting user's role whenever the add-on is opened in an [iframe](https://developers.google.com/workspace/classroom/add-ons/get-started/iframes/iframes-overview). This method returns the following error codes:

* `PERMISSION_DENIED` for access errors.

* `INVALID_ARGUMENT` if the request is malformed.

* `NOT_FOUND` if one of the identified resources does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.courseId` | `string` | Yes | Required. Identifier of the course. |
| `params.postId` | `string` | Yes | Optional. Deprecated, use `item_id` instead. |
| `params.itemId` | `string` | No | Identifier of the `Announcement`, `CourseWork`, or `CourseWorkMaterial` under which the attachment is attached. This field is required, but is not marked as such while we are migrating from post_id. |
| `params.addOnToken` | `string` | No | Optional. Token that authorizes the request. The token is passed as a query parameter when the user is redirected from Classroom to the add-on's URL. The authorization token is required when neither of the following is true: * The add-on has attachments on the post. * The developer project issuing the request is the same project that created the post. |
| `params.attachmentId` | `string` | No | Optional. The identifier of the attachment. This field is required for all requests except when the user is in the [Attachment Discovery iframe](https://developers.google.com/workspace/classroom/add-ons/get-started/iframes/attachment-discovery-iframe). |

### `courses.posts.addOnAttachments`

#### `courses.posts.addOnAttachments.get()`

Returns an add-on attachment. Requires the add-on requesting the attachment to be the original creator of the attachment. This method returns the following error codes:

* `PERMISSION_DENIED` for access errors.

* `INVALID_ARGUMENT` if the request is malformed.

* `NOT_FOUND` if one of the identified resources does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.courseId` | `string` | Yes | Required. Identifier of the course. |
| `params.postId` | `string` | Yes | Optional. Deprecated, use `item_id` instead. |
| `params.attachmentId` | `string` | Yes | Required. Identifier of the attachment. |
| `params.itemId` | `string` | No | Identifier of the `Announcement`, `CourseWork`, or `CourseWorkMaterial` under which the attachment is attached. This field is required, but is not marked as such while we are migrating from post_id. |

#### `courses.posts.addOnAttachments.list()`

Returns all attachments created by an add-on under the post. Requires the add-on to have active attachments on the post or have permission to create new attachments on the post. This method returns the following error codes:

* `PERMISSION_DENIED` for access errors.

* `INVALID_ARGUMENT` if the request is malformed.

* `NOT_FOUND` if one of the identified resources does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.courseId` | `string` | Yes | Required. Identifier of the course. |
| `params.postId` | `string` | Yes | Optional. Identifier of the post under the course whose attachments to enumerate. Deprecated, use `item_id` instead. |
| `params.itemId` | `string` | No | Identifier of the `Announcement`, `CourseWork`, or `CourseWorkMaterial` whose attachments should be enumerated. This field is required, but is not marked as such while we are migrating from post_id. |
| `params.pageSize` | `integer` | No | The maximum number of attachments to return. The service may return fewer than this value. If unspecified, at most 20 attachments will be returned. The maximum value is 20; values above 20 will be coerced to 20. |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListAddOnAttachments` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAddOnAttachments` must match the call that provided the page token. |

#### `courses.posts.addOnAttachments.create()`

Creates an add-on attachment under a post. Requires the add-on to have permission to create new attachments on the post. This method returns the following error codes:

* `PERMISSION_DENIED` for access errors.

* `INVALID_ARGUMENT` if the request is malformed.

* `NOT_FOUND` if one of the identified resources does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.courseId` | `string` | Yes | Required. Identifier of the course. |
| `params.postId` | `string` | Yes | Optional. Deprecated, use `item_id` instead. |
| `params.itemId` | `string` | No | Identifier of the `Announcement`, `CourseWork`, or `CourseWorkMaterial` under which to create the attachment. This field is required, but is not marked as such while we are migrating from post_id. |
| `params.addOnToken` | `string` | No | Optional. Token that authorizes the request. The token is passed as a query parameter when the user is redirected from Classroom to the add-on's URL. This authorization token is required for in-Classroom attachment creation but optional for partner-first attachment creation. Returns an error if not provided for partner-first attachment creation and the developer projects that created the attachment and its parent stream item do not match. |
| `params.resource` | `object` | Yes | The request body. |

#### `courses.posts.addOnAttachments.patch()`

Updates an add-on attachment. Requires the add-on to have been the original creator of the attachment. This method returns the following error codes:

* `PERMISSION_DENIED` for access errors.

* `INVALID_ARGUMENT` if the request is malformed.

* `NOT_FOUND` if one of the identified resources does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.courseId` | `string` | Yes | Required. Identifier of the course. |
| `params.postId` | `string` | Yes | Required. Identifier of the post under which the attachment is attached. |
| `params.attachmentId` | `string` | Yes | Required. Identifier of the attachment. |
| `params.itemId` | `string` | No | Identifier of the post under which the attachment is attached. |
| `params.updateMask` | `string` | No | Required. Mask that identifies which fields on the attachment to update. The update fails if invalid fields are specified. If a field supports empty values, it can be cleared by specifying it in the update mask and not in the `AddOnAttachment` object. If a field that does not support empty values is included in the update mask and not set in the `AddOnAttachment` object, an `INVALID_ARGUMENT` error is returned. The following fields may be specified by teachers: * `title` * `teacher_view_uri` * `student_view_uri` * `student_work_review_uri` * `due_date` * `due_time` * `max_points` |
| `params.resource` | `object` | Yes | The request body. |

#### `courses.posts.addOnAttachments.delete()`

Deletes an add-on attachment. Requires the add-on to have been the original creator of the attachment. This method returns the following error codes:

* `PERMISSION_DENIED` for access errors.

* `INVALID_ARGUMENT` if the request is malformed.

* `NOT_FOUND` if one of the identified resources does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.courseId` | `string` | Yes | Required. Identifier of the course. |
| `params.postId` | `string` | Yes | Optional. Deprecated, use `item_id` instead. |
| `params.attachmentId` | `string` | Yes | Required. Identifier of the attachment. |
| `params.itemId` | `string` | No | Identifier of the `Announcement`, `CourseWork`, or `CourseWorkMaterial` under which the attachment is attached. This field is required, but is not marked as such while we are migrating from post_id. |

### `courses.posts.addOnAttachments.studentSubmissions`

#### `courses.posts.addOnAttachments.studentSubmissions.patch()`

Updates data associated with an add-on attachment submission. Requires the add-on to have been the original creator of the attachment and the attachment to have a positive `max_points` value set. This method returns the following error codes:

* `PERMISSION_DENIED` for access errors.

* `INVALID_ARGUMENT` if the request is malformed.

* `NOT_FOUND` if one of the identified resources does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.courseId` | `string` | Yes | Required. Identifier of the course. |
| `params.postId` | `string` | Yes | Optional. Deprecated, use `item_id` instead. |
| `params.attachmentId` | `string` | Yes | Required. Identifier of the attachment. |
| `params.submissionId` | `string` | Yes | Required. Identifier of the student's submission. |
| `params.itemId` | `string` | No | Identifier of the `Announcement`, `CourseWork`, or `CourseWorkMaterial` under which the attachment is attached. This field is required, but is not marked as such while we are migrating from post_id. |
| `params.updateMask` | `string` | No | Required. Mask that identifies which fields on the attachment to update. The update fails if invalid fields are specified. If a field supports empty values, it can be cleared by specifying it in the update mask and not in the `AddOnAttachmentStudentSubmission` object. The following fields may be specified by teachers: * `points_earned` |
| `params.resource` | `object` | Yes | The request body. |

#### `courses.posts.addOnAttachments.studentSubmissions.get()`

Returns a student submission for an add-on attachment. This method returns the following error codes:

* `PERMISSION_DENIED` for access errors.

* `INVALID_ARGUMENT` if the request is malformed.

* `NOT_FOUND` if one of the identified resources does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.courseId` | `string` | Yes | Required. Identifier of the course. |
| `params.postId` | `string` | Yes | Optional. Deprecated, use `item_id` instead. |
| `params.attachmentId` | `string` | Yes | Required. Identifier of the attachment. |
| `params.submissionId` | `string` | Yes | Required. Identifier of the student’s submission. |
| `params.itemId` | `string` | No | Identifier of the `Announcement`, `CourseWork`, or `CourseWorkMaterial` under which the attachment is attached. This field is required, but is not marked as such while we are migrating from post_id. |

### `courses.teachers`

#### `courses.teachers.create()`

Creates a teacher of a course. Domain administrators are permitted to [directly add](https://developers.google.com/workspace/classroom/guides/manage-users) users within their domain as teachers to courses within their domain. Non-admin users should send an Invitation instead. This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting user is not permitted to create teachers in this course or for access errors.

* `NOT_FOUND` if the requested course ID does not exist.

* `FAILED_PRECONDITION` if the requested user's account is disabled, for the following request errors:

* CourseMemberLimitReached

* CourseNotModifiable

* CourseTeacherLimitReached

* UserGroupsMembershipLimitReached

* InactiveCourseOwner

* `ALREADY_EXISTS` if the user is already a teacher or student in the course.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.courseId` | `string` | Yes | Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias. |
| `params.resource` | `object` | Yes | The request body. |

#### `courses.teachers.get()`

Returns a teacher of a course. This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting user is not permitted to view teachers of this course or for access errors.

* `NOT_FOUND` if no teacher of this course has the requested ID or if the course does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.courseId` | `string` | Yes | Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias. |
| `params.userId` | `string` | Yes | Identifier of the teacher to return. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user |

#### `courses.teachers.delete()`

Removes the specified teacher from the specified course. This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting user is not permitted to delete teachers of this course or for access errors.

* `NOT_FOUND` if no teacher of this course has the requested ID or if the course does not exist.

* `FAILED_PRECONDITION` if the requested ID belongs to the primary teacher of this course.

* `FAILED_PRECONDITION` if the requested ID belongs to the owner of the course Drive folder.

* `FAILED_PRECONDITION` if the course no longer has an active owner.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.courseId` | `string` | Yes | Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias. |
| `params.userId` | `string` | Yes | Identifier of the teacher to delete. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user |

#### `courses.teachers.list()`

Returns a list of teachers of this course that the requester is permitted to view. This method returns the following error codes:

* `NOT_FOUND` if the course does not exist.

* `PERMISSION_DENIED` for access errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.courseId` | `string` | Yes | Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias. |
| `params.pageSize` | `integer` | No | Maximum number of items to return. The default is 30 if unspecified or `0`. The server may return fewer than the specified number of results. |
| `params.pageToken` | `string` | No | nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token. |

### `courses.students`

#### `courses.students.create()`

Adds a user as a student of a course. Domain administrators are permitted to [directly add](https://developers.google.com/workspace/classroom/guides/manage-users) users within their domain as students to courses within their domain. Students are permitted to add themselves to a course using an enrollment code. This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting user is not permitted to create students in this course or for access errors.

* `NOT_FOUND` if the requested course ID does not exist.

* `FAILED_PRECONDITION` if the requested user's account is disabled, for the following request errors:

* CourseMemberLimitReached

* CourseNotModifiable

* UserGroupsMembershipLimitReached

* InactiveCourseOwner

* `ALREADY_EXISTS` if the user is already a student or teacher in the course.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.courseId` | `string` | Yes | Identifier of the course to create the student in. This identifier can be either the Classroom-assigned identifier or an alias. |
| `params.enrollmentCode` | `string` | No | Enrollment code of the course to create the student in. This code is required if userId corresponds to the requesting user; it may be omitted if the requesting user has administrative permissions to create students for any user. |
| `params.resource` | `object` | Yes | The request body. |

#### `courses.students.get()`

Returns a student of a course. This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting user is not permitted to view students of this course or for access errors.

* `NOT_FOUND` if no student of this course has the requested ID or if the course does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.courseId` | `string` | Yes | Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias. |
| `params.userId` | `string` | Yes | Identifier of the student to return. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user |

#### `courses.students.delete()`

Deletes a student of a course. This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting user is not permitted to delete students of this course or for access errors.

* `NOT_FOUND` if no student of this course has the requested ID or if the course does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.courseId` | `string` | Yes | Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias. |
| `params.userId` | `string` | Yes | Identifier of the student to delete. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user |

#### `courses.students.list()`

Returns a list of students of this course that the requester is permitted to view. This method returns the following error codes:

* `NOT_FOUND` if the course does not exist.

* `PERMISSION_DENIED` for access errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.courseId` | `string` | Yes | Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias. |
| `params.pageSize` | `integer` | No | Maximum number of items to return. The default is 30 if unspecified or `0`. The server may return fewer than the specified number of results. |
| `params.pageToken` | `string` | No | nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token. |

### `userProfiles`

#### `userProfiles.get()`

Returns a user profile. This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting user is not permitted to access this user profile, if no profile exists with the requested ID, or for access errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userId` | `string` | Yes | Identifier of the profile to return. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user |

### `userProfiles.guardianInvitations`

#### `userProfiles.guardianInvitations.list()`

Returns a list of guardian invitations that the requesting user is permitted to view, filtered by the parameters provided. This method returns the following error codes:

* `PERMISSION_DENIED` if a `student_id` is specified, and the requesting user is not permitted to view guardian invitations for that student, if `"-"` is specified as the `student_id` and the user is not a domain administrator, if guardians are not enabled for the domain in question, or for other access errors.

* `INVALID_ARGUMENT` if a `student_id` is specified, but its format cannot be recognized (it is not an email address, nor a `student_id` from the API, nor the literal string `me`). May also be returned if an invalid `page_token` or `state` is provided.

* `NOT_FOUND` if a `student_id` is specified, and its format can be recognized, but Classroom has no record of that student.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.studentId` | `string` | Yes | The ID of the student whose guardian invitations are to be returned. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user * the string literal `"-"`, indicating that results should be returned for all students that the requesting user is permitted to view guardian invitations. |
| `params.invitedEmailAddress` | `string` | No | If specified, only results with the specified `invited_email_address` are returned. |
| `params.states` | `string` | No | If specified, only results with the specified `state` values are returned. Otherwise, results with a `state` of `PENDING` are returned. |
| `params.pageToken` | `string` | No | nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token. |
| `params.pageSize` | `integer` | No | Maximum number of items to return. Zero or unspecified indicates that the server may assign a maximum. The server may return fewer than the specified number of results. |

#### `userProfiles.guardianInvitations.get()`

Returns a specific guardian invitation. This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting user is not permitted to view guardian invitations for the student identified by the `student_id`, if guardians are not enabled for the domain in question, or for other access errors.

* `INVALID_ARGUMENT` if a `student_id` is specified, but its format cannot be recognized (it is not an email address, nor a `student_id` from the API, nor the literal string `me`).

* `NOT_FOUND` if Classroom cannot find any record of the given student or `invitation_id`. May also be returned if the student exists, but the requesting user does not have access to see that student.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.studentId` | `string` | Yes | The ID of the student whose guardian invitation is being requested. |
| `params.invitationId` | `string` | Yes | The `id` field of the `GuardianInvitation` being requested. |

#### `userProfiles.guardianInvitations.create()`

Creates a guardian invitation, and sends an email to the guardian asking them to confirm that they are the student's guardian. Once the guardian accepts the invitation, their `state` will change to `COMPLETED` and they will start receiving guardian notifications. A `Guardian` resource will also be created to represent the active guardian. The request object must have the `student_id` and `invited_email_address` fields set. Failing to set these fields, or setting any other fields in the request, will result in an error. This method returns the following error codes:

* `PERMISSION_DENIED` if the current user does not have permission to manage guardians, if the guardian in question has already rejected too many requests for that student, if guardians are not enabled for the domain in question, or for other access errors.

* `RESOURCE_EXHAUSTED` if the student or guardian has exceeded the guardian link limit.

* `INVALID_ARGUMENT` if the guardian email address is not valid (for example, if it is too long), or if the format of the student ID provided cannot be recognized (it is not an email address, nor a `user_id` from this API). This error will also be returned if read-only fields are set, or if the `state` field is set to to a value other than `PENDING`.

* `NOT_FOUND` if the student ID provided is a valid student ID, but Classroom has no record of that student.

* `ALREADY_EXISTS` if there is already a pending guardian invitation for the student and `invited_email_address` provided, or if the provided `invited_email_address` matches the Google account of an existing `Guardian` for this user.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.studentId` | `string` | Yes | ID of the student (in standard format) |
| `params.resource` | `object` | Yes | The request body. |

#### `userProfiles.guardianInvitations.patch()`

Modifies a guardian invitation. Currently, the only valid modification is to change the `state` from `PENDING` to `COMPLETE`. This has the effect of withdrawing the invitation. This method returns the following error codes:

* `PERMISSION_DENIED` if the current user does not have permission to manage guardians, if guardians are not enabled for the domain in question or for other access errors.

* `FAILED_PRECONDITION` if the guardian link is not in the `PENDING` state.

* `INVALID_ARGUMENT` if the format of the student ID provided cannot be recognized (it is not an email address, nor a `user_id` from this API), or if the passed `GuardianInvitation` has a `state` other than `COMPLETE`, or if it modifies fields other than `state`.

* `NOT_FOUND` if the student ID provided is a valid student ID, but Classroom has no record of that student, or if the `id` field does not refer to a guardian invitation known to Classroom.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.studentId` | `string` | Yes | The ID of the student whose guardian invitation is to be modified. |
| `params.invitationId` | `string` | Yes | The `id` field of the `GuardianInvitation` to be modified. |
| `params.updateMask` | `string` | No | Mask that identifies which fields on the course to update. This field is required to do an update. The update fails if invalid fields are specified. The following fields are valid: * `state` When set in a query parameter, this field should be specified as `updateMask=,,...` |
| `params.resource` | `object` | Yes | The request body. |

### `userProfiles.guardians`

#### `userProfiles.guardians.list()`

Returns a list of guardians that the requesting user is permitted to view, restricted to those that match the request. To list guardians for any student that the requesting user may view guardians for, use the literal character `-` for the student ID. This method returns the following error codes:

* `PERMISSION_DENIED` if a `student_id` is specified, and the requesting user is not permitted to view guardian information for that student, if `"-"` is specified as the `student_id` and the user is not a domain administrator, if guardians are not enabled for the domain in question, if the `invited_email_address` filter is set by a user who is not a domain administrator, or for other access errors.

* `INVALID_ARGUMENT` if a `student_id` is specified, but its format cannot be recognized (it is not an email address, nor a `student_id` from the API, nor the literal string `me`). May also be returned if an invalid `page_token` is provided.

* `NOT_FOUND` if a `student_id` is specified, and its format can be recognized, but Classroom has no record of that student.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.studentId` | `string` | Yes | Filter results by the student who the guardian is linked to. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user * the string literal `"-"`, indicating that results should be returned for all students that the requesting user has access to view. |
| `params.invitedEmailAddress` | `string` | No | Filter results by the email address that the original invitation was sent to, resulting in this guardian link. This filter can only be used by domain administrators. |
| `params.pageToken` | `string` | No | nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token. |
| `params.pageSize` | `integer` | No | Maximum number of items to return. Zero or unspecified indicates that the server may assign a maximum. The server may return fewer than the specified number of results. |

#### `userProfiles.guardians.get()`

Returns a specific guardian. This method returns the following error codes:

* `PERMISSION_DENIED` if no user that matches the provided `student_id` is visible to the requesting user, if the requesting user is not permitted to view guardian information for the student identified by the `student_id`, if guardians are not enabled for the domain in question, or for other access errors.

* `INVALID_ARGUMENT` if a `student_id` is specified, but its format cannot be recognized (it is not an email address, nor a `student_id` from the API, nor the literal string `me`).

* `NOT_FOUND` if the requesting user is permitted to view guardians for the requested `student_id`, but no `Guardian` record exists for that student that matches the provided `guardian_id`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.studentId` | `string` | Yes | The student whose guardian is being requested. One of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user |
| `params.guardianId` | `string` | Yes | The `id` field from a `Guardian`. |

#### `userProfiles.guardians.delete()`

Deletes a guardian. The guardian will no longer receive guardian notifications and the guardian will no longer be accessible via the API. This method returns the following error codes:

* `PERMISSION_DENIED` if no user that matches the provided `student_id` is visible to the requesting user, if the requesting user is not permitted to manage guardians for the student identified by the `student_id`, if guardians are not enabled for the domain in question, or for other access errors.

* `INVALID_ARGUMENT` if a `student_id` is specified, but its format cannot be recognized (it is not an email address, nor a `student_id` from the API).

* `NOT_FOUND` if the requesting user is permitted to modify guardians for the requested `student_id`, but no `Guardian` record exists for that student with the provided `guardian_id`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.studentId` | `string` | Yes | The student whose guardian is to be deleted. One of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user |
| `params.guardianId` | `string` | Yes | The `id` field from a `Guardian`. |

### `invitations`

#### `invitations.create()`

Creates an invitation. Only one invitation for a user and course may exist at a time. Delete and re-create an invitation to make changes. This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting user is not permitted to create invitations for this course or for access errors.

* `NOT_FOUND` if the course or the user does not exist.

* `FAILED_PRECONDITION`:

* if the requested user's account is disabled.

* if the user already has this role or a role with greater permissions.

* for the following request errors:

* IneligibleOwner

* `ALREADY_EXISTS` if an invitation for the specified user and course already exists.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

#### `invitations.get()`

Returns an invitation. This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting user is not permitted to view the requested invitation or for access errors.

* `NOT_FOUND` if no invitation exists with the requested ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.id` | `string` | Yes | Identifier of the invitation to return. |

#### `invitations.delete()`

Deletes an invitation. This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting user is not permitted to delete the requested invitation or for access errors.

* `NOT_FOUND` if no invitation exists with the requested ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.id` | `string` | Yes | Identifier of the invitation to delete. |

#### `invitations.list()`

Returns a list of invitations that the requesting user is permitted to view, restricted to those that match the list request. *Note:* At least one of `user_id` or `course_id` must be supplied. Both fields can be supplied. This method returns the following error codes:

* `PERMISSION_DENIED` for access errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userId` | `string` | No | Restricts returned invitations to those for a specific user. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user |
| `params.courseId` | `string` | No | Restricts returned invitations to those for a course with the specified identifier. |
| `params.pageSize` | `integer` | No | Maximum number of items to return. The default is 500 if unspecified or `0`. The server may return fewer than the specified number of results. |
| `params.pageToken` | `string` | No | nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token. |

#### `invitations.accept()`

Accepts an invitation, removing it and adding the invited user to the teachers or students (as appropriate) of the specified course. Only the invited user may accept an invitation. This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting user is not permitted to accept the requested invitation or for access errors.

* `FAILED_PRECONDITION` for the following request errors:

* CourseMemberLimitReached

* CourseNotModifiable

* CourseTeacherLimitReached

* UserGroupsMembershipLimitReached

* `NOT_FOUND` if no invitation exists with the requested ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.id` | `string` | Yes | Identifier of the invitation to accept. |

### `registrations`

#### `registrations.create()`

Creates a `Registration`, causing Classroom to start sending notifications from the provided `feed` to the destination provided in `cloudPubSubTopic`. Returns the created `Registration`. Currently, this will be the same as the argument, but with server-assigned fields such as `expiry_time` and `id` filled in. Note that any value specified for the `expiry_time` or `id` fields will be ignored. While Classroom may validate the `cloudPubSubTopic` and return errors on a best effort basis, it is the caller's responsibility to ensure that it exists and that Classroom has permission to publish to it. This method may return the following error codes:

* `PERMISSION_DENIED` if:

* the authenticated user does not have permission to receive notifications from the requested field; or

* the current user has not granted access to the current Cloud project with the appropriate scope for the requested feed. Note that domain-wide delegation of authority is not currently supported for this purpose. If the request has the appropriate scope, but no grant exists, a Request Errors is returned.

* another access error is encountered.

* `INVALID_ARGUMENT` if:

* no `cloudPubsubTopic` is specified, or the specified `cloudPubsubTopic` is not valid; or

* no `feed` is specified, or the specified `feed` is not valid.

* `NOT_FOUND` if:

* the specified `feed` cannot be located, or the requesting user does not have permission to determine whether or not it exists; or

* the specified `cloudPubsubTopic` cannot be located, or Classroom has not been granted permission to publish to it.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

#### `registrations.delete()`

Deletes a `Registration`, causing Classroom to stop sending notifications for that `Registration`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.registrationId` | `string` | Yes | The `registration_id` of the `Registration` to be deleted. |