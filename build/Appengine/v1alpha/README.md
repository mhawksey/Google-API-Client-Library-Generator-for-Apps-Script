# App Engine Admin API - Apps Script Client Library

Auto-generated client library for using the **App Engine Admin API (version: v1alpha)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 01 Feb 2026 00:23:14 GMT
- **Last Modified:** Sun, 01 Feb 2026 00:23:14 GMT
- **Created:** Sun, 20 Jul 2025 16:12:50 GMT



---

## API Reference

### `projects`

### `projects.locations`

#### `projects.locations.get()`

Gets information about a location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectsId` | `string` | Yes | Part of `name`. Resource name for the location. |
| `params.locationsId` | `string` | Yes | Part of `name`. See documentation of `projectsId`. |

#### `projects.locations.list()`

Lists information about the supported locations for this service. This method can be called in two ways: List all public locations: Use the path GET /v1/locations. List project-visible locations: Use the path GET /v1/projects/{project_id}/locations. This may include public locations as well as private or other locations specifically visible to the project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.filter` | `string` | No | A filter to narrow down results to a preferred subset. The filtering language accepts strings like "displayName=tokyo", and is documented in more detail in AIP-160 (https://google.aip.dev/160). |
| `params.pageToken` | `string` | No | A page token received from the next_page_token field in the response. Send that page token to receive the subsequent page. |
| `params.pageSize` | `integer` | No | The maximum number of results to return. If not set, the service selects a default. |
| `params.extraLocationTypes` | `string` | No | Optional. Do not use this field. It is unsupported and is ignored unless explicitly documented otherwise. This is primarily for internal usage. |
| `params.projectsId` | `string` | Yes | Part of `name`. The resource that owns the locations collection, if applicable. |

### `projects.locations.applications`

### `projects.locations.applications.authorizedDomains`

#### `projects.locations.applications.authorizedDomains.list()`

Lists all domains the user is authorized to administer.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No | Maximum results to return per page. |
| `params.pageToken` | `string` | No | Continuation token for fetching the next page of results. |
| `params.applicationsId` | `string` | Yes | Part of `parent`. See documentation of `projectsId`. |
| `params.locationsId` | `string` | Yes | Part of `parent`. See documentation of `projectsId`. |
| `params.projectsId` | `string` | Yes | Part of `parent`. Required. Name of the parent Application resource. Example: apps/myapp. |

### `projects.locations.applications.domainMappings`

#### `projects.locations.applications.domainMappings.get()`

Gets the specified domain mapping.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.locationsId` | `string` | Yes | Part of `name`. See documentation of `projectsId`. |
| `params.domainMappingsId` | `string` | Yes | Part of `name`. See documentation of `projectsId`. |
| `params.projectsId` | `string` | Yes | Part of `name`. Required. Name of the resource requested. Example: apps/myapp/domainMappings/example.com. |
| `params.applicationsId` | `string` | Yes | Part of `name`. See documentation of `projectsId`. |

#### `projects.locations.applications.domainMappings.list()`

Lists the domain mappings on an application.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No | Maximum results to return per page. |
| `params.locationsId` | `string` | Yes | Part of `parent`. See documentation of `projectsId`. |
| `params.pageToken` | `string` | No | Continuation token for fetching the next page of results. |
| `params.applicationsId` | `string` | Yes | Part of `parent`. See documentation of `projectsId`. |
| `params.projectsId` | `string` | Yes | Part of `parent`. Required. Name of the parent Application resource. Example: apps/myapp. |

#### `projects.locations.applications.domainMappings.delete()`

Deletes the specified domain mapping. A user must be authorized to administer the associated domain in order to delete a DomainMapping resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.applicationsId` | `string` | Yes | Part of `name`. See documentation of `projectsId`. |
| `params.locationsId` | `string` | Yes | Part of `name`. See documentation of `projectsId`. |
| `params.projectsId` | `string` | Yes | Part of `name`. Required. Name of the resource to delete. Example: apps/myapp/domainMappings/example.com. |
| `params.domainMappingsId` | `string` | Yes | Part of `name`. See documentation of `projectsId`. |

#### `projects.locations.applications.domainMappings.patch()`

Updates the specified domain mapping. To map an SSL certificate to a domain mapping, update certificate_id to point to an AuthorizedCertificate resource. A user must be authorized to administer the associated domain in order to update a DomainMapping resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.noManagedCertificate` | `boolean` | No | Whether a managed certificate should be provided by App Engine. If true, a certificate ID must be manually set in the DomainMapping resource to configure SSL for this domain. If false, a managed certificate will be provisioned and a certificate ID will be automatically populated. Only applicable if ssl_settings.certificate_id is specified in the update mask. |
| `params.locationsId` | `string` | Yes | Part of `name`. See documentation of `projectsId`. |
| `params.projectsId` | `string` | Yes | Part of `name`. Required. Name of the resource to update. Example: apps/myapp/domainMappings/example.com. |
| `params.domainMappingsId` | `string` | Yes | Part of `name`. See documentation of `projectsId`. |
| `params.applicationsId` | `string` | Yes | Part of `name`. See documentation of `projectsId`. |
| `params.updateMask` | `string` | No | Required. Standard field mask for the set of fields to be updated. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.applications.domainMappings.create()`

Maps a domain to an application. A user must be authorized to administer a domain in order to map it to an application. For a list of available authorized domains, see AuthorizedDomains.ListAuthorizedDomains.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.noManagedCertificate` | `boolean` | No | Whether a managed certificate should be provided by App Engine. If true, a certificate ID must be manaually set in the DomainMapping resource to configure SSL for this domain. If false, a managed certificate will be provisioned and a certificate ID will be automatically populated. |
| `params.overrideStrategy` | `string` | No | Whether the domain creation should override any existing mappings for this domain. By default, overrides are rejected. |
| `params.applicationsId` | `string` | Yes | Part of `parent`. See documentation of `projectsId`. |
| `params.locationsId` | `string` | Yes | Part of `parent`. See documentation of `projectsId`. |
| `params.projectsId` | `string` | Yes | Part of `parent`. Required. Name of the parent Application resource. Example: apps/myapp. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.applications.authorizedCertificates`

#### `projects.locations.applications.authorizedCertificates.get()`

Gets the specified SSL certificate.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.locationsId` | `string` | Yes | Part of `name`. See documentation of `projectsId`. |
| `params.projectsId` | `string` | Yes | Part of `name`. Required. Name of the resource requested. Example: apps/myapp/authorizedCertificates/12345. |
| `params.applicationsId` | `string` | Yes | Part of `name`. See documentation of `projectsId`. |
| `params.authorizedCertificatesId` | `string` | Yes | Part of `name`. See documentation of `projectsId`. |
| `params.view` | `string` | No | Controls the set of fields returned in the GET response. |

#### `projects.locations.applications.authorizedCertificates.patch()`

Updates the specified SSL certificate. To renew a certificate and maintain its existing domain mappings, update certificate_data with a new certificate. The new certificate must be applicable to the same domains as the original certificate. The certificate display_name may also be updated.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.applicationsId` | `string` | Yes | Part of `name`. See documentation of `projectsId`. |
| `params.updateMask` | `string` | No | Standard field mask for the set of fields to be updated. Updates are only supported on the certificate_raw_data and display_name fields. |
| `params.locationsId` | `string` | Yes | Part of `name`. See documentation of `projectsId`. |
| `params.projectsId` | `string` | Yes | Part of `name`. Required. Name of the resource to update. Example: apps/myapp/authorizedCertificates/12345. |
| `params.authorizedCertificatesId` | `string` | Yes | Part of `name`. See documentation of `projectsId`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.applications.authorizedCertificates.list()`

Lists all SSL certificates the user is authorized to administer.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No | Continuation token for fetching the next page of results. |
| `params.projectsId` | `string` | Yes | Part of `parent`. Required. Name of the parent Application resource. Example: apps/myapp. |
| `params.pageSize` | `integer` | No | Maximum results to return per page. |
| `params.applicationsId` | `string` | Yes | Part of `parent`. See documentation of `projectsId`. |
| `params.locationsId` | `string` | Yes | Part of `parent`. See documentation of `projectsId`. |
| `params.view` | `string` | No | Controls the set of fields returned in the LIST response. |

#### `projects.locations.applications.authorizedCertificates.delete()`

Deletes the specified SSL certificate.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectsId` | `string` | Yes | Part of `name`. Required. Name of the resource to delete. Example: apps/myapp/authorizedCertificates/12345. |
| `params.authorizedCertificatesId` | `string` | Yes | Part of `name`. See documentation of `projectsId`. |
| `params.applicationsId` | `string` | Yes | Part of `name`. See documentation of `projectsId`. |
| `params.locationsId` | `string` | Yes | Part of `name`. See documentation of `projectsId`. |

#### `projects.locations.applications.authorizedCertificates.create()`

Uploads the specified SSL certificate.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectsId` | `string` | Yes | Part of `parent`. Required. Name of the parent Application resource. Example: apps/myapp. |
| `params.applicationsId` | `string` | Yes | Part of `parent`. See documentation of `projectsId`. |
| `params.locationsId` | `string` | Yes | Part of `parent`. See documentation of `projectsId`. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.operations`

#### `projects.locations.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.returnPartialSuccess` | `boolean` | No | When set to true, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field.This can only be true when reading across collections. For example, when parent is set to "projects/example/locations/-".This field is not supported by default and will result in an UNIMPLEMENTED error if set unless explicitly documented otherwise in service or product specific documentation. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.projectsId` | `string` | Yes | Part of `name`. The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.locationsId` | `string` | Yes | Part of `name`. See documentation of `projectsId`. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `projects.locations.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectsId` | `string` | Yes | Part of `name`. The name of the operation resource. |
| `params.operationsId` | `string` | Yes | Part of `name`. See documentation of `projectsId`. |
| `params.locationsId` | `string` | Yes | Part of `name`. See documentation of `projectsId`. |

### `apps`

### `apps.locations`

#### `apps.locations.list()`

Lists information about the supported locations for this service. This method can be called in two ways: List all public locations: Use the path GET /v1/locations. List project-visible locations: Use the path GET /v1/projects/{project_id}/locations. This may include public locations as well as private or other locations specifically visible to the project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.extraLocationTypes` | `string` | No | Optional. Do not use this field. It is unsupported and is ignored unless explicitly documented otherwise. This is primarily for internal usage. |
| `params.filter` | `string` | No | A filter to narrow down results to a preferred subset. The filtering language accepts strings like "displayName=tokyo", and is documented in more detail in AIP-160 (https://google.aip.dev/160). |
| `params.appsId` | `string` | Yes | Part of `name`. The resource that owns the locations collection, if applicable. |
| `params.pageSize` | `integer` | No | The maximum number of results to return. If not set, the service selects a default. |
| `params.pageToken` | `string` | No | A page token received from the next_page_token field in the response. Send that page token to receive the subsequent page. |

#### `apps.locations.get()`

Gets information about a location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.locationsId` | `string` | Yes | Part of `name`. See documentation of `appsId`. |
| `params.appsId` | `string` | Yes | Part of `name`. Resource name for the location. |

### `apps.authorizedDomains`

#### `apps.authorizedDomains.list()`

Lists all domains the user is authorized to administer.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No | Maximum results to return per page. |
| `params.pageToken` | `string` | No | Continuation token for fetching the next page of results. |
| `params.appsId` | `string` | Yes | Part of `parent`. Required. Name of the parent Application resource. Example: apps/myapp. |

### `apps.authorizedCertificates`

#### `apps.authorizedCertificates.create()`

Uploads the specified SSL certificate.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.appsId` | `string` | Yes | Part of `parent`. Required. Name of the parent Application resource. Example: apps/myapp. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `apps.authorizedCertificates.get()`

Gets the specified SSL certificate.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.authorizedCertificatesId` | `string` | Yes | Part of `name`. See documentation of `appsId`. |
| `params.appsId` | `string` | Yes | Part of `name`. Required. Name of the resource requested. Example: apps/myapp/authorizedCertificates/12345. |
| `params.view` | `string` | No | Controls the set of fields returned in the GET response. |

#### `apps.authorizedCertificates.delete()`

Deletes the specified SSL certificate.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.authorizedCertificatesId` | `string` | Yes | Part of `name`. See documentation of `appsId`. |
| `params.appsId` | `string` | Yes | Part of `name`. Required. Name of the resource to delete. Example: apps/myapp/authorizedCertificates/12345. |

#### `apps.authorizedCertificates.list()`

Lists all SSL certificates the user is authorized to administer.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No | Continuation token for fetching the next page of results. |
| `params.appsId` | `string` | Yes | Part of `parent`. Required. Name of the parent Application resource. Example: apps/myapp. |
| `params.view` | `string` | No | Controls the set of fields returned in the LIST response. |
| `params.pageSize` | `integer` | No | Maximum results to return per page. |

#### `apps.authorizedCertificates.patch()`

Updates the specified SSL certificate. To renew a certificate and maintain its existing domain mappings, update certificate_data with a new certificate. The new certificate must be applicable to the same domains as the original certificate. The certificate display_name may also be updated.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.appsId` | `string` | Yes | Part of `name`. Required. Name of the resource to update. Example: apps/myapp/authorizedCertificates/12345. |
| `params.updateMask` | `string` | No | Standard field mask for the set of fields to be updated. Updates are only supported on the certificate_raw_data and display_name fields. |
| `params.authorizedCertificatesId` | `string` | Yes | Part of `name`. See documentation of `appsId`. |
| `params.requestBody` | `object` | Yes | The request body. |

### `apps.domainMappings`

#### `apps.domainMappings.create()`

Maps a domain to an application. A user must be authorized to administer a domain in order to map it to an application. For a list of available authorized domains, see AuthorizedDomains.ListAuthorizedDomains.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.noManagedCertificate` | `boolean` | No | Whether a managed certificate should be provided by App Engine. If true, a certificate ID must be manaually set in the DomainMapping resource to configure SSL for this domain. If false, a managed certificate will be provisioned and a certificate ID will be automatically populated. |
| `params.overrideStrategy` | `string` | No | Whether the domain creation should override any existing mappings for this domain. By default, overrides are rejected. |
| `params.appsId` | `string` | Yes | Part of `parent`. Required. Name of the parent Application resource. Example: apps/myapp. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `apps.domainMappings.get()`

Gets the specified domain mapping.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.appsId` | `string` | Yes | Part of `name`. Required. Name of the resource requested. Example: apps/myapp/domainMappings/example.com. |
| `params.domainMappingsId` | `string` | Yes | Part of `name`. See documentation of `appsId`. |

#### `apps.domainMappings.list()`

Lists the domain mappings on an application.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No | Maximum results to return per page. |
| `params.pageToken` | `string` | No | Continuation token for fetching the next page of results. |
| `params.appsId` | `string` | Yes | Part of `parent`. Required. Name of the parent Application resource. Example: apps/myapp. |

#### `apps.domainMappings.delete()`

Deletes the specified domain mapping. A user must be authorized to administer the associated domain in order to delete a DomainMapping resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.domainMappingsId` | `string` | Yes | Part of `name`. See documentation of `appsId`. |
| `params.appsId` | `string` | Yes | Part of `name`. Required. Name of the resource to delete. Example: apps/myapp/domainMappings/example.com. |

#### `apps.domainMappings.patch()`

Updates the specified domain mapping. To map an SSL certificate to a domain mapping, update certificate_id to point to an AuthorizedCertificate resource. A user must be authorized to administer the associated domain in order to update a DomainMapping resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.appsId` | `string` | Yes | Part of `name`. Required. Name of the resource to update. Example: apps/myapp/domainMappings/example.com. |
| `params.noManagedCertificate` | `boolean` | No | Whether a managed certificate should be provided by App Engine. If true, a certificate ID must be manually set in the DomainMapping resource to configure SSL for this domain. If false, a managed certificate will be provisioned and a certificate ID will be automatically populated. Only applicable if ssl_settings.certificate_id is specified in the update mask. |
| `params.updateMask` | `string` | No | Required. Standard field mask for the set of fields to be updated. |
| `params.domainMappingsId` | `string` | Yes | Part of `name`. See documentation of `appsId`. |
| `params.requestBody` | `object` | Yes | The request body. |

### `apps.operations`

#### `apps.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No | The standard list page token. |
| `params.returnPartialSuccess` | `boolean` | No | When set to true, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field.This can only be true when reading across collections. For example, when parent is set to "projects/example/locations/-".This field is not supported by default and will result in an UNIMPLEMENTED error if set unless explicitly documented otherwise in service or product specific documentation. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.appsId` | `string` | Yes | Part of `name`. The name of the operation's parent resource. |

#### `apps.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.appsId` | `string` | Yes | Part of `name`. The name of the operation resource. |
| `params.operationsId` | `string` | Yes | Part of `name`. See documentation of `appsId`. |