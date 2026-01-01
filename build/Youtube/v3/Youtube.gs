
/**
 * Google Apps Script client library for the YouTube Data API v3
 * Documentation URL: https://developers.google.com/youtube/
 * @class
 */
class Youtube {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://youtube.googleapis.com/';
    this._servicePath = '';


    this.abuseReports = {};
    this.abuseReports.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/abuseReports', 'POST', apiParams, clientConfig);

    this.activities = {};
    this.activities.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/activities', 'GET', apiParams, clientConfig);

    this.captions = {};
    this.captions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/captions', 'GET', apiParams, clientConfig);
    this.captions.insert = async (apiParams = {}, clientConfig = {}) => {
      // If apiParams.media is provided, use the upload path; otherwise, use the standard path.
      const path = apiParams.media ? '/upload/youtube/v3/captions' : 'youtube/v3/captions';
      return this._makeRequest(path, 'POST', apiParams, clientConfig);
    };
    this.captions.update = async (apiParams = {}, clientConfig = {}) => {
      // If apiParams.media is provided, use the upload path; otherwise, use the standard path.
      const path = apiParams.media ? '/upload/youtube/v3/captions' : 'youtube/v3/captions';
      return this._makeRequest(path, 'PUT', apiParams, clientConfig);
    };
    this.captions.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/captions', 'DELETE', apiParams, clientConfig);
    this.captions.download = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/captions/{id}', 'GET', apiParams, clientConfig);

    this.channels = {};
    this.channels.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/channels', 'GET', apiParams, clientConfig);
    this.channels.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/channels', 'PUT', apiParams, clientConfig);

    this.channelBanners = {};
    this.channelBanners.insert = async (apiParams = {}, clientConfig = {}) => {
      // If apiParams.media is provided, use the upload path; otherwise, use the standard path.
      const path = apiParams.media ? '/upload/youtube/v3/channelBanners/insert' : 'youtube/v3/channelBanners/insert';
      return this._makeRequest(path, 'POST', apiParams, clientConfig);
    };

    this.channelSections = {};
    this.channelSections.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/channelSections', 'GET', apiParams, clientConfig);
    this.channelSections.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/channelSections', 'POST', apiParams, clientConfig);
    this.channelSections.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/channelSections', 'PUT', apiParams, clientConfig);
    this.channelSections.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/channelSections', 'DELETE', apiParams, clientConfig);

    this.comments = {};
    this.comments.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/comments', 'GET', apiParams, clientConfig);
    this.comments.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/comments', 'POST', apiParams, clientConfig);
    this.comments.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/comments', 'PUT', apiParams, clientConfig);
    this.comments.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/comments', 'DELETE', apiParams, clientConfig);
    this.comments.setModerationStatus = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/comments/setModerationStatus', 'POST', apiParams, clientConfig);
    this.comments.markAsSpam = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/comments/markAsSpam', 'POST', apiParams, clientConfig);

    this.commentThreads = {};
    this.commentThreads.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/commentThreads', 'GET', apiParams, clientConfig);
    this.commentThreads.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/commentThreads', 'POST', apiParams, clientConfig);

    this.youtube = {};

    this.youtube.v3 = {};
    this.youtube.v3.updateCommentThreads = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/commentThreads', 'PUT', apiParams, clientConfig);

    this.youtube.v3.liveChat = {};

    this.youtube.v3.liveChat.messages = {};
    this.youtube.v3.liveChat.messages.stream = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/liveChat/messages/stream', 'GET', apiParams, clientConfig);

    this.youtube.v3.videos = {};
    this.youtube.v3.videos.batchGetStats = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/videos:batchGetStats', 'GET', apiParams, clientConfig);

    this.i18nLanguages = {};
    this.i18nLanguages.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/i18nLanguages', 'GET', apiParams, clientConfig);

    this.i18nRegions = {};
    this.i18nRegions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/i18nRegions', 'GET', apiParams, clientConfig);

    this.liveBroadcasts = {};
    this.liveBroadcasts.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/liveBroadcasts', 'GET', apiParams, clientConfig);
    this.liveBroadcasts.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/liveBroadcasts', 'POST', apiParams, clientConfig);
    this.liveBroadcasts.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/liveBroadcasts', 'PUT', apiParams, clientConfig);
    this.liveBroadcasts.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/liveBroadcasts', 'DELETE', apiParams, clientConfig);
    this.liveBroadcasts.bind = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/liveBroadcasts/bind', 'POST', apiParams, clientConfig);
    this.liveBroadcasts.transition = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/liveBroadcasts/transition', 'POST', apiParams, clientConfig);
    this.liveBroadcasts.insertCuepoint = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/liveBroadcasts/cuepoint', 'POST', apiParams, clientConfig);

    this.liveChatBans = {};
    this.liveChatBans.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/liveChat/bans', 'POST', apiParams, clientConfig);
    this.liveChatBans.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/liveChat/bans', 'DELETE', apiParams, clientConfig);

    this.liveChatMessages = {};
    this.liveChatMessages.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/liveChat/messages', 'GET', apiParams, clientConfig);
    this.liveChatMessages.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/liveChat/messages', 'POST', apiParams, clientConfig);
    this.liveChatMessages.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/liveChat/messages', 'DELETE', apiParams, clientConfig);
    this.liveChatMessages.transition = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/liveChat/messages/transition', 'POST', apiParams, clientConfig);

    this.liveChatModerators = {};
    this.liveChatModerators.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/liveChat/moderators', 'GET', apiParams, clientConfig);
    this.liveChatModerators.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/liveChat/moderators', 'POST', apiParams, clientConfig);
    this.liveChatModerators.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/liveChat/moderators', 'DELETE', apiParams, clientConfig);

