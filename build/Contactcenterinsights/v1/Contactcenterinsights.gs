
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
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://contactcenterinsights.googleapis.com/';
    this._servicePath = '';


    this.projects = {};

    this.projects.locations = {};
    this.projects.locations.getSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.updateSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.getEncryptionSpec = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.queryMetrics = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+location}:queryMetrics', 'POST', apiParams, clientConfig);
    this.projects.locations.queryPerformanceOverview = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}:queryPerformanceOverview', 'POST', apiParams, clientConfig);
    this.projects.locations.listAllFeedbackLabels = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}:listAllFeedbackLabels', 'GET', apiParams, clientConfig);
    this.projects.locations.bulkUploadFeedbackLabels = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}:bulkUploadFeedbackLabels', 'POST', apiParams, clientConfig);
    this.projects.locations.bulkDownloadFeedbackLabels = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}:bulkDownloadFeedbackLabels', 'POST', apiParams, clientConfig);
    this.projects.locations.bulkDeleteFeedbackLabels = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}:bulkDeleteFeedbackLabels', 'POST', apiParams, clientConfig);

    this.projects.locations.operations = {};
    this.projects.locations.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}/operations', 'GET', apiParams, clientConfig);
    this.projects.locations.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:cancel', 'POST', apiParams, clientConfig);

    this.projects.locations.conversations = {};
    this.projects.locations.conversations.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/conversations', 'POST', apiParams, clientConfig);
    this.projects.locations.conversations.upload = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/conversations:upload', 'POST', apiParams, clientConfig);
    this.projects.locations.conversations.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.conversations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.conversations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/conversations', 'GET', apiParams, clientConfig);
    this.projects.locations.conversations.generateSignedAudio = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:generateSignedAudio', 'GET', apiParams, clientConfig);
    this.projects.locations.conversations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.conversations.sample = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/conversations:sample', 'POST', apiParams, clientConfig);
    this.projects.locations.conversations.bulkAnalyze = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/conversations:bulkAnalyze', 'POST', apiParams, clientConfig);
    this.projects.locations.conversations.bulkDelete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/conversations:bulkDelete', 'POST', apiParams, clientConfig);
    this.projects.locations.conversations.ingest = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/conversations:ingest', 'POST', apiParams, clientConfig);
    this.projects.locations.conversations.calculateStats = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+location}/conversations:calculateStats', 'GET', apiParams, clientConfig);

    this.projects.locations.conversations.analyses = {};
    this.projects.locations.conversations.analyses.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/analyses', 'POST', apiParams, clientConfig);
    this.projects.locations.conversations.analyses.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.conversations.analyses.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/analyses', 'GET', apiParams, clientConfig);
    this.projects.locations.conversations.analyses.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.conversations.segments = {};
    this.projects.locations.conversations.segments.bulkAnalyze = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/segments:bulkAnalyze', 'POST', apiParams, clientConfig);

    this.projects.locations.conversations.feedbackLabels = {};
    this.projects.locations.conversations.feedbackLabels.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/feedbackLabels', 'POST', apiParams, clientConfig);
    this.projects.locations.conversations.feedbackLabels.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/feedbackLabels', 'GET', apiParams, clientConfig);
    this.projects.locations.conversations.feedbackLabels.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.conversations.feedbackLabels.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.conversations.feedbackLabels.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.conversations.assessments = {};
    this.projects.locations.conversations.assessments.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/assessments', 'POST', apiParams, clientConfig);
    this.projects.locations.conversations.assessments.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.conversations.assessments.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/assessments', 'GET', apiParams, clientConfig);
    this.projects.locations.conversations.assessments.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.conversations.assessments.publish = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:publish', 'POST', apiParams, clientConfig);
    this.projects.locations.conversations.assessments.appeal = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:appeal', 'POST', apiParams, clientConfig);
    this.projects.locations.conversations.assessments.finalize = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:finalize', 'POST', apiParams, clientConfig);

    this.projects.locations.conversations.assessments.notes = {};
    this.projects.locations.conversations.assessments.notes.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/notes', 'POST', apiParams, clientConfig);
    this.projects.locations.conversations.assessments.notes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/notes', 'GET', apiParams, clientConfig);
    this.projects.locations.conversations.assessments.notes.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.conversations.assessments.notes.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.datasets = {};
    this.projects.locations.datasets.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/datasets', 'POST', apiParams, clientConfig);
    this.projects.locations.datasets.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/datasets', 'GET', apiParams, clientConfig);
    this.projects.locations.datasets.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.datasets.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.datasets.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.datasets.listAllFeedbackLabels = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}:listAllFeedbackLabels', 'GET', apiParams, clientConfig);
    this.projects.locations.datasets.bulkUploadFeedbackLabels = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}:bulkUploadFeedbackLabels', 'POST', apiParams, clientConfig);
    this.projects.locations.datasets.bulkDownloadFeedbackLabels = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}:bulkDownloadFeedbackLabels', 'POST', apiParams, clientConfig);
    this.projects.locations.datasets.bulkDeleteFeedbackLabels = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}:bulkDeleteFeedbackLabels', 'POST', apiParams, clientConfig);

    this.projects.locations.datasets.conversations = {};
    this.projects.locations.datasets.conversations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.datasets.conversations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/conversations', 'GET', apiParams, clientConfig);
    this.projects.locations.datasets.conversations.generateSignedAudio = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:generateSignedAudio', 'GET', apiParams, clientConfig);
    this.projects.locations.datasets.conversations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.datasets.conversations.sample = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/conversations:sample', 'POST', apiParams, clientConfig);
    this.projects.locations.datasets.conversations.bulkDelete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/conversations:bulkDelete', 'POST', apiParams, clientConfig);
    this.projects.locations.datasets.conversations.ingest = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/conversations:ingest', 'POST', apiParams, clientConfig);
    this.projects.locations.datasets.conversations.calculateStats = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+location}/conversations:calculateStats', 'POST', apiParams, clientConfig);

    this.projects.locations.datasets.conversations.feedbackLabels = {};
    this.projects.locations.datasets.conversations.feedbackLabels.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/feedbackLabels', 'POST', apiParams, clientConfig);
    this.projects.locations.datasets.conversations.feedbackLabels.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/feedbackLabels', 'GET', apiParams, clientConfig);
    this.projects.locations.datasets.conversations.feedbackLabels.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.datasets.conversations.feedbackLabels.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.datasets.conversations.feedbackLabels.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.datasets.insightsdata = {};
    this.projects.locations.datasets.insightsdata.export = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/insightsdata:export', 'POST', apiParams, clientConfig);

    this.projects.locations.insightsdata = {};
    this.projects.locations.insightsdata.export = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/insightsdata:export', 'POST', apiParams, clientConfig);

    this.projects.locations.issueModels = {};
    this.projects.locations.issueModels.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/issueModels', 'POST', apiParams, clientConfig);
    this.projects.locations.issueModels.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.issueModels.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.issueModels.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/issueModels', 'GET', apiParams, clientConfig);
    this.projects.locations.issueModels.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.issueModels.deploy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:deploy', 'POST', apiParams, clientConfig);
    this.projects.locations.issueModels.undeploy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:undeploy', 'POST', apiParams, clientConfig);
    this.projects.locations.issueModels.export = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:export', 'POST', apiParams, clientConfig);
    this.projects.locations.issueModels.import = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/issueModels:import', 'POST', apiParams, clientConfig);
    this.projects.locations.issueModels.calculateIssueModelStats = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+issueModel}:calculateIssueModelStats', 'GET', apiParams, clientConfig);

    this.projects.locations.issueModels.issues = {};
    this.projects.locations.issueModels.issues.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.issueModels.issues.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/issues', 'GET', apiParams, clientConfig);
    this.projects.locations.issueModels.issues.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.issueModels.issues.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/issues', 'POST', apiParams, clientConfig);
    this.projects.locations.issueModels.issues.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.phraseMatchers = {};
    this.projects.locations.phraseMatchers.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/phraseMatchers', 'POST', apiParams, clientConfig);
    this.projects.locations.phraseMatchers.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.phraseMatchers.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/phraseMatchers', 'GET', apiParams, clientConfig);
    this.projects.locations.phraseMatchers.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.phraseMatchers.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects.locations.analysisRules = {};
    this.projects.locations.analysisRules.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/analysisRules', 'POST', apiParams, clientConfig);
    this.projects.locations.analysisRules.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.analysisRules.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/analysisRules', 'GET', apiParams, clientConfig);
    this.projects.locations.analysisRules.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.analysisRules.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.assessmentRules = {};
    this.projects.locations.assessmentRules.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/assessmentRules', 'POST', apiParams, clientConfig);
    this.projects.locations.assessmentRules.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.assessmentRules.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/assessmentRules', 'GET', apiParams, clientConfig);
    this.projects.locations.assessmentRules.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.assessmentRules.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.encryptionSpec = {};
    this.projects.locations.encryptionSpec.initialize = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:initialize', 'POST', apiParams, clientConfig);

    this.projects.locations.views = {};
    this.projects.locations.views.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/views', 'POST', apiParams, clientConfig);
    this.projects.locations.views.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.views.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/views', 'GET', apiParams, clientConfig);
    this.projects.locations.views.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.views.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.qaQuestionTags = {};
    this.projects.locations.qaQuestionTags.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/qaQuestionTags', 'POST', apiParams, clientConfig);
    this.projects.locations.qaQuestionTags.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.qaQuestionTags.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.qaQuestionTags.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.qaQuestionTags.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/qaQuestionTags', 'GET', apiParams, clientConfig);

    this.projects.locations.qaScorecards = {};
    this.projects.locations.qaScorecards.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/qaScorecards', 'POST', apiParams, clientConfig);
    this.projects.locations.qaScorecards.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.qaScorecards.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.qaScorecards.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.qaScorecards.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/qaScorecards', 'GET', apiParams, clientConfig);

    this.projects.locations.qaScorecards.revisions = {};
    this.projects.locations.qaScorecards.revisions.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/revisions', 'POST', apiParams, clientConfig);
    this.projects.locations.qaScorecards.revisions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.qaScorecards.revisions.tuneQaScorecardRevision = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}:tuneQaScorecardRevision', 'POST', apiParams, clientConfig);
    this.projects.locations.qaScorecards.revisions.deploy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:deploy', 'POST', apiParams, clientConfig);
    this.projects.locations.qaScorecards.revisions.undeploy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:undeploy', 'POST', apiParams, clientConfig);
    this.projects.locations.qaScorecards.revisions.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.qaScorecards.revisions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/revisions', 'GET', apiParams, clientConfig);

    this.projects.locations.qaScorecards.revisions.qaQuestions = {};
    this.projects.locations.qaScorecards.revisions.qaQuestions.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/qaQuestions', 'POST', apiParams, clientConfig);
    this.projects.locations.qaScorecards.revisions.qaQuestions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.qaScorecards.revisions.qaQuestions.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.qaScorecards.revisions.qaQuestions.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.qaScorecards.revisions.qaQuestions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/qaQuestions', 'GET', apiParams, clientConfig);

    this.projects.locations.authorizedViewSets = {};
    this.projects.locations.authorizedViewSets.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/authorizedViewSets', 'POST', apiParams, clientConfig);
    this.projects.locations.authorizedViewSets.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.authorizedViewSets.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/authorizedViewSets', 'GET', apiParams, clientConfig);
    this.projects.locations.authorizedViewSets.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.authorizedViewSets.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.authorizedViewSets.authorizedViews = {};
    this.projects.locations.authorizedViewSets.authorizedViews.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.locations.authorizedViewSets.authorizedViews.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', apiParams, clientConfig);
    this.projects.locations.authorizedViewSets.authorizedViews.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);
    this.projects.locations.authorizedViewSets.authorizedViews.queryMetrics = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+location}:queryMetrics', 'POST', apiParams, clientConfig);
    this.projects.locations.authorizedViewSets.authorizedViews.queryPerformanceOverview = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}:queryPerformanceOverview', 'POST', apiParams, clientConfig);
    this.projects.locations.authorizedViewSets.authorizedViews.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/authorizedViews', 'POST', apiParams, clientConfig);
    this.projects.locations.authorizedViewSets.authorizedViews.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.authorizedViewSets.authorizedViews.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/authorizedViews', 'GET', apiParams, clientConfig);
    this.projects.locations.authorizedViewSets.authorizedViews.search = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/authorizedViews:search', 'GET', apiParams, clientConfig);
    this.projects.locations.authorizedViewSets.authorizedViews.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.authorizedViewSets.authorizedViews.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.authorizedViewSets.authorizedViews.operations = {};
    this.projects.locations.authorizedViewSets.authorizedViews.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}/operations', 'GET', apiParams, clientConfig);
    this.projects.locations.authorizedViewSets.authorizedViews.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.authorizedViewSets.authorizedViews.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:cancel', 'POST', apiParams, clientConfig);

    this.projects.locations.authorizedViewSets.authorizedViews.conversations = {};
    this.projects.locations.authorizedViewSets.authorizedViews.conversations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.authorizedViewSets.authorizedViews.conversations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/conversations', 'GET', apiParams, clientConfig);
    this.projects.locations.authorizedViewSets.authorizedViews.conversations.generateSignedAudio = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:generateSignedAudio', 'GET', apiParams, clientConfig);
    this.projects.locations.authorizedViewSets.authorizedViews.conversations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.authorizedViewSets.authorizedViews.conversations.calculateStats = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+location}/conversations:calculateStats', 'GET', apiParams, clientConfig);

    this.projects.locations.authorizedViewSets.authorizedViews.conversations.feedbackLabels = {};
    this.projects.locations.authorizedViewSets.authorizedViews.conversations.feedbackLabels.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/feedbackLabels', 'POST', apiParams, clientConfig);
    this.projects.locations.authorizedViewSets.authorizedViews.conversations.feedbackLabels.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/feedbackLabels', 'GET', apiParams, clientConfig);
    this.projects.locations.authorizedViewSets.authorizedViews.conversations.feedbackLabels.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.authorizedViewSets.authorizedViews.conversations.feedbackLabels.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.authorizedViewSets.authorizedViews.conversations.feedbackLabels.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.authorizedViewSets.authorizedViews.conversations.assessments = {};
    this.projects.locations.authorizedViewSets.authorizedViews.conversations.assessments.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/assessments', 'POST', apiParams, clientConfig);
    this.projects.locations.authorizedViewSets.authorizedViews.conversations.assessments.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.authorizedViewSets.authorizedViews.conversations.assessments.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/assessments', 'GET', apiParams, clientConfig);
    this.projects.locations.authorizedViewSets.authorizedViews.conversations.assessments.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.authorizedViewSets.authorizedViews.conversations.assessments.publish = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:publish', 'POST', apiParams, clientConfig);
    this.projects.locations.authorizedViewSets.authorizedViews.conversations.assessments.appeal = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:appeal', 'POST', apiParams, clientConfig);
    this.projects.locations.authorizedViewSets.authorizedViews.conversations.assessments.finalize = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:finalize', 'POST', apiParams, clientConfig);

    this.projects.locations.authorizedViewSets.authorizedViews.conversations.assessments.notes = {};
    this.projects.locations.authorizedViewSets.authorizedViews.conversations.assessments.notes.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/notes', 'POST', apiParams, clientConfig);
    this.projects.locations.authorizedViewSets.authorizedViews.conversations.assessments.notes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/notes', 'GET', apiParams, clientConfig);
    this.projects.locations.authorizedViewSets.authorizedViews.conversations.assessments.notes.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.authorizedViewSets.authorizedViews.conversations.assessments.notes.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
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
