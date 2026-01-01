
/**
 * Google Apps Script client library for the Cloud Healthcare API
 * Documentation URL: https://cloud.google.com/healthcare
 * @class
 */
class Healthcare {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://healthcare.googleapis.com/';
    this._servicePath = '';


    this.projects = {};

    this.projects.locations = {};
    this.projects.locations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/locations', 'GET', apiParams, clientConfig);
    this.projects.locations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.datasets = {};
    this.projects.locations.datasets.deidentify = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+sourceDataset}:deidentify', 'POST', apiParams, clientConfig);
    this.projects.locations.datasets.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.locations.datasets.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);
    this.projects.locations.datasets.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/datasets', 'GET', apiParams, clientConfig);
    this.projects.locations.datasets.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.datasets.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/datasets', 'POST', apiParams, clientConfig);
    this.projects.locations.datasets.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.datasets.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.datasets.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+resource}:getIamPolicy', 'GET', apiParams, clientConfig);

    this.projects.locations.datasets.fhirStores = {};
    this.projects.locations.datasets.fhirStores.rollback = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:rollback', 'POST', apiParams, clientConfig);
    this.projects.locations.datasets.fhirStores.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.datasets.fhirStores.applyConsents = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:applyConsents', 'POST', apiParams, clientConfig);
    this.projects.locations.datasets.fhirStores.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+resource}:getIamPolicy', 'GET', apiParams, clientConfig);
    this.projects.locations.datasets.fhirStores.importHistory = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:importHistory', 'POST', apiParams, clientConfig);
    this.projects.locations.datasets.fhirStores.bulk-export-group = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/$export', 'GET', apiParams, clientConfig);
    this.projects.locations.datasets.fhirStores.import = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:import', 'POST', apiParams, clientConfig);
    this.projects.locations.datasets.fhirStores.configureSearch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:configureSearch', 'POST', apiParams, clientConfig);
    this.projects.locations.datasets.fhirStores.deidentify = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+sourceStore}:deidentify', 'POST', apiParams, clientConfig);
    this.projects.locations.datasets.fhirStores.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.datasets.fhirStores.explainDataAccess = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:explainDataAccess', 'GET', apiParams, clientConfig);
    this.projects.locations.datasets.fhirStores.getFHIRStoreMetrics = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:getFHIRStoreMetrics', 'GET', apiParams, clientConfig);
    this.projects.locations.datasets.fhirStores.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/fhirStores', 'POST', apiParams, clientConfig);
    this.projects.locations.datasets.fhirStores.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.locations.datasets.fhirStores.export = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:export', 'POST', apiParams, clientConfig);
    this.projects.locations.datasets.fhirStores.applyAdminConsents = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:applyAdminConsents', 'POST', apiParams, clientConfig);
    this.projects.locations.datasets.fhirStores.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);
    this.projects.locations.datasets.fhirStores.exportHistory = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:exportHistory', 'POST', apiParams, clientConfig);
    this.projects.locations.datasets.fhirStores.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/fhirStores', 'GET', apiParams, clientConfig);
    this.projects.locations.datasets.fhirStores.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects.locations.datasets.fhirStores.fhir = {};
    this.projects.locations.datasets.fhirStores.fhir.Resource-incoming-references = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/fhir/$references', 'GET', apiParams, clientConfig);
    this.projects.locations.datasets.fhirStores.fhir.executeBundle = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/fhir', 'POST', apiParams, clientConfig);
    this.projects.locations.datasets.fhirStores.fhir.Binary-read = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.datasets.fhirStores.fhir.Binary-vread = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.datasets.fhirStores.fhir.conditionalPatch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/fhir/{+type}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.datasets.fhirStores.fhir.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PUT', apiParams, clientConfig);
    this.projects.locations.datasets.fhirStores.fhir.ConceptMap-translate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/$translate', 'GET', apiParams, clientConfig);
    this.projects.locations.datasets.fhirStores.fhir.bulk-export = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/fhir/$export', 'GET', apiParams, clientConfig);
    this.projects.locations.datasets.fhirStores.fhir.conditionalUpdate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/fhir/{+type}', 'PUT', apiParams, clientConfig);
    this.projects.locations.datasets.fhirStores.fhir.Consent-enforcement-status = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/$consent-enforcement-status', 'GET', apiParams, clientConfig);
    this.projects.locations.datasets.fhirStores.fhir.Observation-lastn = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/fhir/Observation/$lastn', 'GET', apiParams, clientConfig);
    this.projects.locations.datasets.fhirStores.fhir.Binary-update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PUT', apiParams, clientConfig);
    this.projects.locations.datasets.fhirStores.fhir.history = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/_history', 'GET', apiParams, clientConfig);
    this.projects.locations.datasets.fhirStores.fhir.search = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/fhir/_search', 'POST', apiParams, clientConfig);
    this.projects.locations.datasets.fhirStores.fhir.Encounter-everything = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/$everything', 'GET', apiParams, clientConfig);
    this.projects.locations.datasets.fhirStores.fhir.conditionalDelete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/fhir/{+type}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.datasets.fhirStores.fhir.vread = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.datasets.fhirStores.fhir.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/fhir/{+type}', 'POST', apiParams, clientConfig);
    this.projects.locations.datasets.fhirStores.fhir.read = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.datasets.fhirStores.fhir.Patient-consent-enforcement-status = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/$consent-enforcement-status', 'GET', apiParams, clientConfig);
    this.projects.locations.datasets.fhirStores.fhir.search-type = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/fhir/{resourceType}/_search', 'POST', apiParams, clientConfig);
    this.projects.locations.datasets.fhirStores.fhir.Resource-validate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/fhir/{+type}/$validate', 'POST', apiParams, clientConfig);
    this.projects.locations.datasets.fhirStores.fhir.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.datasets.fhirStores.fhir.capabilities = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/fhir/metadata', 'GET', apiParams, clientConfig);
    this.projects.locations.datasets.fhirStores.fhir.ConceptMap-search-translate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/fhir/ConceptMap/$translate', 'GET', apiParams, clientConfig);
    this.projects.locations.datasets.fhirStores.fhir.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.datasets.fhirStores.fhir.Binary-create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/fhir/Binary', 'POST', apiParams, clientConfig);
    this.projects.locations.datasets.fhirStores.fhir.Resource-purge = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/$purge', 'DELETE', apiParams, clientConfig);
    this.projects.locations.datasets.fhirStores.fhir.Patient-everything = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/$everything', 'GET', apiParams, clientConfig);

    this.projects.locations.datasets.fhirStores.operations = {};
    this.projects.locations.datasets.fhirStores.operations.get-fhir-operation-status = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.datasets.fhirStores.operations.delete-fhir-operation = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.datasets.dicomStores = {};
    this.projects.locations.datasets.dicomStores.searchForSeries = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/dicomWeb/{+dicomWebPath}', 'GET', apiParams, clientConfig);
    this.projects.locations.datasets.dicomStores.setBlobStorageSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+resource}:setBlobStorageSettings', 'POST', apiParams, clientConfig);
    this.projects.locations.datasets.dicomStores.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);
    this.projects.locations.datasets.dicomStores.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/dicomStores', 'POST', apiParams, clientConfig);
    this.projects.locations.datasets.dicomStores.searchForStudies = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/dicomWeb/{+dicomWebPath}', 'GET', apiParams, clientConfig);
    this.projects.locations.datasets.dicomStores.export = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:export', 'POST', apiParams, clientConfig);
    this.projects.locations.datasets.dicomStores.updateInstances = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/dicomWeb/{+dicomWebPath}', 'PUT', apiParams, clientConfig);
    this.projects.locations.datasets.dicomStores.deidentify = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+sourceStore}:deidentify', 'POST', apiParams, clientConfig);
    this.projects.locations.datasets.dicomStores.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.datasets.dicomStores.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+resource}:getIamPolicy', 'GET', apiParams, clientConfig);
    this.projects.locations.datasets.dicomStores.searchForInstances = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/dicomWeb/{+dicomWebPath}', 'GET', apiParams, clientConfig);
    this.projects.locations.datasets.dicomStores.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/dicomStores', 'GET', apiParams, clientConfig);
    this.projects.locations.datasets.dicomStores.getDICOMStoreMetrics = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:getDICOMStoreMetrics', 'GET', apiParams, clientConfig);
    this.projects.locations.datasets.dicomStores.storeInstances = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/dicomWeb/{+dicomWebPath}', 'POST', apiParams, clientConfig);
    this.projects.locations.datasets.dicomStores.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.datasets.dicomStores.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.datasets.dicomStores.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.locations.datasets.dicomStores.import = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:import', 'POST', apiParams, clientConfig);

    this.projects.locations.datasets.dicomStores.dicomWeb = {};

    this.projects.locations.datasets.dicomStores.dicomWeb.studies = {};
    this.projects.locations.datasets.dicomStores.dicomWeb.studies.setBlobStorageSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+resource}:setBlobStorageSettings', 'POST', apiParams, clientConfig);
    this.projects.locations.datasets.dicomStores.dicomWeb.studies.getStudyMetrics = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+study}:getStudyMetrics', 'GET', apiParams, clientConfig);

    this.projects.locations.datasets.dicomStores.dicomWeb.studies.series = {};
    this.projects.locations.datasets.dicomStores.dicomWeb.studies.series.getSeriesMetrics = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+series}:getSeriesMetrics', 'GET', apiParams, clientConfig);

    this.projects.locations.datasets.dicomStores.dicomWeb.studies.series.instances = {};
    this.projects.locations.datasets.dicomStores.dicomWeb.studies.series.instances.getStorageInfo = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+resource}:getStorageInfo', 'GET', apiParams, clientConfig);

    this.projects.locations.datasets.dicomStores.studies = {};
    this.projects.locations.datasets.dicomStores.studies.updateInstances = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/dicomWeb/{+dicomWebPath}', 'PUT', apiParams, clientConfig);
    this.projects.locations.datasets.dicomStores.studies.retrieveStudy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/dicomWeb/{+dicomWebPath}', 'GET', apiParams, clientConfig);
    this.projects.locations.datasets.dicomStores.studies.searchForSeries = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/dicomWeb/{+dicomWebPath}', 'GET', apiParams, clientConfig);
    this.projects.locations.datasets.dicomStores.studies.retrieveMetadata = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/dicomWeb/{+dicomWebPath}', 'GET', apiParams, clientConfig);
    this.projects.locations.datasets.dicomStores.studies.searchForInstances = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/dicomWeb/{+dicomWebPath}', 'GET', apiParams, clientConfig);
    this.projects.locations.datasets.dicomStores.studies.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/dicomWeb/{+dicomWebPath}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.datasets.dicomStores.studies.updateMetadata = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/dicomWeb/{+dicomWebPath}/metadata', 'PATCH', apiParams, clientConfig);
    this.projects.locations.datasets.dicomStores.studies.storeInstances = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/dicomWeb/{+dicomWebPath}', 'POST', apiParams, clientConfig);

    this.projects.locations.datasets.dicomStores.studies.series = {};
    this.projects.locations.datasets.dicomStores.studies.series.updateMetadata = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/dicomWeb/{+dicomWebPath}/metadata', 'PATCH', apiParams, clientConfig);
    this.projects.locations.datasets.dicomStores.studies.series.searchForInstances = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/dicomWeb/{+dicomWebPath}', 'GET', apiParams, clientConfig);
    this.projects.locations.datasets.dicomStores.studies.series.retrieveSeries = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/dicomWeb/{+dicomWebPath}', 'GET', apiParams, clientConfig);
    this.projects.locations.datasets.dicomStores.studies.series.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/dicomWeb/{+dicomWebPath}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.datasets.dicomStores.studies.series.retrieveMetadata = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/dicomWeb/{+dicomWebPath}', 'GET', apiParams, clientConfig);

    this.projects.locations.datasets.dicomStores.studies.series.instances = {};
    this.projects.locations.datasets.dicomStores.studies.series.instances.updateMetadata = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/dicomWeb/{+dicomWebPath}/metadata', 'PATCH', apiParams, clientConfig);
    this.projects.locations.datasets.dicomStores.studies.series.instances.retrieveMetadata = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/dicomWeb/{+dicomWebPath}', 'GET', apiParams, clientConfig);
    this.projects.locations.datasets.dicomStores.studies.series.instances.retrieveRendered = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/dicomWeb/{+dicomWebPath}', 'GET', apiParams, clientConfig);
    this.projects.locations.datasets.dicomStores.studies.series.instances.retrieveInstance = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/dicomWeb/{+dicomWebPath}', 'GET', apiParams, clientConfig);
    this.projects.locations.datasets.dicomStores.studies.series.instances.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/dicomWeb/{+dicomWebPath}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.datasets.dicomStores.studies.series.instances.frames = {};
    this.projects.locations.datasets.dicomStores.studies.series.instances.frames.retrieveFrames = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/dicomWeb/{+dicomWebPath}', 'GET', apiParams, clientConfig);
    this.projects.locations.datasets.dicomStores.studies.series.instances.frames.retrieveRendered = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/dicomWeb/{+dicomWebPath}', 'GET', apiParams, clientConfig);

    this.projects.locations.datasets.dicomStores.studies.series.instances.bulkdata = {};
    this.projects.locations.datasets.dicomStores.studies.series.instances.bulkdata.retrieveBulkdata = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/dicomWeb/{+dicomWebPath}', 'GET', apiParams, clientConfig);

    this.projects.locations.datasets.hl7V2Stores = {};
    this.projects.locations.datasets.hl7V2Stores.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.datasets.hl7V2Stores.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);
    this.projects.locations.datasets.hl7V2Stores.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.locations.datasets.hl7V2Stores.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/hl7V2Stores', 'GET', apiParams, clientConfig);
    this.projects.locations.datasets.hl7V2Stores.getHL7v2StoreMetrics = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:getHL7v2StoreMetrics', 'GET', apiParams, clientConfig);
    this.projects.locations.datasets.hl7V2Stores.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/hl7V2Stores', 'POST', apiParams, clientConfig);
    this.projects.locations.datasets.hl7V2Stores.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+resource}:getIamPolicy', 'GET', apiParams, clientConfig);
    this.projects.locations.datasets.hl7V2Stores.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.datasets.hl7V2Stores.rollback = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:rollback', 'POST', apiParams, clientConfig);
    this.projects.locations.datasets.hl7V2Stores.export = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:export', 'POST', apiParams, clientConfig);
    this.projects.locations.datasets.hl7V2Stores.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.datasets.hl7V2Stores.import = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:import', 'POST', apiParams, clientConfig);

    this.projects.locations.datasets.hl7V2Stores.messages = {};
    this.projects.locations.datasets.hl7V2Stores.messages.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.datasets.hl7V2Stores.messages.batchGet = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/messages:batchGet', 'GET', apiParams, clientConfig);
    this.projects.locations.datasets.hl7V2Stores.messages.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.datasets.hl7V2Stores.messages.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/messages', 'POST', apiParams, clientConfig);
    this.projects.locations.datasets.hl7V2Stores.messages.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/messages', 'GET', apiParams, clientConfig);
    this.projects.locations.datasets.hl7V2Stores.messages.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.datasets.hl7V2Stores.messages.ingest = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/messages:ingest', 'POST', apiParams, clientConfig);

    this.projects.locations.datasets.consentStores = {};
    this.projects.locations.datasets.consentStores.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/consentStores', 'GET', apiParams, clientConfig);
    this.projects.locations.datasets.consentStores.queryAccessibleData = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+consentStore}:queryAccessibleData', 'POST', apiParams, clientConfig);
    this.projects.locations.datasets.consentStores.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/consentStores', 'POST', apiParams, clientConfig);
    this.projects.locations.datasets.consentStores.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.datasets.consentStores.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);
    this.projects.locations.datasets.consentStores.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.datasets.consentStores.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.locations.datasets.consentStores.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+resource}:getIamPolicy', 'GET', apiParams, clientConfig);
    this.projects.locations.datasets.consentStores.evaluateUserConsents = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+consentStore}:evaluateUserConsents', 'POST', apiParams, clientConfig);
    this.projects.locations.datasets.consentStores.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.datasets.consentStores.checkDataAccess = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+consentStore}:checkDataAccess', 'POST', apiParams, clientConfig);

    this.projects.locations.datasets.consentStores.consentArtifacts = {};
    this.projects.locations.datasets.consentStores.consentArtifacts.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/consentArtifacts', 'POST', apiParams, clientConfig);
    this.projects.locations.datasets.consentStores.consentArtifacts.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/consentArtifacts', 'GET', apiParams, clientConfig);
    this.projects.locations.datasets.consentStores.consentArtifacts.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.datasets.consentStores.consentArtifacts.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.datasets.consentStores.userDataMappings = {};
    this.projects.locations.datasets.consentStores.userDataMappings.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/userDataMappings', 'GET', apiParams, clientConfig);
    this.projects.locations.datasets.consentStores.userDataMappings.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.datasets.consentStores.userDataMappings.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.datasets.consentStores.userDataMappings.archive = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:archive', 'POST', apiParams, clientConfig);
    this.projects.locations.datasets.consentStores.userDataMappings.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.datasets.consentStores.userDataMappings.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/userDataMappings', 'POST', apiParams, clientConfig);

    this.projects.locations.datasets.consentStores.attributeDefinitions = {};
    this.projects.locations.datasets.consentStores.attributeDefinitions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.datasets.consentStores.attributeDefinitions.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.datasets.consentStores.attributeDefinitions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/attributeDefinitions', 'GET', apiParams, clientConfig);
    this.projects.locations.datasets.consentStores.attributeDefinitions.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/attributeDefinitions', 'POST', apiParams, clientConfig);
    this.projects.locations.datasets.consentStores.attributeDefinitions.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects.locations.datasets.consentStores.consents = {};
    this.projects.locations.datasets.consentStores.consents.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.datasets.consentStores.consents.revoke = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:revoke', 'POST', apiParams, clientConfig);
    this.projects.locations.datasets.consentStores.consents.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/consents', 'GET', apiParams, clientConfig);
    this.projects.locations.datasets.consentStores.consents.activate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:activate', 'POST', apiParams, clientConfig);
    this.projects.locations.datasets.consentStores.consents.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.datasets.consentStores.consents.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.datasets.consentStores.consents.listRevisions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:listRevisions', 'GET', apiParams, clientConfig);
    this.projects.locations.datasets.consentStores.consents.reject = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:reject', 'POST', apiParams, clientConfig);
    this.projects.locations.datasets.consentStores.consents.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/consents', 'POST', apiParams, clientConfig);
    this.projects.locations.datasets.consentStores.consents.deleteRevision = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:deleteRevision', 'DELETE', apiParams, clientConfig);

    this.projects.locations.datasets.dataMapperWorkspaces = {};
    this.projects.locations.datasets.dataMapperWorkspaces.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+resource}:getIamPolicy', 'GET', apiParams, clientConfig);
    this.projects.locations.datasets.dataMapperWorkspaces.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);
    this.projects.locations.datasets.dataMapperWorkspaces.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);

    this.projects.locations.datasets.operations = {};
    this.projects.locations.datasets.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.datasets.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', apiParams, clientConfig);
    this.projects.locations.datasets.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/operations', 'GET', apiParams, clientConfig);

    this.projects.locations.services = {};

    this.projects.locations.services.nlp = {};
    this.projects.locations.services.nlp.analyzeEntities = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+nlpService}:analyzeEntities', 'POST', apiParams, clientConfig);
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
