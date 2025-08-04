
/**
 * Google Apps Script client library for the Android Device Provisioning Partner API
 * Documentation URL: https://developers.google.com/zero-touch/
 * @class
 */
class Androiddeviceprovisioning {
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
    this._rootUrl = 'https://androiddeviceprovisioning.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.operations = {};

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.partners = {};

    this.partners.vendors = {};

    /**
     * Lists the vendors of the partner.
     * @param {integer} params.pageSize - The maximum number of results to be returned.
     * @param {string} params.pageToken - A token identifying a page of results returned by the server.
     * @param {string} params.parent - (Required) Required. The resource name in the format `partners/[PARTNER_ID]`.
     * @return {object} The API response object.
     */
    this.partners.vendors.list = (params) => this._makeRequest('v1/{+parent}/vendors', 'GET', params);

    this.partners.vendors.customers = {};

    /**
     * Lists the customers of the vendor.
     * @param {integer} params.pageSize - The maximum number of results to be returned.
     * @param {string} params.pageToken - A token identifying a page of results returned by the server.
     * @param {string} params.parent - (Required) Required. The resource name in the format `partners/[PARTNER_ID]/vendors/[VENDOR_ID]`.
     * @return {object} The API response object.
     */
    this.partners.vendors.customers.list = (params) => this._makeRequest('v1/{+parent}/customers', 'GET', params);

    this.partners.customers = {};

    /**
     * Creates a customer for zero-touch enrollment. After the method returns successfully, admin and owner roles can manage devices and EMM configs by calling API methods or using their zero-touch enrollment portal. The customer receives an email that welcomes them to zero-touch enrollment and explains how to sign into the portal.
     * @param {string} params.parent - (Required) Required. The parent resource ID in the format `partners/[PARTNER_ID]` that identifies the reseller.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.partners.customers.create = (params) => this._makeRequest('v1/{+parent}/customers', 'POST', params);

    /**
     * Lists the customers that are enrolled to the reseller identified by the `partnerId` argument. This list includes customers that the reseller created and customers that enrolled themselves using the portal.
     * @param {integer} params.pageSize - The maximum number of results to be returned. If not specified or 0, all the records are returned.
     * @param {string} params.pageToken - A token identifying a page of results returned by the server.
     * @param {string} params.partnerId - (Required) Required. The ID of the reseller partner.
     * @return {object} The API response object.
     */
    this.partners.customers.list = (params) => this._makeRequest('v1/partners/{+partnerId}/customers', 'GET', params);

    this.partners.devices = {};

    /**
     * Claims a device for a customer and adds it to zero-touch enrollment. If the device is already claimed by another customer, the call returns an error.
     * @param {string} params.partnerId - (Required) Required. The ID of the reseller partner.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.partners.devices.claim = (params) => this._makeRequest('v1/partners/{+partnerId}/devices:claim', 'POST', params);

    /**
     * Unclaims a device from a customer and removes it from zero-touch enrollment.
     * @param {string} params.partnerId - (Required) Required. The ID of the reseller partner.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.partners.devices.unclaim = (params) => this._makeRequest('v1/partners/{+partnerId}/devices:unclaim', 'POST', params);

    /**
     * Finds devices by hardware identifiers, such as IMEI.
     * @param {string} params.partnerId - (Required) Required. The ID of the reseller partner.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.partners.devices.findByIdentifier = (params) => this._makeRequest('v1/partners/{+partnerId}/devices:findByIdentifier', 'POST', params);

    /**
     * Finds devices claimed for customers. The results only contain devices registered to the reseller that's identified by the `partnerId` argument. The customer's devices purchased from other resellers don't appear in the results.
     * @param {string} params.partnerId - (Required) Required. The ID of the reseller partner.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.partners.devices.findByOwner = (params) => this._makeRequest('v1/partners/{+partnerId}/devices:findByOwner', 'POST', params);

    /**
     * Gets a device.
     * @param {string} params.name - (Required) Required. The device API resource name in the format `partners/[PARTNER_ID]/devices/[DEVICE_ID]`.
     * @return {object} The API response object.
     */
    this.partners.devices.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Gets a device's SIM lock state.
     * @param {string} params.partnerId - (Required) Required. The ID of the partner.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.partners.devices.getSimLockState = (params) => this._makeRequest('v1/partners/{+partnerId}/devices:getSimLockState', 'POST', params);

