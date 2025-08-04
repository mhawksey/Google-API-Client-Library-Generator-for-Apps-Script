# Application Integration API - Apps Script Client Library

Auto-generated client library for using the **Application Integration API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Mon, 04 Aug 2025 20:24:36 GMT
- **Last Modified:** Mon, 04 Aug 2025 20:24:36 GMT
- **Created:** Sun, 20 Jul 2025 16:35:31 GMT



---

## API Reference

### `projects`

#### `projects.getClientmetadata()`

Gets the metadata info for the requested client

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Required: The ID of the GCP Project to be provisioned. |

### `projects.locations`

#### `projects.locations.getClients()`

Gets the client configuration for the given project and location resource name

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Required: The ID of the GCP Project to be provisioned. |

#### `projects.locations.generateOpenApiSpec()`

Generate OpenAPI spec for the requested integrations and api triggers

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Project and location from which the integrations should be fetched. Format: projects/{project}/location/{location} |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.appsScriptProjects`

#### `projects.locations.appsScriptProjects.link()`

Links a existing Apps Script project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project that the executed integration belongs to. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.appsScriptProjects.create()`

Creates an Apps Script project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project that the executed integration belongs to. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.clients`

#### `projects.locations.clients.provision()`

Perform the provisioning steps to enable a user GCP project to use IP. If GCP project already registered on IP end via Apigee Integration, provisioning will fail.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Required: The ID of the GCP Project to be provisioned. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.clients.provisionClientPostProcessor()`

Perform post provisioning steps after client is provisioned.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Required: The ID of the GCP Project to be provisioned. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.clients.deprovision()`

Perform the deprovisioning steps to disable a user GCP project to use IP and purge all related data in a wipeout-compliant way.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Required: The ID of the GCP Project to be deprovisioned. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.clients.changeConfig()`

Updates the client customer configuration for the given project and location resource name

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Required: Format - projects/{project}/locations/{location} |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.clients.switch()`

Update client from GMEK to CMEK

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Required: The ID of the GCP Project to be provisioned. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.clients.replace()`

Update run-as service account for provisioned client

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Required: The ID of the GCP Project to be provisioned. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.clients.switchVariableMasking()`

Update variable masking for provisioned client

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Required: The ID of the GCP Project to be provisioned. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.clients.toggleHttp()`

Enable/Disable http call for provisioned client

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Required: The ID of the GCP Project to be provisioned. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.products`

### `projects.locations.products.cloudFunctions`

#### `projects.locations.products.cloudFunctions.create()`

Creates a cloud function project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project that the executed integration belongs to. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.products.certificates`

#### `projects.locations.products.certificates.list()`

List all the certificates that match the filter. Restrict to certificate of current client only.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The client, which owns this collection of Certificates. |
| `params.pageSize` | `integer` | No | The size of entries in the response. If unspecified, defaults to 100. |
| `params.pageToken` | `string` | No | The token returned in the previous response. |
| `params.filter` | `string` | No | Filtering as supported in https://developers.google.com/authorized-buyers/apis/guides/list-filters. |
| `params.readMask` | `string` | No | The mask which specifies fields that need to be returned in the Certificate's response. |

#### `projects.locations.products.certificates.get()`

Get a certificates in the specified project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The certificate to retrieve. Format: projects/{project}/locations/{location}/certificates/{certificate} |

#### `projects.locations.products.certificates.create()`

Creates a new certificate. The certificate will be registered to the trawler service and will be encrypted using cloud KMS and stored in Spanner Returns the certificate.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. "projects/{project}/locations/{location}" format. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.products.certificates.patch()`

Updates the certificate by id. If new certificate file is updated, it will register with the trawler service, re-encrypt with cloud KMS and update the Spanner record. Other fields will directly update the Spanner record. Returns the Certificate.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. Auto generated primary key |
| `params.updateMask` | `string` | No | Field mask specifying the fields in the above Certificate that have been modified and need to be updated. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.products.certificates.delete()`

Delete a certificate

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name that is associated with the Certificate. |

### `projects.locations.products.authConfigs`

#### `projects.locations.products.authConfigs.create()`

