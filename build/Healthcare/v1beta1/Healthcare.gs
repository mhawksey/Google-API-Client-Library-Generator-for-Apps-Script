
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
    // "Private" properties using the underscore convention
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://healthcare.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.locations = {};
    this.projects.locations.list = (params) => this._makeRequest('v1beta1/{+name}/locations', 'GET', params);
    this.projects.locations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    this.projects.locations.datasets = {};
    this.projects.locations.datasets.setIamPolicy = (params) => this._makeRequest('v1beta1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.datasets.getIamPolicy = (params) => this._makeRequest('v1beta1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.datasets.testIamPermissions = (params) => this._makeRequest('v1beta1/{+resource}:testIamPermissions', 'POST', params);
    this.projects.locations.datasets.create = (params) => this._makeRequest('v1beta1/{+parent}/datasets', 'POST', params);
    this.projects.locations.datasets.list = (params) => this._makeRequest('v1beta1/{+parent}/datasets', 'GET', params);
    this.projects.locations.datasets.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);
    this.projects.locations.datasets.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.locations.datasets.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);
    this.projects.locations.datasets.deidentify = (params) => this._makeRequest('v1beta1/{+sourceDataset}:deidentify', 'POST', params);

    this.projects.locations.datasets.dicomStores = {};
    this.projects.locations.datasets.dicomStores.setIamPolicy = (params) => this._makeRequest('v1beta1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.datasets.dicomStores.getIamPolicy = (params) => this._makeRequest('v1beta1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.datasets.dicomStores.testIamPermissions = (params) => this._makeRequest('v1beta1/{+resource}:testIamPermissions', 'POST', params);
    this.projects.locations.datasets.dicomStores.deidentify = (params) => this._makeRequest('v1beta1/{+sourceStore}:deidentify', 'POST', params);
    this.projects.locations.datasets.dicomStores.setBlobStorageSettings = (params) => this._makeRequest('v1beta1/{+resource}:setBlobStorageSettings', 'POST', params);
    this.projects.locations.datasets.dicomStores.create = (params) => this._makeRequest('v1beta1/{+parent}/dicomStores', 'POST', params);
    this.projects.locations.datasets.dicomStores.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.locations.datasets.dicomStores.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);
    this.projects.locations.datasets.dicomStores.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);
    this.projects.locations.datasets.dicomStores.list = (params) => this._makeRequest('v1beta1/{+parent}/dicomStores', 'GET', params);
    this.projects.locations.datasets.dicomStores.import = (params) => this._makeRequest('v1beta1/{+name}:import', 'POST', params);
    this.projects.locations.datasets.dicomStores.export = (params) => this._makeRequest('v1beta1/{+name}:export', 'POST', params);
    this.projects.locations.datasets.dicomStores.getDICOMStoreMetrics = (params) => this._makeRequest('v1beta1/{+name}:getDICOMStoreMetrics', 'GET', params);
    this.projects.locations.datasets.dicomStores.searchForStudies = (params) => this._makeRequest('v1beta1/{+parent}/dicomWeb/{+dicomWebPath}', 'GET', params);
    this.projects.locations.datasets.dicomStores.searchForSeries = (params) => this._makeRequest('v1beta1/{+parent}/dicomWeb/{+dicomWebPath}', 'GET', params);
    this.projects.locations.datasets.dicomStores.searchForInstances = (params) => this._makeRequest('v1beta1/{+parent}/dicomWeb/{+dicomWebPath}', 'GET', params);
    this.projects.locations.datasets.dicomStores.storeInstances = (params) => this._makeRequest('v1beta1/{+parent}/dicomWeb/{+dicomWebPath}', 'POST', params);

    this.projects.locations.datasets.dicomStores.dicomWeb = {};

    this.projects.locations.datasets.dicomStores.dicomWeb.studies = {};
    this.projects.locations.datasets.dicomStores.dicomWeb.studies.setBlobStorageSettings = (params) => this._makeRequest('v1beta1/{+resource}:setBlobStorageSettings', 'POST', params);
    this.projects.locations.datasets.dicomStores.dicomWeb.studies.getStudyMetrics = (params) => this._makeRequest('v1beta1/{+study}:getStudyMetrics', 'GET', params);

    this.projects.locations.datasets.dicomStores.dicomWeb.studies.series = {};
    this.projects.locations.datasets.dicomStores.dicomWeb.studies.series.getSeriesMetrics = (params) => this._makeRequest('v1beta1/{+series}:getSeriesMetrics', 'GET', params);

    this.projects.locations.datasets.dicomStores.dicomWeb.studies.series.instances = {};
    this.projects.locations.datasets.dicomStores.dicomWeb.studies.series.instances.getStorageInfo = (params) => this._makeRequest('v1beta1/{+resource}:getStorageInfo', 'GET', params);

    this.projects.locations.datasets.dicomStores.studies = {};
    this.projects.locations.datasets.dicomStores.studies.retrieveStudy = (params) => this._makeRequest('v1beta1/{+parent}/dicomWeb/{+dicomWebPath}', 'GET', params);
    this.projects.locations.datasets.dicomStores.studies.retrieveMetadata = (params) => this._makeRequest('v1beta1/{+parent}/dicomWeb/{+dicomWebPath}', 'GET', params);
    this.projects.locations.datasets.dicomStores.studies.searchForSeries = (params) => this._makeRequest('v1beta1/{+parent}/dicomWeb/{+dicomWebPath}', 'GET', params);
    this.projects.locations.datasets.dicomStores.studies.searchForInstances = (params) => this._makeRequest('v1beta1/{+parent}/dicomWeb/{+dicomWebPath}', 'GET', params);
    this.projects.locations.datasets.dicomStores.studies.delete = (params) => this._makeRequest('v1beta1/{+parent}/dicomWeb/{+dicomWebPath}', 'DELETE', params);
    this.projects.locations.datasets.dicomStores.studies.storeInstances = (params) => this._makeRequest('v1beta1/{+parent}/dicomWeb/{+dicomWebPath}', 'POST', params);

    this.projects.locations.datasets.dicomStores.studies.series = {};
    this.projects.locations.datasets.dicomStores.studies.series.retrieveSeries = (params) => this._makeRequest('v1beta1/{+parent}/dicomWeb/{+dicomWebPath}', 'GET', params);
    this.projects.locations.datasets.dicomStores.studies.series.retrieveMetadata = (params) => this._makeRequest('v1beta1/{+parent}/dicomWeb/{+dicomWebPath}', 'GET', params);
    this.projects.locations.datasets.dicomStores.studies.series.searchForInstances = (params) => this._makeRequest('v1beta1/{+parent}/dicomWeb/{+dicomWebPath}', 'GET', params);
    this.projects.locations.datasets.dicomStores.studies.series.delete = (params) => this._makeRequest('v1beta1/{+parent}/dicomWeb/{+dicomWebPath}', 'DELETE', params);

    this.projects.locations.datasets.dicomStores.studies.series.instances = {};
    this.projects.locations.datasets.dicomStores.studies.series.instances.retrieveInstance = (params) => this._makeRequest('v1beta1/{+parent}/dicomWeb/{+dicomWebPath}', 'GET', params);
    this.projects.locations.datasets.dicomStores.studies.series.instances.retrieveRendered = (params) => this._makeRequest('v1beta1/{+parent}/dicomWeb/{+dicomWebPath}', 'GET', params);
    this.projects.locations.datasets.dicomStores.studies.series.instances.retrieveMetadata = (params) => this._makeRequest('v1beta1/{+parent}/dicomWeb/{+dicomWebPath}', 'GET', params);
    this.projects.locations.datasets.dicomStores.studies.series.instances.delete = (params) => this._makeRequest('v1beta1/{+parent}/dicomWeb/{+dicomWebPath}', 'DELETE', params);

    this.projects.locations.datasets.dicomStores.studies.series.instances.frames = {};
    this.projects.locations.datasets.dicomStores.studies.series.instances.frames.retrieveFrames = (params) => this._makeRequest('v1beta1/{+parent}/dicomWeb/{+dicomWebPath}', 'GET', params);
    this.projects.locations.datasets.dicomStores.studies.series.instances.frames.retrieveRendered = (params) => this._makeRequest('v1beta1/{+parent}/dicomWeb/{+dicomWebPath}', 'GET', params);

    this.projects.locations.datasets.dicomStores.studies.series.instances.bulkdata = {};
    this.projects.locations.datasets.dicomStores.studies.series.instances.bulkdata.retrieveBulkdata = (params) => this._makeRequest('v1beta1/{+parent}/dicomWeb/{+dicomWebPath}', 'GET', params);

    this.projects.locations.datasets.hl7V2Stores = {};
    this.projects.locations.datasets.hl7V2Stores.setIamPolicy = (params) => this._makeRequest('v1beta1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.datasets.hl7V2Stores.getIamPolicy = (params) => this._makeRequest('v1beta1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.datasets.hl7V2Stores.testIamPermissions = (params) => this._makeRequest('v1beta1/{+resource}:testIamPermissions', 'POST', params);
    this.projects.locations.datasets.hl7V2Stores.create = (params) => this._makeRequest('v1beta1/{+parent}/hl7V2Stores', 'POST', params);
    this.projects.locations.datasets.hl7V2Stores.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.locations.datasets.hl7V2Stores.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);
    this.projects.locations.datasets.hl7V2Stores.list = (params) => this._makeRequest('v1beta1/{+parent}/hl7V2Stores', 'GET', params);
    this.projects.locations.datasets.hl7V2Stores.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);
    this.projects.locations.datasets.hl7V2Stores.export = (params) => this._makeRequest('v1beta1/{+name}:export', 'POST', params);
    this.projects.locations.datasets.hl7V2Stores.import = (params) => this._makeRequest('v1beta1/{+name}:import', 'POST', params);
    this.projects.locations.datasets.hl7V2Stores.getHL7v2StoreMetrics = (params) => this._makeRequest('v1beta1/{+name}:getHL7v2StoreMetrics', 'GET', params);
    this.projects.locations.datasets.hl7V2Stores.rollback = (params) => this._makeRequest('v1beta1/{+name}:rollback', 'POST', params);

    this.projects.locations.datasets.hl7V2Stores.messages = {};
    this.projects.locations.datasets.hl7V2Stores.messages.ingest = (params) => this._makeRequest('v1beta1/{+parent}/messages:ingest', 'POST', params);
    this.projects.locations.datasets.hl7V2Stores.messages.create = (params) => this._makeRequest('v1beta1/{+parent}/messages', 'POST', params);
    this.projects.locations.datasets.hl7V2Stores.messages.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.locations.datasets.hl7V2Stores.messages.batchGet = (params) => this._makeRequest('v1beta1/{+parent}/messages:batchGet', 'GET', params);
    this.projects.locations.datasets.hl7V2Stores.messages.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);
    this.projects.locations.datasets.hl7V2Stores.messages.list = (params) => this._makeRequest('v1beta1/{+parent}/messages', 'GET', params);
    this.projects.locations.datasets.hl7V2Stores.messages.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    this.projects.locations.datasets.fhirStores = {};
    this.projects.locations.datasets.fhirStores.setIamPolicy = (params) => this._makeRequest('v1beta1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.datasets.fhirStores.getIamPolicy = (params) => this._makeRequest('v1beta1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.datasets.fhirStores.testIamPermissions = (params) => this._makeRequest('v1beta1/{+resource}:testIamPermissions', 'POST', params);
    this.projects.locations.datasets.fhirStores.deidentify = (params) => this._makeRequest('v1beta1/{+sourceStore}:deidentify', 'POST', params);
    this.projects.locations.datasets.fhirStores.bulk-export-group = (params) => this._makeRequest('v1beta1/{+name}/$export', 'GET', params);
    this.projects.locations.datasets.fhirStores.create = (params) => this._makeRequest('v1beta1/{+parent}/fhirStores', 'POST', params);
    this.projects.locations.datasets.fhirStores.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.locations.datasets.fhirStores.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);
    this.projects.locations.datasets.fhirStores.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);
    this.projects.locations.datasets.fhirStores.list = (params) => this._makeRequest('v1beta1/{+parent}/fhirStores', 'GET', params);
    this.projects.locations.datasets.fhirStores.import = (params) => this._makeRequest('v1beta1/{+name}:import', 'POST', params);
    this.projects.locations.datasets.fhirStores.importHistory = (params) => this._makeRequest('v1beta1/{+name}:importHistory', 'POST', params);
    this.projects.locations.datasets.fhirStores.export = (params) => this._makeRequest('v1beta1/{+name}:export', 'POST', params);
    this.projects.locations.datasets.fhirStores.exportHistory = (params) => this._makeRequest('v1beta1/{+name}:exportHistory', 'POST', params);
    this.projects.locations.datasets.fhirStores.configureSearch = (params) => this._makeRequest('v1beta1/{+name}:configureSearch', 'POST', params);
    this.projects.locations.datasets.fhirStores.applyConsents = (params) => this._makeRequest('v1beta1/{+name}:applyConsents', 'POST', params);
    this.projects.locations.datasets.fhirStores.applyAdminConsents = (params) => this._makeRequest('v1beta1/{+name}:applyAdminConsents', 'POST', params);
    this.projects.locations.datasets.fhirStores.explainDataAccess = (params) => this._makeRequest('v1beta1/{+name}:explainDataAccess', 'GET', params);
    this.projects.locations.datasets.fhirStores.getFHIRStoreMetrics = (params) => this._makeRequest('v1beta1/{+name}:getFHIRStoreMetrics', 'GET', params);
    this.projects.locations.datasets.fhirStores.rollback = (params) => this._makeRequest('v1beta1/{+name}:rollback', 'POST', params);

    this.projects.locations.datasets.fhirStores.fhir = {};
    this.projects.locations.datasets.fhirStores.fhir.create = (params) => this._makeRequest('v1beta1/{+parent}/fhir/{+type}', 'POST', params);
    this.projects.locations.datasets.fhirStores.fhir.Binary-create = (params) => this._makeRequest('v1beta1/{+parent}/fhir/Binary', 'POST', params);
    this.projects.locations.datasets.fhirStores.fhir.read = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.locations.datasets.fhirStores.fhir.Binary-read = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.locations.datasets.fhirStores.fhir.vread = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.locations.datasets.fhirStores.fhir.Binary-vread = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.locations.datasets.fhirStores.fhir.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);
    this.projects.locations.datasets.fhirStores.fhir.conditionalDelete = (params) => this._makeRequest('v1beta1/{+parent}/fhir/{+type}', 'DELETE', params);
    this.projects.locations.datasets.fhirStores.fhir.Binary-update = (params) => this._makeRequest('v1beta1/{+name}', 'PUT', params);
    this.projects.locations.datasets.fhirStores.fhir.update = (params) => this._makeRequest('v1beta1/{+name}', 'PUT', params);
    this.projects.locations.datasets.fhirStores.fhir.conditionalUpdate = (params) => this._makeRequest('v1beta1/{+parent}/fhir/{+type}', 'PUT', params);
    this.projects.locations.datasets.fhirStores.fhir.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);
    this.projects.locations.datasets.fhirStores.fhir.conditionalPatch = (params) => this._makeRequest('v1beta1/{+parent}/fhir/{+type}', 'PATCH', params);
    this.projects.locations.datasets.fhirStores.fhir.search = (params) => this._makeRequest('v1beta1/{+parent}/fhir/_search', 'POST', params);
    this.projects.locations.datasets.fhirStores.fhir.search-type = (params) => this._makeRequest('v1beta1/{+parent}/fhir/{resourceType}/_search', 'POST', params);
    this.projects.locations.datasets.fhirStores.fhir.Patient-everything = (params) => this._makeRequest('v1beta1/{+name}/$everything', 'GET', params);
    this.projects.locations.datasets.fhirStores.fhir.Encounter-everything = (params) => this._makeRequest('v1beta1/{+name}/$everything', 'GET', params);
    this.projects.locations.datasets.fhirStores.fhir.Observation-lastn = (params) => this._makeRequest('v1beta1/{+parent}/fhir/Observation/$lastn', 'GET', params);
    this.projects.locations.datasets.fhirStores.fhir.Resource-incoming-references = (params) => this._makeRequest('v1beta1/{+parent}/fhir/$references', 'GET', params);
    this.projects.locations.datasets.fhirStores.fhir.capabilities = (params) => this._makeRequest('v1beta1/{+name}/fhir/metadata', 'GET', params);
    this.projects.locations.datasets.fhirStores.fhir.executeBundle = (params) => this._makeRequest('v1beta1/{+parent}/fhir', 'POST', params);
    this.projects.locations.datasets.fhirStores.fhir.history = (params) => this._makeRequest('v1beta1/{+name}/_history', 'GET', params);
    this.projects.locations.datasets.fhirStores.fhir.Resource-purge = (params) => this._makeRequest('v1beta1/{+name}/$purge', 'DELETE', params);
    this.projects.locations.datasets.fhirStores.fhir.bulk-export = (params) => this._makeRequest('v1beta1/{+name}/fhir/$export', 'GET', params);
    this.projects.locations.datasets.fhirStores.fhir.ConceptMap-translate = (params) => this._makeRequest('v1beta1/{+name}/$translate', 'GET', params);
    this.projects.locations.datasets.fhirStores.fhir.ConceptMap-search-translate = (params) => this._makeRequest('v1beta1/{+parent}/fhir/ConceptMap/$translate', 'GET', params);
    this.projects.locations.datasets.fhirStores.fhir.Resource-validate = (params) => this._makeRequest('v1beta1/{+parent}/fhir/{+type}/$validate', 'POST', params);
    this.projects.locations.datasets.fhirStores.fhir.Consent-enforcement-status = (params) => this._makeRequest('v1beta1/{+name}/$consent-enforcement-status', 'GET', params);
    this.projects.locations.datasets.fhirStores.fhir.Patient-consent-enforcement-status = (params) => this._makeRequest('v1beta1/{+name}/$consent-enforcement-status', 'GET', params);

    this.projects.locations.datasets.fhirStores.operations = {};
    this.projects.locations.datasets.fhirStores.operations.get-fhir-operation-status = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.locations.datasets.fhirStores.operations.delete-fhir-operation = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    this.projects.locations.datasets.annotationStores = {};
    this.projects.locations.datasets.annotationStores.setIamPolicy = (params) => this._makeRequest('v1beta1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.datasets.annotationStores.getIamPolicy = (params) => this._makeRequest('v1beta1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.datasets.annotationStores.testIamPermissions = (params) => this._makeRequest('v1beta1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.datasets.consentStores = {};
    this.projects.locations.datasets.consentStores.setIamPolicy = (params) => this._makeRequest('v1beta1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.datasets.consentStores.getIamPolicy = (params) => this._makeRequest('v1beta1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.datasets.consentStores.testIamPermissions = (params) => this._makeRequest('v1beta1/{+resource}:testIamPermissions', 'POST', params);
    this.projects.locations.datasets.consentStores.create = (params) => this._makeRequest('v1beta1/{+parent}/consentStores', 'POST', params);
    this.projects.locations.datasets.consentStores.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.locations.datasets.consentStores.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);
    this.projects.locations.datasets.consentStores.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);
    this.projects.locations.datasets.consentStores.list = (params) => this._makeRequest('v1beta1/{+parent}/consentStores', 'GET', params);
    this.projects.locations.datasets.consentStores.checkDataAccess = (params) => this._makeRequest('v1beta1/{+consentStore}:checkDataAccess', 'POST', params);
    this.projects.locations.datasets.consentStores.queryAccessibleData = (params) => this._makeRequest('v1beta1/{+consentStore}:queryAccessibleData', 'POST', params);
    this.projects.locations.datasets.consentStores.evaluateUserConsents = (params) => this._makeRequest('v1beta1/{+consentStore}:evaluateUserConsents', 'POST', params);

    this.projects.locations.datasets.consentStores.attributeDefinitions = {};
    this.projects.locations.datasets.consentStores.attributeDefinitions.create = (params) => this._makeRequest('v1beta1/{+parent}/attributeDefinitions', 'POST', params);
    this.projects.locations.datasets.consentStores.attributeDefinitions.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.locations.datasets.consentStores.attributeDefinitions.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);
    this.projects.locations.datasets.consentStores.attributeDefinitions.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);
    this.projects.locations.datasets.consentStores.attributeDefinitions.list = (params) => this._makeRequest('v1beta1/{+parent}/attributeDefinitions', 'GET', params);

    this.projects.locations.datasets.consentStores.consentArtifacts = {};
    this.projects.locations.datasets.consentStores.consentArtifacts.create = (params) => this._makeRequest('v1beta1/{+parent}/consentArtifacts', 'POST', params);
    this.projects.locations.datasets.consentStores.consentArtifacts.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.locations.datasets.consentStores.consentArtifacts.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);
    this.projects.locations.datasets.consentStores.consentArtifacts.list = (params) => this._makeRequest('v1beta1/{+parent}/consentArtifacts', 'GET', params);

    this.projects.locations.datasets.consentStores.consents = {};
    this.projects.locations.datasets.consentStores.consents.create = (params) => this._makeRequest('v1beta1/{+parent}/consents', 'POST', params);
    this.projects.locations.datasets.consentStores.consents.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.locations.datasets.consentStores.consents.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);
    this.projects.locations.datasets.consentStores.consents.deleteRevision = (params) => this._makeRequest('v1beta1/{+name}:deleteRevision', 'DELETE', params);
    this.projects.locations.datasets.consentStores.consents.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);
    this.projects.locations.datasets.consentStores.consents.activate = (params) => this._makeRequest('v1beta1/{+name}:activate', 'POST', params);
    this.projects.locations.datasets.consentStores.consents.reject = (params) => this._makeRequest('v1beta1/{+name}:reject', 'POST', params);
    this.projects.locations.datasets.consentStores.consents.list = (params) => this._makeRequest('v1beta1/{+parent}/consents', 'GET', params);
    this.projects.locations.datasets.consentStores.consents.listRevisions = (params) => this._makeRequest('v1beta1/{+name}:listRevisions', 'GET', params);
    this.projects.locations.datasets.consentStores.consents.revoke = (params) => this._makeRequest('v1beta1/{+name}:revoke', 'POST', params);

    this.projects.locations.datasets.consentStores.userDataMappings = {};
    this.projects.locations.datasets.consentStores.userDataMappings.create = (params) => this._makeRequest('v1beta1/{+parent}/userDataMappings', 'POST', params);
    this.projects.locations.datasets.consentStores.userDataMappings.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.locations.datasets.consentStores.userDataMappings.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);
    this.projects.locations.datasets.consentStores.userDataMappings.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);
    this.projects.locations.datasets.consentStores.userDataMappings.list = (params) => this._makeRequest('v1beta1/{+parent}/userDataMappings', 'GET', params);
    this.projects.locations.datasets.consentStores.userDataMappings.archive = (params) => this._makeRequest('v1beta1/{+name}:archive', 'POST', params);

    this.projects.locations.datasets.dataMapperWorkspaces = {};
    this.projects.locations.datasets.dataMapperWorkspaces.setIamPolicy = (params) => this._makeRequest('v1beta1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.datasets.dataMapperWorkspaces.getIamPolicy = (params) => this._makeRequest('v1beta1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.datasets.dataMapperWorkspaces.testIamPermissions = (params) => this._makeRequest('v1beta1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.datasets.operations = {};
    this.projects.locations.datasets.operations.list = (params) => this._makeRequest('v1beta1/{+name}/operations', 'GET', params);
    this.projects.locations.datasets.operations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.locations.datasets.operations.cancel = (params) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', params);

    this.projects.locations.services = {};

    this.projects.locations.services.nlp = {};
    this.projects.locations.services.nlp.analyzeEntities = (params) => this._makeRequest('v1beta1/{+nlpService}:analyzeEntities', 'POST', params);
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
