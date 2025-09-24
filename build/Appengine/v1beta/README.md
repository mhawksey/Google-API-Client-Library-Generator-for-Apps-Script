# App Engine Admin API - Apps Script Client Library

Auto-generated client library for using the **App Engine Admin API (version: v1beta)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 21 Sep 2025 17:04:38 GMT
- **Last Modified:** Sun, 21 Sep 2025 17:04:38 GMT
- **Created:** Sun, 20 Jul 2025 16:12:53 GMT



---

## API Reference

### `projects`

### `projects.locations`

#### `projects.locations.list()`

Lists information about the supported locations for this service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectsId` | `string` | Yes | Part of `name`. The resource that owns the locations collection, if applicable. |
| `params.filter` | `string` | No | A filter to narrow down results to a preferred subset. The filtering language accepts strings like "displayName=tokyo", and is documented in more detail in AIP-160 (https://google.aip.dev/160). |
| `params.pageSize` | `integer` | No | The maximum number of results to return. If not set, the service selects a default. |
| `params.pageToken` | `string` | No | A page token received from the next_page_token field in the response. Send that page token to receive the subsequent page. |
| `params.extraLocationTypes` | `string` | No | Optional. Do not use this field. It is unsupported and is ignored unless explicitly documented otherwise. This is primarily for internal usage. |

#### `projects.locations.get()`

Gets information about a location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectsId` | `string` | Yes | Part of `name`. Resource name for the location. |
| `params.locationsId` | `string` | Yes | Part of `name`. See documentation of `projectsId`. |

### `projects.locations.operations`

#### `projects.locations.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectsId` | `string` | Yes | Part of `name`. The name of the operation's parent resource. |
| `params.locationsId` | `string` | Yes | Part of `name`. See documentation of `projectsId`. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `projects.locations.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectsId` | `string` | Yes | Part of `name`. The name of the operation resource. |
| `params.locationsId` | `string` | Yes | Part of `name`. See documentation of `projectsId`. |
| `params.operationsId` | `string` | Yes | Part of `name`. See documentation of `projectsId`. |

### `projects.locations.applications`

#### `projects.locations.applications.patch()`

Updates the specified Application resource. You can update the following fields: auth_domain - Google authentication domain for controlling user access to the application. default_cookie_expiration - Cookie expiration policy for the application. iap - Identity-Aware Proxy properties for the application.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectsId` | `string` | Yes | Part of `name`. Required. Name of the Application resource to update. Example: apps/myapp. |
| `params.locationsId` | `string` | Yes | Part of `name`. See documentation of `projectsId`. |
| `params.applicationsId` | `string` | Yes | Part of `name`. See documentation of `projectsId`. |
| `params.updateMask` | `string` | No | Required. Standard field mask for the set of fields to be updated. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.applications.services`

#### `projects.locations.applications.services.patch()`

Updates the configuration of the specified service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectsId` | `string` | Yes | Part of `name`. Required. Name of the resource to update. Example: apps/myapp/services/default. |
| `params.locationsId` | `string` | Yes | Part of `name`. See documentation of `projectsId`. |
| `params.applicationsId` | `string` | Yes | Part of `name`. See documentation of `projectsId`. |
| `params.servicesId` | `string` | Yes | Part of `name`. See documentation of `projectsId`. |
| `params.updateMask` | `string` | No | Required. Standard field mask for the set of fields to be updated. |
| `params.migrateTraffic` | `boolean` | No | Set to true to gradually shift traffic to one or more versions that you specify. By default, traffic is shifted immediately. For gradual traffic migration, the target versions must be located within instances that are configured for both warmup requests (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#InboundServiceType) and automatic scaling (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#AutomaticScaling). You must specify the shardBy (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services#ShardBy) field in the Service resource. Gradual traffic migration is not supported in the App Engine flexible environment. For examples, see Migrating and Splitting Traffic (https://cloud.google.com/appengine/docs/admin-api/migrating-splitting-traffic). |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.applications.services.delete()`

