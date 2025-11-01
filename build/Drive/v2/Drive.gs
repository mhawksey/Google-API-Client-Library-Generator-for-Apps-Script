
/**
 * Google Apps Script client library for the Google Drive API
 * Documentation URL: https://developers.google.com/workspace/drive/
 * @class
 */
class Drive {
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
    this._servicePath = 'drive/v2/';


    this.properties = {};
    this.properties.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}/properties/{propertyKey}', 'PUT', apiParams, clientConfig);
    this.properties.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}/properties', 'GET', apiParams, clientConfig);
    this.properties.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}/properties', 'POST', apiParams, clientConfig);
    this.properties.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}/properties/{propertyKey}', 'DELETE', apiParams, clientConfig);
    this.properties.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}/properties/{propertyKey}', 'PATCH', apiParams, clientConfig);
    this.properties.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}/properties/{propertyKey}', 'GET', apiParams, clientConfig);

    this.files = {};
    this.files.generateIds = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/generateIds', 'GET', apiParams, clientConfig);
    this.files.update = async (apiParams = {}, clientConfig = {}) => {
      // If apiParams.media is provided, use the upload path; otherwise, use the standard path.
      const path = apiParams.media ? '/upload/drive/v2/files/{fileId}' : 'files/{fileId}';
      return this._makeRequest(path, 'PUT', apiParams, clientConfig);
    };
    this.files.insert = async (apiParams = {}, clientConfig = {}) => {
      // If apiParams.media is provided, use the upload path; otherwise, use the standard path.
      const path = apiParams.media ? '/upload/drive/v2/files' : 'files';
      return this._makeRequest(path, 'POST', apiParams, clientConfig);
    };
    this.files.emptyTrash = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/trash', 'DELETE', apiParams, clientConfig);
    this.files.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files', 'GET', apiParams, clientConfig);
    this.files.modifyLabels = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}/modifyLabels', 'POST', apiParams, clientConfig);
    this.files.listLabels = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}/listLabels', 'GET', apiParams, clientConfig);
    this.files.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}', 'PATCH', apiParams, clientConfig);
    this.files.copy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}/copy', 'POST', apiParams, clientConfig);
    this.files.untrash = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}/untrash', 'POST', apiParams, clientConfig);
    this.files.trash = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}/trash', 'POST', apiParams, clientConfig);
    this.files.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}', 'DELETE', apiParams, clientConfig);
    this.files.watch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}/watch', 'POST', apiParams, clientConfig);
    this.files.touch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}/touch', 'POST', apiParams, clientConfig);
    this.files.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}', 'GET', apiParams, clientConfig);
    this.files.export = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}/export', 'GET', apiParams, clientConfig);

    this.changes = {};
    this.changes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('changes', 'GET', apiParams, clientConfig);
    this.changes.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('changes/{changeId}', 'GET', apiParams, clientConfig);
    this.changes.watch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('changes/watch', 'POST', apiParams, clientConfig);
    this.changes.getStartPageToken = async (apiParams = {}, clientConfig = {}) => this._makeRequest('changes/startPageToken', 'GET', apiParams, clientConfig);

    this.replies = {};
    this.replies.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}/comments/{commentId}/replies', 'POST', apiParams, clientConfig);
    this.replies.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}/comments/{commentId}/replies/{replyId}', 'PUT', apiParams, clientConfig);
    this.replies.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}/comments/{commentId}/replies/{replyId}', 'GET', apiParams, clientConfig);
    this.replies.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}/comments/{commentId}/replies/{replyId}', 'DELETE', apiParams, clientConfig);
    this.replies.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}/comments/{commentId}/replies/{replyId}', 'PATCH', apiParams, clientConfig);
    this.replies.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}/comments/{commentId}/replies', 'GET', apiParams, clientConfig);

    this.parents = {};
    this.parents.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}/parents', 'POST', apiParams, clientConfig);
    this.parents.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}/parents', 'GET', apiParams, clientConfig);
    this.parents.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}/parents/{parentId}', 'DELETE', apiParams, clientConfig);
    this.parents.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}/parents/{parentId}', 'GET', apiParams, clientConfig);

    this.revisions = {};
    this.revisions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}/revisions', 'GET', apiParams, clientConfig);
    this.revisions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}/revisions/{revisionId}', 'GET', apiParams, clientConfig);
    this.revisions.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}/revisions/{revisionId}', 'PATCH', apiParams, clientConfig);
    this.revisions.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}/revisions/{revisionId}', 'DELETE', apiParams, clientConfig);
    this.revisions.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}/revisions/{revisionId}', 'PUT', apiParams, clientConfig);

    this.about = {};
    this.about.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('about', 'GET', apiParams, clientConfig);

    this.apps = {};
    this.apps.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('apps/{appId}', 'GET', apiParams, clientConfig);
    this.apps.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('apps', 'GET', apiParams, clientConfig);

    this.permissions = {};
    this.permissions.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}/permissions/{permissionId}', 'PATCH', apiParams, clientConfig);
    this.permissions.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}/permissions/{permissionId}', 'PUT', apiParams, clientConfig);
    this.permissions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}/permissions', 'GET', apiParams, clientConfig);
    this.permissions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}/permissions/{permissionId}', 'GET', apiParams, clientConfig);
    this.permissions.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}/permissions', 'POST', apiParams, clientConfig);
    this.permissions.getIdForEmail = async (apiParams = {}, clientConfig = {}) => this._makeRequest('permissionIds/{email}', 'GET', apiParams, clientConfig);
    this.permissions.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}/permissions/{permissionId}', 'DELETE', apiParams, clientConfig);

    this.children = {};
    this.children.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{folderId}/children/{childId}', 'DELETE', apiParams, clientConfig);
    this.children.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{folderId}/children/{childId}', 'GET', apiParams, clientConfig);
    this.children.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{folderId}/children', 'POST', apiParams, clientConfig);
    this.children.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{folderId}/children', 'GET', apiParams, clientConfig);

    this.channels = {};
    this.channels.stop = async (apiParams = {}, clientConfig = {}) => this._makeRequest('channels/stop', 'POST', apiParams, clientConfig);

    this.comments = {};
    this.comments.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}/comments', 'POST', apiParams, clientConfig);
    this.comments.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}/comments/{commentId}', 'DELETE', apiParams, clientConfig);
    this.comments.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}/comments/{commentId}', 'PUT', apiParams, clientConfig);
    this.comments.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}/comments', 'GET', apiParams, clientConfig);
    this.comments.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}/comments/{commentId}', 'PATCH', apiParams, clientConfig);
    this.comments.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('files/{fileId}/comments/{commentId}', 'GET', apiParams, clientConfig);

    this.drives = {};
    this.drives.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('drives/{driveId}', 'GET', apiParams, clientConfig);
    this.drives.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('drives/{driveId}', 'PUT', apiParams, clientConfig);
    this.drives.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('drives/{driveId}', 'DELETE', apiParams, clientConfig);
    this.drives.unhide = async (apiParams = {}, clientConfig = {}) => this._makeRequest('drives/{driveId}/unhide', 'POST', apiParams, clientConfig);
    this.drives.hide = async (apiParams = {}, clientConfig = {}) => this._makeRequest('drives/{driveId}/hide', 'POST', apiParams, clientConfig);
    this.drives.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('drives', 'GET', apiParams, clientConfig);
    this.drives.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('drives', 'POST', apiParams, clientConfig);

    this.teamdrives = {};
    this.teamdrives.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('teamdrives/{teamDriveId}', 'DELETE', apiParams, clientConfig);
    this.teamdrives.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('teamdrives/{teamDriveId}', 'PUT', apiParams, clientConfig);
    this.teamdrives.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('teamdrives/{teamDriveId}', 'GET', apiParams, clientConfig);
    this.teamdrives.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('teamdrives', 'POST', apiParams, clientConfig);
    this.teamdrives.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('teamdrives', 'GET', apiParams, clientConfig);
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