Creates an auth config record. Fetch corresponding credentials for specific auth types, e.g. access token for OAuth 2.0, JWT token for JWT. Encrypt the auth config with Cloud KMS and store the encrypted credentials in Spanner. Returns the encrypted auth config.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. "projects/{project}/locations/{location}" format. |
| `params.clientCertificate.sslCertificate` | `string` | No | The ssl certificate encoded in PEM format. This string must include the begin header and end footer lines. For example, -----BEGIN CERTIFICATE----- MIICTTCCAbagAwIBAgIJAPT0tSKNxan/MA0GCSqGSIb3DQEBCwUAMCoxFzAVBgNV BAoTDkdvb2dsZSBURVNUSU5HMQ8wDQYDVQQDEwZ0ZXN0Q0EwHhcNMTUwMTAxMDAw MDAwWhcNMjUwMTAxMDAwMDAwWjAuMRcwFQYDVQQKEw5Hb29nbGUgVEVTVElORzET MBEGA1UEAwwKam9lQGJhbmFuYTCBnzANBgkqhkiG9w0BAQEFAAOBjQAwgYkCgYEA vDYFgMgxi5W488d9J7UpCInl0NXmZQpJDEHE4hvkaRlH7pnC71H0DLt0/3zATRP1 JzY2+eqBmbGl4/sgZKYv8UrLnNyQNUTsNx1iZAfPUflf5FwgVsai8BM0pUciq1NB xD429VFcrGZNucvFLh72RuRFIKH8WUpiK/iZNFkWhZ0CAwEAAaN3MHUwDgYDVR0P AQH/BAQDAgWgMB0GA1UdJQQWMBQGCCsGAQUFBwMBBggrBgEFBQcDAjAMBgNVHRMB Af8EAjAAMBkGA1UdDgQSBBCVgnFBCWgL/iwCqnGrhTPQMBsGA1UdIwQUMBKAEKey Um2o4k2WiEVA0ldQvNYwDQYJKoZIhvcNAQELBQADgYEAYK986R4E3L1v+Q6esBtW JrUwA9UmJRSQr0N5w3o9XzarU37/bkjOP0Fw0k/A6Vv1n3vlciYfBFaBIam1qRHr 5dMsYf4CZS6w50r7hyzqyrwDoyNxkLnd2PdcHT/sym1QmflsjEs7pejtnohO6N2H wQW6M0H7Zt8claGRla4fKkg= -----END CERTIFICATE----- |
| `params.clientCertificate.encryptedPrivateKey` | `string` | No | The ssl certificate encoded in PEM format. This string must include the begin header and end footer lines. For example, -----BEGIN CERTIFICATE----- MIICTTCCAbagAwIBAgIJAPT0tSKNxan/MA0GCSqGSIb3DQEBCwUAMCoxFzAVBgNV BAoTDkdvb2dsZSBURVNUSU5HMQ8wDQYDVQQDEwZ0ZXN0Q0EwHhcNMTUwMTAxMDAw MDAwWhcNMjUwMTAxMDAwMDAwWjAuMRcwFQYDVQQKEw5Hb29nbGUgVEVTVElORzET MBEGA1UEAwwKam9lQGJhbmFuYTCBnzANBgkqhkiG9w0BAQEFAAOBjQAwgYkCgYEA vDYFgMgxi5W488d9J7UpCInl0NXmZQpJDEHE4hvkaRlH7pnC71H0DLt0/3zATRP1 JzY2+eqBmbGl4/sgZKYv8UrLnNyQNUTsNx1iZAfPUflf5FwgVsai8BM0pUciq1NB xD429VFcrGZNucvFLh72RuRFIKH8WUpiK/iZNFkWhZ0CAwEAAaN3MHUwDgYDVR0P AQH/BAQDAgWgMB0GA1UdJQQWMBQGCCsGAQUFBwMBBggrBgEFBQcDAjAMBgNVHRMB Af8EAjAAMBkGA1UdDgQSBBCVgnFBCWgL/iwCqnGrhTPQMBsGA1UdIwQUMBKAEKey Um2o4k2WiEVA0ldQvNYwDQYJKoZIhvcNAQELBQADgYEAYK986R4E3L1v+Q6esBtW JrUwA9UmJRSQr0N5w3o9XzarU37/bkjOP0Fw0k/A6Vv1n3vlciYfBFaBIam1qRHr 5dMsYf4CZS6w50r7hyzqyrwDoyNxkLnd2PdcHT/sym1QmflsjEs7pejtnohO6N2H wQW6M0H7Zt8claGRla4fKkg= -----END CERTIFICATE----- |
| `params.clientCertificate.passphrase` | `string` | No | 'passphrase' should be left unset if private key is not encrypted. Note that 'passphrase' is not the password for web server, but an extra layer of security to protected private key. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.products.authConfigs.patch()`

Updates an auth config. If credential is updated, fetch the encrypted auth config from Spanner, decrypt with Cloud KMS key, update the credential fields, re-encrypt with Cloud KMS key and update the Spanner record. For other fields, directly update the Spanner record. Returns the encrypted auth config.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Resource name of the auth config. For more information, see Manage authentication profiles. projects/{project}/locations/{location}/authConfigs/{authConfig}. |
| `params.updateMask` | `string` | No | Field mask specifying the fields in the above AuthConfig that have been modified and need to be updated. |
| `params.clientCertificate.sslCertificate` | `string` | No | The ssl certificate encoded in PEM format. This string must include the begin header and end footer lines. For example, -----BEGIN CERTIFICATE----- MIICTTCCAbagAwIBAgIJAPT0tSKNxan/MA0GCSqGSIb3DQEBCwUAMCoxFzAVBgNV BAoTDkdvb2dsZSBURVNUSU5HMQ8wDQYDVQQDEwZ0ZXN0Q0EwHhcNMTUwMTAxMDAw MDAwWhcNMjUwMTAxMDAwMDAwWjAuMRcwFQYDVQQKEw5Hb29nbGUgVEVTVElORzET MBEGA1UEAwwKam9lQGJhbmFuYTCBnzANBgkqhkiG9w0BAQEFAAOBjQAwgYkCgYEA vDYFgMgxi5W488d9J7UpCInl0NXmZQpJDEHE4hvkaRlH7pnC71H0DLt0/3zATRP1 JzY2+eqBmbGl4/sgZKYv8UrLnNyQNUTsNx1iZAfPUflf5FwgVsai8BM0pUciq1NB xD429VFcrGZNucvFLh72RuRFIKH8WUpiK/iZNFkWhZ0CAwEAAaN3MHUwDgYDVR0P AQH/BAQDAgWgMB0GA1UdJQQWMBQGCCsGAQUFBwMBBggrBgEFBQcDAjAMBgNVHRMB Af8EAjAAMBkGA1UdDgQSBBCVgnFBCWgL/iwCqnGrhTPQMBsGA1UdIwQUMBKAEKey Um2o4k2WiEVA0ldQvNYwDQYJKoZIhvcNAQELBQADgYEAYK986R4E3L1v+Q6esBtW JrUwA9UmJRSQr0N5w3o9XzarU37/bkjOP0Fw0k/A6Vv1n3vlciYfBFaBIam1qRHr 5dMsYf4CZS6w50r7hyzqyrwDoyNxkLnd2PdcHT/sym1QmflsjEs7pejtnohO6N2H wQW6M0H7Zt8claGRla4fKkg= -----END CERTIFICATE----- |
| `params.clientCertificate.encryptedPrivateKey` | `string` | No | The ssl certificate encoded in PEM format. This string must include the begin header and end footer lines. For example, -----BEGIN CERTIFICATE----- MIICTTCCAbagAwIBAgIJAPT0tSKNxan/MA0GCSqGSIb3DQEBCwUAMCoxFzAVBgNV BAoTDkdvb2dsZSBURVNUSU5HMQ8wDQYDVQQDEwZ0ZXN0Q0EwHhcNMTUwMTAxMDAw MDAwWhcNMjUwMTAxMDAwMDAwWjAuMRcwFQYDVQQKEw5Hb29nbGUgVEVTVElORzET MBEGA1UEAwwKam9lQGJhbmFuYTCBnzANBgkqhkiG9w0BAQEFAAOBjQAwgYkCgYEA vDYFgMgxi5W488d9J7UpCInl0NXmZQpJDEHE4hvkaRlH7pnC71H0DLt0/3zATRP1 JzY2+eqBmbGl4/sgZKYv8UrLnNyQNUTsNx1iZAfPUflf5FwgVsai8BM0pUciq1NB xD429VFcrGZNucvFLh72RuRFIKH8WUpiK/iZNFkWhZ0CAwEAAaN3MHUwDgYDVR0P AQH/BAQDAgWgMB0GA1UdJQQWMBQGCCsGAQUFBwMBBggrBgEFBQcDAjAMBgNVHRMB Af8EAjAAMBkGA1UdDgQSBBCVgnFBCWgL/iwCqnGrhTPQMBsGA1UdIwQUMBKAEKey Um2o4k2WiEVA0ldQvNYwDQYJKoZIhvcNAQELBQADgYEAYK986R4E3L1v+Q6esBtW JrUwA9UmJRSQr0N5w3o9XzarU37/bkjOP0Fw0k/A6Vv1n3vlciYfBFaBIam1qRHr 5dMsYf4CZS6w50r7hyzqyrwDoyNxkLnd2PdcHT/sym1QmflsjEs7pejtnohO6N2H wQW6M0H7Zt8claGRla4fKkg= -----END CERTIFICATE----- |
| `params.clientCertificate.passphrase` | `string` | No | 'passphrase' should be left unset if private key is not encrypted. Note that 'passphrase' is not the password for web server, but an extra layer of security to protected private key. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.products.authConfigs.delete()`

Deletes an auth config.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name that is associated with the AuthConfig. |

#### `projects.locations.products.authConfigs.get()`

Gets a complete auth config. If the auth config doesn't exist, Code.NOT_FOUND exception will be thrown. Returns the decrypted auth config.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name that is associated with the AuthConfig. |

#### `projects.locations.products.authConfigs.list()`

Lists all auth configs that match the filter. Restrict to auth configs belong to the current client only.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The client, which owns this collection of AuthConfigs. |
| `params.pageSize` | `integer` | No | The size of entries in the response. If unspecified, defaults to 100. |
| `params.pageToken` | `string` | No | The token returned in the previous response. |
| `params.filter` | `string` | No | Filtering as supported in https://developers.google.com/authorized-buyers/apis/guides/list-filters. |
| `params.readMask` | `string` | No | The mask which specifies fields that need to be returned in the AuthConfig's response. |

### `projects.locations.products.integrations`

#### `projects.locations.products.integrations.execute()`

Executes integrations synchronously by passing the trigger id in the request body. The request is not returned until the requested executions are either fulfilled or experienced an error. If the integration name is not specified (passing `-`), all of the associated integration under the given trigger_id will be executed. Otherwise only the specified integration for the given `trigger_id` is executed. This is helpful for execution the integration from UI.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The integration resource name. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.products.integrations.schedule()`

Schedules an integration for execution by passing the trigger id and the scheduled time in the request body.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The integration resource name. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.products.integrations.test()`

Execute the integration in draft state

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. Auto-generated primary key. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.products.integrations.list()`

Returns the list of all integrations in the specified project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Project and location from which the integrations should be listed. Format: projects/{project} |
| `params.pageSize` | `integer` | No | The page size for the resquest. |
| `params.pageToken` | `string` | No | The page token for the resquest. |
| `params.orderBy` | `string` | No | The results would be returned in order you specified here. Supported sort keys are: Descending sort order by "last_modified_time", "created_time", "snapshot_number". Ascending sort order by the integration name. |
| `params.filter` | `string` | No | Filter on fields of IntegrationVersion. Fields can be compared with literal values by use of ":" (containment), "=" (equality), ">" (greater), "<" (less than), >=" (greater than or equal to), "<=" (less than or equal to), and "!=" (inequality) operators. Negation, conjunction, and disjunction are written using NOT, AND, and OR keywords. For example, organization_id=\"1\" AND state=ACTIVE AND description:"test". Filtering cannot be performed on repeated fields like `task_config`. |

### `projects.locations.products.integrations.versions`

#### `projects.locations.products.integrations.versions.list()`

Returns the list of all integration versions in the specified project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource where this version will be created. Format: projects/{project}/locations/{location}/integrations/{integration} Specifically, when parent equals: 1. projects//locations//integrations/, Meaning: "List versions (with filter) for a particular integration". 2. projects//locations//integrations/- Meaning: "List versions (with filter) for a client within a particular region". |
| `params.pageSize` | `integer` | No | The maximum number of versions to return. The service may return fewer than this value. If unspecified, at most 50 versions will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListIntegrationVersions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListIntegrationVersions` must match the call that provided the page token. |
| `params.filter` | `string` | No | Filter on fields of IntegrationVersion. Fields can be compared with literal values by use of ":" (containment), "=" (equality), ">" (greater), "<" (less than), >=" (greater than or equal to), "<=" (less than or equal to), and "!=" (inequality) operators. Negation, conjunction, and disjunction are written using NOT, AND, and OR keywords. For example, organization_id=\"1\" AND state=ACTIVE AND description:"test". Filtering cannot be performed on repeated fields like `task_config`. |
| `params.orderBy` | `string` | No | The results would be returned in order you specified here. Currently supported sort keys are: Descending sort order for "last\_modified\_time", "created\_time", and "snapshot\_number". Ascending sort order for `name`. |
| `params.fieldMask` | `string` | No | The field mask which specifies the particular data to be returned. |

