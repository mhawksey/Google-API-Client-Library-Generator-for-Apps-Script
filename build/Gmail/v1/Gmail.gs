
/**
 * Google Apps Script client library for the Gmail API
 * Documentation URL: https://developers.google.com/workspace/gmail/api/
 * @class
 */
class Gmail {
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
    this._rootUrl = 'https://gmail.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.users = {};
    this.users.getProfile = (params) => this._makeRequest('gmail/v1/users/{userId}/profile', 'GET', params);
    this.users.watch = (params) => this._makeRequest('gmail/v1/users/{userId}/watch', 'POST', params);
    this.users.stop = (params) => this._makeRequest('gmail/v1/users/{userId}/stop', 'POST', params);

    this.users.drafts = {};
    this.users.drafts.delete = (params) => this._makeRequest('gmail/v1/users/{userId}/drafts/{id}', 'DELETE', params);
    this.users.drafts.create = (params) => this._makeRequest('gmail/v1/users/{userId}/drafts', 'POST', params);
    this.users.drafts.get = (params) => this._makeRequest('gmail/v1/users/{userId}/drafts/{id}', 'GET', params);
    this.users.drafts.list = (params) => this._makeRequest('gmail/v1/users/{userId}/drafts', 'GET', params);
    this.users.drafts.send = (params) => this._makeRequest('gmail/v1/users/{userId}/drafts/send', 'POST', params);
    this.users.drafts.update = (params) => this._makeRequest('gmail/v1/users/{userId}/drafts/{id}', 'PUT', params);

    this.users.history = {};
    this.users.history.list = (params) => this._makeRequest('gmail/v1/users/{userId}/history', 'GET', params);

    this.users.messages = {};
    this.users.messages.trash = (params) => this._makeRequest('gmail/v1/users/{userId}/messages/{id}/trash', 'POST', params);
    this.users.messages.untrash = (params) => this._makeRequest('gmail/v1/users/{userId}/messages/{id}/untrash', 'POST', params);
    this.users.messages.delete = (params) => this._makeRequest('gmail/v1/users/{userId}/messages/{id}', 'DELETE', params);
    this.users.messages.batchDelete = (params) => this._makeRequest('gmail/v1/users/{userId}/messages/batchDelete', 'POST', params);
    this.users.messages.import = (params) => this._makeRequest('gmail/v1/users/{userId}/messages/import', 'POST', params);
    this.users.messages.insert = (params) => this._makeRequest('gmail/v1/users/{userId}/messages', 'POST', params);
    this.users.messages.get = (params) => this._makeRequest('gmail/v1/users/{userId}/messages/{id}', 'GET', params);
    this.users.messages.send = (params) => this._makeRequest('gmail/v1/users/{userId}/messages/send', 'POST', params);
    this.users.messages.list = (params) => this._makeRequest('gmail/v1/users/{userId}/messages', 'GET', params);
    this.users.messages.modify = (params) => this._makeRequest('gmail/v1/users/{userId}/messages/{id}/modify', 'POST', params);
    this.users.messages.batchModify = (params) => this._makeRequest('gmail/v1/users/{userId}/messages/batchModify', 'POST', params);

    this.users.messages.attachments = {};
    this.users.messages.attachments.get = (params) => this._makeRequest('gmail/v1/users/{userId}/messages/{messageId}/attachments/{id}', 'GET', params);

    this.users.labels = {};
    this.users.labels.create = (params) => this._makeRequest('gmail/v1/users/{userId}/labels', 'POST', params);
    this.users.labels.delete = (params) => this._makeRequest('gmail/v1/users/{userId}/labels/{id}', 'DELETE', params);
    this.users.labels.get = (params) => this._makeRequest('gmail/v1/users/{userId}/labels/{id}', 'GET', params);
    this.users.labels.list = (params) => this._makeRequest('gmail/v1/users/{userId}/labels', 'GET', params);
    this.users.labels.update = (params) => this._makeRequest('gmail/v1/users/{userId}/labels/{id}', 'PUT', params);
    this.users.labels.patch = (params) => this._makeRequest('gmail/v1/users/{userId}/labels/{id}', 'PATCH', params);

