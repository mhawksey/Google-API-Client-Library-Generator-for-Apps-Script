
/**
 * Google Apps Script client library for the Service Consumer Management API
 * Documentation URL: https://cloud.google.com/service-consumer-management/docs/overview
 * @class
 */
class Serviceconsumermanagement {
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
    this._rootUrl = 'https://serviceconsumermanagement.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.services = {};

    this.services.consumerQuotaMetrics = {};

    /**
     * Retrieves a summary of quota information for a specific quota metric.
     * @param {string} params.name - (Required) The resource name of the quota metric, returned by a ListConsumerQuotaMetrics call. An example name would be: `services/compute.googleapis.com/projects/123/consumerQuotaMetrics/compute.googleapis.com%2Fcpus`
     * @param {string} params.view - Specifies the level of detail for quota information in the response.
     * @return {object} The API response object.
     */
    this.services.consumerQuotaMetrics.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Create or update multiple producer overrides atomically, all on the same consumer, but on many different metrics or limits. The name field in the quota override message should not be set.
     * @param {string} params.parent - (Required) The resource name of the consumer. An example name would be: `services/compute.googleapis.com/projects/123`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.services.consumerQuotaMetrics.importProducerOverrides = (params) => this._makeRequest('v1beta1/{+parent}/consumerQuotaMetrics:importProducerOverrides', 'POST', params);

    /**
     * Create or update multiple producer quota policies atomically, all on the same ancestor, but on many different metrics or limits. The name field in the quota policy message should not be set.
     * @param {string} params.parent - (Required) The resource name of the consumer. An example name would be: `services/compute.googleapis.com/organizations/123`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.services.consumerQuotaMetrics.importProducerQuotaPolicies = (params) => this._makeRequest('v1beta1/{+parent}/consumerQuotaMetrics:importProducerQuotaPolicies', 'POST', params);

    /**
     * Retrieves a summary of all quota information about this consumer that is visible to the service producer, for each quota metric defined by the service. Each metric includes information about all of its defined limits. Each limit includes the limit configuration (quota unit, preciseness, default value), the current effective limit value, and all of the overrides applied to the limit.
     * @param {integer} params.pageSize - Requested size of the next page of data.
     * @param {string} params.pageToken - Token identifying which result to start with; returned by a previous list call.
     * @param {string} params.parent - (Required) Parent of the quotas resource. An example parent would be: `services/serviceconsumermanagement.googleapis.com/projects/123`
     * @param {string} params.view - Specifies the level of detail for quota information in the response.
     * @return {object} The API response object.
     */
    this.services.consumerQuotaMetrics.list = (params) => this._makeRequest('v1beta1/{+parent}/consumerQuotaMetrics', 'GET', params);

    this.services.consumerQuotaMetrics.limits = {};

    /**
     * Retrieves a summary of quota information for a specific quota limit.
     * @param {string} params.name - (Required) The resource name of the quota limit, returned by a ListConsumerQuotaMetrics or GetConsumerQuotaMetric call. An example name would be: `services/compute.googleapis.com/projects/123/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion`
     * @param {string} params.view - Specifies the level of detail for quota information in the response.
     * @return {object} The API response object.
     */
    this.services.consumerQuotaMetrics.limits.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    this.services.consumerQuotaMetrics.limits.producerQuotaPolicies = {};

    /**
     * Updates a producer quota policy.
     * @param {boolean} params.force - Whether to force the update of the quota policy. If the policy update would decrease the default limit of any consumer tier by more than 10 percent, the call is rejected, as a safety measure to avoid accidentally decreasing quota too quickly. Setting the force parameter to true ignores this restriction.
     * @param {string} params.forceJustification - If force option is set to true, force_justification is suggested to be set to log the reason in audit logs.
     * @param {string} params.name - (Required) The resource name of the producer policy. An example name would be: `services/compute.googleapis.com/organizations/123/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion/producerQuotaPolicies/4a3f2c1d`
     * @param {string} params.updateMask - Update only the specified fields. If unset, all modifiable fields will be updated.
     * @param {boolean} params.validateOnly - If set to true, validate the request, but do not actually update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.services.consumerQuotaMetrics.limits.producerQuotaPolicies.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    /**
     * Creates a producer quota policy. A producer quota policy is applied by the owner or administrator of a service at an org or folder node to set the default quota limit for all consumers under the node where the policy is created. To create multiple policies at once, use ImportProducerQuotaPolicies instead. If a policy with the specified dimensions already exists, this call will fail. To overwrite an existing policy if one is already present ("upsert" semantics), use ImportProducerQuotaPolicies instead.
     * @param {boolean} params.force - Whether to force the creation of the quota policy. If the policy creation would decrease the default limit of any consumer tier by more than 10 percent, the call is rejected, as a safety measure to avoid accidentally decreasing quota too quickly. Setting the force parameter to true ignores this restriction.
     * @param {string} params.forceJustification - If force option is set to true, force_justification is suggested to be set to log the reason in audit logs.
     * @param {string} params.parent - (Required) Required. The resource name of the parent quota limit. An example name would be: `services/compute.googleapis.com/organizations/123/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion`
     * @param {boolean} params.validateOnly - If set to true, validate the request, but do not actually update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.services.consumerQuotaMetrics.limits.producerQuotaPolicies.create = (params) => this._makeRequest('v1beta1/{+parent}/producerQuotaPolicies', 'POST', params);

    /**
     * Deletes a producer quota policy.
     * @param {boolean} params.force - Whether to force the deletion of the quota policy. If the policy deletion would decrease the default limit of any consumer tier by more than 10 percent, the call is rejected, as a safety measure to avoid accidentally decreasing quota too quickly. Setting the force parameter to true ignores this restriction.
     * @param {string} params.forceJustification - If force option is set to true, force_justification is suggested to be set to log the reason in audit logs.
     * @param {string} params.name - (Required) Required. The resource name of the policy to delete. An example name would be: `services/compute.googleapis.com/organizations/123/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion/producerQuotaPolicies/4a3f2c1d`
     * @param {boolean} params.validateOnly - If set to true, validate the request, but do not actually update.
     * @return {object} The API response object.
     */
    this.services.consumerQuotaMetrics.limits.producerQuotaPolicies.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Lists all producer policies created at current consumer node for a limit.
     * @param {integer} params.pageSize - Requested size of the next page of data.
     * @param {string} params.pageToken - Token identifying which result to start with; returned by a previous list call.
     * @param {string} params.parent - (Required) Required. The resource name of the parent quota limit. An example name would be: `services/compute.googleapis.com/organizations/123/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion`
     * @return {object} The API response object.
     */
    this.services.consumerQuotaMetrics.limits.producerQuotaPolicies.list = (params) => this._makeRequest('v1beta1/{+parent}/producerQuotaPolicies', 'GET', params);

