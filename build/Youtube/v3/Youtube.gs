
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
    // "Private" properties using the underscore convention
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://youtube.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.abuseReports = {};
    this.abuseReports.insert = (params) => this._makeRequest('youtube/v3/abuseReports', 'POST', params);

    this.activities = {};
    this.activities.list = (params) => this._makeRequest('youtube/v3/activities', 'GET', params);

    this.captions = {};
    this.captions.list = (params) => this._makeRequest('youtube/v3/captions', 'GET', params);
    this.captions.insert = (params) => this._makeRequest('youtube/v3/captions', 'POST', params);
    this.captions.update = (params) => this._makeRequest('youtube/v3/captions', 'PUT', params);
    this.captions.delete = (params) => this._makeRequest('youtube/v3/captions', 'DELETE', params);
    this.captions.download = (params) => this._makeRequest('youtube/v3/captions/{id}', 'GET', params);

    this.channels = {};
    this.channels.list = (params) => this._makeRequest('youtube/v3/channels', 'GET', params);
    this.channels.update = (params) => this._makeRequest('youtube/v3/channels', 'PUT', params);

    this.channelBanners = {};
    this.channelBanners.insert = (params) => this._makeRequest('youtube/v3/channelBanners/insert', 'POST', params);

    this.channelSections = {};
    this.channelSections.list = (params) => this._makeRequest('youtube/v3/channelSections', 'GET', params);
    this.channelSections.insert = (params) => this._makeRequest('youtube/v3/channelSections', 'POST', params);
    this.channelSections.update = (params) => this._makeRequest('youtube/v3/channelSections', 'PUT', params);
    this.channelSections.delete = (params) => this._makeRequest('youtube/v3/channelSections', 'DELETE', params);

    this.comments = {};
    this.comments.list = (params) => this._makeRequest('youtube/v3/comments', 'GET', params);
    this.comments.insert = (params) => this._makeRequest('youtube/v3/comments', 'POST', params);
    this.comments.update = (params) => this._makeRequest('youtube/v3/comments', 'PUT', params);
    this.comments.delete = (params) => this._makeRequest('youtube/v3/comments', 'DELETE', params);
    this.comments.setModerationStatus = (params) => this._makeRequest('youtube/v3/comments/setModerationStatus', 'POST', params);
    this.comments.markAsSpam = (params) => this._makeRequest('youtube/v3/comments/markAsSpam', 'POST', params);

    this.commentThreads = {};
    this.commentThreads.list = (params) => this._makeRequest('youtube/v3/commentThreads', 'GET', params);
    this.commentThreads.insert = (params) => this._makeRequest('youtube/v3/commentThreads', 'POST', params);

    this.youtube = {};

    this.youtube.v3 = {};
    this.youtube.v3.updateCommentThreads = (params) => this._makeRequest('youtube/v3/commentThreads', 'PUT', params);

    this.youtube.v3.liveChat = {};

    this.youtube.v3.liveChat.messages = {};
    this.youtube.v3.liveChat.messages.stream = (params) => this._makeRequest('youtube/v3/liveChat/messages/stream', 'GET', params);

    this.i18nLanguages = {};
    this.i18nLanguages.list = (params) => this._makeRequest('youtube/v3/i18nLanguages', 'GET', params);

    this.i18nRegions = {};
    this.i18nRegions.list = (params) => this._makeRequest('youtube/v3/i18nRegions', 'GET', params);

    this.liveBroadcasts = {};
    this.liveBroadcasts.list = (params) => this._makeRequest('youtube/v3/liveBroadcasts', 'GET', params);
    this.liveBroadcasts.insert = (params) => this._makeRequest('youtube/v3/liveBroadcasts', 'POST', params);
    this.liveBroadcasts.update = (params) => this._makeRequest('youtube/v3/liveBroadcasts', 'PUT', params);
    this.liveBroadcasts.delete = (params) => this._makeRequest('youtube/v3/liveBroadcasts', 'DELETE', params);
    this.liveBroadcasts.bind = (params) => this._makeRequest('youtube/v3/liveBroadcasts/bind', 'POST', params);
    this.liveBroadcasts.transition = (params) => this._makeRequest('youtube/v3/liveBroadcasts/transition', 'POST', params);
    this.liveBroadcasts.insertCuepoint = (params) => this._makeRequest('youtube/v3/liveBroadcasts/cuepoint', 'POST', params);

    this.liveChatBans = {};
    this.liveChatBans.insert = (params) => this._makeRequest('youtube/v3/liveChat/bans', 'POST', params);
    this.liveChatBans.delete = (params) => this._makeRequest('youtube/v3/liveChat/bans', 'DELETE', params);

    this.liveChatMessages = {};
    this.liveChatMessages.list = (params) => this._makeRequest('youtube/v3/liveChat/messages', 'GET', params);
    this.liveChatMessages.insert = (params) => this._makeRequest('youtube/v3/liveChat/messages', 'POST', params);
    this.liveChatMessages.delete = (params) => this._makeRequest('youtube/v3/liveChat/messages', 'DELETE', params);
    this.liveChatMessages.transition = (params) => this._makeRequest('youtube/v3/liveChat/messages/transition', 'POST', params);

    this.liveChatModerators = {};
    this.liveChatModerators.list = (params) => this._makeRequest('youtube/v3/liveChat/moderators', 'GET', params);
    this.liveChatModerators.insert = (params) => this._makeRequest('youtube/v3/liveChat/moderators', 'POST', params);
    this.liveChatModerators.delete = (params) => this._makeRequest('youtube/v3/liveChat/moderators', 'DELETE', params);

    this.liveStreams = {};
    this.liveStreams.list = (params) => this._makeRequest('youtube/v3/liveStreams', 'GET', params);
    this.liveStreams.insert = (params) => this._makeRequest('youtube/v3/liveStreams', 'POST', params);
    this.liveStreams.update = (params) => this._makeRequest('youtube/v3/liveStreams', 'PUT', params);
    this.liveStreams.delete = (params) => this._makeRequest('youtube/v3/liveStreams', 'DELETE', params);

    this.members = {};
    this.members.list = (params) => this._makeRequest('youtube/v3/members', 'GET', params);

    this.membershipsLevels = {};
    this.membershipsLevels.list = (params) => this._makeRequest('youtube/v3/membershipsLevels', 'GET', params);

    this.playlists = {};
    this.playlists.list = (params) => this._makeRequest('youtube/v3/playlists', 'GET', params);
    this.playlists.insert = (params) => this._makeRequest('youtube/v3/playlists', 'POST', params);
    this.playlists.update = (params) => this._makeRequest('youtube/v3/playlists', 'PUT', params);
    this.playlists.delete = (params) => this._makeRequest('youtube/v3/playlists', 'DELETE', params);

    this.playlistItems = {};
    this.playlistItems.list = (params) => this._makeRequest('youtube/v3/playlistItems', 'GET', params);
    this.playlistItems.delete = (params) => this._makeRequest('youtube/v3/playlistItems', 'DELETE', params);
    this.playlistItems.insert = (params) => this._makeRequest('youtube/v3/playlistItems', 'POST', params);
    this.playlistItems.update = (params) => this._makeRequest('youtube/v3/playlistItems', 'PUT', params);

    this.playlistImages = {};
    this.playlistImages.list = (params) => this._makeRequest('youtube/v3/playlistImages', 'GET', params);
    this.playlistImages.insert = (params) => this._makeRequest('youtube/v3/playlistImages', 'POST', params);
    this.playlistImages.update = (params) => this._makeRequest('youtube/v3/playlistImages', 'PUT', params);
    this.playlistImages.delete = (params) => this._makeRequest('youtube/v3/playlistImages', 'DELETE', params);

    this.search = {};
    this.search.list = (params) => this._makeRequest('youtube/v3/search', 'GET', params);

    this.subscriptions = {};
    this.subscriptions.list = (params) => this._makeRequest('youtube/v3/subscriptions', 'GET', params);
    this.subscriptions.delete = (params) => this._makeRequest('youtube/v3/subscriptions', 'DELETE', params);
    this.subscriptions.insert = (params) => this._makeRequest('youtube/v3/subscriptions', 'POST', params);

    this.superChatEvents = {};
    this.superChatEvents.list = (params) => this._makeRequest('youtube/v3/superChatEvents', 'GET', params);

    this.tests = {};
    this.tests.insert = (params) => this._makeRequest('youtube/v3/tests', 'POST', params);

    this.thirdPartyLinks = {};
    this.thirdPartyLinks.list = (params) => this._makeRequest('youtube/v3/thirdPartyLinks', 'GET', params);
    this.thirdPartyLinks.insert = (params) => this._makeRequest('youtube/v3/thirdPartyLinks', 'POST', params);
    this.thirdPartyLinks.update = (params) => this._makeRequest('youtube/v3/thirdPartyLinks', 'PUT', params);
    this.thirdPartyLinks.delete = (params) => this._makeRequest('youtube/v3/thirdPartyLinks', 'DELETE', params);

    this.thumbnails = {};
    this.thumbnails.set = (params) => this._makeRequest('youtube/v3/thumbnails/set', 'POST', params);

    this.videos = {};
    this.videos.list = (params) => this._makeRequest('youtube/v3/videos', 'GET', params);
    this.videos.insert = (params) => this._makeRequest('youtube/v3/videos', 'POST', params);
    this.videos.update = (params) => this._makeRequest('youtube/v3/videos', 'PUT', params);
    this.videos.delete = (params) => this._makeRequest('youtube/v3/videos', 'DELETE', params);
    this.videos.reportAbuse = (params) => this._makeRequest('youtube/v3/videos/reportAbuse', 'POST', params);
    this.videos.rate = (params) => this._makeRequest('youtube/v3/videos/rate', 'POST', params);
    this.videos.getRating = (params) => this._makeRequest('youtube/v3/videos/getRating', 'GET', params);

    this.videoAbuseReportReasons = {};
    this.videoAbuseReportReasons.list = (params) => this._makeRequest('youtube/v3/videoAbuseReportReasons', 'GET', params);

    this.videoCategories = {};
    this.videoCategories.list = (params) => this._makeRequest('youtube/v3/videoCategories', 'GET', params);

    this.videoTrainability = {};
    this.videoTrainability.get = (params) => this._makeRequest('youtube/v3/videoTrainability', 'GET', params);

    this.watermarks = {};
    this.watermarks.set = (params) => this._makeRequest('youtube/v3/watermarks/set', 'POST', params);
    this.watermarks.unset = (params) => this._makeRequest('youtube/v3/watermarks/unset', 'POST', params);
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
