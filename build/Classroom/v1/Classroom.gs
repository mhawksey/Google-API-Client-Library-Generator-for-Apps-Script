
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
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://classroom.googleapis.com/';
    this._servicePath = '';


    this.courses = {};
    this.courses.updateGradingPeriodSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/courses/{courseId}/gradingPeriodSettings', 'PATCH', apiParams, clientConfig);
    this.courses.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/courses/{id}', 'PUT', apiParams, clientConfig);
    this.courses.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/courses/{id}', 'GET', apiParams, clientConfig);
    this.courses.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/courses/{id}', 'PATCH', apiParams, clientConfig);
    this.courses.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/courses/{id}', 'DELETE', apiParams, clientConfig);
    this.courses.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/courses', 'GET', apiParams, clientConfig);
    this.courses.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/courses', 'POST', apiParams, clientConfig);
    this.courses.getGradingPeriodSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/courses/{courseId}/gradingPeriodSettings', 'GET', apiParams, clientConfig);

    this.courses.aliases = {};
    this.courses.aliases.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/courses/{courseId}/aliases', 'POST', apiParams, clientConfig);
    this.courses.aliases.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/courses/{courseId}/aliases', 'GET', apiParams, clientConfig);
    this.courses.aliases.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/courses/{courseId}/aliases/{alias}', 'DELETE', apiParams, clientConfig);

    this.courses.courseWorkMaterials = {};
    this.courses.courseWorkMaterials.getAddOnContext = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/courses/{courseId}/courseWorkMaterials/{itemId}/addOnContext', 'GET', apiParams, clientConfig);
    this.courses.courseWorkMaterials.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/courses/{courseId}/courseWorkMaterials/{id}', 'GET', apiParams, clientConfig);
    this.courses.courseWorkMaterials.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/courses/{courseId}/courseWorkMaterials', 'POST', apiParams, clientConfig);
    this.courses.courseWorkMaterials.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/courses/{courseId}/courseWorkMaterials/{id}', 'PATCH', apiParams, clientConfig);
    this.courses.courseWorkMaterials.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/courses/{courseId}/courseWorkMaterials', 'GET', apiParams, clientConfig);
    this.courses.courseWorkMaterials.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/courses/{courseId}/courseWorkMaterials/{id}', 'DELETE', apiParams, clientConfig);

    this.courses.courseWorkMaterials.addOnAttachments = {};
    this.courses.courseWorkMaterials.addOnAttachments.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/courses/{courseId}/courseWorkMaterials/{itemId}/addOnAttachments', 'GET', apiParams, clientConfig);
    this.courses.courseWorkMaterials.addOnAttachments.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/courses/{courseId}/courseWorkMaterials/{itemId}/addOnAttachments/{attachmentId}', 'GET', apiParams, clientConfig);
    this.courses.courseWorkMaterials.addOnAttachments.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/courses/{courseId}/courseWorkMaterials/{itemId}/addOnAttachments', 'POST', apiParams, clientConfig);
    this.courses.courseWorkMaterials.addOnAttachments.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/courses/{courseId}/courseWorkMaterials/{itemId}/addOnAttachments/{attachmentId}', 'PATCH', apiParams, clientConfig);
    this.courses.courseWorkMaterials.addOnAttachments.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/courses/{courseId}/courseWorkMaterials/{itemId}/addOnAttachments/{attachmentId}', 'DELETE', apiParams, clientConfig);

    this.courses.students = {};
    this.courses.students.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/courses/{courseId}/students', 'GET', apiParams, clientConfig);
    this.courses.students.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/courses/{courseId}/students', 'POST', apiParams, clientConfig);
    this.courses.students.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/courses/{courseId}/students/{userId}', 'DELETE', apiParams, clientConfig);
    this.courses.students.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/courses/{courseId}/students/{userId}', 'GET', apiParams, clientConfig);

    this.courses.teachers = {};
    this.courses.teachers.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/courses/{courseId}/teachers/{userId}', 'GET', apiParams, clientConfig);
    this.courses.teachers.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/courses/{courseId}/teachers', 'POST', apiParams, clientConfig);
    this.courses.teachers.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/courses/{courseId}/teachers', 'GET', apiParams, clientConfig);
    this.courses.teachers.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/courses/{courseId}/teachers/{userId}', 'DELETE', apiParams, clientConfig);

    this.courses.courseWork = {};
    this.courses.courseWork.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/courses/{courseId}/courseWork/{id}', 'PATCH', apiParams, clientConfig);
    this.courses.courseWork.modifyAssignees = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/courses/{courseId}/courseWork/{id}:modifyAssignees', 'POST', apiParams, clientConfig);
    this.courses.courseWork.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/courses/{courseId}/courseWork/{id}', 'GET', apiParams, clientConfig);
    this.courses.courseWork.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/courses/{courseId}/courseWork', 'POST', apiParams, clientConfig);
    this.courses.courseWork.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/courses/{courseId}/courseWork', 'GET', apiParams, clientConfig);
    this.courses.courseWork.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/courses/{courseId}/courseWork/{id}', 'DELETE', apiParams, clientConfig);
    this.courses.courseWork.getAddOnContext = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/courses/{courseId}/courseWork/{itemId}/addOnContext', 'GET', apiParams, clientConfig);
    this.courses.courseWork.updateRubric = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/courses/{courseId}/courseWork/{courseWorkId}/rubric', 'PATCH', apiParams, clientConfig);

    this.courses.courseWork.studentSubmissions = {};
    this.courses.courseWork.studentSubmissions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/courses/{courseId}/courseWork/{courseWorkId}/studentSubmissions', 'GET', apiParams, clientConfig);
    this.courses.courseWork.studentSubmissions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/courses/{courseId}/courseWork/{courseWorkId}/studentSubmissions/{id}', 'GET', apiParams, clientConfig);
    this.courses.courseWork.studentSubmissions.modifyAttachments = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/courses/{courseId}/courseWork/{courseWorkId}/studentSubmissions/{id}:modifyAttachments', 'POST', apiParams, clientConfig);
    this.courses.courseWork.studentSubmissions.return = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/courses/{courseId}/courseWork/{courseWorkId}/studentSubmissions/{id}:return', 'POST', apiParams, clientConfig);
    this.courses.courseWork.studentSubmissions.turnIn = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/courses/{courseId}/courseWork/{courseWorkId}/studentSubmissions/{id}:turnIn', 'POST', apiParams, clientConfig);
    this.courses.courseWork.studentSubmissions.reclaim = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/courses/{courseId}/courseWork/{courseWorkId}/studentSubmissions/{id}:reclaim', 'POST', apiParams, clientConfig);
    this.courses.courseWork.studentSubmissions.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/courses/{courseId}/courseWork/{courseWorkId}/studentSubmissions/{id}', 'PATCH', apiParams, clientConfig);

    this.courses.courseWork.rubrics = {};
    this.courses.courseWork.rubrics.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/courses/{courseId}/courseWork/{courseWorkId}/rubrics/{id}', 'GET', apiParams, clientConfig);
    this.courses.courseWork.rubrics.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/courses/{courseId}/courseWork/{courseWorkId}/rubrics/{id}', 'PATCH', apiParams, clientConfig);
    this.courses.courseWork.rubrics.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/courses/{courseId}/courseWork/{courseWorkId}/rubrics', 'POST', apiParams, clientConfig);
    this.courses.courseWork.rubrics.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/courses/{courseId}/courseWork/{courseWorkId}/rubrics', 'GET', apiParams, clientConfig);
    this.courses.courseWork.rubrics.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/courses/{courseId}/courseWork/{courseWorkId}/rubrics/{id}', 'DELETE', apiParams, clientConfig);

    this.courses.courseWork.addOnAttachments = {};
    this.courses.courseWork.addOnAttachments.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/courses/{courseId}/courseWork/{itemId}/addOnAttachments/{attachmentId}', 'DELETE', apiParams, clientConfig);
    this.courses.courseWork.addOnAttachments.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/courses/{courseId}/courseWork/{itemId}/addOnAttachments/{attachmentId}', 'GET', apiParams, clientConfig);
    this.courses.courseWork.addOnAttachments.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/courses/{courseId}/courseWork/{itemId}/addOnAttachments/{attachmentId}', 'PATCH', apiParams, clientConfig);
    this.courses.courseWork.addOnAttachments.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/courses/{courseId}/courseWork/{itemId}/addOnAttachments', 'POST', apiParams, clientConfig);
    this.courses.courseWork.addOnAttachments.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/courses/{courseId}/courseWork/{itemId}/addOnAttachments', 'GET', apiParams, clientConfig);

    this.courses.courseWork.addOnAttachments.studentSubmissions = {};
    this.courses.courseWork.addOnAttachments.studentSubmissions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/courses/{courseId}/courseWork/{itemId}/addOnAttachments/{attachmentId}/studentSubmissions/{submissionId}', 'GET', apiParams, clientConfig);
    this.courses.courseWork.addOnAttachments.studentSubmissions.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/courses/{courseId}/courseWork/{itemId}/addOnAttachments/{attachmentId}/studentSubmissions/{submissionId}', 'PATCH', apiParams, clientConfig);

    this.courses.announcements = {};
    this.courses.announcements.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/courses/{courseId}/announcements', 'GET', apiParams, clientConfig);
    this.courses.announcements.getAddOnContext = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/courses/{courseId}/announcements/{itemId}/addOnContext', 'GET', apiParams, clientConfig);
    this.courses.announcements.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/courses/{courseId}/announcements/{id}', 'GET', apiParams, clientConfig);
    this.courses.announcements.modifyAssignees = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/courses/{courseId}/announcements/{id}:modifyAssignees', 'POST', apiParams, clientConfig);
    this.courses.announcements.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/courses/{courseId}/announcements/{id}', 'PATCH', apiParams, clientConfig);
    this.courses.announcements.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/courses/{courseId}/announcements', 'POST', apiParams, clientConfig);
    this.courses.announcements.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/courses/{courseId}/announcements/{id}', 'DELETE', apiParams, clientConfig);

    this.courses.announcements.addOnAttachments = {};
    this.courses.announcements.addOnAttachments.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/courses/{courseId}/announcements/{itemId}/addOnAttachments/{attachmentId}', 'PATCH', apiParams, clientConfig);
    this.courses.announcements.addOnAttachments.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/courses/{courseId}/announcements/{itemId}/addOnAttachments/{attachmentId}', 'DELETE', apiParams, clientConfig);
    this.courses.announcements.addOnAttachments.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/courses/{courseId}/announcements/{itemId}/addOnAttachments/{attachmentId}', 'GET', apiParams, clientConfig);
    this.courses.announcements.addOnAttachments.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/courses/{courseId}/announcements/{itemId}/addOnAttachments', 'GET', apiParams, clientConfig);
    this.courses.announcements.addOnAttachments.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/courses/{courseId}/announcements/{itemId}/addOnAttachments', 'POST', apiParams, clientConfig);

    this.courses.topics = {};
    this.courses.topics.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/courses/{courseId}/topics', 'GET', apiParams, clientConfig);
    this.courses.topics.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/courses/{courseId}/topics/{id}', 'PATCH', apiParams, clientConfig);
    this.courses.topics.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/courses/{courseId}/topics/{id}', 'GET', apiParams, clientConfig);
    this.courses.topics.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/courses/{courseId}/topics/{id}', 'DELETE', apiParams, clientConfig);
    this.courses.topics.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/courses/{courseId}/topics', 'POST', apiParams, clientConfig);

    this.courses.posts = {};
    this.courses.posts.getAddOnContext = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/courses/{courseId}/posts/{postId}/addOnContext', 'GET', apiParams, clientConfig);

    this.courses.posts.addOnAttachments = {};
    this.courses.posts.addOnAttachments.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/courses/{courseId}/posts/{postId}/addOnAttachments/{attachmentId}', 'GET', apiParams, clientConfig);
    this.courses.posts.addOnAttachments.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/courses/{courseId}/posts/{postId}/addOnAttachments/{attachmentId}', 'PATCH', apiParams, clientConfig);
    this.courses.posts.addOnAttachments.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/courses/{courseId}/posts/{postId}/addOnAttachments', 'POST', apiParams, clientConfig);
    this.courses.posts.addOnAttachments.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/courses/{courseId}/posts/{postId}/addOnAttachments/{attachmentId}', 'DELETE', apiParams, clientConfig);
    this.courses.posts.addOnAttachments.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/courses/{courseId}/posts/{postId}/addOnAttachments', 'GET', apiParams, clientConfig);

    this.courses.posts.addOnAttachments.studentSubmissions = {};
    this.courses.posts.addOnAttachments.studentSubmissions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/courses/{courseId}/posts/{postId}/addOnAttachments/{attachmentId}/studentSubmissions/{submissionId}', 'GET', apiParams, clientConfig);
    this.courses.posts.addOnAttachments.studentSubmissions.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/courses/{courseId}/posts/{postId}/addOnAttachments/{attachmentId}/studentSubmissions/{submissionId}', 'PATCH', apiParams, clientConfig);

    this.userProfiles = {};
    this.userProfiles.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/userProfiles/{userId}', 'GET', apiParams, clientConfig);

    this.userProfiles.guardians = {};
    this.userProfiles.guardians.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/userProfiles/{studentId}/guardians/{guardianId}', 'DELETE', apiParams, clientConfig);
    this.userProfiles.guardians.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/userProfiles/{studentId}/guardians/{guardianId}', 'GET', apiParams, clientConfig);
    this.userProfiles.guardians.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/userProfiles/{studentId}/guardians', 'GET', apiParams, clientConfig);

    this.userProfiles.guardianInvitations = {};
    this.userProfiles.guardianInvitations.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/userProfiles/{studentId}/guardianInvitations/{invitationId}', 'PATCH', apiParams, clientConfig);
    this.userProfiles.guardianInvitations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/userProfiles/{studentId}/guardianInvitations/{invitationId}', 'GET', apiParams, clientConfig);
    this.userProfiles.guardianInvitations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/userProfiles/{studentId}/guardianInvitations', 'GET', apiParams, clientConfig);
    this.userProfiles.guardianInvitations.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/userProfiles/{studentId}/guardianInvitations', 'POST', apiParams, clientConfig);

    this.registrations = {};
    this.registrations.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/registrations', 'POST', apiParams, clientConfig);
    this.registrations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/registrations/{registrationId}', 'DELETE', apiParams, clientConfig);

    this.invitations = {};
    this.invitations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/invitations', 'GET', apiParams, clientConfig);
    this.invitations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/invitations/{id}', 'GET', apiParams, clientConfig);
    this.invitations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/invitations/{id}', 'DELETE', apiParams, clientConfig);
    this.invitations.accept = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/invitations/{id}:accept', 'POST', apiParams, clientConfig);
    this.invitations.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/invitations', 'POST', apiParams, clientConfig);
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