Deletes the specified service and all enclosed versions.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectsId` | `string` | Yes | Part of `name`. Required. Name of the resource requested. Example: apps/myapp/services/default. |
| `params.locationsId` | `string` | Yes | Part of `name`. See documentation of `projectsId`. |
| `params.applicationsId` | `string` | Yes | Part of `name`. See documentation of `projectsId`. |
| `params.servicesId` | `string` | Yes | Part of `name`. See documentation of `projectsId`. |

### `projects.locations.applications.services.versions`

#### `projects.locations.applications.services.versions.patch()`

Updates the specified Version resource. You can specify the following fields depending on the App Engine environment and type of scaling that the version resource uses:Standard environment instance_class (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.instance_class)automatic scaling in the standard environment: automatic_scaling.min_idle_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.automatic_scaling) automatic_scaling.max_idle_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.automatic_scaling) automaticScaling.standard_scheduler_settings.max_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#StandardSchedulerSettings) automaticScaling.standard_scheduler_settings.min_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#StandardSchedulerSettings) automaticScaling.standard_scheduler_settings.target_cpu_utilization (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#StandardSchedulerSettings) automaticScaling.standard_scheduler_settings.target_throughput_utilization (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#StandardSchedulerSettings)basic scaling or manual scaling in the standard environment: serving_status (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.serving_status) manual_scaling.instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#manualscaling)Flexible environment serving_status (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.serving_status)automatic scaling in the flexible environment: automatic_scaling.min_total_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.automatic_scaling) automatic_scaling.max_total_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.automatic_scaling) automatic_scaling.cool_down_period_sec (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.automatic_scaling) automatic_scaling.cpu_utilization.target_utilization (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.automatic_scaling)manual scaling in the flexible environment: manual_scaling.instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#manualscaling)

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectsId` | `string` | Yes | Part of `name`. Required. Name of the resource to update. Example: apps/myapp/services/default/versions/1. |
| `params.locationsId` | `string` | Yes | Part of `name`. See documentation of `projectsId`. |
| `params.applicationsId` | `string` | Yes | Part of `name`. See documentation of `projectsId`. |
| `params.servicesId` | `string` | Yes | Part of `name`. See documentation of `projectsId`. |
| `params.versionsId` | `string` | Yes | Part of `name`. See documentation of `projectsId`. |
| `params.updateMask` | `string` | No | Standard field mask for the set of fields to be updated. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.applications.services.versions.delete()`

Deletes an existing Version resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectsId` | `string` | Yes | Part of `name`. Required. Name of the resource requested. Example: apps/myapp/services/default/versions/v1. |
| `params.locationsId` | `string` | Yes | Part of `name`. See documentation of `projectsId`. |
| `params.applicationsId` | `string` | Yes | Part of `name`. See documentation of `projectsId`. |
| `params.servicesId` | `string` | Yes | Part of `name`. See documentation of `projectsId`. |
| `params.versionsId` | `string` | Yes | Part of `name`. See documentation of `projectsId`. |

### `projects.locations.applications.authorizedDomains`

#### `projects.locations.applications.authorizedDomains.list()`

Lists all domains the user is authorized to administer.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectsId` | `string` | Yes | Part of `parent`. Required. Name of the parent Application resource. Example: apps/myapp. |
| `params.locationsId` | `string` | Yes | Part of `parent`. See documentation of `projectsId`. |
| `params.applicationsId` | `string` | Yes | Part of `parent`. See documentation of `projectsId`. |
| `params.pageSize` | `integer` | No | Maximum results to return per page. |
| `params.pageToken` | `string` | No | Continuation token for fetching the next page of results. |

### `projects.locations.applications.authorizedCertificates`

#### `projects.locations.applications.authorizedCertificates.list()`

Lists all SSL certificates the user is authorized to administer.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectsId` | `string` | Yes | Part of `parent`. Required. Name of the parent Application resource. Example: apps/myapp. |
| `params.locationsId` | `string` | Yes | Part of `parent`. See documentation of `projectsId`. |
| `params.applicationsId` | `string` | Yes | Part of `parent`. See documentation of `projectsId`. |
| `params.view` | `string` | No | Controls the set of fields returned in the LIST response. |
| `params.pageSize` | `integer` | No | Maximum results to return per page. |
| `params.pageToken` | `string` | No | Continuation token for fetching the next page of results. |

