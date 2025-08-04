
/**
 * Google Apps Script client library for the Google Analytics API
 * Documentation URL: https://developers.google.com/analytics/
 * @class
 */
class Analytics {
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
    this._rootUrl = 'https://analytics.googleapis.com/';
    this._servicePath = 'analytics/v3/';

    // --- Public Interface Initialization ---

    this.data = {};

    this.data.ga = {};
    this.data.ga.get = (params) => this._makeRequest('data/ga', 'GET', params);

    this.data.mcf = {};
    this.data.mcf.get = (params) => this._makeRequest('data/mcf', 'GET', params);

    this.data.realtime = {};
    this.data.realtime.get = (params) => this._makeRequest('data/realtime', 'GET', params);

    this.management = {};

    this.management.accountSummaries = {};
    this.management.accountSummaries.list = (params) => this._makeRequest('management/accountSummaries', 'GET', params);

    this.management.accountUserLinks = {};
    this.management.accountUserLinks.delete = (params) => this._makeRequest('management/accounts/{accountId}/entityUserLinks/{linkId}', 'DELETE', params);
    this.management.accountUserLinks.insert = (params) => this._makeRequest('management/accounts/{accountId}/entityUserLinks', 'POST', params);
    this.management.accountUserLinks.list = (params) => this._makeRequest('management/accounts/{accountId}/entityUserLinks', 'GET', params);
    this.management.accountUserLinks.update = (params) => this._makeRequest('management/accounts/{accountId}/entityUserLinks/{linkId}', 'PUT', params);

    this.management.accounts = {};
    this.management.accounts.list = (params) => this._makeRequest('management/accounts', 'GET', params);

    this.management.clientId = {};
    this.management.clientId.hashClientId = (params) => this._makeRequest('management/clientId:hashClientId', 'POST', params);

    this.management.customDataSources = {};
    this.management.customDataSources.list = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/customDataSources', 'GET', params);

    this.management.customDimensions = {};
    this.management.customDimensions.get = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/customDimensions/{customDimensionId}', 'GET', params);
    this.management.customDimensions.insert = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/customDimensions', 'POST', params);
    this.management.customDimensions.list = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/customDimensions', 'GET', params);
    this.management.customDimensions.patch = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/customDimensions/{customDimensionId}', 'PATCH', params);
    this.management.customDimensions.update = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/customDimensions/{customDimensionId}', 'PUT', params);

    this.management.customMetrics = {};
    this.management.customMetrics.get = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/customMetrics/{customMetricId}', 'GET', params);
    this.management.customMetrics.insert = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/customMetrics', 'POST', params);
    this.management.customMetrics.list = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/customMetrics', 'GET', params);
    this.management.customMetrics.patch = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/customMetrics/{customMetricId}', 'PATCH', params);
    this.management.customMetrics.update = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/customMetrics/{customMetricId}', 'PUT', params);

    this.management.experiments = {};
    this.management.experiments.delete = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/experiments/{experimentId}', 'DELETE', params);
    this.management.experiments.get = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/experiments/{experimentId}', 'GET', params);
    this.management.experiments.insert = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/experiments', 'POST', params);
    this.management.experiments.list = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/experiments', 'GET', params);
    this.management.experiments.patch = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/experiments/{experimentId}', 'PATCH', params);
    this.management.experiments.update = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/experiments/{experimentId}', 'PUT', params);

    this.management.filters = {};
    this.management.filters.delete = (params) => this._makeRequest('management/accounts/{accountId}/filters/{filterId}', 'DELETE', params);
    this.management.filters.get = (params) => this._makeRequest('management/accounts/{accountId}/filters/{filterId}', 'GET', params);
    this.management.filters.insert = (params) => this._makeRequest('management/accounts/{accountId}/filters', 'POST', params);
    this.management.filters.list = (params) => this._makeRequest('management/accounts/{accountId}/filters', 'GET', params);
    this.management.filters.patch = (params) => this._makeRequest('management/accounts/{accountId}/filters/{filterId}', 'PATCH', params);
    this.management.filters.update = (params) => this._makeRequest('management/accounts/{accountId}/filters/{filterId}', 'PUT', params);

    this.management.goals = {};
    this.management.goals.get = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/goals/{goalId}', 'GET', params);
    this.management.goals.insert = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/goals', 'POST', params);
    this.management.goals.list = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/goals', 'GET', params);
    this.management.goals.patch = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/goals/{goalId}', 'PATCH', params);
    this.management.goals.update = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/goals/{goalId}', 'PUT', params);

    this.management.profileFilterLinks = {};
    this.management.profileFilterLinks.delete = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/profileFilterLinks/{linkId}', 'DELETE', params);
    this.management.profileFilterLinks.get = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/profileFilterLinks/{linkId}', 'GET', params);
    this.management.profileFilterLinks.insert = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/profileFilterLinks', 'POST', params);
    this.management.profileFilterLinks.list = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/profileFilterLinks', 'GET', params);
    this.management.profileFilterLinks.patch = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/profileFilterLinks/{linkId}', 'PATCH', params);
    this.management.profileFilterLinks.update = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/profileFilterLinks/{linkId}', 'PUT', params);

