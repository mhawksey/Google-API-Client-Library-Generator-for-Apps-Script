
/**
 * Google Apps Script client library for the Firebase Hosting API
 * Documentation URL: https://firebase.google.com/docs/hosting/
 * @class
 */
class Firebasehosting {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://firebasehosting.googleapis.com/';
    this._servicePath = '';


    this.projects = {};

    this.projects.operations = {};

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the operation resource.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);

    this.projects.sites = {};

    /**
     * Gets the Hosting metadata for a specific site.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The site for which to get the SiteConfig, in the format: sites/ site-name/config
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.sites.getConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Sets the Hosting metadata for a specific site.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The site for which to update the SiteConfig, in the format: sites/ site-name/config
     * @param {string} apiParams.updateMask - A set of field names from your [site configuration](../sites.SiteConfig) that you want to update. A field will be overwritten if, and only if, it's in the mask. If a mask is not provided then a default mask of only [`max_versions`](../sites.SiteConfig.max_versions) will be used.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.sites.updateConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Creates a new Hosting Site in the specified parent Firebase project. Note that Hosting sites can take several minutes to propagate through Firebase systems.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The Firebase project in which to create a Hosting site, in the format: projects/PROJECT_IDENTIFIER Refer to the `Site` [`name`](../projects#Site.FIELDS.name) field for details about PROJECT_IDENTIFIER values.
     * @param {string} apiParams.siteId - Required. Immutable. A globally unique identifier for the Hosting site. This identifier is used to construct the Firebase-provisioned subdomains for the site, so it must also be a valid domain name label.
     * @param {boolean} apiParams.validateOnly - Optional. If set, validates that the site_id is available and that the request would succeed, returning the expected resulting site or error.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.sites.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/sites', 'POST', apiParams, clientConfig);

    /**
     * Updates attributes of the specified Hosting Site.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Output only. The fully-qualified resource name of the Hosting site, in the format: projects/PROJECT_IDENTIFIER/sites/SITE_ID PROJECT_IDENTIFIER: the Firebase project's [`ProjectNumber`](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects#FirebaseProject.FIELDS.project_number) ***(recommended)*** or its [`ProjectId`](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects#FirebaseProject.FIELDS.project_id). Learn more about using project identifiers in Google's [AIP 2510 standard](https://google.aip.dev/cloud/2510).
     * @param {string} apiParams.updateMask - A set of field names from your Site that you want to update.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.sites.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Gets the specified Hosting Site.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The fully-qualified resource name for the Hosting site, in the format: projects/PROJECT_IDENTIFIER/sites/SITE_ID Refer to the `Site` [`name`](../projects#Site.FIELDS.name) field for details about PROJECT_IDENTIFIER values. Since a SITE_ID is a globally unique identifier, you can also use the unique sub-collection resource access pattern, in the format: projects/-/sites/SITE_ID
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.sites.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists each Hosting Site associated with the specified parent Firebase project.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of sites to return. The service may return a lower number if fewer sites exist than this maximum number. If unspecified, defaults to 40.
     * @param {string} apiParams.pageToken - Optional. A token from a previous call to `ListSites` that tells the server where to resume listing.
     * @param {string} apiParams.parent - (Required) Required. The Firebase project for which to list sites, in the format: projects/PROJECT_IDENTIFIER Refer to the `Site` [`name`](../projects#Site.FIELDS.name) field for details about PROJECT_IDENTIFIER values.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.sites.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/sites', 'GET', apiParams, clientConfig);

    /**
     * Deletes the specified Hosting Site from the specified parent Firebase project.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The fully-qualified resource name for the Hosting site, in the format: projects/PROJECT_IDENTIFIER/sites/SITE_ID Refer to the `Site` [`name`](../projects#Site.FIELDS.name) field for details about PROJECT_IDENTIFIER values.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.sites.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.sites.customDomains = {};

    /**
     * Creates a `CustomDomain`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.customDomainId - Required. The ID of the `CustomDomain`, which is the domain name you'd like to use with Firebase Hosting.
     * @param {string} apiParams.parent - (Required) Required. The custom domain's parent, specifically a Firebase Hosting `Site`.
     * @param {boolean} apiParams.validateOnly - If true, Hosting validates that it's possible to complete your request but doesn't actually create a new `CustomDomain`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.sites.customDomains.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/customDomains', 'POST', apiParams, clientConfig);

    /**
     * Updates the specified `CustomDomain`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.allowMissing - If true, Hosting creates the `CustomDomain` if it doesn't already exist.
     * @param {string} apiParams.name - (Required) Output only. The fully-qualified name of the `CustomDomain`.
     * @param {string} apiParams.updateMask - The set of field names from your `CustomDomain` that you want to update. A field will be overwritten if, and only if, it's in the mask. If you don't provide a mask, Hosting updates the entire `CustomDomain`.
     * @param {boolean} apiParams.validateOnly - If true, Hosting validates that it's possible to complete your request but doesn't actually create or update the `CustomDomain`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.sites.customDomains.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Gets the specified `CustomDomain`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the `CustomDomain` to get.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.sites.customDomains.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists each `CustomDomain` associated with the specified parent Hosting site. Returns `CustomDomain`s in a consistent, but undefined, order to facilitate pagination.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The max number of `CustomDomain` entities to return in a request. Defaults to 10.
     * @param {string} apiParams.pageToken - A token from a previous call to `ListCustomDomains` that tells the server where to resume listing.
     * @param {string} apiParams.parent - (Required) Required. The Firebase Hosting `Site` with `CustomDomain` entities you'd like to list.
     * @param {boolean} apiParams.showDeleted - If true, the request returns soft-deleted `CustomDomain`s that haven't been fully-deleted yet. To restore deleted `CustomDomain`s, make an `UndeleteCustomDomain` request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.sites.customDomains.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/customDomains', 'GET', apiParams, clientConfig);

    /**
     * Deletes the specified `CustomDomain`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.allowMissing - If true, the request succeeds even if the `CustomDomain` doesn't exist.
     * @param {string} apiParams.etag - A tag that represents the state of the `CustomDomain` as you know it. If present, the supplied tag must match the current value on your `CustomDomain`, or the request fails.
     * @param {string} apiParams.name - (Required) Required. The name of the `CustomDomain` to delete.
     * @param {boolean} apiParams.validateOnly - If true, Hosting validates that it's possible to complete your request but doesn't actually delete the `CustomDomain`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.sites.customDomains.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Undeletes the specified `CustomDomain` if it has been soft-deleted. Hosting retains soft-deleted custom domains for around 30 days before permanently deleting them.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the `CustomDomain` to delete.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.sites.customDomains.undelete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:undelete', 'POST', apiParams, clientConfig);

    this.projects.sites.customDomains.operations = {};

    /**
     * Lists operations that match the specified filter in the request.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - The standard list filter.
     * @param {string} apiParams.name - (Required) The name of the operation's parent resource.
     * @param {integer} apiParams.pageSize - The standard list page size.
     * @param {string} apiParams.pageToken - The standard list page token.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.sites.customDomains.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/operations', 'GET', apiParams, clientConfig);

    /**
     * Gets the latest state of a long-running operation. Use this method to poll the operation result at intervals as recommended by the API service.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the operation resource.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.sites.customDomains.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);

    this.projects.sites.domains = {};

    /**
     * Lists the domains for the specified site.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The page size to return. Defaults to 50.
     * @param {string} apiParams.pageToken - The next_page_token from a previous request, if provided.
     * @param {string} apiParams.parent - (Required) Required. The parent for which to list domains, in the format: sites/ site-name
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.sites.domains.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/domains', 'GET', apiParams, clientConfig);

    /**
     * Gets a domain mapping on the specified site.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the domain configuration to get.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.sites.domains.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Creates a domain mapping on the specified site.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent to create the domain association for, in the format: sites/site-name
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.sites.domains.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/domains', 'POST', apiParams, clientConfig);

    /**
     * Updates the specified domain mapping, creating the mapping as if it does not exist.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the domain association to update or create, if an association doesn't already exist.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.sites.domains.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PUT', apiParams, clientConfig);

    /**
     * Deletes the existing domain mapping on the specified site.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the domain association to delete.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.sites.domains.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.sites.versions = {};

    /**
     * Creates a new version for the specified site.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The site in which to create the version, in the format: sites/ SITE_ID
     * @param {string} apiParams.sizeBytes - The self-reported size of the version. This value is used for a pre-emptive quota check for legacy version uploads.
     * @param {string} apiParams.versionId - A unique id for the new version. This is was only specified for legacy version creations, and should be blank.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.sites.versions.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/versions', 'POST', apiParams, clientConfig);

    /**
     * Updates the specified metadata for the specified version. This method will fail with `FAILED_PRECONDITION` in the event of an invalid state transition. The supported [state](../sites.versions#versionstatus) transitions for a version are from `CREATED` to `FINALIZED`. Use [`DeleteVersion`](delete) to set the status of a version to `DELETED`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The fully-qualified resource name for the version, in the format: sites/ SITE_ID/versions/VERSION_ID This name is provided in the response body when you call [`CreateVersion`](sites.versions/create).
     * @param {string} apiParams.updateMask - A set of field names from your [version](../sites.versions) that you want to update. A field will be overwritten if, and only if, it's in the mask. If a mask is not provided then a default mask of only [`status`](../sites.versions#Version.FIELDS.status) will be used.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.sites.versions.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes the specified version.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The fully-qualified resource name for the version, in the format: sites/SITE_ID/versions/VERSION_ID
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.sites.versions.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Adds content files to the specified version. Each file must be under 2 GB.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The version to which to add files, in the format: sites/SITE_ID /versions/VERSION_ID
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.sites.versions.populateFiles = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}:populateFiles', 'POST', apiParams, clientConfig);

    /**
     * Lists the versions that have been created for the specified site. This list includes versions for both the default `live` channel and any active preview channels for the specified site.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - A filter string used to return a subset of versions in the response. The currently supported fields for filtering are: `name`, `status`, and `create_time`. Learn more about filtering in Google's [AIP 160 standard](https://google.aip.dev/160).
     * @param {integer} apiParams.pageSize - The maximum number of versions to return. The service may return a lower number if fewer versions exist than this maximum number. If unspecified, defaults to 25. The maximum value is 100; values above 100 will be coerced to 100.
     * @param {string} apiParams.pageToken - A token from a previous call to `ListVersions` that tells the server where to resume listing.
     * @param {string} apiParams.parent - (Required) Required. The site or channel for which to list versions, in either of the following formats: - sites/SITE_ID - sites/SITE_ID/channels/CHANNEL_ID
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.sites.versions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/versions', 'GET', apiParams, clientConfig);

    /**
     * Get the specified version that has been created for the specified site. This can include versions that were created for the default `live` channel or for any active preview channels for the specified site.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The fully-qualified resource name for the version, in the format: sites/SITE_ID/versions/VERSION_ID
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.sites.versions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Creates a new version on the specified target site using the content of the specified version.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The target site for the cloned version, in the format: sites/ SITE_ID
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.sites.versions.clone = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/versions:clone', 'POST', apiParams, clientConfig);

    this.projects.sites.versions.files = {};

    /**
     * Lists the remaining files to be uploaded for the specified version.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of version files to return. The service may return a lower number if fewer version files exist than this maximum number. If unspecified, defaults to 1000.
     * @param {string} apiParams.pageToken - A token from a previous call to `ListVersionFiles` that tells the server where to resume listing.
     * @param {string} apiParams.parent - (Required) Required. The version for which to list files, in the format: sites/SITE_ID /versions/VERSION_ID
     * @param {string} apiParams.status - The type of files that should be listed for the specified version.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.sites.versions.files.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/files', 'GET', apiParams, clientConfig);

    this.projects.sites.releases = {};

    /**
     * Lists the releases that have been created for the specified site or channel. When used to list releases for a site, this list includes releases for both the default `live` channel and any active preview channels for the specified site.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of releases to return. The service may return a lower number if fewer releases exist than this maximum number. If unspecified, defaults to 100.
     * @param {string} apiParams.pageToken - A token from a previous call to `releases.list` or `channels.releases.list` that tells the server where to resume listing.
     * @param {string} apiParams.parent - (Required) Required. The site or channel for which to list releases, in either of the following formats: - sites/SITE_ID - sites/SITE_ID/channels/CHANNEL_ID
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.sites.releases.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/releases', 'GET', apiParams, clientConfig);

    /**
     * Gets the specified release for a site or channel. When used to get a release for a site, this can get releases for both the default `live` channel and any active preview channels for the specified site.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The fully-qualified resource name for the Hosting release, in either of the following formats: - sites/SITE_ID/channels/CHANNEL_ID/releases/RELEASE_ID - sites/SITE_ID/releases/RELEASE_ID
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.sites.releases.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Creates a new release, which makes the content of the specified version actively display on the appropriate URL(s).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The site or channel to which the release belongs, in either of the following formats: - sites/SITE_ID - sites/SITE_ID/channels/CHANNEL_ID
     * @param {string} apiParams.versionName - The unique identifier for a version, in the format: sites/SITE_ID/versions/ VERSION_ID The SITE_ID in this version identifier must match the SITE_ID in the `parent` parameter. This query parameter must be empty if the `type` field in the request body is `SITE_DISABLE`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.sites.releases.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/releases', 'POST', apiParams, clientConfig);

    this.projects.sites.channels = {};

    /**
     * Lists the channels for the specified site. All sites have a default `live` channel.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of channels to return. The service may return a lower number if fewer channels exist than this maximum number. If unspecified, defaults to 10. The maximum value is 100; values above 100 will be coerced to 100.
     * @param {string} apiParams.pageToken - A token from a previous call to `ListChannels` that tells the server where to resume listing.
     * @param {string} apiParams.parent - (Required) Required. The site for which to list channels, in the format: sites/SITE_ID
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.sites.channels.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/channels', 'GET', apiParams, clientConfig);

    /**
     * Creates a new channel in the specified site.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.channelId - Required. Immutable. A unique ID within the site that identifies the channel.
     * @param {string} apiParams.parent - (Required) Required. The site in which to create this channel, in the format: sites/ SITE_ID
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.sites.channels.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/channels', 'POST', apiParams, clientConfig);

    /**
     * Retrieves information for the specified channel of the specified site.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The fully-qualified resource name for the channel, in the format: sites/SITE_ID/channels/CHANNEL_ID
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.sites.channels.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Updates information for the specified channel of the specified site. Implicitly creates the channel if it doesn't already exist.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The fully-qualified resource name for the channel, in the format: sites/ SITE_ID/channels/CHANNEL_ID
     * @param {string} apiParams.updateMask - A comma-separated list of fields to be updated in this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.sites.channels.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes the specified channel of the specified site. The `live` channel cannot be deleted.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The fully-qualified resource name for the channel, in the format: sites/SITE_ID/channels/CHANNEL_ID
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.sites.channels.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.sites.channels.releases = {};

    /**
     * Lists the releases that have been created for the specified site or channel. When used to list releases for a site, this list includes releases for both the default `live` channel and any active preview channels for the specified site.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of releases to return. The service may return a lower number if fewer releases exist than this maximum number. If unspecified, defaults to 100.
     * @param {string} apiParams.pageToken - A token from a previous call to `releases.list` or `channels.releases.list` that tells the server where to resume listing.
     * @param {string} apiParams.parent - (Required) Required. The site or channel for which to list releases, in either of the following formats: - sites/SITE_ID - sites/SITE_ID/channels/CHANNEL_ID
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.sites.channels.releases.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/releases', 'GET', apiParams, clientConfig);

    /**
     * Gets the specified release for a site or channel. When used to get a release for a site, this can get releases for both the default `live` channel and any active preview channels for the specified site.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The fully-qualified resource name for the Hosting release, in either of the following formats: - sites/SITE_ID/channels/CHANNEL_ID/releases/RELEASE_ID - sites/SITE_ID/releases/RELEASE_ID
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.sites.channels.releases.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Creates a new release, which makes the content of the specified version actively display on the appropriate URL(s).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The site or channel to which the release belongs, in either of the following formats: - sites/SITE_ID - sites/SITE_ID/channels/CHANNEL_ID
     * @param {string} apiParams.versionName - The unique identifier for a version, in the format: sites/SITE_ID/versions/ VERSION_ID The SITE_ID in this version identifier must match the SITE_ID in the `parent` parameter. This query parameter must be empty if the `type` field in the request body is `SITE_DISABLE`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.sites.channels.releases.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/releases', 'POST', apiParams, clientConfig);

    this.sites = {};

    /**
     * Gets the Hosting metadata for a specific site.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The site for which to get the SiteConfig, in the format: sites/ site-name/config
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.sites.getConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Sets the Hosting metadata for a specific site.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The site for which to update the SiteConfig, in the format: sites/ site-name/config
     * @param {string} apiParams.updateMask - A set of field names from your [site configuration](../sites.SiteConfig) that you want to update. A field will be overwritten if, and only if, it's in the mask. If a mask is not provided then a default mask of only [`max_versions`](../sites.SiteConfig.max_versions) will be used.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.sites.updateConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);

    this.sites.domains = {};

    /**
     * Lists the domains for the specified site.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The page size to return. Defaults to 50.
     * @param {string} apiParams.pageToken - The next_page_token from a previous request, if provided.
     * @param {string} apiParams.parent - (Required) Required. The parent for which to list domains, in the format: sites/ site-name
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.sites.domains.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/domains', 'GET', apiParams, clientConfig);

    /**
     * Gets a domain mapping on the specified site.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the domain configuration to get.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.sites.domains.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Creates a domain mapping on the specified site.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent to create the domain association for, in the format: sites/site-name
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.sites.domains.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/domains', 'POST', apiParams, clientConfig);

    /**
     * Updates the specified domain mapping, creating the mapping as if it does not exist.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the domain association to update or create, if an association doesn't already exist.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.sites.domains.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PUT', apiParams, clientConfig);

    /**
     * Deletes the existing domain mapping on the specified site.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the domain association to delete.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.sites.domains.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);

    this.sites.versions = {};

    /**
     * Creates a new version for the specified site.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The site in which to create the version, in the format: sites/ SITE_ID
     * @param {string} apiParams.sizeBytes - The self-reported size of the version. This value is used for a pre-emptive quota check for legacy version uploads.
     * @param {string} apiParams.versionId - A unique id for the new version. This is was only specified for legacy version creations, and should be blank.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.sites.versions.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/versions', 'POST', apiParams, clientConfig);

    /**
     * Updates the specified metadata for the specified version. This method will fail with `FAILED_PRECONDITION` in the event of an invalid state transition. The supported [state](../sites.versions#versionstatus) transitions for a version are from `CREATED` to `FINALIZED`. Use [`DeleteVersion`](delete) to set the status of a version to `DELETED`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The fully-qualified resource name for the version, in the format: sites/ SITE_ID/versions/VERSION_ID This name is provided in the response body when you call [`CreateVersion`](sites.versions/create).
     * @param {string} apiParams.updateMask - A set of field names from your [version](../sites.versions) that you want to update. A field will be overwritten if, and only if, it's in the mask. If a mask is not provided then a default mask of only [`status`](../sites.versions#Version.FIELDS.status) will be used.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.sites.versions.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes the specified version.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The fully-qualified resource name for the version, in the format: sites/SITE_ID/versions/VERSION_ID
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.sites.versions.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Adds content files to the specified version. Each file must be under 2 GB.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The version to which to add files, in the format: sites/SITE_ID /versions/VERSION_ID
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.sites.versions.populateFiles = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}:populateFiles', 'POST', apiParams, clientConfig);

    /**
     * Lists the versions that have been created for the specified site. This list includes versions for both the default `live` channel and any active preview channels for the specified site.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - A filter string used to return a subset of versions in the response. The currently supported fields for filtering are: `name`, `status`, and `create_time`. Learn more about filtering in Google's [AIP 160 standard](https://google.aip.dev/160).
     * @param {integer} apiParams.pageSize - The maximum number of versions to return. The service may return a lower number if fewer versions exist than this maximum number. If unspecified, defaults to 25. The maximum value is 100; values above 100 will be coerced to 100.
     * @param {string} apiParams.pageToken - A token from a previous call to `ListVersions` that tells the server where to resume listing.
     * @param {string} apiParams.parent - (Required) Required. The site or channel for which to list versions, in either of the following formats: - sites/SITE_ID - sites/SITE_ID/channels/CHANNEL_ID
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.sites.versions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/versions', 'GET', apiParams, clientConfig);

    /**
     * Get the specified version that has been created for the specified site. This can include versions that were created for the default `live` channel or for any active preview channels for the specified site.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The fully-qualified resource name for the version, in the format: sites/SITE_ID/versions/VERSION_ID
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.sites.versions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Creates a new version on the specified target site using the content of the specified version.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The target site for the cloned version, in the format: sites/ SITE_ID
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.sites.versions.clone = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/versions:clone', 'POST', apiParams, clientConfig);

    this.sites.versions.files = {};

    /**
     * Lists the remaining files to be uploaded for the specified version.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of version files to return. The service may return a lower number if fewer version files exist than this maximum number. If unspecified, defaults to 1000.
     * @param {string} apiParams.pageToken - A token from a previous call to `ListVersionFiles` that tells the server where to resume listing.
     * @param {string} apiParams.parent - (Required) Required. The version for which to list files, in the format: sites/SITE_ID /versions/VERSION_ID
     * @param {string} apiParams.status - The type of files that should be listed for the specified version.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.sites.versions.files.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/files', 'GET', apiParams, clientConfig);

    this.sites.releases = {};

    /**
     * Lists the releases that have been created for the specified site or channel. When used to list releases for a site, this list includes releases for both the default `live` channel and any active preview channels for the specified site.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of releases to return. The service may return a lower number if fewer releases exist than this maximum number. If unspecified, defaults to 100.
     * @param {string} apiParams.pageToken - A token from a previous call to `releases.list` or `channels.releases.list` that tells the server where to resume listing.
     * @param {string} apiParams.parent - (Required) Required. The site or channel for which to list releases, in either of the following formats: - sites/SITE_ID - sites/SITE_ID/channels/CHANNEL_ID
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.sites.releases.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/releases', 'GET', apiParams, clientConfig);

    /**
     * Gets the specified release for a site or channel. When used to get a release for a site, this can get releases for both the default `live` channel and any active preview channels for the specified site.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The fully-qualified resource name for the Hosting release, in either of the following formats: - sites/SITE_ID/channels/CHANNEL_ID/releases/RELEASE_ID - sites/SITE_ID/releases/RELEASE_ID
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.sites.releases.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Creates a new release, which makes the content of the specified version actively display on the appropriate URL(s).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The site or channel to which the release belongs, in either of the following formats: - sites/SITE_ID - sites/SITE_ID/channels/CHANNEL_ID
     * @param {string} apiParams.versionName - The unique identifier for a version, in the format: sites/SITE_ID/versions/ VERSION_ID The SITE_ID in this version identifier must match the SITE_ID in the `parent` parameter. This query parameter must be empty if the `type` field in the request body is `SITE_DISABLE`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.sites.releases.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/releases', 'POST', apiParams, clientConfig);

    this.sites.channels = {};

    /**
     * Lists the channels for the specified site. All sites have a default `live` channel.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of channels to return. The service may return a lower number if fewer channels exist than this maximum number. If unspecified, defaults to 10. The maximum value is 100; values above 100 will be coerced to 100.
     * @param {string} apiParams.pageToken - A token from a previous call to `ListChannels` that tells the server where to resume listing.
     * @param {string} apiParams.parent - (Required) Required. The site for which to list channels, in the format: sites/SITE_ID
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.sites.channels.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/channels', 'GET', apiParams, clientConfig);

    /**
     * Creates a new channel in the specified site.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.channelId - Required. Immutable. A unique ID within the site that identifies the channel.
     * @param {string} apiParams.parent - (Required) Required. The site in which to create this channel, in the format: sites/ SITE_ID
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.sites.channels.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/channels', 'POST', apiParams, clientConfig);

    /**
     * Retrieves information for the specified channel of the specified site.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The fully-qualified resource name for the channel, in the format: sites/SITE_ID/channels/CHANNEL_ID
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.sites.channels.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Updates information for the specified channel of the specified site. Implicitly creates the channel if it doesn't already exist.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The fully-qualified resource name for the channel, in the format: sites/ SITE_ID/channels/CHANNEL_ID
     * @param {string} apiParams.updateMask - A comma-separated list of fields to be updated in this request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.sites.channels.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes the specified channel of the specified site. The `live` channel cannot be deleted.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The fully-qualified resource name for the channel, in the format: sites/SITE_ID/channels/CHANNEL_ID
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.sites.channels.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);

    this.sites.channels.releases = {};

    /**
     * Lists the releases that have been created for the specified site or channel. When used to list releases for a site, this list includes releases for both the default `live` channel and any active preview channels for the specified site.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of releases to return. The service may return a lower number if fewer releases exist than this maximum number. If unspecified, defaults to 100.
     * @param {string} apiParams.pageToken - A token from a previous call to `releases.list` or `channels.releases.list` that tells the server where to resume listing.
     * @param {string} apiParams.parent - (Required) Required. The site or channel for which to list releases, in either of the following formats: - sites/SITE_ID - sites/SITE_ID/channels/CHANNEL_ID
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.sites.channels.releases.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/releases', 'GET', apiParams, clientConfig);

    /**
     * Gets the specified release for a site or channel. When used to get a release for a site, this can get releases for both the default `live` channel and any active preview channels for the specified site.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The fully-qualified resource name for the Hosting release, in either of the following formats: - sites/SITE_ID/channels/CHANNEL_ID/releases/RELEASE_ID - sites/SITE_ID/releases/RELEASE_ID
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.sites.channels.releases.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Creates a new release, which makes the content of the specified version actively display on the appropriate URL(s).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The site or channel to which the release belongs, in either of the following formats: - sites/SITE_ID - sites/SITE_ID/channels/CHANNEL_ID
     * @param {string} apiParams.versionName - The unique identifier for a version, in the format: sites/SITE_ID/versions/ VERSION_ID The SITE_ID in this version identifier must match the SITE_ID in the `parent` parameter. This query parameter must be empty if the `type` field in the request body is `SITE_DISABLE`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.sites.channels.releases.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/releases', 'POST', apiParams, clientConfig);
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