#### `projects.locations.applications.authorizedCertificates.get()`

Gets the specified SSL certificate.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectsId` | `string` | Yes | Part of `name`. Required. Name of the resource requested. Example: apps/myapp/authorizedCertificates/12345. |
| `params.locationsId` | `string` | Yes | Part of `name`. See documentation of `projectsId`. |
| `params.applicationsId` | `string` | Yes | Part of `name`. See documentation of `projectsId`. |
| `params.authorizedCertificatesId` | `string` | Yes | Part of `name`. See documentation of `projectsId`. |
| `params.view` | `string` | No | Controls the set of fields returned in the GET response. |

#### `projects.locations.applications.authorizedCertificates.create()`

Uploads the specified SSL certificate.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectsId` | `string` | Yes | Part of `parent`. Required. Name of the parent Application resource. Example: apps/myapp. |
| `params.locationsId` | `string` | Yes | Part of `parent`. See documentation of `projectsId`. |
| `params.applicationsId` | `string` | Yes | Part of `parent`. See documentation of `projectsId`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.applications.authorizedCertificates.patch()`

Updates the specified SSL certificate. To renew a certificate and maintain its existing domain mappings, update certificate_data with a new certificate. The new certificate must be applicable to the same domains as the original certificate. The certificate display_name may also be updated.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectsId` | `string` | Yes | Part of `name`. Required. Name of the resource to update. Example: apps/myapp/authorizedCertificates/12345. |
| `params.locationsId` | `string` | Yes | Part of `name`. See documentation of `projectsId`. |
| `params.applicationsId` | `string` | Yes | Part of `name`. See documentation of `projectsId`. |
| `params.authorizedCertificatesId` | `string` | Yes | Part of `name`. See documentation of `projectsId`. |
| `params.updateMask` | `string` | No | Standard field mask for the set of fields to be updated. Updates are only supported on the certificate_raw_data and display_name fields. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.applications.authorizedCertificates.delete()`

Deletes the specified SSL certificate.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectsId` | `string` | Yes | Part of `name`. Required. Name of the resource to delete. Example: apps/myapp/authorizedCertificates/12345. |
| `params.locationsId` | `string` | Yes | Part of `name`. See documentation of `projectsId`. |
| `params.applicationsId` | `string` | Yes | Part of `name`. See documentation of `projectsId`. |
| `params.authorizedCertificatesId` | `string` | Yes | Part of `name`. See documentation of `projectsId`. |

### `projects.locations.applications.domainMappings`

#### `projects.locations.applications.domainMappings.get()`

Gets the specified domain mapping.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectsId` | `string` | Yes | Part of `name`. Required. Name of the resource requested. Example: apps/myapp/domainMappings/example.com. |
| `params.locationsId` | `string` | Yes | Part of `name`. See documentation of `projectsId`. |
| `params.applicationsId` | `string` | Yes | Part of `name`. See documentation of `projectsId`. |
| `params.domainMappingsId` | `string` | Yes | Part of `name`. See documentation of `projectsId`. |

#### `projects.locations.applications.domainMappings.create()`

Maps a domain to an application. A user must be authorized to administer a domain in order to map it to an application. For a list of available authorized domains, see AuthorizedDomains.ListAuthorizedDomains.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectsId` | `string` | Yes | Part of `parent`. Required. Name of the parent Application resource. Example: apps/myapp. |
| `params.locationsId` | `string` | Yes | Part of `parent`. See documentation of `projectsId`. |
| `params.applicationsId` | `string` | Yes | Part of `parent`. See documentation of `projectsId`. |
| `params.overrideStrategy` | `string` | No | Whether the domain creation should override any existing mappings for this domain. By default, overrides are rejected. |
| `params.requestBody` | `object` | Yes | The request body. |