#### `projects.locations.products.integrations.versions.create()`

Create a integration with a draft version in the specified project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource where this version will be created. Format: projects/{project}/locations/{location}/integrations/{integration} |
| `params.newIntegration` | `boolean` | No | Set this flag to true, if draft version is to be created for a brand new integration. False, if the request is for an existing integration. For backward compatibility reasons, even if this flag is set to `false` and no existing integration is found, a new draft integration will still be created. |
| `params.createSampleIntegrations` | `boolean` | No | Optional. Optional. Indicates if sample workflow should be created. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.products.integrations.versions.patch()`

Update a integration with a draft version in the specified project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. Auto-generated primary key. |
| `params.updateMask` | `string` | No | Field mask specifying the fields in the above integration that have been modified and need to be updated. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.products.integrations.versions.get()`

Get a integration in the specified project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The version to retrieve. Format: projects/{project}/locations/{location}/integrations/{integration}/versions/{version} |

#### `projects.locations.products.integrations.versions.publish()`

This RPC throws an exception if the integration is in ARCHIVED or ACTIVE state. This RPC throws an exception if the version being published is DRAFT, and if the `locked_by` user is not the same as the user performing the Publish. Audit fields updated include last_published_timestamp, last_published_by, last_modified_timestamp, last_modified_by. Any existing lock is on this integration is released.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The version to publish. Format: projects/{project}/locations/{location}/integrations/{integration}/versions/{version} |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.products.integrations.versions.delete()`

Soft-deletes the integration. Changes the status of the integration to ARCHIVED. If the integration being ARCHIVED is tagged as "HEAD", the tag is removed from this snapshot and set to the previous non-ARCHIVED snapshot. The PUBLISH_REQUESTED, DUE_FOR_DELETION tags are removed too. This RPC throws an exception if the version being deleted is DRAFT, and if the `locked_by` user is not the same as the user performing the Delete. Audit fields updated include last_modified_timestamp, last_modified_by. Any existing lock is released when Deleting a integration. Currently, there is no undelete mechanism.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The version to delete. Format: projects/{project}/locations/{location}/integrations/{integration}/versions/{version} |

#### `projects.locations.products.integrations.versions.upload()`

Uploads an integration. The content can be a previously downloaded integration. Performs the same function as CreateDraftIntegrationVersion, but accepts input in a string format, which holds the complete representation of the IntegrationVersion content.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The version to upload. Format: projects/{project}/locations/{location}/integrations/{integration} |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.products.integrations.versions.download()`

Downloads an integration. Retrieves the `IntegrationVersion` for a given `integration_id` and returns the response as a string.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The version to download. Format: projects/{project}/locations/{location}/integrations/{integration}/versions/{version} |
| `params.fileFormat` | `string` | No | File format for download request. |
| `params.files` | `string` | No | Optional. Integration related file to download like Integration Json, Config variable, testcase etc. |

#### `projects.locations.products.integrations.versions.takeoverEditLock()`

Clears the `locked_by` and `locked_at_timestamp`in the DRAFT version of this integration. It then performs the same action as the CreateDraftIntegrationVersion (i.e., copies the DRAFT version of the integration as a SNAPSHOT and then creates a new DRAFT version with the `locked_by` set to the `user_taking_over` and the `locked_at_timestamp` set to the current timestamp). Both the `locked_by` and `user_taking_over` are notified via email about the takeover. This RPC throws an exception if the integration is not in DRAFT status or if the `locked_by` and `locked_at_timestamp` fields are not set.The TakeoverEdit lock is treated the same as an edit of the integration, and hence shares ACLs with edit. Audit fields updated include last_modified_timestamp, last_modified_by.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.integrationVersion` | `string` | Yes | Required. The version to take over edit lock. Format: projects/{project}/locations/{location}/integrations/{integration}/versions/{version} |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.products.integrations.versions.unpublish()`

Sets the status of the ACTIVE integration to SNAPSHOT with a new tag "PREVIOUSLY_PUBLISHED" after validating it. The "HEAD" and "PUBLISH_REQUESTED" tags do not change. This RPC throws an exception if the version being snapshot is not ACTIVE. Audit fields added include action, action_by, action_timestamp.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The version to deactivate. Format: projects/{project}/locations/{location}/integrations/{integration}/versions/{version} |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.products.integrations.executions`

#### `projects.locations.products.integrations.executions.list()`

Lists the results of all the integration executions. The response includes the same information as the [execution log](https://cloud.google.com/application-integration/docs/viewing-logs) in the Integration UI.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name of the integration execution. |
| `params.filter` | `string` | No | Optional. Standard filter field, we support filtering on following fields: workflow_name: the name of the integration. CreateTimestamp: the execution created time. event_execution_state: the state of the executions. execution_id: the id of the execution. trigger_id: the id of the trigger. parameter_type: the type of the parameters involved in the execution. All fields support for EQUALS, in additional: CreateTimestamp support for LESS_THAN, GREATER_THAN ParameterType support for HAS For example: "parameter_type" HAS \"string\" Also supports operators like AND, OR, NOT For example, trigger_id=\"id1\" AND workflow_name=\"testWorkflow\" |
| `params.pageSize` | `integer` | No | Optional. The size of entries in the response. |
| `params.pageToken` | `string` | No | Optional. The token returned in the previous response. |
| `params.orderBy` | `string` | No | Optional. The results would be returned in order you specified here. Currently supporting "create_time". |
| `params.readMask` | `string` | No | Optional. View mask for the response data. If set, only the field specified will be returned as part of the result. If not set, all fields in Execution will be filled and returned. Supported fields: trigger_id execution_method create_time update_time execution_details execution_details.state execution_details.execution_snapshots execution_details.attempt_stats execution_details.event_execution_snapshots_size request_parameters cloud_logging_details snapshot_number replay_info |
| `params.filterParams.workflowName` | `string` | No | Workflow name. |
| `params.filterParams.startTime` | `string` | No | Start timestamp. |
| `params.filterParams.endTime` | `string` | No | End timestamp. |
| `params.filterParams.eventStatuses` | `string` | No | List of possible event statuses. |
| `params.filterParams.taskStatuses` | `string` | No | List of possible task statuses. |
| `params.filterParams.customFilter` | `string` | No | Optional user-provided custom filter. |
| `params.filterParams.executionId` | `string` | No | Execution id. |
| `params.filterParams.parameterValue` | `string` | No | Param value. DEPRECATED. User parameter_pair_value instead. |
| `params.filterParams.parameterType` | `string` | No | Param type. |
| `params.filterParams.parameterKey` | `string` | No | Param key. DEPRECATED. User parameter_pair_key instead. |
| `params.filterParams.parameterPairKey` | `string` | No | Param key in the key value pair filter. |
| `params.filterParams.parameterPairValue` | `string` | No | Param value in the key value pair filter. |
| `params.refreshAcl` | `boolean` | No | Optional. If true, the service will use the most recent acl information to list event execution infos and renew the acl cache. Note that fetching the most recent acl is synchronous, so it will increase RPC call latency. |
| `params.truncateParams` | `boolean` | No | Optional. If true, the service will truncate the params to only keep the first 1000 characters of string params and empty the executions in order to make response smaller. Only works for UI and when the params fields are not filtered out. |
| `params.snapshotMetadataWithoutParams` | `boolean` | No | Optional. If true, the service will provide execution info with snapshot metadata only i.e. without event parameters. |

#### `projects.locations.products.integrations.executions.get()`

Get an execution in the specified project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The execution resource name. Format: projects/{gcp_project_id}/locations/{location}/products/{product}/integrations/{integration_id}/executions/{execution_id} |

#### `projects.locations.products.integrations.executions.download()`

Download the execution.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The execution resource name. Format: projects/{gcp_project_id}/locations/{location}/products/{product}/integrations/{integration_id}/executions/{execution_id} |

### `projects.locations.products.integrations.executions.suspensions`

#### `projects.locations.products.integrations.executions.suspensions.resolve()`

* Resolves (lifts/rejects) any number of suspensions. If the integration is already running, only the status of the suspension is updated. Otherwise, the suspended integration will begin execution again.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. projects/{gcp_project_id}/locations/{location}/products/{product}/integrations/{integration_name}/executions/{execution_name}/suspensions/{suspension_id} |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.products.integrations.executions.suspensions.list()`

