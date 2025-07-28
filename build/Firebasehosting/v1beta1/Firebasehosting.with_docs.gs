
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
    // "Private" properties using the underscore convention
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://firebasehosting.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.operations = {};

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.operations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    this.projects.sites = {};

    /**
     * Gets the Hosting metadata for a specific site.
     * @param {string} params.name - (Required) Required. The site for which to get the SiteConfig, in the format: sites/ site-name/config
     * @return {object} The API response object.
     */
    this.projects.sites.getConfig = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Sets the Hosting metadata for a specific site.
     * @param {string} params.name - (Required) Required. The site for which to update the SiteConfig, in the format: sites/ site-name/config
     * @param {string} params.updateMask - A set of field names from your [site configuration](../sites.SiteConfig) that you want to update. A field will be overwritten if, and only if, it's in the mask. If a mask is not provided then a default mask of only [`max_versions`](../sites.SiteConfig.max_versions) will be used.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.sites.updateConfig = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    /**
     * Creates a new Hosting Site in the specified parent Firebase project. Note that Hosting sites can take several minutes to propagate through Firebase systems.
     * @param {string} params.parent - (Required) Required. The Firebase project in which to create a Hosting site, in the format: projects/PROJECT_IDENTIFIER Refer to the `Site` [`name`](../projects#Site.FIELDS.name) field for details about PROJECT_IDENTIFIER values.
     * @param {string} params.siteId - Required. Immutable. A globally unique identifier for the Hosting site. This identifier is used to construct the Firebase-provisioned subdomains for the site, so it must also be a valid domain name label.
     * @param {boolean} params.validateOnly - Optional. If set, validates that the site_id is available and that the request would succeed, returning the expected resulting site or error.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.sites.create = (params) => this._makeRequest('v1beta1/{+parent}/sites', 'POST', params);

    /**
     * Updates attributes of the specified Hosting Site.
     * @param {string} params.name - (Required) Output only. The fully-qualified resource name of the Hosting site, in the format: projects/PROJECT_IDENTIFIER/sites/SITE_ID PROJECT_IDENTIFIER: the Firebase project's [`ProjectNumber`](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects#FirebaseProject.FIELDS.project_number) ***(recommended)*** or its [`ProjectId`](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects#FirebaseProject.FIELDS.project_id). Learn more about using project identifiers in Google's [AIP 2510 standard](https://google.aip.dev/cloud/2510).
     * @param {string} params.updateMask - A set of field names from your Site that you want to update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.sites.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    /**
     * Gets the specified Hosting Site.
     * @param {string} params.name - (Required) Required. The fully-qualified resource name for the Hosting site, in the format: projects/PROJECT_IDENTIFIER/sites/SITE_ID Refer to the `Site` [`name`](../projects#Site.FIELDS.name) field for details about PROJECT_IDENTIFIER values. Since a SITE_ID is a globally unique identifier, you can also use the unique sub-collection resource access pattern, in the format: projects/-/sites/SITE_ID
     * @return {object} The API response object.
     */
    this.projects.sites.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Lists each Hosting Site associated with the specified parent Firebase project.
     * @param {integer} params.pageSize - Optional. The maximum number of sites to return. The service may return a lower number if fewer sites exist than this maximum number. If unspecified, defaults to 40.
     * @param {string} params.pageToken - Optional. A token from a previous call to `ListSites` that tells the server where to resume listing.
     * @param {string} params.parent - (Required) Required. The Firebase project for which to list sites, in the format: projects/PROJECT_IDENTIFIER Refer to the `Site` [`name`](../projects#Site.FIELDS.name) field for details about PROJECT_IDENTIFIER values.
     * @return {object} The API response object.
     */
    this.projects.sites.list = (params) => this._makeRequest('v1beta1/{+parent}/sites', 'GET', params);

    /**
     * Deletes the specified Hosting Site from the specified parent Firebase project.
     * @param {string} params.name - (Required) Required. The fully-qualified resource name for the Hosting site, in the format: projects/PROJECT_IDENTIFIER/sites/SITE_ID Refer to the `Site` [`name`](../projects#Site.FIELDS.name) field for details about PROJECT_IDENTIFIER values.
     * @return {object} The API response object.
     */
    this.projects.sites.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    this.projects.sites.customDomains = {};

    /**
     * Creates a `CustomDomain`.
     * @param {string} params.customDomainId - Required. The ID of the `CustomDomain`, which is the domain name you'd like to use with Firebase Hosting.
     * @param {string} params.parent - (Required) Required. The custom domain's parent, specifically a Firebase Hosting `Site`.
     * @param {boolean} params.validateOnly - If true, Hosting validates that it's possible to complete your request but doesn't actually create a new `CustomDomain`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.sites.customDomains.create = (params) => this._makeRequest('v1beta1/{+parent}/customDomains', 'POST', params);

    /**
     * Updates the specified `CustomDomain`.
     * @param {boolean} params.allowMissing - If true, Hosting creates the `CustomDomain` if it doesn't already exist.
     * @param {string} params.name - (Required) Output only. The fully-qualified name of the `CustomDomain`.
     * @param {string} params.updateMask - The set of field names from your `CustomDomain` that you want to update. A field will be overwritten if, and only if, it's in the mask. If you don't provide a mask, Hosting updates the entire `CustomDomain`.
     * @param {boolean} params.validateOnly - If true, Hosting validates that it's possible to complete your request but doesn't actually create or update the `CustomDomain`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.sites.customDomains.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    /**
     * Gets the specified `CustomDomain`.
     * @param {string} params.name - (Required) Required. The name of the `CustomDomain` to get.
     * @return {object} The API response object.
     */
    this.projects.sites.customDomains.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Lists each `CustomDomain` associated with the specified parent Hosting site. Returns `CustomDomain`s in a consistent, but undefined, order to facilitate pagination.
     * @param {integer} params.pageSize - The max number of `CustomDomain` entities to return in a request. Defaults to 10.
     * @param {string} params.pageToken - A token from a previous call to `ListCustomDomains` that tells the server where to resume listing.
     * @param {string} params.parent - (Required) Required. The Firebase Hosting `Site` with `CustomDomain` entities you'd like to list.
     * @param {boolean} params.showDeleted - If true, the request returns soft-deleted `CustomDomain`s that haven't been fully-deleted yet. To restore deleted `CustomDomain`s, make an `UndeleteCustomDomain` request.
     * @return {object} The API response object.
     */
    this.projects.sites.customDomains.list = (params) => this._makeRequest('v1beta1/{+parent}/customDomains', 'GET', params);

    /**
     * Deletes the specified `CustomDomain`.
     * @param {boolean} params.allowMissing - If true, the request succeeds even if the `CustomDomain` doesn't exist.
     * @param {string} params.etag - A tag that represents the state of the `CustomDomain` as you know it. If present, the supplied tag must match the current value on your `CustomDomain`, or the request fails.
     * @param {string} params.name - (Required) Required. The name of the `CustomDomain` to delete.
     * @param {boolean} params.validateOnly - If true, Hosting validates that it's possible to complete your request but doesn't actually delete the `CustomDomain`.
     * @return {object} The API response object.
     */
    this.projects.sites.customDomains.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Undeletes the specified `CustomDomain` if it has been soft-deleted. Hosting retains soft-deleted custom domains for around 30 days before permanently deleting them.
     * @param {string} params.name - (Required) Required. The name of the `CustomDomain` to delete.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.sites.customDomains.undelete = (params) => this._makeRequest('v1beta1/{+name}:undelete', 'POST', params);

    this.projects.sites.customDomains.operations = {};

    /**
     * Lists operations that match the specified filter in the request.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.sites.customDomains.operations.list = (params) => this._makeRequest('v1beta1/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.sites.customDomains.operations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    this.projects.sites.domains = {};

    /**
     * Lists the domains for the specified site.
     * @param {integer} params.pageSize - The page size to return. Defaults to 50.
     * @param {string} params.pageToken - The next_page_token from a previous request, if provided.
     * @param {string} params.parent - (Required) Required. The parent for which to list domains, in the format: sites/ site-name
     * @return {object} The API response object.
     */
    this.projects.sites.domains.list = (params) => this._makeRequest('v1beta1/{+parent}/domains', 'GET', params);

    /**
     * Gets a domain mapping on the specified site.
     * @param {string} params.name - (Required) Required. The name of the domain configuration to get.
     * @return {object} The API response object.
     */
    this.projects.sites.domains.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Creates a domain mapping on the specified site.
     * @param {string} params.parent - (Required) Required. The parent to create the domain association for, in the format: sites/site-name
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.sites.domains.create = (params) => this._makeRequest('v1beta1/{+parent}/domains', 'POST', params);

    /**
     * Updates the specified domain mapping, creating the mapping as if it does not exist.
     * @param {string} params.name - (Required) Required. The name of the domain association to update or create, if an association doesn't already exist.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.sites.domains.update = (params) => this._makeRequest('v1beta1/{+name}', 'PUT', params);

    /**
     * Deletes the existing domain mapping on the specified site.
     * @param {string} params.name - (Required) Required. The name of the domain association to delete.
     * @return {object} The API response object.
     */
    this.projects.sites.domains.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    this.projects.sites.versions = {};

    /**
     * Creates a new version for the specified site.
     * @param {string} params.parent - (Required) Required. The site in which to create the version, in the format: sites/ SITE_ID
     * @param {string} params.sizeBytes - The self-reported size of the version. This value is used for a pre-emptive quota check for legacy version uploads.
     * @param {string} params.versionId - A unique id for the new version. This is was only specified for legacy version creations, and should be blank.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.sites.versions.create = (params) => this._makeRequest('v1beta1/{+parent}/versions', 'POST', params);

    /**
     * Updates the specified metadata for the specified version. This method will fail with `FAILED_PRECONDITION` in the event of an invalid state transition. The supported [state](../sites.versions#versionstatus) transitions for a version are from `CREATED` to `FINALIZED`. Use [`DeleteVersion`](delete) to set the status of a version to `DELETED`.
     * @param {string} params.name - (Required) The fully-qualified resource name for the version, in the format: sites/ SITE_ID/versions/VERSION_ID This name is provided in the response body when you call [`CreateVersion`](sites.versions/create).
     * @param {string} params.updateMask - A set of field names from your [version](../sites.versions) that you want to update. A field will be overwritten if, and only if, it's in the mask. If a mask is not provided then a default mask of only [`status`](../sites.versions#Version.FIELDS.status) will be used.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.sites.versions.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    /**
     * Deletes the specified version.
     * @param {string} params.name - (Required) Required. The fully-qualified resource name for the version, in the format: sites/SITE_ID/versions/VERSION_ID
     * @return {object} The API response object.
     */
    this.projects.sites.versions.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Adds content files to the specified version. Each file must be under 2 GB.
     * @param {string} params.parent - (Required) Required. The version to which to add files, in the format: sites/SITE_ID /versions/VERSION_ID
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.sites.versions.populateFiles = (params) => this._makeRequest('v1beta1/{+parent}:populateFiles', 'POST', params);

    /**
     * Lists the versions that have been created for the specified site. This list includes versions for both the default `live` channel and any active preview channels for the specified site.
     * @param {string} params.filter - A filter string used to return a subset of versions in the response. The currently supported fields for filtering are: `name`, `status`, and `create_time`. Learn more about filtering in Google's [AIP 160 standard](https://google.aip.dev/160).
     * @param {integer} params.pageSize - The maximum number of versions to return. The service may return a lower number if fewer versions exist than this maximum number. If unspecified, defaults to 25. The maximum value is 100; values above 100 will be coerced to 100.
     * @param {string} params.pageToken - A token from a previous call to `ListVersions` that tells the server where to resume listing.
     * @param {string} params.parent - (Required) Required. The site or channel for which to list versions, in either of the following formats: - sites/SITE_ID - sites/SITE_ID/channels/CHANNEL_ID
     * @return {object} The API response object.
     */
    this.projects.sites.versions.list = (params) => this._makeRequest('v1beta1/{+parent}/versions', 'GET', params);

    /**
     * Get the specified version that has been created for the specified site. This can include versions that were created for the default `live` channel or for any active preview channels for the specified site.
     * @param {string} params.name - (Required) Required. The fully-qualified resource name for the version, in the format: sites/SITE_ID/versions/VERSION_ID
     * @return {object} The API response object.
     */
    this.projects.sites.versions.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Creates a new version on the specified target site using the content of the specified version.
     * @param {string} params.parent - (Required) Required. The target site for the cloned version, in the format: sites/ SITE_ID
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.sites.versions.clone = (params) => this._makeRequest('v1beta1/{+parent}/versions:clone', 'POST', params);

    this.projects.sites.versions.files = {};

    /**
     * Lists the remaining files to be uploaded for the specified version.
     * @param {integer} params.pageSize - The maximum number of version files to return. The service may return a lower number if fewer version files exist than this maximum number. If unspecified, defaults to 1000.
     * @param {string} params.pageToken - A token from a previous call to `ListVersionFiles` that tells the server where to resume listing.
     * @param {string} params.parent - (Required) Required. The version for which to list files, in the format: sites/SITE_ID /versions/VERSION_ID
     * @param {string} params.status - The type of files that should be listed for the specified version.
     * @return {object} The API response object.
     */
    this.projects.sites.versions.files.list = (params) => this._makeRequest('v1beta1/{+parent}/files', 'GET', params);

    this.projects.sites.releases = {};

    /**
     * Lists the releases that have been created for the specified site or channel. When used to list releases for a site, this list includes releases for both the default `live` channel and any active preview channels for the specified site.
     * @param {integer} params.pageSize - The maximum number of releases to return. The service may return a lower number if fewer releases exist than this maximum number. If unspecified, defaults to 100.
     * @param {string} params.pageToken - A token from a previous call to `releases.list` or `channels.releases.list` that tells the server where to resume listing.
     * @param {string} params.parent - (Required) Required. The site or channel for which to list releases, in either of the following formats: - sites/SITE_ID - sites/SITE_ID/channels/CHANNEL_ID
     * @return {object} The API response object.
     */
    this.projects.sites.releases.list = (params) => this._makeRequest('v1beta1/{+parent}/releases', 'GET', params);

    /**
     * Gets the specified release for a site or channel. When used to get a release for a site, this can get releases for both the default `live` channel and any active preview channels for the specified site.
     * @param {string} params.name - (Required) Required. The fully-qualified resource name for the Hosting release, in either of the following formats: - sites/SITE_ID/channels/CHANNEL_ID/releases/RELEASE_ID - sites/SITE_ID/releases/RELEASE_ID
     * @return {object} The API response object.
     */
    this.projects.sites.releases.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Creates a new release, which makes the content of the specified version actively display on the appropriate URL(s).
     * @param {string} params.parent - (Required) Required. The site or channel to which the release belongs, in either of the following formats: - sites/SITE_ID - sites/SITE_ID/channels/CHANNEL_ID
     * @param {string} params.versionName - The unique identifier for a version, in the format: sites/SITE_ID/versions/ VERSION_ID The SITE_ID in this version identifier must match the SITE_ID in the `parent` parameter. This query parameter must be empty if the `type` field in the request body is `SITE_DISABLE`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.sites.releases.create = (params) => this._makeRequest('v1beta1/{+parent}/releases', 'POST', params);

    this.projects.sites.channels = {};

    /**
     * Lists the channels for the specified site. All sites have a default `live` channel.
     * @param {integer} params.pageSize - The maximum number of channels to return. The service may return a lower number if fewer channels exist than this maximum number. If unspecified, defaults to 10. The maximum value is 100; values above 100 will be coerced to 100.
     * @param {string} params.pageToken - A token from a previous call to `ListChannels` that tells the server where to resume listing.
     * @param {string} params.parent - (Required) Required. The site for which to list channels, in the format: sites/SITE_ID
     * @return {object} The API response object.
     */
    this.projects.sites.channels.list = (params) => this._makeRequest('v1beta1/{+parent}/channels', 'GET', params);

    /**
     * Creates a new channel in the specified site.
     * @param {string} params.channelId - Required. Immutable. A unique ID within the site that identifies the channel.
     * @param {string} params.parent - (Required) Required. The site in which to create this channel, in the format: sites/ SITE_ID
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.sites.channels.create = (params) => this._makeRequest('v1beta1/{+parent}/channels', 'POST', params);

    /**
     * Retrieves information for the specified channel of the specified site.
     * @param {string} params.name - (Required) Required. The fully-qualified resource name for the channel, in the format: sites/SITE_ID/channels/CHANNEL_ID
     * @return {object} The API response object.
     */
    this.projects.sites.channels.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Updates information for the specified channel of the specified site. Implicitly creates the channel if it doesn't already exist.
     * @param {string} params.name - (Required) The fully-qualified resource name for the channel, in the format: sites/ SITE_ID/channels/CHANNEL_ID
     * @param {string} params.updateMask - A comma-separated list of fields to be updated in this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.sites.channels.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    /**
     * Deletes the specified channel of the specified site. The `live` channel cannot be deleted.
     * @param {string} params.name - (Required) Required. The fully-qualified resource name for the channel, in the format: sites/SITE_ID/channels/CHANNEL_ID
     * @return {object} The API response object.
     */
    this.projects.sites.channels.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    this.projects.sites.channels.releases = {};

    /**
     * Lists the releases that have been created for the specified site or channel. When used to list releases for a site, this list includes releases for both the default `live` channel and any active preview channels for the specified site.
     * @param {integer} params.pageSize - The maximum number of releases to return. The service may return a lower number if fewer releases exist than this maximum number. If unspecified, defaults to 100.
     * @param {string} params.pageToken - A token from a previous call to `releases.list` or `channels.releases.list` that tells the server where to resume listing.
     * @param {string} params.parent - (Required) Required. The site or channel for which to list releases, in either of the following formats: - sites/SITE_ID - sites/SITE_ID/channels/CHANNEL_ID
     * @return {object} The API response object.
     */
    this.projects.sites.channels.releases.list = (params) => this._makeRequest('v1beta1/{+parent}/releases', 'GET', params);

    /**
     * Gets the specified release for a site or channel. When used to get a release for a site, this can get releases for both the default `live` channel and any active preview channels for the specified site.
     * @param {string} params.name - (Required) Required. The fully-qualified resource name for the Hosting release, in either of the following formats: - sites/SITE_ID/channels/CHANNEL_ID/releases/RELEASE_ID - sites/SITE_ID/releases/RELEASE_ID
     * @return {object} The API response object.
     */
    this.projects.sites.channels.releases.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Creates a new release, which makes the content of the specified version actively display on the appropriate URL(s).
     * @param {string} params.parent - (Required) Required. The site or channel to which the release belongs, in either of the following formats: - sites/SITE_ID - sites/SITE_ID/channels/CHANNEL_ID
     * @param {string} params.versionName - The unique identifier for a version, in the format: sites/SITE_ID/versions/ VERSION_ID The SITE_ID in this version identifier must match the SITE_ID in the `parent` parameter. This query parameter must be empty if the `type` field in the request body is `SITE_DISABLE`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.sites.channels.releases.create = (params) => this._makeRequest('v1beta1/{+parent}/releases', 'POST', params);

    this.sites = {};

    /**
     * Gets the Hosting metadata for a specific site.
     * @param {string} params.name - (Required) Required. The site for which to get the SiteConfig, in the format: sites/ site-name/config
     * @return {object} The API response object.
     */
    this.sites.getConfig = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Sets the Hosting metadata for a specific site.
     * @param {string} params.name - (Required) Required. The site for which to update the SiteConfig, in the format: sites/ site-name/config
     * @param {string} params.updateMask - A set of field names from your [site configuration](../sites.SiteConfig) that you want to update. A field will be overwritten if, and only if, it's in the mask. If a mask is not provided then a default mask of only [`max_versions`](../sites.SiteConfig.max_versions) will be used.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.sites.updateConfig = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    this.sites.domains = {};

    /**
     * Lists the domains for the specified site.
     * @param {integer} params.pageSize - The page size to return. Defaults to 50.
     * @param {string} params.pageToken - The next_page_token from a previous request, if provided.
     * @param {string} params.parent - (Required) Required. The parent for which to list domains, in the format: sites/ site-name
     * @return {object} The API response object.
     */
    this.sites.domains.list = (params) => this._makeRequest('v1beta1/{+parent}/domains', 'GET', params);

    /**
     * Gets a domain mapping on the specified site.
     * @param {string} params.name - (Required) Required. The name of the domain configuration to get.
     * @return {object} The API response object.
     */
    this.sites.domains.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Creates a domain mapping on the specified site.
     * @param {string} params.parent - (Required) Required. The parent to create the domain association for, in the format: sites/site-name
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.sites.domains.create = (params) => this._makeRequest('v1beta1/{+parent}/domains', 'POST', params);

    /**
     * Updates the specified domain mapping, creating the mapping as if it does not exist.
     * @param {string} params.name - (Required) Required. The name of the domain association to update or create, if an association doesn't already exist.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.sites.domains.update = (params) => this._makeRequest('v1beta1/{+name}', 'PUT', params);

    /**
     * Deletes the existing domain mapping on the specified site.
     * @param {string} params.name - (Required) Required. The name of the domain association to delete.
     * @return {object} The API response object.
     */
    this.sites.domains.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    this.sites.versions = {};

    /**
     * Creates a new version for the specified site.
     * @param {string} params.parent - (Required) Required. The site in which to create the version, in the format: sites/ SITE_ID
     * @param {string} params.sizeBytes - The self-reported size of the version. This value is used for a pre-emptive quota check for legacy version uploads.
     * @param {string} params.versionId - A unique id for the new version. This is was only specified for legacy version creations, and should be blank.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.sites.versions.create = (params) => this._makeRequest('v1beta1/{+parent}/versions', 'POST', params);

    /**
     * Updates the specified metadata for the specified version. This method will fail with `FAILED_PRECONDITION` in the event of an invalid state transition. The supported [state](../sites.versions#versionstatus) transitions for a version are from `CREATED` to `FINALIZED`. Use [`DeleteVersion`](delete) to set the status of a version to `DELETED`.
     * @param {string} params.name - (Required) The fully-qualified resource name for the version, in the format: sites/ SITE_ID/versions/VERSION_ID This name is provided in the response body when you call [`CreateVersion`](sites.versions/create).
     * @param {string} params.updateMask - A set of field names from your [version](../sites.versions) that you want to update. A field will be overwritten if, and only if, it's in the mask. If a mask is not provided then a default mask of only [`status`](../sites.versions#Version.FIELDS.status) will be used.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.sites.versions.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    /**
     * Deletes the specified version.
     * @param {string} params.name - (Required) Required. The fully-qualified resource name for the version, in the format: sites/SITE_ID/versions/VERSION_ID
     * @return {object} The API response object.
     */
    this.sites.versions.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Adds content files to the specified version. Each file must be under 2 GB.
     * @param {string} params.parent - (Required) Required. The version to which to add files, in the format: sites/SITE_ID /versions/VERSION_ID
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.sites.versions.populateFiles = (params) => this._makeRequest('v1beta1/{+parent}:populateFiles', 'POST', params);

    /**
     * Lists the versions that have been created for the specified site. This list includes versions for both the default `live` channel and any active preview channels for the specified site.
     * @param {string} params.filter - A filter string used to return a subset of versions in the response. The currently supported fields for filtering are: `name`, `status`, and `create_time`. Learn more about filtering in Google's [AIP 160 standard](https://google.aip.dev/160).
     * @param {integer} params.pageSize - The maximum number of versions to return. The service may return a lower number if fewer versions exist than this maximum number. If unspecified, defaults to 25. The maximum value is 100; values above 100 will be coerced to 100.
     * @param {string} params.pageToken - A token from a previous call to `ListVersions` that tells the server where to resume listing.
     * @param {string} params.parent - (Required) Required. The site or channel for which to list versions, in either of the following formats: - sites/SITE_ID - sites/SITE_ID/channels/CHANNEL_ID
     * @return {object} The API response object.
     */
    this.sites.versions.list = (params) => this._makeRequest('v1beta1/{+parent}/versions', 'GET', params);

    /**
     * Get the specified version that has been created for the specified site. This can include versions that were created for the default `live` channel or for any active preview channels for the specified site.
     * @param {string} params.name - (Required) Required. The fully-qualified resource name for the version, in the format: sites/SITE_ID/versions/VERSION_ID
     * @return {object} The API response object.
     */
    this.sites.versions.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Creates a new version on the specified target site using the content of the specified version.
     * @param {string} params.parent - (Required) Required. The target site for the cloned version, in the format: sites/ SITE_ID
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.sites.versions.clone = (params) => this._makeRequest('v1beta1/{+parent}/versions:clone', 'POST', params);

    this.sites.versions.files = {};

    /**
     * Lists the remaining files to be uploaded for the specified version.
     * @param {integer} params.pageSize - The maximum number of version files to return. The service may return a lower number if fewer version files exist than this maximum number. If unspecified, defaults to 1000.
     * @param {string} params.pageToken - A token from a previous call to `ListVersionFiles` that tells the server where to resume listing.
     * @param {string} params.parent - (Required) Required. The version for which to list files, in the format: sites/SITE_ID /versions/VERSION_ID
     * @param {string} params.status - The type of files that should be listed for the specified version.
     * @return {object} The API response object.
     */
    this.sites.versions.files.list = (params) => this._makeRequest('v1beta1/{+parent}/files', 'GET', params);

    this.sites.releases = {};

    /**
     * Lists the releases that have been created for the specified site or channel. When used to list releases for a site, this list includes releases for both the default `live` channel and any active preview channels for the specified site.
     * @param {integer} params.pageSize - The maximum number of releases to return. The service may return a lower number if fewer releases exist than this maximum number. If unspecified, defaults to 100.
     * @param {string} params.pageToken - A token from a previous call to `releases.list` or `channels.releases.list` that tells the server where to resume listing.
     * @param {string} params.parent - (Required) Required. The site or channel for which to list releases, in either of the following formats: - sites/SITE_ID - sites/SITE_ID/channels/CHANNEL_ID
     * @return {object} The API response object.
     */
    this.sites.releases.list = (params) => this._makeRequest('v1beta1/{+parent}/releases', 'GET', params);

    /**
     * Gets the specified release for a site or channel. When used to get a release for a site, this can get releases for both the default `live` channel and any active preview channels for the specified site.
     * @param {string} params.name - (Required) Required. The fully-qualified resource name for the Hosting release, in either of the following formats: - sites/SITE_ID/channels/CHANNEL_ID/releases/RELEASE_ID - sites/SITE_ID/releases/RELEASE_ID
     * @return {object} The API response object.
     */
    this.sites.releases.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Creates a new release, which makes the content of the specified version actively display on the appropriate URL(s).
     * @param {string} params.parent - (Required) Required. The site or channel to which the release belongs, in either of the following formats: - sites/SITE_ID - sites/SITE_ID/channels/CHANNEL_ID
     * @param {string} params.versionName - The unique identifier for a version, in the format: sites/SITE_ID/versions/ VERSION_ID The SITE_ID in this version identifier must match the SITE_ID in the `parent` parameter. This query parameter must be empty if the `type` field in the request body is `SITE_DISABLE`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.sites.releases.create = (params) => this._makeRequest('v1beta1/{+parent}/releases', 'POST', params);

    this.sites.channels = {};

    /**
     * Lists the channels for the specified site. All sites have a default `live` channel.
     * @param {integer} params.pageSize - The maximum number of channels to return. The service may return a lower number if fewer channels exist than this maximum number. If unspecified, defaults to 10. The maximum value is 100; values above 100 will be coerced to 100.
     * @param {string} params.pageToken - A token from a previous call to `ListChannels` that tells the server where to resume listing.
     * @param {string} params.parent - (Required) Required. The site for which to list channels, in the format: sites/SITE_ID
     * @return {object} The API response object.
     */
    this.sites.channels.list = (params) => this._makeRequest('v1beta1/{+parent}/channels', 'GET', params);

    /**
     * Creates a new channel in the specified site.
     * @param {string} params.channelId - Required. Immutable. A unique ID within the site that identifies the channel.
     * @param {string} params.parent - (Required) Required. The site in which to create this channel, in the format: sites/ SITE_ID
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.sites.channels.create = (params) => this._makeRequest('v1beta1/{+parent}/channels', 'POST', params);

    /**
     * Retrieves information for the specified channel of the specified site.
     * @param {string} params.name - (Required) Required. The fully-qualified resource name for the channel, in the format: sites/SITE_ID/channels/CHANNEL_ID
     * @return {object} The API response object.
     */
    this.sites.channels.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Updates information for the specified channel of the specified site. Implicitly creates the channel if it doesn't already exist.
     * @param {string} params.name - (Required) The fully-qualified resource name for the channel, in the format: sites/ SITE_ID/channels/CHANNEL_ID
     * @param {string} params.updateMask - A comma-separated list of fields to be updated in this request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.sites.channels.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    /**
     * Deletes the specified channel of the specified site. The `live` channel cannot be deleted.
     * @param {string} params.name - (Required) Required. The fully-qualified resource name for the channel, in the format: sites/SITE_ID/channels/CHANNEL_ID
     * @return {object} The API response object.
     */
    this.sites.channels.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    this.sites.channels.releases = {};

    /**
     * Lists the releases that have been created for the specified site or channel. When used to list releases for a site, this list includes releases for both the default `live` channel and any active preview channels for the specified site.
     * @param {integer} params.pageSize - The maximum number of releases to return. The service may return a lower number if fewer releases exist than this maximum number. If unspecified, defaults to 100.
     * @param {string} params.pageToken - A token from a previous call to `releases.list` or `channels.releases.list` that tells the server where to resume listing.
     * @param {string} params.parent - (Required) Required. The site or channel for which to list releases, in either of the following formats: - sites/SITE_ID - sites/SITE_ID/channels/CHANNEL_ID
     * @return {object} The API response object.
     */
    this.sites.channels.releases.list = (params) => this._makeRequest('v1beta1/{+parent}/releases', 'GET', params);

    /**
     * Gets the specified release for a site or channel. When used to get a release for a site, this can get releases for both the default `live` channel and any active preview channels for the specified site.
     * @param {string} params.name - (Required) Required. The fully-qualified resource name for the Hosting release, in either of the following formats: - sites/SITE_ID/channels/CHANNEL_ID/releases/RELEASE_ID - sites/SITE_ID/releases/RELEASE_ID
     * @return {object} The API response object.
     */
    this.sites.channels.releases.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Creates a new release, which makes the content of the specified version actively display on the appropriate URL(s).
     * @param {string} params.parent - (Required) Required. The site or channel to which the release belongs, in either of the following formats: - sites/SITE_ID - sites/SITE_ID/channels/CHANNEL_ID
     * @param {string} params.versionName - The unique identifier for a version, in the format: sites/SITE_ID/versions/ VERSION_ID The SITE_ID in this version identifier must match the SITE_ID in the `parent` parameter. This query parameter must be empty if the `type` field in the request body is `SITE_DISABLE`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.sites.channels.releases.create = (params) => this._makeRequest('v1beta1/{+parent}/releases', 'POST', params);
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
