
/**
 * Google Apps Script client library for the Google Classroom API
 * Documentation URL: https://developers.google.com/workspace/classroom/
 * @class
 */
class Classroom {
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
    this._rootUrl = 'https://classroom.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.courses = {};

    /**
     * Creates a course. The user specified in `ownerId` is the owner of the created course and added as a teacher. A non-admin requesting user can only create a course with themselves as the owner. Domain admins can create courses owned by any user within their domain. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to create courses or for access errors. * `NOT_FOUND` if the primary teacher is not a valid user. * `FAILED_PRECONDITION` if the course owner's account is disabled or for the following request errors: * UserCannotOwnCourse * UserGroupsMembershipLimitReached * `ALREADY_EXISTS` if an alias was specified in the `id` and already exists.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.courses.create = (params) => this._makeRequest('v1/courses', 'POST', params);

    /**
     * Returns a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or for access errors. * `NOT_FOUND` if no course exists with the requested ID.
     * @param {string} params.id - (Required) Identifier of the course to return. This identifier can be either the Classroom-assigned identifier or an alias.
     * @return {object} The API response object.
     */
    this.courses.get = (params) => this._makeRequest('v1/courses/{id}', 'GET', params);

    /**
     * Updates a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to modify the requested course or for access errors. * `NOT_FOUND` if no course exists with the requested ID. * `FAILED_PRECONDITION` for the following request errors: * CourseNotModifiable
     * @param {string} params.id - (Required) Identifier of the course to update. This identifier can be either the Classroom-assigned identifier or an alias.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.courses.update = (params) => this._makeRequest('v1/courses/{id}', 'PUT', params);

    /**
     * Updates one or more fields in a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to modify the requested course or for access errors. * `NOT_FOUND` if no course exists with the requested ID. * `INVALID_ARGUMENT` if invalid fields are specified in the update mask or if no update mask is supplied. * `FAILED_PRECONDITION` for the following request errors: * CourseNotModifiable * InactiveCourseOwner * IneligibleOwner
     * @param {string} params.id - (Required) Identifier of the course to update. This identifier can be either the Classroom-assigned identifier or an alias.
     * @param {string} params.updateMask - Mask that identifies which fields on the course to update. This field is required to do an update. The update will fail if invalid fields are specified. The following fields are valid: * `name` * `section` * `descriptionHeading` * `description` * `room` * `courseState` * `ownerId` Note: patches to ownerId are treated as being effective immediately, but in practice it may take some time for the ownership transfer of all affected resources to complete. When set in a query parameter, this field should be specified as `updateMask=,,...`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.courses.patch = (params) => this._makeRequest('v1/courses/{id}', 'PATCH', params);

    /**
     * Deletes a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to delete the requested course or for access errors. * `NOT_FOUND` if no course exists with the requested ID.
     * @param {string} params.id - (Required) Identifier of the course to delete. This identifier can be either the Classroom-assigned identifier or an alias.
     * @return {object} The API response object.
     */
    this.courses.delete = (params) => this._makeRequest('v1/courses/{id}', 'DELETE', params);

    /**
     * Returns a list of courses that the requesting user is permitted to view, restricted to those that match the request. Returned courses are ordered by creation time, with the most recently created coming first. This method returns the following error codes: * `PERMISSION_DENIED` for access errors. * `INVALID_ARGUMENT` if the query argument is malformed. * `NOT_FOUND` if any users specified in the query arguments do not exist.
     * @param {string} params.courseStates - Restricts returned courses to those in one of the specified states The default value is ACTIVE, ARCHIVED, PROVISIONED, DECLINED.
     * @param {integer} params.pageSize - Maximum number of items to return. Zero or unspecified indicates that the server may assign a maximum. The server may return fewer than the specified number of results.
     * @param {string} params.pageToken - nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token.
     * @param {string} params.studentId - Restricts returned courses to those having a student with the specified identifier. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user
     * @param {string} params.teacherId - Restricts returned courses to those having a teacher with the specified identifier. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user
     * @return {object} The API response object.
     */
    this.courses.list = (params) => this._makeRequest('v1/courses', 'GET', params);

    /**
     * Returns the grading period settings in a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user isn't permitted to access the grading period settings in the requested course or for access errors. * `NOT_FOUND` if the requested course does not exist.
     * @param {string} params.courseId - (Required) Required. The identifier of the course.
     * @return {object} The API response object.
     */
    this.courses.getGradingPeriodSettings = (params) => this._makeRequest('v1/courses/{courseId}/gradingPeriodSettings', 'GET', params);

    /**
     * Updates grading period settings of a course. Individual grading periods can be added, removed, or modified using this method. The requesting user and course owner must be eligible to modify Grading Periods. For details, see [licensing requirements](https://developers.google.com/workspace/classroom/grading-periods/manage-grading-periods#licensing_requirements). This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to modify the grading period settings in a course or for access errors: * UserIneligibleToUpdateGradingPeriodSettings * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course does not exist.
     * @param {string} params.courseId - (Required) Required. The identifier of the course.
     * @param {string} params.updateMask - Mask that identifies which fields in the GradingPeriodSettings to update. The GradingPeriodSettings `grading_periods` list will be fully replaced by the grading periods specified in the update request. For example: * Grading periods included in the list without an ID are considered additions, and a new ID will be assigned when the request is made. * Grading periods that currently exist, but are missing from the request will be considered deletions. * Grading periods with an existing ID and modified data are considered edits. Unmodified data will be left as is. * Grading periods included with an unknown ID will result in an error. The following fields may be specified: * `grading_periods` * `apply_to_existing_coursework`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.courses.updateGradingPeriodSettings = (params) => this._makeRequest('v1/courses/{courseId}/gradingPeriodSettings', 'PATCH', params);

    this.courses.aliases = {};

    /**
     * Creates an alias for a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to create the alias or for access errors. * `NOT_FOUND` if the course does not exist. * `ALREADY_EXISTS` if the alias already exists. * `FAILED_PRECONDITION` if the alias requested does not make sense for the requesting user or course (for example, if a user not in a domain attempts to access a domain-scoped alias).
     * @param {string} params.courseId - (Required) Identifier of the course to alias. This identifier can be either the Classroom-assigned identifier or an alias.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.courses.aliases.create = (params) => this._makeRequest('v1/courses/{courseId}/aliases', 'POST', params);

    /**
     * Deletes an alias of a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to remove the alias or for access errors. * `NOT_FOUND` if the alias does not exist. * `FAILED_PRECONDITION` if the alias requested does not make sense for the requesting user or course (for example, if a user not in a domain attempts to delete a domain-scoped alias).
     * @param {string} params.alias - (Required) Alias to delete. This may not be the Classroom-assigned identifier.
     * @param {string} params.courseId - (Required) Identifier of the course whose alias should be deleted. This identifier can be either the Classroom-assigned identifier or an alias.
     * @return {object} The API response object.
     */
    this.courses.aliases.delete = (params) => this._makeRequest('v1/courses/{courseId}/aliases/{alias}', 'DELETE', params);

    /**
     * Returns a list of aliases for a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the course or for access errors. * `NOT_FOUND` if the course does not exist.
     * @param {string} params.courseId - (Required) The identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     * @param {integer} params.pageSize - Maximum number of items to return. Zero or unspecified indicates that the server may assign a maximum. The server may return fewer than the specified number of results.
     * @param {string} params.pageToken - nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token.
     * @return {object} The API response object.
     */
    this.courses.aliases.list = (params) => this._makeRequest('v1/courses/{courseId}/aliases', 'GET', params);

    this.courses.courseWork = {};

    /**
     * Creates course work. The resulting course work (and corresponding student submissions) are associated with the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to make the request. Classroom API requests to modify course work and student submissions must be made with an OAuth client ID from the associated Developer Console project. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course, create course work in the requested course, share a Drive attachment, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course does not exist. * `FAILED_PRECONDITION` for the following request error: * AttachmentNotVisible
     * @param {string} params.courseId - (Required) Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.courses.courseWork.create = (params) => this._makeRequest('v1/courses/{courseId}/courseWork', 'POST', params);

    /**
     * Updates one or more fields of a course work. See google.classroom.v1.CourseWork for details of which fields may be updated and who may change them. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting developer project did not create the corresponding course work, if the user is not permitted to make the requested modification to the student submission, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `FAILED_PRECONDITION` if the requested course work has already been deleted. * `NOT_FOUND` if the requested course or course work does not exist.
     * @param {string} params.courseId - (Required) Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     * @param {string} params.id - (Required) Identifier of the course work.
     * @param {string} params.updateMask - Mask that identifies which fields on the course work to update. This field is required to do an update. The update fails if invalid fields are specified. If a field supports empty values, it can be cleared by specifying it in the update mask and not in the `CourseWork` object. If a field that does not support empty values is included in the update mask and not set in the `CourseWork` object, an `INVALID_ARGUMENT` error is returned. The following fields may be specified by teachers: * `title` * `description` * `state` * `due_date` * `due_time` * `max_points` * `scheduled_time` * `submission_modification_mode` * `topic_id` * `grading_period_id`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.courses.courseWork.patch = (params) => this._makeRequest('v1/courses/{courseId}/courseWork/{id}', 'PATCH', params);

    /**
     * Deletes a course work. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting developer project did not create the corresponding course work, if the requesting user is not permitted to delete the requested course or for access errors. * `FAILED_PRECONDITION` if the requested course work has already been deleted. * `NOT_FOUND` if no course exists with the requested ID.
     * @param {string} params.courseId - (Required) Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     * @param {string} params.id - (Required) Identifier of the course work to delete. This identifier is a Classroom-assigned identifier.
     * @return {object} The API response object.
     */
    this.courses.courseWork.delete = (params) => this._makeRequest('v1/courses/{courseId}/courseWork/{id}', 'DELETE', params);

    /**
     * Returns course work. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course or course work does not exist.
     * @param {string} params.courseId - (Required) Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     * @param {string} params.id - (Required) Identifier of the course work.
     * @return {object} The API response object.
     */
    this.courses.courseWork.get = (params) => this._makeRequest('v1/courses/{courseId}/courseWork/{id}', 'GET', params);

