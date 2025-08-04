
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
    // "Private" properties using the underscore convention
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://analyticsadmin.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.accounts = {};

    /**
     * Lookup for a single Account.
     * @param {string} params.name - (Required) Required. The name of the account to lookup. Format: accounts/{account} Example: "accounts/100"
     * @return {object} The API response object.
     */
    this.accounts.get = (params) => this._makeRequest('v1beta/{+name}', 'GET', params);

    /**
     * Returns all accounts accessible by the caller. Note that these accounts might not currently have GA properties. Soft-deleted (ie: "trashed") accounts are excluded by default. Returns an empty list if no relevant accounts are found.
     * @param {integer} params.pageSize - The maximum number of resources to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)
     * @param {string} params.pageToken - A page token, received from a previous `ListAccounts` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAccounts` must match the call that provided the page token.
     * @param {boolean} params.showDeleted - Whether to include soft-deleted (ie: "trashed") Accounts in the results. Accounts can be inspected to determine whether they are deleted or not.
     * @return {object} The API response object.
     */
    this.accounts.list = (params) => this._makeRequest('v1beta/accounts', 'GET', params);

    /**
     * Marks target Account as soft-deleted (ie: "trashed") and returns it. This API does not have a method to restore soft-deleted accounts. However, they can be restored using the Trash Can UI. If the accounts are not restored before the expiration time, the account and all child resources (eg: Properties, GoogleAdsLinks, Streams, AccessBindings) will be permanently purged. https://support.google.com/analytics/answer/6154772 Returns an error if the target is not found.
     * @param {string} params.name - (Required) Required. The name of the Account to soft-delete. Format: accounts/{account} Example: "accounts/100"
     * @return {object} The API response object.
     */
    this.accounts.delete = (params) => this._makeRequest('v1beta/{+name}', 'DELETE', params);

    /**
     * Updates an account.
     * @param {string} params.name - (Required) Output only. Resource name of this account. Format: accounts/{account} Example: "accounts/100"
     * @param {string} params.updateMask - Required. The list of fields to be updated. Field names must be in snake case (for example, "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.patch = (params) => this._makeRequest('v1beta/{+name}', 'PATCH', params);

    /**
     * Requests a ticket for creating an account.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.provisionAccountTicket = (params) => this._makeRequest('v1beta/accounts:provisionAccountTicket', 'POST', params);

    /**
     * Get data sharing settings on an account. Data sharing settings are singletons.
     * @param {string} params.name - (Required) Required. The name of the settings to lookup. Format: accounts/{account}/dataSharingSettings Example: `accounts/1000/dataSharingSettings`
     * @return {object} The API response object.
     */
    this.accounts.getDataSharingSettings = (params) => this._makeRequest('v1beta/{+name}', 'GET', params);

    /**
     * Searches through all changes to an account or its children given the specified set of filters. Only returns the subset of changes supported by the API. The UI may return additional changes.
     * @param {string} params.account - (Required) Required. The account resource for which to return change history resources. Format: accounts/{account} Example: `accounts/100`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.searchChangeHistoryEvents = (params) => this._makeRequest('v1beta/{+account}:searchChangeHistoryEvents', 'POST', params);

    /**
     * Returns a customized report of data access records. The report provides records of each time a user reads Google Analytics reporting data. Access records are retained for up to 2 years. Data Access Reports can be requested for a property. Reports may be requested for any property, but dimensions that aren't related to quota can only be requested on Google Analytics 360 properties. This method is only available to Administrators. These data access records include GA UI Reporting, GA UI Explorations, GA Data API, and other products like Firebase & Admob that can retrieve data from Google Analytics through a linkage. These records don't include property configuration changes like adding a stream or changing a property's time zone. For configuration change history, see [searchChangeHistoryEvents](https://developers.google.com/analytics/devguides/config/admin/v1/rest/v1alpha/accounts/searchChangeHistoryEvents). To give your feedback on this API, complete the [Google Analytics Access Reports feedback](https://docs.google.com/forms/d/e/1FAIpQLSdmEBUrMzAEdiEKk5TV5dEHvDUZDRlgWYdQdAeSdtR4hVjEhw/viewform) form.
     * @param {string} params.entity - (Required) The Data Access Report supports requesting at the property level or account level. If requested at the account level, Data Access Reports include all access for all properties under that account. To request at the property level, entity should be for example 'properties/123' if "123" is your Google Analytics property ID. To request at the account level, entity should be for example 'accounts/1234' if "1234" is your Google Analytics Account ID.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.runAccessReport = (params) => this._makeRequest('v1beta/{+entity}:runAccessReport', 'POST', params);

    this.accountSummaries = {};

    /**
     * Returns summaries of all accounts accessible by the caller.
     * @param {integer} params.pageSize - The maximum number of AccountSummary resources to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)
     * @param {string} params.pageToken - A page token, received from a previous `ListAccountSummaries` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAccountSummaries` must match the call that provided the page token.
     * @return {object} The API response object.
     */
    this.accountSummaries.list = (params) => this._makeRequest('v1beta/accountSummaries', 'GET', params);

    this.properties = {};

    /**
     * Lookup for a single GA Property.
     * @param {string} params.name - (Required) Required. The name of the property to lookup. Format: properties/{property_id} Example: "properties/1000"
     * @return {object} The API response object.
     */
    this.properties.get = (params) => this._makeRequest('v1beta/{+name}', 'GET', params);

    /**
     * Returns child Properties under the specified parent Account. Properties will be excluded if the caller does not have access. Soft-deleted (ie: "trashed") properties are excluded by default. Returns an empty list if no relevant properties are found.
     * @param {string} params.filter - Required. An expression for filtering the results of the request. Fields eligible for filtering are: `parent:`(The resource name of the parent account/property) or `ancestor:`(The resource name of the parent account) or `firebase_project:`(The id or number of the linked firebase project). Some examples of filters: ``` | Filter | Description | |-----------------------------|-------------------------------------------| | parent:accounts/123 | The account with account id: 123. | | parent:properties/123 | The property with property id: 123. | | ancestor:accounts/123 | The account with account id: 123. | | firebase_project:project-id | The firebase project with id: project-id. | | firebase_project:123 | The firebase project with number: 123. | ```
     * @param {integer} params.pageSize - The maximum number of resources to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)
     * @param {string} params.pageToken - A page token, received from a previous `ListProperties` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListProperties` must match the call that provided the page token.
     * @param {boolean} params.showDeleted - Whether to include soft-deleted (ie: "trashed") Properties in the results. Properties can be inspected to determine whether they are deleted or not.
     * @return {object} The API response object.
     */
    this.properties.list = (params) => this._makeRequest('v1beta/properties', 'GET', params);

    /**
     * Creates a Google Analytics property with the specified location and attributes.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.properties.create = (params) => this._makeRequest('v1beta/properties', 'POST', params);

    /**
     * Marks target Property as soft-deleted (ie: "trashed") and returns it. This API does not have a method to restore soft-deleted properties. However, they can be restored using the Trash Can UI. If the properties are not restored before the expiration time, the Property and all child resources (eg: GoogleAdsLinks, Streams, AccessBindings) will be permanently purged. https://support.google.com/analytics/answer/6154772 Returns an error if the target is not found.
     * @param {string} params.name - (Required) Required. The name of the Property to soft-delete. Format: properties/{property_id} Example: "properties/1000"
     * @return {object} The API response object.
     */
    this.properties.delete = (params) => this._makeRequest('v1beta/{+name}', 'DELETE', params);

    /**
     * Updates a property.
     * @param {string} params.name - (Required) Output only. Resource name of this property. Format: properties/{property_id} Example: "properties/1000"
     * @param {string} params.updateMask - Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.properties.patch = (params) => this._makeRequest('v1beta/{+name}', 'PATCH', params);

    /**
     * Acknowledges the terms of user data collection for the specified property. This acknowledgement must be completed (either in the Google Analytics UI or through this API) before MeasurementProtocolSecret resources may be created.
     * @param {string} params.property - (Required) Required. The property for which to acknowledge user data collection.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.properties.acknowledgeUserDataCollection = (params) => this._makeRequest('v1beta/{+property}:acknowledgeUserDataCollection', 'POST', params);

    /**
     * Returns the singleton data retention settings for this property.
     * @param {string} params.name - (Required) Required. The name of the settings to lookup. Format: properties/{property}/dataRetentionSettings Example: "properties/1000/dataRetentionSettings"
     * @return {object} The API response object.
     */
    this.properties.getDataRetentionSettings = (params) => this._makeRequest('v1beta/{+name}', 'GET', params);

    /**
     * Updates the singleton data retention settings for this property.
     * @param {string} params.name - (Required) Output only. Resource name for this DataRetentionSetting resource. Format: properties/{property}/dataRetentionSettings
     * @param {string} params.updateMask - Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.properties.updateDataRetentionSettings = (params) => this._makeRequest('v1beta/{+name}', 'PATCH', params);

    /**
     * Returns a customized report of data access records. The report provides records of each time a user reads Google Analytics reporting data. Access records are retained for up to 2 years. Data Access Reports can be requested for a property. Reports may be requested for any property, but dimensions that aren't related to quota can only be requested on Google Analytics 360 properties. This method is only available to Administrators. These data access records include GA UI Reporting, GA UI Explorations, GA Data API, and other products like Firebase & Admob that can retrieve data from Google Analytics through a linkage. These records don't include property configuration changes like adding a stream or changing a property's time zone. For configuration change history, see [searchChangeHistoryEvents](https://developers.google.com/analytics/devguides/config/admin/v1/rest/v1alpha/accounts/searchChangeHistoryEvents). To give your feedback on this API, complete the [Google Analytics Access Reports feedback](https://docs.google.com/forms/d/e/1FAIpQLSdmEBUrMzAEdiEKk5TV5dEHvDUZDRlgWYdQdAeSdtR4hVjEhw/viewform) form.
     * @param {string} params.entity - (Required) The Data Access Report supports requesting at the property level or account level. If requested at the account level, Data Access Reports include all access for all properties under that account. To request at the property level, entity should be for example 'properties/123' if "123" is your Google Analytics property ID. To request at the account level, entity should be for example 'accounts/1234' if "1234" is your Google Analytics Account ID.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.properties.runAccessReport = (params) => this._makeRequest('v1beta/{+entity}:runAccessReport', 'POST', params);

    this.properties.firebaseLinks = {};

    /**
     * Creates a FirebaseLink. Properties can have at most one FirebaseLink.
     * @param {string} params.parent - (Required) Required. Format: properties/{property_id} Example: `properties/1234`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.properties.firebaseLinks.create = (params) => this._makeRequest('v1beta/{+parent}/firebaseLinks', 'POST', params);

    /**
     * Deletes a FirebaseLink on a property
     * @param {string} params.name - (Required) Required. Format: properties/{property_id}/firebaseLinks/{firebase_link_id} Example: `properties/1234/firebaseLinks/5678`
     * @return {object} The API response object.
     */
    this.properties.firebaseLinks.delete = (params) => this._makeRequest('v1beta/{+name}', 'DELETE', params);

    /**
     * Lists FirebaseLinks on a property. Properties can have at most one FirebaseLink.
     * @param {integer} params.pageSize - The maximum number of resources to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)
     * @param {string} params.pageToken - A page token, received from a previous `ListFirebaseLinks` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListFirebaseLinks` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. Format: properties/{property_id} Example: `properties/1234`
     * @return {object} The API response object.
     */
    this.properties.firebaseLinks.list = (params) => this._makeRequest('v1beta/{+parent}/firebaseLinks', 'GET', params);

    this.properties.googleAdsLinks = {};

    /**
     * Creates a GoogleAdsLink.
     * @param {string} params.parent - (Required) Required. Example format: properties/1234
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.properties.googleAdsLinks.create = (params) => this._makeRequest('v1beta/{+parent}/googleAdsLinks', 'POST', params);

    /**
     * Updates a GoogleAdsLink on a property
     * @param {string} params.name - (Required) Output only. Format: properties/{propertyId}/googleAdsLinks/{googleAdsLinkId} Note: googleAdsLinkId is not the Google Ads customer ID.
     * @param {string} params.updateMask - Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.properties.googleAdsLinks.patch = (params) => this._makeRequest('v1beta/{+name}', 'PATCH', params);

    /**
     * Deletes a GoogleAdsLink on a property
     * @param {string} params.name - (Required) Required. Example format: properties/1234/googleAdsLinks/5678
     * @return {object} The API response object.
     */
    this.properties.googleAdsLinks.delete = (params) => this._makeRequest('v1beta/{+name}', 'DELETE', params);

    /**
     * Lists GoogleAdsLinks on a property.
     * @param {integer} params.pageSize - The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum).
     * @param {string} params.pageToken - A page token, received from a previous `ListGoogleAdsLinks` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListGoogleAdsLinks` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. Example format: properties/1234
     * @return {object} The API response object.
     */
    this.properties.googleAdsLinks.list = (params) => this._makeRequest('v1beta/{+parent}/googleAdsLinks', 'GET', params);

    this.properties.conversionEvents = {};

    /**
     * Deprecated: Use `CreateKeyEvent` instead. Creates a conversion event with the specified attributes.
     * @param {string} params.parent - (Required) Required. The resource name of the parent property where this conversion event will be created. Format: properties/123
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.properties.conversionEvents.create = (params) => this._makeRequest('v1beta/{+parent}/conversionEvents', 'POST', params);

    /**
     * Deprecated: Use `UpdateKeyEvent` instead. Updates a conversion event with the specified attributes.
     * @param {string} params.name - (Required) Output only. Resource name of this conversion event. Format: properties/{property}/conversionEvents/{conversion_event}
     * @param {string} params.updateMask - Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.properties.conversionEvents.patch = (params) => this._makeRequest('v1beta/{+name}', 'PATCH', params);

    /**
     * Deprecated: Use `GetKeyEvent` instead. Retrieve a single conversion event.
     * @param {string} params.name - (Required) Required. The resource name of the conversion event to retrieve. Format: properties/{property}/conversionEvents/{conversion_event} Example: "properties/123/conversionEvents/456"
     * @return {object} The API response object.
     */
    this.properties.conversionEvents.get = (params) => this._makeRequest('v1beta/{+name}', 'GET', params);

    /**
     * Deprecated: Use `DeleteKeyEvent` instead. Deletes a conversion event in a property.
     * @param {string} params.name - (Required) Required. The resource name of the conversion event to delete. Format: properties/{property}/conversionEvents/{conversion_event} Example: "properties/123/conversionEvents/456"
     * @return {object} The API response object.
     */
    this.properties.conversionEvents.delete = (params) => this._makeRequest('v1beta/{+name}', 'DELETE', params);

    /**
     * Deprecated: Use `ListKeyEvents` instead. Returns a list of conversion events in the specified parent property. Returns an empty list if no conversion events are found.
     * @param {integer} params.pageSize - The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)
     * @param {string} params.pageToken - A page token, received from a previous `ListConversionEvents` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListConversionEvents` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The resource name of the parent property. Example: 'properties/123'
     * @return {object} The API response object.
     */
    this.properties.conversionEvents.list = (params) => this._makeRequest('v1beta/{+parent}/conversionEvents', 'GET', params);

    this.properties.keyEvents = {};

    /**
     * Creates a Key Event.
     * @param {string} params.parent - (Required) Required. The resource name of the parent property where this Key Event will be created. Format: properties/123
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.properties.keyEvents.create = (params) => this._makeRequest('v1beta/{+parent}/keyEvents', 'POST', params);

    /**
     * Updates a Key Event.
     * @param {string} params.name - (Required) Output only. Resource name of this key event. Format: properties/{property}/keyEvents/{key_event}
     * @param {string} params.updateMask - Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.properties.keyEvents.patch = (params) => this._makeRequest('v1beta/{+name}', 'PATCH', params);

    /**
     * Retrieve a single Key Event.
     * @param {string} params.name - (Required) Required. The resource name of the Key Event to retrieve. Format: properties/{property}/keyEvents/{key_event} Example: "properties/123/keyEvents/456"
     * @return {object} The API response object.
     */
    this.properties.keyEvents.get = (params) => this._makeRequest('v1beta/{+name}', 'GET', params);

    /**
     * Deletes a Key Event.
     * @param {string} params.name - (Required) Required. The resource name of the Key Event to delete. Format: properties/{property}/keyEvents/{key_event} Example: "properties/123/keyEvents/456"
     * @return {object} The API response object.
     */
    this.properties.keyEvents.delete = (params) => this._makeRequest('v1beta/{+name}', 'DELETE', params);

    /**
     * Returns a list of Key Events in the specified parent property. Returns an empty list if no Key Events are found.
     * @param {integer} params.pageSize - The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)
     * @param {string} params.pageToken - A page token, received from a previous `ListKeyEvents` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListKeyEvents` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The resource name of the parent property. Example: 'properties/123'
     * @return {object} The API response object.
     */
    this.properties.keyEvents.list = (params) => this._makeRequest('v1beta/{+parent}/keyEvents', 'GET', params);

    this.properties.customDimensions = {};

    /**
     * Creates a CustomDimension.
     * @param {string} params.parent - (Required) Required. Example format: properties/1234
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.properties.customDimensions.create = (params) => this._makeRequest('v1beta/{+parent}/customDimensions', 'POST', params);

    /**
     * Updates a CustomDimension on a property.
     * @param {string} params.name - (Required) Output only. Resource name for this CustomDimension resource. Format: properties/{property}/customDimensions/{customDimension}
     * @param {string} params.updateMask - Required. The list of fields to be updated. Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.properties.customDimensions.patch = (params) => this._makeRequest('v1beta/{+name}', 'PATCH', params);

    /**
     * Lists CustomDimensions on a property.
     * @param {integer} params.pageSize - The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum).
     * @param {string} params.pageToken - A page token, received from a previous `ListCustomDimensions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListCustomDimensions` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. Example format: properties/1234
     * @return {object} The API response object.
     */
    this.properties.customDimensions.list = (params) => this._makeRequest('v1beta/{+parent}/customDimensions', 'GET', params);

    /**
     * Archives a CustomDimension on a property.
     * @param {string} params.name - (Required) Required. The name of the CustomDimension to archive. Example format: properties/1234/customDimensions/5678
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.properties.customDimensions.archive = (params) => this._makeRequest('v1beta/{+name}:archive', 'POST', params);

    /**
     * Lookup for a single CustomDimension.
     * @param {string} params.name - (Required) Required. The name of the CustomDimension to get. Example format: properties/1234/customDimensions/5678
     * @return {object} The API response object.
     */
    this.properties.customDimensions.get = (params) => this._makeRequest('v1beta/{+name}', 'GET', params);

    this.properties.customMetrics = {};

    /**
     * Creates a CustomMetric.
     * @param {string} params.parent - (Required) Required. Example format: properties/1234
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.properties.customMetrics.create = (params) => this._makeRequest('v1beta/{+parent}/customMetrics', 'POST', params);

    /**
     * Updates a CustomMetric on a property.
     * @param {string} params.name - (Required) Output only. Resource name for this CustomMetric resource. Format: properties/{property}/customMetrics/{customMetric}
     * @param {string} params.updateMask - Required. The list of fields to be updated. Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.properties.customMetrics.patch = (params) => this._makeRequest('v1beta/{+name}', 'PATCH', params);

    /**
     * Lists CustomMetrics on a property.
     * @param {integer} params.pageSize - The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum).
     * @param {string} params.pageToken - A page token, received from a previous `ListCustomMetrics` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListCustomMetrics` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. Example format: properties/1234
     * @return {object} The API response object.
     */
    this.properties.customMetrics.list = (params) => this._makeRequest('v1beta/{+parent}/customMetrics', 'GET', params);

    /**
     * Archives a CustomMetric on a property.
     * @param {string} params.name - (Required) Required. The name of the CustomMetric to archive. Example format: properties/1234/customMetrics/5678
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.properties.customMetrics.archive = (params) => this._makeRequest('v1beta/{+name}:archive', 'POST', params);

    /**
     * Lookup for a single CustomMetric.
     * @param {string} params.name - (Required) Required. The name of the CustomMetric to get. Example format: properties/1234/customMetrics/5678
     * @return {object} The API response object.
     */
    this.properties.customMetrics.get = (params) => this._makeRequest('v1beta/{+name}', 'GET', params);

    this.properties.dataStreams = {};

    /**
     * Creates a DataStream.
     * @param {string} params.parent - (Required) Required. Example format: properties/1234
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.properties.dataStreams.create = (params) => this._makeRequest('v1beta/{+parent}/dataStreams', 'POST', params);

    /**
     * Deletes a DataStream on a property.
     * @param {string} params.name - (Required) Required. The name of the DataStream to delete. Example format: properties/1234/dataStreams/5678
     * @return {object} The API response object.
     */
    this.properties.dataStreams.delete = (params) => this._makeRequest('v1beta/{+name}', 'DELETE', params);

    /**
     * Updates a DataStream on a property.
     * @param {string} params.name - (Required) Output only. Resource name of this Data Stream. Format: properties/{property_id}/dataStreams/{stream_id} Example: "properties/1000/dataStreams/2000"
     * @param {string} params.updateMask - Required. The list of fields to be updated. Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.properties.dataStreams.patch = (params) => this._makeRequest('v1beta/{+name}', 'PATCH', params);

    /**
     * Lists DataStreams on a property.
     * @param {integer} params.pageSize - The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum).
     * @param {string} params.pageToken - A page token, received from a previous `ListDataStreams` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListDataStreams` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. Example format: properties/1234
     * @return {object} The API response object.
     */
    this.properties.dataStreams.list = (params) => this._makeRequest('v1beta/{+parent}/dataStreams', 'GET', params);

    /**
     * Lookup for a single DataStream.
     * @param {string} params.name - (Required) Required. The name of the DataStream to get. Example format: properties/1234/dataStreams/5678
     * @return {object} The API response object.
     */
    this.properties.dataStreams.get = (params) => this._makeRequest('v1beta/{+name}', 'GET', params);

    this.properties.dataStreams.measurementProtocolSecrets = {};

    /**
     * Lookup for a single MeasurementProtocolSecret.
     * @param {string} params.name - (Required) Required. The name of the measurement protocol secret to lookup. Format: properties/{property}/dataStreams/{dataStream}/measurementProtocolSecrets/{measurementProtocolSecret}
     * @return {object} The API response object.
     */
    this.properties.dataStreams.measurementProtocolSecrets.get = (params) => this._makeRequest('v1beta/{+name}', 'GET', params);

    /**
     * Returns child MeasurementProtocolSecrets under the specified parent Property.
     * @param {integer} params.pageSize - The maximum number of resources to return. If unspecified, at most 10 resources will be returned. The maximum value is 10. Higher values will be coerced to the maximum.
     * @param {string} params.pageToken - A page token, received from a previous `ListMeasurementProtocolSecrets` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListMeasurementProtocolSecrets` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The resource name of the parent stream. Format: properties/{property}/dataStreams/{dataStream}/measurementProtocolSecrets
     * @return {object} The API response object.
     */
    this.properties.dataStreams.measurementProtocolSecrets.list = (params) => this._makeRequest('v1beta/{+parent}/measurementProtocolSecrets', 'GET', params);

    /**
     * Creates a measurement protocol secret.
     * @param {string} params.parent - (Required) Required. The parent resource where this secret will be created. Format: properties/{property}/dataStreams/{dataStream}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.properties.dataStreams.measurementProtocolSecrets.create = (params) => this._makeRequest('v1beta/{+parent}/measurementProtocolSecrets', 'POST', params);

    /**
     * Deletes target MeasurementProtocolSecret.
     * @param {string} params.name - (Required) Required. The name of the MeasurementProtocolSecret to delete. Format: properties/{property}/dataStreams/{dataStream}/measurementProtocolSecrets/{measurementProtocolSecret}
     * @return {object} The API response object.
     */
    this.properties.dataStreams.measurementProtocolSecrets.delete = (params) => this._makeRequest('v1beta/{+name}', 'DELETE', params);

    /**
     * Updates a measurement protocol secret.
     * @param {string} params.name - (Required) Output only. Resource name of this secret. This secret may be a child of any type of stream. Format: properties/{property}/dataStreams/{dataStream}/measurementProtocolSecrets/{measurementProtocolSecret}
     * @param {string} params.updateMask - Required. The list of fields to be updated. Omitted fields will not be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.properties.dataStreams.measurementProtocolSecrets.patch = (params) => this._makeRequest('v1beta/{+name}', 'PATCH', params);
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
