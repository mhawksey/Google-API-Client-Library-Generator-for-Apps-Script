
/**
 * Google Apps Script client library for the Cloud Run Admin API
 * Documentation URL: https://cloud.google.com/run/
 * @class
 */
class Run {
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
    this._rootUrl = 'https://run.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.locations = {};
    this.projects.locations.list = (params) => this._makeRequest('v1/{+name}/locations', 'GET', params);

    this.projects.locations.operations = {};
    this.projects.locations.operations.list = (params) => this._makeRequest('v1/{+name}/operations', 'GET', params);
    this.projects.locations.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.operations.wait = (params) => this._makeRequest('v1/{+name}:wait', 'POST', params);

    this.projects.locations.authorizeddomains = {};
    this.projects.locations.authorizeddomains.list = (params) => this._makeRequest('v1/{+parent}/authorizeddomains', 'GET', params);

    this.projects.locations.revisions = {};
    this.projects.locations.revisions.list = (params) => this._makeRequest('v1/{+parent}/revisions', 'GET', params);
    this.projects.locations.revisions.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.revisions.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.configurations = {};
    this.projects.locations.configurations.list = (params) => this._makeRequest('v1/{+parent}/configurations', 'GET', params);
    this.projects.locations.configurations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.domainmappings = {};
    this.projects.locations.domainmappings.create = (params) => this._makeRequest('v1/{+parent}/domainmappings', 'POST', params);
    this.projects.locations.domainmappings.list = (params) => this._makeRequest('v1/{+parent}/domainmappings', 'GET', params);
    this.projects.locations.domainmappings.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.domainmappings.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.jobs = {};
    this.projects.locations.jobs.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.jobs.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.jobs.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.routes = {};
    this.projects.locations.routes.list = (params) => this._makeRequest('v1/{+parent}/routes', 'GET', params);
    this.projects.locations.routes.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.services = {};
    this.projects.locations.services.list = (params) => this._makeRequest('v1/{+parent}/services', 'GET', params);
    this.projects.locations.services.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.services.create = (params) => this._makeRequest('v1/{+parent}/services', 'POST', params);
    this.projects.locations.services.replaceService = (params) => this._makeRequest('v1/{+name}', 'PUT', params);
    this.projects.locations.services.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.services.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.services.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.services.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.workerpools = {};
    this.projects.locations.workerpools.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.workerpools.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.workerpools.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.authorizeddomains = {};
    this.projects.authorizeddomains.list = (params) => this._makeRequest('v1/{+parent}/authorizeddomains', 'GET', params);

    this.namespaces = {};

    this.namespaces.authorizeddomains = {};
    this.namespaces.authorizeddomains.list = (params) => this._makeRequest('apis/domains.cloudrun.com/v1/{+parent}/authorizeddomains', 'GET', params);

    this.namespaces.revisions = {};
    this.namespaces.revisions.list = (params) => this._makeRequest('apis/serving.knative.dev/v1/{+parent}/revisions', 'GET', params);
    this.namespaces.revisions.get = (params) => this._makeRequest('apis/serving.knative.dev/v1/{+name}', 'GET', params);
    this.namespaces.revisions.delete = (params) => this._makeRequest('apis/serving.knative.dev/v1/{+name}', 'DELETE', params);

    this.namespaces.configurations = {};
    this.namespaces.configurations.list = (params) => this._makeRequest('apis/serving.knative.dev/v1/{+parent}/configurations', 'GET', params);
    this.namespaces.configurations.get = (params) => this._makeRequest('apis/serving.knative.dev/v1/{+name}', 'GET', params);

    this.namespaces.domainmappings = {};
    this.namespaces.domainmappings.create = (params) => this._makeRequest('apis/domains.cloudrun.com/v1/{+parent}/domainmappings', 'POST', params);
    this.namespaces.domainmappings.list = (params) => this._makeRequest('apis/domains.cloudrun.com/v1/{+parent}/domainmappings', 'GET', params);
    this.namespaces.domainmappings.get = (params) => this._makeRequest('apis/domains.cloudrun.com/v1/{+name}', 'GET', params);
    this.namespaces.domainmappings.delete = (params) => this._makeRequest('apis/domains.cloudrun.com/v1/{+name}', 'DELETE', params);