    /**
     * Returns a list of course work that the requester is permitted to view. Course students may only view `PUBLISHED` course work. Course teachers and domain administrators may view all course work. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course does not exist.
     * @param {string} params.courseId - (Required) Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     * @param {string} params.courseWorkStates - Restriction on the work status to return. Only courseWork that matches is returned. If unspecified, items with a work status of `PUBLISHED` is returned.
     * @param {string} params.orderBy - Optional sort ordering for results. A comma-separated list of fields with an optional sort direction keyword. Supported fields are `updateTime` and `dueDate`. Supported direction keywords are `asc` and `desc`. If not specified, `updateTime desc` is the default behavior. Examples: `dueDate asc,updateTime desc`, `updateTime,dueDate desc`
     * @param {integer} params.pageSize - Maximum number of items to return. Zero or unspecified indicates that the server may assign a maximum. The server may return fewer than the specified number of results.
     * @param {string} params.pageToken - nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token.
     * @return {object} The API response object.
     */
    this.courses.courseWork.list = (params) => this._makeRequest('v1/courses/{courseId}/courseWork', 'GET', params);

    /**
     * Modifies assignee mode and options of a coursework. Only a teacher of the course that contains the coursework may call this method. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course or course work does not exist.
     * @param {string} params.courseId - (Required) Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     * @param {string} params.id - (Required) Identifier of the coursework.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.courses.courseWork.modifyAssignees = (params) => this._makeRequest('v1/courses/{courseId}/courseWork/{id}:modifyAssignees', 'POST', params);

    /**
     * Gets metadata for Classroom add-ons in the context of a specific post. To maintain the integrity of its own data and permissions model, an add-on should call this to validate query parameters and the requesting user's role whenever the add-on is opened in an [iframe](https://developers.google.com/workspace/classroom/add-ons/get-started/iframes/iframes-overview). This method returns the following error codes: * `PERMISSION_DENIED` for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if one of the identified resources does not exist.
     * @param {string} params.addOnToken - Optional. Token that authorizes the request. The token is passed as a query parameter when the user is redirected from Classroom to the add-on's URL. The authorization token is required when neither of the following is true: * The add-on has attachments on the post. * The developer project issuing the request is the same project that created the post.
     * @param {string} params.attachmentId - Optional. The identifier of the attachment. This field is required for all requests except when the user is in the [Attachment Discovery iframe](https://developers.google.com/workspace/classroom/add-ons/get-started/iframes/attachment-discovery-iframe).
     * @param {string} params.courseId - (Required) Required. Identifier of the course.
     * @param {string} params.itemId - (Required) Identifier of the `Announcement`, `CourseWork`, or `CourseWorkMaterial` under which the attachment is attached. This field is required, but is not marked as such while we are migrating from post_id.
     * @param {string} params.postId - Optional. Deprecated, use `item_id` instead.
     * @return {object} The API response object.
     */
    this.courses.courseWork.getAddOnContext = (params) => this._makeRequest('v1/courses/{courseId}/courseWork/{itemId}/addOnContext', 'GET', params);

    /**
     * Updates a rubric. See google.classroom.v1.Rubric for details of which fields can be updated. Rubric update capabilities are [limited](/classroom/rubrics/limitations) once grading has started. The requesting user and course owner must have rubrics creation capabilities. For details, see [licensing requirements](https://developers.google.com/workspace/classroom/rubrics/limitations#license-requirements). This request must be made by the Google Cloud console of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the parent course work item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting developer project didn't create the corresponding course work, if the user isn't permitted to make the requested modification to the rubric, or for access errors. This error code is also returned if grading has already started on the rubric. * `INVALID_ARGUMENT` if the request is malformed and for the following request error: * `RubricCriteriaInvalidFormat` * `NOT_FOUND` if the requested course, course work, or rubric doesn't exist or if the user doesn't have access to the corresponding course work. * `INTERNAL` if grading has already started on the rubric.
     * @param {string} params.courseId - (Required) Required. Identifier of the course.
     * @param {string} params.courseWorkId - (Required) Required. Identifier of the course work.
     * @param {string} params.id - Optional. Identifier of the rubric.
     * @param {string} params.updateMask - Optional. Mask that identifies which fields on the rubric to update. This field is required to do an update. The update fails if invalid fields are specified. There are multiple options to define the criteria of a rubric: the `source_spreadsheet_id` and the `criteria` list. Only one of these can be used at a time to define a rubric. The rubric `criteria` list is fully replaced by the rubric criteria specified in the update request. For example, if a criterion or level is missing from the request, it is deleted. New criteria and levels are added and an ID is assigned. Existing criteria and levels retain the previously assigned ID if the ID is specified in the request. The following fields can be specified by teachers: * `criteria` * `source_spreadsheet_id`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.courses.courseWork.updateRubric = (params) => this._makeRequest('v1/courses/{courseId}/courseWork/{courseWorkId}/rubric', 'PATCH', params);

    this.courses.courseWork.studentSubmissions = {};

    /**
     * Returns a student submission. * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course, course work, or student submission or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course, course work, or student submission does not exist.
     * @param {string} params.courseId - (Required) Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     * @param {string} params.courseWorkId - (Required) Identifier of the course work.
     * @param {string} params.id - (Required) Identifier of the student submission.
     * @return {object} The API response object.
     */
    this.courses.courseWork.studentSubmissions.get = (params) => this._makeRequest('v1/courses/{courseId}/courseWork/{courseWorkId}/studentSubmissions/{id}', 'GET', params);

    /**
     * Updates one or more fields of a student submission. See google.classroom.v1.StudentSubmission for details of which fields may be updated and who may change them. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting developer project did not create the corresponding course work, if the user is not permitted to make the requested modification to the student submission, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course, course work, or student submission does not exist.
     * @param {string} params.courseId - (Required) Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     * @param {string} params.courseWorkId - (Required) Identifier of the course work.
     * @param {string} params.id - (Required) Identifier of the student submission.
     * @param {string} params.updateMask - Mask that identifies which fields on the student submission to update. This field is required to do an update. The update fails if invalid fields are specified. The following fields may be specified by teachers: * `draft_grade` * `assigned_grade`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.courses.courseWork.studentSubmissions.patch = (params) => this._makeRequest('v1/courses/{courseId}/courseWork/{courseWorkId}/studentSubmissions/{id}', 'PATCH', params);

    /**
     * Returns a list of student submissions that the requester is permitted to view, factoring in the OAuth scopes of the request. `-` may be specified as the `course_work_id` to include student submissions for multiple course work items. Course students may only view their own work. Course teachers and domain administrators may view all student submissions. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course does not exist.
     * @param {string} params.courseId - (Required) Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     * @param {string} params.courseWorkId - (Required) Identifier of the student work to request. This may be set to the string literal `"-"` to request student work for all course work in the specified course.
     * @param {string} params.late - Requested lateness value. If specified, returned student submissions are restricted by the requested value. If unspecified, submissions are returned regardless of `late` value.
     * @param {integer} params.pageSize - Maximum number of items to return. Zero or unspecified indicates that the server may assign a maximum. The server may return fewer than the specified number of results.
     * @param {string} params.pageToken - nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token.
     * @param {string} params.states - Requested submission states. If specified, returned student submissions match one of the specified submission states.
     * @param {string} params.userId - Optional argument to restrict returned student work to those owned by the student with the specified identifier. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user
     * @return {object} The API response object.
     */
    this.courses.courseWork.studentSubmissions.list = (params) => this._makeRequest('v1/courses/{courseId}/courseWork/{courseWorkId}/studentSubmissions', 'GET', params);

    /**
     * Turns in a student submission. Turning in a student submission transfers ownership of attached Drive files to the teacher and may also update the submission state. This may only be called by the student that owns the specified student submission. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work, turn in the requested student submission, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course, course work, or student submission does not exist.
     * @param {string} params.courseId - (Required) Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     * @param {string} params.courseWorkId - (Required) Identifier of the course work.
     * @param {string} params.id - (Required) Identifier of the student submission.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.courses.courseWork.studentSubmissions.turnIn = (params) => this._makeRequest('v1/courses/{courseId}/courseWork/{courseWorkId}/studentSubmissions/{id}:turnIn', 'POST', params);

    /**
     * Reclaims a student submission on behalf of the student that owns it. Reclaiming a student submission transfers ownership of attached Drive files to the student and updates the submission state. Only the student that owns the requested student submission may call this method, and only for a student submission that has been turned in. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work, unsubmit the requested student submission, or for access errors. * `FAILED_PRECONDITION` if the student submission has not been turned in. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course, course work, or student submission does not exist.
     * @param {string} params.courseId - (Required) Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     * @param {string} params.courseWorkId - (Required) Identifier of the course work.
     * @param {string} params.id - (Required) Identifier of the student submission.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.courses.courseWork.studentSubmissions.reclaim = (params) => this._makeRequest('v1/courses/{courseId}/courseWork/{courseWorkId}/studentSubmissions/{id}:reclaim', 'POST', params);

    /**
     * Returns a student submission. Returning a student submission transfers ownership of attached Drive files to the student and may also update the submission state. Unlike the Classroom application, returning a student submission does not set assignedGrade to the draftGrade value. Only a teacher of the course that contains the requested student submission may call this method. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work, return the requested student submission, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course, course work, or student submission does not exist.
     * @param {string} params.courseId - (Required) Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     * @param {string} params.courseWorkId - (Required) Identifier of the course work.
     * @param {string} params.id - (Required) Identifier of the student submission.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.courses.courseWork.studentSubmissions.return = (params) => this._makeRequest('v1/courses/{courseId}/courseWork/{courseWorkId}/studentSubmissions/{id}:return', 'POST', params);

    /**
     * Modifies attachments of student submission. Attachments may only be added to student submissions belonging to course work objects with a `workType` of `ASSIGNMENT`. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work, if the user is not permitted to modify attachments on the requested student submission, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course, course work, or student submission does not exist.
     * @param {string} params.courseId - (Required) Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     * @param {string} params.courseWorkId - (Required) Identifier of the course work.
     * @param {string} params.id - (Required) Identifier of the student submission.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.courses.courseWork.studentSubmissions.modifyAttachments = (params) => this._makeRequest('v1/courses/{courseId}/courseWork/{courseWorkId}/studentSubmissions/{id}:modifyAttachments', 'POST', params);

    this.courses.courseWork.addOnAttachments = {};

    /**
     * Returns an add-on attachment. Requires the add-on requesting the attachment to be the original creator of the attachment. This method returns the following error codes: * `PERMISSION_DENIED` for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if one of the identified resources does not exist.
     * @param {string} params.attachmentId - (Required) Required. Identifier of the attachment.
     * @param {string} params.courseId - (Required) Required. Identifier of the course.
     * @param {string} params.itemId - (Required) Identifier of the `Announcement`, `CourseWork`, or `CourseWorkMaterial` under which the attachment is attached. This field is required, but is not marked as such while we are migrating from post_id.
     * @param {string} params.postId - Optional. Deprecated, use `item_id` instead.
     * @return {object} The API response object.
     */
    this.courses.courseWork.addOnAttachments.get = (params) => this._makeRequest('v1/courses/{courseId}/courseWork/{itemId}/addOnAttachments/{attachmentId}', 'GET', params);