* Lists suspensions associated with a specific execution. Only those with permissions to resolve the relevant suspensions will be able to view them.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. projects/{gcp_project_id}/locations/{location}/products/{product}/integrations/{integration_name}/executions/{execution_name} |
| `params.pageSize` | `integer` | No | Maximum number of entries in the response. |
| `params.pageToken` | `string` | No | Token to retrieve a specific page. |
| `params.filter` | `string` | No | Standard filter field. |
| `params.orderBy` | `string` | No | Field name to order by. |

#### `projects.locations.products.integrations.executions.suspensions.lift()`

* Lifts suspension for the Suspension task. Fetch corresponding suspension with provided suspension Id, resolve suspension, and set up suspension result for the Suspension Task.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource that the suspension belongs to. "projects/{project}/locations/{location}/products/{product}/integrations/{integration}/executions/{execution}/suspensions/{suspenion}" format. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.products.sfdcInstances`

#### `projects.locations.products.sfdcInstances.create()`

Creates an sfdc instance record. Store the sfdc instance in Spanner. Returns the sfdc instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. "projects/{project}/locations/{location}" format. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.products.sfdcInstances.patch()`

Updates an sfdc instance. Updates the sfdc instance in spanner. Returns the sfdc instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Resource name of the SFDC instance projects/{project}/locations/{location}/sfdcInstances/{sfdcInstance}. |
| `params.updateMask` | `string` | No | Field mask specifying the fields in the above SfdcInstance that have been modified and need to be updated. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.products.sfdcInstances.delete()`

Deletes an sfdc instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name that is associated with the SfdcInstance. |

#### `projects.locations.products.sfdcInstances.get()`

Gets an sfdc instance. If the instance doesn't exist, Code.NOT_FOUND exception will be thrown.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name that is associated with the SfdcInstance. |

#### `projects.locations.products.sfdcInstances.list()`

Lists all sfdc instances that match the filter. Restrict to sfdc instances belonging to the current client only.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The client, which owns this collection of SfdcInstances. |
| `params.pageSize` | `integer` | No | The size of entries in the response. If unspecified, defaults to 100. |
| `params.pageToken` | `string` | No | The token returned in the previous response. |
| `params.filter` | `string` | No | Filtering as supported in https://developers.google.com/authorized-buyers/apis/guides/list-filters. |
| `params.readMask` | `string` | No | The mask which specifies fields that need to be returned in the SfdcInstance's response. |

### `projects.locations.products.sfdcInstances.sfdcChannels`

#### `projects.locations.products.sfdcInstances.sfdcChannels.create()`

Creates an sfdc channel record. Store the sfdc channel in Spanner. Returns the sfdc channel.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. "projects/{project}/locations/{location}" format. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.products.sfdcInstances.sfdcChannels.patch()`

Updates an sfdc channel. Updates the sfdc channel in spanner. Returns the sfdc channel.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Resource name of the SFDC channel projects/{project}/locations/{location}/sfdcInstances/{sfdc_instance}/sfdcChannels/{sfdc_channel}. |
| `params.updateMask` | `string` | No | Field mask specifying the fields in the above SfdcChannel that have been modified and need to be updated. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.products.sfdcInstances.sfdcChannels.delete()`

Deletes an sfdc channel.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name that is associated with the SfdcChannel. |

#### `projects.locations.products.sfdcInstances.sfdcChannels.get()`

Gets an sfdc channel. If the channel doesn't exist, Code.NOT_FOUND exception will be thrown.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name that is associated with the SfdcChannel. |

#### `projects.locations.products.sfdcInstances.sfdcChannels.list()`

Lists all sfdc channels that match the filter. Restrict to sfdc channels belonging to the current client only.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The client, which owns this collection of SfdcChannels. |
| `params.pageSize` | `integer` | No | The size of entries in the response. If unspecified, defaults to 100. |
| `params.pageToken` | `string` | No | The token returned in the previous response. |
| `params.filter` | `string` | No | Filtering as supported in https://developers.google.com/authorized-buyers/apis/guides/list-filters. |
| `params.readMask` | `string` | No | The mask which specifies fields that need to be returned in the SfdcChannel's response. |

### `projects.locations.cloudFunctions`

#### `projects.locations.cloudFunctions.create()`

Creates a cloud function project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project that the executed integration belongs to. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.certificates`

#### `projects.locations.certificates.list()`

List all the certificates that match the filter. Restrict to certificate of current client only.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The client, which owns this collection of Certificates. |
| `params.pageSize` | `integer` | No | The size of entries in the response. If unspecified, defaults to 100. |
| `params.pageToken` | `string` | No | The token returned in the previous response. |
| `params.filter` | `string` | No | Filtering as supported in https://developers.google.com/authorized-buyers/apis/guides/list-filters. |
| `params.readMask` | `string` | No | The mask which specifies fields that need to be returned in the Certificate's response. |

#### `projects.locations.certificates.get()`

Get a certificates in the specified project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The certificate to retrieve. Format: projects/{project}/locations/{location}/certificates/{certificate} |

#### `projects.locations.certificates.create()`

Creates a new certificate. The certificate will be registered to the trawler service and will be encrypted using cloud KMS and stored in Spanner Returns the certificate.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. "projects/{project}/locations/{location}" format. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.certificates.patch()`

Updates the certificate by id. If new certificate file is updated, it will register with the trawler service, re-encrypt with cloud KMS and update the Spanner record. Other fields will directly update the Spanner record. Returns the Certificate.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. Auto generated primary key |
| `params.updateMask` | `string` | No | Field mask specifying the fields in the above Certificate that have been modified and need to be updated. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.certificates.delete()`

Delete a certificate

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name that is associated with the Certificate. |

### `projects.locations.authConfigs`

#### `projects.locations.authConfigs.create()`

