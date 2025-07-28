# Firebase Hosting API - Apps Script Client Library

Auto-generated client library for using the **Firebase Hosting API (version: v1beta1)** in Google Apps Script.

## Metadata

- **Last Checked:** Mon, 28 Jul 2025 21:54:57 GMT
- **Last Modified:** Sun, 27 Jul 2025 12:33:00 GMT
- **Created:** Sun, 20 Jul 2025 16:33:35 GMT



---

## API Reference

### `projects`

### `projects.operations`

#### `projects.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

### `projects.sites`

#### `projects.sites.getConfig()`

Gets the Hosting metadata for a specific site.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The site for which to get the SiteConfig, in the format: sites/ site-name/config |

#### `projects.sites.updateConfig()`

Sets the Hosting metadata for a specific site.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The site for which to update the SiteConfig, in the format: sites/ site-name/config |
| `params.updateMask` | `string` | No | A set of field names from your [site configuration](../sites.SiteConfig) that you want to update. A field will be overwritten if, and only if, it's in the mask. If a mask is not provided then a default mask of only [`max_versions`](../sites.SiteConfig.max_versions) will be used. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.sites.create()`

Creates a new Hosting Site in the specified parent Firebase project. Note that Hosting sites can take several minutes to propagate through Firebase systems.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The Firebase project in which to create a Hosting site, in the format: projects/PROJECT_IDENTIFIER Refer to the `Site` [`name`](../projects#Site.FIELDS.name) field for details about PROJECT_IDENTIFIER values. |
| `params.siteId` | `string` | No | Required. Immutable. A globally unique identifier for the Hosting site. This identifier is used to construct the Firebase-provisioned subdomains for the site, so it must also be a valid domain name label. |
| `params.validateOnly` | `boolean` | No | Optional. If set, validates that the site_id is available and that the request would succeed, returning the expected resulting site or error. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.sites.patch()`

Updates attributes of the specified Hosting Site.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. The fully-qualified resource name of the Hosting site, in the format: projects/PROJECT_IDENTIFIER/sites/SITE_ID PROJECT_IDENTIFIER: the Firebase project's [`ProjectNumber`](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects#FirebaseProject.FIELDS.project_number) ***(recommended)*** or its [`ProjectId`](https://firebase.google.com/docs/reference/firebase-management/rest/v1beta1/projects#FirebaseProject.FIELDS.project_id). Learn more about using project identifiers in Google's [AIP 2510 standard](https://google.aip.dev/cloud/2510). |
| `params.updateMask` | `string` | No | A set of field names from your Site that you want to update. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.sites.get()`

Gets the specified Hosting Site.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The fully-qualified resource name for the Hosting site, in the format: projects/PROJECT_IDENTIFIER/sites/SITE_ID Refer to the `Site` [`name`](../projects#Site.FIELDS.name) field for details about PROJECT_IDENTIFIER values. Since a SITE_ID is a globally unique identifier, you can also use the unique sub-collection resource access pattern, in the format: projects/-/sites/SITE_ID |

#### `projects.sites.list()`

Lists each Hosting Site associated with the specified parent Firebase project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The Firebase project for which to list sites, in the format: projects/PROJECT_IDENTIFIER Refer to the `Site` [`name`](../projects#Site.FIELDS.name) field for details about PROJECT_IDENTIFIER values. |
| `params.pageToken` | `string` | No | Optional. A token from a previous call to `ListSites` that tells the server where to resume listing. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of sites to return. The service may return a lower number if fewer sites exist than this maximum number. If unspecified, defaults to 40. |

#### `projects.sites.delete()`

Deletes the specified Hosting Site from the specified parent Firebase project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The fully-qualified resource name for the Hosting site, in the format: projects/PROJECT_IDENTIFIER/sites/SITE_ID Refer to the `Site` [`name`](../projects#Site.FIELDS.name) field for details about PROJECT_IDENTIFIER values. |

### `projects.sites.customDomains`

#### `projects.sites.customDomains.create()`

Creates a `CustomDomain`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The custom domain's parent, specifically a Firebase Hosting `Site`. |
| `params.customDomainId` | `string` | No | Required. The ID of the `CustomDomain`, which is the domain name you'd like to use with Firebase Hosting. |
| `params.validateOnly` | `boolean` | No | If true, Hosting validates that it's possible to complete your request but doesn't actually create a new `CustomDomain`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.sites.customDomains.patch()`

Updates the specified `CustomDomain`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. The fully-qualified name of the `CustomDomain`. |
| `params.updateMask` | `string` | No | The set of field names from your `CustomDomain` that you want to update. A field will be overwritten if, and only if, it's in the mask. If you don't provide a mask, Hosting updates the entire `CustomDomain`. |
| `params.allowMissing` | `boolean` | No | If true, Hosting creates the `CustomDomain` if it doesn't already exist. |
| `params.validateOnly` | `boolean` | No | If true, Hosting validates that it's possible to complete your request but doesn't actually create or update the `CustomDomain`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.sites.customDomains.get()`

Gets the specified `CustomDomain`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the `CustomDomain` to get. |

#### `projects.sites.customDomains.list()`

Lists each `CustomDomain` associated with the specified parent Hosting site. Returns `CustomDomain`s in a consistent, but undefined, order to facilitate pagination.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The Firebase Hosting `Site` with `CustomDomain` entities you'd like to list. |
| `params.pageSize` | `integer` | No | The max number of `CustomDomain` entities to return in a request. Defaults to 10. |
| `params.pageToken` | `string` | No | A token from a previous call to `ListCustomDomains` that tells the server where to resume listing. |
| `params.showDeleted` | `boolean` | No | If true, the request returns soft-deleted `CustomDomain`s that haven't been fully-deleted yet. To restore deleted `CustomDomain`s, make an `UndeleteCustomDomain` request. |

#### `projects.sites.customDomains.delete()`

Deletes the specified `CustomDomain`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the `CustomDomain` to delete. |
| `params.allowMissing` | `boolean` | No | If true, the request succeeds even if the `CustomDomain` doesn't exist. |
| `params.validateOnly` | `boolean` | No | If true, Hosting validates that it's possible to complete your request but doesn't actually delete the `CustomDomain`. |
| `params.etag` | `string` | No | A tag that represents the state of the `CustomDomain` as you know it. If present, the supplied tag must match the current value on your `CustomDomain`, or the request fails. |

#### `projects.sites.customDomains.undelete()`

Undeletes the specified `CustomDomain` if it has been soft-deleted. Hosting retains soft-deleted custom domains for around 30 days before permanently deleting them.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the `CustomDomain` to delete. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.sites.customDomains.operations`

#### `projects.sites.customDomains.operations.list()`

Lists operations that match the specified filter in the request.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `projects.sites.customDomains.operations.get()`

Gets the latest state of a long-running operation. Use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

### `projects.sites.domains`

#### `projects.sites.domains.list()`

Lists the domains for the specified site.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent for which to list domains, in the format: sites/ site-name |
| `params.pageSize` | `integer` | No | The page size to return. Defaults to 50. |
| `params.pageToken` | `string` | No | The next_page_token from a previous request, if provided. |

#### `projects.sites.domains.get()`

Gets a domain mapping on the specified site.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the domain configuration to get. |

#### `projects.sites.domains.create()`

Creates a domain mapping on the specified site.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent to create the domain association for, in the format: sites/site-name |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.sites.domains.update()`

Updates the specified domain mapping, creating the mapping as if it does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the domain association to update or create, if an association doesn't already exist. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.sites.domains.delete()`

Deletes the existing domain mapping on the specified site.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the domain association to delete. |

### `projects.sites.versions`

#### `projects.sites.versions.create()`

Creates a new version for the specified site.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The site in which to create the version, in the format: sites/ SITE_ID |
| `params.versionId` | `string` | No | A unique id for the new version. This is was only specified for legacy version creations, and should be blank. |
| `params.sizeBytes` | `string` | No | The self-reported size of the version. This value is used for a pre-emptive quota check for legacy version uploads. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.sites.versions.patch()`

 Updates the specified metadata for the specified version. This method will fail with `FAILED_PRECONDITION` in the event of an invalid state transition. The supported [state](../sites.versions#versionstatus) transitions for a version are from `CREATED` to `FINALIZED`. Use [`DeleteVersion`](delete) to set the status of a version to `DELETED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The fully-qualified resource name for the version, in the format: sites/ SITE_ID/versions/VERSION_ID This name is provided in the response body when you call [`CreateVersion`](sites.versions/create). |
| `params.updateMask` | `string` | No | A set of field names from your [version](../sites.versions) that you want to update. A field will be overwritten if, and only if, it's in the mask. If a mask is not provided then a default mask of only [`status`](../sites.versions#Version.FIELDS.status) will be used. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.sites.versions.delete()`

Deletes the specified version.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The fully-qualified resource name for the version, in the format: sites/SITE_ID/versions/VERSION_ID |

#### `projects.sites.versions.populateFiles()`

 Adds content files to the specified version. Each file must be under 2 GB.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The version to which to add files, in the format: sites/SITE_ID /versions/VERSION_ID |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.sites.versions.list()`

Lists the versions that have been created for the specified site. This list includes versions for both the default `live` channel and any active preview channels for the specified site.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The site or channel for which to list versions, in either of the following formats: - sites/SITE_ID - sites/SITE_ID/channels/CHANNEL_ID  |
| `params.pageSize` | `integer` | No | The maximum number of versions to return. The service may return a lower number if fewer versions exist than this maximum number. If unspecified, defaults to 25. The maximum value is 100; values above 100 will be coerced to 100. |
| `params.pageToken` | `string` | No | A token from a previous call to `ListVersions` that tells the server where to resume listing. |
| `params.filter` | `string` | No | A filter string used to return a subset of versions in the response. The currently supported fields for filtering are: `name`, `status`, and `create_time`. Learn more about filtering in Google's [AIP 160 standard](https://google.aip.dev/160). |

#### `projects.sites.versions.get()`

Get the specified version that has been created for the specified site. This can include versions that were created for the default `live` channel or for any active preview channels for the specified site.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The fully-qualified resource name for the version, in the format: sites/SITE_ID/versions/VERSION_ID |

#### `projects.sites.versions.clone()`

Creates a new version on the specified target site using the content of the specified version.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The target site for the cloned version, in the format: sites/ SITE_ID |
| `params.resource` | `object` | Yes | The request body. |

### `projects.sites.versions.files`

#### `projects.sites.versions.files.list()`

Lists the remaining files to be uploaded for the specified version.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The version for which to list files, in the format: sites/SITE_ID /versions/VERSION_ID |
| `params.status` | `string` | No |  The type of files that should be listed for the specified version. |
| `params.pageSize` | `integer` | No | The maximum number of version files to return. The service may return a lower number if fewer version files exist than this maximum number. If unspecified, defaults to 1000. |
| `params.pageToken` | `string` | No | A token from a previous call to `ListVersionFiles` that tells the server where to resume listing. |

### `projects.sites.releases`

#### `projects.sites.releases.list()`

Lists the releases that have been created for the specified site or channel. When used to list releases for a site, this list includes releases for both the default `live` channel and any active preview channels for the specified site.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The site or channel for which to list releases, in either of the following formats: - sites/SITE_ID - sites/SITE_ID/channels/CHANNEL_ID  |
| `params.pageSize` | `integer` | No | The maximum number of releases to return. The service may return a lower number if fewer releases exist than this maximum number. If unspecified, defaults to 100. |
| `params.pageToken` | `string` | No | A token from a previous call to `releases.list` or `channels.releases.list` that tells the server where to resume listing. |

#### `projects.sites.releases.get()`

Gets the specified release for a site or channel. When used to get a release for a site, this can get releases for both the default `live` channel and any active preview channels for the specified site.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The fully-qualified resource name for the Hosting release, in either of the following formats: - sites/SITE_ID/channels/CHANNEL_ID/releases/RELEASE_ID - sites/SITE_ID/releases/RELEASE_ID  |

#### `projects.sites.releases.create()`

Creates a new release, which makes the content of the specified version actively display on the appropriate URL(s).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The site or channel to which the release belongs, in either of the following formats: - sites/SITE_ID - sites/SITE_ID/channels/CHANNEL_ID |
| `params.versionName` | `string` | No |  The unique identifier for a version, in the format: sites/SITE_ID/versions/ VERSION_ID The SITE_ID in this version identifier must match the SITE_ID in the `parent` parameter. This query parameter must be empty if the `type` field in the request body is `SITE_DISABLE`. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.sites.channels`

#### `projects.sites.channels.list()`

Lists the channels for the specified site. All sites have a default `live` channel.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The site for which to list channels, in the format: sites/SITE_ID |
| `params.pageSize` | `integer` | No | The maximum number of channels to return. The service may return a lower number if fewer channels exist than this maximum number. If unspecified, defaults to 10. The maximum value is 100; values above 100 will be coerced to 100. |
| `params.pageToken` | `string` | No | A token from a previous call to `ListChannels` that tells the server where to resume listing. |

#### `projects.sites.channels.create()`

Creates a new channel in the specified site.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The site in which to create this channel, in the format: sites/ SITE_ID |
| `params.channelId` | `string` | No | Required. Immutable. A unique ID within the site that identifies the channel. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.sites.channels.get()`

Retrieves information for the specified channel of the specified site.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The fully-qualified resource name for the channel, in the format: sites/SITE_ID/channels/CHANNEL_ID |

#### `projects.sites.channels.patch()`

Updates information for the specified channel of the specified site. Implicitly creates the channel if it doesn't already exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The fully-qualified resource name for the channel, in the format: sites/ SITE_ID/channels/CHANNEL_ID |
| `params.updateMask` | `string` | No | A comma-separated list of fields to be updated in this request. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.sites.channels.delete()`

Deletes the specified channel of the specified site. The `live` channel cannot be deleted.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The fully-qualified resource name for the channel, in the format: sites/SITE_ID/channels/CHANNEL_ID |

### `projects.sites.channels.releases`

#### `projects.sites.channels.releases.list()`

Lists the releases that have been created for the specified site or channel. When used to list releases for a site, this list includes releases for both the default `live` channel and any active preview channels for the specified site.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The site or channel for which to list releases, in either of the following formats: - sites/SITE_ID - sites/SITE_ID/channels/CHANNEL_ID  |
| `params.pageSize` | `integer` | No | The maximum number of releases to return. The service may return a lower number if fewer releases exist than this maximum number. If unspecified, defaults to 100. |
| `params.pageToken` | `string` | No | A token from a previous call to `releases.list` or `channels.releases.list` that tells the server where to resume listing. |

#### `projects.sites.channels.releases.get()`

Gets the specified release for a site or channel. When used to get a release for a site, this can get releases for both the default `live` channel and any active preview channels for the specified site.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The fully-qualified resource name for the Hosting release, in either of the following formats: - sites/SITE_ID/channels/CHANNEL_ID/releases/RELEASE_ID - sites/SITE_ID/releases/RELEASE_ID  |

#### `projects.sites.channels.releases.create()`

Creates a new release, which makes the content of the specified version actively display on the appropriate URL(s).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The site or channel to which the release belongs, in either of the following formats: - sites/SITE_ID - sites/SITE_ID/channels/CHANNEL_ID |
| `params.versionName` | `string` | No |  The unique identifier for a version, in the format: sites/SITE_ID/versions/ VERSION_ID The SITE_ID in this version identifier must match the SITE_ID in the `parent` parameter. This query parameter must be empty if the `type` field in the request body is `SITE_DISABLE`. |
| `params.resource` | `object` | Yes | The request body. |

### `sites`

#### `sites.getConfig()`

Gets the Hosting metadata for a specific site.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The site for which to get the SiteConfig, in the format: sites/ site-name/config |

#### `sites.updateConfig()`

Sets the Hosting metadata for a specific site.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The site for which to update the SiteConfig, in the format: sites/ site-name/config |
| `params.updateMask` | `string` | No | A set of field names from your [site configuration](../sites.SiteConfig) that you want to update. A field will be overwritten if, and only if, it's in the mask. If a mask is not provided then a default mask of only [`max_versions`](../sites.SiteConfig.max_versions) will be used. |
| `params.resource` | `object` | Yes | The request body. |

### `sites.domains`

#### `sites.domains.list()`

Lists the domains for the specified site.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent for which to list domains, in the format: sites/ site-name |
| `params.pageSize` | `integer` | No | The page size to return. Defaults to 50. |
| `params.pageToken` | `string` | No | The next_page_token from a previous request, if provided. |

#### `sites.domains.get()`

Gets a domain mapping on the specified site.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the domain configuration to get. |

#### `sites.domains.create()`

Creates a domain mapping on the specified site.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent to create the domain association for, in the format: sites/site-name |
| `params.resource` | `object` | Yes | The request body. |

#### `sites.domains.update()`

Updates the specified domain mapping, creating the mapping as if it does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the domain association to update or create, if an association doesn't already exist. |
| `params.resource` | `object` | Yes | The request body. |

#### `sites.domains.delete()`

Deletes the existing domain mapping on the specified site.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the domain association to delete. |

### `sites.versions`

#### `sites.versions.create()`

Creates a new version for the specified site.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The site in which to create the version, in the format: sites/ SITE_ID |
| `params.versionId` | `string` | No | A unique id for the new version. This is was only specified for legacy version creations, and should be blank. |
| `params.sizeBytes` | `string` | No | The self-reported size of the version. This value is used for a pre-emptive quota check for legacy version uploads. |
| `params.resource` | `object` | Yes | The request body. |

#### `sites.versions.patch()`

 Updates the specified metadata for the specified version. This method will fail with `FAILED_PRECONDITION` in the event of an invalid state transition. The supported [state](../sites.versions#versionstatus) transitions for a version are from `CREATED` to `FINALIZED`. Use [`DeleteVersion`](delete) to set the status of a version to `DELETED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The fully-qualified resource name for the version, in the format: sites/ SITE_ID/versions/VERSION_ID This name is provided in the response body when you call [`CreateVersion`](sites.versions/create). |
| `params.updateMask` | `string` | No | A set of field names from your [version](../sites.versions) that you want to update. A field will be overwritten if, and only if, it's in the mask. If a mask is not provided then a default mask of only [`status`](../sites.versions#Version.FIELDS.status) will be used. |
| `params.resource` | `object` | Yes | The request body. |

#### `sites.versions.delete()`

Deletes the specified version.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The fully-qualified resource name for the version, in the format: sites/SITE_ID/versions/VERSION_ID |

#### `sites.versions.populateFiles()`

 Adds content files to the specified version. Each file must be under 2 GB.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The version to which to add files, in the format: sites/SITE_ID /versions/VERSION_ID |
| `params.resource` | `object` | Yes | The request body. |

#### `sites.versions.list()`

Lists the versions that have been created for the specified site. This list includes versions for both the default `live` channel and any active preview channels for the specified site.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The site or channel for which to list versions, in either of the following formats: - sites/SITE_ID - sites/SITE_ID/channels/CHANNEL_ID  |
| `params.pageSize` | `integer` | No | The maximum number of versions to return. The service may return a lower number if fewer versions exist than this maximum number. If unspecified, defaults to 25. The maximum value is 100; values above 100 will be coerced to 100. |
| `params.pageToken` | `string` | No | A token from a previous call to `ListVersions` that tells the server where to resume listing. |
| `params.filter` | `string` | No | A filter string used to return a subset of versions in the response. The currently supported fields for filtering are: `name`, `status`, and `create_time`. Learn more about filtering in Google's [AIP 160 standard](https://google.aip.dev/160). |

#### `sites.versions.get()`

Get the specified version that has been created for the specified site. This can include versions that were created for the default `live` channel or for any active preview channels for the specified site.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The fully-qualified resource name for the version, in the format: sites/SITE_ID/versions/VERSION_ID |

#### `sites.versions.clone()`

Creates a new version on the specified target site using the content of the specified version.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The target site for the cloned version, in the format: sites/ SITE_ID |
| `params.resource` | `object` | Yes | The request body. |

### `sites.versions.files`

#### `sites.versions.files.list()`

Lists the remaining files to be uploaded for the specified version.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The version for which to list files, in the format: sites/SITE_ID /versions/VERSION_ID |
| `params.status` | `string` | No |  The type of files that should be listed for the specified version. |
| `params.pageSize` | `integer` | No | The maximum number of version files to return. The service may return a lower number if fewer version files exist than this maximum number. If unspecified, defaults to 1000. |
| `params.pageToken` | `string` | No | A token from a previous call to `ListVersionFiles` that tells the server where to resume listing. |

### `sites.releases`

#### `sites.releases.list()`

Lists the releases that have been created for the specified site or channel. When used to list releases for a site, this list includes releases for both the default `live` channel and any active preview channels for the specified site.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The site or channel for which to list releases, in either of the following formats: - sites/SITE_ID - sites/SITE_ID/channels/CHANNEL_ID  |
| `params.pageSize` | `integer` | No | The maximum number of releases to return. The service may return a lower number if fewer releases exist than this maximum number. If unspecified, defaults to 100. |
| `params.pageToken` | `string` | No | A token from a previous call to `releases.list` or `channels.releases.list` that tells the server where to resume listing. |

#### `sites.releases.get()`

Gets the specified release for a site or channel. When used to get a release for a site, this can get releases for both the default `live` channel and any active preview channels for the specified site.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The fully-qualified resource name for the Hosting release, in either of the following formats: - sites/SITE_ID/channels/CHANNEL_ID/releases/RELEASE_ID - sites/SITE_ID/releases/RELEASE_ID  |

#### `sites.releases.create()`

Creates a new release, which makes the content of the specified version actively display on the appropriate URL(s).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The site or channel to which the release belongs, in either of the following formats: - sites/SITE_ID - sites/SITE_ID/channels/CHANNEL_ID |
| `params.versionName` | `string` | No |  The unique identifier for a version, in the format: sites/SITE_ID/versions/ VERSION_ID The SITE_ID in this version identifier must match the SITE_ID in the `parent` parameter. This query parameter must be empty if the `type` field in the request body is `SITE_DISABLE`. |
| `params.resource` | `object` | Yes | The request body. |

### `sites.channels`

#### `sites.channels.list()`

Lists the channels for the specified site. All sites have a default `live` channel.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The site for which to list channels, in the format: sites/SITE_ID |
| `params.pageSize` | `integer` | No | The maximum number of channels to return. The service may return a lower number if fewer channels exist than this maximum number. If unspecified, defaults to 10. The maximum value is 100; values above 100 will be coerced to 100. |
| `params.pageToken` | `string` | No | A token from a previous call to `ListChannels` that tells the server where to resume listing. |

#### `sites.channels.create()`

Creates a new channel in the specified site.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The site in which to create this channel, in the format: sites/ SITE_ID |
| `params.channelId` | `string` | No | Required. Immutable. A unique ID within the site that identifies the channel. |
| `params.resource` | `object` | Yes | The request body. |

#### `sites.channels.get()`

Retrieves information for the specified channel of the specified site.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The fully-qualified resource name for the channel, in the format: sites/SITE_ID/channels/CHANNEL_ID |

#### `sites.channels.patch()`

Updates information for the specified channel of the specified site. Implicitly creates the channel if it doesn't already exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The fully-qualified resource name for the channel, in the format: sites/ SITE_ID/channels/CHANNEL_ID |
| `params.updateMask` | `string` | No | A comma-separated list of fields to be updated in this request. |
| `params.resource` | `object` | Yes | The request body. |

#### `sites.channels.delete()`

Deletes the specified channel of the specified site. The `live` channel cannot be deleted.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The fully-qualified resource name for the channel, in the format: sites/SITE_ID/channels/CHANNEL_ID |

### `sites.channels.releases`

#### `sites.channels.releases.list()`

Lists the releases that have been created for the specified site or channel. When used to list releases for a site, this list includes releases for both the default `live` channel and any active preview channels for the specified site.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The site or channel for which to list releases, in either of the following formats: - sites/SITE_ID - sites/SITE_ID/channels/CHANNEL_ID  |
| `params.pageSize` | `integer` | No | The maximum number of releases to return. The service may return a lower number if fewer releases exist than this maximum number. If unspecified, defaults to 100. |
| `params.pageToken` | `string` | No | A token from a previous call to `releases.list` or `channels.releases.list` that tells the server where to resume listing. |

#### `sites.channels.releases.get()`

Gets the specified release for a site or channel. When used to get a release for a site, this can get releases for both the default `live` channel and any active preview channels for the specified site.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The fully-qualified resource name for the Hosting release, in either of the following formats: - sites/SITE_ID/channels/CHANNEL_ID/releases/RELEASE_ID - sites/SITE_ID/releases/RELEASE_ID  |

#### `sites.channels.releases.create()`

Creates a new release, which makes the content of the specified version actively display on the appropriate URL(s).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The site or channel to which the release belongs, in either of the following formats: - sites/SITE_ID - sites/SITE_ID/channels/CHANNEL_ID |
| `params.versionName` | `string` | No |  The unique identifier for a version, in the format: sites/SITE_ID/versions/ VERSION_ID The SITE_ID in this version identifier must match the SITE_ID in the `parent` parameter. This query parameter must be empty if the `type` field in the request body is `SITE_DISABLE`. |
| `params.resource` | `object` | Yes | The request body. |