    /**
     * Returns all attachments created by an add-on under the post. Requires the add-on to have active attachments on the post or have permission to create new attachments on the post. This method returns the following error codes: * `PERMISSION_DENIED` for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if one of the identified resources does not exist.
     * @param {string} params.courseId - (Required) Required. Identifier of the course.
     * @param {string} params.itemId - (Required) Identifier of the `Announcement`, `CourseWork`, or `CourseWorkMaterial` whose attachments should be enumerated. This field is required, but is not marked as such while we are migrating from post_id.
     * @param {integer} params.pageSize - The maximum number of attachments to return. The service may return fewer than this value. If unspecified, at most 20 attachments will be returned. The maximum value is 20; values above 20 will be coerced to 20.
     * @param {string} params.pageToken - A page token, received from a previous `ListAddOnAttachments` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAddOnAttachments` must match the call that provided the page token.
     * @param {string} params.postId - Optional. Identifier of the post under the course whose attachments to enumerate. Deprecated, use `item_id` instead.
     * @return {object} The API response object.
     */
    this.courses.courseWork.addOnAttachments.list = (params) => this._makeRequest('v1/courses/{courseId}/courseWork/{itemId}/addOnAttachments', 'GET', params);

    /**
     * Creates an add-on attachment under a post. Requires the add-on to have permission to create new attachments on the post. This method returns the following error codes: * `PERMISSION_DENIED` for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if one of the identified resources does not exist.
     * @param {string} params.addOnToken - Optional. Token that authorizes the request. The token is passed as a query parameter when the user is redirected from Classroom to the add-on's URL. This authorization token is required for in-Classroom attachment creation but optional for partner-first attachment creation. Returns an error if not provided for partner-first attachment creation and the developer projects that created the attachment and its parent stream item do not match.
     * @param {string} params.courseId - (Required) Required. Identifier of the course.
     * @param {string} params.itemId - (Required) Identifier of the `Announcement`, `CourseWork`, or `CourseWorkMaterial` under which to create the attachment. This field is required, but is not marked as such while we are migrating from post_id.
     * @param {string} params.postId - Optional. Deprecated, use `item_id` instead.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.courses.courseWork.addOnAttachments.create = (params) => this._makeRequest('v1/courses/{courseId}/courseWork/{itemId}/addOnAttachments', 'POST', params);

    /**
     * Updates an add-on attachment. Requires the add-on to have been the original creator of the attachment. This method returns the following error codes: * `PERMISSION_DENIED` for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if one of the identified resources does not exist.
     * @param {string} params.attachmentId - (Required) Required. Identifier of the attachment.
     * @param {string} params.courseId - (Required) Required. Identifier of the course.
     * @param {string} params.itemId - (Required) Identifier of the post under which the attachment is attached.
     * @param {string} params.postId - Required. Identifier of the post under which the attachment is attached.
     * @param {string} params.updateMask - Required. Mask that identifies which fields on the attachment to update. The update fails if invalid fields are specified. If a field supports empty values, it can be cleared by specifying it in the update mask and not in the `AddOnAttachment` object. If a field that does not support empty values is included in the update mask and not set in the `AddOnAttachment` object, an `INVALID_ARGUMENT` error is returned. The following fields may be specified by teachers: * `title` * `teacher_view_uri` * `student_view_uri` * `student_work_review_uri` * `due_date` * `due_time` * `max_points`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.courses.courseWork.addOnAttachments.patch = (params) => this._makeRequest('v1/courses/{courseId}/courseWork/{itemId}/addOnAttachments/{attachmentId}', 'PATCH', params);

    /**
     * Deletes an add-on attachment. Requires the add-on to have been the original creator of the attachment. This method returns the following error codes: * `PERMISSION_DENIED` for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if one of the identified resources does not exist.
     * @param {string} params.attachmentId - (Required) Required. Identifier of the attachment.
     * @param {string} params.courseId - (Required) Required. Identifier of the course.
     * @param {string} params.itemId - (Required) Identifier of the `Announcement`, `CourseWork`, or `CourseWorkMaterial` under which the attachment is attached. This field is required, but is not marked as such while we are migrating from post_id.
     * @param {string} params.postId - Optional. Deprecated, use `item_id` instead.
     * @return {object} The API response object.
     */
    this.courses.courseWork.addOnAttachments.delete = (params) => this._makeRequest('v1/courses/{courseId}/courseWork/{itemId}/addOnAttachments/{attachmentId}', 'DELETE', params);

    this.courses.courseWork.addOnAttachments.studentSubmissions = {};

    /**
     * Updates data associated with an add-on attachment submission. Requires the add-on to have been the original creator of the attachment and the attachment to have a positive `max_points` value set. This method returns the following error codes: * `PERMISSION_DENIED` for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if one of the identified resources does not exist.
     * @param {string} params.attachmentId - (Required) Required. Identifier of the attachment.
     * @param {string} params.courseId - (Required) Required. Identifier of the course.
     * @param {string} params.itemId - (Required) Identifier of the `Announcement`, `CourseWork`, or `CourseWorkMaterial` under which the attachment is attached. This field is required, but is not marked as such while we are migrating from post_id.
     * @param {string} params.postId - Optional. Deprecated, use `item_id` instead.
     * @param {string} params.submissionId - (Required) Required. Identifier of the student's submission.
     * @param {string} params.updateMask - Required. Mask that identifies which fields on the attachment to update. The update fails if invalid fields are specified. If a field supports empty values, it can be cleared by specifying it in the update mask and not in the `AddOnAttachmentStudentSubmission` object. The following fields may be specified by teachers: * `points_earned`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.courses.courseWork.addOnAttachments.studentSubmissions.patch = (params) => this._makeRequest('v1/courses/{courseId}/courseWork/{itemId}/addOnAttachments/{attachmentId}/studentSubmissions/{submissionId}', 'PATCH', params);

    /**
     * Returns a student submission for an add-on attachment. This method returns the following error codes: * `PERMISSION_DENIED` for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if one of the identified resources does not exist.
     * @param {string} params.attachmentId - (Required) Required. Identifier of the attachment.
     * @param {string} params.courseId - (Required) Required. Identifier of the course.
     * @param {string} params.itemId - (Required) Identifier of the `Announcement`, `CourseWork`, or `CourseWorkMaterial` under which the attachment is attached. This field is required, but is not marked as such while we are migrating from post_id.
     * @param {string} params.postId - Optional. Deprecated, use `item_id` instead.
     * @param {string} params.submissionId - (Required) Required. Identifier of the student’s submission.
     * @return {object} The API response object.
     */
    this.courses.courseWork.addOnAttachments.studentSubmissions.get = (params) => this._makeRequest('v1/courses/{courseId}/courseWork/{itemId}/addOnAttachments/{attachmentId}/studentSubmissions/{submissionId}', 'GET', params);

    this.courses.courseWork.rubrics = {};

    /**
     * Updates a rubric. See google.classroom.v1.Rubric for details of which fields can be updated. Rubric update capabilities are [limited](/classroom/rubrics/limitations) once grading has started. The requesting user and course owner must have rubrics creation capabilities. For details, see [licensing requirements](https://developers.google.com/workspace/classroom/rubrics/limitations#license-requirements). This request must be made by the Google Cloud console of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the parent course work item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting developer project didn't create the corresponding course work, if the user isn't permitted to make the requested modification to the rubric, or for access errors. This error code is also returned if grading has already started on the rubric. * `INVALID_ARGUMENT` if the request is malformed and for the following request error: * `RubricCriteriaInvalidFormat` * `NOT_FOUND` if the requested course, course work, or rubric doesn't exist or if the user doesn't have access to the corresponding course work. * `INTERNAL` if grading has already started on the rubric.
     * @param {string} params.courseId - (Required) Required. Identifier of the course.
     * @param {string} params.courseWorkId - (Required) Required. Identifier of the course work.
     * @param {string} params.id - (Required) Optional. Identifier of the rubric.
     * @param {string} params.updateMask - Optional. Mask that identifies which fields on the rubric to update. This field is required to do an update. The update fails if invalid fields are specified. There are multiple options to define the criteria of a rubric: the `source_spreadsheet_id` and the `criteria` list. Only one of these can be used at a time to define a rubric. The rubric `criteria` list is fully replaced by the rubric criteria specified in the update request. For example, if a criterion or level is missing from the request, it is deleted. New criteria and levels are added and an ID is assigned. Existing criteria and levels retain the previously assigned ID if the ID is specified in the request. The following fields can be specified by teachers: * `criteria` * `source_spreadsheet_id`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.courses.courseWork.rubrics.patch = (params) => this._makeRequest('v1/courses/{courseId}/courseWork/{courseWorkId}/rubrics/{id}', 'PATCH', params);

    /**
     * Creates a rubric. The requesting user and course owner must have rubrics creation capabilities. For details, see [licensing requirements](https://developers.google.com/workspace/classroom/rubrics/limitations#license-requirements). For further details, see [Rubrics structure and known limitations](/classroom/rubrics/limitations). This request must be made by the Google Cloud console of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the parent course work item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user isn't permitted to create rubrics for course work in the requested course. * `INTERNAL` if the request has insufficient OAuth scopes. * `INVALID_ARGUMENT` if the request is malformed and for the following request error: * `RubricCriteriaInvalidFormat` * `NOT_FOUND` if the requested course or course work don't exist or the user doesn't have access to the course or course work. * `FAILED_PRECONDITION` for the following request error: * `AttachmentNotVisible`
     * @param {string} params.courseId - (Required) Required. Identifier of the course.
     * @param {string} params.courseWorkId - (Required) Required. Identifier of the course work.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.courses.courseWork.rubrics.create = (params) => this._makeRequest('v1/courses/{courseId}/courseWork/{courseWorkId}/rubrics', 'POST', params);

    /**
     * Returns a rubric. This method returns the following error codes: * `PERMISSION_DENIED` for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course, course work, or rubric doesn't exist or if the user doesn't have access to the corresponding course work.
     * @param {string} params.courseId - (Required) Required. Identifier of the course.
     * @param {string} params.courseWorkId - (Required) Required. Identifier of the course work.
     * @param {string} params.id - (Required) Required. Identifier of the rubric.
     * @return {object} The API response object.
     */
    this.courses.courseWork.rubrics.get = (params) => this._makeRequest('v1/courses/{courseId}/courseWork/{courseWorkId}/rubrics/{id}', 'GET', params);

