
/**
 * Google Apps Script client library for the Contact Center AI Insights API
 * Documentation URL: https://cloud.google.com/contact-center/insights/docs
 * @class
 */
class Contactcenterinsights {
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
    this._rootUrl = 'https://contactcenterinsights.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.locations = {};
    this.projects.locations.getSettings = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.updateSettings = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.getEncryptionSpec = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.queryMetrics = (params) => this._makeRequest('v1/{+location}:queryMetrics', 'POST', params);
    this.projects.locations.queryPerformanceOverview = (params) => this._makeRequest('v1/{+parent}:queryPerformanceOverview', 'POST', params);
    this.projects.locations.listAllFeedbackLabels = (params) => this._makeRequest('v1/{+parent}:listAllFeedbackLabels', 'GET', params);
    this.projects.locations.bulkUploadFeedbackLabels = (params) => this._makeRequest('v1/{+parent}:bulkUploadFeedbackLabels', 'POST', params);
    this.projects.locations.bulkDownloadFeedbackLabels = (params) => this._makeRequest('v1/{+parent}:bulkDownloadFeedbackLabels', 'POST', params);
    this.projects.locations.bulkDeleteFeedbackLabels = (params) => this._makeRequest('v1/{+parent}:bulkDeleteFeedbackLabels', 'POST', params);