Creates an auth config record. Fetch corresponding credentials for specific auth types, e.g. access token for OAuth 2.0, JWT token for JWT. Encrypt the auth config with Cloud KMS and store the encrypted credentials in Spanner. Returns the encrypted auth config.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. "projects/{project}/locations/{location}" format. |
| `params.clientCertificate.sslCertificate` | `string` | No | The ssl certificate encoded in PEM format. This string must include the begin header and end footer lines. For example, -----BEGIN CERTIFICATE----- MIICTTCCAbagAwIBAgIJAPT0tSKNxan/MA0GCSqGSIb3DQEBCwUAMCoxFzAVBgNV BAoTDkdvb2dsZSBURVNUSU5HMQ8wDQYDVQQDEwZ0ZXN0Q0EwHhcNMTUwMTAxMDAw MDAwWhcNMjUwMTAxMDAwMDAwWjAuMRcwFQYDVQQKEw5Hb29nbGUgVEVTVElORzET MBEGA1UEAwwKam9lQGJhbmFuYTCBnzANBgkqhkiG9w0BAQEFAAOBjQAwgYkCgYEA vDYFgMgxi5W488d9J7UpCInl0NXmZQpJDEHE4hvkaRlH7pnC71H0DLt0/3zATRP1 JzY2+eqBmbGl4/sgZKYv8UrLnNyQNUTsNx1iZAfPUflf5FwgVsai8BM0pUciq1NB xD429VFcrGZNucvFLh72RuRFIKH8WUpiK/iZNFkWhZ0CAwEAAaN3MHUwDgYDVR0P AQH/BAQDAgWgMB0GA1UdJQQWMBQGCCsGAQUFBwMBBggrBgEFBQcDAjAMBgNVHRMB Af8EAjAAMBkGA1UdDgQSBBCVgnFBCWgL/iwCqnGrhTPQMBsGA1UdIwQUMBKAEKey Um2o4k2WiEVA0ldQvNYwDQYJKoZIhvcNAQELBQADgYEAYK986R4E3L1v+Q6esBtW JrUwA9UmJRSQr0N5w3o9XzarU37/bkjOP0Fw0k/A6Vv1n3vlciYfBFaBIam1qRHr 5dMsYf4CZS6w50r7hyzqyrwDoyNxkLnd2PdcHT/sym1QmflsjEs7pejtnohO6N2H wQW6M0H7Zt8claGRla4fKkg= -----END CERTIFICATE----- |
| `params.clientCertificate.encryptedPrivateKey` | `string` | No | The ssl certificate encoded in PEM format. This string must include the begin header and end footer lines. For example, -----BEGIN CERTIFICATE----- MIICTTCCAbagAwIBAgIJAPT0tSKNxan/MA0GCSqGSIb3DQEBCwUAMCoxFzAVBgNV BAoTDkdvb2dsZSBURVNUSU5HMQ8wDQYDVQQDEwZ0ZXN0Q0EwHhcNMTUwMTAxMDAw MDAwWhcNMjUwMTAxMDAwMDAwWjAuMRcwFQYDVQQKEw5Hb29nbGUgVEVTVElORzET MBEGA1UEAwwKam9lQGJhbmFuYTCBnzANBgkqhkiG9w0BAQEFAAOBjQAwgYkCgYEA vDYFgMgxi5W488d9J7UpCInl0NXmZQpJDEHE4hvkaRlH7pnC71H0DLt0/3zATRP1 JzY2+eqBmbGl4/sgZKYv8UrLnNyQNUTsNx1iZAfPUflf5FwgVsai8BM0pUciq1NB xD429VFcrGZNucvFLh72RuRFIKH8WUpiK/iZNFkWhZ0CAwEAAaN3MHUwDgYDVR0P AQH/BAQDAgWgMB0GA1UdJQQWMBQGCCsGAQUFBwMBBggrBgEFBQcDAjAMBgNVHRMB Af8EAjAAMBkGA1UdDgQSBBCVgnFBCWgL/iwCqnGrhTPQMBsGA1UdIwQUMBKAEKey Um2o4k2WiEVA0ldQvNYwDQYJKoZIhvcNAQELBQADgYEAYK986R4E3L1v+Q6esBtW JrUwA9UmJRSQr0N5w3o9XzarU37/bkjOP0Fw0k/A6Vv1n3vlciYfBFaBIam1qRHr 5dMsYf4CZS6w50r7hyzqyrwDoyNxkLnd2PdcHT/sym1QmflsjEs7pejtnohO6N2H wQW6M0H7Zt8claGRla4fKkg= -----END CERTIFICATE----- |
| `params.clientCertificate.passphrase` | `string` | No | 'passphrase' should be left unset if private key is not encrypted. Note that 'passphrase' is not the password for web server, but an extra layer of security to protected private key. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.authConfigs.patch()`

Updates an auth config. If credential is updated, fetch the encrypted auth config from Spanner, decrypt with Cloud KMS key, update the credential fields, re-encrypt with Cloud KMS key and update the Spanner record. For other fields, directly update the Spanner record. Returns the encrypted auth config.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Resource name of the auth config. For more information, see Manage authentication profiles. projects/{project}/locations/{location}/authConfigs/{authConfig}. |
| `params.updateMask` | `string` | No | Field mask specifying the fields in the above AuthConfig that have been modified and need to be updated. |
| `params.clientCertificate.sslCertificate` | `string` | No | The ssl certificate encoded in PEM format. This string must include the begin header and end footer lines. For example, -----BEGIN CERTIFICATE----- MIICTTCCAbagAwIBAgIJAPT0tSKNxan/MA0GCSqGSIb3DQEBCwUAMCoxFzAVBgNV BAoTDkdvb2dsZSBURVNUSU5HMQ8wDQYDVQQDEwZ0ZXN0Q0EwHhcNMTUwMTAxMDAw MDAwWhcNMjUwMTAxMDAwMDAwWjAuMRcwFQYDVQQKEw5Hb29nbGUgVEVTVElORzET MBEGA1UEAwwKam9lQGJhbmFuYTCBnzANBgkqhkiG9w0BAQEFAAOBjQAwgYkCgYEA vDYFgMgxi5W488d9J7UpCInl0NXmZQpJDEHE4hvkaRlH7pnC71H0DLt0/3zATRP1 JzY2+eqBmbGl4/sgZKYv8UrLnNyQNUTsNx1iZAfPUflf5FwgVsai8BM0pUciq1NB xD429VFcrGZNucvFLh72RuRFIKH8WUpiK/iZNFkWhZ0CAwEAAaN3MHUwDgYDVR0P AQH/BAQDAgWgMB0GA1UdJQQWMBQGCCsGAQUFBwMBBggrBgEFBQcDAjAMBgNVHRMB Af8EAjAAMBkGA1UdDgQSBBCVgnFBCWgL/iwCqnGrhTPQMBsGA1UdIwQUMBKAEKey Um2o4k2WiEVA0ldQvNYwDQYJKoZIhvcNAQELBQADgYEAYK986R4E3L1v+Q6esBtW JrUwA9UmJRSQr0N5w3o9XzarU37/bkjOP0Fw0k/A6Vv1n3vlciYfBFaBIam1qRHr 5dMsYf4CZS6w50r7hyzqyrwDoyNxkLnd2PdcHT/sym1QmflsjEs7pejtnohO6N2H wQW6M0H7Zt8claGRla4fKkg= -----END CERTIFICATE----- |
| `params.clientCertificate.encryptedPrivateKey` | `string` | No | The ssl certificate encoded in PEM format. This string must include the begin header and end footer lines. For example, -----BEGIN CERTIFICATE----- MIICTTCCAbagAwIBAgIJAPT0tSKNxan/MA0GCSqGSIb3DQEBCwUAMCoxFzAVBgNV BAoTDkdvb2dsZSBURVNUSU5HMQ8wDQYDVQQDEwZ0ZXN0Q0EwHhcNMTUwMTAxMDAw MDAwWhcNMjUwMTAxMDAwMDAwWjAuMRcwFQYDVQQKEw5Hb29nbGUgVEVTVElORzET MBEGA1UEAwwKam9lQGJhbmFuYTCBnzANBgkqhkiG9w0BAQEFAAOBjQAwgYkCgYEA vDYFgMgxi5W488d9J7UpCInl0NXmZQpJDEHE4hvkaRlH7pnC71H0DLt0/3zATRP1 JzY2+eqBmbGl4/sgZKYv8UrLnNyQNUTsNx1iZAfPUflf5FwgVsai8BM0pUciq1NB xD429VFcrGZNucvFLh72RuRFIKH8WUpiK/iZNFkWhZ0CAwEAAaN3MHUwDgYDVR0P AQH/BAQDAgWgMB0GA1UdJQQWMBQGCCsGAQUFBwMBBggrBgEFBQcDAjAMBgNVHRMB Af8EAjAAMBkGA1UdDgQSBBCVgnFBCWgL/iwCqnGrhTPQMBsGA1UdIwQUMBKAEKey Um2o4k2WiEVA0ldQvNYwDQYJKoZIhvcNAQELBQADgYEAYK986R4E3L1v+Q6esBtW JrUwA9UmJRSQr0N5w3o9XzarU37/bkjOP0Fw0k/A6Vv1n3vlciYfBFaBIam1qRHr 5dMsYf4CZS6w50r7hyzqyrwDoyNxkLnd2PdcHT/sym1QmflsjEs7pejtnohO6N2H wQW6M0H7Zt8claGRla4fKkg= -----END CERTIFICATE----- |
| `params.clientCertificate.passphrase` | `string` | No | 'passphrase' should be left unset if private key is not encrypted. Note that 'passphrase' is not the password for web server, but an extra layer of security to protected private key. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.authConfigs.delete()`

Deletes an auth config.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name that is associated with the AuthConfig. |

#### `projects.locations.authConfigs.get()`

Gets a complete auth config. If the auth config doesn't exist, Code.NOT_FOUND exception will be thrown. Returns the decrypted auth config.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name that is associated with the AuthConfig. |

#### `projects.locations.authConfigs.list()`

Lists all auth configs that match the filter. Restrict to auth configs belong to the current client only.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The client, which owns this collection of AuthConfigs. |
| `params.pageSize` | `integer` | No | The size of entries in the response. If unspecified, defaults to 100. |
| `params.pageToken` | `string` | No | The token returned in the previous response. |
| `params.filter` | `string` | No | Filtering as supported in https://developers.google.com/authorized-buyers/apis/guides/list-filters. |
| `params.readMask` | `string` | No | The mask which specifies fields that need to be returned in the AuthConfig's response. |

### `projects.locations.connections`

#### `projects.locations.connections.list()`