    /**
     * Returns a list of rubrics that the requester is permitted to view. This method returns the following error codes: * `PERMISSION_DENIED` for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course or course work doesn't exist or if the user doesn't have access to the corresponding course work.
     * @param {string} params.courseId - (Required) Required. Identifier of the course.
     * @param {string} params.courseWorkId - (Required) Required. Identifier of the course work.
     * @param {integer} params.pageSize - The maximum number of rubrics to return. If unspecified, at most 1 rubric is returned. The maximum value is 1; values above 1 are coerced to 1.
     * @param {string} params.pageToken - nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token.
     * @return {object} The API response object.
     */
    this.courses.courseWork.rubrics.list = (params) => this._makeRequest('v1/courses/{courseId}/courseWork/{courseWorkId}/rubrics', 'GET', params);

    /**
     * Deletes a rubric. The requesting user and course owner must have rubrics creation capabilities. For details, see [licensing requirements](https://developers.google.com/workspace/classroom/rubrics/limitations#license-requirements). This request must be made by the Google Cloud console of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding rubric. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting developer project didn't create the corresponding rubric, or if the requesting user isn't permitted to delete the requested rubric. * `NOT_FOUND` if no rubric exists with the requested ID or the user does not have access to the course, course work, or rubric. * `INVALID_ARGUMENT` if grading has already started on the rubric.
     * @param {string} params.courseId - (Required) Required. Identifier of the course.
     * @param {string} params.courseWorkId - (Required) Required. Identifier of the course work.
     * @param {string} params.id - (Required) Required. Identifier of the rubric.
     * @return {object} The API response object.
     */
    this.courses.courseWork.rubrics.delete = (params) => this._makeRequest('v1/courses/{courseId}/courseWork/{courseWorkId}/rubrics/{id}', 'DELETE', params);

    this.courses.announcements = {};

    /**
     * Deletes an announcement. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding announcement item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting developer project did not create the corresponding announcement, if the requesting user is not permitted to delete the requested course or for access errors. * `FAILED_PRECONDITION` if the requested announcement has already been deleted. * `NOT_FOUND` if no course exists with the requested ID.
     * @param {string} params.courseId - (Required) Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     * @param {string} params.id - (Required) Identifier of the announcement to delete. This identifier is a Classroom-assigned identifier.
     * @return {object} The API response object.
     */
    this.courses.announcements.delete = (params) => this._makeRequest('v1/courses/{courseId}/announcements/{id}', 'DELETE', params);

    /**
     * Creates an announcement. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course, create announcements in the requested course, share a Drive attachment, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course does not exist. * `FAILED_PRECONDITION` for the following request error: * AttachmentNotVisible
     * @param {string} params.courseId - (Required) Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.courses.announcements.create = (params) => this._makeRequest('v1/courses/{courseId}/announcements', 'POST', params);

    /**
     * Returns an announcement. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or announcement, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course or announcement does not exist.
     * @param {string} params.courseId - (Required) Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     * @param {string} params.id - (Required) Identifier of the announcement.
     * @return {object} The API response object.
     */
    this.courses.announcements.get = (params) => this._makeRequest('v1/courses/{courseId}/announcements/{id}', 'GET', params);

    /**
     * Returns a list of announcements that the requester is permitted to view. Course students may only view `PUBLISHED` announcements. Course teachers and domain administrators may view all announcements. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course does not exist.
     * @param {string} params.announcementStates - Restriction on the `state` of announcements returned. If this argument is left unspecified, the default value is `PUBLISHED`.
     * @param {string} params.courseId - (Required) Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     * @param {string} params.orderBy - Optional sort ordering for results. A comma-separated list of fields with an optional sort direction keyword. Supported field is `updateTime`. Supported direction keywords are `asc` and `desc`. If not specified, `updateTime desc` is the default behavior. Examples: `updateTime asc`, `updateTime`
     * @param {integer} params.pageSize - Maximum number of items to return. Zero or unspecified indicates that the server may assign a maximum. The server may return fewer than the specified number of results.
     * @param {string} params.pageToken - nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token.
     * @return {object} The API response object.
     */
    this.courses.announcements.list = (params) => this._makeRequest('v1/courses/{courseId}/announcements', 'GET', params);

    /**
     * Updates one or more fields of an announcement. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting developer project did not create the corresponding announcement or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `FAILED_PRECONDITION` if the requested announcement has already been deleted. * `NOT_FOUND` if the requested course or announcement does not exist
     * @param {string} params.courseId - (Required) Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     * @param {string} params.id - (Required) Identifier of the announcement.
     * @param {string} params.updateMask - Mask that identifies which fields on the announcement to update. This field is required to do an update. The update fails if invalid fields are specified. If a field supports empty values, it can be cleared by specifying it in the update mask and not in the Announcement object. If a field that does not support empty values is included in the update mask and not set in the Announcement object, an `INVALID_ARGUMENT` error is returned. The following fields may be specified by teachers: * `text` * `state` * `scheduled_time`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.courses.announcements.patch = (params) => this._makeRequest('v1/courses/{courseId}/announcements/{id}', 'PATCH', params);

    /**
     * Modifies assignee mode and options of an announcement. Only a teacher of the course that contains the announcement may call this method. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course or course work does not exist.
     * @param {string} params.courseId - (Required) Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     * @param {string} params.id - (Required) Identifier of the announcement.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.courses.announcements.modifyAssignees = (params) => this._makeRequest('v1/courses/{courseId}/announcements/{id}:modifyAssignees', 'POST', params);

    /**
     * Gets metadata for Classroom add-ons in the context of a specific post. To maintain the integrity of its own data and permissions model, an add-on should call this to validate query parameters and the requesting user's role whenever the add-on is opened in an [iframe](https://developers.google.com/workspace/classroom/add-ons/get-started/iframes/iframes-overview). This method returns the following error codes: * `PERMISSION_DENIED` for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if one of the identified resources does not exist.
     * @param {string} params.addOnToken - Optional. Token that authorizes the request. The token is passed as a query parameter when the user is redirected from Classroom to the add-on's URL. The authorization token is required when neither of the following is true: * The add-on has attachments on the post. * The developer project issuing the request is the same project that created the post.
     * @param {string} params.attachmentId - Optional. The identifier of the attachment. This field is required for all requests except when the user is in the [Attachment Discovery iframe](https://developers.google.com/workspace/classroom/add-ons/get-started/iframes/attachment-discovery-iframe).
     * @param {string} params.courseId - (Required) Required. Identifier of the course.
     * @param {string} params.itemId - (Required) Identifier of the `Announcement`, `CourseWork`, or `CourseWorkMaterial` under which the attachment is attached. This field is required, but is not marked as such while we are migrating from post_id.
     * @param {string} params.postId - Optional. Deprecated, use `item_id` instead.
     * @return {object} The API response object.
     */
    this.courses.announcements.getAddOnContext = (params) => this._makeRequest('v1/courses/{courseId}/announcements/{itemId}/addOnContext', 'GET', params);

    this.courses.announcements.addOnAttachments = {};

    /**
     * Returns an add-on attachment. Requires the add-on requesting the attachment to be the original creator of the attachment. This method returns the following error codes: * `PERMISSION_DENIED` for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if one of the identified resources does not exist.
     * @param {string} params.attachmentId - (Required) Required. Identifier of the attachment.
     * @param {string} params.courseId - (Required) Required. Identifier of the course.
     * @param {string} params.itemId - (Required) Identifier of the `Announcement`, `CourseWork`, or `CourseWorkMaterial` under which the attachment is attached. This field is required, but is not marked as such while we are migrating from post_id.
     * @param {string} params.postId - Optional. Deprecated, use `item_id` instead.
     * @return {object} The API response object.
     */
    this.courses.announcements.addOnAttachments.get = (params) => this._makeRequest('v1/courses/{courseId}/announcements/{itemId}/addOnAttachments/{attachmentId}', 'GET', params);

    /**
     * Returns all attachments created by an add-on under the post. Requires the add-on to have active attachments on the post or have permission to create new attachments on the post. This method returns the following error codes: * `PERMISSION_DENIED` for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if one of the identified resources does not exist.
     * @param {string} params.courseId - (Required) Required. Identifier of the course.
     * @param {string} params.itemId - (Required) Identifier of the `Announcement`, `CourseWork`, or `CourseWorkMaterial` whose attachments should be enumerated. This field is required, but is not marked as such while we are migrating from post_id.
     * @param {integer} params.pageSize - The maximum number of attachments to return. The service may return fewer than this value. If unspecified, at most 20 attachments will be returned. The maximum value is 20; values above 20 will be coerced to 20.
     * @param {string} params.pageToken - A page token, received from a previous `ListAddOnAttachments` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAddOnAttachments` must match the call that provided the page token.
     * @param {string} params.postId - Optional. Identifier of the post under the course whose attachments to enumerate. Deprecated, use `item_id` instead.
     * @return {object} The API response object.
     */
    this.courses.announcements.addOnAttachments.list = (params) => this._makeRequest('v1/courses/{courseId}/announcements/{itemId}/addOnAttachments', 'GET', params);

    /**
     * Creates an add-on attachment under a post. Requires the add-on to have permission to create new attachments on the post. This method returns the following error codes: * `PERMISSION_DENIED` for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if one of the identified resources does not exist.
     * @param {string} params.addOnToken - Optional. Token that authorizes the request. The token is passed as a query parameter when the user is redirected from Classroom to the add-on's URL. This authorization token is required for in-Classroom attachment creation but optional for partner-first attachment creation. Returns an error if not provided for partner-first attachment creation and the developer projects that created the attachment and its parent stream item do not match.
     * @param {string} params.courseId - (Required) Required. Identifier of the course.
     * @param {string} params.itemId - (Required) Identifier of the `Announcement`, `CourseWork`, or `CourseWorkMaterial` under which to create the attachment. This field is required, but is not marked as such while we are migrating from post_id.
     * @param {string} params.postId - Optional. Deprecated, use `item_id` instead.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.courses.announcements.addOnAttachments.create = (params) => this._makeRequest('v1/courses/{courseId}/announcements/{itemId}/addOnAttachments', 'POST', params);

    /**
     * Updates an add-on attachment. Requires the add-on to have been the original creator of the attachment. This method returns the following error codes: * `PERMISSION_DENIED` for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if one of the identified resources does not exist.
     * @param {string} params.attachmentId - (Required) Required. Identifier of the attachment.
     * @param {string} params.courseId - (Required) Required. Identifier of the course.
     * @param {string} params.itemId - (Required) Identifier of the post under which the attachment is attached.
     * @param {string} params.postId - Required. Identifier of the post under which the attachment is attached.
     * @param {string} params.updateMask - Required. Mask that identifies which fields on the attachment to update. The update fails if invalid fields are specified. If a field supports empty values, it can be cleared by specifying it in the update mask and not in the `AddOnAttachment` object. If a field that does not support empty values is included in the update mask and not set in the `AddOnAttachment` object, an `INVALID_ARGUMENT` error is returned. The following fields may be specified by teachers: * `title` * `teacher_view_uri` * `student_view_uri` * `student_work_review_uri` * `due_date` * `due_time` * `max_points`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.courses.announcements.addOnAttachments.patch = (params) => this._makeRequest('v1/courses/{courseId}/announcements/{itemId}/addOnAttachments/{attachmentId}', 'PATCH', params);

    /**
     * Deletes an add-on attachment. Requires the add-on to have been the original creator of the attachment. This method returns the following error codes: * `PERMISSION_DENIED` for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if one of the identified resources does not exist.
     * @param {string} params.attachmentId - (Required) Required. Identifier of the attachment.
     * @param {string} params.courseId - (Required) Required. Identifier of the course.
     * @param {string} params.itemId - (Required) Identifier of the `Announcement`, `CourseWork`, or `CourseWorkMaterial` under which the attachment is attached. This field is required, but is not marked as such while we are migrating from post_id.
     * @param {string} params.postId - Optional. Deprecated, use `item_id` instead.
     * @return {object} The API response object.
     */
    this.courses.announcements.addOnAttachments.delete = (params) => this._makeRequest('v1/courses/{courseId}/announcements/{itemId}/addOnAttachments/{attachmentId}', 'DELETE', params);

