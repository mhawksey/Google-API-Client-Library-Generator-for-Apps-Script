# Firebase Management API - Apps Script Client Library

Auto-generated client library for using the **Firebase Management API (version: v1beta1)** in Google Apps Script.

## Metadata

- **Last Checked:** Thu, 31 Jul 2025 23:34:34 GMT
- **Last Modified:** Sun, 27 Jul 2025 12:32:37 GMT
- **Created:** Sun, 20 Jul 2025 16:33:05 GMT



---

## API Reference

### `operations`

#### `operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

### `projects`

#### `projects.addGoogleAnalytics()`

Links the specified FirebaseProject with an existing [Google Analytics account](http://www.google.com/analytics/). Using this call, you can either: - Specify an `analyticsAccountId` to provision a new Google Analytics property within the specified account and associate the new property with the `FirebaseProject`. - Specify an existing `analyticsPropertyId` to associate the property with the `FirebaseProject`. Note that when you call `AddGoogleAnalytics`: 1. The first check determines if any existing data streams in the Google Analytics property correspond to any existing Firebase Apps in the `FirebaseProject` (based on the `packageName` or `bundleId` associated with the data stream). Then, as applicable, the data streams and apps are linked. Note that this auto-linking only applies to `AndroidApps` and `IosApps`. 2. If no corresponding data streams are found for the Firebase Apps, new data streams are provisioned in the Google Analytics property for each of the Firebase Apps. Note that a new data stream is always provisioned for a Web App even if it was previously associated with a data stream in the Analytics property. Learn more about the hierarchy and structure of Google Analytics accounts in the [Analytics documentation](https://support.google.com/analytics/answer/9303323). The result of this call is an [`Operation`](../../v1beta1/operations). Poll the `Operation` to track the provisioning process by calling GetOperation until [`done`](../../v1beta1/operations#Operation.FIELDS.done) is `true`. When `done` is `true`, the `Operation` has either succeeded or failed. If the `Operation` succeeded, its [`response`](../../v1beta1/operations#Operation.FIELDS.response) is set to an AnalyticsDetails; if the `Operation` failed, its [`error`](../../v1beta1/operations#Operation.FIELDS.error) is set to a google.rpc.Status. To call `AddGoogleAnalytics`, a project member must be an Owner for the existing `FirebaseProject` and have the [`Edit` permission](https://support.google.com/analytics/answer/2884495) for the Google Analytics account. If the `FirebaseProject` already has Google Analytics enabled, and you call `AddGoogleAnalytics` using an `analyticsPropertyId` that's different from the currently associated property, then the call will fail. Analytics may have already been enabled in the Firebase console or by specifying `timeZone` and `regionCode` in the call to [`AddFirebase`](../../v1beta1/projects/addFirebase).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | The resource name of the FirebaseProject to link to an existing Google Analytics account, in the format: projects/PROJECT_IDENTIFIER Refer to the `FirebaseProject` [`name`](../projects#FirebaseProject.FIELDS.name) field for details about PROJECT_IDENTIFIER values. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.getAnalyticsDetails()`

Gets the Google Analytics details currently associated with the specified FirebaseProject. If the `FirebaseProject` is not yet linked to Google Analytics, then the response to `GetAnalyticsDetails` is `NOT_FOUND`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The resource name of the FirebaseProject, in the format: projects/ PROJECT_IDENTIFIER/analyticsDetails Refer to the `FirebaseProject` [`name`](../projects#FirebaseProject.FIELDS.name) field for details about PROJECT_IDENTIFIER values. |

#### `projects.removeAnalytics()`

Unlinks the specified FirebaseProject from its Google Analytics account. This call removes the association of the specified `FirebaseProject` with its current Google Analytics property. However, this call does not delete the Google Analytics resources, such as the Google Analytics property or any data streams. These resources may be re-associated later to the `FirebaseProject` by calling [`AddGoogleAnalytics`](../../v1beta1/projects/addGoogleAnalytics) and specifying the same `analyticsPropertyId`. For Android Apps and iOS Apps, this call re-links data streams with their corresponding apps. However, for Web Apps, this call provisions a *new* data stream for each Web App. To call `RemoveAnalytics`, a project member must be an Owner for the `FirebaseProject`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | The resource name of the FirebaseProject to unlink from its Google Analytics account, in the format: projects/PROJECT_IDENTIFIER Refer to the `FirebaseProject` [`name`](../projects#FirebaseProject.FIELDS.name) field for details about PROJECT_IDENTIFIER values. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.get()`

Gets the specified FirebaseProject.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The resource name of the FirebaseProject, in the format: projects/ PROJECT_IDENTIFIER Refer to the `FirebaseProject` [`name`](../projects#FirebaseProject.FIELDS.name) field for details about PROJECT_IDENTIFIER values. |

#### `projects.list()`

Lists each FirebaseProject accessible to the caller. The elements are returned in no particular order, but they will be a consistent view of the Projects when additional requests are made with a `pageToken`. This method is eventually consistent with Project mutations, which means newly provisioned Projects and recent modifications to existing Projects might not be reflected in the set of Projects. The list will include only ACTIVE Projects. Use GetFirebaseProject for consistent reads as well as for additional Project details.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No | Token returned from a previous call to `ListFirebaseProjects` indicating where in the set of Projects to resume listing. |
| `params.pageSize` | `integer` | No | The maximum number of Projects to return in the response. The server may return fewer than this at its discretion. If no value is specified (or too large a value is specified), the server will impose its own limit. This value cannot be negative. |
| `params.showDeleted` | `boolean` | No | Optional. Controls whether Projects in the DELETED state should be returned in the response. If not specified, only `ACTIVE` Projects will be returned. |

#### `projects.addFirebase()`

Adds Firebase resources and enables Firebase services in the specified existing [Google Cloud `Project`](https://cloud.google.com/resource-manager/reference/rest/v1/projects). Since a FirebaseProject is actually also a Google Cloud `Project`, a `FirebaseProject` has the same underlying Google Cloud identifiers (`projectNumber` and `projectId`). This allows for easy interop with Google APIs. The result of this call is an [`Operation`](../../v1beta1/operations). Poll the `Operation` to track the provisioning process by calling GetOperation until [`done`](../../v1beta1/operations#Operation.FIELDS.done) is `true`. When `done` is `true`, the `Operation` has either succeeded or failed. If the `Operation` succeeded, its [`response`](../../v1beta1/operations#Operation.FIELDS.response) is set to a FirebaseProject; if the `Operation` failed, its [`error`](../../v1beta1/operations#Operation.FIELDS.error) is set to a google.rpc.Status. The `Operation` is automatically deleted after completion, so there is no need to call DeleteOperation. This method does not modify any billing account information on the underlying Google Cloud `Project`. To call `AddFirebase`, a project member or service account must have the following permissions (the IAM roles of Editor and Owner contain these permissions): `firebase.projects.update`, `resourcemanager.projects.get`, `serviceusage.services.enable`, and `serviceusage.services.get`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | The resource name of the Google Cloud `Project` in which Firebase resources will be added and Firebase services enabled, in the format: projects/ PROJECT_IDENTIFIER Refer to the `FirebaseProject` [`name`](../projects#FirebaseProject.FIELDS.name) field for details about PROJECT_IDENTIFIER values. After calling `AddFirebase`, the unique Project identifiers ( [`projectNumber`](https://cloud.google.com/resource-manager/reference/rest/v1/projects#Project.FIELDS.project_number) and [`projectId`](https://cloud.google.com/resource-manager/reference/rest/v1/projects#Project.FIELDS.project_id)) of the underlying Google Cloud `Project` are also the identifiers of the FirebaseProject. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.patch()`

Updates the attributes of the specified FirebaseProject. All [query parameters](#query-parameters) are required.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The resource name of the Project, in the format: projects/PROJECT_IDENTIFIER PROJECT_IDENTIFIER: the Project's [`ProjectNumber`](../projects#FirebaseProject.FIELDS.project_number) ***(recommended)*** or its [`ProjectId`](../projects#FirebaseProject.FIELDS.project_id). Learn more about using project identifiers in Google's [AIP 2510 standard](https://google.aip.dev/cloud/2510). Note that the value for PROJECT_IDENTIFIER in any response body will be the `ProjectId`. |
| `params.updateMask` | `string` | No | Specifies which fields of the FirebaseProject to update. Note that the following fields are immutable: `name`, `project_id`, and `project_number`. To update `state`, use any of the following Google Cloud endpoints: [`projects.delete`](https://cloud.google.com/resource-manager/reference/rest/v1/projects/delete) or [`projects.undelete`](https://cloud.google.com/resource-manager/reference/rest/v1/projects/undelete) |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.getAdminSdkConfig()`

Gets the configuration artifact associated with the specified FirebaseProject, which can be used by servers to simplify initialization. Typically, this configuration is used with the Firebase Admin SDK [initializeApp](https://firebase.google.com/docs/admin/setup#initialize_the_sdk) command.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The resource name of the FirebaseProject, in the format: projects/ PROJECT_IDENTIFIER/adminSdkConfig Refer to the `FirebaseProject` [`name`](../projects#FirebaseProject.FIELDS.name) field for details about PROJECT_IDENTIFIER values. |

#### `projects.searchApps()`

Lists all available Apps for the specified FirebaseProject. This is a convenience method. Typically, interaction with an App should be done using the platform-specific service, but some tool use-cases require a summary of all known Apps (such as for App selector interfaces).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | The parent FirebaseProject for which to list Apps, in the format: projects/ PROJECT_IDENTIFIER Refer to the `FirebaseProject` [`name`](../projects#FirebaseProject.FIELDS.name) field for details about PROJECT_IDENTIFIER values. |
| `params.pageToken` | `string` | No | Token returned from a previous call to `SearchFirebaseApps` indicating where in the set of Apps to resume listing. |
| `params.pageSize` | `integer` | No | The maximum number of Apps to return in the response. The server may return fewer than this value at its discretion. If no value is specified (or too large a value is specified), then the server will impose its own limit. This value cannot be negative. |
| `params.filter` | `string` | No | A query string compatible with Google's [AIP-160 standard](https://google.aip.dev/160). Use any of the following fields in a query: * [`app_id`](../projects/searchApps#FirebaseAppInfo.FIELDS.app_id) * [`namespace`](../projects/searchApps#FirebaseAppInfo.FIELDS.namespace) * [`platform`](../projects/searchApps#FirebaseAppInfo.FIELDS.platform) This query also supports the following "virtual" fields. These are fields which are not actually part of the returned resource object, but they can be queried as if they are pre-populated with specific values. * `sha1_hash` or `sha1_hashes`: This field is considered to be a _repeated_ `string` field, populated with the list of all SHA-1 certificate fingerprints registered with the AndroidApp. This list is empty if the App is not an `AndroidApp`. * `sha256_hash` or `sha256_hashes`: This field is considered to be a _repeated_ `string` field, populated with the list of all SHA-256 certificate fingerprints registered with the AndroidApp. This list is empty if the App is not an `AndroidApp`. * `app_store_id`: This field is considered to be a _singular_ `string` field, populated with the Apple App Store ID registered with the IosApp. This field is empty if the App is not an `IosApp`. * `team_id`: This field is considered to be a _singular_ `string` field, populated with the Apple team ID registered with the IosApp. This field is empty if the App is not an `IosApp`. |
| `params.showDeleted` | `boolean` | No | Controls whether Apps in the DELETED state should be returned. If not specified, only `ACTIVE` Apps will be returned. |

### `projects.androidApps`

#### `projects.androidApps.get()`

Gets the specified AndroidApp.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The resource name of the AndroidApp, in the format: projects/ PROJECT_IDENTIFIER/androidApps/APP_ID Since an APP_ID is a unique identifier, the Unique Resource from Sub-Collection access pattern may be used here, in the format: projects/-/androidApps/APP_ID Refer to the `AndroidApp` [`name`](../projects.androidApps#AndroidApp.FIELDS.name) field for details about PROJECT_IDENTIFIER and APP_ID values. |

#### `projects.androidApps.list()`

Lists each AndroidApp associated with the specified FirebaseProject. The elements are returned in no particular order, but will be a consistent view of the Apps when additional requests are made with a `pageToken`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | The resource name of the parent FirebaseProject for which to list each associated AndroidApp, in the format: projects/PROJECT_IDENTIFIER /androidApps Refer to the `FirebaseProject` [`name`](../projects#FirebaseProject.FIELDS.name) field for details about PROJECT_IDENTIFIER values. |
| `params.pageToken` | `string` | No | Token returned from a previous call to `ListAndroidApps` indicating where in the set of Apps to resume listing. |
| `params.pageSize` | `integer` | No | The maximum number of Apps to return in the response. The server may return fewer than this at its discretion. If no value is specified (or too large a value is specified), then the server will impose its own limit. |
| `params.showDeleted` | `boolean` | No | Controls whether Apps in the DELETED state should be returned in the response. If not specified, only `ACTIVE` Apps will be returned. |

#### `projects.androidApps.create()`

Requests the creation of a new AndroidApp in the specified FirebaseProject. The result of this call is an `Operation` which can be used to track the provisioning process. The `Operation` is automatically deleted after completion, so there is no need to call `DeleteOperation`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | The resource name of the parent FirebaseProject in which to create an AndroidApp, in the format: projects/PROJECT_IDENTIFIER/androidApps Refer to the `FirebaseProject` [`name`](../projects#FirebaseProject.FIELDS.name) field for details about PROJECT_IDENTIFIER values. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.androidApps.patch()`

Updates the attributes of the specified AndroidApp.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The resource name of the AndroidApp, in the format: projects/ PROJECT_IDENTIFIER/androidApps/APP_ID * PROJECT_IDENTIFIER: the parent Project's [`ProjectNumber`](../projects#FirebaseProject.FIELDS.project_number) ***(recommended)*** or its [`ProjectId`](../projects#FirebaseProject.FIELDS.project_id). Learn more about using project identifiers in Google's [AIP 2510 standard](https://google.aip.dev/cloud/2510). Note that the value for PROJECT_IDENTIFIER in any response body will be the `ProjectId`. * APP_ID: the globally unique, Firebase-assigned identifier for the App (see [`appId`](../projects.androidApps#AndroidApp.FIELDS.app_id)). |
| `params.updateMask` | `string` | No | Specifies which fields of the AndroidApp to update. Note that the following fields are immutable: `name`, `app_id`, `project_id`, and `package_name`. To update `state`, use any of the following endpoints: RemoveAndroidApp or UndeleteAndroidApp. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.androidApps.remove()`

Removes the specified AndroidApp from the FirebaseProject.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the AndroidApp, in the format: projects/ PROJECT_IDENTIFIER/androidApps/APP_ID Since an APP_ID is a unique identifier, the Unique Resource from Sub-Collection access pattern may be used here, in the format: projects/-/androidApps/APP_ID Refer to the AndroidApp [name](../projects.androidApps#AndroidApp.FIELDS.name) field for details about PROJECT_IDENTIFIER and APP_ID values. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.androidApps.undelete()`

Restores the specified AndroidApp to the FirebaseProject.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the AndroidApp, in the format: projects/ PROJECT_IDENTIFIER/androidApps/APP_ID Since an APP_ID is a unique identifier, the Unique Resource from Sub-Collection access pattern may be used here, in the format: projects/-/androidApps/APP_ID Refer to the AndroidApp [name](../projects.androidApps#AndroidApp.FIELDS.name) field for details about PROJECT_IDENTIFIER and APP_ID values. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.androidApps.getConfig()`

Gets the configuration artifact associated with the specified AndroidApp.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The resource name of the AndroidApp configuration to download, in the format: projects/PROJECT_IDENTIFIER/androidApps/APP_ID/config Since an APP_ID is a unique identifier, the Unique Resource from Sub-Collection access pattern may be used here, in the format: projects/-/androidApps/APP_ID Refer to the `AndroidApp` [`name`](../projects.androidApps#AndroidApp.FIELDS.name) field for details about PROJECT_IDENTIFIER and APP_ID values. |

### `projects.androidApps.sha`

#### `projects.androidApps.sha.list()`

Lists the SHA-1 and SHA-256 certificates for the specified AndroidApp.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | The resource name of the parent AndroidApp for which to list each associated ShaCertificate, in the format: projects/PROJECT_IDENTIFIER /androidApps/APP_ID Since an APP_ID is a unique identifier, the Unique Resource from Sub-Collection access pattern may be used here, in the format: projects/-/androidApps/APP_ID Refer to the `AndroidApp` [`name`](../projects.androidApps#AndroidApp.FIELDS.name) field for details about PROJECT_IDENTIFIER and APP_ID values. |

#### `projects.androidApps.sha.create()`

Adds a ShaCertificate to the specified AndroidApp.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | The resource name of the parent AndroidApp to which to add a ShaCertificate, in the format: projects/PROJECT_IDENTIFIER/androidApps/ APP_ID Since an APP_ID is a unique identifier, the Unique Resource from Sub-Collection access pattern may be used here, in the format: projects/-/androidApps/APP_ID Refer to the `AndroidApp` [`name`](../projects.androidApps#AndroidApp.FIELDS.name) field for details about PROJECT_IDENTIFIER and APP_ID values. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.androidApps.sha.delete()`

Removes a ShaCertificate from the specified AndroidApp.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The resource name of the ShaCertificate to remove from the parent AndroidApp, in the format: projects/PROJECT_IDENTIFIER/androidApps/APP_ID /sha/SHA_HASH Refer to the `ShaCertificate` [`name`](../projects.androidApps.sha#ShaCertificate.FIELDS.name) field for details about PROJECT_IDENTIFIER, APP_ID, and SHA_HASH values. You can obtain the full resource name of the `ShaCertificate` from the response of [`ListShaCertificates`](../projects.androidApps.sha/list) or the original [`CreateShaCertificate`](../projects.androidApps.sha/create). |

### `projects.iosApps`

#### `projects.iosApps.get()`

Gets the specified IosApp.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The resource name of the IosApp, in the format: projects/PROJECT_IDENTIFIER /iosApps/APP_ID Since an APP_ID is a unique identifier, the Unique Resource from Sub-Collection access pattern may be used here, in the format: projects/-/iosApps/APP_ID Refer to the `IosApp` [`name`](../projects.iosApps#IosApp.FIELDS.name) field for details about PROJECT_IDENTIFIER and APP_ID values. |

#### `projects.iosApps.list()`

Lists each IosApp associated with the specified FirebaseProject. The elements are returned in no particular order, but will be a consistent view of the Apps when additional requests are made with a `pageToken`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | The resource name of the parent FirebaseProject for which to list each associated IosApp, in the format: projects/PROJECT_IDENTIFIER/iosApps Refer to the `FirebaseProject` [`name`](../projects#FirebaseProject.FIELDS.name) field for details about PROJECT_IDENTIFIER values. |
| `params.pageToken` | `string` | No | Token returned from a previous call to `ListIosApps` indicating where in the set of Apps to resume listing. |
| `params.pageSize` | `integer` | No | The maximum number of Apps to return in the response. The server may return fewer than this at its discretion. If no value is specified (or too large a value is specified), the server will impose its own limit. |
| `params.showDeleted` | `boolean` | No | Controls whether Apps in the DELETED state should be returned in the response. If not specified, only `ACTIVE` Apps will be returned. |

#### `projects.iosApps.create()`

Requests the creation of a new IosApp in the specified FirebaseProject. The result of this call is an `Operation` which can be used to track the provisioning process. The `Operation` is automatically deleted after completion, so there is no need to call `DeleteOperation`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | The resource name of the parent FirebaseProject in which to create an IosApp, in the format: projects/PROJECT_IDENTIFIER/iosApps Refer to the `FirebaseProject` [`name`](../projects#FirebaseProject.FIELDS.name) field for details about PROJECT_IDENTIFIER values. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.iosApps.patch()`

Updates the attributes of the specified IosApp.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The resource name of the IosApp, in the format: projects/PROJECT_IDENTIFIER /iosApps/APP_ID * PROJECT_IDENTIFIER: the parent Project's [`ProjectNumber`](../projects#FirebaseProject.FIELDS.project_number) ***(recommended)*** or its [`ProjectId`](../projects#FirebaseProject.FIELDS.project_id). Learn more about using project identifiers in Google's [AIP 2510 standard](https://google.aip.dev/cloud/2510). Note that the value for PROJECT_IDENTIFIER in any response body will be the `ProjectId`. * APP_ID: the globally unique, Firebase-assigned identifier for the App (see [`appId`](../projects.iosApps#IosApp.FIELDS.app_id)). |
| `params.updateMask` | `string` | No | Specifies which fields of the IosApp to update. Note that the following fields are immutable: `name`, `app_id`, `project_id`, and `bundle_id`. To update `state`, use any of the following endpoints: RemoveIosApp or UndeleteIosApp. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.iosApps.remove()`

Removes the specified IosApp from the FirebaseProject.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the IosApp, in the format: projects/ PROJECT_IDENTIFIER/iosApps/APP_ID Since an APP_ID is a unique identifier, the Unique Resource from Sub-Collection access pattern may be used here, in the format: projects/-/iosApps/APP_ID Refer to the IosApp [name](../projects.iosApps#IosApp.FIELDS.name) field for details about PROJECT_IDENTIFIER and APP_ID values. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.iosApps.undelete()`

Restores the specified IosApp to the FirebaseProject.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the IosApp, in the format: projects/ PROJECT_IDENTIFIER/iosApps/APP_ID Since an APP_ID is a unique identifier, the Unique Resource from Sub-Collection access pattern may be used here, in the format: projects/-/iosApps/APP_ID Refer to the IosApp [name](../projects.iosApps#IosApp.FIELDS.name) field for details about PROJECT_IDENTIFIER and APP_ID values. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.iosApps.getConfig()`

Gets the configuration artifact associated with the specified IosApp.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The resource name of the App configuration to download, in the format: projects/PROJECT_IDENTIFIER/iosApps/APP_ID/config Since an APP_ID is a unique identifier, the Unique Resource from Sub-Collection access pattern may be used here, in the format: projects/-/iosApps/APP_ID Refer to the `IosApp` [`name`](../projects.iosApps#IosApp.FIELDS.name) field for details about PROJECT_IDENTIFIER and APP_ID values. |

### `projects.availableLocations`

#### `projects.availableLocations.list()`

**DECOMMISSIONED.** **If called, this endpoint will return a 404 error.** _Instead, use the applicable resource-specific REST API (or associated documentation, as needed) to determine valid locations for each resource used in your Project._ Lists the valid ["locations for default Google Cloud resources"](https://firebase.google.com/docs/projects/locations#default-cloud-location) for the specified Project (including a FirebaseProject). One of these locations can be selected as the Project's location for default Google Cloud resources, which is the geographical location where the Project's resources associated with Google App Engine (such as the default Cloud Firestore instance) will be provisioned by default. However, if the location for default Google Cloud resources has already been set for the Project, then this setting cannot be changed. This call checks for any possible [location restrictions](https://cloud.google.com/resource-manager/docs/organization-policy/defining-locations) for the specified Project and, thus, might return a subset of all possible locations. To list all locations (regardless of any restrictions), call the endpoint without specifying a unique project identifier (that is, `/v1beta1/{parent=projects/-}/listAvailableLocations`). To call `ListAvailableLocations` with a specified project, a member must be at minimum a Viewer of the Project. Calls without a specified project do not require any specific project permissions.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | The FirebaseProject for which to list [locations for default Google Cloud resources](https://firebase.google.com/docs/projects/locations#default-cloud-location), in the format: projects/PROJECT_IDENTIFIER Refer to the `FirebaseProject` [`name`](../projects#FirebaseProject.FIELDS.name) field for details about PROJECT_IDENTIFIER values. If no unique project identifier is specified (that is, `projects/-`), the returned list does not take into account org-specific or project-specific location restrictions. |
| `params.pageToken` | `string` | No | Token returned from a previous call to `ListAvailableLocations` indicating where in the list of locations to resume listing. |
| `params.pageSize` | `integer` | No | The maximum number of locations to return in the response. The server may return fewer than this value at its discretion. If no value is specified (or too large a value is specified), then the server will impose its own limit. This value cannot be negative. |

### `projects.defaultLocation`

#### `projects.defaultLocation.finalize()`

**DECOMMISSIONED.** **If called, this endpoint will return a 404 error.** _Instead, use the applicable resource-specific REST API to set the location for each resource used in your Project._ Sets the ["location for default Google Cloud resources"](https://firebase.google.com/docs/projects/locations#default-cloud-location) for the specified FirebaseProject. This method creates a Google App Engine application with a [default Cloud Storage bucket](https://cloud.google.com/appengine/docs/standard/python/googlecloudstorageclient/setting-up-cloud-storage#activating_a_cloud_storage_bucket), located in the specified [`locationId`](#body.request_body.FIELDS.location_id). This location must be one of the available [App Engine locations](https://cloud.google.com/about/locations#region). After the location for default Google Cloud resources is finalized, or if it was already set, it cannot be changed. The location for default Google Cloud resources for the specified `FirebaseProject` might already be set because either the underlying Google Cloud `Project` already has an App Engine application or `FinalizeDefaultLocation` was previously called with a specified `locationId`. The result of this call is an [`Operation`](../../v1beta1/operations), which can be used to track the provisioning process. The [`response`](../../v1beta1/operations#Operation.FIELDS.response) type of the `Operation` is google.protobuf.Empty. The `Operation` can be polled by its `name` using GetOperation until `done` is true. When `done` is true, the `Operation` has either succeeded or failed. If the `Operation` has succeeded, its [`response`](../../v1beta1/operations#Operation.FIELDS.response) will be set to a google.protobuf.Empty; if the `Operation` has failed, its `error` will be set to a google.rpc.Status. The `Operation` is automatically deleted after completion, so there is no need to call DeleteOperation. All fields listed in the [request body](#request-body) are required. To call `FinalizeDefaultLocation`, a member must be an Owner of the Project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | The resource name of the FirebaseProject for which the ["location for default Google Cloud resources"](https://firebase.google.com/docs/projects/locations#default-cloud-location) will be set, in the format: projects/PROJECT_IDENTIFIER Refer to the `FirebaseProject` [`name`](../projects#FirebaseProject.FIELDS.name) field for details about PROJECT_IDENTIFIER values. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.webApps`

#### `projects.webApps.get()`

Gets the specified WebApp.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The resource name of the WebApp, in the format: projects/PROJECT_IDENTIFIER /webApps/APP_ID Since an APP_ID is a unique identifier, the Unique Resource from Sub-Collection access pattern may be used here, in the format: projects/-/webApps/APP_ID Refer to the `WebApp` [`name`](../projects.webApps#WebApp.FIELDS.name) field for details about PROJECT_IDENTIFIER and APP_ID values. |

#### `projects.webApps.list()`

Lists each WebApp associated with the specified FirebaseProject. The elements are returned in no particular order, but will be a consistent view of the Apps when additional requests are made with a `pageToken`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | The resource name of the parent FirebaseProject for which to list each associated WebApp, in the format: projects/PROJECT_IDENTIFIER/webApps Refer to the `FirebaseProject` [`name`](../projects#FirebaseProject.FIELDS.name) field for details about PROJECT_IDENTIFIER values. |
| `params.pageToken` | `string` | No | Token returned from a previous call to `ListWebApps` indicating where in the set of Apps to resume listing. |
| `params.pageSize` | `integer` | No | The maximum number of Apps to return in the response. The server may return fewer than this value at its discretion. If no value is specified (or too large a value is specified), then the server will impose its own limit. |
| `params.showDeleted` | `boolean` | No | Controls whether Apps in the DELETED state should be returned in the response. If not specified, only `ACTIVE` Apps will be returned. |

#### `projects.webApps.create()`

Requests the creation of a new WebApp in the specified FirebaseProject. The result of this call is an `Operation` which can be used to track the provisioning process. The `Operation` is automatically deleted after completion, so there is no need to call `DeleteOperation`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | The resource name of the parent FirebaseProject in which to create a WebApp, in the format: projects/PROJECT_IDENTIFIER/webApps Refer to the `FirebaseProject` [`name`](../projects#FirebaseProject.FIELDS.name) field for details about PROJECT_IDENTIFIER values. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.webApps.patch()`

Updates the attributes of the specified WebApp.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The resource name of the WebApp, in the format: projects/PROJECT_IDENTIFIER /webApps/APP_ID * PROJECT_IDENTIFIER: the parent Project's [`ProjectNumber`](../projects#FirebaseProject.FIELDS.project_number) ***(recommended)*** or its [`ProjectId`](../projects#FirebaseProject.FIELDS.project_id). Learn more about using project identifiers in Google's [AIP 2510 standard](https://google.aip.dev/cloud/2510). Note that the value for PROJECT_IDENTIFIER in any response body will be the `ProjectId`. * APP_ID: the globally unique, Firebase-assigned identifier for the App (see [`appId`](../projects.webApps#WebApp.FIELDS.app_id)). |
| `params.updateMask` | `string` | No | Specifies which fields of the WebApp to update. Note that the following fields are immutable: `name`, `app_id`, and `project_id`. To update `state`, use any of the following endpoints: RemoveWebApp or UndeleteWebApp. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.webApps.remove()`

Removes the specified WebApp from the FirebaseProject.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the WebApp, in the format: projects/ PROJECT_IDENTIFIER/webApps/APP_ID Since an APP_ID is a unique identifier, the Unique Resource from Sub-Collection access pattern may be used here, in the format: projects/-/webApps/APP_ID Refer to the WebApp [name](../projects.webApps#WebApp.FIELDS.name) field for details about PROJECT_IDENTIFIER and APP_ID values. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.webApps.undelete()`

Restores the specified WebApp to the FirebaseProject.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the WebApp, in the format: projects/ PROJECT_IDENTIFIER/webApps/APP_ID Since an APP_ID is a unique identifier, the Unique Resource from Sub-Collection access pattern may be used here, in the format: projects/-/webApps/APP_ID Refer to the WebApp [name](../projects.webApps#WebApp.FIELDS.name) field for details about PROJECT_IDENTIFIER and APP_ID values. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.webApps.getConfig()`

Gets the configuration artifact associated with the specified WebApp.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The resource name of the WebApp configuration to download, in the format: projects/PROJECT_IDENTIFIER/webApps/APP_ID/config Since an APP_ID is a unique identifier, the Unique Resource from Sub-Collection access pattern may be used here, in the format: projects/-/webApps/APP_ID Refer to the `WebApp` [`name`](../projects.webApps#WebApp.FIELDS.name) field for details about PROJECT_IDENTIFIER and APP_ID values. |

### `availableProjects`

#### `availableProjects.list()`

Lists each [Google Cloud `Project`](https://cloud.google.com/resource-manager/reference/rest/v1/projects) that can have Firebase resources added and Firebase services enabled. A Project will only be listed if: - The caller has sufficient [Google IAM](https://cloud.google.com/iam) permissions to call AddFirebase. - The Project is not already a FirebaseProject. - The Project is not in an Organization which has policies that prevent Firebase resources from being added. 

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No | Token returned from a previous call to `ListAvailableProjects` indicating where in the set of Projects to resume listing. |
| `params.pageSize` | `integer` | No | The maximum number of Projects to return in the response. The server may return fewer than this value at its discretion. If no value is specified (or too large a value is specified), the server will impose its own limit. This value cannot be negative. |