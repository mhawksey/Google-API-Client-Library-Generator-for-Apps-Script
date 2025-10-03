
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
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://aiplatform.googleapis.com/';
    this._servicePath = '';


    this.projects = {};
    this.projects.updateCacheConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.getCacheConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.setPublisherModelConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:setPublisherModelConfig', 'POST', apiParams, clientConfig);
    this.projects.fetchPublisherModelConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:fetchPublisherModelConfig', 'GET', apiParams, clientConfig);

    this.projects.locations = {};
    this.projects.locations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/locations', 'GET', apiParams, clientConfig);
    this.projects.locations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.generateSyntheticData = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+location}:generateSyntheticData', 'POST', apiParams, clientConfig);
    this.projects.locations.evaluateInstances = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+location}:evaluateInstances', 'POST', apiParams, clientConfig);
    this.projects.locations.evaluateDataset = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+location}:evaluateDataset', 'POST', apiParams, clientConfig);
    this.projects.locations.generateInstanceRubrics = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+location}:generateInstanceRubrics', 'POST', apiParams, clientConfig);
    this.projects.locations.deploy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+destination}:deploy', 'POST', apiParams, clientConfig);
    this.projects.locations.deployPublisherModel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+destination}:deployPublisherModel', 'POST', apiParams, clientConfig);
    this.projects.locations.recommendSpec = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}:recommendSpec', 'POST', apiParams, clientConfig);
    this.projects.locations.updateRagEngineConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.getRagEngineConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.retrieveContexts = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}:retrieveContexts', 'POST', apiParams, clientConfig);
    this.projects.locations.augmentPrompt = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}:augmentPrompt', 'POST', apiParams, clientConfig);
    this.projects.locations.corroborateContent = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}:corroborateContent', 'POST', apiParams, clientConfig);

    this.projects.locations.featurestores = {};
    this.projects.locations.featurestores.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.locations.featurestores.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+resource}:getIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.locations.featurestores.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);
    this.projects.locations.featurestores.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/featurestores', 'POST', apiParams, clientConfig);
    this.projects.locations.featurestores.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.featurestores.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/featurestores', 'GET', apiParams, clientConfig);
    this.projects.locations.featurestores.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.featurestores.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.featurestores.batchReadFeatureValues = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+featurestore}:batchReadFeatureValues', 'POST', apiParams, clientConfig);
    this.projects.locations.featurestores.searchFeatures = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+location}/featurestores:searchFeatures', 'GET', apiParams, clientConfig);

    this.projects.locations.featurestores.entityTypes = {};
    this.projects.locations.featurestores.entityTypes.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.locations.featurestores.entityTypes.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+resource}:getIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.locations.featurestores.entityTypes.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);
    this.projects.locations.featurestores.entityTypes.readFeatureValues = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+entityType}:readFeatureValues', 'POST', apiParams, clientConfig);
    this.projects.locations.featurestores.entityTypes.streamingReadFeatureValues = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+entityType}:streamingReadFeatureValues', 'POST', apiParams, clientConfig);
    this.projects.locations.featurestores.entityTypes.writeFeatureValues = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+entityType}:writeFeatureValues', 'POST', apiParams, clientConfig);
    this.projects.locations.featurestores.entityTypes.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/entityTypes', 'POST', apiParams, clientConfig);
    this.projects.locations.featurestores.entityTypes.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.featurestores.entityTypes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/entityTypes', 'GET', apiParams, clientConfig);
    this.projects.locations.featurestores.entityTypes.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.featurestores.entityTypes.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.featurestores.entityTypes.importFeatureValues = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+entityType}:importFeatureValues', 'POST', apiParams, clientConfig);
    this.projects.locations.featurestores.entityTypes.exportFeatureValues = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+entityType}:exportFeatureValues', 'POST', apiParams, clientConfig);
    this.projects.locations.featurestores.entityTypes.deleteFeatureValues = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+entityType}:deleteFeatureValues', 'POST', apiParams, clientConfig);

    this.projects.locations.featurestores.entityTypes.operations = {};
    this.projects.locations.featurestores.entityTypes.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/operations', 'GET', apiParams, clientConfig);
    this.projects.locations.featurestores.entityTypes.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.featurestores.entityTypes.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.featurestores.entityTypes.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', apiParams, clientConfig);
    this.projects.locations.featurestores.entityTypes.operations.wait = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:wait', 'POST', apiParams, clientConfig);

    this.projects.locations.featurestores.entityTypes.features = {};
    this.projects.locations.featurestores.entityTypes.features.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/features', 'POST', apiParams, clientConfig);
    this.projects.locations.featurestores.entityTypes.features.batchCreate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/features:batchCreate', 'POST', apiParams, clientConfig);
    this.projects.locations.featurestores.entityTypes.features.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.featurestores.entityTypes.features.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/features', 'GET', apiParams, clientConfig);
    this.projects.locations.featurestores.entityTypes.features.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.featurestores.entityTypes.features.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.featurestores.entityTypes.features.operations = {};
    this.projects.locations.featurestores.entityTypes.features.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/operations', 'GET', apiParams, clientConfig);
    this.projects.locations.featurestores.entityTypes.features.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.featurestores.entityTypes.features.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.featurestores.entityTypes.features.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', apiParams, clientConfig);
    this.projects.locations.featurestores.entityTypes.features.operations.wait = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:wait', 'POST', apiParams, clientConfig);

    this.projects.locations.featurestores.operations = {};
    this.projects.locations.featurestores.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/operations', 'GET', apiParams, clientConfig);
    this.projects.locations.featurestores.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.featurestores.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.featurestores.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', apiParams, clientConfig);
    this.projects.locations.featurestores.operations.wait = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:wait', 'POST', apiParams, clientConfig);

    this.projects.locations.models = {};
    this.projects.locations.models.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.locations.models.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+resource}:getIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.locations.models.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);
    this.projects.locations.models.upload = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/models:upload', 'POST', apiParams, clientConfig);
    this.projects.locations.models.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.models.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/models', 'GET', apiParams, clientConfig);
    this.projects.locations.models.listVersions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:listVersions', 'GET', apiParams, clientConfig);
    this.projects.locations.models.listCheckpoints = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:listCheckpoints', 'GET', apiParams, clientConfig);
    this.projects.locations.models.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.models.updateExplanationDataset = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+model}:updateExplanationDataset', 'POST', apiParams, clientConfig);
    this.projects.locations.models.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.models.deleteVersion = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:deleteVersion', 'DELETE', apiParams, clientConfig);
    this.projects.locations.models.mergeVersionAliases = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:mergeVersionAliases', 'POST', apiParams, clientConfig);
    this.projects.locations.models.export = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:export', 'POST', apiParams, clientConfig);
    this.projects.locations.models.copy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/models:copy', 'POST', apiParams, clientConfig);

    this.projects.locations.models.operations = {};
    this.projects.locations.models.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/operations', 'GET', apiParams, clientConfig);
    this.projects.locations.models.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.models.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.models.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', apiParams, clientConfig);
    this.projects.locations.models.operations.wait = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:wait', 'POST', apiParams, clientConfig);

    this.projects.locations.models.evaluations = {};
    this.projects.locations.models.evaluations.import = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/evaluations:import', 'POST', apiParams, clientConfig);
    this.projects.locations.models.evaluations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.models.evaluations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/evaluations', 'GET', apiParams, clientConfig);

    this.projects.locations.models.evaluations.operations = {};
    this.projects.locations.models.evaluations.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/operations', 'GET', apiParams, clientConfig);
    this.projects.locations.models.evaluations.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.models.evaluations.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.models.evaluations.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', apiParams, clientConfig);
    this.projects.locations.models.evaluations.operations.wait = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:wait', 'POST', apiParams, clientConfig);

    this.projects.locations.models.evaluations.slices = {};
    this.projects.locations.models.evaluations.slices.batchImport = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}:batchImport', 'POST', apiParams, clientConfig);
    this.projects.locations.models.evaluations.slices.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.models.evaluations.slices.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/slices', 'GET', apiParams, clientConfig);

    this.projects.locations.endpoints = {};
    this.projects.locations.endpoints.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.locations.endpoints.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+resource}:getIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.locations.endpoints.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);
    this.projects.locations.endpoints.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/endpoints', 'POST', apiParams, clientConfig);
    this.projects.locations.endpoints.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.endpoints.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/endpoints', 'GET', apiParams, clientConfig);
    this.projects.locations.endpoints.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.endpoints.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:update', 'POST', apiParams, clientConfig);
    this.projects.locations.endpoints.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.endpoints.deployModel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+endpoint}:deployModel', 'POST', apiParams, clientConfig);
    this.projects.locations.endpoints.undeployModel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+endpoint}:undeployModel', 'POST', apiParams, clientConfig);
    this.projects.locations.endpoints.mutateDeployedModel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+endpoint}:mutateDeployedModel', 'POST', apiParams, clientConfig);
    this.projects.locations.endpoints.predict = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+endpoint}:predict', 'POST', apiParams, clientConfig);
    this.projects.locations.endpoints.rawPredict = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+endpoint}:rawPredict', 'POST', apiParams, clientConfig);
    this.projects.locations.endpoints.streamRawPredict = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+endpoint}:streamRawPredict', 'POST', apiParams, clientConfig);
    this.projects.locations.endpoints.directPredict = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+endpoint}:directPredict', 'POST', apiParams, clientConfig);
    this.projects.locations.endpoints.directRawPredict = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+endpoint}:directRawPredict', 'POST', apiParams, clientConfig);
    this.projects.locations.endpoints.serverStreamingPredict = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+endpoint}:serverStreamingPredict', 'POST', apiParams, clientConfig);
    this.projects.locations.endpoints.predictLongRunning = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+endpoint}:predictLongRunning', 'POST', apiParams, clientConfig);
    this.projects.locations.endpoints.fetchPredictOperation = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+endpoint}:fetchPredictOperation', 'POST', apiParams, clientConfig);
    this.projects.locations.endpoints.explain = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+endpoint}:explain', 'POST', apiParams, clientConfig);
    this.projects.locations.endpoints.countTokens = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+endpoint}:countTokens', 'POST', apiParams, clientConfig);
    this.projects.locations.endpoints.generateContent = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+model}:generateContent', 'POST', apiParams, clientConfig);
    this.projects.locations.endpoints.streamGenerateContent = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+model}:streamGenerateContent', 'POST', apiParams, clientConfig);
    this.projects.locations.endpoints.computeTokens = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+endpoint}:computeTokens', 'POST', apiParams, clientConfig);

    this.projects.locations.endpoints.operations = {};
    this.projects.locations.endpoints.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/operations', 'GET', apiParams, clientConfig);
    this.projects.locations.endpoints.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.endpoints.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.endpoints.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', apiParams, clientConfig);
    this.projects.locations.endpoints.operations.wait = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:wait', 'POST', apiParams, clientConfig);

    this.projects.locations.endpoints.invoke = {};
    this.projects.locations.endpoints.invoke.invoke = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+endpoint}/invoke/{+invokeId}', 'POST', apiParams, clientConfig);

    this.projects.locations.endpoints.deployedModels = {};

    this.projects.locations.endpoints.deployedModels.invoke = {};
    this.projects.locations.endpoints.deployedModels.invoke.invoke = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+endpoint}/deployedModels/{deployedModelId}/invoke/{+invokeId}', 'POST', apiParams, clientConfig);

    this.projects.locations.endpoints.openapi = {};
    this.projects.locations.endpoints.openapi.embeddings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+endpoint}/embeddings', 'POST', apiParams, clientConfig);

    this.projects.locations.endpoints.chat = {};
    this.projects.locations.endpoints.chat.completions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+endpoint}/chat/completions', 'POST', apiParams, clientConfig);

    this.projects.locations.notebookRuntimeTemplates = {};
    this.projects.locations.notebookRuntimeTemplates.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.locations.notebookRuntimeTemplates.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+resource}:getIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.locations.notebookRuntimeTemplates.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);
    this.projects.locations.notebookRuntimeTemplates.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/notebookRuntimeTemplates', 'POST', apiParams, clientConfig);
    this.projects.locations.notebookRuntimeTemplates.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.notebookRuntimeTemplates.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/notebookRuntimeTemplates', 'GET', apiParams, clientConfig);
    this.projects.locations.notebookRuntimeTemplates.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.notebookRuntimeTemplates.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects.locations.notebookRuntimeTemplates.operations = {};
    this.projects.locations.notebookRuntimeTemplates.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/operations', 'GET', apiParams, clientConfig);
    this.projects.locations.notebookRuntimeTemplates.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.notebookRuntimeTemplates.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.notebookRuntimeTemplates.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', apiParams, clientConfig);
    this.projects.locations.notebookRuntimeTemplates.operations.wait = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:wait', 'POST', apiParams, clientConfig);

    this.projects.locations.featureOnlineStores = {};
    this.projects.locations.featureOnlineStores.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.locations.featureOnlineStores.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+resource}:getIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.locations.featureOnlineStores.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);
    this.projects.locations.featureOnlineStores.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/featureOnlineStores', 'POST', apiParams, clientConfig);
    this.projects.locations.featureOnlineStores.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.featureOnlineStores.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/featureOnlineStores', 'GET', apiParams, clientConfig);
    this.projects.locations.featureOnlineStores.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.featureOnlineStores.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.featureOnlineStores.featureViews = {};
    this.projects.locations.featureOnlineStores.featureViews.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.locations.featureOnlineStores.featureViews.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+resource}:getIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.locations.featureOnlineStores.featureViews.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);
    this.projects.locations.featureOnlineStores.featureViews.fetchFeatureValues = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+featureView}:fetchFeatureValues', 'POST', apiParams, clientConfig);
    this.projects.locations.featureOnlineStores.featureViews.streamingFetchFeatureValues = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+featureView}:streamingFetchFeatureValues', 'POST', apiParams, clientConfig);
    this.projects.locations.featureOnlineStores.featureViews.searchNearestEntities = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+featureView}:searchNearestEntities', 'POST', apiParams, clientConfig);
    this.projects.locations.featureOnlineStores.featureViews.directWrite = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+featureView}:directWrite', 'POST', apiParams, clientConfig);
    this.projects.locations.featureOnlineStores.featureViews.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/featureViews', 'POST', apiParams, clientConfig);
    this.projects.locations.featureOnlineStores.featureViews.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.featureOnlineStores.featureViews.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/featureViews', 'GET', apiParams, clientConfig);
    this.projects.locations.featureOnlineStores.featureViews.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.featureOnlineStores.featureViews.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.featureOnlineStores.featureViews.sync = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+featureView}:sync', 'POST', apiParams, clientConfig);

    this.projects.locations.featureOnlineStores.featureViews.operations = {};
    this.projects.locations.featureOnlineStores.featureViews.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/operations', 'GET', apiParams, clientConfig);
    this.projects.locations.featureOnlineStores.featureViews.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.featureOnlineStores.featureViews.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.featureOnlineStores.featureViews.operations.wait = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:wait', 'POST', apiParams, clientConfig);

    this.projects.locations.featureOnlineStores.featureViews.featureViewSyncs = {};
    this.projects.locations.featureOnlineStores.featureViews.featureViewSyncs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.featureOnlineStores.featureViews.featureViewSyncs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/featureViewSyncs', 'GET', apiParams, clientConfig);

    this.projects.locations.featureOnlineStores.operations = {};
    this.projects.locations.featureOnlineStores.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/operations', 'GET', apiParams, clientConfig);
    this.projects.locations.featureOnlineStores.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.featureOnlineStores.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.featureOnlineStores.operations.wait = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:wait', 'POST', apiParams, clientConfig);

    this.projects.locations.featureGroups = {};
    this.projects.locations.featureGroups.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.locations.featureGroups.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+resource}:getIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.locations.featureGroups.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);
    this.projects.locations.featureGroups.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/featureGroups', 'POST', apiParams, clientConfig);
    this.projects.locations.featureGroups.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.featureGroups.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/featureGroups', 'GET', apiParams, clientConfig);
    this.projects.locations.featureGroups.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.featureGroups.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.featureGroups.operations = {};
    this.projects.locations.featureGroups.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/operations', 'GET', apiParams, clientConfig);
    this.projects.locations.featureGroups.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.featureGroups.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.featureGroups.operations.wait = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:wait', 'POST', apiParams, clientConfig);

    this.projects.locations.featureGroups.features = {};
    this.projects.locations.featureGroups.features.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/features', 'POST', apiParams, clientConfig);
    this.projects.locations.featureGroups.features.batchCreate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/features:batchCreate', 'POST', apiParams, clientConfig);
    this.projects.locations.featureGroups.features.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.featureGroups.features.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/features', 'GET', apiParams, clientConfig);
    this.projects.locations.featureGroups.features.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.featureGroups.features.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.featureGroups.features.operations = {};
    this.projects.locations.featureGroups.features.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/operations', 'GET', apiParams, clientConfig);
    this.projects.locations.featureGroups.features.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.featureGroups.features.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.featureGroups.features.operations.wait = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:wait', 'POST', apiParams, clientConfig);

    this.projects.locations.featureGroups.featureMonitors = {};
    this.projects.locations.featureGroups.featureMonitors.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/featureMonitors', 'POST', apiParams, clientConfig);
    this.projects.locations.featureGroups.featureMonitors.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.featureGroups.featureMonitors.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/featureMonitors', 'GET', apiParams, clientConfig);
    this.projects.locations.featureGroups.featureMonitors.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.featureGroups.featureMonitors.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.featureGroups.featureMonitors.operations = {};
    this.projects.locations.featureGroups.featureMonitors.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/operations', 'GET', apiParams, clientConfig);
    this.projects.locations.featureGroups.featureMonitors.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.featureGroups.featureMonitors.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.featureGroups.featureMonitors.operations.wait = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:wait', 'POST', apiParams, clientConfig);

    this.projects.locations.featureGroups.featureMonitors.featureMonitorJobs = {};
    this.projects.locations.featureGroups.featureMonitors.featureMonitorJobs.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/featureMonitorJobs', 'POST', apiParams, clientConfig);
    this.projects.locations.featureGroups.featureMonitors.featureMonitorJobs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.featureGroups.featureMonitors.featureMonitorJobs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/featureMonitorJobs', 'GET', apiParams, clientConfig);

    this.projects.locations.publishers = {};

    this.projects.locations.publishers.models = {};
    this.projects.locations.publishers.models.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+resource}:getIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.locations.publishers.models.setPublisherModelConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:setPublisherModelConfig', 'POST', apiParams, clientConfig);
    this.projects.locations.publishers.models.fetchPublisherModelConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:fetchPublisherModelConfig', 'GET', apiParams, clientConfig);
    this.projects.locations.publishers.models.predict = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+endpoint}:predict', 'POST', apiParams, clientConfig);
    this.projects.locations.publishers.models.rawPredict = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+endpoint}:rawPredict', 'POST', apiParams, clientConfig);
    this.projects.locations.publishers.models.streamRawPredict = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+endpoint}:streamRawPredict', 'POST', apiParams, clientConfig);
    this.projects.locations.publishers.models.serverStreamingPredict = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+endpoint}:serverStreamingPredict', 'POST', apiParams, clientConfig);
    this.projects.locations.publishers.models.predictLongRunning = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+endpoint}:predictLongRunning', 'POST', apiParams, clientConfig);
    this.projects.locations.publishers.models.fetchPredictOperation = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+endpoint}:fetchPredictOperation', 'POST', apiParams, clientConfig);
    this.projects.locations.publishers.models.countTokens = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+endpoint}:countTokens', 'POST', apiParams, clientConfig);
    this.projects.locations.publishers.models.generateContent = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+model}:generateContent', 'POST', apiParams, clientConfig);
    this.projects.locations.publishers.models.streamGenerateContent = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+model}:streamGenerateContent', 'POST', apiParams, clientConfig);
    this.projects.locations.publishers.models.computeTokens = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+endpoint}:computeTokens', 'POST', apiParams, clientConfig);
    this.projects.locations.publishers.models.export = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/{+name}:export', 'POST', apiParams, clientConfig);

    this.projects.locations.operations = {};
    this.projects.locations.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/operations', 'GET', apiParams, clientConfig);
    this.projects.locations.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', apiParams, clientConfig);
    this.projects.locations.operations.wait = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:wait', 'POST', apiParams, clientConfig);

    this.projects.locations.agents = {};

    this.projects.locations.agents.operations = {};
    this.projects.locations.agents.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/operations', 'GET', apiParams, clientConfig);
    this.projects.locations.agents.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.agents.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.agents.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', apiParams, clientConfig);
    this.projects.locations.agents.operations.wait = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:wait', 'POST', apiParams, clientConfig);

    this.projects.locations.apps = {};

    this.projects.locations.apps.operations = {};
    this.projects.locations.apps.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/operations', 'GET', apiParams, clientConfig);
    this.projects.locations.apps.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.apps.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.apps.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', apiParams, clientConfig);
    this.projects.locations.apps.operations.wait = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:wait', 'POST', apiParams, clientConfig);

    this.projects.locations.edgeDevices = {};

    this.projects.locations.edgeDevices.operations = {};
    this.projects.locations.edgeDevices.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/operations', 'GET', apiParams, clientConfig);
    this.projects.locations.edgeDevices.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.edgeDevices.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.edgeDevices.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', apiParams, clientConfig);
    this.projects.locations.edgeDevices.operations.wait = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:wait', 'POST', apiParams, clientConfig);

    this.projects.locations.evaluationTasks = {};

    this.projects.locations.evaluationTasks.operations = {};
    this.projects.locations.evaluationTasks.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/operations', 'GET', apiParams, clientConfig);
    this.projects.locations.evaluationTasks.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.evaluationTasks.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.evaluationTasks.operations.wait = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:wait', 'POST', apiParams, clientConfig);

    this.projects.locations.extensionControllers = {};

    this.projects.locations.extensionControllers.operations = {};
    this.projects.locations.extensionControllers.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/operations', 'GET', apiParams, clientConfig);
    this.projects.locations.extensionControllers.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.extensionControllers.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.extensionControllers.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', apiParams, clientConfig);
    this.projects.locations.extensionControllers.operations.wait = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:wait', 'POST', apiParams, clientConfig);

    this.projects.locations.ragEngineConfig = {};

    this.projects.locations.ragEngineConfig.operations = {};
    this.projects.locations.ragEngineConfig.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/operations', 'GET', apiParams, clientConfig);
    this.projects.locations.ragEngineConfig.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.ragEngineConfig.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.ragEngineConfig.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', apiParams, clientConfig);
    this.projects.locations.ragEngineConfig.operations.wait = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:wait', 'POST', apiParams, clientConfig);

    this.projects.locations.solvers = {};

    this.projects.locations.solvers.operations = {};
    this.projects.locations.solvers.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/operations', 'GET', apiParams, clientConfig);
    this.projects.locations.solvers.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.solvers.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.cachedContents = {};
    this.projects.locations.cachedContents.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/cachedContents', 'POST', apiParams, clientConfig);
    this.projects.locations.cachedContents.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.cachedContents.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.cachedContents.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.cachedContents.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/cachedContents', 'GET', apiParams, clientConfig);

    this.projects.locations.datasets = {};
    this.projects.locations.datasets.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/datasets', 'POST', apiParams, clientConfig);
    this.projects.locations.datasets.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.datasets.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.datasets.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/datasets', 'GET', apiParams, clientConfig);
    this.projects.locations.datasets.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.datasets.import = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:import', 'POST', apiParams, clientConfig);
    this.projects.locations.datasets.export = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:export', 'POST', apiParams, clientConfig);
    this.projects.locations.datasets.searchDataItems = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+dataset}:searchDataItems', 'GET', apiParams, clientConfig);
    this.projects.locations.datasets.assess = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:assess', 'POST', apiParams, clientConfig);
    this.projects.locations.datasets.assemble = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:assemble', 'POST', apiParams, clientConfig);

    this.projects.locations.datasets.operations = {};
    this.projects.locations.datasets.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/operations', 'GET', apiParams, clientConfig);
    this.projects.locations.datasets.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.datasets.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.datasets.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', apiParams, clientConfig);
    this.projects.locations.datasets.operations.wait = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:wait', 'POST', apiParams, clientConfig);

    this.projects.locations.datasets.datasetVersions = {};
    this.projects.locations.datasets.datasetVersions.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/datasetVersions', 'POST', apiParams, clientConfig);
    this.projects.locations.datasets.datasetVersions.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.datasets.datasetVersions.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.datasets.datasetVersions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.datasets.datasetVersions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/datasetVersions', 'GET', apiParams, clientConfig);
    this.projects.locations.datasets.datasetVersions.restore = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:restore', 'GET', apiParams, clientConfig);

    this.projects.locations.datasets.dataItems = {};
    this.projects.locations.datasets.dataItems.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/dataItems', 'GET', apiParams, clientConfig);

    this.projects.locations.datasets.dataItems.operations = {};
    this.projects.locations.datasets.dataItems.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/operations', 'GET', apiParams, clientConfig);
    this.projects.locations.datasets.dataItems.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.datasets.dataItems.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.datasets.dataItems.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', apiParams, clientConfig);
    this.projects.locations.datasets.dataItems.operations.wait = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:wait', 'POST', apiParams, clientConfig);

    this.projects.locations.datasets.dataItems.annotations = {};
    this.projects.locations.datasets.dataItems.annotations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/annotations', 'GET', apiParams, clientConfig);

    this.projects.locations.datasets.dataItems.annotations.operations = {};
    this.projects.locations.datasets.dataItems.annotations.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/operations', 'GET', apiParams, clientConfig);
    this.projects.locations.datasets.dataItems.annotations.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.datasets.dataItems.annotations.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.datasets.dataItems.annotations.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', apiParams, clientConfig);
    this.projects.locations.datasets.dataItems.annotations.operations.wait = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:wait', 'POST', apiParams, clientConfig);

    this.projects.locations.datasets.savedQueries = {};
    this.projects.locations.datasets.savedQueries.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/savedQueries', 'GET', apiParams, clientConfig);
    this.projects.locations.datasets.savedQueries.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.datasets.savedQueries.operations = {};
    this.projects.locations.datasets.savedQueries.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/operations', 'GET', apiParams, clientConfig);
    this.projects.locations.datasets.savedQueries.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.datasets.savedQueries.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.datasets.savedQueries.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', apiParams, clientConfig);
    this.projects.locations.datasets.savedQueries.operations.wait = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:wait', 'POST', apiParams, clientConfig);

    this.projects.locations.datasets.annotationSpecs = {};
    this.projects.locations.datasets.annotationSpecs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.datasets.annotationSpecs.operations = {};
    this.projects.locations.datasets.annotationSpecs.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/operations', 'GET', apiParams, clientConfig);
    this.projects.locations.datasets.annotationSpecs.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.datasets.annotationSpecs.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.datasets.annotationSpecs.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', apiParams, clientConfig);
    this.projects.locations.datasets.annotationSpecs.operations.wait = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:wait', 'POST', apiParams, clientConfig);

    this.projects.locations.deploymentResourcePools = {};
    this.projects.locations.deploymentResourcePools.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/deploymentResourcePools', 'POST', apiParams, clientConfig);
    this.projects.locations.deploymentResourcePools.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.deploymentResourcePools.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/deploymentResourcePools', 'GET', apiParams, clientConfig);
    this.projects.locations.deploymentResourcePools.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.deploymentResourcePools.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.deploymentResourcePools.queryDeployedModels = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+deploymentResourcePool}:queryDeployedModels', 'GET', apiParams, clientConfig);

    this.projects.locations.deploymentResourcePools.operations = {};
    this.projects.locations.deploymentResourcePools.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/operations', 'GET', apiParams, clientConfig);
    this.projects.locations.deploymentResourcePools.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.deploymentResourcePools.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.deploymentResourcePools.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', apiParams, clientConfig);
    this.projects.locations.deploymentResourcePools.operations.wait = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:wait', 'POST', apiParams, clientConfig);

    this.projects.locations.evaluationRuns = {};
    this.projects.locations.evaluationRuns.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/evaluationRuns', 'POST', apiParams, clientConfig);
    this.projects.locations.evaluationRuns.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.evaluationRuns.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/evaluationRuns', 'GET', apiParams, clientConfig);
    this.projects.locations.evaluationRuns.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.evaluationRuns.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', apiParams, clientConfig);

    this.projects.locations.evaluationRuns.operations = {};
    this.projects.locations.evaluationRuns.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/operations', 'GET', apiParams, clientConfig);
    this.projects.locations.evaluationRuns.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.evaluationRuns.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.evaluationRuns.operations.wait = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:wait', 'POST', apiParams, clientConfig);

    this.projects.locations.evaluationSets = {};
    this.projects.locations.evaluationSets.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/evaluationSets', 'POST', apiParams, clientConfig);
    this.projects.locations.evaluationSets.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.evaluationSets.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/evaluationSets', 'GET', apiParams, clientConfig);
    this.projects.locations.evaluationSets.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.evaluationSets.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects.locations.evaluationSets.operations = {};
    this.projects.locations.evaluationSets.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/operations', 'GET', apiParams, clientConfig);
    this.projects.locations.evaluationSets.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.evaluationSets.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.evaluationSets.operations.wait = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:wait', 'POST', apiParams, clientConfig);

    this.projects.locations.evaluationItems = {};
    this.projects.locations.evaluationItems.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/evaluationItems', 'POST', apiParams, clientConfig);
    this.projects.locations.evaluationItems.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.evaluationItems.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/evaluationItems', 'GET', apiParams, clientConfig);
    this.projects.locations.evaluationItems.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.evaluationItems.operations = {};
    this.projects.locations.evaluationItems.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/operations', 'GET', apiParams, clientConfig);
    this.projects.locations.evaluationItems.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.evaluationItems.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.evaluationItems.operations.wait = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:wait', 'POST', apiParams, clientConfig);

    this.projects.locations.exampleStores = {};
    this.projects.locations.exampleStores.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/exampleStores:create', 'POST', apiParams, clientConfig);
    this.projects.locations.exampleStores.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.exampleStores.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.exampleStores.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.exampleStores.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/exampleStores', 'GET', apiParams, clientConfig);
    this.projects.locations.exampleStores.upsertExamples = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+exampleStore}:upsertExamples', 'POST', apiParams, clientConfig);
    this.projects.locations.exampleStores.removeExamples = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+exampleStore}:removeExamples', 'POST', apiParams, clientConfig);
    this.projects.locations.exampleStores.searchExamples = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+exampleStore}:searchExamples', 'POST', apiParams, clientConfig);
    this.projects.locations.exampleStores.fetchExamples = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+exampleStore}:fetchExamples', 'POST', apiParams, clientConfig);

    this.projects.locations.exampleStores.operations = {};
    this.projects.locations.exampleStores.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/operations', 'GET', apiParams, clientConfig);
    this.projects.locations.exampleStores.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.exampleStores.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.exampleStores.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', apiParams, clientConfig);
    this.projects.locations.exampleStores.operations.wait = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:wait', 'POST', apiParams, clientConfig);

    this.projects.locations.extensions = {};
    this.projects.locations.extensions.import = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/extensions:import', 'POST', apiParams, clientConfig);
    this.projects.locations.extensions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.extensions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/extensions', 'GET', apiParams, clientConfig);
    this.projects.locations.extensions.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.extensions.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.extensions.execute = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:execute', 'POST', apiParams, clientConfig);
    this.projects.locations.extensions.query = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:query', 'POST', apiParams, clientConfig);

    this.projects.locations.extensions.operations = {};
    this.projects.locations.extensions.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/operations', 'GET', apiParams, clientConfig);
    this.projects.locations.extensions.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.extensions.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.extensions.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', apiParams, clientConfig);
    this.projects.locations.extensions.operations.wait = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:wait', 'POST', apiParams, clientConfig);

    this.projects.locations.tuningJobs = {};
    this.projects.locations.tuningJobs.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/tuningJobs', 'POST', apiParams, clientConfig);
    this.projects.locations.tuningJobs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.tuningJobs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/tuningJobs', 'GET', apiParams, clientConfig);
    this.projects.locations.tuningJobs.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', apiParams, clientConfig);
    this.projects.locations.tuningJobs.rebaseTunedModel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/tuningJobs:rebaseTunedModel', 'POST', apiParams, clientConfig);
    this.projects.locations.tuningJobs.optimizePrompt = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/tuningJobs:optimizePrompt', 'POST', apiParams, clientConfig);

    this.projects.locations.tuningJobs.operations = {};
    this.projects.locations.tuningJobs.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.indexes = {};
    this.projects.locations.indexes.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/indexes', 'POST', apiParams, clientConfig);
    this.projects.locations.indexes.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.indexes.import = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:import', 'POST', apiParams, clientConfig);
    this.projects.locations.indexes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/indexes', 'GET', apiParams, clientConfig);
    this.projects.locations.indexes.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.indexes.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.indexes.upsertDatapoints = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+index}:upsertDatapoints', 'POST', apiParams, clientConfig);
    this.projects.locations.indexes.removeDatapoints = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+index}:removeDatapoints', 'POST', apiParams, clientConfig);

    this.projects.locations.indexes.operations = {};
    this.projects.locations.indexes.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/operations', 'GET', apiParams, clientConfig);
    this.projects.locations.indexes.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.indexes.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.indexes.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', apiParams, clientConfig);
    this.projects.locations.indexes.operations.wait = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:wait', 'POST', apiParams, clientConfig);

    this.projects.locations.indexEndpoints = {};
    this.projects.locations.indexEndpoints.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/indexEndpoints', 'POST', apiParams, clientConfig);
    this.projects.locations.indexEndpoints.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.indexEndpoints.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/indexEndpoints', 'GET', apiParams, clientConfig);
    this.projects.locations.indexEndpoints.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.indexEndpoints.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.indexEndpoints.deployIndex = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+indexEndpoint}:deployIndex', 'POST', apiParams, clientConfig);
    this.projects.locations.indexEndpoints.undeployIndex = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+indexEndpoint}:undeployIndex', 'POST', apiParams, clientConfig);
    this.projects.locations.indexEndpoints.mutateDeployedIndex = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+indexEndpoint}:mutateDeployedIndex', 'POST', apiParams, clientConfig);
    this.projects.locations.indexEndpoints.findNeighbors = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+indexEndpoint}:findNeighbors', 'POST', apiParams, clientConfig);
    this.projects.locations.indexEndpoints.readIndexDatapoints = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+indexEndpoint}:readIndexDatapoints', 'POST', apiParams, clientConfig);

    this.projects.locations.indexEndpoints.operations = {};
    this.projects.locations.indexEndpoints.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/operations', 'GET', apiParams, clientConfig);
    this.projects.locations.indexEndpoints.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.indexEndpoints.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.indexEndpoints.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', apiParams, clientConfig);
    this.projects.locations.indexEndpoints.operations.wait = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:wait', 'POST', apiParams, clientConfig);

    this.projects.locations.customJobs = {};
    this.projects.locations.customJobs.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/customJobs', 'POST', apiParams, clientConfig);
    this.projects.locations.customJobs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.customJobs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/customJobs', 'GET', apiParams, clientConfig);
    this.projects.locations.customJobs.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.customJobs.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', apiParams, clientConfig);

    this.projects.locations.customJobs.operations = {};
    this.projects.locations.customJobs.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/operations', 'GET', apiParams, clientConfig);
    this.projects.locations.customJobs.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.customJobs.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.customJobs.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', apiParams, clientConfig);
    this.projects.locations.customJobs.operations.wait = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:wait', 'POST', apiParams, clientConfig);

    this.projects.locations.dataLabelingJobs = {};
    this.projects.locations.dataLabelingJobs.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/dataLabelingJobs', 'POST', apiParams, clientConfig);
    this.projects.locations.dataLabelingJobs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.dataLabelingJobs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/dataLabelingJobs', 'GET', apiParams, clientConfig);
    this.projects.locations.dataLabelingJobs.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.dataLabelingJobs.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', apiParams, clientConfig);

    this.projects.locations.dataLabelingJobs.operations = {};
    this.projects.locations.dataLabelingJobs.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/operations', 'GET', apiParams, clientConfig);
    this.projects.locations.dataLabelingJobs.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.dataLabelingJobs.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.dataLabelingJobs.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', apiParams, clientConfig);
    this.projects.locations.dataLabelingJobs.operations.wait = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:wait', 'POST', apiParams, clientConfig);

    this.projects.locations.hyperparameterTuningJobs = {};
    this.projects.locations.hyperparameterTuningJobs.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/hyperparameterTuningJobs', 'POST', apiParams, clientConfig);
    this.projects.locations.hyperparameterTuningJobs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.hyperparameterTuningJobs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/hyperparameterTuningJobs', 'GET', apiParams, clientConfig);
    this.projects.locations.hyperparameterTuningJobs.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.hyperparameterTuningJobs.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', apiParams, clientConfig);

    this.projects.locations.hyperparameterTuningJobs.operations = {};
    this.projects.locations.hyperparameterTuningJobs.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/operations', 'GET', apiParams, clientConfig);
    this.projects.locations.hyperparameterTuningJobs.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.hyperparameterTuningJobs.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.hyperparameterTuningJobs.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', apiParams, clientConfig);
    this.projects.locations.hyperparameterTuningJobs.operations.wait = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:wait', 'POST', apiParams, clientConfig);

    this.projects.locations.nasJobs = {};
    this.projects.locations.nasJobs.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/nasJobs', 'POST', apiParams, clientConfig);
    this.projects.locations.nasJobs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.nasJobs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/nasJobs', 'GET', apiParams, clientConfig);
    this.projects.locations.nasJobs.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.nasJobs.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', apiParams, clientConfig);

    this.projects.locations.nasJobs.nasTrialDetails = {};
    this.projects.locations.nasJobs.nasTrialDetails.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.nasJobs.nasTrialDetails.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/nasTrialDetails', 'GET', apiParams, clientConfig);

    this.projects.locations.batchPredictionJobs = {};
    this.projects.locations.batchPredictionJobs.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/batchPredictionJobs', 'POST', apiParams, clientConfig);
    this.projects.locations.batchPredictionJobs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.batchPredictionJobs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/batchPredictionJobs', 'GET', apiParams, clientConfig);
    this.projects.locations.batchPredictionJobs.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.batchPredictionJobs.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', apiParams, clientConfig);

    this.projects.locations.modelDeploymentMonitoringJobs = {};
    this.projects.locations.modelDeploymentMonitoringJobs.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/modelDeploymentMonitoringJobs', 'POST', apiParams, clientConfig);
    this.projects.locations.modelDeploymentMonitoringJobs.searchModelDeploymentMonitoringStatsAnomalies = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+modelDeploymentMonitoringJob}:searchModelDeploymentMonitoringStatsAnomalies', 'POST', apiParams, clientConfig);
    this.projects.locations.modelDeploymentMonitoringJobs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.modelDeploymentMonitoringJobs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/modelDeploymentMonitoringJobs', 'GET', apiParams, clientConfig);
    this.projects.locations.modelDeploymentMonitoringJobs.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.modelDeploymentMonitoringJobs.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.modelDeploymentMonitoringJobs.pause = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:pause', 'POST', apiParams, clientConfig);
    this.projects.locations.modelDeploymentMonitoringJobs.resume = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:resume', 'POST', apiParams, clientConfig);

    this.projects.locations.modelDeploymentMonitoringJobs.operations = {};
    this.projects.locations.modelDeploymentMonitoringJobs.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/operations', 'GET', apiParams, clientConfig);
    this.projects.locations.modelDeploymentMonitoringJobs.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.modelDeploymentMonitoringJobs.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.modelDeploymentMonitoringJobs.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', apiParams, clientConfig);
    this.projects.locations.modelDeploymentMonitoringJobs.operations.wait = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:wait', 'POST', apiParams, clientConfig);

    this.projects.locations.metadataStores = {};
    this.projects.locations.metadataStores.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/metadataStores', 'POST', apiParams, clientConfig);
    this.projects.locations.metadataStores.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.metadataStores.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/metadataStores', 'GET', apiParams, clientConfig);
    this.projects.locations.metadataStores.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.metadataStores.operations = {};
    this.projects.locations.metadataStores.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/operations', 'GET', apiParams, clientConfig);
    this.projects.locations.metadataStores.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.metadataStores.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.metadataStores.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', apiParams, clientConfig);
    this.projects.locations.metadataStores.operations.wait = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:wait', 'POST', apiParams, clientConfig);

    this.projects.locations.metadataStores.artifacts = {};
    this.projects.locations.metadataStores.artifacts.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/artifacts', 'POST', apiParams, clientConfig);
    this.projects.locations.metadataStores.artifacts.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.metadataStores.artifacts.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/artifacts', 'GET', apiParams, clientConfig);
    this.projects.locations.metadataStores.artifacts.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.metadataStores.artifacts.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.metadataStores.artifacts.purge = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/artifacts:purge', 'POST', apiParams, clientConfig);
    this.projects.locations.metadataStores.artifacts.queryArtifactLineageSubgraph = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+artifact}:queryArtifactLineageSubgraph', 'GET', apiParams, clientConfig);

    this.projects.locations.metadataStores.artifacts.operations = {};
    this.projects.locations.metadataStores.artifacts.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/operations', 'GET', apiParams, clientConfig);
    this.projects.locations.metadataStores.artifacts.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.metadataStores.artifacts.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.metadataStores.artifacts.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', apiParams, clientConfig);
    this.projects.locations.metadataStores.artifacts.operations.wait = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:wait', 'POST', apiParams, clientConfig);

    this.projects.locations.metadataStores.contexts = {};
    this.projects.locations.metadataStores.contexts.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/contexts', 'POST', apiParams, clientConfig);
    this.projects.locations.metadataStores.contexts.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.metadataStores.contexts.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/contexts', 'GET', apiParams, clientConfig);
    this.projects.locations.metadataStores.contexts.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.metadataStores.contexts.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.metadataStores.contexts.purge = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/contexts:purge', 'POST', apiParams, clientConfig);
    this.projects.locations.metadataStores.contexts.addContextArtifactsAndExecutions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+context}:addContextArtifactsAndExecutions', 'POST', apiParams, clientConfig);
    this.projects.locations.metadataStores.contexts.addContextChildren = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+context}:addContextChildren', 'POST', apiParams, clientConfig);
    this.projects.locations.metadataStores.contexts.removeContextChildren = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+context}:removeContextChildren', 'POST', apiParams, clientConfig);
    this.projects.locations.metadataStores.contexts.queryContextLineageSubgraph = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+context}:queryContextLineageSubgraph', 'GET', apiParams, clientConfig);

    this.projects.locations.metadataStores.contexts.operations = {};
    this.projects.locations.metadataStores.contexts.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/operations', 'GET', apiParams, clientConfig);
    this.projects.locations.metadataStores.contexts.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.metadataStores.contexts.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.metadataStores.contexts.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', apiParams, clientConfig);
    this.projects.locations.metadataStores.contexts.operations.wait = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:wait', 'POST', apiParams, clientConfig);

    this.projects.locations.metadataStores.executions = {};
    this.projects.locations.metadataStores.executions.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/executions', 'POST', apiParams, clientConfig);
    this.projects.locations.metadataStores.executions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.metadataStores.executions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/executions', 'GET', apiParams, clientConfig);
    this.projects.locations.metadataStores.executions.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.metadataStores.executions.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.metadataStores.executions.purge = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/executions:purge', 'POST', apiParams, clientConfig);
    this.projects.locations.metadataStores.executions.addExecutionEvents = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+execution}:addExecutionEvents', 'POST', apiParams, clientConfig);
    this.projects.locations.metadataStores.executions.queryExecutionInputsAndOutputs = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+execution}:queryExecutionInputsAndOutputs', 'GET', apiParams, clientConfig);

    this.projects.locations.metadataStores.executions.operations = {};
    this.projects.locations.metadataStores.executions.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/operations', 'GET', apiParams, clientConfig);
    this.projects.locations.metadataStores.executions.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.metadataStores.executions.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.metadataStores.executions.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', apiParams, clientConfig);
    this.projects.locations.metadataStores.executions.operations.wait = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:wait', 'POST', apiParams, clientConfig);

    this.projects.locations.metadataStores.metadataSchemas = {};
    this.projects.locations.metadataStores.metadataSchemas.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/metadataSchemas', 'POST', apiParams, clientConfig);
    this.projects.locations.metadataStores.metadataSchemas.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.metadataStores.metadataSchemas.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/metadataSchemas', 'GET', apiParams, clientConfig);

    this.projects.locations.migratableResources = {};
    this.projects.locations.migratableResources.search = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/migratableResources:search', 'POST', apiParams, clientConfig);
    this.projects.locations.migratableResources.batchMigrate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/migratableResources:batchMigrate', 'POST', apiParams, clientConfig);

    this.projects.locations.migratableResources.operations = {};
    this.projects.locations.migratableResources.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/operations', 'GET', apiParams, clientConfig);
    this.projects.locations.migratableResources.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.migratableResources.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.migratableResources.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', apiParams, clientConfig);
    this.projects.locations.migratableResources.operations.wait = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:wait', 'POST', apiParams, clientConfig);

    this.projects.locations.modelMonitors = {};
    this.projects.locations.modelMonitors.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/modelMonitors', 'POST', apiParams, clientConfig);
    this.projects.locations.modelMonitors.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.modelMonitors.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.modelMonitors.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/modelMonitors', 'GET', apiParams, clientConfig);
    this.projects.locations.modelMonitors.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.modelMonitors.searchModelMonitoringStats = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+modelMonitor}:searchModelMonitoringStats', 'POST', apiParams, clientConfig);
    this.projects.locations.modelMonitors.searchModelMonitoringAlerts = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+modelMonitor}:searchModelMonitoringAlerts', 'POST', apiParams, clientConfig);

    this.projects.locations.modelMonitors.operations = {};
    this.projects.locations.modelMonitors.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/operations', 'GET', apiParams, clientConfig);
    this.projects.locations.modelMonitors.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.modelMonitors.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.modelMonitors.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', apiParams, clientConfig);
    this.projects.locations.modelMonitors.operations.wait = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:wait', 'POST', apiParams, clientConfig);

    this.projects.locations.modelMonitors.modelMonitoringJobs = {};
    this.projects.locations.modelMonitors.modelMonitoringJobs.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/modelMonitoringJobs', 'POST', apiParams, clientConfig);
    this.projects.locations.modelMonitors.modelMonitoringJobs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.modelMonitors.modelMonitoringJobs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/modelMonitoringJobs', 'GET', apiParams, clientConfig);
    this.projects.locations.modelMonitors.modelMonitoringJobs.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.notebookRuntimes = {};
    this.projects.locations.notebookRuntimes.reportEvent = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:reportEvent', 'POST', apiParams, clientConfig);
    this.projects.locations.notebookRuntimes.generateAccessToken = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:generateAccessToken', 'POST', apiParams, clientConfig);
    this.projects.locations.notebookRuntimes.assign = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/notebookRuntimes:assign', 'POST', apiParams, clientConfig);
    this.projects.locations.notebookRuntimes.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.notebookRuntimes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/notebookRuntimes', 'GET', apiParams, clientConfig);
    this.projects.locations.notebookRuntimes.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.notebookRuntimes.upgrade = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:upgrade', 'POST', apiParams, clientConfig);
    this.projects.locations.notebookRuntimes.start = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:start', 'POST', apiParams, clientConfig);
    this.projects.locations.notebookRuntimes.stop = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:stop', 'POST', apiParams, clientConfig);

    this.projects.locations.notebookRuntimes.operations = {};
    this.projects.locations.notebookRuntimes.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/operations', 'GET', apiParams, clientConfig);
    this.projects.locations.notebookRuntimes.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.notebookRuntimes.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.notebookRuntimes.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', apiParams, clientConfig);
    this.projects.locations.notebookRuntimes.operations.wait = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:wait', 'POST', apiParams, clientConfig);

    this.projects.locations.notebookExecutionJobs = {};
    this.projects.locations.notebookExecutionJobs.reportEvent = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:reportEvent', 'POST', apiParams, clientConfig);
    this.projects.locations.notebookExecutionJobs.generateAccessToken = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:generateAccessToken', 'POST', apiParams, clientConfig);
    this.projects.locations.notebookExecutionJobs.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/notebookExecutionJobs', 'POST', apiParams, clientConfig);
    this.projects.locations.notebookExecutionJobs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.notebookExecutionJobs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/notebookExecutionJobs', 'GET', apiParams, clientConfig);
    this.projects.locations.notebookExecutionJobs.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.notebookExecutionJobs.operations = {};
    this.projects.locations.notebookExecutionJobs.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/operations', 'GET', apiParams, clientConfig);
    this.projects.locations.notebookExecutionJobs.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.notebookExecutionJobs.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.notebookExecutionJobs.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', apiParams, clientConfig);
    this.projects.locations.notebookExecutionJobs.operations.wait = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:wait', 'POST', apiParams, clientConfig);

    this.projects.locations.persistentResources = {};
    this.projects.locations.persistentResources.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/persistentResources', 'POST', apiParams, clientConfig);
    this.projects.locations.persistentResources.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.persistentResources.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/persistentResources', 'GET', apiParams, clientConfig);
    this.projects.locations.persistentResources.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.persistentResources.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.persistentResources.reboot = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:reboot', 'POST', apiParams, clientConfig);

    this.projects.locations.persistentResources.operations = {};
    this.projects.locations.persistentResources.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/operations', 'GET', apiParams, clientConfig);
    this.projects.locations.persistentResources.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.persistentResources.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.persistentResources.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', apiParams, clientConfig);
    this.projects.locations.persistentResources.operations.wait = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:wait', 'POST', apiParams, clientConfig);

    this.projects.locations.trainingPipelines = {};
    this.projects.locations.trainingPipelines.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/trainingPipelines', 'POST', apiParams, clientConfig);
    this.projects.locations.trainingPipelines.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.trainingPipelines.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/trainingPipelines', 'GET', apiParams, clientConfig);
    this.projects.locations.trainingPipelines.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.trainingPipelines.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', apiParams, clientConfig);

    this.projects.locations.trainingPipelines.operations = {};
    this.projects.locations.trainingPipelines.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/operations', 'GET', apiParams, clientConfig);
    this.projects.locations.trainingPipelines.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.trainingPipelines.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.trainingPipelines.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', apiParams, clientConfig);
    this.projects.locations.trainingPipelines.operations.wait = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:wait', 'POST', apiParams, clientConfig);

    this.projects.locations.pipelineJobs = {};
    this.projects.locations.pipelineJobs.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/pipelineJobs', 'POST', apiParams, clientConfig);
    this.projects.locations.pipelineJobs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.pipelineJobs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/pipelineJobs', 'GET', apiParams, clientConfig);
    this.projects.locations.pipelineJobs.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.pipelineJobs.batchDelete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/pipelineJobs:batchDelete', 'POST', apiParams, clientConfig);
    this.projects.locations.pipelineJobs.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', apiParams, clientConfig);
    this.projects.locations.pipelineJobs.batchCancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/pipelineJobs:batchCancel', 'POST', apiParams, clientConfig);

    this.projects.locations.pipelineJobs.operations = {};
    this.projects.locations.pipelineJobs.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/operations', 'GET', apiParams, clientConfig);
    this.projects.locations.pipelineJobs.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.pipelineJobs.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.pipelineJobs.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', apiParams, clientConfig);
    this.projects.locations.pipelineJobs.operations.wait = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:wait', 'POST', apiParams, clientConfig);

    this.projects.locations.reasoningEngines = {};
    this.projects.locations.reasoningEngines.query = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:query', 'POST', apiParams, clientConfig);
    this.projects.locations.reasoningEngines.streamQuery = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:streamQuery', 'POST', apiParams, clientConfig);
    this.projects.locations.reasoningEngines.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/reasoningEngines', 'POST', apiParams, clientConfig);
    this.projects.locations.reasoningEngines.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.reasoningEngines.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/reasoningEngines', 'GET', apiParams, clientConfig);
    this.projects.locations.reasoningEngines.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.reasoningEngines.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.reasoningEngines.operations = {};
    this.projects.locations.reasoningEngines.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/operations', 'GET', apiParams, clientConfig);
    this.projects.locations.reasoningEngines.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.reasoningEngines.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.reasoningEngines.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', apiParams, clientConfig);
    this.projects.locations.reasoningEngines.operations.wait = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:wait', 'POST', apiParams, clientConfig);

    this.projects.locations.reasoningEngines.examples = {};

    this.projects.locations.reasoningEngines.examples.operations = {};
    this.projects.locations.reasoningEngines.examples.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.reasoningEngines.examples.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.reasoningEngines.examples.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', apiParams, clientConfig);
    this.projects.locations.reasoningEngines.examples.operations.wait = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:wait', 'POST', apiParams, clientConfig);

    this.projects.locations.reasoningEngines.memories = {};
    this.projects.locations.reasoningEngines.memories.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/memories', 'POST', apiParams, clientConfig);
    this.projects.locations.reasoningEngines.memories.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.reasoningEngines.memories.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.reasoningEngines.memories.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/memories', 'GET', apiParams, clientConfig);
    this.projects.locations.reasoningEngines.memories.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.reasoningEngines.memories.generate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/memories:generate', 'POST', apiParams, clientConfig);
    this.projects.locations.reasoningEngines.memories.retrieve = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/memories:retrieve', 'POST', apiParams, clientConfig);

    this.projects.locations.reasoningEngines.memories.operations = {};
    this.projects.locations.reasoningEngines.memories.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/operations', 'GET', apiParams, clientConfig);
    this.projects.locations.reasoningEngines.memories.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.reasoningEngines.memories.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.reasoningEngines.memories.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', apiParams, clientConfig);
    this.projects.locations.reasoningEngines.memories.operations.wait = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:wait', 'POST', apiParams, clientConfig);

    this.projects.locations.reasoningEngines.a2a = {};

    this.projects.locations.reasoningEngines.a2a.v1 = {};
    this.projects.locations.reasoningEngines.a2a.v1.card = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/a2a/{+a2aEndpoint}', 'GET', apiParams, clientConfig);

    this.projects.locations.reasoningEngines.a2a.v1.message = {};
    this.projects.locations.reasoningEngines.a2a.v1.message.stream = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/a2a/{+a2aEndpoint}:stream', 'POST', apiParams, clientConfig);
    this.projects.locations.reasoningEngines.a2a.v1.message.send = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/a2a/{+a2aEndpoint}:send', 'POST', apiParams, clientConfig);

    this.projects.locations.reasoningEngines.a2a.v1.tasks = {};
    this.projects.locations.reasoningEngines.a2a.v1.tasks.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/a2a/{+a2aEndpoint}:cancel', 'POST', apiParams, clientConfig);
    this.projects.locations.reasoningEngines.a2a.v1.tasks.pushNotificationConfigs = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/a2a/{+a2aEndpoint}', 'GET', apiParams, clientConfig);
    this.projects.locations.reasoningEngines.a2a.v1.tasks.a2aGetReasoningEngine = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/a2a/{+a2aEndpoint}', 'GET', apiParams, clientConfig);
    this.projects.locations.reasoningEngines.a2a.v1.tasks.subscribe = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/a2a/{+a2aEndpoint}:subscribe', 'GET', apiParams, clientConfig);

    this.projects.locations.reasoningEngines.a2a.v1.tasks.pushNotificationConfigs = {};
    this.projects.locations.reasoningEngines.a2a.v1.tasks.pushNotificationConfigs.a2aGetReasoningEngine = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/a2a/{+a2aEndpoint}', 'GET', apiParams, clientConfig);

    this.projects.locations.reasoningEngines.sandboxEnvironments = {};
    this.projects.locations.reasoningEngines.sandboxEnvironments.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/sandboxEnvironments', 'POST', apiParams, clientConfig);
    this.projects.locations.reasoningEngines.sandboxEnvironments.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.reasoningEngines.sandboxEnvironments.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/sandboxEnvironments', 'GET', apiParams, clientConfig);
    this.projects.locations.reasoningEngines.sandboxEnvironments.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.reasoningEngines.sandboxEnvironments.execute = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:execute', 'POST', apiParams, clientConfig);

    this.projects.locations.reasoningEngines.sandboxEnvironments.operations = {};
    this.projects.locations.reasoningEngines.sandboxEnvironments.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/operations', 'GET', apiParams, clientConfig);
    this.projects.locations.reasoningEngines.sandboxEnvironments.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.reasoningEngines.sandboxEnvironments.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.reasoningEngines.sandboxEnvironments.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', apiParams, clientConfig);
    this.projects.locations.reasoningEngines.sandboxEnvironments.operations.wait = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:wait', 'POST', apiParams, clientConfig);

    this.projects.locations.reasoningEngines.sessions = {};
    this.projects.locations.reasoningEngines.sessions.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/sessions', 'POST', apiParams, clientConfig);
    this.projects.locations.reasoningEngines.sessions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.reasoningEngines.sessions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/sessions', 'GET', apiParams, clientConfig);
    this.projects.locations.reasoningEngines.sessions.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.reasoningEngines.sessions.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.reasoningEngines.sessions.appendEvent = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:appendEvent', 'POST', apiParams, clientConfig);

    this.projects.locations.reasoningEngines.sessions.operations = {};
    this.projects.locations.reasoningEngines.sessions.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/operations', 'GET', apiParams, clientConfig);
    this.projects.locations.reasoningEngines.sessions.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.reasoningEngines.sessions.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.reasoningEngines.sessions.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', apiParams, clientConfig);
    this.projects.locations.reasoningEngines.sessions.operations.wait = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:wait', 'POST', apiParams, clientConfig);

    this.projects.locations.reasoningEngines.sessions.events = {};
    this.projects.locations.reasoningEngines.sessions.events.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/events', 'GET', apiParams, clientConfig);

    this.projects.locations.schedules = {};
    this.projects.locations.schedules.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/schedules', 'POST', apiParams, clientConfig);
    this.projects.locations.schedules.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.schedules.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.schedules.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/schedules', 'GET', apiParams, clientConfig);
    this.projects.locations.schedules.pause = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:pause', 'POST', apiParams, clientConfig);
    this.projects.locations.schedules.resume = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:resume', 'POST', apiParams, clientConfig);
    this.projects.locations.schedules.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects.locations.schedules.operations = {};
    this.projects.locations.schedules.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/operations', 'GET', apiParams, clientConfig);
    this.projects.locations.schedules.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.schedules.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.schedules.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', apiParams, clientConfig);
    this.projects.locations.schedules.operations.wait = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:wait', 'POST', apiParams, clientConfig);

    this.projects.locations.specialistPools = {};
    this.projects.locations.specialistPools.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/specialistPools', 'POST', apiParams, clientConfig);
    this.projects.locations.specialistPools.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.specialistPools.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/specialistPools', 'GET', apiParams, clientConfig);
    this.projects.locations.specialistPools.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.specialistPools.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects.locations.specialistPools.operations = {};
    this.projects.locations.specialistPools.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/operations', 'GET', apiParams, clientConfig);
    this.projects.locations.specialistPools.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.specialistPools.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.specialistPools.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', apiParams, clientConfig);
    this.projects.locations.specialistPools.operations.wait = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:wait', 'POST', apiParams, clientConfig);

    this.projects.locations.tensorboards = {};
    this.projects.locations.tensorboards.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/tensorboards', 'POST', apiParams, clientConfig);
    this.projects.locations.tensorboards.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.tensorboards.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.tensorboards.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/tensorboards', 'GET', apiParams, clientConfig);
    this.projects.locations.tensorboards.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.tensorboards.readUsage = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+tensorboard}:readUsage', 'GET', apiParams, clientConfig);
    this.projects.locations.tensorboards.readSize = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+tensorboard}:readSize', 'GET', apiParams, clientConfig);
    this.projects.locations.tensorboards.batchRead = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+tensorboard}:batchRead', 'GET', apiParams, clientConfig);

    this.projects.locations.tensorboards.operations = {};
    this.projects.locations.tensorboards.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/operations', 'GET', apiParams, clientConfig);
    this.projects.locations.tensorboards.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.tensorboards.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.tensorboards.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', apiParams, clientConfig);
    this.projects.locations.tensorboards.operations.wait = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:wait', 'POST', apiParams, clientConfig);

    this.projects.locations.tensorboards.experiments = {};
    this.projects.locations.tensorboards.experiments.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/experiments', 'POST', apiParams, clientConfig);
    this.projects.locations.tensorboards.experiments.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.tensorboards.experiments.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.tensorboards.experiments.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/experiments', 'GET', apiParams, clientConfig);
    this.projects.locations.tensorboards.experiments.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.tensorboards.experiments.batchCreate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}:batchCreate', 'POST', apiParams, clientConfig);
    this.projects.locations.tensorboards.experiments.write = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+tensorboardExperiment}:write', 'POST', apiParams, clientConfig);

    this.projects.locations.tensorboards.experiments.operations = {};
    this.projects.locations.tensorboards.experiments.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/operations', 'GET', apiParams, clientConfig);
    this.projects.locations.tensorboards.experiments.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.tensorboards.experiments.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.tensorboards.experiments.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', apiParams, clientConfig);
    this.projects.locations.tensorboards.experiments.operations.wait = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:wait', 'POST', apiParams, clientConfig);

    this.projects.locations.tensorboards.experiments.runs = {};
    this.projects.locations.tensorboards.experiments.runs.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/runs', 'POST', apiParams, clientConfig);
    this.projects.locations.tensorboards.experiments.runs.batchCreate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/runs:batchCreate', 'POST', apiParams, clientConfig);
    this.projects.locations.tensorboards.experiments.runs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.tensorboards.experiments.runs.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.tensorboards.experiments.runs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/runs', 'GET', apiParams, clientConfig);
    this.projects.locations.tensorboards.experiments.runs.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.tensorboards.experiments.runs.write = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+tensorboardRun}:write', 'POST', apiParams, clientConfig);

    this.projects.locations.tensorboards.experiments.runs.operations = {};
    this.projects.locations.tensorboards.experiments.runs.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/operations', 'GET', apiParams, clientConfig);
    this.projects.locations.tensorboards.experiments.runs.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.tensorboards.experiments.runs.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.tensorboards.experiments.runs.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', apiParams, clientConfig);
    this.projects.locations.tensorboards.experiments.runs.operations.wait = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:wait', 'POST', apiParams, clientConfig);

    this.projects.locations.tensorboards.experiments.runs.timeSeries = {};
    this.projects.locations.tensorboards.experiments.runs.timeSeries.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/timeSeries', 'POST', apiParams, clientConfig);
    this.projects.locations.tensorboards.experiments.runs.timeSeries.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.tensorboards.experiments.runs.timeSeries.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.tensorboards.experiments.runs.timeSeries.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/timeSeries', 'GET', apiParams, clientConfig);
    this.projects.locations.tensorboards.experiments.runs.timeSeries.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.tensorboards.experiments.runs.timeSeries.read = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+tensorboardTimeSeries}:read', 'GET', apiParams, clientConfig);
    this.projects.locations.tensorboards.experiments.runs.timeSeries.readBlobData = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+timeSeries}:readBlobData', 'GET', apiParams, clientConfig);
    this.projects.locations.tensorboards.experiments.runs.timeSeries.exportTensorboardTimeSeries = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+tensorboardTimeSeries}:exportTensorboardTimeSeries', 'POST', apiParams, clientConfig);

    this.projects.locations.tensorboards.experiments.runs.timeSeries.operations = {};
    this.projects.locations.tensorboards.experiments.runs.timeSeries.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/operations', 'GET', apiParams, clientConfig);
    this.projects.locations.tensorboards.experiments.runs.timeSeries.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.tensorboards.experiments.runs.timeSeries.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.tensorboards.experiments.runs.timeSeries.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', apiParams, clientConfig);
    this.projects.locations.tensorboards.experiments.runs.timeSeries.operations.wait = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:wait', 'POST', apiParams, clientConfig);

    this.projects.locations.studies = {};
    this.projects.locations.studies.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/studies', 'POST', apiParams, clientConfig);
    this.projects.locations.studies.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.studies.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/studies', 'GET', apiParams, clientConfig);
    this.projects.locations.studies.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.studies.lookup = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/studies:lookup', 'POST', apiParams, clientConfig);

    this.projects.locations.studies.operations = {};
    this.projects.locations.studies.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/operations', 'GET', apiParams, clientConfig);
    this.projects.locations.studies.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.studies.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.studies.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', apiParams, clientConfig);
    this.projects.locations.studies.operations.wait = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:wait', 'POST', apiParams, clientConfig);

    this.projects.locations.studies.trials = {};
    this.projects.locations.studies.trials.suggest = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/trials:suggest', 'POST', apiParams, clientConfig);
    this.projects.locations.studies.trials.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/trials', 'POST', apiParams, clientConfig);
    this.projects.locations.studies.trials.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.studies.trials.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/trials', 'GET', apiParams, clientConfig);
    this.projects.locations.studies.trials.addTrialMeasurement = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+trialName}:addTrialMeasurement', 'POST', apiParams, clientConfig);
    this.projects.locations.studies.trials.complete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:complete', 'POST', apiParams, clientConfig);
    this.projects.locations.studies.trials.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.studies.trials.checkTrialEarlyStoppingState = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+trialName}:checkTrialEarlyStoppingState', 'POST', apiParams, clientConfig);
    this.projects.locations.studies.trials.stop = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:stop', 'POST', apiParams, clientConfig);
    this.projects.locations.studies.trials.listOptimalTrials = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/trials:listOptimalTrials', 'POST', apiParams, clientConfig);

    this.projects.locations.studies.trials.operations = {};
    this.projects.locations.studies.trials.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/operations', 'GET', apiParams, clientConfig);
    this.projects.locations.studies.trials.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.studies.trials.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.studies.trials.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', apiParams, clientConfig);
    this.projects.locations.studies.trials.operations.wait = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:wait', 'POST', apiParams, clientConfig);

    this.projects.locations.ragCorpora = {};
    this.projects.locations.ragCorpora.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/ragCorpora', 'POST', apiParams, clientConfig);
    this.projects.locations.ragCorpora.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.ragCorpora.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.ragCorpora.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/ragCorpora', 'GET', apiParams, clientConfig);
    this.projects.locations.ragCorpora.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.ragCorpora.operations = {};
    this.projects.locations.ragCorpora.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/operations', 'GET', apiParams, clientConfig);
    this.projects.locations.ragCorpora.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.ragCorpora.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.ragCorpora.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', apiParams, clientConfig);
    this.projects.locations.ragCorpora.operations.wait = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:wait', 'POST', apiParams, clientConfig);

    this.projects.locations.ragCorpora.ragFiles = {};
    this.projects.locations.ragCorpora.ragFiles.import = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/ragFiles:import', 'POST', apiParams, clientConfig);
    this.projects.locations.ragCorpora.ragFiles.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.ragCorpora.ragFiles.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/ragFiles', 'GET', apiParams, clientConfig);
    this.projects.locations.ragCorpora.ragFiles.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.ragCorpora.ragFiles.operations = {};
    this.projects.locations.ragCorpora.ragFiles.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/operations', 'GET', apiParams, clientConfig);
    this.projects.locations.ragCorpora.ragFiles.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.ragCorpora.ragFiles.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.ragCorpora.ragFiles.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', apiParams, clientConfig);
    this.projects.locations.ragCorpora.ragFiles.operations.wait = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:wait', 'POST', apiParams, clientConfig);

    this.projects.publishers = {};

    this.projects.publishers.models = {};
    this.projects.publishers.models.enableModel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/{+name}:enableModel', 'POST', apiParams, clientConfig);

    this.projects.modelGardenEula = {};
    this.projects.modelGardenEula.check = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/modelGardenEula:check', 'POST', apiParams, clientConfig);
    this.projects.modelGardenEula.accept = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/modelGardenEula:accept', 'POST', apiParams, clientConfig);

    this.datasets = {};
    this.datasets.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/datasets', 'POST', apiParams, clientConfig);
    this.datasets.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.datasets.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.datasets.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/datasets', 'GET', apiParams, clientConfig);
    this.datasets.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);

    this.datasets.datasetVersions = {};
    this.datasets.datasetVersions.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/datasetVersions', 'POST', apiParams, clientConfig);
    this.datasets.datasetVersions.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.datasets.datasetVersions.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.datasets.datasetVersions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.datasets.datasetVersions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/datasetVersions', 'GET', apiParams, clientConfig);
    this.datasets.datasetVersions.restore = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:restore', 'GET', apiParams, clientConfig);

    this.batchPredictionJobs = {};
    this.batchPredictionJobs.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/batchPredictionJobs', 'POST', apiParams, clientConfig);
    this.batchPredictionJobs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.batchPredictionJobs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/batchPredictionJobs', 'GET', apiParams, clientConfig);

    this.endpoints = {};
    this.endpoints.predict = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+endpoint}:predict', 'POST', apiParams, clientConfig);
    this.endpoints.predictLongRunning = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+endpoint}:predictLongRunning', 'POST', apiParams, clientConfig);
    this.endpoints.fetchPredictOperation = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+endpoint}:fetchPredictOperation', 'POST', apiParams, clientConfig);
    this.endpoints.countTokens = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+endpoint}:countTokens', 'POST', apiParams, clientConfig);
    this.endpoints.generateContent = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+model}:generateContent', 'POST', apiParams, clientConfig);
    this.endpoints.streamGenerateContent = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+model}:streamGenerateContent', 'POST', apiParams, clientConfig);
    this.endpoints.computeTokens = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+endpoint}:computeTokens', 'POST', apiParams, clientConfig);

    this.endpoints.chat = {};
    this.endpoints.chat.completions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+endpoint}/chat/completions', 'POST', apiParams, clientConfig);

    this.publishers = {};

    this.publishers.models = {};
    this.publishers.models.predict = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+endpoint}:predict', 'POST', apiParams, clientConfig);
    this.publishers.models.predictLongRunning = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+endpoint}:predictLongRunning', 'POST', apiParams, clientConfig);
    this.publishers.models.fetchPredictOperation = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+endpoint}:fetchPredictOperation', 'POST', apiParams, clientConfig);
    this.publishers.models.countTokens = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+endpoint}:countTokens', 'POST', apiParams, clientConfig);
    this.publishers.models.generateContent = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+model}:generateContent', 'POST', apiParams, clientConfig);
    this.publishers.models.streamGenerateContent = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+model}:streamGenerateContent', 'POST', apiParams, clientConfig);
    this.publishers.models.computeTokens = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+endpoint}:computeTokens', 'POST', apiParams, clientConfig);
    this.publishers.models.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.publishers.models.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/models', 'GET', apiParams, clientConfig);

    this.reasoningEngines = {};
    this.reasoningEngines.query = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:query', 'POST', apiParams, clientConfig);
    this.reasoningEngines.streamQuery = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:streamQuery', 'POST', apiParams, clientConfig);
    this.reasoningEngines.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/reasoningEngines', 'POST', apiParams, clientConfig);
    this.reasoningEngines.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.reasoningEngines.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/reasoningEngines', 'GET', apiParams, clientConfig);
    this.reasoningEngines.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.reasoningEngines.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);

    this.reasoningEngines.memories = {};
    this.reasoningEngines.memories.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/memories', 'POST', apiParams, clientConfig);
    this.reasoningEngines.memories.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.reasoningEngines.memories.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.reasoningEngines.memories.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/memories', 'GET', apiParams, clientConfig);
    this.reasoningEngines.memories.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.reasoningEngines.memories.generate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/memories:generate', 'POST', apiParams, clientConfig);
    this.reasoningEngines.memories.retrieve = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/memories:retrieve', 'POST', apiParams, clientConfig);

    this.reasoningEngines.a2a = {};

    this.reasoningEngines.a2a.v1 = {};
    this.reasoningEngines.a2a.v1.card = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/a2a/{+a2aEndpoint}', 'GET', apiParams, clientConfig);

    this.reasoningEngines.a2a.v1.message = {};
    this.reasoningEngines.a2a.v1.message.stream = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/a2a/{+a2aEndpoint}:stream', 'POST', apiParams, clientConfig);
    this.reasoningEngines.a2a.v1.message.send = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/a2a/{+a2aEndpoint}:send', 'POST', apiParams, clientConfig);

    this.reasoningEngines.a2a.v1.tasks = {};
    this.reasoningEngines.a2a.v1.tasks.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/a2a/{+a2aEndpoint}:cancel', 'POST', apiParams, clientConfig);
    this.reasoningEngines.a2a.v1.tasks.pushNotificationConfigs = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/a2a/{+a2aEndpoint}', 'GET', apiParams, clientConfig);
    this.reasoningEngines.a2a.v1.tasks.a2aGetReasoningEngine = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/a2a/{+a2aEndpoint}', 'GET', apiParams, clientConfig);
    this.reasoningEngines.a2a.v1.tasks.subscribe = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/a2a/{+a2aEndpoint}:subscribe', 'GET', apiParams, clientConfig);

    this.reasoningEngines.a2a.v1.tasks.pushNotificationConfigs = {};
    this.reasoningEngines.a2a.v1.tasks.pushNotificationConfigs.a2aGetReasoningEngine = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/a2a/{+a2aEndpoint}', 'GET', apiParams, clientConfig);

    this.reasoningEngines.sessions = {};
    this.reasoningEngines.sessions.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/sessions', 'POST', apiParams, clientConfig);
    this.reasoningEngines.sessions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.reasoningEngines.sessions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/sessions', 'GET', apiParams, clientConfig);
    this.reasoningEngines.sessions.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.reasoningEngines.sessions.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.reasoningEngines.sessions.appendEvent = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:appendEvent', 'POST', apiParams, clientConfig);

    this.reasoningEngines.sessions.events = {};
    this.reasoningEngines.sessions.events.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/events', 'GET', apiParams, clientConfig);

    this.media = {};
    this.media.upload = async (apiParams = {}, clientConfig = {}) => {
      // If apiParams.media is provided, use the upload path; otherwise, use the standard path.
      const path = apiParams.media ? '/upload/v1beta1/{+parent}/ragFiles:upload' : 'v1beta1/{+parent}/ragFiles:upload';
      return this._makeRequest(path, 'POST', apiParams, clientConfig);
    };
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
