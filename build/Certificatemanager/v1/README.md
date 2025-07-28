# Certificate Manager API - Apps Script Client Library

Auto-generated client library for using the **Certificate Manager API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 27 Jul 2025 15:48:37 GMT
- **Last Modified:** Sun, 27 Jul 2025 12:22:43 GMT
- **Created:** Sun, 20 Jul 2025 16:14:59 GMT



---

## API Reference

### `projects`

### `projects.locations`

#### `projects.locations.list()`

Lists information about the supported locations for this service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The resource that owns the locations collection, if applicable. |
| `params.filter` | `string` | No | A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). |
| `params.pageSize` | `integer` | No | The maximum number of results to return. If not set, the service selects a default. |
| `params.pageToken` | `string` | No | A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. |
| `params.extraLocationTypes` | `string` | No | Optional. A list of extra location types that should be used as conditions for controlling the visibility of the locations. |

#### `projects.locations.get()`

Gets information about a location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Resource name for the location. |

### `projects.locations.operations`

#### `projects.locations.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `projects.locations.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `projects.locations.operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

#### `projects.locations.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.certificates`

#### `projects.locations.certificates.list()`

Lists Certificates in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project and location from which the certificate should be listed, specified in the format `projects/*/locations/*`. |
| `params.pageSize` | `integer` | No | Optional. Maximum number of certificates to return per call. |
| `params.pageToken` | `string` | No | Optional. The value returned by the last `ListCertificatesResponse`. Indicates that this is a continuation of a prior `ListCertificates` call, and that the system should return the next page of data. |
| `params.filter` | `string` | No | Optional. Filter expression to restrict the Certificates returned. |
| `params.orderBy` | `string` | No | Optional. A list of Certificate field names used to specify the order of the returned results. The default sorting order is ascending. To specify descending order for a field, add a suffix `" desc"`. |

#### `projects.locations.certificates.get()`

Gets details of a single Certificate.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. A name of the certificate to describe. Must be in the format `projects/*/locations/*/certificates/*`. |

#### `projects.locations.certificates.create()`

