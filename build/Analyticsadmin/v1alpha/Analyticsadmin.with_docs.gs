
/**
 * Google Apps Script client library for the Google Analytics Admin API
 * Documentation URL: http://code.google.com/apis/analytics/docs/mgmt/home.html
 * @class
 */
class Analyticsadmin {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://analyticsadmin.googleapis.com/';
    this._servicePath = '';


    this.accounts = {};

    /**
     * Lookup for a single Account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the account to lookup. Format: accounts/{account} Example: "accounts/100"
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Returns all accounts accessible by the caller. Note that these accounts might not currently have GA properties. Soft-deleted (ie: "trashed") accounts are excluded by default. Returns an empty list if no relevant accounts are found.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of resources to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)
     * @param {string} apiParams.pageToken - A page token, received from a previous `ListAccounts` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAccounts` must match the call that provided the page token.
     * @param {boolean} apiParams.showDeleted - Whether to include soft-deleted (ie: "trashed") Accounts in the results. Accounts can be inspected to determine whether they are deleted or not.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/accounts', 'GET', apiParams, clientConfig);

    /**
     * Marks target Account as soft-deleted (ie: "trashed") and returns it. This API does not have a method to restore soft-deleted accounts. However, they can be restored using the Trash Can UI. If the accounts are not restored before the expiration time, the account and all child resources (eg: Properties, GoogleAdsLinks, Streams, AccessBindings) will be permanently purged. https://support.google.com/analytics/answer/6154772 Returns an error if the target is not found.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the Account to soft-delete. Format: accounts/{account} Example: "accounts/100"
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Updates an account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Output only. Resource name of this account. Format: accounts/{account} Example: "accounts/100"
     * @param {string} apiParams.updateMask - Required. The list of fields to be updated. Field names must be in snake case (for example, "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Requests a ticket for creating an account.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.provisionAccountTicket = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/accounts:provisionAccountTicket', 'POST', apiParams, clientConfig);

    /**
     * Get data sharing settings on an account. Data sharing settings are singletons.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the settings to lookup. Format: accounts/{account}/dataSharingSettings Example: `accounts/1000/dataSharingSettings`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.getDataSharingSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Searches through all changes to an account or its children given the specified set of filters. Only returns the subset of changes supported by the API. The UI may return additional changes.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.account - (Required) Required. The account resource for which to return change history resources. Format: accounts/{account} Example: `accounts/100`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.searchChangeHistoryEvents = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+account}:searchChangeHistoryEvents', 'POST', apiParams, clientConfig);

    /**
     * Returns a customized report of data access records. The report provides records of each time a user reads Google Analytics reporting data. Access records are retained for up to 2 years. Data Access Reports can be requested for a property. Reports may be requested for any property, but dimensions that aren't related to quota can only be requested on Google Analytics 360 properties. This method is only available to Administrators. These data access records include GA UI Reporting, GA UI Explorations, GA Data API, and other products like Firebase & Admob that can retrieve data from Google Analytics through a linkage. These records don't include property configuration changes like adding a stream or changing a property's time zone. For configuration change history, see [searchChangeHistoryEvents](https://developers.google.com/analytics/devguides/config/admin/v1/rest/v1alpha/accounts/searchChangeHistoryEvents). To give your feedback on this API, complete the [Google Analytics Access Reports feedback](https://docs.google.com/forms/d/e/1FAIpQLSdmEBUrMzAEdiEKk5TV5dEHvDUZDRlgWYdQdAeSdtR4hVjEhw/viewform) form.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.entity - (Required) The Data Access Report supports requesting at the property level or account level. If requested at the account level, Data Access Reports include all access for all properties under that account. To request at the property level, entity should be for example 'properties/123' if "123" is your Google Analytics property ID. To request at the account level, entity should be for example 'accounts/1234' if "1234" is your Google Analytics Account ID.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.runAccessReport = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+entity}:runAccessReport', 'POST', apiParams, clientConfig);

    this.accounts.accessBindings = {};

    /**
     * Creates an access binding on an account or property.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. Formats: - accounts/{account} - properties/{property}
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.accessBindings.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/accessBindings', 'POST', apiParams, clientConfig);

    /**
     * Gets information about an access binding.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the access binding to retrieve. Formats: - accounts/{account}/accessBindings/{accessBinding} - properties/{property}/accessBindings/{accessBinding}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.accessBindings.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Updates an access binding on an account or property.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Output only. Resource name of this binding. Format: accounts/{account}/accessBindings/{access_binding} or properties/{property}/accessBindings/{access_binding} Example: "accounts/100/accessBindings/200"
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.accessBindings.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes an access binding on an account or property.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Formats: - accounts/{account}/accessBindings/{accessBinding} - properties/{property}/accessBindings/{accessBinding}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.accessBindings.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Lists all access bindings on an account or property.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of access bindings to return. The service may return fewer than this value. If unspecified, at most 200 access bindings will be returned. The maximum value is 500; values above 500 will be coerced to 500.
     * @param {string} apiParams.pageToken - A page token, received from a previous `ListAccessBindings` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAccessBindings` must match the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. Formats: - accounts/{account} - properties/{property}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.accessBindings.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/accessBindings', 'GET', apiParams, clientConfig);

    /**
     * Creates information about multiple access bindings to an account or property. This method is transactional. If any AccessBinding cannot be created, none of the AccessBindings will be created.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The account or property that owns the access bindings. The parent field in the CreateAccessBindingRequest messages must either be empty or match this field. Formats: - accounts/{account} - properties/{property}
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.accessBindings.batchCreate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/accessBindings:batchCreate', 'POST', apiParams, clientConfig);

    /**
     * Gets information about multiple access bindings to an account or property.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.names - Required. The names of the access bindings to retrieve. A maximum of 1000 access bindings can be retrieved in a batch. Formats: - accounts/{account}/accessBindings/{accessBinding} - properties/{property}/accessBindings/{accessBinding}
     * @param {string} apiParams.parent - (Required) Required. The account or property that owns the access bindings. The parent of all provided values for the 'names' field must match this field. Formats: - accounts/{account} - properties/{property}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.accessBindings.batchGet = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/accessBindings:batchGet', 'GET', apiParams, clientConfig);

    /**
     * Updates information about multiple access bindings to an account or property.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The account or property that owns the access bindings. The parent of all provided AccessBinding in UpdateAccessBindingRequest messages must match this field. Formats: - accounts/{account} - properties/{property}
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.accessBindings.batchUpdate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/accessBindings:batchUpdate', 'POST', apiParams, clientConfig);

    /**
     * Deletes information about multiple users' links to an account or property.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The account or property that owns the access bindings. The parent of all provided values for the 'names' field in DeleteAccessBindingRequest messages must match this field. Formats: - accounts/{account} - properties/{property}
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accounts.accessBindings.batchDelete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/accessBindings:batchDelete', 'POST', apiParams, clientConfig);

    this.accountSummaries = {};

    /**
     * Returns summaries of all accounts accessible by the caller.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of AccountSummary resources to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)
     * @param {string} apiParams.pageToken - A page token, received from a previous `ListAccountSummaries` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAccountSummaries` must match the call that provided the page token.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.accountSummaries.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/accountSummaries', 'GET', apiParams, clientConfig);

    this.properties = {};

    /**
     * Lookup for a single GA Property.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the property to lookup. Format: properties/{property_id} Example: "properties/1000"
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Returns child Properties under the specified parent Account. Properties will be excluded if the caller does not have access. Soft-deleted (ie: "trashed") properties are excluded by default. Returns an empty list if no relevant properties are found.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Required. An expression for filtering the results of the request. Fields eligible for filtering are: `parent:`(The resource name of the parent account/property) or `ancestor:`(The resource name of the parent account) or `firebase_project:`(The id or number of the linked firebase project). Some examples of filters: ``` | Filter | Description | |-----------------------------|-------------------------------------------| | parent:accounts/123 | The account with account id: 123. | | parent:properties/123 | The property with property id: 123. | | ancestor:accounts/123 | The account with account id: 123. | | firebase_project:project-id | The firebase project with id: project-id. | | firebase_project:123 | The firebase project with number: 123. | ```
     * @param {integer} apiParams.pageSize - The maximum number of resources to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)
     * @param {string} apiParams.pageToken - A page token, received from a previous `ListProperties` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListProperties` must match the call that provided the page token.
     * @param {boolean} apiParams.showDeleted - Whether to include soft-deleted (ie: "trashed") Properties in the results. Properties can be inspected to determine whether they are deleted or not.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/properties', 'GET', apiParams, clientConfig);

    /**
     * Creates a Google Analytics property with the specified location and attributes.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/properties', 'POST', apiParams, clientConfig);

    /**
     * Marks target Property as soft-deleted (ie: "trashed") and returns it. This API does not have a method to restore soft-deleted properties. However, they can be restored using the Trash Can UI. If the properties are not restored before the expiration time, the Property and all child resources (eg: GoogleAdsLinks, Streams, AccessBindings) will be permanently purged. https://support.google.com/analytics/answer/6154772 Returns an error if the target is not found.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the Property to soft-delete. Format: properties/{property_id} Example: "properties/1000"
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Updates a property.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Output only. Resource name of this property. Format: properties/{property_id} Example: "properties/1000"
     * @param {string} apiParams.updateMask - Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Acknowledges the terms of user data collection for the specified property. This acknowledgement must be completed (either in the Google Analytics UI or through this API) before MeasurementProtocolSecret resources may be created.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.property - (Required) Required. The property for which to acknowledge user data collection.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.acknowledgeUserDataCollection = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+property}:acknowledgeUserDataCollection', 'POST', apiParams, clientConfig);

    /**
     * Lookup for Google Signals settings for a property.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the google signals settings to retrieve. Format: properties/{property}/googleSignalsSettings
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.getGoogleSignalsSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Updates Google Signals settings for a property.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Output only. Resource name of this setting. Format: properties/{property_id}/googleSignalsSettings Example: "properties/1000/googleSignalsSettings"
     * @param {string} apiParams.updateMask - Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.updateGoogleSignalsSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Returns the singleton data retention settings for this property.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the settings to lookup. Format: properties/{property}/dataRetentionSettings Example: "properties/1000/dataRetentionSettings"
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.getDataRetentionSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Updates the singleton data retention settings for this property.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Output only. Resource name for this DataRetentionSetting resource. Format: properties/{property}/dataRetentionSettings
     * @param {string} apiParams.updateMask - Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.updateDataRetentionSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Lookup for a AttributionSettings singleton.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the attribution settings to retrieve. Format: properties/{property}/attributionSettings
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.getAttributionSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Updates attribution settings on a property.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Output only. Resource name of this attribution settings resource. Format: properties/{property_id}/attributionSettings Example: "properties/1000/attributionSettings"
     * @param {string} apiParams.updateMask - Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.updateAttributionSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Returns a customized report of data access records. The report provides records of each time a user reads Google Analytics reporting data. Access records are retained for up to 2 years. Data Access Reports can be requested for a property. Reports may be requested for any property, but dimensions that aren't related to quota can only be requested on Google Analytics 360 properties. This method is only available to Administrators. These data access records include GA UI Reporting, GA UI Explorations, GA Data API, and other products like Firebase & Admob that can retrieve data from Google Analytics through a linkage. These records don't include property configuration changes like adding a stream or changing a property's time zone. For configuration change history, see [searchChangeHistoryEvents](https://developers.google.com/analytics/devguides/config/admin/v1/rest/v1alpha/accounts/searchChangeHistoryEvents). To give your feedback on this API, complete the [Google Analytics Access Reports feedback](https://docs.google.com/forms/d/e/1FAIpQLSdmEBUrMzAEdiEKk5TV5dEHvDUZDRlgWYdQdAeSdtR4hVjEhw/viewform) form.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.entity - (Required) The Data Access Report supports requesting at the property level or account level. If requested at the account level, Data Access Reports include all access for all properties under that account. To request at the property level, entity should be for example 'properties/123' if "123" is your Google Analytics property ID. To request at the account level, entity should be for example 'accounts/1234' if "1234" is your Google Analytics Account ID.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.runAccessReport = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+entity}:runAccessReport', 'POST', apiParams, clientConfig);

    /**
     * Create a roll-up property and all roll-up property source links.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.createRollupProperty = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/properties:createRollupProperty', 'POST', apiParams, clientConfig);

    /**
     * Create a subproperty and a subproperty event filter that applies to the created subproperty.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.provisionSubproperty = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/properties:provisionSubproperty', 'POST', apiParams, clientConfig);

    /**
     * Submits a request for user deletion for a property.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the property to submit user deletion for.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.submitUserDeletion = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}:submitUserDeletion', 'POST', apiParams, clientConfig);

    /**
     * Returns the reporting identity settings for this property.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the settings to lookup. Format: properties/{property}/reportingIdentitySettings Example: "properties/1000/reportingIdentitySettings"
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.getReportingIdentitySettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);

    this.properties.firebaseLinks = {};

    /**
     * Creates a FirebaseLink. Properties can have at most one FirebaseLink.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. Format: properties/{property_id} Example: `properties/1234`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.firebaseLinks.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/firebaseLinks', 'POST', apiParams, clientConfig);

    /**
     * Deletes a FirebaseLink on a property
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Format: properties/{property_id}/firebaseLinks/{firebase_link_id} Example: `properties/1234/firebaseLinks/5678`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.firebaseLinks.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Lists FirebaseLinks on a property. Properties can have at most one FirebaseLink.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of resources to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)
     * @param {string} apiParams.pageToken - A page token, received from a previous `ListFirebaseLinks` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListFirebaseLinks` must match the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. Format: properties/{property_id} Example: `properties/1234`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.firebaseLinks.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/firebaseLinks', 'GET', apiParams, clientConfig);

    this.properties.dataStreams = {};

    /**
     * Returns the Site Tag for the specified web stream. Site Tags are immutable singletons.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the site tag to lookup. Note that site tags are singletons and do not have unique IDs. Format: properties/{property_id}/dataStreams/{stream_id}/globalSiteTag Example: `properties/123/dataStreams/456/globalSiteTag`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.dataStreams.getGlobalSiteTag = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Creates a DataStream.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. Example format: properties/1234
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.dataStreams.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/dataStreams', 'POST', apiParams, clientConfig);

    /**
     * Deletes a DataStream on a property.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the DataStream to delete. Example format: properties/1234/dataStreams/5678
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.dataStreams.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Updates a DataStream on a property.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Output only. Resource name of this Data Stream. Format: properties/{property_id}/dataStreams/{stream_id} Example: "properties/1000/dataStreams/2000"
     * @param {string} apiParams.updateMask - Required. The list of fields to be updated. Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.dataStreams.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Lists DataStreams on a property.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum).
     * @param {string} apiParams.pageToken - A page token, received from a previous `ListDataStreams` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListDataStreams` must match the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. Example format: properties/1234
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.dataStreams.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/dataStreams', 'GET', apiParams, clientConfig);

    /**
     * Lookup for a single DataStream.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the DataStream to get. Example format: properties/1234/dataStreams/5678
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.dataStreams.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Returns the enhanced measurement settings for this data stream. Note that the stream must enable enhanced measurement for these settings to take effect.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the settings to lookup. Format: properties/{property}/dataStreams/{data_stream}/enhancedMeasurementSettings Example: "properties/1000/dataStreams/2000/enhancedMeasurementSettings"
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.dataStreams.getEnhancedMeasurementSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Updates the enhanced measurement settings for this data stream. Note that the stream must enable enhanced measurement for these settings to take effect.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Output only. Resource name of the Enhanced Measurement Settings. Format: properties/{property_id}/dataStreams/{data_stream}/enhancedMeasurementSettings Example: "properties/1000/dataStreams/2000/enhancedMeasurementSettings"
     * @param {string} apiParams.updateMask - Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.dataStreams.updateEnhancedMeasurementSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Updates a DataRedactionSettings on a property.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Output only. Name of this Data Redaction Settings resource. Format: properties/{property_id}/dataStreams/{data_stream}/dataRedactionSettings Example: "properties/1000/dataStreams/2000/dataRedactionSettings"
     * @param {string} apiParams.updateMask - Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.dataStreams.updateDataRedactionSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Lookup for a single DataRedactionSettings.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the settings to lookup. Format: properties/{property}/dataStreams/{data_stream}/dataRedactionSettings Example: "properties/1000/dataStreams/2000/dataRedactionSettings"
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.dataStreams.getDataRedactionSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);

    this.properties.dataStreams.measurementProtocolSecrets = {};

    /**
     * Lookup for a single MeasurementProtocolSecret.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the measurement protocol secret to lookup. Format: properties/{property}/dataStreams/{dataStream}/measurementProtocolSecrets/{measurementProtocolSecret}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.dataStreams.measurementProtocolSecrets.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Returns child MeasurementProtocolSecrets under the specified parent Property.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of resources to return. If unspecified, at most 10 resources will be returned. The maximum value is 10. Higher values will be coerced to the maximum.
     * @param {string} apiParams.pageToken - A page token, received from a previous `ListMeasurementProtocolSecrets` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListMeasurementProtocolSecrets` must match the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. The resource name of the parent stream. Format: properties/{property}/dataStreams/{dataStream}/measurementProtocolSecrets
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.dataStreams.measurementProtocolSecrets.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/measurementProtocolSecrets', 'GET', apiParams, clientConfig);

    /**
     * Creates a measurement protocol secret.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent resource where this secret will be created. Format: properties/{property}/dataStreams/{dataStream}
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.dataStreams.measurementProtocolSecrets.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/measurementProtocolSecrets', 'POST', apiParams, clientConfig);

    /**
     * Deletes target MeasurementProtocolSecret.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the MeasurementProtocolSecret to delete. Format: properties/{property}/dataStreams/{dataStream}/measurementProtocolSecrets/{measurementProtocolSecret}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.dataStreams.measurementProtocolSecrets.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Updates a measurement protocol secret.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Output only. Resource name of this secret. This secret may be a child of any type of stream. Format: properties/{property}/dataStreams/{dataStream}/measurementProtocolSecrets/{measurementProtocolSecret}
     * @param {string} apiParams.updateMask - Required. The list of fields to be updated. Omitted fields will not be updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.dataStreams.measurementProtocolSecrets.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);

    this.properties.dataStreams.sKAdNetworkConversionValueSchema = {};

    /**
     * Looks up a single SKAdNetworkConversionValueSchema.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The resource name of SKAdNetwork conversion value schema to look up. Format: properties/{property}/dataStreams/{dataStream}/sKAdNetworkConversionValueSchema/{skadnetwork_conversion_value_schema}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.dataStreams.sKAdNetworkConversionValueSchema.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Creates a SKAdNetworkConversionValueSchema.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent resource where this schema will be created. Format: properties/{property}/dataStreams/{dataStream}
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.dataStreams.sKAdNetworkConversionValueSchema.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/sKAdNetworkConversionValueSchema', 'POST', apiParams, clientConfig);

    /**
     * Deletes target SKAdNetworkConversionValueSchema.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the SKAdNetworkConversionValueSchema to delete. Format: properties/{property}/dataStreams/{dataStream}/sKAdNetworkConversionValueSchema/{skadnetwork_conversion_value_schema}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.dataStreams.sKAdNetworkConversionValueSchema.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Updates a SKAdNetworkConversionValueSchema.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Output only. Resource name of the schema. This will be child of ONLY an iOS stream, and there can be at most one such child under an iOS stream. Format: properties/{property}/dataStreams/{dataStream}/sKAdNetworkConversionValueSchema
     * @param {string} apiParams.updateMask - Required. The list of fields to be updated. Omitted fields will not be updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.dataStreams.sKAdNetworkConversionValueSchema.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Lists SKAdNetworkConversionValueSchema on a stream. Properties can have at most one SKAdNetworkConversionValueSchema.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of resources to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)
     * @param {string} apiParams.pageToken - A page token, received from a previous `ListSKAdNetworkConversionValueSchemas` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListSKAdNetworkConversionValueSchema` must match the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. The DataStream resource to list schemas for. Format: properties/{property_id}/dataStreams/{dataStream} Example: properties/1234/dataStreams/5678
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.dataStreams.sKAdNetworkConversionValueSchema.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/sKAdNetworkConversionValueSchema', 'GET', apiParams, clientConfig);

    this.properties.dataStreams.eventCreateRules = {};

    /**
     * Lookup for a single EventCreateRule.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the EventCreateRule to get. Example format: properties/123/dataStreams/456/eventCreateRules/789
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.dataStreams.eventCreateRules.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists EventCreateRules on a web data stream.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum).
     * @param {string} apiParams.pageToken - A page token, received from a previous `ListEventCreateRules` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListEventCreateRules` must match the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. Example format: properties/123/dataStreams/456
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.dataStreams.eventCreateRules.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/eventCreateRules', 'GET', apiParams, clientConfig);

    /**
     * Creates an EventCreateRule.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. Example format: properties/123/dataStreams/456
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.dataStreams.eventCreateRules.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/eventCreateRules', 'POST', apiParams, clientConfig);

    /**
     * Updates an EventCreateRule.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Output only. Resource name for this EventCreateRule resource. Format: properties/{property}/dataStreams/{data_stream}/eventCreateRules/{event_create_rule}
     * @param {string} apiParams.updateMask - Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.dataStreams.eventCreateRules.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes an EventCreateRule.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Example format: properties/123/dataStreams/456/eventCreateRules/789
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.dataStreams.eventCreateRules.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'DELETE', apiParams, clientConfig);

    this.properties.dataStreams.eventEditRules = {};

    /**
     * Lookup for a single EventEditRule.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the EventEditRule to get. Example format: properties/123/dataStreams/456/eventEditRules/789
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.dataStreams.eventEditRules.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists EventEditRules on a web data stream.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum).
     * @param {string} apiParams.pageToken - Optional. A page token, received from a previous `ListEventEditRules` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListEventEditRules` must match the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. Example format: properties/123/dataStreams/456
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.dataStreams.eventEditRules.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/eventEditRules', 'GET', apiParams, clientConfig);

    /**
     * Creates an EventEditRule.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. Example format: properties/123/dataStreams/456
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.dataStreams.eventEditRules.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/eventEditRules', 'POST', apiParams, clientConfig);

    /**
     * Updates an EventEditRule.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Identifier. Resource name for this EventEditRule resource. Format: properties/{property}/dataStreams/{data_stream}/eventEditRules/{event_edit_rule}
     * @param {string} apiParams.updateMask - Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.dataStreams.eventEditRules.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes an EventEditRule.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Example format: properties/123/dataStreams/456/eventEditRules/789
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.dataStreams.eventEditRules.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Changes the processing order of event edit rules on the specified stream.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. Example format: properties/123/dataStreams/456
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.dataStreams.eventEditRules.reorder = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/eventEditRules:reorder', 'POST', apiParams, clientConfig);

    this.properties.googleAdsLinks = {};

    /**
     * Creates a GoogleAdsLink.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. Example format: properties/1234
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.googleAdsLinks.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/googleAdsLinks', 'POST', apiParams, clientConfig);

    /**
     * Updates a GoogleAdsLink on a property
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Output only. Format: properties/{propertyId}/googleAdsLinks/{googleAdsLinkId} Note: googleAdsLinkId is not the Google Ads customer ID.
     * @param {string} apiParams.updateMask - Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.googleAdsLinks.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes a GoogleAdsLink on a property
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Example format: properties/1234/googleAdsLinks/5678
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.googleAdsLinks.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Lists GoogleAdsLinks on a property.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum).
     * @param {string} apiParams.pageToken - A page token, received from a previous `ListGoogleAdsLinks` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListGoogleAdsLinks` must match the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. Example format: properties/1234
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.googleAdsLinks.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/googleAdsLinks', 'GET', apiParams, clientConfig);

    this.properties.conversionEvents = {};

    /**
     * Deprecated: Use `CreateKeyEvent` instead. Creates a conversion event with the specified attributes.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The resource name of the parent property where this conversion event will be created. Format: properties/123
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.conversionEvents.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/conversionEvents', 'POST', apiParams, clientConfig);

    /**
     * Deprecated: Use `UpdateKeyEvent` instead. Updates a conversion event with the specified attributes.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Output only. Resource name of this conversion event. Format: properties/{property}/conversionEvents/{conversion_event}
     * @param {string} apiParams.updateMask - Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.conversionEvents.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deprecated: Use `GetKeyEvent` instead. Retrieve a single conversion event.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The resource name of the conversion event to retrieve. Format: properties/{property}/conversionEvents/{conversion_event} Example: "properties/123/conversionEvents/456"
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.conversionEvents.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Deprecated: Use `DeleteKeyEvent` instead. Deletes a conversion event in a property.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The resource name of the conversion event to delete. Format: properties/{property}/conversionEvents/{conversion_event} Example: "properties/123/conversionEvents/456"
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.conversionEvents.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Deprecated: Use `ListKeyEvents` instead. Returns a list of conversion events in the specified parent property. Returns an empty list if no conversion events are found.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)
     * @param {string} apiParams.pageToken - A page token, received from a previous `ListConversionEvents` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListConversionEvents` must match the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. The resource name of the parent property. Example: 'properties/123'
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.conversionEvents.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/conversionEvents', 'GET', apiParams, clientConfig);

    this.properties.keyEvents = {};

    /**
     * Creates a Key Event.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The resource name of the parent property where this Key Event will be created. Format: properties/123
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.keyEvents.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/keyEvents', 'POST', apiParams, clientConfig);

    /**
     * Updates a Key Event.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Output only. Resource name of this key event. Format: properties/{property}/keyEvents/{key_event}
     * @param {string} apiParams.updateMask - Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.keyEvents.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Retrieve a single Key Event.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The resource name of the Key Event to retrieve. Format: properties/{property}/keyEvents/{key_event} Example: "properties/123/keyEvents/456"
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.keyEvents.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Deletes a Key Event.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The resource name of the Key Event to delete. Format: properties/{property}/keyEvents/{key_event} Example: "properties/123/keyEvents/456"
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.keyEvents.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Returns a list of Key Events in the specified parent property. Returns an empty list if no Key Events are found.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)
     * @param {string} apiParams.pageToken - A page token, received from a previous `ListKeyEvents` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListKeyEvents` must match the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. The resource name of the parent property. Example: 'properties/123'
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.keyEvents.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/keyEvents', 'GET', apiParams, clientConfig);

    this.properties.displayVideo360AdvertiserLinks = {};

    /**
     * Look up a single DisplayVideo360AdvertiserLink
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the DisplayVideo360AdvertiserLink to get. Example format: properties/1234/displayVideo360AdvertiserLink/5678
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.displayVideo360AdvertiserLinks.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists all DisplayVideo360AdvertiserLinks on a property.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum).
     * @param {string} apiParams.pageToken - A page token, received from a previous `ListDisplayVideo360AdvertiserLinks` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListDisplayVideo360AdvertiserLinks` must match the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. Example format: properties/1234
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.displayVideo360AdvertiserLinks.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/displayVideo360AdvertiserLinks', 'GET', apiParams, clientConfig);

    /**
     * Creates a DisplayVideo360AdvertiserLink. This can only be utilized by users who have proper authorization both on the Google Analytics property and on the Display & Video 360 advertiser. Users who do not have access to the Display & Video 360 advertiser should instead seek to create a DisplayVideo360LinkProposal.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. Example format: properties/1234
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.displayVideo360AdvertiserLinks.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/displayVideo360AdvertiserLinks', 'POST', apiParams, clientConfig);

    /**
     * Deletes a DisplayVideo360AdvertiserLink on a property.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the DisplayVideo360AdvertiserLink to delete. Example format: properties/1234/displayVideo360AdvertiserLinks/5678
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.displayVideo360AdvertiserLinks.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Updates a DisplayVideo360AdvertiserLink on a property.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Output only. The resource name for this DisplayVideo360AdvertiserLink resource. Format: properties/{propertyId}/displayVideo360AdvertiserLinks/{linkId} Note: linkId is not the Display & Video 360 Advertiser ID
     * @param {string} apiParams.updateMask - Required. The list of fields to be updated. Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.displayVideo360AdvertiserLinks.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);

    this.properties.displayVideo360AdvertiserLinkProposals = {};

    /**
     * Lookup for a single DisplayVideo360AdvertiserLinkProposal.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the DisplayVideo360AdvertiserLinkProposal to get. Example format: properties/1234/displayVideo360AdvertiserLinkProposals/5678
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.displayVideo360AdvertiserLinkProposals.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists DisplayVideo360AdvertiserLinkProposals on a property.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum).
     * @param {string} apiParams.pageToken - A page token, received from a previous `ListDisplayVideo360AdvertiserLinkProposals` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListDisplayVideo360AdvertiserLinkProposals` must match the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. Example format: properties/1234
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.displayVideo360AdvertiserLinkProposals.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/displayVideo360AdvertiserLinkProposals', 'GET', apiParams, clientConfig);

    /**
     * Creates a DisplayVideo360AdvertiserLinkProposal.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. Example format: properties/1234
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.displayVideo360AdvertiserLinkProposals.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/displayVideo360AdvertiserLinkProposals', 'POST', apiParams, clientConfig);

    /**
     * Deletes a DisplayVideo360AdvertiserLinkProposal on a property. This can only be used on cancelled proposals.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the DisplayVideo360AdvertiserLinkProposal to delete. Example format: properties/1234/displayVideo360AdvertiserLinkProposals/5678
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.displayVideo360AdvertiserLinkProposals.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Approves a DisplayVideo360AdvertiserLinkProposal. The DisplayVideo360AdvertiserLinkProposal will be deleted and a new DisplayVideo360AdvertiserLink will be created.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the DisplayVideo360AdvertiserLinkProposal to approve. Example format: properties/1234/displayVideo360AdvertiserLinkProposals/5678
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.displayVideo360AdvertiserLinkProposals.approve = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}:approve', 'POST', apiParams, clientConfig);

    /**
     * Cancels a DisplayVideo360AdvertiserLinkProposal. Cancelling can mean either: - Declining a proposal initiated from Display & Video 360 - Withdrawing a proposal initiated from Google Analytics After being cancelled, a proposal will eventually be deleted automatically.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the DisplayVideo360AdvertiserLinkProposal to cancel. Example format: properties/1234/displayVideo360AdvertiserLinkProposals/5678
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.displayVideo360AdvertiserLinkProposals.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}:cancel', 'POST', apiParams, clientConfig);

    this.properties.customDimensions = {};

    /**
     * Creates a CustomDimension.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. Example format: properties/1234
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.customDimensions.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/customDimensions', 'POST', apiParams, clientConfig);

    /**
     * Updates a CustomDimension on a property.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Output only. Resource name for this CustomDimension resource. Format: properties/{property}/customDimensions/{customDimension}
     * @param {string} apiParams.updateMask - Required. The list of fields to be updated. Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.customDimensions.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Lists CustomDimensions on a property.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum).
     * @param {string} apiParams.pageToken - A page token, received from a previous `ListCustomDimensions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListCustomDimensions` must match the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. Example format: properties/1234
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.customDimensions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/customDimensions', 'GET', apiParams, clientConfig);

    /**
     * Archives a CustomDimension on a property.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the CustomDimension to archive. Example format: properties/1234/customDimensions/5678
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.customDimensions.archive = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}:archive', 'POST', apiParams, clientConfig);

    /**
     * Lookup for a single CustomDimension.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the CustomDimension to get. Example format: properties/1234/customDimensions/5678
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.customDimensions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);

    this.properties.customMetrics = {};

    /**
     * Creates a CustomMetric.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. Example format: properties/1234
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.customMetrics.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/customMetrics', 'POST', apiParams, clientConfig);

    /**
     * Updates a CustomMetric on a property.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Output only. Resource name for this CustomMetric resource. Format: properties/{property}/customMetrics/{customMetric}
     * @param {string} apiParams.updateMask - Required. The list of fields to be updated. Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.customMetrics.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Lists CustomMetrics on a property.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum).
     * @param {string} apiParams.pageToken - A page token, received from a previous `ListCustomMetrics` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListCustomMetrics` must match the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. Example format: properties/1234
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.customMetrics.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/customMetrics', 'GET', apiParams, clientConfig);

    /**
     * Archives a CustomMetric on a property.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the CustomMetric to archive. Example format: properties/1234/customMetrics/5678
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.customMetrics.archive = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}:archive', 'POST', apiParams, clientConfig);

    /**
     * Lookup for a single CustomMetric.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the CustomMetric to get. Example format: properties/1234/customMetrics/5678
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.customMetrics.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);

    this.properties.audiences = {};

    /**
     * Lookup for a single Audience. Audiences created before 2020 may not be supported. Default audiences will not show filter definitions.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the Audience to get. Example format: properties/1234/audiences/5678
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.audiences.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists Audiences on a property. Audiences created before 2020 may not be supported. Default audiences will not show filter definitions.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum).
     * @param {string} apiParams.pageToken - A page token, received from a previous `ListAudiences` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAudiences` must match the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. Example format: properties/1234
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.audiences.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/audiences', 'GET', apiParams, clientConfig);

    /**
     * Creates an Audience.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. Example format: properties/1234
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.audiences.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/audiences', 'POST', apiParams, clientConfig);

    /**
     * Updates an Audience on a property.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Output only. The resource name for this Audience resource. Format: properties/{propertyId}/audiences/{audienceId}
     * @param {string} apiParams.updateMask - Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.audiences.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Archives an Audience on a property.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Example format: properties/1234/audiences/5678
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.audiences.archive = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}:archive', 'POST', apiParams, clientConfig);

    this.properties.searchAds360Links = {};

    /**
     * Look up a single SearchAds360Link
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the SearchAds360Link to get. Example format: properties/1234/SearchAds360Link/5678
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.searchAds360Links.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists all SearchAds360Links on a property.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum).
     * @param {string} apiParams.pageToken - A page token, received from a previous `ListSearchAds360Links` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListSearchAds360Links` must match the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. Example format: properties/1234
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.searchAds360Links.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/searchAds360Links', 'GET', apiParams, clientConfig);

    /**
     * Creates a SearchAds360Link.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. Example format: properties/1234
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.searchAds360Links.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/searchAds360Links', 'POST', apiParams, clientConfig);

    /**
     * Deletes a SearchAds360Link on a property.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the SearchAds360Link to delete. Example format: properties/1234/SearchAds360Links/5678
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.searchAds360Links.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Updates a SearchAds360Link on a property.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Output only. The resource name for this SearchAds360Link resource. Format: properties/{propertyId}/searchAds360Links/{linkId} Note: linkId is not the Search Ads 360 advertiser ID
     * @param {string} apiParams.updateMask - Required. The list of fields to be updated. Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.searchAds360Links.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);

    this.properties.accessBindings = {};

    /**
     * Creates an access binding on an account or property.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. Formats: - accounts/{account} - properties/{property}
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.accessBindings.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/accessBindings', 'POST', apiParams, clientConfig);

    /**
     * Gets information about an access binding.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the access binding to retrieve. Formats: - accounts/{account}/accessBindings/{accessBinding} - properties/{property}/accessBindings/{accessBinding}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.accessBindings.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Updates an access binding on an account or property.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Output only. Resource name of this binding. Format: accounts/{account}/accessBindings/{access_binding} or properties/{property}/accessBindings/{access_binding} Example: "accounts/100/accessBindings/200"
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.accessBindings.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes an access binding on an account or property.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Formats: - accounts/{account}/accessBindings/{accessBinding} - properties/{property}/accessBindings/{accessBinding}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.accessBindings.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Lists all access bindings on an account or property.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of access bindings to return. The service may return fewer than this value. If unspecified, at most 200 access bindings will be returned. The maximum value is 500; values above 500 will be coerced to 500.
     * @param {string} apiParams.pageToken - A page token, received from a previous `ListAccessBindings` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAccessBindings` must match the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. Formats: - accounts/{account} - properties/{property}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.accessBindings.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/accessBindings', 'GET', apiParams, clientConfig);

    /**
     * Creates information about multiple access bindings to an account or property. This method is transactional. If any AccessBinding cannot be created, none of the AccessBindings will be created.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The account or property that owns the access bindings. The parent field in the CreateAccessBindingRequest messages must either be empty or match this field. Formats: - accounts/{account} - properties/{property}
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.accessBindings.batchCreate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/accessBindings:batchCreate', 'POST', apiParams, clientConfig);

    /**
     * Gets information about multiple access bindings to an account or property.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.names - Required. The names of the access bindings to retrieve. A maximum of 1000 access bindings can be retrieved in a batch. Formats: - accounts/{account}/accessBindings/{accessBinding} - properties/{property}/accessBindings/{accessBinding}
     * @param {string} apiParams.parent - (Required) Required. The account or property that owns the access bindings. The parent of all provided values for the 'names' field must match this field. Formats: - accounts/{account} - properties/{property}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.accessBindings.batchGet = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/accessBindings:batchGet', 'GET', apiParams, clientConfig);

    /**
     * Updates information about multiple access bindings to an account or property.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The account or property that owns the access bindings. The parent of all provided AccessBinding in UpdateAccessBindingRequest messages must match this field. Formats: - accounts/{account} - properties/{property}
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.accessBindings.batchUpdate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/accessBindings:batchUpdate', 'POST', apiParams, clientConfig);

    /**
     * Deletes information about multiple users' links to an account or property.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The account or property that owns the access bindings. The parent of all provided values for the 'names' field in DeleteAccessBindingRequest messages must match this field. Formats: - accounts/{account} - properties/{property}
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.accessBindings.batchDelete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/accessBindings:batchDelete', 'POST', apiParams, clientConfig);

    this.properties.expandedDataSets = {};

    /**
     * Lookup for a single ExpandedDataSet.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the ExpandedDataSet to get. Example format: properties/1234/expandedDataSets/5678
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.expandedDataSets.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists ExpandedDataSets on a property.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum).
     * @param {string} apiParams.pageToken - A page token, received from a previous `ListExpandedDataSets` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListExpandedDataSet` must match the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. Example format: properties/1234
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.expandedDataSets.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/expandedDataSets', 'GET', apiParams, clientConfig);

    /**
     * Creates a ExpandedDataSet.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. Example format: properties/1234
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.expandedDataSets.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/expandedDataSets', 'POST', apiParams, clientConfig);

    /**
     * Updates a ExpandedDataSet on a property.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Output only. The resource name for this ExpandedDataSet resource. Format: properties/{property_id}/expandedDataSets/{expanded_data_set}
     * @param {string} apiParams.updateMask - Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.expandedDataSets.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes a ExpandedDataSet on a property.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Example format: properties/1234/expandedDataSets/5678
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.expandedDataSets.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'DELETE', apiParams, clientConfig);

    this.properties.channelGroups = {};

    /**
     * Lookup for a single ChannelGroup.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The ChannelGroup to get. Example format: properties/1234/channelGroups/5678
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.channelGroups.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists ChannelGroups on a property.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum).
     * @param {string} apiParams.pageToken - A page token, received from a previous `ListChannelGroups` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListChannelGroups` must match the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. The property for which to list ChannelGroups. Example format: properties/1234
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.channelGroups.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/channelGroups', 'GET', apiParams, clientConfig);

    /**
     * Creates a ChannelGroup.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The property for which to create a ChannelGroup. Example format: properties/1234
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.channelGroups.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/channelGroups', 'POST', apiParams, clientConfig);

    /**
     * Updates a ChannelGroup.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Output only. The resource name for this Channel Group resource. Format: properties/{property}/channelGroups/{channel_group}
     * @param {string} apiParams.updateMask - Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.channelGroups.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes a ChannelGroup on a property.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The ChannelGroup to delete. Example format: properties/1234/channelGroups/5678
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.channelGroups.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'DELETE', apiParams, clientConfig);

    this.properties.bigQueryLinks = {};

    /**
     * Creates a BigQueryLink.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. Example format: properties/1234
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.bigQueryLinks.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/bigQueryLinks', 'POST', apiParams, clientConfig);

    /**
     * Lookup for a single BigQuery Link.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the BigQuery link to lookup. Format: properties/{property_id}/bigQueryLinks/{bigquery_link_id} Example: properties/123/bigQueryLinks/456
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.bigQueryLinks.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists BigQuery Links on a property.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of resources to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)
     * @param {string} apiParams.pageToken - A page token, received from a previous `ListBigQueryLinks` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListBigQueryLinks` must match the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. The name of the property to list BigQuery links under. Format: properties/{property_id} Example: properties/1234
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.bigQueryLinks.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/bigQueryLinks', 'GET', apiParams, clientConfig);

    /**
     * Deletes a BigQueryLink on a property.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The BigQueryLink to delete. Example format: properties/1234/bigQueryLinks/5678
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.bigQueryLinks.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Updates a BigQueryLink.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Output only. Resource name of this BigQuery link. Format: 'properties/{property_id}/bigQueryLinks/{bigquery_link_id}' Format: 'properties/1234/bigQueryLinks/abc567'
     * @param {string} apiParams.updateMask - Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.bigQueryLinks.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);

    this.properties.adSenseLinks = {};

    /**
     * Looks up a single AdSenseLink.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Unique identifier for the AdSense Link requested. Format: properties/{propertyId}/adSenseLinks/{linkId} Example: properties/1234/adSenseLinks/5678
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.adSenseLinks.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Creates an AdSenseLink.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The property for which to create an AdSense Link. Format: properties/{propertyId} Example: properties/1234
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.adSenseLinks.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/adSenseLinks', 'POST', apiParams, clientConfig);

    /**
     * Deletes an AdSenseLink.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Unique identifier for the AdSense Link to be deleted. Format: properties/{propertyId}/adSenseLinks/{linkId} Example: properties/1234/adSenseLinks/5678
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.adSenseLinks.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Lists AdSenseLinks on a property.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum).
     * @param {string} apiParams.pageToken - A page token received from a previous `ListAdSenseLinks` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAdSenseLinks` must match the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. Resource name of the parent property. Format: properties/{propertyId} Example: properties/1234
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.adSenseLinks.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/adSenseLinks', 'GET', apiParams, clientConfig);

    this.properties.calculatedMetrics = {};

    /**
     * Lookup for a single CalculatedMetric.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the CalculatedMetric to get. Format: properties/{property_id}/calculatedMetrics/{calculated_metric_id} Example: properties/1234/calculatedMetrics/Metric01
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.calculatedMetrics.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Creates a CalculatedMetric.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.calculatedMetricId - Required. The ID to use for the calculated metric which will become the final component of the calculated metric's resource name. This value should be 1-80 characters and valid characters are /[a-zA-Z0-9_]/, no spaces allowed. calculated_metric_id must be unique between all calculated metrics under a property. The calculated_metric_id is used when referencing this calculated metric from external APIs, for example, "calcMetric:{calculated_metric_id}".
     * @param {string} apiParams.parent - (Required) Required. Format: properties/{property_id} Example: properties/1234
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.calculatedMetrics.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/calculatedMetrics', 'POST', apiParams, clientConfig);

    /**
     * Lists CalculatedMetrics on a property.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum).
     * @param {string} apiParams.pageToken - Optional. A page token, received from a previous `ListCalculatedMetrics` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListCalculatedMetrics` must match the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. Example format: properties/1234
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.calculatedMetrics.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/calculatedMetrics', 'GET', apiParams, clientConfig);

    /**
     * Updates a CalculatedMetric on a property.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Output only. Resource name for this CalculatedMetric. Format: 'properties/{property_id}/calculatedMetrics/{calculated_metric_id}'
     * @param {string} apiParams.updateMask - Required. The list of fields to be updated. Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.calculatedMetrics.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes a CalculatedMetric on a property.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the CalculatedMetric to delete. Format: properties/{property_id}/calculatedMetrics/{calculated_metric_id} Example: properties/1234/calculatedMetrics/Metric01
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.calculatedMetrics.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'DELETE', apiParams, clientConfig);

    this.properties.rollupPropertySourceLinks = {};

    /**
     * Lookup for a single roll-up property source Link. Only roll-up properties can have source links, so this method will throw an error if used on other types of properties.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the roll-up property source link to lookup. Format: properties/{property_id}/rollupPropertySourceLinks/{rollup_property_source_link_id} Example: properties/123/rollupPropertySourceLinks/456
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.rollupPropertySourceLinks.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists roll-up property source Links on a property. Only roll-up properties can have source links, so this method will throw an error if used on other types of properties.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of resources to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)
     * @param {string} apiParams.pageToken - Optional. A page token, received from a previous `ListRollupPropertySourceLinks` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListRollupPropertySourceLinks` must match the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. The name of the roll-up property to list roll-up property source links under. Format: properties/{property_id} Example: properties/1234
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.rollupPropertySourceLinks.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/rollupPropertySourceLinks', 'GET', apiParams, clientConfig);

    /**
     * Creates a roll-up property source link. Only roll-up properties can have source links, so this method will throw an error if used on other types of properties.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. Format: properties/{property_id} Example: properties/1234
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.rollupPropertySourceLinks.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/rollupPropertySourceLinks', 'POST', apiParams, clientConfig);

    /**
     * Deletes a roll-up property source link. Only roll-up properties can have source links, so this method will throw an error if used on other types of properties.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Format: properties/{property_id}/rollupPropertySourceLinks/{rollup_property_source_link_id} Example: properties/1234/rollupPropertySourceLinks/5678
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.rollupPropertySourceLinks.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'DELETE', apiParams, clientConfig);

    this.properties.subpropertyEventFilters = {};

    /**
     * Creates a subproperty Event Filter.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The ordinary property for which to create a subproperty event filter. Format: properties/property_id Example: properties/123
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.subpropertyEventFilters.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/subpropertyEventFilters', 'POST', apiParams, clientConfig);

    /**
     * Lookup for a single subproperty Event Filter.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Resource name of the subproperty event filter to lookup. Format: properties/property_id/subpropertyEventFilters/subproperty_event_filter Example: properties/123/subpropertyEventFilters/456
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.subpropertyEventFilters.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);

    /**
     * List all subproperty Event Filters on a property.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of resources to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)
     * @param {string} apiParams.pageToken - Optional. A page token, received from a previous `ListSubpropertyEventFilters` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListSubpropertyEventFilters` must match the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. Resource name of the ordinary property. Format: properties/property_id Example: properties/123
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.subpropertyEventFilters.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/subpropertyEventFilters', 'GET', apiParams, clientConfig);

    /**
     * Updates a subproperty Event Filter.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Output only. Format: properties/{ordinary_property_id}/subpropertyEventFilters/{sub_property_event_filter} Example: properties/1234/subpropertyEventFilters/5678
     * @param {string} apiParams.updateMask - Required. The list of fields to update. Field names must be in snake case (for example, "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.subpropertyEventFilters.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes a subproperty event filter.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Resource name of the subproperty event filter to delete. Format: properties/property_id/subpropertyEventFilters/subproperty_event_filter Example: properties/123/subpropertyEventFilters/456
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.subpropertyEventFilters.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'DELETE', apiParams, clientConfig);

    this.properties.reportingDataAnnotations = {};

    /**
     * Creates a Reporting Data Annotation.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The property for which to create a Reporting Data Annotation. Format: properties/property_id Example: properties/123
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.reportingDataAnnotations.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/reportingDataAnnotations', 'POST', apiParams, clientConfig);

    /**
     * Lookup a single Reporting Data Annotation.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Resource name of the Reporting Data Annotation to lookup. Format: properties/property_id/reportingDataAnnotations/reportingDataAnnotation Example: properties/123/reportingDataAnnotations/456
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.reportingDataAnnotations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);

    /**
     * List all Reporting Data Annotations on a property.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. Filter that restricts which reporting data annotations under the parent property are listed. Supported fields are: * 'name' * `title` * `description` * `annotation_date` * `annotation_date_range` * `color` Additionally, this API provides the following helper functions: * annotation_duration() : the duration that this annotation marks, [durations](https://github.com/protocolbuffers/protobuf/blob/main/src/google/protobuf/duration.proto). expect a numeric representation of seconds followed by an `s` suffix. * is_annotation_in_range(start_date, end_date) : if the annotation is in the range specified by the `start_date` and `end_date`. The dates are in ISO-8601 format, for example `2031-06-28`. Supported operations: * `=` : equals * `!=` : not equals * `<` : less than * `>` : greater than * `<=` : less than or equals * `>=` : greater than or equals * `:` : has operator * `=~` : [regular expression](https://github.com/google/re2/wiki/Syntax) match * `!~` : [regular expression](https://github.com/google/re2/wiki/Syntax) does not match * `NOT` : Logical not * `AND` : Logical and * `OR` : Logical or Examples: 1. `title="Holiday Sale"` 2. `description=~"[Bb]ig [Gg]ame.*[Ss]ale"` 3. `is_annotation_in_range("2025-12-25", "2026-01-16") = true` 4. `annotation_duration() >= 172800s AND title:BOGO`
     * @param {integer} apiParams.pageSize - Optional. The maximum number of resources to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)
     * @param {string} apiParams.pageToken - Optional. A page token, received from a previous `ListReportingDataAnnotations` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListReportingDataAnnotations` must match the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. Resource name of the property. Format: properties/property_id Example: properties/123
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.reportingDataAnnotations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/reportingDataAnnotations', 'GET', apiParams, clientConfig);

    /**
     * Updates a Reporting Data Annotation.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Identifier. Resource name of this Reporting Data Annotation. Format: 'properties/{property_id}/reportingDataAnnotations/{reporting_data_annotation}' Format: 'properties/123/reportingDataAnnotations/456'
     * @param {string} apiParams.updateMask - Optional. The list of fields to update. Field names must be in snake case (for example, "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.reportingDataAnnotations.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes a Reporting Data Annotation.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Resource name of the Reporting Data Annotation to delete. Format: properties/property_id/reportingDataAnnotations/reporting_data_annotation Example: properties/123/reportingDataAnnotations/456
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.reportingDataAnnotations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'DELETE', apiParams, clientConfig);

    this.properties.subpropertySyncConfigs = {};

    /**
     * List all `SubpropertySyncConfig` resources for a property.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of resources to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)
     * @param {string} apiParams.pageToken - Optional. A page token, received from a previous `ListSubpropertySyncConfig` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListSubpropertySyncConfig` must match the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. Resource name of the property. Format: properties/property_id Example: properties/123
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.subpropertySyncConfigs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/subpropertySyncConfigs', 'GET', apiParams, clientConfig);

    /**
     * Updates a `SubpropertySyncConfig`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Output only. Identifier. Format: properties/{ordinary_property_id}/subpropertySyncConfigs/{subproperty_id} Example: properties/1234/subpropertySyncConfigs/5678
     * @param {string} apiParams.updateMask - Optional. The list of fields to update. Field names must be in snake case (for example, "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.subpropertySyncConfigs.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Lookup for a single `SubpropertySyncConfig`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Resource name of the SubpropertySyncConfig to lookup. Format: properties/{ordinary_property_id}/subpropertySyncConfigs/{subproperty_id} Example: properties/1234/subpropertySyncConfigs/5678
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.properties.subpropertySyncConfigs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);
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