    /**
     * Updates reseller metadata associated with the device. Android devices only.
     * @param {string} params.deviceId - (Required) Required. The ID of the device.
     * @param {string} params.metadataOwnerId - (Required) Required. The owner of the newly set metadata. Set this to the partner ID.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.partners.devices.metadata = (params) => this._makeRequest('v1/partners/{+metadataOwnerId}/devices/{+deviceId}/metadata', 'POST', params);

    /**
     * Claims a batch of devices for a customer asynchronously. Adds the devices to zero-touch enrollment. To learn more, read [Long‑running batch operations](/zero-touch/guides/how-it-works#operations).
     * @param {string} params.partnerId - (Required) Required. The ID of the reseller partner.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.partners.devices.claimAsync = (params) => this._makeRequest('v1/partners/{+partnerId}/devices:claimAsync', 'POST', params);

    /**
     * Unclaims a batch of devices for a customer asynchronously. Removes the devices from zero-touch enrollment. To learn more, read [Long‑running batch operations](/zero-touch/guides/how-it-works#operations).
     * @param {string} params.partnerId - (Required) Required. The reseller partner ID.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.partners.devices.unclaimAsync = (params) => this._makeRequest('v1/partners/{+partnerId}/devices:unclaimAsync', 'POST', params);

    /**
     * Updates the reseller metadata attached to a batch of devices. This method updates devices asynchronously and returns an `Operation` that can be used to track progress. Read [Long‑running batch operations](/zero-touch/guides/how-it-works#operations). Android Devices only.
     * @param {string} params.partnerId - (Required) Required. The reseller partner ID.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.partners.devices.updateMetadataAsync = (params) => this._makeRequest('v1/partners/{+partnerId}/devices:updateMetadataAsync', 'POST', params);

    this.customers = {};

    /**
     * Lists the user's customer accounts.
     * @param {integer} params.pageSize - Required. The maximum number of customers to show in a page of results. A number between 1 and 100 (inclusive).
     * @param {string} params.pageToken - A token specifying which result page to return. This field has custom validations in ListCustomersRequestValidator
     * @return {object} The API response object.
     */
    this.customers.list = (params) => this._makeRequest('v1/customers', 'GET', params);

    this.customers.configurations = {};

    /**
     * Creates a new configuration. Once created, a customer can apply the configuration to devices.
     * @param {string} params.parent - (Required) Required. The customer that manages the configuration. An API resource name in the format `customers/[CUSTOMER_ID]`. This field has custom validation in CreateConfigurationRequestValidator
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.customers.configurations.create = (params) => this._makeRequest('v1/{+parent}/configurations', 'POST', params);

    /**
     * Gets the details of a configuration.
     * @param {string} params.name - (Required) Required. The configuration to get. An API resource name in the format `customers/[CUSTOMER_ID]/configurations/[CONFIGURATION_ID]`.
     * @return {object} The API response object.
     */
    this.customers.configurations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Updates a configuration's field values.
     * @param {string} params.name - (Required) Output only. The API resource name in the format `customers/[CUSTOMER_ID]/configurations/[CONFIGURATION_ID]`. Assigned by the server.
     * @param {string} params.updateMask - Required. The field mask applied to the target `Configuration` before updating the fields. To learn more about using field masks, read [FieldMask](/protocol-buffers/docs/reference/google.protobuf#fieldmask) in the Protocol Buffers documentation.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.customers.configurations.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes an unused configuration. The API call fails if the customer has devices with the configuration applied.
     * @param {string} params.name - (Required) Required. The configuration to delete. An API resource name in the format `customers/[CUSTOMER_ID]/configurations/[CONFIGURATION_ID]`. If the configuration is applied to any devices, the API call fails.
     * @return {object} The API response object.
     */
    this.customers.configurations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Lists a customer's configurations.
     * @param {string} params.parent - (Required) Required. The customer that manages the listed configurations. An API resource name in the format `customers/[CUSTOMER_ID]`.
     * @return {object} The API response object.
     */
    this.customers.configurations.list = (params) => this._makeRequest('v1/{+parent}/configurations', 'GET', params);

    this.customers.dpcs = {};

    /**
     * Lists the DPCs (device policy controllers) that support zero-touch enrollment.
     * @param {string} params.parent - (Required) Required. The customer that can use the DPCs in configurations. An API resource name in the format `customers/[CUSTOMER_ID]`.
     * @return {object} The API response object.
     */
    this.customers.dpcs.list = (params) => this._makeRequest('v1/{+parent}/dpcs', 'GET', params);

    this.customers.devices = {};

    /**
     * Lists a customer's devices.
     * @param {string} params.pageSize - Required. The maximum number of devices to show in a page of results. Must be between 1 and 100 inclusive.
     * @param {string} params.pageToken - A token specifying which result page to return.
     * @param {string} params.parent - (Required) Required. The customer managing the devices. An API resource name in the format `customers/[CUSTOMER_ID]`.
     * @return {object} The API response object.
     */
    this.customers.devices.list = (params) => this._makeRequest('v1/{+parent}/devices', 'GET', params);

    /**
     * Gets the details of a device.
     * @param {string} params.name - (Required) Required. The device to get. An API resource name in the format `customers/[CUSTOMER_ID]/devices/[DEVICE_ID]`.
     * @return {object} The API response object.
     */
    this.customers.devices.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Unclaims a device from a customer and removes it from zero-touch enrollment. After removing a device, a customer must contact their reseller to register the device into zero-touch enrollment again.
     * @param {string} params.parent - (Required) Required. The customer managing the device. An API resource name in the format `customers/[CUSTOMER_ID]`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.customers.devices.unclaim = (params) => this._makeRequest('v1/{+parent}/devices:unclaim', 'POST', params);

    /**
     * Applies a Configuration to the device to register the device for zero-touch enrollment. After applying a configuration to a device, the device automatically provisions itself on first boot, or next factory reset.
     * @param {string} params.parent - (Required) Required. The customer managing the device. An API resource name in the format `customers/[CUSTOMER_ID]`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.customers.devices.applyConfiguration = (params) => this._makeRequest('v1/{+parent}/devices:applyConfiguration', 'POST', params);

    /**
     * Removes a configuration from device.
     * @param {string} params.parent - (Required) Required. The customer managing the device in the format `customers/[CUSTOMER_ID]`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.customers.devices.removeConfiguration = (params) => this._makeRequest('v1/{+parent}/devices:removeConfiguration', 'POST', params);
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
