
/**
 * Google Apps Script client library for the Application Integration API
 * Documentation URL: https://cloud.google.com/application-integration
 * @class
 */
class Integrations {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://integrations.googleapis.com/';
    this._servicePath = '';


    this.projects = {};
    this.projects.getClientmetadata = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/clientmetadata', 'GET', apiParams, clientConfig);

    this.projects.locations = {};
    this.projects.locations.getClients = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/clients', 'GET', apiParams, clientConfig);
    this.projects.locations.generateOpenApiSpec = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:generateOpenApiSpec', 'POST', apiParams, clientConfig);

    this.projects.locations.sfdcInstances = {};
    this.projects.locations.sfdcInstances.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.sfdcInstances.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.sfdcInstances.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.sfdcInstances.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/sfdcInstances', 'GET', apiParams, clientConfig);
    this.projects.locations.sfdcInstances.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/sfdcInstances', 'POST', apiParams, clientConfig);

    this.projects.locations.sfdcInstances.sfdcChannels = {};
    this.projects.locations.sfdcInstances.sfdcChannels.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.sfdcInstances.sfdcChannels.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/sfdcChannels', 'GET', apiParams, clientConfig);
    this.projects.locations.sfdcInstances.sfdcChannels.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.sfdcInstances.sfdcChannels.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.sfdcInstances.sfdcChannels.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/sfdcChannels', 'POST', apiParams, clientConfig);

    this.projects.locations.templates = {};
    this.projects.locations.templates.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.templates.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.templates.unshare = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:unshare', 'POST', apiParams, clientConfig);
    this.projects.locations.templates.share = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:share', 'POST', apiParams, clientConfig);
    this.projects.locations.templates.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/templates', 'GET', apiParams, clientConfig);
    this.projects.locations.templates.upload = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/templates:upload', 'POST', apiParams, clientConfig);
    this.projects.locations.templates.search = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/templates:search', 'GET', apiParams, clientConfig);
    this.projects.locations.templates.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/templates', 'POST', apiParams, clientConfig);
    this.projects.locations.templates.download = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:download', 'GET', apiParams, clientConfig);
    this.projects.locations.templates.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.templates.use = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:use', 'POST', apiParams, clientConfig);
    this.projects.locations.templates.import = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:import', 'POST', apiParams, clientConfig);

    this.projects.locations.appsScriptProjects = {};
    this.projects.locations.appsScriptProjects.link = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/appsScriptProjects:link', 'POST', apiParams, clientConfig);
    this.projects.locations.appsScriptProjects.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/appsScriptProjects', 'POST', apiParams, clientConfig);

    this.projects.locations.authConfigs = {};
    this.projects.locations.authConfigs.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.authConfigs.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.authConfigs.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/authConfigs', 'POST', apiParams, clientConfig);
    this.projects.locations.authConfigs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/authConfigs', 'GET', apiParams, clientConfig);
    this.projects.locations.authConfigs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.connections = {};
    this.projects.locations.connections.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/connections', 'GET', apiParams, clientConfig);
    this.projects.locations.connections.getConnectionSchemaMetadata = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.connections.runtimeActionSchemas = {};
    this.projects.locations.connections.runtimeActionSchemas.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/runtimeActionSchemas', 'GET', apiParams, clientConfig);

    this.projects.locations.connections.runtimeEntitySchemas = {};
    this.projects.locations.connections.runtimeEntitySchemas.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/runtimeEntitySchemas', 'GET', apiParams, clientConfig);

    this.projects.locations.products = {};

    this.projects.locations.products.integrations = {};
    this.projects.locations.products.integrations.execute = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:execute', 'POST', apiParams, clientConfig);
    this.projects.locations.products.integrations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/integrations', 'GET', apiParams, clientConfig);
    this.projects.locations.products.integrations.test = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:test', 'POST', apiParams, clientConfig);
    this.projects.locations.products.integrations.schedule = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:schedule', 'POST', apiParams, clientConfig);