    this.courses.courseWorkMaterials = {};

    /**
     * Creates a course work material. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course, create course work material in the requested course, share a Drive attachment, or for access errors. * `INVALID_ARGUMENT` if the request is malformed or if more than 20 * materials are provided. * `NOT_FOUND` if the requested course does not exist. * `FAILED_PRECONDITION` for the following request error: * AttachmentNotVisible
     * @param {string} params.courseId - (Required) Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.courses.courseWorkMaterials.create = (params) => this._makeRequest('v1/courses/{courseId}/courseWorkMaterials', 'POST', params);

    /**
     * Returns a course work material. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work material, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course or course work material does not exist.
     * @param {string} params.courseId - (Required) Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     * @param {string} params.id - (Required) Identifier of the course work material.
     * @return {object} The API response object.
     */
    this.courses.courseWorkMaterials.get = (params) => this._makeRequest('v1/courses/{courseId}/courseWorkMaterials/{id}', 'GET', params);

    /**
     * Returns a list of course work material that the requester is permitted to view. Course students may only view `PUBLISHED` course work material. Course teachers and domain administrators may view all course work material. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course does not exist.
     * @param {string} params.courseId - (Required) Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     * @param {string} params.courseWorkMaterialStates - Restriction on the work status to return. Only course work material that matches is returned. If unspecified, items with a work status of `PUBLISHED` is returned.
     * @param {string} params.materialDriveId - Optional filtering for course work material with at least one Drive material whose ID matches the provided string. If `material_link` is also specified, course work material must have materials matching both filters.
     * @param {string} params.materialLink - Optional filtering for course work material with at least one link material whose URL partially matches the provided string.
     * @param {string} params.orderBy - Optional sort ordering for results. A comma-separated list of fields with an optional sort direction keyword. Supported field is `updateTime`. Supported direction keywords are `asc` and `desc`. If not specified, `updateTime desc` is the default behavior. Examples: `updateTime asc`, `updateTime`
     * @param {integer} params.pageSize - Maximum number of items to return. Zero or unspecified indicates that the server may assign a maximum. The server may return fewer than the specified number of results.
     * @param {string} params.pageToken - nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token.
     * @return {object} The API response object.
     */
    this.courses.courseWorkMaterials.list = (params) => this._makeRequest('v1/courses/{courseId}/courseWorkMaterials', 'GET', params);

    /**
     * Updates one or more fields of a course work material. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting developer project for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `FAILED_PRECONDITION` if the requested course work material has already been deleted. * `NOT_FOUND` if the requested course or course work material does not exist
     * @param {string} params.courseId - (Required) Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     * @param {string} params.id - (Required) Identifier of the course work material.
     * @param {string} params.updateMask - Mask that identifies which fields on the course work material to update. This field is required to do an update. The update fails if invalid fields are specified. If a field supports empty values, it can be cleared by specifying it in the update mask and not in the course work material object. If a field that does not support empty values is included in the update mask and not set in the course work material object, an `INVALID_ARGUMENT` error is returned. The following fields may be specified by teachers: * `title` * `description` * `state` * `scheduled_time` * `topic_id`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.courses.courseWorkMaterials.patch = (params) => this._makeRequest('v1/courses/{courseId}/courseWorkMaterials/{id}', 'PATCH', params);

    /**
     * Deletes a course work material. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work material item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting developer project did not create the corresponding course work material, if the requesting user is not permitted to delete the requested course or for access errors. * `FAILED_PRECONDITION` if the requested course work material has already been deleted. * `NOT_FOUND` if no course exists with the requested ID.
     * @param {string} params.courseId - (Required) Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     * @param {string} params.id - (Required) Identifier of the course work material to delete. This identifier is a Classroom-assigned identifier.
     * @return {object} The API response object.
     */
    this.courses.courseWorkMaterials.delete = (params) => this._makeRequest('v1/courses/{courseId}/courseWorkMaterials/{id}', 'DELETE', params);

    /**
     * Gets metadata for Classroom add-ons in the context of a specific post. To maintain the integrity of its own data and permissions model, an add-on should call this to validate query parameters and the requesting user's role whenever the add-on is opened in an [iframe](https://developers.google.com/workspace/classroom/add-ons/get-started/iframes/iframes-overview). This method returns the following error codes: * `PERMISSION_DENIED` for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if one of the identified resources does not exist.
     * @param {string} params.addOnToken - Optional. Token that authorizes the request. The token is passed as a query parameter when the user is redirected from Classroom to the add-on's URL. The authorization token is required when neither of the following is true: * The add-on has attachments on the post. * The developer project issuing the request is the same project that created the post.
     * @param {string} params.attachmentId - Optional. The identifier of the attachment. This field is required for all requests except when the user is in the [Attachment Discovery iframe](https://developers.google.com/workspace/classroom/add-ons/get-started/iframes/attachment-discovery-iframe).
     * @param {string} params.courseId - (Required) Required. Identifier of the course.
     * @param {string} params.itemId - (Required) Identifier of the `Announcement`, `CourseWork`, or `CourseWorkMaterial` under which the attachment is attached. This field is required, but is not marked as such while we are migrating from post_id.
     * @param {string} params.postId - Optional. Deprecated, use `item_id` instead.
     * @return {object} The API response object.
     */
    this.courses.courseWorkMaterials.getAddOnContext = (params) => this._makeRequest('v1/courses/{courseId}/courseWorkMaterials/{itemId}/addOnContext', 'GET', params);

    this.courses.courseWorkMaterials.addOnAttachments = {};

    /**
     * Returns an add-on attachment. Requires the add-on requesting the attachment to be the original creator of the attachment. This method returns the following error codes: * `PERMISSION_DENIED` for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if one of the identified resources does not exist.
     * @param {string} params.attachmentId - (Required) Required. Identifier of the attachment.
     * @param {string} params.courseId - (Required) Required. Identifier of the course.
     * @param {string} params.itemId - (Required) Identifier of the `Announcement`, `CourseWork`, or `CourseWorkMaterial` under which the attachment is attached. This field is required, but is not marked as such while we are migrating from post_id.
     * @param {string} params.postId - Optional. Deprecated, use `item_id` instead.
     * @return {object} The API response object.
     */
    this.courses.courseWorkMaterials.addOnAttachments.get = (params) => this._makeRequest('v1/courses/{courseId}/courseWorkMaterials/{itemId}/addOnAttachments/{attachmentId}', 'GET', params);

    /**
     * Returns all attachments created by an add-on under the post. Requires the add-on to have active attachments on the post or have permission to create new attachments on the post. This method returns the following error codes: * `PERMISSION_DENIED` for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if one of the identified resources does not exist.
     * @param {string} params.courseId - (Required) Required. Identifier of the course.
     * @param {string} params.itemId - (Required) Identifier of the `Announcement`, `CourseWork`, or `CourseWorkMaterial` whose attachments should be enumerated. This field is required, but is not marked as such while we are migrating from post_id.
     * @param {integer} params.pageSize - The maximum number of attachments to return. The service may return fewer than this value. If unspecified, at most 20 attachments will be returned. The maximum value is 20; values above 20 will be coerced to 20.
     * @param {string} params.pageToken - A page token, received from a previous `ListAddOnAttachments` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAddOnAttachments` must match the call that provided the page token.
     * @param {string} params.postId - Optional. Identifier of the post under the course whose attachments to enumerate. Deprecated, use `item_id` instead.
     * @return {object} The API response object.
     */
    this.courses.courseWorkMaterials.addOnAttachments.list = (params) => this._makeRequest('v1/courses/{courseId}/courseWorkMaterials/{itemId}/addOnAttachments', 'GET', params);

    /**
     * Creates an add-on attachment under a post. Requires the add-on to have permission to create new attachments on the post. This method returns the following error codes: * `PERMISSION_DENIED` for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if one of the identified resources does not exist.
     * @param {string} params.addOnToken - Optional. Token that authorizes the request. The token is passed as a query parameter when the user is redirected from Classroom to the add-on's URL. This authorization token is required for in-Classroom attachment creation but optional for partner-first attachment creation. Returns an error if not provided for partner-first attachment creation and the developer projects that created the attachment and its parent stream item do not match.
     * @param {string} params.courseId - (Required) Required. Identifier of the course.
     * @param {string} params.itemId - (Required) Identifier of the `Announcement`, `CourseWork`, or `CourseWorkMaterial` under which to create the attachment. This field is required, but is not marked as such while we are migrating from post_id.
     * @param {string} params.postId - Optional. Deprecated, use `item_id` instead.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.courses.courseWorkMaterials.addOnAttachments.create = (params) => this._makeRequest('v1/courses/{courseId}/courseWorkMaterials/{itemId}/addOnAttachments', 'POST', params);

    /**
     * Updates an add-on attachment. Requires the add-on to have been the original creator of the attachment. This method returns the following error codes: * `PERMISSION_DENIED` for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if one of the identified resources does not exist.
     * @param {string} params.attachmentId - (Required) Required. Identifier of the attachment.
     * @param {string} params.courseId - (Required) Required. Identifier of the course.
     * @param {string} params.itemId - (Required) Identifier of the post under which the attachment is attached.
     * @param {string} params.postId - Required. Identifier of the post under which the attachment is attached.
     * @param {string} params.updateMask - Required. Mask that identifies which fields on the attachment to update. The update fails if invalid fields are specified. If a field supports empty values, it can be cleared by specifying it in the update mask and not in the `AddOnAttachment` object. If a field that does not support empty values is included in the update mask and not set in the `AddOnAttachment` object, an `INVALID_ARGUMENT` error is returned. The following fields may be specified by teachers: * `title` * `teacher_view_uri` * `student_view_uri` * `student_work_review_uri` * `due_date` * `due_time` * `max_points`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.courses.courseWorkMaterials.addOnAttachments.patch = (params) => this._makeRequest('v1/courses/{courseId}/courseWorkMaterials/{itemId}/addOnAttachments/{attachmentId}', 'PATCH', params);

    /**
     * Deletes an add-on attachment. Requires the add-on to have been the original creator of the attachment. This method returns the following error codes: * `PERMISSION_DENIED` for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if one of the identified resources does not exist.
     * @param {string} params.attachmentId - (Required) Required. Identifier of the attachment.
     * @param {string} params.courseId - (Required) Required. Identifier of the course.
     * @param {string} params.itemId - (Required) Identifier of the `Announcement`, `CourseWork`, or `CourseWorkMaterial` under which the attachment is attached. This field is required, but is not marked as such while we are migrating from post_id.
     * @param {string} params.postId - Optional. Deprecated, use `item_id` instead.
     * @return {object} The API response object.
     */
    this.courses.courseWorkMaterials.addOnAttachments.delete = (params) => this._makeRequest('v1/courses/{courseId}/courseWorkMaterials/{itemId}/addOnAttachments/{attachmentId}', 'DELETE', params);