    this.services.consumerQuotaMetrics.limits.producerOverrides = {};

    /**
     * Creates a producer override. A producer override is applied by the owner or administrator of a service to increase or decrease the amount of quota a consumer of the service is allowed to use. To create multiple overrides at once, use ImportProducerOverrides instead. If an override with the specified dimensions already exists, this call will fail. To overwrite an existing override if one is already present ("upsert" semantics), use ImportProducerOverrides instead.
     * @param {boolean} params.force - Whether to force the creation of the quota override. Setting the force parameter to 'true' ignores all quota safety checks that would fail the request. QuotaSafetyCheck lists all such validations.
     * @param {string} params.forceJustification - If force option is set to true, force_justification is suggested to be set to log the reason in audit logs.
     * @param {string} params.forceOnly - The list of quota safety checks to ignore before the override mutation. Unlike 'force' field that ignores all the quota safety checks, the 'force_only' field ignores only the specified checks; other checks are still enforced. The 'force' and 'force_only' fields cannot both be set.
     * @param {string} params.parent - (Required) The resource name of the parent quota limit, returned by a ListConsumerQuotaMetrics or GetConsumerQuotaMetric call. An example name would be: `services/compute.googleapis.com/projects/123/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.services.consumerQuotaMetrics.limits.producerOverrides.create = (params) => this._makeRequest('v1beta1/{+parent}/producerOverrides', 'POST', params);

    /**
     * Updates a producer override.
     * @param {boolean} params.force - Whether to force the update of the quota override. Setting the force parameter to 'true' ignores all quota safety checks that would fail the request. QuotaSafetyCheck lists all such validations.
     * @param {string} params.forceJustification - If force option is set to true, force_justification is suggested to be set to log the reason in audit logs.
     * @param {string} params.forceOnly - The list of quota safety checks to ignore before the override mutation. Unlike 'force' field that ignores all the quota safety checks, the 'force_only' field ignores only the specified checks; other checks are still enforced. The 'force' and 'force_only' fields cannot both be set.
     * @param {string} params.name - (Required) The resource name of the override to update. An example name would be: `services/compute.googleapis.com/projects/123/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion/producerOverrides/4a3f2c1d`
     * @param {string} params.updateMask - Update only the specified fields. If unset, all modifiable fields will be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.services.consumerQuotaMetrics.limits.producerOverrides.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    /**
     * Lists all producer overrides on this limit.
     * @param {integer} params.pageSize - Requested size of the next page of data.
     * @param {string} params.pageToken - Token identifying which result to start with; returned by a previous list call.
     * @param {string} params.parent - (Required) The resource name of the parent quota limit, returned by a ListConsumerQuotaMetrics or GetConsumerQuotaMetric call. An example name would be: `services/compute.googleapis.com/projects/123/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion`
     * @return {object} The API response object.
     */
    this.services.consumerQuotaMetrics.limits.producerOverrides.list = (params) => this._makeRequest('v1beta1/{+parent}/producerOverrides', 'GET', params);

    /**
     * Deletes a producer override.
     * @param {boolean} params.force - Whether to force the deletion of the quota override. Setting the force parameter to 'true' ignores all quota safety checks that would fail the request. QuotaSafetyCheck lists all such validations.
     * @param {string} params.forceJustification - If force option is set to true, force_justification is suggested to be set to log the reason in audit logs.
     * @param {string} params.forceOnly - The list of quota safety checks to ignore before the override mutation. Unlike 'force' field that ignores all the quota safety checks, the 'force_only' field ignores only the specified checks; other checks are still enforced. The 'force' and 'force_only' fields cannot both be set.
     * @param {string} params.name - (Required) The resource name of the override to delete. An example name would be: `services/compute.googleapis.com/projects/123/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion/producerOverrides/4a3f2c1d`
     * @return {object} The API response object.
     */
    this.services.consumerQuotaMetrics.limits.producerOverrides.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    this.operations = {};

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.operations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
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
