# Cloud Key Management Service (KMS) API - Apps Script Client Library

Auto-generated client library for using the **Cloud Key Management Service (KMS) API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Thu, 31 Jul 2025 23:24:39 GMT
- **Last Modified:** Sun, 27 Jul 2025 12:23:40 GMT
- **Created:** Sun, 20 Jul 2025 16:22:05 GMT



---

## API Reference

### `folders`

#### `folders.updateAutokeyConfig()`

Updates the AutokeyConfig for a folder. The caller must have both `cloudkms.autokeyConfigs.update` permission on the parent folder and `cloudkms.cryptoKeys.setIamPolicy` permission on the provided key project. A KeyHandle creation in the folder's descendant projects will use this configuration to determine where to create the resulting CryptoKey.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. Name of the AutokeyConfig resource, e.g. `folders/{FOLDER_NUMBER}/autokeyConfig`. |
| `params.updateMask` | `string` | No | Required. Masks which fields of the AutokeyConfig to update, e.g. `keyProject`. |
| `params.resource` | `object` | Yes | The request body. |

#### `folders.getAutokeyConfig()`

Returns the AutokeyConfig for a folder.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the AutokeyConfig resource, e.g. `folders/{FOLDER_NUMBER}/autokeyConfig`. |

#### `folders.getKajPolicyConfig()`

Gets the KeyAccessJustificationsPolicyConfig for a given organization/folder/projects.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the KeyAccessJustificationsPolicyConfig to get. |

#### `folders.updateKajPolicyConfig()`

Updates the KeyAccessJustificationsPolicyConfig for a given organization/folder/projects.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name for this KeyAccessJustificationsPolicyConfig in the format of "{organizations|folders|projects}/*/kajPolicyConfig". |
| `params.updateMask` | `string` | No | Optional. The list of fields to update. |
| `params.resource` | `object` | Yes | The request body. |

### `projects`

#### `projects.showEffectiveAutokeyConfig()`

Returns the effective Cloud KMS Autokey configuration for a given project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Name of the resource project to the show effective Cloud KMS Autokey configuration for. This may be helpful for interrogating the effect of nested folder configurations on a given resource project. |

#### `projects.getKajPolicyConfig()`

Gets the KeyAccessJustificationsPolicyConfig for a given organization/folder/projects.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the KeyAccessJustificationsPolicyConfig to get. |

#### `projects.updateKajPolicyConfig()`

Updates the KeyAccessJustificationsPolicyConfig for a given organization/folder/projects.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name for this KeyAccessJustificationsPolicyConfig in the format of "{organizations|folders|projects}/*/kajPolicyConfig". |
| `params.updateMask` | `string` | No | Optional. The list of fields to update. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.showEffectiveKeyAccessJustificationsPolicyConfig()`

Returns the KeyAccessJustificationsPolicyConfig of the resource closest to the given project in hierarchy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Required. The number or id of the project to get the effective KeyAccessJustificationsPolicyConfig. In the format of "projects/{|}" |

#### `projects.showEffectiveKeyAccessJustificationsEnrollmentConfig()`

Returns the KeyAccessJustificationsEnrollmentConfig of the resource closest to the given project in hierarchy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Required. The number or id of the project to get the effective KeyAccessJustificationsEnrollmentConfig for. |

### `projects.locations`

#### `projects.locations.getEkmConfig()`

Returns the EkmConfig singleton resource for a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the EkmConfig to get. |

#### `projects.locations.updateEkmConfig()`

Updates the EkmConfig singleton resource for a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. The resource name for the EkmConfig in the format `projects/*/locations/*/ekmConfig`. |
| `params.updateMask` | `string` | No | Required. List of fields to be updated in this request. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.generateRandomBytes()`

Generate random bytes using the Cloud KMS randomness source in the provided location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.location` | `string` | Yes | The project-specific location in which to generate random bytes. For example, "projects/my-project/locations/us-central1". |
| `params.resource` | `object` | Yes | The request body. |

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

#### `projects.locations.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