    this.courses.topics = {};

    /**
     * Creates a topic. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course, create a topic in the requested course, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `ALREADY_EXISTS` if there exists a topic in the course with the same name. * `FAILED_PRECONDITION` for the following request error: * CourseTopicLimitReached * `NOT_FOUND` if the requested course does not exist.
     * @param {string} params.courseId - (Required) Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.courses.topics.create = (params) => this._makeRequest('v1/courses/{courseId}/topics', 'POST', params);

    /**
     * Updates one or more fields of a topic. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting developer project did not create the corresponding topic or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `FAILED_PRECONDITION` if there exists a topic in the course with the same name. * `NOT_FOUND` if the requested course or topic does not exist
     * @param {string} params.courseId - (Required) Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     * @param {string} params.id - (Required) Identifier of the topic.
     * @param {string} params.updateMask - Mask that identifies which fields on the topic to update. This field is required to do an update. The update fails if invalid fields are specified. If a field supports empty values, it can be cleared by specifying it in the update mask and not in the Topic object. If a field that does not support empty values is included in the update mask and not set in the Topic object, an `INVALID_ARGUMENT` error is returned. The following fields may be specified: * `name`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.courses.topics.patch = (params) => this._makeRequest('v1/courses/{courseId}/topics/{id}', 'PATCH', params);

    /**
     * Deletes a topic. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not allowed to delete the requested topic or for access errors. * `FAILED_PRECONDITION` if the requested topic has already been deleted. * `NOT_FOUND` if no course or topic exists with the requested ID.
     * @param {string} params.courseId - (Required) Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     * @param {string} params.id - (Required) Identifier of the topic to delete.
     * @return {object} The API response object.
     */
    this.courses.topics.delete = (params) => this._makeRequest('v1/courses/{courseId}/topics/{id}', 'DELETE', params);

    /**
     * Returns a topic. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or topic, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course or topic does not exist.
     * @param {string} params.courseId - (Required) Identifier of the course.
     * @param {string} params.id - (Required) Identifier of the topic.
     * @return {object} The API response object.
     */
    this.courses.topics.get = (params) => this._makeRequest('v1/courses/{courseId}/topics/{id}', 'GET', params);

    /**
     * Returns the list of topics that the requester is permitted to view. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course does not exist.
     * @param {string} params.courseId - (Required) Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     * @param {integer} params.pageSize - Maximum number of items to return. Zero or unspecified indicates that the server may assign a maximum. The server may return fewer than the specified number of results.
     * @param {string} params.pageToken - nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token.
     * @return {object} The API response object.
     */
    this.courses.topics.list = (params) => this._makeRequest('v1/courses/{courseId}/topics', 'GET', params);

    this.courses.posts = {};

    /**
     * Gets metadata for Classroom add-ons in the context of a specific post. To maintain the integrity of its own data and permissions model, an add-on should call this to validate query parameters and the requesting user's role whenever the add-on is opened in an [iframe](https://developers.google.com/workspace/classroom/add-ons/get-started/iframes/iframes-overview). This method returns the following error codes: * `PERMISSION_DENIED` for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if one of the identified resources does not exist.
     * @param {string} params.addOnToken - Optional. Token that authorizes the request. The token is passed as a query parameter when the user is redirected from Classroom to the add-on's URL. The authorization token is required when neither of the following is true: * The add-on has attachments on the post. * The developer project issuing the request is the same project that created the post.
     * @param {string} params.attachmentId - Optional. The identifier of the attachment. This field is required for all requests except when the user is in the [Attachment Discovery iframe](https://developers.google.com/workspace/classroom/add-ons/get-started/iframes/attachment-discovery-iframe).
     * @param {string} params.courseId - (Required) Required. Identifier of the course.
     * @param {string} params.itemId - Identifier of the `Announcement`, `CourseWork`, or `CourseWorkMaterial` under which the attachment is attached. This field is required, but is not marked as such while we are migrating from post_id.
     * @param {string} params.postId - (Required) Optional. Deprecated, use `item_id` instead.
     * @return {object} The API response object.
     */
    this.courses.posts.getAddOnContext = (params) => this._makeRequest('v1/courses/{courseId}/posts/{postId}/addOnContext', 'GET', params);

    this.courses.posts.addOnAttachments = {};

    /**
     * Returns an add-on attachment. Requires the add-on requesting the attachment to be the original creator of the attachment. This method returns the following error codes: * `PERMISSION_DENIED` for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if one of the identified resources does not exist.
     * @param {string} params.attachmentId - (Required) Required. Identifier of the attachment.
     * @param {string} params.courseId - (Required) Required. Identifier of the course.
     * @param {string} params.itemId - Identifier of the `Announcement`, `CourseWork`, or `CourseWorkMaterial` under which the attachment is attached. This field is required, but is not marked as such while we are migrating from post_id.
     * @param {string} params.postId - (Required) Optional. Deprecated, use `item_id` instead.
     * @return {object} The API response object.
     */
    this.courses.posts.addOnAttachments.get = (params) => this._makeRequest('v1/courses/{courseId}/posts/{postId}/addOnAttachments/{attachmentId}', 'GET', params);

    /**
     * Returns all attachments created by an add-on under the post. Requires the add-on to have active attachments on the post or have permission to create new attachments on the post. This method returns the following error codes: * `PERMISSION_DENIED` for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if one of the identified resources does not exist.
     * @param {string} params.courseId - (Required) Required. Identifier of the course.
     * @param {string} params.itemId - Identifier of the `Announcement`, `CourseWork`, or `CourseWorkMaterial` whose attachments should be enumerated. This field is required, but is not marked as such while we are migrating from post_id.
     * @param {integer} params.pageSize - The maximum number of attachments to return. The service may return fewer than this value. If unspecified, at most 20 attachments will be returned. The maximum value is 20; values above 20 will be coerced to 20.
     * @param {string} params.pageToken - A page token, received from a previous `ListAddOnAttachments` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAddOnAttachments` must match the call that provided the page token.
     * @param {string} params.postId - (Required) Optional. Identifier of the post under the course whose attachments to enumerate. Deprecated, use `item_id` instead.
     * @return {object} The API response object.
     */
    this.courses.posts.addOnAttachments.list = (params) => this._makeRequest('v1/courses/{courseId}/posts/{postId}/addOnAttachments', 'GET', params);

    /**
     * Creates an add-on attachment under a post. Requires the add-on to have permission to create new attachments on the post. This method returns the following error codes: * `PERMISSION_DENIED` for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if one of the identified resources does not exist.
     * @param {string} params.addOnToken - Optional. Token that authorizes the request. The token is passed as a query parameter when the user is redirected from Classroom to the add-on's URL. This authorization token is required for in-Classroom attachment creation but optional for partner-first attachment creation. Returns an error if not provided for partner-first attachment creation and the developer projects that created the attachment and its parent stream item do not match.
     * @param {string} params.courseId - (Required) Required. Identifier of the course.
     * @param {string} params.itemId - Identifier of the `Announcement`, `CourseWork`, or `CourseWorkMaterial` under which to create the attachment. This field is required, but is not marked as such while we are migrating from post_id.
     * @param {string} params.postId - (Required) Optional. Deprecated, use `item_id` instead.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.courses.posts.addOnAttachments.create = (params) => this._makeRequest('v1/courses/{courseId}/posts/{postId}/addOnAttachments', 'POST', params);

    /**
     * Updates an add-on attachment. Requires the add-on to have been the original creator of the attachment. This method returns the following error codes: * `PERMISSION_DENIED` for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if one of the identified resources does not exist.
     * @param {string} params.attachmentId - (Required) Required. Identifier of the attachment.
     * @param {string} params.courseId - (Required) Required. Identifier of the course.
     * @param {string} params.itemId - Identifier of the post under which the attachment is attached.
     * @param {string} params.postId - (Required) Required. Identifier of the post under which the attachment is attached.
     * @param {string} params.updateMask - Required. Mask that identifies which fields on the attachment to update. The update fails if invalid fields are specified. If a field supports empty values, it can be cleared by specifying it in the update mask and not in the `AddOnAttachment` object. If a field that does not support empty values is included in the update mask and not set in the `AddOnAttachment` object, an `INVALID_ARGUMENT` error is returned. The following fields may be specified by teachers: * `title` * `teacher_view_uri` * `student_view_uri` * `student_work_review_uri` * `due_date` * `due_time` * `max_points`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.courses.posts.addOnAttachments.patch = (params) => this._makeRequest('v1/courses/{courseId}/posts/{postId}/addOnAttachments/{attachmentId}', 'PATCH', params);

    /**
     * Deletes an add-on attachment. Requires the add-on to have been the original creator of the attachment. This method returns the following error codes: * `PERMISSION_DENIED` for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if one of the identified resources does not exist.
     * @param {string} params.attachmentId - (Required) Required. Identifier of the attachment.
     * @param {string} params.courseId - (Required) Required. Identifier of the course.
     * @param {string} params.itemId - Identifier of the `Announcement`, `CourseWork`, or `CourseWorkMaterial` under which the attachment is attached. This field is required, but is not marked as such while we are migrating from post_id.
     * @param {string} params.postId - (Required) Optional. Deprecated, use `item_id` instead.
     * @return {object} The API response object.
     */
    this.courses.posts.addOnAttachments.delete = (params) => this._makeRequest('v1/courses/{courseId}/posts/{postId}/addOnAttachments/{attachmentId}', 'DELETE', params);