    this.namespaces.tasks = {};
    this.namespaces.tasks.get = (params) => this._makeRequest('apis/run.googleapis.com/v1/{+name}', 'GET', params);
    this.namespaces.tasks.list = (params) => this._makeRequest('apis/run.googleapis.com/v1/{+parent}/tasks', 'GET', params);

    this.namespaces.executions = {};
    this.namespaces.executions.delete = (params) => this._makeRequest('apis/run.googleapis.com/v1/{+name}', 'DELETE', params);
    this.namespaces.executions.get = (params) => this._makeRequest('apis/run.googleapis.com/v1/{+name}', 'GET', params);
    this.namespaces.executions.list = (params) => this._makeRequest('apis/run.googleapis.com/v1/{+parent}/executions', 'GET', params);
    this.namespaces.executions.cancel = (params) => this._makeRequest('apis/run.googleapis.com/v1/{+name}:cancel', 'POST', params);

    this.namespaces.jobs = {};
    this.namespaces.jobs.create = (params) => this._makeRequest('apis/run.googleapis.com/v1/{+parent}/jobs', 'POST', params);
    this.namespaces.jobs.replaceJob = (params) => this._makeRequest('apis/run.googleapis.com/v1/{+name}', 'PUT', params);
    this.namespaces.jobs.delete = (params) => this._makeRequest('apis/run.googleapis.com/v1/{+name}', 'DELETE', params);
    this.namespaces.jobs.get = (params) => this._makeRequest('apis/run.googleapis.com/v1/{+name}', 'GET', params);
    this.namespaces.jobs.list = (params) => this._makeRequest('apis/run.googleapis.com/v1/{+parent}/jobs', 'GET', params);
    this.namespaces.jobs.run = (params) => this._makeRequest('apis/run.googleapis.com/v1/{+name}:run', 'POST', params);

    this.namespaces.routes = {};
    this.namespaces.routes.list = (params) => this._makeRequest('apis/serving.knative.dev/v1/{+parent}/routes', 'GET', params);
    this.namespaces.routes.get = (params) => this._makeRequest('apis/serving.knative.dev/v1/{+name}', 'GET', params);

    this.namespaces.services = {};
    this.namespaces.services.list = (params) => this._makeRequest('apis/serving.knative.dev/v1/{+parent}/services', 'GET', params);
    this.namespaces.services.get = (params) => this._makeRequest('apis/serving.knative.dev/v1/{+name}', 'GET', params);
    this.namespaces.services.create = (params) => this._makeRequest('apis/serving.knative.dev/v1/{+parent}/services', 'POST', params);
    this.namespaces.services.replaceService = (params) => this._makeRequest('apis/serving.knative.dev/v1/{+name}', 'PUT', params);
    this.namespaces.services.delete = (params) => this._makeRequest('apis/serving.knative.dev/v1/{+name}', 'DELETE', params);

    this.namespaces.workerpools = {};
    this.namespaces.workerpools.list = (params) => this._makeRequest('apis/run.googleapis.com/v1/{+parent}/workerpools', 'GET', params);
    this.namespaces.workerpools.get = (params) => this._makeRequest('apis/run.googleapis.com/v1/{+name}', 'GET', params);
    this.namespaces.workerpools.create = (params) => this._makeRequest('apis/run.googleapis.com/v1/{+parent}/workerpools', 'POST', params);
    this.namespaces.workerpools.replaceWorkerPool = (params) => this._makeRequest('apis/run.googleapis.com/v1/{+name}', 'PUT', params);
    this.namespaces.workerpools.delete = (params) => this._makeRequest('apis/run.googleapis.com/v1/{+name}', 'DELETE', params);
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
