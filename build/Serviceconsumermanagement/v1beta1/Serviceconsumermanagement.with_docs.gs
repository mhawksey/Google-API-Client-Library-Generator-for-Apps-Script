
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
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://serviceconsumermanagement.googleapis.com/';
    this._servicePath = '';


    this.operations = {};

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the operation resource.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);

    this.services = {};

    this.services.consumerQuotaMetrics = {};

    /**
     * Create or update multiple producer quota policies atomically, all on the same ancestor, but on many different metrics or limits. The name field in the quota policy message should not be set.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) The resource name of the consumer. An example name would be: `services/compute.googleapis.com/organizations/123`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.services.consumerQuotaMetrics.importProducerQuotaPolicies = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/consumerQuotaMetrics:importProducerQuotaPolicies', 'POST', apiParams, clientConfig);

    /**
     * Retrieves a summary of all quota information about this consumer that is visible to the service producer, for each quota metric defined by the service. Each metric includes information about all of its defined limits. Each limit includes the limit configuration (quota unit, preciseness, default value), the current effective limit value, and all of the overrides applied to the limit.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Requested size of the next page of data.
     * @param {string} apiParams.pageToken - Token identifying which result to start with; returned by a previous list call.
     * @param {string} apiParams.parent - (Required) Parent of the quotas resource. An example parent would be: `services/serviceconsumermanagement.googleapis.com/projects/123`
     * @param {string} apiParams.view - Specifies the level of detail for quota information in the response.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.services.consumerQuotaMetrics.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/consumerQuotaMetrics', 'GET', apiParams, clientConfig);

    /**
     * Create or update multiple producer overrides atomically, all on the same consumer, but on many different metrics or limits. The name field in the quota override message should not be set.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) The resource name of the consumer. An example name would be: `services/compute.googleapis.com/projects/123`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.services.consumerQuotaMetrics.importProducerOverrides = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/consumerQuotaMetrics:importProducerOverrides', 'POST', apiParams, clientConfig);

    /**
     * Retrieves a summary of quota information for a specific quota metric.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The resource name of the quota metric, returned by a ListConsumerQuotaMetrics call. An example name would be: `services/compute.googleapis.com/projects/123/consumerQuotaMetrics/compute.googleapis.com%2Fcpus`
     * @param {string} apiParams.view - Specifies the level of detail for quota information in the response.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.services.consumerQuotaMetrics.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);

    this.services.consumerQuotaMetrics.limits = {};

    /**
     * Retrieves a summary of quota information for a specific quota limit.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The resource name of the quota limit, returned by a ListConsumerQuotaMetrics or GetConsumerQuotaMetric call. An example name would be: `services/compute.googleapis.com/projects/123/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion`
     * @param {string} apiParams.view - Specifies the level of detail for quota information in the response.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.services.consumerQuotaMetrics.limits.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);

    this.services.consumerQuotaMetrics.limits.producerQuotaPolicies = {};

    /**
     * Updates a producer quota policy.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.force - Whether to force the update of the quota policy. If the policy update would decrease the default limit of any consumer tier by more than 10 percent, the call is rejected, as a safety measure to avoid accidentally decreasing quota too quickly. Setting the force parameter to true ignores this restriction.
     * @param {string} apiParams.forceJustification - If force option is set to true, force_justification is suggested to be set to log the reason in audit logs.
     * @param {string} apiParams.name - (Required) The resource name of the producer policy. An example name would be: `services/compute.googleapis.com/organizations/123/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion/producerQuotaPolicies/4a3f2c1d`
     * @param {string} apiParams.updateMask - Update only the specified fields. If unset, all modifiable fields will be updated.
     * @param {boolean} apiParams.validateOnly - If set to true, validate the request, but do not actually update.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.services.consumerQuotaMetrics.limits.producerQuotaPolicies.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Lists all producer policies created at current consumer node for a limit.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Requested size of the next page of data.
     * @param {string} apiParams.pageToken - Token identifying which result to start with; returned by a previous list call.
     * @param {string} apiParams.parent - (Required) Required. The resource name of the parent quota limit. An example name would be: `services/compute.googleapis.com/organizations/123/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.services.consumerQuotaMetrics.limits.producerQuotaPolicies.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/producerQuotaPolicies', 'GET', apiParams, clientConfig);

    /**
     * Creates a producer quota policy. A producer quota policy is applied by the owner or administrator of a service at an org or folder node to set the default quota limit for all consumers under the node where the policy is created. To create multiple policies at once, use ImportProducerQuotaPolicies instead. If a policy with the specified dimensions already exists, this call will fail. To overwrite an existing policy if one is already present ("upsert" semantics), use ImportProducerQuotaPolicies instead.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.force - Whether to force the creation of the quota policy. If the policy creation would decrease the default limit of any consumer tier by more than 10 percent, the call is rejected, as a safety measure to avoid accidentally decreasing quota too quickly. Setting the force parameter to true ignores this restriction.
     * @param {string} apiParams.forceJustification - If force option is set to true, force_justification is suggested to be set to log the reason in audit logs.
     * @param {string} apiParams.parent - (Required) Required. The resource name of the parent quota limit. An example name would be: `services/compute.googleapis.com/organizations/123/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion`
     * @param {boolean} apiParams.validateOnly - If set to true, validate the request, but do not actually update.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.services.consumerQuotaMetrics.limits.producerQuotaPolicies.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/producerQuotaPolicies', 'POST', apiParams, clientConfig);

    /**
     * Deletes a producer quota policy.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.force - Whether to force the deletion of the quota policy. If the policy deletion would decrease the default limit of any consumer tier by more than 10 percent, the call is rejected, as a safety measure to avoid accidentally decreasing quota too quickly. Setting the force parameter to true ignores this restriction.
     * @param {string} apiParams.forceJustification - If force option is set to true, force_justification is suggested to be set to log the reason in audit logs.
     * @param {string} apiParams.name - (Required) Required. The resource name of the policy to delete. An example name would be: `services/compute.googleapis.com/organizations/123/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion/producerQuotaPolicies/4a3f2c1d`
     * @param {boolean} apiParams.validateOnly - If set to true, validate the request, but do not actually update.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.services.consumerQuotaMetrics.limits.producerQuotaPolicies.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);

    this.services.consumerQuotaMetrics.limits.producerOverrides = {};

    /**
     * Creates a producer override. A producer override is applied by the owner or administrator of a service to increase or decrease the amount of quota a consumer of the service is allowed to use. To create multiple overrides at once, use ImportProducerOverrides instead. If an override with the specified dimensions already exists, this call will fail. To overwrite an existing override if one is already present ("upsert" semantics), use ImportProducerOverrides instead.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.force - Whether to force the creation of the quota override. Setting the force parameter to 'true' ignores all quota safety checks that would fail the request. QuotaSafetyCheck lists all such validations.
     * @param {string} apiParams.forceJustification - If force option is set to true, force_justification is suggested to be set to log the reason in audit logs.
     * @param {string} apiParams.forceOnly - The list of quota safety checks to ignore before the override mutation. Unlike 'force' field that ignores all the quota safety checks, the 'force_only' field ignores only the specified checks; other checks are still enforced. The 'force' and 'force_only' fields cannot both be set.
     * @param {string} apiParams.parent - (Required) The resource name of the parent quota limit, returned by a ListConsumerQuotaMetrics or GetConsumerQuotaMetric call. An example name would be: `services/compute.googleapis.com/projects/123/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.services.consumerQuotaMetrics.limits.producerOverrides.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/producerOverrides', 'POST', apiParams, clientConfig);

    /**
     * Deletes a producer override.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.force - Whether to force the deletion of the quota override. Setting the force parameter to 'true' ignores all quota safety checks that would fail the request. QuotaSafetyCheck lists all such validations.
     * @param {string} apiParams.forceJustification - If force option is set to true, force_justification is suggested to be set to log the reason in audit logs.
     * @param {string} apiParams.forceOnly - The list of quota safety checks to ignore before the override mutation. Unlike 'force' field that ignores all the quota safety checks, the 'force_only' field ignores only the specified checks; other checks are still enforced. The 'force' and 'force_only' fields cannot both be set.
     * @param {string} apiParams.name - (Required) The resource name of the override to delete. An example name would be: `services/compute.googleapis.com/projects/123/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion/producerOverrides/4a3f2c1d`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.services.consumerQuotaMetrics.limits.producerOverrides.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Updates a producer override.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.force - Whether to force the update of the quota override. Setting the force parameter to 'true' ignores all quota safety checks that would fail the request. QuotaSafetyCheck lists all such validations.
     * @param {string} apiParams.forceJustification - If force option is set to true, force_justification is suggested to be set to log the reason in audit logs.
     * @param {string} apiParams.forceOnly - The list of quota safety checks to ignore before the override mutation. Unlike 'force' field that ignores all the quota safety checks, the 'force_only' field ignores only the specified checks; other checks are still enforced. The 'force' and 'force_only' fields cannot both be set.
     * @param {string} apiParams.name - (Required) The resource name of the override to update. An example name would be: `services/compute.googleapis.com/projects/123/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion/producerOverrides/4a3f2c1d`
     * @param {string} apiParams.updateMask - Update only the specified fields. If unset, all modifiable fields will be updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.services.consumerQuotaMetrics.limits.producerOverrides.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Lists all producer overrides on this limit.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Requested size of the next page of data.
     * @param {string} apiParams.pageToken - Token identifying which result to start with; returned by a previous list call.
     * @param {string} apiParams.parent - (Required) The resource name of the parent quota limit, returned by a ListConsumerQuotaMetrics or GetConsumerQuotaMetric call. An example name would be: `services/compute.googleapis.com/projects/123/consumerQuotaMetrics/compute.googleapis.com%2Fcpus/limits/%2Fproject%2Fregion`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.services.consumerQuotaMetrics.limits.producerOverrides.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/producerOverrides', 'GET', apiParams, clientConfig);
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