Creates a new Certificate in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource of the certificate. Must be in the format `projects/*/locations/*`. |
| `params.certificateId` | `string` | No | Required. A user-provided name of the certificate. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.certificates.patch()`

Updates a Certificate.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. A user-defined name of the certificate. Certificate names must be unique globally and match pattern `projects/*/locations/*/certificates/*`. |
| `params.updateMask` | `string` | No | Required. The update mask applies to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.certificates.delete()`

Deletes a single Certificate.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. A name of the certificate to delete. Must be in the format `projects/*/locations/*/certificates/*`. |

### `projects.locations.certificateMaps`

#### `projects.locations.certificateMaps.list()`

Lists CertificateMaps in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project and location from which the certificate maps should be listed, specified in the format `projects/*/locations/*`. |
| `params.pageSize` | `integer` | No | Optional. Maximum number of certificate maps to return per call. |
| `params.pageToken` | `string` | No | Optional. The value returned by the last `ListCertificateMapsResponse`. Indicates that this is a continuation of a prior `ListCertificateMaps` call, and that the system should return the next page of data. |
| `params.filter` | `string` | No | Optional. Filter expression to restrict the Certificates Maps returned. |
| `params.orderBy` | `string` | No | Optional. A list of Certificate Map field names used to specify the order of the returned results. The default sorting order is ascending. To specify descending order for a field, add a suffix `" desc"`. |

#### `projects.locations.certificateMaps.get()`

Gets details of a single CertificateMap.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. A name of the certificate map to describe. Must be in the format `projects/*/locations/*/certificateMaps/*`. |

#### `projects.locations.certificateMaps.create()`

Creates a new CertificateMap in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource of the certificate map. Must be in the format `projects/*/locations/*`. |
| `params.certificateMapId` | `string` | No | Required. A user-provided name of the certificate map. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.certificateMaps.patch()`

Updates a CertificateMap.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. A user-defined name of the Certificate Map. Certificate Map names must be unique globally and match pattern `projects/*/locations/*/certificateMaps/*`. |
| `params.updateMask` | `string` | No | Required. The update mask applies to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.certificateMaps.delete()`

Deletes a single CertificateMap. A Certificate Map can't be deleted if it contains Certificate Map Entries. Remove all the entries from the map before calling this method.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. A name of the certificate map to delete. Must be in the format `projects/*/locations/*/certificateMaps/*`. |

### `projects.locations.certificateMaps.certificateMapEntries`

#### `projects.locations.certificateMaps.certificateMapEntries.list()`

Lists CertificateMapEntries in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project, location and certificate map from which the certificate map entries should be listed, specified in the format `projects/*/locations/*/certificateMaps/*`. |
| `params.pageSize` | `integer` | No | Optional. Maximum number of certificate map entries to return. The service may return fewer than this value. If unspecified, at most 50 certificate map entries will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| `params.pageToken` | `string` | No | Optional. The value returned by the last `ListCertificateMapEntriesResponse`. Indicates that this is a continuation of a prior `ListCertificateMapEntries` call, and that the system should return the next page of data. |
| `params.filter` | `string` | No | Optional. Filter expression to restrict the returned Certificate Map Entries. |
| `params.orderBy` | `string` | No | Optional. A list of Certificate Map Entry field names used to specify the order of the returned results. The default sorting order is ascending. To specify descending order for a field, add a suffix `" desc"`. |

#### `projects.locations.certificateMaps.certificateMapEntries.get()`

Gets details of a single CertificateMapEntry.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. A name of the certificate map entry to describe. Must be in the format `projects/*/locations/*/certificateMaps/*/certificateMapEntries/*`. |

#### `projects.locations.certificateMaps.certificateMapEntries.create()`

Creates a new CertificateMapEntry in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource of the certificate map entry. Must be in the format `projects/*/locations/*/certificateMaps/*`. |
| `params.certificateMapEntryId` | `string` | No | Required. A user-provided name of the certificate map entry. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.certificateMaps.certificateMapEntries.patch()`

Updates a CertificateMapEntry.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. A user-defined name of the Certificate Map Entry. Certificate Map Entry names must be unique globally and match pattern `projects/*/locations/*/certificateMaps/*/certificateMapEntries/*`. |
| `params.updateMask` | `string` | No | Required. The update mask applies to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.certificateMaps.certificateMapEntries.delete()`

Deletes a single CertificateMapEntry.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. A name of the certificate map entry to delete. Must be in the format `projects/*/locations/*/certificateMaps/*/certificateMapEntries/*`. |

### `projects.locations.dnsAuthorizations`

#### `projects.locations.dnsAuthorizations.list()`

Lists DnsAuthorizations in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project and location from which the dns authorizations should be listed, specified in the format `projects/*/locations/*`. |
| `params.pageSize` | `integer` | No | Optional. Maximum number of dns authorizations to return per call. |
| `params.pageToken` | `string` | No | Optional. The value returned by the last `ListDnsAuthorizationsResponse`. Indicates that this is a continuation of a prior `ListDnsAuthorizations` call, and that the system should return the next page of data. |
| `params.filter` | `string` | No | Optional. Filter expression to restrict the Dns Authorizations returned. |
| `params.orderBy` | `string` | No | Optional. A list of Dns Authorization field names used to specify the order of the returned results. The default sorting order is ascending. To specify descending order for a field, add a suffix `" desc"`. |

#### `projects.locations.dnsAuthorizations.get()`

Gets details of a single DnsAuthorization.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. A name of the dns authorization to describe. Must be in the format `projects/*/locations/*/dnsAuthorizations/*`. |

#### `projects.locations.dnsAuthorizations.create()`

Creates a new DnsAuthorization in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource of the dns authorization. Must be in the format `projects/*/locations/*`. |
| `params.dnsAuthorizationId` | `string` | No | Required. A user-provided name of the dns authorization. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.dnsAuthorizations.patch()`

Updates a DnsAuthorization.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. A user-defined name of the dns authorization. DnsAuthorization names must be unique globally and match pattern `projects/*/locations/*/dnsAuthorizations/*`. |
| `params.updateMask` | `string` | No | Required. The update mask applies to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.dnsAuthorizations.delete()`

Deletes a single DnsAuthorization.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. A name of the dns authorization to delete. Must be in the format `projects/*/locations/*/dnsAuthorizations/*`. |

### `projects.locations.certificateIssuanceConfigs`

#### `projects.locations.certificateIssuanceConfigs.list()`

Lists CertificateIssuanceConfigs in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project and location from which the certificate should be listed, specified in the format `projects/*/locations/*`. |
| `params.pageSize` | `integer` | No | Optional. Maximum number of certificate configs to return per call. |
| `params.pageToken` | `string` | No | Optional. The value returned by the last `ListCertificateIssuanceConfigsResponse`. Indicates that this is a continuation of a prior `ListCertificateIssuanceConfigs` call, and that the system should return the next page of data. |
| `params.filter` | `string` | No | Optional. Filter expression to restrict the Certificates Configs returned. |
| `params.orderBy` | `string` | No | Optional. A list of Certificate Config field names used to specify the order of the returned results. The default sorting order is ascending. To specify descending order for a field, add a suffix `" desc"`. |

#### `projects.locations.certificateIssuanceConfigs.get()`

Gets details of a single CertificateIssuanceConfig.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. A name of the certificate issuance config to describe. Must be in the format `projects/*/locations/*/certificateIssuanceConfigs/*`. |

#### `projects.locations.certificateIssuanceConfigs.create()`

Creates a new CertificateIssuanceConfig in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource of the certificate issuance config. Must be in the format `projects/*/locations/*`. |
| `params.certificateIssuanceConfigId` | `string` | No | Required. A user-provided name of the certificate config. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.certificateIssuanceConfigs.patch()`

Updates a CertificateIssuanceConfig.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. A user-defined name of the certificate issuance config. CertificateIssuanceConfig names must be unique globally and match pattern `projects/*/locations/*/certificateIssuanceConfigs/*`. |
| `params.updateMask` | `string` | No | Required. The update mask applies to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.certificateIssuanceConfigs.delete()`

Deletes a single CertificateIssuanceConfig.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. A name of the certificate issuance config to delete. Must be in the format `projects/*/locations/*/certificateIssuanceConfigs/*`. |

### `projects.locations.trustConfigs`

#### `projects.locations.trustConfigs.list()`

Lists TrustConfigs in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project and location from which the TrustConfigs should be listed, specified in the format `projects/*/locations/*`. |
| `params.pageSize` | `integer` | No | Optional. Maximum number of TrustConfigs to return per call. |
| `params.pageToken` | `string` | No | Optional. The value returned by the last `ListTrustConfigsResponse`. Indicates that this is a continuation of a prior `ListTrustConfigs` call, and that the system should return the next page of data. |
| `params.filter` | `string` | No | Optional. Filter expression to restrict the TrustConfigs returned. |
| `params.orderBy` | `string` | No | Optional. A list of TrustConfig field names used to specify the order of the returned results. The default sorting order is ascending. To specify descending order for a field, add a suffix `" desc"`. |

#### `projects.locations.trustConfigs.get()`

Gets details of a single TrustConfig.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. A name of the TrustConfig to describe. Must be in the format `projects/*/locations/*/trustConfigs/*`. |

#### `projects.locations.trustConfigs.create()`

Creates a new TrustConfig in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource of the TrustConfig. Must be in the format `projects/*/locations/*`. |
| `params.trustConfigId` | `string` | No | Required. A user-provided name of the TrustConfig. Must match the regexp `[a-z0-9-]{1,63}`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.trustConfigs.patch()`

Updates a TrustConfig.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. A user-defined name of the trust config. TrustConfig names must be unique globally and match pattern `projects/*/locations/*/trustConfigs/*`. |
| `params.updateMask` | `string` | No | Required. The update mask applies to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.trustConfigs.delete()`

Deletes a single TrustConfig.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. A name of the TrustConfig to delete. Must be in the format `projects/*/locations/*/trustConfigs/*`. |
| `params.etag` | `string` | No | Optional. The current etag of the TrustConfig. If an etag is provided and does not match the current etag of the resource, deletion will be blocked and an ABORTED error will be returned. |