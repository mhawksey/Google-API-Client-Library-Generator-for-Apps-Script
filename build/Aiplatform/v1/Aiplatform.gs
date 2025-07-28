
/**
 * Google Apps Script client library for the Vertex AI API
 * Documentation URL: https://cloud.google.com/vertex-ai/
 * @class
 */
class Aiplatform {
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
    this._rootUrl = 'https://aiplatform.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.datasets = {};
    this.datasets.create = (params) => this._makeRequest('v1/datasets', 'POST', params);
    this.datasets.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.datasets.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.datasets.list = (params) => this._makeRequest('v1/datasets', 'GET', params);
    this.datasets.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.datasets.datasetVersions = {};
    this.datasets.datasetVersions.create = (params) => this._makeRequest('v1/{+parent}/datasetVersions', 'POST', params);
    this.datasets.datasetVersions.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.datasets.datasetVersions.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.datasets.datasetVersions.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.datasets.datasetVersions.list = (params) => this._makeRequest('v1/{+parent}/datasetVersions', 'GET', params);
    this.datasets.datasetVersions.restore = (params) => this._makeRequest('v1/{+name}:restore', 'GET', params);

    this.projects = {};
    this.projects.updateCacheConfig = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.getCacheConfig = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations = {};
    this.projects.locations.list = (params) => this._makeRequest('v1/{+name}/locations', 'GET', params);
    this.projects.locations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.evaluateInstances = (params) => this._makeRequest('v1/{+location}:evaluateInstances', 'POST', params);
    this.projects.locations.evaluateDataset = (params) => this._makeRequest('v1/{+location}:evaluateDataset', 'POST', params);
    this.projects.locations.deploy = (params) => this._makeRequest('v1/{+destination}:deploy', 'POST', params);
    this.projects.locations.updateRagEngineConfig = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.getRagEngineConfig = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.retrieveContexts = (params) => this._makeRequest('v1/{+parent}:retrieveContexts', 'POST', params);
    this.projects.locations.augmentPrompt = (params) => this._makeRequest('v1/{+parent}:augmentPrompt', 'POST', params);
    this.projects.locations.corroborateContent = (params) => this._makeRequest('v1/{+parent}:corroborateContent', 'POST', params);