### `apps`

#### `apps.get()`

Gets information about an application.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.appsId` | `string` | Yes | Part of `name`. Required. Name of the Application resource to get. Example: apps/myapp. |
| `params.includeExtraData` | `string` | No | Optional. Options to include extra data |

#### `apps.create()`

Creates an App Engine application for a Google Cloud Platform project. Required fields: id - The ID of the target Cloud Platform project. location - The region (https://cloud.google.com/appengine/docs/locations) where you want the App Engine application located.For more information about App Engine applications, see Managing Projects, Applications, and Billing (https://cloud.google.com/appengine/docs/standard/python/console/).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |

#### `apps.patch()`

Updates the specified Application resource. You can update the following fields: auth_domain - Google authentication domain for controlling user access to the application. default_cookie_expiration - Cookie expiration policy for the application. iap - Identity-Aware Proxy properties for the application.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.appsId` | `string` | Yes | Part of `name`. Required. Name of the Application resource to update. Example: apps/myapp. |
| `params.updateMask` | `string` | No | Required. Standard field mask for the set of fields to be updated. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `apps.repair()`

Recreates the required App Engine features for the specified App Engine application, for example a Cloud Storage bucket or App Engine service account. Use this method if you receive an error message about a missing feature, for example, Error retrieving the App Engine service account. If you have deleted your App Engine service account, this will not be able to recreate it. Instead, you should attempt to use the IAM undelete API if possible at https://cloud.google.com/iam/reference/rest/v1/projects.serviceAccounts/undelete?apix_params=%7B"name"%3A"projects%2F-%2FserviceAccounts%2Funique_id"%2C"resource"%3A%7B%7D%7D . If the deletion was recent, the numeric ID can be found in the Cloud Console Activity Log.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.appsId` | `string` | Yes | Part of `name`. Required. Name of the application to repair. Example: apps/myapp |
| `params.requestBody` | `object` | Yes | The request body. |

#### `apps.listRuntimes()`

Lists all the available runtimes for the application.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.appsId` | `string` | Yes | Part of `parent`. Required. Name of the parent Application resource. Example: apps/myapp. |
| `params.environment` | `string` | No | Optional. The environment of the Application. |

### `apps.operations`

#### `apps.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.appsId` | `string` | Yes | Part of `name`. The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `apps.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.appsId` | `string` | Yes | Part of `name`. The name of the operation resource. |
| `params.operationsId` | `string` | Yes | Part of `name`. See documentation of `appsId`. |

### `apps.services`

#### `apps.services.list()`

Lists all the services in the application.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.appsId` | `string` | Yes | Part of `parent`. Required. Name of the parent Application resource. Example: apps/myapp. |
| `params.pageSize` | `integer` | No | Maximum results to return per page. |
| `params.pageToken` | `string` | No | Continuation token for fetching the next page of results. |

#### `apps.services.get()`