    this.management.profileUserLinks = {};
    this.management.profileUserLinks.delete = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/entityUserLinks/{linkId}', 'DELETE', params);
    this.management.profileUserLinks.insert = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/entityUserLinks', 'POST', params);
    this.management.profileUserLinks.list = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/entityUserLinks', 'GET', params);
    this.management.profileUserLinks.update = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/entityUserLinks/{linkId}', 'PUT', params);

    this.management.profiles = {};
    this.management.profiles.delete = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}', 'DELETE', params);
    this.management.profiles.get = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}', 'GET', params);
    this.management.profiles.insert = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles', 'POST', params);
    this.management.profiles.list = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles', 'GET', params);
    this.management.profiles.patch = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}', 'PATCH', params);
    this.management.profiles.update = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}', 'PUT', params);

    this.management.remarketingAudience = {};
    this.management.remarketingAudience.delete = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/remarketingAudiences/{remarketingAudienceId}', 'DELETE', params);
    this.management.remarketingAudience.get = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/remarketingAudiences/{remarketingAudienceId}', 'GET', params);
    this.management.remarketingAudience.insert = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/remarketingAudiences', 'POST', params);
    this.management.remarketingAudience.list = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/remarketingAudiences', 'GET', params);
    this.management.remarketingAudience.patch = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/remarketingAudiences/{remarketingAudienceId}', 'PATCH', params);
    this.management.remarketingAudience.update = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/remarketingAudiences/{remarketingAudienceId}', 'PUT', params);

    this.management.segments = {};
    this.management.segments.list = (params) => this._makeRequest('management/segments', 'GET', params);

    this.management.unsampledReports = {};
    this.management.unsampledReports.delete = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/unsampledReports/{unsampledReportId}', 'DELETE', params);
    this.management.unsampledReports.get = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/unsampledReports/{unsampledReportId}', 'GET', params);
    this.management.unsampledReports.insert = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/unsampledReports', 'POST', params);
    this.management.unsampledReports.list = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/profiles/{profileId}/unsampledReports', 'GET', params);

    this.management.uploads = {};
    this.management.uploads.deleteUploadData = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/customDataSources/{customDataSourceId}/deleteUploadData', 'POST', params);
    this.management.uploads.get = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/customDataSources/{customDataSourceId}/uploads/{uploadId}', 'GET', params);
    this.management.uploads.list = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/customDataSources/{customDataSourceId}/uploads', 'GET', params);
    this.management.uploads.uploadData = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/customDataSources/{customDataSourceId}/uploads', 'POST', params);

    this.management.webPropertyAdWordsLinks = {};
    this.management.webPropertyAdWordsLinks.delete = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/entityAdWordsLinks/{webPropertyAdWordsLinkId}', 'DELETE', params);
    this.management.webPropertyAdWordsLinks.get = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/entityAdWordsLinks/{webPropertyAdWordsLinkId}', 'GET', params);
    this.management.webPropertyAdWordsLinks.insert = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/entityAdWordsLinks', 'POST', params);
    this.management.webPropertyAdWordsLinks.list = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/entityAdWordsLinks', 'GET', params);
    this.management.webPropertyAdWordsLinks.patch = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/entityAdWordsLinks/{webPropertyAdWordsLinkId}', 'PATCH', params);
    this.management.webPropertyAdWordsLinks.update = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/entityAdWordsLinks/{webPropertyAdWordsLinkId}', 'PUT', params);

    this.management.webproperties = {};
    this.management.webproperties.get = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}', 'GET', params);
    this.management.webproperties.insert = (params) => this._makeRequest('management/accounts/{accountId}/webproperties', 'POST', params);
    this.management.webproperties.list = (params) => this._makeRequest('management/accounts/{accountId}/webproperties', 'GET', params);
    this.management.webproperties.patch = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}', 'PATCH', params);
    this.management.webproperties.update = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}', 'PUT', params);

    this.management.webpropertyUserLinks = {};
    this.management.webpropertyUserLinks.delete = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/entityUserLinks/{linkId}', 'DELETE', params);
    this.management.webpropertyUserLinks.insert = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/entityUserLinks', 'POST', params);
    this.management.webpropertyUserLinks.list = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/entityUserLinks', 'GET', params);
    this.management.webpropertyUserLinks.update = (params) => this._makeRequest('management/accounts/{accountId}/webproperties/{webPropertyId}/entityUserLinks/{linkId}', 'PUT', params);

    this.metadata = {};

    this.metadata.columns = {};
    this.metadata.columns.list = (params) => this._makeRequest('metadata/{reportType}/columns', 'GET', params);

    this.provisioning = {};
    this.provisioning.createAccountTicket = (params) => this._makeRequest('provisioning/createAccountTicket', 'POST', params);
    this.provisioning.createAccountTree = (params) => this._makeRequest('provisioning/createAccountTree', 'POST', params);

    this.userDeletion = {};

    this.userDeletion.userDeletionRequest = {};
    this.userDeletion.userDeletionRequest.upsert = (params) => this._makeRequest('userDeletion/userDeletionRequests:upsert', 'POST', params);
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