Lists Connections in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent resource of the Connection, of the form: `projects/*/locations/*` |
| `params.pageSize` | `integer` | No | Page size. |
| `params.pageToken` | `string` | No | Page token. |
| `params.filter` | `string` | No | Filter. |
| `params.orderBy` | `string` | No | Order by parameters. |

#### `projects.locations.connections.getConnectionSchemaMetadata()`

Lists the available entities and actions associated with a Connection.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. ConnectionSchemaMetadata name. Format: projects/{project}/locations/{location}/connections/{connection}/connectionSchemaMetadata |

### `projects.locations.connections.runtimeEntitySchemas`

#### `projects.locations.connections.runtimeEntitySchemas.list()`

Lists the JSON schemas for the properties of runtime entities, filtered by entity name.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent resource of RuntimeEntitySchema. Format: projects/{project}/locations/{location}/connections/{connection} |
| `params.pageSize` | `integer` | No | Page size. |
| `params.pageToken` | `string` | No | Page token. |
| `params.filter` | `string` | No | Filter. Only the entity field with literal equality operator is supported. |

### `projects.locations.connections.runtimeActionSchemas`

#### `projects.locations.connections.runtimeActionSchemas.list()`

Lists the JSON schemas for the inputs and outputs of actions, filtered by action name.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent resource of RuntimeActionSchema. Format: projects/{project}/locations/{location}/connections/{connection} |
| `params.pageSize` | `integer` | No | Page size. |
| `params.pageToken` | `string` | No | Page token. |
| `params.filter` | `string` | No | Filter. Only the action field with literal equality operator is supported. |

### `projects.locations.integrations`

#### `projects.locations.integrations.execute()`

Executes integrations synchronously by passing the trigger id in the request body. The request is not returned until the requested executions are either fulfilled or experienced an error. If the integration name is not specified (passing `-`), all of the associated integration under the given trigger_id will be executed. Otherwise only the specified integration for the given `trigger_id` is executed. This is helpful for execution the integration from UI.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The integration resource name. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.integrations.schedule()`

Schedules an integration for execution by passing the trigger id and the scheduled time in the request body.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The integration resource name. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.integrations.executeEvent()`

Executes an integration on receiving events from Integration Connector triggers, Eventarc or CPS Trigger. Input data to integration is received in body in json format

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The integration resource name. Format: projects/{gcp_project_id}/locations/{location}/integrations/{integration_id} |
| `params.triggerId` | `string` | No | Required. Id of the integration trigger config. The trigger_id is in the format: `integration_connector_trigger/projects/{gcp_project_id}/location/{location}/connections/{connection_name}/subscriptions/{subscription_name}`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.integrations.test()`

Execute the integration in draft state

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. Auto-generated primary key. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.integrations.list()`

Returns the list of all integrations in the specified project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Project and location from which the integrations should be listed. Format: projects/{project} |
| `params.pageSize` | `integer` | No | The page size for the resquest. |
| `params.pageToken` | `string` | No | The page token for the resquest. |
| `params.orderBy` | `string` | No | The results would be returned in order you specified here. Supported sort keys are: Descending sort order by "last_modified_time", "created_time", "snapshot_number". Ascending sort order by the integration name. |
| `params.filter` | `string` | No | Filter on fields of IntegrationVersion. Fields can be compared with literal values by use of ":" (containment), "=" (equality), ">" (greater), "<" (less than), >=" (greater than or equal to), "<=" (less than or equal to), and "!=" (inequality) operators. Negation, conjunction, and disjunction are written using NOT, AND, and OR keywords. For example, organization_id=\"1\" AND state=ACTIVE AND description:"test". Filtering cannot be performed on repeated fields like `task_config`. |

#### `projects.locations.integrations.search()`

Searches and returns the list of integrations in the specified project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Project and location from which the integrations should be listed. Format: projects/*/locations/*/resources/integrations |
| `params.query` | `string` | No | Required. The user query |
| `params.filter` | `string` | No | Optional. The pre-filter to be applied to the search. This should follow the expressions defined in https://cloud.google.com/generative-ai-app-builder/docs/filter-search-metadata. For example, "status:ANY("ACTIVE")" will return all the resources whose status contains the "ACTIVE". |
| `params.pageSize` | `integer` | No | Optional. The maximum number of results to return. The service may return fewer than this value. If unspecified, at most 10 results will be returned. The maximum value is 100; values above 100 will be coerced to 100. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `SearchIntegrations` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `SearchIntegrations` must match the call that provided the page token. |
| `params.enableNaturalLanguageQueryUnderstanding` | `boolean` | No | Optional. Whether to enable natural language query understanding. |

#### `projects.locations.integrations.delete()`

Delete the selected integration and all versions inside

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The location resource of the request. |

### `projects.locations.integrations.versions`

#### `projects.locations.integrations.versions.list()`

Returns the list of all integration versions in the specified project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource where this version will be created. Format: projects/{project}/locations/{location}/integrations/{integration} Specifically, when parent equals: 1. projects//locations//integrations/, Meaning: "List versions (with filter) for a particular integration". 2. projects//locations//integrations/- Meaning: "List versions (with filter) for a client within a particular region". |
| `params.pageSize` | `integer` | No | The maximum number of versions to return. The service may return fewer than this value. If unspecified, at most 50 versions will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListIntegrationVersions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListIntegrationVersions` must match the call that provided the page token. |
| `params.filter` | `string` | No | Filter on fields of IntegrationVersion. Fields can be compared with literal values by use of ":" (containment), "=" (equality), ">" (greater), "<" (less than), >=" (greater than or equal to), "<=" (less than or equal to), and "!=" (inequality) operators. Negation, conjunction, and disjunction are written using NOT, AND, and OR keywords. For example, organization_id=\"1\" AND state=ACTIVE AND description:"test". Filtering cannot be performed on repeated fields like `task_config`. |
| `params.orderBy` | `string` | No | The results would be returned in order you specified here. Currently supported sort keys are: Descending sort order for "last\_modified\_time", "created\_time", and "snapshot\_number". Ascending sort order for `name`. |
| `params.fieldMask` | `string` | No | The field mask which specifies the particular data to be returned. |

#### `projects.locations.integrations.versions.create()`

Create a integration with a draft version in the specified project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource where this version will be created. Format: projects/{project}/locations/{location}/integrations/{integration} |
| `params.newIntegration` | `boolean` | No | Set this flag to true, if draft version is to be created for a brand new integration. False, if the request is for an existing integration. For backward compatibility reasons, even if this flag is set to `false` and no existing integration is found, a new draft integration will still be created. |
| `params.createSampleIntegrations` | `boolean` | No | Optional. Optional. Indicates if sample workflow should be created. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.integrations.versions.patch()`

Update a integration with a draft version in the specified project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. Auto-generated primary key. |
| `params.updateMask` | `string` | No | Field mask specifying the fields in the above integration that have been modified and need to be updated. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.integrations.versions.get()`

Get a integration in the specified project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The version to retrieve. Format: projects/{project}/locations/{location}/integrations/{integration}/versions/{version} |

#### `projects.locations.integrations.versions.publish()`

This RPC throws an exception if the integration is in ARCHIVED or ACTIVE state. This RPC throws an exception if the version being published is DRAFT, and if the `locked_by` user is not the same as the user performing the Publish. Audit fields updated include last_published_timestamp, last_published_by, last_modified_timestamp, last_modified_by. Any existing lock is on this integration is released.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The version to publish. Format: projects/{project}/locations/{location}/integrations/{integration}/versions/{version} |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.integrations.versions.delete()`

Soft-deletes the integration. Changes the status of the integration to ARCHIVED. If the integration being ARCHIVED is tagged as "HEAD", the tag is removed from this snapshot and set to the previous non-ARCHIVED snapshot. The PUBLISH_REQUESTED, DUE_FOR_DELETION tags are removed too. This RPC throws an exception if the version being deleted is DRAFT, and if the `locked_by` user is not the same as the user performing the Delete. Audit fields updated include last_modified_timestamp, last_modified_by. Any existing lock is released when Deleting a integration. Currently, there is no undelete mechanism.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The version to delete. Format: projects/{project}/locations/{location}/integrations/{integration}/versions/{version} |

#### `projects.locations.integrations.versions.upload()`