    this.projects.locations.featurestores = {};
    this.projects.locations.featurestores.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.featurestores.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'POST', params);
    this.projects.locations.featurestores.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);
    this.projects.locations.featurestores.create = (params) => this._makeRequest('v1/{+parent}/featurestores', 'POST', params);
    this.projects.locations.featurestores.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.featurestores.list = (params) => this._makeRequest('v1/{+parent}/featurestores', 'GET', params);
    this.projects.locations.featurestores.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.featurestores.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.featurestores.batchReadFeatureValues = (params) => this._makeRequest('v1/{+featurestore}:batchReadFeatureValues', 'POST', params);
    this.projects.locations.featurestores.searchFeatures = (params) => this._makeRequest('v1/{+location}/featurestores:searchFeatures', 'GET', params);

    this.projects.locations.featurestores.entityTypes = {};
    this.projects.locations.featurestores.entityTypes.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.featurestores.entityTypes.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'POST', params);
    this.projects.locations.featurestores.entityTypes.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);
    this.projects.locations.featurestores.entityTypes.readFeatureValues = (params) => this._makeRequest('v1/{+entityType}:readFeatureValues', 'POST', params);
    this.projects.locations.featurestores.entityTypes.streamingReadFeatureValues = (params) => this._makeRequest('v1/{+entityType}:streamingReadFeatureValues', 'POST', params);
    this.projects.locations.featurestores.entityTypes.writeFeatureValues = (params) => this._makeRequest('v1/{+entityType}:writeFeatureValues', 'POST', params);
    this.projects.locations.featurestores.entityTypes.create = (params) => this._makeRequest('v1/{+parent}/entityTypes', 'POST', params);
    this.projects.locations.featurestores.entityTypes.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.featurestores.entityTypes.list = (params) => this._makeRequest('v1/{+parent}/entityTypes', 'GET', params);
    this.projects.locations.featurestores.entityTypes.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.featurestores.entityTypes.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.featurestores.entityTypes.importFeatureValues = (params) => this._makeRequest('v1/{+entityType}:importFeatureValues', 'POST', params);
    this.projects.locations.featurestores.entityTypes.exportFeatureValues = (params) => this._makeRequest('v1/{+entityType}:exportFeatureValues', 'POST', params);
    this.projects.locations.featurestores.entityTypes.deleteFeatureValues = (params) => this._makeRequest('v1/{+entityType}:deleteFeatureValues', 'POST', params);

    this.projects.locations.featurestores.entityTypes.operations = {};
    this.projects.locations.featurestores.entityTypes.operations.list = (params) => this._makeRequest('v1/{+name}/operations', 'GET', params);
    this.projects.locations.featurestores.entityTypes.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.featurestores.entityTypes.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.featurestores.entityTypes.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);
    this.projects.locations.featurestores.entityTypes.operations.wait = (params) => this._makeRequest('v1/{+name}:wait', 'POST', params);

    this.projects.locations.featurestores.entityTypes.features = {};
    this.projects.locations.featurestores.entityTypes.features.create = (params) => this._makeRequest('v1/{+parent}/features', 'POST', params);
    this.projects.locations.featurestores.entityTypes.features.batchCreate = (params) => this._makeRequest('v1/{+parent}/features:batchCreate', 'POST', params);
    this.projects.locations.featurestores.entityTypes.features.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.featurestores.entityTypes.features.list = (params) => this._makeRequest('v1/{+parent}/features', 'GET', params);
    this.projects.locations.featurestores.entityTypes.features.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.featurestores.entityTypes.features.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.featurestores.entityTypes.features.operations = {};
    this.projects.locations.featurestores.entityTypes.features.operations.list = (params) => this._makeRequest('v1/{+name}/operations', 'GET', params);
    this.projects.locations.featurestores.entityTypes.features.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.featurestores.entityTypes.features.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.featurestores.entityTypes.features.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);
    this.projects.locations.featurestores.entityTypes.features.operations.wait = (params) => this._makeRequest('v1/{+name}:wait', 'POST', params);

    this.projects.locations.featurestores.operations = {};
    this.projects.locations.featurestores.operations.list = (params) => this._makeRequest('v1/{+name}/operations', 'GET', params);
    this.projects.locations.featurestores.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.featurestores.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.featurestores.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);
    this.projects.locations.featurestores.operations.wait = (params) => this._makeRequest('v1/{+name}:wait', 'POST', params);

    this.projects.locations.models = {};
    this.projects.locations.models.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.models.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'POST', params);
    this.projects.locations.models.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);
    this.projects.locations.models.upload = (params) => this._makeRequest('v1/{+parent}/models:upload', 'POST', params);
    this.projects.locations.models.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.models.list = (params) => this._makeRequest('v1/{+parent}/models', 'GET', params);
    this.projects.locations.models.listVersions = (params) => this._makeRequest('v1/{+name}:listVersions', 'GET', params);
    this.projects.locations.models.listCheckpoints = (params) => this._makeRequest('v1/{+name}:listCheckpoints', 'GET', params);
    this.projects.locations.models.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.models.updateExplanationDataset = (params) => this._makeRequest('v1/{+model}:updateExplanationDataset', 'POST', params);
    this.projects.locations.models.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.models.deleteVersion = (params) => this._makeRequest('v1/{+name}:deleteVersion', 'DELETE', params);
    this.projects.locations.models.mergeVersionAliases = (params) => this._makeRequest('v1/{+name}:mergeVersionAliases', 'POST', params);
    this.projects.locations.models.export = (params) => this._makeRequest('v1/{+name}:export', 'POST', params);
    this.projects.locations.models.copy = (params) => this._makeRequest('v1/{+parent}/models:copy', 'POST', params);

    this.projects.locations.models.operations = {};
    this.projects.locations.models.operations.list = (params) => this._makeRequest('v1/{+name}/operations', 'GET', params);
    this.projects.locations.models.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.models.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.models.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);
    this.projects.locations.models.operations.wait = (params) => this._makeRequest('v1/{+name}:wait', 'POST', params);

    this.projects.locations.models.evaluations = {};
    this.projects.locations.models.evaluations.import = (params) => this._makeRequest('v1/{+parent}/evaluations:import', 'POST', params);
    this.projects.locations.models.evaluations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.models.evaluations.list = (params) => this._makeRequest('v1/{+parent}/evaluations', 'GET', params);

    this.projects.locations.models.evaluations.operations = {};
    this.projects.locations.models.evaluations.operations.list = (params) => this._makeRequest('v1/{+name}/operations', 'GET', params);
    this.projects.locations.models.evaluations.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.models.evaluations.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.models.evaluations.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);
    this.projects.locations.models.evaluations.operations.wait = (params) => this._makeRequest('v1/{+name}:wait', 'POST', params);

    this.projects.locations.models.evaluations.slices = {};
    this.projects.locations.models.evaluations.slices.batchImport = (params) => this._makeRequest('v1/{+parent}:batchImport', 'POST', params);
    this.projects.locations.models.evaluations.slices.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.models.evaluations.slices.list = (params) => this._makeRequest('v1/{+parent}/slices', 'GET', params);

    this.projects.locations.notebookRuntimeTemplates = {};
    this.projects.locations.notebookRuntimeTemplates.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.notebookRuntimeTemplates.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'POST', params);
    this.projects.locations.notebookRuntimeTemplates.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);
    this.projects.locations.notebookRuntimeTemplates.create = (params) => this._makeRequest('v1/{+parent}/notebookRuntimeTemplates', 'POST', params);
    this.projects.locations.notebookRuntimeTemplates.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.notebookRuntimeTemplates.list = (params) => this._makeRequest('v1/{+parent}/notebookRuntimeTemplates', 'GET', params);
    this.projects.locations.notebookRuntimeTemplates.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.notebookRuntimeTemplates.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.projects.locations.notebookRuntimeTemplates.operations = {};
    this.projects.locations.notebookRuntimeTemplates.operations.list = (params) => this._makeRequest('v1/{+name}/operations', 'GET', params);
    this.projects.locations.notebookRuntimeTemplates.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.notebookRuntimeTemplates.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.notebookRuntimeTemplates.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);
    this.projects.locations.notebookRuntimeTemplates.operations.wait = (params) => this._makeRequest('v1/{+name}:wait', 'POST', params);

    this.projects.locations.featureOnlineStores = {};
    this.projects.locations.featureOnlineStores.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.featureOnlineStores.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'POST', params);
    this.projects.locations.featureOnlineStores.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);
    this.projects.locations.featureOnlineStores.create = (params) => this._makeRequest('v1/{+parent}/featureOnlineStores', 'POST', params);
    this.projects.locations.featureOnlineStores.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.featureOnlineStores.list = (params) => this._makeRequest('v1/{+parent}/featureOnlineStores', 'GET', params);
    this.projects.locations.featureOnlineStores.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.featureOnlineStores.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.featureOnlineStores.featureViews = {};
    this.projects.locations.featureOnlineStores.featureViews.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.featureOnlineStores.featureViews.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'POST', params);
    this.projects.locations.featureOnlineStores.featureViews.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);
    this.projects.locations.featureOnlineStores.featureViews.create = (params) => this._makeRequest('v1/{+parent}/featureViews', 'POST', params);
    this.projects.locations.featureOnlineStores.featureViews.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.featureOnlineStores.featureViews.list = (params) => this._makeRequest('v1/{+parent}/featureViews', 'GET', params);
    this.projects.locations.featureOnlineStores.featureViews.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.featureOnlineStores.featureViews.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.featureOnlineStores.featureViews.sync = (params) => this._makeRequest('v1/{+featureView}:sync', 'POST', params);
    this.projects.locations.featureOnlineStores.featureViews.fetchFeatureValues = (params) => this._makeRequest('v1/{+featureView}:fetchFeatureValues', 'POST', params);
    this.projects.locations.featureOnlineStores.featureViews.searchNearestEntities = (params) => this._makeRequest('v1/{+featureView}:searchNearestEntities', 'POST', params);

    this.projects.locations.featureOnlineStores.featureViews.operations = {};
    this.projects.locations.featureOnlineStores.featureViews.operations.listWait = (params) => this._makeRequest('v1/{+name}:wait', 'GET', params);
    this.projects.locations.featureOnlineStores.featureViews.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.featureOnlineStores.featureViews.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.featureOnlineStores.featureViews.operations.wait = (params) => this._makeRequest('v1/{+name}:wait', 'POST', params);

    this.projects.locations.featureOnlineStores.featureViews.featureViewSyncs = {};
    this.projects.locations.featureOnlineStores.featureViews.featureViewSyncs.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.featureOnlineStores.featureViews.featureViewSyncs.list = (params) => this._makeRequest('v1/{+parent}/featureViewSyncs', 'GET', params);

    this.projects.locations.featureOnlineStores.operations = {};
    this.projects.locations.featureOnlineStores.operations.listWait = (params) => this._makeRequest('v1/{+name}:wait', 'GET', params);
    this.projects.locations.featureOnlineStores.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.featureOnlineStores.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.featureOnlineStores.operations.wait = (params) => this._makeRequest('v1/{+name}:wait', 'POST', params);

    this.projects.locations.featureGroups = {};
    this.projects.locations.featureGroups.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.featureGroups.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'POST', params);
    this.projects.locations.featureGroups.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);
    this.projects.locations.featureGroups.create = (params) => this._makeRequest('v1/{+parent}/featureGroups', 'POST', params);
    this.projects.locations.featureGroups.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.featureGroups.list = (params) => this._makeRequest('v1/{+parent}/featureGroups', 'GET', params);
    this.projects.locations.featureGroups.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.featureGroups.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.featureGroups.operations = {};
    this.projects.locations.featureGroups.operations.listWait = (params) => this._makeRequest('v1/{+name}:wait', 'GET', params);
    this.projects.locations.featureGroups.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.featureGroups.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.featureGroups.operations.wait = (params) => this._makeRequest('v1/{+name}:wait', 'POST', params);

    this.projects.locations.featureGroups.features = {};
    this.projects.locations.featureGroups.features.create = (params) => this._makeRequest('v1/{+parent}/features', 'POST', params);
    this.projects.locations.featureGroups.features.batchCreate = (params) => this._makeRequest('v1/{+parent}/features:batchCreate', 'POST', params);
    this.projects.locations.featureGroups.features.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.featureGroups.features.list = (params) => this._makeRequest('v1/{+parent}/features', 'GET', params);
    this.projects.locations.featureGroups.features.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.featureGroups.features.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.featureGroups.features.operations = {};
    this.projects.locations.featureGroups.features.operations.listWait = (params) => this._makeRequest('v1/{+name}:wait', 'GET', params);
    this.projects.locations.featureGroups.features.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.featureGroups.features.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.featureGroups.features.operations.wait = (params) => this._makeRequest('v1/{+name}:wait', 'POST', params);

    this.projects.locations.operations = {};
    this.projects.locations.operations.list = (params) => this._makeRequest('v1/{+name}/operations', 'GET', params);
    this.projects.locations.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);
    this.projects.locations.operations.wait = (params) => this._makeRequest('v1/{+name}:wait', 'POST', params);

    this.projects.locations.ragEngineConfig = {};

    this.projects.locations.ragEngineConfig.operations = {};
    this.projects.locations.ragEngineConfig.operations.list = (params) => this._makeRequest('v1/{+name}/operations', 'GET', params);
    this.projects.locations.ragEngineConfig.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.ragEngineConfig.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.ragEngineConfig.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);
    this.projects.locations.ragEngineConfig.operations.wait = (params) => this._makeRequest('v1/{+name}:wait', 'POST', params);

    this.projects.locations.datasets = {};
    this.projects.locations.datasets.create = (params) => this._makeRequest('v1/{+parent}/datasets', 'POST', params);
    this.projects.locations.datasets.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.datasets.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.datasets.list = (params) => this._makeRequest('v1/{+parent}/datasets', 'GET', params);
    this.projects.locations.datasets.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.datasets.import = (params) => this._makeRequest('v1/{+name}:import', 'POST', params);
    this.projects.locations.datasets.export = (params) => this._makeRequest('v1/{+name}:export', 'POST', params);
    this.projects.locations.datasets.searchDataItems = (params) => this._makeRequest('v1/{+dataset}:searchDataItems', 'GET', params);

    this.projects.locations.datasets.operations = {};
    this.projects.locations.datasets.operations.list = (params) => this._makeRequest('v1/{+name}/operations', 'GET', params);
    this.projects.locations.datasets.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.datasets.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.datasets.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);
    this.projects.locations.datasets.operations.wait = (params) => this._makeRequest('v1/{+name}:wait', 'POST', params);

    this.projects.locations.datasets.datasetVersions = {};
    this.projects.locations.datasets.datasetVersions.create = (params) => this._makeRequest('v1/{+parent}/datasetVersions', 'POST', params);
    this.projects.locations.datasets.datasetVersions.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.datasets.datasetVersions.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.datasets.datasetVersions.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.datasets.datasetVersions.list = (params) => this._makeRequest('v1/{+parent}/datasetVersions', 'GET', params);
    this.projects.locations.datasets.datasetVersions.restore = (params) => this._makeRequest('v1/{+name}:restore', 'GET', params);

    this.projects.locations.datasets.dataItems = {};
    this.projects.locations.datasets.dataItems.list = (params) => this._makeRequest('v1/{+parent}/dataItems', 'GET', params);

    this.projects.locations.datasets.dataItems.operations = {};
    this.projects.locations.datasets.dataItems.operations.list = (params) => this._makeRequest('v1/{+name}/operations', 'GET', params);
    this.projects.locations.datasets.dataItems.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.datasets.dataItems.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.datasets.dataItems.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);
    this.projects.locations.datasets.dataItems.operations.wait = (params) => this._makeRequest('v1/{+name}:wait', 'POST', params);

    this.projects.locations.datasets.dataItems.annotations = {};
    this.projects.locations.datasets.dataItems.annotations.list = (params) => this._makeRequest('v1/{+parent}/annotations', 'GET', params);

    this.projects.locations.datasets.dataItems.annotations.operations = {};
    this.projects.locations.datasets.dataItems.annotations.operations.list = (params) => this._makeRequest('v1/{+name}/operations', 'GET', params);
    this.projects.locations.datasets.dataItems.annotations.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.datasets.dataItems.annotations.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.datasets.dataItems.annotations.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);
    this.projects.locations.datasets.dataItems.annotations.operations.wait = (params) => this._makeRequest('v1/{+name}:wait', 'POST', params);

    this.projects.locations.datasets.savedQueries = {};
    this.projects.locations.datasets.savedQueries.list = (params) => this._makeRequest('v1/{+parent}/savedQueries', 'GET', params);
    this.projects.locations.datasets.savedQueries.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.datasets.savedQueries.operations = {};
    this.projects.locations.datasets.savedQueries.operations.list = (params) => this._makeRequest('v1/{+name}/operations', 'GET', params);
    this.projects.locations.datasets.savedQueries.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.datasets.savedQueries.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.datasets.savedQueries.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);
    this.projects.locations.datasets.savedQueries.operations.wait = (params) => this._makeRequest('v1/{+name}:wait', 'POST', params);

    this.projects.locations.datasets.annotationSpecs = {};
    this.projects.locations.datasets.annotationSpecs.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.datasets.annotationSpecs.operations = {};
    this.projects.locations.datasets.annotationSpecs.operations.list = (params) => this._makeRequest('v1/{+name}/operations', 'GET', params);
    this.projects.locations.datasets.annotationSpecs.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.datasets.annotationSpecs.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.datasets.annotationSpecs.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);
    this.projects.locations.datasets.annotationSpecs.operations.wait = (params) => this._makeRequest('v1/{+name}:wait', 'POST', params);

    this.projects.locations.deploymentResourcePools = {};
    this.projects.locations.deploymentResourcePools.create = (params) => this._makeRequest('v1/{+parent}/deploymentResourcePools', 'POST', params);
    this.projects.locations.deploymentResourcePools.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.deploymentResourcePools.list = (params) => this._makeRequest('v1/{+parent}/deploymentResourcePools', 'GET', params);
    this.projects.locations.deploymentResourcePools.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.deploymentResourcePools.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.deploymentResourcePools.queryDeployedModels = (params) => this._makeRequest('v1/{+deploymentResourcePool}:queryDeployedModels', 'GET', params);

    this.projects.locations.deploymentResourcePools.operations = {};
    this.projects.locations.deploymentResourcePools.operations.list = (params) => this._makeRequest('v1/{+name}/operations', 'GET', params);
    this.projects.locations.deploymentResourcePools.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.deploymentResourcePools.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.deploymentResourcePools.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);
    this.projects.locations.deploymentResourcePools.operations.wait = (params) => this._makeRequest('v1/{+name}:wait', 'POST', params);

    this.projects.locations.endpoints = {};
    this.projects.locations.endpoints.create = (params) => this._makeRequest('v1/{+parent}/endpoints', 'POST', params);
    this.projects.locations.endpoints.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.endpoints.list = (params) => this._makeRequest('v1/{+parent}/endpoints', 'GET', params);
    this.projects.locations.endpoints.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.endpoints.update = (params) => this._makeRequest('v1/{+name}:update', 'POST', params);
    this.projects.locations.endpoints.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.endpoints.deployModel = (params) => this._makeRequest('v1/{+endpoint}:deployModel', 'POST', params);
    this.projects.locations.endpoints.undeployModel = (params) => this._makeRequest('v1/{+endpoint}:undeployModel', 'POST', params);
    this.projects.locations.endpoints.mutateDeployedModel = (params) => this._makeRequest('v1/{+endpoint}:mutateDeployedModel', 'POST', params);
    this.projects.locations.endpoints.predict = (params) => this._makeRequest('v1/{+endpoint}:predict', 'POST', params);
    this.projects.locations.endpoints.rawPredict = (params) => this._makeRequest('v1/{+endpoint}:rawPredict', 'POST', params);
    this.projects.locations.endpoints.streamRawPredict = (params) => this._makeRequest('v1/{+endpoint}:streamRawPredict', 'POST', params);
    this.projects.locations.endpoints.directPredict = (params) => this._makeRequest('v1/{+endpoint}:directPredict', 'POST', params);
    this.projects.locations.endpoints.directRawPredict = (params) => this._makeRequest('v1/{+endpoint}:directRawPredict', 'POST', params);
    this.projects.locations.endpoints.serverStreamingPredict = (params) => this._makeRequest('v1/{+endpoint}:serverStreamingPredict', 'POST', params);
    this.projects.locations.endpoints.predictLongRunning = (params) => this._makeRequest('v1/{+endpoint}:predictLongRunning', 'POST', params);
    this.projects.locations.endpoints.fetchPredictOperation = (params) => this._makeRequest('v1/{+endpoint}:fetchPredictOperation', 'POST', params);
    this.projects.locations.endpoints.explain = (params) => this._makeRequest('v1/{+endpoint}:explain', 'POST', params);
    this.projects.locations.endpoints.generateContent = (params) => this._makeRequest('v1/{+model}:generateContent', 'POST', params);
    this.projects.locations.endpoints.streamGenerateContent = (params) => this._makeRequest('v1/{+model}:streamGenerateContent', 'POST', params);
    this.projects.locations.endpoints.countTokens = (params) => this._makeRequest('v1/{+endpoint}:countTokens', 'POST', params);
    this.projects.locations.endpoints.computeTokens = (params) => this._makeRequest('v1/{+endpoint}:computeTokens', 'POST', params);

    this.projects.locations.endpoints.operations = {};
    this.projects.locations.endpoints.operations.list = (params) => this._makeRequest('v1/{+name}/operations', 'GET', params);
    this.projects.locations.endpoints.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.endpoints.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.endpoints.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);
    this.projects.locations.endpoints.operations.wait = (params) => this._makeRequest('v1/{+name}:wait', 'POST', params);

    this.projects.locations.endpoints.chat = {};
    this.projects.locations.endpoints.chat.completions = (params) => this._makeRequest('v1/{+endpoint}/chat/completions', 'POST', params);

    this.projects.locations.cachedContents = {};
    this.projects.locations.cachedContents.create = (params) => this._makeRequest('v1/{+parent}/cachedContents', 'POST', params);
    this.projects.locations.cachedContents.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.cachedContents.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.cachedContents.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.cachedContents.list = (params) => this._makeRequest('v1/{+parent}/cachedContents', 'GET', params);

    this.projects.locations.tuningJobs = {};
    this.projects.locations.tuningJobs.create = (params) => this._makeRequest('v1/{+parent}/tuningJobs', 'POST', params);
    this.projects.locations.tuningJobs.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.tuningJobs.list = (params) => this._makeRequest('v1/{+parent}/tuningJobs', 'GET', params);
    this.projects.locations.tuningJobs.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);
    this.projects.locations.tuningJobs.rebaseTunedModel = (params) => this._makeRequest('v1/{+parent}/tuningJobs:rebaseTunedModel', 'POST', params);

    this.projects.locations.tuningJobs.operations = {};
    this.projects.locations.tuningJobs.operations.list = (params) => this._makeRequest('v1/{+name}/operations', 'GET', params);
    this.projects.locations.tuningJobs.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.tuningJobs.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.tuningJobs.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);

    this.projects.locations.indexes = {};
    this.projects.locations.indexes.create = (params) => this._makeRequest('v1/{+parent}/indexes', 'POST', params);
    this.projects.locations.indexes.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.indexes.list = (params) => this._makeRequest('v1/{+parent}/indexes', 'GET', params);
    this.projects.locations.indexes.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.indexes.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.indexes.upsertDatapoints = (params) => this._makeRequest('v1/{+index}:upsertDatapoints', 'POST', params);
    this.projects.locations.indexes.removeDatapoints = (params) => this._makeRequest('v1/{+index}:removeDatapoints', 'POST', params);

    this.projects.locations.indexes.operations = {};
    this.projects.locations.indexes.operations.list = (params) => this._makeRequest('v1/{+name}/operations', 'GET', params);
    this.projects.locations.indexes.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.indexes.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.indexes.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);
    this.projects.locations.indexes.operations.wait = (params) => this._makeRequest('v1/{+name}:wait', 'POST', params);

    this.projects.locations.indexEndpoints = {};
    this.projects.locations.indexEndpoints.create = (params) => this._makeRequest('v1/{+parent}/indexEndpoints', 'POST', params);
    this.projects.locations.indexEndpoints.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.indexEndpoints.list = (params) => this._makeRequest('v1/{+parent}/indexEndpoints', 'GET', params);
    this.projects.locations.indexEndpoints.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.indexEndpoints.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.indexEndpoints.deployIndex = (params) => this._makeRequest('v1/{+indexEndpoint}:deployIndex', 'POST', params);
    this.projects.locations.indexEndpoints.undeployIndex = (params) => this._makeRequest('v1/{+indexEndpoint}:undeployIndex', 'POST', params);
    this.projects.locations.indexEndpoints.mutateDeployedIndex = (params) => this._makeRequest('v1/{+indexEndpoint}:mutateDeployedIndex', 'POST', params);
    this.projects.locations.indexEndpoints.findNeighbors = (params) => this._makeRequest('v1/{+indexEndpoint}:findNeighbors', 'POST', params);
    this.projects.locations.indexEndpoints.readIndexDatapoints = (params) => this._makeRequest('v1/{+indexEndpoint}:readIndexDatapoints', 'POST', params);

    this.projects.locations.indexEndpoints.operations = {};
    this.projects.locations.indexEndpoints.operations.list = (params) => this._makeRequest('v1/{+name}/operations', 'GET', params);
    this.projects.locations.indexEndpoints.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.indexEndpoints.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.indexEndpoints.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);
    this.projects.locations.indexEndpoints.operations.wait = (params) => this._makeRequest('v1/{+name}:wait', 'POST', params);

    this.projects.locations.customJobs = {};
    this.projects.locations.customJobs.create = (params) => this._makeRequest('v1/{+parent}/customJobs', 'POST', params);
    this.projects.locations.customJobs.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.customJobs.list = (params) => this._makeRequest('v1/{+parent}/customJobs', 'GET', params);
    this.projects.locations.customJobs.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.customJobs.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);

    this.projects.locations.customJobs.operations = {};
    this.projects.locations.customJobs.operations.list = (params) => this._makeRequest('v1/{+name}/operations', 'GET', params);
    this.projects.locations.customJobs.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.customJobs.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.customJobs.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);
    this.projects.locations.customJobs.operations.wait = (params) => this._makeRequest('v1/{+name}:wait', 'POST', params);

    this.projects.locations.dataLabelingJobs = {};
    this.projects.locations.dataLabelingJobs.create = (params) => this._makeRequest('v1/{+parent}/dataLabelingJobs', 'POST', params);
    this.projects.locations.dataLabelingJobs.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.dataLabelingJobs.list = (params) => this._makeRequest('v1/{+parent}/dataLabelingJobs', 'GET', params);
    this.projects.locations.dataLabelingJobs.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.dataLabelingJobs.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);

    this.projects.locations.dataLabelingJobs.operations = {};
    this.projects.locations.dataLabelingJobs.operations.list = (params) => this._makeRequest('v1/{+name}/operations', 'GET', params);
    this.projects.locations.dataLabelingJobs.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.dataLabelingJobs.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.dataLabelingJobs.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);
    this.projects.locations.dataLabelingJobs.operations.wait = (params) => this._makeRequest('v1/{+name}:wait', 'POST', params);

    this.projects.locations.hyperparameterTuningJobs = {};
    this.projects.locations.hyperparameterTuningJobs.create = (params) => this._makeRequest('v1/{+parent}/hyperparameterTuningJobs', 'POST', params);
    this.projects.locations.hyperparameterTuningJobs.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.hyperparameterTuningJobs.list = (params) => this._makeRequest('v1/{+parent}/hyperparameterTuningJobs', 'GET', params);
    this.projects.locations.hyperparameterTuningJobs.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.hyperparameterTuningJobs.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);

    this.projects.locations.hyperparameterTuningJobs.operations = {};
    this.projects.locations.hyperparameterTuningJobs.operations.list = (params) => this._makeRequest('v1/{+name}/operations', 'GET', params);
    this.projects.locations.hyperparameterTuningJobs.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.hyperparameterTuningJobs.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.hyperparameterTuningJobs.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);
    this.projects.locations.hyperparameterTuningJobs.operations.wait = (params) => this._makeRequest('v1/{+name}:wait', 'POST', params);

    this.projects.locations.nasJobs = {};
    this.projects.locations.nasJobs.create = (params) => this._makeRequest('v1/{+parent}/nasJobs', 'POST', params);
    this.projects.locations.nasJobs.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.nasJobs.list = (params) => this._makeRequest('v1/{+parent}/nasJobs', 'GET', params);
    this.projects.locations.nasJobs.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.nasJobs.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);

    this.projects.locations.nasJobs.nasTrialDetails = {};
    this.projects.locations.nasJobs.nasTrialDetails.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.nasJobs.nasTrialDetails.list = (params) => this._makeRequest('v1/{+parent}/nasTrialDetails', 'GET', params);

    this.projects.locations.batchPredictionJobs = {};
    this.projects.locations.batchPredictionJobs.create = (params) => this._makeRequest('v1/{+parent}/batchPredictionJobs', 'POST', params);
    this.projects.locations.batchPredictionJobs.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.batchPredictionJobs.list = (params) => this._makeRequest('v1/{+parent}/batchPredictionJobs', 'GET', params);
    this.projects.locations.batchPredictionJobs.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.batchPredictionJobs.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);

    this.projects.locations.modelDeploymentMonitoringJobs = {};
    this.projects.locations.modelDeploymentMonitoringJobs.create = (params) => this._makeRequest('v1/{+parent}/modelDeploymentMonitoringJobs', 'POST', params);
    this.projects.locations.modelDeploymentMonitoringJobs.searchModelDeploymentMonitoringStatsAnomalies = (params) => this._makeRequest('v1/{+modelDeploymentMonitoringJob}:searchModelDeploymentMonitoringStatsAnomalies', 'POST', params);
    this.projects.locations.modelDeploymentMonitoringJobs.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.modelDeploymentMonitoringJobs.list = (params) => this._makeRequest('v1/{+parent}/modelDeploymentMonitoringJobs', 'GET', params);
    this.projects.locations.modelDeploymentMonitoringJobs.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.modelDeploymentMonitoringJobs.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.modelDeploymentMonitoringJobs.pause = (params) => this._makeRequest('v1/{+name}:pause', 'POST', params);
    this.projects.locations.modelDeploymentMonitoringJobs.resume = (params) => this._makeRequest('v1/{+name}:resume', 'POST', params);

    this.projects.locations.modelDeploymentMonitoringJobs.operations = {};
    this.projects.locations.modelDeploymentMonitoringJobs.operations.list = (params) => this._makeRequest('v1/{+name}/operations', 'GET', params);
    this.projects.locations.modelDeploymentMonitoringJobs.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.modelDeploymentMonitoringJobs.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.modelDeploymentMonitoringJobs.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);
    this.projects.locations.modelDeploymentMonitoringJobs.operations.wait = (params) => this._makeRequest('v1/{+name}:wait', 'POST', params);

    this.projects.locations.publishers = {};

    this.projects.locations.publishers.models = {};
    this.projects.locations.publishers.models.predict = (params) => this._makeRequest('v1/{+endpoint}:predict', 'POST', params);
    this.projects.locations.publishers.models.rawPredict = (params) => this._makeRequest('v1/{+endpoint}:rawPredict', 'POST', params);
    this.projects.locations.publishers.models.streamRawPredict = (params) => this._makeRequest('v1/{+endpoint}:streamRawPredict', 'POST', params);
    this.projects.locations.publishers.models.serverStreamingPredict = (params) => this._makeRequest('v1/{+endpoint}:serverStreamingPredict', 'POST', params);
    this.projects.locations.publishers.models.predictLongRunning = (params) => this._makeRequest('v1/{+endpoint}:predictLongRunning', 'POST', params);
    this.projects.locations.publishers.models.fetchPredictOperation = (params) => this._makeRequest('v1/{+endpoint}:fetchPredictOperation', 'POST', params);
    this.projects.locations.publishers.models.generateContent = (params) => this._makeRequest('v1/{+model}:generateContent', 'POST', params);
    this.projects.locations.publishers.models.streamGenerateContent = (params) => this._makeRequest('v1/{+model}:streamGenerateContent', 'POST', params);
    this.projects.locations.publishers.models.countTokens = (params) => this._makeRequest('v1/{+endpoint}:countTokens', 'POST', params);
    this.projects.locations.publishers.models.computeTokens = (params) => this._makeRequest('v1/{+endpoint}:computeTokens', 'POST', params);

    this.projects.locations.metadataStores = {};
    this.projects.locations.metadataStores.create = (params) => this._makeRequest('v1/{+parent}/metadataStores', 'POST', params);
    this.projects.locations.metadataStores.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.metadataStores.list = (params) => this._makeRequest('v1/{+parent}/metadataStores', 'GET', params);
    this.projects.locations.metadataStores.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.metadataStores.operations = {};
    this.projects.locations.metadataStores.operations.list = (params) => this._makeRequest('v1/{+name}/operations', 'GET', params);
    this.projects.locations.metadataStores.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.metadataStores.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.metadataStores.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);
    this.projects.locations.metadataStores.operations.wait = (params) => this._makeRequest('v1/{+name}:wait', 'POST', params);

    this.projects.locations.metadataStores.artifacts = {};
    this.projects.locations.metadataStores.artifacts.create = (params) => this._makeRequest('v1/{+parent}/artifacts', 'POST', params);
    this.projects.locations.metadataStores.artifacts.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.metadataStores.artifacts.list = (params) => this._makeRequest('v1/{+parent}/artifacts', 'GET', params);
    this.projects.locations.metadataStores.artifacts.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.metadataStores.artifacts.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.metadataStores.artifacts.purge = (params) => this._makeRequest('v1/{+parent}/artifacts:purge', 'POST', params);
    this.projects.locations.metadataStores.artifacts.queryArtifactLineageSubgraph = (params) => this._makeRequest('v1/{+artifact}:queryArtifactLineageSubgraph', 'GET', params);

    this.projects.locations.metadataStores.artifacts.operations = {};
    this.projects.locations.metadataStores.artifacts.operations.list = (params) => this._makeRequest('v1/{+name}/operations', 'GET', params);
    this.projects.locations.metadataStores.artifacts.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.metadataStores.artifacts.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.metadataStores.artifacts.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);
    this.projects.locations.metadataStores.artifacts.operations.wait = (params) => this._makeRequest('v1/{+name}:wait', 'POST', params);

    this.projects.locations.metadataStores.contexts = {};
    this.projects.locations.metadataStores.contexts.create = (params) => this._makeRequest('v1/{+parent}/contexts', 'POST', params);
    this.projects.locations.metadataStores.contexts.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.metadataStores.contexts.list = (params) => this._makeRequest('v1/{+parent}/contexts', 'GET', params);
    this.projects.locations.metadataStores.contexts.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.metadataStores.contexts.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.metadataStores.contexts.purge = (params) => this._makeRequest('v1/{+parent}/contexts:purge', 'POST', params);
    this.projects.locations.metadataStores.contexts.addContextArtifactsAndExecutions = (params) => this._makeRequest('v1/{+context}:addContextArtifactsAndExecutions', 'POST', params);
    this.projects.locations.metadataStores.contexts.addContextChildren = (params) => this._makeRequest('v1/{+context}:addContextChildren', 'POST', params);
    this.projects.locations.metadataStores.contexts.removeContextChildren = (params) => this._makeRequest('v1/{+context}:removeContextChildren', 'POST', params);
    this.projects.locations.metadataStores.contexts.queryContextLineageSubgraph = (params) => this._makeRequest('v1/{+context}:queryContextLineageSubgraph', 'GET', params);

    this.projects.locations.metadataStores.contexts.operations = {};
    this.projects.locations.metadataStores.contexts.operations.list = (params) => this._makeRequest('v1/{+name}/operations', 'GET', params);
    this.projects.locations.metadataStores.contexts.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.metadataStores.contexts.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.metadataStores.contexts.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);
    this.projects.locations.metadataStores.contexts.operations.wait = (params) => this._makeRequest('v1/{+name}:wait', 'POST', params);

    this.projects.locations.metadataStores.executions = {};
    this.projects.locations.metadataStores.executions.create = (params) => this._makeRequest('v1/{+parent}/executions', 'POST', params);
    this.projects.locations.metadataStores.executions.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.metadataStores.executions.list = (params) => this._makeRequest('v1/{+parent}/executions', 'GET', params);
    this.projects.locations.metadataStores.executions.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.metadataStores.executions.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.metadataStores.executions.purge = (params) => this._makeRequest('v1/{+parent}/executions:purge', 'POST', params);
    this.projects.locations.metadataStores.executions.addExecutionEvents = (params) => this._makeRequest('v1/{+execution}:addExecutionEvents', 'POST', params);
    this.projects.locations.metadataStores.executions.queryExecutionInputsAndOutputs = (params) => this._makeRequest('v1/{+execution}:queryExecutionInputsAndOutputs', 'GET', params);

    this.projects.locations.metadataStores.executions.operations = {};
    this.projects.locations.metadataStores.executions.operations.list = (params) => this._makeRequest('v1/{+name}/operations', 'GET', params);
    this.projects.locations.metadataStores.executions.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.metadataStores.executions.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.metadataStores.executions.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);
    this.projects.locations.metadataStores.executions.operations.wait = (params) => this._makeRequest('v1/{+name}:wait', 'POST', params);

    this.projects.locations.metadataStores.metadataSchemas = {};
    this.projects.locations.metadataStores.metadataSchemas.create = (params) => this._makeRequest('v1/{+parent}/metadataSchemas', 'POST', params);
    this.projects.locations.metadataStores.metadataSchemas.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.metadataStores.metadataSchemas.list = (params) => this._makeRequest('v1/{+parent}/metadataSchemas', 'GET', params);

    this.projects.locations.migratableResources = {};
    this.projects.locations.migratableResources.search = (params) => this._makeRequest('v1/{+parent}/migratableResources:search', 'POST', params);
    this.projects.locations.migratableResources.batchMigrate = (params) => this._makeRequest('v1/{+parent}/migratableResources:batchMigrate', 'POST', params);

    this.projects.locations.migratableResources.operations = {};
    this.projects.locations.migratableResources.operations.list = (params) => this._makeRequest('v1/{+name}/operations', 'GET', params);
    this.projects.locations.migratableResources.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.migratableResources.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.migratableResources.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);
    this.projects.locations.migratableResources.operations.wait = (params) => this._makeRequest('v1/{+name}:wait', 'POST', params);

    this.projects.locations.notebookRuntimes = {};
    this.projects.locations.notebookRuntimes.assign = (params) => this._makeRequest('v1/{+parent}/notebookRuntimes:assign', 'POST', params);
    this.projects.locations.notebookRuntimes.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.notebookRuntimes.list = (params) => this._makeRequest('v1/{+parent}/notebookRuntimes', 'GET', params);
    this.projects.locations.notebookRuntimes.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.notebookRuntimes.upgrade = (params) => this._makeRequest('v1/{+name}:upgrade', 'POST', params);
    this.projects.locations.notebookRuntimes.start = (params) => this._makeRequest('v1/{+name}:start', 'POST', params);
    this.projects.locations.notebookRuntimes.stop = (params) => this._makeRequest('v1/{+name}:stop', 'POST', params);

    this.projects.locations.notebookRuntimes.operations = {};
    this.projects.locations.notebookRuntimes.operations.list = (params) => this._makeRequest('v1/{+name}/operations', 'GET', params);
    this.projects.locations.notebookRuntimes.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.notebookRuntimes.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.notebookRuntimes.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);
    this.projects.locations.notebookRuntimes.operations.wait = (params) => this._makeRequest('v1/{+name}:wait', 'POST', params);

    this.projects.locations.notebookExecutionJobs = {};
    this.projects.locations.notebookExecutionJobs.create = (params) => this._makeRequest('v1/{+parent}/notebookExecutionJobs', 'POST', params);
    this.projects.locations.notebookExecutionJobs.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.notebookExecutionJobs.list = (params) => this._makeRequest('v1/{+parent}/notebookExecutionJobs', 'GET', params);
    this.projects.locations.notebookExecutionJobs.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.notebookExecutionJobs.operations = {};
    this.projects.locations.notebookExecutionJobs.operations.list = (params) => this._makeRequest('v1/{+name}/operations', 'GET', params);
    this.projects.locations.notebookExecutionJobs.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.notebookExecutionJobs.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.notebookExecutionJobs.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);
    this.projects.locations.notebookExecutionJobs.operations.wait = (params) => this._makeRequest('v1/{+name}:wait', 'POST', params);

    this.projects.locations.persistentResources = {};
    this.projects.locations.persistentResources.create = (params) => this._makeRequest('v1/{+parent}/persistentResources', 'POST', params);
    this.projects.locations.persistentResources.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.persistentResources.list = (params) => this._makeRequest('v1/{+parent}/persistentResources', 'GET', params);
    this.projects.locations.persistentResources.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.persistentResources.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.persistentResources.reboot = (params) => this._makeRequest('v1/{+name}:reboot', 'POST', params);

    this.projects.locations.persistentResources.operations = {};
    this.projects.locations.persistentResources.operations.list = (params) => this._makeRequest('v1/{+name}/operations', 'GET', params);
    this.projects.locations.persistentResources.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.persistentResources.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.persistentResources.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);
    this.projects.locations.persistentResources.operations.wait = (params) => this._makeRequest('v1/{+name}:wait', 'POST', params);

    this.projects.locations.trainingPipelines = {};
    this.projects.locations.trainingPipelines.create = (params) => this._makeRequest('v1/{+parent}/trainingPipelines', 'POST', params);
    this.projects.locations.trainingPipelines.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.trainingPipelines.list = (params) => this._makeRequest('v1/{+parent}/trainingPipelines', 'GET', params);
    this.projects.locations.trainingPipelines.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.trainingPipelines.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);

    this.projects.locations.trainingPipelines.operations = {};
    this.projects.locations.trainingPipelines.operations.list = (params) => this._makeRequest('v1/{+name}/operations', 'GET', params);
    this.projects.locations.trainingPipelines.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.trainingPipelines.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.trainingPipelines.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);
    this.projects.locations.trainingPipelines.operations.wait = (params) => this._makeRequest('v1/{+name}:wait', 'POST', params);

    this.projects.locations.pipelineJobs = {};
    this.projects.locations.pipelineJobs.create = (params) => this._makeRequest('v1/{+parent}/pipelineJobs', 'POST', params);
    this.projects.locations.pipelineJobs.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.pipelineJobs.list = (params) => this._makeRequest('v1/{+parent}/pipelineJobs', 'GET', params);
    this.projects.locations.pipelineJobs.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.pipelineJobs.batchDelete = (params) => this._makeRequest('v1/{+parent}/pipelineJobs:batchDelete', 'POST', params);
    this.projects.locations.pipelineJobs.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);
    this.projects.locations.pipelineJobs.batchCancel = (params) => this._makeRequest('v1/{+parent}/pipelineJobs:batchCancel', 'POST', params);

    this.projects.locations.pipelineJobs.operations = {};
    this.projects.locations.pipelineJobs.operations.list = (params) => this._makeRequest('v1/{+name}/operations', 'GET', params);
    this.projects.locations.pipelineJobs.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.pipelineJobs.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.pipelineJobs.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);
    this.projects.locations.pipelineJobs.operations.wait = (params) => this._makeRequest('v1/{+name}:wait', 'POST', params);

    this.projects.locations.reasoningEngines = {};
    this.projects.locations.reasoningEngines.query = (params) => this._makeRequest('v1/{+name}:query', 'POST', params);
    this.projects.locations.reasoningEngines.streamQuery = (params) => this._makeRequest('v1/{+name}:streamQuery', 'POST', params);
    this.projects.locations.reasoningEngines.create = (params) => this._makeRequest('v1/{+parent}/reasoningEngines', 'POST', params);
    this.projects.locations.reasoningEngines.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.reasoningEngines.list = (params) => this._makeRequest('v1/{+parent}/reasoningEngines', 'GET', params);
    this.projects.locations.reasoningEngines.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.reasoningEngines.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.reasoningEngines.operations = {};
    this.projects.locations.reasoningEngines.operations.list = (params) => this._makeRequest('v1/{+name}/operations', 'GET', params);
    this.projects.locations.reasoningEngines.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.reasoningEngines.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.reasoningEngines.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);
    this.projects.locations.reasoningEngines.operations.wait = (params) => this._makeRequest('v1/{+name}:wait', 'POST', params);

    this.projects.locations.schedules = {};
    this.projects.locations.schedules.create = (params) => this._makeRequest('v1/{+parent}/schedules', 'POST', params);
    this.projects.locations.schedules.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.schedules.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.schedules.list = (params) => this._makeRequest('v1/{+parent}/schedules', 'GET', params);
    this.projects.locations.schedules.pause = (params) => this._makeRequest('v1/{+name}:pause', 'POST', params);
    this.projects.locations.schedules.resume = (params) => this._makeRequest('v1/{+name}:resume', 'POST', params);
    this.projects.locations.schedules.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.projects.locations.schedules.operations = {};
    this.projects.locations.schedules.operations.list = (params) => this._makeRequest('v1/{+name}/operations', 'GET', params);
    this.projects.locations.schedules.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.schedules.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.schedules.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);
    this.projects.locations.schedules.operations.wait = (params) => this._makeRequest('v1/{+name}:wait', 'POST', params);

    this.projects.locations.specialistPools = {};
    this.projects.locations.specialistPools.create = (params) => this._makeRequest('v1/{+parent}/specialistPools', 'POST', params);
    this.projects.locations.specialistPools.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.specialistPools.list = (params) => this._makeRequest('v1/{+parent}/specialistPools', 'GET', params);
    this.projects.locations.specialistPools.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.specialistPools.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.projects.locations.specialistPools.operations = {};
    this.projects.locations.specialistPools.operations.list = (params) => this._makeRequest('v1/{+name}/operations', 'GET', params);
    this.projects.locations.specialistPools.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.specialistPools.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.specialistPools.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);
    this.projects.locations.specialistPools.operations.wait = (params) => this._makeRequest('v1/{+name}:wait', 'POST', params);

    this.projects.locations.tensorboards = {};
    this.projects.locations.tensorboards.create = (params) => this._makeRequest('v1/{+parent}/tensorboards', 'POST', params);
    this.projects.locations.tensorboards.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.tensorboards.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.tensorboards.list = (params) => this._makeRequest('v1/{+parent}/tensorboards', 'GET', params);
    this.projects.locations.tensorboards.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.tensorboards.readUsage = (params) => this._makeRequest('v1/{+tensorboard}:readUsage', 'GET', params);
    this.projects.locations.tensorboards.readSize = (params) => this._makeRequest('v1/{+tensorboard}:readSize', 'GET', params);
    this.projects.locations.tensorboards.batchRead = (params) => this._makeRequest('v1/{+tensorboard}:batchRead', 'GET', params);

    this.projects.locations.tensorboards.operations = {};
    this.projects.locations.tensorboards.operations.list = (params) => this._makeRequest('v1/{+name}/operations', 'GET', params);
    this.projects.locations.tensorboards.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.tensorboards.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.tensorboards.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);
    this.projects.locations.tensorboards.operations.wait = (params) => this._makeRequest('v1/{+name}:wait', 'POST', params);

    this.projects.locations.tensorboards.experiments = {};
    this.projects.locations.tensorboards.experiments.create = (params) => this._makeRequest('v1/{+parent}/experiments', 'POST', params);
    this.projects.locations.tensorboards.experiments.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.tensorboards.experiments.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.tensorboards.experiments.list = (params) => this._makeRequest('v1/{+parent}/experiments', 'GET', params);
    this.projects.locations.tensorboards.experiments.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.tensorboards.experiments.batchCreate = (params) => this._makeRequest('v1/{+parent}:batchCreate', 'POST', params);
    this.projects.locations.tensorboards.experiments.write = (params) => this._makeRequest('v1/{+tensorboardExperiment}:write', 'POST', params);

    this.projects.locations.tensorboards.experiments.operations = {};
    this.projects.locations.tensorboards.experiments.operations.list = (params) => this._makeRequest('v1/{+name}/operations', 'GET', params);
    this.projects.locations.tensorboards.experiments.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.tensorboards.experiments.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.tensorboards.experiments.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);
    this.projects.locations.tensorboards.experiments.operations.wait = (params) => this._makeRequest('v1/{+name}:wait', 'POST', params);

    this.projects.locations.tensorboards.experiments.runs = {};
    this.projects.locations.tensorboards.experiments.runs.create = (params) => this._makeRequest('v1/{+parent}/runs', 'POST', params);
    this.projects.locations.tensorboards.experiments.runs.batchCreate = (params) => this._makeRequest('v1/{+parent}/runs:batchCreate', 'POST', params);
    this.projects.locations.tensorboards.experiments.runs.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.tensorboards.experiments.runs.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.tensorboards.experiments.runs.list = (params) => this._makeRequest('v1/{+parent}/runs', 'GET', params);
    this.projects.locations.tensorboards.experiments.runs.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.tensorboards.experiments.runs.write = (params) => this._makeRequest('v1/{+tensorboardRun}:write', 'POST', params);

    this.projects.locations.tensorboards.experiments.runs.operations = {};
    this.projects.locations.tensorboards.experiments.runs.operations.list = (params) => this._makeRequest('v1/{+name}/operations', 'GET', params);
    this.projects.locations.tensorboards.experiments.runs.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.tensorboards.experiments.runs.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.tensorboards.experiments.runs.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);
    this.projects.locations.tensorboards.experiments.runs.operations.wait = (params) => this._makeRequest('v1/{+name}:wait', 'POST', params);

    this.projects.locations.tensorboards.experiments.runs.timeSeries = {};
    this.projects.locations.tensorboards.experiments.runs.timeSeries.create = (params) => this._makeRequest('v1/{+parent}/timeSeries', 'POST', params);
    this.projects.locations.tensorboards.experiments.runs.timeSeries.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.tensorboards.experiments.runs.timeSeries.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.tensorboards.experiments.runs.timeSeries.list = (params) => this._makeRequest('v1/{+parent}/timeSeries', 'GET', params);
    this.projects.locations.tensorboards.experiments.runs.timeSeries.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.tensorboards.experiments.runs.timeSeries.read = (params) => this._makeRequest('v1/{+tensorboardTimeSeries}:read', 'GET', params);
    this.projects.locations.tensorboards.experiments.runs.timeSeries.readBlobData = (params) => this._makeRequest('v1/{+timeSeries}:readBlobData', 'GET', params);
    this.projects.locations.tensorboards.experiments.runs.timeSeries.exportTensorboardTimeSeries = (params) => this._makeRequest('v1/{+tensorboardTimeSeries}:exportTensorboardTimeSeries', 'POST', params);

    this.projects.locations.tensorboards.experiments.runs.timeSeries.operations = {};
    this.projects.locations.tensorboards.experiments.runs.timeSeries.operations.list = (params) => this._makeRequest('v1/{+name}/operations', 'GET', params);
    this.projects.locations.tensorboards.experiments.runs.timeSeries.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.tensorboards.experiments.runs.timeSeries.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.tensorboards.experiments.runs.timeSeries.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);
    this.projects.locations.tensorboards.experiments.runs.timeSeries.operations.wait = (params) => this._makeRequest('v1/{+name}:wait', 'POST', params);

    this.projects.locations.studies = {};
    this.projects.locations.studies.create = (params) => this._makeRequest('v1/{+parent}/studies', 'POST', params);
    this.projects.locations.studies.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.studies.list = (params) => this._makeRequest('v1/{+parent}/studies', 'GET', params);
    this.projects.locations.studies.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.studies.lookup = (params) => this._makeRequest('v1/{+parent}/studies:lookup', 'POST', params);

    this.projects.locations.studies.operations = {};
    this.projects.locations.studies.operations.list = (params) => this._makeRequest('v1/{+name}/operations', 'GET', params);
    this.projects.locations.studies.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.studies.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.studies.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);
    this.projects.locations.studies.operations.wait = (params) => this._makeRequest('v1/{+name}:wait', 'POST', params);

    this.projects.locations.studies.trials = {};
    this.projects.locations.studies.trials.suggest = (params) => this._makeRequest('v1/{+parent}/trials:suggest', 'POST', params);
    this.projects.locations.studies.trials.create = (params) => this._makeRequest('v1/{+parent}/trials', 'POST', params);
    this.projects.locations.studies.trials.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.studies.trials.list = (params) => this._makeRequest('v1/{+parent}/trials', 'GET', params);
    this.projects.locations.studies.trials.addTrialMeasurement = (params) => this._makeRequest('v1/{+trialName}:addTrialMeasurement', 'POST', params);
    this.projects.locations.studies.trials.complete = (params) => this._makeRequest('v1/{+name}:complete', 'POST', params);
    this.projects.locations.studies.trials.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.studies.trials.checkTrialEarlyStoppingState = (params) => this._makeRequest('v1/{+trialName}:checkTrialEarlyStoppingState', 'POST', params);
    this.projects.locations.studies.trials.stop = (params) => this._makeRequest('v1/{+name}:stop', 'POST', params);
    this.projects.locations.studies.trials.listOptimalTrials = (params) => this._makeRequest('v1/{+parent}/trials:listOptimalTrials', 'POST', params);

    this.projects.locations.studies.trials.operations = {};
    this.projects.locations.studies.trials.operations.list = (params) => this._makeRequest('v1/{+name}/operations', 'GET', params);
    this.projects.locations.studies.trials.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.studies.trials.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.studies.trials.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);
    this.projects.locations.studies.trials.operations.wait = (params) => this._makeRequest('v1/{+name}:wait', 'POST', params);

    this.projects.locations.ragCorpora = {};
    this.projects.locations.ragCorpora.create = (params) => this._makeRequest('v1/{+parent}/ragCorpora', 'POST', params);
    this.projects.locations.ragCorpora.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.ragCorpora.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.ragCorpora.list = (params) => this._makeRequest('v1/{+parent}/ragCorpora', 'GET', params);
    this.projects.locations.ragCorpora.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.ragCorpora.operations = {};
    this.projects.locations.ragCorpora.operations.list = (params) => this._makeRequest('v1/{+name}/operations', 'GET', params);
    this.projects.locations.ragCorpora.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.ragCorpora.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.ragCorpora.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);
    this.projects.locations.ragCorpora.operations.wait = (params) => this._makeRequest('v1/{+name}:wait', 'POST', params);

    this.projects.locations.ragCorpora.ragFiles = {};
    this.projects.locations.ragCorpora.ragFiles.import = (params) => this._makeRequest('v1/{+parent}/ragFiles:import', 'POST', params);
    this.projects.locations.ragCorpora.ragFiles.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.ragCorpora.ragFiles.list = (params) => this._makeRequest('v1/{+parent}/ragFiles', 'GET', params);
    this.projects.locations.ragCorpora.ragFiles.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.ragCorpora.ragFiles.operations = {};
    this.projects.locations.ragCorpora.ragFiles.operations.list = (params) => this._makeRequest('v1/{+name}/operations', 'GET', params);
    this.projects.locations.ragCorpora.ragFiles.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.ragCorpora.ragFiles.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.ragCorpora.ragFiles.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);
    this.projects.locations.ragCorpora.ragFiles.operations.wait = (params) => this._makeRequest('v1/{+name}:wait', 'POST', params);

    this.batchPredictionJobs = {};
    this.batchPredictionJobs.create = (params) => this._makeRequest('v1/batchPredictionJobs', 'POST', params);
    this.batchPredictionJobs.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.batchPredictionJobs.list = (params) => this._makeRequest('v1/batchPredictionJobs', 'GET', params);

    this.endpoints = {};
    this.endpoints.predict = (params) => this._makeRequest('v1/{+endpoint}:predict', 'POST', params);
    this.endpoints.predictLongRunning = (params) => this._makeRequest('v1/{+endpoint}:predictLongRunning', 'POST', params);
    this.endpoints.fetchPredictOperation = (params) => this._makeRequest('v1/{+endpoint}:fetchPredictOperation', 'POST', params);
    this.endpoints.generateContent = (params) => this._makeRequest('v1/{+model}:generateContent', 'POST', params);
    this.endpoints.streamGenerateContent = (params) => this._makeRequest('v1/{+model}:streamGenerateContent', 'POST', params);
    this.endpoints.countTokens = (params) => this._makeRequest('v1/{+endpoint}:countTokens', 'POST', params);
    this.endpoints.computeTokens = (params) => this._makeRequest('v1/{+endpoint}:computeTokens', 'POST', params);

    this.endpoints.chat = {};
    this.endpoints.chat.completions = (params) => this._makeRequest('v1/{+endpoint}/chat/completions', 'POST', params);

    this.publishers = {};

    this.publishers.models = {};
    this.publishers.models.predict = (params) => this._makeRequest('v1/{+endpoint}:predict', 'POST', params);
    this.publishers.models.predictLongRunning = (params) => this._makeRequest('v1/{+endpoint}:predictLongRunning', 'POST', params);
    this.publishers.models.fetchPredictOperation = (params) => this._makeRequest('v1/{+endpoint}:fetchPredictOperation', 'POST', params);
    this.publishers.models.generateContent = (params) => this._makeRequest('v1/{+model}:generateContent', 'POST', params);
    this.publishers.models.streamGenerateContent = (params) => this._makeRequest('v1/{+model}:streamGenerateContent', 'POST', params);
    this.publishers.models.countTokens = (params) => this._makeRequest('v1/{+endpoint}:countTokens', 'POST', params);
    this.publishers.models.computeTokens = (params) => this._makeRequest('v1/{+endpoint}:computeTokens', 'POST', params);
    this.publishers.models.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.reasoningEngines = {};
    this.reasoningEngines.query = (params) => this._makeRequest('v1/{+name}:query', 'POST', params);
    this.reasoningEngines.streamQuery = (params) => this._makeRequest('v1/{+name}:streamQuery', 'POST', params);
    this.reasoningEngines.create = (params) => this._makeRequest('v1/reasoningEngines', 'POST', params);
    this.reasoningEngines.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.reasoningEngines.list = (params) => this._makeRequest('v1/reasoningEngines', 'GET', params);
    this.reasoningEngines.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.reasoningEngines.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.media = {};
    this.media.upload = (params) => this._makeRequest('v1/{+parent}/ragFiles:upload', 'POST', params);
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
