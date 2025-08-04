
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
    this.courses.create = (params) => this._makeRequest('v1/courses', 'POST', params);
    this.courses.get = (params) => this._makeRequest('v1/courses/{id}', 'GET', params);
    this.courses.update = (params) => this._makeRequest('v1/courses/{id}', 'PUT', params);
    this.courses.patch = (params) => this._makeRequest('v1/courses/{id}', 'PATCH', params);
    this.courses.delete = (params) => this._makeRequest('v1/courses/{id}', 'DELETE', params);
    this.courses.list = (params) => this._makeRequest('v1/courses', 'GET', params);
    this.courses.getGradingPeriodSettings = (params) => this._makeRequest('v1/courses/{courseId}/gradingPeriodSettings', 'GET', params);
    this.courses.updateGradingPeriodSettings = (params) => this._makeRequest('v1/courses/{courseId}/gradingPeriodSettings', 'PATCH', params);

    this.courses.aliases = {};
    this.courses.aliases.create = (params) => this._makeRequest('v1/courses/{courseId}/aliases', 'POST', params);
    this.courses.aliases.delete = (params) => this._makeRequest('v1/courses/{courseId}/aliases/{alias}', 'DELETE', params);
    this.courses.aliases.list = (params) => this._makeRequest('v1/courses/{courseId}/aliases', 'GET', params);

    this.courses.courseWork = {};
    this.courses.courseWork.create = (params) => this._makeRequest('v1/courses/{courseId}/courseWork', 'POST', params);
    this.courses.courseWork.patch = (params) => this._makeRequest('v1/courses/{courseId}/courseWork/{id}', 'PATCH', params);
    this.courses.courseWork.delete = (params) => this._makeRequest('v1/courses/{courseId}/courseWork/{id}', 'DELETE', params);
    this.courses.courseWork.get = (params) => this._makeRequest('v1/courses/{courseId}/courseWork/{id}', 'GET', params);
    this.courses.courseWork.list = (params) => this._makeRequest('v1/courses/{courseId}/courseWork', 'GET', params);
    this.courses.courseWork.modifyAssignees = (params) => this._makeRequest('v1/courses/{courseId}/courseWork/{id}:modifyAssignees', 'POST', params);
    this.courses.courseWork.getAddOnContext = (params) => this._makeRequest('v1/courses/{courseId}/courseWork/{itemId}/addOnContext', 'GET', params);
    this.courses.courseWork.updateRubric = (params) => this._makeRequest('v1/courses/{courseId}/courseWork/{courseWorkId}/rubric', 'PATCH', params);

    this.courses.courseWork.studentSubmissions = {};
    this.courses.courseWork.studentSubmissions.get = (params) => this._makeRequest('v1/courses/{courseId}/courseWork/{courseWorkId}/studentSubmissions/{id}', 'GET', params);
    this.courses.courseWork.studentSubmissions.patch = (params) => this._makeRequest('v1/courses/{courseId}/courseWork/{courseWorkId}/studentSubmissions/{id}', 'PATCH', params);
    this.courses.courseWork.studentSubmissions.list = (params) => this._makeRequest('v1/courses/{courseId}/courseWork/{courseWorkId}/studentSubmissions', 'GET', params);
    this.courses.courseWork.studentSubmissions.turnIn = (params) => this._makeRequest('v1/courses/{courseId}/courseWork/{courseWorkId}/studentSubmissions/{id}:turnIn', 'POST', params);
    this.courses.courseWork.studentSubmissions.reclaim = (params) => this._makeRequest('v1/courses/{courseId}/courseWork/{courseWorkId}/studentSubmissions/{id}:reclaim', 'POST', params);
    this.courses.courseWork.studentSubmissions.return = (params) => this._makeRequest('v1/courses/{courseId}/courseWork/{courseWorkId}/studentSubmissions/{id}:return', 'POST', params);
    this.courses.courseWork.studentSubmissions.modifyAttachments = (params) => this._makeRequest('v1/courses/{courseId}/courseWork/{courseWorkId}/studentSubmissions/{id}:modifyAttachments', 'POST', params);

    this.courses.courseWork.addOnAttachments = {};
    this.courses.courseWork.addOnAttachments.get = (params) => this._makeRequest('v1/courses/{courseId}/courseWork/{itemId}/addOnAttachments/{attachmentId}', 'GET', params);
    this.courses.courseWork.addOnAttachments.list = (params) => this._makeRequest('v1/courses/{courseId}/courseWork/{itemId}/addOnAttachments', 'GET', params);
    this.courses.courseWork.addOnAttachments.create = (params) => this._makeRequest('v1/courses/{courseId}/courseWork/{itemId}/addOnAttachments', 'POST', params);
    this.courses.courseWork.addOnAttachments.patch = (params) => this._makeRequest('v1/courses/{courseId}/courseWork/{itemId}/addOnAttachments/{attachmentId}', 'PATCH', params);
    this.courses.courseWork.addOnAttachments.delete = (params) => this._makeRequest('v1/courses/{courseId}/courseWork/{itemId}/addOnAttachments/{attachmentId}', 'DELETE', params);

    this.courses.courseWork.addOnAttachments.studentSubmissions = {};
    this.courses.courseWork.addOnAttachments.studentSubmissions.patch = (params) => this._makeRequest('v1/courses/{courseId}/courseWork/{itemId}/addOnAttachments/{attachmentId}/studentSubmissions/{submissionId}', 'PATCH', params);
    this.courses.courseWork.addOnAttachments.studentSubmissions.get = (params) => this._makeRequest('v1/courses/{courseId}/courseWork/{itemId}/addOnAttachments/{attachmentId}/studentSubmissions/{submissionId}', 'GET', params);

    this.courses.courseWork.rubrics = {};
    this.courses.courseWork.rubrics.patch = (params) => this._makeRequest('v1/courses/{courseId}/courseWork/{courseWorkId}/rubrics/{id}', 'PATCH', params);
    this.courses.courseWork.rubrics.create = (params) => this._makeRequest('v1/courses/{courseId}/courseWork/{courseWorkId}/rubrics', 'POST', params);
    this.courses.courseWork.rubrics.get = (params) => this._makeRequest('v1/courses/{courseId}/courseWork/{courseWorkId}/rubrics/{id}', 'GET', params);
    this.courses.courseWork.rubrics.list = (params) => this._makeRequest('v1/courses/{courseId}/courseWork/{courseWorkId}/rubrics', 'GET', params);
    this.courses.courseWork.rubrics.delete = (params) => this._makeRequest('v1/courses/{courseId}/courseWork/{courseWorkId}/rubrics/{id}', 'DELETE', params);

    this.courses.announcements = {};
    this.courses.announcements.delete = (params) => this._makeRequest('v1/courses/{courseId}/announcements/{id}', 'DELETE', params);
    this.courses.announcements.create = (params) => this._makeRequest('v1/courses/{courseId}/announcements', 'POST', params);
    this.courses.announcements.get = (params) => this._makeRequest('v1/courses/{courseId}/announcements/{id}', 'GET', params);
    this.courses.announcements.list = (params) => this._makeRequest('v1/courses/{courseId}/announcements', 'GET', params);
    this.courses.announcements.patch = (params) => this._makeRequest('v1/courses/{courseId}/announcements/{id}', 'PATCH', params);
    this.courses.announcements.modifyAssignees = (params) => this._makeRequest('v1/courses/{courseId}/announcements/{id}:modifyAssignees', 'POST', params);
    this.courses.announcements.getAddOnContext = (params) => this._makeRequest('v1/courses/{courseId}/announcements/{itemId}/addOnContext', 'GET', params);

    this.courses.announcements.addOnAttachments = {};
    this.courses.announcements.addOnAttachments.get = (params) => this._makeRequest('v1/courses/{courseId}/announcements/{itemId}/addOnAttachments/{attachmentId}', 'GET', params);
    this.courses.announcements.addOnAttachments.list = (params) => this._makeRequest('v1/courses/{courseId}/announcements/{itemId}/addOnAttachments', 'GET', params);
    this.courses.announcements.addOnAttachments.create = (params) => this._makeRequest('v1/courses/{courseId}/announcements/{itemId}/addOnAttachments', 'POST', params);
    this.courses.announcements.addOnAttachments.patch = (params) => this._makeRequest('v1/courses/{courseId}/announcements/{itemId}/addOnAttachments/{attachmentId}', 'PATCH', params);
    this.courses.announcements.addOnAttachments.delete = (params) => this._makeRequest('v1/courses/{courseId}/announcements/{itemId}/addOnAttachments/{attachmentId}', 'DELETE', params);

    this.courses.courseWorkMaterials = {};
    this.courses.courseWorkMaterials.create = (params) => this._makeRequest('v1/courses/{courseId}/courseWorkMaterials', 'POST', params);
    this.courses.courseWorkMaterials.get = (params) => this._makeRequest('v1/courses/{courseId}/courseWorkMaterials/{id}', 'GET', params);
    this.courses.courseWorkMaterials.list = (params) => this._makeRequest('v1/courses/{courseId}/courseWorkMaterials', 'GET', params);
    this.courses.courseWorkMaterials.patch = (params) => this._makeRequest('v1/courses/{courseId}/courseWorkMaterials/{id}', 'PATCH', params);
    this.courses.courseWorkMaterials.delete = (params) => this._makeRequest('v1/courses/{courseId}/courseWorkMaterials/{id}', 'DELETE', params);
    this.courses.courseWorkMaterials.getAddOnContext = (params) => this._makeRequest('v1/courses/{courseId}/courseWorkMaterials/{itemId}/addOnContext', 'GET', params);

    this.courses.courseWorkMaterials.addOnAttachments = {};
    this.courses.courseWorkMaterials.addOnAttachments.get = (params) => this._makeRequest('v1/courses/{courseId}/courseWorkMaterials/{itemId}/addOnAttachments/{attachmentId}', 'GET', params);
    this.courses.courseWorkMaterials.addOnAttachments.list = (params) => this._makeRequest('v1/courses/{courseId}/courseWorkMaterials/{itemId}/addOnAttachments', 'GET', params);
    this.courses.courseWorkMaterials.addOnAttachments.create = (params) => this._makeRequest('v1/courses/{courseId}/courseWorkMaterials/{itemId}/addOnAttachments', 'POST', params);
    this.courses.courseWorkMaterials.addOnAttachments.patch = (params) => this._makeRequest('v1/courses/{courseId}/courseWorkMaterials/{itemId}/addOnAttachments/{attachmentId}', 'PATCH', params);
    this.courses.courseWorkMaterials.addOnAttachments.delete = (params) => this._makeRequest('v1/courses/{courseId}/courseWorkMaterials/{itemId}/addOnAttachments/{attachmentId}', 'DELETE', params);

    this.courses.topics = {};
    this.courses.topics.create = (params) => this._makeRequest('v1/courses/{courseId}/topics', 'POST', params);
    this.courses.topics.patch = (params) => this._makeRequest('v1/courses/{courseId}/topics/{id}', 'PATCH', params);
    this.courses.topics.delete = (params) => this._makeRequest('v1/courses/{courseId}/topics/{id}', 'DELETE', params);
    this.courses.topics.get = (params) => this._makeRequest('v1/courses/{courseId}/topics/{id}', 'GET', params);
    this.courses.topics.list = (params) => this._makeRequest('v1/courses/{courseId}/topics', 'GET', params);

    this.courses.posts = {};
    this.courses.posts.getAddOnContext = (params) => this._makeRequest('v1/courses/{courseId}/posts/{postId}/addOnContext', 'GET', params);

    this.courses.posts.addOnAttachments = {};
    this.courses.posts.addOnAttachments.get = (params) => this._makeRequest('v1/courses/{courseId}/posts/{postId}/addOnAttachments/{attachmentId}', 'GET', params);
    this.courses.posts.addOnAttachments.list = (params) => this._makeRequest('v1/courses/{courseId}/posts/{postId}/addOnAttachments', 'GET', params);
    this.courses.posts.addOnAttachments.create = (params) => this._makeRequest('v1/courses/{courseId}/posts/{postId}/addOnAttachments', 'POST', params);
    this.courses.posts.addOnAttachments.patch = (params) => this._makeRequest('v1/courses/{courseId}/posts/{postId}/addOnAttachments/{attachmentId}', 'PATCH', params);
    this.courses.posts.addOnAttachments.delete = (params) => this._makeRequest('v1/courses/{courseId}/posts/{postId}/addOnAttachments/{attachmentId}', 'DELETE', params);

    this.courses.posts.addOnAttachments.studentSubmissions = {};
    this.courses.posts.addOnAttachments.studentSubmissions.patch = (params) => this._makeRequest('v1/courses/{courseId}/posts/{postId}/addOnAttachments/{attachmentId}/studentSubmissions/{submissionId}', 'PATCH', params);
    this.courses.posts.addOnAttachments.studentSubmissions.get = (params) => this._makeRequest('v1/courses/{courseId}/posts/{postId}/addOnAttachments/{attachmentId}/studentSubmissions/{submissionId}', 'GET', params);

    this.courses.teachers = {};
    this.courses.teachers.create = (params) => this._makeRequest('v1/courses/{courseId}/teachers', 'POST', params);
    this.courses.teachers.get = (params) => this._makeRequest('v1/courses/{courseId}/teachers/{userId}', 'GET', params);
    this.courses.teachers.delete = (params) => this._makeRequest('v1/courses/{courseId}/teachers/{userId}', 'DELETE', params);
    this.courses.teachers.list = (params) => this._makeRequest('v1/courses/{courseId}/teachers', 'GET', params);

    this.courses.students = {};
    this.courses.students.create = (params) => this._makeRequest('v1/courses/{courseId}/students', 'POST', params);
    this.courses.students.get = (params) => this._makeRequest('v1/courses/{courseId}/students/{userId}', 'GET', params);
    this.courses.students.delete = (params) => this._makeRequest('v1/courses/{courseId}/students/{userId}', 'DELETE', params);
    this.courses.students.list = (params) => this._makeRequest('v1/courses/{courseId}/students', 'GET', params);

    this.userProfiles = {};
    this.userProfiles.get = (params) => this._makeRequest('v1/userProfiles/{userId}', 'GET', params);

    this.userProfiles.guardianInvitations = {};
    this.userProfiles.guardianInvitations.list = (params) => this._makeRequest('v1/userProfiles/{studentId}/guardianInvitations', 'GET', params);
    this.userProfiles.guardianInvitations.get = (params) => this._makeRequest('v1/userProfiles/{studentId}/guardianInvitations/{invitationId}', 'GET', params);
    this.userProfiles.guardianInvitations.create = (params) => this._makeRequest('v1/userProfiles/{studentId}/guardianInvitations', 'POST', params);
    this.userProfiles.guardianInvitations.patch = (params) => this._makeRequest('v1/userProfiles/{studentId}/guardianInvitations/{invitationId}', 'PATCH', params);

    this.userProfiles.guardians = {};
    this.userProfiles.guardians.list = (params) => this._makeRequest('v1/userProfiles/{studentId}/guardians', 'GET', params);
    this.userProfiles.guardians.get = (params) => this._makeRequest('v1/userProfiles/{studentId}/guardians/{guardianId}', 'GET', params);
    this.userProfiles.guardians.delete = (params) => this._makeRequest('v1/userProfiles/{studentId}/guardians/{guardianId}', 'DELETE', params);

    this.invitations = {};
    this.invitations.create = (params) => this._makeRequest('v1/invitations', 'POST', params);
    this.invitations.get = (params) => this._makeRequest('v1/invitations/{id}', 'GET', params);
    this.invitations.delete = (params) => this._makeRequest('v1/invitations/{id}', 'DELETE', params);
    this.invitations.list = (params) => this._makeRequest('v1/invitations', 'GET', params);
    this.invitations.accept = (params) => this._makeRequest('v1/invitations/{id}:accept', 'POST', params);

    this.registrations = {};
    this.registrations.create = (params) => this._makeRequest('v1/registrations', 'POST', params);
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