Uploads an integration. The content can be a previously downloaded integration. Performs the same function as CreateDraftIntegrationVersion, but accepts input in a string format, which holds the complete representation of the IntegrationVersion content.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The version to upload. Format: projects/{project}/locations/{location}/integrations/{integration} |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.integrations.versions.download()`

Downloads an integration. Retrieves the `IntegrationVersion` for a given `integration_id` and returns the response as a string.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The version to download. Format: projects/{project}/locations/{location}/integrations/{integration}/versions/{version} |
| `params.fileFormat` | `string` | No | File format for download request. |
| `params.files` | `string` | No | Optional. Integration related file to download like Integration Json, Config variable, testcase etc. |

#### `projects.locations.integrations.versions.downloadJsonPackage()`

Downloads an Integration version package like IntegrationVersion,Integration Config etc. Retrieves the IntegrationVersion package for a given `integration_id` and returns the response as a JSON.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Integration version name Format: projects/{project}/locations/{location}/integrations/{integration}/versions/{version} |
| `params.files` | `string` | No | Optional. Integration related file to download like Integration Version, Config variable, testcase etc. |

#### `projects.locations.integrations.versions.unpublish()`

Sets the status of the ACTIVE integration to SNAPSHOT with a new tag "PREVIOUSLY_PUBLISHED" after validating it. The "HEAD" and "PUBLISH_REQUESTED" tags do not change. This RPC throws an exception if the version being snapshot is not ACTIVE. Audit fields added include action, action_by, action_timestamp.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The version to deactivate. Format: projects/{project}/locations/{location}/integrations/{integration}/versions/{version} |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.integrations.versions.testCases`

#### `projects.locations.integrations.versions.testCases.create()`

Creates a new test case

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource where this test case will be created. Format: projects/{project}/locations/{location}/integrations/{integration}/versions/{integration_version} |
| `params.testCaseId` | `string` | No | Required. Required |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.integrations.versions.testCases.get()`

Get a test case

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The ID of the test case to retrieve |

#### `projects.locations.integrations.versions.testCases.patch()`

Updates a test case

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. Auto-generated primary key. |
| `params.updateMask` | `string` | No | Optional. Field mask specifying the fields in the above integration that have been modified and need to be updated. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.integrations.versions.testCases.delete()`

Deletes a test case

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. ID for the test case to be deleted |

#### `projects.locations.integrations.versions.testCases.list()`

Lists all the test cases that satisfy the filters.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource where this TestCase was created. |
| `params.filter` | `string` | No | Optional. Standard filter field. Filtering as supported in https://developers.google.com/authorized-buyers/apis/guides/list-filters. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of test cases to return. The service may return fewer than this value. If unspecified, at most 100 test cases will be returned. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListTestCases` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListTestCases` must match the call that provided the page token. |
| `params.orderBy` | `string` | No | Optional. The results would be returned in order specified here. Currently supported sort keys are: Descending sort order for "last_modified_time", "created_time". Ascending sort order for "name". |
| `params.readMask` | `string` | No | Optional. The mask which specifies fields that need to be returned in the TestCases's response. |

#### `projects.locations.integrations.versions.testCases.executeTest()`

Executes functional test

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.testCaseName` | `string` | Yes | Required. Test case resource name |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.integrations.versions.testCases.upload()`

Uploads a test case. The content can be a previously downloaded test case. Performs the same function as CreateTestCase, but accepts input in a string format, which holds the complete representation of the TestCase content.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The test case to upload. Format: projects/{project}/locations/{location}/integrations/{integration}/versions/{integration_version} |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.integrations.versions.testCases.download()`

Downloads a test case. Retrieves the `TestCase` for a given `test_case_id` and returns the response as a string.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The test case to download. Format: projects/{project}/locations/{location}/integrations/{integration}/versions/{integration_version}/testCases/{test_case_id} |
| `params.fileFormat` | `string` | No | File format for download request. |

#### `projects.locations.integrations.versions.testCases.takeoverEditLock()`

Clear the lock fields and assign them to current user

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The ID of test case to takeover edit lock. Format: projects/{project}/locations/{location}/integrations/{integration}/versions/{integration_version}/testCases/{test_case_id} |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.integrations.versions.testCases.execute()`

Executes all test cases in an integration version.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource whose test cases are executed. Format: projects/{project}/locations/{location}/integrations/{integration}/versions/{integration_version} |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.integrations.executions`

#### `projects.locations.integrations.executions.list()`

Lists the results of all the integration executions. The response includes the same information as the [execution log](https://cloud.google.com/application-integration/docs/viewing-logs) in the Integration UI.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name of the integration execution. |
| `params.filter` | `string` | No | Optional. Standard filter field, we support filtering on following fields: workflow_name: the name of the integration. CreateTimestamp: the execution created time. event_execution_state: the state of the executions. execution_id: the id of the execution. trigger_id: the id of the trigger. parameter_type: the type of the parameters involved in the execution. All fields support for EQUALS, in additional: CreateTimestamp support for LESS_THAN, GREATER_THAN ParameterType support for HAS For example: "parameter_type" HAS \"string\" Also supports operators like AND, OR, NOT For example, trigger_id=\"id1\" AND workflow_name=\"testWorkflow\" |
| `params.pageSize` | `integer` | No | Optional. The size of entries in the response. |
| `params.pageToken` | `string` | No | Optional. The token returned in the previous response. |
| `params.orderBy` | `string` | No | Optional. The results would be returned in order you specified here. Currently supporting "create_time". |
| `params.readMask` | `string` | No | Optional. View mask for the response data. If set, only the field specified will be returned as part of the result. If not set, all fields in Execution will be filled and returned. Supported fields: trigger_id execution_method create_time update_time execution_details execution_details.state execution_details.execution_snapshots execution_details.attempt_stats execution_details.event_execution_snapshots_size request_parameters cloud_logging_details snapshot_number replay_info |
| `params.filterParams.workflowName` | `string` | No | Workflow name. |
| `params.filterParams.startTime` | `string` | No | Start timestamp. |
| `params.filterParams.endTime` | `string` | No | End timestamp. |
| `params.filterParams.eventStatuses` | `string` | No | List of possible event statuses. |
| `params.filterParams.taskStatuses` | `string` | No | List of possible task statuses. |
| `params.filterParams.customFilter` | `string` | No | Optional user-provided custom filter. |
| `params.filterParams.executionId` | `string` | No | Execution id. |
| `params.filterParams.parameterValue` | `string` | No | Param value. DEPRECATED. User parameter_pair_value instead. |
| `params.filterParams.parameterType` | `string` | No | Param type. |
| `params.filterParams.parameterKey` | `string` | No | Param key. DEPRECATED. User parameter_pair_key instead. |
| `params.filterParams.parameterPairKey` | `string` | No | Param key in the key value pair filter. |
| `params.filterParams.parameterPairValue` | `string` | No | Param value in the key value pair filter. |
| `params.refreshAcl` | `boolean` | No | Optional. If true, the service will use the most recent acl information to list event execution infos and renew the acl cache. Note that fetching the most recent acl is synchronous, so it will increase RPC call latency. |
| `params.truncateParams` | `boolean` | No | Optional. If true, the service will truncate the params to only keep the first 1000 characters of string params and empty the executions in order to make response smaller. Only works for UI and when the params fields are not filtered out. |
| `params.snapshotMetadataWithoutParams` | `boolean` | No | Optional. If true, the service will provide execution info with snapshot metadata only i.e. without event parameters. |

#### `projects.locations.integrations.executions.get()`

Get an execution in the specified project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The execution resource name. Format: projects/{gcp_project_id}/locations/{location}/products/{product}/integrations/{integration_id}/executions/{execution_id} |

#### `projects.locations.integrations.executions.cancel()`

Cancellation of an execution and associated sub-executions. This will not cancel an IN_PROCESS or completed(SUCCESSFUL, FAILED or CANCELLED) executions.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The execution resource name. Format: projects/{gcp_project_id}/locations/{location}/products/{product}/integrations/{integration_id}/executions/{execution_id} |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.integrations.executions.download()`

Download the execution.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The execution resource name. Format: projects/{gcp_project_id}/locations/{location}/products/{product}/integrations/{integration_id}/executions/{execution_id} |

#### `projects.locations.integrations.executions.replay()`

Re-execute an existing execution, with same request parameters and execution strategy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Next ID: 6 The execution resource name. Format: projects/{gcp_project_id}/locations/{location}/integrations/{integration}/executions/{execution_id} |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.integrations.executions.suspensions`

#### `projects.locations.integrations.executions.suspensions.resolve()`

* Resolves (lifts/rejects) any number of suspensions. If the integration is already running, only the status of the suspension is updated. Otherwise, the suspended integration will begin execution again.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. projects/{gcp_project_id}/locations/{location}/products/{product}/integrations/{integration_name}/executions/{execution_name}/suspensions/{suspension_id} |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.integrations.executions.suspensions.list()`

