
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
    // "Private" properties using the underscore convention
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://www.googleapis.com/';
    this._servicePath = 'drive/v3/';

    // --- Public Interface Initialization ---

    this.operations = {};
    this.operations.get = (params) => this._makeRequest('operations/{name}', 'GET', params);

    this.about = {};
    this.about.get = (params) => this._makeRequest('about', 'GET', params);

    this.apps = {};
    this.apps.get = (params) => this._makeRequest('apps/{appId}', 'GET', params);
    this.apps.list = (params) => this._makeRequest('apps', 'GET', params);

    this.changes = {};
    this.changes.getStartPageToken = (params) => this._makeRequest('changes/startPageToken', 'GET', params);
    this.changes.list = (params) => this._makeRequest('changes', 'GET', params);
    this.changes.watch = (params) => this._makeRequest('changes/watch', 'POST', params);

    this.channels = {};
    this.channels.stop = (params) => this._makeRequest('channels/stop', 'POST', params);

    this.comments = {};
    this.comments.create = (params) => this._makeRequest('files/{fileId}/comments', 'POST', params);
    this.comments.delete = (params) => this._makeRequest('files/{fileId}/comments/{commentId}', 'DELETE', params);
    this.comments.get = (params) => this._makeRequest('files/{fileId}/comments/{commentId}', 'GET', params);
    this.comments.list = (params) => this._makeRequest('files/{fileId}/comments', 'GET', params);
    this.comments.update = (params) => this._makeRequest('files/{fileId}/comments/{commentId}', 'PATCH', params);

    this.drives = {};
    this.drives.create = (params) => this._makeRequest('drives', 'POST', params);
    this.drives.delete = (params) => this._makeRequest('drives/{driveId}', 'DELETE', params);
    this.drives.get = (params) => this._makeRequest('drives/{driveId}', 'GET', params);
    this.drives.hide = (params) => this._makeRequest('drives/{driveId}/hide', 'POST', params);
    this.drives.list = (params) => this._makeRequest('drives', 'GET', params);
    this.drives.unhide = (params) => this._makeRequest('drives/{driveId}/unhide', 'POST', params);
    this.drives.update = (params) => this._makeRequest('drives/{driveId}', 'PATCH', params);

    this.files = {};
    this.files.copy = (params) => this._makeRequest('files/{fileId}/copy', 'POST', params);
    this.files.create = (params) => this._makeRequest('files', 'POST', params);
    this.files.delete = (params) => this._makeRequest('files/{fileId}', 'DELETE', params);
    this.files.emptyTrash = (params) => this._makeRequest('files/trash', 'DELETE', params);
    this.files.export = (params) => this._makeRequest('files/{fileId}/export', 'GET', params);
    this.files.generateIds = (params) => this._makeRequest('files/generateIds', 'GET', params);
    this.files.get = (params) => this._makeRequest('files/{fileId}', 'GET', params);
    this.files.list = (params) => this._makeRequest('files', 'GET', params);
    this.files.listLabels = (params) => this._makeRequest('files/{fileId}/listLabels', 'GET', params);
    this.files.modifyLabels = (params) => this._makeRequest('files/{fileId}/modifyLabels', 'POST', params);
    this.files.update = (params) => this._makeRequest('files/{fileId}', 'PATCH', params);
    this.files.watch = (params) => this._makeRequest('files/{fileId}/watch', 'POST', params);
    this.files.download = (params) => this._makeRequest('files/{fileId}/download', 'POST', params);

    this.permissions = {};
    this.permissions.create = (params) => this._makeRequest('files/{fileId}/permissions', 'POST', params);
    this.permissions.delete = (params) => this._makeRequest('files/{fileId}/permissions/{permissionId}', 'DELETE', params);
    this.permissions.get = (params) => this._makeRequest('files/{fileId}/permissions/{permissionId}', 'GET', params);
    this.permissions.list = (params) => this._makeRequest('files/{fileId}/permissions', 'GET', params);
    this.permissions.update = (params) => this._makeRequest('files/{fileId}/permissions/{permissionId}', 'PATCH', params);

    this.replies = {};
    this.replies.create = (params) => this._makeRequest('files/{fileId}/comments/{commentId}/replies', 'POST', params);
    this.replies.delete = (params) => this._makeRequest('files/{fileId}/comments/{commentId}/replies/{replyId}', 'DELETE', params);
    this.replies.get = (params) => this._makeRequest('files/{fileId}/comments/{commentId}/replies/{replyId}', 'GET', params);
    this.replies.list = (params) => this._makeRequest('files/{fileId}/comments/{commentId}/replies', 'GET', params);
    this.replies.update = (params) => this._makeRequest('files/{fileId}/comments/{commentId}/replies/{replyId}', 'PATCH', params);

    this.revisions = {};
    this.revisions.delete = (params) => this._makeRequest('files/{fileId}/revisions/{revisionId}', 'DELETE', params);
    this.revisions.get = (params) => this._makeRequest('files/{fileId}/revisions/{revisionId}', 'GET', params);
    this.revisions.list = (params) => this._makeRequest('files/{fileId}/revisions', 'GET', params);
    this.revisions.update = (params) => this._makeRequest('files/{fileId}/revisions/{revisionId}', 'PATCH', params);

    this.teamdrives = {};
    this.teamdrives.create = (params) => this._makeRequest('teamdrives', 'POST', params);
    this.teamdrives.delete = (params) => this._makeRequest('teamdrives/{teamDriveId}', 'DELETE', params);
    this.teamdrives.get = (params) => this._makeRequest('teamdrives/{teamDriveId}', 'GET', params);
    this.teamdrives.list = (params) => this._makeRequest('teamdrives', 'GET', params);
    this.teamdrives.update = (params) => this._makeRequest('teamdrives/{teamDriveId}', 'PATCH', params);

    this.accessproposals = {};
    this.accessproposals.get = (params) => this._makeRequest('files/{fileId}/accessproposals/{proposalId}', 'GET', params);
    this.accessproposals.resolve = (params) => this._makeRequest('files/{fileId}/accessproposals/{proposalId}:resolve', 'POST', params);
    this.accessproposals.list = (params) => this._makeRequest('files/{fileId}/accessproposals', 'GET', params);
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