    this.users.threads = {};
    this.users.threads.trash = (params) => this._makeRequest('gmail/v1/users/{userId}/threads/{id}/trash', 'POST', params);
    this.users.threads.untrash = (params) => this._makeRequest('gmail/v1/users/{userId}/threads/{id}/untrash', 'POST', params);
    this.users.threads.delete = (params) => this._makeRequest('gmail/v1/users/{userId}/threads/{id}', 'DELETE', params);
    this.users.threads.get = (params) => this._makeRequest('gmail/v1/users/{userId}/threads/{id}', 'GET', params);
    this.users.threads.list = (params) => this._makeRequest('gmail/v1/users/{userId}/threads', 'GET', params);
    this.users.threads.modify = (params) => this._makeRequest('gmail/v1/users/{userId}/threads/{id}/modify', 'POST', params);

    this.users.settings = {};
    this.users.settings.getImap = (params) => this._makeRequest('gmail/v1/users/{userId}/settings/imap', 'GET', params);
    this.users.settings.updateImap = (params) => this._makeRequest('gmail/v1/users/{userId}/settings/imap', 'PUT', params);
    this.users.settings.getPop = (params) => this._makeRequest('gmail/v1/users/{userId}/settings/pop', 'GET', params);
    this.users.settings.updatePop = (params) => this._makeRequest('gmail/v1/users/{userId}/settings/pop', 'PUT', params);
    this.users.settings.getVacation = (params) => this._makeRequest('gmail/v1/users/{userId}/settings/vacation', 'GET', params);
    this.users.settings.updateVacation = (params) => this._makeRequest('gmail/v1/users/{userId}/settings/vacation', 'PUT', params);
    this.users.settings.getLanguage = (params) => this._makeRequest('gmail/v1/users/{userId}/settings/language', 'GET', params);
    this.users.settings.updateLanguage = (params) => this._makeRequest('gmail/v1/users/{userId}/settings/language', 'PUT', params);
    this.users.settings.getAutoForwarding = (params) => this._makeRequest('gmail/v1/users/{userId}/settings/autoForwarding', 'GET', params);
    this.users.settings.updateAutoForwarding = (params) => this._makeRequest('gmail/v1/users/{userId}/settings/autoForwarding', 'PUT', params);

    this.users.settings.sendAs = {};
    this.users.settings.sendAs.list = (params) => this._makeRequest('gmail/v1/users/{userId}/settings/sendAs', 'GET', params);
    this.users.settings.sendAs.get = (params) => this._makeRequest('gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}', 'GET', params);
    this.users.settings.sendAs.create = (params) => this._makeRequest('gmail/v1/users/{userId}/settings/sendAs', 'POST', params);
    this.users.settings.sendAs.update = (params) => this._makeRequest('gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}', 'PUT', params);
    this.users.settings.sendAs.patch = (params) => this._makeRequest('gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}', 'PATCH', params);
    this.users.settings.sendAs.delete = (params) => this._makeRequest('gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}', 'DELETE', params);
    this.users.settings.sendAs.verify = (params) => this._makeRequest('gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}/verify', 'POST', params);

    this.users.settings.sendAs.smimeInfo = {};
    this.users.settings.sendAs.smimeInfo.list = (params) => this._makeRequest('gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}/smimeInfo', 'GET', params);
    this.users.settings.sendAs.smimeInfo.get = (params) => this._makeRequest('gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}/smimeInfo/{id}', 'GET', params);
    this.users.settings.sendAs.smimeInfo.insert = (params) => this._makeRequest('gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}/smimeInfo', 'POST', params);
    this.users.settings.sendAs.smimeInfo.delete = (params) => this._makeRequest('gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}/smimeInfo/{id}', 'DELETE', params);
    this.users.settings.sendAs.smimeInfo.setDefault = (params) => this._makeRequest('gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}/smimeInfo/{id}/setDefault', 'POST', params);

