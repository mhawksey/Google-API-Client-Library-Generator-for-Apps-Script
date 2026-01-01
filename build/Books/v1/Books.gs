
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
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://books.googleapis.com/';
    this._servicePath = '';


    this.volumes = {};
    this.volumes.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('books/v1/volumes/{volumeId}', 'GET', apiParams, clientConfig);
    this.volumes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('books/v1/volumes', 'GET', apiParams, clientConfig);

    this.volumes.recommended = {};
    this.volumes.recommended.rate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('books/v1/volumes/recommended/rate', 'POST', apiParams, clientConfig);
    this.volumes.recommended.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('books/v1/volumes/recommended', 'GET', apiParams, clientConfig);

    this.volumes.associated = {};
    this.volumes.associated.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('books/v1/volumes/{volumeId}/associated', 'GET', apiParams, clientConfig);

    this.volumes.useruploaded = {};
    this.volumes.useruploaded.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('books/v1/volumes/useruploaded', 'GET', apiParams, clientConfig);

    this.volumes.mybooks = {};
    this.volumes.mybooks.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('books/v1/volumes/mybooks', 'GET', apiParams, clientConfig);

    this.promooffer = {};
    this.promooffer.accept = async (apiParams = {}, clientConfig = {}) => this._makeRequest('books/v1/promooffer/accept', 'POST', apiParams, clientConfig);
    this.promooffer.dismiss = async (apiParams = {}, clientConfig = {}) => this._makeRequest('books/v1/promooffer/dismiss', 'POST', apiParams, clientConfig);
    this.promooffer.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('books/v1/promooffer/get', 'GET', apiParams, clientConfig);

    this.familysharing = {};
    this.familysharing.unshare = async (apiParams = {}, clientConfig = {}) => this._makeRequest('books/v1/familysharing/unshare', 'POST', apiParams, clientConfig);
    this.familysharing.getFamilyInfo = async (apiParams = {}, clientConfig = {}) => this._makeRequest('books/v1/familysharing/getFamilyInfo', 'GET', apiParams, clientConfig);
    this.familysharing.share = async (apiParams = {}, clientConfig = {}) => this._makeRequest('books/v1/familysharing/share', 'POST', apiParams, clientConfig);

    this.cloudloading = {};
    this.cloudloading.updateBook = async (apiParams = {}, clientConfig = {}) => this._makeRequest('books/v1/cloudloading/updateBook', 'POST', apiParams, clientConfig);
    this.cloudloading.addBook = async (apiParams = {}, clientConfig = {}) => this._makeRequest('books/v1/cloudloading/addBook', 'POST', apiParams, clientConfig);
    this.cloudloading.deleteBook = async (apiParams = {}, clientConfig = {}) => this._makeRequest('books/v1/cloudloading/deleteBook', 'POST', apiParams, clientConfig);

    this.myconfig = {};
    this.myconfig.requestAccess = async (apiParams = {}, clientConfig = {}) => this._makeRequest('books/v1/myconfig/requestAccess', 'POST', apiParams, clientConfig);
    this.myconfig.updateUserSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('books/v1/myconfig/updateUserSettings', 'POST', apiParams, clientConfig);
    this.myconfig.releaseDownloadAccess = async (apiParams = {}, clientConfig = {}) => this._makeRequest('books/v1/myconfig/releaseDownloadAccess', 'POST', apiParams, clientConfig);
    this.myconfig.syncVolumeLicenses = async (apiParams = {}, clientConfig = {}) => this._makeRequest('books/v1/myconfig/syncVolumeLicenses', 'POST', apiParams, clientConfig);
    this.myconfig.getUserSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('books/v1/myconfig/getUserSettings', 'GET', apiParams, clientConfig);

    this.onboarding = {};
    this.onboarding.listCategoryVolumes = async (apiParams = {}, clientConfig = {}) => this._makeRequest('books/v1/onboarding/listCategoryVolumes', 'GET', apiParams, clientConfig);
    this.onboarding.listCategories = async (apiParams = {}, clientConfig = {}) => this._makeRequest('books/v1/onboarding/listCategories', 'GET', apiParams, clientConfig);

    this.layers = {};
    this.layers.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('books/v1/volumes/{volumeId}/layersummary', 'GET', apiParams, clientConfig);
    this.layers.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('books/v1/volumes/{volumeId}/layersummary/{summaryId}', 'GET', apiParams, clientConfig);

    this.layers.annotationData = {};
    this.layers.annotationData.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('books/v1/volumes/{volumeId}/layers/{layerId}/data/{annotationDataId}', 'GET', apiParams, clientConfig);
    this.layers.annotationData.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('books/v1/volumes/{volumeId}/layers/{layerId}/data', 'GET', apiParams, clientConfig);

    this.layers.volumeAnnotations = {};
    this.layers.volumeAnnotations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('books/v1/volumes/{volumeId}/layers/{layerId}', 'GET', apiParams, clientConfig);
    this.layers.volumeAnnotations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('books/v1/volumes/{volumeId}/layers/{layerId}/annotations/{annotationId}', 'GET', apiParams, clientConfig);

    this.personalizedstream = {};
    this.personalizedstream.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('books/v1/personalizedstream/get', 'GET', apiParams, clientConfig);

    this.mylibrary = {};

    this.mylibrary.bookshelves = {};
    this.mylibrary.bookshelves.moveVolume = async (apiParams = {}, clientConfig = {}) => this._makeRequest('books/v1/mylibrary/bookshelves/{shelf}/moveVolume', 'POST', apiParams, clientConfig);
    this.mylibrary.bookshelves.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('books/v1/mylibrary/bookshelves/{shelf}', 'GET', apiParams, clientConfig);
    this.mylibrary.bookshelves.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('books/v1/mylibrary/bookshelves', 'GET', apiParams, clientConfig);
    this.mylibrary.bookshelves.clearVolumes = async (apiParams = {}, clientConfig = {}) => this._makeRequest('books/v1/mylibrary/bookshelves/{shelf}/clearVolumes', 'POST', apiParams, clientConfig);
    this.mylibrary.bookshelves.addVolume = async (apiParams = {}, clientConfig = {}) => this._makeRequest('books/v1/mylibrary/bookshelves/{shelf}/addVolume', 'POST', apiParams, clientConfig);
    this.mylibrary.bookshelves.removeVolume = async (apiParams = {}, clientConfig = {}) => this._makeRequest('books/v1/mylibrary/bookshelves/{shelf}/removeVolume', 'POST', apiParams, clientConfig);

    this.mylibrary.bookshelves.volumes = {};
    this.mylibrary.bookshelves.volumes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('books/v1/mylibrary/bookshelves/{shelf}/volumes', 'GET', apiParams, clientConfig);

    this.mylibrary.readingpositions = {};
    this.mylibrary.readingpositions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('books/v1/mylibrary/readingpositions/{volumeId}', 'GET', apiParams, clientConfig);
    this.mylibrary.readingpositions.setPosition = async (apiParams = {}, clientConfig = {}) => this._makeRequest('books/v1/mylibrary/readingpositions/{volumeId}/setPosition', 'POST', apiParams, clientConfig);

    this.mylibrary.annotations = {};
    this.mylibrary.annotations.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('books/v1/mylibrary/annotations/{annotationId}', 'PUT', apiParams, clientConfig);
    this.mylibrary.annotations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('books/v1/mylibrary/annotations/{annotationId}', 'DELETE', apiParams, clientConfig);
    this.mylibrary.annotations.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('books/v1/mylibrary/annotations', 'POST', apiParams, clientConfig);
    this.mylibrary.annotations.summary = async (apiParams = {}, clientConfig = {}) => this._makeRequest('books/v1/mylibrary/annotations/summary', 'POST', apiParams, clientConfig);
    this.mylibrary.annotations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('books/v1/mylibrary/annotations', 'GET', apiParams, clientConfig);

    this.series = {};
    this.series.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('books/v1/series/get', 'GET', apiParams, clientConfig);

    this.series.membership = {};
    this.series.membership.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('books/v1/series/membership/get', 'GET', apiParams, clientConfig);

    this.bookshelves = {};
    this.bookshelves.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('books/v1/users/{userId}/bookshelves/{shelf}', 'GET', apiParams, clientConfig);
    this.bookshelves.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('books/v1/users/{userId}/bookshelves', 'GET', apiParams, clientConfig);

    this.bookshelves.volumes = {};
    this.bookshelves.volumes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('books/v1/users/{userId}/bookshelves/{shelf}/volumes', 'GET', apiParams, clientConfig);

    this.dictionary = {};
    this.dictionary.listOfflineMetadata = async (apiParams = {}, clientConfig = {}) => this._makeRequest('books/v1/dictionary/listOfflineMetadata', 'GET', apiParams, clientConfig);

    this.notification = {};
    this.notification.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('books/v1/notification/get', 'GET', apiParams, clientConfig);
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