    this.liveStreams = {};
    this.liveStreams.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/liveStreams', 'GET', apiParams, clientConfig);
    this.liveStreams.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/liveStreams', 'POST', apiParams, clientConfig);
    this.liveStreams.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/liveStreams', 'PUT', apiParams, clientConfig);
    this.liveStreams.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/liveStreams', 'DELETE', apiParams, clientConfig);

    this.members = {};
    this.members.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/members', 'GET', apiParams, clientConfig);

    this.membershipsLevels = {};
    this.membershipsLevels.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/membershipsLevels', 'GET', apiParams, clientConfig);

    this.playlists = {};
    this.playlists.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/playlists', 'GET', apiParams, clientConfig);
    this.playlists.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/playlists', 'POST', apiParams, clientConfig);
    this.playlists.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/playlists', 'PUT', apiParams, clientConfig);
    this.playlists.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/playlists', 'DELETE', apiParams, clientConfig);

    this.playlistItems = {};
    this.playlistItems.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/playlistItems', 'GET', apiParams, clientConfig);
    this.playlistItems.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/playlistItems', 'DELETE', apiParams, clientConfig);
    this.playlistItems.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/playlistItems', 'POST', apiParams, clientConfig);
    this.playlistItems.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/playlistItems', 'PUT', apiParams, clientConfig);

    this.playlistImages = {};
    this.playlistImages.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/playlistImages', 'GET', apiParams, clientConfig);
    this.playlistImages.insert = async (apiParams = {}, clientConfig = {}) => {
      // If apiParams.media is provided, use the upload path; otherwise, use the standard path.
      const path = apiParams.media ? '/upload/youtube/v3/playlistImages' : 'youtube/v3/playlistImages';
      return this._makeRequest(path, 'POST', apiParams, clientConfig);
    };
    this.playlistImages.update = async (apiParams = {}, clientConfig = {}) => {
      // If apiParams.media is provided, use the upload path; otherwise, use the standard path.
      const path = apiParams.media ? '/upload/youtube/v3/playlistImages' : 'youtube/v3/playlistImages';
      return this._makeRequest(path, 'PUT', apiParams, clientConfig);
    };
    this.playlistImages.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/playlistImages', 'DELETE', apiParams, clientConfig);

    this.search = {};
    this.search.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/search', 'GET', apiParams, clientConfig);

    this.subscriptions = {};
    this.subscriptions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/subscriptions', 'GET', apiParams, clientConfig);
    this.subscriptions.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/subscriptions', 'DELETE', apiParams, clientConfig);
    this.subscriptions.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/subscriptions', 'POST', apiParams, clientConfig);

    this.superChatEvents = {};
    this.superChatEvents.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/superChatEvents', 'GET', apiParams, clientConfig);

    this.tests = {};
    this.tests.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/tests', 'POST', apiParams, clientConfig);

    this.thirdPartyLinks = {};
    this.thirdPartyLinks.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/thirdPartyLinks', 'GET', apiParams, clientConfig);
    this.thirdPartyLinks.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/thirdPartyLinks', 'POST', apiParams, clientConfig);
    this.thirdPartyLinks.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/thirdPartyLinks', 'PUT', apiParams, clientConfig);
    this.thirdPartyLinks.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/thirdPartyLinks', 'DELETE', apiParams, clientConfig);

    this.thumbnails = {};
    this.thumbnails.set = async (apiParams = {}, clientConfig = {}) => {
      // If apiParams.media is provided, use the upload path; otherwise, use the standard path.
      const path = apiParams.media ? '/upload/youtube/v3/thumbnails/set' : 'youtube/v3/thumbnails/set';
      return this._makeRequest(path, 'POST', apiParams, clientConfig);
    };

    this.videos = {};
    this.videos.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/videos', 'GET', apiParams, clientConfig);
    this.videos.insert = async (apiParams = {}, clientConfig = {}) => {
      // If apiParams.media is provided, use the upload path; otherwise, use the standard path.
      const path = apiParams.media ? '/upload/youtube/v3/videos' : 'youtube/v3/videos';
      return this._makeRequest(path, 'POST', apiParams, clientConfig);
    };
    this.videos.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/videos', 'PUT', apiParams, clientConfig);
    this.videos.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/videos', 'DELETE', apiParams, clientConfig);
    this.videos.reportAbuse = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/videos/reportAbuse', 'POST', apiParams, clientConfig);
    this.videos.rate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/videos/rate', 'POST', apiParams, clientConfig);
    this.videos.getRating = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/videos/getRating', 'GET', apiParams, clientConfig);

    this.videoAbuseReportReasons = {};
    this.videoAbuseReportReasons.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/videoAbuseReportReasons', 'GET', apiParams, clientConfig);

    this.videoCategories = {};
    this.videoCategories.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/videoCategories', 'GET', apiParams, clientConfig);

    this.videoTrainability = {};
    this.videoTrainability.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/videoTrainability', 'GET', apiParams, clientConfig);

    this.watermarks = {};
    this.watermarks.set = async (apiParams = {}, clientConfig = {}) => {
      // If apiParams.media is provided, use the upload path; otherwise, use the standard path.
      const path = apiParams.media ? '/upload/youtube/v3/watermarks/set' : 'youtube/v3/watermarks/set';
      return this._makeRequest(path, 'POST', apiParams, clientConfig);
    };
    this.watermarks.unset = async (apiParams = {}, clientConfig = {}) => this._makeRequest('youtube/v3/watermarks/unset', 'POST', apiParams, clientConfig);
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
