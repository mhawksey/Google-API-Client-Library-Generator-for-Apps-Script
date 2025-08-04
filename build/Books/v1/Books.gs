
/**
 * Google Apps Script client library for the Books API
 * Documentation URL: https://code.google.com/apis/books/docs/v1/getting_started.html
 * @class
 */
class Books {
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
    this._rootUrl = 'https://books.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.bookshelves = {};
    this.bookshelves.get = (params) => this._makeRequest('books/v1/users/{userId}/bookshelves/{shelf}', 'GET', params);
    this.bookshelves.list = (params) => this._makeRequest('books/v1/users/{userId}/bookshelves', 'GET', params);

    this.bookshelves.volumes = {};
    this.bookshelves.volumes.list = (params) => this._makeRequest('books/v1/users/{userId}/bookshelves/{shelf}/volumes', 'GET', params);

    this.cloudloading = {};
    this.cloudloading.addBook = (params) => this._makeRequest('books/v1/cloudloading/addBook', 'POST', params);
    this.cloudloading.deleteBook = (params) => this._makeRequest('books/v1/cloudloading/deleteBook', 'POST', params);
    this.cloudloading.updateBook = (params) => this._makeRequest('books/v1/cloudloading/updateBook', 'POST', params);

    this.dictionary = {};
    this.dictionary.listOfflineMetadata = (params) => this._makeRequest('books/v1/dictionary/listOfflineMetadata', 'GET', params);

    this.familysharing = {};
    this.familysharing.getFamilyInfo = (params) => this._makeRequest('books/v1/familysharing/getFamilyInfo', 'GET', params);
    this.familysharing.share = (params) => this._makeRequest('books/v1/familysharing/share', 'POST', params);
    this.familysharing.unshare = (params) => this._makeRequest('books/v1/familysharing/unshare', 'POST', params);

    this.layers = {};
    this.layers.get = (params) => this._makeRequest('books/v1/volumes/{volumeId}/layersummary/{summaryId}', 'GET', params);
    this.layers.list = (params) => this._makeRequest('books/v1/volumes/{volumeId}/layersummary', 'GET', params);

    this.layers.annotationData = {};
    this.layers.annotationData.get = (params) => this._makeRequest('books/v1/volumes/{volumeId}/layers/{layerId}/data/{annotationDataId}', 'GET', params);
    this.layers.annotationData.list = (params) => this._makeRequest('books/v1/volumes/{volumeId}/layers/{layerId}/data', 'GET', params);

    this.layers.volumeAnnotations = {};
    this.layers.volumeAnnotations.get = (params) => this._makeRequest('books/v1/volumes/{volumeId}/layers/{layerId}/annotations/{annotationId}', 'GET', params);
    this.layers.volumeAnnotations.list = (params) => this._makeRequest('books/v1/volumes/{volumeId}/layers/{layerId}', 'GET', params);

    this.myconfig = {};
    this.myconfig.getUserSettings = (params) => this._makeRequest('books/v1/myconfig/getUserSettings', 'GET', params);
    this.myconfig.releaseDownloadAccess = (params) => this._makeRequest('books/v1/myconfig/releaseDownloadAccess', 'POST', params);
    this.myconfig.requestAccess = (params) => this._makeRequest('books/v1/myconfig/requestAccess', 'POST', params);
    this.myconfig.syncVolumeLicenses = (params) => this._makeRequest('books/v1/myconfig/syncVolumeLicenses', 'POST', params);
    this.myconfig.updateUserSettings = (params) => this._makeRequest('books/v1/myconfig/updateUserSettings', 'POST', params);

    this.mylibrary = {};

    this.mylibrary.annotations = {};
    this.mylibrary.annotations.delete = (params) => this._makeRequest('books/v1/mylibrary/annotations/{annotationId}', 'DELETE', params);
    this.mylibrary.annotations.insert = (params) => this._makeRequest('books/v1/mylibrary/annotations', 'POST', params);
    this.mylibrary.annotations.list = (params) => this._makeRequest('books/v1/mylibrary/annotations', 'GET', params);
    this.mylibrary.annotations.summary = (params) => this._makeRequest('books/v1/mylibrary/annotations/summary', 'POST', params);
    this.mylibrary.annotations.update = (params) => this._makeRequest('books/v1/mylibrary/annotations/{annotationId}', 'PUT', params);