    this.projects.locations.products.integrations.versions = {};
    this.projects.locations.products.integrations.versions.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.products.integrations.versions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.products.integrations.versions.upload = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/versions:upload', 'POST', apiParams, clientConfig);
    this.projects.locations.products.integrations.versions.publish = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:publish', 'POST', apiParams, clientConfig);
    this.projects.locations.products.integrations.versions.download = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:download', 'GET', apiParams, clientConfig);
    this.projects.locations.products.integrations.versions.unpublish = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:unpublish', 'POST', apiParams, clientConfig);
    this.projects.locations.products.integrations.versions.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/versions', 'POST', apiParams, clientConfig);
    this.projects.locations.products.integrations.versions.takeoverEditLock = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+integrationVersion}:takeoverEditLock', 'POST', apiParams, clientConfig);
    this.projects.locations.products.integrations.versions.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.products.integrations.versions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/versions', 'GET', apiParams, clientConfig);

    this.projects.locations.products.integrations.executions = {};
    this.projects.locations.products.integrations.executions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/executions', 'GET', apiParams, clientConfig);
    this.projects.locations.products.integrations.executions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.products.integrations.executions.download = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:download', 'GET', apiParams, clientConfig);

    this.projects.locations.products.integrations.executions.suspensions = {};
    this.projects.locations.products.integrations.executions.suspensions.resolve = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:resolve', 'POST', apiParams, clientConfig);
    this.projects.locations.products.integrations.executions.suspensions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/suspensions', 'GET', apiParams, clientConfig);
    this.projects.locations.products.integrations.executions.suspensions.lift = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:lift', 'POST', apiParams, clientConfig);

    this.projects.locations.products.certificates = {};
    this.projects.locations.products.certificates.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/certificates', 'GET', apiParams, clientConfig);
    this.projects.locations.products.certificates.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.products.certificates.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.products.certificates.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.products.certificates.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/certificates', 'POST', apiParams, clientConfig);

    this.projects.locations.products.sfdcInstances = {};
    this.projects.locations.products.sfdcInstances.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/sfdcInstances', 'POST', apiParams, clientConfig);
    this.projects.locations.products.sfdcInstances.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.products.sfdcInstances.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.products.sfdcInstances.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/sfdcInstances', 'GET', apiParams, clientConfig);
    this.projects.locations.products.sfdcInstances.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects.locations.products.sfdcInstances.sfdcChannels = {};
    this.projects.locations.products.sfdcInstances.sfdcChannels.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/sfdcChannels', 'POST', apiParams, clientConfig);
    this.projects.locations.products.sfdcInstances.sfdcChannels.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.products.sfdcInstances.sfdcChannels.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.products.sfdcInstances.sfdcChannels.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/sfdcChannels', 'GET', apiParams, clientConfig);
    this.projects.locations.products.sfdcInstances.sfdcChannels.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.products.cloudFunctions = {};
    this.projects.locations.products.cloudFunctions.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/cloudFunctions', 'POST', apiParams, clientConfig);

    this.projects.locations.products.authConfigs = {};
    this.projects.locations.products.authConfigs.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.products.authConfigs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/authConfigs', 'GET', apiParams, clientConfig);
    this.projects.locations.products.authConfigs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.products.authConfigs.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.products.authConfigs.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/authConfigs', 'POST', apiParams, clientConfig);

    this.projects.locations.cloudFunctions = {};
    this.projects.locations.cloudFunctions.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/cloudFunctions', 'POST', apiParams, clientConfig);

    this.projects.locations.integrations = {};
    this.projects.locations.integrations.test = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:test', 'POST', apiParams, clientConfig);
    this.projects.locations.integrations.executeEvent = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:executeEvent', 'POST', apiParams, clientConfig);
    this.projects.locations.integrations.search = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/integrations:search', 'GET', apiParams, clientConfig);
    this.projects.locations.integrations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/integrations', 'GET', apiParams, clientConfig);
    this.projects.locations.integrations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.integrations.schedule = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:schedule', 'POST', apiParams, clientConfig);
    this.projects.locations.integrations.execute = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:execute', 'POST', apiParams, clientConfig);

    this.projects.locations.integrations.executions = {};
    this.projects.locations.integrations.executions.replay = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:replay', 'POST', apiParams, clientConfig);
    this.projects.locations.integrations.executions.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:cancel', 'POST', apiParams, clientConfig);
    this.projects.locations.integrations.executions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.integrations.executions.download = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:download', 'GET', apiParams, clientConfig);
    this.projects.locations.integrations.executions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/executions', 'GET', apiParams, clientConfig);

    this.projects.locations.integrations.executions.suspensions = {};
    this.projects.locations.integrations.executions.suspensions.lift = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:lift', 'POST', apiParams, clientConfig);
    this.projects.locations.integrations.executions.suspensions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/suspensions', 'GET', apiParams, clientConfig);
    this.projects.locations.integrations.executions.suspensions.resolve = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:resolve', 'POST', apiParams, clientConfig);

    this.projects.locations.integrations.versions = {};
    this.projects.locations.integrations.versions.test = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:test', 'POST', apiParams, clientConfig);
    this.projects.locations.integrations.versions.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.integrations.versions.upload = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/versions:upload', 'POST', apiParams, clientConfig);
    this.projects.locations.integrations.versions.download = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:download', 'GET', apiParams, clientConfig);
    this.projects.locations.integrations.versions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/versions', 'GET', apiParams, clientConfig);
    this.projects.locations.integrations.versions.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/versions', 'POST', apiParams, clientConfig);
    this.projects.locations.integrations.versions.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.integrations.versions.downloadJsonPackage = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:downloadJsonPackage', 'GET', apiParams, clientConfig);
    this.projects.locations.integrations.versions.unpublish = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:unpublish', 'POST', apiParams, clientConfig);
    this.projects.locations.integrations.versions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.integrations.versions.publish = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:publish', 'POST', apiParams, clientConfig);

    this.projects.locations.integrations.versions.testCases = {};
    this.projects.locations.integrations.versions.testCases.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/testCases', 'GET', apiParams, clientConfig);
    this.projects.locations.integrations.versions.testCases.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/testCases', 'POST', apiParams, clientConfig);
    this.projects.locations.integrations.versions.testCases.takeoverEditLock = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:takeoverEditLock', 'POST', apiParams, clientConfig);
    this.projects.locations.integrations.versions.testCases.upload = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/testCases:upload', 'POST', apiParams, clientConfig);
    this.projects.locations.integrations.versions.testCases.execute = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/testCases:execute', 'POST', apiParams, clientConfig);
    this.projects.locations.integrations.versions.testCases.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.integrations.versions.testCases.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.integrations.versions.testCases.download = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:download', 'GET', apiParams, clientConfig);
    this.projects.locations.integrations.versions.testCases.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.integrations.versions.testCases.executeTest = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+testCaseName}:executeTest', 'POST', apiParams, clientConfig);

    this.projects.locations.certificates = {};
    this.projects.locations.certificates.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/certificates', 'POST', apiParams, clientConfig);
    this.projects.locations.certificates.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/certificates', 'GET', apiParams, clientConfig);
    this.projects.locations.certificates.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.certificates.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.certificates.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.clients = {};
    this.projects.locations.clients.provision = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/clients:provision', 'POST', apiParams, clientConfig);
    this.projects.locations.clients.switchVariableMasking = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/clients:switchVariableMasking', 'POST', apiParams, clientConfig);
    this.projects.locations.clients.switch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/clients:switch', 'POST', apiParams, clientConfig);
    this.projects.locations.clients.changeConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/clients:changeConfig', 'POST', apiParams, clientConfig);
    this.projects.locations.clients.deprovision = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/clients:deprovision', 'POST', apiParams, clientConfig);
    this.projects.locations.clients.provisionClientPostProcessor = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/clients:provisionClientPostProcessor', 'POST', apiParams, clientConfig);
    this.projects.locations.clients.toggleHttp = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/clients:toggleHttp', 'POST', apiParams, clientConfig);
    this.projects.locations.clients.replace = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/clients:replace', 'POST', apiParams, clientConfig);

    this.callback = {};
    this.callback.generateToken = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/callback:generateToken', 'GET', apiParams, clientConfig);

    this.connectorPlatformRegions = {};
    this.connectorPlatformRegions.enumerate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/connectorPlatformRegions:enumerate', 'GET', apiParams, clientConfig);
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