    this.projects.locations.operations = {};
    this.projects.locations.operations.list = (params) => this._makeRequest('v1/{+name}/operations', 'GET', params);
    this.projects.locations.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);

    this.projects.locations.conversations = {};
    this.projects.locations.conversations.create = (params) => this._makeRequest('v1/{+parent}/conversations', 'POST', params);
    this.projects.locations.conversations.upload = (params) => this._makeRequest('v1/{+parent}/conversations:upload', 'POST', params);
    this.projects.locations.conversations.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.conversations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.conversations.list = (params) => this._makeRequest('v1/{+parent}/conversations', 'GET', params);
    this.projects.locations.conversations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.conversations.bulkAnalyze = (params) => this._makeRequest('v1/{+parent}/conversations:bulkAnalyze', 'POST', params);
    this.projects.locations.conversations.bulkDelete = (params) => this._makeRequest('v1/{+parent}/conversations:bulkDelete', 'POST', params);
    this.projects.locations.conversations.ingest = (params) => this._makeRequest('v1/{+parent}/conversations:ingest', 'POST', params);
    this.projects.locations.conversations.calculateStats = (params) => this._makeRequest('v1/{+location}/conversations:calculateStats', 'GET', params);

    this.projects.locations.conversations.analyses = {};
    this.projects.locations.conversations.analyses.create = (params) => this._makeRequest('v1/{+parent}/analyses', 'POST', params);
    this.projects.locations.conversations.analyses.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.conversations.analyses.list = (params) => this._makeRequest('v1/{+parent}/analyses', 'GET', params);
    this.projects.locations.conversations.analyses.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.conversations.feedbackLabels = {};
    this.projects.locations.conversations.feedbackLabels.create = (params) => this._makeRequest('v1/{+parent}/feedbackLabels', 'POST', params);
    this.projects.locations.conversations.feedbackLabels.list = (params) => this._makeRequest('v1/{+parent}/feedbackLabels', 'GET', params);
    this.projects.locations.conversations.feedbackLabels.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.conversations.feedbackLabels.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.conversations.feedbackLabels.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.conversations.assessments = {};
    this.projects.locations.conversations.assessments.create = (params) => this._makeRequest('v1/{+parent}/assessments', 'POST', params);
    this.projects.locations.conversations.assessments.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.conversations.assessments.list = (params) => this._makeRequest('v1/{+parent}/assessments', 'GET', params);
    this.projects.locations.conversations.assessments.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.conversations.assessments.publish = (params) => this._makeRequest('v1/{+name}:publish', 'POST', params);
    this.projects.locations.conversations.assessments.appeal = (params) => this._makeRequest('v1/{+name}:appeal', 'POST', params);
    this.projects.locations.conversations.assessments.finalize = (params) => this._makeRequest('v1/{+name}:finalize', 'POST', params);

    this.projects.locations.conversations.assessments.notes = {};
    this.projects.locations.conversations.assessments.notes.create = (params) => this._makeRequest('v1/{+parent}/notes', 'POST', params);
    this.projects.locations.conversations.assessments.notes.list = (params) => this._makeRequest('v1/{+parent}/notes', 'GET', params);
    this.projects.locations.conversations.assessments.notes.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.conversations.assessments.notes.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.insightsdata = {};
    this.projects.locations.insightsdata.export = (params) => this._makeRequest('v1/{+parent}/insightsdata:export', 'POST', params);

    this.projects.locations.issueModels = {};
    this.projects.locations.issueModels.create = (params) => this._makeRequest('v1/{+parent}/issueModels', 'POST', params);
    this.projects.locations.issueModels.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.issueModels.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.issueModels.list = (params) => this._makeRequest('v1/{+parent}/issueModels', 'GET', params);
    this.projects.locations.issueModels.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.issueModels.deploy = (params) => this._makeRequest('v1/{+name}:deploy', 'POST', params);
    this.projects.locations.issueModels.undeploy = (params) => this._makeRequest('v1/{+name}:undeploy', 'POST', params);
    this.projects.locations.issueModels.export = (params) => this._makeRequest('v1/{+name}:export', 'POST', params);
    this.projects.locations.issueModels.import = (params) => this._makeRequest('v1/{+parent}/issueModels:import', 'POST', params);
    this.projects.locations.issueModels.calculateIssueModelStats = (params) => this._makeRequest('v1/{+issueModel}:calculateIssueModelStats', 'GET', params);

    this.projects.locations.issueModels.issues = {};
    this.projects.locations.issueModels.issues.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.issueModels.issues.list = (params) => this._makeRequest('v1/{+parent}/issues', 'GET', params);
    this.projects.locations.issueModels.issues.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.issueModels.issues.create = (params) => this._makeRequest('v1/{+parent}/issues', 'POST', params);
    this.projects.locations.issueModels.issues.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.phraseMatchers = {};
    this.projects.locations.phraseMatchers.create = (params) => this._makeRequest('v1/{+parent}/phraseMatchers', 'POST', params);
    this.projects.locations.phraseMatchers.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.phraseMatchers.list = (params) => this._makeRequest('v1/{+parent}/phraseMatchers', 'GET', params);
    this.projects.locations.phraseMatchers.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.phraseMatchers.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.projects.locations.analysisRules = {};
    this.projects.locations.analysisRules.create = (params) => this._makeRequest('v1/{+parent}/analysisRules', 'POST', params);
    this.projects.locations.analysisRules.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.analysisRules.list = (params) => this._makeRequest('v1/{+parent}/analysisRules', 'GET', params);
    this.projects.locations.analysisRules.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.analysisRules.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.assessmentRules = {};
    this.projects.locations.assessmentRules.create = (params) => this._makeRequest('v1/{+parent}/assessmentRules', 'POST', params);
    this.projects.locations.assessmentRules.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.assessmentRules.list = (params) => this._makeRequest('v1/{+parent}/assessmentRules', 'GET', params);
    this.projects.locations.assessmentRules.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.assessmentRules.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.encryptionSpec = {};
    this.projects.locations.encryptionSpec.initialize = (params) => this._makeRequest('v1/{+name}:initialize', 'POST', params);

    this.projects.locations.views = {};
    this.projects.locations.views.create = (params) => this._makeRequest('v1/{+parent}/views', 'POST', params);
    this.projects.locations.views.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.views.list = (params) => this._makeRequest('v1/{+parent}/views', 'GET', params);
    this.projects.locations.views.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.views.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.qaQuestionTags = {};
    this.projects.locations.qaQuestionTags.create = (params) => this._makeRequest('v1/{+parent}/qaQuestionTags', 'POST', params);
    this.projects.locations.qaQuestionTags.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.qaQuestionTags.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.qaQuestionTags.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.qaQuestionTags.list = (params) => this._makeRequest('v1/{+parent}/qaQuestionTags', 'GET', params);

    this.projects.locations.qaScorecards = {};
    this.projects.locations.qaScorecards.create = (params) => this._makeRequest('v1/{+parent}/qaScorecards', 'POST', params);
    this.projects.locations.qaScorecards.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.qaScorecards.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.qaScorecards.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.qaScorecards.list = (params) => this._makeRequest('v1/{+parent}/qaScorecards', 'GET', params);

    this.projects.locations.qaScorecards.revisions = {};
    this.projects.locations.qaScorecards.revisions.create = (params) => this._makeRequest('v1/{+parent}/revisions', 'POST', params);
    this.projects.locations.qaScorecards.revisions.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.qaScorecards.revisions.tuneQaScorecardRevision = (params) => this._makeRequest('v1/{+parent}:tuneQaScorecardRevision', 'POST', params);
    this.projects.locations.qaScorecards.revisions.deploy = (params) => this._makeRequest('v1/{+name}:deploy', 'POST', params);
    this.projects.locations.qaScorecards.revisions.undeploy = (params) => this._makeRequest('v1/{+name}:undeploy', 'POST', params);
    this.projects.locations.qaScorecards.revisions.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.qaScorecards.revisions.list = (params) => this._makeRequest('v1/{+parent}/revisions', 'GET', params);

    this.projects.locations.qaScorecards.revisions.qaQuestions = {};
    this.projects.locations.qaScorecards.revisions.qaQuestions.create = (params) => this._makeRequest('v1/{+parent}/qaQuestions', 'POST', params);
    this.projects.locations.qaScorecards.revisions.qaQuestions.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.qaScorecards.revisions.qaQuestions.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.qaScorecards.revisions.qaQuestions.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.qaScorecards.revisions.qaQuestions.list = (params) => this._makeRequest('v1/{+parent}/qaQuestions', 'GET', params);

    this.projects.locations.datasets = {};
    this.projects.locations.datasets.listAllFeedbackLabels = (params) => this._makeRequest('v1/{+parent}:listAllFeedbackLabels', 'GET', params);
    this.projects.locations.datasets.bulkUploadFeedbackLabels = (params) => this._makeRequest('v1/{+parent}:bulkUploadFeedbackLabels', 'POST', params);
    this.projects.locations.datasets.bulkDownloadFeedbackLabels = (params) => this._makeRequest('v1/{+parent}:bulkDownloadFeedbackLabels', 'POST', params);
    this.projects.locations.datasets.bulkDeleteFeedbackLabels = (params) => this._makeRequest('v1/{+parent}:bulkDeleteFeedbackLabels', 'POST', params);

    this.projects.locations.datasets.conversations = {};
    this.projects.locations.datasets.conversations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.datasets.conversations.list = (params) => this._makeRequest('v1/{+parent}/conversations', 'GET', params);
    this.projects.locations.datasets.conversations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.datasets.conversations.bulkAnalyze = (params) => this._makeRequest('v1/{+parent}/conversations:bulkAnalyze', 'POST', params);
    this.projects.locations.datasets.conversations.bulkDelete = (params) => this._makeRequest('v1/{+parent}/conversations:bulkDelete', 'POST', params);
    this.projects.locations.datasets.conversations.ingest = (params) => this._makeRequest('v1/{+parent}/conversations:ingest', 'POST', params);
    this.projects.locations.datasets.conversations.calculateStats = (params) => this._makeRequest('v1/{+location}/conversations:calculateStats', 'POST', params);

    this.projects.locations.datasets.conversations.analyses = {};
    this.projects.locations.datasets.conversations.analyses.create = (params) => this._makeRequest('v1/{+parent}/analyses', 'POST', params);
    this.projects.locations.datasets.conversations.analyses.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.datasets.conversations.analyses.list = (params) => this._makeRequest('v1/{+parent}/analyses', 'GET', params);
    this.projects.locations.datasets.conversations.analyses.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.datasets.conversations.feedbackLabels = {};
    this.projects.locations.datasets.conversations.feedbackLabels.create = (params) => this._makeRequest('v1/{+parent}/feedbackLabels', 'POST', params);
    this.projects.locations.datasets.conversations.feedbackLabels.list = (params) => this._makeRequest('v1/{+parent}/feedbackLabels', 'GET', params);
    this.projects.locations.datasets.conversations.feedbackLabels.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.datasets.conversations.feedbackLabels.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.datasets.conversations.feedbackLabels.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.datasets.insightsdata = {};
    this.projects.locations.datasets.insightsdata.export = (params) => this._makeRequest('v1/{+parent}/insightsdata:export', 'POST', params);

    this.projects.locations.authorizedViewSets = {};
    this.projects.locations.authorizedViewSets.create = (params) => this._makeRequest('v1/{+parent}/authorizedViewSets', 'POST', params);
    this.projects.locations.authorizedViewSets.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.authorizedViewSets.list = (params) => this._makeRequest('v1/{+parent}/authorizedViewSets', 'GET', params);
    this.projects.locations.authorizedViewSets.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.authorizedViewSets.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.authorizedViewSets.authorizedViews = {};
    this.projects.locations.authorizedViewSets.authorizedViews.queryMetrics = (params) => this._makeRequest('v1/{+location}:queryMetrics', 'POST', params);
    this.projects.locations.authorizedViewSets.authorizedViews.queryPerformanceOverview = (params) => this._makeRequest('v1/{+parent}:queryPerformanceOverview', 'POST', params);
    this.projects.locations.authorizedViewSets.authorizedViews.create = (params) => this._makeRequest('v1/{+parent}/authorizedViews', 'POST', params);
    this.projects.locations.authorizedViewSets.authorizedViews.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.authorizedViewSets.authorizedViews.list = (params) => this._makeRequest('v1/{+parent}/authorizedViews', 'GET', params);
    this.projects.locations.authorizedViewSets.authorizedViews.search = (params) => this._makeRequest('v1/{+parent}/authorizedViews:search', 'GET', params);
    this.projects.locations.authorizedViewSets.authorizedViews.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.authorizedViewSets.authorizedViews.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.authorizedViewSets.authorizedViews.operations = {};
    this.projects.locations.authorizedViewSets.authorizedViews.operations.list = (params) => this._makeRequest('v1/{+name}/operations', 'GET', params);
    this.projects.locations.authorizedViewSets.authorizedViews.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.authorizedViewSets.authorizedViews.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);

    this.projects.locations.authorizedViewSets.authorizedViews.conversations = {};
    this.projects.locations.authorizedViewSets.authorizedViews.conversations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.authorizedViewSets.authorizedViews.conversations.list = (params) => this._makeRequest('v1/{+parent}/conversations', 'GET', params);
    this.projects.locations.authorizedViewSets.authorizedViews.conversations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.authorizedViewSets.authorizedViews.conversations.bulkAnalyze = (params) => this._makeRequest('v1/{+parent}/conversations:bulkAnalyze', 'POST', params);
    this.projects.locations.authorizedViewSets.authorizedViews.conversations.calculateStats = (params) => this._makeRequest('v1/{+location}/conversations:calculateStats', 'GET', params);

    this.projects.locations.authorizedViewSets.authorizedViews.conversations.analyses = {};
    this.projects.locations.authorizedViewSets.authorizedViews.conversations.analyses.create = (params) => this._makeRequest('v1/{+parent}/analyses', 'POST', params);
    this.projects.locations.authorizedViewSets.authorizedViews.conversations.analyses.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.authorizedViewSets.authorizedViews.conversations.analyses.list = (params) => this._makeRequest('v1/{+parent}/analyses', 'GET', params);
    this.projects.locations.authorizedViewSets.authorizedViews.conversations.analyses.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.authorizedViewSets.authorizedViews.conversations.feedbackLabels = {};
    this.projects.locations.authorizedViewSets.authorizedViews.conversations.feedbackLabels.create = (params) => this._makeRequest('v1/{+parent}/feedbackLabels', 'POST', params);
    this.projects.locations.authorizedViewSets.authorizedViews.conversations.feedbackLabels.list = (params) => this._makeRequest('v1/{+parent}/feedbackLabels', 'GET', params);
    this.projects.locations.authorizedViewSets.authorizedViews.conversations.feedbackLabels.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.authorizedViewSets.authorizedViews.conversations.feedbackLabels.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.authorizedViewSets.authorizedViews.conversations.feedbackLabels.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.authorizedViewSets.authorizedViews.conversations.assessments = {};
    this.projects.locations.authorizedViewSets.authorizedViews.conversations.assessments.create = (params) => this._makeRequest('v1/{+parent}/assessments', 'POST', params);
    this.projects.locations.authorizedViewSets.authorizedViews.conversations.assessments.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.authorizedViewSets.authorizedViews.conversations.assessments.list = (params) => this._makeRequest('v1/{+parent}/assessments', 'GET', params);
    this.projects.locations.authorizedViewSets.authorizedViews.conversations.assessments.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.authorizedViewSets.authorizedViews.conversations.assessments.publish = (params) => this._makeRequest('v1/{+name}:publish', 'POST', params);
    this.projects.locations.authorizedViewSets.authorizedViews.conversations.assessments.appeal = (params) => this._makeRequest('v1/{+name}:appeal', 'POST', params);
    this.projects.locations.authorizedViewSets.authorizedViews.conversations.assessments.finalize = (params) => this._makeRequest('v1/{+name}:finalize', 'POST', params);

    this.projects.locations.authorizedViewSets.authorizedViews.conversations.assessments.notes = {};
    this.projects.locations.authorizedViewSets.authorizedViews.conversations.assessments.notes.create = (params) => this._makeRequest('v1/{+parent}/notes', 'POST', params);
    this.projects.locations.authorizedViewSets.authorizedViews.conversations.assessments.notes.list = (params) => this._makeRequest('v1/{+parent}/notes', 'GET', params);
    this.projects.locations.authorizedViewSets.authorizedViews.conversations.assessments.notes.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.authorizedViewSets.authorizedViews.conversations.assessments.notes.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
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
        // Fix: URI-encode path parameters for safety.
        url = url.replace(placeholder, encodeURIComponent(remainingParams[paramName]));
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