* Lists suspensions associated with a specific execution. Only those with permissions to resolve the relevant suspensions will be able to view them.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. projects/{gcp_project_id}/locations/{location}/products/{product}/integrations/{integration_name}/executions/{execution_name} |
| `params.pageSize` | `integer` | No | Maximum number of entries in the response. |
| `params.pageToken` | `string` | No | Token to retrieve a specific page. |
| `params.filter` | `string` | No | Standard filter field. |
| `params.orderBy` | `string` | No | Field name to order by. |

#### `projects.locations.integrations.executions.suspensions.lift()`

* Lifts suspension for the Suspension task. Fetch corresponding suspension with provided suspension Id, resolve suspension, and set up suspension result for the Suspension Task.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource that the suspension belongs to. "projects/{project}/locations/{location}/products/{product}/integrations/{integration}/executions/{execution}/suspensions/{suspenion}" format. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.sfdcInstances`

#### `projects.locations.sfdcInstances.create()`

Creates an sfdc instance record. Store the sfdc instance in Spanner. Returns the sfdc instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. "projects/{project}/locations/{location}" format. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.sfdcInstances.patch()`

Updates an sfdc instance. Updates the sfdc instance in spanner. Returns the sfdc instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Resource name of the SFDC instance projects/{project}/locations/{location}/sfdcInstances/{sfdcInstance}. |
| `params.updateMask` | `string` | No | Field mask specifying the fields in the above SfdcInstance that have been modified and need to be updated. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.sfdcInstances.delete()`

Deletes an sfdc instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name that is associated with the SfdcInstance. |

#### `projects.locations.sfdcInstances.get()`

Gets an sfdc instance. If the instance doesn't exist, Code.NOT_FOUND exception will be thrown.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name that is associated with the SfdcInstance. |

#### `projects.locations.sfdcInstances.list()`

Lists all sfdc instances that match the filter. Restrict to sfdc instances belonging to the current client only.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The client, which owns this collection of SfdcInstances. |
| `params.pageSize` | `integer` | No | The size of entries in the response. If unspecified, defaults to 100. |
| `params.pageToken` | `string` | No | The token returned in the previous response. |
| `params.filter` | `string` | No | Filtering as supported in https://developers.google.com/authorized-buyers/apis/guides/list-filters. |
| `params.readMask` | `string` | No | The mask which specifies fields that need to be returned in the SfdcInstance's response. |

### `projects.locations.sfdcInstances.sfdcChannels`

#### `projects.locations.sfdcInstances.sfdcChannels.create()`

Creates an sfdc channel record. Store the sfdc channel in Spanner. Returns the sfdc channel.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. "projects/{project}/locations/{location}" format. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.sfdcInstances.sfdcChannels.patch()`

Updates an sfdc channel. Updates the sfdc channel in spanner. Returns the sfdc channel.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Resource name of the SFDC channel projects/{project}/locations/{location}/sfdcInstances/{sfdc_instance}/sfdcChannels/{sfdc_channel}. |
| `params.updateMask` | `string` | No | Field mask specifying the fields in the above SfdcChannel that have been modified and need to be updated. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.sfdcInstances.sfdcChannels.delete()`

Deletes an sfdc channel.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name that is associated with the SfdcChannel. |

#### `projects.locations.sfdcInstances.sfdcChannels.get()`

Gets an sfdc channel. If the channel doesn't exist, Code.NOT_FOUND exception will be thrown.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name that is associated with the SfdcChannel. |

#### `projects.locations.sfdcInstances.sfdcChannels.list()`

Lists all sfdc channels that match the filter. Restrict to sfdc channels belonging to the current client only.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The client, which owns this collection of SfdcChannels. |
| `params.pageSize` | `integer` | No | The size of entries in the response. If unspecified, defaults to 100. |
| `params.pageToken` | `string` | No | The token returned in the previous response. |
| `params.filter` | `string` | No | Filtering as supported in https://developers.google.com/authorized-buyers/apis/guides/list-filters. |
| `params.readMask` | `string` | No | The mask which specifies fields that need to be returned in the SfdcChannel's response. |

### `projects.locations.templates`

#### `projects.locations.templates.list()`

Lists all templates matching the filter.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The client, which owns this collection of Templates. |
| `params.pageSize` | `integer` | No | Optional. The size of the response entries. If unspecified, defaults to 100. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| `params.pageToken` | `string` | No | Optional. The token returned in the previous response. |
| `params.filter` | `string` | No | Optional. Standard filter field to filter templates. client_id filter won't be supported and will restrict to templates belonging to the current client only. Return all templates of the current client if the filter is empty. Also supports operators like AND, OR, NOT For example, "status=\"ACTIVE\" |
| `params.orderBy` | `string` | No | Optional. The results would be returned in the order you specified here. |
| `params.readMask` | `string` | No | Optional. The mask which specifies fields that need to be returned in the template's response. |

#### `projects.locations.templates.get()`

Get a template in the specified project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The template to retrieve. Format: projects/{project}/locations/{location}/templates/{template} |

#### `projects.locations.templates.create()`

Creates a new template

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. "projects/{project}/locations/{location}" format. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.templates.patch()`

Updates the template by given id.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. Resource name of the template. |
| `params.updateMask` | `string` | No | Required. Field mask specifying the fields in the above template that have been modified and must be updated. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.templates.delete()`

Deletes a template

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name that is associated with the Template. |

#### `projects.locations.templates.search()`

Search templates based on user query and filters. This api would query the templates and return a list of templates based on the user filter.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The client, which owns this collection of Templates. |
| `params.pageSize` | `integer` | No | Optional. The size of the response entries. If unspecified, defaults to 100. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| `params.pageToken` | `string` | No | Optional. The token returned in the previous response. |
| `params.filter` | `string` | No | Optional. Standard filter field to filter templates. client_id filter won't be supported and will restrict to templates belonging to the current client only. Return all templates of the current client if the filter is empty. Also supports operators like AND, OR, NOT For example, "status=\"ACTIVE\" |
| `params.orderBy` | `string` | No | Optional. The results would be returned in the order you specified here. |
| `params.readMask` | `string` | No | Optional. The mask which specifies fields that need to be returned in the template's response. |
| `params.query` | `string` | No | Optional. The search query that will be passed to Vertex search service. |
| `params.enableNaturalLanguageQueryUnderstanding` | `boolean` | No | Optional. Whether to enable natural language query understanding. |

#### `projects.locations.templates.use()`

Use the template to create integration. This api would keep track of usage_count and last_used_time. PERMISSION_DENIED would be thrown if template is not accessible by client.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name that is associated with the Template. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.templates.import()`

Import the template to an existing integration. This api would keep track of usage_count and last_used_time. PERMISSION_DENIED would be thrown if template is not accessible by client.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name that is associated with the Template. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.templates.share()`

Share a template with other clients. Only the template owner can share the templates with other projects. PERMISSION_DENIED would be thrown if the request is not from the owner.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name that is associated with the Template. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.templates.unshare()`

Unshare a template from given clients. Owner of the template can unshare template with clients. Shared client can only unshare the template from itself. PERMISSION_DENIED would be thrown if request is not from owner or for unsharing itself.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name that is associated with the Template. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.templates.upload()`

Uploads a template. The content can be a previously downloaded template. Performs the same function as CreateTemplate, but accepts input in a string format, which holds the complete representation of the Template content.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The template to upload. Format: projects/{project}/locations/{location} |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.templates.download()`

Downloads a template. Retrieves the `Template` and returns the response as a string.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The template to download. Format: projects/{project}/locations/{location}/template/{template_id} |
| `params.fileFormat` | `string` | No | Required. File format for download request. |

### `connectorPlatformRegions`

#### `connectorPlatformRegions.enumerate()`

Enumerates the regions for which Connector Platform is provisioned.

| Parameter | Type | Required | Description |
|---|---|---|---|

### `callback`

#### `callback.generateToken()`

Receives the auth code and auth config id to combine that with the client id and secret to retrieve access tokens from the token endpoint. Returns either a success or error message when it's done.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.state` | `string` | No | The auth config id for the given request |
| `params.code` | `string` | No | The auth code for the given request |
| `params.gcpProjectId` | `string` | No | The gcp project id of the request |
| `params.redirectUri` | `string` | No | Redirect uri of the auth code request |
| `params.product` | `string` | No | Which product sends the request |