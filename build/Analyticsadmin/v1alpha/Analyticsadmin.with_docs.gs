
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
    this.accounts.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * Returns all accounts accessible by the caller. Note that these accounts might not currently have GA properties. Soft-deleted (ie: "trashed") accounts are excluded by default. Returns an empty list if no relevant accounts are found.
     * @param {integer} params.pageSize - The maximum number of resources to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)
     * @param {string} params.pageToken - A page token, received from a previous `ListAccounts` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAccounts` must match the call that provided the page token.
     * @param {boolean} params.showDeleted - Whether to include soft-deleted (ie: "trashed") Accounts in the results. Accounts can be inspected to determine whether they are deleted or not.
     * @return {object} The API response object.
     */
    this.accounts.list = (params) => this._makeRequest('v1alpha/accounts', 'GET', params);

    /**
     * Marks target Account as soft-deleted (ie: "trashed") and returns it. This API does not have a method to restore soft-deleted accounts. However, they can be restored using the Trash Can UI. If the accounts are not restored before the expiration time, the account and all child resources (eg: Properties, GoogleAdsLinks, Streams, AccessBindings) will be permanently purged. https://support.google.com/analytics/answer/6154772 Returns an error if the target is not found.
     * @param {string} params.name - (Required) Required. The name of the Account to soft-delete. Format: accounts/{account} Example: "accounts/100"
     * @return {object} The API response object.
     */
    this.accounts.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);

    /**
     * Updates an account.
     * @param {string} params.name - (Required) Output only. Resource name of this account. Format: accounts/{account} Example: "accounts/100"
     * @param {string} params.updateMask - Required. The list of fields to be updated. Field names must be in snake case (for example, "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);

    /**
     * Requests a ticket for creating an account.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.provisionAccountTicket = (params) => this._makeRequest('v1alpha/accounts:provisionAccountTicket', 'POST', params);

    /**
     * Get data sharing settings on an account. Data sharing settings are singletons.
     * @param {string} params.name - (Required) Required. The name of the settings to lookup. Format: accounts/{account}/dataSharingSettings Example: `accounts/1000/dataSharingSettings`
     * @return {object} The API response object.
     */
    this.accounts.getDataSharingSettings = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * Searches through all changes to an account or its children given the specified set of filters. Only returns the subset of changes supported by the API. The UI may return additional changes.
     * @param {string} params.account - (Required) Required. The account resource for which to return change history resources. Format: accounts/{account} Example: `accounts/100`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.searchChangeHistoryEvents = (params) => this._makeRequest('v1alpha/{+account}:searchChangeHistoryEvents', 'POST', params);

    /**
     * Returns a customized report of data access records. The report provides records of each time a user reads Google Analytics reporting data. Access records are retained for up to 2 years. Data Access Reports can be requested for a property. Reports may be requested for any property, but dimensions that aren't related to quota can only be requested on Google Analytics 360 properties. This method is only available to Administrators. These data access records include GA UI Reporting, GA UI Explorations, GA Data API, and other products like Firebase & Admob that can retrieve data from Google Analytics through a linkage. These records don't include property configuration changes like adding a stream or changing a property's time zone. For configuration change history, see [searchChangeHistoryEvents](https://developers.google.com/analytics/devguides/config/admin/v1/rest/v1alpha/accounts/searchChangeHistoryEvents). To give your feedback on this API, complete the [Google Analytics Access Reports feedback](https://docs.google.com/forms/d/e/1FAIpQLSdmEBUrMzAEdiEKk5TV5dEHvDUZDRlgWYdQdAeSdtR4hVjEhw/viewform) form.
     * @param {string} params.entity - (Required) The Data Access Report supports requesting at the property level or account level. If requested at the account level, Data Access Reports include all access for all properties under that account. To request at the property level, entity should be for example 'properties/123' if "123" is your Google Analytics property ID. To request at the account level, entity should be for example 'accounts/1234' if "1234" is your Google Analytics Account ID.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.runAccessReport = (params) => this._makeRequest('v1alpha/{+entity}:runAccessReport', 'POST', params);

    this.accounts.accessBindings = {};

    /**
     * Creates an access binding on an account or property.
     * @param {string} params.parent - (Required) Required. Formats: - accounts/{account} - properties/{property}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.accessBindings.create = (params) => this._makeRequest('v1alpha/{+parent}/accessBindings', 'POST', params);

    /**
     * Gets information about an access binding.
     * @param {string} params.name - (Required) Required. The name of the access binding to retrieve. Formats: - accounts/{account}/accessBindings/{accessBinding} - properties/{property}/accessBindings/{accessBinding}
     * @return {object} The API response object.
     */
    this.accounts.accessBindings.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * Updates an access binding on an account or property.
     * @param {string} params.name - (Required) Output only. Resource name of this binding. Format: accounts/{account}/accessBindings/{access_binding} or properties/{property}/accessBindings/{access_binding} Example: "accounts/100/accessBindings/200"
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.accessBindings.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);

    /**
     * Deletes an access binding on an account or property.
     * @param {string} params.name - (Required) Required. Formats: - accounts/{account}/accessBindings/{accessBinding} - properties/{property}/accessBindings/{accessBinding}
     * @return {object} The API response object.
     */
    this.accounts.accessBindings.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);

    /**
     * Lists all access bindings on an account or property.
     * @param {integer} params.pageSize - The maximum number of access bindings to return. The service may return fewer than this value. If unspecified, at most 200 access bindings will be returned. The maximum value is 500; values above 500 will be coerced to 500.
     * @param {string} params.pageToken - A page token, received from a previous `ListAccessBindings` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAccessBindings` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. Formats: - accounts/{account} - properties/{property}
     * @return {object} The API response object.
     */
    this.accounts.accessBindings.list = (params) => this._makeRequest('v1alpha/{+parent}/accessBindings', 'GET', params);

    /**
     * Creates information about multiple access bindings to an account or property. This method is transactional. If any AccessBinding cannot be created, none of the AccessBindings will be created.
     * @param {string} params.parent - (Required) Required. The account or property that owns the access bindings. The parent field in the CreateAccessBindingRequest messages must either be empty or match this field. Formats: - accounts/{account} - properties/{property}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.accessBindings.batchCreate = (params) => this._makeRequest('v1alpha/{+parent}/accessBindings:batchCreate', 'POST', params);

    /**
     * Gets information about multiple access bindings to an account or property.
     * @param {string} params.names - Required. The names of the access bindings to retrieve. A maximum of 1000 access bindings can be retrieved in a batch. Formats: - accounts/{account}/accessBindings/{accessBinding} - properties/{property}/accessBindings/{accessBinding}
     * @param {string} params.parent - (Required) Required. The account or property that owns the access bindings. The parent of all provided values for the 'names' field must match this field. Formats: - accounts/{account} - properties/{property}
     * @return {object} The API response object.
     */
    this.accounts.accessBindings.batchGet = (params) => this._makeRequest('v1alpha/{+parent}/accessBindings:batchGet', 'GET', params);

    /**
     * Updates information about multiple access bindings to an account or property.
     * @param {string} params.parent - (Required) Required. The account or property that owns the access bindings. The parent of all provided AccessBinding in UpdateAccessBindingRequest messages must match this field. Formats: - accounts/{account} - properties/{property}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.accessBindings.batchUpdate = (params) => this._makeRequest('v1alpha/{+parent}/accessBindings:batchUpdate', 'POST', params);

    /**
     * Deletes information about multiple users' links to an account or property.
     * @param {string} params.parent - (Required) Required. The account or property that owns the access bindings. The parent of all provided values for the 'names' field in DeleteAccessBindingRequest messages must match this field. Formats: - accounts/{account} - properties/{property}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.accessBindings.batchDelete = (params) => this._makeRequest('v1alpha/{+parent}/accessBindings:batchDelete', 'POST', params);

    this.accountSummaries = {};

    /**
     * Returns summaries of all accounts accessible by the caller.
     * @param {integer} params.pageSize - The maximum number of AccountSummary resources to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)
     * @param {string} params.pageToken - A page token, received from a previous `ListAccountSummaries` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAccountSummaries` must match the call that provided the page token.
     * @return {object} The API response object.
     */
    this.accountSummaries.list = (params) => this._makeRequest('v1alpha/accountSummaries', 'GET', params);

    this.properties = {};

    /**
     * Lookup for a single GA Property.
     * @param {string} params.name - (Required) Required. The name of the property to lookup. Format: properties/{property_id} Example: "properties/1000"
     * @return {object} The API response object.
     */
    this.properties.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * Returns child Properties under the specified parent Account. Properties will be excluded if the caller does not have access. Soft-deleted (ie: "trashed") properties are excluded by default. Returns an empty list if no relevant properties are found.
     * @param {string} params.filter - Required. An expression for filtering the results of the request. Fields eligible for filtering are: `parent:`(The resource name of the parent account/property) or `ancestor:`(The resource name of the parent account) or `firebase_project:`(The id or number of the linked firebase project). Some examples of filters: ``` | Filter | Description | |-----------------------------|-------------------------------------------| | parent:accounts/123 | The account with account id: 123. | | parent:properties/123 | The property with property id: 123. | | ancestor:accounts/123 | The account with account id: 123. | | firebase_project:project-id | The firebase project with id: project-id. | | firebase_project:123 | The firebase project with number: 123. | ```
     * @param {integer} params.pageSize - The maximum number of resources to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)
     * @param {string} params.pageToken - A page token, received from a previous `ListProperties` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListProperties` must match the call that provided the page token.
     * @param {boolean} params.showDeleted - Whether to include soft-deleted (ie: "trashed") Properties in the results. Properties can be inspected to determine whether they are deleted or not.
     * @return {object} The API response object.
     */
    this.properties.list = (params) => this._makeRequest('v1alpha/properties', 'GET', params);

    /**
     * Creates a Google Analytics property with the specified location and attributes.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.properties.create = (params) => this._makeRequest('v1alpha/properties', 'POST', params);

    /**
     * Marks target Property as soft-deleted (ie: "trashed") and returns it. This API does not have a method to restore soft-deleted properties. However, they can be restored using the Trash Can UI. If the properties are not restored before the expiration time, the Property and all child resources (eg: GoogleAdsLinks, Streams, AccessBindings) will be permanently purged. https://support.google.com/analytics/answer/6154772 Returns an error if the target is not found.
     * @param {string} params.name - (Required) Required. The name of the Property to soft-delete. Format: properties/{property_id} Example: "properties/1000"
     * @return {object} The API response object.
     */
    this.properties.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);

    /**
     * Updates a property.
     * @param {string} params.name - (Required) Output only. Resource name of this property. Format: properties/{property_id} Example: "properties/1000"
     * @param {string} params.updateMask - Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.properties.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);

    /**
     * Acknowledges the terms of user data collection for the specified property. This acknowledgement must be completed (either in the Google Analytics UI or through this API) before MeasurementProtocolSecret resources may be created.
     * @param {string} params.property - (Required) Required. The property for which to acknowledge user data collection.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.properties.acknowledgeUserDataCollection = (params) => this._makeRequest('v1alpha/{+property}:acknowledgeUserDataCollection', 'POST', params);

    /**
     * Lookup for Google Signals settings for a property.
     * @param {string} params.name - (Required) Required. The name of the google signals settings to retrieve. Format: properties/{property}/googleSignalsSettings
     * @return {object} The API response object.
     */
    this.properties.getGoogleSignalsSettings = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * Updates Google Signals settings for a property.
     * @param {string} params.name - (Required) Output only. Resource name of this setting. Format: properties/{property_id}/googleSignalsSettings Example: "properties/1000/googleSignalsSettings"
     * @param {string} params.updateMask - Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.properties.updateGoogleSignalsSettings = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);

    /**
     * Returns the singleton data retention settings for this property.
     * @param {string} params.name - (Required) Required. The name of the settings to lookup. Format: properties/{property}/dataRetentionSettings Example: "properties/1000/dataRetentionSettings"
     * @return {object} The API response object.
     */
    this.properties.getDataRetentionSettings = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * Updates the singleton data retention settings for this property.
     * @param {string} params.name - (Required) Output only. Resource name for this DataRetentionSetting resource. Format: properties/{property}/dataRetentionSettings
     * @param {string} params.updateMask - Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.properties.updateDataRetentionSettings = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);

    /**
     * Lookup for a AttributionSettings singleton.
     * @param {string} params.name - (Required) Required. The name of the attribution settings to retrieve. Format: properties/{property}/attributionSettings
     * @return {object} The API response object.
     */
    this.properties.getAttributionSettings = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * Updates attribution settings on a property.
     * @param {string} params.name - (Required) Output only. Resource name of this attribution settings resource. Format: properties/{property_id}/attributionSettings Example: "properties/1000/attributionSettings"
     * @param {string} params.updateMask - Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.properties.updateAttributionSettings = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);

    /**
     * Returns a customized report of data access records. The report provides records of each time a user reads Google Analytics reporting data. Access records are retained for up to 2 years. Data Access Reports can be requested for a property. Reports may be requested for any property, but dimensions that aren't related to quota can only be requested on Google Analytics 360 properties. This method is only available to Administrators. These data access records include GA UI Reporting, GA UI Explorations, GA Data API, and other products like Firebase & Admob that can retrieve data from Google Analytics through a linkage. These records don't include property configuration changes like adding a stream or changing a property's time zone. For configuration change history, see [searchChangeHistoryEvents](https://developers.google.com/analytics/devguides/config/admin/v1/rest/v1alpha/accounts/searchChangeHistoryEvents). To give your feedback on this API, complete the [Google Analytics Access Reports feedback](https://docs.google.com/forms/d/e/1FAIpQLSdmEBUrMzAEdiEKk5TV5dEHvDUZDRlgWYdQdAeSdtR4hVjEhw/viewform) form.
     * @param {string} params.entity - (Required) The Data Access Report supports requesting at the property level or account level. If requested at the account level, Data Access Reports include all access for all properties under that account. To request at the property level, entity should be for example 'properties/123' if "123" is your Google Analytics property ID. To request at the account level, entity should be for example 'accounts/1234' if "1234" is your Google Analytics Account ID.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.properties.runAccessReport = (params) => this._makeRequest('v1alpha/{+entity}:runAccessReport', 'POST', params);

    /**
     * Create a roll-up property and all roll-up property source links.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.properties.createRollupProperty = (params) => this._makeRequest('v1alpha/properties:createRollupProperty', 'POST', params);

    /**
     * Create a subproperty and a subproperty event filter that applies to the created subproperty.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.properties.provisionSubproperty = (params) => this._makeRequest('v1alpha/properties:provisionSubproperty', 'POST', params);

    /**
     * Submits a request for user deletion for a property.
     * @param {string} params.name - (Required) Required. The name of the property to submit user deletion for.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.properties.submitUserDeletion = (params) => this._makeRequest('v1alpha/{+name}:submitUserDeletion', 'POST', params);

    /**
     * Returns the singleton data retention settings for this property.
     * @param {string} params.name - (Required) Required. The name of the settings to lookup. Format: properties/{property}/reportingIdentitySettings Example: "properties/1000/reportingIdentitySettings"
     * @return {object} The API response object.
     */
    this.properties.getReportingIdentitySettings = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    this.properties.firebaseLinks = {};

    /**
     * Creates a FirebaseLink. Properties can have at most one FirebaseLink.
     * @param {string} params.parent - (Required) Required. Format: properties/{property_id} Example: `properties/1234`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.properties.firebaseLinks.create = (params) => this._makeRequest('v1alpha/{+parent}/firebaseLinks', 'POST', params);

    /**
     * Deletes a FirebaseLink on a property
     * @param {string} params.name - (Required) Required. Format: properties/{property_id}/firebaseLinks/{firebase_link_id} Example: `properties/1234/firebaseLinks/5678`
     * @return {object} The API response object.
     */
    this.properties.firebaseLinks.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);

    /**
     * Lists FirebaseLinks on a property. Properties can have at most one FirebaseLink.
     * @param {integer} params.pageSize - The maximum number of resources to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)
     * @param {string} params.pageToken - A page token, received from a previous `ListFirebaseLinks` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListFirebaseLinks` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. Format: properties/{property_id} Example: `properties/1234`
     * @return {object} The API response object.
     */
    this.properties.firebaseLinks.list = (params) => this._makeRequest('v1alpha/{+parent}/firebaseLinks', 'GET', params);

    this.properties.dataStreams = {};

    /**
     * Returns the Site Tag for the specified web stream. Site Tags are immutable singletons.
     * @param {string} params.name - (Required) Required. The name of the site tag to lookup. Note that site tags are singletons and do not have unique IDs. Format: properties/{property_id}/dataStreams/{stream_id}/globalSiteTag Example: `properties/123/dataStreams/456/globalSiteTag`
     * @return {object} The API response object.
     */
    this.properties.dataStreams.getGlobalSiteTag = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * Creates a DataStream.
     * @param {string} params.parent - (Required) Required. Example format: properties/1234
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.properties.dataStreams.create = (params) => this._makeRequest('v1alpha/{+parent}/dataStreams', 'POST', params);

    /**
     * Deletes a DataStream on a property.
     * @param {string} params.name - (Required) Required. The name of the DataStream to delete. Example format: properties/1234/dataStreams/5678
     * @return {object} The API response object.
     */
    this.properties.dataStreams.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);

    /**
     * Updates a DataStream on a property.
     * @param {string} params.name - (Required) Output only. Resource name of this Data Stream. Format: properties/{property_id}/dataStreams/{stream_id} Example: "properties/1000/dataStreams/2000"
     * @param {string} params.updateMask - Required. The list of fields to be updated. Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.properties.dataStreams.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);

    /**
     * Lists DataStreams on a property.
     * @param {integer} params.pageSize - The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum).
     * @param {string} params.pageToken - A page token, received from a previous `ListDataStreams` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListDataStreams` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. Example format: properties/1234
     * @return {object} The API response object.
     */
    this.properties.dataStreams.list = (params) => this._makeRequest('v1alpha/{+parent}/dataStreams', 'GET', params);

    /**
     * Lookup for a single DataStream.
     * @param {string} params.name - (Required) Required. The name of the DataStream to get. Example format: properties/1234/dataStreams/5678
     * @return {object} The API response object.
     */
    this.properties.dataStreams.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * Returns the enhanced measurement settings for this data stream. Note that the stream must enable enhanced measurement for these settings to take effect.
     * @param {string} params.name - (Required) Required. The name of the settings to lookup. Format: properties/{property}/dataStreams/{data_stream}/enhancedMeasurementSettings Example: "properties/1000/dataStreams/2000/enhancedMeasurementSettings"
     * @return {object} The API response object.
     */
    this.properties.dataStreams.getEnhancedMeasurementSettings = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * Updates the enhanced measurement settings for this data stream. Note that the stream must enable enhanced measurement for these settings to take effect.
     * @param {string} params.name - (Required) Output only. Resource name of the Enhanced Measurement Settings. Format: properties/{property_id}/dataStreams/{data_stream}/enhancedMeasurementSettings Example: "properties/1000/dataStreams/2000/enhancedMeasurementSettings"
     * @param {string} params.updateMask - Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.properties.dataStreams.updateEnhancedMeasurementSettings = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);

    /**
     * Updates a DataRedactionSettings on a property.
     * @param {string} params.name - (Required) Output only. Name of this Data Redaction Settings resource. Format: properties/{property_id}/dataStreams/{data_stream}/dataRedactionSettings Example: "properties/1000/dataStreams/2000/dataRedactionSettings"
     * @param {string} params.updateMask - Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.properties.dataStreams.updateDataRedactionSettings = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);

    /**
     * Lookup for a single DataRedactionSettings.
     * @param {string} params.name - (Required) Required. The name of the settings to lookup. Format: properties/{property}/dataStreams/{data_stream}/dataRedactionSettings Example: "properties/1000/dataStreams/2000/dataRedactionSettings"
     * @return {object} The API response object.
     */
    this.properties.dataStreams.getDataRedactionSettings = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    this.properties.dataStreams.measurementProtocolSecrets = {};

    /**
     * Lookup for a single MeasurementProtocolSecret.
     * @param {string} params.name - (Required) Required. The name of the measurement protocol secret to lookup. Format: properties/{property}/dataStreams/{dataStream}/measurementProtocolSecrets/{measurementProtocolSecret}
     * @return {object} The API response object.
     */
    this.properties.dataStreams.measurementProtocolSecrets.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * Returns child MeasurementProtocolSecrets under the specified parent Property.
     * @param {integer} params.pageSize - The maximum number of resources to return. If unspecified, at most 10 resources will be returned. The maximum value is 10. Higher values will be coerced to the maximum.
     * @param {string} params.pageToken - A page token, received from a previous `ListMeasurementProtocolSecrets` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListMeasurementProtocolSecrets` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The resource name of the parent stream. Format: properties/{property}/dataStreams/{dataStream}/measurementProtocolSecrets
     * @return {object} The API response object.
     */
    this.properties.dataStreams.measurementProtocolSecrets.list = (params) => this._makeRequest('v1alpha/{+parent}/measurementProtocolSecrets', 'GET', params);

    /**
     * Creates a measurement protocol secret.
     * @param {string} params.parent - (Required) Required. The parent resource where this secret will be created. Format: properties/{property}/dataStreams/{dataStream}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.properties.dataStreams.measurementProtocolSecrets.create = (params) => this._makeRequest('v1alpha/{+parent}/measurementProtocolSecrets', 'POST', params);

    /**
     * Deletes target MeasurementProtocolSecret.
     * @param {string} params.name - (Required) Required. The name of the MeasurementProtocolSecret to delete. Format: properties/{property}/dataStreams/{dataStream}/measurementProtocolSecrets/{measurementProtocolSecret}
     * @return {object} The API response object.
     */
    this.properties.dataStreams.measurementProtocolSecrets.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);

    /**
     * Updates a measurement protocol secret.
     * @param {string} params.name - (Required) Output only. Resource name of this secret. This secret may be a child of any type of stream. Format: properties/{property}/dataStreams/{dataStream}/measurementProtocolSecrets/{measurementProtocolSecret}
     * @param {string} params.updateMask - Required. The list of fields to be updated. Omitted fields will not be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.properties.dataStreams.measurementProtocolSecrets.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);

    this.properties.dataStreams.sKAdNetworkConversionValueSchema = {};

    /**
     * Looks up a single SKAdNetworkConversionValueSchema.
     * @param {string} params.name - (Required) Required. The resource name of SKAdNetwork conversion value schema to look up. Format: properties/{property}/dataStreams/{dataStream}/sKAdNetworkConversionValueSchema/{skadnetwork_conversion_value_schema}
     * @return {object} The API response object.
     */
    this.properties.dataStreams.sKAdNetworkConversionValueSchema.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * Creates a SKAdNetworkConversionValueSchema.
     * @param {string} params.parent - (Required) Required. The parent resource where this schema will be created. Format: properties/{property}/dataStreams/{dataStream}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.properties.dataStreams.sKAdNetworkConversionValueSchema.create = (params) => this._makeRequest('v1alpha/{+parent}/sKAdNetworkConversionValueSchema', 'POST', params);

    /**
     * Deletes target SKAdNetworkConversionValueSchema.
     * @param {string} params.name - (Required) Required. The name of the SKAdNetworkConversionValueSchema to delete. Format: properties/{property}/dataStreams/{dataStream}/sKAdNetworkConversionValueSchema/{skadnetwork_conversion_value_schema}
     * @return {object} The API response object.
     */
    this.properties.dataStreams.sKAdNetworkConversionValueSchema.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);

    /**
     * Updates a SKAdNetworkConversionValueSchema.
     * @param {string} params.name - (Required) Output only. Resource name of the schema. This will be child of ONLY an iOS stream, and there can be at most one such child under an iOS stream. Format: properties/{property}/dataStreams/{dataStream}/sKAdNetworkConversionValueSchema
     * @param {string} params.updateMask - Required. The list of fields to be updated. Omitted fields will not be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.properties.dataStreams.sKAdNetworkConversionValueSchema.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);

    /**
     * Lists SKAdNetworkConversionValueSchema on a stream. Properties can have at most one SKAdNetworkConversionValueSchema.
     * @param {integer} params.pageSize - The maximum number of resources to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)
     * @param {string} params.pageToken - A page token, received from a previous `ListSKAdNetworkConversionValueSchemas` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListSKAdNetworkConversionValueSchema` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The DataStream resource to list schemas for. Format: properties/{property_id}/dataStreams/{dataStream} Example: properties/1234/dataStreams/5678
     * @return {object} The API response object.
     */
    this.properties.dataStreams.sKAdNetworkConversionValueSchema.list = (params) => this._makeRequest('v1alpha/{+parent}/sKAdNetworkConversionValueSchema', 'GET', params);

    this.properties.dataStreams.eventCreateRules = {};

    /**
     * Lookup for a single EventCreateRule.
     * @param {string} params.name - (Required) Required. The name of the EventCreateRule to get. Example format: properties/123/dataStreams/456/eventCreateRules/789
     * @return {object} The API response object.
     */
    this.properties.dataStreams.eventCreateRules.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * Lists EventCreateRules on a web data stream.
     * @param {integer} params.pageSize - The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum).
     * @param {string} params.pageToken - A page token, received from a previous `ListEventCreateRules` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListEventCreateRules` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. Example format: properties/123/dataStreams/456
     * @return {object} The API response object.
     */
    this.properties.dataStreams.eventCreateRules.list = (params) => this._makeRequest('v1alpha/{+parent}/eventCreateRules', 'GET', params);

    /**
     * Creates an EventCreateRule.
     * @param {string} params.parent - (Required) Required. Example format: properties/123/dataStreams/456
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.properties.dataStreams.eventCreateRules.create = (params) => this._makeRequest('v1alpha/{+parent}/eventCreateRules', 'POST', params);

    /**
     * Updates an EventCreateRule.
     * @param {string} params.name - (Required) Output only. Resource name for this EventCreateRule resource. Format: properties/{property}/dataStreams/{data_stream}/eventCreateRules/{event_create_rule}
     * @param {string} params.updateMask - Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.properties.dataStreams.eventCreateRules.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);

    /**
     * Deletes an EventCreateRule.
     * @param {string} params.name - (Required) Required. Example format: properties/123/dataStreams/456/eventCreateRules/789
     * @return {object} The API response object.
     */
    this.properties.dataStreams.eventCreateRules.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);

    this.properties.dataStreams.eventEditRules = {};

    /**
     * Lookup for a single EventEditRule.
     * @param {string} params.name - (Required) Required. The name of the EventEditRule to get. Example format: properties/123/dataStreams/456/eventEditRules/789
     * @return {object} The API response object.
     */
    this.properties.dataStreams.eventEditRules.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * Lists EventEditRules on a web data stream.
     * @param {integer} params.pageSize - Optional. The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum).
     * @param {string} params.pageToken - Optional. A page token, received from a previous `ListEventEditRules` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListEventEditRules` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. Example format: properties/123/dataStreams/456
     * @return {object} The API response object.
     */
    this.properties.dataStreams.eventEditRules.list = (params) => this._makeRequest('v1alpha/{+parent}/eventEditRules', 'GET', params);

    /**
     * Creates an EventEditRule.
     * @param {string} params.parent - (Required) Required. Example format: properties/123/dataStreams/456
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.properties.dataStreams.eventEditRules.create = (params) => this._makeRequest('v1alpha/{+parent}/eventEditRules', 'POST', params);

    /**
     * Updates an EventEditRule.
     * @param {string} params.name - (Required) Identifier. Resource name for this EventEditRule resource. Format: properties/{property}/dataStreams/{data_stream}/eventEditRules/{event_edit_rule}
     * @param {string} params.updateMask - Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.properties.dataStreams.eventEditRules.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);

    /**
     * Deletes an EventEditRule.
     * @param {string} params.name - (Required) Required. Example format: properties/123/dataStreams/456/eventEditRules/789
     * @return {object} The API response object.
     */
    this.properties.dataStreams.eventEditRules.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);

    /**
     * Changes the processing order of event edit rules on the specified stream.
     * @param {string} params.parent - (Required) Required. Example format: properties/123/dataStreams/456
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.properties.dataStreams.eventEditRules.reorder = (params) => this._makeRequest('v1alpha/{+parent}/eventEditRules:reorder', 'POST', params);

    this.properties.googleAdsLinks = {};

    /**
     * Creates a GoogleAdsLink.
     * @param {string} params.parent - (Required) Required. Example format: properties/1234
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.properties.googleAdsLinks.create = (params) => this._makeRequest('v1alpha/{+parent}/googleAdsLinks', 'POST', params);

    /**
     * Updates a GoogleAdsLink on a property
     * @param {string} params.name - (Required) Output only. Format: properties/{propertyId}/googleAdsLinks/{googleAdsLinkId} Note: googleAdsLinkId is not the Google Ads customer ID.
     * @param {string} params.updateMask - Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.properties.googleAdsLinks.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);

    /**
     * Deletes a GoogleAdsLink on a property
     * @param {string} params.name - (Required) Required. Example format: properties/1234/googleAdsLinks/5678
     * @return {object} The API response object.
     */
    this.properties.googleAdsLinks.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);

    /**
     * Lists GoogleAdsLinks on a property.
     * @param {integer} params.pageSize - The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum).
     * @param {string} params.pageToken - A page token, received from a previous `ListGoogleAdsLinks` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListGoogleAdsLinks` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. Example format: properties/1234
     * @return {object} The API response object.
     */
    this.properties.googleAdsLinks.list = (params) => this._makeRequest('v1alpha/{+parent}/googleAdsLinks', 'GET', params);

    this.properties.conversionEvents = {};

    /**
     * Deprecated: Use `CreateKeyEvent` instead. Creates a conversion event with the specified attributes.
     * @param {string} params.parent - (Required) Required. The resource name of the parent property where this conversion event will be created. Format: properties/123
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.properties.conversionEvents.create = (params) => this._makeRequest('v1alpha/{+parent}/conversionEvents', 'POST', params);

    /**
     * Deprecated: Use `UpdateKeyEvent` instead. Updates a conversion event with the specified attributes.
     * @param {string} params.name - (Required) Output only. Resource name of this conversion event. Format: properties/{property}/conversionEvents/{conversion_event}
     * @param {string} params.updateMask - Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.properties.conversionEvents.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);

    /**
     * Deprecated: Use `GetKeyEvent` instead. Retrieve a single conversion event.
     * @param {string} params.name - (Required) Required. The resource name of the conversion event to retrieve. Format: properties/{property}/conversionEvents/{conversion_event} Example: "properties/123/conversionEvents/456"
     * @return {object} The API response object.
     */
    this.properties.conversionEvents.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * Deprecated: Use `DeleteKeyEvent` instead. Deletes a conversion event in a property.
     * @param {string} params.name - (Required) Required. The resource name of the conversion event to delete. Format: properties/{property}/conversionEvents/{conversion_event} Example: "properties/123/conversionEvents/456"
     * @return {object} The API response object.
     */
    this.properties.conversionEvents.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);

    /**
     * Deprecated: Use `ListKeyEvents` instead. Returns a list of conversion events in the specified parent property. Returns an empty list if no conversion events are found.
     * @param {integer} params.pageSize - The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)
     * @param {string} params.pageToken - A page token, received from a previous `ListConversionEvents` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListConversionEvents` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The resource name of the parent property. Example: 'properties/123'
     * @return {object} The API response object.
     */
    this.properties.conversionEvents.list = (params) => this._makeRequest('v1alpha/{+parent}/conversionEvents', 'GET', params);

    this.properties.keyEvents = {};

    /**
     * Creates a Key Event.
     * @param {string} params.parent - (Required) Required. The resource name of the parent property where this Key Event will be created. Format: properties/123
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.properties.keyEvents.create = (params) => this._makeRequest('v1alpha/{+parent}/keyEvents', 'POST', params);

    /**
     * Updates a Key Event.
     * @param {string} params.name - (Required) Output only. Resource name of this key event. Format: properties/{property}/keyEvents/{key_event}
     * @param {string} params.updateMask - Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.properties.keyEvents.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);

    /**
     * Retrieve a single Key Event.
     * @param {string} params.name - (Required) Required. The resource name of the Key Event to retrieve. Format: properties/{property}/keyEvents/{key_event} Example: "properties/123/keyEvents/456"
     * @return {object} The API response object.
     */
    this.properties.keyEvents.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * Deletes a Key Event.
     * @param {string} params.name - (Required) Required. The resource name of the Key Event to delete. Format: properties/{property}/keyEvents/{key_event} Example: "properties/123/keyEvents/456"
     * @return {object} The API response object.
     */
    this.properties.keyEvents.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);

    /**
     * Returns a list of Key Events in the specified parent property. Returns an empty list if no Key Events are found.
     * @param {integer} params.pageSize - The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)
     * @param {string} params.pageToken - A page token, received from a previous `ListKeyEvents` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListKeyEvents` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The resource name of the parent property. Example: 'properties/123'
     * @return {object} The API response object.
     */
    this.properties.keyEvents.list = (params) => this._makeRequest('v1alpha/{+parent}/keyEvents', 'GET', params);

    this.properties.displayVideo360AdvertiserLinks = {};

    /**
     * Look up a single DisplayVideo360AdvertiserLink
     * @param {string} params.name - (Required) Required. The name of the DisplayVideo360AdvertiserLink to get. Example format: properties/1234/displayVideo360AdvertiserLink/5678
     * @return {object} The API response object.
     */
    this.properties.displayVideo360AdvertiserLinks.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * Lists all DisplayVideo360AdvertiserLinks on a property.
     * @param {integer} params.pageSize - The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum).
     * @param {string} params.pageToken - A page token, received from a previous `ListDisplayVideo360AdvertiserLinks` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListDisplayVideo360AdvertiserLinks` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. Example format: properties/1234
     * @return {object} The API response object.
     */
    this.properties.displayVideo360AdvertiserLinks.list = (params) => this._makeRequest('v1alpha/{+parent}/displayVideo360AdvertiserLinks', 'GET', params);

    /**
     * Creates a DisplayVideo360AdvertiserLink. This can only be utilized by users who have proper authorization both on the Google Analytics property and on the Display & Video 360 advertiser. Users who do not have access to the Display & Video 360 advertiser should instead seek to create a DisplayVideo360LinkProposal.
     * @param {string} params.parent - (Required) Required. Example format: properties/1234
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.properties.displayVideo360AdvertiserLinks.create = (params) => this._makeRequest('v1alpha/{+parent}/displayVideo360AdvertiserLinks', 'POST', params);

    /**
     * Deletes a DisplayVideo360AdvertiserLink on a property.
     * @param {string} params.name - (Required) Required. The name of the DisplayVideo360AdvertiserLink to delete. Example format: properties/1234/displayVideo360AdvertiserLinks/5678
     * @return {object} The API response object.
     */
    this.properties.displayVideo360AdvertiserLinks.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);

    /**
     * Updates a DisplayVideo360AdvertiserLink on a property.
     * @param {string} params.name - (Required) Output only. The resource name for this DisplayVideo360AdvertiserLink resource. Format: properties/{propertyId}/displayVideo360AdvertiserLinks/{linkId} Note: linkId is not the Display & Video 360 Advertiser ID
     * @param {string} params.updateMask - Required. The list of fields to be updated. Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.properties.displayVideo360AdvertiserLinks.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);

    this.properties.displayVideo360AdvertiserLinkProposals = {};

    /**
     * Lookup for a single DisplayVideo360AdvertiserLinkProposal.
     * @param {string} params.name - (Required) Required. The name of the DisplayVideo360AdvertiserLinkProposal to get. Example format: properties/1234/displayVideo360AdvertiserLinkProposals/5678
     * @return {object} The API response object.
     */
    this.properties.displayVideo360AdvertiserLinkProposals.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * Lists DisplayVideo360AdvertiserLinkProposals on a property.
     * @param {integer} params.pageSize - The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum).
     * @param {string} params.pageToken - A page token, received from a previous `ListDisplayVideo360AdvertiserLinkProposals` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListDisplayVideo360AdvertiserLinkProposals` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. Example format: properties/1234
     * @return {object} The API response object.
     */
    this.properties.displayVideo360AdvertiserLinkProposals.list = (params) => this._makeRequest('v1alpha/{+parent}/displayVideo360AdvertiserLinkProposals', 'GET', params);

    /**
     * Creates a DisplayVideo360AdvertiserLinkProposal.
     * @param {string} params.parent - (Required) Required. Example format: properties/1234
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.properties.displayVideo360AdvertiserLinkProposals.create = (params) => this._makeRequest('v1alpha/{+parent}/displayVideo360AdvertiserLinkProposals', 'POST', params);

    /**
     * Deletes a DisplayVideo360AdvertiserLinkProposal on a property. This can only be used on cancelled proposals.
     * @param {string} params.name - (Required) Required. The name of the DisplayVideo360AdvertiserLinkProposal to delete. Example format: properties/1234/displayVideo360AdvertiserLinkProposals/5678
     * @return {object} The API response object.
     */
    this.properties.displayVideo360AdvertiserLinkProposals.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);

    /**
     * Approves a DisplayVideo360AdvertiserLinkProposal. The DisplayVideo360AdvertiserLinkProposal will be deleted and a new DisplayVideo360AdvertiserLink will be created.
     * @param {string} params.name - (Required) Required. The name of the DisplayVideo360AdvertiserLinkProposal to approve. Example format: properties/1234/displayVideo360AdvertiserLinkProposals/5678
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.properties.displayVideo360AdvertiserLinkProposals.approve = (params) => this._makeRequest('v1alpha/{+name}:approve', 'POST', params);

    /**
     * Cancels a DisplayVideo360AdvertiserLinkProposal. Cancelling can mean either: - Declining a proposal initiated from Display & Video 360 - Withdrawing a proposal initiated from Google Analytics After being cancelled, a proposal will eventually be deleted automatically.
     * @param {string} params.name - (Required) Required. The name of the DisplayVideo360AdvertiserLinkProposal to cancel. Example format: properties/1234/displayVideo360AdvertiserLinkProposals/5678
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.properties.displayVideo360AdvertiserLinkProposals.cancel = (params) => this._makeRequest('v1alpha/{+name}:cancel', 'POST', params);

    this.properties.customDimensions = {};

    /**
     * Creates a CustomDimension.
     * @param {string} params.parent - (Required) Required. Example format: properties/1234
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.properties.customDimensions.create = (params) => this._makeRequest('v1alpha/{+parent}/customDimensions', 'POST', params);

    /**
     * Updates a CustomDimension on a property.
     * @param {string} params.name - (Required) Output only. Resource name for this CustomDimension resource. Format: properties/{property}/customDimensions/{customDimension}
     * @param {string} params.updateMask - Required. The list of fields to be updated. Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.properties.customDimensions.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);

    /**
     * Lists CustomDimensions on a property.
     * @param {integer} params.pageSize - The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum).
     * @param {string} params.pageToken - A page token, received from a previous `ListCustomDimensions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListCustomDimensions` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. Example format: properties/1234
     * @return {object} The API response object.
     */
    this.properties.customDimensions.list = (params) => this._makeRequest('v1alpha/{+parent}/customDimensions', 'GET', params);

    /**
     * Archives a CustomDimension on a property.
     * @param {string} params.name - (Required) Required. The name of the CustomDimension to archive. Example format: properties/1234/customDimensions/5678
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.properties.customDimensions.archive = (params) => this._makeRequest('v1alpha/{+name}:archive', 'POST', params);

    /**
     * Lookup for a single CustomDimension.
     * @param {string} params.name - (Required) Required. The name of the CustomDimension to get. Example format: properties/1234/customDimensions/5678
     * @return {object} The API response object.
     */
    this.properties.customDimensions.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    this.properties.customMetrics = {};

    /**
     * Creates a CustomMetric.
     * @param {string} params.parent - (Required) Required. Example format: properties/1234
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.properties.customMetrics.create = (params) => this._makeRequest('v1alpha/{+parent}/customMetrics', 'POST', params);

    /**
     * Updates a CustomMetric on a property.
     * @param {string} params.name - (Required) Output only. Resource name for this CustomMetric resource. Format: properties/{property}/customMetrics/{customMetric}
     * @param {string} params.updateMask - Required. The list of fields to be updated. Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.properties.customMetrics.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);

    /**
     * Lists CustomMetrics on a property.
     * @param {integer} params.pageSize - The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum).
     * @param {string} params.pageToken - A page token, received from a previous `ListCustomMetrics` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListCustomMetrics` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. Example format: properties/1234
     * @return {object} The API response object.
     */
    this.properties.customMetrics.list = (params) => this._makeRequest('v1alpha/{+parent}/customMetrics', 'GET', params);

    /**
     * Archives a CustomMetric on a property.
     * @param {string} params.name - (Required) Required. The name of the CustomMetric to archive. Example format: properties/1234/customMetrics/5678
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.properties.customMetrics.archive = (params) => this._makeRequest('v1alpha/{+name}:archive', 'POST', params);

    /**
     * Lookup for a single CustomMetric.
     * @param {string} params.name - (Required) Required. The name of the CustomMetric to get. Example format: properties/1234/customMetrics/5678
     * @return {object} The API response object.
     */
    this.properties.customMetrics.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    this.properties.audiences = {};

    /**
     * Lookup for a single Audience. Audiences created before 2020 may not be supported. Default audiences will not show filter definitions.
     * @param {string} params.name - (Required) Required. The name of the Audience to get. Example format: properties/1234/audiences/5678
     * @return {object} The API response object.
     */
    this.properties.audiences.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * Lists Audiences on a property. Audiences created before 2020 may not be supported. Default audiences will not show filter definitions.
     * @param {integer} params.pageSize - The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum).
     * @param {string} params.pageToken - A page token, received from a previous `ListAudiences` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAudiences` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. Example format: properties/1234
     * @return {object} The API response object.
     */
    this.properties.audiences.list = (params) => this._makeRequest('v1alpha/{+parent}/audiences', 'GET', params);

    /**
     * Creates an Audience.
     * @param {string} params.parent - (Required) Required. Example format: properties/1234
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.properties.audiences.create = (params) => this._makeRequest('v1alpha/{+parent}/audiences', 'POST', params);

    /**
     * Updates an Audience on a property.
     * @param {string} params.name - (Required) Output only. The resource name for this Audience resource. Format: properties/{propertyId}/audiences/{audienceId}
     * @param {string} params.updateMask - Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.properties.audiences.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);

    /**
     * Archives an Audience on a property.
     * @param {string} params.name - (Required) Required. Example format: properties/1234/audiences/5678
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.properties.audiences.archive = (params) => this._makeRequest('v1alpha/{+name}:archive', 'POST', params);

    this.properties.searchAds360Links = {};

    /**
     * Look up a single SearchAds360Link
     * @param {string} params.name - (Required) Required. The name of the SearchAds360Link to get. Example format: properties/1234/SearchAds360Link/5678
     * @return {object} The API response object.
     */
    this.properties.searchAds360Links.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * Lists all SearchAds360Links on a property.
     * @param {integer} params.pageSize - The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum).
     * @param {string} params.pageToken - A page token, received from a previous `ListSearchAds360Links` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListSearchAds360Links` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. Example format: properties/1234
     * @return {object} The API response object.
     */
    this.properties.searchAds360Links.list = (params) => this._makeRequest('v1alpha/{+parent}/searchAds360Links', 'GET', params);

    /**
     * Creates a SearchAds360Link.
     * @param {string} params.parent - (Required) Required. Example format: properties/1234
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.properties.searchAds360Links.create = (params) => this._makeRequest('v1alpha/{+parent}/searchAds360Links', 'POST', params);

    /**
     * Deletes a SearchAds360Link on a property.
     * @param {string} params.name - (Required) Required. The name of the SearchAds360Link to delete. Example format: properties/1234/SearchAds360Links/5678
     * @return {object} The API response object.
     */
    this.properties.searchAds360Links.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);

    /**
     * Updates a SearchAds360Link on a property.
     * @param {string} params.name - (Required) Output only. The resource name for this SearchAds360Link resource. Format: properties/{propertyId}/searchAds360Links/{linkId} Note: linkId is not the Search Ads 360 advertiser ID
     * @param {string} params.updateMask - Required. The list of fields to be updated. Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.properties.searchAds360Links.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);

    this.properties.accessBindings = {};

    /**
     * Creates an access binding on an account or property.
     * @param {string} params.parent - (Required) Required. Formats: - accounts/{account} - properties/{property}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.properties.accessBindings.create = (params) => this._makeRequest('v1alpha/{+parent}/accessBindings', 'POST', params);

    /**
     * Gets information about an access binding.
     * @param {string} params.name - (Required) Required. The name of the access binding to retrieve. Formats: - accounts/{account}/accessBindings/{accessBinding} - properties/{property}/accessBindings/{accessBinding}
     * @return {object} The API response object.
     */
    this.properties.accessBindings.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * Updates an access binding on an account or property.
     * @param {string} params.name - (Required) Output only. Resource name of this binding. Format: accounts/{account}/accessBindings/{access_binding} or properties/{property}/accessBindings/{access_binding} Example: "accounts/100/accessBindings/200"
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.properties.accessBindings.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);

    /**
     * Deletes an access binding on an account or property.
     * @param {string} params.name - (Required) Required. Formats: - accounts/{account}/accessBindings/{accessBinding} - properties/{property}/accessBindings/{accessBinding}
     * @return {object} The API response object.
     */
    this.properties.accessBindings.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);

    /**
     * Lists all access bindings on an account or property.
     * @param {integer} params.pageSize - The maximum number of access bindings to return. The service may return fewer than this value. If unspecified, at most 200 access bindings will be returned. The maximum value is 500; values above 500 will be coerced to 500.
     * @param {string} params.pageToken - A page token, received from a previous `ListAccessBindings` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAccessBindings` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. Formats: - accounts/{account} - properties/{property}
     * @return {object} The API response object.
     */
    this.properties.accessBindings.list = (params) => this._makeRequest('v1alpha/{+parent}/accessBindings', 'GET', params);

    /**
     * Creates information about multiple access bindings to an account or property. This method is transactional. If any AccessBinding cannot be created, none of the AccessBindings will be created.
     * @param {string} params.parent - (Required) Required. The account or property that owns the access bindings. The parent field in the CreateAccessBindingRequest messages must either be empty or match this field. Formats: - accounts/{account} - properties/{property}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.properties.accessBindings.batchCreate = (params) => this._makeRequest('v1alpha/{+parent}/accessBindings:batchCreate', 'POST', params);

    /**
     * Gets information about multiple access bindings to an account or property.
     * @param {string} params.names - Required. The names of the access bindings to retrieve. A maximum of 1000 access bindings can be retrieved in a batch. Formats: - accounts/{account}/accessBindings/{accessBinding} - properties/{property}/accessBindings/{accessBinding}
     * @param {string} params.parent - (Required) Required. The account or property that owns the access bindings. The parent of all provided values for the 'names' field must match this field. Formats: - accounts/{account} - properties/{property}
     * @return {object} The API response object.
     */
    this.properties.accessBindings.batchGet = (params) => this._makeRequest('v1alpha/{+parent}/accessBindings:batchGet', 'GET', params);

    /**
     * Updates information about multiple access bindings to an account or property.
     * @param {string} params.parent - (Required) Required. The account or property that owns the access bindings. The parent of all provided AccessBinding in UpdateAccessBindingRequest messages must match this field. Formats: - accounts/{account} - properties/{property}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.properties.accessBindings.batchUpdate = (params) => this._makeRequest('v1alpha/{+parent}/accessBindings:batchUpdate', 'POST', params);

    /**
     * Deletes information about multiple users' links to an account or property.
     * @param {string} params.parent - (Required) Required. The account or property that owns the access bindings. The parent of all provided values for the 'names' field in DeleteAccessBindingRequest messages must match this field. Formats: - accounts/{account} - properties/{property}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.properties.accessBindings.batchDelete = (params) => this._makeRequest('v1alpha/{+parent}/accessBindings:batchDelete', 'POST', params);

    this.properties.expandedDataSets = {};

    /**
     * Lookup for a single ExpandedDataSet.
     * @param {string} params.name - (Required) Required. The name of the ExpandedDataSet to get. Example format: properties/1234/expandedDataSets/5678
     * @return {object} The API response object.
     */
    this.properties.expandedDataSets.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * Lists ExpandedDataSets on a property.
     * @param {integer} params.pageSize - The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum).
     * @param {string} params.pageToken - A page token, received from a previous `ListExpandedDataSets` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListExpandedDataSet` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. Example format: properties/1234
     * @return {object} The API response object.
     */
    this.properties.expandedDataSets.list = (params) => this._makeRequest('v1alpha/{+parent}/expandedDataSets', 'GET', params);

    /**
     * Creates a ExpandedDataSet.
     * @param {string} params.parent - (Required) Required. Example format: properties/1234
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.properties.expandedDataSets.create = (params) => this._makeRequest('v1alpha/{+parent}/expandedDataSets', 'POST', params);

    /**
     * Updates a ExpandedDataSet on a property.
     * @param {string} params.name - (Required) Output only. The resource name for this ExpandedDataSet resource. Format: properties/{property_id}/expandedDataSets/{expanded_data_set}
     * @param {string} params.updateMask - Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.properties.expandedDataSets.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);

    /**
     * Deletes a ExpandedDataSet on a property.
     * @param {string} params.name - (Required) Required. Example format: properties/1234/expandedDataSets/5678
     * @return {object} The API response object.
     */
    this.properties.expandedDataSets.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);

    this.properties.channelGroups = {};

    /**
     * Lookup for a single ChannelGroup.
     * @param {string} params.name - (Required) Required. The ChannelGroup to get. Example format: properties/1234/channelGroups/5678
     * @return {object} The API response object.
     */
    this.properties.channelGroups.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * Lists ChannelGroups on a property.
     * @param {integer} params.pageSize - The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum).
     * @param {string} params.pageToken - A page token, received from a previous `ListChannelGroups` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListChannelGroups` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The property for which to list ChannelGroups. Example format: properties/1234
     * @return {object} The API response object.
     */
    this.properties.channelGroups.list = (params) => this._makeRequest('v1alpha/{+parent}/channelGroups', 'GET', params);

    /**
     * Creates a ChannelGroup.
     * @param {string} params.parent - (Required) Required. The property for which to create a ChannelGroup. Example format: properties/1234
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.properties.channelGroups.create = (params) => this._makeRequest('v1alpha/{+parent}/channelGroups', 'POST', params);

    /**
     * Updates a ChannelGroup.
     * @param {string} params.name - (Required) Output only. The resource name for this Channel Group resource. Format: properties/{property}/channelGroups/{channel_group}
     * @param {string} params.updateMask - Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.properties.channelGroups.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);

    /**
     * Deletes a ChannelGroup on a property.
     * @param {string} params.name - (Required) Required. The ChannelGroup to delete. Example format: properties/1234/channelGroups/5678
     * @return {object} The API response object.
     */
    this.properties.channelGroups.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);

    this.properties.bigQueryLinks = {};

    /**
     * Creates a BigQueryLink.
     * @param {string} params.parent - (Required) Required. Example format: properties/1234
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.properties.bigQueryLinks.create = (params) => this._makeRequest('v1alpha/{+parent}/bigQueryLinks', 'POST', params);

    /**
     * Lookup for a single BigQuery Link.
     * @param {string} params.name - (Required) Required. The name of the BigQuery link to lookup. Format: properties/{property_id}/bigQueryLinks/{bigquery_link_id} Example: properties/123/bigQueryLinks/456
     * @return {object} The API response object.
     */
    this.properties.bigQueryLinks.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * Lists BigQuery Links on a property.
     * @param {integer} params.pageSize - The maximum number of resources to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)
     * @param {string} params.pageToken - A page token, received from a previous `ListBigQueryLinks` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListBigQueryLinks` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The name of the property to list BigQuery links under. Format: properties/{property_id} Example: properties/1234
     * @return {object} The API response object.
     */
    this.properties.bigQueryLinks.list = (params) => this._makeRequest('v1alpha/{+parent}/bigQueryLinks', 'GET', params);

    /**
     * Deletes a BigQueryLink on a property.
     * @param {string} params.name - (Required) Required. The BigQueryLink to delete. Example format: properties/1234/bigQueryLinks/5678
     * @return {object} The API response object.
     */
    this.properties.bigQueryLinks.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);

    /**
     * Updates a BigQueryLink.
     * @param {string} params.name - (Required) Output only. Resource name of this BigQuery link. Format: 'properties/{property_id}/bigQueryLinks/{bigquery_link_id}' Format: 'properties/1234/bigQueryLinks/abc567'
     * @param {string} params.updateMask - Required. The list of fields to be updated. Field names must be in snake case (e.g., "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.properties.bigQueryLinks.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);

    this.properties.adSenseLinks = {};

    /**
     * Looks up a single AdSenseLink.
     * @param {string} params.name - (Required) Required. Unique identifier for the AdSense Link requested. Format: properties/{propertyId}/adSenseLinks/{linkId} Example: properties/1234/adSenseLinks/5678
     * @return {object} The API response object.
     */
    this.properties.adSenseLinks.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * Creates an AdSenseLink.
     * @param {string} params.parent - (Required) Required. The property for which to create an AdSense Link. Format: properties/{propertyId} Example: properties/1234
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.properties.adSenseLinks.create = (params) => this._makeRequest('v1alpha/{+parent}/adSenseLinks', 'POST', params);

    /**
     * Deletes an AdSenseLink.
     * @param {string} params.name - (Required) Required. Unique identifier for the AdSense Link to be deleted. Format: properties/{propertyId}/adSenseLinks/{linkId} Example: properties/1234/adSenseLinks/5678
     * @return {object} The API response object.
     */
    this.properties.adSenseLinks.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);

    /**
     * Lists AdSenseLinks on a property.
     * @param {integer} params.pageSize - The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum).
     * @param {string} params.pageToken - A page token received from a previous `ListAdSenseLinks` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAdSenseLinks` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. Resource name of the parent property. Format: properties/{propertyId} Example: properties/1234
     * @return {object} The API response object.
     */
    this.properties.adSenseLinks.list = (params) => this._makeRequest('v1alpha/{+parent}/adSenseLinks', 'GET', params);

    this.properties.calculatedMetrics = {};

    /**
     * Lookup for a single CalculatedMetric.
     * @param {string} params.name - (Required) Required. The name of the CalculatedMetric to get. Format: properties/{property_id}/calculatedMetrics/{calculated_metric_id} Example: properties/1234/calculatedMetrics/Metric01
     * @return {object} The API response object.
     */
    this.properties.calculatedMetrics.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * Creates a CalculatedMetric.
     * @param {string} params.calculatedMetricId - Required. The ID to use for the calculated metric which will become the final component of the calculated metric's resource name. This value should be 1-80 characters and valid characters are /[a-zA-Z0-9_]/, no spaces allowed. calculated_metric_id must be unique between all calculated metrics under a property. The calculated_metric_id is used when referencing this calculated metric from external APIs, for example, "calcMetric:{calculated_metric_id}".
     * @param {string} params.parent - (Required) Required. Format: properties/{property_id} Example: properties/1234
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.properties.calculatedMetrics.create = (params) => this._makeRequest('v1alpha/{+parent}/calculatedMetrics', 'POST', params);

    /**
     * Lists CalculatedMetrics on a property.
     * @param {integer} params.pageSize - Optional. The maximum number of resources to return. If unspecified, at most 50 resources will be returned. The maximum value is 200 (higher values will be coerced to the maximum).
     * @param {string} params.pageToken - Optional. A page token, received from a previous `ListCalculatedMetrics` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListCalculatedMetrics` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. Example format: properties/1234
     * @return {object} The API response object.
     */
    this.properties.calculatedMetrics.list = (params) => this._makeRequest('v1alpha/{+parent}/calculatedMetrics', 'GET', params);

    /**
     * Updates a CalculatedMetric on a property.
     * @param {string} params.name - (Required) Output only. Resource name for this CalculatedMetric. Format: 'properties/{property_id}/calculatedMetrics/{calculated_metric_id}'
     * @param {string} params.updateMask - Required. The list of fields to be updated. Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.properties.calculatedMetrics.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);

    /**
     * Deletes a CalculatedMetric on a property.
     * @param {string} params.name - (Required) Required. The name of the CalculatedMetric to delete. Format: properties/{property_id}/calculatedMetrics/{calculated_metric_id} Example: properties/1234/calculatedMetrics/Metric01
     * @return {object} The API response object.
     */
    this.properties.calculatedMetrics.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);

    this.properties.rollupPropertySourceLinks = {};

    /**
     * Lookup for a single roll-up property source Link. Only roll-up properties can have source links, so this method will throw an error if used on other types of properties.
     * @param {string} params.name - (Required) Required. The name of the roll-up property source link to lookup. Format: properties/{property_id}/rollupPropertySourceLinks/{rollup_property_source_link_id} Example: properties/123/rollupPropertySourceLinks/456
     * @return {object} The API response object.
     */
    this.properties.rollupPropertySourceLinks.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * Lists roll-up property source Links on a property. Only roll-up properties can have source links, so this method will throw an error if used on other types of properties.
     * @param {integer} params.pageSize - Optional. The maximum number of resources to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)
     * @param {string} params.pageToken - Optional. A page token, received from a previous `ListRollupPropertySourceLinks` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListRollupPropertySourceLinks` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The name of the roll-up property to list roll-up property source links under. Format: properties/{property_id} Example: properties/1234
     * @return {object} The API response object.
     */
    this.properties.rollupPropertySourceLinks.list = (params) => this._makeRequest('v1alpha/{+parent}/rollupPropertySourceLinks', 'GET', params);

    /**
     * Creates a roll-up property source link. Only roll-up properties can have source links, so this method will throw an error if used on other types of properties.
     * @param {string} params.parent - (Required) Required. Format: properties/{property_id} Example: properties/1234
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.properties.rollupPropertySourceLinks.create = (params) => this._makeRequest('v1alpha/{+parent}/rollupPropertySourceLinks', 'POST', params);

    /**
     * Deletes a roll-up property source link. Only roll-up properties can have source links, so this method will throw an error if used on other types of properties.
     * @param {string} params.name - (Required) Required. Format: properties/{property_id}/rollupPropertySourceLinks/{rollup_property_source_link_id} Example: properties/1234/rollupPropertySourceLinks/5678
     * @return {object} The API response object.
     */
    this.properties.rollupPropertySourceLinks.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);

    this.properties.subpropertyEventFilters = {};

    /**
     * Creates a subproperty Event Filter.
     * @param {string} params.parent - (Required) Required. The ordinary property for which to create a subproperty event filter. Format: properties/property_id Example: properties/123
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.properties.subpropertyEventFilters.create = (params) => this._makeRequest('v1alpha/{+parent}/subpropertyEventFilters', 'POST', params);

    /**
     * Lookup for a single subproperty Event Filter.
     * @param {string} params.name - (Required) Required. Resource name of the subproperty event filter to lookup. Format: properties/property_id/subpropertyEventFilters/subproperty_event_filter Example: properties/123/subpropertyEventFilters/456
     * @return {object} The API response object.
     */
    this.properties.subpropertyEventFilters.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * List all subproperty Event Filters on a property.
     * @param {integer} params.pageSize - Optional. The maximum number of resources to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)
     * @param {string} params.pageToken - Optional. A page token, received from a previous `ListSubpropertyEventFilters` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListSubpropertyEventFilters` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. Resource name of the ordinary property. Format: properties/property_id Example: properties/123
     * @return {object} The API response object.
     */
    this.properties.subpropertyEventFilters.list = (params) => this._makeRequest('v1alpha/{+parent}/subpropertyEventFilters', 'GET', params);

    /**
     * Updates a subproperty Event Filter.
     * @param {string} params.name - (Required) Output only. Format: properties/{ordinary_property_id}/subpropertyEventFilters/{sub_property_event_filter} Example: properties/1234/subpropertyEventFilters/5678
     * @param {string} params.updateMask - Required. The list of fields to update. Field names must be in snake case (for example, "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.properties.subpropertyEventFilters.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);

    /**
     * Deletes a subproperty event filter.
     * @param {string} params.name - (Required) Required. Resource name of the subproperty event filter to delete. Format: properties/property_id/subpropertyEventFilters/subproperty_event_filter Example: properties/123/subpropertyEventFilters/456
     * @return {object} The API response object.
     */
    this.properties.subpropertyEventFilters.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);

    this.properties.reportingDataAnnotations = {};

    /**
     * Creates a Reporting Data Annotation.
     * @param {string} params.parent - (Required) Required. The property for which to create a Reporting Data Annotation. Format: properties/property_id Example: properties/123
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.properties.reportingDataAnnotations.create = (params) => this._makeRequest('v1alpha/{+parent}/reportingDataAnnotations', 'POST', params);

    /**
     * Lookup a single Reporting Data Annotation.
     * @param {string} params.name - (Required) Required. Resource name of the Reporting Data Annotation to lookup. Format: properties/property_id/reportingDataAnnotations/reportingDataAnnotation Example: properties/123/reportingDataAnnotations/456
     * @return {object} The API response object.
     */
    this.properties.reportingDataAnnotations.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * List all Reporting Data Annotations on a property.
     * @param {string} params.filter - Optional. Filter that restricts which reporting data annotations under the parent property are listed. Supported fields are: * 'name' * `title` * `description` * `annotation_date` * `annotation_date_range` * `color` Additionally, this API provides the following helper functions: * annotation_duration() : the duration that this annotation marks, [durations](https://github.com/protocolbuffers/protobuf/blob/main/src/google/protobuf/duration.proto). expect a numeric representation of seconds followed by an `s` suffix. * is_annotation_in_range(start_date, end_date) : if the annotation is in the range specified by the `start_date` and `end_date`. The dates are in ISO-8601 format, for example `2031-06-28`. Supported operations: * `=` : equals * `!=` : not equals * `<` : less than * `>` : greater than * `<=` : less than or equals * `>=` : greater than or equals * `:` : has operator * `=~` : [regular expression](https://github.com/google/re2/wiki/Syntax) match * `!~` : [regular expression](https://github.com/google/re2/wiki/Syntax) does not match * `NOT` : Logical not * `AND` : Logical and * `OR` : Logical or Examples: 1. `title="Holiday Sale"` 2. `description=~"[Bb]ig [Gg]ame.*[Ss]ale"` 3. `is_annotation_in_range("2025-12-25", "2026-01-16") = true` 4. `annotation_duration() >= 172800s AND title:BOGO`
     * @param {integer} params.pageSize - Optional. The maximum number of resources to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)
     * @param {string} params.pageToken - Optional. A page token, received from a previous `ListReportingDataAnnotations` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListReportingDataAnnotations` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. Resource name of the property. Format: properties/property_id Example: properties/123
     * @return {object} The API response object.
     */
    this.properties.reportingDataAnnotations.list = (params) => this._makeRequest('v1alpha/{+parent}/reportingDataAnnotations', 'GET', params);

    /**
     * Updates a Reporting Data Annotation.
     * @param {string} params.name - (Required) Required. Identifier. Resource name of this Reporting Data Annotation. Format: 'properties/{property_id}/reportingDataAnnotations/{reporting_data_annotation}' Format: 'properties/123/reportingDataAnnotations/456'
     * @param {string} params.updateMask - Optional. The list of fields to update. Field names must be in snake case (for example, "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.properties.reportingDataAnnotations.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);

    /**
     * Deletes a Reporting Data Annotation.
     * @param {string} params.name - (Required) Required. Resource name of the Reporting Data Annotation to delete. Format: properties/property_id/reportingDataAnnotations/reporting_data_annotation Example: properties/123/reportingDataAnnotations/456
     * @return {object} The API response object.
     */
    this.properties.reportingDataAnnotations.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);

    this.properties.subpropertySyncConfigs = {};

    /**
     * List all `SubpropertySyncConfig` resources for a property.
     * @param {integer} params.pageSize - Optional. The maximum number of resources to return. The service may return fewer than this value, even if there are additional pages. If unspecified, at most 50 resources will be returned. The maximum value is 200; (higher values will be coerced to the maximum)
     * @param {string} params.pageToken - Optional. A page token, received from a previous `ListSubpropertySyncConfig` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListSubpropertySyncConfig` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. Resource name of the property. Format: properties/property_id Example: properties/123
     * @return {object} The API response object.
     */
    this.properties.subpropertySyncConfigs.list = (params) => this._makeRequest('v1alpha/{+parent}/subpropertySyncConfigs', 'GET', params);

    /**
     * Updates a `SubpropertySyncConfig`.
     * @param {string} params.name - (Required) Output only. Identifier. Format: properties/{ordinary_property_id}/subpropertySyncConfigs/{subproperty_id} Example: properties/1234/subpropertySyncConfigs/5678
     * @param {string} params.updateMask - Optional. The list of fields to update. Field names must be in snake case (for example, "field_to_update"). Omitted fields will not be updated. To replace the entire entity, use one path with the string "*" to match all fields.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.properties.subpropertySyncConfigs.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);

    /**
     * Lookup for a single `SubpropertySyncConfig`.
     * @param {string} params.name - (Required) Required. Resource name of the SubpropertySyncConfig to lookup. Format: properties/{ordinary_property_id}/subpropertySyncConfigs/{subproperty_id} Example: properties/1234/subpropertySyncConfigs/5678
     * @return {object} The API response object.
     */
    this.properties.subpropertySyncConfigs.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
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
