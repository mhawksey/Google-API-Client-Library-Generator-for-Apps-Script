
/**
 * Google Apps Script client library for the Cloud Monitoring API
 * Documentation URL: https://cloud.google.com/monitoring/api/
 * @class
 */
class Monitoring {
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
    this._rootUrl = 'https://monitoring.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.operations = {};

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects = {};

    this.projects.dashboards = {};

    /**
     * Creates a new custom dashboard. For examples on how you can use this API to create dashboards, see Managing dashboards by API (https://cloud.google.com/monitoring/dashboards/api-dashboard). This method requires the monitoring.dashboards.create permission on the specified project. For more information about permissions, see Cloud Identity and Access Management (https://cloud.google.com/iam).
     * @param {string} params.parent - (Required) Required. The project on which to execute the request. The format is: projects/[PROJECT_ID_OR_NUMBER] The [PROJECT_ID_OR_NUMBER] must match the dashboard resource name.
     * @param {boolean} params.validateOnly - If set, validate the request and preview the review, but do not actually save it.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.dashboards.create = (params) => this._makeRequest('v1/{+parent}/dashboards', 'POST', params);

    /**
     * Lists the existing dashboards.This method requires the monitoring.dashboards.list permission on the specified project. For more information, see Cloud Identity and Access Management (https://cloud.google.com/iam).
     * @param {integer} params.pageSize - A positive number that is the maximum number of results to return. If unspecified, a default of 1000 is used.
     * @param {string} params.pageToken - Optional. If this field is not empty then it must contain the nextPageToken value returned by a previous call to this method. Using this field causes the method to return additional results from the previous method call.
     * @param {string} params.parent - (Required) Required. The scope of the dashboards to list. The format is: projects/[PROJECT_ID_OR_NUMBER]
     * @return {object} The API response object.
     */
    this.projects.dashboards.list = (params) => this._makeRequest('v1/{+parent}/dashboards', 'GET', params);