    this.users.settings.cse = {};

    this.users.settings.cse.identities = {};
    this.users.settings.cse.identities.create = (params) => this._makeRequest('gmail/v1/users/{userId}/settings/cse/identities', 'POST', params);
    this.users.settings.cse.identities.delete = (params) => this._makeRequest('gmail/v1/users/{userId}/settings/cse/identities/{cseEmailAddress}', 'DELETE', params);
    this.users.settings.cse.identities.get = (params) => this._makeRequest('gmail/v1/users/{userId}/settings/cse/identities/{cseEmailAddress}', 'GET', params);
    this.users.settings.cse.identities.list = (params) => this._makeRequest('gmail/v1/users/{userId}/settings/cse/identities', 'GET', params);
    this.users.settings.cse.identities.patch = (params) => this._makeRequest('gmail/v1/users/{userId}/settings/cse/identities/{emailAddress}', 'PATCH', params);

    this.users.settings.cse.keypairs = {};
    this.users.settings.cse.keypairs.create = (params) => this._makeRequest('gmail/v1/users/{userId}/settings/cse/keypairs', 'POST', params);
    this.users.settings.cse.keypairs.disable = (params) => this._makeRequest('gmail/v1/users/{userId}/settings/cse/keypairs/{keyPairId}:disable', 'POST', params);
    this.users.settings.cse.keypairs.enable = (params) => this._makeRequest('gmail/v1/users/{userId}/settings/cse/keypairs/{keyPairId}:enable', 'POST', params);
    this.users.settings.cse.keypairs.get = (params) => this._makeRequest('gmail/v1/users/{userId}/settings/cse/keypairs/{keyPairId}', 'GET', params);
    this.users.settings.cse.keypairs.list = (params) => this._makeRequest('gmail/v1/users/{userId}/settings/cse/keypairs', 'GET', params);
    this.users.settings.cse.keypairs.obliterate = (params) => this._makeRequest('gmail/v1/users/{userId}/settings/cse/keypairs/{keyPairId}:obliterate', 'POST', params);

    this.users.settings.filters = {};
    this.users.settings.filters.list = (params) => this._makeRequest('gmail/v1/users/{userId}/settings/filters', 'GET', params);
    this.users.settings.filters.get = (params) => this._makeRequest('gmail/v1/users/{userId}/settings/filters/{id}', 'GET', params);
    this.users.settings.filters.create = (params) => this._makeRequest('gmail/v1/users/{userId}/settings/filters', 'POST', params);
    this.users.settings.filters.delete = (params) => this._makeRequest('gmail/v1/users/{userId}/settings/filters/{id}', 'DELETE', params);

    this.users.settings.forwardingAddresses = {};
    this.users.settings.forwardingAddresses.list = (params) => this._makeRequest('gmail/v1/users/{userId}/settings/forwardingAddresses', 'GET', params);
    this.users.settings.forwardingAddresses.get = (params) => this._makeRequest('gmail/v1/users/{userId}/settings/forwardingAddresses/{forwardingEmail}', 'GET', params);
    this.users.settings.forwardingAddresses.create = (params) => this._makeRequest('gmail/v1/users/{userId}/settings/forwardingAddresses', 'POST', params);
    this.users.settings.forwardingAddresses.delete = (params) => this._makeRequest('gmail/v1/users/{userId}/settings/forwardingAddresses/{forwardingEmail}', 'DELETE', params);

    this.users.settings.delegates = {};
    this.users.settings.delegates.list = (params) => this._makeRequest('gmail/v1/users/{userId}/settings/delegates', 'GET', params);
    this.users.settings.delegates.get = (params) => this._makeRequest('gmail/v1/users/{userId}/settings/delegates/{delegateEmail}', 'GET', params);
    this.users.settings.delegates.create = (params) => this._makeRequest('gmail/v1/users/{userId}/settings/delegates', 'POST', params);
    this.users.settings.delegates.delete = (params) => this._makeRequest('gmail/v1/users/{userId}/settings/delegates/{delegateEmail}', 'DELETE', params);
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