### `projects.locations.keyHandles`

#### `projects.locations.keyHandles.create()`

Creates a new KeyHandle, triggering the provisioning of a new CryptoKey for CMEK use with the given resource type in the configured key project and the same location. GetOperation should be used to resolve the resulting long-running operation and get the resulting KeyHandle and CryptoKey.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Name of the resource project and location to create the KeyHandle in, e.g. `projects/{PROJECT_ID}/locations/{LOCATION}`. |
| `params.keyHandleId` | `string` | No | Optional. Id of the KeyHandle. Must be unique to the resource project and location. If not provided by the caller, a new UUID is used. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.keyHandles.get()`

Returns the KeyHandle.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the KeyHandle resource, e.g. `projects/{PROJECT_ID}/locations/{LOCATION}/keyHandles/{KEY_HANDLE_ID}`. |

#### `projects.locations.keyHandles.list()`

Lists KeyHandles.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Name of the resource project and location from which to list KeyHandles, e.g. `projects/{PROJECT_ID}/locations/{LOCATION}`. |
| `params.pageSize` | `integer` | No | Optional. Optional limit on the number of KeyHandles to include in the response. The service may return fewer than this value. Further KeyHandles can subsequently be obtained by including the ListKeyHandlesResponse.next_page_token in a subsequent request. If unspecified, at most 100 KeyHandles will be returned. |
| `params.pageToken` | `string` | No | Optional. Optional pagination token, returned earlier via ListKeyHandlesResponse.next_page_token. |
| `params.filter` | `string` | No | Optional. Filter to apply when listing KeyHandles, e.g. `resource_type_selector="{SERVICE}.googleapis.com/{TYPE}"`. |

### `projects.locations.ekmConnections`

#### `projects.locations.ekmConnections.list()`

Lists EkmConnections.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the location associated with the EkmConnections to list, in the format `projects/*/locations/*`. |
| `params.pageSize` | `integer` | No | Optional. Optional limit on the number of EkmConnections to include in the response. Further EkmConnections can subsequently be obtained by including the ListEkmConnectionsResponse.next_page_token in a subsequent request. If unspecified, the server will pick an appropriate default. |
| `params.pageToken` | `string` | No | Optional. Optional pagination token, returned earlier via ListEkmConnectionsResponse.next_page_token. |
| `params.filter` | `string` | No | Optional. Only include resources that match the filter in the response. For more information, see [Sorting and filtering list results](https://cloud.google.com/kms/docs/sorting-and-filtering). |
| `params.orderBy` | `string` | No | Optional. Specify how the results should be sorted. If not specified, the results will be sorted in the default order. For more information, see [Sorting and filtering list results](https://cloud.google.com/kms/docs/sorting-and-filtering). |

#### `projects.locations.ekmConnections.get()`

Returns metadata for a given EkmConnection.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the EkmConnection to get. |

#### `projects.locations.ekmConnections.create()`

Creates a new EkmConnection in a given Project and Location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the location associated with the EkmConnection, in the format `projects/*/locations/*`. |
| `params.ekmConnectionId` | `string` | No | Required. It must be unique within a location and match the regular expression `[a-zA-Z0-9_-]{1,63}`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.ekmConnections.patch()`

Updates an EkmConnection's metadata.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. The resource name for the EkmConnection in the format `projects/*/locations/*/ekmConnections/*`. |
| `params.updateMask` | `string` | No | Required. List of fields to be updated in this request. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.ekmConnections.verifyConnectivity()`

Verifies that Cloud KMS can successfully connect to the external key manager specified by an EkmConnection. If there is an error connecting to the EKM, this method returns a FAILED_PRECONDITION status containing structured information as described at https://cloud.google.com/kms/docs/reference/ekm_errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the EkmConnection to verify. |

#### `projects.locations.ekmConnections.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.ekmConnections.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). |

#### `projects.locations.ekmConnections.testIamPermissions()`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.keyRings`

#### `projects.locations.keyRings.list()`

Lists KeyRings.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the location associated with the KeyRings, in the format `projects/*/locations/*`. |
| `params.pageSize` | `integer` | No | Optional. Optional limit on the number of KeyRings to include in the response. Further KeyRings can subsequently be obtained by including the ListKeyRingsResponse.next_page_token in a subsequent request. If unspecified, the server will pick an appropriate default. |
| `params.pageToken` | `string` | No | Optional. Optional pagination token, returned earlier via ListKeyRingsResponse.next_page_token. |
| `params.filter` | `string` | No | Optional. Only include resources that match the filter in the response. For more information, see [Sorting and filtering list results](https://cloud.google.com/kms/docs/sorting-and-filtering). |
| `params.orderBy` | `string` | No | Optional. Specify how the results should be sorted. If not specified, the results will be sorted in the default order. For more information, see [Sorting and filtering list results](https://cloud.google.com/kms/docs/sorting-and-filtering). |

#### `projects.locations.keyRings.get()`

Returns metadata for a given KeyRing.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the KeyRing to get. |

#### `projects.locations.keyRings.create()`

Create a new KeyRing in a given Project and Location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the location associated with the KeyRings, in the format `projects/*/locations/*`. |
| `params.keyRingId` | `string` | No | Required. It must be unique within a location and match the regular expression `[a-zA-Z0-9_-]{1,63}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.keyRings.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.keyRings.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). |

#### `projects.locations.keyRings.testIamPermissions()`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.keyRings.cryptoKeys`

#### `projects.locations.keyRings.cryptoKeys.list()`

Lists CryptoKeys.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the KeyRing to list, in the format `projects/*/locations/*/keyRings/*`. |
| `params.pageSize` | `integer` | No | Optional. Optional limit on the number of CryptoKeys to include in the response. Further CryptoKeys can subsequently be obtained by including the ListCryptoKeysResponse.next_page_token in a subsequent request. If unspecified, the server will pick an appropriate default. |
| `params.pageToken` | `string` | No | Optional. Optional pagination token, returned earlier via ListCryptoKeysResponse.next_page_token. |
| `params.versionView` | `string` | No | The fields of the primary version to include in the response. |
| `params.filter` | `string` | No | Optional. Only include resources that match the filter in the response. For more information, see [Sorting and filtering list results](https://cloud.google.com/kms/docs/sorting-and-filtering). |
| `params.orderBy` | `string` | No | Optional. Specify how the results should be sorted. If not specified, the results will be sorted in the default order. For more information, see [Sorting and filtering list results](https://cloud.google.com/kms/docs/sorting-and-filtering). |

#### `projects.locations.keyRings.cryptoKeys.get()`

Returns metadata for a given CryptoKey, as well as its primary CryptoKeyVersion.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the CryptoKey to get. |

#### `projects.locations.keyRings.cryptoKeys.create()`

Create a new CryptoKey within a KeyRing. CryptoKey.purpose and CryptoKey.version_template.algorithm are required.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the KeyRing associated with the CryptoKeys. |
| `params.cryptoKeyId` | `string` | No | Required. It must be unique within a KeyRing and match the regular expression `[a-zA-Z0-9_-]{1,63}` |
| `params.skipInitialVersionCreation` | `boolean` | No | If set to true, the request will create a CryptoKey without any CryptoKeyVersions. You must manually call CreateCryptoKeyVersion or ImportCryptoKeyVersion before you can use this CryptoKey. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.keyRings.cryptoKeys.patch()`

Update a CryptoKey.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. The resource name for this CryptoKey in the format `projects/*/locations/*/keyRings/*/cryptoKeys/*`. |
| `params.updateMask` | `string` | No | Required. List of fields to be updated in this request. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.keyRings.cryptoKeys.updatePrimaryVersion()`

Update the version of a CryptoKey that will be used in Encrypt. Returns an error if called on a key whose purpose is not ENCRYPT_DECRYPT.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the CryptoKey to update. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.keyRings.cryptoKeys.encrypt()`

Encrypts data, so that it can only be recovered by a call to Decrypt. The CryptoKey.purpose must be ENCRYPT_DECRYPT.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the CryptoKey or CryptoKeyVersion to use for encryption. If a CryptoKey is specified, the server will use its primary version. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.keyRings.cryptoKeys.decrypt()`

Decrypts data that was protected by Encrypt. The CryptoKey.purpose must be ENCRYPT_DECRYPT.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the CryptoKey to use for decryption. The server will choose the appropriate version. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.keyRings.cryptoKeys.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.keyRings.cryptoKeys.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). |

#### `projects.locations.keyRings.cryptoKeys.testIamPermissions()`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.keyRings.cryptoKeys.cryptoKeyVersions`

#### `projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.list()`

Lists CryptoKeyVersions.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the CryptoKey to list, in the format `projects/*/locations/*/keyRings/*/cryptoKeys/*`. |
| `params.pageSize` | `integer` | No | Optional. Optional limit on the number of CryptoKeyVersions to include in the response. Further CryptoKeyVersions can subsequently be obtained by including the ListCryptoKeyVersionsResponse.next_page_token in a subsequent request. If unspecified, the server will pick an appropriate default. |
| `params.pageToken` | `string` | No | Optional. Optional pagination token, returned earlier via ListCryptoKeyVersionsResponse.next_page_token. |
| `params.view` | `string` | No | The fields to include in the response. |
| `params.filter` | `string` | No | Optional. Only include resources that match the filter in the response. For more information, see [Sorting and filtering list results](https://cloud.google.com/kms/docs/sorting-and-filtering). |
| `params.orderBy` | `string` | No | Optional. Specify how the results should be sorted. If not specified, the results will be sorted in the default order. For more information, see [Sorting and filtering list results](https://cloud.google.com/kms/docs/sorting-and-filtering). |

#### `projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.get()`

Returns metadata for a given CryptoKeyVersion.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the CryptoKeyVersion to get. |

#### `projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.getPublicKey()`

Returns the public key for the given CryptoKeyVersion. The CryptoKey.purpose must be ASYMMETRIC_SIGN or ASYMMETRIC_DECRYPT.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the CryptoKeyVersion public key to get. |
| `params.publicKeyFormat` | `string` | No | Optional. The PublicKey format specified by the user. This field is required for PQC algorithms. If specified, the public key will be exported through the public_key field in the requested format. Otherwise, the pem field will be populated for non-PQC algorithms, and an error will be returned for PQC algorithms. |

#### `projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.create()`

Create a new CryptoKeyVersion in a CryptoKey. The server will assign the next sequential id. If unset, state will be set to ENABLED.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the CryptoKey associated with the CryptoKeyVersions. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.import()`

Import wrapped key material into a CryptoKeyVersion. All requests must specify a CryptoKey. If a CryptoKeyVersion is additionally specified in the request, key material will be reimported into that version. Otherwise, a new version will be created, and will be assigned the next sequential id within the CryptoKey.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the CryptoKey to be imported into. The create permission is only required on this key when creating a new CryptoKeyVersion. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.patch()`

Update a CryptoKeyVersion's metadata. state may be changed between ENABLED and DISABLED using this method. See DestroyCryptoKeyVersion and RestoreCryptoKeyVersion to move between other states.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. The resource name for this CryptoKeyVersion in the format `projects/*/locations/*/keyRings/*/cryptoKeys/*/cryptoKeyVersions/*`. |
| `params.updateMask` | `string` | No | Required. List of fields to be updated in this request. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.destroy()`

Schedule a CryptoKeyVersion for destruction. Upon calling this method, CryptoKeyVersion.state will be set to DESTROY_SCHEDULED, and destroy_time will be set to the time destroy_scheduled_duration in the future. At that time, the state will automatically change to DESTROYED, and the key material will be irrevocably destroyed. Before the destroy_time is reached, RestoreCryptoKeyVersion may be called to reverse the process.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the CryptoKeyVersion to destroy. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.restore()`

Restore a CryptoKeyVersion in the DESTROY_SCHEDULED state. Upon restoration of the CryptoKeyVersion, state will be set to DISABLED, and destroy_time will be cleared.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the CryptoKeyVersion to restore. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.rawEncrypt()`

Encrypts data using portable cryptographic primitives. Most users should choose Encrypt and Decrypt rather than their raw counterparts. The CryptoKey.purpose must be RAW_ENCRYPT_DECRYPT.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the CryptoKeyVersion to use for encryption. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.rawDecrypt()`

Decrypts data that was originally encrypted using a raw cryptographic mechanism. The CryptoKey.purpose must be RAW_ENCRYPT_DECRYPT.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the CryptoKeyVersion to use for decryption. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.asymmetricSign()`

Signs data using a CryptoKeyVersion with CryptoKey.purpose ASYMMETRIC_SIGN, producing a signature that can be verified with the public key retrieved from GetPublicKey.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the CryptoKeyVersion to use for signing. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.asymmetricDecrypt()`

Decrypts data that was encrypted with a public key retrieved from GetPublicKey corresponding to a CryptoKeyVersion with CryptoKey.purpose ASYMMETRIC_DECRYPT.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the CryptoKeyVersion to use for decryption. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.macSign()`

Signs data using a CryptoKeyVersion with CryptoKey.purpose MAC, producing a tag that can be verified by another source with the same key.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the CryptoKeyVersion to use for signing. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.keyRings.cryptoKeys.cryptoKeyVersions.macVerify()`

Verifies MAC tag using a CryptoKeyVersion with CryptoKey.purpose MAC, and returns a response that indicates whether or not the verification was successful.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the CryptoKeyVersion to use for verification. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.keyRings.importJobs`

#### `projects.locations.keyRings.importJobs.list()`

Lists ImportJobs.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the KeyRing to list, in the format `projects/*/locations/*/keyRings/*`. |
| `params.pageSize` | `integer` | No | Optional. Optional limit on the number of ImportJobs to include in the response. Further ImportJobs can subsequently be obtained by including the ListImportJobsResponse.next_page_token in a subsequent request. If unspecified, the server will pick an appropriate default. |
| `params.pageToken` | `string` | No | Optional. Optional pagination token, returned earlier via ListImportJobsResponse.next_page_token. |
| `params.filter` | `string` | No | Optional. Only include resources that match the filter in the response. For more information, see [Sorting and filtering list results](https://cloud.google.com/kms/docs/sorting-and-filtering). |
| `params.orderBy` | `string` | No | Optional. Specify how the results should be sorted. If not specified, the results will be sorted in the default order. For more information, see [Sorting and filtering list results](https://cloud.google.com/kms/docs/sorting-and-filtering). |

#### `projects.locations.keyRings.importJobs.get()`

Returns metadata for a given ImportJob.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the ImportJob to get. |

#### `projects.locations.keyRings.importJobs.create()`

Create a new ImportJob within a KeyRing. ImportJob.import_method is required.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the KeyRing associated with the ImportJobs. |
| `params.importJobId` | `string` | No | Required. It must be unique within a KeyRing and match the regular expression `[a-zA-Z0-9_-]{1,63}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.keyRings.importJobs.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.keyRings.importJobs.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). |

#### `projects.locations.keyRings.importJobs.testIamPermissions()`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.ekmConfig`

#### `projects.locations.ekmConfig.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.ekmConfig.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). |

#### `projects.locations.ekmConfig.testIamPermissions()`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

### `organizations`

#### `organizations.getKajPolicyConfig()`

Gets the KeyAccessJustificationsPolicyConfig for a given organization/folder/projects.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the KeyAccessJustificationsPolicyConfig to get. |

#### `organizations.updateKajPolicyConfig()`

Updates the KeyAccessJustificationsPolicyConfig for a given organization/folder/projects.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name for this KeyAccessJustificationsPolicyConfig in the format of "{organizations|folders|projects}/*/kajPolicyConfig". |
| `params.updateMask` | `string` | No | Optional. The list of fields to update. |
| `params.resource` | `object` | Yes | The request body. |