    /**
     * Fetches a specific dashboard.This method requires the monitoring.dashboards.get permission on the specified dashboard. For more information, see Cloud Identity and Access Management (https://cloud.google.com/iam).
     * @param {string} params.name - (Required) Required. The resource name of the Dashboard. The format is one of: dashboards/[DASHBOARD_ID] (for system dashboards) projects/[PROJECT_ID_OR_NUMBER]/dashboards/[DASHBOARD_ID] (for custom dashboards).
     * @return {object} The API response object.
     */
    this.projects.dashboards.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Deletes an existing custom dashboard.This method requires the monitoring.dashboards.delete permission on the specified dashboard. For more information, see Cloud Identity and Access Management (https://cloud.google.com/iam).
     * @param {string} params.name - (Required) Required. The resource name of the Dashboard. The format is: projects/[PROJECT_ID_OR_NUMBER]/dashboards/[DASHBOARD_ID]
     * @return {object} The API response object.
     */
    this.projects.dashboards.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Replaces an existing custom dashboard with a new definition.This method requires the monitoring.dashboards.update permission on the specified dashboard. For more information, see Cloud Identity and Access Management (https://cloud.google.com/iam).
     * @param {string} params.name - (Required) Identifier. The resource name of the dashboard.
     * @param {boolean} params.validateOnly - If set, validate the request and preview the review, but do not actually save it.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.dashboards.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.projects.location = {};

    this.projects.location.prometheus = {};

    this.projects.location.prometheus.api = {};

    this.projects.location.prometheus.api.v1 = {};

    /**
     * Evaluate a PromQL query at a single point in time.
     * @param {string} params.location - (Required) Location of the resource information. Has to be "global" now.
     * @param {string} params.name - (Required) Required. The project on which to execute the request. Data associcated with the project's workspace stored under the The format is: projects/PROJECT_ID_OR_NUMBER. Open source API but used as a request path prefix to distinguish different virtual Prometheus instances of Google Prometheus Engine.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.location.prometheus.api.v1.query = (params) => this._makeRequest('v1/{+name}/location/{location}/prometheus/api/v1/query', 'POST', params);

    /**
     * Evaluate a PromQL query with start, end time range.
     * @param {string} params.location - (Required) Location of the resource information. Has to be "global" now.
     * @param {string} params.name - (Required) Required. The project on which to execute the request. Data associcated with the project's workspace stored under the The format is: projects/PROJECT_ID_OR_NUMBER. Open source API but used as a request path prefix to distinguish different virtual Prometheus instances of Google Prometheus Engine.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.location.prometheus.api.v1.query_range = (params) => this._makeRequest('v1/{+name}/location/{location}/prometheus/api/v1/query_range', 'POST', params);

    /**
     * Lists labels for metrics.
     * @param {string} params.location - (Required) Location of the resource information. Has to be "global" now.
     * @param {string} params.name - (Required) Required. The workspace on which to execute the request. It is not part of the open source API but used as a request path prefix to distinguish different virtual Prometheus instances of Google Prometheus Engine. The format is: projects/PROJECT_ID_OR_NUMBER.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.location.prometheus.api.v1.labels = (params) => this._makeRequest('v1/{+name}/location/{location}/prometheus/api/v1/labels', 'POST', params);

    /**
     * Lists metadata for metrics.
     * @param {string} params.location - (Required) Location of the resource information. Has to be "global" for now.
     * @param {string} params.name - (Required) Required. The workspace on which to execute the request. It is not part of the open source API but used as a request path prefix to distinguish different virtual Prometheus instances of Google Prometheus Engine. The format is: projects/PROJECT_ID_OR_NUMBER.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.location.prometheus.api.v1.series = (params) => this._makeRequest('v1/{+name}/location/{location}/prometheus/api/v1/series', 'POST', params);

    /**
     * Lists exemplars relevant to a given PromQL query,
     * @param {string} params.location - (Required) Location of the resource information. Has to be "global" now.
     * @param {string} params.name - (Required) Required. The project on which to execute the request. Data associcated with the project's workspace stored under the The format is: projects/PROJECT_ID_OR_NUMBER. Open source API but used as a request path prefix to distinguish different virtual Prometheus instances of Google Prometheus Engine.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.location.prometheus.api.v1.query_exemplars = (params) => this._makeRequest('v1/{+name}/location/{location}/prometheus/api/v1/query_exemplars', 'POST', params);

    this.projects.location.prometheus.api.v1.label = {};

    /**
     * Lists possible values for a given label name.
     * @param {string} params.end - The end time to evaluate the query for. Either floating point UNIX seconds or RFC3339 formatted timestamp.
     * @param {string} params.label - (Required) The label name for which values are queried.
     * @param {string} params.location - (Required) Location of the resource information. Has to be "global" now.
     * @param {string} params.match - A list of matchers encoded in the Prometheus label matcher format to constrain the values to series that satisfy them.
     * @param {string} params.name - (Required) Required. The workspace on which to execute the request. It is not part of the open source API but used as a request path prefix to distinguish different virtual Prometheus instances of Google Prometheus Engine. The format is: projects/PROJECT_ID_OR_NUMBER.
     * @param {string} params.start - The start time to evaluate the query for. Either floating point UNIX seconds or RFC3339 formatted timestamp.
     * @return {object} The API response object.
     */
    this.projects.location.prometheus.api.v1.label.values = (params) => this._makeRequest('v1/{+name}/location/{location}/prometheus/api/v1/label/{label}/values', 'GET', params);

    this.projects.location.prometheus.api.v1.metadata = {};

    /**
     * Lists metadata for metrics.
     * @param {string} params.limit - Maximum number of metrics to return.
     * @param {string} params.location - (Required) Location of the resource information. Has to be "global" for now.
     * @param {string} params.metric - The metric name for which to query metadata. If unset, all metric metadata is returned.
     * @param {string} params.name - (Required) Required. The workspace on which to execute the request. It is not part of the open source API but used as a request path prefix to distinguish different virtual Prometheus instances of Google Prometheus Engine. The format is: projects/PROJECT_ID_OR_NUMBER.
     * @return {object} The API response object.
     */
    this.projects.location.prometheus.api.v1.metadata.list = (params) => this._makeRequest('v1/{+name}/location/{location}/prometheus/api/v1/metadata', 'GET', params);

    this.locations = {};

    this.locations.global = {};

    this.locations.global.metricsScopes = {};

    /**
     * Returns a specific Metrics Scope, including the list of projects monitored by the specified Metrics Scope.
     * @param {string} params.name - (Required) Required. The resource name of the Metrics Scope. Example: locations/global/metricsScopes/{SCOPING_PROJECT_ID_OR_NUMBER}
     * @return {object} The API response object.
     */
    this.locations.global.metricsScopes.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Returns a list of every Metrics Scope that a specific MonitoredProject has been added to. The metrics scope representing the specified monitored project will always be the first entry in the response.
     * @param {string} params.monitoredResourceContainer - Required. The resource name of the Monitored Project being requested. Example: projects/{MONITORED_PROJECT_ID_OR_NUMBER}
     * @return {object} The API response object.
     */
    this.locations.global.metricsScopes.listMetricsScopesByMonitoredProject = (params) => this._makeRequest('v1/locations/global/metricsScopes:listMetricsScopesByMonitoredProject', 'GET', params);

    this.locations.global.metricsScopes.projects = {};

    /**
     * Adds a MonitoredProject with the given project ID to the specified Metrics Scope.
     * @param {string} params.parent - (Required) Required. The resource name of the existing Metrics Scope that will monitor this project. Example: locations/global/metricsScopes/{SCOPING_PROJECT_ID_OR_NUMBER}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.locations.global.metricsScopes.projects.create = (params) => this._makeRequest('v1/{+parent}/projects', 'POST', params);

    /**
     * Deletes a MonitoredProject from the specified Metrics Scope.
     * @param {string} params.name - (Required) Required. The resource name of the MonitoredProject. Example: locations/global/metricsScopes/{SCOPING_PROJECT_ID_OR_NUMBER}/projects/{MONITORED_PROJECT_ID_OR_NUMBER}Authorization requires the following Google IAM (https://cloud.google.com/iam) permissions on both the Metrics Scope and on the MonitoredProject: monitoring.metricsScopes.link
     * @return {object} The API response object.
     */
    this.locations.global.metricsScopes.projects.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
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