    this.mylibrary.bookshelves = {};
    this.mylibrary.bookshelves.addVolume = (params) => this._makeRequest('books/v1/mylibrary/bookshelves/{shelf}/addVolume', 'POST', params);
    this.mylibrary.bookshelves.clearVolumes = (params) => this._makeRequest('books/v1/mylibrary/bookshelves/{shelf}/clearVolumes', 'POST', params);
    this.mylibrary.bookshelves.get = (params) => this._makeRequest('books/v1/mylibrary/bookshelves/{shelf}', 'GET', params);
    this.mylibrary.bookshelves.list = (params) => this._makeRequest('books/v1/mylibrary/bookshelves', 'GET', params);
    this.mylibrary.bookshelves.moveVolume = (params) => this._makeRequest('books/v1/mylibrary/bookshelves/{shelf}/moveVolume', 'POST', params);
    this.mylibrary.bookshelves.removeVolume = (params) => this._makeRequest('books/v1/mylibrary/bookshelves/{shelf}/removeVolume', 'POST', params);

    this.mylibrary.bookshelves.volumes = {};
    this.mylibrary.bookshelves.volumes.list = (params) => this._makeRequest('books/v1/mylibrary/bookshelves/{shelf}/volumes', 'GET', params);

    this.mylibrary.readingpositions = {};
    this.mylibrary.readingpositions.get = (params) => this._makeRequest('books/v1/mylibrary/readingpositions/{volumeId}', 'GET', params);
    this.mylibrary.readingpositions.setPosition = (params) => this._makeRequest('books/v1/mylibrary/readingpositions/{volumeId}/setPosition', 'POST', params);

    this.notification = {};
    this.notification.get = (params) => this._makeRequest('books/v1/notification/get', 'GET', params);

    this.onboarding = {};
    this.onboarding.listCategories = (params) => this._makeRequest('books/v1/onboarding/listCategories', 'GET', params);
    this.onboarding.listCategoryVolumes = (params) => this._makeRequest('books/v1/onboarding/listCategoryVolumes', 'GET', params);

    this.personalizedstream = {};
    this.personalizedstream.get = (params) => this._makeRequest('books/v1/personalizedstream/get', 'GET', params);

    this.promooffer = {};
    this.promooffer.accept = (params) => this._makeRequest('books/v1/promooffer/accept', 'POST', params);
    this.promooffer.dismiss = (params) => this._makeRequest('books/v1/promooffer/dismiss', 'POST', params);
    this.promooffer.get = (params) => this._makeRequest('books/v1/promooffer/get', 'GET', params);

    this.series = {};
    this.series.get = (params) => this._makeRequest('books/v1/series/get', 'GET', params);

    this.series.membership = {};
    this.series.membership.get = (params) => this._makeRequest('books/v1/series/membership/get', 'GET', params);

    this.volumes = {};
    this.volumes.get = (params) => this._makeRequest('books/v1/volumes/{volumeId}', 'GET', params);
    this.volumes.list = (params) => this._makeRequest('books/v1/volumes', 'GET', params);

    this.volumes.associated = {};
    this.volumes.associated.list = (params) => this._makeRequest('books/v1/volumes/{volumeId}/associated', 'GET', params);

    this.volumes.mybooks = {};
    this.volumes.mybooks.list = (params) => this._makeRequest('books/v1/volumes/mybooks', 'GET', params);

    this.volumes.recommended = {};
    this.volumes.recommended.list = (params) => this._makeRequest('books/v1/volumes/recommended', 'GET', params);
    this.volumes.recommended.rate = (params) => this._makeRequest('books/v1/volumes/recommended/rate', 'POST', params);

    this.volumes.useruploaded = {};
    this.volumes.useruploaded.list = (params) => this._makeRequest('books/v1/volumes/useruploaded', 'GET', params);
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