Gets the current configuration of the specified service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.appsId` | `string` | Yes | Part of `name`. Required. Name of the resource requested. Example: apps/myapp/services/default. |
| `params.servicesId` | `string` | Yes | Part of `name`. See documentation of `appsId`. |
| `params.includeExtraData` | `string` | No | Optional. Options to include extra data |

#### `apps.services.patch()`

Updates the configuration of the specified service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.appsId` | `string` | Yes | Part of `name`. Required. Name of the resource to update. Example: apps/myapp/services/default. |
| `params.servicesId` | `string` | Yes | Part of `name`. See documentation of `appsId`. |
| `params.updateMask` | `string` | No | Required. Standard field mask for the set of fields to be updated. |
| `params.migrateTraffic` | `boolean` | No | Set to true to gradually shift traffic to one or more versions that you specify. By default, traffic is shifted immediately. For gradual traffic migration, the target versions must be located within instances that are configured for both warmup requests (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#InboundServiceType) and automatic scaling (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#AutomaticScaling). You must specify the shardBy (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services#ShardBy) field in the Service resource. Gradual traffic migration is not supported in the App Engine flexible environment. For examples, see Migrating and Splitting Traffic (https://cloud.google.com/appengine/docs/admin-api/migrating-splitting-traffic). |
| `params.requestBody` | `object` | Yes | The request body. |

#### `apps.services.delete()`

Deletes the specified service and all enclosed versions.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.appsId` | `string` | Yes | Part of `name`. Required. Name of the resource requested. Example: apps/myapp/services/default. |
| `params.servicesId` | `string` | Yes | Part of `name`. See documentation of `appsId`. |

### `apps.services.versions`

#### `apps.services.versions.list()`

Lists the versions of a service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.appsId` | `string` | Yes | Part of `parent`. Required. Name of the parent Service resource. Example: apps/myapp/services/default. |
| `params.servicesId` | `string` | Yes | Part of `parent`. See documentation of `appsId`. |
| `params.view` | `string` | No | Controls the set of fields returned in the List response. |
| `params.pageSize` | `integer` | No | Maximum results to return per page. |
| `params.pageToken` | `string` | No | Continuation token for fetching the next page of results. |

#### `apps.services.versions.get()`

Gets the specified Version resource. By default, only a BASIC_VIEW will be returned. Specify the FULL_VIEW parameter to get the full resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.appsId` | `string` | Yes | Part of `name`. Required. Name of the resource requested. Example: apps/myapp/services/default/versions/v1. |
| `params.servicesId` | `string` | Yes | Part of `name`. See documentation of `appsId`. |
| `params.versionsId` | `string` | Yes | Part of `name`. See documentation of `appsId`. |
| `params.view` | `string` | No | Controls the set of fields returned in the Get response. |
| `params.includeExtraData` | `string` | No | Optional. Options to include extra data |

#### `apps.services.versions.create()`

Deploys code and resource files to a new version.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.appsId` | `string` | Yes | Part of `parent`. Required. Name of the parent resource to create this version under. Example: apps/myapp/services/default. |
| `params.servicesId` | `string` | Yes | Part of `parent`. See documentation of `appsId`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `apps.services.versions.patch()`

Updates the specified Version resource. You can specify the following fields depending on the App Engine environment and type of scaling that the version resource uses:Standard environment instance_class (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.instance_class)automatic scaling in the standard environment: automatic_scaling.min_idle_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.automatic_scaling) automatic_scaling.max_idle_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.automatic_scaling) automaticScaling.standard_scheduler_settings.max_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#StandardSchedulerSettings) automaticScaling.standard_scheduler_settings.min_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#StandardSchedulerSettings) automaticScaling.standard_scheduler_settings.target_cpu_utilization (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#StandardSchedulerSettings) automaticScaling.standard_scheduler_settings.target_throughput_utilization (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#StandardSchedulerSettings)basic scaling or manual scaling in the standard environment: serving_status (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.serving_status) manual_scaling.instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#manualscaling)Flexible environment serving_status (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.serving_status)automatic scaling in the flexible environment: automatic_scaling.min_total_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.automatic_scaling) automatic_scaling.max_total_instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.automatic_scaling) automatic_scaling.cool_down_period_sec (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.automatic_scaling) automatic_scaling.cpu_utilization.target_utilization (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#Version.FIELDS.automatic_scaling)manual scaling in the flexible environment: manual_scaling.instances (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1beta/apps.services.versions#manualscaling)

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.appsId` | `string` | Yes | Part of `name`. Required. Name of the resource to update. Example: apps/myapp/services/default/versions/1. |
| `params.servicesId` | `string` | Yes | Part of `name`. See documentation of `appsId`. |
| `params.versionsId` | `string` | Yes | Part of `name`. See documentation of `appsId`. |
| `params.updateMask` | `string` | No | Standard field mask for the set of fields to be updated. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `apps.services.versions.delete()`

Deletes an existing Version resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.appsId` | `string` | Yes | Part of `name`. Required. Name of the resource requested. Example: apps/myapp/services/default/versions/v1. |
| `params.servicesId` | `string` | Yes | Part of `name`. See documentation of `appsId`. |
| `params.versionsId` | `string` | Yes | Part of `name`. See documentation of `appsId`. |