    this.courses.posts.addOnAttachments.studentSubmissions = {};

    /**
     * Updates data associated with an add-on attachment submission. Requires the add-on to have been the original creator of the attachment and the attachment to have a positive `max_points` value set. This method returns the following error codes: * `PERMISSION_DENIED` for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if one of the identified resources does not exist.
     * @param {string} params.attachmentId - (Required) Required. Identifier of the attachment.
     * @param {string} params.courseId - (Required) Required. Identifier of the course.
     * @param {string} params.itemId - Identifier of the `Announcement`, `CourseWork`, or `CourseWorkMaterial` under which the attachment is attached. This field is required, but is not marked as such while we are migrating from post_id.
     * @param {string} params.postId - (Required) Optional. Deprecated, use `item_id` instead.
     * @param {string} params.submissionId - (Required) Required. Identifier of the student's submission.
     * @param {string} params.updateMask - Required. Mask that identifies which fields on the attachment to update. The update fails if invalid fields are specified. If a field supports empty values, it can be cleared by specifying it in the update mask and not in the `AddOnAttachmentStudentSubmission` object. The following fields may be specified by teachers: * `points_earned`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.courses.posts.addOnAttachments.studentSubmissions.patch = (params) => this._makeRequest('v1/courses/{courseId}/posts/{postId}/addOnAttachments/{attachmentId}/studentSubmissions/{submissionId}', 'PATCH', params);

    /**
     * Returns a student submission for an add-on attachment. This method returns the following error codes: * `PERMISSION_DENIED` for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if one of the identified resources does not exist.
     * @param {string} params.attachmentId - (Required) Required. Identifier of the attachment.
     * @param {string} params.courseId - (Required) Required. Identifier of the course.
     * @param {string} params.itemId - Identifier of the `Announcement`, `CourseWork`, or `CourseWorkMaterial` under which the attachment is attached. This field is required, but is not marked as such while we are migrating from post_id.
     * @param {string} params.postId - (Required) Optional. Deprecated, use `item_id` instead.
     * @param {string} params.submissionId - (Required) Required. Identifier of the student’s submission.
     * @return {object} The API response object.
     */
    this.courses.posts.addOnAttachments.studentSubmissions.get = (params) => this._makeRequest('v1/courses/{courseId}/posts/{postId}/addOnAttachments/{attachmentId}/studentSubmissions/{submissionId}', 'GET', params);

    this.courses.teachers = {};

    /**
     * Creates a teacher of a course. Domain administrators are permitted to [directly add](https://developers.google.com/workspace/classroom/guides/manage-users) users within their domain as teachers to courses within their domain. Non-admin users should send an Invitation instead. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to create teachers in this course or for access errors. * `NOT_FOUND` if the requested course ID does not exist. * `FAILED_PRECONDITION` if the requested user's account is disabled, for the following request errors: * CourseMemberLimitReached * CourseNotModifiable * CourseTeacherLimitReached * UserGroupsMembershipLimitReached * InactiveCourseOwner * `ALREADY_EXISTS` if the user is already a teacher or student in the course.
     * @param {string} params.courseId - (Required) Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.courses.teachers.create = (params) => this._makeRequest('v1/courses/{courseId}/teachers', 'POST', params);

    /**
     * Returns a teacher of a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to view teachers of this course or for access errors. * `NOT_FOUND` if no teacher of this course has the requested ID or if the course does not exist.
     * @param {string} params.courseId - (Required) Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     * @param {string} params.userId - (Required) Identifier of the teacher to return. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user
     * @return {object} The API response object.
     */
    this.courses.teachers.get = (params) => this._makeRequest('v1/courses/{courseId}/teachers/{userId}', 'GET', params);

    /**
     * Removes the specified teacher from the specified course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to delete teachers of this course or for access errors. * `NOT_FOUND` if no teacher of this course has the requested ID or if the course does not exist. * `FAILED_PRECONDITION` if the requested ID belongs to the primary teacher of this course. * `FAILED_PRECONDITION` if the requested ID belongs to the owner of the course Drive folder. * `FAILED_PRECONDITION` if the course no longer has an active owner.
     * @param {string} params.courseId - (Required) Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     * @param {string} params.userId - (Required) Identifier of the teacher to delete. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user
     * @return {object} The API response object.
     */
    this.courses.teachers.delete = (params) => this._makeRequest('v1/courses/{courseId}/teachers/{userId}', 'DELETE', params);

    /**
     * Returns a list of teachers of this course that the requester is permitted to view. This method returns the following error codes: * `NOT_FOUND` if the course does not exist. * `PERMISSION_DENIED` for access errors.
     * @param {string} params.courseId - (Required) Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     * @param {integer} params.pageSize - Maximum number of items to return. The default is 30 if unspecified or `0`. The server may return fewer than the specified number of results.
     * @param {string} params.pageToken - nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token.
     * @return {object} The API response object.
     */
    this.courses.teachers.list = (params) => this._makeRequest('v1/courses/{courseId}/teachers', 'GET', params);

    this.courses.students = {};

    /**
     * Adds a user as a student of a course. Domain administrators are permitted to [directly add](https://developers.google.com/workspace/classroom/guides/manage-users) users within their domain as students to courses within their domain. Students are permitted to add themselves to a course using an enrollment code. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to create students in this course or for access errors. * `NOT_FOUND` if the requested course ID does not exist. * `FAILED_PRECONDITION` if the requested user's account is disabled, for the following request errors: * CourseMemberLimitReached * CourseNotModifiable * UserGroupsMembershipLimitReached * InactiveCourseOwner * `ALREADY_EXISTS` if the user is already a student or teacher in the course.
     * @param {string} params.courseId - (Required) Identifier of the course to create the student in. This identifier can be either the Classroom-assigned identifier or an alias.
     * @param {string} params.enrollmentCode - Enrollment code of the course to create the student in. This code is required if userId corresponds to the requesting user; it may be omitted if the requesting user has administrative permissions to create students for any user.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.courses.students.create = (params) => this._makeRequest('v1/courses/{courseId}/students', 'POST', params);

    /**
     * Returns a student of a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to view students of this course or for access errors. * `NOT_FOUND` if no student of this course has the requested ID or if the course does not exist.
     * @param {string} params.courseId - (Required) Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     * @param {string} params.userId - (Required) Identifier of the student to return. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user
     * @return {object} The API response object.
     */
    this.courses.students.get = (params) => this._makeRequest('v1/courses/{courseId}/students/{userId}', 'GET', params);

    /**
     * Deletes a student of a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to delete students of this course or for access errors. * `NOT_FOUND` if no student of this course has the requested ID or if the course does not exist.
     * @param {string} params.courseId - (Required) Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     * @param {string} params.userId - (Required) Identifier of the student to delete. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user
     * @return {object} The API response object.
     */
    this.courses.students.delete = (params) => this._makeRequest('v1/courses/{courseId}/students/{userId}', 'DELETE', params);

    /**
     * Returns a list of students of this course that the requester is permitted to view. This method returns the following error codes: * `NOT_FOUND` if the course does not exist. * `PERMISSION_DENIED` for access errors.
     * @param {string} params.courseId - (Required) Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     * @param {integer} params.pageSize - Maximum number of items to return. The default is 30 if unspecified or `0`. The server may return fewer than the specified number of results.
     * @param {string} params.pageToken - nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token.
     * @return {object} The API response object.
     */
    this.courses.students.list = (params) => this._makeRequest('v1/courses/{courseId}/students', 'GET', params);

    this.userProfiles = {};

    /**
     * Returns a user profile. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access this user profile, if no profile exists with the requested ID, or for access errors.
     * @param {string} params.userId - (Required) Identifier of the profile to return. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user
     * @return {object} The API response object.
     */
    this.userProfiles.get = (params) => this._makeRequest('v1/userProfiles/{userId}', 'GET', params);

    this.userProfiles.guardianInvitations = {};

    /**
     * Returns a list of guardian invitations that the requesting user is permitted to view, filtered by the parameters provided. This method returns the following error codes: * `PERMISSION_DENIED` if a `student_id` is specified, and the requesting user is not permitted to view guardian invitations for that student, if `"-"` is specified as the `student_id` and the user is not a domain administrator, if guardians are not enabled for the domain in question, or for other access errors. * `INVALID_ARGUMENT` if a `student_id` is specified, but its format cannot be recognized (it is not an email address, nor a `student_id` from the API, nor the literal string `me`). May also be returned if an invalid `page_token` or `state` is provided. * `NOT_FOUND` if a `student_id` is specified, and its format can be recognized, but Classroom has no record of that student.
     * @param {string} params.invitedEmailAddress - If specified, only results with the specified `invited_email_address` are returned.
     * @param {integer} params.pageSize - Maximum number of items to return. Zero or unspecified indicates that the server may assign a maximum. The server may return fewer than the specified number of results.
     * @param {string} params.pageToken - nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token.
     * @param {string} params.states - If specified, only results with the specified `state` values are returned. Otherwise, results with a `state` of `PENDING` are returned.
     * @param {string} params.studentId - (Required) The ID of the student whose guardian invitations are to be returned. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user * the string literal `"-"`, indicating that results should be returned for all students that the requesting user is permitted to view guardian invitations.
     * @return {object} The API response object.
     */
    this.userProfiles.guardianInvitations.list = (params) => this._makeRequest('v1/userProfiles/{studentId}/guardianInvitations', 'GET', params);

    /**
     * Returns a specific guardian invitation. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to view guardian invitations for the student identified by the `student_id`, if guardians are not enabled for the domain in question, or for other access errors. * `INVALID_ARGUMENT` if a `student_id` is specified, but its format cannot be recognized (it is not an email address, nor a `student_id` from the API, nor the literal string `me`). * `NOT_FOUND` if Classroom cannot find any record of the given student or `invitation_id`. May also be returned if the student exists, but the requesting user does not have access to see that student.
     * @param {string} params.invitationId - (Required) The `id` field of the `GuardianInvitation` being requested.
     * @param {string} params.studentId - (Required) The ID of the student whose guardian invitation is being requested.
     * @return {object} The API response object.
     */
    this.userProfiles.guardianInvitations.get = (params) => this._makeRequest('v1/userProfiles/{studentId}/guardianInvitations/{invitationId}', 'GET', params);