### `apps.services.versions.instances`

#### `apps.services.versions.instances.list()`

Lists the instances of a version.Tip: To aggregate details about instances over time, see the Stackdriver Monitoring API (https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.timeSeries/list).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.appsId` | `string` | Yes | Part of `parent`. Required. Name of the parent Version resource. Example: apps/myapp/services/default/versions/v1. |
| `params.servicesId` | `string` | Yes | Part of `parent`. See documentation of `appsId`. |
| `params.versionsId` | `string` | Yes | Part of `parent`. See documentation of `appsId`. |
| `params.pageSize` | `integer` | No | Maximum results to return per page. |
| `params.pageToken` | `string` | No | Continuation token for fetching the next page of results. |

#### `apps.services.versions.instances.get()`

Gets instance information.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.appsId` | `string` | Yes | Part of `name`. Required. Name of the resource requested. Example: apps/myapp/services/default/versions/v1/instances/instance-1. |
| `params.servicesId` | `string` | Yes | Part of `name`. See documentation of `appsId`. |
| `params.versionsId` | `string` | Yes | Part of `name`. See documentation of `appsId`. |
| `params.instancesId` | `string` | Yes | Part of `name`. See documentation of `appsId`. |

#### `apps.services.versions.instances.delete()`

Stops a running instance.The instance might be automatically recreated based on the scaling settings of the version. For more information, see "How Instances are Managed" (standard environment (https://cloud.google.com/appengine/docs/standard/python/how-instances-are-managed) | flexible environment (https://cloud.google.com/appengine/docs/flexible/python/how-instances-are-managed)).To ensure that instances are not re-created and avoid getting billed, you can stop all instances within the target version by changing the serving status of the version to STOPPED with the apps.services.versions.patch (https://cloud.google.com/appengine/docs/admin-api/reference/rest/v1/apps.services.versions/patch) method.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.appsId` | `string` | Yes | Part of `name`. Required. Name of the resource requested. Example: apps/myapp/services/default/versions/v1/instances/instance-1. |
| `params.servicesId` | `string` | Yes | Part of `name`. See documentation of `appsId`. |
| `params.versionsId` | `string` | Yes | Part of `name`. See documentation of `appsId`. |
| `params.instancesId` | `string` | Yes | Part of `name`. See documentation of `appsId`. |

#### `apps.services.versions.instances.debug()`

Enables debugging on a VM instance. This allows you to use the SSH command to connect to the virtual machine where the instance lives. While in "debug mode", the instance continues to serve live traffic. You should delete the instance when you are done debugging and then allow the system to take over and determine if another instance should be started.Only applicable for instances in App Engine flexible environment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.appsId` | `string` | Yes | Part of `name`. Required. Name of the resource requested. Example: apps/myapp/services/default/versions/v1/instances/instance-1. |
| `params.servicesId` | `string` | Yes | Part of `name`. See documentation of `appsId`. |
| `params.versionsId` | `string` | Yes | Part of `name`. See documentation of `appsId`. |
| `params.instancesId` | `string` | Yes | Part of `name`. See documentation of `appsId`. |
| `params.requestBody` | `object` | Yes | The request body. |

### `apps.firewall`

### `apps.firewall.ingressRules`

#### `apps.firewall.ingressRules.list()`

Lists the firewall rules of an application.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.appsId` | `string` | Yes | Part of `parent`. Name of the Firewall collection to retrieve. Example: apps/myapp/firewall/ingressRules. |
| `params.pageSize` | `integer` | No | Maximum results to return per page. |
| `params.pageToken` | `string` | No | Continuation token for fetching the next page of results. |
| `params.matchingAddress` | `string` | No | A valid IP Address. If set, only rules matching this address will be returned. The first returned rule will be the rule that fires on requests from this IP. |

#### `apps.firewall.ingressRules.batchUpdate()`

Replaces the entire firewall ruleset in one bulk operation. This overrides and replaces the rules of an existing firewall with the new rules.If the final rule does not match traffic with the '*' wildcard IP range, then an "allow all" rule is explicitly added to the end of the list.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.appsId` | `string` | Yes | Part of `name`. Name of the Firewall collection to set. Example: apps/myapp/firewall/ingressRules. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `apps.firewall.ingressRules.create()`

Creates a firewall rule for the application.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.appsId` | `string` | Yes | Part of `parent`. Required. Name of the parent Firewall collection in which to create a new rule. Example: apps/myapp/firewall/ingressRules. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `apps.firewall.ingressRules.get()`

Gets the specified firewall rule.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.appsId` | `string` | Yes | Part of `name`. Name of the Firewall resource to retrieve. Example: apps/myapp/firewall/ingressRules/100. |
| `params.ingressRulesId` | `string` | Yes | Part of `name`. See documentation of `appsId`. |

#### `apps.firewall.ingressRules.patch()`

Updates the specified firewall rule.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.appsId` | `string` | Yes | Part of `name`. Name of the Firewall resource to update. Example: apps/myapp/firewall/ingressRules/100. |
| `params.ingressRulesId` | `string` | Yes | Part of `name`. See documentation of `appsId`. |
| `params.updateMask` | `string` | No | Standard field mask for the set of fields to be updated. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `apps.firewall.ingressRules.delete()`

Deletes the specified firewall rule.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.appsId` | `string` | Yes | Part of `name`. Name of the Firewall resource to delete. Example: apps/myapp/firewall/ingressRules/100. |
| `params.ingressRulesId` | `string` | Yes | Part of `name`. See documentation of `appsId`. |

### `apps.authorizedDomains`

#### `apps.authorizedDomains.list()`

Lists all domains the user is authorized to administer.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.appsId` | `string` | Yes | Part of `parent`. Required. Name of the parent Application resource. Example: apps/myapp. |
| `params.pageSize` | `integer` | No | Maximum results to return per page. |
| `params.pageToken` | `string` | No | Continuation token for fetching the next page of results. |

### `apps.authorizedCertificates`

#### `apps.authorizedCertificates.list()`

Lists all SSL certificates the user is authorized to administer.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.appsId` | `string` | Yes | Part of `parent`. Required. Name of the parent Application resource. Example: apps/myapp. |
| `params.view` | `string` | No | Controls the set of fields returned in the LIST response. |
| `params.pageSize` | `integer` | No | Maximum results to return per page. |
| `params.pageToken` | `string` | No | Continuation token for fetching the next page of results. |

#### `apps.authorizedCertificates.get()`

Gets the specified SSL certificate.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.appsId` | `string` | Yes | Part of `name`. Required. Name of the resource requested. Example: apps/myapp/authorizedCertificates/12345. |
| `params.authorizedCertificatesId` | `string` | Yes | Part of `name`. See documentation of `appsId`. |
| `params.view` | `string` | No | Controls the set of fields returned in the GET response. |

#### `apps.authorizedCertificates.create()`

Uploads the specified SSL certificate.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.appsId` | `string` | Yes | Part of `parent`. Required. Name of the parent Application resource. Example: apps/myapp. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `apps.authorizedCertificates.patch()`

Updates the specified SSL certificate. To renew a certificate and maintain its existing domain mappings, update certificate_data with a new certificate. The new certificate must be applicable to the same domains as the original certificate. The certificate display_name may also be updated.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.appsId` | `string` | Yes | Part of `name`. Required. Name of the resource to update. Example: apps/myapp/authorizedCertificates/12345. |
| `params.authorizedCertificatesId` | `string` | Yes | Part of `name`. See documentation of `appsId`. |
| `params.updateMask` | `string` | No | Standard field mask for the set of fields to be updated. Updates are only supported on the certificate_raw_data and display_name fields. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `apps.authorizedCertificates.delete()`

Deletes the specified SSL certificate.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.appsId` | `string` | Yes | Part of `name`. Required. Name of the resource to delete. Example: apps/myapp/authorizedCertificates/12345. |
| `params.authorizedCertificatesId` | `string` | Yes | Part of `name`. See documentation of `appsId`. |

### `apps.domainMappings`

#### `apps.domainMappings.list()`

Lists the domain mappings on an application.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.appsId` | `string` | Yes | Part of `parent`. Required. Name of the parent Application resource. Example: apps/myapp. |
| `params.pageSize` | `integer` | No | Maximum results to return per page. |
| `params.pageToken` | `string` | No | Continuation token for fetching the next page of results. |

#### `apps.domainMappings.get()`

Gets the specified domain mapping.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.appsId` | `string` | Yes | Part of `name`. Required. Name of the resource requested. Example: apps/myapp/domainMappings/example.com. |
| `params.domainMappingsId` | `string` | Yes | Part of `name`. See documentation of `appsId`. |

#### `apps.domainMappings.create()`

Maps a domain to an application. A user must be authorized to administer a domain in order to map it to an application. For a list of available authorized domains, see AuthorizedDomains.ListAuthorizedDomains.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.appsId` | `string` | Yes | Part of `parent`. Required. Name of the parent Application resource. Example: apps/myapp. |
| `params.overrideStrategy` | `string` | No | Whether the domain creation should override any existing mappings for this domain. By default, overrides are rejected. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `apps.domainMappings.patch()`

Updates the specified domain mapping. To map an SSL certificate to a domain mapping, update certificate_id to point to an AuthorizedCertificate resource. A user must be authorized to administer the associated domain in order to update a DomainMapping resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.appsId` | `string` | Yes | Part of `name`. Required. Name of the resource to update. Example: apps/myapp/domainMappings/example.com. |
| `params.domainMappingsId` | `string` | Yes | Part of `name`. See documentation of `appsId`. |
| `params.updateMask` | `string` | No | Required. Standard field mask for the set of fields to be updated. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `apps.domainMappings.delete()`

Deletes the specified domain mapping. A user must be authorized to administer the associated domain in order to delete a DomainMapping resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.appsId` | `string` | Yes | Part of `name`. Required. Name of the resource to delete. Example: apps/myapp/domainMappings/example.com. |
| `params.domainMappingsId` | `string` | Yes | Part of `name`. See documentation of `appsId`. |

### `apps.locations`

#### `apps.locations.list()`

Lists information about the supported locations for this service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.appsId` | `string` | Yes | Part of `name`. The resource that owns the locations collection, if applicable. |
| `params.filter` | `string` | No | A filter to narrow down results to a preferred subset. The filtering language accepts strings like "displayName=tokyo", and is documented in more detail in AIP-160 (https://google.aip.dev/160). |
| `params.pageSize` | `integer` | No | The maximum number of results to return. If not set, the service selects a default. |
| `params.pageToken` | `string` | No | A page token received from the next_page_token field in the response. Send that page token to receive the subsequent page. |
| `params.extraLocationTypes` | `string` | No | Optional. Do not use this field. It is unsupported and is ignored unless explicitly documented otherwise. This is primarily for internal usage. |

#### `apps.locations.get()`

Gets information about a location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.appsId` | `string` | Yes | Part of `name`. Resource name for the location. |
| `params.locationsId` | `string` | Yes | Part of `name`. See documentation of `appsId`. |