    /**
     * Creates a guardian invitation, and sends an email to the guardian asking them to confirm that they are the student's guardian. Once the guardian accepts the invitation, their `state` will change to `COMPLETED` and they will start receiving guardian notifications. A `Guardian` resource will also be created to represent the active guardian. The request object must have the `student_id` and `invited_email_address` fields set. Failing to set these fields, or setting any other fields in the request, will result in an error. This method returns the following error codes: * `PERMISSION_DENIED` if the current user does not have permission to manage guardians, if the guardian in question has already rejected too many requests for that student, if guardians are not enabled for the domain in question, or for other access errors. * `RESOURCE_EXHAUSTED` if the student or guardian has exceeded the guardian link limit. * `INVALID_ARGUMENT` if the guardian email address is not valid (for example, if it is too long), or if the format of the student ID provided cannot be recognized (it is not an email address, nor a `user_id` from this API). This error will also be returned if read-only fields are set, or if the `state` field is set to to a value other than `PENDING`. * `NOT_FOUND` if the student ID provided is a valid student ID, but Classroom has no record of that student. * `ALREADY_EXISTS` if there is already a pending guardian invitation for the student and `invited_email_address` provided, or if the provided `invited_email_address` matches the Google account of an existing `Guardian` for this user.
     * @param {string} params.studentId - (Required) ID of the student (in standard format)
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.userProfiles.guardianInvitations.create = (params) => this._makeRequest('v1/userProfiles/{studentId}/guardianInvitations', 'POST', params);

    /**
     * Modifies a guardian invitation. Currently, the only valid modification is to change the `state` from `PENDING` to `COMPLETE`. This has the effect of withdrawing the invitation. This method returns the following error codes: * `PERMISSION_DENIED` if the current user does not have permission to manage guardians, if guardians are not enabled for the domain in question or for other access errors. * `FAILED_PRECONDITION` if the guardian link is not in the `PENDING` state. * `INVALID_ARGUMENT` if the format of the student ID provided cannot be recognized (it is not an email address, nor a `user_id` from this API), or if the passed `GuardianInvitation` has a `state` other than `COMPLETE`, or if it modifies fields other than `state`. * `NOT_FOUND` if the student ID provided is a valid student ID, but Classroom has no record of that student, or if the `id` field does not refer to a guardian invitation known to Classroom.
     * @param {string} params.invitationId - (Required) The `id` field of the `GuardianInvitation` to be modified.
     * @param {string} params.studentId - (Required) The ID of the student whose guardian invitation is to be modified.
     * @param {string} params.updateMask - Mask that identifies which fields on the course to update. This field is required to do an update. The update fails if invalid fields are specified. The following fields are valid: * `state` When set in a query parameter, this field should be specified as `updateMask=,,...`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.userProfiles.guardianInvitations.patch = (params) => this._makeRequest('v1/userProfiles/{studentId}/guardianInvitations/{invitationId}', 'PATCH', params);

    this.userProfiles.guardians = {};

    /**
     * Returns a list of guardians that the requesting user is permitted to view, restricted to those that match the request. To list guardians for any student that the requesting user may view guardians for, use the literal character `-` for the student ID. This method returns the following error codes: * `PERMISSION_DENIED` if a `student_id` is specified, and the requesting user is not permitted to view guardian information for that student, if `"-"` is specified as the `student_id` and the user is not a domain administrator, if guardians are not enabled for the domain in question, if the `invited_email_address` filter is set by a user who is not a domain administrator, or for other access errors. * `INVALID_ARGUMENT` if a `student_id` is specified, but its format cannot be recognized (it is not an email address, nor a `student_id` from the API, nor the literal string `me`). May also be returned if an invalid `page_token` is provided. * `NOT_FOUND` if a `student_id` is specified, and its format can be recognized, but Classroom has no record of that student.
     * @param {string} params.invitedEmailAddress - Filter results by the email address that the original invitation was sent to, resulting in this guardian link. This filter can only be used by domain administrators.
     * @param {integer} params.pageSize - Maximum number of items to return. Zero or unspecified indicates that the server may assign a maximum. The server may return fewer than the specified number of results.
     * @param {string} params.pageToken - nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token.
     * @param {string} params.studentId - (Required) Filter results by the student who the guardian is linked to. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user * the string literal `"-"`, indicating that results should be returned for all students that the requesting user has access to view.
     * @return {object} The API response object.
     */
    this.userProfiles.guardians.list = (params) => this._makeRequest('v1/userProfiles/{studentId}/guardians', 'GET', params);

    /**
     * Returns a specific guardian. This method returns the following error codes: * `PERMISSION_DENIED` if no user that matches the provided `student_id` is visible to the requesting user, if the requesting user is not permitted to view guardian information for the student identified by the `student_id`, if guardians are not enabled for the domain in question, or for other access errors. * `INVALID_ARGUMENT` if a `student_id` is specified, but its format cannot be recognized (it is not an email address, nor a `student_id` from the API, nor the literal string `me`). * `NOT_FOUND` if the requesting user is permitted to view guardians for the requested `student_id`, but no `Guardian` record exists for that student that matches the provided `guardian_id`.
     * @param {string} params.guardianId - (Required) The `id` field from a `Guardian`.
     * @param {string} params.studentId - (Required) The student whose guardian is being requested. One of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user
     * @return {object} The API response object.
     */
    this.userProfiles.guardians.get = (params) => this._makeRequest('v1/userProfiles/{studentId}/guardians/{guardianId}', 'GET', params);

    /**
     * Deletes a guardian. The guardian will no longer receive guardian notifications and the guardian will no longer be accessible via the API. This method returns the following error codes: * `PERMISSION_DENIED` if no user that matches the provided `student_id` is visible to the requesting user, if the requesting user is not permitted to manage guardians for the student identified by the `student_id`, if guardians are not enabled for the domain in question, or for other access errors. * `INVALID_ARGUMENT` if a `student_id` is specified, but its format cannot be recognized (it is not an email address, nor a `student_id` from the API). * `NOT_FOUND` if the requesting user is permitted to modify guardians for the requested `student_id`, but no `Guardian` record exists for that student with the provided `guardian_id`.
     * @param {string} params.guardianId - (Required) The `id` field from a `Guardian`.
     * @param {string} params.studentId - (Required) The student whose guardian is to be deleted. One of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user
     * @return {object} The API response object.
     */
    this.userProfiles.guardians.delete = (params) => this._makeRequest('v1/userProfiles/{studentId}/guardians/{guardianId}', 'DELETE', params);

    this.invitations = {};

    /**
     * Creates an invitation. Only one invitation for a user and course may exist at a time. Delete and re-create an invitation to make changes. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to create invitations for this course or for access errors. * `NOT_FOUND` if the course or the user does not exist. * `FAILED_PRECONDITION`: * if the requested user's account is disabled. * if the user already has this role or a role with greater permissions. * for the following request errors: * IneligibleOwner * `ALREADY_EXISTS` if an invitation for the specified user and course already exists.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.invitations.create = (params) => this._makeRequest('v1/invitations', 'POST', params);

    /**
     * Returns an invitation. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to view the requested invitation or for access errors. * `NOT_FOUND` if no invitation exists with the requested ID.
     * @param {string} params.id - (Required) Identifier of the invitation to return.
     * @return {object} The API response object.
     */
    this.invitations.get = (params) => this._makeRequest('v1/invitations/{id}', 'GET', params);

    /**
     * Deletes an invitation. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to delete the requested invitation or for access errors. * `NOT_FOUND` if no invitation exists with the requested ID.
     * @param {string} params.id - (Required) Identifier of the invitation to delete.
     * @return {object} The API response object.
     */
    this.invitations.delete = (params) => this._makeRequest('v1/invitations/{id}', 'DELETE', params);

    /**
     * Returns a list of invitations that the requesting user is permitted to view, restricted to those that match the list request. *Note:* At least one of `user_id` or `course_id` must be supplied. Both fields can be supplied. This method returns the following error codes: * `PERMISSION_DENIED` for access errors.
     * @param {string} params.courseId - Restricts returned invitations to those for a course with the specified identifier.
     * @param {integer} params.pageSize - Maximum number of items to return. The default is 500 if unspecified or `0`. The server may return fewer than the specified number of results.
     * @param {string} params.pageToken - nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token.
     * @param {string} params.userId - Restricts returned invitations to those for a specific user. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user
     * @return {object} The API response object.
     */
    this.invitations.list = (params) => this._makeRequest('v1/invitations', 'GET', params);

    /**
     * Accepts an invitation, removing it and adding the invited user to the teachers or students (as appropriate) of the specified course. Only the invited user may accept an invitation. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to accept the requested invitation or for access errors. * `FAILED_PRECONDITION` for the following request errors: * CourseMemberLimitReached * CourseNotModifiable * CourseTeacherLimitReached * UserGroupsMembershipLimitReached * `NOT_FOUND` if no invitation exists with the requested ID.
     * @param {string} params.id - (Required) Identifier of the invitation to accept.
     * @return {object} The API response object.
     */
    this.invitations.accept = (params) => this._makeRequest('v1/invitations/{id}:accept', 'POST', params);

    this.registrations = {};

    /**
     * Creates a `Registration`, causing Classroom to start sending notifications from the provided `feed` to the destination provided in `cloudPubSubTopic`. Returns the created `Registration`. Currently, this will be the same as the argument, but with server-assigned fields such as `expiry_time` and `id` filled in. Note that any value specified for the `expiry_time` or `id` fields will be ignored. While Classroom may validate the `cloudPubSubTopic` and return errors on a best effort basis, it is the caller's responsibility to ensure that it exists and that Classroom has permission to publish to it. This method may return the following error codes: * `PERMISSION_DENIED` if: * the authenticated user does not have permission to receive notifications from the requested field; or * the current user has not granted access to the current Cloud project with the appropriate scope for the requested feed. Note that domain-wide delegation of authority is not currently supported for this purpose. If the request has the appropriate scope, but no grant exists, a Request Errors is returned. * another access error is encountered. * `INVALID_ARGUMENT` if: * no `cloudPubsubTopic` is specified, or the specified `cloudPubsubTopic` is not valid; or * no `feed` is specified, or the specified `feed` is not valid. * `NOT_FOUND` if: * the specified `feed` cannot be located, or the requesting user does not have permission to determine whether or not it exists; or * the specified `cloudPubsubTopic` cannot be located, or Classroom has not been granted permission to publish to it.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.registrations.create = (params) => this._makeRequest('v1/registrations', 'POST', params);

    /**
     * Deletes a `Registration`, causing Classroom to stop sending notifications for that `Registration`.
     * @param {string} params.registrationId - (Required) The `registration_id` of the `Registration` to be deleted.
     * @return {object} The API response object.
     */
    this.registrations.delete = (params) => this._makeRequest('v1/registrations/{registrationId}', 'DELETE', params);
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
